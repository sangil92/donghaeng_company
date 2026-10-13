import Link from "next/link";

export const metadata = {
  title: "개인정보처리방침 | 동행컴퍼니",
  description: "동행컴퍼니 개인정보처리방침",
};

export default function PrivacyPage() {
  return <main className="privacy-page">
    <div className="privacy-shell">
      <Link className="privacy-back" href="/">← 동행컴퍼니 홈페이지</Link>
      <p className="eyebrow">DONGHAENG COMPANY</p>
      <h1>개인정보처리방침</h1>
      <p className="privacy-updated">시행일: 2026년 10월 13일</p>

      <section>
        <h2>1. 개인정보의 수집</h2>
        <p>동행컴퍼니는 현재 본 홈페이지에서 이름, 연락처, 이메일 등을 직접 입력받는 상담 신청 기능을 운영하지 않습니다.</p>
      </section>

      <section>
        <h2>2. 상담 연결</h2>
        <p>상담하기 및 우리 매장 알리기 버튼을 누르면 카카오톡 오픈채팅으로 이동합니다. 카카오톡 이용 과정에서 처리되는 개인정보는 카카오의 개인정보처리방침이 적용됩니다.</p>
      </section>

      <section>
        <h2>3. 개인정보처리방침의 변경</h2>
        <p>향후 홈페이지에서 개인정보를 직접 수집하는 기능이 추가되거나 처리 내용이 변경되면, 변경된 내용을 본 페이지에 안내하겠습니다.</p>
      </section>

      <section>
        <h2>4. 개인정보 관련 문의</h2>
        <p>동행컴퍼니 대표 박상일<br />이메일: donghaeng.marketing@gmail.com<br />연락처: 010-7776-0198</p>
      </section>
    </div>
  </main>
}
