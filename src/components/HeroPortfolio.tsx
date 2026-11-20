import { motion } from "framer-motion";
import { PROFILE } from "../data/portfolio";

export function HeroPortfolio() {
  return (
    <section id="hero" className="scroll-mt-24 pt-8 sm:pt-14">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl space-y-6"
      >
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="relative flex shrink-0 items-center justify-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-tr from-teal-500/25 via-transparent to-orange-500/25 blur-xl"
            />
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.12] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-2.5 shadow-2xl shadow-black/70 sm:h-20 sm:w-20 sm:p-3">
              <img
                src="/engbbq_logo.png?v=orig"
                alt="ENGBBQ Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur-md">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.7)]"
              />
              {PROFILE.role}
            </span>
            <div className="text-lg font-bold tracking-tight text-[#fafafa] sm:text-xl">
              {PROFILE.name}
            </div>
          </div>
        </div>

        <h1 className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-[1.95rem] leading-[1.16] font-extrabold tracking-tight text-transparent sm:text-5xl sm:leading-[1.12]">
          {PROFILE.headline}
        </h1>

        <p className="max-w-2xl text-[15px] leading-relaxed text-zinc-300/90 sm:text-lg">
          {PROFILE.bio}
        </p>
      </motion.div>
    </section>
  );
}
