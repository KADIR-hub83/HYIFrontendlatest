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
    <section className=" bg-[#000000] py-">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="max-w-[900px] text-center mx-auto">
      

          <h2 className="hyi-h1 hyi-white">
            One lifecycle.
            <span className="block  hyi-blue">Many control systems.</span>
          </h2>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -7 }}
              className="group  rounded-[26px] border border-white/[0.07] bg-[#030303] p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#7046e6]/25 bg-[#7046e6]/[0.07]">
                  <Icon size={15} className="text-[#a98cf4]" />
                </div>
              </div>

              <h3 className="mt-1 hyi-h3 hyi-white">{title}</h3>
              <p className="mt-1 hyi-p">
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