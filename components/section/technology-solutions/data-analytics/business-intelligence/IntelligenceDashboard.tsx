"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  CircleDot,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react";
import LiveRevenueChart from "./LiveRevenueChart";

const kpis = [
  ["$24.8M", "Revenue", "+18.4%"],
  ["38.2%", "Margin", "+4.8%"],
  ["12,840", "Customers", "+21.3%"],
  ["94.7", "Health Score", "+6.2%"],
];

export default function IntelligenceDashboard() {
  return (
    <div className="relative mx-auto max-w-[1350px]">
      <div className="absolute inset-10 rounded-full bg-violet-600/[0.10] blur-[130px]" />

      <div className="relative overflow-hidden rounded-[34px] border border-white/[0.10] bg-[#09090b]/95 shadow-[0_60px_160px_rgba(0,0,0,.65)] backdrop-blur-2xl">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5 md:px-8">
          <div className="flex items-center gap-5">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400/50" />
              <span className="h-2 w-2 rounded-full bg-amber-300/50" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/50" />
            </div>

            <span className="text-[7px] uppercase tracking-[0.28em] text-white/35">
              HYI.AI / EXECUTIVE INTELLIGENCE
            </span>
          </div>

          <span className="flex items-center gap-2 text-[7px] uppercase tracking-[0.2em] text-emerald-300/60">
            <CircleDot size={9} />
            Live data
          </span>
        </div>

        <div className="grid border-b border-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map(([value, label, growth], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="border-b border-white/[0.07] p-6 sm:border-r lg:border-b-0"
            >
              <div className="flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-[0.18em] text-white/35">
                  {label}
                </span>

                <MoreHorizontal size={13} className="text-white/20" />
              </div>

              <div className="mt-6 flex items-end justify-between">
                <span className="text-3xl font-light tracking-[-0.04em] text-white/90">
                  {value}
                </span>

                <span className="flex items-center gap-1 text-[9px] text-emerald-300/65">
                  <TrendingUp size={10} />
                  {growth}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.55fr_.75fr]">
          <div className="border-b border-white/[0.07] p-6 md:p-8 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                  Revenue intelligence
                </span>

                <div className="mt-3 flex items-end gap-3">
                  <span className="text-3xl font-light text-white/90">
                    $8.42M
                  </span>

                  <span className="mb-1 text-[9px] text-emerald-300/60">
                    +18.4%
                  </span>
                </div>
              </div>

              <span className="rounded-full border border-white/[0.08] px-4 py-2 text-[8px] text-white/40">
                Last 12 months
              </span>
            </div>

            <div className="mt-8">
              <LiveRevenueChart />
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Activity size={13} className="text-violet-200/70" />
              <span className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                Live intelligence
              </span>
            </div>

            <div className="mt-8 space-y-3">
              {[
                ["Enterprise pipeline", "$3.8M", "+12%"],
                ["Conversion rate", "28.4%", "+3.1%"],
                ["Forecast confidence", "96.2%", "High"],
                ["Active opportunities", "184", "+22"],
              ].map(([label, value, change], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="rounded-[16px] border border-white/[0.07] bg-white/[0.015] p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-white/45">{label}</span>
                    <ArrowUpRight size={11} className="text-white/25" />
                  </div>

                  <div className="mt-3 flex items-end justify-between">
                    <span className="text-lg text-white/80">{value}</span>
                    <span className="text-[8px] text-violet-200/55">
                      {change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}