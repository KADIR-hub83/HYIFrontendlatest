"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import type { CorporateTrainingPageData } from "@/components/data/corporateAITraining";

interface CorporateHeroProps {
  data: CorporateTrainingPageData["hero"];
}

export default function CorporateHero({ data }: CorporateHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-24 pt-32 md:px-10 lg:px-16 lg:pb-32 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[1050px]"
        >
          <div className="mb-7 flex w-fit items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-4 py-2">
            <Sparkles size={14} className="text-purple-400" />

            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-purple-300">
              {data.eyebrow}
            </span>
          </div>

          <h1 className="max-w-[1000px] text-[46px] font-medium leading-[1.03] tracking-[-0.04em] text-white md:text-[70px] lg:text-[88px]">
            {data.title}

            <span className="block text-purple-500">
              {data.highlight}
            </span>
          </h1>

          <p className="mt-8 max-w-[760px] text-[16px] leading-8 text-white/50 md:text-[18px]">
            {data.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-purple-500">
              {data.primaryButton}
              <ArrowRight size={16} />
            </button>

            <button className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm text-white/80 transition hover:bg-white/[0.07]">
              {data.secondaryButton}
            </button>
          </div>
        </motion.div>

        <div className="mt-20 grid max-w-[900px] grid-cols-1 border-y border-white/10 md:grid-cols-3">
          {data.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-7 md:px-8 ${
                index !== data.stats.length - 1
                  ? "border-b border-white/10 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <p className="text-xl font-medium text-white">
                {stat.value}
              </p>

              <p className="mt-1 text-sm text-white/35">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}