"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  Database,
  RefreshCcw,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const cases = [
  {
    Icon: BrainCircuit,
    title: "Enterprise AI adoption",
    text: "Create the cloud, data, compute and governance foundations required to move AI initiatives from experimentation toward repeatable production delivery.",
  },
  {
    Icon: RefreshCcw,
    title: "Application modernization",
    text: "Determine which applications should migrate, re-platform, refactor or remain where they are while preparing the portfolio for AI-enabled experiences.",
  },
  {
    Icon: Database,
    title: "Data platform transformation",
    text: "Align cloud architecture with the information pipelines, governance and access patterns required by analytics and AI systems.",
  },
  {
    Icon: Building2,
    title: "Hybrid transformation",
    text: "Coordinate public cloud, private environments and edge infrastructure around workload-specific performance, sovereignty and integration needs.",
  },
  {
    Icon: ShieldCheck,
    title: "Governed AI expansion",
    text: "Establish security, policy, model governance and operational controls before AI usage expands across teams and business processes.",
  },
  {
    Icon: Workflow,
    title: "Cloud operating model",
    text: "Clarify platform ownership, engineering standards, financial accountability and operational responsibilities as cloud adoption scales.",
  },
];

export default function StrategyUseCases() {
  return (
    <section className="bg-[#030303] py-28 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="font-mono text-[8px] tracking-[0.28em] text-[#9878ef]">
            11 / WHERE IT APPLIES
          </p>
          <h2 className="mt-6 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Transformation moments
            <span className="block text-[#7046e6]">that need direction.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              whileHover={{ y: -6 }}
              className="group min-h-[350px] rounded-[28px] border border-white/[0.07] bg-[#080808] p-7"
            >
              <div className="flex justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/[0.08]">
                  <Icon size={17} className="text-[#a98cf4]" />
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-white/[0.2] transition group-hover:text-[#9878ef]"
                />
              </div>

              <span className="mt-9 block font-mono text-[7px] text-[#7046e6]">
                USE CASE 0{index + 1}
              </span>
              <h3 className="mt-4 text-[23px] leading-tight">{title}</h3>
              <p className="mt-5 text-[13px] leading-7 text-white/[0.46]">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}