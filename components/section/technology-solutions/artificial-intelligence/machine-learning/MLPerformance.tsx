"use client";

import { motion } from "framer-motion";

const metrics = [
  ["Accuracy", "98.7", "%"],
  ["Inference", "14", "ms"],
  ["Automation", "72", "%"],
  ["Uptime", "99.9", "%"],
];

export default function MLPerformance() {
  return (
    <section className="relative overflow-hidden bg-[#11142d] py-24 text-white md:py-32">
      <div className="absolute right-[-150px] top-[-150px] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            ML Performance Layer
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-2px] md:text-6xl">
            Intelligence you can
            <span className="block text-purple-300">measure and operate.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[32px] bg-white/10 md:grid-cols-4">
          {metrics.map(([label, number, suffix], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ backgroundColor: "rgba(139,92,246,.12)" }}
              className="relative bg-[#151934] px-7 py-12 text-center"
            >
              <div className="text-[8px] uppercase tracking-[2px] text-white/25">
                {label}
              </div>

              <div className="mt-7 text-5xl font-semibold tracking-[-3px] md:text-6xl">
                {number}
                <span className="ml-1 text-xl text-purple-300">{suffix}</span>
              </div>

              <motion.div
                animate={{ scaleX: [0.2, 1, 0.2] }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
                className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-purple-300 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}