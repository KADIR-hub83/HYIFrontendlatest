"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "1",
    suffix: "×",
    label: "Single source of truth",
    text: "Replace fragmented analytical definitions with governed enterprise data.",
  },
  {
    value: "10",
    suffix: "×",
    label: "Scalable performance",
    text: "Build warehouse architecture that can grow with workloads and business demand.",
  },
  {
    value: "99.99",
    suffix: "%",
    label: "Availability",
    text: "Support business-critical analytics with resilient production infrastructure.",
  },
  {
    value: "24",
    suffix: "/7",
    label: "Data access",
    text: "Keep trusted information available across dashboards, applications and AI systems.",
  },
];

export default function WarehouseImpact() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
          Warehouse Impact
        </span>

        <h2 className="mt-7 max-w-[1050px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
          Trusted data becomes
          <span className="block text-white/50">
            business infrastructure.
          </span>
        </h2>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[40px] border border-[#eee5ff]/[0.10] bg-[#eee5ff]/[0.08] sm:grid-cols-2 lg:grid-cols-4">
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