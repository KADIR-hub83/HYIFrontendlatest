"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  CalendarDays,
  Crosshair,
  Database,
  UserRound,
} from "lucide-react";

const anatomy = [
  {
    Icon: Calculator,
    label: "Measure",
    value: "Net Revenue",
    description: "The value being evaluated.",
  },
  {
    Icon: Crosshair,
    label: "Target",
    value: "$5.0M",
    description: "The desired performance level.",
  },
  {
    Icon: CalendarDays,
    label: "Period",
    value: "Monthly",
    description: "The evaluation timeframe.",
  },
  {
    Icon: UserRound,
    label: "Owner",
    value: "Commercial",
    description: "Who is accountable for the KPI.",
  },
];

export default function KPIArchitecture() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-32">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
              02 / KPI ARCHITECTURE
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              A number alone
              <span className="block text-white/25">
                is not a KPI.
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-[10px] leading-7 text-white/43">
              A useful KPI connects a measurable value with an objective,
              target and decision context. The user needs enough context to
              understand whether performance is healthy, improving, declining
              or requiring action.
            </p>

            <p className="mt-5 max-w-[520px] text-[10px] leading-7 text-white/43">
              Definitions should also document calculation logic, ownership,
              source data, refresh frequency and the dimensions through which
              the metric can be analyzed.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-[#7046e6]/20 bg-[#050505] p-6 md:p-8"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-6">
                <div>
                  <p className="font-mono text-[5px] tracking-[0.17em] text-[#9876ef]">
                    KPI DEFINITION MODEL
                  </p>
                  <h3 className="mt-3 text-lg">
                    Revenue performance
                  </h3>
                </div>

                <Database size={16} className="text-[#7046e6]" />
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {anatomy.map((item, index) => {
                  const Icon = item.Icon;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="rounded-[20px] border border-white/[0.06] bg-white/[0.015] p-5"
                    >
                      <div className="flex items-center justify-between">
                        <Icon size={13} className="text-[#8f6aed]" />
                        <span className="font-mono text-[5px] text-white/18">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="mt-8 font-mono text-[5px] uppercase tracking-[0.14em] text-white/22">
                        {item.label}
                      </p>

                      <p className="mt-2 text-lg font-light">
                        {item.value}
                      </p>

                      <p className="mt-3 text-[7px] leading-5 text-white/28">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 overflow-hidden rounded-[20px] border border-[#7046e6]/15">
                <div className="grid grid-cols-4 bg-[#7046e6]/[0.05] p-4">
                  {["Actual", "Target", "Variance", "Trend"].map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[5px] uppercase text-white/22"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-4 p-4 text-[10px]">
                  <span>$4.82M</span>
                  <span className="text-white/40">$5.0M</span>
                  <span className="text-[#9a7bf0]">-3.6%</span>
                  <span className="text-[#9a7bf0]">↗</span>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 text-[7px] text-white/28">
                Metric
                <ArrowRight size={9} className="text-[#7046e6]" />
                Context
                <ArrowRight size={9} className="text-[#7046e6]" />
                Interpretation
                <ArrowRight size={9} className="text-[#7046e6]" />
                Decision
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}