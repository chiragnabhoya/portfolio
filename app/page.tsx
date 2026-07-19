import dynamic from "next/dynamic";

import { BackToTop } from "@/components/effects/BackToTop";
import { BackgroundEffects } from "@/components/effects/BackgroundEffects";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Credentials } from "@/sections/Credentials";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";

// Pointer-only flourish, so it is split out of the initial bundle.
const CursorEffect = dynamic(() =>
  import("@/components/effects/CursorEffect").then((mod) => mod.CursorEffect),
);

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <BackgroundEffects />
      <CursorEffect />
      <ScrollProgress />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Credentials />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
