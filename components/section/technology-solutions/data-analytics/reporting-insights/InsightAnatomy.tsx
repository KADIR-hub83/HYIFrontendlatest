"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CircleDot,
  GitCompare,
  Layers3,
  Lightbulb,
  Target,
} from "lucide-react";

const anatomy = [
  {
    Icon: CircleDot,
    number: "01",
    title: "Signal",
    text: "A meaningful movement, pattern, relationship or exception appears in the data.",
  },
  {
    Icon: GitCompare,
    number: "02",
    title: "Context",
    text: "The signal is compared with history, expectations, targets, benchmarks or another relevant reference point.",
  },
  {
    Icon: Layers3,
    number: "03",
    title: "Segmentation",
    text: "The metric is decomposed across dimensions such as region, product, channel, customer or time.",
  },
  {
    Icon: AlertTriangle,
    number: "04",
    title: "Significance",
    text: "The analyst determines whether the movement is meaningful enough to deserve attention.",
  },
  {
    Icon: Lightbulb,
    number: "05",
    title: "Interpretation",
    text: "Evidence is converted into a concise explanation of what the organization should understand.",
  },
  {
    Icon: Target,
    number: "06",
    title: "Decision relevance",
    text: "The insight is connected to the business question or decision it can help inform.",
  },
];

export default function InsightAnatomy() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-32">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9575ed]">
            03 / ANATOMY OF AN INSIGHT
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            A chart is evidence.
            <span className="block text-[#7046e6]">
              Not the conclusion.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-[10px] leading-7 text-white/42">
            Useful insight requires interpretation. Analysts need to understand
            what changed, the context around that change, where it occurred and
            why it is relevant before communicating a conclusion.
          </p>
        </div>

        <div className="relative mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {anatomy.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative min-h-[310px] overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#050505] p-7 transition-colors hover:border-[#7046e6]/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7046e6]/20 bg-[#7046e6]/[0.06]">
                    <Icon size={15} className="text-[#9878ef]" />
                  </div>

                  <span className="font-mono text-[5px] text-white/16">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-medium">{item.title}</h3>

                <p className="mt-5 text-[8px] leading-6 text-white/35">
                  {item.text}
                </p>

                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "70%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.08 }}
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#7046e6] to-transparent"
                />

                {index < anatomy.length - 1 && (
                  <ArrowRight
                    size={10}
                    className="absolute -right-[8px] top-1/2 z-10 hidden text-[#7046e6] lg:block"
                  />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}