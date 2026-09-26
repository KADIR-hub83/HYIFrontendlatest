"use client";

import { motion } from "framer-motion";

const teams = [
  {
    team: "Workplace platform",
    role:
      "Own shared workplace technology, integrations and employee-facing foundations.",
  },
  {
    team: "Business domains",
    role:
      "Define business context, workflow requirements and knowledge ownership.",
  },
  {
    team: "AI engineering",
    role:
      "Build retrieval, copilots, agents, evaluation and model integration capabilities.",
  },
  {
    team: "Security",
    role:
      "Establish identity, information protection and AI access controls.",
  },
  {
    team: "Knowledge management",
    role:
      "Improve information structure, ownership, discoverability and lifecycle.",
  },
  {
    team: "Change enablement",
    role:
      "Help employees understand how new AI-enabled ways of working should be used.",
  },
];

export default function WorkplaceOperatingModel() {
  return (
    <section className="bg-black px-5 py-44 md:px-10 md:py-64">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
          12 / OPERATING MODEL
        </p>

        <h2 className="mt-14 max-w-[1100px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl">
          A digital workplace
          <span className="block text-white/[0.2]">
            needs shared ownership.
          </span>
        </h2>

        <div className="mt-24">
          {teams.map((item, index) => (
            <motion.article
              key={item.team}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              whileHover={{ x: 7 }}
              className="grid gap-8 border-t border-white/[0.08] py-10 md:grid-cols-[80px_.7fr_1fr]"
            >
              <span className="font-mono text-[6px] text-white/[0.14]">
                O-{String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-2xl font-medium tracking-[-0.04em]">
                {item.team}
              </h3>

              <p className="text-[13px] leading-8 text-white/[0.36]">
                {item.role}
              </p>
            </motion.article>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}