"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Database,
  FileBarChart,
  Search,
  Sparkles,
} from "lucide-react";

const stages = [
  {
    number: "01",
    Icon: Database,
    title: "Business Data",
    description:
      "Operational systems produce transactions, events, customer activity and performance measurements.",
  },
  {
    number: "02",
    Icon: FileBarChart,
    title: "Reporting Layer",
    description:
      "Trusted measures organize raw information into comparable business performance.",
  },
  {
    number: "03",
    Icon: Search,
    title: "Signal Detection",
    description:
      "Trends, deviations, exceptions and relationships are identified for investigation.",
  },
  {
    number: "04",
    Icon: BrainCircuit,
    title: "Interpretation",
    description:
      "The signal is evaluated against context, history, targets and relevant dimensions.",
  },
  {
    number: "05",
    Icon: Sparkles,
    title: "Business Insight",
    description:
      "Evidence is translated into an understandable observation that can support a decision.",
  },
];

export default function InsightCommandCenter() {
  return (
    <section
      id="insight-system"
      className="relative border-b border-white/[0.06] bg-[#050505] py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[900px] text-center"
        >
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9575ed]">
            01 / INSIGHT SYSTEM
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Data is not
            <span className="text-white/25"> automatically </span>
            insight.
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-[10px] leading-7 text-white/42">
            Reporting creates structure around business information. Insight
            emerges when that information is interpreted in context—compared
            with targets, history, segments, expectations or other meaningful
            reference points.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-[5%] right-[5%] top-[48px] hidden h-px bg-gradient-to-r from-transparent via-[#7046e6]/30 to-transparent lg:block" />

          <motion.div
            animate={{ left: ["5%", "94%"] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[46px] z-20 hidden h-[5px] w-[5px] rounded-full bg-[#b49df4] shadow-[0_0_20px_#7046e6] lg:block"
          />

          <div className="grid gap-4 lg:grid-cols-5">
            {stages.map((stage, index) => {
              const Icon = stage.Icon;

              return (
                <motion.article
                  key={stage.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -7 }}
                    className="relative min-h-[330px] overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#080808] p-6 transition-colors hover:border-[#7046e6]/30"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#7046e6]/[0.07]">
                        <Icon
                          size={16}
                          strokeWidth={1.3}
                          className="text-[#9b7bf0]"
                        />
                      </div>

                      <span className="font-mono text-[5px] text-white/17">
                        {stage.number}
                      </span>
                    </div>

                    <h3 className="mt-12 text-[18px] font-medium tracking-[-0.03em]">
                      {stage.title}
                    </h3>

                    <p className="mt-5 text-[8px] leading-6 text-white/34">
                      {stage.description}
                    </p>

                    <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: index * 0.12,
                        }}
                        className="h-full bg-gradient-to-r from-[#7046e6] to-transparent"
                      />
                    </div>
                  </motion.div>

                  {index < stages.length - 1 && (
                    <ArrowRight
                      size={11}
                      className="absolute -right-[8px] top-[44px] z-20 hidden text-[#7046e6] lg:block"
                    />
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Observation",
              text: "Revenue increased 12% compared with the previous reporting period.",
            },
            {
              title: "Interpretation",
              text: "Most of the movement came from one region and a specific customer segment.",
            },
            {
              title: "Insight",
              text: "Growth is concentrated rather than broad-based, changing where management attention may be required.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[22px] border border-[#7046e6]/15 bg-[#7046e6]/[0.025] p-6"
            >
              <div className="flex items-center gap-3">
                <Activity size={11} className="text-[#7046e6]" />

                <span className="font-mono text-[6px] tracking-[0.17em] text-[#9c7cf0]">
                  {item.title.toUpperCase()}
                </span>
              </div>

              <p className="mt-5 text-[8px] leading-6 text-white/40">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}