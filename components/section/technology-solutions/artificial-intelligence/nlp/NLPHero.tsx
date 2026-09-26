"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import SemanticEngine from "./SemanticEngine";

export default function NLPHero() {
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.3]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030303] pb-20 pt-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-700/[0.08] blur-[160px]" />
        <div className="absolute right-[10%] top-[35%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/[0.05] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(196,181,253,.4) .7px, transparent .7px)",
            backgroundSize: "34px 34px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-8"
      >
        <div className="mx-auto max-w-[1100px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 rounded-full border border-violet-300/[0.15] bg-violet-500/[0.035] px-5 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_12px_#e879f9]" />

            <span className="text-[8px] uppercase tracking-[0.34em] text-violet-100/50">
              Natural Language Processing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.9 }}
            className="mt-8 text-[50px] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-[72px] md:text-[98px] lg:text-[120px]"
          >
            Machines that
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
              understand us.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-8 max-w-[780px] text-sm leading-7 text-white/40 md:text-lg md:leading-8"
          >
            HYI.AI builds language intelligence that understands meaning,
            context, intent and sentiment—turning unstructured human
            communication into actionable enterprise intelligence.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 1 }}
          className="mx-auto -mt-2 max-w-[900px]"
        >
          <SemanticEngine />
        </motion.div>

        <div className="mx-auto -mt-8 grid max-w-[950px] grid-cols-2 border-y border-white/[0.06] md:grid-cols-4">
          {[
            ["98.4%", "Intent Accuracy"],
            ["50+", "Languages"],
            ["18ms", "Response"],
            ["24/7", "Language AI"],
          ].map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="px-4 py-7 text-center md:border-r md:border-white/[0.06] md:last:border-r-0"
            >
              <div className="text-2xl font-medium md:text-3xl">{value}</div>
              <div className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white/25">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}