"use client";

import { motion } from "framer-motion";

const manifesto = [
  "Data should be treated as an operational product, not an accidental by-product of applications.",
  "Artificial intelligence depends on the quality, accessibility and meaning of the information available to it.",
  "Governance should enable responsible use rather than create an isolated approval process.",
  "Architecture should make trusted data easier to discover, understand and consume.",
];

export default function DataManifesto() {
  return (
    <section
      id="data-manifesto"
      className="bg-black px-5 py- md:px-10 "
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.25fr_1.75fr]">
          <div>
            <div className="lg:sticky mt-10">
              <p className="font-mono text-[12px] tracking-[0.22em] text-white/[0.28]">
                01 / MANIFESTO
              </p>

              <p className="mt-8 max-w-[250px] text-[22px] leading-7 text-white/[0.27]">
                Four ideas define the foundation of a modern data
                transformation.
              </p>
            </div>
          </div>

          <div>
            {manifesto.map((text, index) => (
              <motion.article
                key={text}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="border-t border-white/[0.08] py-14 md:py-20"
              >
                <div className="grid gap-10 md:grid-cols-[80px_1fr]">
                  <span className="font-mono text-[12px] text-white/[0.7]">
                    M-{String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="max-w-[1050px] text-3xl font-medium leading-[1.18] tracking-[-0.045em] text-white/[0.85] md:text-5xl md:leading-[1.1]">
                    {text}
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