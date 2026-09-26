"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CircleDollarSign,
  Gauge,
  ShieldCheck,
  Target,
} from "lucide-react";

const inputs = [
  {
    Icon: Target,
    label: "Business",
  },
  {
    Icon: Gauge,
    label: "Performance",
  },
  {
    Icon: ShieldCheck,
    label: "Risk",
  },
  {
    Icon: CircleDollarSign,
    label: "Economics",
  },
];

const outputs = [
  "Target architecture",
  "Workload strategy",
  "Governance model",
  "Execution roadmap",
];

export default function StrategyDecisionSystem() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div>
            <p className="font-mono text-[8px] tracking-[0.28em] text-[#9878ef]">
              STRATEGY / DECISION SYSTEM
            </p>

            <h2 className="mt-6 text-5xl font-medium leading-[.95] tracking-[-0.055em] md:text-7xl">
              Turn constraints
              <span className="block text-[#7046e6]">into direction.</span>
            </h2>
          </div>

          <p className="max-w-[620px] text-[14px] leading-8 text-white/[0.5] lg:justify-self-end">
            A useful cloud strategy does not optimize one dimension in
            isolation. It evaluates business priorities alongside performance,
            risk, security, economics and organizational capability before
            establishing a target direction.
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[36px] border border-[#7046e6]/20 bg-[#030303] p-7 md:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_.65fr_1fr]">
            <div className="grid grid-cols-2 gap-3">
              {inputs.map(({ Icon, label }, index) => (
                <motion.div
                  key={label}
                  animate={{
                    y: [0, index % 2 ? 5 : -5, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.4,
                    repeat: Infinity,
                  }}
                  className="rounded-[22px] border border-white/[0.07] bg-[#080808] p-5"
                >
                  <Icon size={16} className="text-[#9878ef]" />
                  <p className="mt-5 text-[13px]">{label}</p>
                  <p className="mt-2 font-mono text-[6px] text-white/[0.25]">
                    DECISION INPUT
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(112,70,230,.08)",
                    "0 0 80px rgba(112,70,230,.28)",
                    "0 0 20px rgba(112,70,230,.08)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="flex h-40 w-40 flex-col items-center justify-center rounded-full border border-[#7046e6]/35 bg-[#0c0814]"
              >
                <BrainCircuit size={27} className="text-[#b39af5]" />
                <p className="mt-4 text-[12px]">Decision Core</p>
              </motion.div>

              <p className="mt-5 font-mono text-[7px] tracking-[0.18em] text-[#9878ef]">
                EVALUATE → ALIGN
              </p>
            </div>

            <div className="space-y-3">
              {outputs.map((output, index) => (
                <motion.div
                  key={output}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="flex items-center justify-between rounded-[18px] border border-white/[0.07] bg-[#080808] px-5 py-4"
                >
                  <div>
                    <span className="font-mono text-[6px] text-[#7046e6]">
                      OUTPUT 0{index + 1}
                    </span>
                    <p className="mt-2 text-[12px]">{output}</p>
                  </div>

                  <ArrowRight size={13} className="text-[#9878ef]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}