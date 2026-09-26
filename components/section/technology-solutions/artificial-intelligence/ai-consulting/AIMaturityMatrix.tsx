"use client";

import { motion } from "framer-motion";

const levels = [
  ["01", "Explore", "Individual experiments", "Fragmented"],
  ["02", "Validate", "Focused pilots", "Emerging"],
  ["03", "Operationalize", "Production AI", "Structured"],
  ["04", "Scale", "Enterprise platforms", "Repeatable"],
  ["05", "Transform", "AI-native operating model", "Adaptive"],
];

export default function AIMaturityMatrix() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#020203] py-24 md:py-32">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/[0.05] blur-[190px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            AI Maturity
          </p>

          <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
            Know the next move,
            <span className="block bg-gradient-to-r from-[#e2b8ff] to-[#7859ff] bg-clip-text text-transparent">
              not just the destination.
            </span>
          </h2>
        </div>

        <div className="mt-16 overflow-x-auto pb-4">
          <div className="min-w-[950px] overflow-hidden rounded-[30px] border border-white/[0.07] bg-[#070609]">
            <div className="grid grid-cols-[100px_1fr_1.2fr_1fr] border-b border-white/[0.06] px-6 py-4 text-[7px] uppercase tracking-[1.6px] text-white/20">
              <span>Level</span>
              <span>Maturity</span>
              <span>AI Delivery</span>
              <span>Operating Model</span>
            </div>

            {levels.map((item, index) => (
              <motion.div
                key={item[0]}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ backgroundColor: "rgba(168,85,247,.04)" }}
                className="relative grid grid-cols-[100px_1fr_1.2fr_1fr] items-center border-b border-white/[0.045] px-6 py-7 last:border-0"
              >
                <span className="text-[9px] text-purple-300/35">{item[0]}</span>

                <span className="text-sm text-white/70">{item[1]}</span>

                <span className="text-[12px] text-white/32">{item[2]}</span>

                <span className="text-[12px] text-white/32">{item[3]}</span>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${20 + index * 20}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-purple-700 to-purple-300/30"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}