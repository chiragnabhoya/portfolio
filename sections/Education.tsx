"use client";

import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tag } from "@/components/ui/Tag";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { EDUCATION } from "@/constants/data";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export function Education() {
  const scope = useSectionReveal<HTMLDivElement>();

  return (
    <div ref={scope}>
      <Section id="education" labelledBy="education-heading">
        <SectionTitle
          id="education-heading"
          table="education"
          title="What I studied."
        />

        <Timeline>
          {EDUCATION.map((item) => (
            <TimelineItem key={item.id}>
              <AnimatedCard>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold sm:text-2xl">{item.degree}</h3>
                    <p className="mt-1 text-periwinkle-soft">
                      {item.institution} · {item.location}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-muted sm:text-sm">{item.period}</p>
                </div>

                {item.coursework.length > 0 ? (
                  <div className="mt-6">
                    <p className="font-mono text-xs text-muted">relevant coursework</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <Tag key={course} label={course} />
                      ))}
                    </div>
                  </div>
                ) : null}
              </AnimatedCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>
    </div>
  );
}
