"use client";

import { motion } from "framer-motion";

const questions = [
  "Where is the latest policy?",
  "What changed in this project?",
  "Who owns this process?",
  "What did we decide last quarter?",
  "Which customer cases are similar?",
  "What information can I access?",
  "What should happen next?",
];

export default function EnterpriseSearch() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-44 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
          05 / ENTERPRISE SEARCH
        </p>

        <h2 className="mt-14 max-w-[1100px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl">
          Search should understand
          <span className="block text-white/[0.2]">
            the question behind the query.
          </span>
        </h2>

        <div className="mt-28">
          {questions.map((question, index) => (
            <motion.div
              key={question}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              whileHover={{
                x: 10,
              }}
              className="grid gap-8 border-t border-white/[0.08] py-10 md:grid-cols-[100px_1fr]"
            >
              <span className="font-mono text-[6px] text-white/[0.14]">
                QUERY {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-3xl font-medium tracking-[-0.045em] text-white/[0.72] md:text-5xl">
                “{question}”
              </p>
            </motion.div>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}