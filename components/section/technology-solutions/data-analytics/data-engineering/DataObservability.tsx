"use client";

import { motion } from "framer-motion";
import { Activity, CheckCircle2 } from "lucide-react";

export default function DataObservability() {
  return (
    <section className="bg-[#050505] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
              Data Observability
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-8xl">
              Know when your
              <span className="block text-white/50">data can be trusted.</span>
            </h2>
          </div>

          <p className="max-w-[620px] text-[15px] leading-8 text-white/65">
            Monitor freshness, quality, volume, schema and pipeline health
            across your data ecosystem before problems reach dashboards,
            applications or AI systems.
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[40px] border border-white/[0.09] bg-[#090909]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-7 py-6">
            <span className="font-mono text-[8px] tracking-[0.2em] text-white/35">
              DATA HEALTH / PRODUCTION
            </span>

            <span className="flex items-center gap-2 font-mono text-[7px] text-emerald-300/60">
              <CheckCircle2 size={10} />
              ALL SYSTEMS HEALTHY
            </span>
          </div>

          <div className="grid lg:grid-cols-[.65fr_1.35fr]">
            <div className="border-b border-white/[0.07] p-7 lg:border-b-0 lg:border-r md:p-9">
              {[
                ["Freshness", "99.9%"],
                ["Quality", "99.7%"],
                ["Completeness", "99.8%"],
                ["Schema health", "100%"],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className="border-b border-white/[0.06] py-6 first:pt-0"
                >
                  <div className="flex justify-between">
                    <span className="text-sm text-white/55">{label}</span>
                    <span className="font-mono text-xs text-white/75">
                      {value}
                    </span>
                  </div>

                  <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: value }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.4,
                        delay: index * 0.1,
                      }}
                      className="h-full bg-gradient-to-r from-violet-600 to-violet-100"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-7 md:p-9">
              <div className="flex items-center gap-3">
                <Activity size={14} className="text-violet-100/65" />

                <span className="font-mono text-[8px] tracking-[0.2em] text-white/35">
                  PIPELINE HEALTH
                </span>
              </div>

              <div className="mt-9 grid gap-3 md:grid-cols-2">
                {[
                  ["orders_ingestion", "Healthy", "12ms"],
                  ["customer_360", "Healthy", "18ms"],
                  ["revenue_transform", "Healthy", "22ms"],
                  ["analytics_serving", "Healthy", "9ms"],
                  ["product_events", "Healthy", "14ms"],
                  ["forecast_features", "Healthy", "31ms"],
                ].map(([pipeline, status, latency], index) => (
                  <motion.div
                    key={pipeline}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="rounded-[18px] border border-white/[0.07] bg-white/[0.015] p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] text-white/55">
                        {pipeline}
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    </div>

                    <div className="mt-5 flex justify-between font-mono text-[7px]">
                      <span className="text-emerald-300/55">{status}</span>
                      <span className="text-white/30">{latency}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}