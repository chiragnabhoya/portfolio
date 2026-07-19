import type { Metadata, Viewport } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";

import { SITE } from "@/constants/site";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s — ${SITE.name}` },
  description: SITE.tagline,
  keywords: [
    "Chirag Nabhoya",
    "Data Science",
    "Data Analyst",
    "Machine Learning",
    "SQL",
    "Python",
    "Rust",
    "Werkstudent",
    "Germany",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.tagline,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.tagline,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: "#0a0c11",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: "Data Science / AI",
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mainz",
    addressCountry: "DE",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Technical University of Bingen" },
    { "@type": "CollegeOrUniversity", name: "Veer Narmad South Gujarat University" },
  ],
  sameAs: [
    "https://github.com/chiragnabhoya",
    "https://linkedin.com/in/chirag-nabhoya",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <noscript>
          <style>{`.reveal, .hero-terminal, .hero-result, [data-hero] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-periwinkle focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
