"use client";

import { motion } from "framer-motion";

const layers = [
  {
    number: "01",
    label: "BUSINESS",
    title: "Product direction",
    text:
      "Technology investment connects to business capabilities, customer experiences and measurable operational needs.",
  },
  {
    number: "02",
    label: "PLATFORM",
    title: "Cloud foundation",
    text:
      "Shared infrastructure patterns provide networking, identity, environments, policies and deployment foundations.",
  },
  {
    number: "03",
    label: "ENGINEERING",
    title: "Software delivery",
    text:
      "Development teams use repeatable paths for building, testing, deploying and operating applications.",
  },
  {
    number: "04",
    label: "DATA",
    title: "Information foundation",
    text:
      "Data platforms make governed information available to analytics, applications and artificial intelligence.",
  },
  {
    number: "05",
    label: "AI",
    title: "Intelligence layer",
    text:
      "Model services, retrieval, inference and AI applications operate on top of controlled cloud and data foundations.",
  },
  {
    number: "06",
    label: "SECURITY",
    title: "Continuous control",
    text:
      "Identity, policy, secrets, workload protection and monitoring are integrated throughout the operating environment.",
  },
  {
    number: "07",
    label: "OPERATIONS",
    title: "Reliability",
    text:
      "Observability, incident response, resilience and capacity management support workloads after deployment.",
  },
  {
    number: "08",
    label: "ECONOMICS",
    title: "Financial accountability",
    text:
      "Cloud consumption becomes visible enough for teams to understand cost, ownership and architectural trade-offs.",
  },
];

export default function CloudOperatingModel() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-10 md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
            02 / CLOUD OPERATING MODEL
          </p>

          <p className="max-w-[520px] text-[22px] leading-7 text-white/[0.32]">
            Cloud transformation spans more than infrastructure.
            The operating model connects business priorities,
            platforms, engineering, data, AI, security and operations.
          </p>
        </div>

        <div className="mt-20">
          {layers.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -25 : 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
              }}
              whileHover={{
                x: 8,
              }}
              className="group grid gap-6 border-t border-white/[0.08] py-8 md:grid-cols-[70px_.35fr_.65fr_1fr]"
            >
              <span className="font-mono text-[12px] text-white/[0.16]">
                {item.number}
              </span>

              <span className="font-mono text-[15px] tracking-[0.18em] text-white/[0.26]">
                {item.label}
              </span>

              <h3 className="text-3xl font-extrabold tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-1">
                {item.title}
              </h3>

              <p className="max-w-[650px] text-[22px] leading-7 text-white/[0.37]">
                {item.text}
              </p>
            </motion.article>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}