"use client";

import { motion } from "framer-motion";

const stats = [
  ["70%", "Faster Resolution", "Automate language-heavy workflows."],
  ["50+", "Languages", "Support global customer interactions."],
  ["98%", "Intent Accuracy", "Understand what users actually need."],
  ["10×", "Analysis Scale", "Process language at machine speed."],
];

export default function NLPImpact() {
  return (
    <section className="relative bg-[#030303] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-[8px] uppercase tracking-[0.35em] text-violet-300/45">
            Language Impact
          </span>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] md:text-7xl">
            Turn every conversation
            <span className="block text-fuchsia-300">into intelligence.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative min-h-[350px] bg-[#060507] p-8"
            >
              <span className="text-[8px] tracking-[0.25em] text-white/15">
                0{index + 1}
              </span>

              <div className="mt-16 bg-gradient-to-r from-white to-violet-300 bg-clip-text text-5xl font-medium tracking-[-0.06em] text-transparent md:text-6xl">
                {value}
              </div>

              <h3 className="mt-7 text-base text-white/65">{title}</h3>

              <p className="mt-3 text-xs leading-6 text-white/28">{text}</p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-fuchsia-300 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}