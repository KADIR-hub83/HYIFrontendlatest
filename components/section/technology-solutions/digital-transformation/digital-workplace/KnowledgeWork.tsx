"use client";

import { motion } from "framer-motion";

const knowledge = [
  [
    "Documents",
    "Policies, specifications, proposals, reports and operational documentation form part of the organization's explicit knowledge.",
  ],
  [
    "Conversations",
    "Important context can exist in collaboration systems, support discussions, meeting records and project communication.",
  ],
  [
    "Business systems",
    "CRM, ERP, ticketing and operational applications contain structured context required to understand current business state.",
  ],
  [
    "People",
    "A significant amount of organizational knowledge remains experiential and depends on employees knowing who to ask.",
  ],
  [
    "Processes",
    "Workflow rules, approvals and operational procedures describe how work should move through the organization.",
  ],
  [
    "Decisions",
    "Historical decisions and their supporting context can provide valuable organizational memory when captured responsibly.",
  ],
];

export default function KnowledgeWork() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.42fr_1.58fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
                04 / KNOWLEDGE
              </p>

              <h2 className="mt-12 text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl">
                Work depends
                <span className="block text-white/[0.2]">
                  on context.
                </span>
              </h2>
            </div>
          </div>

          <div className="border-t border-white/[0.08]">
            {knowledge.map(([title, description], index) => (
              <motion.article
                key={title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="grid gap-8 border-b border-white/[0.08] py-10 md:grid-cols-[70px_.55fr_1fr]"
              >
                <span className="font-mono text-[6px] text-white/[0.14]">
                  K-{String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-2xl font-medium tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="text-[13px] leading-8 text-white/[0.36]">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}