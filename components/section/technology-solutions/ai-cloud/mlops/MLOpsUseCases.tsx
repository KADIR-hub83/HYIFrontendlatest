"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Factory,
  Landmark,
  ShoppingBag,
  Workflow,
} from "lucide-react";

const useCases = [
  {
    Icon: Bot,
    title: "Generative AI operations",
    text: "Manage model versions, evaluation workflows and controlled releases for AI-enabled applications and assistants.",
  },
  {
    Icon: ShoppingBag,
    title: "Recommendation systems",
    text: "Operate frequently evolving recommendation models with reproducible experiments and production monitoring.",
  },
  {
    Icon: Landmark,
    title: "Risk models",
    text: "Create traceable model lifecycle processes where version history, validation and controlled deployment are important.",
  },
  {
    Icon: Factory,
    title: "Industrial ML",
    text: "Coordinate training and production monitoring for models used across operational and equipment intelligence workflows.",
  },
  {
    Icon: BrainCircuit,
    title: "Custom enterprise models",
    text: "Standardize the path from experimentation to production for organization-specific machine learning systems.",
  },
  {
    Icon: Workflow,
    title: "Multi-model platforms",
    text: "Create common lifecycle patterns for teams operating multiple models across products, environments and use cases.",
  },
];

export default function MLOpsUseCases() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            11 / WHERE MLOPS APPLIES
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            When models become
            <span className="text-[#7046e6]"> production assets.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -7 }}
              className="group min-h-[340px] rounded-[28px] border border-white/[0.07] bg-[#030303] p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/[0.07]">
                  <Icon size={16} className="text-[#a98cf4]" />
                </div>

                <ArrowUpRight
                  size={14}
                  className="text-white/[0.2] transition group-hover:text-[#9878ef]"
                />
              </div>

              <p className="mt-12 font-mono text-[6px] text-[#7046e6]">
                USE CASE 0{index + 1}
              </p>

              <h3 className="mt-4 text-2xl">{title}</h3>

              <p className="mt-5 text-[10px] leading-6 text-white/[0.4]">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}