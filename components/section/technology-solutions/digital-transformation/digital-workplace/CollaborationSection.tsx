"use client";

import { motion } from "framer-motion";

const collaboration = [
  "Communication",
  "Meetings",
  "Shared knowledge",
  "Project coordination",
  "Decision records",
  "Document collaboration",
  "Communities",
  "Expert discovery",
];

export default function CollaborationSection() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-40 md:px-10 md:py-56">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
              07 / COLLABORATION
            </p>

            <h2 className="mt-12 text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl">
              Collaboration
              <span className="block text-white/[0.2]">
                creates knowledge.
              </span>
            </h2>

            <p className="mt-10 max-w-[480px] text-[13px] leading-8 text-white/[0.35]">
              Modern workplace design should consider not only how
              employees communicate, but how useful context generated
              through collaboration can remain discoverable and
              appropriately governed.
            </p>
          </div>

          <div className="border-t border-white/[0.08]">
            {collaboration.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                className="grid grid-cols-[70px_1fr] border-b border-white/[0.08] py-7"
              >
                <span className="font-mono text-[6px] text-white/[0.14]">
                  C-{String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-2xl font-medium tracking-[-0.04em] text-white/[0.65]">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}