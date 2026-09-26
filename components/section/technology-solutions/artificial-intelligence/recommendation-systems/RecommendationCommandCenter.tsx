"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CircleDot,
  Sparkles,
} from "lucide-react";

const feed = [
  ["USER 0182", "Product recommendation", "98.4%"],
  ["USER 4028", "Content recommendation", "96.1%"],
  ["USER 1190", "Next best offer", "94.8%"],
  ["USER 8261", "Similar product", "93.6%"],
];

export default function RecommendationCommandCenter() {
  return (
    <section className="bg-[#020203] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-[8px] uppercase tracking-[0.42em] text-[#d9c7f5]/60">
              06 / Personalization Control
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              Every recommendation.
              <span className="block text-[#d2c5e1]/65">
                Visible in real time.
              </span>
            </h2>
          </div>

          <p className="max-w-[560px] text-[15px] leading-8 text-white/62">
            Monitor recommendation quality, ranking
            performance, user engagement and system health
            through a unified intelligence layer.
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#050507] shadow-[0_50px_140px_rgba(0,0,0,.65)]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
            <span className="text-[8px] uppercase tracking-[0.28em] text-white/35">
              HYI.AI / Recommendation Control
            </span>

            <span className="flex items-center gap-2 text-[7px] tracking-[0.22em] text-emerald-300/60">
              <CircleDot size={9} />
              SYSTEM ONLINE
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px]">
            <div className="border-b border-white/[0.07] p-6 md:p-8 lg:border-b-0 lg:border-r">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  ["2.8M", "REQUESTS"],
                  ["98.4%", "RELEVANCE"],
                  ["21ms", "LATENCY"],
                  ["99.99%", "UPTIME"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                  >
                    <p className="text-2xl font-light text-[#f3ecfa]/80">
                      {value}
                    </p>

                    <p className="mt-2 text-[7px] tracking-[0.2em] text-white/25">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-4 h-[400px] overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#030304]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
                    backgroundSize: "52px 52px",
                  }}
                />

                <div className="absolute inset-x-8 bottom-12 top-10 flex items-end gap-3">
                  {[35, 51, 42, 66, 49, 73, 61, 82, 69, 90, 78, 94].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{
                          height: `${height}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.1,
                          delay: index * 0.05,
                        }}
                        className="relative flex-1 rounded-t-md border-x border-t border-[#e2d3f7]/15 bg-gradient-to-t from-[#8b5cf6]/10 to-[#e7dbfa]/30"
                      >
                        <motion.div
                          animate={{
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.1,
                          }}
                          className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-[#eee5fa]"
                        />
                      </motion.div>
                    )
                  )}
                </div>

                <div className="absolute left-7 top-6 flex items-center gap-2">
                  <Activity
                    size={12}
                    className="text-[#e6d8f8]"
                  />

                  <span className="text-[7px] tracking-[0.24em] text-white/35">
                    RECOMMENDATION ACTIVITY
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                Live Decision Feed
              </p>

              <div className="mt-6 space-y-3">
                {feed.map(
                  ([user, action, score], index) => (
                    <motion.div
                      key={user}
                      animate={{
                        borderColor: [
                          "rgba(255,255,255,.06)",
                          "rgba(231,219,250,.2)",
                          "rgba(255,255,255,.06)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.4,
                      }}
                      className="rounded-2xl border bg-white/[0.015] p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] tracking-[0.2em] text-[#e0d2f5]/55">
                          {user}
                        </span>

                        <span className="flex items-center gap-2 text-[8px] text-emerald-300/55">
                          <span className="h-1 w-1 rounded-full bg-emerald-400" />
                          {score}
                        </span>
                      </div>

                      <p className="mt-3 text-xs text-white/50">
                        {action}
                      </p>
                    </motion.div>
                  )
                )}
              </div>

              <div className="mt-5 rounded-2xl border border-[#e2d3f7]/10 bg-[#e2d3f7]/[0.025] p-5">
                <div className="flex items-center gap-3">
                  <Sparkles
                    size={13}
                    className="text-[#e4d6f8]"
                  />

                  <span className="text-[8px] tracking-[0.2em] text-white/40">
                    MODEL STATUS
                  </span>
                </div>

                <p className="mt-4 text-lg text-[#f1eafa]/75">
                  Ranking healthy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}