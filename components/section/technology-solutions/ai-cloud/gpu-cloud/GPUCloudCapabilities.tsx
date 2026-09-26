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
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="max-w-[900px]">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            08 / GPU CLOUD CAPABILITIES
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            The platform behind
            <span className="block text-[#7653df]">accelerated AI.</span>
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
              className="group min-h-[320px] rounded-[26px] border border-white/[0.07] bg-[#080808] p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/[0.07]">
                  <Icon size={15} className="text-[#a98cf4]" />
                </div>

                <span className="font-mono text-[6px] text-white/[0.17]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-14 text-xl">{title}</h3>

              <p className="mt-5 text-[11px] leading-6 text-white/[0.4]">
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