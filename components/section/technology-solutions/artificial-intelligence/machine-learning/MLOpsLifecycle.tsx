"use client";

import { motion } from "framer-motion";

const lifecycle = [
  "Experiment",
  "Validate",
  "Registry",
  "Deploy",
  "Monitor",
  "Retrain",
];

export default function MLOpsLifecycle() {
  return (
    <section className="bg-white py-24 text-[#17152a] md:py-32">
      <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-[9px] uppercase tracking-[3px] text-purple-700/40">
              MLOps & Continuous Learning
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-2px] md:text-6xl">
              Models that improve
              <span className="block text-purple-700">after deployment.</span>
            </h2>

            <p className="mt-7 max-w-[550px] text-[14px] leading-7 text-[#17152a]/43">
              Production ML requires more than a model file. HYI.AI builds
              automated experimentation, versioning, deployment, observability,
              drift detection and retraining systems.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-3">
              {[
                "Model Registry",
                "Feature Stores",
                "Drift Detection",
                "Auto Retraining",
              ].map((item) => (
                <motion.div
                  whileHover={{ x: 6 }}
                  key={item}
                  className="rounded-2xl border border-purple-950/[0.08] bg-[#f8f6ff] px-4 py-4 text-[11px] text-[#17152a]/55"
                >
                  <span className="mr-3 text-purple-600">●</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[550px] items-center justify-center">
            <div className="absolute h-[450px] w-[450px] rounded-full bg-purple-300/25 blur-[100px]" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-purple-700/15"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="absolute h-[300px] w-[300px] rounded-full border border-purple-700/10"
            />

            <div className="relative z-10 flex h-[170px] w-[170px] items-center justify-center rounded-full bg-[#17152d] text-white shadow-[0_30px_80px_rgba(76,29,149,.25)]">
              <div className="text-center">
                <div className="text-2xl font-semibold">MLOps</div>
                <div className="mt-2 text-[7px] uppercase tracking-[2px] text-purple-200/45">
                  Continuous Loop
                </div>
              </div>
            </div>

            {lifecycle.map((item, i) => {
              const angle = (i / lifecycle.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 42;
              const y = 50 + Math.sin(angle) * 42;

              return (
                <motion.div
                  key={item}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border border-purple-950/10 bg-white px-4 py-3 text-[8px] uppercase tracking-[1px] text-purple-950/55 shadow-lg"
                >
                  {item}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}