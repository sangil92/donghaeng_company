"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatProps = {
  target: number;
  suffix?: string;
  durationMs?: number;
  ariaLabel?: string;
};

export function AnimatedStat({
  target,
  suffix = "",
  durationMs = 1200,
  ariaLabel,
}: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);
  const [value, setValue] = useState(target);

  useEffect(() => {
    const node = ref.current;
    if (!node || startedRef.current) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      startedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        observer.disconnect();

        const startedAt = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [durationMs, target]);

  return (
    <span ref={ref} className="animated-stat" aria-label={ariaLabel ?? `${target.toLocaleString()}${suffix}`}>
      <span aria-hidden="true">{value.toLocaleString()}</span>
      {suffix ? <span className="animated-stat-suffix" aria-hidden="true">{suffix}</span> : null}
    </span>
  );
}
