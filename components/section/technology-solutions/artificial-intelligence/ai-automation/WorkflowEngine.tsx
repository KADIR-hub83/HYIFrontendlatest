"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Check,
  Database,
  FileSearch,
  Mail,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    title: "Event received",
    sub: "New enterprise request",
    icon: Mail,
  },
  {
    title: "Context collected",
    sub: "CRM + ERP + customer data",
    icon: Database,
  },
  {
    title: "AI reasoning",
    sub: "Interpret & determine action",
    icon: Bot,
  },
  {
    title: "Validation",
    sub: "Business rules verified",
    icon: FileSearch,
  },
  {
    title: "Action executed",
    sub: "Workflow completed",
    icon: Check,
  },
];

export default function WorkflowEngine() {
  return (
    <section className="relative overflow-hidden bg-[#020203] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/55">
            04 / Workflow Engine
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            One event.
            <span className="block bg-gradient-to-r from-[#EADFFF] to-[#8D6AFF] bg-clip-text text-transparent">
              Entire process automated.
            </span>
          </h2>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-[8%] right-[8%] top-[55px] hidden h-px bg-gradient-to-r from-transparent via-violet-400/35 to-transparent lg:block" />

          <div className="grid gap-4 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
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
                    delay: index * 0.14,
                  }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    className="relative min-h-[280px] overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#08080C] p-6"
                  >
                    <motion.div
                      animate={
                        index === 2
                          ? {
                              boxShadow: [
                                "0 0 0 rgba(139,92,246,0)",
                                "0 0 45px rgba(139,92,246,.25)",
                                "0 0 0 rgba(139,92,246,0)",
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-violet-300/20 bg-violet-500/[0.08]"
                    >
                      <Icon
                        size={18}
                        className="text-violet-300"
                      />
                    </motion.div>

                    <p className="mt-16 text-[8px] uppercase tracking-[0.28em] text-violet-200/35">
                      STEP 0{index + 1}
                    </p>

                    <h3 className="mt-3 text-xl font-medium text-[#F1EBF8]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#CDC6D6]/45">
                      {step.sub}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}