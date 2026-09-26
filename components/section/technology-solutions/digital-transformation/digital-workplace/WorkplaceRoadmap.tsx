"use client";

import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "01",
    title: "Understand work",
    description:
      "Identify high-friction employee journeys, knowledge gaps, repetitive tasks and collaboration patterns.",
  },
  {
    phase: "02",
    title: "Prepare knowledge",
    description:
      "Improve ownership, permissions, metadata, searchability and lifecycle of enterprise information.",
  },
  {
    phase: "03",
    title: "Connect systems",
    description:
      "Create controlled integration paths between workplace experiences and relevant business applications.",
  },
  {
    phase: "04",
    title: "Introduce AI",
    description:
      "Deploy targeted search, retrieval and copilot capabilities around clearly defined employee needs.",
  },
  {
    phase: "05",
    title: "Automate work",
    description:
      "Extend mature experiences into controlled workflow execution and agent-assisted operations.",
  },
  {
    phase: "06",
    title: "Scale responsibly",
    description:
      "Expand successful patterns while strengthening evaluation, governance, security and organizational adoption.",
  },
];

export default function WorkplaceRoadmap() {
  return (
    <section className="bg-black px-5 py-44 md:px-10 md:py-64">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
            14 / ROADMAP
          </p>

          <h2 className="max-w-[850px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl">
            Transform work
            <span className="block text-white/[0.2]">
              progressively.
            </span>
          </h2>
        </div>

        <div className="mt-28">
          {roadmap.map((item) => (
            <motion.article
              key={item.phase}
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              className="grid min-h-[220px] gap-8 border-t border-white/[0.08] py-10 md:grid-cols-[100px_.75fr_1fr]"
            >
              <span className="font-mono text-[7px] text-white/[0.14]">
                {item.phase}
              </span>

              <h3 className="text-3xl font-medium tracking-[-0.05em] md:text-4xl">
                {item.title}
              </h3>

              <p className="max-w-[650px] text-[13px] leading-8 text-white/[0.36]">
                {item.description}
              </p>
            </motion.article>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}