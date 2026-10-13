import { flow } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
export function DonghaengFlow(){return <section id="flow" className="section flow-section"><div className="shell"><SectionHeading eyebrow="CUSTOMER JOURNEY" title="고객의 방문 결정 과정을 끝까지 관리합니다." body="네이버 검색부터 재방문까지, 매장의 온라인 접점을 따로 보지 않고 하나의 고객 여정으로 연결합니다."/><div className="flow-line" aria-hidden="true"/><div className="flow-grid">{flow.map((x,i)=><Reveal key={x.step} delay={i*75} className="flow-card"><span className="flow-step">{x.step}</span><small>{x.en} · {x.channel}</small><h3>{x.ko}</h3><p>{x.body}</p></Reveal>)}</div></div></section>}
