"use client";

import { motion } from "framer-motion";
import { Activity, AlertTriangle } from "lucide-react";

const bars = [
  40, 53, 47, 65, 59, 72, 66, 80, 74, 85, 77, 90, 86, 93, 88, 95, 92, 97,
];

export default function QualityObservatory() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
              06 / CONTINUOUS MONITORING
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              Detect degradation
              <span className="block text-white/28">
                before users do.
              </span>
            </h2>
          </div>

          <p className="max-w-[520px] text-[10px] leading-7 text-white/40">
            Monitoring helps teams detect when data that previously satisfied
            expectations begins to drift, arrive late, violate rules or behave
            differently from established patterns.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[32px] border border-[#7046e6]/20 bg-[#050505]"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] p-6">
            <div className="flex items-center gap-3">
              <Activity size={14} className="text-[#7046e6]" />

              <span className="font-mono text-[6px] tracking-[0.18em] text-white/35">
                QUALITY OBSERVATORY
              </span>
            </div>

            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="text-[6px] text-[#8f6aed]"
            >
              LIVE
            </motion.span>
          </div>

          <div className="grid lg:grid-cols-[1.6fr_.4fr]">
            <div className="border-b border-white/[0.06] p-7 lg:border-b-0 lg:border-r">
              <p className="font-mono text-[5px] tracking-[0.15em] text-white/20">
                QUALITY TREND
              </p>

              <div className="mt-10 flex h-[270px] items-end gap-2">
                {bars.map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.04,
                    }}
                    className="relative flex-1 rounded-t-sm bg-[#7046e6]/55"
                  >
                    <motion.div
                      animate={{ opacity: [0.15, 0.65, 0.15] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }}
                      className="absolute inset-x-0 top-0 h-px bg-[#b6a1f5]"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-7">
              <p className="font-mono text-[5px] tracking-[0.15em] text-white/20">
                DETECTED EVENTS
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Freshness threshold exceeded",
                  "Unexpected null increase",
                  "Schema pattern changed",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.6,
                    }}
                    className="rounded-[16px] border border-[#7046e6]/15 bg-[#7046e6]/[0.035] p-4"
                  >
                    <div className="flex gap-3">
                      <AlertTriangle
                        size={11}
                        className="mt-0.5 shrink-0 text-[#8f6aed]"
                      />

                      <p className="text-[8px] leading-5 text-white/40">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="mt-8 text-[7px] leading-5 text-white/22">
                Monitoring should prioritize business-critical data rather than
                generating alerts for every harmless variation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}