"use client";

import { motion } from "framer-motion";

const rows = [
  [
    "Primary question",
    "Can this data be trusted for its intended use?",
    "Who owns the data and under what policies may it be used?",
  ],
  [
    "Core focus",
    "Condition and reliability of data",
    "Accountability, policy, standards and control",
  ],
  [
    "Typical activities",
    "Profiling, validation, monitoring, remediation",
    "Ownership, classification, cataloging, stewardship, policy",
  ],
  [
    "Typical output",
    "Quality rules, scores, incidents and improvements",
    "Policies, ownership, definitions and governance controls",
  ],
  [
    "Relationship",
    "Quality provides evidence about whether governed data is trustworthy.",
    "Governance establishes who is accountable for defining and maintaining quality.",
  ],
];

export default function QualityVsGovernance() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[900px]"
        >
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
            08 / QUALITY VS GOVERNANCE
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Closely connected.
            <span className="text-white/28">
              {" "}Not identical.
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 overflow-x-auto rounded-[28px] border border-white/[0.07]">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-[.55fr_1fr_1fr] border-b border-white/[0.07] bg-[#050505]">
              <div className="p-5" />

              <div className="border-l border-white/[0.07] p-5">
                <p className="text-[10px] font-medium text-[#9472ee]">
                  Data Quality Management
                </p>
              </div>

              <div className="border-l border-white/[0.07] p-5">
                <p className="text-[10px] font-medium text-white/65">
                  Data Governance
                </p>
              </div>
            </div>

            {rows.map(([label, quality, governance], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="grid grid-cols-[.55fr_1fr_1fr] border-b border-white/[0.06] last:border-b-0"
              >
                <div className="bg-[#050505] p-5">
                  <p className="font-mono text-[6px] uppercase tracking-[0.12em] text-white/25">
                    {label}
                  </p>
                </div>

                <div className="border-l border-white/[0.06] p-5">
                  <p className="text-[8px] leading-6 text-white/40">
                    {quality}
                  </p>
                </div>

                <div className="border-l border-white/[0.06] p-5">
                  <p className="text-[8px] leading-6 text-white/40">
                    {governance}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}