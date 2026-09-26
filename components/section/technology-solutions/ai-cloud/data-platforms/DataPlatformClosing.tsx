"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Layers3,
  Sparkles,
} from "lucide-react";

export default function DataPlatformClosing() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 py-28 md:px-10 md:py-36">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/15 blur-[190px]" />

      <div className="absolute -right-[300px] bottom-[-200px] h-[700px] w-[700px] rounded-full bg-[#390b44]/40 blur-[190px]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto min-h-[760px] max-w-[1500px] overflow-hidden rounded-[44px] border border-[#7046e6]/20"
      >
        <Image
          src="/images/data-platforms/ai-data.webp"
          alt="Future enterprise data platform"
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#030303]/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/35 to-[#390b44]/15" />

        <div className="relative z-10 flex min-h-[760px] flex-col items-center justify-end px-6 pb-16 text-center md:px-10 md:pb-20">
          <div className="flex items-center gap-3 rounded-full border border-[#7046e6]/30 bg-black/50 px-4 py-2 backdrop-blur-xl">
            <Database size={10} className="text-[#a98af3]" />

            <span className="font-mono text-[6px] tracking-[0.25em] text-[#c2aff8]">
              THE DATA FOUNDATION
            </span>
          </div>

          <h2 className="mt-8 max-w-[1100px] text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.07em]">
            Data becomes
            <span className="block bg-gradient-to-r from-white via-[#d3c4fa] to-[#7046e6] bg-clip-text text-transparent">
              intelligence infrastructure.
            </span>
          </h2>

          <p className="mt-8 max-w-[760px] text-[13px] leading-7 text-white/[0.52]">
            A modern data platform creates the connective foundation between
            enterprise information, analytics, digital applications and the
            next generation of AI systems.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              { Icon: Database, label: "DATA" },
              { Icon: Layers3, label: "PLATFORM" },
              { Icon: BrainCircuit, label: "AI" },
              { Icon: Sparkles, label: "INTELLIGENCE" },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/50 px-4 py-2.5 backdrop-blur-xl"
              >
                <Icon size={10} className="text-[#9675ed]" />

                <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.42]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}