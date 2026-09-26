"use client";

import { motion } from "framer-motion";

const cases = [
  {
    label: "CUSTOMER EXPERIENCE",
    title: "AI Assistants",
    text: "Context-aware virtual assistants that understand natural requests and maintain conversation history.",
  },
  {
    label: "ENTERPRISE KNOWLEDGE",
    title: "Semantic Search",
    text: "Search documents and knowledge using meaning rather than exact keyword matching.",
  },
  {
    label: "VOICE OF CUSTOMER",
    title: "Sentiment Intelligence",
    text: "Analyze reviews, conversations and feedback to discover customer sentiment at scale.",
  },
  {
    label: "DOCUMENT AUTOMATION",
    title: "Information Extraction",
    text: "Extract entities, relationships and business-critical information from unstructured documents.",
  },
];

export default function NLPUseCases() {
  return (
    <section className="relative bg-[#030303] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="text-center">
          <span className="text-[8px] uppercase tracking-[0.35em] text-violet-300/45">
            Enterprise Applications
          </span>

          <h2 className="mx-auto mt-6 max-w-[900px] text-4xl font-medium tracking-[-0.045em] md:text-7xl">
            Language intelligence
            <span className="text-violet-300"> at work.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {cases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: index * 0.08 }}
              className="group relative min-h-[370px] overflow-hidden rounded-[30px] border border-white/[0.07] bg-[#080709] p-8 md:p-10"
            >
              <div className="absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full bg-violet-500/[0.05] blur-[80px] transition-all duration-700 group-hover:bg-fuchsia-500/[0.10]" />

              <div className="relative z-10">
                <span className="text-[7px] tracking-[0.25em] text-violet-200/30">
                  {item.label}
                </span>

                <h3 className="mt-20 text-3xl font-medium">{item.title}</h3>

                <p className="mt-5 max-w-[520px] text-sm leading-7 text-white/35">
                  {item.text}
                </p>

                <div className="mt-10 flex items-center gap-3 text-[8px] tracking-[0.2em] text-white/25">
                  EXPLORE
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-violet-300"
                  >
                    →
                  </motion.span>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 flex gap-1">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="w-[2px] rounded-full bg-violet-300/30"
                    animate={{
                      height: [5, 25, 9, 18, 5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.09,
                    }}
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}