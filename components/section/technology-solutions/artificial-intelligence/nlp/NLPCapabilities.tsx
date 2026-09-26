"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Text Intelligence",
    description:
      "Extract meaning, structure and actionable information from massive volumes of unstructured text.",
    metric: "DOCUMENT AI",
  },
  {
    number: "02",
    title: "Sentiment Analysis",
    description:
      "Understand customer emotion, opinion and behavioral signals across conversations and feedback.",
    metric: "SENTIMENT",
  },
  {
    number: "03",
    title: "Intent Detection",
    description:
      "Identify what users are trying to accomplish and intelligently route requests to the right action.",
    metric: "INTENT",
  },
  {
    number: "04",
    title: "Entity Recognition",
    description:
      "Detect people, organizations, products, locations and domain-specific entities automatically.",
    metric: "NER",
  },
  {
    number: "05",
    title: "Semantic Search",
    description:
      "Move beyond keyword matching with search systems that understand context and actual meaning.",
    metric: "RETRIEVAL",
  },
  {
    number: "06",
    title: "Conversational AI",
    description:
      "Build intelligent assistants capable of contextual, natural and multi-turn interactions.",
    metric: "DIALOGUE",
  },
];

export default function NLPCapabilities() {
  return (
    <section className="relative bg-[#030303] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="max-w-[900px]">
          <span className="text-[8px] uppercase tracking-[0.35em] text-violet-300/45">
            NLP Capabilities
          </span>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] md:text-7xl">
            Understand language.
            <span className="block text-fuchsia-300">Unlock intelligence.</span>
          </h2>
        </div>

        <div className="mt-20 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="group grid gap-7 py-9 md:grid-cols-[100px_1fr_1fr_160px] md:items-center md:py-11"
            >
              <span className="text-[9px] tracking-[0.25em] text-white/18">
                {item.number}
              </span>

              <h3 className="text-2xl font-medium text-white/80 transition-colors group-hover:text-violet-200 md:text-3xl">
                {item.title}
              </h3>

              <p className="max-w-[500px] text-sm leading-7 text-white/32">
                {item.description}
              </p>

              <div className="flex items-center gap-3 md:justify-end">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_10px_#e879f9]" />
                <span className="text-[7px] tracking-[0.2em] text-white/22">
                  {item.metric}
                </span>

                <motion.span
                  className="ml-2 text-violet-300/35"
                  whileHover={{ x: 6 }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}