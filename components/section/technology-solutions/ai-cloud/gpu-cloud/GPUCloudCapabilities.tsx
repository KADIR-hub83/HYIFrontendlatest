"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Boxes,
  BrainCircuit,
  Cpu,
  Database,
  Gauge,
  Network,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    Icon: Cpu,
    title: "GPU Compute",
    text: "Create accelerated compute environments for demanding model training, inference and parallel processing workloads.",
  },
  {
    Icon: Boxes,
    title: "GPU Clusters",
    text: "Organize accelerator capacity into logical clusters aligned with different AI workload and lifecycle requirements.",
  },
  {
    Icon: BrainCircuit,
    title: "Distributed Training",
    text: "Support multi-worker model training with coordinated compute, data access and communication infrastructure.",
  },
  {
    Icon: Workflow,
    title: "GPU Scheduling",
    text: "Match workload requests to suitable accelerator pools according to capacity, topology and operational policy.",
  },
  {
    Icon: Network,
    title: "Network Fabric",
    text: "Connect distributed compute workers, storage and platform services through an architecture designed for AI communication patterns.",
  },
  {
    Icon: Database,
    title: "AI Data Access",
    text: "Provide datasets, model artifacts and checkpoints through storage patterns appropriate for accelerator-heavy workloads.",
  },
  {
    Icon: Gauge,
    title: "Capacity Engineering",
    text: "Plan and adjust specialized compute capacity according to workload demand, availability and business requirements.",
  },
  {
    Icon: Activity,
    title: "GPU Observability",
    text: "Monitor accelerator state, workload activity and infrastructure dependencies to support reliable AI operations.",
  },
];

export default function GPUCloudCapabilities() {
  return (
    <section className="bg-[#030303] ">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="max-w-[900px] text-center mx-auto">
       

          <h2 className="mt-2 hyi-h1 hyi-white">
            The platform behind
            <span className="block hyi-blue">accelerated AI.</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -7 }}
              className={`group ${
  index < 4 ? "skeu" : "glass"
} rounded-[26px] border border-white/[0.07] bg-[#080808] p-6`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/[0.07]">
                  <Icon size={15} className="hyi-blue-icon" />
                </div>

        
              </div>

              <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>

              <p className="mt-2 hyi-p">
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