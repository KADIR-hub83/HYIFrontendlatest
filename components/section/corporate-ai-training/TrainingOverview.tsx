"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Workflow,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import type { CorporateTrainingPageData } from "@/components/data/corporateAITraining";

interface TrainingOverviewProps {
  data: CorporateTrainingPageData["overview"];
}

const icons = [
  BrainCircuit,
  Workflow,
  ShieldCheck,
  Lightbulb,
];

export default function TrainingOverview({
  data,
}: TrainingOverviewProps) {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-purple-400">
              {data.eyebrow}
            </p>

            <h2 className="max-w-[580px] text-4xl font-medium leading-tight tracking-[-0.03em] text-white md:text-5xl">
              {data.title}
            </h2>

            <p className="mt-7 max-w-[600px] text-[16px] leading-8 text-white/45">
              {data.description}
            </p>
          </motion.div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
            {data.features.map((feature, index) => {
              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  className="bg-[#080808] p-8 md:p-10"
                >
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.07]">
                    <Icon size={19} className="text-purple-400" />
                  </div>

                  <h3 className="text-lg font-medium text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/40">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}