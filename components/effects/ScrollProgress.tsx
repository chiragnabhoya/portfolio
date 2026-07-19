"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      className="fixed inset-x-0 top-0 z-[70] h-0.5 bg-transparent"
    >
      <div
        className="h-full origin-left bg-linear-to-r from-periwinkle to-mint"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
