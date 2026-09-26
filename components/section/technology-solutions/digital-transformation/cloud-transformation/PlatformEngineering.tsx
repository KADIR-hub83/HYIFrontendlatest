"use client";

import { motion } from "framer-motion";

const platformItems = [
  "Account and subscription structure",
  "Identity and access patterns",
  "Network foundations",
  "Infrastructure as code",
  "Application environments",
  "CI/CD integration",
  "Secrets management",
  "Observability defaults",
  "Security controls",
  "Service catalogues",
  "Developer documentation",
  "Operational ownership",
];

export default function PlatformEngineering() {
  return (
    <section className="bg-black px-5 py-10 md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
              05 / PLATFORM ENGINEERING
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
              className="mt-12 max-w-[700px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl"
            >
              Turn cloud complexity
              <span className="block text-white/[0.23]">
                into paved roads.
              </span>
            </motion.h2>

            <p className="mt-10 max-w-[620px] text-[22px] leading-8 text-white/[0.39]">
              Platform engineering can package recurring cloud
              decisions into reusable services and engineering paths.
              The objective is not to hide everything from developers;
              it is to remove unnecessary repetition while preserving
              appropriate flexibility.
            </p>
          </div>

          <div className="border-t border-white/[0.08]">
            {platformItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.025,
                }}
                whileHover={{
                  x: 6,
                }}
                className="grid grid-cols-[70px_1fr] border-b border-white/[0.08] py-6"
              >
                <span className="font-mono text-[12px] text-white/[0.16]">
                  P-{String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[22px] text-white/[0.42]">
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