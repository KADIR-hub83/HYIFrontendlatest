"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, RadioTower } from "lucide-react";
import BigDataQuantumCore from "./BigDataQuantumCore";

export default function BigDataHero() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.16], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.25]);

  return (
    <section className="relative min-h-[1250px] overflow-hidden bg-[#030303] pb-24 pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[37%] h-[1000px] w-[1300px] -translate-x-1/2 rounded-full bg-[#c4b5fd]/[0.055] blur-[210px]" />

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
            backgroundSize: "76px 76px",
            maskImage:
              "linear-gradient(to bottom,transparent,black 16%,black 75%,transparent)",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-[1550px] px-5 md:px-8"
      >
        <div className="mx-auto max-w-[1250px] text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 rounded-full border border-[#eee5ff]/15 bg-[#eee5ff]/[0.035] px-5 py-2.5 backdrop-blur-xl"
          >
            <RadioTower size={11} className="text-[#eee5ff]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.36em] text-[#eee5ff]/60">
              Big Data Analytics
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-9 text-[clamp(4rem,9.5vw,10rem)] font-medium leading-[0.84] tracking-[-0.075em]"
          >
            Billions of signals.
            <span className="block bg-gradient-to-r from-white via-[#eee5ff] to-[#ad95d0] bg-clip-text text-transparent">
              One intelligent view.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mx-auto mt-10 max-w-[900px] text-[15px] leading-8 text-[#e4ddea]/65 md:text-lg md:leading-9"
          >
            HYI.AI transforms massive, fast-moving and complex datasets into
            scalable intelligence—combining distributed processing, streaming
            analytics and AI-ready data architectures.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.35,
            duration: 1.1,
          }}
          className="mt-4"
        >
          <BigDataQuantumCore />
        </motion.div>

        <a
          href="#data-universe"
          className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-8 py-4 font-mono text-[8px] uppercase tracking-[0.24em] text-white/55 transition hover:border-[#eee5ff]/30 hover:text-white"
        >
          Explore the data universe
          <ArrowDown size={12} />
        </a>
      </motion.div>
    </section>
  );
}