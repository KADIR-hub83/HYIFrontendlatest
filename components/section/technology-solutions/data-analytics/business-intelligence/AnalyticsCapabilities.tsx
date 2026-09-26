"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  ChartNoAxesCombined,
  Gauge,
  LayoutDashboard,
  Search,
} from "lucide-react";

const capabilities = [
  {
    Icon: LayoutDashboard,
    title: "Executive Dashboards",
    text: "Create decision-ready dashboards that bring critical KPIs, trends and operational signals into one clear view.",
  },
  {
    Icon: ChartNoAxesCombined,
    title: "Advanced Analytics",
    text: "Move beyond reporting with deeper analysis across customers, operations, finance and commercial performance.",
  },
  {
    Icon: BrainCircuit,
    title: "AI-Powered Insights",
    text: "Surface patterns, anomalies and meaningful changes automatically using intelligent analytics workflows.",
  },
  {
    Icon: Gauge,
    title: "Real-Time Intelligence",
    text: "Monitor business activity continuously with live metrics, operational alerts and streaming analytics.",
  },
  {
    Icon: Search,
    title: "Self-Service Analytics",
    text: "Give teams faster access to trusted information without depending on manual reporting cycles.",
  },
  {
    Icon: BarChart3,
    title: "Performance Management",
    text: "Track goals, KPIs and business outcomes across teams, functions, markets and strategic initiatives.",
  },
];

export default function AnalyticsCapabilities() {
  return (
    <section className="bg-[#050505] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="max-w-[950px]">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            BI capabilities
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Intelligence built around
            <span className="block text-white/55">how business moves.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ delay: (index % 3) * 0.08 }}
              className="group relative min-h-[400px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-gradient-to-b from-[#11100e] to-[#080807] p-8"
            >
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/[0.04] blur-[80px] transition duration-500 group-hover:bg-violet-500/[0.11]" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-violet-200/[0.14] bg-violet-200/[0.035]">
                    <Icon size={22} className="text-violet-100/70" />
                  </div>

                  <span className="text-[8px] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl text-white/90">{title}</h3>

                  <p className="mt-5 text-sm leading-7 text-white/60">{text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}