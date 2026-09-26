"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import NeuralBrain from "./NeuralBrain";

const stats = [
  ["99.2%", "Model Accuracy"],
  ["50M+", "Parameters"],
  ["12×", "Faster Inference"],
  ["24/7", "Intelligence"],
];

export default function DeepLearningHero() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.18], [0, 130]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.25]);

  return (
    <section className="relative min-h-[1050px] overflow-hidden border-b border-white/[0.06] bg-[#020308] pt-28 md:pt-36">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[36%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[170px]" />
        <div className="absolute right-[5%] top-[20%] h-[380px] w-[380px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />
        <div className="absolute bottom-0 left-[10%] h-[400px] w-[400px] rounded-full bg-violet-600/[0.06] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 75%, transparent)",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-[1500px] px-5"
      >
        <div className="mx-auto max-w-[1100px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-cyan-300/[0.03] px-5 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>

            <span className="text-[9px] uppercase tracking-[0.34em] text-cyan-100/55">
              Deep Learning Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="mt-8 text-[48px] font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-[70px] md:text-[94px] lg:text-[118px]"
          >
            Intelligence that
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              learns deeper.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 1 }}
            className="mx-auto mt-8 max-w-[760px] text-sm leading-7 text-white/45 md:text-lg md:leading-8"
          >
            HYI.AI engineers deep learning systems capable of understanding
            complex data, discovering hidden patterns and powering intelligent
            products that continuously improve.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="relative mx-auto -mt-4 max-w-[760px]"
        >
          <NeuralBrain />
        </motion.div>

        <div className="mx-auto -mt-6 grid max-w-[1000px] grid-cols-2 border-y border-white/[0.06] md:grid-cols-4">
          {stats.map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + index * 0.1 }}
              className="relative px-4 py-7 text-center md:border-r md:border-white/[0.06] md:last:border-r-0"
            >
              <div className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                {value}
              </div>
              <div className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/30">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}