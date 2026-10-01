"use client";

import { motion } from "framer-motion";
import type { CorporateTrainingPageData } from "@/components/data/corporateAITraining";

interface LearningJourneyProps {
  data: CorporateTrainingPageData["journey"];
}

export default function LearningJourney({
  data,
}: LearningJourneyProps) {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-400">
              {data.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.03em] text-white md:text-5xl">
              {data.title}
            </h2>

            <p className="mt-6 max-w-[520px] text-base leading-8 text-white/45">
              {data.description}
            </p>
          </div>

          <div>
            {data.steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                }}
                className="grid gap-6 border-t border-white/10 py-9 md:grid-cols-[100px_1fr]"
              >
                <span className="font-mono text-sm text-purple-400">
                  {item.step}
                </span>

                <div>
                  <h3 className="text-2xl font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[650px] text-sm leading-7 text-white/40">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="border-t border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}