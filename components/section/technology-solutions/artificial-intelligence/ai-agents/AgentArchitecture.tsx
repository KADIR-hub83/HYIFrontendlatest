"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Goal,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const layers = [
  {
    number: "01",
    name: "Objective",
    text: "Define the mission and operational constraints.",
    icon: Goal,
  },
  {
    number: "02",
    name: "Reasoning",
    text: "Interpret context and determine the next best action.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    name: "Memory",
    text: "Retrieve relevant enterprise knowledge and history.",
    icon: Database,
  },
  {
    number: "04",
    name: "Tools",
    text: "Use approved systems, APIs and applications.",
    icon: Wrench,
  },
  {
    number: "05",
    name: "Guardrails",
    text: "Validate permissions, policies and action boundaries.",
    icon: ShieldCheck,
  },
];

export default function AgentArchitecture() {
  return (
    <section className="bg-[#020203] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[850px] text-center">
          <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/55">
            04 / Agent Architecture
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            The anatomy of
            <span className="block text-[#C5B7D7]/58">
              an intelligent agent.
            </span>
          </h2>
        </div>

        <div className="relative mx-auto mt-24 max-w-[1100px]">
          {layers.map((layer, index) => {
            const Icon = layer.icon;

            return (
              <motion.div
                key={layer.name}
                initial={{
                  opacity: 0,
                  x: index % 2 ? 40 : -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                className="group grid gap-6 border-t border-white/[0.07] py-8 md:grid-cols-[80px_1fr_1fr] md:items-center"
              >
                <span className="text-[9px] text-white/20">
                  {layer.number}
                </span>

                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-500/[0.06]">
                    <Icon
                      size={18}
                      className="text-violet-300"
                    />
                  </div>

                  <h3 className="text-2xl font-medium text-[#F1EBF7]">
                    {layer.name}
                  </h3>
                </div>

                <p className="max-w-[460px] text-sm leading-7 text-[#CEC7D7]/50">
                  {layer.text}
                </p>
              </motion.div>
            );
          })}

          <div className="border-t border-white/[0.07]" />
        </div>
      </div>
    </section>
  );
}