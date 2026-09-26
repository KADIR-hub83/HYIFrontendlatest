"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  BarChart3,
  Boxes,
  ChartSpline,
  Gauge,
  Map,
} from "lucide-react";

const capabilities = [
  {
    Icon: AreaChart,
    title: "Interactive Dashboards",
    text: "Build responsive executive and operational dashboards designed around the metrics that actually matter.",
  },
  {
    Icon: ChartSpline,
    title: "Real-Time Visualization",
    text: "Turn continuously changing information into live charts, metrics, alerts and operational views.",
  },
  {
    Icon: Map,
    title: "Geospatial Analytics",
    text: "Reveal geographic patterns across customers, markets, assets, operations and business activity.",
  },
  {
    Icon: BarChart3,
    title: "Advanced Charts",
    text: "Represent complex comparisons, distributions, relationships and trends through clear visual systems.",
  },
  {
    Icon: Gauge,
    title: "Executive Reporting",
    text: "Create leadership views that simplify performance without losing the context behind the numbers.",
  },
  {
    Icon: Boxes,
    title: "Custom Data Experiences",
    text: "Design purpose-built visualization products for unique enterprise datasets and workflows.",
  },
];

export default function VisualizationCapabilities() {
  return (
    <section className="border-y border-white/[0.06] bg-[#090806] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="max-w-[950px]">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Visualization capabilities
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Designed for clarity.
            <span className="block text-white/55">Engineered for scale.</span>
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
              className="group relative min-h-[390px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#0c0b09] p-8"
            >
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/[0.04] blur-[80px] transition-all duration-700 group-hover:bg-violet-500/[0.12]" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-violet-200/[0.14] bg-violet-200/[0.04]">
                    <Icon size={22} className="text-violet-100/70" />
                  </div>

                  <span className="text-[8px] text-white/25">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl text-white/90">{title}</h3>

                  <p className="mt-5 text-sm leading-7 text-white/60">
                    {text}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-500 via-violet-100 to-transparent transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}