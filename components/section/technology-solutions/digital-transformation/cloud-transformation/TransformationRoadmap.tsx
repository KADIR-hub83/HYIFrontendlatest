"use client";

import { motion } from "framer-motion";

const roadmap = [
  [
    "01",
    "Assess",
    "Understand workloads, dependencies, architecture, operations, security, data and organizational constraints.",
  ],
  [
    "02",
    "Prioritize",
    "Group transformation opportunities according to business value, technical feasibility, risk and dependencies.",
  ],
  [
    "03",
    "Foundation",
    "Establish identity, networking, governance, environments, observability and reusable cloud patterns.",
  ],
  [
    "04",
    "Mobilize",
    "Create teams, delivery practices and migration or modernization waves.",
  ],
  [
    "05",
    "Transform",
    "Execute workload-specific migration, modernization and platform changes.",
  ],
  [
    "06",
    "Operate",
    "Run transformed workloads with reliability, security, observability and cost accountability.",
  ],
  [
    "07",
    "Expand",
    "Use the cloud foundation to accelerate data platforms, digital products and AI adoption.",
  ],
];

export default function TransformationRoadmap() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 ">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.35fr_1.65fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
              10 / ROADMAP
            </p>

            <h2 className="mt-10 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl">
              Transformation
              <span className="block text-white/[0.23]">
                in controlled waves.
              </span>
            </h2>
          </div>

          <div>
            {roadmap.map(
              ([number, title, description], index) => (
                <motion.article
                  key={number}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                  }}
                  className="min-h-[300px] border-t border-white/[0.08] py-10"
                >
                  <div className="flex justify-between">
                    <span className="font-mono text-[7px] text-white/[0.16]">
                      {number}
                    </span>

                    <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.2]">
                      PHASE {number}
                    </span>
                  </div>

                  <div className="mt-16 grid gap-9 md:grid-cols-[.65fr_1fr]">
                    <h3 className="text-4xl font-medium tracking-[-0.055em] md:text-5xl">
                      {title}
                    </h3>

                    <p className="max-w-[600px] text-[22px] leading-8 text-white/[0.38]">
                      {description}
                    </p>
                  </div>
                </motion.article>
              ),
            )}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}