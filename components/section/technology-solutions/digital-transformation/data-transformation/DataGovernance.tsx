"use client";

import { motion } from "framer-motion";

const governance = [
  [
    "Ownership",
    "Who is accountable for the meaning, quality and lifecycle of important information?",
  ],
  [
    "Classification",
    "What type of information is this and what handling requirements apply to it?",
  ],
  [
    "Access",
    "Which people, systems and AI applications are permitted to consume the information?",
  ],
  [
    "Quality",
    "What characteristics determine whether the dataset is suitable for its intended use?",
  ],
  [
    "Lineage",
    "Where did information originate and which transformations produced its current representation?",
  ],
  [
    "Retention",
    "How long should information remain available and what happens at the end of that period?",
  ],
  [
    "Policy",
    "Which organizational and regulatory requirements constrain how information can be processed?",
  ],
];

export default function DataGovernance() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5  md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.55fr_1.45fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="font-mono text-[12px] mt-10 tracking-[0.22em] text-white/[0.28]">
              06 / GOVERNANCE
            </p>

            <h2 className="mt-12 text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl">
              Trust needs
              <span className="block text-white/[0.22]">
                structure.
              </span>
            </h2>

            <p className="mt-10 max-w-[490px] text-[22px] leading-8 text-white/[0.32]">
              Data governance establishes ownership, meaning and
              boundaries so information can be used responsibly by
              people, applications, analytics and AI systems.
            </p>
          </div>

          <div className="border-t border-white/[0.08]">
            {governance.map(([title, text], index) => (
              <motion.article
                key={title}
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                whileHover={{
                  x: 7,
                }}
                className="grid gap-8 border-b border-white/[0.08] py-9 md:grid-cols-[70px_.55fr_1fr]"
              >
                <span className="font-mono text-[12px] text-white/[0.6]">
                  G-{String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-3xl font-extrabold tracking-[-0.035em]">
                  {title}
                </h3>

                <p className="text-[22px] leading-7 text-white/[0.37]">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}