"use client";

import { useRef, useState } from "react";
import { EASE, gsap, useGSAP } from "@/lib/gsap";

/**
 * Brief entry curtain. It resolves on its own timeline so the hero animation
 * can start from a settled page rather than fighting the first paint.
 */
export function LoadingScreen() {
  const scope = useRef<HTMLDivElement | null>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduced) {
        setDone(true);
        return;
      }

      const timeline = gsap.timeline({ onComplete: () => setDone(true) });

      timeline
        .to(".loader-bar", { scaleX: 1, duration: 1.1, ease: "power2.inOut" })
        .to(".loader-label", { opacity: 0, duration: 0.3 }, "-=0.15")
        .to(scope.current, { yPercent: -100, duration: 0.8, ease: EASE.soft });
    },
    { scope },
  );

  if (done) return null;

  return (
    <div
      ref={scope}
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-ink-deep"
    >
      <p className="loader-label font-mono text-xs tracking-[0.3em] text-muted">
        connecting…
      </p>
      <div className="mt-6 h-px w-40 overflow-hidden bg-line">
        <div className="loader-bar h-full origin-left scale-x-0 bg-linear-to-r from-periwinkle to-mint" />
      </div>
      <span className="sr-only">Loading portfolio</span>
    </div>
  );
}
