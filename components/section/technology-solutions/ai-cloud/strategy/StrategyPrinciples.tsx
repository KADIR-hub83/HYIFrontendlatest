"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const principles = [
  {
    title: "Business-led",
    text: "Architecture decisions should trace back to business outcomes, workload needs and measurable constraints.",
  },
  {
    title: "Platform-first",
    text: "Create reusable foundations instead of rebuilding identity, networking, data and AI capabilities for every team.",
  },
  {
    title: "Secure by design",
    text: "Identity, policy, data protection and workload controls should be designed into the architecture from the beginning.",
  },
  {
    title: "Automate deliberately",
    text: "Standardize repeatable infrastructure, policy and operational workflows while preserving appropriate human oversight.",
  },
  {
    title: "Economics visible",
    text: "Teams should understand how architecture, consumption and AI demand translate into cost and business value.",
  },
  {
    title: "Continuously evolve",
    text: "The strategy should adapt as workloads, cloud services, AI capabilities, risks and organizational priorities change.",
  },
];

export default function StrategyPrinciples() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[.55fr_1.45fr]">
          <div>
            <p className="font-mono text-[8px] tracking-[0.28em] text-[#9878ef]">
              10 / PRINCIPLES
            </p>

            <h2 className="mt-6 text-5xl font-medium leading-[.95] tracking-[-0.055em] md:text-7xl">
              Principles
              <span className="block text-[#7046e6]">before products.</span>
            </h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="min-h-[240px] rounded-[25px] border border-white/[0.07] bg-[#050505] p-7"
              >
                <div className="flex justify-between">
                  <CheckCircle2 size={16} className="text-[#9878ef]" />
                  <span className="font-mono text-[7px] text-[#7046e6]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-xl">{item.title}</h3>
                <p className="mt-4 text-[13px] leading-7 text-white/[0.46]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}