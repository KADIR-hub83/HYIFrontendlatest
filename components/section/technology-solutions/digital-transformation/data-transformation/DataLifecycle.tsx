"use client";

import { motion } from "framer-motion";

const lifecycle = [
  {
    number: "01",
    title: "Create",
    text:
      "Information originates from transactions, user activity, machines, software systems, business processes and external sources.",
  },
  {
    number: "02",
    title: "Capture",
    text:
      "Relevant data is collected through interfaces that preserve sufficient context for downstream processing.",
  },
  {
    number: "03",
    title: "Transform",
    text:
      "Validation, normalization, enrichment and business logic convert source information into usable datasets.",
  },
  {
    number: "04",
    title: "Understand",
    text:
      "Metadata, lineage, ownership and semantic definitions explain what information represents and how it was produced.",
  },
  {
    number: "05",
    title: "Consume",
    text:
      "People, dashboards, applications, analytics systems and AI workloads use governed data products.",
  },
  {
    number: "06",
    title: "Observe",
    text:
      "Freshness, quality, failures and usage are monitored so operational problems can be detected.",
  },
  {
    number: "07",
    title: "Retain",
    text:
      "Information remains available according to business, operational and regulatory requirements.",
  },
  {
    number: "08",
    title: "Remove",
    text:
      "Data that has reached the end of its required lifecycle is archived or deleted according to policy.",
  },
];

export default function DataLifecycle() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5  md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-[.32fr_1.68fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-[12px] mt-10 tracking-[0.22em] text-white/[0.28]">
                04 / DATA LIFECYCLE
              </p>

              <h2 className="mt-10 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl">
                Data has
                <span className="block text-white/[0.22]">
                  a lifecycle.
                </span>
              </h2>
            </div>
          </div>

          <div>
            {lifecycle.map((item, index) => (
              <motion.article
                key={item.number}
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="min-h-[270px] border-t border-white/[0.08] py-10"
              >
                <div className="flex justify-between">
                  <span className="font-mono text-[12px] text-white/[0.6]">
                    {item.number}
                  </span>

                  <span className="font-mono text-[12px] tracking-[0.22em] text-white/[0.28]">
                    LIFECYCLE / {item.number}
                  </span>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-[.6fr_1fr]">
                  <h3 className="text-4xl font-extrabold tracking-[-0.055em] md:text-5xl">
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