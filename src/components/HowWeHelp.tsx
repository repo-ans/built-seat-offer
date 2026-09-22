"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { howWeHelp } from "@/lib/data";

export default function HowWeHelp() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".help-card", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-we-help"
      ref={sectionRef}
      className="border-t border-line px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">
          How We Help
        </p>
        <h2 className="mt-6 max-w-2xl font-display text-4xl tracking-tight md:text-6xl">
          One seat. The whole build team behind it.
        </h2>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {howWeHelp.map((item) => (
            <div
              key={item.index}
              data-cursor="hover"
              className="help-card group flex flex-col justify-between bg-surface p-10 transition-colors duration-500 hover:bg-accent hover:text-canvas"
            >
              <span className="font-mono text-sm text-accent transition-colors duration-500 group-hover:text-canvas">
                [{item.index}]
              </span>
              <div className="mt-16">
                <h3 className="font-display text-2xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft group-hover:text-canvas/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="mt-14 max-w-2xl font-display text-xl tracking-tight text-ink md:text-2xl"
        >
          You brief it. We build it, test it, and hand it back client-ready.
        </motion.p>
      </div>
    </section>
  );
}
