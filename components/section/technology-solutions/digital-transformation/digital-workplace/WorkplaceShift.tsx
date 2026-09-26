"use client";

import { motion } from "framer-motion";

const shifts = [
  {
    from: "Applications",
    to: "Experiences",
    description:
      "Employees should not need to understand the architecture of every enterprise system before they can complete ordinary work.",
  },
  {
    from: "Search",
    to: "Answers",
    description:
      "AI-assisted retrieval can move knowledge discovery from lists of documents toward contextual responses grounded in authorized enterprise information.",
  },
  {
    from: "Manual coordination",
    to: "Intelligent orchestration",
    description:
      "Routine coordination can increasingly be supported by workflows, agents and automation while humans retain control over consequential decisions.",
  },
  {
    from: "Static knowledge",
    to: "Living context",
    description:
      "Enterprise knowledge becomes more useful when ownership, metadata, permissions and freshness are continuously maintained.",
  },
  {
    from: "Tool adoption",
    to: "Work redesign",
    description:
      "Introducing another platform does not automatically improve productivity. Workflows and responsibilities must evolve with the technology.",
  },
];

export default function WorkplaceShift() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-24 flex flex-col justify-between gap-12 lg:flex-row">
          <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
            02 / THE SHIFT
          </p>

          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl">
            The workplace is moving
            <span className="block text-white/[0.2]">
              from tools to intelligence.
            </span>
          </h2>
        </div>

        <div className="border-t border-white/[0.08]">
          {shifts.map((item, index) => (
            <motion.article
              key={item.from}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              whileHover={{
                x: 7,
              }}
              className="grid gap-8 border-b border-white/[0.08] py-10 lg:grid-cols-[70px_.55fr_60px_.55fr_1fr]"
            >
              <span className="font-mono text-[6px] text-white/[0.14]">
                S-{String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-2xl font-medium tracking-[-0.04em] text-white/[0.4]">
                {item.from}
              </h3>

              <span className="text-white/[0.15]">→</span>

              <h3 className="text-2xl font-medium tracking-[-0.04em]">
                {item.to}
              </h3>

              <p className="text-[12px] leading-7 text-white/[0.36]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}