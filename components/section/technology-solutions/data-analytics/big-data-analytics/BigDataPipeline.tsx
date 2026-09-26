"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Filter,
  Layers3,
  RadioTower,
  Sparkles,
} from "lucide-react";

const pipeline = [
  {
    Icon: RadioTower,
    number: "01",
    title: "Ingest",
    text: "Events · APIs · CDC · IoT",
  },
  {
    Icon: Filter,
    number: "02",
    title: "Process",
    text: "Clean · Validate · Enrich",
  },
  {
    Icon: Layers3,
    number: "03",
    title: "Distribute",
    text: "Parallel compute clusters",
  },
  {
    Icon: Database,
    number: "04",
    title: "Store",
    text: "Lake · Warehouse · NoSQL",
  },
  {
    Icon: BrainCircuit,
    number: "05",
    title: "Intelligence",
    text: "Analytics · ML · AI",
  },
];

export default function BigDataPipeline() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
          Distributed Data Pipeline
        </span>

        <h2 className="mt-7 max-w-[1100px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
          Move at the speed
          <span className="block text-white/50">of the signal.</span>
        </h2>

        <div className="relative mt-20">
          <div className="absolute left-[8%] right-[8%] top-[87px] hidden h-px bg-[#eee5ff]/15 lg:block" />

          <motion.span
            animate={{
              left: ["7%", "92%", "7%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[84px] z-20 hidden h-2 w-2 rounded-full bg-[#f1eaff] shadow-[0_0_18px_#f1eaff] lg:block"
          />

          <div className="relative z-10 grid gap-4 lg:grid-cols-5">
            {pipeline.map(({ Icon, number, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="min-h-[350px] rounded-[30px] border border-[#eee5ff]/10 bg-[#0d0d0f] p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#eee5ff]/15 bg-[#eee5ff]/[0.04]">
                    <Icon size={21} className="text-[#eee5ff]/70" />
                  </div>

                  <span className="font-mono text-[7px] text-white/20">
                    {number}
                  </span>
                </div>

                <div className="mt-20">
                  <h3 className="text-xl">{title}</h3>

                  <p className="mt-4 font-mono text-[8px] leading-6 tracking-[0.07em] text-white/40">
                    {text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-9 flex items-center gap-3 font-mono text-[7px] tracking-[0.25em] text-[#eee5ff]/35">
          <Sparkles size={11} />
          CONTINUOUS DISTRIBUTED PROCESSING
        </div>
      </div>
    </section>
  );
}