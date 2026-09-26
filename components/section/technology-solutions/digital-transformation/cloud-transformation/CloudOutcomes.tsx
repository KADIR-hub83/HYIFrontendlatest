"use client";

import { motion } from "framer-motion";

const outcomes = [
  "Modern technology foundations",
  "Faster infrastructure provisioning",
  "More repeatable software delivery",
  "Stronger operational visibility",
  "Governed cloud consumption",
  "Improved workload portability",
  "Better data accessibility",
  "AI-ready infrastructure",
];

export default function CloudOutcomes() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-52">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
          12 / TRANSFORMATION OUTCOMES
        </p>

        <div className="mt-20 grid md:grid-cols-2">
          {outcomes.map((item, index) => (
            <motion.article
              key={item}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              whileHover={{
                x: 7,
              }}
              className="min-h-[250px] border border-white/[0.08] p-8"
            >
              <span className="font-mono text-[6px] text-white/[0.16]">
                O-{String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-24 max-w-[550px] text-3xl font-medium leading-[1.02] tracking-[-0.05em] md:text-4xl">
                {item}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}