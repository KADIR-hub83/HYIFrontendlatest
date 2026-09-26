"use client";

import { motion } from "framer-motion";
import {
  Banknote,
  Factory,
  HeartPulse,
  ShoppingBag,
  Truck,
  Users,
} from "lucide-react";

const useCases = [
  {
    Icon: ShoppingBag,
    title: "Retail & Commerce",
    text: "Forecast product demand, customer intent, churn and purchasing behavior.",
  },
  {
    Icon: Banknote,
    title: "Financial Services",
    text: "Model risk, transaction behavior, customer value and financial outcomes.",
  },
  {
    Icon: Factory,
    title: "Manufacturing",
    text: "Predict equipment failure, production issues and operational demand.",
  },
  {
    Icon: HeartPulse,
    title: "Healthcare",
    text: "Support planning and operational forecasting across complex healthcare environments.",
  },
  {
    Icon: Truck,
    title: "Supply Chain",
    text: "Forecast inventory, logistics pressure, demand movement and fulfillment requirements.",
  },
  {
    Icon: Users,
    title: "Customer Intelligence",
    text: "Predict churn, lifetime value, engagement and next-best customer actions.",
  },
];

export default function PredictiveUseCases() {
  return (
    <section className="bg-[#030303] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
            Predictive Intelligence
          </span>

          <h2 className="mx-auto mt-7 max-w-[1150px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Every industry has
            <span className="block text-white/50">
              a next move.
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: (index % 3) * 0.08,
              }}
              whileHover={{ y: -7 }}
              className="group min-h-[370px] rounded-[34px] border border-[#eee5ff]/10 bg-[#0b0b0d] p-8"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#eee5ff]/15 bg-[#eee5ff]/[0.04]">
                  <Icon size={21} className="text-[#eee5ff]/70" />
                </div>

                <span className="font-mono text-[7px] text-white/20">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-20 text-2xl tracking-[-0.03em]">
                {title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                {text}
              </p>

              <div className="mt-8 h-px w-12 bg-[#eee5ff]/25 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}