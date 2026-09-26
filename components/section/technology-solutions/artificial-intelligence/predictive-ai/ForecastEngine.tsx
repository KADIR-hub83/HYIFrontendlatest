"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Database,
  Radar,
} from "lucide-react";

const pipeline = [
  {
    name: "Data",
    sub: "Collect",
    icon: Database,
  },
  {
    name: "Signals",
    sub: "Detect",
    icon: Radar,
  },
  {
    name: "Models",
    sub: "Learn",
    icon: BrainCircuit,
  },
  {
    name: "Forecast",
    sub: "Predict",
    icon: ChartNoAxesCombined,
  },
];

export default function ForecastEngine() {
  return (
    <section
      id="forecast-engine"
      className="relative overflow-hidden bg-[#030305] py-32 md:py-48"
    >
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/[0.07] blur-[170px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/55">
            02 / Forecast Engine
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            From raw data to
            <span className="block bg-gradient-to-r from-[#E3D6F7] to-[#8F6CFF] bg-clip-text text-transparent">
              future probability.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[700px] text-base leading-8 text-[#D5CEDF]/58">
            A connected prediction architecture continuously learns from
            enterprise data and transforms complex signals into actionable
            forecasts.
          </p>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-[10%] right-[10%] top-[60px] hidden h-px bg-gradient-to-r from-transparent via-violet-400/35 to-transparent lg:block" />

          <div className="grid gap-4 lg:grid-cols-4">
            {pipeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.14 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{
                      y: -10,
                      rotateX: 3,
                      rotateY: index % 2 ? -3 : 3,
                    }}
                    className="relative min-h-[300px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#09090D] p-7"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-violet-300/20 bg-violet-500/[0.07] shadow-[0_0_35px_rgba(139,92,246,.1)]">
                      <Icon size={21} className="text-violet-300" />
                    </div>

                    <p className="mt-16 text-[8px] uppercase tracking-[0.35em] text-violet-200/40">
                      {item.sub}
                    </p>

                    <h3 className="mt-3 text-3xl font-medium">
                      {item.name}
                    </h3>

                    <div className="absolute bottom-6 right-6">
                      <span className="text-[9px] text-white/20">
                        0{index + 1}
                      </span>
                    </div>
                  </motion.div>

                  {index !== pipeline.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-[52px] z-20 hidden text-violet-300/40 lg:block" size={18} />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}