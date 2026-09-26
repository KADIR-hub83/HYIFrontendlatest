"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Building2, Cloud, Cpu, Server } from "lucide-react";

const targets = [
  { Icon: Cloud, title: "Public Cloud", score: "HIGH" },
  { Icon: Building2, title: "Private Cloud", score: "MEDIUM" },
  { Icon: Server, title: "Edge / Local", score: "SELECTIVE" },
];

export default function WorkloadPlacementEngine() {
  return (
    <div className="overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#080808]">
      <div className="border-b border-white/[0.06] px-6 py-5">
        <span className="font-mono text-[8px] tracking-[0.2em] text-white/[0.3]">
          PLACEMENT DECISION ENGINE
        </span>
      </div>

      <div className="p-7">
        <div className="flex items-center gap-4 rounded-[22px] border border-[#7046e6]/20 bg-[#7046e6]/[0.05] p-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7046e6]/15">
            <BrainCircuit size={18} className="text-[#b39af5]" />
          </div>
          <div>
            <p className="text-[14px]">AI inference workload</p>
            <p className="mt-1 text-[9px] text-white/[0.35]">
              Evaluating latency, security, scale and data locality
            </p>
          </div>
        </div>

        <div className="relative my-8 h-16">
          <motion.div
            animate={{ top: ["0%", "80%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-1/2 h-2 w-2 rounded-full bg-[#7046e6] shadow-[0_0_18px_#7046e6]"
          />
          <div className="absolute left-1/2 h-full w-px bg-gradient-to-b from-[#7046e6] to-transparent" />
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {targets.map(({ Icon, title, score }, index) => (
            <motion.div
              key={title}
              whileHover={{ y: -5 }}
              className="rounded-[20px] border border-white/[0.07] bg-[#050505] p-5"
            >
              <Icon size={16} className="text-[#9878ef]" />
              <p className="mt-6 text-[13px]">{title}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[6px] text-white/[0.25]">
                  FIT SCORE
                </span>
                <span
                  className={`font-mono text-[7px] ${
                    index === 0 ? "text-[#a98cf4]" : "text-white/[0.35]"
                  }`}
                >
                  {score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-5">
          <Cpu size={12} className="text-[#9878ef]" />
          <span className="font-mono text-[7px] text-white/[0.3]">
            POLICY-AWARE PLACEMENT ANALYSIS
          </span>
        </div>
      </div>
    </div>
  );
}