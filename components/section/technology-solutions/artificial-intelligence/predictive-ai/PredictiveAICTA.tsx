"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Orbit,
} from "lucide-react";

export default function PredictiveAICTA() {
  return (
    <section
      id="predictive-cta"
      className="relative isolate overflow-hidden bg-[#030305] px-5 py-40 md:py-60"
    >
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[650px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/[0.12] blur-[180px]"
      />

      {[750, 580, 430].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            rotate: index % 2 ? -360 : 360,
          }}
          transition={{
            duration: 50 + index * 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-violet-300/[0.08]"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-[1200px] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 120,
          }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-violet-300/20 bg-violet-500/10 shadow-[0_0_60px_rgba(139,92,246,.25)]"
        >
          <Orbit size={24} className="text-violet-200" />
        </motion.div>

        <p className="mt-10 text-[9px] uppercase tracking-[0.48em] text-violet-300/55">
          Build for what comes next
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-8 text-[clamp(3.8rem,8vw,8.7rem)] font-medium leading-[0.89] tracking-[-0.065em]"
        >
          Don&apos;t wait for
          <span className="block bg-gradient-to-r from-[#EEE4FF] via-[#C18DFF] to-[#7654FF] bg-clip-text text-transparent">
            the future.
          </span>
          <span className="block text-[#E4DDEC]/75">
            Predict it.
          </span>
        </motion.h2>

        <p className="mx-auto mt-10 max-w-[700px] text-base leading-8 text-[#D7D0E1]/58">
          Turn enterprise data into predictive intelligence that helps your
          teams understand uncertainty, anticipate change and make more
          informed decisions.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/contact-us"
            className="group flex h-14 items-center gap-3 rounded-full bg-[#F5F0FF] px-8 text-sm font-medium text-black transition duration-300 hover:scale-105"
          >
            Build Predictive AI
            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href="/technology-solutions/artificial-intelligence"
            className="flex h-14 items-center rounded-full border border-white/10 bg-white/[0.03] px-8 text-sm text-[#E4DDEC]/65 backdrop-blur-xl transition hover:border-violet-400/30 hover:text-white"
          >
            Explore AI Solutions
          </a>
        </div>
      </div>
    </section>
  );
}