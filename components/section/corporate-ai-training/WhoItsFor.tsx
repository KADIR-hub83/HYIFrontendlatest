"use client";

import { motion } from "framer-motion";
import {
  Building2,
  BriefcaseBusiness,
  Users,
  Lightbulb,
} from "lucide-react";
import type { CorporateTrainingPageData } from "@/components/data/corporateAITraining";

interface WhoItsForProps {
  data: CorporateTrainingPageData["audience"];
}

const icons = [
  Building2,
  BriefcaseBusiness,
  Users,
  Lightbulb,
];

export default function WhoItsFor({
  data,
}: WhoItsForProps) {
  return (
    <section className="bg-black py-24 md:py-32">
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

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {data.items.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.07,
                }}
                className="flex gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.06]">
                  <Icon size={19} className="text-purple-400" />
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/40">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}