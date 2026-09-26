"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  FileBarChart,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const reportBars = [31, 46, 42, 58, 51, 69, 64, 79, 73, 88, 81, 94];

const signals = [
  {
    title: "Revenue acceleration",
    text: "Enterprise revenue is growing faster than the current baseline.",
    type: "TREND",
  },
  {
    title: "Regional variance",
    text: "West region contributes the largest positive movement this period.",
    type: "DRIVER",
  },
  {
    title: "Conversion anomaly",
    text: "A short-term conversion movement requires investigation.",
    type: "ANOMALY",
  },
];

export default function ReportingInsightsHero() {
  return (
    <section className="relative min-h-[1280px] overflow-hidden border-b border-white/[0.06] bg-[#030303] pt-36 md:pt-44">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(112,70,230,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(112,70,230,.14) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at 50% 42%, black, transparent 74%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 42%, black, transparent 74%)",
        }}
      />

      <div className="absolute left-1/2 top-[540px] h-[650px] w-[1100px] -translate-x-1/2 rounded-full bg-[#7046e6]/10 blur-[200px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1080px] text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.07] px-4 py-2">
            <FileBarChart size={11} className="text-[#a98ef4]" />

            <span className="font-mono text-[7px] uppercase tracking-[0.26em] text-[#a98ef4]">
              Reporting & Insights
            </span>
          </div>

          <h1 className="mt-8 text-[clamp(4rem,8.2vw,8.7rem)] font-medium leading-[0.88] tracking-[-0.075em]">
            Reports tell you
            <span className="block text-[#7046e6]">
              what changed.
            </span>
            <span className="block text-white/32">
              Insights tell you why.
            </span>
          </h1>

          <p className="mx-auto mt-9 max-w-[820px] text-[11px] leading-7 text-white/48 md:text-[13px] md:leading-8">
            Reporting organizes trusted business information into a consistent
            view of performance. Insight generation goes further by identifying
            meaningful patterns, exceptions, trends, relationships and possible
            drivers so decision-makers can understand what deserves attention.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              "REPORT",
              "COMPARE",
              "DETECT",
              "EXPLAIN",
              "INTERPRET",
              "DECIDE",
            ].map((item) => (
              <span
                key={item}
                className="font-mono text-[6px] tracking-[0.22em] text-white/22"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* REPORT INTELLIGENCE CONSOLE */}

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-20 max-w-[1300px]"
        >
          <div className="absolute inset-8 rounded-[40px] bg-[#7046e6]/15 blur-[90px]" />

          <div className="relative overflow-hidden rounded-[34px] border border-[#7046e6]/20 bg-[#070708] shadow-[0_60px_180px_rgba(0,0,0,.8)]">
            {/* TOP BAR */}

            <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
              <div className="flex items-center gap-5">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-[#7046e6]/70" />
                </div>

                <span className="font-mono text-[6px] tracking-[0.2em] text-white/25">
                  HYI / REPORT INTELLIGENCE
                </span>
              </div>

              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-[#7046e6]"
                />

                <span className="font-mono text-[5px] tracking-[0.15em] text-[#a78df0]">
                  ANALYZING
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.35fr_.65fr]">
              {/* REPORT */}

              <div className="border-b border-white/[0.06] p-5 md:p-7 lg:border-b-0 lg:border-r">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-mono text-[5px] uppercase tracking-[0.18em] text-white/20">
                      PERFORMANCE REPORT
                    </p>

                    <h3 className="mt-2 text-xl font-medium">
                      Commercial performance
                    </h3>
                  </div>

                  <span className="rounded-lg border border-white/[0.07] px-3 py-2 font-mono text-[5px] text-white/25">
                    CURRENT PERIOD
                  </span>
                </div>

                <div className="mt-7 grid gap-3 md:grid-cols-3">
                  {[
                    ["Revenue", "$4.82M", "+12.4%"],
                    ["Pipeline", "$8.31M", "+7.8%"],
                    ["Conversion", "7.84%", "+1.6%"],
                  ].map((item, index) => (
                    <motion.div
                      key={item[0]}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.12 }}
                      className="rounded-[18px] border border-white/[0.06] bg-white/[0.015] p-5"
                    >
                      <p className="font-mono text-[5px] uppercase tracking-[0.16em] text-white/22">
                        {item[0]}
                      </p>

                      <div className="mt-4 flex items-end justify-between">
                        <span className="text-2xl font-light">{item[1]}</span>

                        <span className="text-[7px] text-[#a184ef]">
                          {item[2]}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 rounded-[22px] border border-white/[0.06] bg-black/20 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[5px] tracking-[0.18em] text-white/20">
                        REVENUE TREND
                      </p>

                      <p className="mt-2 text-[8px] text-white/35">
                        Actual performance by reporting period
                      </p>
                    </div>

                    <TrendingUp size={14} className="text-[#7046e6]" />
                  </div>

                  <div className="relative mt-10 flex h-[220px] items-end gap-2">
                    <div className="absolute inset-x-0 top-[32%] border-t border-dashed border-white/[0.07]" />
                    <div className="absolute inset-x-0 top-[65%] border-t border-dashed border-white/[0.05]" />

                    {reportBars.map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          duration: 0.8,
                          delay: 0.6 + index * 0.055,
                        }}
                        className="relative flex-1 rounded-t-[3px] bg-[#7046e6]/45"
                      >
                        <motion.div
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.08,
                          }}
                          className="absolute inset-x-0 top-0 h-px bg-[#c5b4f7]"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-3 flex justify-between font-mono text-[4px] text-white/15">
                    <span>JAN</span>
                    <span>MAR</span>
                    <span>MAY</span>
                    <span>JUL</span>
                    <span>SEP</span>
                    <span>DEC</span>
                  </div>
                </div>
              </div>

              {/* INSIGHTS */}

              <div className="relative p-5 md:p-7">
                <div className="flex items-center gap-3">
                  <BrainCircuit size={15} className="text-[#9b7bf0]" />

                  <div>
                    <p className="font-mono text-[5px] tracking-[0.17em] text-[#9b7bf0]">
                      INSIGHT LAYER
                    </p>

                    <p className="mt-1 text-[8px] text-white/28">
                      Interpreting report signals
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {signals.map((signal, index) => (
                    <motion.div
                      key={signal.title}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.18 }}
                      whileHover={{ x: 4 }}
                      className="rounded-[18px] border border-white/[0.06] bg-white/[0.015] p-5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[5px] tracking-[0.15em] text-[#9472ef]">
                          {signal.type}
                        </span>

                        <ArrowUpRight size={10} className="text-white/20" />
                      </div>

                      <h4 className="mt-4 text-[10px] font-medium">
                        {signal.title}
                      </h4>

                      <p className="mt-3 text-[7px] leading-5 text-white/32">
                        {signal.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 rounded-[18px] border border-[#7046e6]/20 bg-[#7046e6]/[0.055] p-5">
                  <div className="flex items-center gap-2">
                    <Sparkles size={11} className="text-[#a68bf2]" />

                    <span className="font-mono text-[5px] tracking-[0.16em] text-[#a68bf2]">
                      NEXT QUESTION
                    </span>
                  </div>

                  <p className="mt-4 text-[8px] leading-6 text-white/45">
                    Which segments and regions contributed most to the observed
                    change?
                  </p>
                </div>

                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="mt-5 flex items-center gap-3 text-[6px] text-white/22"
                >
                  <Activity size={9} className="text-[#7046e6]" />
                  Continuous interpretation
                </motion.div>
              </div>
            </div>

            <motion.div
              animate={{ x: ["-120%", "120%"] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute inset-y-0 w-[12%] bg-gradient-to-r from-transparent via-[#7046e6]/[0.045] to-transparent"
            />
          </div>
        </motion.div>

        <motion.a
          href="#insight-system"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mx-auto mt-14 flex w-fit items-center gap-3 text-[7px] text-white/25"
        >
          Understand the insight system
          <ArrowDown size={10} />
        </motion.a>
      </div>
    </section>
  );
}