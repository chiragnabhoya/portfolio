"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Section } from "@/components/ui/Section";
import { SOCIALS } from "@/constants/data";
import { SITE } from "@/constants/site";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export function Contact() {
  const scope = useSectionReveal<HTMLDivElement>();

  return (
    <div ref={scope}>
      <Section id="contact" labelledBy="contact-heading">
        <div className="relative overflow-hidden rounded-card border border-line bg-surface/40 px-6 py-16 text-center backdrop-blur-md sm:px-12 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-32 mx-auto size-[28rem] rounded-full bg-periwinkle/20 blur-[130px]"
          />

          <div className="relative z-10">
            <p className="eyebrow reveal mb-5" data-reveal>
              -- contact
            </p>
            <h2
              id="contact-heading"
              className="reveal mx-auto max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl"
              data-reveal
            >
              Looking for a data or AI role in Germany?
            </h2>
            <p
              className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
              data-reveal
            >
              I am available for internships and working student positions, and I answer
              email quickly.
            </p>

            <div className="reveal mt-10 flex flex-wrap justify-center gap-4" data-reveal>
              <AnimatedButton href={`mailto:${SITE.email}`}>
                <Mail aria-hidden className="size-4" />
                {SITE.email}
              </AnimatedButton>
              <AnimatedButton href={`tel:${SITE.phone.replace(/\s/g, "")}`} variant="outline">
                <Phone aria-hidden className="size-4" />
                {SITE.phone}
              </AnimatedButton>
            </div>

            <ul
              className="reveal mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs text-muted"
              data-reveal
            >
              <li className="flex items-center gap-1.5">
                <MapPin aria-hidden className="size-3.5" />
                {SITE.location}
              </li>
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
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
