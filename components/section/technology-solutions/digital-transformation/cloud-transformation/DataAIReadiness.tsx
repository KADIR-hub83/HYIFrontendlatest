"use client";

import { motion } from "framer-motion";

export default function DataAIReadiness() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-10 md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
          06 / DATA + AI READINESS
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
          className="mt-14 max-w-[1350px] text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.08em]"
        >
          AI cannot become operational
          <span className="text-white/[0.23]">
            {" "}
            without usable data.
          </span>
        </motion.h2>

        <div className="mt-24 grid gap-12 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Accessible",
              text:
                "Required information can be reached through controlled interfaces and appropriate permissions.",
            },
            {
              number: "02",
              title: "Understandable",
              text:
                "Teams can determine what data means, where it originates and how it should be used.",
            },
            {
              number: "03",
              title: "Governed",
              text:
                "Access, classification, retention and use are constrained according to organizational requirements.",
            },
            {
              number: "04",
              title: "Observable",
              text:
                "Quality, freshness, failures and operational behavior can be monitored after data enters production systems.",
            },
          ].map((item) => (
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
              viewport={{ once: true }}
              className="border-t border-white/[0.08] pt-7"
            >
              <span className="font-mono text-[12px] text-white/[0.16]">
                {item.number}
              </span>

              <h3 className="mt-12 text-3xl font-extrabold tracking-[-0.05em]">
                {item.title}
              </h3>

              <p className="mt-6 text-[22px] leading-7 text-white/[0.35]">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}