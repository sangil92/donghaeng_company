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

export function ProblemSection(){return <section className="dark-section problem-section"><div className="shell"><SectionHeading dark eyebrow="BEFORE VISIT" title="고객은 방문 전에 이미 매장을 경험합니다." body="검색부터 사진과 리뷰 확인까지, 고객은 방문하기 전에 온라인에서 선택할 이유를 먼저 찾습니다."/><Reveal className="search-card"><div className="search-bar"><span className="search-n-mark" aria-hidden="true">N</span><b>전주 맛집</b></div><div className="search-suggestions" aria-label="전주 맛집 검색어 추천">{searchSuggestions.map((suggestion, index) => <div className="search-suggestion" key={`${suggestion.icon}-${index}`}><span className={`suggestion-icon suggestion-icon-${suggestion.icon}`} aria-hidden="true" /> <span>{suggestion.content}</span></div>)}</div><p>고객이 방문하기 전, <strong>우리 매장을 선택할 이유</strong>를 보여줘야 합니다.</p></Reveal></div></section>}
