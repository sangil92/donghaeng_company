"use client";

import { useRef, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";

const baseCards = [
  { x: 0, y: 0, rotation: -10 },
  { x: 0, y: 0, rotation: 0 },
  { x: 0, y: 0, rotation: 9 },
] as const;

export function InteractiveReelStack({ children }: { children: ReactNode }) {
  const stackRef = useRef<HTMLDivElement>(null);

  const setCardMotion = (x: number, y: number, active: boolean) => {
    const stack = stackRef.current;
    if (!stack) return;

    const motion = [
      { x: x * 8, y: y * 5, rotation: baseCards[0].rotation + x * 1.5 },
      { x: x * 14, y: y * 9, rotation: baseCards[1].rotation + x * 1.1 },
      { x: x * 8, y: y * 5, rotation: baseCards[2].rotation - x * 1.5 },
    ];

    motion.forEach((card, index) => {
      stack.style.setProperty(`--card-${index + 1}-x`, `${card.x.toFixed(2)}px`);
      stack.style.setProperty(`--card-${index + 1}-y`, `${card.y.toFixed(2)}px`);
      stack.style.setProperty(`--card-${index + 1}-rotation`, `${card.rotation.toFixed(2)}deg`);
    });

    stack.dataset.interacting = active ? "true" : "false";
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;

    const stack = stackRef.current;
    if (!stack) return;

    const bounds = stack.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (event.clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2)));
    const y = Math.max(-1, Math.min(1, (event.clientY - (bounds.top + bounds.height / 2)) / (bounds.height / 2)));
    setCardMotion(x, y, true);
  };

  const resetPointer = () => setCardMotion(0, 0, false);

  return (
    <div
      ref={stackRef}
      className="reel-stack"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
    >
      {children}
    </div>
  );
}
