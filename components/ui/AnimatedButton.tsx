"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  readonly href: string;
  readonly children: ReactNode;
  readonly variant?: "solid" | "outline";
  readonly external?: boolean;
  readonly ariaLabel?: string;
}

/**
 * Link styled as a button. The sheen is a CSS transition rather than a GSAP
 * timeline so it stays cheap on hover-heavy pages.
 */
export function AnimatedButton({
  href,
  children,
  variant = "solid",
  external = false,
  ariaLabel,
}: AnimatedButtonProps) {
  const base =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium transition-transform duration-300 will-change-transform hover:-translate-y-0.5";

  const styles =
    variant === "solid"
      ? "bg-linear-to-r from-periwinkle to-mint text-ink-deep shadow-[0_8px_40px_-12px_rgba(124,107,242,0.8)]"
      : "glass text-text hover:border-periwinkle/60";

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(base, styles)}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
    </a>
  );
}
