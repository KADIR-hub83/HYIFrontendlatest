"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "4.8×",
    title: "Faster Decisions",
    text: "Reduce the distance between business signals and meaningful action.",
  },
  {
    value: "360°",
    title: "Business Visibility",
    text: "Connect performance across customers, finance and operations.",
  },
  {
    value: "24/7",
    title: "Live Intelligence",
    text: "Continuously monitor important business metrics and changes.",
  },
  {
    value: "1",
    title: "Source of Truth",
    text: "Create a shared intelligence layer across teams and leadership.",
  },
];

export default function BIImpact() {
  return (
    <section className="bg-[#050505] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="max-w-[900px]">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Business impact
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Less reporting.
            <span className="block text-white/55">More intelligence.</span>
          </h2>

          <p className="mt-8 max-w-[650px] text-[15px] leading-8 text-white/65">
            Turn analytics into a living business capability instead of a
            collection of static reports.
          </p>
        </div>

        <div className="mt-20 grid overflow-hidden rounded-[38px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative min-h-[430px] border-b border-r border-white/[0.08] bg-[#090806] p-8"
            >
              <span className="text-[8px] tracking-[0.2em] text-white/25">
                0{index + 1}
              </span>

              <div className="mt-20 bg-gradient-to-r from-white via-violet-100 to-violet-400 bg-clip-text text-6xl font-light tracking-[-0.065em] text-transparent">
                {item.value}
              </div>

              <h3 className="mt-9 text-xl text-white/85">{item.title}</h3>

              <p className="mt-5 text-sm leading-7 text-white/58">
                {item.text}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-600 to-violet-100 transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}