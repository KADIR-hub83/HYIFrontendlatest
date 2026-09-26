"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  BarChart3,
  CircleDot,
  LayoutGrid,
  LineChart,
  Rows3,
} from "lucide-react";

const choices = [
  {
    Icon: BarChart3,
    question: "Compare",
    chart: "Bar / Column",
    example: "Revenue by region",
  },
  {
    Icon: LineChart,
    question: "Trend",
    chart: "Line chart",
    example: "Revenue over time",
  },
  {
    Icon: AreaChart,
    question: "Volume",
    chart: "Area / Column",
    example: "Demand through time",
  },
  {
    Icon: CircleDot,
    question: "Relationship",
    chart: "Scatter plot",
    example: "Spend vs conversion",
  },
  {
    Icon: Rows3,
    question: "Detail",
    chart: "Table / Matrix",
    example: "Account-level analysis",
  },
  {
    Icon: LayoutGrid,
    question: "Status",
    chart: "KPI / Scorecard",
    example: "Performance vs target",
  },
];

export default function DashboardDesignSystem() {
  return (
    <section className="bg-[#050505] py-32">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
            03 / VISUAL DESIGN
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Choose the chart
            <span className="block text-[#7046e6]">
              after the question.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[700px] text-[10px] leading-7 text-white/42">
            Visualization selection should follow analytical intent. A dashboard
            becomes easier to interpret when similar questions use consistent
            visual patterns and decorative complexity is kept below the actual
            information.
          </p>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {choices.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.article
                key={item.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="group min-h-[330px] rounded-[26px] border border-white/[0.07] bg-[#080808] p-7 transition hover:border-[#7046e6]/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7046e6]/20 bg-[#7046e6]/[0.06]">
                    <Icon size={16} className="text-[#9877ef]" />
                  </div>

                  <span className="font-mono text-[5px] text-white/18">
                    VISUAL 0{index + 1}
                  </span>
                </div>

                <p className="mt-12 font-mono text-[6px] uppercase tracking-[0.18em] text-[#8f6aed]">
                  Question: {item.question}
                </p>

                <h3 className="mt-4 text-xl">
                  {item.chart}
                </h3>

                <p className="mt-5 text-[8px] text-white/32">
                  Example — {item.example}
                </p>

                <div className="mt-8 flex h-[65px] items-end gap-1.5">
                  {[35, 55, 44, 70, 61, 86, 72, 94].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex-1 rounded-t bg-[#7046e6]/40"
                    />
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}