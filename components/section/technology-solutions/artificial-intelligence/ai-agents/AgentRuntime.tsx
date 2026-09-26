"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useEffect, useState } from "react";

import {
  Bot,
  BrainCircuit,
  CircleDot,
  Terminal,
} from "lucide-react";

const reasoning = [
  {
    agent: "ORCHESTRATOR",
    text: "New objective received: analyze customer expansion opportunity.",
  },
  {
    agent: "PLANNER",
    text: "Breaking objective into research, analysis and execution tasks.",
  },
  {
    agent: "RESEARCH",
    text: "Retrieving relevant market and enterprise context.",
  },
  {
    agent: "DATA",
    text: "Querying customer history and operational records.",
  },
  {
    agent: "ANALYST",
    text: "Evaluating signals and generating decision context.",
  },
  {
    agent: "ORCHESTRATOR",
    text: "Synthesizing specialist agent outputs.",
  },
  {
    agent: "EXECUTOR",
    text: "Recommended action prepared for enterprise workflow.",
  },
  {
    agent: "SYSTEM",
    text: "Mission completed successfully.",
  },
];

export default function AgentRuntime() {
  const [messages, setMessages] = useState([
    reasoning[0],
  ]);

  const [pointer, setPointer] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setMessages((old) =>
        [...old, reasoning[pointer]].slice(-7)
      );

      setPointer(
        (old) => (old + 1) % reasoning.length
      );
    }, 1400);

    return () => clearInterval(timer);
  }, [pointer]);

  return (
    <section
      id="agent-runtime"
      className="border-y border-white/[0.06] bg-[#07070A] py-32 md:py-44"
    >
      <div className="mx-auto grid max-w-[1450px] gap-16 px-5 md:px-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:px-14">
        <div>
          <span className="text-[9px] uppercase tracking-[0.43em] text-violet-300/55">
            01 / Agent Runtime
          </span>

          <h2 className="mt-7 text-5xl font-medium leading-[0.98] tracking-[-0.055em] md:text-7xl">
            Observe an AI
            <span className="block text-[#C7B9D9]/60">
              team thinking.
            </span>
          </h2>

          <p className="mt-8 max-w-[520px] text-base leading-8 text-[#D8D1E1]/58">
            Instead of relying on a single model for every
            task, agentic systems can distribute work across
            specialized agents and coordinate their outputs
            toward a shared objective.
          </p>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#040406]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/50" />
              </div>

              <span className="flex items-center gap-2 text-[8px] tracking-[0.27em] text-white/30">
                <Terminal size={11} />
                AGENT.RUNTIME
              </span>
            </div>

            <span className="flex items-center gap-2 text-[8px] tracking-[0.22em] text-emerald-300/55">
              <CircleDot size={9} />
              LIVE
            </span>
          </div>

          <div className="min-h-[510px] p-7 font-mono md:p-9">
            <div className="mb-8 flex items-center justify-between border-b border-white/[0.05] pb-5">
              <div className="flex items-center gap-3">
                <BrainCircuit
                  size={15}
                  className="text-violet-300"
                />

                <span className="text-[10px] text-violet-200/55">
                  mission://enterprise-intelligence
                </span>
              </div>

              <span className="text-[8px] text-white/20">
                SESSION 0X8F2
              </span>
            </div>

            <div className="space-y-5">
              <AnimatePresence mode="popLayout">
                {messages.map((message, index) => (
                  <motion.div
                    key={`${message.agent}-${index}`}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-[110px_1fr] gap-4"
                  >
                    <span
                      className={
                        message.agent === "SYSTEM"
                          ? "text-[9px] text-emerald-300/65"
                          : "text-[9px] text-violet-300/65"
                      }
                    >
                      {message.agent}
                    </span>

                    <span className="text-[10px] leading-6 text-[#D5CEDD]/48">
                      {message.text}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>

              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
                className="block h-4 w-[6px] bg-violet-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}