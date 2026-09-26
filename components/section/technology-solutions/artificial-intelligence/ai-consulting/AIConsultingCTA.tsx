"use client";

import { motion } from "framer-motion";

export default function AIConsultingCTA() {
  return (
    <section className="relative overflow-hidden bg-[#020203] px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[42px] border border-purple-400/[0.13] bg-[#08060c] px-6 py-24 text-center md:py-36"
      >
        <motion.div
          animate={{
            scale: [0.7, 1.15, 0.7],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 h-[650px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600 blur-[180px]"
        />

        {[300, 500, 720].map((size, i) => (
          <motion.div
            key={size}
            animate={{ rotate: i % 2 ? -360 : 360 }}
            transition={{
              duration: 25 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-purple-300/[0.07]"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
            }}
          />
        ))}

        <div className="relative z-10 mx-auto max-w-[980px]">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-3 rounded-full border border-purple-300/[0.14] bg-purple-500/[0.04] px-4 py-2 backdrop-blur-xl"
          >
            <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-purple-300" />

            <span className="text-[8px] uppercase tracking-[2px] text-purple-100/40">
              AI Transformation Starts Here
            </span>
          </motion.div>

          <h2 className="mt-9 text-4xl font-semibold leading-[1.01] tracking-[-2px] md:text-6xl lg:text-[78px]">
            Your AI ambition needs
            <span className="block bg-gradient-to-r from-[#efd4ff] via-[#b96aff] to-[#7358ff] bg-clip-text text-transparent">
              an execution system.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-[14px] leading-7 text-white/34">
            Define the strategy, architecture, governance and operating model
            that can turn AI investment into sustainable enterprise value.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{
                y: -6,
                scale: 1.04,
                boxShadow: "0 25px 80px rgba(124,58,237,.38)",
              }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-purple-300/20 bg-gradient-to-r from-[#7028df] via-[#984fff] to-[#7155ff] px-10 py-4 text-[13px] font-medium shadow-[0_20px_60px_rgba(124,58,237,.25)]"
            >
              Start an AI Strategy Conversation →
            </motion.button>

            <motion.button
              whileHover={{ y: -6 }}
              className="rounded-full border border-white/[0.09] bg-white/[0.025] px-10 py-4 text-[13px] text-white/45 backdrop-blur-xl"
            >
              Assess AI Readiness
            </motion.button>
          </div>

          <div className="mx-auto mt-14 flex max-w-[750px] flex-wrap justify-center gap-4 text-[7px] uppercase tracking-[1.5px] text-white/17">
            <span>Strategy</span>
            <span>•</span>
            <span>Architecture</span>
            <span>•</span>
            <span>Governance</span>
            <span>•</span>
            <span>Operating Model</span>
            <span>•</span>
            <span>Scale</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}