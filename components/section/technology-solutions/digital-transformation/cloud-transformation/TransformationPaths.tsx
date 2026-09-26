"use client";

import { motion } from "framer-motion";

const paths = [
  [
    "01",
    "Retain",
    "Keep a workload where it is when migration would create little meaningful value.",
  ],
  [
    "02",
    "Rehost",
    "Move a workload with limited architectural change when speed or infrastructure transition is the primary objective.",
  ],
  [
    "03",
    "Replatform",
    "Change selected infrastructure or platform components while preserving much of the application architecture.",
  ],
  [
    "04",
    "Refactor",
    "Redesign application components to use cloud-native architecture, managed services or modern engineering patterns.",
  ],
  [
    "05",
    "Replace",
    "Move from a custom or legacy application toward a different product or platform where appropriate.",
  ],
  [
    "06",
    "Retire",
    "Remove workloads that no longer provide sufficient operational or business value.",
  ],
];

export default function TransformationPaths() {
  return (
    <section className="bg-black px-5 py-10 md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
          03 / TRANSFORMATION PATHS
        </p>

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
          className="mt-12 max-w-[1250px] text-[clamp(4rem,8vw,8.3rem)] font-semibold leading-[0.86] tracking-[-0.08em]"
        >
          Not every workload
          <span className="text-white/[0.22]">
            {" "}
            should take the same path.
          </span>
        </motion.h2>

        <div className="mt-24">
          {paths.map(([number, title, description]) => (
            <motion.article
              key={number}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="grid min-h-[190px] gap-8 border-t border-white/[0.08] py-9 md:grid-cols-[90px_.7fr_1fr]"
            >
              <span className="font-mono text-[12px] text-white/[0.16]">
                {number}
              </span>

              <h3 className="text-4xl font-extrabold tracking-[-0.055em] md:text-3xl">
                {title}
              </h3>

              <p className="max-w-[650px] text-[22px] leading-8 text-white/[0.38]">
                {description}
              </p>
            </motion.article>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}