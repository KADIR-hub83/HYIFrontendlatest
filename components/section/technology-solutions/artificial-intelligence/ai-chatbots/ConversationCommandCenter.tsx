"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  CircleCheck,
  Clock3,
  MessageSquareText,
} from "lucide-react";

const conversations = [
  {
    user: "Customer #2048",
    message: "I need help changing my delivery address.",
    intent: "Order Update",
    confidence: "98.4%",
  },
  {
    user: "Customer #1093",
    message: "Can you explain the enterprise plan?",
    intent: "Sales",
    confidence: "96.8%",
  },
  {
    user: "Customer #8842",
    message: "Please schedule a product demonstration.",
    intent: "Booking",
    confidence: "99.1%",
  },
];

export default function ConversationCommandCenter() {
  return (
    <section className="relative bg-[#030305] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-purple-300/50">
              06 / Conversation Operations
            </span>

            <h2 className="mt-6 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              Conversation
              <span className="text-purple-300"> Command Center.</span>
            </h2>
          </div>

          <p className="max-w-[480px] text-base leading-8 text-white/50">
            Observe conversation quality, intent recognition, automation and
            AI operations through one enterprise control layer.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#08080b] shadow-[0_40px_150px_rgba(0,0,0,.5)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
              </div>

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                HYI.AI / Conversation Operations
              </span>
            </div>

            <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-emerald-400/60">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Systems operational
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px]">
            <div className="border-white/[0.07] p-5 md:p-8 lg:border-r">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-white/60">
                  Live Conversations
                </p>
                <span className="text-xs text-white/25">148 active</span>
              </div>

              <div className="space-y-3">
                {conversations.map((conversation, i) => (
                  <motion.div
                    key={conversation.user}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="grid gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 md:grid-cols-[1fr_150px_100px]"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/10">
                        <MessageSquareText
                          size={16}
                          className="text-purple-300"
                        />
                      </div>

                      <div>
                        <p className="text-xs text-white/65">
                          {conversation.user}
                        </p>
                        <p className="mt-2 text-xs leading-5 text-white/35">
                          {conversation.message}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-white/20">
                        Intent
                      </p>
                      <p className="mt-2 text-xs text-purple-200/60">
                        {conversation.intent}
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-white/20">
                        Confidence
                      </p>
                      <p className="mt-2 text-xs text-white/55">
                        {conversation.confidence}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/[0.06] bg-black/20 p-6">
                <div className="flex h-[110px] items-end gap-1">
                  {Array.from({ length: 52 }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [
                          `${15 + ((i * 13) % 50)}%`,
                          `${30 + ((i * 23) % 65)}%`,
                          `${15 + ((i * 13) % 50)}%`,
                        ],
                      }}
                      transition={{
                        duration: 2 + (i % 4),
                        repeat: Infinity,
                      }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-purple-700/20 to-purple-400/60"
                    />
                  ))}
                </div>

                <div className="mt-4 flex justify-between text-[8px] uppercase tracking-[0.2em] text-white/20">
                  <span>Conversation activity</span>
                  <span>Real time</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                Intelligence
              </p>

              <div className="mt-8 space-y-7">
                {[
                  [Activity, "Resolution Rate", "94.8%"],
                  [Bot, "Automated", "81.2%"],
                  [Clock3, "Avg. Response", "0.8s"],
                  [CircleCheck, "Quality", "98.1%"],
                ].map(([Icon, label, value], i) => {
                  const Component = Icon as typeof Activity;

                  return (
                    <div
                      key={label as string}
                      className="border-b border-white/[0.06] pb-6"
                    >
                      <Component size={15} className="text-purple-300/60" />

                      <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-white/25">
                        {label as string}
                      </p>

                      <p className="mt-2 text-3xl font-light text-white/75">
                        {value as string}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}