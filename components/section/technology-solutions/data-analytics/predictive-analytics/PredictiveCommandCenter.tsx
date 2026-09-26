"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  CheckCircle2,
  Gauge,
  Target,
} from "lucide-react";

export default function PredictiveCommandCenter() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
          Prediction Command Center
        </span>

        <h2 className="mt-7 max-w-[1150px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
          Watch tomorrow
          <span className="block text-white/50">
            update in real time.
          </span>
        </h2>

        <div className="mt-20 overflow-hidden rounded-[40px] border border-[#eee5ff]/10 bg-[#0b0b0d] p-4 md:p-6">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: BrainCircuit,
                value: "42",
                label: "ACTIVE MODELS",
              },
              {
                Icon: Target,
                value: "94.8%",
                label: "CONFIDENCE",
              },
              {
                Icon: Gauge,
                value: "23ms",
                label: "INFERENCE",
              },
              {
                Icon: Activity,
                value: "1.8M",
                label: "LIVE SIGNALS",
              },
            ].map(({ Icon, value, label }) => (
              <div
                key={label}
                className="rounded-[25px] border border-[#eee5ff]/[0.08] bg-[#eee5ff]/[0.018] p-6"
              >
                <Icon size={15} className="text-[#eee5ff]/55" />

                <p className="mt-8 text-3xl font-light">{value}</p>

                <p className="mt-2 font-mono text-[6px] tracking-[0.2em] text-white/30">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.25fr_.75fr]">
            <div className="relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-black/20 p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[7px] tracking-[0.2em] text-white/30">
                  CONFIDENCE SIGNAL
                </span>

                <span className="font-mono text-[7px] text-emerald-300/55">
                  LIVE
                </span>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 top-16 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative mt-20 flex h-[270px] items-end gap-1.5">
                {Array.from({ length: 45 }).map((_, index) => {
                  const h = 25 + ((index * 37) % 70);

                  return (
                    <motion.div
                      key={index}
                      animate={{
                        height: [
                          `${h}%`,
                          `${Math.min(100, h + 12)}%`,
                          `${h}%`,
                        ],
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: index * 0.03,
                      }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-[#eee5ff]/[0.03] to-[#eee5ff]/55"
                    />
                  );
                })}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/[0.07] bg-black/20 p-7">
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/30">
                LIVE PREDICTIONS
              </span>

              <div className="mt-8 space-y-3">
                {[
                  ["Demand growth", "+28.4%", "94%"],
                  ["Customer churn", "-12.8%", "91%"],
                  ["Revenue", "+17.6%", "89%"],
                  ["Operational risk", "LOW", "96%"],
                  ["Inventory pressure", "+8.3%", "86%"],
                ].map(([title, result, confidence], index) => (
                  <motion.div
                    key={title}
                    animate={{
                      opacity: [0.55, 1, 0.55],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.35,
                    }}
                    className="rounded-[18px] border border-white/[0.06] p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs text-white/55">
                          {title}
                        </p>

                        <p className="mt-2 text-lg">{result}</p>
                      </div>

                      <div className="text-right">
                        <CheckCircle2
                          size={12}
                          className="ml-auto text-emerald-300/55"
                        />

                        <p className="mt-2 font-mono text-[6px] text-white/25">
                          {confidence}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}