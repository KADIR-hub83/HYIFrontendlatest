"use client";

import { motion } from "framer-motion";

const foundation = [
  [
    "01",
    "Sources",
    "Applications, operational databases, SaaS platforms, files, APIs, events and external information.",
  ],
  [
    "02",
    "Ingestion",
    "Batch, streaming, change-data-capture and API-based mechanisms bring information into governed processing environments.",
  ],
  [
    "03",
    "Storage",
    "Data is stored according to access patterns, structure, latency requirements, lifecycle and governance constraints.",
  ],
  [
    "04",
    "Transformation",
    "Raw information becomes standardized, validated, enriched and shaped for downstream use.",
  ],
  [
    "05",
    "Semantic context",
    "Business definitions and relationships make technical datasets understandable to consumers.",
  ],
  [
    "06",
    "Serving",
    "Analytics, APIs, applications and AI systems access data through appropriate interfaces.",
  ],
];

export default function DataFoundation() {
  return (
    <section className="bg-black px-5 py-10 md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-24 flex flex-col justify-between gap-10 lg:flex-row">
          <div>
            <p className="font-mono text-[12px] tracking-[0.22em] text-white/[0.28]">
              03 / FOUNDATION
            </p>
          </div>

          <div className="max-w-[950px]">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl"
            >
              From raw information
              <span className="block text-white/[0.22]">
                to usable knowledge.
              </span>
            </motion.h2>
          </div>
        </div>

        <div className="border-t border-white/[0.08]">
          {foundation.map(
            ([number, title, description], index) => (
              <motion.article
                key={number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                className="group grid min-h-[70px] gap-8 border-b border-white/[0.08] py-5 md:grid-cols-[90px_.7fr_1fr]"
              >
                <span className="font-mono text-[12px] text-white/[0.6]">
                  {number}
                </span>

                <h3 className="text-3xl font-extrabold tracking-[-0.05em] transition-colors group-hover:text-white md:text-4xl">
                  {title}
                </h3>

                <p className="max-w-[650px] text-[22px] leading-8 text-white/[0.37]">
                  {description}
                </p>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}