"use client";

import { motion } from "framer-motion";

const outcomes = [
  {
    number: "01",
    title: "Trusted information",
    text:
      "Critical datasets become easier to understand, govern and reuse.",
  },
  {
    number: "02",
    title: "Reusable data products",
    text:
      "Teams consume shared information instead of repeatedly rebuilding the same transformations.",
  },
  {
    number: "03",
    title: "Faster analytics",
    text:
      "Analysts spend less time locating and reconstructing foundational information.",
  },
  {
    number: "04",
    title: "AI readiness",
    text:
      "Enterprise knowledge becomes more accessible to governed retrieval and intelligent applications.",
  },
  {
    number: "05",
    title: "Clear ownership",
    text:
      "Important information has defined technical and business accountability.",
  },
  {
    number: "06",
    title: "Operational visibility",
    text:
      "Teams gain better understanding of data movement, quality, freshness and failures.",
  },
];

export default function DataOutcomes() {
  return (
    <section className="bg-black px-5  md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-12 border-b border-white/[0.08] pb-14 lg:flex-row mt-10">
          <p className="font-mono text-[12px] tracking-[0.22em] text-white/[0.6]">
            11 / OUTCOMES
          </p>

          <h2 className="max-w-[850px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl">
            What changes
            <span className="text-white/[0.22]">
              {" "}
              after transformation.
            </span>
          </h2>
        </div>

        <div>
          {outcomes.map((item, index) => (
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
              className="grid min-h-[90px] gap-8 border-b border-white/[0.08] py-9 md:grid-cols-[80px_.8fr_1fr]"
            >
              <span className="font-mono text-[12px] text-white/[0.6]">
                {item.number}
              </span>

              <h3 className="text-3xl font-extrabold tracking-[-0.05em]">
                {item.title}
              </h3>

              <p className="max-w-[600px] text-[22px] leading-8 text-white/[0.37]">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}