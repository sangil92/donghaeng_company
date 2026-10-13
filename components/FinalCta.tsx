import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <>
      <section className="contact-section section" id="contact" aria-labelledby="contact-links-heading">
        <div className="shell contact-shell">
          <Reveal className="contact-heading">
            <p className="eyebrow">STAY CONNECTED</p>
            <h2 id="contact-links-heading">편한 채널로<br /><span>문의해주세요.</span></h2>
          </Reveal>

          <div className="contact-link-list">
            <a className="contact-link-card" href="https://open.kakao.com/o/sBp30eSi" target="_blank" rel="noreferrer">
              <span className="contact-link-icon kakao-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M8.2 14.8 5.8 17.2a2.2 2.2 0 0 1-3.1-3.1l5.1-5.1a2.2 2.2 0 0 1 3.1 0" />
                  <path d="m15.8 9.2 2.4-2.4a2.2 2.2 0 0 1 3.1 3.1l-5.1 5.1a2.2 2.2 0 0 1-3.1 0" />
                  <path d="m8.5 15.5 7-7" />
                </svg>
              </span>
              <span className="contact-link-copy"><strong>오픈카카오 문의</strong><small>동행컴퍼니 오픈채팅</small></span>
              <span className="contact-link-arrow" aria-hidden="true">›</span>
            </a>

            <a className="contact-link-card" href="https://instagram.com/jeonju.wwtg" target="_blank" rel="noreferrer">
              <span className="contact-link-icon instagram-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" className="instagram-dot" />
                </svg>
              </span>
              <span className="contact-link-copy"><strong>인스타그램</strong><small>instagram.com/jeonju.wwtg</small></span>
              <span className="contact-link-arrow" aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">DONGHAENG COMPANY</p>
            <h2>좋은 매장이<br /><span>더 잘 보일 수 있도록.</span></h2>
            <p>발견에서 방문까지, 동행하겠습니다.</p>
            <a className="button light-button" href={site.consultationHref} target="_blank" rel="noreferrer">상담하기 <span>→</span></a>
            <small className="contact-note">카카오톡 오픈채팅으로 상담을 시작합니다.</small>
          </Reveal>
        </div>
      </section>
    </>
  );
}
