"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Filter,
  Sparkles,
  Target,
} from "lucide-react";

const stages = [
  {
    icon: Database,
    no: "01",
    title: "Signals",
    text: "Capture behavioral, transactional, contextual and interaction signals.",
  },
  {
    icon: BrainCircuit,
    no: "02",
    title: "Understand",
    text: "Create intelligent representations of users, items and preferences.",
  },
  {
    icon: Filter,
    no: "03",
    title: "Candidates",
    text: "Retrieve the most relevant candidate products, content or actions.",
  },
  {
    icon: Target,
    no: "04",
    title: "Rank",
    text: "Score and order candidates based on relevance and business context.",
  },
  {
    icon: Sparkles,
    no: "05",
    title: "Personalize",
    text: "Deliver the final personalized experience and continuously learn.",
  },
];

export default function RecommendationEngine() {
  return (
    <section className="relative bg-[#020203] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-[8px] uppercase tracking-[0.42em] text-[#d9c7f5]/60">
            02 / Recommendation Engine
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Millions of choices.
            <span className="block text-[#d3c6e2]/65">
              One perfect next step.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[720px] text-[15px] leading-8 text-white/62">
            Our recommendation architecture transforms raw
            customer signals into intelligent candidate
            selection, ranking and personalized delivery.
          </p>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-[10%] right-[10%] top-[34px] hidden h-px bg-gradient-to-r from-transparent via-[#dfceff]/30 to-transparent lg:block" />

          <div className="grid gap-4 lg:grid-cols-5">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.article
                  key={stage.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="relative"
                >
                  <div className="relative z-10 mb-8 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#e6d8fa]/20 bg-[#08070a]">
                    <Icon
                      size={18}
                      className="text-[#e6d8fa]"
                    />
                  </div>

                  <div className="min-h-[310px] rounded-[26px] border border-white/[0.08] bg-[#08080b] p-7">
                    <span className="text-[8px] text-white/25">
                      {stage.no}
                    </span>

                    <h3 className="mt-12 text-2xl text-white/85">
                      {stage.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-white/58">
                      {stage.text}
                    </p>

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: "70%",
                      }}
                      viewport={{ once: true }}
                      className="mt-10 h-px bg-gradient-to-r from-[#e8dcfa]/70 to-transparent"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}