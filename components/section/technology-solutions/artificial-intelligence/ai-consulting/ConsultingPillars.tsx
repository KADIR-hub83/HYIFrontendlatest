"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    no: "01",
    title: "AI Strategy",
    eyebrow: "DIRECTION",
    text: "Define where AI creates differentiated value and build an investment roadmap connected to measurable business priorities.",
    tags: ["Vision", "Portfolio", "Roadmap"],
  },
  {
    no: "02",
    title: "AI Architecture",
    eyebrow: "FOUNDATION",
    text: "Design the data, model, cloud, integration and platform architecture required to operationalize enterprise intelligence.",
    tags: ["Platform", "Data", "Architecture"],
  },
  {
    no: "03",
    title: "Operating Model",
    eyebrow: "EXECUTION",
    text: "Establish roles, teams, processes and governance for repeatable AI delivery across business and technology functions.",
    tags: ["CoE", "Teams", "Delivery"],
  },
  {
    no: "04",
    title: "Responsible AI",
    eyebrow: "CONTROL",
    text: "Build governance, risk, security, evaluation and human-oversight mechanisms directly into AI transformation.",
    tags: ["Risk", "Safety", "Governance"],
  },
  {
    no: "05",
    title: "AI Adoption",
    eyebrow: "CHANGE",
    text: "Redesign workflows and equip teams to work effectively with AI while building organizational confidence and capability.",
    tags: ["People", "Change", "Skills"],
  },
  {
    no: "06",
    title: "AI Scale",
    eyebrow: "VALUE",
    text: "Create reusable platforms, standards and operating mechanisms that move successful AI initiatives across the enterprise.",
    tags: ["Scale", "FinOps", "Value"],
  },
];

export default function ConsultingPillars() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#020203] py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[830px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            Consulting System
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-1.5px] md:text-6xl">
            Six dimensions of
            <span className="block bg-gradient-to-r from-[#e2b9ff] to-[#7758ff] bg-clip-text text-transparent">
              enterprise AI transformation.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item, index) => (
            <motion.article
              key={item.no}
              initial={{ opacity: 0, y: 60, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
              whileHover={{
                y: -12,
                scale: 1.015,
                transition: { duration: 0.25 },
              }}
              className={`group relative min-h-[370px] overflow-hidden rounded-[30px] border border-white/[0.065] bg-[#08070b] p-7 ${
                index === 1 || index === 4 ? "lg:translate-y-8" : ""
              }`}
            >
              <motion.div
                animate={{
                  x: ["-40%", "70%", "-40%"],
                  y: ["-20%", "40%", "-20%"],
                }}
                transition={{
                  duration: 10 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-purple-600/[0.08] blur-[80px]"
              />

              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[9px] tracking-[2px] text-purple-300/35">
                  {item.no}
                </span>

                <span className="text-[7px] tracking-[1.5px] text-white/18">
                  {item.eyebrow}
                </span>
              </div>

              <div className="relative z-10 mt-14">
                <motion.div
                  whileHover={{ rotate: 90 }}
                  className="mb-8 flex h-[54px] w-[54px] items-center justify-center rounded-2xl border border-purple-400/15 bg-purple-500/[0.04]"
                >
                  <div className="relative h-5 w-5">
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-purple-300/40" />
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-purple-300/40" />
                    <span className="absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200 shadow-[0_0_10px_#c084fc]" />
                  </div>
                </motion.div>

                <h3 className="text-xl font-medium text-white/82">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-white/31">
                  {item.text}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.055] px-3 py-1.5 text-[7px] uppercase tracking-[.8px] text-white/23"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-purple-700 via-purple-300 to-transparent"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}