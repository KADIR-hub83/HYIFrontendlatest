"use client";

import { motion } from "framer-motion";

const impact = [
  {
    value: "5×",
    title: "Faster Understanding",
    text: "Help teams recognize important patterns without manually interpreting large datasets.",
  },
  {
    value: "360°",
    title: "Connected Visibility",
    text: "Create a unified visual view across customers, operations and performance.",
  },
  {
    value: "24/7",
    title: "Live Monitoring",
    text: "Keep important metrics visible as business activity changes.",
  },
  {
    value: "1",
    title: "Visual Language",
    text: "Give teams a consistent way to understand and communicate business information.",
  },
];

export default function VisualizationImpact() {
  return (
    <section className="border-y border-white/[0.06] bg-[#090806] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="max-w-[900px]">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Visualization impact
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Complexity disappears.
            <span className="block text-white/55">Clarity remains.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[38px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative min-h-[430px] bg-[#090806] p-8"
            >
              <span className="text-[8px] tracking-[0.2em] text-white/25">
                0{index + 1}
              </span>

              <div className="mt-20 bg-gradient-to-r from-white via-violet-100 to-violet-400 bg-clip-text text-6xl font-light tracking-[-0.065em] text-transparent">
                {item.value}
              </div>

              <h3 className="mt-9 text-xl text-white/85">{item.title}</h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                {item.text}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-violet-100 transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}