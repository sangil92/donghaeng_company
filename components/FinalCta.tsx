import { site } from "@/content/site";
import { Reveal } from "./Reveal";
export function FinalCta(){return <section className="final-cta" id="contact"><div className="shell"><Reveal><p className="eyebrow">DONGHAENG COMPANY</p><h2>좋은 매장이<br/><span>더 잘 보일 수 있도록.</span></h2><p>발견에서 방문까지, 동행하겠습니다.</p><a className="button light-button" href={site.consultationHref} target="_blank" rel="noreferrer">상담하기 <span>→</span></a><small className="contact-note">카카오톡 오픈채팅으로 상담을 시작합니다.</small></Reveal></div></section>}
