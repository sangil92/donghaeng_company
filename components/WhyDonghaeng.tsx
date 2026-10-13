import { why } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function WhyDonghaeng() {
  return (
    <section className="section why-section" id="why">
      <div className="shell">
        <SectionHeading
          eyebrow="WHY DONGHAENG"
          title="일반 대행과 다른 이유가 분명합니다."
          body="대표 직접 관리, 전북 지역 집중, 요식업 전문 마케팅. 소수 매장을 깊게 관리합니다."
        />
        <div className="why-grid">
          {why.map(([en, title, body], index) => (
            <Reveal key={en} delay={(index % 3) * 70} className="why-card">
              <small>{en}</small>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="why-philosophy">
          <p className="eyebrow">WHY WE DO THIS</p>
          <h2>우리는 우리 지역의 좋은 가게가<br /><span>오래 살아남았으면 합니다.</span></h2>
          <p>
            좋은 매장이 잘 알려지지 않았다는 이유만으로 기회를 잃지 않도록.
            지역에서 발견되고, 사랑받고, 다시 찾게 만드는 것. 그게 동행이 이 일을 하는 이유입니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
