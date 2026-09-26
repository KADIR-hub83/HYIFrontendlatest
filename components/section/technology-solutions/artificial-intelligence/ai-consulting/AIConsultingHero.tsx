"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import StrategyConstellation from "./StrategyConstellation";

export default function AIConsultingHero() {
  const { scrollY } = useScroll();

  const headingY = useTransform(scrollY, [0, 700], [0, 110]);
  const headingOpacity = useTransform(scrollY, [0, 500], [1, 0.1]);
  const visualScale = useTransform(scrollY, [0, 700], [1, 0.82]);

  return (
    <section className="relative min-h-[120vh] overflow-hidden border-b border-white/[0.05] bg-[#020203]">
      <motion.div
        animate={{
          x: ["-15%", "10%", "-15%"],
          y: ["-10%", "8%", "-10%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-purple-800/[0.08] blur-[180px]"
      />

      <motion.div
        animate={{
          x: ["10%", "-15%", "10%"],
          y: ["5%", "-8%", "5%"],
        }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[5%] top-[35%] h-[550px] w-[550px] rounded-full bg-fuchsia-700/[0.05] blur-[190px]"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(192,132,252,.65) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom,transparent,black 20%,black 75%,transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-28 pt-28 md:px-10 md:pt-36 lg:px-16">
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="mx-auto max-w-[1200px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 rounded-full border border-purple-400/15 bg-purple-500/[0.045] px-4 py-2 backdrop-blur-xl"
          >
            <motion.span
              animate={{ scale: [1, 1.7, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-[6px] w-[6px] rounded-full bg-purple-300"
            />

            <span className="text-[8px] uppercase tracking-[2.4px] text-purple-100/45">
              AI Strategy • Transformation • Advisory
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-8 text-[8px] uppercase tracking-[4px] text-white/20"
          >
            Strategy → Architecture → Adoption → Scale
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 45, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.1 }}
            className="mt-5 text-[52px] font-semibold leading-[0.91] tracking-[-3px] sm:text-[70px] md:text-[94px] lg:text-[116px]"
          >
            AI Consulting
            <span className="block bg-gradient-to-r from-[#f0d6ff] via-[#b96cff] to-[#7157ff] bg-clip-text text-transparent">
              & Transformation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mx-auto mt-8 max-w-[870px] text-[14px] leading-7 text-white/38 md:text-[17px] md:leading-8"
          >
            Move AI from isolated experiments to enterprise capability.
            HYI.AI helps organizations define AI strategy, redesign operating
            models, establish governance and build the foundations required
            to scale intelligence across the business.
          </motion.p>
        </motion.div>

        <motion.div style={{ scale: visualScale }} className="-mt-2 md:-mt-8">
          <StrategyConstellation />
        </motion.div>

        <div className="relative z-20 mx-auto -mt-12 max-w-[850px] text-center">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="mx-auto h-px w-[280px] origin-center bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"
          />

          <p className="mx-auto mt-7 max-w-[720px] text-[13px] leading-7 text-white/30">
            We connect business priorities, data, technology, people and
            governance into one practical AI transformation system.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document
                  .getElementById("ai-diagnostic")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-purple-300/20 bg-gradient-to-r from-[#6f27dc] via-[#984fff] to-[#7155ff] px-9 py-4 text-[13px] font-medium shadow-[0_20px_70px_rgba(124,58,237,.28)]"
            >
              Explore AI Consulting ↓
            </motion.button>

            <motion.button
              whileHover={{ y: -5 }}
              className="rounded-full border border-white/[0.09] bg-white/[0.025] px-9 py-4 text-[13px] text-white/45 backdrop-blur-xl"
            >
              AI Readiness Assessment
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}