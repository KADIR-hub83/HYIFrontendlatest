"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  CloudCog,
  Database,
  Landmark,
  Network,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    Icon: Landmark,
    title: "Cloud strategy",
    text: "Translate business priorities into principles, target states, investment themes and a practical transformation roadmap.",
  },
  {
    Icon: CloudCog,
    title: "Platform architecture",
    text: "Define reusable cloud foundations that support application, data and AI workloads consistently.",
  },
  {
    Icon: BrainCircuit,
    title: "AI readiness",
    text: "Evaluate whether compute, data, operations, governance and skills can support production AI.",
  },
  {
    Icon: Database,
    title: "Data foundations",
    text: "Connect AI strategy with the data platforms, quality, access and lifecycle capabilities models depend on.",
  },
  {
    Icon: ShieldCheck,
    title: "Governance & security",
    text: "Establish controls for identity, information, AI usage, policy, risk and operational accountability.",
  },
  {
    Icon: Network,
    title: "Hybrid architecture",
    text: "Coordinate cloud, private infrastructure and edge environments around workload-specific requirements.",
  },
];

export default function StrategyCapabilities() {
  return (
    <section className="">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
 

        <h2 className=" max-w-[850px] hyi-h1 hyi-white text-center mx-auto">
          One strategy.
          <span className="hyi-blue"> Multiple disciplines.</span>
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="group  rounded-[28px] border border-white/[0.07] bg-[#050505] p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/[0.08]">
                  <Icon size={17} className="hyi-white-icon" />
                </div>
             
              </div>

              <h3 className="mt-2  hyi-h3 hyi-white">{title}</h3>
              <p className="mt-2 hyi-p">{text}</p>

              <div className="mt-4 h-px bg-white/[0.06]">
                <div className="h-full w-0 bg-[#7046e6] transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}