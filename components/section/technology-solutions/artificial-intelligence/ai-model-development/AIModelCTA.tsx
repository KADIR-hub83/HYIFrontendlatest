"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit } from "lucide-react";

export default function AIModelCTA() {
  return (
    <section className="relative flex min-h-[950px] items-center overflow-hidden bg-[#040405] py-36">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 h-[750px] w-[1050px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.11] blur-[190px]"
      />

      {[760, 590, 430].map((size, index) => (
        <motion.div
          key={size}
          animate={{ rotate: index % 2 ? -360 : 360 }}
          transition={{
            duration: 35 + index * 14,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-violet-100/[0.09]"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        >
          <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-violet-100 shadow-[0_0_22px_#ddd6fe]" />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-[1350px] px-5 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-100/20 bg-violet-100/[0.06]"
        >
          <BrainCircuit size={25} className="text-violet-100" />
        </motion.div>

        <p className="mt-10 text-[8px] uppercase tracking-[0.48em] text-violet-200/60">
          Build Your Intelligence
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-[1250px] text-[clamp(4rem,8.3vw,9rem)] font-medium leading-[0.87] tracking-[-0.07em]"
        >
          Your data deserves
          <span className="block bg-gradient-to-r from-white via-[#e7dcf7] to-[#a17ad5] bg-clip-text text-transparent">
            its own intelligence.
          </span>
        </motion.h2>

        <p className="mx-auto mt-10 max-w-[760px] text-[15px] leading-8 text-white/65 md:text-lg">
          Design and deploy custom AI models engineered around your enterprise
          data, domain expertise and production requirements.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group flex h-14 items-center gap-3 rounded-full bg-[#f4eff9] px-9 text-sm font-medium text-black transition duration-300 hover:scale-105"
          >
            Build Your AI Model

            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <Link
            href="/technology-solutions/artificial-intelligence"
            className="flex h-14 items-center rounded-full border border-white/10 bg-white/[0.03] px-9 text-sm text-white/65 backdrop-blur-xl transition hover:border-violet-200/30 hover:text-white"
          >
            Explore AI Solutions
          </Link>
        </div>

        <div className="mx-auto mt-28 flex max-w-[900px] items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-violet-200/25" />

          <span className="text-[7px] uppercase tracking-[0.32em] text-white/30">
            Design · Train · Evaluate · Deploy · Evolve
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-200/25" />
        </div>
      </div>
    </section>
  );
}