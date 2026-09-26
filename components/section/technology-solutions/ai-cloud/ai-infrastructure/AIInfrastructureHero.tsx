"use client";

import { motion } from "framer-motion";
import { ArrowDown, Cpu, Radio, Sparkles } from "lucide-react";
import ComputeFabricModel from "./ComputeFabricModel";

const features = [
  { Icon: Cpu, text: "Accelerated compute" },
  { Icon: Radio, text: "High-speed fabric" },
  { Icon: Sparkles, text: "AI-ready architecture" },
];

export default function AIInfrastructureHero() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 pb-24 pt-32 text-white md:px-10 md:pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(circle at 50% 40%, black, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 40%, black, transparent 72%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[320px] h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-[#7046e6]/[0.08] blur-[190px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1100px] text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.07] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9878ef] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b99cff]" />
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.32em] text-[#b99cff]">
              HYI.AI / AI Infrastructure
            </span>
          </div>

          <h1 className="mt-8 text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.84] tracking-[-0.075em]">
            Infrastructure
            <span className="block bg-gradient-to-r from-white via-[#d9cbef] to-[#7653d9] bg-clip-text text-transparent">
              built for AI.
            </span>
          </h1>

          <p className="mx-auto mt-9 max-w-[760px] text-[13px] leading-7 text-white/[0.55] md:text-[15px]">
            Design the compute, networking, storage and operational foundation
            required to train, deploy and scale modern AI workloads without
            treating infrastructure as a collection of isolated resources.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {features.map(({ Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2"
              >
                <Icon size={11} className="text-[#a98cf4]" />
                <span className="text-[10px] text-white/[0.5]">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16">
          <ComputeFabricModel />
        </div>

        <a
          href="#infrastructure-overview"
          className="mx-auto mt-10 flex w-fit items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/[0.35] transition hover:text-white"
        >
          Explore infrastructure
          <ArrowDown size={12} />
        </a>
      </div>
    </section>
  );
}