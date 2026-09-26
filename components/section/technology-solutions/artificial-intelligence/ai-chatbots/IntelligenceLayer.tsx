"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  FileText,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const nodes = [
  { name: "Conversation", icon: UserRound },
  { name: "Memory", icon: BrainCircuit },
  { name: "Knowledge", icon: Database },
  { name: "Documents", icon: FileText },
  { name: "Guardrails", icon: ShieldCheck },
];

export default function IntelligenceLayer() {
  return (
    <section className="relative overflow-hidden bg-[#030305] py-32 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-800/[0.08] blur-[180px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-purple-300/50">
            02 / Intelligence Layer
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
            Context changes
            <span className="block bg-gradient-to-r from-purple-200 to-purple-500 bg-clip-text text-transparent">
              everything.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-base leading-8 text-white/50">
            Transform isolated chat responses into intelligent conversations
            grounded in customer history, enterprise knowledge, real-time data
            and controlled business context.
          </p>
        </div>

        <div className="relative mx-auto mt-24 flex min-h-[650px] max-w-[1100px] items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute h-[520px] w-[520px] rounded-full border border-dashed border-purple-400/15"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute h-[390px] w-[390px] rounded-full border border-purple-400/10"
          />

          <div className="relative z-10 flex h-[250px] w-[250px] items-center justify-center rounded-full border border-purple-300/20 bg-[#08060d] shadow-[0_0_100px_rgba(139,92,246,.2)]">
            <div className="text-center">
              <span className="text-[8px] uppercase tracking-[0.45em] text-white/25">
                Persistent
              </span>
              <h3 className="mt-4 text-3xl font-medium">Context</h3>
              <p className="mt-2 text-xs text-purple-300/70">
                Conversation Memory
              </p>
            </div>
          </div>

          {nodes.map((node, i) => {
            const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * 390;
            const y = Math.sin(angle) * 245;
            const Icon = node.icon;

            return (
              <motion.div
                key={node.name}
                animate={{ y: [y, y - 8, y] }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute hidden md:block"
                style={{
                  left: `calc(50% + ${x}px - 80px)`,
                  top: "50%",
                }}
              >
                <div className="flex min-w-[160px] items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#09090d]/90 px-4 py-3 backdrop-blur-xl">
                  <Icon size={15} className="text-purple-300" />
                  <span className="text-xs text-white/55">{node.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}