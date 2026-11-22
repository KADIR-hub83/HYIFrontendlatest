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
    <section className="bg-[#030303] ">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
 
          <h2 className="mt-2 hyi-h1 hyi-white">
            Transformation moments
            <span className="block hyi-blue">that need direction.</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              whileHover={{ y: -6 }}
              className="group  rounded-[28px] border border-white/[0.07] bg-[#080808] p-7"
            >
              <div className="flex justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/[0.08]">
                  <Icon size={17} className="hyi-blue-icon" />
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-white/[0.2] transition group-hover:text-[#9878ef]"
                />
              </div>

  
              <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>
              <p className="mt-2 hyi-p">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}