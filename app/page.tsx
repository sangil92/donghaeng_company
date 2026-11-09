import { site, pricing, entryService } from "@/content/site";
import { ClarityCheck } from "@/components/ClarityCheck";

const workAreas = [
  {
    number: "01",
    title: "발견",
    summary: "검색했을 때 먼저 보이게",
    body: "지역·메뉴 키워드와 고객 유입 경로를 확인하고, 네이버 플레이스와 검색광고의 우선순위를 정리합니다.",
    items: ["플레이스 정보·메뉴 정리", "지역 키워드 및 검색광고 관리", "유입·노출 데이터 확인"],
  },
  {
    number: "02",
    title: "확신",
    summary: "보고 나서 믿을 수 있게",
    body: "고객이 방문 전에 확인하는 사진, 리뷰, 운영 정보를 매장 강점에 맞게 정리합니다.",
    items: ["대표 메뉴·매장 사진 방향", "리뷰와 고객 소통 관리", "영업시간·예약·쿠폰 점검"],
  },
  {
    number: "03",
    title: "방문",
    summary: "지금 가야 할 이유가 보이게",
    body: "매장의 소식과 혜택을 지역 고객에게 전달하고, 방문까지 이어지는 콘텐츠를 운영합니다.",
    items: ["새소식·당근비즈니스 운영", "체험단 선정·방문 일정 관리", "인스타그램 콘텐츠 연계"],
  },
  {
    number: "04",
    title: "재방문",
    summary: "한 번 온 고객이 다시 찾게",
    body: "주간 흐름을 보고 놓친 지점을 조정하며, 매장 운영에 필요한 다음 액션을 함께 정합니다.",
    items: ["주간 성과 분석·공유", "변경점과 이슈 즉시 반영", "다음 운영 우선순위 제안"],
  },
] as const;

const process = [
  ["01", "현재 상태를 봅니다", "광고부터 시작하지 않습니다. 고객이 어디에서 매장을 발견하고, 어디에서 이탈하는지 먼저 확인합니다."],
  ["02", "할 일을 줄이고 순서를 정합니다", "지금 당장 필요한 작업과 나중에 해도 되는 작업을 구분해 매장에 맞는 우선순위를 세웁니다."],
  ["03", "필요한 접점을 운영합니다", "플레이스·광고·리뷰·콘텐츠 중 필요한 채널을 실제 운영 업무로 연결합니다."],
  ["04", "결과를 보고 다시 조정합니다", "노출만 보는 것이 아니라 유입과 고객 반응을 함께 확인하며 다음 방향을 조정합니다."],
] as const;

const proof = [
  ["광고비만 쓰고 끝나지 않도록", "광고를 늘리기 전에 플레이스 정보, 사진, 리뷰 흐름을 함께 점검합니다."],
  ["대표님이 무엇을 받는지 알 수 있도록", "진행한 업무와 확인된 변화, 다음에 할 일을 주간 단위로 공유합니다."],
  ["매장마다 다른 해답을 찾도록", "업종·지역·운영 상황이 다른 매장을 같은 방식으로 묶어 관리하지 않습니다."],
] as const;

export default function Home() {
  return (
    <div id="top" className="site">
      <header className="site-header">
        <div className="container nav-row">
          <a className="brand" href="#top" aria-label="동행컴퍼니 홈">
            <span>동행</span>
            <small>COMPANY</small>
          </a>
          <nav className="desktop-nav" aria-label="주요 메뉴">
            <a href="#problem">문제부터 보기</a>
            <a href="#method">관리 방식</a>
            <a href="#work">해드리는 일</a>
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
              <p className="kicker">LOCAL FOOD MARKETING · DONGHAENG COMPANY</p>
              <h1>매장은 괜찮은데,<br /><em>왜 고객은 못 찾을까요?</em></h1>
              <p className="hero-lead">동행컴퍼니는 매장의 문제를 찾아<br className="desktop-only" /> 고객이 발견하고, 믿고, 방문하는 흐름으로 바꿉니다.</p>
              <div className="hero-actions">
                <a className="button primary" href="#problem">우리 매장 문제 확인하기 <span>↓</span></a>
                <a className="text-link" href="#work">그래서 해드리는 일 <span>→</span></a>
              </div>
              <div className="hero-trust">
                <span>네이버 플레이스</span><i>·</i><span>검색광고</span><i>·</i><span>리뷰·체험단</span><i>·</i><span>콘텐츠</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="고객이 매장을 선택하는 흐름">
              <div className="visual-header"><span>고객의 방문 결정 과정</span><span className="status-dot">● 운영 흐름</span></div>
              <div className="flow-stack">
                <div className="flow-item faded"><span>01</span><b>발견</b><small>검색했는데 안 보임</small><strong>!</strong></div>
                <div className="flow-line" />
                <div className="flow-item"><span>02</span><b>확인</b><small>정보·사진·리뷰를 비교</small><strong>→</strong></div>
                <div className="flow-line" />
                <div className="flow-item accent"><span>03</span><b>방문</b><small>갈 이유가 분명해짐</small><strong>✓</strong></div>
              </div>
              <div className="visual-caption"><span>동행의 역할</span><b>고객이 멈추는 지점을 찾아<br />다음 단계로 연결합니다.</b></div>
            </div>
          </div>
        </section>

        <section className="problem-section" id="problem">
          <div className="container">
            <div className="section-intro split-intro">
              <div><p className="kicker">THE REAL PROBLEM</p><h2>“그래서 뭘<br /><em>해준다는 건데요?”</em></h2></div>
              <div className="intro-copy"><p>대표님이 궁금한 건 채널 이름의 나열이 아닙니다.</p><p><strong>내 매장의 어디가 막혀 있고, 동행컴퍼니가 무엇을 바꿔주는지.</strong><br />그 답이 먼저 보여야 합니다.</p></div>
            </div>
            <div className="problem-grid">
              <article><span>01</span><h3>고객이 나를<br />발견하지 못함</h3><p>지역명·메뉴명으로 검색해도 우리 매장이 충분히 노출되지 않습니다.</p></article>
              <article><span>02</span><h3>발견해도<br />확신하지 못함</h3><p>사진, 메뉴, 리뷰, 운영 정보가 고객의 선택을 도와주지 못합니다.</p></article>
              <article><span>03</span><h3>관심이 생겨도<br />방문으로 안 이어짐</h3><p>지금 방문해야 할 이유와 이용 방법이 명확하지 않습니다.</p></article>
            </div>
            <div className="problem-answer"><span>동행컴퍼니가 하는 일</span><strong>광고 하나를 더 파는 것이 아니라,<br /><em>고객이 멈추는 지점을 찾아 운영 구조를 정리하는 것.</em></strong></div>
          </div>
        </section>

        <section className="check-section">
          <div className="container check-grid">
            <div>
              <p className="kicker">30-SECOND STORE CHECK</p>
              <h2>우리 매장은<br /><em>어디에서 놓치고 있을까요?</em></h2>
              <p className="body-copy">9가지 질문으로 고객이 매장을 선택하기 전 거치는 흐름을 빠르게 점검해보세요. 결과는 광고보다 먼저 손봐야 할 지점을 찾는 데 사용합니다.</p>
              <div className="check-points"><span>발견</span><span>확인</span><span>방문</span><span>재방문</span></div>
            </div>
            <ClarityCheck />
          </div>
        </section>

        <section className="method-section" id="method">
          <div className="container">
            <div className="section-intro"><p className="kicker">HOW WE WORK</p><h2>동행은 이렇게<br /><em>일을 시작합니다.</em></h2><p className="body-copy">매장마다 필요한 일이 다르기 때문에, 정해진 상품을 먼저 밀어 넣지 않습니다.</p></div>
            <div className="process-grid">{process.map(([number, title, body]) => <article key={number} className="process-card"><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="container">
            <div className="section-intro split-intro"><div><p className="kicker">WHAT WE ACTUALLY DO</p><h2>그래서 실제로<br /><em>해드리는 일</em></h2></div><p className="body-copy">온라인 마케팅을 어렵게 설명하지 않고, 고객이 매장을 선택하는 순서에 맞춰 관리합니다.</p></div>
            <div className="work-grid">{workAreas.map((area) => <article key={area.number} className={`work-card work-card-${area.number}`}><div className="work-card-top"><span>{area.number}</span><b>{area.title}</b></div><h3>{area.summary}</h3><p>{area.body}</p><ul>{area.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></article>)}</div>
          </div>
        </section>

        <section className="proof-section">
          <div className="container">
            <div className="section-intro split-intro"><div><p className="kicker">WHY DONGHAENG</p><h2>관리받는 동안<br /><em>대표님이 알 수 있어야 합니다.</em></h2></div><p className="body-copy">좋은 대행은 업무를 많이 하는 것이 아니라, 무엇을 왜 하는지 그리고 무엇이 달라졌는지를 설명할 수 있어야 합니다.</p></div>
            <div className="proof-grid">{proof.map(([title, body]) => <article key={title}><span>↗</span><h3>{title}</h3><p>{body}</p></article>)}</div>
            <div className="proof-bar"><strong>전주어디갈래 자체 미디어</strong><span>전북 지역 콘텐츠 네트워크</span><span>대표 박상일 직접 소통</span><span>주간 데이터 기반 운영</span></div>
          </div>
        </section>

        <section className="price-section" id="price">
          <div className="container price-grid">
            <div className="section-intro"><p className="kicker">START WITH THE RIGHT SCOPE</p><h2>필요한 만큼,<br /><em>분명하게 시작합니다.</em></h2><p className="body-copy">통합 관리가 필요한 매장과 특정 업무만 필요한 매장 모두 시작할 수 있도록 선택지를 나눴습니다.</p><a className="text-link" href={site.consultationHref} target="_blank" rel="noreferrer">내 매장에 맞는 범위 상담하기 <span>↗</span></a></div>
            <div className="price-cards">
              <article className="price-card featured"><div className="price-card-label">ALL-IN-ONE LOCAL MARKETING</div><p className="price-old"><del>{pricing.regularPrice}</del><span>{pricing.discountLabel}</span></p><div className="price"><strong>{pricing.price}</strong><small>{pricing.vat}</small></div><p className="price-note">{pricing.contract} · {pricing.renewal}</p><ul><li>네이버 플레이스·검색광고 운영</li><li>리뷰·체험단·콘텐츠 운영 지원</li><li>당근·카카오맵·구글 기본 세팅</li><li>주간 성과 확인 및 운영 방향 공유</li></ul><a className="button primary" href={site.consultationHref} target="_blank" rel="noreferrer">통합 관리 상담하기 <span>↗</span></a></article>
              <article className="price-card"><div className="price-card-label">ENTRY SERVICE</div><h3>{entryService.title}</h3><p>{entryService.description}</p><div className="price"><strong>{entryService.price}</strong><small>VAT 포함</small></div><p className="price-note">{entryService.priceNote}</p><ul>{entryService.included.map((item) => <li key={item}>{item}</li>)}</ul><a className="button outline" href={site.consultationHref} target="_blank" rel="noreferrer">단독 업무 상담하기 <span>↗</span></a></article>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="container closing-inner"><p className="kicker">A BETTER NEXT STEP</p><h2>좋은 매장이<br /><em>제대로 발견되도록.</em></h2><p>지금 필요한 것부터 함께 정리해보겠습니다.</p><a className="button light" href={site.consultationHref} target="_blank" rel="noreferrer">동행컴퍼니와 상담 시작하기 <span>↗</span></a></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-row"><div><a className="brand footer-brand" href="#top"><span>동행</span><small>COMPANY</small></a><p>좋은 매장이 더 잘 보일 수 있도록.</p></div><div className="footer-info"><p>{site.name} · 대표 박상일</p><p>010-7776-0198 · donghaeng.marketing@gmail.com</p></div><a href={site.instagramHref} target="_blank" rel="noreferrer">@jeonju.wwtg ↗</a></div></footer>
    </div>
  );
}
