import { services } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
export function ServicesSection(){return <section className="section services-section" id="services"><div className="shell"><SectionHeading eyebrow="WHAT WE MANAGE" title="필요한 건 하나의 채널이 아니라 연결된 고객 경험입니다." body="인스타그램에서 발견된 관심이 검색과 확신, 방문으로 이어지도록 필요한 채널을 한 흐름에서 관리합니다."/><div className="service-grid">{services.map((s,i)=><Reveal key={s.title} delay={(i%4)*60} className={`service-card service-${i+1}`}><span>{s.num}</span><small>{s.subtitle}</small><h3>{s.title}</h3><ul>{s.items.map(x=><li key={x}>{x}</li>)}</ul></Reveal>)}</div></div></section>}
