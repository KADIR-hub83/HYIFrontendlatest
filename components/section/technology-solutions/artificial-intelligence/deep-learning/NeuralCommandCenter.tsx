"use client";

import { motion } from "framer-motion";

const bars = [38, 55, 43, 72, 60, 84, 66, 93, 74, 88, 69, 96];

export default function NeuralCommandCenter() {
  return (
    <section className="relative overflow-hidden bg-[#020308] py-28 md:py-40">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.05] blur-[160px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-[9px] uppercase tracking-[0.35em] text-blue-300/45">
            Neural Operations
          </span>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] md:text-7xl">
            Intelligence under
            <span className="text-blue-300"> control.</span>
          </h2>
        </div>

        <div className="mt-20 overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#05070c]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/60" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                <span className="h-2 w-2 rounded-full bg-green-400/60" />
              </div>

              <span className="ml-3 text-[9px] tracking-[0.2em] text-white/25">
                HYI NEURAL OPERATIONS
              </span>
            </div>

            <div className="flex items-center gap-2 text-[8px] tracking-[0.2em] text-emerald-300/40">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              LIVE
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.4fr_.6fr]">
            <div className="border-b border-white/[0.06] p-6 md:p-10 lg:border-b-0 lg:border-r">
              <div className="flex justify-between">
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                    Training Throughput
                  </div>
                  <div className="mt-2 text-3xl font-medium">8,429</div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-emerald-300">+18.4%</div>
                  <div className="mt-1 text-[7px] text-white/20">
                    LAST 24 HOURS
                  </div>
                </div>
              </div>

              <div className="mt-16 flex h-[240px] items-end gap-2">
                {bars.map((height, index) => (
                  <motion.div
                    key={index}
                    className="relative flex-1 overflow-hidden rounded-t-sm bg-white/[0.04]"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.9,
                      delay: index * 0.05,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 via-cyan-400/35 to-cyan-200/70" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 flex justify-between text-[7px] text-white/15">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>24:00</span>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="text-[8px] uppercase tracking-[0.22em] text-white/20">
                Compute Cluster
              </div>

              <div className="mt-8 space-y-4">
                {[
                  ["GPU Cluster", "84%", "ACTIVE"],
                  ["Memory", "61%", "HEALTHY"],
                  ["Data Pipeline", "93%", "ACTIVE"],
                  ["Inference", "72%", "HEALTHY"],
                ].map(([title, usage, status], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5"
                  >
                    <div className="flex justify-between">
                      <span className="text-xs text-white/55">{title}</span>

                      <span className="text-[7px] tracking-[0.15em] text-emerald-300/50">
                        {status}
                      </span>
                    </div>

                    <div className="mt-5 flex items-end justify-between">
                      <span className="text-2xl">{usage}</span>

                      <div className="flex gap-1">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <motion.span
                            key={i}
                            className="h-5 w-[3px] rounded-full bg-cyan-300/30"
                            animate={{
                              height: [8, 20, 11, 17, 8],
                              opacity: [0.2, 0.8, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                          />
                        ))}
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