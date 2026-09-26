"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  BrainCircuit,
  Cpu,
  Database,
  Network,
  Workflow,
} from "lucide-react";
import GPUClusterUniverse from "./GPUClusterUniverse";

const layers = [
  {
    Icon: Cpu,
    title: "Accelerated compute",
    text: "Provision specialized compute capacity for model training, fine-tuning, inference and parallel AI workloads.",
  },
  {
    Icon: Boxes,
    title: "GPU pools",
    text: "Organize accelerator capacity into reusable pools that can serve workloads with different performance and lifecycle requirements.",
  },
  {
    Icon: Network,
    title: "Distributed fabric",
    text: "Connect workers, storage and services through networking designed for communication-intensive distributed AI processing.",
  },
  {
    Icon: Database,
    title: "Data pipeline",
    text: "Keep high-volume datasets, model checkpoints and artifacts accessible to the compute resources that consume them.",
  },
  {
    Icon: BrainCircuit,
    title: "AI runtime",
    text: "Create a platform layer that turns infrastructure resources into usable environments for AI engineering teams.",
  },
  {
    Icon: Workflow,
    title: "Orchestration",
    text: "Coordinate scheduling, workload placement, capacity allocation and infrastructure lifecycle operations.",
  },
];

export default function GPUCloudOverview() {
  return (
    <section
      id="gpu-overview"
      className="border-y border-white/[0.06] bg-[#070707] py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[850px]">
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              01 / GPU CLOUD SYSTEM
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
              GPUs are resources.
              <span className="block text-[#7653df]">
                The cloud is the system.
              </span>
            </h2>
          </div>

          <p className="max-w-[470px] text-[12px] leading-7 text-white/[0.45]">
            A GPU cloud combines accelerated compute with scheduling, data,
            networking, orchestration and operations so teams can consume
            specialized capacity as an integrated AI platform.
          </p>
        </div>

        <div className="mt-16">
          <GPUClusterUniverse />
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {layers.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="min-h-[245px] rounded-[24px] border border-white/[0.07] bg-[#030303] p-7"
            >
              <Icon size={15} className="text-[#a98cf4]" />
              <h3 className="mt-9 text-xl">{title}</h3>
              <p className="mt-4 text-[11px] leading-6 text-white/[0.42]">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}