"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CircleDot,
  Sparkles,
} from "lucide-react";

const items = [
  {
    id: "01",
    category: "PRODUCT",
    title: "Premium Collection",
    score: "98.8%",
  },
  {
    id: "02",
    category: "CONTENT",
    title: "Recommended For You",
    score: "97.4%",
  },
  {
    id: "03",
    category: "SERVICE",
    title: "Next Best Service",
    score: "94.9%",
  },
  {
    id: "04",
    category: "OFFER",
    title: "Personalized Offer",
    score: "92.6%",
  },
  {
    id: "05",
    category: "ACTION",
    title: "Next Best Action",
    score: "91.8%",
  },
];

export default function PersonalizationStream() {
  return (
    <section
      id="personalization-stream"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#07070a] py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-[8px] uppercase tracking-[0.42em] text-[#d9c7f5]/60">
              01 / Live Personalization
            </span>

            <h2 className="mt-7 text-5xl font-medium leading-[0.98] tracking-[-0.055em] md:text-7xl">
              Every user gets
              <span className="block text-[#d5c9e4]/65">
                a different experience.
              </span>
            </h2>
          </div>

          <p className="max-w-[560px] text-[15px] leading-8 text-[#d8d1df]/62">
            Recommendation engines continuously evaluate
            behavioral signals, contextual information and
            available choices to decide what should appear
            next for each individual user.
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#040405]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
            <div className="flex items-center gap-3">
              <Activity
                size={13}
                className="text-[#e6d9fa]"
              />

              <span className="text-[8px] uppercase tracking-[0.28em] text-white/35">
                HYI.AI / Personalization Stream
              </span>
            </div>

            <span className="flex items-center gap-2 text-[7px] tracking-[0.22em] text-emerald-300/60">
              <CircleDot size={9} />
              LIVE RANKING
            </span>
          </div>

          <div className="relative overflow-hidden py-10">
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max gap-4 px-4"
            >
              {[...items, ...items].map(
                (item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="relative h-[300px] w-[270px] shrink-0 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0a090d] p-6"
                  >
                    <div className="absolute right-[-70px] top-[-70px] h-[190px] w-[190px] rounded-full bg-[#dfceff]/[0.07] blur-[70px]" />

                    <div className="relative">
                      <div className="flex justify-between">
                        <span className="text-[7px] tracking-[0.25em] text-white/25">
                          {item.id}
                        </span>

                        <Sparkles
                          size={13}
                          className="text-[#dfceff]/60"
                        />
                      </div>

                      <div className="mt-14 flex h-20 w-full items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                        <motion.div
                          animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.4, 1, 0.4],
                          }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            delay: index * 0.15,
                          }}
                          className="h-8 w-8 rounded-full border border-[#e7dbfa]/40 bg-[#e7dbfa]/10 shadow-[0_0_35px_rgba(231,219,250,.15)]"
                        />
                      </div>

                      <p className="mt-7 text-[7px] tracking-[0.22em] text-[#d9c7f5]/55">
                        {item.category}
                      </p>

                      <h3 className="mt-3 text-lg text-white/80">
                        {item.title}
                      </h3>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-[8px] text-white/30">
                          RELEVANCE
                        </span>

                        <span className="text-[10px] text-[#e5d7fa]/70">
                          {item.score}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}