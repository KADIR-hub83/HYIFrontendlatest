"use client";

import { motion } from "framer-motion";

const items = [
  "STREAM PROCESSING",
  "DISTRIBUTED COMPUTE",
  "REAL-TIME ANALYTICS",
  "PETABYTE SCALE",
  "EVENT INTELLIGENCE",
  "DATA LAKES",
  "MACHINE LEARNING",
  "ANOMALY DETECTION",
];

export default function DataStreamTicker() {
  return (
    <section className="overflow-hidden border-y border-white/[0.06] bg-[#080808] py-5">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-8 px-8"
          >
            <span className="h-1 w-1 rounded-full bg-[#eee5ff]/60" />

            <span className="font-mono text-[8px] uppercase tracking-[0.32em] text-[#eee5ff]/35">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}