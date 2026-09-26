"use client";

import { motion } from "framer-motion";
import { ArrowDown, ShieldCheck } from "lucide-react";
import TrustCore from "./TrustCore";

export default function ResponsibleAIHero() {
  return (
    <section className="relative min-h-[1150px] overflow-hidden bg-[#050505] pb-28 pt-36 md:pt-48">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[28%] h-[850px] w-[1100px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[190px]" />

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom,transparent,black 20%,black 70%,transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[1250px] text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 rounded-full border border-violet-100/[0.16] bg-violet-100/[0.04] px-5 py-2.5"
          >
            <ShieldCheck size={12} className="text-violet-100" />

            <span className="text-[8px] uppercase tracking-[0.4em] text-violet-100/65">
              Responsible Artificial Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-9 text-[clamp(4rem,9vw,9.5rem)] font-medium leading-[0.86] tracking-[-0.075em]"
          >
            Intelligence you can
            <span className="block bg-gradient-to-r from-white via-[#e7dcf7] to-[#9d7acb] bg-clip-text text-transparent">
              trust at scale.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-10 max-w-[850px] text-[15px] leading-8 text-white/68 md:text-lg md:leading-9"
          >
            HYI.AI helps organizations design AI systems with governance,
            transparency, human oversight, privacy and continuous risk
            monitoring built into the complete AI lifecycle.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 1 }}
        >
          <TrustCore />
        </motion.div>

        <div className="-mt-2 flex justify-center">
          <a
            href="#governance"
            className="group flex h-14 items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-8 text-sm text-white/65 backdrop-blur-xl transition hover:border-violet-200/30 hover:text-white"
          >
            Enter Governance Layer
            <ArrowDown
              size={15}
              className="transition group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}