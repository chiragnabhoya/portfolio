"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  readonly children: ReactNode;
  readonly className?: string;
}

/**
 * Glass card with a pointer-following glow. The glow is driven through a CSS
 * custom property so no React state updates happen on pointer move.
 */
export function AnimatedCard({ children, className }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn(
        "group relative overflow-hidden rounded-card border border-line bg-surface/60 p-7 backdrop-blur-md transition-colors duration-500 hover:border-periwinkle/50",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(124,107,242,0.16), transparent 70%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
