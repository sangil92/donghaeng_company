"use client";

import { useState } from "react";

const faqs = [
  ["기존 대행사와 무엇이 다른가요?", "순위나 노출만 보고 끝내지 않습니다. 고객이 발견하고, 확인하고, 방문하고, 다시 찾는 전체 흐름을 매장 상황에 맞춰 함께 관리합니다."],
  ["계약 기간은 어떻게 되나요?", "최초 3개월 계약 후 1개월 단위로 연장 진행합니다. 운영 방향과 결과를 함께 확인한 뒤 다음 단계를 결정합니다."],
  ["광고비는 별도인가요?", "네이버·인스타그램 등 매체 광고비는 대행비와 별도입니다. 매장 상황과 목표에 맞춰 부담 가능한 범위에서 계획합니다."],
  ["어떤 매장이 함께하면 좋을까요?", "좋은 메뉴와 서비스를 가지고 있지만 온라인에서 충분히 전달되지 않는 로컬 음식점에 적합합니다. 대표님이 실행 과정에 함께해주실수록 효과가 커집니다."],
  ["상담은 어떻게 진행되나요?", "카카오톡 오픈채팅으로 현재 매장 상황과 고민을 먼저 확인합니다. 필요한 경우 매장 정보와 데이터를 바탕으로 진행 방향을 안내드립니다."],
] as const;

export function FAQSection() {
  const [open, setOpen] = useState(0);
  return <section id="faq" className="faq-section section">
    <div className="shell faq-shell">
      <div><p className="eyebrow">FAQ</p><h2>궁금한 점이<br /><span>있으신가요?</span></h2><p className="section-copy">상담 전에 가장 많이 물어보시는 내용을 정리했습니다.</p></div>
      <div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${open === index ? "is-open" : ""}`} key={question}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><b aria-hidden="true">{open === index ? "−" : "+"}</b></button>{open === index ? <p>{answer}</p> : null}</div>)}</div>
    </div>
  </section>;
}
