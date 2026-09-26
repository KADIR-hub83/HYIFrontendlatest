"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  CircleDot,
  ShieldCheck,
} from "lucide-react";

const models = [
  ["Support LLM", "Production", "Low", "98"],
  ["Vision Model", "Production", "Low", "96"],
  ["Ranking Engine", "Review", "Medium", "87"],
  ["Forecast Model", "Production", "Low", "94"],
];

export default function GovernanceCommandCenter() {
  return (
    <section className="border-y border-white/[0.06] bg-[#090806] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
              Governance command center
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              One view of your
              <span className="block text-white/55">AI responsibility.</span>
            </h2>
          </div>

          <p className="max-w-[600px] text-[15px] leading-8 text-white/65">
            Centralize AI inventory, policy status, risk signals, approvals and
            model governance across the enterprise.
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[38px] border border-white/[0.09] bg-[#060606]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-7 py-6">
            <div className="flex items-center gap-3">
              <ShieldCheck size={14} className="text-violet-100/70" />

              <span className="text-[8px] tracking-[0.25em] text-white/40">
                HYI.AI / GOVERNANCE CONTROL
              </span>
            </div>

            <span className="flex items-center gap-2 text-[7px] tracking-[0.2em] text-emerald-300/60">
              <CircleDot size={9} />
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.25fr_.75fr]">
            <div className="border-b border-white/[0.07] p-6 lg:border-b-0 lg:border-r md:p-9">
              <div className="mb-5 grid grid-cols-[1.4fr_.8fr_.6fr_.4fr] gap-4 px-5 text-[7px] tracking-[0.18em] text-white/25">
                <span>MODEL</span>
                <span>STATUS</span>
                <span>RISK</span>
                <span>TRUST</span>
              </div>

              <div className="space-y-3">
                {models.map(([name, status, risk, trust], index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-[1.4fr_.8fr_.6fr_.4fr] items-center gap-4 rounded-[18px] border border-white/[0.07] bg-white/[0.015] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="text-xs text-white/70">{name}</span>
                    </div>

                    <span className="text-[9px] text-white/40">{status}</span>

                    <span
                      className={`text-[9px] ${
                        risk === "Medium"
                          ? "text-amber-300/65"
                          : "text-emerald-300/60"
                      }`}
                    >
                      {risk}
                    </span>

                    <span className="text-xs text-violet-100/70">
                      {trust}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-7 md:p-9">
              <div className="flex items-center gap-3">
                <Activity size={14} className="text-violet-100/70" />

                <span className="text-[8px] tracking-[0.2em] text-white/35">
                  TRUST SCORE
                </span>
              </div>

              <div className="mt-10 flex items-end gap-3">
                <p className="text-7xl font-light tracking-[-0.07em] text-white/90">
                  96
                </p>

                <p className="mb-2 text-sm text-white/30">/ 100</p>
              </div>

              <div className="mt-8 h-[5px] overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "96%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                  className="h-full bg-gradient-to-r from-violet-600 to-violet-100"
                />
              </div>

              <div className="mt-10 space-y-4">
                {[
                  "Governance policies active",
                  "Audit logging enabled",
                  "Human oversight enabled",
                  "Risk monitoring active",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-xs text-white/50"
                  >
                    <CheckCircle2
                      size={12}
                      className="text-emerald-300/60"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}