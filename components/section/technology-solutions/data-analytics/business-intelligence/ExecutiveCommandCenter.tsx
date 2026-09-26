"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CircleDot,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

const departments = [
  ["Sales", "$8.4M", 88],
  ["Operations", "94.2%", 94],
  ["Customer", "91.8", 91],
  ["Product", "82.6%", 82],
];

export default function ExecutiveCommandCenter() {
  return (
    <section className="bg-[#050505] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
              Executive command center
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              Your business.
              <span className="block text-white/55">Live.</span>
            </h2>
          </div>

          <p className="max-w-[620px] text-[15px] leading-8 text-white/65">
            Give leadership one continuously updated view across revenue,
            operations, customers and business performance.
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[38px] border border-white/[0.09] bg-[#080808] shadow-[0_50px_140px_rgba(0,0,0,.45)]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-7 py-6">
            <span className="text-[8px] tracking-[0.25em] text-white/35">
              HYI.AI / BUSINESS CONTROL
            </span>

            <span className="flex items-center gap-2 text-[7px] text-emerald-300/60">
              <CircleDot size={9} />
              SYNCHRONIZED
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_.7fr]">
            <div className="border-b border-white/[0.07] p-7 md:p-10 lg:border-b-0 lg:border-r">
              <div className="grid gap-4 sm:grid-cols-2">
                {departments.map(([label, value, score], index) => (
                  <motion.div
                    key={label as string}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-[24px] border border-white/[0.07] bg-white/[0.015] p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-[0.16em] text-white/35">
                        {label}
                      </span>

                      <TrendingUp size={12} className="text-emerald-300/50" />
                    </div>

                    <p className="mt-8 text-3xl font-light text-white/85">
                      {value}
                    </p>

                    <div className="mt-6 h-[4px] overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4 }}
                        className="h-full bg-gradient-to-r from-violet-600 to-violet-200"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 rounded-[24px] border border-white/[0.07] bg-white/[0.015] p-6">
                <div className="flex justify-between">
                  <span className="text-[9px] text-white/35">
                    BUSINESS MOMENTUM
                  </span>

                  <span className="text-[9px] text-emerald-300/60">
                    +17.8%
                  </span>
                </div>

                <div className="mt-8 flex h-[130px] items-end gap-2">
                  {[32, 42, 37, 54, 49, 63, 58, 71, 67, 81, 76, 92].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-700/20 to-violet-200/60"
                      />
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="p-7 md:p-10">
              <Activity size={17} className="text-violet-200/65" />

              <p className="mt-7 text-[8px] tracking-[0.2em] text-white/35">
                BUSINESS HEALTH
              </p>

              <div className="mt-5 flex items-end gap-3">
                <span className="text-7xl font-light tracking-[-0.07em]">
                  94
                </span>
                <span className="mb-2 text-sm text-white/30">/ 100</span>
              </div>

              <div className="mt-10 space-y-3">
                {[
                  {
                    Icon: WalletCards,
                    title: "Revenue",
                    status: "Strong",
                  },
                  {
                    Icon: Users,
                    title: "Customer growth",
                    status: "Accelerating",
                  },
                  {
                    Icon: TrendingUp,
                    title: "Pipeline",
                    status: "Above target",
                  },
                ].map(({ Icon, title, status }) => (
                  <div
                    key={title}
                    className="flex items-center justify-between rounded-[18px] border border-white/[0.07] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={13} className="text-violet-100/60" />
                      <span className="text-xs text-white/55">{title}</span>
                    </div>

                    <span className="text-[8px] text-emerald-300/60">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}