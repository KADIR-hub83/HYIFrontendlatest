"use client";

import { motion } from "framer-motion";

const knowledge = [
  {
    question: "What causes poor data quality?",
    answer:
      "Common causes include incorrect manual entry, missing validation, inconsistent definitions, integration defects, duplicate records, schema changes, stale pipelines, weak reference data, transformation errors and unclear ownership. The visible defect is often downstream from the process that originally created it.",
  },
  {
    question: "What is a data quality rule?",
    answer:
      "A data quality rule is a measurable expectation applied to data. Examples include requiring a field to be non-null, limiting values to an approved domain, verifying uniqueness, reconciling totals between systems or requiring a dataset to arrive within a specified freshness window.",
  },
  {
    question: "What is a data quality score?",
    answer:
      "A quality score summarizes results from one or more checks into an indicator. Scores can help communicate condition, but they should not be interpreted without context. The importance of individual rules, dimensions and datasets depends on the business process using them.",
  },
  {
    question: "What is data profiling?",
    answer:
      "Data profiling analyzes the structure and contents of data to understand characteristics such as null rates, distributions, patterns, duplicates, ranges and distinct values. Profiling helps teams discover unexpected behavior and design appropriate quality rules.",
  },
  {
    question: "What is data observability?",
    answer:
      "Data observability focuses on understanding the operational health and behavior of data systems. It can include freshness, volume, schema changes, lineage and distribution monitoring. It overlaps with quality management but often provides broader operational visibility into pipelines and datasets.",
  },
  {
    question: "Should every dataset have the same quality threshold?",
    answer:
      "No. Quality requirements should reflect business impact and intended use. A dataset supporting a critical financial process may require stricter controls than exploratory information used for low-risk analysis.",
  },
  {
    question: "Can data cleansing solve quality permanently?",
    answer:
      "Cleansing can correct existing defects, but it does not necessarily prevent new defects. Sustainable improvement usually requires identifying and correcting the upstream process, system or transformation responsible for producing bad data.",
  },
  {
    question: "Who owns data quality?",
    answer:
      "Responsibility is usually shared. Business owners define what acceptable data means for their domain, stewards coordinate definitions and issues, and technical teams implement and operate controls. Clear accountability is essential because tooling alone cannot determine business fitness for purpose.",
  },
];

export default function DataQualityKnowledge() {
  return (
    <section className="bg-[#050505] py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
            10 / KNOWLEDGE BASE
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Understand data quality
            <span className="text-white/28">
              {" "}in practice.
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 border-t border-white/[0.08]">
          {knowledge.map((item, index) => (
            <motion.article
              key={item.question}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="grid gap-5 border-b border-white/[0.07] py-8 md:grid-cols-[70px_.9fr_1.4fr]"
            >
              <span className="font-mono text-[6px] text-[#7046e6]/65">
                0{index + 1}
              </span>

              <h3 className="max-w-[380px] text-[12px] font-medium leading-6 text-white/70">
                {item.question}
              </h3>

              <p className="text-[9px] leading-6 text-white/40">
                {item.answer}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}