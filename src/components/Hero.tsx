"use client";

import { useLayoutEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const lines = [
  "You sold the build.",
  "Now you need someone",
  "who can actually ship it.",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-line span", { yPercent: 110 });
      gsap
        .timeline({ delay: 0.3 })
        .to(".hero-line span", {
          yPercent: 0,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.1,
          clearProps: "transform",
        })
        .from(
          ".hero-fade",
          { opacity: 0, y: 16, duration: 0.8, ease: "power3.out", stagger: 0.15 },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-32 md:pt-12 md:px-12"
    >
      <div className="relative mx-auto w-full max-w-7xl xl:grid xl:grid-cols-[minmax(0,1fr)_26rem] xl:items-center xl:gap-16">
        <div className="relative z-10 max-w-3xl">
          <p className="hero-fade font-mono text-xs uppercase tracking-[0.3em] text-accent">
            White-Label Technical Build Team
          </p>

          <h1 className="mt-6 font-display text-[11vw] font-medium leading-[0.95] tracking-tight md:text-[5.5vw] xl:text-[3.4vw]">
            {lines.map((line) => (
              <span key={line} className="hero-line block overflow-hidden">
                <span className="block">{line}</span>
              </span>
            ))}
          </h1>

          <p className="hero-fade mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            A dedicated technical builder — backed by QA and a full team —
            working white-label inside your accounts. GoHighLevel, Make, n8n,
            Zapier, websites, and AI agents, architected and delivered. You
            keep the client. We build.
          </p>

          <div className="hero-fade mt-10 flex flex-wrap items-center gap-6">
            <MagneticButton href="#book">Start a Project →</MagneticButton>
          </div>

          <p className="hero-fade mt-6 font-mono text-xs uppercase tracking-widest text-ink-soft">
            No monthly commitment &middot; Start with one build &middot;
            White-label
          </p>
        </div>

        <div className="pointer-events-none relative hidden h-104 xl:block">
          <HeroScene />
        </div>
      </div>

      <div className="absolute inset-0 z-10 px-6 md:px-12">
        <div className="relative mx-auto h-full max-w-7xl">
          <div className="hero-fade absolute bottom-10 left-0 hidden items-center gap-3 text-xs uppercase tracking-widest text-ink-soft md:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-soft">
              <ArrowIcon />
            </span>
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M6 1V11M6 11L1.5 6.5M6 11L10.5 6.5"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
