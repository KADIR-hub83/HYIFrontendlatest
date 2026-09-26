"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const words = [
  "UNDERSTAND",
  "LISTEN",
  "ANALYZE",
  "RESPOND",
  "SEARCH",
  "CONNECT",
];

export default function NLPCTA() {
  return (
    <section className="relative flex min-h-[850px] items-center overflow-hidden bg-[#020202] py-28">
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.08] blur-[160px]" />

      <div className="absolute inset-0">
        {words.map((word, index) => {
          const positions = [
            "left-[5%] top-[20%]",
            "right-[8%] top-[25%]",
            "left-[10%] bottom-[24%]",
            "right-[7%] bottom-[20%]",
            "left-[45%] top-[10%]",
            "left-[43%] bottom-[10%]",
          ];

          return (
            <motion.span
              key={word}
              className={`absolute hidden text-[8px] tracking-[0.3em] text-violet-200/15 md:block ${positions[index]}`}
              animate={{
                y: [0, -10, 0],
                opacity: [0.1, 0.35, 0.1],
              }}
              transition={{
                duration: 4,
                delay: index * 0.4,
                repeat: Infinity,
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 rounded-full border border-violet-300/[0.14] bg-violet-400/[0.03] px-5 py-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_12px_#e879f9]" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-violet-100/45">
            Language Intelligence
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-8 max-w-[1150px] text-[48px] font-medium leading-[0.97] tracking-[-0.055em] sm:text-[68px] md:text-[95px] lg:text-[112px]"
        >
          Give your technology
          <br />
          the power to
          <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
            understand.
          </span>
        </motion.h2>

        <p className="mx-auto mt-8 max-w-[650px] text-sm leading-7 text-white/35 md:text-base">
          Build NLP systems that understand customers, documents, knowledge
          and conversations at enterprise scale.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 px-9 py-4 text-sm font-medium shadow-[0_0_45px_rgba(168,85,247,.18)] transition-all duration-300 hover:scale-[1.04]"
          >
            Build NLP Solution
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/[0.10] bg-white/[0.02] px-9 py-4 text-sm text-white/55 backdrop-blur-xl transition-all hover:border-violet-300/25 hover:text-white"
          >
            Talk to AI Experts
          </Link>
        </div>

        <div className="mx-auto mt-24 flex max-w-[700px] items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-violet-300/20" />
          <span className="text-[7px] uppercase tracking-[0.3em] text-white/18">
            Human Language × Machine Intelligence
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-300/20" />
        </div>
      </div>
    </section>
  );
}