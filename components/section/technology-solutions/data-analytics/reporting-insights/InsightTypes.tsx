"use client";

import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  GitCompare,
  Network,
  ScanSearch,
  TrendingUp,
} from "lucide-react";

const insightTypes = [
  {
    Icon: TrendingUp,
    number: "01",
    title: "Trend",
    question: "Is performance moving consistently?",
    text: "Trend analysis examines direction through time and helps distinguish persistent movement from isolated variation.",
    example: "Revenue has increased across four consecutive reporting periods.",
  },
  {
    Icon: AlertTriangle,
    number: "02",
    title: "Anomaly",
    question: "What looks unexpectedly different?",
    text: "Anomaly analysis focuses attention on values or movements that differ materially from normal or expected behavior.",
    example: "Conversion dropped sharply despite stable traffic volume.",
  },
  {
    Icon: GitCompare,
    number: "03",
    title: "Variance",
    question: "Where are actuals different from expectations?",
    text: "Variance compares actual performance with a target, forecast, budget, benchmark or previous period.",
    example: "Operating cost is above budget primarily in two categories.",
  },
  {
    Icon: Network,
    number: "04",
    title: "Relationship",
    question: "Which variables move together?",
    text: "Relationship analysis investigates associations between measures while avoiding the assumption that correlation alone establishes causation.",
    example: "Higher repeat purchase rates are associated with one customer cohort.",
  },
  {
    Icon: ScanSearch,
    number: "05",
    title: "Driver",
    question: "What contributed to the change?",
    text: "Driver analysis decomposes a result across relevant dimensions to identify where positive or negative contribution is concentrated.",
    example: "Most quarterly growth came from enterprise accounts in the West.",
  },
  {
    Icon: Activity,
    number: "06",
    title: "Distribution",
    question: "How is performance spread?",
    text: "Distribution analysis helps reveal concentration, skew, ranges and differences that averages can hide.",
    example: "Average delivery time is stable, but the long-tail delay rate increased.",
  },
];

export default function InsightTypes() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-32">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="max-w-[900px]">
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9575ed]">
            05 / INSIGHT PATTERNS
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Know what
            <span className="text-[#7046e6]"> to look for.</span>
          </h2>

          <p className="mt-7 max-w-[720px] text-[10px] leading-7 text-white/42">
            Insight analysis becomes more systematic when analysts recognize
            recurring analytical patterns. Trends, anomalies, variance,
            distributions and contribution patterns each answer a different
            type of business question.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {insightTypes.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -7 }}
                className="group min-h-[390px] rounded-[28px] border border-white/[0.07] bg-[#050505] p-7 transition-colors hover:border-[#7046e6]/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#7046e6]/20 bg-[#7046e6]/[0.06]">
                    <Icon size={16} className="text-[#9878ef]" />
                  </div>

                  <span className="font-mono text-[5px] text-white/17">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-9 text-2xl font-medium">{item.title}</h3>

                <p className="mt-3 text-[8px] font-medium text-[#9878ef]">
                  {item.question}
                </p>

                <p className="mt-5 text-[8px] leading-6 text-white/35">
                  {item.text}
                </p>

                <div className="mt-7 border-t border-white/[0.06] pt-5">
                  <p className="font-mono text-[5px] tracking-[0.16em] text-white/18">
                    EXAMPLE
                  </p>

                  <p className="mt-3 text-[7px] leading-5 text-white/28">
                    {item.example}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}