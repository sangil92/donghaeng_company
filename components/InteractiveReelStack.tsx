"use client";

import { useRef, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";

const baseCards = [
  { x: 0, y: 0, rotation: 0 },
  { x: 0, y: 0, rotation: 0 },
  { x: 0, y: 0, rotation: 0 },
] as const;

export function InteractiveReelStack({ children }: { children: ReactNode }) {
  const stackRef = useRef<HTMLDivElement>(null);

  const setCardMotion = (x: number, y: number, active: boolean) => {
    const stack = stackRef.current;
    if (!stack) return;

    const motion = [
      { x: x * 10, y: y * 8, rotation: baseCards[0].rotation + x * 1.2 },
      { x: x * 16, y: y * 12, rotation: baseCards[1].rotation + x * 1.6 },
      { x: x * 10, y: y * 8, rotation: baseCards[2].rotation - x * 1.2 },
    ];

    motion.forEach((card, index) => {
      const element = stack.querySelector<HTMLElement>(`.r${index + 1}`);
      element?.style.setProperty("transform", `translate3d(${card.x.toFixed(2)}px, ${card.y.toFixed(2)}px, 0) rotate(${card.rotation.toFixed(2)}deg)`);
    });

    stack.dataset.interacting = active ? "true" : "false";
  };

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
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
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPointer}
    >
      {children}
    </div>
  );
}
