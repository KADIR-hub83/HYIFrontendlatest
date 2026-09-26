"use client";

import { motion } from "framer-motion";

const ideas = [
  {
    number: "01",
    title: "Fitness for purpose",
    text: "Data quality is contextual. A dataset may be acceptable for one use case and insufficient for another. Quality requirements should therefore be connected to the decisions, processes or models that depend on the data.",
  },
  {
    number: "02",
    title: "Measurable expectations",
    text: "Organizations translate quality expectations into measurable rules: required values, permitted formats, acceptable ranges, freshness thresholds, uniqueness requirements and reconciliation checks.",
  },
  {
    number: "03",
    title: "Continuous management",
    text: "Quality is not established once. Sources, pipelines, applications and business rules change, so important data needs continuous profiling, monitoring, issue ownership and remediation.",
  },
];

export default function WhatIsDataQuality() {
  return (
    <section
      id="quality-foundation"
      className="bg-[#050505] py-28"
    >
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]"
        >
          <div>
            <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
              01 / FOUNDATION
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              What does
              <span className="block text-white/28">
                “quality” mean?
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-[820px] text-xl font-light leading-[1.65] text-white/70 md:text-2xl">
              High-quality data is sufficiently accurate, complete,
              consistent, valid and timely for the business purpose in which it
              is being used.
            </p>

            <p className="mt-7 max-w-[800px] text-[10px] leading-7 text-white/42">
              Data quality management creates the processes and controls needed
              to understand the condition of data, detect problems, assign
              responsibility and improve reliability over time. The objective
              is not simply to produce a high score; it is to reduce uncertainty
              in the business activities that depend on information.
            </p>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-px border border-white/[0.07] bg-white/[0.07] lg:grid-cols-3">
          {ideas.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="min-h-[330px] bg-[#070707] p-8"
            >
              <span className="font-mono text-[6px] text-[#7046e6]">
                {item.number}
              </span>

              <h3 className="mt-16 text-lg font-medium">
                {item.title}
              </h3>

              <p className="mt-5 text-[10px] leading-7 text-white/40">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}