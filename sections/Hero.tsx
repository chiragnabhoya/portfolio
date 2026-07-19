"use client";

import { useRef } from "react";
import { ArrowDown, Mail } from "lucide-react";

import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { SOCIALS } from "@/constants/data";
import { SITE } from "@/constants/site";
import { EASE, gsap, useGSAP } from "@/lib/gsap";

const QUERY = "SELECT focus, location FROM candidates WHERE available = TRUE;";
const NAME_WORDS = SITE.name.split(" ");

export function Hero() {
  const scope = useRef<HTMLElement | null>(null);
  const queryRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const queryNode = queryRef.current;

      if (reduced) {
        if (queryNode) queryNode.textContent = QUERY;
        gsap.set(".hero-terminal, .hero-result, [data-hero]", { opacity: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({ delay: 2.1 });
      const typed = { chars: 0 };

      timeline
        .to(".hero-terminal", { opacity: 1, y: 0, duration: 0.7, ease: EASE.out })
        .to(
          typed,
          {
            chars: QUERY.length,
            duration: 1.6,
            ease: "none",
            onUpdate: () => {
              if (queryNode) queryNode.textContent = QUERY.slice(0, Math.round(typed.chars));
            },
          },
          "-=0.2",
        )
        .to(".hero-result", { opacity: 1, duration: 0.4 }, "-=0.1")
        .from(
          ".hero-word",
          { yPercent: 110, opacity: 0, duration: 1, ease: EASE.soft, stagger: 0.09 },
          "-=0.15",
        )
        .to(
          "[data-hero]",
          { opacity: 1, y: 0, duration: 0.8, ease: EASE.out, stagger: 0.1 },
          "-=0.55",
        );
    },
    { scope },
  );

  return (
    <section
      id="hero"
      ref={scope}
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh items-center px-5 pb-20 pt-32 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Signature element: the page opens as a query run against himself. */}
        <div className="hero-terminal glass translate-y-4 rounded-2xl p-4 opacity-0 sm:p-5 md:max-w-2xl">
          <div className="mb-3 flex items-center gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-mint/60" />
          </div>
          <p className="font-mono text-[0.8rem] leading-relaxed text-muted sm:text-sm">
            <span className="text-mint">psql&gt;</span>{" "}
            <span ref={queryRef} className="text-text" />
            <span
              aria-hidden
              className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-periwinkle align-middle"
            />
          </p>
          <p className="hero-result mt-3 font-mono text-[0.8rem] text-muted opacity-0 sm:text-sm">
            1 row · {SITE.role} · {SITE.location}
          </p>
        </div>

        <h1
          id="hero-heading"
          className="mt-10 font-display text-[clamp(2.75rem,10vw,7.5rem)] font-bold leading-[0.92] tracking-tight"
        >
          <span className="sr-only">{SITE.name}</span>
          <span aria-hidden className="block">
            {NAME_WORDS.map((word) => (
              <span key={word} className="block overflow-hidden pb-1">
                <span className="hero-word block gradient-text">{word}</span>
              </span>
            ))}
          </span>
        </h1>

        <p
          data-hero
          className="mt-8 max-w-xl translate-y-5 text-lg leading-relaxed text-muted opacity-0 sm:text-xl"
        >
          {SITE.tagline} Looking for a data science, data analyst or AI role — internship or
          working student — in Germany.
        </p>

        <div data-hero className="mt-10 flex translate-y-5 flex-wrap gap-4 opacity-0">
          <AnimatedButton href={`mailto:${SITE.email}`}>
            <Mail aria-hidden className="size-4" />
            Email me
          </AnimatedButton>
          <AnimatedButton href="#projects" variant="outline">
            See the work
            <ArrowDown aria-hidden className="size-4" />
          </AnimatedButton>
        </div>

        <ul
          data-hero
          className="mt-12 flex translate-y-5 flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-muted opacity-0"
        >
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-mint"
              >
                {social.handle}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-mint">
              {SITE.email}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
