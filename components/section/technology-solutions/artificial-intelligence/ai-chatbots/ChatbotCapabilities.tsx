"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Languages,
  MessagesSquare,
  Search,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    title: "Natural Conversations",
    text: "Deliver fluid multi-turn experiences that understand intent, context and conversational history.",
    icon: MessagesSquare,
    span: "lg:col-span-2",
  },
  {
    title: "Enterprise Knowledge",
    text: "Ground responses in trusted company data and knowledge.",
    icon: Search,
    span: "",
  },
  {
    title: "Multilingual Intelligence",
    text: "Communicate across languages while maintaining conversational context.",
    icon: Languages,
    span: "",
  },
  {
    title: "Agentic Automation",
    text: "Allow AI assistants to use tools, APIs and workflows to complete tasks.",
    icon: Bot,
    span: "lg:col-span-2",
  },
  {
    title: "Persistent Memory",
    text: "Maintain useful context across complex, multi-step interactions.",
    icon: BrainCircuit,
    span: "lg:col-span-2",
  },
  {
    title: "Enterprise Guardrails",
    text: "Control responses, access, data handling and AI behavior.",
    icon: ShieldCheck,
    span: "",
  },
];

export default function ChatbotCapabilities() {
  return (
    <section className="border-y border-white/[0.06] bg-[#060609] py-32 md:py-44">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <span className="text-[10px] uppercase tracking-[0.4em] text-purple-300/50">
          03 / Capabilities
        </span>

        <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row">
          <h2 className="max-w-[750px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            More than a chatbot.
            <span className="block text-white/30">
              An intelligent operator.
            </span>
          </h2>

          <p className="max-w-[470px] text-base leading-8 text-white/50">
            Build assistants capable of answering questions, discovering
            knowledge, executing workflows and supporting customers across the
            complete conversation lifecycle.
          </p>
        </div>

        <div className="mt-20 grid auto-rows-[330px] gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 0.99 }}
                className={`group relative overflow-hidden rounded-[30px] border border-white/[0.07] bg-[#0a0a0e] p-8 ${item.span}`}
              >
                <div className="absolute right-[-80px] top-[-80px] h-[250px] w-[250px] rounded-full bg-purple-500/[0.07] blur-[80px] transition duration-700 group-hover:bg-purple-500/[0.15]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/15 bg-purple-500/[0.07]">
                    <Icon size={19} className="text-purple-300" />
                  </div>

                  <div>
                    <span className="text-[9px] text-white/20">
                      0{i + 1}
                    </span>

                    <h3 className="mt-3 text-2xl font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[570px] text-sm leading-7 text-white/45">
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