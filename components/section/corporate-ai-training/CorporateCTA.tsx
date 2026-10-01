"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CorporateTrainingPageData } from "@/components/data/corporateAITraining";

interface CorporateCTAProps {
  data: CorporateTrainingPageData["cta"];
}

export default function CorporateCTA({
  data,
}: CorporateCTAProps) {
  return (
    <section className="bg-black px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-[1270px] overflow-hidden rounded-[32px] border border-purple-500/20 bg-purple-600/[0.07] px-7 py-16 md:px-14 md:py-20 lg:px-20"
      >
        <div className="pointer-events-none absolute right-[-150px] top-[-180px] h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative max-w-[820px]">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300">
            {data.eyebrow}
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.035em] text-white md:text-6xl">
            {data.title}
          </h2>

          <p className="mt-6 max-w-[680px] text-base leading-8 text-white/50">
            {data.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-white/90">
              {data.primaryButton}
              <ArrowRight size={16} />
            </button>

            <button className="rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/70 transition hover:bg-white/[0.05]">
              {data.secondaryButton}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}