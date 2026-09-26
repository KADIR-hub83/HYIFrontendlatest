"use client";

import { motion } from "framer-motion";

const layers = [
  {
    number: "01",
    title: "Understand intent",
    description:
      "AI-enabled workplace interfaces can help interpret what an employee is trying to accomplish instead of requiring them to navigate every underlying system manually.",
  },
  {
    number: "02",
    title: "Retrieve context",
    description:
      "Relevant information can be retrieved from governed enterprise sources while respecting identity, authorization and data boundaries.",
  },
  {
    number: "03",
    title: "Reason over information",
    description:
      "Language models can synthesize permitted context, identify relationships and help users understand large volumes of enterprise information.",
  },
  {
    number: "04",
    title: "Recommend actions",
    description:
      "Intelligent systems can surface possible next steps while keeping important decisions visible and controllable by people.",
  },
  {
    number: "05",
    title: "Execute workflows",
    description:
      "Where appropriate, AI agents and automation can interact with business systems through controlled tools, APIs and workflow engines.",
  },
  {
    number: "06",
    title: "Capture feedback",
    description:
      "Human corrections, workflow outcomes and operational signals can improve future workplace experiences and knowledge quality.",
  },
];

export default function AIWorkplace() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-44 md:px-10 md:py-64">
      <div className="mx-auto max-w-[1500px]">
        <div className="border-b border-white/[0.08] pb-20">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
              03 / AI-NATIVE WORKPLACE
            </p>

            <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.13]">
              PEOPLE + KNOWLEDGE + AI
            </span>
          </div>

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
            className="mt-16 max-w-[1250px] text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.87] tracking-[-0.08em]"
          >
            AI becomes a new
            <span className="text-white/[0.2]">
              {" "}
              interface to enterprise work.
            </span>
          </motion.h2>
        </div>

        <div>
          {layers.map((layer) => (
            <motion.article
              key={layer.number}
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              className="grid min-h-[220px] gap-8 border-b border-white/[0.08] py-12 md:grid-cols-[90px_.75fr_1fr]"
            >
              <span className="font-mono text-[7px] text-white/[0.14]">
                {layer.number}
              </span>

              <h3 className="text-3xl font-medium tracking-[-0.05em] md:text-4xl">
                {layer.title}
              </h3>

              <p className="max-w-[650px] text-[13px] leading-8 text-white/[0.38]">
                {layer.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}