"use client";

import { motion } from "framer-motion";
import { Activity, MoreHorizontal, TrendingUp } from "lucide-react";

const linePath =
  "M0 250 C60 230 90 245 145 205 C210 160 240 190 295 150 C350 110 400 145 450 105 C510 55 555 105 615 75 C680 40 730 80 790 35 C840 10 900 55 960 18";

export default function VisualizationCanvas() {
  return (
    <section
      id="canvas"
      className="border-y border-white/[0.06] bg-[#090806] py-10"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
              Living data canvas
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              Numbers become
              <span className="block text-white/55">something you can see.</span>
            </h2>
          </div>

          <p className="max-w-[620px] text-[15px] leading-8 text-white/65">
            Build visual experiences that reveal trends, relationships,
            anomalies and opportunities without forcing users to interpret
            endless rows of raw data.
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[38px] border border-white/[0.09] bg-[#070707] shadow-[0_50px_140px_rgba(0,0,0,.5)]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-7 py-5">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/50" />
                <span className="h-2 w-2 rounded-full bg-amber-300/50" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/50" />
              </div>

              <span className="text-[7px] tracking-[0.25em] text-white/35">
                HYI.AI / VISUAL ANALYTICS
              </span>
            </div>

            <div className="flex items-center gap-2 text-[7px] text-emerald-300/60">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              LIVE
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.5fr_.5fr]">
            <div className="border-b border-white/[0.07] p-6 md:p-10 lg:border-b-0 lg:border-r">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[8px] uppercase tracking-[0.18em] text-white/35">
                    Global Revenue
                  </span>

                  <div className="mt-4 flex items-end gap-3">
                    <span className="text-4xl font-light">$28.42M</span>

                    <span className="mb-1 flex items-center gap-1 text-[9px] text-emerald-300/60">
                      <TrendingUp size={11} />
                      18.6%
                    </span>
                  </div>
                </div>

                <button className="rounded-full border border-white/[0.08] p-3 text-white/30">
                  <MoreHorizontal size={14} />
                </button>
              </div>

              <div className="relative mt-12 h-[340px]">
                {[0, 1, 2, 3, 4].map((line) => (
                  <div
                    key={line}
                    className="absolute left-0 right-0 border-t border-white/[0.05]"
                    style={{ top: `${line * 24}%` }}
                  />
                ))}

                <svg
                  viewBox="0 0 960 280"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <defs>
                    <linearGradient
                      id="chartFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#c4b5fd" stopOpacity=".22" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <motion.path
                    d={`${linePath} L960 280 L0 280 Z`}
                    fill="url(#chartFill)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                  />

                  <motion.path
                    d={linePath}
                    fill="none"
                    stroke="rgba(221,214,254,.9)"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5 }}
                  />
                </svg>

                <motion.div
                  animate={{ left: ["5%", "92%", "5%"] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-violet-200/40 to-transparent"
                />
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Activity size={14} className="text-violet-200/70" />
                <span className="text-[8px] tracking-[0.2em] text-white/35">
                  SIGNALS
                </span>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  ["Revenue", "$28.4M", "+18.6%"],
                  ["Customers", "18.2K", "+12.4%"],
                  ["Conversion", "32.8%", "+4.1%"],
                  ["Retention", "94.7%", "+2.8%"],
                  ["Sessions", "1.84M", "+24.2%"],
                ].map(([label, value, growth], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-[18px] border border-white/[0.07] bg-white/[0.015] p-5"
                  >
                    <div className="text-[8px] text-white/35">{label}</div>

                    <div className="mt-3 flex items-end justify-between">
                      <span className="text-xl text-white/85">{value}</span>
                      <span className="text-[8px] text-emerald-300/60">
                        {growth}
                      </span>
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