"use client";

import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillCard } from "@/components/ui/SkillCard";
import { SKILL_GROUPS } from "@/constants/data";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export function Skills() {
  const scope = useSectionReveal<HTMLDivElement>();

  return (
    <div ref={scope}>
      <Section id="skills" labelledBy="skills-heading">
        <SectionTitle
          id="skills-heading"
          table="skills"
          title="The schema I work in."
          description="Grouped the way I actually use them: a language layer, a data layer, a storage layer, and the systems around them."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </div>
      </Section>
    </div>
  );
}
