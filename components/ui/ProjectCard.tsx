import { ExternalLink, Github, Table2 } from "lucide-react";

import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Tag } from "@/components/ui/Tag";
import type { ProjectItem } from "@/types";

export function ProjectCard({ project }: { readonly project: ProjectItem }) {
  return (
    <div className="reveal" data-reveal>
      <AnimatedCard className="p-0">
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          {/*
            Image placeholder. TODO: add a screenshot to /public/projects/ and
            replace this block with next/image, including width, height and alt.
          */}
          <div className="relative flex min-h-56 items-center justify-center overflow-hidden border-b border-line bg-ink/70 lg:min-h-full lg:border-b-0 lg:border-r">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(124,107,242,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(55,208,176,0.14) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
              <Table2 aria-hidden className="size-8 text-periwinkle-soft" />
              <p className="font-mono text-xs text-muted">
                screenshot pending — /public/projects/{project.id}.png
              </p>
            </div>
          </div>

          <div className="p-7 sm:p-9">
            <p className="font-mono text-xs text-mint">
              {project.kind} · {project.period}
            </p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>

            <ul className="mt-6 space-y-3">
              {project.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                >
                  <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-periwinkle" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech} label={tech} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm text-text transition-colors hover:text-mint"
                >
                  <Github aria-hidden className="size-4" />
                  View code
                </a>
              ) : (
                /* TODO: add repository link in constants/data.ts */
                <span className="font-mono text-xs text-muted">repository link pending</span>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm text-text transition-colors hover:text-mint"
                >
                  <ExternalLink aria-hidden className="size-4" />
                  Open live demo
                </a>
              ) : (
                /* TODO: add live demo link in constants/data.ts */
                <span className="font-mono text-xs text-muted">no live demo</span>
              )}
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
}
