"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Clock3,
  Compass,
  FileText,
  Search,
} from "lucide-react";

const reporting = [
  ["Purpose", "Organize and communicate known measures"],
  ["Primary question", "What happened?"],
  ["Structure", "Defined metrics and reporting periods"],
  ["Typical output", "Tables, charts, scorecards and reports"],
  ["Focus", "Consistency and visibility"],
];

const insights = [
  ["Purpose", "Interpret meaningful signals in the data"],
  ["Primary question", "What is important about what happened?"],
  ["Structure", "Exploration, comparison and explanation"],
  ["Typical output", "Patterns, drivers, anomalies and observations"],
  ["Focus", "Understanding and decision context"],
];

export default function ReportingVsInsights() {
  return (
    <section className="relative bg-[#030303] py-32">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[7px] tracking-[0.25em] text-[#9575ed]">
              02 / REPORTING VS INSIGHT
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              Reporting creates
              <span className="block text-[#7046e6]">
                visibility.
              </span>
              <span className="block text-white/25">
                Insight creates meaning.
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-[10px] leading-7 text-white/42">
              Reporting and insight generation are related but different
              analytical activities. Reporting establishes a reliable,
              repeatable representation of business performance. Insight work
              investigates what those measurements reveal.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-white/[0.07] bg-[#080808] p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08]">
                <FileText size={17} className="text-white/45" />
              </div>

              <p className="mt-9 font-mono text-[6px] tracking-[0.18em] text-white/25">
                REPORTING
              </p>

              <h3 className="mt-3 text-2xl font-medium">
                Structured visibility
              </h3>

              <div className="mt-8">
                {reporting.map((row) => (
                  <div
                    key={row[0]}
                    className="border-t border-white/[0.06] py-4"
                  >
                    <p className="font-mono text-[5px] uppercase tracking-[0.15em] text-white/20">
                      {row[0]}
                    </p>

                    <p className="mt-2 text-[8px] leading-5 text-white/38">
                      {row[1]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="relative overflow-hidden rounded-[30px] border border-[#7046e6]/25 bg-[#7046e6]/[0.035] p-7"
            >
              <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-[#7046e6]/10 blur-[100px]" />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[#7046e6]/25 bg-[#7046e6]/10">
                <BrainCircuit size={17} className="text-[#a68af2]" />
              </div>

              <p className="relative mt-9 font-mono text-[6px] tracking-[0.18em] text-[#a68af2]">
                INSIGHT
              </p>

              <h3 className="relative mt-3 text-2xl font-medium">
                Contextual meaning
              </h3>

              <div className="relative mt-8">
                {insights.map((row) => (
                  <div
                    key={row[0]}
                    className="border-t border-[#7046e6]/15 py-4"
                  >
                    <p className="font-mono text-[5px] uppercase tracking-[0.15em] text-[#a68af2]/55">
                      {row[0]}
                    </p>

                    <p className="mt-2 text-[8px] leading-5 text-white/42">
                      {row[1]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid gap-3 md:grid-cols-4">
          {[
            [Clock3, "Monitor", "What changed?"],
            [Search, "Investigate", "Where did it change?"],
            [BarChart3, "Explain", "What contributed?"],
            [Compass, "Interpret", "Why does it matter?"],
          ].map(([Icon, title, question], index) => {
            const I = Icon as typeof Clock3;

            return (
              <motion.div
                key={title as string}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative rounded-[20px] border border-white/[0.06] bg-[#070707] p-5"
              >
                <I size={13} className="text-[#8f6ced]" />

                <p className="mt-7 text-[10px]">{title as string}</p>

                <p className="mt-2 text-[7px] text-white/28">
                  {question as string}
                </p>

                {index < 3 && (
                  <ArrowRight
                    size={10}
                    className="absolute -right-[7px] top-1/2 hidden text-[#7046e6] md:block"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}