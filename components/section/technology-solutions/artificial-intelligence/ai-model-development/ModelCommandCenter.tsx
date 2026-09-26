"use client";

import { motion } from "framer-motion";
import { Activity, CircleDot, Server } from "lucide-react";

const models = [
  ["HYI-LLM-07", "Language Intelligence", "99.98%", "18ms"],
  ["HYI-VISION-04", "Computer Vision", "99.94%", "14ms"],
  ["HYI-RANK-12", "Recommendation", "99.99%", "11ms"],
  ["HYI-PREDICT-09", "Predictive AI", "99.91%", "21ms"],
];

export default function ModelCommandCenter() {
  return (
    <section className="bg-[#020203] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
              06 / Model Operations
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              Models don&apos;t stop
              <span className="block text-white/55">after deployment.</span>
            </h2>
          </div>

          <p className="max-w-[590px] text-[15px] leading-8 text-white/65">
            Monitor production models, inference performance, health, drift and
            operational behavior through one model command center.
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[34px] border border-white/[0.09] bg-[#040405]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
            <div className="flex items-center gap-3">
              <Server size={13} className="text-violet-100/70" />
              <span className="text-[8px] tracking-[0.25em] text-white/35">
                HYI.AI MODEL COMMAND
              </span>
            </div>

            <span className="flex items-center gap-2 text-[7px] tracking-[0.2em] text-emerald-300/60">
              <CircleDot size={9} />
              PRODUCTION HEALTHY
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_330px]">
            <div className="border-b border-white/[0.07] p-6 lg:border-b-0 lg:border-r md:p-8">
              <div className="space-y-3">
                {models.map(([name, type, uptime, latency], index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5 md:grid-cols-[1.2fr_1fr_.5fr_.5fr] md:items-center"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.6)]" />

                      <span className="text-xs text-white/75">{name}</span>
                    </div>

                    <span className="text-[10px] text-white/45">{type}</span>
                    <span className="text-[10px] text-white/55">{uptime}</span>
                    <span className="text-[10px] text-violet-100/65">{latency}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-7">
              <div className="flex items-center gap-3">
                <Activity size={13} className="text-violet-100/70" />
                <p className="text-[8px] tracking-[0.22em] text-white/35">
                  LIVE INFERENCE
                </p>
              </div>

              <p className="mt-9 text-5xl font-light tracking-[-0.06em] text-white/85">
                12.8K
              </p>

              <p className="mt-2 text-[8px] tracking-[0.2em] text-white/30">
                REQUESTS / MIN
              </p>

              <div className="mt-12 flex h-28 items-end gap-2">
                {[35, 60, 45, 82, 57, 91, 72, 96, 65, 88].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        height: [`${height * 0.55}%`, `${height}%`, `${height * 0.55}%`],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-600/15 to-violet-100/55"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}