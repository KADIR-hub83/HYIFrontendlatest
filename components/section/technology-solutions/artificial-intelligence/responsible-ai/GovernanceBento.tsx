"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Check,
  Eye,
  Fingerprint,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

export default function GovernanceBento() {
  return (
    <section
      id="governance"
      className="relative border-y border-white/[0.06] bg-[#090806] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="mb-16 max-w-[900px]">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Governance by design
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Trust isn&apos;t a feature.
            <span className="block text-white/55">
              It&apos;s infrastructure.
            </span>
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* LARGE LEFT */}

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-h-[720px] overflow-hidden rounded-[38px] border border-white/[0.09] bg-gradient-to-b from-[#13100d] to-[#080807] p-7 md:p-11"
          >
            <h3 className="text-2xl font-semibold md:text-3xl">
              Real-time AI governance
            </h3>

            <p className="mt-5 max-w-[650px] text-[15px] leading-8 text-white/60">
              Track model risk, approvals, policy checks and deployment
              readiness from one shared governance environment.
            </p>

            <div className="mt-14 overflow-hidden rounded-[25px] border border-white/[0.09] bg-[#080807]">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5">
                <span className="text-sm text-white/55">Governance activity</span>

                <span className="rounded-full border border-white/[0.09] px-4 py-2 text-[10px] text-white/40">
                  Live
                </span>
              </div>

              <div className="space-y-3 p-5">
                <div className="rounded-[20px] border border-violet-200/10 bg-violet-200/[0.035] p-6">
                  <div className="flex justify-between gap-5">
                    <div>
                      <p className="text-lg text-white/85">
                        Customer Risk Model
                      </p>

                      <p className="mt-2 text-xs text-white/45">
                        Policy review · 2 min ago
                      </p>
                    </div>

                    <span className="h-fit rounded-full bg-emerald-400/[0.10] px-4 py-2 text-[10px] text-emerald-300/70">
                      Approved
                    </span>
                  </div>

                  <p className="mt-7 text-sm leading-7 text-white/58">
                    Fairness, privacy and explainability checks successfully
                    completed. Model is ready for controlled deployment.
                  </p>
                </div>

                {[
                  ["Vision Inspection v4", "Bias evaluation", "Reviewing"],
                  ["Support LLM v7", "Privacy assessment", "Passed"],
                  ["Ranking Model v12", "Drift review", "Monitoring"],
                ].map(([model, check, status]) => (
                  <div
                    key={model}
                    className="flex items-center justify-between rounded-[18px] border border-white/[0.07] p-5"
                  >
                    <div>
                      <p className="text-sm text-white/70">{model}</p>
                      <p className="mt-1 text-[10px] text-white/35">{check}</p>
                    </div>

                    <span className="text-[9px] text-violet-200/60">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="grid gap-5">
            {/* TOP RIGHT */}

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-h-[340px] rounded-[38px] border border-white/[0.09] bg-gradient-to-br from-[#15110d] to-[#090807] p-8 md:p-11"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold md:text-3xl">
                    Every model. One trust layer.
                  </h3>

                  <p className="mt-5 max-w-[550px] text-[15px] leading-8 text-white/60">
                    Apply consistent governance policies across AI models,
                    teams and production environments.
                  </p>
                </div>

                <ShieldCheck
                  size={28}
                  strokeWidth={1}
                  className="text-violet-100/65"
                />
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {[
                  "Privacy",
                  "Fairness",
                  "Safety",
                  "Explainability",
                  "Security",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-[10px] text-white/50"
                  >
                    <Check size={10} className="text-emerald-300/70" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>

            {/* BOTTOM RIGHT */}

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-h-[360px] rounded-[38px] border border-white/[0.09] bg-gradient-to-b from-[#12100e] to-[#080807] p-8 md:p-11"
            >
              <h3 className="text-2xl font-semibold md:text-3xl">
                Continuous model oversight
              </h3>

              <p className="mt-5 max-w-[580px] text-[15px] leading-8 text-white/60">
                Responsible AI continues after deployment with monitoring,
                auditability and human escalation.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {[
                  {
                    icon: Activity,
                    value: "LIVE",
                    label: "Monitoring",
                  },
                  {
                    icon: Eye,
                    value: "100%",
                    label: "Traceable",
                  },
                  {
                    icon: Fingerprint,
                    value: "24/7",
                    label: "Audit Layer",
                  },
                ].map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-[18px] border border-white/[0.07] bg-black/20 p-5"
                  >
                    <Icon
                      size={15}
                      className="mb-7 text-violet-100/65"
                    />

                    <p className="text-xl text-white/80">{value}</p>

                    <p className="mt-2 text-[8px] uppercase tracking-[0.15em] text-white/35">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-[18px] border border-emerald-300/10 bg-emerald-300/[0.025] p-4">
                <LockKeyhole size={13} className="text-emerald-300/60" />

                <span className="text-[9px] tracking-[0.15em] text-emerald-300/55">
                  GOVERNANCE SYSTEM HEALTHY
                </span>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}