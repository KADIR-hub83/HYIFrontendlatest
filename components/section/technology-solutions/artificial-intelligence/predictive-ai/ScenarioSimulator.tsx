"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CircleDot,
  SlidersHorizontal,
} from "lucide-react";

const scenarios = [
  {
    name: "Baseline",
    probability: "72%",
    growth: "+12.8%",
  },
  {
    name: "Accelerated",
    probability: "58%",
    growth: "+24.6%",
  },
  {
    name: "Conservative",
    probability: "81%",
    growth: "+7.4%",
  },
];

export default function ScenarioSimulator() {
  return (
    <section className="relative overflow-hidden bg-[#030305] py-32 md:py-48">
      <div className="absolute right-[-200px] top-[20%] h-[600px] w-[600px] rounded-full bg-violet-700/[0.08] blur-[170px]" />

      <div className="relative mx-auto grid max-w-[1450px] gap-16 px-5 md:px-10 lg:grid-cols-[.8fr_1.2fr] lg:px-14">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span className="text-[9px] uppercase tracking-[0.4em] text-violet-300/55">
            04 / Scenario Intelligence
          </span>

          <h2 className="mt-7 text-5xl font-medium leading-[1] tracking-[-0.055em] md:text-7xl">
            Test tomorrow
            <span className="block text-violet-300">
              before it happens.
            </span>
          </h2>

          <p className="mt-8 max-w-[500px] text-base leading-8 text-[#D3CCDC]/58">
            Compare possible outcomes and understand how changing assumptions,
            market conditions or business decisions may affect future
            performance.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/[0.08] px-5 py-3 text-xs text-[#DDD6E8]/50">
            <SlidersHorizontal size={14} />
            Dynamic scenario modelling
          </div>
        </div>

        <div className="rounded-[34px] border border-white/[0.08] bg-[#08080C] p-5 md:p-8">
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-6">
            <div>
              <p className="text-[8px] uppercase tracking-[0.35em] text-white/30">
                Forecast Scenario
              </p>
              <p className="mt-2 text-sm text-[#EEE7F8]/70">
                Revenue Projection / FY27
              </p>
            </div>

            <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-emerald-400/60">
              <CircleDot size={10} />
              Simulation Active
            </div>
          </div>

          <div className="relative mt-8 h-[330px] overflow-hidden rounded-[25px] border border-white/[0.06] bg-[#050507] p-7">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            <svg
              viewBox="0 0 900 270"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="predictionGradient"
                  x1="0"
                  x2="1"
                >
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="55%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#ede9fe" />
                </linearGradient>

                <linearGradient
                  id="predictionArea"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#a855f7"
                    stopOpacity=".25"
                  />
                  <stop
                    offset="100%"
                    stopColor="#a855f7"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5 }}
                d="M0 225 C90 215 135 190 200 196 C275 205 300 145 370 155 C450 166 490 105 550 118 C640 137 670 66 740 82 C805 97 835 45 900 36"
                fill="none"
                stroke="url(#predictionGradient)"
                strokeWidth="3"
              />

              <path
                d="M0 225 C90 215 135 190 200 196 C275 205 300 145 370 155 C450 166 490 105 550 118 C640 137 670 66 740 82 C805 97 835 45 900 36 L900 270 L0 270 Z"
                fill="url(#predictionArea)"
              />
            </svg>

            <motion.div
              animate={{ x: ["0%", "800%"] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent via-violet-300/50 to-transparent"
            />
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.name}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#EEE8F6]/65">
                    {scenario.name}
                  </p>

                  <ArrowUpRight
                    size={13}
                    className="text-violet-300/50"
                  />
                </div>

                <p className="mt-7 text-3xl font-light text-[#F4EEFC]/80">
                  {scenario.growth}
                </p>

                <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: scenario.probability,
                    }}
                    transition={{
                      duration: 1.3,
                      delay: index * 0.15,
                    }}
                    className="h-full bg-gradient-to-r from-violet-700 to-violet-300"
                  />
                </div>

                <p className="mt-3 text-[8px] uppercase tracking-[0.2em] text-white/25">
                  {scenario.probability} probability
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}