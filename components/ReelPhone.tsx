export function ReelPhone({ label = "LOCAL DISCOVERY" }: { label?: string }) {
  return <div className="phone" aria-label="인스타그램 릴스 형식의 콘텐츠 예시">
    <div className="phone-notch" />
    <div className="reel-scene">
      <div className="reel-grain" />
      <div className="reel-copy"><span>{label}</span><strong>오늘, 우리 동네에서<br/>발견한 한 곳</strong><small>실제 콘텐츠 자산 적용 예정</small></div>
      <div className="reel-actions" aria-hidden="true"><i>♡</i><i>◯</i><i>↗</i></div>
    </div>
  </div>;
}
