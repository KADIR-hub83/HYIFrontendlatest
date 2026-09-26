"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, Settings, ShieldCheck, Users } from "lucide-react";

const layers = [
  {
    Icon: Users,
    title: "Business",
    text: "Priorities, outcomes and product ownership.",
  },
  {
    Icon: Code2,
    title: "Engineering",
    text: "Applications, platforms, data and AI delivery.",
  },
  {
    Icon: ShieldCheck,
    title: "Governance",
    text: "Policy, risk, architecture and security controls.",
  },
  {
    Icon: Settings,
    title: "Operations",
    text: "Reliability, observability, support and optimization.",
  },
];

export default function OperatingModel() {
  return (
    <section className="bg-[#030303] py-28 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="font-mono text-[8px] tracking-[0.28em] text-[#9878ef]">
              09 / OPERATING MODEL
            </p>
            <h2 className="mt-6 text-5xl font-medium leading-[.95] tracking-[-0.055em] md:text-7xl">
              Architecture needs
              <span className="block text-[#7046e6]">an organization.</span>
            </h2>
            <p className="mt-8 text-[14px] leading-8 text-white/[0.5]">
              Sustainable AI cloud adoption depends on clear responsibilities
              across business teams, engineering, security, architecture,
              finance and operations.
            </p>
          </div>

          <div className="relative rounded-[34px] border border-white/[0.08] bg-[#070707] p-6 md:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {layers.map(({ Icon, title, text }, index) => (
                <motion.div
                  key={title}
                  whileHover={{ scale: 1.015 }}
                  className="min-h-[190px] rounded-[22px] border border-white/[0.07] bg-[#050505] p-6"
                >
                  <Icon size={17} className="text-[#9878ef]" />
                  <p className="mt-7 text-[17px]">{title}</p>
                  <p className="mt-3 text-[11px] leading-6 text-white/[0.4]">{text}</p>
                  <span className="mt-6 block font-mono text-[7px] text-[#7046e6]">
                    LAYER 0{index + 1}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mx-auto mt-4 flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.07] px-5 py-3">
              <BrainCircuit size={13} className="text-[#a98cf4]" />
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.4]">
                SHARED AI CLOUD OPERATING MODEL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}