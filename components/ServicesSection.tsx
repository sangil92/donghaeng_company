import { services } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
export function ServicesSection(){return <section className="section services-section" id="services"><div className="shell"><SectionHeading eyebrow="WHAT WE MANAGE" title="동행컴퍼니 통합 관리 서비스" body="매장의 상황과 목표에 맞춰, 온라인 마케팅의 주요 접점을 한 번에 관리합니다."/><div className="service-grid">{services.map((s,i)=><Reveal key={s.title} delay={(i%4)*60} className={`service-card service-${i+1}`}><span>{s.num}</span><small>{s.subtitle}</small><h3>{s.title}</h3><ul>{s.items.map(x=><li key={x}>{x}</li>)}</ul></Reveal>)}</div></div></section>}
