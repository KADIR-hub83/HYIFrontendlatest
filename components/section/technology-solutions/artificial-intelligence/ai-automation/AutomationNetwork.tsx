"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Cloud,
  Database,
  GitBranch,
  Send,
} from "lucide-react";

const nodes = [
  {
    name: "DATA",
    icon: Database,
    left: "8%",
    top: "46%",
  },
  {
    name: "AI MODEL",
    icon: BrainCircuit,
    left: "29%",
    top: "18%",
  },
  {
    name: "AGENT",
    icon: Bot,
    left: "50%",
    top: "46%",
  },
  {
    name: "WORKFLOW",
    icon: GitBranch,
    left: "71%",
    top: "18%",
  },
  {
    name: "ACTION",
    icon: Send,
    left: "90%",
    top: "46%",
  },
];

export default function AutomationNetwork() {
  return (
    <section className="relative overflow-hidden bg-[#020203] py-32 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/[0.07] blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[850px] text-center">
          <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/55">
            02 / Autonomous Network
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Intelligence in motion.
          </h2>

          <p className="mx-auto mt-7 max-w-[670px] text-base leading-8 text-[#D5CEDF]/58">
            Every signal can trigger an intelligent chain
            connecting enterprise data, AI reasoning,
            workflow logic and automated actions.
          </p>
        </div>

        <div className="relative mt-20 hidden h-[520px] overflow-hidden rounded-[40px] border border-white/[0.07] bg-[#060609] md:block">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(rgba(167,139,250,.16) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 500"
          >
            <path
              d="M80 250 C160 250 190 120 290 120 C390 120 400 250 500 250 C600 250 620 120 710 120 C810 120 820 250 920 250"
              fill="none"
              stroke="rgba(167,139,250,.18)"
              strokeWidth="1.5"
              strokeDasharray="5 8"
            />
          </svg>

          <motion.div
            animate={{
              offsetDistance: [
                "0%",
                "100%",
              ],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              offsetPath:
                'path("M80 250 C160 250 190 120 290 120 C390 120 400 250 500 250 C600 250 620 120 710 120 C810 120 820 250 920 250")',
            }}
            className="absolute left-0 top-0 h-3 w-3 rounded-full bg-violet-200 shadow-[0_0_25px_rgba(196,181,253,1)]"
          />

          <motion.div
            animate={{
              offsetDistance: [
                "0%",
                "100%",
              ],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
              delay: 2.3,
            }}
            style={{
              offsetPath:
                'path("M80 250 C160 250 190 120 290 120 C390 120 400 250 500 250 C600 250 620 120 710 120 C810 120 820 250 920 250")',
            }}
            className="absolute left-0 top-0 h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_20px_rgba(232,121,249,.8)]"
          />

          {nodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <motion.div
                key={node.name}
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4 + index * 0.4,
                  repeat: Infinity,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: node.left,
                  top: node.top,
                }}
              >
                <div className="flex h-[110px] w-[110px] flex-col items-center justify-center rounded-[28px] border border-violet-300/15 bg-[#0B0910]/90 backdrop-blur-xl">
                  <Icon
                    size={20}
                    className="text-violet-300"
                  />

                  <p className="mt-4 text-[8px] tracking-[0.22em] text-[#DCD4E8]/45">
                    {node.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 grid gap-3 md:hidden">
          {nodes.map((node) => {
            const Icon = node.icon;

            return (
              <div
                key={node.name}
                className="flex items-center gap-5 rounded-2xl border border-white/[0.07] bg-[#08080C] p-5"
              >
                <Icon
                  size={18}
                  className="text-violet-300"
                />

                <span className="text-xs tracking-[0.2em] text-white/50">
                  {node.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}