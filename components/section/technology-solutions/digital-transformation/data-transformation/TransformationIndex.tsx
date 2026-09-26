"use client";

import { motion } from "framer-motion";

const chapters = [
  ["01", "The Data Thesis"],
  ["02", "Current Reality"],
  ["03", "Data Foundation"],
  ["04", "Data Lifecycle"],
  ["05", "AI-Ready Data"],
  ["06", "Governance"],
  ["07", "Architecture"],
  ["08", "Operating Model"],
  ["09", "Roadmap"],
  ["10", "Principles"],
];

export default function TransformationIndex() {
  return (
    <section className="border-y border-white/[0.08] bg-[#000000] px-5 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid lg:grid-cols-[.3fr_1.7fr]">
          <div className="border-white/[0.08] py-10 lg:border-r">
            <p className="font-mono text-[12px] tracking-[0.22em] text-white/[0.25]">
              DOCUMENT INDEX
            </p>
          </div>

          <div className="lg:pl-12">
            {chapters.map(([number, title], index) => (
              <motion.div
                key={number}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.025,
                }}
                whileHover={{
                  x: 8,
                }}
                className="grid grid-cols-[70px_1fr_auto] border-b border-white/[0.07] py-5"
              >
                <span className="font-mono text-[12px] text-white/[0.4]">
                  {number}
                </span>

                <span className="text-[22px] text-white">
                  {title}
                </span>

                <span className="font-mono text-[12px] text-white/[0.5]">
                  DATA / {number}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}