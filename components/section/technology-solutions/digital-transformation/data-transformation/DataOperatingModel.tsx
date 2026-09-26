"use client";

import { motion } from "framer-motion";

const roles = [
  {
    role: "Domain teams",
    responsibility:
      "Understand the operational meaning and business context of information.",
  },
  {
    role: "Data engineering",
    responsibility:
      "Build reliable ingestion, transformation and serving systems.",
  },
  {
    role: "Platform engineering",
    responsibility:
      "Provide reusable infrastructure, environments and engineering foundations.",
  },
  {
    role: "Data governance",
    responsibility:
      "Establish standards for ownership, access, quality, classification and lifecycle.",
  },
  {
    role: "Analytics",
    responsibility:
      "Convert governed data products into measurement and decision support.",
  },
  {
    role: "AI engineering",
    responsibility:
      "Connect models and intelligent applications to controlled enterprise context.",
  },
  {
    role: "Security",
    responsibility:
      "Protect information and enforce appropriate access boundaries.",
  },
];

export default function DataOperatingModel() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <p className="font-mono text-[12px] mt-10 tracking-[0.22em] text-white/[0.28]">
            08 / OPERATING MODEL
          </p>

          <p className="max-w-[650px] mt-10 text-[22px] leading-8 text-white/[0.6]">
            Data transformation is sustained by ownership and operating
            responsibilities, not by architecture alone.
          </p>
        </div>

        <div className="mt-10 border-t border-white/[0.08]">
          {roles.map((item, index) => (
            <motion.article
              key={item.role}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="grid gap-8 border-b border-white/[0.08] py-9 md:grid-cols-[80px_.7fr_1fr]"
            >
              <span className="font-mono text-[12px] text-white/[0.6]">
                O-{String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-3xl font-extrabold tracking-[-0.035em]">
                {item.role}
              </h3>

              <p className="text-[22px] leading-8 text-white/[0.37]">
                {item.responsibility}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}