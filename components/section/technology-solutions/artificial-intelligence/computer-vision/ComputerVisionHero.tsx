"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import VisionScanner from "./VisionScanner";

export default function ComputerVisionHero() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.18], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.25]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030303] pb-28 pt-32 md:pt-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[25%] h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-violet-700/[0.08] blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, transparent 90%)",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-8"
      >
        <div className="mx-auto max-w-[1100px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 rounded-full border border-violet-300/[0.18] bg-violet-400/[0.04] px-5 py-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-300 opacity-50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
            </span>

            <span className="text-[8px] uppercase tracking-[0.34em] text-violet-100/60">
              Computer Vision & Visual Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="mt-8 text-[52px] font-semibold leading-[0.93] tracking-[-0.06em] sm:text-[76px] md:text-[105px] lg:text-[128px]"
          >
            Give machines
            <br />

            <span className="bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#7c3aed] bg-clip-text text-transparent">
              the power to see.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-8 max-w-[850px] text-[15px] leading-8 text-white/60 md:text-lg md:leading-9"
          >
            HYI.AI builds enterprise computer vision systems that transform
            images, video and real-world environments into intelligent,
            measurable actions—from automated inspection and object detection
            to visual search, tracking and intelligent monitoring.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="mx-auto mt-16"
        >
          <VisionScanner />
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-[1100px] grid-cols-2 border-y border-white/[0.08] md:grid-cols-4">
          {[
            ["60 FPS", "Real-time Vision"],
            ["14ms", "Inference"],
            ["98.7%", "Detection Confidence"],
            ["24/7", "Visual Monitoring"],
          ].map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="border-white/[0.07] px-4 py-7 text-center md:border-r md:last:border-r-0"
            >
              <div className="text-2xl font-medium text-white md:text-3xl">
                {value}
              </div>

              <div className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white/40">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}