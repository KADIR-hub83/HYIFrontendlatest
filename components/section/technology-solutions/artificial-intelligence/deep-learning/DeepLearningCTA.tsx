"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DeepLearningCTA() {
  return (
    <section className="relative flex min-h-[820px] items-center overflow-hidden bg-[#010205] py-28">
      {/* giant vortex */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-[900px] -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            className="absolute rounded-full border border-dashed border-cyan-300/[0.08]"
            style={{
              inset: `${item * 8}%`,
            }}
            animate={{
              rotate: item % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 25 + item * 9,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        <motion.div
          className="absolute left-1/2 top-1/2 h-[35%] w-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[90px]"
          animate={{
            scale: [0.8, 1.4, 0.8],
            opacity: [0.25, 0.8, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-[#050811]/70 px-5 py-2 backdrop-blur-xl"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />

          <span className="text-[8px] uppercase tracking-[0.3em] text-cyan-100/45">
            Build with HYI.AI
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-8 max-w-[1150px] text-[46px] font-medium leading-[0.98] tracking-[-0.055em] sm:text-[65px] md:text-[92px] lg:text-[110px]"
        >
          Build intelligence
          <br />
          that never stops
          <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            learning.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-[650px] text-sm leading-7 text-white/38 md:text-base"
        >
          Turn complex data into intelligent products, predictive systems and
          production-ready deep learning capabilities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-8 py-4 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.04]"
          >
            Start Deep Learning Project

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.025] px-8 py-4 text-sm text-white/60 backdrop-blur-xl transition-all hover:border-cyan-300/25 hover:text-white"
          >
            Schedule Consultation
          </Link>
        </motion.div>

        <div className="mx-auto mt-20 flex max-w-[700px] items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-300/20" />

          <div className="flex items-center gap-2 text-[7px] uppercase tracking-[0.28em] text-white/20">
            Neural Intelligence
            <span className="h-1 w-1 rounded-full bg-cyan-300" />
            HYI.AI
          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-300/20" />
        </div>
      </div>
    </section>
  );
}