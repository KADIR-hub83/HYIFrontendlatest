"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  BarChart3,
  Database,
  Gauge,
  Layers3,
  TrendingUp,
} from "lucide-react";

const bars = [34, 52, 46, 69, 58, 76, 65, 84, 72, 91, 80, 96];

const kpis = [
  { label: "Revenue", value: "$4.82M", change: "+12.4%" },
  { label: "Customers", value: "18.4K", change: "+8.1%" },
  { label: "Conversion", value: "7.84%", change: "+1.6%" },
];

export default function DashboardHero() {
  return (
    <section className="relative min-h-[1250px] overflow-hidden border-b border-white/[0.06] bg-[#030303] pt-36 md:pt-44">
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(112,70,230,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(112,70,230,.16) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at 50% 42%,black,transparent 75%)",
        }}
      />

      <div className="absolute left-1/2 top-[520px] h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-[#7046e6]/10 blur-[190px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1050px] text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.07] px-4 py-2">
            <BarChart3 size={11} className="text-[#a389ef]" />

            <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#a389ef]">
              Dashboard Development
            </span>
          </div>

          <h1 className="mt-8 text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em]">
            From raw data
            <span className="block text-[#7046e6]">
              to clear decisions.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-[780px] text-[11px] leading-7 text-white/52 md:text-[13px] md:leading-8">
            Dashboard development transforms business questions, metrics and
            trusted data into an interactive decision interface. A successful
            dashboard is not simply a collection of charts—it creates a clear
            hierarchy between what happened, why it happened and where a user
            should investigate next.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3">
            {[
              "Business Goals",
              "KPIs",
              "Data Model",
              "UX",
              "Visualization",
              "Interaction",
              "Validation",
            ].map((item) => (
              <span
                key={item}
                className="font-mono text-[6px] uppercase tracking-[0.18em] text-white/24"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* MAIN DASHBOARD MODEL */}

        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="relative mx-auto mt-20 max-w-[1250px]"
        >
          <div className="absolute inset-0 rounded-[40px] bg-[#7046e6]/10 blur-[70px]" />

          <div className="relative overflow-hidden rounded-[34px] border border-[#7046e6]/20 bg-[#070709] shadow-[0_50px_150px_rgba(0,0,0,.7)]">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-[#7046e6]/60" />
                </div>

                <span className="font-mono text-[6px] tracking-[0.18em] text-white/25">
                  HYI / EXECUTIVE INTELLIGENCE
                </span>
              </div>

              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-[#7046e6]"
                />
                <span className="font-mono text-[5px] text-[#9677ed]/70">
                  LIVE DATA
                </span>
              </div>
            </div>

            <div className="grid min-h-[620px] lg:grid-cols-[190px_1fr]">
              <aside className="hidden border-r border-white/[0.06] p-5 lg:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7046e6]">
                  <Layers3 size={16} />
                </div>

                <div className="mt-10 space-y-2">
                  {[
                    "Overview",
                    "Performance",
                    "Customers",
                    "Revenue",
                    "Operations",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 4 }}
                      className={`rounded-xl px-4 py-3 text-[7px] ${
                        index === 0
                          ? "bg-[#7046e6]/15 text-[#a98df5]"
                          : "text-white/25"
                      }`}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </aside>

              <div className="p-5 md:p-7">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-mono text-[5px] uppercase tracking-[0.18em] text-white/20">
                      Executive Overview
                    </p>
                    <h3 className="mt-2 text-xl font-medium">
                      Business performance
                    </h3>
                  </div>

                  <div className="rounded-lg border border-white/[0.07] px-3 py-2 font-mono text-[5px] text-white/30">
                    LAST 30 DAYS
                  </div>
                </div>

                <div className="mt-7 grid gap-3 md:grid-cols-3">
                  {kpis.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.12 }}
                      className="rounded-[18px] border border-white/[0.06] bg-white/[0.018] p-5"
                    >
                      <p className="font-mono text-[5px] uppercase tracking-[0.15em] text-white/22">
                        {item.label}
                      </p>

                      <div className="mt-4 flex items-end justify-between">
                        <span className="text-2xl font-light">
                          {item.value}
                        </span>
                        <span className="text-[7px] text-[#9878ef]">
                          {item.change}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_.7fr]">
                  <div className="rounded-[22px] border border-white/[0.06] bg-black/20 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-mono text-[5px] tracking-[0.16em] text-white/20">
                          PERFORMANCE TREND
                        </p>
                        <p className="mt-2 text-[9px] text-white/50">
                          Revenue progression
                        </p>
                      </div>

                      <TrendingUp size={14} className="text-[#7046e6]" />
                    </div>

                    <div className="mt-10 flex h-[210px] items-end gap-2">
                      {bars.map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 0.9,
                            delay: 0.6 + index * 0.06,
                          }}
                          className="relative flex-1 rounded-t bg-[#7046e6]/55"
                        >
                          <motion.span
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.08,
                            }}
                            className="absolute inset-x-0 top-0 h-px bg-[#c0aff5]"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-white/[0.06] bg-black/20 p-6">
                    <p className="font-mono text-[5px] tracking-[0.16em] text-white/20">
                      TARGET PROGRESS
                    </p>

                    <div className="relative mx-auto mt-8 flex h-[180px] w-[180px] items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 14,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border border-dashed border-[#7046e6]/25"
                      />

                      <div className="absolute inset-[20px] rounded-full border-[8px] border-white/[0.04]" />

                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 10px rgba(112,70,230,.1)",
                            "0 0 45px rgba(112,70,230,.3)",
                            "0 0 10px rgba(112,70,230,.1)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="flex h-[110px] w-[110px] flex-col items-center justify-center rounded-full border border-[#7046e6]/35 bg-[#7046e6]/[0.07]"
                      >
                        <span className="text-3xl font-light">84%</span>
                        <span className="mt-2 font-mono text-[5px] text-white/25">
                          TARGET
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {[
                    [Database, "Trusted Data"],
                    [Gauge, "KPI Context"],
                    [Activity, "Live Insight"],
                  ].map(([Icon, label]) => {
                    const I = Icon as typeof Database;

                    return (
                      <div
                        key={label as string}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.05] p-4"
                      >
                        <I size={12} className="text-[#7046e6]" />
                        <span className="text-[7px] text-white/30">
                          {label as string}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <motion.div
              animate={{ x: ["-100%", "120%"] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute inset-y-0 w-[15%] bg-gradient-to-r from-transparent via-[#7046e6]/[0.04] to-transparent"
            />
          </div>
        </motion.div>

        <motion.a
          href="#development-process"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mx-auto mt-14 flex w-fit items-center gap-3 text-[7px] text-white/25"
        >
          Learn how a dashboard is built
          <ArrowDown size={10} />
        </motion.a>
      </div>
    </section>
  );
}