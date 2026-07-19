"use client";

import { Award, Languages } from "lucide-react";

import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CERTIFICATES, LANGUAGES } from "@/constants/data";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export function Credentials() {
  const scope = useSectionReveal<HTMLDivElement>();

  return (
    <div ref={scope}>
      <Section id="credentials" labelledBy="credentials-heading">
        <SectionTitle
          id="credentials-heading"
          table="certificates_and_languages"
          title="Certificates and languages."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="reveal" data-reveal>
            <AnimatedCard className="h-full">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl border border-line bg-ink/70 text-mint">
                  <Award aria-hidden className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">Certificates</h3>
              </div>

              <ul className="space-y-4">
                {CERTIFICATES.map((certificate) => (
                  <li
                    key={certificate.id}
                    className="border-l border-line pl-4 text-sm text-muted"
                  >
                    <p className="text-base text-text">{certificate.name}</p>
                    <p className="mt-1 font-mono text-xs">{certificate.issuer}</p>
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          </div>

          <div className="reveal" data-reveal>
            <AnimatedCard className="h-full">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl border border-line bg-ink/70 text-mint">
                  <Languages aria-hidden className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">Languages</h3>
              </div>

              <ul className="space-y-6">
                {LANGUAGES.map((language) => (
                  <li key={language.id}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-base text-text">{language.name}</p>
                      <p className="font-mono text-xs text-muted">{language.level}</p>
                    </div>
                    <div
                      role="meter"
                      aria-label={`${language.name} proficiency`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={language.value}
                      aria-valuetext={language.level}
                      className="mt-3 h-1 w-full overflow-hidden rounded-full bg-line"
                    >
                      <div
                        className="h-full rounded-full bg-linear-to-r from-periwinkle to-mint"
                        style={{ width: `${language.value}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </Section>
    </div>
  );
}
