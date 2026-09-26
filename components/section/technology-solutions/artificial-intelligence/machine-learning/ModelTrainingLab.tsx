"use client";

import { motion } from "framer-motion";

const bars = [42, 58, 49, 71, 64, 82, 76, 91, 86, 96, 93, 98];

export default function ModelTrainingLab() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-[#141426] md:py-32">
      <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="text-[9px] uppercase tracking-[3px] text-purple-700/45">
              Model Training Lab
            </p>

            <h2 className="mt-5 max-w-[650px] text-4xl font-semibold leading-[1.05] tracking-[-2px] md:text-6xl">
              From raw signals to
              <span className="block text-purple-700">
                production intelligence.
              </span>
            </h2>
          </div>

          <p className="max-w-[560px] text-[14px] leading-7 text-[#141426]/45 lg:justify-self-end">
            HYI.AI builds complete ML systems covering feature engineering,
            training, experimentation, evaluation, deployment and continuous
            optimization.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[32px] bg-[#11152e] p-7 text-white md:p-10"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[8px] uppercase tracking-[2px] text-purple-200/40">
                  Training Performance
                </div>
                <h3 className="mt-2 text-xl">Model Convergence</h3>
              </div>

              <div className="rounded-full bg-green-400/10 px-4 py-2 text-[7px] uppercase tracking-[1px] text-green-300/60">
                Training
              </div>
            </div>

            <div className="mt-14 flex h-[280px] items-end gap-2">
              {bars.map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: i * 0.06,
                  }}
                  className="relative flex-1 rounded-t-lg bg-gradient-to-t from-indigo-700 via-purple-500 to-purple-200"
                >
                  <motion.div
                    animate={{ opacity: [0, 0.7, 0] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.15,
                      repeat: Infinity,
                    }}
                    className="absolute inset-x-0 top-0 h-8 bg-white/20 blur-xl"
                  />
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex justify-between border-t border-white/10 pt-5 text-[7px] uppercase tracking-[1px] text-white/25">
              <span>Epoch 01</span>
              <span>Learning Progress</span>
              <span>Epoch 100</span>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {[
              ["98.7%", "Validation Accuracy", "+4.8%"],
              ["0.024", "Training Loss", "-68%"],
              ["14ms", "Model Latency", "-31%"],
            ].map(([value, label, change], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -7 }}
                className="relative overflow-hidden rounded-[28px] border border-purple-950/[0.08] bg-[#f5f2ff] p-7"
              >
                <div className="absolute right-[-50px] top-[-60px] h-[170px] w-[170px] rounded-full bg-purple-300/30 blur-[60px]" />

                <div className="relative flex items-start justify-between">
                  <div>
                    <div className="text-4xl font-semibold tracking-[-2px]">
                      {value}
                    </div>
                    <div className="mt-3 text-[9px] uppercase tracking-[1px] text-[#141426]/35">
                      {label}
                    </div>
                  </div>

                  <span className="rounded-full bg-white px-3 py-1.5 text-[8px] text-green-700 shadow-sm">
                    {change}
                  </span>
                </div>

                <div className="relative mt-7 h-[5px] overflow-hidden rounded-full bg-purple-950/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${80 + i * 6}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}