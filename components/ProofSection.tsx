"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    image: "/reviews/review-full-house.webp",
    label: "방문 흐름",
    title: "1시 오픈런 만석",
    quote: "동시에 못 받아서 매출은 큰 변화가 없는데 홍보 효과는 확실히 있었던 것 같아요.",
  },
  {
    image: "/reviews/review-sales-8539.webp",
    label: "매출 변화",
    title: "예약금 포함 9,300만 원대",
    quote: "테이블 1개만 더 있었어도 1억 넘었을 텐데 아쉽네요.",
  },
  {
    image: "/reviews/review-mango-ad.webp",
    label: "콘텐츠 반응",
    title: "광고 소재로 이어진 콘텐츠",
    quote: "덕분에 지난 주말 매출이 많이 상승했습니다.",
  },
  {
    image: "/reviews/review-dashboard.webp",
    label: "재방문",
    title: "재방문율 16.8% 확인",
    quote: "주간 흐름으로도 매출이 우상향하는 구조로 보여요.",
  },
  {
    image: "/reviews/review-naver-place.webp",
    label: "검색 노출",
    title: "네이버 플레이스 2위",
    quote: "확실히 올라오네요. 리뷰도 이제 1,000개가 넘었어요.",
  },
  {
    image: "/reviews/review-sales-12970.webp",
    label: "월 매출",
    title: "7월 매출 1억 3천만 원",
    quote: "고생하셨어요. 감사합니다 ^^ ",
  },
  {
    image: "/reviews/review-waiting.webp",
    label: "현장 반응",
    title: "소소한 웨이팅이 생겼어요",
    quote: "오랜만에 기분 좋게 일했습니다.",
  },
  {
    image: "/reviews/review-full-seats.webp",
    label: "매장 현장",
    title: "1·2층 전부 만석",
    quote: "낮에 1시부터 만석이라니, 대박 그 잡채.",
  },
  {
    image: "/reviews/review-owner-message.webp",
    label: "운영 만족",
    title: "사장님이 직접 느낀 변화",
    quote: "매출도 늘었고 네이버 상단 노출도 기분이 좋습니다.",
  },
  {
    image: "/reviews/review-repeat-business.webp",
    label: "재계약·추천",
    title: "다시 찾게 되는 관리",
    quote: "대표님이 열심히 해주셔서 더 열심히 해보겠습니다.",
  },
] as const;

export function ProofSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews[activeIndex];

  const moveSlide = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + reviews.length) % reviews.length);
  };

  return (
    <section className="proof-section review-section" aria-labelledby="review-heading">
      <div className="shell">
        <Reveal className="review-intro">
          <div>
            <p className="eyebrow">REAL OWNER REVIEWS</p>
            <h2 id="review-heading">함께한 사장님들의<br /><span>진짜 후기</span></h2>
          </div>
          <p className="review-guide">← 좌우로 밀어서 넘겨보세요 · 실제 카톡방 그대로</p>
        </Reveal>

        <div className="review-carousel" aria-roledescription="carousel" aria-label="사장님 실제 후기">
          <button className="review-arrow review-arrow-prev" type="button" onClick={() => moveSlide(-1)} aria-label="이전 후기">‹</button>
          <div className="review-slide" aria-live="polite">
            <figure>
              <img src={activeReview.image} alt={`${activeReview.label}: ${activeReview.title} 실제 카카오톡 후기`} />
            </figure>
          </div>
          <button className="review-arrow review-arrow-next" type="button" onClick={() => moveSlide(1)} aria-label="다음 후기">›</button>
        </div>

        <div className="review-meta">
          <div>
            <small>{activeReview.label}</small>
            <strong>{activeReview.title}</strong>
            <p>“{activeReview.quote}”</p>
          </div>
          <div className="review-dots" role="tablist" aria-label="후기 선택">
            {reviews.map((review, index) => (
              <button key={review.image} className={index === activeIndex ? "is-active" : ""} type="button" role="tab" aria-selected={index === activeIndex} aria-label={`${index + 1}번째 후기`} onClick={() => setActiveIndex(index)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
