import {
  randomBytes,
  createCipheriv,
  createDecipheriv,
  timingSafeEqual,
  createHash,
} from "node:crypto";
import { get, put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
const base = "https://donghaeng-company-murex.vercel.app/api/kakao-learning";
const cookie = "__Host-learning-oauth";
const vault = "learning/account";
const opts = { access: "private", addRandomSuffix: false } as const;
const headers = {
  "Cache-Control": "private, no-store",
  "Referrer-Policy": "no-referrer",
  "X-Robots-Tag": "noindex, nofollow",
  "X-Content-Type-Options": "nosniff",
};
type Route = { params: Promise<{ action: string }> };
type App = { client_id: string; client_secret: string };
type Account = App & { refresh_token: string; owner: string };
type Lesson = {
  date: string;
  nonce: string;
  preview: string;
  items: {
    question: string;
    answer: string;
    example: string;
    source: string;
  }[];
};
type Delivery = { state: "sending" | "sent" | "retry"; page: string };

function eq(a: string, b: string) {
  const hash = (s: string) => createHash("sha256").update(s).digest();
  return Boolean(a && b) && timingSafeEqual(hash(a), hash(b));
}
function seal(value: unknown) {
  const iv = randomBytes(12);
  const c = createCipheriv(
    "aes-256-gcm",
    Buffer.from(process.env.KAKAO_LEARNING_SEAL!, "hex"),
    iv,
  );
  const data = Buffer.concat([
    c.update(JSON.stringify(value), "utf8"),
    c.final(),
  ]);
  return Buffer.concat([iv, c.getAuthTag(), data]).toString("base64url");
}
function unseal<T>(value: string): T {
  const bytes = Buffer.from(value, "base64url");
  const d = createDecipheriv(
    "aes-256-gcm",
    Buffer.from(process.env.KAKAO_LEARNING_SEAL!, "hex"),
    bytes.subarray(0, 12),
  );
  d.setAuthTag(bytes.subarray(12, 28));
  return JSON.parse(
    Buffer.concat([d.update(bytes.subarray(28)), d.final()]).toString(),
  );
}
async function read<T>(path: string) {
  const result = await get(path, { access: "private", useCache: false });
  if (!result || result.statusCode !== 200) return null;
  return {
    data: JSON.parse(await new Response(result.stream).text()) as T,
    etag: result.blob.etag,
  };
}
function write(path: string, value: unknown, etag?: string) {
  return put(path, JSON.stringify(value), {
    ...opts,
    ...(etag ? { ifMatch: etag } : {}),
    contentType: "application/json",
  });
}
function esc(s: string) {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
}
function page(title: string, body: string, status = 200) {
  const html =
    '<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' +
    esc(title) +
    "</title><style>body{max-width:44rem;margin:3rem auto;padding:0 1.25rem;color:#22332f;font:17px/1.7 system-ui}h1{font-size:1.65rem}h2{font-size:1.15rem}article{border-top:1px solid #ddd;margin-top:1.8rem}label,input{display:block}input{margin:0 0 1rem;width:95%;padding:.65rem}button{padding:.7rem 1.3rem}a{color:#006955}</style><main><h1>" +
    esc(title) +
    "</h1>" +
    body +
    "</main></html>";
  return new NextResponse(html, {
    status,
    headers: {
      ...headers,
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy":
        "default-src 'none'; style-src 'unsafe-inline'; form-action 'self' https://kauth.kakao.com https://accounts.kakao.com; frame-ancestors 'none'",
    },
  });
}
function status(message: string, code = 200) {
  return NextResponse.json({ status: message }, { status: code, headers });
}
async function tokens(params: Record<string, string>) {
  const r = await fetch("https://kauth.kakao.com/oauth/token", {
    method: "POST",
    body: new URLSearchParams(params),
    cache: "no-store",
  });
  if (!r.ok) throw new Error("카카오 인증 실패");
  return (await r.json()) as { access_token: string; refresh_token?: string };
}
export async function POST(req: NextRequest, route: Route) {
  if (
    (await route.params).action !== "setup" ||
    req.headers.get("origin") !== new URL(base).origin
  )
    return status("forbidden", 403);
  const f = await req.formData();
  if (!eq(String(f.get("pin") ?? ""), process.env.KAKAO_LEARNING_SETUP ?? ""))
    return page(
      "연결 코드 확인",
      "이 대화에서 받은 연결 코드를 확인해 주세요.",
      403,
    );
  const client_id = String(f.get("key") ?? "").trim(),
    client_secret = String(f.get("secret") ?? "").trim();
  if (!/^[a-z0-9]{32}$/i.test(client_id) || client_secret.length > 200)
    return page(
      "앱 키 확인",
      "REST API 키와 클라이언트 시크릿을 확인해 주세요.",
      400,
    );
  const state = randomBytes(24).toString("hex");
  const url = new URL("https://kauth.kakao.com/oauth/authorize");
  url.search = new URLSearchParams({
    response_type: "code",
    client_id,
    redirect_uri: base + "/callback",
    scope: "talk_message",
    state,
  }).toString();
  const res = NextResponse.redirect(url, 303);
  res.headers.set("Cache-Control", "no-store");
  res.cookies.set(
    cookie,
    seal({ client_id, client_secret, state, expires: Date.now() + 600000 }),
    { secure: true, httpOnly: true, sameSite: "lax", path: "/", maxAge: 600 },
  );
  return res;
}
async function callback(req: NextRequest) {
  const saved = req.cookies.get(cookie)?.value;
  if (!saved)
    return page("연결 시간 만료", "연결 화면에서 다시 시작해 주세요.", 400);
  const a = unseal<App & { state: string; expires: number }>(saved);
  const query = req.nextUrl.searchParams;
  if (
    a.expires < Date.now() ||
    !eq(query.get("state") ?? "", a.state) ||
    !query.get("code")
  )
    return page(
      "카카오 동의 확인",
      "연결 화면에서 메시지 전송에 동의해 주세요.",
      400,
    );
  const app = { client_id: a.client_id, client_secret: a.client_secret };
  const t = await tokens({
    ...app,
    grant_type: "authorization_code",
    code: query.get("code")!,
    redirect_uri: base + "/callback",
  });
  const auth = { Authorization: "Bearer " + t.access_token };
  const profile = await fetch("https://kapi.kakao.com/v2/user/me", {
    headers: auth,
    cache: "no-store",
  });
  const grants = await fetch(
    "https://kapi.kakao.com/v2/user/scopes?scopes=%5B%22talk_message%22%5D",
    { headers: auth, cache: "no-store" },
  );
  if (!profile.ok || !grants.ok || !t.refresh_token)
    return page(
      "계정 확인 실패",
      "앱 설정과 메시지 전송 동의를 확인해 주세요.",
      400,
    );
  const owner = String((await profile.json()).id);
  if (
    !(await grants.json()).scopes?.some(
      (s: { id: string; agreed: boolean }) =>
        s.id === "talk_message" && s.agreed,
    )
  )
    return page(
      "메시지 전송 동의 필요",
      "연결 화면에서 다시 동의해 주세요.",
      400,
    );
  const prior = await read<string>(vault);
  if (prior && unseal<Account>(prior.data).owner !== owner)
    return status("different account", 403);
  await write(
    vault,
    seal({ ...app, owner, refresh_token: t.refresh_token }),
    prior?.etag,
  );
  const res = page(
    "카카오톡 연결 완료",
    "<p>매일 실무 10문답이 준비되면 나와의 채팅으로 보내드립니다.</p>",
  );
  res.cookies.delete(cookie);
  return res;
}
function valid(v: Lesson, day: string) {
  return (
    v?.date === day &&
    typeof v.preview === "string" &&
    /^[a-f0-9]{32,64}$/.test(v.nonce) &&
    Array.isArray(v.items) &&
    v.items.length === 10 &&
    v.items.every(
      (i) =>
        i &&
        [i.question, i.answer, i.example, i.source].every(
          (s) => typeof s === "string" && s.trim(),
        ) &&
        /^https:\/\//.test(i.source),
    )
  );
}
async function deliver(req: NextRequest) {
  const nonce = req.nextUrl.searchParams.get("key") ?? "";
  if (!/^[a-f0-9]{32,64}$/.test(nonce)) return status("forbidden", 403);
  const r = await fetch(process.env.KAKAO_LEARNING_EDGE!, {
    cache: "no-store",
  });
  if (!r.ok) return status("lesson unavailable", 503);
  const lesson: Lesson = await r.json();
  const now = new Date(Date.now() + 9 * 3600000).toISOString();
  const day = now.slice(0, 10);
  if (
    !valid(lesson, day) ||
    !eq(nonce, lesson.nonce) ||
    now.slice(11, 13) < "10"
  )
    return status("lesson not ready", 409);
  const stored = await read<string>(vault);
  if (!stored) return status("kakao connection required", 409);
  const path = "learning/delivery/" + day;
  const previous = await read<Delivery>(path);
  if (previous && previous.data.state !== "retry")
    return status(
      previous.data.state,
      previous.data.state === "sent" ? 200 : 409,
    );
  const id = previous?.data.page ?? randomBytes(24).toString("hex");
  const claim = await write(
    path,
    { state: "sending", page: id },
    previous?.etag,
  );
  let submitted = false;
  try {
    if (!previous || !(await read("learning/pages/" + id)))
      await write("learning/pages/" + id, { date: day, items: lesson.items });
    const account = unseal<Account>(stored.data);
    const t = await tokens({
      grant_type: "refresh_token",
      client_id: account.client_id,
      client_secret: account.client_secret,
      refresh_token: account.refresh_token,
    });
    if (t.refresh_token)
      await write(
        vault,
        seal({ ...account, refresh_token: t.refresh_token }),
        stored.etag,
      );
    const url = base + "/read?id=" + id;
    const template = {
      object_type: "text",
      text: Array.from(day + " 요식업 마케팅 실무 10문답\n" + lesson.preview)
        .slice(0, 195)
        .join(""),
      link: { web_url: url, mobile_web_url: url },
      button_title: "10문답 전체 보기",
    };
    submitted = true;
    const response = await fetch(
      "https://kapi.kakao.com/v2/api/talk/memo/default/send",
      {
        method: "POST",
        headers: { Authorization: "Bearer " + t.access_token },
        body: new URLSearchParams({
          template_object: JSON.stringify(template),
        }),
      },
    );
    if (!response.ok) {
      if (response.status < 500) submitted = false;
      throw new Error("send failed");
    }
    if ((await response.json()).result_code !== 0)
      throw new Error("unexpected response");
    await write(path, { state: "sent", page: id }, claim.etag);
    return status("sent");
  } catch {
    if (!submitted) await write(path, { state: "retry", page: id }, claim.etag);
    return status(submitted ? "delivery unconfirmed" : "retry", 503);
  }
}
export async function GET(req: NextRequest, route: Route) {
  try {
    switch ((await route.params).action) {
      case "setup": {
        const form = page(
          "카카오톡 학습 문답 연결",
          '<form method="post"><label>개인 연결 코드<input name="pin" type="password" required></label><label>카카오 앱 REST API 키<input name="key" required></label><label>클라이언트 시크릿 (앱에서 사용 중이면 입력)<input name="secret" type="password"></label><button>카카오로 로그인</button></form>',
        );
        // Send Origin on same-site form submissions while keeping external navigation private.
        form.headers.set("Referrer-Policy", "same-origin");
        return form;
      }
      case "callback":
        return await callback(req);
      case "send":
        return await deliver(req);
      case "read": {
        const id = req.nextUrl.searchParams.get("id") ?? "";
        if (!/^[a-f0-9]{48}$/.test(id)) return status("not found", 404);
        const item = await read<Pick<Lesson, "date" | "items">>(
          "learning/pages/" + id,
        );
        if (!item) return status("not found", 404);
        return page(
          item.data.date + " 요식업 마케팅 실무 10문답",
          item.data.items
            .map(
              (q, i) =>
                "<article><h2>" +
                (i + 1) +
                ". " +
                esc(q.question) +
                "</h2><p>" +
                esc(q.answer) +
                "</p><p><strong>현장 적용</strong> " +
                esc(q.example) +
                '</p><a rel="noreferrer" href="' +
                esc(q.source) +
                '">공식 자료 보기</a></article>',
            )
            .join(""),
        );
      }
      default:
        return status("not found", 404);
    }
  } catch {
    return page(
      "요청을 완료하지 못했습니다",
      "앱 키와 등록한 리다이렉트 URI를 확인해 주세요. 발송 중이었다면 나와의 채팅에서 수신 여부를 확인해 주세요.",
      503,
    );
  }
}
