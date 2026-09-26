"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Database,
  MessageSquareText,
  Search,
  Wrench,
} from "lucide-react";

const pipeline = [
  {
    title: "Understand",
    label: "Intent",
    icon: MessageSquareText,
    text: "Interpret natural language, intent, entities and conversational signals.",
  },
  {
    title: "Retrieve",
    label: "Knowledge",
    icon: Search,
    text: "Find trusted answers across enterprise data, documents and connected systems.",
  },
  {
    title: "Reason",
    label: "Intelligence",
    icon: Brain,
    text: "Combine context, business logic and AI reasoning before generating a response.",
  },
  {
    title: "Act",
    label: "Tools",
    icon: Wrench,
    text: "Trigger workflows, update systems, create tickets and complete real actions.",
  },
];

export default function ConversationEngine() {
  return (
    <section
      id="conversation-engine"
      className="relative border-t border-white/[0.06] bg-[#050507] py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-purple-300/60">
              01 / Conversation Engine
            </span>

            <h2 className="mt-6 max-w-[570px] text-5xl font-medium leading-[1] tracking-[-0.05em] md:text-7xl">
              From a message
              <span className="block text-white/35">to meaningful action.</span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-[650px] text-base leading-8 text-white/55 md:text-lg">
              Every conversation moves through an intelligent orchestration
              layer that understands the user, discovers relevant knowledge,
              reasons with context and securely executes business workflows.
            </p>
          </div>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-[8%] right-[8%] top-[48px] hidden h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent lg:block" />

          <div className="grid gap-4 lg:grid-cols-4">
            {pipeline.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -8 }}
                  className="group relative min-h-[390px] overflow-hidden rounded-[30px] border border-white/[0.07] bg-[#09090d] p-7"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/[0.05] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-20 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/[0.08]">
                        <Icon size={20} className="text-purple-300" />
                      </div>

                      <span className="text-xs text-white/20">
                        0{i + 1}
                      </span>
                    </div>

                    <span className="text-[9px] uppercase tracking-[0.3em] text-purple-300/50">
                      {item.label}
                    </span>

                    <h3 className="mt-4 text-3xl font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-white/45">
                      {item.text}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-xs text-white/30">
                      Continue
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-[32px] border border-white/[0.07] bg-black/30 p-5 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/[0.06] pb-5">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                Orchestration active
              </span>
            </div>

            <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
              Enterprise AI Runtime
            </span>
          </div>

          <div className="grid gap-4 py-8 md:grid-cols-3">
            {[
              ["Intent", "Order Status"],
              ["Knowledge Source", "Commerce API"],
              ["Action", "Shipment Lookup"],
            ].map(([a, b], i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
              >
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  {a}
                </p>
                <p className="mt-3 text-sm text-white/70">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}