"use client";

import { motion } from "framer-motion";

const stages = [
  ["01", "Discover", "Define intelligence objectives and measurable outcomes."],
  ["02", "Prepare", "Engineer datasets, features and training pipelines."],
  ["03", "Train", "Train neural architectures across accelerated infrastructure."],
  ["04", "Evaluate", "Validate accuracy, robustness and model behavior."],
  ["05", "Deploy", "Operationalize inference across production environments."],
  ["06", "Learn", "Monitor drift and continuously improve intelligence."],
];

export default function DeepLearningWorkflow() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.05] bg-[#04060b] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="max-w-[850px]">
          <div className="text-[9px] uppercase tracking-[0.35em] text-cyan-300/45">
            Intelligence Lifecycle
          </div>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] md:text-7xl">
            From experiment to
            <span className="block text-cyan-300">production intelligence.</span>
          </h2>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-[16px] top-0 h-full w-px bg-white/[0.07] md:left-0 md:top-[16px] md:h-px md:w-full" />

          <motion.div
            className="absolute left-[16px] top-0 w-px bg-gradient-to-b from-blue-500 via-cyan-300 to-violet-400 md:left-0 md:top-[16px] md:h-px"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />

          <div className="grid gap-10 pl-14 md:grid-cols-3 md:gap-8 md:pl-0 lg:grid-cols-6">
            {stages.map(([number, title, description], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative"
              >
                <div className="absolute -left-[46px] top-0 md:relative md:left-auto md:top-auto">
                  <motion.div
                    className="relative h-8 w-8 rounded-full border border-cyan-300/30 bg-[#04060b]"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(34,211,238,0)",
                        "0 0 25px rgba(34,211,238,.35)",
                        "0 0 0 rgba(34,211,238,0)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.25,
                    }}
                  >
                    <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300" />
                  </motion.div>
                </div>

                <div className="mt-0 md:mt-10">
                  <div className="text-[8px] tracking-[0.25em] text-white/20">
                    {number}
                  </div>

                  <h3 className="mt-4 text-xl font-medium">{title}</h3>

                  <p className="mt-4 text-xs leading-6 text-white/35">
                    {description}
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