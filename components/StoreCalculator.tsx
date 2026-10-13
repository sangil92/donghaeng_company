"use client";

import { useMemo, useState } from "react";
import { site } from "@/content/site";

const numberFormat = new Intl.NumberFormat("ko-KR");

export function StoreCalculator() {
  const [monthlySales, setMonthlySales] = useState(3000);
  const [ticket, setTicket] = useState(60000);
  const [days, setDays] = useState(26);
  const [goalSales, setGoalSales] = useState(5000);
  const result = useMemo(() => {
    const currentTeams = (monthlySales * 10000) / Math.max(ticket, 1);
    const currentDaily = currentTeams / Math.max(days, 1);
    const goalDaily = (goalSales * 10000) / Math.max(ticket, 1) / Math.max(days, 1);
    return { currentTeams, currentDaily, goalDaily, extraDaily: Math.max(goalDaily - currentDaily, 0), gap: Math.max(goalSales - monthlySales, 0) };
  }, [days, goalSales, monthlySales, ticket]);

  return <section id="calculator" className="calculator-section section">
    <div className="shell">
      <div className="calculator-heading">
        <p className="eyebrow">STORE NUMBERS</p>
        <h2>감이 아니라,<br /><span>우리 매장 숫자로 봅니다.</span></h2>
        <p className="section-copy">현재 매출과 목표 매출을 입력해보세요. 목표까지 하루에 몇 팀이 더 필요한지 바로 확인할 수 있습니다.</p>
      </div>
      <div className="calculator-card">
        <div className="calculator-fields">
          <label>현재 월 매출 <div><input type="number" min="0" value={monthlySales} onChange={(event) => setMonthlySales(Number(event.target.value))} /><span>만원</span></div></label>
          <label>팀당 평균 객단가 <div><input type="number" min="1" value={ticket} onChange={(event) => setTicket(Number(event.target.value))} /><span>원</span></div></label>
          <label>월 영업일 <div><input type="number" min="1" value={days} onChange={(event) => setDays(Number(event.target.value))} /><span>일</span></div></label>
          <label>목표 월 매출 <div><input type="number" min="0" value={goalSales} onChange={(event) => setGoalSales(Number(event.target.value))} /><span>만원</span></div></label>
        </div>
        <div className="calculator-result">
          <span>목표 달성을 위해 필요한 숫자</span>
          <div className="calculator-result-main"><strong>+{result.extraDaily.toFixed(1)}</strong><small>팀 / 하루</small></div>
          <div className="calculator-result-grid"><div><b>{result.currentDaily.toFixed(1)}</b><span>현재 하루 평균</span></div><div><b>{result.goalDaily.toFixed(1)}</b><span>목표 하루 평균</span></div><div><b>{numberFormat.format(result.gap)}만</b><span>월 매출 차이</span></div></div>
          <p>숫자를 바꾸면 결과도 함께 변합니다. 필요한 유입을 알아야 광고와 콘텐츠의 방향을 정할 수 있습니다.</p>
          <a className="button" href={site.consultationHref} target="_blank" rel="noreferrer">내 매장 숫자 상담하기 <span>→</span></a>
        </div>
      </div>
    </div>
  </section>;
}
