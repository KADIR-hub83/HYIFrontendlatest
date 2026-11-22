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
    <section className="relative overflow-hidden bg-[#030303] px-5 pt-28 md:px-10  md:pt-36">
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

      <div className="relative mx-auto max-w-[1350px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1100px] text-center"
        >
       

          <h1 className="hyi-h1 hyi-white">
            Build the cloud
            <span className="block hyi-blue">
              AI can grow on.
            </span>
          </h1>

          <p className="mx-auto mt-2 max-w-[800px] hyi-p">
            AI cloud strategy connects business priorities, workload
            requirements, data foundations, compute architecture, governance,
            security and economics into one practical technology direction.
          </p>

          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {signals.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2"
              >
                <Icon size={11} className="hyi-white-icon" />
                <span className="hyi-p">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-6 ">
          <StrategyIntelligenceCore />
        </div>
      </div>
    </section>
  );
}