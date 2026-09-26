"use client";

import { motion } from "framer-motion";
import { Activity, Database, Server, ShieldCheck } from "lucide-react";

export default function DataInfrastructure() {
  return (
    <section className="border-y border-white/[0.06] bg-[#090806] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="relative min-h-[720px] overflow-hidden rounded-[40px] border border-white/[0.09] lg:col-span-8">
            <img
              src="/images/data-engineering/data-center.webp"
              alt="Enterprise data infrastructure"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
            <div className="absolute inset-0 bg-violet-900/10" />

            <div className="absolute left-8 top-8 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

              <span className="font-mono text-[7px] tracking-[0.2em] text-white/55">
                INFRASTRUCTURE ONLINE
              </span>
            </div>

            <div className="absolute bottom-10 left-8 right-8 md:left-10">
              <span className="font-mono text-[8px] tracking-[0.3em] text-violet-100/65">
                DATA INFRASTRUCTURE
              </span>

              <h2 className="mt-5 max-w-[800px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
                Engineered to run
                <span className="block text-white/60">without interruption.</span>
              </h2>

              <p className="mt-6 max-w-[650px] text-[15px] leading-8 text-white/70">
                Build resilient platforms for continuous ingestion,
                transformation, storage and delivery across modern enterprise
                workloads.
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:col-span-4">
            {[
              {
                Icon: Activity,
                value: "99.99%",
                label: "Platform uptime",
              },
              {
                Icon: Database,
                value: "2.8B",
                label: "Daily records",
              },
              {
                Icon: Server,
                value: "42",
                label: "Production pipelines",
              },
              {
                Icon: ShieldCheck,
                value: "24/7",
                label: "Infrastructure monitoring",
              },
            ].map(({ Icon, value, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[32px] border border-white/[0.08] bg-[#0c0b0c] p-7"
              >
                <Icon size={18} className="text-violet-100/65" />

                <div className="mt-8 text-4xl font-light tracking-[-0.05em]">
                  {value}
                </div>

                <div className="mt-3 font-mono text-[8px] uppercase tracking-[0.16em] text-white/40">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}