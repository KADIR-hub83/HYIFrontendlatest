"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Database,
  FileStack,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function WarehouseArchitecture() {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-28 md:py-44">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ddd0f4]/[0.04] blur-[170px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="max-w-[1000px]">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
            Warehouse Architecture
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Structure without
            <span className="block text-white/50">losing scale.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-12">
          <article className="relative min-h-[700px] overflow-hidden rounded-[40px] border border-[#eee5ff]/[0.11] bg-[#0b0b0d] p-8 md:p-10 lg:col-span-8">
            <div
              className="absolute inset-0 opacity-[0.13]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(240,232,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(240,232,255,.08) 1px,transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            <div className="relative z-10">
              <span className="font-mono text-[8px] tracking-[0.28em] text-[#eee5ff]/45">
                HYI WAREHOUSE / CORE
              </span>

              <h3 className="mt-6 max-w-[650px] text-4xl tracking-[-0.04em] md:text-5xl">
                A layered foundation for trusted enterprise data.
              </h3>
            </div>

            <div className="absolute bottom-8 left-8 right-8 top-[270px] md:bottom-10 md:left-10 md:right-10">
              <div className="grid h-full gap-3">
                {[
                  {
                    title: "CONSUMPTION",
                    text: "BI · Dashboards · AI · APIs",
                    Icon: Sparkles,
                  },
                  {
                    title: "SEMANTIC LAYER",
                    text: "Metrics · Business Models",
                    Icon: Boxes,
                  },
                  {
                    title: "CURATED DATA",
                    text: "Clean · Tested · Governed",
                    Icon: ShieldCheck,
                  },
                  {
                    title: "CORE WAREHOUSE",
                    text: "Facts · Dimensions · History",
                    Icon: Database,
                  },
                  {
                    title: "RAW LANDING",
                    text: "Operational Source Data",
                    Icon: FileStack,
                  },
                ].map(({ title, text, Icon }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 6 }}
                    className="group flex items-center justify-between rounded-[18px] border border-[#eee5ff]/[0.10] bg-[#eee5ff]/[0.025] px-6"
                  >
                    <div className="flex items-center gap-5">
                      <Icon
                        size={17}
                        className="text-[#f0e8ff]/65"
                      />

                      <div>
                        <div className="font-mono text-[7px] tracking-[0.22em] text-[#f0e8ff]/60">
                          {title}
                        </div>

                        <div className="mt-1 text-xs text-white/35">
                          {text}
                        </div>
                      </div>
                    </div>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#eee5ff]/70 shadow-[0_0_12px_#eee5ff]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </article>

          <div className="grid gap-5 lg:col-span-4">
            <article className="rounded-[36px] border border-[#eee5ff]/[0.11] bg-[#0b0b0d] p-8">
              <Layers3 size={21} className="text-[#eee5ff]/70" />

              <h3 className="mt-8 text-3xl tracking-[-0.035em]">
                Govern every layer.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Lineage, access policies, quality rules and consistent business
                definitions become part of the warehouse itself.
              </p>

              <div className="mt-9 space-y-3">
                {[
                  ["Lineage", "ACTIVE"],
                  ["Quality", "99.8%"],
                  ["Security", "ENFORCED"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between rounded-[16px] border border-white/[0.07] bg-white/[0.02] px-5 py-4"
                  >
                    <span className="text-xs text-white/45">{label}</span>

                    <span className="font-mono text-[7px] text-[#eee5ff]/60">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[36px] border border-[#eee5ff]/[0.11] bg-gradient-to-br from-[#151218] to-[#090909] p-8">
              <Database size={21} className="text-[#eee5ff]/70" />

              <h3 className="mt-8 text-3xl tracking-[-0.035em]">
                Scale independently.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Separate storage and compute so performance can scale with
                workload without rebuilding your platform.
              </p>

              <div className="mt-10 flex h-32 items-end gap-2">
                {[30, 48, 40, 65, 55, 78, 68, 92, 80, 100].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        height: [
                          `${height * 0.65}%`,
                          `${height}%`,
                          `${height * 0.65}%`,
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.08,
                      }}
                      className="flex-1 rounded-t-md border-x border-t border-[#eee5ff]/20 bg-gradient-to-t from-[#eee5ff]/[0.03] to-[#eee5ff]/35"
                    />
                  )
                )}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}