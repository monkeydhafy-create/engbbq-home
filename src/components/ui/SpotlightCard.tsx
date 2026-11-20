import type { ReactNode, MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  accent?: "teal" | "orange";
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.06)",
  accent,
}: SpotlightCardProps) {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(-400);
    mouseY.set(-400);
  }

  const borderGlowColor =
    accent === "teal"
      ? "rgba(45, 212, 191, 0.42)"
      : accent === "orange"
        ? "rgba(251, 146, 60, 0.42)"
        : "rgba(255, 255, 255, 0.22)";

  const background = useMotionTemplate`radial-gradient(460px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 75%)`;
  const borderBackground = useMotionTemplate`radial-gradient(340px circle at ${mouseX}px ${mouseY}px, ${borderGlowColor}, transparent 70%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`surface-card group relative overflow-hidden rounded-3xl transition-[border-color,box-shadow] duration-300 hover:border-white/[0.15] ${className}`}
    >
      {/* Static Ambient Top Glow (visible on Mobile & Desktop) */}
      {accent && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 h-36 ${
            accent === "teal"
              ? "bg-[radial-gradient(ellipse_75%_100%_at_50%_0%,rgba(20,184,166,0.11),transparent_75%)]"
              : "bg-[radial-gradient(ellipse_75%_100%_at_50%_0%,rgba(249,115,22,0.11),transparent_75%)]"
          }`}
        />
      )}

      {/* Mouse-Tracking Border Glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: borderBackground,
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Mouse-Tracking Surface Spotlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
