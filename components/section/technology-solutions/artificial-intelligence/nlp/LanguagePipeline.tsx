"use client";

import { motion } from "framer-motion";

const stages = [
  {
    id: "01",
    title: "Language",
    sub: "Raw Input",
    example: "Customer needs support",
  },
  {
    id: "02",
    title: "Tokenize",
    sub: "Structure",
    example: "[Customer] [needs] [support]",
  },
  {
    id: "03",
    title: "Embed",
    sub: "Meaning",
    example: "[0.82, 0.41, 0.93...]",
  },
  {
    id: "04",
    title: "Understand",
    sub: "Reason",
    example: "Intent → Support",
  },
  {
    id: "05",
    title: "Act",
    sub: "Intelligence",
    example: "Route → Service Agent",
  },
];

export default function LanguagePipeline() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.05] bg-[#070608] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-[8px] uppercase tracking-[0.35em] text-fuchsia-300/45">
              Language Intelligence Pipeline
            </span>

            <h2 className="mt-6 max-w-[700px] text-4xl font-medium tracking-[-0.045em] md:text-7xl">
              Words become
              <span className="block text-violet-300">understanding.</span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-[600px] text-sm leading-7 text-white/35 md:text-base">
              NLP systems transform raw language into structured semantic
              representations that machines can interpret, reason over and use
              to trigger intelligent actions.
            </p>
          </div>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 top-[36px] hidden h-px w-full bg-white/[0.07] lg:block" />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute left-0 top-[36px] hidden h-px bg-gradient-to-r from-violet-600 via-fuchsia-300 to-purple-600 lg:block"
          />

          <div className="grid gap-4 lg:grid-cols-5">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group relative"
              >
                <div className="mb-7 hidden h-[72px] items-start lg:flex">
                  <motion.div
                    className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-violet-300/20 bg-[#070608]"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(192,132,252,0)",
                        "0 0 30px rgba(192,132,252,.2)",
                        "0 0 0 rgba(192,132,252,0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.3,
                      repeat: Infinity,
                    }}
                  >
                    <span className="text-[9px] tracking-[0.2em] text-violet-200/50">
                      {stage.id}
                    </span>
                  </motion.div>
                </div>

                <div className="min-h-[250px] rounded-[22px] border border-white/[0.07] bg-[#0a080c] p-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-violet-300/20">
                  <div className="text-[7px] uppercase tracking-[0.25em] text-fuchsia-200/25">
                    {stage.sub}
                  </div>

                  <h3 className="mt-4 text-xl text-white/80">{stage.title}</h3>

                  <div className="mt-12 rounded-xl border border-white/[0.06] bg-black/20 p-4 font-mono text-[10px] leading-6 text-violet-200/45">
                    {stage.example}
                  </div>

                  <motion.div
                    className="mt-5 h-[2px] bg-gradient-to-r from-violet-500 to-transparent"
                    initial={{ width: "20%" }}
                    whileInView={{ width: "85%" }}
                    transition={{ delay: index * 0.15, duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}