"use client";

import { useState } from "react";
import { site } from "@/content/site";

const questions = [
  ["발견", "지역명·메뉴명으로 검색했을 때 우리 매장이 먼저 발견되고 있나요?"],
  ["확인", "플레이스의 메뉴·가격·영업시간 정보가 최신 상태인가요?"],
  ["방문", "고객이 지금 방문해야 할 이유와 이용 방법이 분명한가요?"],
] as const;

const outcomes = [
  ["먼저 발견되는 구조부터 점검해야 합니다.", "노출 이전에 고객이 검색하는 키워드와 플레이스 기본 정보를 확인하는 것이 우선입니다."],
  ["관심은 있지만 선택을 돕는 정보가 부족합니다.", "사진·메뉴·리뷰·운영 정보를 한 번에 확인할 수 있도록 고객의 비교 과정을 정리해야 합니다."],
  ["기본 흐름이 있습니다. 이제 꾸준한 운영이 필요합니다.", "현재 강점을 유지하면서 유입과 방문 데이터를 연결해 다음 액션을 조정할 수 있습니다."],
] as const;

export function ClarityCheck() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const done = step === questions.length;
  const outcome = outcomes[Math.min(score, outcomes.length - 1)];

  const answer = (value: boolean) => {
    setScore((current) => current + (value ? 1 : 0));
    setStep((current) => current + 1);
  };

  const reset = () => { setStep(0); setScore(0); };

  return <div className="clarity-check">
    {!done ? <>
      <div className="check-head"><span>질문 {step + 1} / {questions.length}</span><div><i style={{ width: `${(step / questions.length) * 100}%` }} /></div></div>
      <span className="check-label">{questions[step][0]}</span>
      <h3>{questions[step][1]}</h3>
      <div className="check-actions"><button type="button" onClick={() => answer(true)}>네, 그렇습니다 <span>→</span></button><button type="button" onClick={() => answer(false)}>아니요, 점검이 필요합니다 <span>→</span></button></div>
    </> : <>
      <span className="check-label">진단 완료 · {score} / {questions.length}</span>
      <h3>{outcome[0]}</h3>
      <p>{outcome[1]}</p>
      <div className="result-line"><i style={{ width: `${(score / questions.length) * 100}%` }} /></div>
      <div className="result-actions"><button type="button" onClick={reset}>다시 진단</button><a href={site.consultationHref} target="_blank" rel="noreferrer">내 매장 상담하기 <span>↗</span></a></div>
    </>}
  </div>;
}
