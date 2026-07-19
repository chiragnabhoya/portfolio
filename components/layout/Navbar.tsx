"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { NAV_ITEMS } from "@/constants/data";
import { SITE } from "@/constants/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { EASE, gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -40,
        opacity: 0,
        duration: 1,
        delay: 2.1,
        ease: EASE.out,
      });
    },
    { scope: navRef },
  );

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex w-[min(100%-1.5rem,72rem)] items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
          scrolled ? "glass shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)]" : "bg-transparent border border-transparent",
        )}
      >
        <a href="#hero" className="font-display text-lg font-bold tracking-tight">
          {SITE.name.split(" ")[0]}
          <span className="text-mint">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                  active === item.id ? "text-text" : "text-muted hover:text-text",
                )}
              >
                {item.label}
                {active === item.id ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-4 -bottom-0.5 h-px bg-linear-to-r from-transparent via-mint to-transparent"
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${SITE.email}`}
          className="hidden rounded-full border border-line px-5 py-2 text-sm text-text transition-colors duration-300 hover:border-mint hover:text-mint md:inline-block"
        >
          Email me
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-full border border-line p-2 text-text md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="glass mx-auto mt-3 w-[min(100%-1.5rem,72rem)] rounded-3xl p-5 md:hidden"
      >
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base text-muted transition-colors hover:bg-surface-2 hover:text-text"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${SITE.email}`}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base text-mint"
            >
              Email me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
