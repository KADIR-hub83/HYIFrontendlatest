"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  Sparkles,
} from "lucide-react";

const scenarios = [
  {
    probability: "68%",
    title: "Growth",
    change: "+24.8%",
    width: "68%",
  },
  {
    probability: "21%",
    title: "Baseline",
    change: "+8.2%",
    width: "48%",
  },
  {
    probability: "11%",
    title: "Risk",
    change: "-4.6%",
    width: "28%",
  },
];

export default function ScenarioSimulator() {
  return (
    <section className="bg-[#030303] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
              Scenario Intelligence
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              Don&apos;t predict
              <span className="block text-white/50">
                one future.
              </span>
            </h2>
          </div>

          <p className="max-w-[650px] text-[15px] leading-8 text-white/60">
            Simulate multiple outcomes, quantify their probability and
            understand how changing assumptions can alter the path ahead.
          </p>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[40px] border border-[#eee5ff]/10 bg-[#0b0b0d] p-6 md:p-10">
          <div className="absolute left-[10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#eee5ff]/[0.04] blur-[120px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div className="flex min-h-[500px] items-center justify-center">
              <div className="relative h-[350px] w-[350px]">
                {[330, 260, 190].map((size, index) => (
                  <motion.div
                    key={size}
                    animate={{
                      rotate: index % 2 ? -360 : 360,
                    }}
                    transition={{
                      duration: 20 + index * 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-[#eee5ff]/15"
                    style={{
                      width: size,
                      height: size,
                      marginLeft: -size / 2,
                      marginTop: -size / 2,
                    }}
                  />
                ))}

                <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#eee5ff]/25 bg-[#eee5ff]/[0.05] shadow-[0_0_70px_rgba(238,229,255,.12)]">
                  <GitBranch
                    size={40}
                    strokeWidth={1}
                    className="text-[#eee5ff]"
                  />
                </div>

                {[
                  "top-[7%] left-[45%]",
                  "bottom-[10%] left-[7%]",
                  "bottom-[10%] right-[7%]",
                ].map((position, index) => (
                  <motion.span
                    key={position}
                    animate={{
                      scale: [0.8, 1.5, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                    className={`absolute h-3 w-3 rounded-full bg-[#f3edff] shadow-[0_0_20px_#f3edff] ${position}`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {scenarios.map((scenario, index) => (
                <motion.article
                  key={scenario.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  className="rounded-[28px] border border-white/[0.07] bg-black/20 p-6 md:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[7px] tracking-[0.2em] text-white/25">
                        SCENARIO 0{index + 1}
                      </span>

                      <h3 className="mt-3 text-xl">
                        {scenario.title}
                      </h3>
                    </div>

                    <div className="text-right">
                      <p className="text-3xl font-light">
                        {scenario.probability}
                      </p>

                      <p className="mt-1 font-mono text-[6px] text-white/25">
                        PROBABILITY
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 h-[3px] overflow-hidden rounded-full bg-white/[0.05]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: scenario.width,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + index * 0.15,
                      }}
                      className="h-full bg-gradient-to-r from-[#bba7da]/40 to-[#f3edff]"
                    />
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-white/35">
                      Projected business impact
                    </span>

                    <span className="flex items-center gap-1 text-sm text-[#eee5ff]/70">
                      {scenario.change}
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-5 flex items-center gap-3 font-mono text-[7px] tracking-[0.2em] text-[#eee5ff]/35">
            <Sparkles size={11} />
            CONTINUOUS MONTE CARLO SCENARIO SIMULATION
          </div>
        </div>
      </div>
    </section>
  );
}