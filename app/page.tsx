import { site, pricing, entryService } from "@/content/site";
import { ClarityCheck } from "@/components/ClarityCheck";

const operatingAreas = [
  {
    number: "01",
    title: "네이버 플레이스 운영",
    summary: "사장님이 매일 챙기기 어려운 일을 대신합니다",
    body: "리뷰답글과 고객 반응을 확인하고, 메뉴·영업정보·사진·새소식까지 고객이 실제로 보는 화면을 지속적으로 관리합니다.",
    items: ["리뷰답글·리뷰 모니터링", "플레이스 정보·메뉴·사진 점검", "네이버 새소식 업데이트"],
  },
  {
    number: "02",
    title: "광고 모니터링",
    summary: "광고비가 새지 않도록 매일 살핍니다",
    body: "노출·클릭·CPC·소진 속도를 확인하고 키워드와 소재를 조정합니다. 광고를 켜두는 것이 아니라 매장 상황에 맞게 계속 바꿉니다.",
    items: ["검색광고·소상공인 광고 확인", "키워드·제외키워드 관리", "소재 A/B 테스트 및 예산 조정"],
  },
  {
    number: "03",
    title: "지역 고객 콘텐츠",
    summary: "동네 고객에게 매장 소식을 계속 보여줍니다",
    body: "당근 새소식은 지역 주민에게 매장을 다시 떠올리게 하는 채널입니다. AI 자동화로 초안을 만들고, 매장 상황에 맞게 검수해 최신성을 유지합니다.",
    items: ["당근 새소식 지역 주민 타깃 운영", "매장별 이벤트·변경사항 반영", "AI 콘텐츠 초안 자동화·검수"],
  },
  {
    number: "04",
    title: "업종별 레퍼런스 전략",
    summary: "우리 매장만 보지 않고, 비슷한 매장과 비교합니다",
    body: "사장님이 알기 어려운 경쟁 매장과 유사 업종의 키워드·콘텐츠·리뷰 흐름을 참고해 다음에 시도할 방향을 제안합니다.",
    items: ["비슷한 업종·지역 매장 사례 확인", "매장별 레퍼런스와 개선 포인트 제안", "한 가지 방식에 머물지 않는 지속 테스트"],
  },
] as const;

const process = [
  ["01", "관찰", "매장 화면과 광고 데이터를 확인하고 고객이 멈추는 지점을 찾습니다."],
  ["02", "비교", "비슷한 업종과 지역 매장의 흐름을 참고해 적용할 요소를 고릅니다."],
  ["03", "실행", "리뷰답글·새소식·광고·콘텐츠를 실제 운영 업무로 반영합니다."],
  ["04", "테스트", "키워드·소재·문구·업로드 방향을 바꿔보고 반응을 비교합니다."],
  ["05", "보고", "무엇을 했고 무엇이 달라졌는지, 다음에 무엇을 할지 공유합니다."],
] as const;

const rhythm = [
  ["매일", "확인하고 바로 반영", "리뷰·광고 잔액·노출 상태·고객 반응·새소식 운영"],
  ["매주", "비교하고 방향 제안", "성과 변화와 유사 매장 레퍼런스를 함께 보고 다음 액션 제안"],
  ["매월", "정리하고 다시 설계", "한 달 운영 결과를 바탕으로 예산·콘텐츠·키워드 우선순위 조정"],
] as const;

const proof = [
  ["대행의 기준", "광고를 켜두는 것이 아니라 매일 확인하고 바꾸는 것"],
  ["동행의 시선", "한 매장만 보지 않고 같은 업종의 흐름과 함께 보는 것"],
  ["대표님이 받는 것", "막연한 홍보가 아니라 실제 진행 업무와 다음 방향"],
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
            <a href="#method">운영 방식</a>
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
              <p className="hero-lead">리뷰답글, 광고 모니터링, 새소식, 콘텐츠, 경쟁 매장 레퍼런스까지.<br className="desktop-only" /> 매장에서 시간을 내기 어렵고 혼자서는 알기 어려운 일을 대신 관리합니다.</p>
              <div className="hero-actions"><a className="button primary" href="#problem">내 매장 운영 빈틈 확인하기 <span>↓</span></a><a className="text-link" href="#operating">실제로 해드리는 일 <span>→</span></a></div>
              <div className="hero-trust"><span>매일 확인</span><i>·</i><span>업종별 비교</span><i>·</i><span>지속 테스트</span><i>·</i><span>주간 공유</span></div>
            </div>
            <div className="hero-visual" aria-label="동행컴퍼니 온라인 운영실">
              <div className="visual-header"><span>ONLINE OPERATING ROOM</span><span className="status-dot">● LIVE MANAGEMENT</span></div>
              <div className="flow-stack">
                <div className="flow-item"><span>DAILY</span><b>리뷰·광고 확인</b><small>놓치기 쉬운 신호</small><strong>✓</strong></div>
                <div className="flow-line" />
                <div className="flow-item"><span>WEEKLY</span><b>유사 매장 비교</b><small>다음 액션 찾기</small><strong>↗</strong></div>
                <div className="flow-line" />
                <div className="flow-item accent"><span>MONTHLY</span><b>운영 방향 조정</b><small>계속 변화를 주기</small><strong>→</strong></div>
              </div>
              <div className="visual-caption"><span>동행컴퍼니의 역할</span><b>사장님이 놓치기 쉬운 온라인 운영을<br />매장별로 대신 챙깁니다.</b></div>
            </div>
          </div>
        </section>

        <section className="problem-section" id="problem">
          <div className="container">
            <div className="section-intro split-intro"><div><p className="kicker">THE REAL PROBLEM</p><h2>마케팅을 안 해서가 아니라,<br /><em>계속 관리하기 어려워서</em> 놓칩니다.</h2></div><div className="intro-copy"><p>사장님은 매장 운영, 직원 관리, 재료 준비, 고객 응대만으로도 하루가 빠르게 지나갑니다.</p><p><strong>온라인에서 매일 일어나는 작은 변화까지 직접 확인하기는 어렵습니다.</strong><br />동행컴퍼니는 바로 그 ‘가려운 부분’을 대신 챙깁니다.</p></div></div>
            <div className="problem-grid">
              <article><span>01 · 놓치기 쉬운 일</span><h3>리뷰답글과<br />고객 반응 확인</h3><p>답글을 달고 싶어도 바쁘고, 어떤 리뷰가 쌓이는지 매일 모니터링하기 어렵습니다.</p></article>
              <article><span>02 · 돈이 새는 일</span><h3>광고비와<br />노출 흐름 확인</h3><p>광고를 켜둔 뒤 클릭·CPC·소진 속도를 확인하지 못하면 조정 시기를 놓칩니다.</p></article>
              <article><span>03 · 혼자 알기 어려운 일</span><h3>다른 매장과<br />비교하고 방향 찾기</h3><p>비슷한 고깃집이 어떤 키워드와 콘텐츠를 쓰는지, 우리 매장에 무엇을 적용할지 알기 어렵습니다.</p></article>
            </div>
            <div className="problem-answer"><span>동행컴퍼니가 대신하는 일</span><strong>사장님이 매장에서 시간을 내기 어려운 온라인 운영을 챙기고,<br /><em>다른 매장 정보와 접목해 다음 액션까지 제안하는 것.</em></strong></div>
          </div>
        </section>

        <section className="check-section"><div className="container check-grid"><div><p className="kicker">30-SECOND STORE CHECK</p><h2>우리 매장은<br /><em>어디에서 놓치고 있을까요?</em></h2><p className="body-copy">리뷰·광고·새소식·비교 운영 상태를 빠르게 점검해보세요. 동행은 광고보다 먼저, 지금 매장에 필요한 관리부터 찾습니다.</p><div className="check-points"><span>리뷰</span><span>광고</span><span>새소식</span><span>비교</span></div></div><ClarityCheck /></div></section>

        <section className="work-section" id="operating">
          <div className="container"><div className="section-intro split-intro"><div><p className="kicker">WHAT WE ACTUALLY DO</p><h2>그래서 실제로<br /><em>해드리는 일</em></h2></div><p className="body-copy">채널을 많이 추가하는 것이 목표가 아닙니다. 사장님이 놓치고 있던 일을 찾아 매장별 운영 업무로 연결합니다.</p></div><div className="work-grid">{operatingAreas.map((area) => <article key={area.number} className={"work-card work-card-" + area.number}><div className="work-card-top"><span>{area.number}</span><b>{area.title}</b></div><h3>{area.summary}</h3><p>{area.body}</p><ul>{area.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></article>)}</div></div>
        </section>

        <section className="proof-section rhythm-section">
          <div className="container"><div className="section-intro"><p className="kicker">NOT A ONE-TIME CAMPAIGN</p><h2>한 번 세팅하고 끝나는 게 아니라,<br /><em>계속 변화를 줍니다.</em></h2><p className="body-copy">온라인 운영은 최신성이 쌓여야 합니다. 동행은 매일 확인하고, 매주 비교하고, 매월 방향을 다시 조정합니다.</p></div><div className="proof-grid">{rhythm.map(([label, title, body]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div>
        </section>

        <section className="method-section" id="method"><div className="container"><div className="section-intro"><p className="kicker">HOW WE WORK</p><h2>감으로 운영하지 않고,<br /><em>관찰·비교·실행·테스트합니다.</em></h2><p className="body-copy">다른 매장의 사례를 그대로 복사하지 않습니다. 매장 상황에 맞는 요소를 고르고 실제 반응을 확인하며 다음 방향을 제안합니다.</p></div><div className="process-grid process-five">{process.map(([number, title, body]) => <article key={number} className="process-card"><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

        <section className="proof-section partner-section"><div className="container"><div className="section-intro split-intro"><div><p className="kicker">A PART-TIME PARTNER FOR YOUR STORE</p><h2>하루 1만원으로,<br /><em>온라인 운영 파트너를 두세요.</em></h2></div><p className="body-copy">동행컴퍼니는 순위나 매출을 약속하는 대행사가 아닙니다. 사장님이 미처 신경 쓰지 못한 온라인 업무를 꾸준히 보완하는 파트타임 운영 파트너입니다.</p></div><div className="proof-grid"><article><span>01</span><h3>사장님 대신 확인</h3><p>리뷰답글, 광고 잔액, 새소식, 고객 반응처럼 매일 확인해야 하지만 뒤로 밀리는 일을 챙깁니다.</p></article><article><span>02</span><h3>매장별로 제안</h3><p>다른 고깃집과 유사 업종의 레퍼런스를 참고하되, 우리 매장에 맞는 방향만 골라 제안합니다.</p></article><article><span>03</span><h3>지속적으로 변화</h3><p>한 번의 세팅으로 끝내지 않고 문구·키워드·소재·콘텐츠 방향을 계속 테스트합니다.</p></article></div><div className="proof-bar"><strong>순위 보장 없음</strong><span>매출 보장 없음</span><span>대신 매일의 운영과 개선을 약속합니다</span></div></div></section>

        <section className="price-section" id="price"><div className="container price-grid"><div className="section-intro"><p className="kicker">MONTHLY OPERATING SUPPORT</p><h2>매장 운영에 필요한 온라인 업무를<br /><em>월 30만원부터 맡깁니다.</em></h2><p className="body-copy">부가세 별도 월 30만원. 매장별 상황에 맞춰 필요한 운영 범위를 정하고 지속적으로 관리·모니터링·테스트합니다.</p><a className="text-link" href={site.consultationHref} target="_blank" rel="noreferrer">내 매장에 맞는 범위 상담하기 <span>↗</span></a></div><div className="price-cards"><article className="price-card featured"><div className="price-card-label">DONGHAENG OPERATING PARTNER</div><div className="price"><strong>월 30만원</strong><small>VAT 별도</small></div><p className="price-note">부가세 포함 33만원 · 매장별 운영 범위 상담</p><ul><li>네이버 플레이스·리뷰·새소식 운영</li><li>검색광고 모니터링·키워드·A/B 테스트</li><li>당근 새소식 지역 주민 타깃 운영</li><li>업종별 레퍼런스 기반 다음 액션 제안</li><li>주간 운영 내용과 성과 흐름 공유</li></ul><a className="button primary" href={site.consultationHref} target="_blank" rel="noreferrer">운영 상담하기 <span>↗</span></a></article><article className="price-card"><div className="price-card-label">ENTRY SERVICE</div><h3>{entryService.title}</h3><p>{entryService.description}</p><div className="price"><strong>{entryService.price}</strong><small>VAT 포함</small></div><p className="price-note">{entryService.priceNote}</p><ul>{entryService.included.map((item) => <li key={item}>{item}</li>)}</ul><a className="button outline" href={site.consultationHref} target="_blank" rel="noreferrer">단독 업무 상담하기 <span>↗</span></a></article></div></div></section>

        <section className="closing-section"><div className="container closing-inner"><p className="kicker">DONGHAENG COMPANY</p><h2>사장님은 매장에 집중하고,<br /><em>온라인 운영은 동행에 맡기세요.</em></h2><p>순위나 매출을 약속하는 대신, 매장에 필요한 운영을 꾸준히 챙기겠습니다.</p><a className="button light" href={site.consultationHref} target="_blank" rel="noreferrer">동행컴퍼니와 상담 시작하기 <span>↗</span></a></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-row"><div><a className="brand footer-brand" href="#top"><span>동행</span><small>COMPANY</small></a><p>사장님이 매장에 집중하는 동안, 온라인은 동행이 챙깁니다.</p></div><div className="footer-info"><p>{site.name} · 대표 박상일</p><p>010-7776-0198 · donghaeng.marketing@gmail.com</p></div><a href={site.instagramHref} target="_blank" rel="noreferrer">@jeonju.wwtg ↗</a></div></footer>
    </div>
  );
}
