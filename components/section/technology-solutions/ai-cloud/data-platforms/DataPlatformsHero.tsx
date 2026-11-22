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
    <section className="relative overflow-hidden bg-[#030303] px-5  md:px-10 pt-30">
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

      <div className="relative mx-auto max-w-[1350px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1150px] text-center"
        >
       

          <h1 className="hyi-h1 hyi-white">
            Build the data
            <span className="block hyi-blue">
              foundation for AI.
            </span>
          </h1>

          <p className="mx-auto mt-2 max-w-[820px] hyi-p">
            Design modern data platforms that connect fragmented information,
            support reliable data engineering, strengthen governance and create
            an accessible foundation for analytics, applications and
            artificial intelligence.
          </p>

          <div className="mt-2 flex flex-wrap justify-center gap-3">
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

                <span className="hyi-p">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-5">
          <DataPlatformHeroModel />
        </div>
      </div>
    </section>
  );
}