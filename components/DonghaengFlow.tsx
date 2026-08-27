import { flow } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
export function DonghaengFlow(){return <section id="flow" className="section flow-section"><div className="shell"><SectionHeading eyebrow="DONGHAENG FLOW" title="발견에서 방문까지, 하나의 흐름으로 봅니다." body="채널을 따로 운영하는 것이 아니라 고객이 매장을 알게 되고 방문을 결정하기까지의 전체 여정을 연결합니다."/><div className="flow-line" aria-hidden="true"/><div className="flow-grid">{flow.map((x,i)=><Reveal key={x.step} delay={i*75} className="flow-card"><span className="flow-step">{x.step}</span><small>{x.en} · {x.channel}</small><h3>{x.ko}</h3><p>{x.body}</p></Reveal>)}</div></div></section>}
