import { proofCards } from "@/content/site";
import { AnimatedStat } from "./AnimatedStat";
import { Reveal } from "./Reveal";

export function ProofSection() {
  return (
    <section className="dark-section proof-section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">OWNED MEDIA</p>
          <div className="big-stat">
            <AnimatedStat target={100000} suffix="+" ariaLabel="10만 명 이상" />
          </div>
          <p className="stat-label">직접 운영하는 먹플루언서 미디어</p>
        </Reveal>
        <div className="proof-grid">
          {proofCards.map(([title, body], index) => (
            <Reveal key={title} delay={index * 70} className="proof-card">
              <small>{title}</small>
              <strong>{body}</strong>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
