import { hero, site } from "@/content/site";
import { Reveal } from "./Reveal";
import { ReelPhone } from "./ReelPhone";

const creators = ["LOCAL", "FOOD", "JEONBUK", "REELS", "CREATOR"] as const;

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <Reveal><p className="eyebrow">{hero.eyebrow}</p></Reveal>
          <h1>
            <Reveal>{hero.headline[0]}</Reveal>
            <Reveal delay={70}><span className="orange">{hero.headline[1]}</span></Reveal>
            <Reveal delay={140}>{hero.headline[2]}</Reveal>
          </h1>
          <Reveal delay={210}>
            <div className="hero-body">{hero.body.map((line) => <p key={line}>{line}</p>)}</div>
            <a className="button" href={site.consultationHref}>{hero.cta} <span>→</span></a>
            <div className="trust-tags">{hero.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={120}>
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />

          <div className="creator-bubbles" aria-hidden="true">
            {creators.map((creator, index) => (
              <span key={creator} className={`creator-bubble creator-${index + 1}`}>{creator}</span>
            ))}
          </div>

          <ReelPhone />

          <div className="proof-badge badge-a"><strong>100K+</strong><span>OWNED MEDIA</span></div>
          <div className="proof-badge badge-b"><strong>LOCAL</strong><span>CREATOR NETWORK</span></div>

          <div className="search-cue">
            <small>릴스를 본 고객</small>
            <strong>“여기 어디지?”</strong>
            <span>네이버에서 매장 검색 →</span>
          </div>

          <div className="signal">Instagram <b>→</b> Naver <b>→</b> Visit</div>
        </Reveal>
      </div>
    </section>
  );
}
