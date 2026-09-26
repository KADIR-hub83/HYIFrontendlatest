"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  LayoutDashboard,
  ServerCog,
} from "lucide-react";

const nodes = [
  {
    Icon: Database,
    label: "Enterprise Sources",
    sub: "ERP · CRM · APIs",
  },
  {
    Icon: ServerCog,
    label: "Data Platform",
    sub: "Transform · Govern",
  },
  {
    Icon: BrainCircuit,
    label: "Intelligence",
    sub: "Analyze · Predict",
  },
  {
    Icon: LayoutDashboard,
    label: "Business Action",
    sub: "Dashboards · Alerts",
  },
];

export default function DataFlowEngine() {
  return (
    <section className="border-y border-white/[0.06] bg-[#090806] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="mx-auto max-w-[950px] text-center">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Intelligence architecture
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Raw data in.
            <span className="text-white/55"> Decisions out.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[720px] text-[15px] leading-8 text-white/65">
            A connected intelligence pipeline turns fragmented enterprise
            information into trusted analytics and actionable business signals.
          </p>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-[10%] right-[10%] top-[56px] hidden h-px bg-white/[0.08] lg:block" />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
            className="absolute left-[10%] top-[56px] hidden h-px bg-gradient-to-r from-violet-600 via-violet-100 to-violet-600 lg:block"
          />

          <div className="grid gap-5 lg:grid-cols-4">
            {nodes.map(({ Icon, label, sub }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-violet-200/15 bg-[#090806] shadow-[0_0_50px_rgba(139,92,246,.08)]">
                  <Icon size={25} className="text-violet-100/70" />

                  <motion.span
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute inset-3 rounded-full border border-violet-200/15"
                  />
                </div>

                <div className="mt-8 min-h-[220px] rounded-[28px] border border-white/[0.08] bg-[#0c0b09] p-7 text-center">
                  <span className="text-[7px] tracking-[0.2em] text-white/25">
                    STAGE 0{index + 1}
                  </span>

                  <h3 className="mt-6 text-xl text-white/85">{label}</h3>

                  <p className="mt-4 text-sm text-white/48">{sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}