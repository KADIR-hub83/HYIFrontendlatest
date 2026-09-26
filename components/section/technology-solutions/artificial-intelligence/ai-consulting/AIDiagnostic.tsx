"use client";

import { motion } from "framer-motion";

const dimensions = [
  { name: "Strategy", score: 82 },
  { name: "Data Readiness", score: 71 },
  { name: "Technology", score: 88 },
  { name: "Operating Model", score: 64 },
  { name: "Governance", score: 76 },
  { name: "Talent & Adoption", score: 69 },
];

export default function AIDiagnostic() {
  return (
    <section
      id="ai-diagnostic"
      className="relative overflow-hidden border-b border-white/[0.05] bg-[#050407] py-24 md:py-32"
    >
      <div className="absolute left-[-200px] top-[20%] h-[600px] w-[600px] rounded-full bg-purple-900/[0.07] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
              AI Readiness Diagnostic
            </p>

            <h2 className="mt-5 max-w-[680px] text-4xl font-semibold leading-[1.05] tracking-[-1.5px] md:text-6xl">
              Know exactly where your
              <span className="block bg-gradient-to-r from-[#e2b9ff] to-[#795bff] bg-clip-text text-transparent">
                AI transformation stands.
              </span>
            </h2>
          </div>

          <p className="max-w-[540px] text-[14px] leading-7 text-white/34 lg:justify-self-end">
            Before investing in models and platforms, understand the
            organization's strategy, data, technology, governance, talent and
            operating-model readiness.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mt-16 overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#08070b]"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-[6px] w-[6px] rounded-full bg-purple-300"
              />
              <span className="text-[8px] uppercase tracking-[2px] text-white/25">
                Enterprise AI Diagnostic
              </span>
            </div>

            <span className="text-[7px] uppercase tracking-[1.5px] text-green-300/30">
              Assessment Active
            </span>
          </div>

          <div className="grid lg:grid-cols-[.72fr_1.28fr]">
            <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden border-b border-white/[0.06] lg:border-b-0 lg:border-r">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-purple-300/10"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
                className="absolute h-[255px] w-[255px] rounded-full border border-purple-300/[0.08]"
              />

              <motion.div
                animate={{
                  scale: [0.95, 1.04, 0.95],
                  boxShadow: [
                    "0 0 40px rgba(168,85,247,.1)",
                    "0 0 100px rgba(168,85,247,.28)",
                    "0 0 40px rgba(168,85,247,.1)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative flex h-[185px] w-[185px] items-center justify-center rounded-full border border-purple-300/20 bg-purple-500/[0.05]"
              >
                <div className="text-center">
                  <div className="text-5xl font-semibold text-white">75</div>
                  <div className="mt-2 text-[8px] uppercase tracking-[2px] text-purple-200/35">
                    AI Readiness
                  </div>
                  <div className="mt-4 text-[7px] uppercase tracking-[1px] text-green-300/35">
                    Scale Ready
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-220, 220] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="absolute left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent shadow-[0_0_20px_rgba(192,132,252,.4)]"
              />
            </div>

            <div className="p-7 md:p-10">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <div className="text-[8px] uppercase tracking-[2px] text-purple-300/35">
                    Readiness Dimensions
                  </div>
                  <h3 className="mt-2 text-xl text-white/75">
                    Transformation Baseline
                  </h3>
                </div>

                <div className="hidden text-right sm:block">
                  <div className="text-[7px] uppercase tracking-[1px] text-white/18">
                    Overall
                  </div>
                  <div className="mt-1 text-lg text-purple-200/70">75 / 100</div>
                </div>
              </div>

              <div className="space-y-6">
                {dimensions.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="mb-2 flex justify-between">
                      <span className="text-[11px] text-white/45">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-purple-200/50">
                        {item.score}%
                      </span>
                    </div>

                    <div className="h-[5px] overflow-hidden rounded-full bg-white/[0.04]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.score}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-purple-800 via-purple-500 to-purple-200 shadow-[0_0_14px_rgba(192,132,252,.35)]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {[
                  ["18", "Signals"],
                  ["06", "Dimensions"],
                  ["12", "Priorities"],
                ].map(([number, label]) => (
                  <motion.div
                    whileHover={{ y: -4 }}
                    key={label}
                    className="rounded-xl border border-white/[0.05] bg-white/[0.015] p-4 text-center"
                  >
                    <div className="text-lg text-purple-100/70">{number}</div>
                    <div className="mt-1 text-[6px] uppercase tracking-[1px] text-white/20">
                      {label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}