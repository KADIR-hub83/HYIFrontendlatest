"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Cpu } from "lucide-react";

export default function AIInfrastructureCTA() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 py-36 md:px-10 md:py-44">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/[0.09] blur-[180px]" />

      {[250, 420, 600].map((size, index) => (
        <motion.div
          key={size}
          animate={{ rotate: index % 2 ? -360 : 360 }}
          transition={{
            duration: 35 + index * 10,
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
        />
      ))}

      <div className="relative mx-auto max-w-[1050px] text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.07] px-4 py-2">
          <Cpu size={11} className="text-[#b99cff]" />
          <span className="font-mono text-[7px] uppercase tracking-[0.28em] text-[#b99cff]">
            AI Infrastructure
          </span>
        </div>

        <h2 className="mt-9 text-[clamp(3.8rem,8vw,8rem)] font-medium leading-[0.88] tracking-[-0.07em]">
          Give your AI
          <span className="block bg-gradient-to-r from-white via-[#d9cbef] to-[#7046e6] bg-clip-text text-transparent">
            somewhere to scale.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[650px] text-[12px] leading-7 text-white/[0.43]">
          Build an infrastructure foundation that connects accelerated compute,
          data, networking, orchestration and operations around the workloads
          your AI systems actually need to run.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="group flex items-center gap-3 rounded-full bg-[#7046e6] px-6 py-3 text-[11px] font-medium transition hover:bg-[#8059ee]"
          >
            Build AI infrastructure
            <ArrowRight
              size={13}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/technology-solutions/ai-cloud/strategy"
            className="flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-[11px] text-white/[0.65] transition hover:bg-white/[0.06]"
          >
            <BrainCircuit size={13} />
            Explore AI Cloud Strategy
          </Link>
        </div>
      </div>
    </section>
  );
}