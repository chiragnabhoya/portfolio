import type { ReactNode } from "react";

/**
 * Vertical rail used for experience and education. Order carries meaning here
 * (most recent first), so the connecting line is informational, not decorative.
 */
export function Timeline({ children }: { readonly children: ReactNode }) {
  return (
    <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-10">{children}</ol>
  );
}

export function TimelineItem({ children }: { readonly children: ReactNode }) {
  return (
    <li className="reveal relative" data-reveal>
      <span
        aria-hidden
        className="absolute -left-[1.9rem] top-8 size-3 rounded-full border-2 border-ink bg-periwinkle shadow-[0_0_18px_rgba(124,107,242,0.9)] sm:-left-[2.9rem]"
      />
      {children}
    </li>
  );
}
