"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  CloudCog,
  DatabaseZap,
  Gauge,
  Network,
  Radio,
  Search,
} from "lucide-react";

const capabilities = [
  {
    Icon: Radio,
    title: "Streaming Analytics",
    text: "Analyze high-velocity events while they are still moving through your systems.",
  },
  {
    Icon: Network,
    title: "Distributed Computing",
    text: "Parallelize demanding workloads across scalable compute infrastructure.",
  },
  {
    Icon: DatabaseZap,
    title: "Massive Data Processing",
    text: "Process complex datasets beyond the limits of traditional analytical systems.",
  },
  {
    Icon: BrainCircuit,
    title: "AI-Ready Data",
    text: "Create large-scale feature and training datasets for machine learning systems.",
  },
  {
    Icon: Search,
    title: "Pattern Discovery",
    text: "Find hidden behavioral, operational and transactional patterns across huge datasets.",
  },
  {
    Icon: Activity,
    title: "Anomaly Detection",
    text: "Identify unusual events and deviations across real-time and historical signals.",
  },
  {
    Icon: CloudCog,
    title: "Cloud Scale",
    text: "Scale processing and storage dynamically as workload demand changes.",
  },
  {
    Icon: Gauge,
    title: "Performance Engineering",
    text: "Tune distributed workloads for throughput, latency and cost efficiency.",
  },
];

export default function AnalyticsCapabilities() {
  return (
    <section className="bg-[#030303] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
            Big Data Capabilities
          </span>

          <h2 className="mx-auto mt-7 max-w-[1100px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Built beyond
            <span className="block text-white/50">traditional limits.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[410px] overflow-hidden rounded-[32px] border border-[#eee5ff]/10 bg-[#0b0b0d] p-7"
            >
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#eee5ff]/[0.025] blur-[70px] transition duration-700 group-hover:bg-[#eee5ff]/[0.07]" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#eee5ff]/15 bg-[#eee5ff]/[0.04]">
                    <Icon size={21} className="text-[#eee5ff]/70" />
                  </div>

                  <span className="font-mono text-[7px] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl text-[#f2edf8]">{title}</h3>

                  <p className="mt-5 text-sm leading-7 text-white/60">
                    {text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}