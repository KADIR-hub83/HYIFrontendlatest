"use client";

import { motion } from "framer-motion";

export default function FinOpsSection() {
  return (
    <section className="bg-black px-5 py-10 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.45fr_1.55fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
              09 / CLOUD ECONOMICS
            </p>
          </div>

          <div>
            <motion.h2
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[90px]"
            >
              Cloud cost is
              <span className="block text-white/[0.23]">
                an architecture signal.
              </span>
            </motion.h2>

            <p className="mt-12 max-w-[780px] text-[22px] leading-9 text-white/[0.42]">
              Consumption-based infrastructure changes the relationship
              between architecture and financial management. Teams need
              visibility into where cloud resources are consumed, who
              owns them and what operational value they support.
            </p>

            <div className="mt-20 grid md:grid-cols-2">
              {[
                "Allocation",
                "Visibility",
                "Ownership",
                "Forecasting",
                "Optimization",
                "Architecture",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  className="min-h-[180px] border border-white/[0.08] p-7"
                >
                  <span className="font-mono text-[6px] text-white/[0.16]">
                    F-{String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-14 text-3xl font-extrabold tracking-[-0.04em]">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}