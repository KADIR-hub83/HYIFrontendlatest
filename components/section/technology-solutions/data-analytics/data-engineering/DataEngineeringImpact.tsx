"use client";

import { motion } from "framer-motion";

const impact = [
  ["10×", "Data throughput", "Scale high-volume workloads without rebuilding the entire platform."],
  ["70%", "Less manual work", "Automate repetitive ingestion, transformation and operational processes."],
  ["99.99%", "Reliability", "Engineer production systems around resilient and observable infrastructure."],
  ["24/7", "Data availability", "Keep business information continuously accessible to downstream teams and systems."],
];

export default function DataEngineeringImpact() {
  return (
    <section className="bg-[#050505] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
          Engineering Impact
        </span>

        <h2 className="mt-7 max-w-[1000px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
          Infrastructure that
          <span className="block text-white/50">stays out of the way.</span>
        </h2>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[40px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {impact.map(([value, title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative min-h-[430px] bg-[#080808] p-8"
            >
              <span className="font-mono text-[7px] text-white/25">
                0{index + 1}
              </span>

              <div className="mt-20 bg-gradient-to-r from-white via-violet-100 to-violet-400 bg-clip-text text-6xl font-light tracking-[-0.065em] text-transparent">
                {value}
              </div>

              <h3 className="mt-9 text-xl text-white/85">{title}</h3>

              <p className="mt-5 text-sm leading-7 text-white/60">{text}</p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-violet-100 transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}