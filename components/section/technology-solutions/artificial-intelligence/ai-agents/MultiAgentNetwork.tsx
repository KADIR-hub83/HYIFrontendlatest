"use client";

import { motion } from "framer-motion";

import {
  Bot,
  BrainCircuit,
  Database,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const nodes = [
  {
    name: "Research",
    icon: Search,
    x: "15%",
    y: "26%",
  },
  {
    name: "Data",
    icon: Database,
    x: "17%",
    y: "72%",
  },
  {
    name: "Orchestrator",
    icon: BrainCircuit,
    x: "50%",
    y: "50%",
  },
  {
    name: "Validator",
    icon: ShieldCheck,
    x: "83%",
    y: "25%",
  },
  {
    name: "Executor",
    icon: Wrench,
    x: "84%",
    y: "72%",
  },
];

export default function MultiAgentNetwork() {
  return (
    <section className="relative overflow-hidden bg-[#020203] py-32 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/[0.07] blur-[190px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-[9px] uppercase tracking-[0.43em] text-violet-300/55">
            02 / Multi-Agent Intelligence
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Not one AI.
            <span className="block bg-gradient-to-r from-[#EBDFFF] to-[#8964FF] bg-clip-text text-transparent">
              An entire intelligence network.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[700px] text-base leading-8 text-[#D5CDDE]/58">
            Specialist agents can research, retrieve context,
            validate decisions and execute actions while an
            orchestrator coordinates the overall mission.
          </p>
        </div>

        <div className="relative mt-20 hidden h-[650px] overflow-hidden rounded-[40px] border border-white/[0.07] bg-[#060609] md:block">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(rgba(167,139,250,.16) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            {[
              "M500 300 L150 155",
              "M500 300 L170 430",
              "M500 300 L830 150",
              "M500 300 L840 430",
            ].map((path) => (
              <path
                key={path}
                d={path}
                stroke="rgba(167,139,250,.2)"
                strokeWidth="1"
                strokeDasharray="5 8"
              />
            ))}
          </svg>

          {nodes.map((node, index) => {
            const Icon = node.icon;
            const center = index === 2;

            return (
              <motion.div
                key={node.name}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: node.x,
                  top: node.y,
                }}
              >
                {center && (
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute inset-[-30px] rounded-full border border-violet-300/30"
                  />
                )}

                <div
                  className={`relative flex flex-col items-center justify-center border backdrop-blur-xl ${
                    center
                      ? "h-[165px] w-[165px] rounded-full border-violet-300/30 bg-violet-500/10"
                      : "h-[125px] w-[125px] rounded-[28px] border-white/[0.09] bg-[#0B0910]"
                  }`}
                >
                  <Icon
                    size={center ? 27 : 20}
                    className="text-violet-300"
                  />

                  <p className="mt-4 text-[8px] uppercase tracking-[0.22em] text-white/40">
                    {node.name}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [
                  `${i % 2 === 0 ? 0 : 300}px`,
                  `${i % 2 === 0 ? 300 : 0}px`,
                ],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.35,
              }}
              className="absolute left-[35%] top-[50%] h-1.5 w-1.5 rounded-full bg-violet-200 shadow-[0_0_16px_#c4b5fd]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}