import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
export function ProblemSection(){return <section className="dark-section problem-section"><div className="shell"><SectionHeading dark eyebrow="BEFORE SEARCH" title="검색되기 전에, 먼저 알려져야 합니다." body="고객이 우리 매장을 검색하려면 먼저 그 매장의 존재를 알아야 합니다."/><Reveal className="search-card"><div className="search-bar"><span>⌕</span><b>전주 맛집</b></div><div className="search-results"><div/><div/><div/></div><p>그런데 고객이 <strong>당신의 매장 이름조차 모른다면?</strong></p></Reveal></div></section>}
