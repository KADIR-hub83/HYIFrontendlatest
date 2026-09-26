"use client";

import { motion } from "framer-motion";
import {
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  Wifi,
} from "lucide-react";

const industries = [
  {
    name: "Retail",
    prediction: "Demand & customer behavior",
    icon: ShoppingBag,
  },
  {
    name: "Manufacturing",
    prediction: "Maintenance & production",
    icon: Factory,
  },
  {
    name: "Financial Services",
    prediction: "Risk & financial outcomes",
    icon: Landmark,
  },
  {
    name: "Healthcare",
    prediction: "Operational & resource demand",
    icon: HeartPulse,
  },
  {
    name: "Supply Chain",
    prediction: "Inventory & logistics",
    icon: Truck,
  },
  {
    name: "Telecommunications",
    prediction: "Network & customer demand",
    icon: Wifi,
  },
];

export default function IndustryForecasts() {
  return (
    <section className="bg-[#030305] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/55">
            06 / Industry Intelligence
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Predictive intelligence
            <span className="block text-[#C4B5D8]/55">
              across the enterprise.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[680px] text-base leading-8 text-[#D4CDDD]/55">
            Apply forecasting systems to industry-specific decisions while
            preserving a consistent enterprise intelligence architecture.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.name}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative min-h-[280px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#09090D] p-7"
              >
                <motion.div
                  className="absolute bottom-[-100px] right-[-100px] h-[260px] w-[260px] rounded-full bg-violet-600/[0.08] blur-[90px]"
                  whileHover={{ scale: 1.5 }}
                />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-500/[0.07]">
                      <Icon size={18} className="text-violet-300" />
                    </div>

                    <span className="text-[9px] text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium text-[#F4EFFA]">
                      {industry.name}
                    </h3>

                    <p className="mt-3 text-sm text-[#CEC7D7]/50">
                      {industry.prediction}
                    </p>

                    <div className="mt-6 h-px w-full bg-gradient-to-r from-violet-400/30 to-transparent" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}