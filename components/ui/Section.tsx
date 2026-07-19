import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  readonly id: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly labelledBy?: string;
}

/** Consistent vertical rhythm and max width for every content section. */
export function Section({ id, children, className, labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative px-5 py-24 sm:px-8 md:py-32", className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
