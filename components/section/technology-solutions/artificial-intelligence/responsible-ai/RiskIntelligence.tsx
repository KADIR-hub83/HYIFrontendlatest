"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Radar } from "lucide-react";

const risks = [
  ["Bias exposure", 18, "LOW"],
  ["Privacy risk", 12, "LOW"],
  ["Hallucination risk", 31, "CONTROLLED"],
  ["Model drift", 24, "LOW"],
  ["Security exposure", 9, "LOW"],
];

export default function RiskIntelligence() {
  return (
    <section className="bg-[#050505] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[38px] border border-white/[0.08] bg-[#0b0a09] p-8 md:p-12">
            <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
              Risk intelligence
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              See risk before
              <span className="block text-white/55">users feel it.</span>
            </h2>

            <p className="mt-8 max-w-[580px] text-[15px] leading-8 text-white/65">
              Evaluate AI systems across risk dimensions and surface issues
              before they become production incidents.
            </p>

            <div className="mt-14 rounded-[25px] border border-white/[0.08] bg-black/20 p-6">
              <div className="flex items-center gap-3">
                <Radar size={16} className="text-violet-100/70" />

                <span className="text-[9px] tracking-[0.2em] text-white/45">
                  RISK SCAN / ACTIVE
                </span>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative mx-auto mt-9 h-[220px] w-[220px] rounded-full border border-white/[0.08]"
              >
                <div className="absolute inset-[30px] rounded-full border border-white/[0.07]" />
                <div className="absolute inset-[65px] rounded-full border border-violet-100/20 bg-violet-200/[0.03]" />

                <div className="absolute left-1/2 top-1/2 h-px w-1/2 origin-left bg-gradient-to-r from-violet-100/80 to-transparent" />
              </motion.div>
            </div>
          </div>

          <div className="rounded-[38px] border border-white/[0.08] bg-gradient-to-b from-[#12100d] to-[#080807] p-8 md:p-11">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] tracking-[0.25em] text-white/35">
                  MODEL RISK PROFILE
                </p>

                <p className="mt-3 text-2xl text-white/85">
                  Customer Intelligence v8
                </p>
              </div>

              <span className="rounded-full bg-emerald-400/[0.09] px-4 py-2 text-[9px] text-emerald-300/65">
                LOW RISK
              </span>
            </div>

            <div className="mt-12 space-y-8">
              {risks.map(([label, score, status], index) => (
                <div key={label as string}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {Number(score) > 30 ? (
                        <AlertTriangle
                          size={13}
                          className="text-amber-300/70"
                        />
                      ) : (
                        <CheckCircle2
                          size={13}
                          className="text-emerald-300/60"
                        />
                      )}

                      <span className="text-sm text-white/60">{label}</span>
                    </div>

                    <span className="text-[8px] tracking-[0.18em] text-white/35">
                      {status}
                    </span>
                  </div>

                  <div className="mt-4 h-[4px] overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${score}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.1,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-violet-100"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3">
              <div className="rounded-[20px] border border-white/[0.07] bg-black/20 p-5">
                <p className="text-[8px] text-white/35">POLICIES PASSED</p>
                <p className="mt-4 text-3xl font-light text-white/85">42/44</p>
              </div>

              <div className="rounded-[20px] border border-white/[0.07] bg-black/20 p-5">
                <p className="text-[8px] text-white/35">OPEN REVIEWS</p>
                <p className="mt-4 text-3xl font-light text-white/85">02</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}