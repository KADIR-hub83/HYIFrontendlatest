"use client";

import { motion } from "framer-motion";

const data = [
  {
    value: "24/7",
    label: "Agent Availability",
    text: "Agent systems can support persistent digital workflows and event-driven tasks.",
  },
  {
    value: "N×",
    label: "Parallel Intelligence",
    text: "Distribute work across multiple specialized agents instead of one sequential process.",
  },
  {
    value: "360°",
    label: "Enterprise Context",
    text: "Connect relevant knowledge, tools and data into a coordinated intelligence layer.",
  },
  {
    value: "∞",
    label: "Agent Possibilities",
    text: "Design new agent experiences around the workflows and systems unique to your enterprise.",
  },
];

export default function AgentImpact() {
  return (
    <section className="bg-[#020203] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <h2 className="max-w-[1050px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
          Software used to wait.
          <span className="block bg-gradient-to-r from-[#EEE4FF] via-[#C493FF] to-[#7655FF] bg-clip-text text-transparent">
            Agents can take initiative.
          </span>
        </h2>

        <div className="mt-20 grid border-y border-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-h-[370px] border-b border-white/[0.07] p-7 transition hover:bg-violet-500/[0.035] md:border-r lg:border-b-0"
            >
              <span className="text-[9px] text-white/20">
                0{index + 1}
              </span>

              <p className="mt-16 bg-gradient-to-r from-[#F3EAFF] to-[#A981FF] bg-clip-text text-6xl font-light tracking-[-0.06em] text-transparent md:text-7xl">
                {item.value}
              </p>

              <h3 className="mt-7 text-lg text-[#F0EAF6]">
                {item.label}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#CDC6D6]/50">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}