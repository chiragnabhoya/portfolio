"use client";

import { useRef } from "react";
import { EASE, gsap, useGSAP } from "@/lib/gsap";

/**
 * Reveals every `[data-reveal]` child of the returned ref when the section
 * scrolls into view, with a stagger. Respects reduced-motion via matchMedia.
 */
export function useSectionReveal<T extends HTMLElement>() {
  const scope = useRef<T | null>(null);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      if (targets.length === 0) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduced } = context.conditions as { reduced: boolean };

          if (reduced) {
            gsap.set(targets, { opacity: 1, y: 0 });
            return;
          }

          gsap.fromTo(
            targets,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: EASE.out,
              stagger: 0.08,
              scrollTrigger: {
                trigger: scope.current,
                start: "top 78%",
                once: true,
              },
            },
          );
        },
      );

      return () => mm.revert();
    },
    { scope },
  );

  return scope;
}
