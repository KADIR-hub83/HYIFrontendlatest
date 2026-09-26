"use client";

import { motion } from "framer-motion";

const controls = [
  "Policy",
  "Security",
  "Privacy",
  "Risk",
  "Evaluation",
  "Human Oversight",
];

export default function AIGovernance() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#050407] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1380px] items-center gap-16 px-5 md:px-10 lg:grid-cols-2 lg:px-16">
        <div className="relative h-[520px]">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.07] blur-[110px]" />

          {[380, 300, 220].map((size, i) => (
            <motion.div
              key={size}
              animate={{ rotate: i % 2 ? -360 : 360 }}
              transition={{
                duration: 20 + i * 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-purple-300/10"
              style={{
                width: size,
                height: size,
                marginLeft: -size / 2,
                marginTop: -size / 2,
              }}
            />
          ))}

          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-1/2 top-1/2 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/20 bg-[#09060f]"
          >
            <div className="text-center">
              <div className="text-xl text-white/80">AI</div>
              <div className="mt-1 text-[7px] uppercase tracking-[1.5px] text-purple-200/30">
                Governed
              </div>
            </div>
          </motion.div>

          {controls.map((item, i) => {
            const angle = (i / controls.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * 40;
            const y = 50 + Math.sin(angle) * 40;

            return (
              <motion.div
                key={item}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 3.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/[0.07] bg-[#09080d]/90 px-4 py-3 backdrop-blur-xl"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span className="text-[8px] uppercase tracking-[1px] text-white/38">
                  {item}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            AI Governance & Risk
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] md:text-6xl">
            Scale AI without
            <span className="block bg-gradient-to-r from-[#e3baff] to-[#785aff] bg-clip-text text-transparent">
              losing control.
            </span>
          </h2>

          <p className="mt-7 max-w-[570px] text-[14px] leading-7 text-white/34">
            Establish governance that enables innovation rather than blocking
            it. Define clear accountability, controls, risk tiers, evaluation
            standards and deployment policies across the AI lifecycle.
          </p>

          <div className="mt-10 space-y-3">
            {[
              "Enterprise AI policy and governance framework",
              "Model and use-case risk classification",
              "Security, privacy and access architecture",
              "Evaluation and responsible AI standards",
            ].map((text, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 rounded-xl border border-white/[0.05] bg-white/[0.015] px-4 py-4"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-purple-300/15 text-[7px] text-purple-200/40">
                  ✓
                </span>

                <span className="text-[12px] text-white/38">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}