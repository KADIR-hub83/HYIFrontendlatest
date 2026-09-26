"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Database,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const architecture = [
  {
    Icon: Database,
    title: "Sources",
    detail: "CRM · ERP · APIs · Files",
  },
  {
    Icon: Workflow,
    title: "Transform",
    detail: "Clean · Join · Validate",
  },
  {
    Icon: Cloud,
    title: "Data Layer",
    detail: "Warehouse · Lakehouse",
  },
  {
    Icon: ShieldCheck,
    title: "Semantic",
    detail: "Measures · Relationships",
  },
  {
    Icon: LayoutDashboard,
    title: "Dashboard",
    detail: "KPIs · Visuals · Actions",
  },
];

const checklist = [
  "Metric calculations validated against source data",
  "Filters and drill paths tested for expected behavior",
  "Access permissions verified by user role",
  "Responsive layouts reviewed on target devices",
  "Visual hierarchy tested with intended audience",
  "Refresh schedules and data freshness documented",
];

export default function DashboardEngineering() {
  return (
    <section className="bg-[#050505] py-32">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="max-w-[900px]">
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
            05 / ENGINEERING & DELIVERY
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            The dashboard is
            <span className="block text-[#7046e6]">
              the final layer.
            </span>
          </h2>

          <p className="mt-7 max-w-[720px] text-[10px] leading-7 text-white/42">
            A reliable dashboard depends on the layers underneath it. Source
            systems, transformation logic, data models, metric definitions and
            access controls all contribute to whether the information presented
            to a user can be trusted.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[32px] border border-[#7046e6]/15 bg-[#080808] p-6 md:p-9">
          <p className="font-mono text-[6px] tracking-[0.18em] text-white/25">
            DASHBOARD DELIVERY ARCHITECTURE
          </p>

          <div className="mt-10 grid gap-3 lg:grid-cols-5">
            {architecture.map((item, index) => {
              const Icon = item.Icon;

              return (
                <div key={item.title} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    whileHover={{ y: -5 }}
                    className="min-h-[190px] rounded-[22px] border border-white/[0.07] bg-[#050505] p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7046e6]/20 bg-[#7046e6]/[0.06]">
                      <Icon size={14} className="text-[#9474ee]" />
                    </div>

                    <p className="mt-8 text-[11px]">
                      {item.title}
                    </p>

                    <p className="mt-3 text-[7px] leading-5 text-white/28">
                      {item.detail}
                    </p>
                  </motion.div>

                  {index < architecture.length - 1 && (
                    <ArrowRight
                      size={12}
                      className="absolute -right-[8px] top-1/2 z-10 hidden -translate-y-1/2 text-[#7046e6] lg:block"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl tracking-[-0.04em]">
              Production readiness
            </h3>

            <p className="mt-5 max-w-[520px] text-[9px] leading-7 text-white/38">
              Before release, the dashboard should be validated as both a data
              product and a user interface. Correct calculations are necessary,
              but users also need understandable navigation, appropriate
              permissions and predictable performance.
            </p>
          </div>

          <div className="space-y-3">
            {checklist.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="flex items-center gap-4 rounded-[16px] border border-white/[0.06] bg-[#080808] p-4"
              >
                <CheckCircle2
                  size={12}
                  className="shrink-0 text-[#7046e6]"
                />

                <span className="text-[8px] text-white/38">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}