"use client";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROJECTS } from "@/constants/data";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export function Projects() {
  const scope = useSectionReveal<HTMLDivElement>();

  return (
    <div ref={scope}>
      <Section id="projects" labelledBy="projects-heading">
        <SectionTitle
          id="projects-heading"
          table="projects"
          title="What I have built."
        />

        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
