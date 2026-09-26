"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "24/7",
    title: "Automation Runtime",
    text: "Design workflows capable of continuously responding to enterprise events.",
  },
  {
    value: "360°",
    title: "Process Visibility",
    text: "Bring workflow status, decisions and automated actions into one operational view.",
  },
  {
    value: "∞",
    title: "Workflow Potential",
    text: "Extend automation across departments, systems and increasingly complex processes.",
  },
  {
    value: "AI",
    title: "Native Intelligence",
    text: "Embed machine intelligence directly into the execution layer of business operations.",
  },
];

export default function AutomationImpact() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07070A] py-32 md:py-44">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <h2 className="max-w-[950px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
          From manual operations
          <span className="block bg-gradient-to-r from-[#E5D8F8] to-[#926BFF] bg-clip-text text-transparent">
            to autonomous execution.
          </span>
        </h2>

        <div className="mt-20 grid border-y border-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="min-h-[360px] border-b border-white/[0.07] p-7 transition hover:bg-violet-500/[0.035] md:border-r lg:border-b-0"
            >
              <span className="text-[9px] text-white/20">
                0{index + 1}
              </span>

              <p className="mt-16 bg-gradient-to-r from-[#F3EAFF] to-[#A981FF] bg-clip-text text-6xl font-light tracking-[-0.06em] text-transparent md:text-7xl">
                {metric.value}
              </p>

              <h3 className="mt-7 text-lg font-medium text-[#F0EAF6]">
                {metric.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#CDC6D6]/50">
                {metric.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}