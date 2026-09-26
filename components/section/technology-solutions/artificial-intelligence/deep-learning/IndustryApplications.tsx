"use client";

import { motion } from "framer-motion";

const industries = [
  ["Healthcare", "12%"],
  ["Financial AI", "25%"],
  ["Manufacturing", "38%"],
  ["Retail", "51%"],
  ["Mobility", "64%"],
  ["Energy", "77%"],
  ["Logistics", "90%"],
  ["Enterprise", "103%"],
];

export default function IndustryApplications() {
  return (
    <section className="relative overflow-hidden bg-[#020308] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="text-center">
          <div className="text-[9px] uppercase tracking-[0.35em] text-blue-300/45">
            Applied Intelligence
          </div>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] md:text-7xl">
            One neural foundation.
            <span className="block text-blue-300">
              Infinite applications.
            </span>
          </h2>
        </div>

        <div className="relative mx-auto mt-20 aspect-square w-full max-w-[850px]">
          <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[120px]" />

          {[18, 31, 44].map((inset, index) => (
            <motion.div
              key={inset}
              className="absolute rounded-full border border-dashed border-cyan-300/[0.10]"
              style={{
                inset: `${inset}%`,
              }}
              animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
              transition={{
                duration: 30 + index * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          <motion.div
            className="absolute inset-[8%] rounded-full border border-white/[0.06]"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />

          {industries.map(([industry], index) => {
            const angle = (index / industries.length) * Math.PI * 2;
            const radius = 42;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;

            return (
              <motion.div
                key={industry}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                }}
              >
                <div className="whitespace-nowrap rounded-xl border border-white/[0.08] bg-[#050811]/90 px-3 py-2 text-[8px] uppercase tracking-[0.16em] text-white/45 backdrop-blur-xl md:px-5 md:py-3 md:text-[10px]">
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]" />
                  {industry}
                </div>
              </motion.div>
            );
          })}

          <div className="absolute left-1/2 top-1/2 flex h-[27%] w-[27%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/20 bg-[#040814]">
            <motion.div
              className="absolute inset-2 rounded-full border border-dashed border-blue-300/15"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 text-center">
              <div className="text-[7px] tracking-[0.35em] text-white/25">
                HYI.AI
              </div>

              <div className="mt-2 text-base font-medium md:text-2xl">
                Deep
                <br />
                Learning
              </div>

              <div className="mx-auto mt-3 h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}