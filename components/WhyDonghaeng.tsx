import { why } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
export function WhyDonghaeng(){return <section className="section why-section" id="why"><div className="shell"><SectionHeading eyebrow="WHY DONGHAENG" title="일반 대행과 다른 이유가 분명합니다." body="대표 직접 관리, 전북 지역 집중, 요식업 전문 마케팅. 소수 매장을 깊게 관리합니다."/><div className="why-grid">{why.map(([en,t,b],i)=><Reveal key={en} delay={(i%3)*70} className="why-card"><small>{en}</small><h3>{t}</h3><p>{b}</p></Reveal>)}</div></div></section>}
