"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Layers3,
  Network,
  RadioTower,
} from "lucide-react";

const layers = [
  {
    Icon: BrainCircuit,
    name: "INTELLIGENCE",
    text: "AI · ML · BI · Advanced Analytics",
  },
  {
    Icon: Layers3,
    name: "PROCESSING",
    text: "Distributed Compute · Stream Processing",
  },
  {
    Icon: Database,
    name: "DATA PLATFORM",
    text: "Lakehouse · Warehouse · NoSQL",
  },
  {
    Icon: Network,
    name: "INTEGRATION",
    text: "APIs · CDC · ETL · Event Bus",
  },
  {
    Icon: RadioTower,
    name: "DATA SOURCES",
    text: "Apps · Machines · Customers · Transactions",
  },
];

export default function BigDataArchitecture() {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-28 md:py-44">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eee5ff]/[0.035] blur-[160px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
            Big Data Architecture
          </span>

          <h2 className="mx-auto mt-7 max-w-[1100px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Intelligence needs
            <span className="block text-white/50">infrastructure.</span>
          </h2>
        </div>

        <div className="mx-auto mt-20 max-w-[1050px]">
          {layers.map(({ Icon, name, text }, index) => (
            <motion.div
              key={name}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.01,
              }}
              className="relative -mt-px flex min-h-[115px] items-center justify-between border border-[#eee5ff]/10 bg-gradient-to-r from-[#0b0b0d] via-[#eee5ff]/[0.025] to-[#0b0b0d] px-6 first:rounded-t-[30px] last:rounded-b-[30px] md:px-10"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#eee5ff]/15 bg-[#eee5ff]/[0.04]">
                  <Icon size={17} className="text-[#eee5ff]/65" />
                </div>

                <div>
                  <p className="font-mono text-[8px] tracking-[0.24em] text-[#eee5ff]/55">
                    {name}
                  </p>

                  <p className="mt-2 text-xs text-white/35">
                    {text}
                  </p>
                </div>
              </div>

              <span className="hidden font-mono text-[7px] text-white/15 md:block">
                LAYER {String(5 - index).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}