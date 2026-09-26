"use client";

import { motion } from "framer-motion";

const outcomes = [
  [
    "Knowledge",
    "Employees can discover organizational information with less dependence on knowing exactly where it is stored.",
  ],
  [
    "Focus",
    "Repetitive coordination and information retrieval can consume less employee attention.",
  ],
  [
    "Collaboration",
    "Teams can preserve more useful context across projects, conversations and decisions.",
  ],
  [
    "Self-service",
    "Employees can resolve a broader range of routine workplace needs independently.",
  ],
  [
    "AI enablement",
    "Enterprise information becomes more suitable for governed retrieval, copilots and agent-assisted workflows.",
  ],
  [
    "Adaptability",
    "Reusable workplace foundations make it easier to introduce new experiences as organizational needs change.",
  ],
];

export default function WorkplaceOutcomes() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
          15 / OUTCOMES
        </p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-14 max-w-[1100px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl"
        >
          Less friction between
          <span className="block text-white/[0.2]">
            people and progress.
          </span>
        </motion.h2>

        <div className="mt-28">
          {outcomes.map(([title, description], index) => (
            <motion.article
              key={title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              className="grid min-h-[190px] gap-8 border-t border-white/[0.08] py-10 md:grid-cols-[80px_.65fr_1fr]"
            >
              <span className="font-mono text-[6px] text-white/[0.14]">
                O-{String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-3xl font-medium tracking-[-0.05em]">
                {title}
              </h3>

              <p className="max-w-[650px] text-[13px] leading-8 text-white/[0.36]">
                {description}
              </p>
            </motion.article>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}