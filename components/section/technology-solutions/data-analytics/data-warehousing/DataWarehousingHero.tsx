"use client";

import { motion } from "framer-motion";
import { ArrowDown, DatabaseZap } from "lucide-react";
import WarehouseVault from "./WarehouseVault";

export default function DataWarehousingHero() {
  return (
    <section className="relative min-h-[1200px] overflow-hidden bg-[#030303] pb-28 pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[32%] h-[900px] w-[1200px] -translate-x-1/2 rounded-full bg-[#c4b5fd]/[0.065] blur-[200px]" />

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom,transparent,black 18%,black 70%,transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="mx-auto max-w-[1200px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 rounded-full border border-[#eee5ff]/15 bg-[#eee5ff]/[0.035] px-5 py-2.5"
          >
            <DatabaseZap size={11} className="text-[#eee5ff]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.36em] text-[#eee5ff]/60">
              Enterprise Data Warehousing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-9 text-[clamp(4rem,9.3vw,9.5rem)] font-medium leading-[0.85] tracking-[-0.075em]"
          >
            One place for
            <span className="block bg-gradient-to-r from-white via-[#eee5ff] to-[#b7a1d8] bg-clip-text text-transparent">
              every truth.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-9 max-w-[850px] text-[15px] leading-8 text-[#e3ddea]/65 md:text-lg md:leading-9"
          >
            HYI.AI designs modern enterprise data warehouses that unify
            fragmented information into governed, high-performance platforms
            ready for analytics, reporting, machine learning and intelligent
            decision-making.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 1.2,
          }}
          className="mt-12"
        >
          <WarehouseVault />
        </motion.div>

        <a
          href="#warehouse-flow"
          className="mx-auto mt-12 flex w-fit items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-7 py-4 font-mono text-[8px] uppercase tracking-[0.25em] text-white/50 transition hover:border-[#eee5ff]/25 hover:text-white"
        >
          Enter the warehouse
          <ArrowDown size={12} />
        </a>
      </div>
    </section>
  );
}