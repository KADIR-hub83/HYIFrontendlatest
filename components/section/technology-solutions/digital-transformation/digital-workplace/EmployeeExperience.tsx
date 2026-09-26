"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    title: "One place to begin",
    text:
      "A coherent entry point can reduce the need for employees to remember where every service, document or workflow lives.",
  },
  {
    number: "02",
    title: "Personalized context",
    text:
      "Workplace experiences can adapt to role, permissions, organizational context and current responsibilities.",
  },
  {
    number: "03",
    title: "Self-service",
    text:
      "Common questions and routine requests can be resolved without requiring employees to understand internal organizational boundaries.",
  },
  {
    number: "04",
    title: "Accessible knowledge",
    text:
      "Important organizational information becomes easier to discover when search, metadata and conversational retrieval work together.",
  },
  {
    number: "05",
    title: "Less repetitive work",
    text:
      "Automation can reduce manual transfer of information between tools and repetitive administrative steps.",
  },
];

export default function EmployeeExperience() {
  return (
    <section className="bg-black px-5 py-44 md:px-10 md:py-64">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
          08 / EMPLOYEE EXPERIENCE
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 max-w-[1150px] text-[clamp(4rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.075em]"
        >
          Technology should reduce
          <span className="text-white/[0.2]">
            {" "}
            the friction around work.
          </span>
        </motion.h2>

        <div className="mt-28">
          {experiences.map((item) => (
            <motion.article
              key={item.number}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="grid min-h-[200px] gap-8 border-t border-white/[0.08] py-10 md:grid-cols-[90px_.75fr_1fr]"
            >
              <span className="font-mono text-[6px] text-white/[0.14]">
                {item.number}
              </span>

              <h3 className="text-3xl font-medium tracking-[-0.05em]">
                {item.title}
              </h3>

              <p className="text-[13px] leading-8 text-white/[0.36]">
                {item.text}
              </p>
            </motion.article>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}