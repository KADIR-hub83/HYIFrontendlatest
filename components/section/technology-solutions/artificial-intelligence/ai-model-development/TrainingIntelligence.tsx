"use client";

import { motion } from "framer-motion";

const metrics = [
  ["TRAIN LOSS", "0.0248", 84],
  ["VALIDATION", "97.8%", 97],
  ["F1 SCORE", "0.964", 94],
  ["GPU UTILIZATION", "89%", 89],
];

export default function TrainingIntelligence() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07070a] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            05 / Training Intelligence
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Experiment.
            <span className="text-white/55"> Measure. Improve.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[700px] text-[15px] leading-8 text-white/65">
            Model development is an iterative engineering process. Track
            experiments, evaluate performance and continuously optimize model
            behavior.
          </p>
        </div>

        <div className="mt-20 grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
          <div className="relative min-h-[500px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#030304] p-8">
            <p className="text-[8px] tracking-[0.25em] text-white/35">
              TRAINING CURVE
            </p>

            <div
              className="absolute inset-x-8 bottom-10 top-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <svg
              viewBox="0 0 800 300"
              className="absolute inset-x-8 bottom-12 h-[330px] w-[calc(100%-4rem)]"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0 250 C80 235 110 190 170 200 C250 210 260 140 340 155 C410 170 430 100 510 115 C590 130 610 65 690 80 C735 88 760 45 800 42"
                fill="none"
                stroke="rgba(221,201,255,.85)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5 }}
              />

              <motion.path
                d="M0 270 C100 260 120 230 210 225 C300 220 310 190 390 185 C470 180 520 145 600 140 C680 135 720 110 800 100"
                fill="none"
                stroke="rgba(167,139,250,.35)"
                strokeWidth="1"
                strokeDasharray="5 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3 }}
              />
            </svg>
          </div>

          <div className="rounded-[30px] border border-white/[0.08] bg-[#030304] p-8">
            <p className="text-[8px] tracking-[0.25em] text-white/35">
              MODEL METRICS
            </p>

            <div className="mt-9 space-y-8">
              {metrics.map(([label, value, progress], index) => (
                <div key={label as string}>
                  <div className="flex items-end justify-between">
                    <span className="text-[8px] tracking-[0.18em] text-white/35">
                      {label}
                    </span>

                    <span className="text-xl text-white/80">{value}</span>
                  </div>

                  <div className="mt-3 h-[3px] overflow-hidden bg-white/[0.07]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progress}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                      }}
                      className="h-full bg-gradient-to-r from-violet-600 to-violet-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}