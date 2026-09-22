"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "outline";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 12, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 150, damping: 12, mass: 0.3 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = href ? "a" : "button";

  const variantClass =
    variant === "primary"
      ? "bg-accent text-canvas border border-accent hover:brightness-110"
      : "border border-ink text-ink hover:bg-ink hover:text-canvas";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
      data-cursor="hover"
    >
      <Tag
        href={href}
        className={`group relative inline-flex items-center gap-3 rounded-full px-8 py-4 font-display text-sm font-medium uppercase tracking-wide transition-all duration-300 ${variantClass} ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
