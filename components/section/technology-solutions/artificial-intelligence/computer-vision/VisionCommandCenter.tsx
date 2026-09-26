"use client";

import { motion } from "framer-motion";

export default function VisionCommandCenter() {
  return (
    <section className="relative overflow-hidden bg-[#08080b] py-28 md:py-44">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-[8px] uppercase tracking-[0.35em] text-violet-300/60">
              Vision Operations Center
            </span>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-7xl">
              Monitor every
              <span className="block text-violet-300">visual signal.</span>
            </h2>
          </div>

          <p className="max-w-[600px] text-[15px] leading-8 text-white/60">
            Operate vision models with live visibility into inference,
            detections, model confidence, camera health and system performance.
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#050507]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
            <span className="text-[7px] tracking-[0.25em] text-white/40">
              HYI.AI VISION CONTROL
            </span>

            <span className="flex items-center gap-2 text-[7px] tracking-[0.2em] text-emerald-300/60">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              SYSTEM ONLINE
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="border-b border-white/[0.07] p-6 md:p-9 lg:border-b-0 lg:border-r">
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((camera) => (
                  <div
                    key={camera}
                    className="relative aspect-video overflow-hidden rounded-xl border border-white/[0.07] bg-[#0b0b0e]"
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(167,139,250,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,.1) 1px,transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    <motion.div
                      className="absolute left-[25%] top-[25%] h-[45%] w-[35%] border border-violet-300/60"
                      animate={{
                        x: [0, 15, -5, 0],
                      }}
                      transition={{
                        duration: 4 + camera,
                        repeat: Infinity,
                      }}
                    />

                    <span className="absolute left-3 top-3 text-[6px] tracking-[0.18em] text-white/40">
                      CAM 0{camera}
                    </span>

                    <span className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-9">
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["48", "Active Cameras"],
                  ["2.4M", "Frames Today"],
                  ["99.8%", "System Uptime"],
                  ["13ms", "Avg Inference"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-5"
                  >
                    <div className="text-2xl font-medium">{value}</div>

                    <div className="mt-2 text-[7px] uppercase tracking-[0.18em] text-white/40">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-6">
                {[
                  ["Detection Accuracy", 98],
                  ["Camera Health", 96],
                  ["Edge Nodes", 92],
                  ["Model Confidence", 99],
                ].map(([label, value], index) => (
                  <div key={label as string}>
                    <div className="mb-2 flex justify-between text-[9px] text-white/50">
                      <span>{label}</span>
                      <span>{value}%</span>
                    </div>

                    <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${value}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.3,
                          delay: index * 0.1,
                        }}
                        className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-300"
                      />
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