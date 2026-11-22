"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CircleDollarSign,
  Cpu,
  Gauge,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const principles = [
  {
    Icon: Cpu,
    title: "Workload-driven",
    text: "Select and allocate accelerator infrastructure according to the actual compute, memory, runtime and scaling characteristics of each AI workload.",
  },
  {
    Icon: Gauge,
    title: "Utilization-aware",
    text: "Treat specialized compute as a shared platform resource and design scheduling, pooling and operational processes around effective capacity use.",
  },
  {
    Icon: Workflow,
    title: "Automated where practical",
    text: "Reduce repetitive infrastructure operations through orchestration while preserving deliberate controls for high-impact platform changes.",
  },
  {
    Icon: ShieldCheck,
    title: "Isolated by design",
    text: "Apply appropriate identity, workload boundaries and platform controls when multiple teams and AI workloads share infrastructure.",
  },
  {
    Icon: CircleDollarSign,
    title: "Economically intentional",
    text: "Balance specialized compute performance against workload value, utilization patterns, availability constraints and long-term operating cost.",
  },
  {
    Icon: Activity,
    title: "Observable end to end",
    text: "Connect workload telemetry with compute, memory, network and storage signals so infrastructure behavior can be understood as one system.",
  },
];

export default function GPUCloudPrinciples() {
  return (
    <section className="bg-[#030303] py-">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
       

            <h2 className=" hyi-h1 hyi-white">
              More compute
              <span className="block hyi-blue">
                is not the architecture.
              </span>
            </h2>

            <p className="mt-2 max-w-[500px] hyi-p">
              GPU cloud engineering is about making specialized compute
              consumable, scalable, observable and economically aligned with
              the workloads it exists to support.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {principles.map(({ Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -5 }}
                className=" rounded-[24px] border border-white/[0.07] bg-[#080808] p-7"
              >
                <div className="flex items-center justify-between">
                  <Icon size={15} className="hyi-blue-icon" />
                </div>

                <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>

                <p className="mt-2 hyi-p">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}