"use client";

import { motion } from "framer-motion";

const realities = [
  {
    code: "R01",
    title: "Fragmented information",
    description:
      "Business information often exists across operational applications, databases, files, SaaS platforms and legacy environments with inconsistent structures and ownership.",
  },
  {
    code: "R02",
    title: "Different definitions",
    description:
      "Teams may use the same business term while calculating or interpreting it differently, reducing confidence in analytics and downstream automation.",
  },
  {
    code: "R03",
    title: "Limited discoverability",
    description:
      "Useful information can exist without users knowing where it lives, who owns it, whether it is trustworthy or how it should be accessed.",
  },
  {
    code: "R04",
    title: "Pipeline complexity",
    description:
      "Point-to-point integrations and duplicated transformation logic make data movement difficult to understand, maintain and evolve.",
  },
  {
    code: "R05",
    title: "Governance after the fact",
    description:
      "Controls introduced only after data platforms are built can become manual bottlenecks rather than part of the architecture.",
  },
  {
    code: "R06",
    title: "AI without context",
    description:
      "Generative AI systems become less useful when enterprise knowledge lacks structure, metadata, access controls or reliable retrieval paths.",
  },
];

export default function DataRealitySection() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5  md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] ">
          <div>
            <p className="font-mono text-[12px] tracking-[0.22em] text-white/[0.28] mt-10">
              02 / CURRENT REALITY
            </p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="mt-12 max-w-[650px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl"
            >
              More data.
              <span className="block text-white/[0.22]">
                Less shared context.
              </span>
            </motion.h2>
          </div>

          <div className="border-t border-white/[0.08]">
            {realities.map((item, index) => (
              <motion.article
                key={item.code}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.03,
                }}
                className="grid gap-7 border-b border-white/[0.08] py-9 md:grid-cols-[70px_.6fr_1fr]"
              >
                <span className="font-mono text-[12px] text-white/[0.6]">
                  {item.code}
                </span>

                <h3 className="text-3xl font-extrabold tracking-[-0.035em]">
                  {item.title}
                </h3>

                <p className="text-[22px] leading-7 text-white/[0.37]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}