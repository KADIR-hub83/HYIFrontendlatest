"use client";

import { motion } from "framer-motion";

const layers = [
  {
    no: "01",
    title: "Customer Signals",
    text: "Clicks • Searches • Views • Purchases • Sessions",
  },
  {
    no: "02",
    title: "Intelligence Layer",
    text: "Embeddings • User profiles • Item representations",
  },
  {
    no: "03",
    title: "Candidate Retrieval",
    text: "Collaborative • Similarity • Rules • Context",
  },
  {
    no: "04",
    title: "AI Ranking",
    text: "Relevance • Intent • Context • Business objectives",
  },
  {
    no: "05",
    title: "Personalized Experience",
    text: "Products • Content • Offers • Next best actions",
  },
];

export default function RankingArchitecture() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07070a] py-32 md:py-48">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10">
        <div className="text-center">
          <span className="text-[8px] uppercase tracking-[0.42em] text-[#d9c7f5]/60">
            05 / Ranking Architecture
          </span>

          <h2 className="mx-auto mt-7 max-w-[950px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Intelligence between
            <span className="text-[#d2c4e3]/65">
              {" "}choice and decision.
            </span>
          </h2>
        </div>

        <div className="relative mx-auto mt-24 max-w-[850px]">
          <div className="absolute left-[34px] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#dfceff]/30 to-transparent md:left-1/2" />

          <div className="space-y-4">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="relative z-10 rounded-[24px] border border-white/[0.08] bg-[#0a090d]/95 p-6 backdrop-blur-xl md:p-8"
              >
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#e3d4fa]/20 bg-[#e3d4fa]/[0.05] text-[8px] text-[#eadfff]/70">
                    {layer.no}
                  </div>

                  <div>
                    <h3 className="text-xl text-white/85">
                      {layer.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {layer.text}
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: "55%",
                  }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-[#e3d4fa]/50 to-transparent"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}