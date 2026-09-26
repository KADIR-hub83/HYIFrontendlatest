"use client";

import { motion } from "framer-motion";

const conversations = [
  {
    text: "I need help with my recent order.",
    intent: "SUPPORT",
    sentiment: "NEUTRAL",
    confidence: 98,
  },
  {
    text: "The new product experience is amazing.",
    intent: "FEEDBACK",
    sentiment: "POSITIVE",
    confidence: 96,
  },
  {
    text: "Please cancel my subscription.",
    intent: "CANCELLATION",
    sentiment: "NEGATIVE",
    confidence: 99,
  },
];

export default function LanguageCommandCenter() {
  return (
    <section className="relative overflow-hidden bg-[#08060a] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <span className="text-[8px] uppercase tracking-[0.35em] text-fuchsia-300/45">
              Language Operations
            </span>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] md:text-6xl">
              See language
              <span className="block text-violet-300">become data.</span>
            </h2>
          </div>

          <p className="max-w-[600px] text-sm leading-7 text-white/35">
            Monitor real-time language understanding, intent classification,
            sentiment and confidence across enterprise interactions.
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#050406]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/50" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
                <span className="h-2 w-2 rounded-full bg-green-400/50" />
              </div>

              <span className="text-[8px] tracking-[0.22em] text-white/25">
                LANGUAGE INTELLIGENCE
              </span>
            </div>

            <span className="flex items-center gap-2 text-[7px] tracking-[0.2em] text-emerald-300/45">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              LIVE
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.4fr_.6fr]">
            <div className="border-b border-white/[0.06] p-5 md:p-9 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex justify-between text-[7px] uppercase tracking-[0.2em] text-white/18">
                <span>Incoming Language Stream</span>
                <span>Real-time Analysis</span>
              </div>

              <div className="space-y-3">
                {conversations.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5"
                  >
                    <p className="text-sm text-white/55">“{item.text}”</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-md bg-violet-500/[0.08] px-3 py-1.5 text-[7px] tracking-[0.15em] text-violet-200/50">
                        INTENT: {item.intent}
                      </span>

                      <span className="rounded-md bg-fuchsia-500/[0.06] px-3 py-1.5 text-[7px] tracking-[0.15em] text-fuchsia-200/45">
                        {item.sentiment}
                      </span>

                      <span className="rounded-md bg-white/[0.03] px-3 py-1.5 text-[7px] tracking-[0.15em] text-white/30">
                        {item.confidence}% CONF
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-9">
              <div className="text-[7px] tracking-[0.22em] text-white/20">
                NLP ENGINE
              </div>

              <div className="mt-8 text-5xl font-medium tracking-[-0.05em]">
                12.8K
              </div>

              <div className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white/22">
                Messages / minute
              </div>

              <div className="mt-12 space-y-7">
                {[
                  ["Intent Accuracy", 98],
                  ["Entity Recall", 94],
                  ["Sentiment", 96],
                  ["Language Detection", 99],
                ].map(([label, value], index) => (
                  <div key={label as string}>
                    <div className="mb-2 flex justify-between text-[9px] text-white/30">
                      <span>{label}</span>
                      <span>{value}%</span>
                    </div>

                    <div className="h-[2px] bg-white/[0.05]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${value}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.3,
                          delay: index * 0.1,
                        }}
                        className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-300"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-xl border border-emerald-300/[0.08] bg-emerald-400/[0.02] p-4">
                <div className="flex items-center gap-3 text-[8px] tracking-[0.18em] text-emerald-300/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  ALL LANGUAGE SERVICES OPERATIONAL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}