"use client";

import { motion } from "framer-motion";

const principles = [
  [
    "P01",
    "Modernize with purpose.",
    "Choose architectural change because it creates operational or business value, not simply because newer technology exists.",
  ],
  [
    "P02",
    "Build foundations before scale.",
    "Identity, networking, governance and operational standards should support expansion rather than being reconstructed for every workload.",
  ],
  [
    "P03",
    "Prefer reusable paths.",
    "Repeated engineering decisions can become platform capabilities that improve consistency across teams.",
  ],
  [
    "P04",
    "Treat security as architecture.",
    "Security controls should exist throughout the platform and software lifecycle rather than appearing only at final review.",
  ],
  [
    "P05",
    "Make ownership visible.",
    "Applications, infrastructure, data and cloud consumption should have clear operational ownership.",
  ],
  [
    "P06",
    "Design for operations.",
    "A workload is not transformed when it deploys successfully; it must also be observable, supportable and recoverable.",
  ],
  [
    "P07",
    "Prepare for AI intentionally.",
    "AI infrastructure should extend a strong cloud and data foundation rather than become a disconnected parallel environment.",
  ],
];

export default function TransformationPrinciples() {
  return (
    <section className="bg-black px-5 py-10 md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
          11 / PRINCIPLES
        </p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-12 max-w-[1100px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl"
        >
          Principles survive
          <span className="text-white/[0.23]">
            {" "}
            technology cycles.
          </span>
        </motion.h2>

        <div className="mt-20">
          {principles.map(
            ([number, title, description]) => (
              <motion.article
                key={number}
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                className="grid gap-7 border-t border-white/[0.08] py-9 md:grid-cols-[90px_.8fr_1fr]"
              >
                <span className="font-mono text-[12px] text-white/[0.16]">
                  {number}
                </span>

                <h3 className="text-3xl font-medium tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="text-[18px] leading-8 text-white/[0.37]">
                  {description}
                </p>
              </motion.article>
            ),
          )}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}