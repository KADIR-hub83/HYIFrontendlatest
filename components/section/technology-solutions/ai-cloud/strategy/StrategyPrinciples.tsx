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
    <section className=" bg-[#070707] py-10">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[.55fr_1.45fr]">
          <div>
     

            <h2 className="hyi-h1 hyi-white">
              Principles
              <span className="block hyi-blue">before products.</span>
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
                className=" rounded-[25px] border border-white/[0.07] bg-[#050505] p-7"
              >
         
                <h3 className=" hyi-h3 hyi-white">{item.title}</h3>
                <p className="mt-2 hyi-p">
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