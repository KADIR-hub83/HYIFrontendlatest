"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CorporateTrainingPageData } from "@/components/data/corporateAITraining";

interface DeliveryModelsProps {
  data: CorporateTrainingPageData["delivery"];
}

export default function DeliveryModels({
  data,
}: DeliveryModelsProps) {
  return (
    <section className="border-y border-white/10 bg-[#050505] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[720px]">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-400">
              {data.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.03em] text-white md:text-5xl">
              {data.title}
            </h2>
          </div>

          <p className="max-w-[460px] text-sm leading-7 text-white/40">
            {data.description}
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="group rounded-2xl border border-white/10 bg-black p-8 transition hover:border-purple-500/30"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-purple-400">
                  {item.label}
                </span>

                <ArrowRight
                  size={17}
                  className="text-white/20 transition group-hover:translate-x-1 group-hover:text-purple-400"
                />
              </div>

              <h3 className="mt-16 text-2xl font-medium text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                {item.description}
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/25">
                  {item.meta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}