"use client";

import { motion } from "framer-motion";
import { ArrowDown, BrainCircuit, Cloud, Sparkles } from "lucide-react";
import StrategyIntelligenceCore from "./StrategyIntelligenceCore";

const signals = [
  { Icon: Cloud, label: "Cloud foundations" },
  { Icon: BrainCircuit, label: "AI readiness" },
  { Icon: Sparkles, label: "Strategic roadmap" },
];

export default function AICloudStrategyHero() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 pb-24 pt-28 md:px-10 md:pb-32 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at 50% 38%,black,transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 38%,black,transparent 72%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[#7046e6]/[0.08] blur-[180px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1100px] text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.07] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a98cf4] shadow-[0_0_14px_#7046e6]" />
            <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#b69df6]">
              HYI.AI / AI CLOUD STRATEGY
            </span>
          </div>

          <h1 className="mt-8 text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.075em]">
            Build the cloud
            <span className="block bg-gradient-to-r from-white via-[#bca9f4] to-[#7046e6] bg-clip-text text-transparent">
              AI can grow on.
            </span>
          </h1>

          <p className="mx-auto mt-9 max-w-[800px] text-[13px] leading-7 text-white/[0.56] md:text-[15px] md:leading-8">
            AI cloud strategy connects business priorities, workload
            requirements, data foundations, compute architecture, governance,
            security and economics into one practical technology direction.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {signals.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2"
              >
                <Icon size={11} className="text-[#9878ef]" />
                <span className="text-[10px] text-white/[0.48]">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16">
          <StrategyIntelligenceCore />
        </div>

        <a
          href="#assessment"
          className="mx-auto mt-10 flex w-fit items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/[0.35]"
        >
          Explore strategy
          <ArrowDown size={12} />
        </a>
      </div>
    </section>
  );
}