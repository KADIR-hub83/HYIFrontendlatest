"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Database,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

import DataPlatformHeroModel from "./DataPlatformHeroModel";

const capabilities = [
  {
    Icon: Database,
    label: "Unified Data",
  },
  {
    Icon: Network,
    label: "Connected Architecture",
  },
  {
    Icon: Layers3,
    label: "Scalable Platform",
  },
  {
    Icon: ShieldCheck,
    label: "Governed Foundation",
  },
];

export default function DataPlatformsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030303] px-5 pb-24 pt-28 md:px-10 md:pt-36">
      {/* atmospheric circles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[25%] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#7046e6]/20 blur-[190px]" />

        <div className="absolute -left-[300px] top-[20%] h-[700px] w-[700px] rounded-full bg-[#390b44]/40 blur-[180px]" />

        <div className="absolute -right-[250px] top-[35%] h-[700px] w-[700px] rounded-full bg-[#7046e6]/15 blur-[190px]" />
      </div>

      {/* grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.17]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at 50% 35%, black, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 35%, black, transparent 72%)",
        }}
      />

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1150px] text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/30 bg-[#7046e6]/[0.08] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#7046e6] opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-[#c6b4ff]" />
            </span>

            <span className="font-mono text-[7px] uppercase tracking-[0.32em] text-[#bca6f7]">
              HYI.AI / AI CLOUD / DATA PLATFORMS
            </span>
          </div>

          <h1 className="mt-8 text-[clamp(4.2rem,9vw,9.3rem)] font-medium leading-[0.84] tracking-[-0.075em]">
            Build the data
            <span className="block bg-gradient-to-r from-white via-[#cdbdf6] to-[#7046e6] bg-clip-text text-transparent">
              foundation for AI.
            </span>
          </h1>

          <p className="mx-auto mt-9 max-w-[820px] text-[13px] leading-7 text-white/[0.55] md:text-[15px] md:leading-8">
            Design modern data platforms that connect fragmented information,
            support reliable data engineering, strengthen governance and create
            an accessible foundation for analytics, applications and
            artificial intelligence.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {capabilities.map(({ Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(112,70,230,.45)",
                }}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5"
              >
                <Icon size={11} className="text-[#9e7cf0]" />

                <span className="text-[9px] text-white/[0.48]">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16">
          <DataPlatformHeroModel />
        </div>

        <a
          href="#data-foundation"
          className="mx-auto mt-10 flex w-fit items-center gap-3 font-mono text-[7px] uppercase tracking-[0.25em] text-white/[0.3]"
        >
          Explore the platform
          <ArrowDown size={10} />
        </a>
      </div>
    </section>
  );
}