"use client";

import { motion } from "framer-motion";

const profile = [
  ["Null percentage", "How much required information is missing?"],
  ["Distinct values", "How much variation exists in the attribute?"],
  ["Value frequency", "Which values occur most often?"],
  ["Min / Max", "What range does numeric or temporal data occupy?"],
  ["Patterns", "Do values follow expected structural patterns?"],
  ["Duplicates", "Are entities or identifiers repeated unexpectedly?"],
  ["Distribution", "Does the shape of the data appear unusual?"],
  ["Outliers", "Which records differ significantly from normal behavior?"],
];

export default function DataProfiling() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[900px]"
        >
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
            05 / DATA PROFILING
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Understand the data
            <span className="text-white/28">
              {" "}before judging it.
            </span>
          </h2>

          <p className="mt-7 max-w-[750px] text-[10px] leading-7 text-white/42">
            Data profiling examines the structure, content and statistical
            characteristics of a dataset. It is often one of the first steps in
            discovering unexpected patterns and designing meaningful quality
            rules.
          </p>
        </motion.div>

        <div className="mt-16 border-t border-white/[0.08]">
          {profile.map(([title, description], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="grid gap-4 border-b border-white/[0.07] py-6 md:grid-cols-[80px_.8fr_1.4fr]"
            >
              <span className="font-mono text-[6px] text-[#7046e6]/65">
                0{index + 1}
              </span>

              <h3 className="text-[11px] text-white/70">
                {title}
              </h3>

              <p className="text-[9px] leading-6 text-white/36">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}