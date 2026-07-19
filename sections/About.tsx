"use client";

import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { HIGHLIGHTS, PROFILE_PARAGRAPHS } from "@/constants/data";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export function About() {
  const scope = useSectionReveal<HTMLDivElement>();

  return (
    <div ref={scope}>
      <Section id="about" labelledBy="about-heading">
        <SectionTitle
          id="about-heading"
          table="profile"
          title="Databases first, models second."
        />

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            {PROFILE_PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph}
                className="reveal text-lg leading-relaxed text-muted"
                data-reveal
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line">
            {HIGHLIGHTS.map((highlight) => (
              <div key={highlight.label} className="reveal bg-ink p-6" data-reveal>
                <dt className="font-display text-3xl font-bold text-periwinkle-soft">
                  {highlight.value}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-muted">{highlight.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </div>
  );
}
