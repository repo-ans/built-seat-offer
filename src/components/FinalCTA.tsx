"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function FinalCTA() {
  return (
    <section
      id="book"
      className="border-t border-line px-6 py-28 text-center md:px-12 md:py-40"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
      >
        Get Started
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mx-auto mt-6 max-w-3xl font-display text-4xl tracking-tight md:text-7xl"
      >
        Start with one build. No commitment.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft"
      >
        Send us your next technical project. We&apos;ll scope it, build it, QA
        it, and deliver it white-label. Prove the work first — scale from
        there.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-12 flex justify-center"
      >
        <MagneticButton href="#book">Start a Project →</MagneticButton>
      </motion.div>

      <p className="mt-6 font-mono text-xs uppercase tracking-widest text-ink-soft">
        $25/hr &middot; White-label &middot; Free replacement if the fit isn&apos;t right
      </p>

      {/* GHL FORM / BOOKING EMBED GOES HERE */}
    </section>
  );
}
