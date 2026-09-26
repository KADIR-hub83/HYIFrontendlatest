"use client";

import { motion } from "framer-motion";
import {
  AppWindow,
  Database,
  Filter,
  Layers3,
  LineChart,
  Sparkles,
} from "lucide-react";

const stages = [
  {
    Icon: AppWindow,
    number: "01",
    title: "Sources",
    text: "ERP · CRM · SaaS · APIs",
  },
  {
    Icon: Filter,
    number: "02",
    title: "Ingest",
    text: "Batch + Streaming",
  },
  {
    Icon: Sparkles,
    number: "03",
    title: "Transform",
    text: "Clean · Model · Validate",
  },
  {
    Icon: Database,
    number: "04",
    title: "Warehouse",
    text: "Governed Data",
  },
  {
    Icon: LineChart,
    number: "05",
    title: "Consume",
    text: "BI · Analytics · AI",
  },
];

export default function WarehouseFlow() {
  return (
    <section
      id="warehouse-flow"
      className="relative border-y border-white/[0.06] bg-[#080808] py-28 md:py-44"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
            Warehouse Flow
          </span>

          <h2 className="mx-auto mt-7 max-w-[1100px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            From scattered data
            <span className="block text-[#e5dcef]/50">
              to one trusted layer.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-[15px] leading-8 text-white/60">
            Bring operational data together, transform it into consistent
            business models and make it immediately usable across analytics,
            reporting and AI.
          </p>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-[10%] right-[10%] top-[91px] hidden h-px bg-gradient-to-r from-transparent via-[#eee5ff]/25 to-transparent lg:block" />

          <motion.div
            animate={{ left: ["8%", "91%", "8%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[88px] z-20 hidden h-2 w-2 rounded-full bg-[#f1eaff] shadow-[0_0_18px_#f1eaff] lg:block"
          />

          <div className="relative z-10 grid gap-4 lg:grid-cols-5">
            {stages.map(({ Icon, number, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="min-h-[330px] rounded-[30px] border border-[#eee5ff]/[0.11] bg-[#0c0c0e] p-7 shadow-[0_20px_70px_rgba(0,0,0,.3)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#eee5ff]/15 bg-[#eee5ff]/[0.045]">
                    <Icon size={21} className="text-[#f0e8ff]/75" />
                  </div>

                  <span className="font-mono text-[7px] text-white/25">
                    {number}
                  </span>
                </div>

                <div className="mt-16">
                  <h3 className="text-xl text-[#f2edf8]">{title}</h3>

                  <p className="mt-4 font-mono text-[8px] leading-6 tracking-[0.08em] text-white/40">
                    {text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mx-auto mt-10 flex w-fit items-center gap-3 font-mono text-[7px] tracking-[0.25em] text-[#eee5ff]/35">
            <Layers3 size={11} />
            CONTINUOUS DATA MOVEMENT
          </div>
        </div>
      </div>
    </section>
  );
}