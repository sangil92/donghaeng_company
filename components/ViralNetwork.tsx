import { Reveal } from "./Reveal";

const networkNodes = [
  { label: "OWNED MEDIA", className: "node-owned" },
  { label: "CREATOR A", className: "node-creator-a" },
  { label: "CREATOR B", className: "node-creator-b" },
  { label: "LOCAL COMMUNITY", className: "node-community" },
  { label: "LOCAL AUDIENCE", className: "node-audience" },
] as const;

export function ViralNetwork() {
  return (
    <section className="section network-section">
      <div className="shell">
        <div className="network-copy">
          <p className="eyebrow">LOCAL VIRAL NETWORK</p>
          <h2>
            하나의 매장 이야기가
            <br />
            지역 곳곳으로 퍼질 수 있도록.
          </h2>
          <p>
            동행은 하나의 게시물로 끝내지 않습니다. 자체 미디어와 지역 크리에이터,
            커뮤니티를 연결해 매장의 이야기가 여러 접점에서 반복해서 발견되도록
            설계합니다.
          </p>
        </div>

        <Reveal className="network viral-target">
          <div className="viral-ring ring-3">
            <span className="ring-label">
              <b>03</b> LOCAL AUDIENCE
            </span>
          </div>
          <div className="viral-ring ring-2">
            <span className="ring-label">
              <b>02</b> CREATOR NETWORK
            </span>
          </div>
          <div className="viral-ring ring-1">
            <span className="ring-label">
              <b>01</b> OWNED MEDIA
            </span>
          </div>

          <span className="viral-wave wave-1" aria-hidden="true" />
          <span className="viral-wave wave-2" aria-hidden="true" />
          <span className="viral-wave wave-3" aria-hidden="true" />

          <span className="viral-orbit-signal orbit-signal-1" aria-hidden="true">
            <i />
          </span>
          <span className="viral-orbit-signal orbit-signal-2" aria-hidden="true">
            <i />
          </span>
          <span className="viral-orbit-signal orbit-signal-3" aria-hidden="true">
            <i />
          </span>

          <div className="viral-core">
            <small>START</small>
            <strong>
              YOUR
              <br />
              STORE
            </strong>
            <span>STORE STORY</span>
          </div>

          {networkNodes.map((node, index) => (
            <div
              key={node.label}
              className={`viral-node ${node.className}`}
              style={{ "--node-delay": `${index * 0.55}s` } as React.CSSProperties}
            >
              <i />
              <span>{node.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
