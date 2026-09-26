"use client";

import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Boxes,
  ChartSpline,
  CircleAlert,
  Gauge,
  Users,
} from "lucide-react";

const capabilities = [
  {
    title: "Demand Forecasting",
    text: "Anticipate future demand using historical trends, market behavior and live operational signals.",
    icon: ChartSpline,
    className: "lg:col-span-2",
  },
  {
    title: "Risk Prediction",
    text: "Identify emerging operational, financial and customer risks earlier.",
    icon: CircleAlert,
    className: "",
  },
  {
    title: "Customer Intelligence",
    text: "Predict customer needs, behavior, churn signals and engagement opportunities.",
    icon: Users,
    className: "",
  },
  {
    title: "Operational Forecasting",
    text: "Anticipate capacity, resource requirements and operational bottlenecks before they affect performance.",
    icon: Gauge,
    className: "lg:col-span-2",
  },
  {
    title: "Inventory Intelligence",
    text: "Optimize inventory decisions by forecasting movement, demand variability and replenishment requirements.",
    icon: Boxes,
    className: "lg:col-span-2",
  },
  {
    title: "Financial Prediction",
    text: "Model revenue, cost and business-performance scenarios using data-driven forecasts.",
    icon: BadgeDollarSign,
    className: "",
  },
];

export default function PredictiveCapabilities() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07070A] py-32 md:py-44">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <span className="text-[9px] uppercase tracking-[0.4em] text-violet-300/55">
              03 / Predictive Capabilities
            </span>

            <h2 className="mt-7 max-w-[800px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              Intelligence for
              <span className="block text-[#C6B7DA]/60">
                decisions not yet made.
              </span>
            </h2>
          </div>

          <p className="max-w-[480px] text-base leading-8 text-[#D4CDDD]/55">
            Predict business outcomes across customers, operations, finance and
            supply chains with models designed around enterprise decisions.
          </p>
        </div>

        <div className="mt-20 grid auto-rows-[340px] gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.25 },
                }}
                className={`group relative overflow-hidden rounded-[30px] border border-white/[0.07] bg-[#0A0A0E] p-8 ${item.className}`}
              >
                <motion.div
                  className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-violet-600/[0.07] blur-[100px]"
                  whileHover={{ scale: 1.5 }}
                />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-500/[0.07] p-4">
                      <Icon size={19} className="text-violet-300" />
                    </div>

                    <span className="text-[9px] text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium text-[#F4EFFB]">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[600px] text-sm leading-7 text-[#CEC7D7]/55">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}