"use client";

import { motion } from "framer-motion";

const layers = [
  ["Executive AI Council", "Direction • Investment • Accountability"],
  ["AI Center of Excellence", "Standards • Platforms • Governance"],
  ["Domain AI Teams", "Products • Workflows • Business Value"],
  ["Enterprise Foundation", "Data • Cloud • Models • Security"],
];

export default function AIOperatingModel() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#020203] py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            AI Operating Model
          </p>

          <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
            Organize the enterprise
            <span className="block bg-gradient-to-r from-[#e3baff] to-[#785aff] bg-clip-text text-transparent">
              around repeatable AI delivery.
            </span>
          </h2>
        </div>

        <div className="relative mx-auto mt-20 max-w-[1000px]">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-purple-300/[0.08]" />

          <div className="space-y-4">
            {layers.map(([title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scaleX: 0.7 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ scale: 1.025 }}
                className="relative mx-auto overflow-hidden rounded-[24px] border border-white/[0.065] bg-[#08070b] px-6 py-7 text-center"
                style={{
                  width: `${62 + index * 11}%`,
                }}
              >
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 5,
                    delay: index,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="absolute inset-y-0 w-[30%] bg-gradient-to-r from-transparent via-purple-400/[0.05] to-transparent"
                />

                <div className="relative">
                  <div className="text-[8px] uppercase tracking-[2px] text-purple-300/28">
                    Layer 0{index + 1}
                  </div>

                  <h3 className="mt-2 text-lg text-white/75">{title}</h3>

                  <p className="mt-2 text-[10px] uppercase tracking-[1px] text-white/23">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}