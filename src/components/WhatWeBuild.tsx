"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whatWeBuild } from "@/lib/data";
import {
  PipelineIcon,
  FlowNodesIcon,
  BranchIcon,
  BoltIcon,
  BrowserIcon,
  ChatIcon,
  HeadsetIcon,
  PlugIcon,
} from "./icons/BuildIcons";

const iconMap = {
  pipeline: PipelineIcon,
  flow: FlowNodesIcon,
  branch: BranchIcon,
  bolt: BoltIcon,
  browser: BrowserIcon,
  chat: ChatIcon,
  headset: HeadsetIcon,
  plug: PlugIcon,
} as const;

export default function WhatWeBuild() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".build-item", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
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
      id="what-we-build"
      ref={sectionRef}
      className="border-t border-line px-6 py-28 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">
          What We Build
        </p>
        <h2 className="mt-6 max-w-2xl font-display text-4xl tracking-tight md:text-6xl">
          If it runs on automation or AI, we build it.
        </h2>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {whatWeBuild.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                data-cursor="hover"
                className="build-item group flex min-h-42 flex-col justify-between bg-surface p-6 transition-colors duration-500 hover:bg-accent"
              >
                <Icon className="h-7 w-7 text-accent transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:text-canvas" />
                <h3 className="font-display text-lg tracking-tight text-ink transition-colors duration-500 group-hover:text-canvas">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
