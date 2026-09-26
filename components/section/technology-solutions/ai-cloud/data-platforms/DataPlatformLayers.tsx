"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Boxes,
  Database,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

const layers = [
  {
    Icon: Network,
    number: "L01",
    title: "Ingestion",
    text: "Connect databases, SaaS platforms, files, event streams and operational systems through reusable ingestion patterns.",
  },
  {
    Icon: Database,
    number: "L02",
    title: "Storage",
    text: "Create scalable storage foundations capable of supporting structured, semi-structured and analytical data.",
  },
  {
    Icon: Boxes,
    number: "L03",
    title: "Processing",
    text: "Transform raw information into reusable datasets through repeatable engineering workflows.",
  },
  {
    Icon: Layers3,
    number: "L04",
    title: "Semantic Layer",
    text: "Create understandable data products and business-ready structures for downstream consumption.",
  },
  {
    Icon: ShieldCheck,
    number: "L05",
    title: "Governance",
    text: "Apply ownership, security, metadata and policy controls across the platform lifecycle.",
  },
  {
    Icon: Activity,
    number: "L06",
    title: "Consumption",
    text: "Deliver trusted data into analytics, operational applications and artificial intelligence systems.",
  },
];

export default function DataPlatformLayers() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="absolute left-[25%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#390b44]/25 blur-[170px]" />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="max-w-[900px]">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            03 / PLATFORM LAYERS
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            A platform is more than
            <span className="block text-[#7046e6]">a database.</span>
          </h2>

          <p className="mt-7 max-w-[720px] text-[13px] leading-7 text-white/[0.5]">
            A complete data platform coordinates how information enters the
            organization, how it is processed, how it is governed and how it
            becomes useful to people and intelligent systems.
          </p>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {layers.map(({ Icon, number, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(112,70,230,.35)",
              }}
              className="min-h-[320px] rounded-[26px] border border-white/[0.07] bg-[#030303] p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/[0.08]">
                  <Icon size={16} className="text-[#a486f0]" />
                </div>

                <span className="font-mono text-[6px] tracking-[0.2em] text-[#7046e6]">
                  {number}
                </span>
              </div>

              <h3 className="mt-14 text-2xl">{title}</h3>

              <p className="mt-5 text-[12px] leading-7 text-white/[0.48]">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}