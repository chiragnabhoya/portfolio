"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/** Ambient, non-interactive atmosphere: two drifting orbs and a faint grid. */
export function BackgroundEffects() {
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".orb-a", {
          x: 120,
          y: -80,
          duration: 18,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".orb-b", {
          x: -140,
          y: 90,
          duration: 22,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 50% 20%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 20%, black, transparent 75%)",
        }}
      />
      <div className="orb-a absolute -left-24 top-[-10%] size-[36rem] rounded-full bg-periwinkle/20 blur-[140px]" />
      <div className="orb-b absolute -right-32 top-[45%] size-[32rem] rounded-full bg-mint/12 blur-[150px]" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-ink-deep" />
    </div>
  );
}
