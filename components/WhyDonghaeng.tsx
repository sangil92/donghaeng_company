import { why } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
export function WhyDonghaeng(){return <section className="section why-section" id="why"><div className="shell"><SectionHeading eyebrow="WHY DONGHAENG" title="전북에서, 먼저 발견시키고 끝까지 연결합니다."/><div className="why-grid">{why.map(([en,t,b],i)=><Reveal key={en} delay={(i%3)*70} className="why-card"><small>{en}</small><h3>{t}</h3><p>{b}</p></Reveal>)}</div></div></section>}
