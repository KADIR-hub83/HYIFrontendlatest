"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  CircleDot,
  Globe2,
  PieChart,
} from "lucide-react";

const cells = [
  0.15, 0.3, 0.7, 0.4, 0.9, 0.3, 0.5, 0.8,
  0.4, 0.9, 0.2, 0.6, 0.8, 0.5, 0.3, 0.7,
  0.8, 0.4, 0.6, 0.9, 0.5, 0.7, 0.2, 0.8,
  0.3, 0.6, 0.9, 0.4, 0.7, 0.5, 0.8, 0.3,
];

export default function VisualIntelligence() {
  return (
    <section className="bg-[#050505] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="max-w-[950px]">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Visual intelligence
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Every angle of your data.
            <span className="block text-white/55">One visual language.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-12">
          <article className="min-h-[560px] rounded-[36px] border border-white/[0.08] bg-[#0b0a09] p-8 lg:col-span-7">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[8px] tracking-[0.2em] text-white/35">
                  ACTIVITY MATRIX
                </span>
                <h3 className="mt-4 text-3xl">See intensity instantly.</h3>
              </div>

              <Activity size={21} className="text-violet-200/60" />
            </div>

            <div className="mt-12 grid grid-cols-8 gap-2">
              {cells.map((opacity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    scale: [1, 0.92, 1],
                  }}
                  transition={{
                    opacity: { delay: index * 0.025 },
                    scale: {
                      duration: 3 + (index % 5),
                      repeat: Infinity,
                      delay: index * 0.06,
                    },
                  }}
                  className="aspect-square rounded-[8px] border border-violet-200/[0.06]"
                  style={{
                    background: `rgba(167,139,250,${opacity * 0.55})`,
                  }}
                />
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between text-[8px] text-white/30">
              <span>LOW ACTIVITY</span>
              <span>HIGH ACTIVITY</span>
            </div>
          </article>

          <div className="grid gap-5 lg:col-span-5">
            <article className="rounded-[36px] border border-white/[0.08] bg-gradient-to-br from-[#15110e] to-[#080807] p-8">
              <div className="flex justify-between">
                <PieChart size={20} className="text-violet-100/65" />
                <span className="text-[7px] text-emerald-300/60">
                  +14.8%
                </span>
              </div>

              <div className="mt-8 flex items-center gap-8">
                <div className="relative h-32 w-32 shrink-0 rounded-full bg-[conic-gradient(#ddd6fe_0_38%,#8b5cf6_38%_68%,#4c1d95_68%_88%,rgba(255,255,255,.05)_88%)]">
                  <div className="absolute inset-[17px] flex items-center justify-center rounded-full bg-[#0c0a09]">
                    <span className="text-xl">100%</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl">Audience mix</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">
                    Understand composition without reading spreadsheets.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-[36px] border border-white/[0.08] bg-[#0b0a09] p-8">
              <Globe2 size={20} className="text-violet-100/65" />

              <h3 className="mt-7 text-2xl">Geographic intelligence</h3>

              <div className="mt-7 space-y-4">
                {[
                  ["Asia Pacific", 92],
                  ["North America", 78],
                  ["Europe", 66],
                ].map(([label, value], index) => (
                  <div key={label as string}>
                    <div className="flex justify-between text-[9px] text-white/45">
                      <span>{label}</span>
                      <span>{value}%</span>
                    </div>

                    <div className="mt-2 h-[3px] bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: index * 0.1 }}
                        className="h-full bg-violet-200"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <article className="rounded-[36px] border border-white/[0.08] bg-[#0b0a09] p-8 lg:col-span-4">
            <BarChart3 size={20} className="text-violet-100/65" />

            <h3 className="mt-8 text-2xl">Compare performance</h3>

            <div className="mt-10 flex h-48 items-end gap-4">
              {[48, 72, 57, 91, 68, 83].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex-1 rounded-t-xl bg-gradient-to-t from-violet-800/30 to-violet-200/70"
                />
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[36px] border border-white/[0.08] bg-gradient-to-br from-[#15110e] to-[#080807] p-8 lg:col-span-8">
            <div className="flex items-center gap-3">
              <CircleDot size={13} className="text-emerald-300/60" />
              <span className="text-[8px] tracking-[0.2em] text-white/35">
                LIVE VISUAL STREAM
              </span>
            </div>

            <div className="mt-12 flex h-[190px] items-end gap-1.5">
              {Array.from({ length: 45 }).map((_, index) => {
                const height =
                  20 + ((index * 17 + index * index * 3) % 75);

                return (
                  <motion.div
                    key={index}
                    animate={{
                      height: [
                        `${height}%`,
                        `${Math.min(100, height + 15)}%`,
                        `${height}%`,
                      ],
                    }}
                    transition={{
                      duration: 2 + (index % 4) * 0.4,
                      repeat: Infinity,
                    }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-800/20 to-violet-200/65"
                  />
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}