"use client";

import { motion } from "framer-motion";

const items = [
  {
    number: "A01",
    title: "Accelerated compute",
    text:
      "AI workloads may require GPU or other accelerated compute capacity with different scheduling, availability and cost characteristics than conventional applications.",
  },
  {
    number: "A02",
    title: "Model services",
    text:
      "Cloud platforms can expose managed model APIs, model hosting, inference services and supporting AI infrastructure.",
  },
  {
    number: "A03",
    title: "Enterprise knowledge",
    text:
      "AI applications often require secure access to organizational information through retrieval and governed data services.",
  },
  {
    number: "A04",
    title: "AI application runtime",
    text:
      "Agents, retrieval services, APIs and application components require reliable environments for production execution.",
  },
  {
    number: "A05",
    title: "AI observability",
    text:
      "Operational visibility should extend beyond infrastructure into model requests, latency, failures, retrieval and application behavior.",
  },
];

export default function AICloudFoundation() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-10 md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.45fr_1.55fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
                04 / AI CLOUD FOUNDATION
              </p>

              <p className="mt-9 max-w-[330px] text-[22px] leading-7 text-white/[0.32]">
                Cloud transformation increasingly needs to anticipate
                the infrastructure and governance requirements of
                enterprise AI.
              </p>
            </div>
          </div>

          <div>
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
              className="text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[92px]"
            >
              Build a cloud foundation
              <span className="block text-white/[0.23]">
                ready for AI.
              </span>
            </motion.h2>

            <p className="mt-12 max-w-[780px] text-[22px] leading-9 text-white/[0.42]">
              Generative AI introduces new infrastructure patterns
              without removing traditional cloud engineering
              requirements. Reliable networking, identity, security,
              data governance and operations remain fundamental while
              compute and model services become more specialized.
            </p>

            <div className="mt-20">
              {items.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  className="grid gap-6 border-t border-white/[0.08] py-8 md:grid-cols-[70px_.6fr_1fr]"
                >
                  <span className="font-mono text-[12px] text-white/[0.16]">
                    {item.number}
                  </span>

                  <h3 className="text-3xl font-medium tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="text-[22px] leading-7 text-white/[0.36]">
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