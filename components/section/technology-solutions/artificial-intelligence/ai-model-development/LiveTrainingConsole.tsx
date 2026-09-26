"use client";

import { motion } from "framer-motion";
import { Activity, CircleDot, Cpu } from "lucide-react";

const logs = [
  "Loading enterprise training dataset...",
  "Initializing transformer architecture...",
  "GPU cluster allocated: 8 × accelerator nodes",
  "Training epoch 042 / 100",
  "Gradient optimization complete",
  "Validation batch processed",
  "Checkpoint model_v42 saved",
  "Evaluation pipeline running...",
];

export default function LiveTrainingConsole() {
  return (
    <section
      id="training-console"
      className="relative border-y border-white/[0.06] bg-[#07070a] py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
              01 / Live Training Environment
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              Watch intelligence
              <span className="block text-white/55">learn in real time.</span>
            </h2>
          </div>

          <p className="max-w-[590px] text-[15px] leading-8 text-white/65">
            From dataset preparation to optimization and evaluation, our
            model-development lifecycle provides visibility into every stage of
            training and experimentation.
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[34px] border border-white/[0.09] bg-[#030304] shadow-[0_50px_150px_rgba(0,0,0,.7)]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
            <div className="flex items-center gap-3">
              <Cpu size={13} className="text-violet-100/70" />
              <span className="text-[8px] tracking-[0.27em] text-white/40">
                HYI.AI / TRAINING CLUSTER
              </span>
            </div>

            <span className="flex items-center gap-2 text-[7px] tracking-[0.2em] text-emerald-300/60">
              <CircleDot size={9} />
              TRAINING
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.25fr_.75fr]">
            <div className="min-h-[520px] border-b border-white/[0.07] p-7 font-mono lg:border-b-0 lg:border-r md:p-10">
              <div className="flex items-center gap-2 text-[8px] text-white/30">
                <Activity size={11} />
                LIVE MODEL OUTPUT
              </div>

              <div className="mt-10 space-y-5">
                {logs.map((log, index) => (
                  <motion.div
                    key={log}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.15 }}
                    className="flex gap-4 text-[11px] md:text-xs"
                  >
                    <span className="text-violet-200/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-white/58">
                      <span className="text-emerald-300/55">› </span>
                      {log}
                    </span>
                  </motion.div>
                ))}

                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="mt-8 h-4 w-[7px] bg-violet-100/80"
                />
              </div>
            </div>

            <div className="p-7 md:p-9">
              {[
                ["EPOCH", "042 / 100"],
                ["LOSS", "0.0248"],
                ["ACCURACY", "97.84%"],
                ["GPU LOAD", "89%"],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className="border-b border-white/[0.07] py-6 first:pt-0"
                >
                  <p className="text-[7px] tracking-[0.22em] text-white/30">
                    {label}
                  </p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-2xl font-light text-white/85">{value}</p>

                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-violet-200"
                    />
                  </div>
                </div>
              ))}

              <div className="mt-7">
                <div className="flex justify-between text-[8px] text-white/35">
                  <span>TRAINING PROGRESS</span>
                  <span>42%</span>
                </div>

                <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-white/[0.07]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "42%" }}
                    transition={{ duration: 2 }}
                    className="h-full bg-gradient-to-r from-violet-500 to-violet-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}