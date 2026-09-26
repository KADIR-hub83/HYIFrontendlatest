"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  CloudCog,
  Database,
  Gauge,
  GitMerge,
  LockKeyhole,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    Icon: Database,
    title: "Cloud Warehousing",
    text: "Modern warehouse environments designed for scalable enterprise analytics workloads.",
  },
  {
    Icon: GitMerge,
    title: "Data Integration",
    text: "Connect operational databases, applications, APIs and third-party platforms.",
  },
  {
    Icon: Boxes,
    title: "Data Modeling",
    text: "Create structured facts, dimensions and semantic models teams can understand.",
  },
  {
    Icon: Gauge,
    title: "Query Optimization",
    text: "Engineer storage, compute and models around predictable high-performance queries.",
  },
  {
    Icon: ShieldCheck,
    title: "Data Governance",
    text: "Build quality, lineage, ownership and enterprise standards into the platform.",
  },
  {
    Icon: LockKeyhole,
    title: "Secure Access",
    text: "Apply controlled access patterns across users, teams and sensitive datasets.",
  },
  {
    Icon: RefreshCcw,
    title: "Warehouse Migration",
    text: "Modernize legacy warehouses while preserving critical business logic and history.",
  },
  {
    Icon: CloudCog,
    title: "Warehouse Operations",
    text: "Monitor cost, performance, reliability and workloads across production environments.",
  },
];

export default function WarehouseCapabilities() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="max-w-[1050px]">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
            Warehouse Capabilities
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Everything required
            <span className="block text-white/50">
              for trusted analytics.
            </span>
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
              className="group relative min-h-[400px] overflow-hidden rounded-[32px] border border-[#eee5ff]/[0.10] bg-[#0d0d0f] p-7"
            >
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#eee5ff]/[0.025] blur-[70px] transition duration-700 group-hover:bg-[#eee5ff]/[0.07]" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#eee5ff]/15 bg-[#eee5ff]/[0.04]">
                    <Icon size={21} className="text-[#eee5ff]/70" />
                  </div>

                  <span className="font-mono text-[7px] text-white/25">
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

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-[#eee5ff] to-transparent transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}