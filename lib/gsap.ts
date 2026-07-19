"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Shared easing so every motion on the page feels like one system. */
export const EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  soft: "expo.out",
} as const;

export { gsap, ScrollTrigger, useGSAP };
