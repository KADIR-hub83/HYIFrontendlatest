"use client";

import { motion } from "framer-motion";

const architecture = [
  "Operational systems",
  "Events and APIs",
  "Ingestion",
  "Processing",
  "Lake / warehouse foundations",
  "Transformation",
  "Data products",
  "Semantic layer",
  "Analytics",
  "Machine learning",
  "Generative AI",
  "Applications",
];

export default function DataArchitecture() {
  return (
    <section className="bg-black px-5  md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[12px] mt-10 tracking-[0.22em] text-white/[0.28]">
          07 / ARCHITECTURE
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-[1100px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl"
        >
          Architecture connects
          <span className="block text-white/[0.22]">
            information to consumption.
          </span>
        </motion.h2>

        <div className="mt-10 grid border-t border-white/[0.08] md:grid-cols-2">
          {architecture.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -20 : 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="grid min-h-[30px] grid-cols-[70px_1fr] items-center border-b border-white/[0.08] p-6 md:border-x"
            >
              <span className="font-mono text-[12px] text-white/[0.6]">
                A-{String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-3xl font-extrabold tracking-[-0.035em] text-white/[0.7]">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}