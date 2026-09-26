"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Eye,
  Network,
  Puzzle,
  ShieldCheck,
} from "lucide-react";

const data = [
  {
    icon: BrainCircuit,
    title: "Autonomous Reasoning",
    text: "Agents interpret objectives, evaluate context and determine the next action required to progress a task.",
  },
  {
    icon: Network,
    title: "Multi-Agent Collaboration",
    text: "Coordinate specialized agents across research, analysis, validation and execution workflows.",
  },
  {
    icon: Database,
    title: "Enterprise Context",
    text: "Ground agent behavior in business data, documents, knowledge systems and application context.",
  },
  {
    icon: Puzzle,
    title: "Tool Execution",
    text: "Connect agents with approved APIs, enterprise tools and workflow systems to perform useful actions.",
  },
  {
    icon: Eye,
    title: "Multimodal Intelligence",
    text: "Design agent experiences that can work across text, documents, images and structured information.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled Autonomy",
    text: "Introduce validation, permissions and human checkpoints around high-impact agent actions.",
  },
];

export default function AgentCapabilities() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07070A] py-32 md:py-44">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/55">
              03 / Agent Capabilities
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              Intelligence designed
              <span className="block text-[#C5B7D7]/58">
                to get work done.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-[500px] text-base leading-8 text-[#D5CEDD]/58">
              Agentic systems combine reasoning, memory,
              tools and orchestration to move beyond
              conversational AI toward goal-oriented
              enterprise execution.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[34px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative min-h-[360px] overflow-hidden bg-[#09090D] p-8"
              >
                <div className="absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-violet-600/[0.05] blur-[90px] transition duration-500 group-hover:bg-violet-500/[0.14]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-500/[0.07]">
                      <Icon
                        size={20}
                        className="text-violet-300"
                      />
                    </div>

                    <span className="text-[9px] text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium text-[#F4EFFA]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[#CEC7D7]/52">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}