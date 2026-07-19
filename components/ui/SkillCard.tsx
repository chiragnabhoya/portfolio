import { AnimatedCard } from "@/components/ui/AnimatedCard";
import type { SkillGroup } from "@/types";

export function SkillCard({ group }: { readonly group: SkillGroup }) {
  const Icon = group.icon;

  return (
    <div className="reveal h-full" data-reveal>
      <AnimatedCard className="h-full">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl border border-line bg-ink/70 text-mint">
            <Icon aria-hidden className="size-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <p className="font-mono text-xs text-muted">{group.table}</p>
          </div>
        </div>

        <ul className="space-y-2.5">
          {group.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-periwinkle" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </AnimatedCard>
    </div>
  );
}
