"use client";

import { useState } from "react";

const stages = [
  ["01", "발견", "콘텐츠와 지역 채널에서 매장이 먼저 보여야 합니다.", "노출"],
  ["02", "관심", "사진과 한 줄 메시지가 고객의 손가락을 멈춰야 합니다.", "관심"],
  ["03", "확인", "메뉴·가격·리뷰·위치가 망설임을 줄여야 합니다.", "신뢰"],
  ["04", "방문", "오늘 가야 할 이유와 이용 정보가 분명해야 합니다.", "방문"],
  ["05", "재방문", "다시 찾을 이유가 쌓이면 광고 의존도가 낮아집니다.", "관계"],
] as const;

export function CustomerLadder() {
  const [active, setActive] = useState(2);
  const selected = stages[active];

  return <section className="ladder-section dark-section">
    <div className="shell">
      <div className="ladder-heading">
        <p className="eyebrow">THE CUSTOMER LADDER</p>
        <h2>고객은 한 번에<br /><span>방문하지 않습니다.</span></h2>
        <p>고객이 매장을 발견하고 방문을 결정하기까지, 여러 계단을 차례로 올라옵니다. 한 칸이 약하면 관심은 옆 매장으로 이동합니다.</p>
      </div>
      <div className="ladder-board">
        <div className="ladder-steps" role="list" aria-label="고객 방문 단계">
          {stages.map(([number, title, body, label], index) => <div role="listitem" key={number}>
            <button type="button" className={`ladder-step ${index === active ? "is-active" : ""}`} onClick={() => setActive(index)} aria-pressed={index === active}>
              <span>{number}</span><strong>{title}</strong><small>{label}</small><i aria-hidden="true" />
              <em>{body}</em>
            </button>
          </div>)}
        </div>
        <div className="ladder-message"><span>현재 선택한 계단</span><strong>{selected[1]} · {selected[3]}</strong><p>{selected[2]}</p></div>
      </div>
    </div>
  </section>;
}
