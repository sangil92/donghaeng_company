import Image from "next/image";

export function PhoneMockup() {
  return (
    <div className="phone-stage" aria-label="전주어디갈래 인스타그램 계정과 동행컴퍼니 콘텐츠 운영 예시">
      <div className="phone-stage-top">
        <span>LOCAL CONTENT NETWORK</span>
        <b>● LIVE DISCOVERY</b>
      </div>

      <div className="phone-float-card phone-float-left">
        <small>OWNED MEDIA</small>
        <strong>100K+</strong>
        <span>지역 콘텐츠 도달</span>
      </div>

      <div className="phone-float-card phone-float-right">
        <small>CREATOR NETWORK</small>
        <strong>LOCAL</strong>
        <span>전북 크리에이터 연결</span>
      </div>

      <div className="phone-shell">
        <div className="phone-speaker" />
        <div className="phone-screen phone-screen-instagram">
          <Image
            className="phone-account-image"
            src="/instagram-jeonju-wwtg.webp"
            alt="전주어디갈래 인스타그램 계정 화면"
            fill
            priority
            sizes="(max-width: 640px) 220px, 286px"
          />
        </div>
      </div>

      <div className="phone-float-note"><span>동행컴퍼니의 역할</span><b>사장님이 매장에 집중하는 동안<br />온라인 운영을 계속 챙깁니다.</b></div>
      <div className="phone-discovery-cue"><small>릴스를 본 고객</small><strong>“여기 어디지?”</strong><span>네이버에서 매장 검색 →</span></div>
      <div className="phone-signal">Instagram <b>→</b> Naver <b>→</b> Visit</div>
    </div>
  );
}
