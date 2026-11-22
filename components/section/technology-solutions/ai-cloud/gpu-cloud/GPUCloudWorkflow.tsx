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
    <section className=" bg-[#070707] py-10">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
       

          <h2 className="hyi-h1 hyi-white">
            From workload request
            <span className="hyi-blue"> to running compute.</span>
          </h2>
        </div>

        <div className="relative mt-5">
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
                className="relative z-10 rounded-[23px] border border-white/[0.07] bg-[#030303] p-5"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#0a0710]">
                  <Icon size={14} className="text-[#c0a9ff]" />
                </div>

           

                <h3 className="mt-1 hyi-h3 hyi-white">{title}</h3>

                <p className="mt-2 hyi-p">
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