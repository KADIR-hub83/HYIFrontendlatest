"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Database,
  Globe2,
  Sparkles,
} from "lucide-react";

const regions = [
  ["North America", 86],
  ["Europe", 72],
  ["Asia Pacific", 91],
  ["Middle East", 58],
];

export default function IntelligenceBento() {
  return (
    <section
      id="intelligence"
      className="border-y border-white/[0.06] bg-[#090806] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
              Intelligence everywhere
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              One business.
              <span className="block text-white/55">One source of truth.</span>
            </h2>
          </div>

          <p className="max-w-[600px] text-[15px] leading-8 text-white/65">
            Bring financial, operational, customer and commercial data into a
            unified intelligence environment built for faster decisions.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-h-[650px] rounded-[38px] border border-white/[0.09] bg-gradient-to-b from-[#15110e] to-[#080807] p-8 lg:col-span-7 md:p-11"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-3xl font-semibold">
                  Global performance intelligence
                </h3>

                <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-white/60">
                  Compare performance across markets, business units and
                  regions from a single executive view.
                </p>
              </div>

              <Globe2
                size={28}
                strokeWidth={1}
                className="text-violet-100/60"
              />
            </div>

            <div className="relative mt-14 flex min-h-[300px] items-center justify-center overflow-hidden rounded-[28px] border border-white/[0.07] bg-black/25">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative h-[240px] w-[240px] rounded-full border border-violet-200/20"
              >
                <div className="absolute inset-[30px] rounded-full border border-white/[0.08]" />
                <div className="absolute inset-[65px] rounded-full border border-violet-100/20 bg-violet-300/[0.04]" />

                {[15, 80, 150, 220, 290].map((rotation, index) => (
                  <span
                    key={rotation}
                    className="absolute left-1/2 top-1/2 h-[2px] w-[105px] origin-left bg-gradient-to-r from-violet-200/50 to-transparent"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  >
                    <span className="absolute right-0 top-[-3px] h-2 w-2 rounded-full bg-violet-100 shadow-[0_0_12px_#ddd6fe]" />
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.article>

          <div className="grid gap-5 lg:col-span-5">
            <article className="rounded-[38px] border border-white/[0.09] bg-[#0c0b09] p-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[8px] tracking-[0.2em] text-white/35">
                    REGIONAL PERFORMANCE
                  </span>
                  <h3 className="mt-4 text-2xl">Market pulse</h3>
                </div>

                <BarChart3 size={20} className="text-violet-200/60" />
              </div>

              <div className="mt-9 space-y-6">
                {regions.map(([region, score], index) => (
                  <div key={region as string}>
                    <div className="mb-2 flex justify-between text-[10px]">
                      <span className="text-white/50">{region}</span>
                      <span className="text-white/35">{score}%</span>
                    </div>

                    <div className="h-[4px] overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${score}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.1,
                        }}
                        className="h-full bg-gradient-to-r from-violet-600 to-violet-200"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[38px] border border-white/[0.09] bg-gradient-to-br from-[#15110e] to-[#080807] p-8">
              <div className="flex items-center gap-3">
                <Sparkles size={15} className="text-violet-200/70" />

                <span className="text-[8px] tracking-[0.2em] text-white/35">
                  AI INSIGHT
                </span>
              </div>

              <p className="mt-7 text-2xl leading-9 text-white/85">
                Enterprise demand is accelerating faster than the current
                quarterly forecast.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/50">
                Pipeline velocity increased across three high-value segments
                while average sales-cycle duration declined.
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5">
                <span className="text-[9px] text-emerald-300/60">
                  96% confidence
                </span>

                <ArrowUpRight size={14} className="text-white/35" />
              </div>
            </article>
          </div>

          <article className="rounded-[38px] border border-white/[0.09] bg-[#0c0b09] p-8 lg:col-span-5">
            <Database size={21} className="text-violet-200/65" />

            <h3 className="mt-8 text-3xl">Connected data foundation</h3>

            <p className="mt-5 text-[15px] leading-8 text-white/60">
              Connect business applications, warehouses, APIs and operational
              systems into a governed analytics layer.
            </p>

            <div className="mt-9 grid grid-cols-3 gap-3">
              {["ERP", "CRM", "WAREHOUSE", "APIs", "FINANCE", "PRODUCT"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-white/[0.07] bg-black/20 px-3 py-4 text-center text-[7px] tracking-[0.15em] text-white/40"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[38px] border border-white/[0.09] bg-gradient-to-br from-[#17120e] to-[#090807] p-8 lg:col-span-7">
            <span className="text-[8px] tracking-[0.2em] text-white/35">
              DECISION VELOCITY
            </span>

            <div className="mt-7 flex items-end gap-5">
              <span className="text-7xl font-light tracking-[-0.07em]">
                4.8×
              </span>

              <span className="mb-2 text-sm text-white/45">
                faster insight-to-action
              </span>
            </div>

            <div className="mt-10 flex gap-2">
              {[35, 48, 40, 58, 67, 60, 76, 82, 91].map((height, index) => (
                <div
                  key={index}
                  className="flex h-24 flex-1 items-end rounded-md bg-white/[0.02]"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="w-full rounded-md bg-gradient-to-t from-violet-600/20 to-violet-200/55"
                  />
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}