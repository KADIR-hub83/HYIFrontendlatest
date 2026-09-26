"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Beaker,
  BrainCircuit,
  Database,
  GitBranch,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    Icon: Workflow,
    title: "ML Pipelines",
    text: "Coordinate repeatable data, training, validation and release stages through automated lifecycle workflows.",
  },
  {
    Icon: Beaker,
    title: "Experiment Tracking",
    text: "Record model runs, configurations and evaluation context so candidate models can be compared deliberately.",
  },
  {
    Icon: GitBranch,
    title: "Model Registry",
    text: "Manage model versions and lifecycle state through a controlled source of production model artifacts.",
  },
  {
    Icon: Rocket,
    title: "Model Delivery",
    text: "Promote validated models through deployment environments with controlled release transitions.",
  },
  {
    Icon: Activity,
    title: "Model Monitoring",
    text: "Observe deployed models and production signals for operational changes that require investigation.",
  },
  {
    Icon: Database,
    title: "Feature Operations",
    text: "Connect managed data transformations and features with repeatable training and serving workflows.",
  },
  {
    Icon: ShieldCheck,
    title: "Lifecycle Governance",
    text: "Introduce traceability, validation and approval controls around critical ML lifecycle transitions.",
  },
  {
    Icon: BrainCircuit,
    title: "Continuous ML",
    text: "Connect production feedback with future experimentation and model lifecycle iterations.",
  },
];

export default function MLOpsCapabilities() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="max-w-[900px]">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            09 / MLOPS CAPABILITIES
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            One lifecycle.
            <span className="block text-[#7046e6]">Many control systems.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -7 }}
              className="group min-h-[320px] rounded-[26px] border border-white/[0.07] bg-[#030303] p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#7046e6]/25 bg-[#7046e6]/[0.07]">
                  <Icon size={15} className="text-[#a98cf4]" />
                </div>
                <span className="font-mono text-[6px] text-white/[0.15]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-14 text-xl">{title}</h3>
              <p className="mt-5 text-[10px] leading-6 text-white/[0.4]">
                {text}
              </p>

              <div className="mt-8 h-px bg-gradient-to-r from-[#7046e6]/50 to-transparent opacity-40 transition group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}