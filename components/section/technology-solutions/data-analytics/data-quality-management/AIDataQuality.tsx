"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Gauge,
  ScanSearch,
} from "lucide-react";

const problems = [
  {
    Icon: Database,
    title: "Incomplete training data",
    text: "Missing or poorly represented information can limit what a model is able to learn from the available dataset.",
  },
  {
    Icon: ScanSearch,
    title: "Incorrect labels or values",
    text: "Errors in training or reference data can introduce misleading patterns and reduce reliability.",
  },
  {
    Icon: Gauge,
    title: "Distribution change",
    text: "Production data may evolve over time, creating a mismatch between historical training conditions and current inputs.",
  },
  {
    Icon: BrainCircuit,
    title: "Weak provenance",
    text: "Without metadata and lineage, teams may struggle to understand where model inputs originated or whether they are appropriate for the intended use.",
  },
];

export default function AIDataQuality() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[#7046e6]/[0.05] blur-[160px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
              09 / DATA QUALITY FOR AI
            </p>

            <h2 className="mt-5 max-w-[650px] text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              AI inherits the condition
              <span className="block text-[#7046e6]">
                of its data.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pt-12"
          >
            <p className="max-w-[620px] text-[11px] leading-8 text-white/48">
              Machine-learning systems depend on data during training,
              evaluation and production inference. Poor quality inputs can
              reduce reliability, create unstable behavior and make model
              outputs harder to interpret or trust.
            </p>

            <p className="mt-5 max-w-[620px] text-[10px] leading-7 text-white/38">
              Data-quality controls for AI therefore need to consider both
              traditional dimensions such as completeness and validity and
              model-specific concerns such as feature distributions, label
              quality, provenance and production drift.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="min-h-[300px] rounded-[26px] border border-[#7046e6]/15 bg-[#080808] p-7"
              >
                <Icon
                  size={18}
                  strokeWidth={1}
                  className="text-[#9472ee]"
                />

                <h3 className="mt-14 text-[14px] font-medium">
                  {item.title}
                </h3>

                <p className="mt-5 text-[9px] leading-6 text-white/38">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}