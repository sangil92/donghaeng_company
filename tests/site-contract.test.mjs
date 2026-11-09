import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('approved brand flow and hero copy are implemented', () => {
  const page = read('app/page.tsx');
  for (const phrase of ['사장님이 매장에 집중하는 동안','온라인은 동행이 챙깁니다','리뷰답글','광고 모니터링']) assert.ok(page.includes(phrase));
});

test('approved pricing contract is preserved', () => {
  const content = read('content/site.ts');
  for (const term of ['월 30만원','VAT 별도','최초 3개월 계약','이후 1개월 단위 연장','지인 업체 소개 후 계약 체결 시 1개월 무료 대행','11만원']) assert.ok(content.includes(term));
  const page = read('app/page.tsx');
  for (const field of ['pricing.contract','pricing.renewal','pricing.referralNote']) assert.ok(page.includes(field));
});

test('story arc keeps core sections and removes redundant detours', () => {
  const page = read('app/page.tsx');
  const ids = ['problem','operating','method','price'];
  const positions = ids.map(id => page.indexOf('id="' + id + '"'));
  assert.ok(positions.every((pos,i) => pos >= 0 && (!i || pos > positions[i-1])));
  for (const id of ids) assert.ok(page.includes('href="#' + id + '"'));
});

test('accessibility-safe motion is present', () => {
  const css=read('app/globals.css');
  const polish=read('app/polish.css');
  const reveal=read('components/Reveal.tsx');
  assert.ok(css.length > 0);
  assert.match(read('app/layout.tsx'),/polish[.]css/);
  assert.match(polish,/prefers-reduced-motion/);
  assert.match(reveal,/IntersectionObserver/);
});

test('owner proof uses real review images and intersection-aware reveal', () => {
  const proof=read('components/ProofSection.tsx');
  assert.match(proof,/REAL OWNER REVIEWS/);
  assert.match(proof,/review-full-house\.webp/);
  assert.match(proof,/review-naver-place\.webp/);
  assert.match(proof,/실제 카카오톡 후기/);
  assert.match(proof,/Reveal/);
});

test('hero visual communicates creator spread and search intent', () => {
  const hero=read('components/Hero.tsx');
  const polish=read('app/polish.css');
  const layout=read('app/layout.tsx');
  assert.match(hero,/creator-bubbles/);
  assert.match(hero,/search-cue/);
  assert.match(hero,/여기 어디지\?/);
  assert.match(polish,/\.creator-bubbles/);
  assert.match(polish,/\.search-cue/);
  assert.match(layout,/\.\/polish\.css/);
});

test('opengraph title container uses an explicit flex layout for Satori', () => {
  const og=read('app/opengraph-image.tsx');
  assert.match(og,/fontSize:72[^}]*display:"flex"[^}]*flexDirection:"column"/);
});

test('typography hierarchy emphasizes headings and cards while keeping body copy moderate', () => {
  const polish=read('app/polish.css');
  assert.match(polish,/--weight-body:\s*550/);
  assert.match(polish,/--weight-card:\s*850/);
  assert.match(polish,/--weight-section:\s*900/);
  assert.match(polish,/\.section-heading h2[\s\S]*?font-weight:\s*var\(--weight-section\)/);
  assert.match(polish,/\.flow-card h3[\s\S]*?font-weight:\s*var\(--weight-card\)/);
  assert.match(polish,/\.section-copy[\s\S]*?font-weight:\s*var\(--weight-body\)/);
});

// Keep every execution environment on the same Node major.
test('Node runtime is pinned to 24 across local, CI, and deployment metadata', () => {
  const pkg = JSON.parse(read('package.json'));
  const nvmrc = read('.nvmrc').trim();
  const workflow = read('.github/workflows/verify.yml');
  assert.equal(pkg.engines.node, '24.x');
  assert.equal(nvmrc, '24');
  assert.match(workflow,/node-version:\s*24/);
});

test('desktop services use a uniform four-column grid without featured spans', () => {
  const polish=read('app/polish.css');
  assert.match(polish,/@media\s*\(min-width:\s*1025px\)[\s\S]*?\.services-section \.service-grid\s*\{[\s\S]*?grid-template-columns:\s*repeat\(4,minmax\(0,1fr\)\)/);
  assert.match(polish,/@media\s*\(min-width:\s*1025px\)[\s\S]*?\.services-section \.service-card[\s\S]*?grid-column:\s*auto/);
  assert.match(polish,/@media\s*\(min-width:\s*1025px\)[\s\S]*?\.services-section \.service-card[\s\S]*?display:\s*flex[\s\S]*?flex-direction:\s*column/);
  assert.match(polish,/@media\s*\(min-width:\s*1025px\)[\s\S]*?\.services-section \.service-card ul[\s\S]*?margin-top:\s*auto/);
});

test('free diagnosis uses nine questions with back navigation', () => {
  const diagnosis=read('components/StoreDiagnosis.tsx');
  assert.match(diagnosis,/const questions = \[/);
  assert.equal((diagnosis.match(/\["/g) || []).length >= 9, true);
  assert.match(diagnosis,/9개 질문/);
  assert.match(diagnosis,/이전 질문/);
  assert.match(diagnosis,/goPrevious/);
});


test('contact cards use the approved KakaoTalk channel', () => {
  const cta = read('components/FinalCta.tsx');
  assert.ok(cta.includes('https://open.kakao.com/o/sBp30eSi'));
  assert.ok(cta.includes('contact-link-card'));
  assert.ok(!cta.includes('https://instagram.com'));
});


test('all consultation CTAs use the approved open Kakao link', () => {
  const content=read('content/site.ts');
  assert.doesNotMatch(content,/sOBUAbSi/);
  assert.equal((content.match(/https:\/\/open\.kakao\.com\/o\/sBp30eSi/g) || []).length >= 2,true);
});


test('pricing includes the Jeonju-everywhere package benefit', () => {
  const content = read('content/site.ts');
  assert.ok(content.includes('전주어디갈래 인스타 사진·릴스 패키지 항시 30% 할인'));
  assert.ok(content.includes('전북 지역 인플루언서 협업 문의·연결 무료 진행 (협찬비 등 실비 별도)'));
});


test('phone mockup shows the content example without an external account link', () => {
  const reel = read('components/ReelPhone.tsx');
  assert.ok(reel.includes('동행컴퍼니 콘텐츠 운영 예시'));
  assert.ok(reel.includes('phone-link'));
  assert.ok(!reel.includes('site.instagramHref'));
});
