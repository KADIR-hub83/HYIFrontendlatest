"use client";

import { motion } from "framer-motion";

const phases = [
  {
    phase: "01",
    title: "Discover",
    text:
      "Map critical information domains, source systems, consumers, pain points, ownership and existing architecture.",
  },
  {
    phase: "02",
    title: "Define",
    text:
      "Establish target principles, governance expectations, platform boundaries and priority business outcomes.",
  },
  {
    phase: "03",
    title: "Foundation",
    text:
      "Build reusable ingestion, storage, transformation, cataloguing, security and observability capabilities.",
  },
  {
    phase: "04",
    title: "Transform",
    text:
      "Move priority information domains toward governed and reusable data products.",
  },
  {
    phase: "05",
    title: "Activate",
    text:
      "Connect trusted information to analytics, applications, automation, machine learning and generative AI.",
  },
  {
    phase: "06",
    title: "Scale",
    text:
      "Expand reusable patterns across domains while strengthening governance and operational ownership.",
  },
];

export default function TransformationRoadmap() {
  return (
    <section className="bg-black px-5  md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.3fr_1.7fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-[12px] mt-10 tracking-[0.22em] text-white/[0.28]">
                09 / ROADMAP
              </p>

              <p className="mt-8 max-w-[460px] text-[22px] leading-7 text-white/[0.28]">
                Build transformation through controlled information
                domains rather than attempting to redesign everything
                simultaneously.
              </p>
            </div>
          </div>

          <div>
            {phases.map((item) => (
              <motion.article
                key={item.phase}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.75,
                }}
                className="min-h-[130px] border-t border-white/[0.08] py-10"
              >
                <div className="flex justify-between">
                  <span className="font-mono text-[12px] text-white/[0.6]">
                    {item.phase}
                  </span>

                  <span className="font-mono text-[12px] tracking-[0.2em] text-white/[0.6]">
                    TRANSFORMATION PHASE
                  </span>
                </div>

                <div className="mt-20 grid gap-10 md:grid-cols-[.65fr_1fr]">
                  <h3 className="text-3xl font-extrabold tracking-[-0.035em] md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="max-w-[620px] text-[22px] leading-8 text-white/[0.38]">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}