"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Boxes,
  Cpu,
  Database,
  Gauge,
  Network,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    Icon: Cpu,
    number: "01",
    title: "Accelerated Compute",
    text: "Design compute environments around the requirements of AI training, fine-tuning, inference and experimentation workloads.",
  },
  {
    Icon: Boxes,
    number: "02",
    title: "Cluster Architecture",
    text: "Organize compute capacity into manageable pools that support workload isolation, allocation and horizontal scale.",
  },
  {
    Icon: Network,
    number: "03",
    title: "High-Speed Networking",
    text: "Engineer communication paths for distributed workers, storage systems, model services and platform components.",
  },
  {
    Icon: Database,
    number: "04",
    title: "AI Storage",
    text: "Build data layers for datasets, checkpoints, artifacts, metadata and production model access patterns.",
  },
  {
    Icon: BrainCircuit,
    number: "05",
    title: "Workload Orchestration",
    text: "Coordinate placement and lifecycle management using workload requirements, capacity state and infrastructure policy.",
  },
  {
    Icon: Gauge,
    number: "06",
    title: "Capacity Engineering",
    text: "Understand infrastructure demand and establish scaling approaches that account for changing AI workload requirements.",
  },
  {
    Icon: Activity,
    number: "07",
    title: "AI Observability",
    text: "Connect telemetry across compute, networking, storage and workload layers for more effective infrastructure operations.",
  },
  {
    Icon: ShieldCheck,
    number: "08",
    title: "Infrastructure Security",
    text: "Integrate identity, access boundaries, workload isolation and infrastructure controls into the AI platform foundation.",
  },
];

export default function InfrastructureCapabilities() {
  return (
    <section className=" bg-[#070707] py-10">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="max-w-[800px] text-center mx-auto">
      
          <h2 className=" hyi-h1 hyi-white">
            One infrastructure.
            <span className="block hyi-blue">Many AI workloads.</span>
          </h2>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ Icon, number, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group  rounded-[26px] border border-white/[0.07] bg-[#030303] p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/[0.07]">
                  <Icon size={15} className="hyi-blue-icon" />
                </div>
              </div>

              <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>

              <p className="mt-2 hyi-p]">
                {text}
              </p>

              <div className="mt-4 h-px bg-gradient-to-r from-[#7046e6]/50 to-transparent opacity-40 transition group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}