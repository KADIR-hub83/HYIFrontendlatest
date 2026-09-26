"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BadgeDollarSign,
  BrainCircuit,
  Clock3,
  ShieldAlert,
  Target,
} from "lucide-react";

const capabilities = [
  {
    Icon: Clock3,
    title: "Demand Forecasting",
    text: "Forecast demand across products, services, regions and customer segments.",
  },
  {
    Icon: Target,
    title: "Propensity Modeling",
    text: "Estimate the likelihood of conversion, adoption, churn or another future action.",
  },
  {
    Icon: ShieldAlert,
    title: "Risk Prediction",
    text: "Identify patterns associated with operational, financial and customer risk.",
  },
  {
    Icon: Activity,
    title: "Anomaly Forecasting",
    text: "Recognize unusual behavior and emerging deviations before impact expands.",
  },
  {
    Icon: BadgeDollarSign,
    title: "Revenue Intelligence",
    text: "Forecast revenue movement and understand variables influencing future performance.",
  },
  {
    Icon: BrainCircuit,
    title: "Predictive AI",
    text: "Combine machine learning and business context into continuously improving models.",
  },
];

export default function PredictiveCapabilities() {
  return (
    <section className="bg-[#030303] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
            Predictive Capabilities
          </span>

          <h2 className="mx-auto mt-7 max-w-[1100px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Make uncertainty
            <span className="block text-white/50">
              measurable.
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: (index % 3) * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative min-h-[390px] overflow-hidden rounded-[34px] border border-[#eee5ff]/10 bg-[#0b0b0d] p-8"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#eee5ff]/[0.025] blur-[70px] transition duration-700 group-hover:bg-[#eee5ff]/[0.07]" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#eee5ff]/15 bg-[#eee5ff]/[0.04]">
                    <Icon size={21} className="text-[#eee5ff]/70" />
                  </div>

                  <span className="font-mono text-[7px] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl tracking-[-0.03em]">
                    {title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/60">
                    {text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}