import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data/portfolio";

export function NavbarDock() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#09090b]/80 backdrop-blur-xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="#hero"
          className="group flex shrink-0 items-center gap-2.5 text-[#fafafa]"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.04] p-1 transition-colors group-hover:border-white/[0.18] sm:h-9 sm:w-9">
            <img
              src="/engbbq_logo.png?v=orig"
              alt="ENGBBQ"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="whitespace-nowrap text-sm font-bold tracking-tight">
            ENGBBQ<span className="text-zinc-500">.me</span>
          </span>
        </a>

        <nav aria-label="Sản phẩm" className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <a
            href={PROFILE.lootUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[36px] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-200 hover:border-teal-400/45 hover:bg-teal-500/[0.08] hover:text-teal-200 active:scale-[0.98] sm:px-3.5"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.65)]"
            />
            <span className="sm:hidden">Loot</span>
            <span className="hidden sm:inline">loot.engbbq.me</span>
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-75" strokeWidth={1.7} />
          </a>

          <a
            href={PROFILE.tuviUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[36px] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-200 hover:border-orange-400/45 hover:bg-orange-500/[0.08] hover:text-orange-200 active:scale-[0.98] sm:px-3.5"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.65)]"
            />
            <span className="sm:hidden">Tử Vi</span>
            <span className="hidden sm:inline">tuvi.engbbq.me</span>
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-75" strokeWidth={1.7} />
          </a>
        </nav>
      </div>
    </header>
  );
}
