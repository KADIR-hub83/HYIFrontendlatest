"use client";

import { motion } from "framer-motion";
import { ArrowDown, Database, ShieldCheck } from "lucide-react";
import QualityIntelligenceModel from "./QualityIntelligenceModel";

export default function DataQualityHero() {
  return (
    <section className="relative min-h-[1180px] overflow-hidden border-b border-white/[0.06] bg-[#030303] pt-36 md:pt-44">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(112,70,230,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(112,70,230,.12) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at 50% 40%, black, transparent 75%)",
        }}
      />

      <div className="absolute left-1/2 top-[420px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#7046e6]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1050px] text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.06] px-4 py-2">
            <ShieldCheck size={11} className="text-[#9878f1]" />

            <span className="font-mono text-[7px] uppercase tracking-[0.28em] text-[#a98df5]/70">
              Data Quality Management
            </span>
          </div>

          <h1 className="mt-8 text-[clamp(4rem,8vw,8.7rem)] font-medium leading-[0.87] tracking-[-0.075em]">
            Data you can
            <span className="block text-[#7046e6]">
              actually trust.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-[760px] text-[11px] leading-7 text-white/55 md:text-[13px] md:leading-8">
            Data quality management is the continuous discipline of profiling,
            validating, monitoring and improving data so that information
            remains accurate, complete, consistent, valid, timely and suitable
            for its intended business use.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              "Accuracy",
              "Completeness",
              "Consistency",
              "Validity",
              "Timeliness",
              "Uniqueness",
            ].map((item) => (
              <span
                key={item}
                className="font-mono text-[6px] uppercase tracking-[0.2em] text-white/25"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20"
        >
          <QualityIntelligenceModel />
        </motion.div>

        <motion.a
          href="#quality-foundation"
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mt-14 flex w-fit items-center gap-3 text-[8px] text-white/30"
        >
          Understand data quality
          <ArrowDown size={10} />
        </motion.a>
      </div>
    </section>
  );
}