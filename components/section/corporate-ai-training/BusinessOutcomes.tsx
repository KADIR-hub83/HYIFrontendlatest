"use client";

import { motion } from "framer-motion";
import type { CorporateTrainingPageData } from "@/components/data/corporateAITraining";

interface BusinessOutcomesProps {
  data: CorporateTrainingPageData["outcomes"];
}

export default function BusinessOutcomes({
  data,
}: BusinessOutcomesProps) {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#060606] py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.07] blur-[150px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-400">
            {data.eyebrow}
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.03em] text-white md:text-5xl">
            {data.title}
          </h2>

          <p className="mt-6 text-base leading-8 text-white/45">
            {data.description}
          </p>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-3xl border border-white/10 md:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="border-white/10 p-8 md:border-r last:border-r-0"
            >
              <p className="font-mono text-xs text-purple-400">
                {item.value}
              </p>

              <h3 className="mt-10 text-lg font-medium text-white">
                {item.label}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}