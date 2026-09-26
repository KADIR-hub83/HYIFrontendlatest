"use client";

import { motion } from "framer-motion";
import { CircleDollarSign, Gauge, TrendingDown } from "lucide-react";

const bars = [34, 52, 45, 70, 58, 82, 64, 76, 61, 55, 48, 42];

export default function FinOpsSimulator() {
  return (
    <div className="grid overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#050505] lg:grid-cols-[1.35fr_.65fr]">
      <div className="border-b border-white/[0.06] p-7 md:p-9 lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[8px] text-[#9878ef]">
              COST / UTILIZATION MODEL
            </p>
            <p className="mt-3 text-xl">AI infrastructure demand</p>
          </div>
          <Gauge size={18} className="text-[#9878ef]" />
        </div>

        <div className="mt-12 flex h-[250px] items-end gap-3">
          {bars.map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.04 }}
              className="relative flex-1 rounded-t-md bg-gradient-to-t from-[#7046e6]/25 to-[#7046e6]"
            />
          ))}
        </div>

        <div className="mt-4 flex justify-between font-mono text-[7px] text-white/[0.25]">
          <span>DEMAND</span>
          <span>TIME →</span>
        </div>
      </div>

      <div className="grid gap-px bg-white/[0.06]">
        {[
          {
            Icon: CircleDollarSign,
            title: "Unit economics",
            text: "Understand cost relative to the business capability being delivered.",
          },
          {
            Icon: TrendingDown,
            title: "Optimization",
            text: "Identify waste, over-provisioning and architectural efficiency opportunities.",
          },
          {
            Icon: Gauge,
            title: "Forecasting",
            text: "Connect expected AI demand with future infrastructure requirements.",
          },
        ].map(({ Icon, title, text }) => (
          <div key={title} className="bg-[#080808] p-7">
            <Icon size={16} className="text-[#9878ef]" />
            <p className="mt-5 text-[15px]">{title}</p>
            <p className="mt-3 text-[11px] leading-6 text-white/[0.4]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}