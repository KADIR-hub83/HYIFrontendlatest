"use client";

import { motion } from "framer-motion";

const engagements = [
  {
    time: "2–4 Weeks",
    title: "AI Readiness Assessment",
    text: "Rapidly understand maturity, opportunities, risks and immediate priorities.",
  },
  {
    time: "4–8 Weeks",
    title: "AI Strategy & Roadmap",
    text: "Create enterprise AI direction, portfolio, architecture and transformation roadmap.",
  },
  {
    time: "8–12 Weeks",
    title: "AI Foundation Design",
    text: "Define platforms, governance, operating model and production delivery foundations.",
  },
  {
    time: "Ongoing",
    title: "Transformation Advisory",
    text: "Guide execution, adoption, governance and scaling as the AI portfolio evolves.",
  },
];

export default function ConsultingEngagement() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#050407] py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
              Engagement Models
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] md:text-6xl">
              Start where
              <span className="block bg-gradient-to-r from-[#e2b9ff] to-[#7658ff] bg-clip-text text-transparent">
                you are.
              </span>
            </h2>

            <p className="mt-6 max-w-[430px] text-[14px] leading-7 text-white/32">
              Choose a focused diagnostic or engage HYI.AI across the complete
              transformation journey.
            </p>
          </div>

          <div className="space-y-3">
            {engagements.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                whileHover={{ x: -8 }}
                className="group grid gap-5 rounded-[24px] border border-white/[0.06] bg-[#08070b] p-6 sm:grid-cols-[120px_1fr_40px]"
              >
                <div className="text-[8px] uppercase tracking-[1.4px] text-purple-300/35">
                  {item.time}
                </div>

                <div>
                  <h3 className="text-lg text-white/75">{item.title}</h3>
                  <p className="mt-2 text-[12px] leading-6 text-white/28">
                    {item.text}
                  </p>
                </div>

                <motion.div
                  whileHover={{ x: 6 }}
                  className="flex items-center justify-end text-purple-300/30"
                >
                  →
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}