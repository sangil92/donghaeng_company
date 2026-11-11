import { site, pricing } from "@/content/site";
import { ProofSection } from "@/components/ProofSection";
import { PhoneMockup } from "@/components/PhoneMockup";

const operatingAreas = [
  {
    number: "01",
    title: "네이버 검색광고 모니터링",
    summary: "광고를 켜두는 것에서 끝내지 않습니다",
    body: "매일 광고 노출·클릭·CPC·소진 속도와 검색어 흐름을 확인해 광고가 매장 상황에 맞게 운영되고 있는지 점검합니다.",
    items: ["네이버 검색광고 일일 모니터링", "키워드·제외키워드 점검", "소재·예산 상태 확인"],
  },
  {
    number: "02",
    title: "리뷰답글 관리",
    summary: "쌓이는 리뷰에 답하고 고객 반응을 놓치지 않게",
    body: "새로 등록되는 리뷰를 확인하고 매장의 말투와 상황에 맞춰 답글을 작성합니다. 반복되는 칭찬과 불편 사항도 함께 공유합니다.",
    items: ["리뷰답글 작성·관리", "리뷰 내용 모니터링", "칭찬·불편 사항 확인"],
  },
  {
    number: "03",
    title: "네이버 플레이스 SEO 세팅",
    summary: "검색될 수 있는 기본 구조부터 정리합니다",
    body: "네이버 플레이스의 대표 키워드와 조합 키워드, 업체 설명, 메뉴와 사진 등 고객이 확인하는 기본 정보를 검색 관점에서 세팅하고 점검합니다.",
    items: ["플레이스 SEO 기본 세팅", "대표·조합 키워드 점검", "메뉴·사진·정보 노출 상태 확인"],
  },
  {
    number: "04",
    title: "당근·Threads 콘텐츠 운영",
    summary: "추가 광고비 없이 지역에 매일 알립니다",
    body: "사장님이 공유해주신 사진과 네이버 플레이스에 등록된 사진을 활용해 당근 게시물과 Threads 콘텐츠를 매일 작성합니다. 광고비를 추가로 집행하지 않고 지역 주민에게 매장 소식을 알리는 운영입니다.",
    items: ["당근 게시물 매일 작성", "Threads 게시물 매일 작성", "지역 주민 대상 무료 홍보 콘텐츠 운영"],
  },
] as const;

export default function Home() {
  return (
    <div id="top" className="site">
      <header className="site-header">
        <div className="container nav-row">
          <a className="brand" href="#top" aria-label="동행컴퍼니 홈"><span>동행</span><small>COMPANY</small></a>
          <nav className="desktop-nav" aria-label="주요 메뉴">
            <a href="#problem">문제부터 보기</a>
            <a href="#operating">해드리는 일</a>
            <a href="#reviews">실제 후기</a>
            <a href="#price">비용</a>
            <a className="nav-cta" href={site.consultationHref} target="_blank" rel="noreferrer">상담하기 <span>↗</span></a>
          </nav>
          <a className="mobile-nav-cta" href={site.consultationHref} target="_blank" rel="noreferrer">상담</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="kicker">DONGHAENG COMPANY · ONLINE OPERATING PARTNER</p>
              <h1>사장님이 매장에 집중하는 동안,<br /><em>온라인은 동행이 챙깁니다.</em></h1>
              <p className="hero-lead">네이버 검색광고 모니터링, 리뷰답글, SEO 세팅, 당근·Threads 게시물까지.<br className="desktop-only" /> 매장에서 시간을 내기 어려운 온라인 운영을 매일 대신 관리합니다.</p>
              <div className="hero-actions"><a className="button primary" href="#problem">내 매장 운영 빈틈 확인하기 <span>↓</span></a><a className="text-link" href="#operating">실제로 해드리는 일 <span>→</span></a></div>
              <div className="hero-trust"><span>매일 광고 확인</span><i>·</i><span>리뷰답글 관리</span><i>·</i><span>SEO 세팅</span><i>·</i><span>무료 콘텐츠 운영</span></div>
            </div>
            <PhoneMockup />
          </div>
        </section>

        <section className="problem-section" id="problem">
          <div className="container">
            <div className="section-intro split-intro"><div><p className="kicker">THE REAL PROBLEM</p><h2>마케팅을 안 해서가 아니라,<br /><em>계속 관리하기 어려워서</em><br />놓칩니다.</h2></div><div className="intro-copy"><p>사장님은 매장 운영, 직원 관리, 재료 준비, 고객 응대만으로도 하루가 빠르게 지나갑니다.</p><p><strong>온라인에서 매일 일어나는 작은 변화까지 직접 확인하기는 어렵습니다.</strong><br />동행컴퍼니는 바로 그 ‘가려운 부분’을 대신 챙깁니다.</p></div></div>
            <div className="problem-grid">
              <article><span>01 · 매장에서 밀리는 일</span><h3>리뷰답글과<br />고객 반응 확인</h3><p>답글을 달고 싶어도 바쁘고, 어떤 리뷰가 쌓이는지 매일 확인하기 어렵습니다.</p></article>
              <article><span>02 · 매일 봐야 하는 일</span><h3>검색광고와<br />노출 상태 확인</h3><p>광고를 켜둔 뒤 클릭·CPC·소진 속도를 계속 보지 못하면 조정 시기를 놓칩니다.</p></article>
              <article><span>03 · 끊기기 쉬운 일</span><h3>지역 주민에게<br />매장 소식 알리기</h3><p>당근과 Threads에 올릴 콘텐츠를 매일 준비하고 작성하는 일은 생각보다 꾸준함이 필요합니다.</p></article>
            </div>
            <div className="problem-answer"><span>동행컴퍼니가 대신하는 일</span><strong>하루 1만원으로,<br /><em>사장님이 매장에서 신경 쓰기 어려운 온라인 운영을 매일 챙깁니다.</em></strong></div>
          </div>
        </section>

        <section className="work-section" id="operating">
          <div className="container"><div className="section-intro split-intro"><div><p className="kicker">WHAT WE ACTUALLY DO</p><h2>동행컴퍼니가 매일<br /><em>해드리는 일</em></h2></div><p className="body-copy">많은 서비스를 나열하지 않습니다. 사장님이 매장에서 직접 챙기기 어려운 온라인 업무를 정해진 범위 안에서 매일 운영합니다.</p></div><div className="work-grid">{operatingAreas.map((area) => <article key={area.number} className={"work-card work-card-" + area.number}><div className="work-card-top"><span>{area.number}</span><b>{area.title}</b></div><h3>{area.summary}</h3><p>{area.body}</p><ul>{area.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></article>)}</div></div>
        </section>

        <ProofSection />

        <section className="price-section" id="price"><div className="container price-grid"><div className="section-intro"><p className="kicker">MONTHLY OPERATING SUPPORT</p><h2>하루 1만원으로,<br /><em>온라인 담당자를 두세요.</em></h2><p className="body-copy">월 30만원, 부가세 별도입니다. 사장님이 매장에서 매일 챙기기 어려운 온라인 운영 업무를 정해진 범위 안에서 꾸준히 대신합니다.</p><a className="text-link" href={site.consultationHref} target="_blank" rel="noreferrer">내 매장 상담하기 <span>↗</span></a></div><div className="price-cards"><article className="price-card featured"><div className="price-card-label">DONGHAENG OPERATING PARTNER</div><div className="price"><strong>월 30만원</strong><small>VAT 별도</small></div><p className="price-note">부가세 포함 33만원 · 하루 1만원</p><div className="price-terms"><p><strong>계약 안내</strong><span>{pricing.contract} 후, {pricing.renewal}됩니다.</span></p><p><strong>소개 혜택</strong><span>{pricing.referralNote}을 제공합니다.</span></p></div><ul><li>네이버 검색광고 매일 모니터링</li><li>리뷰답글 작성·리뷰 반응 확인</li><li>네이버 플레이스 SEO 세팅·점검</li><li>당근·Threads 게시물 매일 작성</li><li>사장님 공유 사진·플레이스 사진 활용</li></ul><a className="button primary" href={site.consultationHref} target="_blank" rel="noreferrer">운영 상담하기 <span>↗</span></a></article></div></div></section>

        <section className="closing-section"><div className="container closing-inner"><p className="kicker">DONGHAENG COMPANY</p><h2>사장님은 매장에 집중하고,<br /><em>온라인 운영은 동행에 맡기세요.</em></h2><p>특정 결과를 약속하는 대신, 매장에 필요한 운영을 꾸준히 챙기겠습니다.</p><a className="button light" href={site.consultationHref} target="_blank" rel="noreferrer">동행컴퍼니와 상담 시작하기 <span>↗</span></a></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-row"><div><a className="brand footer-brand" href="#top"><span>동행</span><small>COMPANY</small></a><p>사장님이 매장에 집중하는 동안, 온라인은 동행이 챙깁니다.</p></div><div className="footer-info"><p>{site.name} · 대표 박상일</p><p>010-7776-0198 · donghaeng.marketing@gmail.com</p></div><div className="footer-contact-note">상담은 카카오톡 오픈채팅으로 진행합니다.</div></div></footer>
    </div>
  );
}
