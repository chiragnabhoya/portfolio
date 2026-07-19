"use client";

import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { EXPERIENCE } from "@/constants/data";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export function Experience() {
  const scope = useSectionReveal<HTMLDivElement>();

  return (
    <div ref={scope}>
      <Section id="experience" labelledBy="experience-heading">
        <SectionTitle
          id="experience-heading"
          table="experience"
          title="Where I have worked."
        />

        <Timeline>
          {EXPERIENCE.map((item) => (
            <TimelineItem key={item.id}>
              <ExperienceCard item={item} />
            </TimelineItem>
          ))}
        </Timeline>
      </Section>
    </div>
  );
}
