"use client";

import { motion } from "framer-motion";

import {
  Bot,
  BrainCircuit,
  FileCheck2,
  GitBranch,
  MessagesSquare,
  RefreshCcw,
} from "lucide-react";

const capabilities = [
  {
    title: "Intelligent Workflows",
    text: "Build dynamic workflows that combine business rules, AI reasoning and enterprise actions.",
    icon: GitBranch,
  },
  {
    title: "AI Agent Automation",
    text: "Deploy task-oriented AI agents capable of interpreting context and coordinating multi-step processes.",
    icon: Bot,
  },
  {
    title: "Document Automation",
    text: "Extract, classify, validate and route information across document-heavy business processes.",
    icon: FileCheck2,
  },
  {
    title: "Conversational Automation",
    text: "Connect conversational AI with backend systems so interactions can trigger real business actions.",
    icon: MessagesSquare,
  },
  {
    title: "Decision Automation",
    text: "Combine predictive models, enterprise data and decision rules to accelerate repetitive decisions.",
    icon: BrainCircuit,
  },
  {
    title: "Process Orchestration",
    text: "Coordinate systems, APIs, teams and workflows through a unified intelligent automation layer.",
    icon: RefreshCcw,
  },
];

export default function AutomationCapabilities() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07070A] py-32 md:py-44">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/55">
              03 / Capabilities
            </span>

            <h2 className="mt-7 max-w-[760px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              Automate beyond
              <span className="block text-[#C5B6D8]/60">
                repetitive tasks.
              </span>
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-[500px] text-base leading-8 text-[#D6CFDF]/58">
              Move from simple task automation toward
              intelligent systems capable of interpreting,
              deciding, coordinating and executing.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative min-h-[350px] overflow-hidden bg-[#09090D] p-8"
              >
                <div className="absolute right-[-100px] top-[-100px] h-[270px] w-[270px] rounded-full bg-violet-600/[0.06] blur-[90px] transition duration-500 group-hover:bg-violet-500/[0.15]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
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

                    <p className="mt-5 text-sm leading-7 text-[#CEC7D7]/55">
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