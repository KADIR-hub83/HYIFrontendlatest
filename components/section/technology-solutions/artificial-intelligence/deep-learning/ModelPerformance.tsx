"use client";

import { motion } from "framer-motion";

const metrics = [
  ["Accuracy", 96],
  ["Precision", 92],
  ["Recall", 94],
  ["F1 Score", 93],
  ["Robustness", 89],
];

export default function ModelPerformance() {
  return (
    <section className="relative bg-[#04060b] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="text-[9px] uppercase tracking-[0.35em] text-cyan-300/45">
              Model Intelligence
            </div>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] md:text-6xl">
              Performance you can
              <span className="block text-cyan-300">measure.</span>
            </h2>
          </div>

          <p className="max-w-[600px] text-sm leading-7 text-white/38">
            Evaluate deep learning systems across accuracy, latency,
            reliability and production behavior before intelligence reaches
            critical workflows.
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#020409]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5 md:px-9">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                Model Evaluation
              </span>
            </div>

            <span className="text-[8px] tracking-[0.2em] text-emerald-300/45">
              SYSTEM HEALTHY
            </span>
          </div>

          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            <div className="relative flex min-h-[480px] items-center justify-center border-b border-white/[0.06] p-8 lg:border-b-0 lg:border-r">
              <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-cyan-300/15">
                <motion.div
                  className="absolute inset-5 rounded-full border border-dashed border-blue-300/15"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="absolute inset-12 rounded-full border border-cyan-300/20"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 13,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="text-center">
                  <div className="text-6xl font-medium tracking-[-0.05em]">
                    96
                  </div>

                  <div className="mt-2 text-[9px] uppercase tracking-[0.28em] text-cyan-200/35">
                    Model Score
                  </div>
                </div>
              </div>
            </div>

            <div className="p-7 md:p-12">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                    Evaluation Matrix
                  </div>

                  <h3 className="mt-3 text-2xl font-medium">
                    Production Readiness
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-3xl font-medium">A+</div>
                  <div className="text-[8px] text-white/25">GRADE</div>
                </div>
              </div>

              <div className="mt-12 space-y-8">
                {metrics.map(([label, score], index) => (
                  <div key={label as string}>
                    <div className="mb-3 flex justify-between text-xs">
                      <span className="text-white/40">{label}</span>
                      <span className="text-white/55">{score}%</span>
                    </div>

                    <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 via-cyan-300 to-violet-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${score}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.3,
                          delay: index * 0.1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-3 gap-3">
                {[
                  ["14ms", "Latency"],
                  ["8.4K", "Inference/s"],
                  ["99.98%", "Uptime"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 text-center"
                  >
                    <div className="text-lg text-white/75">{value}</div>
                    <div className="mt-1 text-[7px] uppercase tracking-[0.15em] text-white/20">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}