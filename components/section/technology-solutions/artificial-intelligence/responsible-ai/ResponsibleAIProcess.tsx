"use client";

import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    title: "Discover",
    text: "Map AI systems, stakeholders, intended use and potential impact.",
  },
  {
    number: "02",
    title: "Assess",
    text: "Evaluate data, model behavior, privacy, fairness, safety and operational risk.",
  },
  {
    number: "03",
    title: "Control",
    text: "Implement technical safeguards, policy gates and human approval workflows.",
  },
  {
    number: "04",
    title: "Validate",
    text: "Test models against defined requirements before production deployment.",
  },
  {
    number: "05",
    title: "Monitor",
    text: "Continuously observe performance, drift, incidents and governance signals.",
  },
];

export default function ResponsibleAIProcess() {
  return (
    <section className="bg-[#050505] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="mx-auto max-w-[950px] text-center">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Responsible AI lifecycle
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Responsibility across
            <span className="block text-white/55">
              the complete lifecycle.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[720px] text-[15px] leading-8 text-white/65">
            Governance should evolve with the model—from early design and
            evaluation through deployment and continuous production monitoring.
          </p>
        </div>

        <div className="relative mt-20 grid gap-4 lg:grid-cols-5">
          <div className="absolute left-[10%] right-[10%] top-[35px] hidden h-px bg-gradient-to-r from-transparent via-violet-100/25 to-transparent lg:block" />

          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative z-10 mb-7 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-violet-100/15 bg-[#080808] text-[8px] tracking-[0.2em] text-violet-100/65">
                {stage.number}
              </div>

              <div className="min-h-[300px] rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-[#12100d] to-[#080807] p-7">
                <h3 className="text-2xl text-white/88">{stage.title}</h3>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  {stage.text}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  viewport={{ once: true }}
                  className="mt-12 h-px bg-gradient-to-r from-violet-100/60 to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}