"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Headphones,
  Mail,
  MessageCircle,
  MessagesSquare,
  Smartphone,
} from "lucide-react";

const channels = [
  { name: "Web", icon: Globe },
  { name: "Mobile", icon: Smartphone },
  { name: "Messaging", icon: MessageCircle },
  { name: "Voice", icon: Headphones },
  { name: "Email", icon: Mail },
  { name: "Support", icon: MessagesSquare },
];

export default function OmnichannelExperience() {
  return (
    <section className="relative overflow-hidden bg-[#030305] py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-purple-300/50">
              04 / Omnichannel
            </span>

            <h2 className="mt-7 text-5xl font-medium leading-[1.02] tracking-[-0.05em] md:text-7xl">
              One intelligence.
              <span className="block text-purple-300">
                Every conversation.
              </span>
            </h2>

            <p className="mt-8 max-w-[570px] text-base leading-8 text-white/50">
              Maintain consistent intelligence and context across web, mobile,
              messaging, support and voice experiences while connecting every
              interaction to the same enterprise AI layer.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Persistent context", "Unified knowledge", "Real-time actions"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/35"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative flex min-h-[650px] items-center justify-center">
            <div className="absolute h-[520px] w-[520px] rounded-full border border-purple-400/10" />
            <div className="absolute h-[380px] w-[380px] rounded-full border border-dashed border-purple-400/15" />

            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  "0 0 40px rgba(139,92,246,.15)",
                  "0 0 100px rgba(139,92,246,.35)",
                  "0 0 40px rgba(139,92,246,.15)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10 flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full border border-purple-300/20 bg-[#09070f]"
            >
              <span className="text-[8px] uppercase tracking-[0.4em] text-white/25">
                HYI.AI
              </span>
              <p className="mt-3 text-2xl font-medium">AI Core</p>
              <span className="mt-2 text-xs text-purple-300/60">
                Connected
              </span>
            </motion.div>

            {channels.map((channel, i) => {
              const Icon = channel.icon;
              const angle = (i / channels.length) * Math.PI * 2;
              const x = Math.cos(angle) * 240;
              const y = Math.sin(angle) * 240;

              return (
                <motion.div
                  key={channel.name}
                  animate={{ y: [y, y - 8, y] }}
                  transition={{
                    duration: 4 + i * 0.4,
                    repeat: Infinity,
                  }}
                  className="absolute flex h-20 w-20 items-center justify-center rounded-2xl border border-white/[0.08] bg-[#09090d]/90 backdrop-blur-xl"
                  style={{
                    left: `calc(50% + ${x}px - 40px)`,
                    top: "calc(50% - 40px)",
                  }}
                >
                  <div className="text-center">
                    <Icon
                      size={17}
                      className="mx-auto text-purple-300"
                    />
                    <p className="mt-2 text-[8px] uppercase tracking-wider text-white/35">
                      {channel.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}