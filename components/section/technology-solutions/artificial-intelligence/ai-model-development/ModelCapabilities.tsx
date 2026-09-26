"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Eye,
  FileSearch,
  Languages,
  Network,
} from "lucide-react";

const capabilities = [
  {
    Icon: BrainCircuit,
    title: "Custom AI Models",
    text: "Purpose-built models engineered around your proprietary data and business requirements.",
  },
  {
    Icon: Bot,
    title: "LLM Fine-Tuning",
    text: "Adapt foundation models for specialized enterprise language, knowledge and workflows.",
  },
  {
    Icon: Eye,
    title: "Vision Models",
    text: "Build detection, classification and visual intelligence models for real-world environments.",
  },
  {
    Icon: Languages,
    title: "Language Models",
    text: "Develop models for classification, extraction, semantic understanding and generation.",
  },
  {
    Icon: FileSearch,
    title: "Domain Intelligence",
    text: "Train AI to understand specialized documents, terminology, data and industry context.",
  },
  {
    Icon: Network,
    title: "Multimodal Models",
    text: "Combine text, images and structured signals into unified intelligent systems.",
  },
];

export default function ModelCapabilities() {
  return (
    <section className="bg-[#020203] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
          04 / Model Capabilities
        </span>

        <h2 className="mt-7 max-w-[1050px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
          Models designed for
          <span className="block text-white/55">your competitive advantage.</span>
        </h2>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[34px] border border-white/[0.08] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: index * 0.07 }}
              className="group relative min-h-[360px] bg-[#08080b] p-8"
            >
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-400/[0.04] blur-[80px] transition duration-500 group-hover:bg-violet-400/[0.10]" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-200/15 bg-violet-200/[0.04]">
                    <Icon size={20} className="text-violet-100/80" />
                  </div>

                  <span className="text-[8px] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl text-white/88">{title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/60">{text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}