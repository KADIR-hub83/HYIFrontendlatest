"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Cloud,
  Database,
  GitBranch,
  RadioTower,
  RefreshCcw,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    Icon: Workflow,
    title: "Data Pipelines",
    text: "Reliable ingestion and transformation pipelines for batch and real-time enterprise workloads.",
  },
  {
    Icon: Database,
    title: "Data Warehousing",
    text: "Modern warehouse architectures optimized for analytics, reporting and enterprise intelligence.",
  },
  {
    Icon: RadioTower,
    title: "Streaming Platforms",
    text: "Low-latency event processing for applications that depend on continuously changing information.",
  },
  {
    Icon: Cloud,
    title: "Cloud Data Platforms",
    text: "Scalable cloud-native infrastructure designed around your workloads, teams and governance needs.",
  },
  {
    Icon: Boxes,
    title: "Lakehouse Architecture",
    text: "Unified platforms that combine flexible data lakes with warehouse-grade structure and performance.",
  },
  {
    Icon: RefreshCcw,
    title: "Data Migration",
    text: "Move legacy datasets and workloads into modern platforms with controlled migration strategies.",
  },
  {
    Icon: ShieldCheck,
    title: "Data Quality",
    text: "Validation, lineage and monitoring that help keep business-critical information trustworthy.",
  },
  {
    Icon: GitBranch,
    title: "DataOps",
    text: "Testing, versioning and deployment workflows that bring software engineering discipline to data.",
  },
];

export default function EngineeringCapabilities() {
  return (
    <section className="border-y border-white/[0.06] bg-[#090806] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="max-w-[1000px]">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Engineering Capabilities
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Every layer of your
            <span className="block text-white/50">data foundation.</span>
          </h2>

          <p className="mt-8 max-w-[700px] text-[15px] leading-8 text-white/65">
            From ingestion to serving, build the engineering systems required
            to make enterprise data reliable, accessible and ready for
            intelligent applications.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ delay: (index % 4) * 0.08 }}
              className="group relative min-h-[410px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0c0b0c] p-7"
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/[0.04] blur-[70px] transition-all duration-700 group-hover:bg-violet-500/[0.12]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-violet-200/[0.14] bg-violet-200/[0.04]">
                    <Icon size={21} className="text-violet-100/70" />
                  </div>

                  <span className="font-mono text-[7px] text-white/25">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-auto">
                  <h3 className="text-xl text-white/90">{title}</h3>

                  <p className="mt-5 text-sm leading-7 text-white/60">
                    {text}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-500 via-violet-100 to-transparent transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}