"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function DataQualityCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#030303] py-40">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.06, 0.13, 0.06],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[650px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6] blur-[190px]"
      />

      {[280, 430, 590].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            rotate: index % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 25 + index * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-[#7046e6]/10"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        >
          <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 rounded-full bg-[#7046e6]" />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-[1100px] px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/20 bg-[#7046e6]/[0.05] px-4 py-2">
            <ShieldCheck size={10} className="text-[#9875ef]" />

            <span className="font-mono text-[6px] tracking-[0.2em] text-[#9875ef]/70">
              TRUSTED DATA FOUNDATION
            </span>
          </div>

          <h2 className="mx-auto mt-8 max-w-[1000px] text-5xl font-medium leading-[0.94] tracking-[-0.065em] md:text-8xl">
            Better decisions begin
            <span className="block text-[#7046e6]">
              with better data.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[650px] text-[10px] leading-7 text-white/42">
            Build a measurable data-quality capability that helps teams
            understand their information, detect defects early and continuously
            improve the data supporting analytics, operations and AI.
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-[#7046e6] px-7 py-4 text-[9px] font-medium text-white transition hover:scale-[1.04] hover:bg-[#7d58e9]"
          >
            Build your data quality framework
            <ArrowRight size={12} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}