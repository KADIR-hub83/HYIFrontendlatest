"use client";

import { motion } from "framer-motion";

const security = [
  [
    "Identity",
    "Authenticate people, services and workloads before granting access.",
  ],
  [
    "Least privilege",
    "Limit permissions to what a role or workload actually requires.",
  ],
  [
    "Network control",
    "Design connectivity according to workload exposure and trust boundaries.",
  ],
  [
    "Secrets",
    "Manage credentials and sensitive configuration through controlled services.",
  ],
  [
    "Data protection",
    "Apply appropriate controls to data in storage, transit and application use.",
  ],
  [
    "Workload security",
    "Protect compute, containers, functions and application runtimes.",
  ],
  [
    "Detection",
    "Collect signals that help identify suspicious or unexpected behavior.",
  ],
  [
    "Response",
    "Prepare operational processes for investigating and containing security events.",
  ],
];

export default function CloudSecurity() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-10 md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
          08 / CLOUD SECURITY
        </p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-12 max-w-[1100px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl"
        >
          Security becomes part
          <span className="text-white/[0.23]">
            {" "}
            of the platform.
          </span>
        </motion.h2>

        <div className="mt-20">
          {security.map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -20 : 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              className="grid gap-7 border-t border-white/[0.08] py-8 md:grid-cols-[90px_.6fr_1fr]"
            >
              <span className="font-mono text-[12px] text-white/[0.16]">
                S-{String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-3xl font-medium">
                {title}
              </h3>

              <p className="text-[22px] leading-7 text-white/[0.36]">
                {text}
              </p>
            </motion.div>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}