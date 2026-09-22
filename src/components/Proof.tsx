"use client";

import { motion } from "framer-motion";
import { credentials } from "@/lib/data";

/* PROOF SECTION - TO BE COMPLETED
   This section is a stub. Do not add testimonials, review scores,
   or client names until real, verifiable proof is available. */
export default function Proof() {
  return (
    <section
      id="proof"
      className="border-t border-line px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">
          Proof
        </p>
        <h2 className="mt-6 max-w-2xl font-display text-4xl tracking-tight md:text-6xl">
          Credentials, verified.
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
        >
          {credentials.map((cred) => (
            <div
              key={cred.label}
              className="flex flex-col items-center justify-center gap-2 bg-surface px-8 py-14 text-center"
            >
              <span className="font-display text-xl tracking-tight text-accent">
                {cred.label}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                {cred.sublabel}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Featured case study goes here once available. */}
      </div>
    </section>
  );
}
