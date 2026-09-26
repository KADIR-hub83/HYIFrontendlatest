"use client";

import { motion } from "framer-motion";
import { ArrowDown, Database, Radio } from "lucide-react";

export default function DataEngineeringHero() {
  return (
    <section className="relative min-h-[1050px] overflow-hidden bg-[#050505] pb-24 pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[30%] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-violet-600/[0.10] blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom,transparent,black 20%,black 75%,transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="mx-auto max-w-[1150px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 rounded-full border border-violet-200/[0.16] bg-violet-200/[0.04] px-5 py-2.5"
          >
            <Radio size={10} className="text-emerald-300" />

            <span className="text-[8px] uppercase tracking-[0.38em] text-violet-100/65">
              Enterprise Data Engineering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-9 text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.86] tracking-[-0.075em]"
          >
            Build the systems
            <br />

            <span className="bg-gradient-to-r from-white via-violet-100 to-violet-400 bg-clip-text text-transparent">
              your data runs on.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-9 max-w-[850px] text-[15px] leading-8 text-white/65 md:text-lg md:leading-9"
          >
            HYI.AI designs scalable data pipelines, streaming platforms,
            warehouses and cloud-native architectures that transform fragmented
            information into reliable infrastructure for analytics, AI and
            intelligent enterprise applications.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="relative mx-auto mt-20 max-w-[1250px]"
        >
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

          <div className="relative overflow-hidden rounded-[42px] border border-white/[0.09] bg-[#080808]/95 p-5 shadow-[0_50px_140px_rgba(0,0,0,.7)] backdrop-blur-xl md:p-8">
            <div className="mb-9 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-red-400/50" />
                <span className="h-2 w-2 rounded-full bg-yellow-300/50" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/60" />

                <span className="ml-3 font-mono text-[7px] tracking-[0.25em] text-white/35">
                  HYI DATA FABRIC / PRODUCTION
                </span>
              </div>

              <span className="flex items-center gap-2 font-mono text-[7px] text-emerald-300/65">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                PIPELINE HEALTHY
              </span>
            </div>

            <div className="relative grid gap-5 md:grid-cols-5 md:items-center">
              {[
                ["SOURCE", "01", "Applications"],
                ["INGEST", "02", "Streaming"],
                ["PROCESS", "03", "Transform"],
                ["STORE", "04", "Warehouse"],
                ["SERVE", "05", "Analytics + AI"],
              ].map(([label, number, title], index) => (
                <div key={label} className="relative">
                  <motion.div
                    whileHover={{ y: -7 }}
                    className="relative z-10 min-h-[210px] rounded-[28px] border border-white/[0.08] bg-[#0d0c10] p-6"
                  >
                    <div className="flex justify-between font-mono text-[7px]">
                      <span className="tracking-[0.2em] text-violet-200/50">
                        {label}
                      </span>

                      <span className="text-white/25">{number}</span>
                    </div>

                    <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-200/[0.14] bg-violet-200/[0.04]">
                      <Database
                        size={19}
                        className="text-violet-100/70"
                      />
                    </div>

                    <h3 className="mt-7 text-sm text-white/80">{title}</h3>

                    <motion.div
                      animate={{
                        opacity: [0.25, 1, 0.25],
                        width: ["20%", "80%", "20%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.35,
                      }}
                      className="mt-5 h-px bg-gradient-to-r from-violet-400 to-transparent"
                    />
                  </motion.div>

                  {index < 4 && (
                    <motion.div
                      animate={{ opacity: [0.15, 1, 0.15] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: index * 0.25,
                      }}
                      className="absolute -right-[18px] top-1/2 z-20 hidden h-1.5 w-1.5 rounded-full bg-violet-100 shadow-[0_0_15px_#ddd6fe] md:block"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-white/[0.07] bg-white/[0.06] md:grid-cols-4">
              {[
                ["2.8B", "Records / day"],
                ["14ms", "Stream latency"],
                ["99.99%", "Pipeline uptime"],
                ["42", "Active pipelines"],
              ].map(([value, label]) => (
                <div key={label} className="bg-[#090909] px-6 py-6 text-center">
                  <div className="text-2xl font-light">{value}</div>
                  <div className="mt-2 font-mono text-[7px] uppercase tracking-[0.18em] text-white/35">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <a
          href="#pipeline"
          className="mx-auto mt-12 flex w-fit items-center gap-3 text-[8px] uppercase tracking-[0.28em] text-white/35"
        >
          Enter the infrastructure
          <ArrowDown size={12} />
        </a>
      </div>
    </section>
  );
}