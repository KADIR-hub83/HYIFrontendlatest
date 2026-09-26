"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Search,
  Sparkles,
} from "lucide-react";

const points = [
  {
    Icon: Database,
    title: "Training Data",
    text: "Prepare reliable datasets for model development and experimentation.",
  },
  {
    Icon: Search,
    title: "Retrieval Data",
    text: "Organize enterprise knowledge for retrieval and AI-assisted experiences.",
  },
  {
    Icon: BrainCircuit,
    title: "ML Features",
    text: "Provide engineered data foundations for predictive machine learning systems.",
  },
  {
    Icon: Sparkles,
    title: "Generative AI",
    text: "Connect AI applications with governed enterprise information.",
  },
];

export default function AIReadyDataSection() {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-28">
      <div className="absolute -right-[300px] top-[15%] h-[750px] w-[750px] rounded-full bg-[#7046e6]/20 blur-[190px]" />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[900px]">
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              08 / AI-READY DATA
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
              AI starts before
              <span className="block text-[#7046e6]">
                the model.
              </span>
            </h2>
          </div>

          <p className="max-w-[500px] text-[13px] leading-7 text-white/[0.5]">
            AI systems depend on accessible, relevant and governed information.
            Building the data foundation first creates stronger conditions for
            machine learning and generative AI initiatives.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-16 min-h-[720px] overflow-hidden rounded-[40px] border border-white/[0.08]"
        >
          <Image
            src="/images/data-platforms/ai-data.webp"
            alt="AI-ready enterprise data platform"
            fill
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/90 via-transparent to-transparent" />

          <div className="relative z-10 flex min-h-[720px] items-end p-6 md:p-10">
            <div className="grid w-full max-w-[900px] gap-3 md:grid-cols-2">
              {points.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-[22px] border border-white/[0.09] bg-black/65 p-6 backdrop-blur-xl"
                >
                  <Icon size={15} className="text-[#a486f0]" />

                  <h3 className="mt-5 text-xl">{title}</h3>

                  <p className="mt-3 text-[11px] leading-6 text-white/[0.48]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}