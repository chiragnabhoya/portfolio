import { Braces, Brain, Database, ShieldCheck, BarChart3, Globe } from "lucide-react";

import type {
  CertificateItem,
  EducationItem,
  ExperienceItem,
  LanguageItem,
  NavItem,
  ProjectItem,
  SkillGroup,
  SocialLink,
} from "@/types";

export const NAV_ITEMS: readonly NavItem[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "education", label: "Education", href: "#education" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const SOCIALS: readonly SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/chiragnabhoya",
    handle: "github.com/chiragnabhoya",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/chirag-nabhoya",
    handle: "linkedin.com/in/chirag-nabhoya",
  },
];

export const PROFILE_PARAGRAPHS: readonly string[] = [
  "I am a Master's student in Computer Science at the Technical University of Bingen, with coursework spanning advanced databases, artificial intelligence, computer vision, data mining, and secure systems programming in Rust.",
  "Alongside strong Python and SQL foundations, I have hands-on experience with structured datasets, relational databases, and Linux-based systems, built in a professional German working environment.",
  "I am looking for a Data Science, Data Analyst, or AI internship or working student position in Germany.",
];

export const HIGHLIGHTS: readonly { readonly value: string; readonly label: string }[] = [
  { value: "M.Sc.", label: "Computer Science, in progress" },
  { value: "7", label: "Graduate courses in data and AI" },
  { value: "8 mo", label: "IT support in a German enterprise" },
  { value: "B1", label: "German, professional working" },
];

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    id: "programming",
    table: "programming",
    title: "Programming",
    icon: Braces,
    items: ["Python", "SQL", "Rust", "Java", "PHP"],
  },
  {
    id: "ai-data",
    table: "ai_and_data",
    title: "AI & Data",
    icon: Brain,
    items: [
      "Machine Learning",
      "Computer Vision",
      "Data Mining",
      "Statistical Analysis",
      "Data Cleaning & Validation",
    ],
  },
  {
    id: "databases",
    table: "databases",
    title: "Databases",
    icon: Database,
    items: [
      "MySQL",
      "MariaDB",
      "Oracle SQL Developer",
      "Relational & Advanced Data Modeling",
      "Query Optimization",
    ],
  },
  {
    id: "systems",
    table: "systems_and_security",
    title: "Systems & Security",
    icon: ShieldCheck,
    items: [
      "Systems Analysis & Design",
      "Safe & Secure Programming (Rust)",
      "Linux (CLI)",
      "Windows",
      "Git",
    ],
  },
  {
    id: "tools",
    table: "tools_and_visualization",
    title: "Tools & Visualization",
    icon: BarChart3,
    items: ["Power BI", "MS Excel"],
  },
  {
    id: "web",
    table: "web_and_apis",
    title: "Web & APIs",
    icon: Globe,
    items: ["MVC Architecture", "HTML", "CSS", "JavaScript", "AJAX"],
  },
];

export const EXPERIENCE: readonly ExperienceItem[] = [
  {
    id: "sims",
    role: "IT Support Technician",
    company: "SIMS Lifecycle Services GmbH",
    location: "Ginsheim-Gustavsburg, Germany",
    period: "02/2024 — 09/2024",
    bullets: [
      "Worked with Linux and Windows command-line tools for system operations and data handling.",
      "Performed log analysis, file-level data processing, and system diagnostics.",
      "Supported troubleshooting in enterprise IT environments with structured documentation.",
      "Strengthened analytical thinking and problem-solving in a professional German-speaking workplace.",
    ],
  },
];

export const PROJECTS: readonly ProjectItem[] = [
  {
    id: "mobile-shopping",
    title: "Online Mobile Shopping System",
    kind: "Academic project",
    period: "05/2020 — 04/2021",
    summary:
      "A data-driven e-commerce application built around a normalised relational schema and SQL reporting.",
    bullets: [
      "Developed a data-driven e-commerce application using PHP, JavaScript, and MySQL.",
      "Designed relational database schemas for users, products, orders, and transactions.",
      "Created SQL queries to analyse sales data, user behaviour, and inventory metrics.",
      "Implemented AJAX for efficient data retrieval and admin reporting dashboards.",
    ],
    stack: ["PHP", "JavaScript", "MySQL", "AJAX", "MVC"],
    repoUrl: null,
    liveUrl: null,
  },
];

export const EDUCATION: readonly EducationItem[] = [
  {
    id: "msc",
    degree: "M.Sc. Computer Science",
    institution: "Technical University of Bingen",
    location: "Germany",
    period: "09/2022 — Present",
    coursework: [
      "Advanced Database Systems",
      "Systems Analysis",
      "Artificial Intelligence",
      "Higher Mathematics for Information Systems",
      "Computer Vision",
      "Advanced Data Mining",
      "Safe and Secure Programming in Rust",
    ],
  },
  {
    id: "bca",
    degree: "BCA — Bachelor of Computer Application",
    institution: "Veer Narmad South Gujarat University",
    location: "India",
    period: "05/2018 — 06/2021",
    coursework: [],
  },
];

export const CERTIFICATES: readonly CertificateItem[] = [
  { id: "web-dev", name: "Web Development Training", issuer: "Nova One Click Solution" },
];

export const LANGUAGES: readonly LanguageItem[] = [
  { id: "en", name: "English", level: "Professional working proficiency", value: 90 },
  { id: "de", name: "German", level: "Professional working proficiency (B1)", value: 60 },
];
