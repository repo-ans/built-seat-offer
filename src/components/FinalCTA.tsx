"use client";

import { motion } from "framer-motion";
import LeadForm from "./LeadForm";

const points = [
  "We scope it with you.",
  "We build it inside your accounts.",
  "We QA it before it reaches your client.",
  "We deliver it white-label.",
];

export default function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden border-t border-line px-6 py-24 md:px-12 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 size-180 -translate-x-1/2 rounded-full bg-accent/6 blur-[140px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
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
            className="mt-6 font-display text-4xl tracking-tight md:text-6xl"
          >
            Start with one build. No commitment.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink-soft"
          >
            Send us your next technical project. We&apos;ll scope it, build it, QA it, and deliver it
            white-label. Prove the work first — scale from there.
          </motion.p>

          <ul className="mt-10 grid gap-4">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 text-sm"
              >
                <span className="flex size-6 items-center justify-center rounded-full border border-accent/50 text-accent">
                  <svg viewBox="0 0 16 16" className="size-3">
                    <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {p}
              </motion.li>
            ))}
          </ul>

          <p className="mt-10 font-mono text-xs uppercase tracking-widest text-ink-soft">
            $25/hr &middot; White-label &middot; Free replacement if the fit isn&apos;t right
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <LeadForm />
        </motion.div>
      </div>
    </section>
  );
}
