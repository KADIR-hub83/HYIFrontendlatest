"use client";

import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Headphones,
  PackageCheck,
  ShieldCheck,
  UserRoundCheck,
  Workflow,
} from "lucide-react";

const useCases = [
  {
    title: "Finance Operations",
    text: "Invoice processing, validation, reconciliation and approval workflows.",
    icon: BadgeDollarSign,
  },
  {
    title: "Customer Operations",
    text: "Intelligent routing, response workflows and automated service actions.",
    icon: Headphones,
  },
  {
    title: "Supply Chain",
    text: "Automate operational events, inventory actions and exception handling.",
    icon: PackageCheck,
  },
  {
    title: "HR Operations",
    text: "Streamline onboarding, employee workflows and internal service requests.",
    icon: UserRoundCheck,
  },
  {
    title: "Compliance",
    text: "Automate validation, monitoring and policy-driven operational workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Enterprise IT",
    text: "Connect service requests, systems and AI-assisted remediation workflows.",
    icon: Workflow,
  },
];

export default function EnterpriseAutomation() {
  return (
    <section className="bg-[#020203] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[850px] text-center">
          <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/55">
            06 / Enterprise Automation
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            One intelligence layer.
            <span className="block text-[#C3B5D5]/55">
              Across your operations.
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
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative min-h-[300px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#08080C] p-7"
              >
                <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-violet-600/[0.07] blur-[100px] transition group-hover:bg-violet-500/[0.15]" />

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