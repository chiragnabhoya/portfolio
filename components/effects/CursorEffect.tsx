"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * A soft trailing halo on pointer-capable devices only. Skipped entirely on
 * touch input and when reduced motion is requested.
 */
export function CursorEffect() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const node = dotRef.current;
    if (!fine || reduced || !node) return;

    gsap.set(node, { xPercent: -50, yPercent: -50, opacity: 0 });

    const moveX = gsap.quickTo(node, "x", { duration: 0.5, ease: "power3.out" });
    const moveY = gsap.quickTo(node, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (event: PointerEvent) => {
      moveX(event.clientX);
      moveY(event.clientY);
      gsap.to(node, { opacity: 1, duration: 0.3, overwrite: "auto" });
    };

    const onLeave = () => gsap.to(node, { opacity: 0, duration: 0.3 });

    const onOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [role='button']");
      gsap.to(node, { scale: interactive ? 2.4 : 1, duration: 0.35, overwrite: "auto" });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden size-8 rounded-full border border-mint/60 bg-mint/10 backdrop-blur-[1px] md:block"
    />
  );
}
