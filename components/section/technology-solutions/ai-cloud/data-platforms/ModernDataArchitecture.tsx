"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Network,
  Server,
} from "lucide-react";

const architecture = [
  {
    Icon: Database,
    number: "01",
    title: "Sources",
    text: "Operational databases, applications, files, events and external systems.",
  },
  {
    Icon: Network,
    number: "02",
    title: "Integration",
    text: "Batch, streaming and API-driven ingestion patterns move data into the platform.",
  },
  {
    Icon: Server,
    number: "03",
    title: "Data Core",
    text: "Scalable storage and processing layers provide the shared platform foundation.",
  },
  {
    Icon: Cloud,
    number: "04",
    title: "Consumption",
    text: "Analytics, applications and AI systems consume governed platform data.",
  },
];

export default function ModernDataArchitecture() {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-28">
      <div className="absolute -right-[250px] top-[10%] h-[700px] w-[700px] rounded-full bg-[#7046e6]/15 blur-[180px]" />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[850px]">
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              02 / MODERN ARCHITECTURE
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
              Architecture built for
              <span className="block text-[#7046e6]">
                continuously moving data.
              </span>
            </h2>
          </div>

          <p className="max-w-[480px] text-[13px] leading-7 text-white/[0.5]">
            Modern data platforms connect multiple technologies through clear
            architectural layers instead of allowing every application and
            team to build isolated data pipelines.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-16 min-h-[620px] overflow-hidden rounded-[38px] border border-white/[0.08]"
        >
          <Image
            src="/images/data-platforms/infrastructure.webp"
            alt="Modern data platform architecture infrastructure"
            fill
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/75 to-[#030303]/15" />
          <div className="absolute inset-0 bg-[#390b44]/10" />

          <div className="relative z-10 grid min-h-[620px] max-w-[820px] content-center gap-3 p-7 md:grid-cols-2 md:p-12">
            {architecture.map(({ Icon, number, title, text }) => (
              <div
                key={title}
                className="rounded-[22px] border border-white/[0.09] bg-black/60 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <Icon size={15} className="text-[#9b79ef]" />

                  <span className="font-mono text-[6px] text-white/[0.22]">
                    {number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl">{title}</h3>

                <p className="mt-4 text-[11px] leading-6 text-white/[0.48]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}