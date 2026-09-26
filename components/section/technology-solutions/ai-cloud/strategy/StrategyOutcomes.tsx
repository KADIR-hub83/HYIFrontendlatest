"use client";

import { motion } from "framer-motion";
import { Compass, Eye, Layers3, Route } from "lucide-react";

const outcomes = [
  {
    Icon: Compass,
    title: "Clear direction",
    text: "A shared view of where cloud and AI capabilities should evolve.",
  },
  {
    Icon: Layers3,
    title: "Coherent architecture",
    text: "Technology decisions connected through reusable architectural foundations.",
  },
  {
    Icon: Route,
    title: "Executable roadmap",
    text: "Transformation sequenced into practical foundations, platforms and workload initiatives.",
  },
  {
    Icon: Eye,
    title: "Visible tradeoffs",
    text: "Security, cost, performance, risk and operational implications evaluated together.",
  },
];

export default function StrategyOutcomes() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <p className="font-mono text-center text-[8px] tracking-[0.28em] text-[#9878ef]">
          12 / STRATEGIC OUTCOMES
        </p>

        <h2 className="mx-auto mt-6 max-w-[900px] text-center text-5xl font-medium tracking-[-0.055em] md:text-7xl">
          From cloud decisions
          <span className="block text-[#7046e6]">to organizational clarity.</span>
        </h2>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(({ Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="min-h-[270px] rounded-[26px] border border-white/[0.07] bg-[#050505] p-7"
            >
              <Icon size={18} className="text-[#9878ef]" />
              <h3 className="mt-9 text-xl">{title}</h3>
              <p className="mt-4 text-[12px] leading-7 text-white/[0.43]">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}