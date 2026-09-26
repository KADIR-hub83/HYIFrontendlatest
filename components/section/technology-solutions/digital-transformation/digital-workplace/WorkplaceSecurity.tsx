"use client";

import { motion } from "framer-motion";

const security = [
  ["Least privilege", "Users and AI systems receive only the access required for the intended workplace capability."],
  ["Data protection", "Sensitive enterprise information remains protected throughout retrieval, processing and workflow execution."],
  ["Secure integrations", "Connections to business applications are authenticated, authorized and appropriately scoped."],
  ["Prompt boundaries", "AI interfaces are designed to reduce opportunities for users or external content to bypass intended controls."],
  ["Monitoring", "Operational signals help teams identify unusual access patterns, failures and unexpected AI behavior."],
  ["Human control", "High-impact actions can require explicit approval or remain entirely human-executed."],
];

export default function WorkplaceSecurity() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-40 md:px-10 md:py-56">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.55fr_1.45fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
              11 / SECURITY
            </p>

            <h2 className="mt-12 text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl">
              Accessible
              <span className="block text-white/[0.2]">
                does not mean open.
              </span>
            </h2>
          </div>

          <div className="border-t border-white/[0.08]">
            {security.map(([title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid gap-8 border-b border-white/[0.08] py-9 md:grid-cols-[70px_.55fr_1fr]"
              >
                <span className="font-mono text-[6px] text-white/[0.14]">
                  SEC-{String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-medium">
                  {title}
                </h3>

                <p className="text-[12px] leading-7 text-white/[0.36]">
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