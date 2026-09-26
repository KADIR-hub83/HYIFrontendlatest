"use client";

import { motion } from "framer-motion";

const principles = [
  [
    "01",
    "Design around meaning.",
    "A technically correct dataset is still difficult to use when consumers cannot understand what its fields and relationships represent.",
  ],
  [
    "02",
    "Ownership before tooling.",
    "Technology can automate governance activities, but it cannot replace clarity about who is accountable for important information.",
  ],
  [
    "03",
    "Quality is contextual.",
    "Data quality should be evaluated against the requirements of the decisions, applications and AI systems that consume it.",
  ],
  [
    "04",
    "Govern where data moves.",
    "Controls are stronger when integrated into platforms, pipelines and access patterns rather than implemented as disconnected reviews.",
  ],
  [
    "05",
    "Build reusable products.",
    "High-value datasets should be designed for controlled reuse rather than repeatedly reconstructed by individual teams.",
  ],
  [
    "06",
    "Observe the pipeline.",
    "Production data systems require visibility into failures, freshness, schema changes and downstream impact.",
  ],
  [
    "07",
    "Prepare context for AI.",
    "Enterprise AI requires governed information, meaningful metadata, permissions and retrieval paths in addition to model capability.",
  ],
];

export default function DataPrinciples() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5  md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono mt-10 text-[12px] tracking-[0.22em] text-white/[0.28]">
          10 / DATA PRINCIPLES
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-[1150px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl"
        >
          Technology changes.
          <span className="block text-white/[0.22]">
            Good data principles survive.
          </span>
        </motion.h2>

        <div className="mt-10">
          {principles.map(
            ([number, title, description]) => (
              <motion.article
                key={number}
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                className="grid gap-8 border-t border-white/[0.08] py-5 md:grid-cols-[80px_.75fr_1fr]"
              >
                <span className="font-mono text-[12px] text-white/[0.6]">
                  P-{number}
                </span>

                <h3 className="text-3xl font-extrabold tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="text-[22px] leading-8 text-white/[0.37]">
                  {description}
                </p>
              </motion.article>
            ),
          )}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}