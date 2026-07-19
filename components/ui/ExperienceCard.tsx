import { MapPin } from "lucide-react";

import { AnimatedCard } from "@/components/ui/AnimatedCard";
import type { ExperienceItem } from "@/types";

export function ExperienceCard({ item }: { readonly item: ExperienceItem }) {
  return (
    <AnimatedCard>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold sm:text-2xl">{item.role}</h3>
          <p className="mt-1 text-periwinkle-soft">{item.company}</p>
        </div>
        <p className="font-mono text-xs text-muted sm:text-sm">{item.period}</p>
      </div>

      <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
        <MapPin aria-hidden className="size-3.5" />
        {item.location}
      </p>

      <ul className="mt-6 space-y-3">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
            <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-mint" />
            {bullet}
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}
