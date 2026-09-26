"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  GitBranch,
  RefreshCcw,
  Sparkles,
} from "lucide-react";

export default function MLOpsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 py-36 md:px-10 md:py-44">
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[1050px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/[0.1] blur-[190px]" />

      {[230, 390, 560, 730].map((size, index) => (
        <motion.div
          key={size}
          animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 28 + index * 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border border-[#9878ef]/[0.08]"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        >
          <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 rounded-full bg-[#d8ccff]" />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-[1100px] text-center">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.07] px-4 py-2"
        >
          <RefreshCcw size={10} className="text-[#c9b6ff]" />
          <span className="font-mono text-[7px] tracking-[0.28em] text-[#b99cff]">
            CONTINUOUS ML
          </span>
        </motion.div>

        <h2 className="mt-9 text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.07em]">
          Models evolve.
          <span className="block bg-gradient-to-r from-white via-[#e2d9f1] to-[#7046e6] bg-clip-text text-transparent">
            Operations should too.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[720px] text-[12px] leading-7 text-white/[0.44]">
          Build an MLOps foundation that connects experimentation, automated
          pipelines, model delivery, production monitoring and governance into
          a repeatable machine learning lifecycle.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="group flex items-center gap-3 rounded-full bg-[#7046e6] px-7 py-3.5 text-[11px] font-medium transition hover:bg-[#8059ee]"
          >
            Build your MLOps platform
            <ArrowRight
              size={13}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/technology-solutions/ai-cloud/model-hosting"
            className="flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.03] px-7 py-3.5 text-[11px] text-white/[0.65]"
          >
            <BrainCircuit size={13} />
            Explore Model Hosting
          </Link>
        </div>

        <div className="mx-auto mt-14 flex w-fit flex-wrap items-center justify-center gap-3 font-mono text-[6px] tracking-[0.18em] text-white/[0.2]">
          <GitBranch size={9} />
          EXPERIMENT
          <ArrowRight size={8} />
          VALIDATE
          <ArrowRight size={8} />
          DEPLOY
          <ArrowRight size={8} />
          MONITOR
          <ArrowRight size={8} />
          IMPROVE
          <Sparkles size={9} />
        </div>
      </div>
    </section>
  );
}