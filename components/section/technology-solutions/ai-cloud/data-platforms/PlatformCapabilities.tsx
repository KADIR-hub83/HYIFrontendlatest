"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Boxes,
  Cloud,
  Database,
  GitBranch,
  Network,
  Search,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    Icon: Network,
    title: "Data Integration",
    text: "Connect information from databases, applications, files, APIs and event-driven systems.",
  },
  {
    Icon: Database,
    title: "Data Storage",
    text: "Design scalable foundations for analytical and operational information.",
  },
  {
    Icon: GitBranch,
    title: "Data Pipelines",
    text: "Build repeatable workflows that ingest, transform and deliver data.",
  },
  {
    Icon: Boxes,
    title: "Data Products",
    text: "Create reusable datasets designed around clear consumers and business purposes.",
  },
  {
    Icon: Search,
    title: "Discovery",
    text: "Help teams understand what data exists and how important datasets should be used.",
  },
  {
    Icon: ShieldCheck,
    title: "Governance",
    text: "Apply ownership, security and policy controls throughout the data lifecycle.",
  },
  {
    Icon: Activity,
    title: "Observability",
    text: "Improve visibility into the health and reliability of critical data workflows.",
  },
  {
    Icon: Cloud,
    title: "Cloud Scale",
    text: "Use cloud-native architecture patterns to support evolving platform workloads.",
  },
];

export default function PlatformCapabilities() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#390b44]/25 blur-[190px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="max-w-[900px]">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            09 / CAPABILITIES
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Everything between
            <span className="block text-[#7046e6]">
              source and intelligence.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(112,70,230,.4)",
              }}
              className="min-h-[310px] rounded-[25px] border border-white/[0.07] bg-[#030303] p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#7046e6]/25 bg-[#7046e6]/[0.08]">
                  <Icon size={15} className="text-[#9c7bed]" />
                </div>

                <span className="font-mono text-[6px] text-white/[0.16]">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-14 text-xl">{title}</h3>

              <p className="mt-5 text-[11px] leading-6 text-white/[0.45]">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}