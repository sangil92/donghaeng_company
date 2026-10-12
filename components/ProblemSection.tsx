import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const searchSuggestions = [
  { icon: "clock", content: <>전주 맛집 <strong>리스트</strong></> },
  { icon: "clock", content: <>전주맛집</> },
  { icon: "search", content: <>전주 맛집</> },
  { icon: "search", content: <>전주 맛집 <strong>추천</strong></> },
  { icon: "search", content: <>전주 맛집 <strong>한정식</strong></> },
  { icon: "search", content: <>전주 맛집 <strong>내돈내산</strong></> },
] as const;

export function ProblemSection(){return <section className="dark-section problem-section"><div className="shell"><SectionHeading dark eyebrow="BEFORE SEARCH" title="검색되기 전에, 먼저 알려져야 합니다." body="고객이 우리 매장을 검색하려면 먼저 그 매장의 존재를 알아야 합니다."/><Reveal className="search-card"><div className="search-bar"><span className="search-n-mark" aria-hidden="true">N</span><b>전주 맛집</b></div><div className="search-suggestions" aria-label="전주 맛집 검색어 추천">{searchSuggestions.map((suggestion, index) => <div className="search-suggestion" key={`${suggestion.icon}-${index}`}><span className={`suggestion-icon suggestion-icon-${suggestion.icon}`} aria-hidden="true" /> <span>{suggestion.content}</span></div>)}</div><p>그런데 고객이 <strong>당신의 매장 이름조차 모른다면?</strong></p></Reveal></div></section>}
