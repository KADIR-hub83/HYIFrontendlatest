"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "PB",
    suffix: "+",
    label: "Data scale",
    text: "Architect platforms for data volumes that outgrow traditional analytics infrastructure.",
  },
  {
    value: "M",
    suffix: "/s",
    label: "Event velocity",
    text: "Process millions of continuously arriving signals across distributed environments.",
  },
  {
    value: "24",
    suffix: "/7",
    label: "Intelligence",
    text: "Keep analytical systems continuously processing operational and customer activity.",
  },
  {
    value: "∞",
    suffix: "",
    label: "Scalability",
    text: "Expand compute and storage as business demand and analytical complexity increase.",
  },
];

export default function BigDataImpact() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
          Data At Scale
        </span>

        <h2 className="mt-7 max-w-[1100px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
          Scale should create
          <span className="block text-white/50">intelligence, not noise.</span>
        </h2>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[40px] border border-[#eee5ff]/10 bg-[#eee5ff]/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="min-h-[430px] bg-[#09090a] p-8"
            >
              <span className="font-mono text-[7px] text-white/20">
                0{index + 1}
              </span>

              <div className="mt-20 bg-gradient-to-r from-white via-[#eee5ff] to-[#bca8da] bg-clip-text text-6xl font-light tracking-[-0.07em] text-transparent">
                {metric.value}
                <span className="text-3xl">{metric.suffix}</span>
              </div>

              <h3 className="mt-10 text-xl text-[#f0eaf7]">
                {metric.label}
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/55">
                {metric.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}