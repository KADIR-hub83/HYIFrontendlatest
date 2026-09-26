"use client";

import { motion } from "framer-motion";

const questions = [
  "Who can create cloud resources?",
  "Which regions may workloads use?",
  "How are identities assigned?",
  "Which services are approved?",
  "How are environments separated?",
  "Where can sensitive data exist?",
  "How are policy violations detected?",
  "Who owns each workload?",
  "How are exceptions approved?",
  "How is cloud consumption attributed?",
];

export default function CloudGovernance() {
  return (
    <section className="bg-black px-5 py-10 md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.6fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
              07 / GOVERNANCE
            </p>

            <h2 className="mt-10 text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl">
              Freedom
              <span className="block text-white/[0.23]">
                needs boundaries.
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-[750px] text-[22px] leading-9 text-white/[0.42]">
              Cloud platforms make infrastructure programmable and
              rapidly accessible. Governance defines the organizational
              boundaries that allow teams to use that flexibility
              responsibly.
            </p>

            <div className="mt-14 border-t border-white/[0.08]">
              {questions.map((question, index) => (
                <motion.div
                  key={question}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  className="grid grid-cols-[70px_1fr] border-b border-white/[0.08] py-6"
                >
                  <span className="font-mono text-[12px] text-white/[0.16]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[22px] text-white/[0.42]">
                    {question}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}