"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  Database,
  FileBarChart2,
  ShieldCheck,
  Users,
} from "lucide-react";

const principles = [
  {
    Icon: Users,
    title: "Decision-first discovery",
    text: "Begin with the audience, recurring business questions and decisions the reporting experience needs to support.",
  },
  {
    Icon: BookOpenCheck,
    title: "Metric definition",
    text: "Document how important measures are calculated, interpreted, compared and owned across the organization.",
  },
  {
    Icon: Database,
    title: "Trusted data foundation",
    text: "Connect reporting logic to governed, validated and appropriately modeled data rather than disconnected calculations.",
  },
  {
    Icon: FileBarChart2,
    title: "Information hierarchy",
    text: "Present the most important information first and progressively reveal detail as users investigate.",
  },
  {
    Icon: BrainCircuit,
    title: "Insight-oriented analysis",
    text: "Design reporting experiences that help users recognize trends, exceptions, drivers and relevant changes.",
  },
  {
    Icon: ShieldCheck,
    title: "Governed delivery",
    text: "Consider permissions, ownership, refresh behavior, validation and change management as part of the reporting product.",
  },
];

export default function HYIReportingApproach() {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-36">
      <div className="absolute left-[-200px] top-[200px] h-[500px] w-[500px] rounded-full bg-[#7046e6]/[0.06] blur-[160px]" />

      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[7px] tracking-[0.25em] text-[#9575ed]">
              06 / HYI.AI APPROACH
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              Reporting designed
              <span className="block text-[#7046e6]">
                around decisions.
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-[10px] leading-7 text-white/42">
              HYI.AI can structure reporting engagements around the complete
              information lifecycle: business requirements, metric definitions,
              data readiness, reporting architecture, visual communication and
              production governance.
            </p>

            <p className="mt-5 max-w-[520px] text-[10px] leading-7 text-white/42">
              The objective is not to maximize the number of charts. It is to
              reduce the effort required to understand performance while
              preserving enough context for users to investigate what matters.
            </p>

            <div className="mt-9 flex items-center gap-3 text-[7px] text-[#9979ef]">
              DATA
              <ArrowRight size={9} />
              REPORT
              <ArrowRight size={9} />
              INSIGHT
              <ArrowRight size={9} />
              DECISION
            </div>
          </motion.div>

          <div className="grid gap-3 md:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.Icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(112,70,230,.35)",
                  }}
                  className="min-h-[250px] rounded-[24px] border border-white/[0.07] bg-[#080808] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7046e6]/20 bg-[#7046e6]/[0.06]">
                    <Icon size={15} className="text-[#9979ef]" />
                  </div>

                  <p className="mt-8 font-mono text-[5px] tracking-[0.15em] text-[#8f6dec]">
                    PRINCIPLE 0{index + 1}
                  </p>

                  <h3 className="mt-3 text-[16px] font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[8px] leading-6 text-white/34">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-24 overflow-hidden rounded-[32px] border border-[#7046e6]/20 bg-[#7046e6]/[0.025]">
          <div className="border-b border-[#7046e6]/15 p-6">
            <p className="font-mono text-[6px] tracking-[0.18em] text-[#9878ef]">
              REPORTING OPERATING MODEL
            </p>
          </div>

          <div className="grid md:grid-cols-4">
            {[
              [
                "01",
                "Define",
                "Audience, questions, KPIs and business definitions.",
              ],
              [
                "02",
                "Engineer",
                "Sources, transformations, semantic models and validation.",
              ],
              [
                "03",
                "Communicate",
                "Reports, hierarchy, visual context and interaction.",
              ],
              [
                "04",
                "Improve",
                "Usage feedback, new questions and evolving requirements.",
              ],
            ].map((item, index) => (
              <motion.div
                key={item[1]}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="border-b border-[#7046e6]/10 p-7 md:border-b-0 md:border-r last:border-r-0"
              >
                <span className="font-mono text-[5px] text-[#8f6dec]">
                  {item[0]}
                </span>

                <h3 className="mt-6 text-xl">{item[1]}</h3>

                <p className="mt-4 text-[8px] leading-6 text-white/32">
                  {item[2]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}