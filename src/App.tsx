import { MotionConfig } from "framer-motion";
import { NavbarDock } from "./components/NavbarDock";
import { HeroPortfolio } from "./components/HeroPortfolio";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactFooter } from "./components/ContactFooter";

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex min-h-screen flex-col bg-[#09090b] text-[#fafafa]">
        {/* Dual-Tone Restrained Ambient Lighting matching EB Brand */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed -top-48 left-1/4 h-[380px] w-[520px] -translate-x-1/2 rounded-full bg-teal-500/[0.07] blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed -top-40 right-1/4 h-[340px] w-[460px] translate-x-1/2 rounded-full bg-orange-500/[0.055] blur-[140px]"
        />
        <div aria-hidden="true" className="bg-subtle-dots pointer-events-none fixed inset-0" />

        <NavbarDock />

        <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-4 pt-2 pb-12 sm:gap-16 sm:px-6 sm:pb-16">
          <HeroPortfolio />
          <ProjectsSection />
        </main>

        <ContactFooter />
      </div>
    </MotionConfig>
  );
}

export default App;
