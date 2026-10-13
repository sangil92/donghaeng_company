"use client";

import { useMemo, useState } from "react";
import { site } from "@/content/site";

const questions = [
  ["발견", "지역명·메뉴명으로 검색했을 때 우리 매장이 먼저 발견되고 있나요?"],
  ["검색", "고객이 자주 찾는 지역·메뉴 키워드에 맞춰 노출되고 있나요?"],
  ["정보", "플레이스의 메뉴·가격·영업시간 정보가 최신 상태인가요?"],
  ["사진", "매장의 분위기와 대표 메뉴가 사진만으로도 잘 전달되나요?"],
  ["신뢰", "리뷰와 방문 후기가 처음 보는 고객의 불안을 줄여주나요?"],
  ["콘텐츠", "매장 소식을 꾸준히 알릴 콘텐츠와 채널이 준비되어 있나요?"],
  ["방문", "고객이 지금 방문해야 할 이유와 이용 방법이 분명한가요?"],
  ["소통", "문의·예약·방문 전 고객과 원활하게 소통하고 있나요?"],
  ["재방문", "한 번 온 고객을 다시 부를 장치와 소통 채널이 있나요?"],
] as const;

const results = [
  { range: [0, 3], title: "고객이 오기 전, 여러 접점에서 멈추고 있습니다.", body: "먼저 매장의 현재 노출과 정보 상태부터 점검해야 합니다. 광고보다 고객이 이탈하는 지점을 찾는 것이 우선입니다." },
  { range: [4, 6], title: "관심은 생기지만 방문으로 이어지는 구조가 약합니다.", body: "발견된 고객이 검색하고 확인하는 과정에서 망설이지 않도록, 매장만의 방문 이유와 신뢰 요소를 정리할 필요가 있습니다." },
  { range: [7, 9], title: "좋은 기반이 있습니다. 이제 흐름을 더 단단하게 만들 차례입니다.", body: "현재 운영을 유지하면서 유입·전환·재방문 데이터를 연결하면 더 안정적인 성장을 설계할 수 있습니다." },
] as const;

type Answer = boolean | undefined;

export function StoreDiagnosis() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(() => Array<Answer>(questions.length).fill(undefined));
  const completed = current >= questions.length;
  const score = answers.filter((answer) => answer === true).length;
  const result = useMemo(() => results.find(({ range }) => score >= range[0] && score <= range[1]) ?? results[0], [score]);

  const answer = (value: boolean) => {
    setAnswers((previous) => {
      const next = [...previous];
      next[current] = value;
      return next;
    });
    setCurrent((previous) => previous + 1);
  };

  const goPrevious = () => {
    setCurrent((previous) => Math.max(0, previous - 1));
  };

  const reset = () => {
    setAnswers(Array<Answer>(questions.length).fill(undefined));
    setCurrent(0);
  };

  return <section id="quiz" className="diagnosis-section section">
    <div className="shell diagnosis-shell">
      <div className="diagnosis-intro">
        <p className="eyebrow">30-SECOND STORE CHECK</p>
        <h2>우리 매장,<br /><span>어디에서 고객을 놓치고 있을까요?</span></h2>
        <p className="section-copy">아래 9개 질문에 답해보세요. 정답을 맞히는 테스트가 아니라, 고객이 매장을 선택하기 전 거치는 흐름을 점검하는 무료 자가진단입니다.</p>
        <div className="diagnosis-note"><b>9개 질문</b><span>발견 · 검색 · 정보 · 사진 · 신뢰 · 콘텐츠 · 방문 · 소통 · 재방문</span></div>
      </div>

      <div className="diagnosis-card" aria-live="polite">
        {!completed ? <>
          <div className="diagnosis-progress">
            <span>진단 {current + 1} / {questions.length}</span>
            <div><i style={{ width: `${(current / questions.length) * 100}%` }} /></div>
            {current > 0 && <button type="button" className="diagnosis-previous" onClick={goPrevious}>← 이전 질문</button>}
          </div>
          <span className="diagnosis-category">{questions[current][0]}</span>
          <h3>{questions[current][1]}</h3>
          <div className="diagnosis-actions">
            <button type="button" onClick={() => answer(true)} className="diagnosis-button diagnosis-button-primary">예, 잘 관리하고 있어요 <span>→</span></button>
            <button type="button" onClick={() => answer(false)} className="diagnosis-button">아니요, 점검이 필요해요 <span>→</span></button>
          </div>
        </> : <>
          <span className="diagnosis-category">진단 완료 · {score}/{questions.length}</span>
          <h3>{result.title}</h3>
          <p className="diagnosis-result-body">{result.body}</p>
          <div className="diagnosis-result-meter"><span style={{ width: `${(score / questions.length) * 100}%` }} /></div>
          <div className="diagnosis-result-actions">
            <button type="button" className="diagnosis-button" onClick={reset}>다시 진단하기</button>
            <a className="button" href={site.consultationHref} target="_blank" rel="noreferrer">내 매장 진단 상담하기 <span>→</span></a>
          </div>
        </>}
      </div>
    </div>
  </section>;
}
