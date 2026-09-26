"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Database } from "lucide-react";

export default function DataEngineeringCTA() {
  return (
    <section className="relative flex min-h-[950px] items-center overflow-hidden border-t border-white/[0.06] bg-[#050505] py-32">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.10] blur-[190px]" />

      {[680, 520, 370].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            rotate: index % 2 ? -360 : 360,
          }}
          transition={{
            duration: 30 + index * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-violet-100/[0.07]"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        />
      ))}

      <motion.div
        animate={{
          top: ["10%", "90%", "10%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-100/20 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-[20px] border border-violet-100/20 bg-violet-100/[0.05]"
        >
          <Database size={24} className="text-violet-100" />
        </motion.div>

        <div className="mt-9 font-mono text-[8px] uppercase tracking-[0.4em] text-violet-100/55">
          HYI.AI Data Engineering
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto mt-8 max-w-[1300px] text-[clamp(4rem,8.5vw,9rem)] font-medium leading-[0.87] tracking-[-0.075em]"
        >
          Build the foundation
          <br />

          <span className="bg-gradient-to-r from-white via-violet-100 to-violet-400 bg-clip-text text-transparent">
            intelligence runs on.
          </span>
        </motion.h2>

        <p className="mx-auto mt-9 max-w-[780px] text-[15px] leading-8 text-white/65 md:text-lg">
          Design scalable, observable and production-ready data infrastructure
          for analytics, automation, machine learning and the next generation
          of enterprise AI.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#f3effa] px-10 text-sm font-medium text-black transition duration-300 hover:scale-[1.04]"
          >
            Build Your Data Platform

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/[0.11] bg-white/[0.025] px-10 text-sm text-white/65 backdrop-blur-xl transition hover:border-violet-200/30 hover:text-white"
          >
            Talk to Data Engineers
          </Link>
        </div>
      </div>
    </section>
  );
}