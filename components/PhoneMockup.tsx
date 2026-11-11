export function PhoneMockup() {
  return (
    <div className="phone-stage" aria-label="동행컴퍼니의 온라인 운영 현황">
      <div className="phone-stage-top">
        <span>ONLINE OPERATING PARTNER</span>
        <b>● 매일 확인 중</b>
      </div>

      <div className="phone-float-card phone-float-left">
        <small>DAILY CHECK</small>
        <strong>리뷰답글</strong>
        <span>오늘 3건 확인</span>
      </div>

      <div className="phone-float-card phone-float-right">
        <small>AD MONITORING</small>
        <strong>광고 상태</strong>
        <span>소진 속도 점검</span>
      </div>

      <div className="phone-shell">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <div className="phone-status"><span>9:41</span><span>● ● ▮</span></div>
          <div className="phone-screen-head"><span>동행컴퍼니</span><b>•••</b></div>
          <div className="phone-greeting">
            <small>오늘의 매장 운영</small>
            <strong>놓치기 쉬운 일을<br />대신 챙겼습니다.</strong>
          </div>
          <div className="phone-progress">
            <div><span>이번 주 관리 현황</span><strong>4 / 4</strong></div>
            <i><b /></i>
          </div>
          <div className="phone-task-list">
            <div className="phone-task is-done"><span>✓</span><p><b>리뷰답글·반응 확인</b><small>완료 · 3건 점검</small></p></div>
            <div className="phone-task is-done"><span>✓</span><p><b>광고 소진 속도 확인</b><small>완료 · 조정 포인트 공유</small></p></div>
            <div className="phone-task"><span>→</span><p><b>새소식·콘텐츠 업데이트</b><small>오늘 반영 예정</small></p></div>
          </div>
          <div className="phone-next-step"><small>NEXT ACTION</small><b>비슷한 매장 레퍼런스와<br />다음 주 문구를 비교합니다.</b></div>
          <div className="phone-bottom-nav"><span className="active">운영</span><span>리포트</span><span>상담</span></div>
        </div>
      </div>

      <div className="phone-float-note"><span>동행컴퍼니의 역할</span><b>사장님이 매장에 집중하는 동안<br />온라인 운영을 계속 챙깁니다.</b></div>
    </div>
  );
}
