import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { PRODUCTS } from "../data/portfolio";
import { SpotlightCard } from "./ui/SpotlightCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-2xl">
          Dự án tiêu biểu
        </h2>
        <div
          aria-hidden="true"
          className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
        {PRODUCTS.map((product, index) => {
          const isTeal = product.accent === "teal";
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -3 }}
              className="h-full"
            >
              <SpotlightCard
                className="h-full"
                accent={product.accent}
                spotlightColor={
                  isTeal ? "rgba(20, 184, 166, 0.09)" : "rgba(249, 115, 22, 0.09)"
                }
              >
                {/* Top Accent Hairline */}
                <div
                  aria-hidden="true"
                  className={`h-px w-full bg-gradient-to-r from-transparent ${
                    isTeal ? "via-teal-400/60" : "via-orange-400/60"
                  } to-transparent`}
                />

                <div className="flex h-full flex-col p-5 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${
                        isTeal
                          ? "border-teal-500/25 bg-teal-500/10 text-teal-300"
                          : "border-orange-500/25 bg-orange-500/10 text-orange-300"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isTeal
                            ? "bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.75)]"
                            : "bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.75)]"
                        }`}
                      />
                      {product.label}
                    </span>
                    <span className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 font-mono text-[11px] text-zinc-400">
                      {product.domain}
                    </span>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {product.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                      {product.description}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-3 border-t border-white/[0.06] pt-5 text-sm text-zinc-200">
                    {product.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            isTeal
                              ? "border-teal-500/25 bg-teal-500/10 text-teal-300"
                              : "border-orange-500/25 bg-orange-500/10 text-orange-300"
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={2.4} />
                        </span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-3.5 pt-6">
                    {product.offlineNote && (
                      <p className="rounded-xl border border-orange-500/20 bg-orange-500/[0.06] px-3.5 py-2.5 text-xs leading-relaxed text-zinc-300">
                        {product.offlineNote.textBefore}{" "}
                        <a
                          href={product.offlineNote.zaloHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-orange-300 underline decoration-orange-400/50 underline-offset-2 transition hover:text-orange-200"
                        >
                          {product.offlineNote.zaloPhone}
                        </a>{" "}
                        {product.offlineNote.textAfter}
                      </p>
                    )}

                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/cta inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-lg transition-all duration-200 active:scale-[0.98] ${
                        isTeal
                          ? "bg-teal-400 text-zinc-950 shadow-teal-500/10 hover:bg-teal-300"
                          : "bg-orange-400 text-zinc-950 shadow-orange-500/10 hover:bg-orange-300"
                      }`}
                    >
                      <span>{product.cta}</span>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                        strokeWidth={2}
                      />
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
