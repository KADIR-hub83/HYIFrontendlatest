"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "Custom",
    title: "Domain Intelligence",
    text: "Models engineered around your specific enterprise context.",
  },
  {
    value: "Live",
    title: "Model Monitoring",
    text: "Continuous visibility into deployed AI performance.",
  },
  {
    value: "Scale",
    title: "Production Ready",
    text: "Architecture designed for reliable enterprise workloads.",
  },
  {
    value: "MLOps",
    title: "Full Lifecycle",
    text: "Manage AI from experimentation through production operations.",
  },
];

export default function ModelImpact() {
  return (
    <section className="relative overflow-hidden bg-[#020203] py-32 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.06] blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-10">
        <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
          08 / Enterprise Advantage
        </span>

        <h2 className="mt-7 max-w-[1100px] text-5xl font-medium leading-[0.96] tracking-[-0.055em] md:text-7xl">
          Build AI that belongs
          <span className="block bg-gradient-to-r from-white via-violet-100 to-violet-400 bg-clip-text text-transparent">
            to your business.
          </span>
        </h2>

        <div className="mt-20 grid overflow-hidden rounded-[30px] border border-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-h-[390px] border-b border-r border-white/[0.07] bg-[#07070a] p-8 transition hover:bg-violet-200/[0.025]"
            >
              <span className="text-[8px] text-white/20">
                0{index + 1}
              </span>

              <p className="mt-16 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-5xl font-light tracking-[-0.06em] text-transparent">
                {item.value}
              </p>

              <h3 className="mt-9 text-lg text-white/85">{item.title}</h3>

              <p className="mt-4 text-sm leading-7 text-white/58">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}