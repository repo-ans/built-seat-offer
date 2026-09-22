"use client";

import { motion, type Variants } from "framer-motion";
import { challenges } from "@/lib/data";
import ProblemGraphic from "./illustrations/ProblemGraphic";

const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Challenges() {
  return (
    <section
      id="challenges"
      className="border-t border-line px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.4fr]">
        <div>
          <motion.p
            custom={0}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-ink-soft"
          >
            The Problem
          </motion.p>

          <div className="mt-10">
            <ProblemGraphic />
          </div>

          <motion.p
            custom={1}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-10 max-w-sm font-display text-xl leading-snug tracking-tight text-ink md:text-2xl"
          >
            The technical work doesn&apos;t disappear just because you signed
            the client.
          </motion.p>
        </div>

        <div>
          <motion.h2
            custom={1}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-2xl font-display text-3xl leading-tight tracking-tight md:text-5xl"
          >
            You closed the deal. Then the technical part got hard.
          </motion.h2>

          <ul className="mt-12 space-y-0 divide-y divide-line border-y border-line">
            {challenges.map((item, i) => (
              <motion.li
                key={item.index}
                custom={i + 2}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="flex gap-6 py-6"
              >
                <span className="font-mono text-sm text-accent">
                  {item.index}
                </span>
                <p className="max-w-xl text-base leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
