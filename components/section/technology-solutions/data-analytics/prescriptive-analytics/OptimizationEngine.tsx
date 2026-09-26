"use client";

import { motion } from "framer-motion";
import {
  Check,
  CircleDot,
  Cpu,
  SlidersHorizontal,
} from "lucide-react";

const bars = [38, 52, 44, 69, 57, 78, 62, 88, 74, 94];

export default function OptimizationEngine() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="rounded-[36px] border border-white/[0.08] bg-[#080809] p-5 md:p-9">
          <div className="flex flex-col justify-between gap-6 border-b border-white/[0.07] pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[6px] tracking-[0.25em] text-[#e9dfff]/35">
                LIVE OPTIMIZATION MODEL
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                Decision Optimization Engine
              </h2>
            </div>

            <div className="flex items-center gap-2 font-mono text-[6px] tracking-[0.15em] text-white/30">
              <motion.span
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-[#e9dfff]"
              />
              SOLVER ACTIVE
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_.6fr]">
            <div className="relative min-h-[520px] overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#050506] p-7">
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-white/35">
                    Objective function
                  </p>
                  <p className="mt-2 font-mono text-[9px] text-[#eee5f8]/70">
                    MAXIMIZE expected_business_value(x)
                  </p>
                </div>

                <Cpu size={17} className="text-white/35" />
              </div>

              <div className="relative z-10 mt-20 flex h-[260px] items-end gap-2">
                {bars.map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.06,
                    }}
                    className="relative flex-1 rounded-t-sm bg-gradient-to-t from-[#776d82]/20 to-[#eee5f8]/70"
                  >
                    {index === 9 && (
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 font-mono text-[5px] text-[#eee5f8]/60">
                        OPTIMAL
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10 mt-6 flex justify-between border-t border-white/[0.07] pt-4 font-mono text-[5px] tracking-[0.14em] text-white/20">
                <span>FEASIBLE SOLUTIONS</span>
                <span>OBJECTIVE VALUE →</span>
              </div>
            </div>

            <div className="space-y-3">
              {[
                ["Objective", "Increase margin", "+12.4%"],
                ["Budget", "≤ $2.4M", "VALID"],
                ["Capacity", "≤ 84%", "VALID"],
                ["Risk", "≤ 0.18", "VALID"],
                ["Service SLA", "≥ 97%", "VALID"],
              ].map(([name, value, status]) => (
                <div
                  key={name}
                  className="rounded-[22px] border border-white/[0.07] bg-[#070708] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-white/35">
                      {name}
                    </span>

                    <Check size={11} className="text-[#dcd1e9]/45" />
                  </div>

                  <p className="mt-4 text-sm text-white/75">
                    {value}
                  </p>

                  <p className="mt-3 font-mono text-[5px] tracking-[0.18em] text-[#ded4e9]/35">
                    {status}
                  </p>
                </div>
              ))}

              <div className="flex items-center gap-2 px-2 pt-3 font-mono text-[6px] tracking-[0.15em] text-white/25">
                <SlidersHorizontal size={10} />
                124 CONSTRAINTS
                <CircleDot size={8} className="ml-auto" />
                8,491 VARIABLES
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}