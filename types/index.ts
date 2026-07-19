import type { LucideIcon } from "lucide-react";

export interface NavItem {
  readonly id: string;
  readonly label: string;
  readonly href: `#${string}`;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly handle: string;
}

export interface SkillGroup {
  readonly id: string;
  /** Mono label rendered as the "table name" of the card. */
  readonly table: string;
  readonly title: string;
  readonly icon: LucideIcon;
  readonly items: readonly string[];
}

export interface ExperienceItem {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  readonly bullets: readonly string[];
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly kind: string;
  readonly period: string;
  readonly summary: string;
  readonly bullets: readonly string[];
  readonly stack: readonly string[];
  /** TODO: add the public repository URL once available. */
  readonly repoUrl: string | null;
  /** TODO: add the live deployment URL once available. */
  readonly liveUrl: string | null;
}

export interface EducationItem {
  readonly id: string;
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly period: string;
  readonly coursework: readonly string[];
}

export interface CertificateItem {
  readonly id: string;
  readonly name: string;
  readonly issuer: string;
}

export interface LanguageItem {
  readonly id: string;
  readonly name: string;
  readonly level: string;
  /** Rough proficiency share used for the meter, 0-100. */
  readonly value: number;
}
