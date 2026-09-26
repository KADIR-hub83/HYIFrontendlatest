"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Music,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";

const nodes = [
  {
    label: "Premium",
    x: "18%",
    y: "25%",
    icon: Star,
  },
  {
    label: "Fashion",
    x: "77%",
    y: "24%",
    icon: ShoppingBag,
  },
  {
    label: "Lifestyle",
    x: "17%",
    y: "73%",
    icon: Heart,
  },
  {
    label: "Content",
    x: "79%",
    y: "72%",
    icon: Music,
  },
];

export default function TasteIntelligence() {
  return (
    <section className="overflow-hidden border-y border-white/[0.06] bg-[#07070a] py-32 md:py-48">
      <div className="mx-auto grid max-w-[1450px] gap-16 px-5 md:px-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div>
          <span className="text-[8px] uppercase tracking-[0.42em] text-[#d9c7f5]/60">
            03 / Taste Intelligence
          </span>

          <h2 className="mt-7 text-5xl font-medium leading-[0.98] tracking-[-0.055em] md:text-7xl">
            Understand the
            <span className="block text-[#d4c7e3]/65">
              individual behind data.
            </span>
          </h2>

          <p className="mt-8 max-w-[540px] text-[15px] leading-8 text-white/62">
            Personalization becomes more powerful when a
            system understands relationships between user
            interests, behaviors, products and contextual
            signals rather than treating every interaction
            independently.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {[
              "Behavior Signals",
              "Preference Models",
              "Context Awareness",
              "Affinity Mapping",
              "Session Intent",
              "Long-term Taste",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-4 text-xs text-white/58"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[620px] overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#040405]">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(rgba(231,219,250,.15) 1px,transparent 1px)",
              backgroundSize: "27px 27px",
            }}
          />

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 800 600"
            preserveAspectRatio="none"
          >
            {[
              "M400 300 L145 150",
              "M400 300 L625 145",
              "M400 300 L140 440",
              "M400 300 L640 435",
            ].map((path) => (
              <path
                key={path}
                d={path}
                stroke="rgba(231,219,250,.18)"
                strokeWidth="1"
                strokeDasharray="5 8"
              />
            ))}
          </svg>

          <motion.div
            animate={{
              scale: [1, 1.07, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-1/2 flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#e5d7fa]/25 bg-[#e5d7fa]/[0.06] backdrop-blur-xl"
          >
            <Sparkles
              size={25}
              className="text-[#eadfff]"
            />

            <p className="mt-4 text-[8px] tracking-[0.3em] text-white/55">
              USER 0248
            </p>

            <p className="mt-2 text-[7px] tracking-[0.2em] text-[#e4d6f8]/45">
              TASTE PROFILE
            </p>
          </motion.div>

          {nodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <motion.div
                key={node.label}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                }}
                className="absolute flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[25px] border border-white/[0.09] bg-[#0a090d]/80 backdrop-blur-xl"
                style={{
                  left: node.x,
                  top: node.y,
                }}
              >
                <Icon
                  size={17}
                  className="text-[#e3d5f7]"
                />

                <span className="mt-3 text-[7px] uppercase tracking-[0.2em] text-white/45">
                  {node.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}