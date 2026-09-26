"use client";

import { motion } from "framer-motion";

const statements = [
  "Work is no longer contained inside a single application.",
  "Knowledge is distributed across documents, conversations, systems and people.",
  "Employees increasingly expect AI to help them navigate that complexity.",
];

export default function WorkplaceOpening() {
  return (
    <section
      id="workplace-opening"
      className="border-y border-white/[0.08] bg-[#000000] px-5 py-40 md:px-10 md:py-64"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.3fr_1.7fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
                01 / THE PREMISE
              </p>

              <p className="mt-8 max-w-[260px] text-[11px] leading-7 text-white/[0.27]">
                Digital workplace transformation is increasingly about
                reducing the distance between people, knowledge and
                action.
              </p>
            </div>
          </div>

          <div>
            {statements.map((statement, index) => (
              <motion.article
                key={statement}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                transition={{
                  duration: 0.85,
                }}
                className="border-t border-white/[0.08] py-16 md:py-24"
              >
                <div className="grid gap-10 md:grid-cols-[80px_1fr]">
                  <span className="font-mono text-[6px] text-white/[0.14]">
                    0{index + 1}
                  </span>

                  <h2 className="max-w-[1100px] text-4xl font-medium leading-[1.12] tracking-[-0.055em] text-white/[0.86] md:text-6xl">
                    {statement}
                  </h2>
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