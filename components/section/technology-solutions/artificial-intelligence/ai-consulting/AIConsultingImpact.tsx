"use client";

import { motion } from "framer-motion";

const outcomes = [
  ["Clarity", "A prioritized AI portfolio tied directly to business value."],
  ["Confidence", "Governance and architecture designed for responsible scaling."],
  ["Speed", "Reusable foundations that reduce fragmented experimentation."],
  ["Capability", "Teams and operating models prepared for continuous AI delivery."],
];

export default function AIConsultingImpact() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#020203] py-24 md:py-32">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-800/[0.06] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[830px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            Transformation Outcomes
          </p>

          <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
            Build AI capability,
            <span className="block bg-gradient-to-r from-[#e4bdff] to-[#7859ff] bg-clip-text text-transparent">
              not isolated AI projects.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {outcomes.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -10,
                borderColor: "rgba(192,132,252,.25)",
              }}
              className="group relative min-h-[260px] overflow-hidden rounded-[30px] border border-white/[0.06] bg-[#08070b] p-8"
            >
              <motion.div
                animate={{
                  scale: [0.8, 1.25, 0.8],
                  opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                  duration: 6,
                  delay: index,
                  repeat: Infinity,
                }}
                className="absolute right-[-60px] top-[-70px] h-[240px] w-[240px] rounded-full bg-purple-500 blur-[90px]"
              />

              <div className="relative">
                <span className="text-[8px] tracking-[2px] text-purple-300/30">
                  0{index + 1}
                </span>

                <h3 className="mt-12 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-3xl font-medium text-transparent">
                  {title}
                </h3>

                <p className="mt-5 max-w-[500px] text-[13px] leading-7 text-white/31">
                  {text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}