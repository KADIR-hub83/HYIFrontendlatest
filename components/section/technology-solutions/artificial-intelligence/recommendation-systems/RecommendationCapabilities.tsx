"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Layers3,
  RefreshCw,
  Search,
  Target,
} from "lucide-react";

const capabilities = [
  {
    icon: Target,
    title: "1:1 Personalization",
    text: "Tailor products, content, services and experiences to each individual user.",
  },
  {
    icon: Search,
    title: "Similar Item Discovery",
    text: "Surface relevant alternatives using intelligent item representations and similarity models.",
  },
  {
    icon: BrainCircuit,
    title: "Next Best Action",
    text: "Recommend the most relevant next step based on context, intent and business objectives.",
  },
  {
    icon: Layers3,
    title: "Hybrid Ranking",
    text: "Combine collaborative, content-based and contextual signals into intelligent ranking systems.",
  },
  {
    icon: Activity,
    title: "Real-Time Context",
    text: "Adapt recommendations dynamically as user behavior and session intent change.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    text: "Improve recommendation quality as new interactions and feedback signals become available.",
  },
];

export default function RecommendationCapabilities() {
  return (
    <section className="bg-[#020203] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <span className="text-[8px] uppercase tracking-[0.42em] text-[#d9c7f5]/60">
          04 / Capabilities
        </span>

        <h2 className="mt-7 max-w-[1000px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
          Personalization across
          <span className="block text-[#d3c6e2]/65">
            every digital moment.
          </span>
        </h2>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[34px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{
                  delay: index * 0.07,
                }}
                className="group relative min-h-[350px] bg-[#08080b] p-8"
              >
                <div className="absolute right-[-100px] top-[-100px] h-[260px] w-[260px] rounded-full bg-[#ddcaff]/[0.04] blur-[80px] transition duration-500 group-hover:bg-[#ddcaff]/[0.10]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e3d4fa]/15 bg-[#e3d4fa]/[0.05]">
                      <Icon
                        size={19}
                        className="text-[#e4d7f7]"
                      />
                    </div>

                    <span className="text-[8px] text-white/22">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl text-white/85">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-white/58">
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