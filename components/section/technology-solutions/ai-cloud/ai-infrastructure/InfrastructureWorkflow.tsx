"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Cpu,
  Network,
  Rocket,
  Search,
} from "lucide-react";

const stages = [
  {
    Icon: Search,
    title: "Assess",
    text: "Understand AI workloads, data flows, performance expectations and operational constraints.",
  },
  {
    Icon: BrainCircuit,
    title: "Model",
    text: "Translate workload requirements into compute, storage, network and platform demand.",
  },
  {
    Icon: Network,
    title: "Architect",
    text: "Design the infrastructure topology, resource boundaries and integration patterns.",
  },
  {
    Icon: Cpu,
    title: "Engineer",
    text: "Implement reusable compute, orchestration and infrastructure capabilities.",
  },
  {
    Icon: Rocket,
    title: "Operationalize",
    text: "Integrate deployment, governance, observability and lifecycle processes.",
  },
  {
    Icon: Activity,
    title: "Optimize",
    text: "Use operational evidence to improve capacity, reliability and infrastructure efficiency.",
  },
];

export default function InfrastructureWorkflow() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            09 / DELIVERY SYSTEM
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Workload first.
            <span className="text-[#7653df]"> Infrastructure second.</span>
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[8%] right-[8%] top-[42px] hidden h-px bg-[#7046e6]/20 lg:block" />

          <motion.div
            animate={{ left: ["8%", "91%"] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[39px] z-20 hidden h-2 w-2 rounded-full bg-[#c4afff] shadow-[0_0_18px_#9878ef] lg:block"
          />

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
            {stages.map(({ Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative z-10 min-h-[270px] rounded-[23px] border border-white/[0.07] bg-[#030303] p-5"
              >
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#0a0710]">
                  <Icon size={14} className="text-[#b99cff]" />
                </div>

                <span className="mt-9 block font-mono text-[6px] text-[#7653df]">
                  PHASE 0{index + 1}
                </span>

                <h3 className="mt-3 text-lg">{title}</h3>

                <p className="mt-4 text-[10px] leading-6 text-white/[0.38]">
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