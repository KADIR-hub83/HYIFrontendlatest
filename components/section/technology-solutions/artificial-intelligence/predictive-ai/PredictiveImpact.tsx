"use client";

import { motion } from "framer-motion";

const impact = [
  {
    value: "96.7%",
    label: "Forecast confidence",
    description:
      "Example model-confidence visualization for enterprise forecasting workflows.",
  },
  {
    value: "24/7",
    label: "Signal monitoring",
    description:
      "Continuously evaluate incoming business signals as new data becomes available.",
  },
  {
    value: "360°",
    label: "Decision context",
    description:
      "Connect historical, operational and real-time signals around business decisions.",
  },
  {
    value: "∞",
    label: "Scenarios",
    description:
      "Model alternative assumptions and explore multiple possible future outcomes.",
  },
];

export default function PredictiveImpact() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07070A] py-32 md:py-44">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-[800px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Move from reacting
            <span className="block text-violet-300">
              to anticipating.
            </span>
          </h2>

          <p className="max-w-[450px] text-base leading-8 text-[#D4CDDD]/55">
            Give decision-makers a forward-looking view of business signals,
            uncertainty and possible outcomes.
          </p>
        </div>

        <div className="mt-20 grid border-y border-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
          {impact.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-h-[360px] border-b border-white/[0.07] p-7 transition duration-500 hover:bg-violet-500/[0.035] md:border-r lg:border-b-0"
            >
              <span className="text-[9px] text-white/20">
                0{index + 1}
              </span>

              <p className="mt-16 bg-gradient-to-r from-[#F2E9FF] to-[#A882FF] bg-clip-text text-6xl font-light tracking-[-0.06em] text-transparent md:text-7xl">
                {item.value}
              </p>

              <h3 className="mt-7 text-lg font-medium text-[#F0EBF6]">
                {item.label}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#CDC6D6]/50">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}