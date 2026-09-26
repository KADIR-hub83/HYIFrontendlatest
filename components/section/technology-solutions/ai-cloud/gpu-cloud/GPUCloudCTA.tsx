"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Sparkles } from "lucide-react";

export default function GPUCloudCTA() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 py-36 md:px-10 md:py-44">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/[0.1] blur-[190px]" />

      {[240, 400, 580, 760].map((size, index) => (
        <motion.div
          key={size}
          animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 30 + index * 10,
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
          <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 rounded-full bg-[#c9b6ff]" />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-[1050px] text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.07] px-4 py-2">
          <Cpu size={11} className="text-[#c9b6ff]" />
          <span className="font-mono text-[7px] uppercase tracking-[0.28em] text-[#b99cff]">
            GPU CLOUD
          </span>
        </div>

        <h2 className="mt-9 text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.07em]">
          Your models are ready.
          <span className="block bg-gradient-to-r from-white via-[#e1d7f2] to-[#7046e6] bg-clip-text text-transparent">
            Give them the compute.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[680px] text-[12px] leading-7 text-white/[0.44]">
          Build GPU cloud infrastructure that connects accelerated compute,
          scheduling, distributed training, inference, data and operations into
          one scalable AI platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="group flex items-center gap-3 rounded-full bg-[#7046e6] px-7 py-3.5 text-[11px] font-medium transition hover:bg-[#8059ee]"
          >
            Build GPU Cloud
            <ArrowRight
              size={13}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/technology-solutions/ai-cloud/ai-infrastructure"
            className="flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.03] px-7 py-3.5 text-[11px] text-white/[0.65] transition hover:bg-white/[0.06]"
          >
            <Sparkles size={13} />
            AI Infrastructure
          </Link>
        </div>
      </div>
    </section>
  );
}