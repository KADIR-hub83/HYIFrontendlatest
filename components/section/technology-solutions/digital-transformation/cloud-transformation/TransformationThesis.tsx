"use client";

import { motion } from "framer-motion";

const statements = [
  {
    number: "01",
    title: "Cloud is not a destination.",
    text:
      "Moving infrastructure from one environment to another does not automatically create a modern technology organization. Transformation begins when architecture, software delivery, security, data and operations evolve together.",
  },
  {
    number: "02",
    title: "Migration is only one movement.",
    text:
      "Some workloads should migrate with limited change. Others benefit from re-platforming, refactoring, replacement or retirement. The transformation strategy should reflect business value, technical constraints and operational requirements.",
  },
  {
    number: "03",
    title: "Platforms change how teams build.",
    text:
      "Reusable cloud foundations can reduce repeated infrastructure decisions and give engineering teams consistent ways to provision environments, deploy software, observe workloads and apply security controls.",
  },
  {
    number: "04",
    title: "AI changes the cloud requirement.",
    text:
      "Modern AI workloads introduce requirements around accelerated compute, data access, model services, inference, observability, security and cost management that should be considered as part of the cloud foundation.",
  },
];

export default function TransformationThesis() {
  return (
    <section
      id="thesis"
      className="bg-[#000000] px-5 py-10 md:px-10 "
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.32fr_1.68fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.3]">
                01 / THESIS
              </p>

              <p className="mt-8 max-w-[300px] text-[22px] leading-7 text-white/[0.3]">
                Transformation starts with a different question:
                not where should infrastructure run, but how should
                technology operate?
              </p>
            </div>
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
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
              }}
              className="max-w-[1150px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[94px]"
            >
              The cloud becomes valuable
              <span className="block text-white/[0.23]">
                when the operating model changes with it.
              </span>
            </motion.h2>

            <div className="mt-24">
              {statements.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 35,
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
                    delay: index * 0.04,
                  }}
                  className="grid gap-7 border-t border-white/[0.08] py-10 md:grid-cols-[90px_.8fr_1fr]"
                >
                  <span className="font-mono text-[12px] text-white/[0.17]">
                    {item.number}
                  </span>

                  <h3 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="text-[22px] leading-8 text-white/[0.4]">
                    {item.text}
                  </p>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}