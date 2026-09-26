"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  FileSearch,
  ImageIcon,
  Languages,
  Search,
} from "lucide-react";

const cases = [
  {
    Icon: Bot,
    title: "Enterprise AI assistants",
    text: "Host language and reasoning models behind controlled endpoints for internal copilots, customer assistants and AI-enabled enterprise workflows.",
  },
  {
    Icon: Search,
    title: "RAG applications",
    text: "Operate generation, embedding and reranking models as independently scalable services within retrieval-augmented AI architectures.",
  },
  {
    Icon: ImageIcon,
    title: "Vision inference",
    text: "Serve computer-vision models for image classification, detection, analysis and other production visual-intelligence workloads.",
  },
  {
    Icon: BrainCircuit,
    title: "Custom models",
    text: "Deploy organization-specific fine-tuned or proprietary models using runtimes aligned with their framework, memory and compute requirements.",
  },
  {
    Icon: Languages,
    title: "Language processing",
    text: "Host models for summarization, translation, classification, extraction and other language-intensive application services.",
  },
  {
    Icon: FileSearch,
    title: "Private AI workloads",
    text: "Run models within controlled environments where model artifacts, application traffic or enterprise data require stronger infrastructure boundaries.",
  },
];

export default function HostingUseCases() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[950px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            11 / WHERE MODEL HOSTING APPLIES
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            When a model becomes
            <span className="text-[#7046e6]"> part of the product.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -7 }}
              className="group min-h-[350px] rounded-[28px] border border-white/[0.07] bg-[#030303] p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/[0.07]">
                  <Icon size={16} className="text-[#a98cf4]" />
                </div>

                <ArrowUpRight
                  size={14}
                  className="text-white/[0.2] transition group-hover:text-[#a98cf4]"
                />
              </div>

              <span className="mt-12 block font-mono text-[6px] tracking-[0.2em] text-[#7046e6]">
                USE CASE 0{index + 1}
              </span>

              <h3 className="mt-4 text-2xl">{title}</h3>

              <p className="mt-5 text-[11px] leading-6 text-white/[0.4]">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}