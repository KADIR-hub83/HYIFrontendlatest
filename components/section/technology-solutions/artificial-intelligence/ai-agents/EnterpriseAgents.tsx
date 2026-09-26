"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Code2,
  Headphones,
  Search,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";

const useCases = [
  {
    title: "Research Agents",
    text: "Collect and synthesize information across approved knowledge sources.",
    icon: Search,
  },
  {
    title: "Customer Agents",
    text: "Understand requests and coordinate actions across customer workflows.",
    icon: Headphones,
  },
  {
    title: "Analytics Agents",
    text: "Investigate business data and surface contextual operational insights.",
    icon: BarChart3,
  },
  {
    title: "Engineering Agents",
    text: "Assist development workflows with code analysis, documentation and task execution.",
    icon: Code2,
  },
  {
    title: "Commerce Agents",
    text: "Support product discovery, operations and intelligent commerce workflows.",
    icon: ShoppingBag,
  },
  {
    title: "Governance Agents",
    text: "Assist monitoring, validation and policy-driven enterprise processes.",
    icon: ShieldCheck,
  },
];

export default function EnterpriseAgents() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07070A] py-32 md:py-44">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/55">
            07 / Enterprise Agents
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            A digital workforce
            <span className="block text-[#C4B6D6]/58">
              built around your business.
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="group relative min-h-[300px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#09090D] p-7"
              >
                <div className="absolute bottom-[-120px] right-[-100px] h-[300px] w-[300px] rounded-full bg-violet-600/[0.06] blur-[100px] transition group-hover:bg-violet-500/[0.14]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-500/[0.07] p-4">
                      <Icon
                        size={19}
                        className="text-violet-300"
                      />
                    </div>

                    <span className="text-[9px] text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium text-[#F3EDF9]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#CEC7D7]/52">
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