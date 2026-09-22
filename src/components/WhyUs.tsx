"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whyUs } from "@/lib/data";

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".why-card", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
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
      id="why-us"
      ref={sectionRef}
      className="border-t border-line px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">
          Why Us
        </p>
        <h2 className="mt-6 max-w-2xl font-display text-4xl tracking-tight md:text-6xl">
          Not a task service. A technical build team.
        </h2>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <div
              key={item.index}
              data-cursor="hover"
              className={`why-card group flex flex-col justify-between bg-surface p-10 transition-colors duration-500 hover:bg-ink hover:text-canvas ${
                i === whyUs.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <span className="font-mono text-sm text-accent">
                [{item.index}]
              </span>
              <div className="mt-16">
                <h3 className="font-display text-xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft group-hover:text-canvas/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
