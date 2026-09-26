"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ChevronRight, Eye } from "lucide-react";

const factors = [
  ["Account history", 92],
  ["Recent activity", 78],
  ["Transaction pattern", 63],
  ["Context signal", 49],
  ["Historical trend", 36],
];

export default function ExplainabilityLab() {
  return (
    <section className="border-y border-white/[0.06] bg-[#090806] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[38px] border border-white/[0.08] bg-[#0b0a09] p-8 md:p-12">
            <Eye size={24} strokeWidth={1.2} className="text-violet-100/70" />

            <h2 className="mt-10 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              Understand the
              <span className="block text-white/55">reason behind AI.</span>
            </h2>

            <p className="mt-8 max-w-[600px] text-[15px] leading-8 text-white/65">
              Explainability tools help teams inspect important model signals
              and communicate how AI-generated outcomes are produced.
            </p>
          </div>

          <div className="rounded-[38px] border border-white/[0.08] bg-gradient-to-b from-[#12100d] to-[#080807] p-8 md:p-11">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BrainCircuit size={15} className="text-violet-100/70" />

                <span className="text-[8px] tracking-[0.22em] text-white/40">
                  DECISION EXPLANATION
                </span>
              </div>

              <span className="text-[8px] text-emerald-300/60">
                CONFIDENCE 94.8%
              </span>
            </div>

            <div className="mt-12 space-y-7">
              {factors.map(([factor, score], index) => (
                <div key={factor as string}>
                  <div className="mb-3 flex justify-between text-xs">
                    <span className="text-white/58">{factor}</span>
                    <span className="text-white/35">{score}%</span>
                  </div>

                  <div className="h-[5px] overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${score}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.3,
                        delay: index * 0.1,
                      }}
                      className="h-full bg-gradient-to-r from-violet-600 to-violet-100"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-between rounded-[20px] border border-white/[0.07] bg-black/20 p-5">
              <div>
                <p className="text-[8px] tracking-[0.2em] text-white/35">
                  OUTCOME
                </p>

                <p className="mt-2 text-sm text-white/75">
                  Decision ready for human review
                </p>
              </div>

              <ChevronRight size={17} className="text-white/35" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}