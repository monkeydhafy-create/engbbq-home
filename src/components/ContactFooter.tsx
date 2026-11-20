import { PROFILE } from "../data/portfolio";

export function ContactFooter() {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6">
      <div className="border-t border-white/[0.07] py-6 text-xs text-zinc-400 sm:py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img
              src="/engbbq_logo.png?v=orig"
              alt="ENGBBQ"
              className="h-5 w-5 object-contain"
            />
            <span>© 2026 {PROFILE.name} · Fullstack &amp; DevOps</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href={PROFILE.lootUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono transition hover:text-teal-300"
            >
              loot.engbbq.me
            </a>
            <a
              href={PROFILE.tuviUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono transition hover:text-orange-300"
            >
              tuvi.engbbq.me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
