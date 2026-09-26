"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Sparkles } from "lucide-react";

export default function AICloudStrategyCTA() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 py-36 md:px-10 md:py-44">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/[0.09] blur-[180px]" />

      {[520, 390, 270].map((size, index) => (
        <motion.div
          key={size}
          animate={{ rotate: index % 2 ? -360 : 360 }}
          transition={{
            duration: 35 + index * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border border-[#7046e6]/10"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
            borderStyle: index === 1 ? "dashed" : "solid",
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-[1000px] text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#7046e6]/[0.09]">
          <BrainCircuit size={22} className="text-[#b39af5]" />
        </div>

        <div className="mx-auto mt-7 flex w-fit items-center gap-2">
          <Sparkles size={11} className="text-[#9878ef]" />
          <span className="font-mono text-[8px] tracking-[0.25em] text-[#9878ef]">
            BUILD THE NEXT FOUNDATION
          </span>
        </div>

        <h2 className="mt-7 text-5xl font-medium leading-[0.94] tracking-[-0.06em] md:text-7xl lg:text-[90px]">
          AI ambition needs
          <span className="block text-[#7046e6]">cloud direction.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-[680px] text-[14px] leading-8 text-white/[0.5]">
          Define the architecture, governance, operating model and execution
          roadmap that can support the next generation of applications, data
          platforms and AI capabilities.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="group flex items-center gap-3 rounded-full bg-[#7046e6] px-7 py-4 text-[12px] font-medium"
          >
            Build your AI cloud strategy
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/technology-solutions/ai-cloud"
            className="rounded-full border border-white/[0.1] bg-white/[0.025] px-7 py-4 text-[12px] text-white/[0.65]"
          >
            Explore AI Cloud
          </Link>
        </div>
      </motion.div>
    </section>
  );
}