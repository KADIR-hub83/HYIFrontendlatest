"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CorporateTrainingPageData } from "@/components/data/corporateAITraining";

interface TrainingProgramsProps {
  data: CorporateTrainingPageData["programs"];
}

export default function TrainingPrograms({
  data,
}: TrainingProgramsProps) {
  return (
    <section className="border-y border-white/10 bg-[#050505] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="max-w-[760px]">
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

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.5,
              }}
              className="group min-h-[280px] rounded-2xl border border-white/10 bg-black p-7 transition duration-300 hover:border-purple-500/30 hover:bg-purple-500/[0.03]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-white/20">
                  0{index + 1}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-white/20 transition group-hover:text-purple-400"
                />
              </div>

              <div className="mt-20">
                <h3 className="text-xl font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}