"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Filter,
  MousePointer2,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const rows = [
  ["Enterprise", "$1.48M", "+18.4%", "42%"],
  ["Mid Market", "$1.12M", "+9.8%", "31%"],
  ["SMB", "$0.86M", "+6.2%", "19%"],
  ["Partners", "$0.44M", "+4.1%", "8%"],
];

export default function DashboardIntelligence() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-32">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
              04 / INTERACTION
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              Summary first.
              <span className="block text-white/25">
                Investigation second.
              </span>
            </h2>
          </div>

          <div className="lg:pt-10">
            <p className="max-w-[600px] text-[10px] leading-7 text-white/42">
              Interactivity should help users move from an overview into a
              question. Filters change scope, drill-down reveals detail,
              tooltips add context and cross-filtering can expose relationships
              without forcing every detail onto the first screen.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[32px] border border-[#7046e6]/20 bg-[#050505]"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] p-5">
            <div className="flex items-center gap-3">
              <SlidersHorizontal size={13} className="text-[#7046e6]" />
              <span className="font-mono text-[6px] text-white/30">
                INTERACTIVE ANALYSIS
              </span>
            </div>

            <div className="flex gap-2">
              {["Region", "Segment", "Period"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 rounded-lg border border-white/[0.07] px-3 py-2 text-[6px] text-white/30"
                >
                  <Filter size={8} />
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_.8fr]">
            <div className="border-b border-white/[0.06] p-6 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[5px] text-white/20">
                  SEGMENT PERFORMANCE
                </p>
                <Search size={11} className="text-white/20" />
              </div>

              <div className="mt-7">
                <div className="grid grid-cols-4 border-b border-white/[0.06] pb-3 font-mono text-[5px] text-white/18">
                  <span>SEGMENT</span>
                  <span>REVENUE</span>
                  <span>GROWTH</span>
                  <span>SHARE</span>
                </div>

                {rows.map((row, index) => (
                  <motion.div
                    key={row[0]}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      backgroundColor: "rgba(112,70,230,.06)",
                    }}
                    className="grid grid-cols-4 border-b border-white/[0.05] py-5 text-[8px] text-white/40"
                  >
                    <span className="text-white/65">{row[0]}</span>
                    <span>{row[1]}</span>
                    <span className="text-[#9978ef]">{row[2]}</span>
                    <span>{row[3]}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6">
              <p className="font-mono text-[5px] text-white/20">
                DRILL PATH
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Company",
                  "Business unit",
                  "Region",
                  "Segment",
                  "Account",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                        index === 0
                          ? "border-[#7046e6] bg-[#7046e6]/15"
                          : "border-white/[0.08]"
                      }`}
                    >
                      <span className="font-mono text-[5px] text-white/35">
                        {index + 1}
                      </span>
                    </div>

                    <span className="text-[8px] text-white/38">
                      {item}
                    </span>

                    {index < 4 && (
                      <ChevronRight size={9} className="text-white/15" />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-9 rounded-[18px] border border-[#7046e6]/15 bg-[#7046e6]/[0.04] p-5">
                <MousePointer2 size={13} className="text-[#7046e6]" />
                <p className="mt-4 text-[8px] leading-6 text-white/35">
                  Each interaction should answer a meaningful follow-up question,
                  not merely demonstrate that the dashboard is interactive.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}