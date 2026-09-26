"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Radio,
  ScanSearch,
  Target,
} from "lucide-react";

const steps = [
  {
    Icon: Database,
    number: "01",
    title: "Historical Data",
    text: "Past transactions, events and outcomes.",
  },
  {
    Icon: Radio,
    number: "02",
    title: "Live Signals",
    text: "Current behavioral and operational context.",
  },
  {
    Icon: ScanSearch,
    number: "03",
    title: "Feature Intelligence",
    text: "Identify variables that influence outcomes.",
  },
  {
    Icon: BrainCircuit,
    number: "04",
    title: "Predict",
    text: "Apply statistical and machine-learning models.",
  },
  {
    Icon: Target,
    number: "05",
    title: "Act",
    text: "Turn probability into a business decision.",
  },
];

export default function PredictionPipeline() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
          Prediction Pipeline
        </span>

        <h2 className="mt-7 max-w-[1100px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
          From what happened
          <span className="block text-white/50">
            to what happens next.
          </span>
        </h2>

        <div className="relative mt-20">
          <div className="absolute left-[8%] right-[8%] top-[84px] hidden h-px bg-[#eee5ff]/15 lg:block" />

          <motion.span
            animate={{
              left: ["7%", "92%", "7%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[81px] z-20 hidden h-2 w-2 rounded-full bg-[#f2ebff] shadow-[0_0_20px_#f2ebff] lg:block"
          />

          <div className="relative z-10 grid gap-4 lg:grid-cols-5">
            {steps.map(({ Icon, number, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="min-h-[360px] rounded-[30px] border border-[#eee5ff]/10 bg-[#0d0d0f] p-7"
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

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}