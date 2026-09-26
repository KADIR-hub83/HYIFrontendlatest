"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Boxes,
  Cpu,
  Rocket,
  Search,
  Workflow,
} from "lucide-react";

const phases = [
  {
    Icon: Search,
    title: "Profile",
    text: "Understand model size, compute intensity, memory demand, data access and workload lifecycle requirements.",
  },
  {
    Icon: Boxes,
    title: "Pool",
    text: "Organize accelerator capacity into logical environments for training, inference and shared AI workloads.",
  },
  {
    Icon: Workflow,
    title: "Schedule",
    text: "Place workloads according to resource demand, capacity state, topology and platform policy.",
  },
  {
    Icon: Cpu,
    title: "Execute",
    text: "Run workloads on appropriate GPU infrastructure with access to the required data and platform services.",
  },
  {
    Icon: Rocket,
    title: "Serve",
    text: "Operationalize trained models through scalable inference environments and managed serving patterns.",
  },
  {
    Icon: Activity,
    title: "Optimize",
    text: "Use workload and infrastructure evidence to refine capacity, scheduling and operational efficiency.",
  },
];

export default function GPUCloudWorkflow() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            09 / GPU OPERATING MODEL
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            From workload request
            <span className="text-[#7653df]"> to running compute.</span>
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[8%] right-[8%] top-[44px] hidden h-px bg-[#7046e6]/25 lg:block" />

          <motion.span
            animate={{ left: ["8%", "91%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute top-[41px] z-20 hidden h-2 w-2 rounded-full bg-[#d5c5ff] shadow-[0_0_20px_#9878ef] lg:block"
          />

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
            {phases.map(({ Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative z-10 min-h-[290px] rounded-[23px] border border-white/[0.07] bg-[#030303] p-5"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#0a0710]">
                  <Icon size={14} className="text-[#c0a9ff]" />
                </div>

                <p className="mt-9 font-mono text-[6px] text-[#7653df]">
                  PHASE 0{index + 1}
                </p>

                <h3 className="mt-3 text-lg">{title}</h3>

                <p className="mt-4 text-[10px] leading-6 text-white/[0.4]">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}