"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CloudTransformationCTA() {
  return (
    <section className="relative overflow-hidden bg-[#000000] px-5 py-44 md:px-10 md:py-64">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.25fr_1.75fr]">
          <div>
            <p className="font-mono text-[14px] leading-6 tracking-[0.2em] text-white/[0.2]">
              CLOUD
              <br />
              PLATFORM
              <br />
              SOFTWARE
              <br />
              DATA
              <br />
              AI
              <br />
              SECURITY
              <br />
              OPERATIONS
            </p>
          </div>

          <div>
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.28]">
              13 / THE NEXT FOUNDATION
            </p>

            <motion.h2
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
                amount: 0.15,
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-14 max-w-[1350px] text-[clamp(4.2rem,9vw,9.3rem)] font-semibold leading-[0.83] tracking-[-0.085em]"
            >
              Transform the
              <span className="text-white/[0.23]">
                {" "}
                foundation.
              </span>

              <span className="mt-4 block">
                Change what becomes
              </span>

              <span className="block text-white/[0.23]">
                possible above it.
              </span>
            </motion.h2>

            <div className="mt-24 grid gap-12 border-t border-white/[0.08] pt-10 lg:grid-cols-[.3fr_1fr]">
              <span className="font-mono text-[14px] leading-6 tracking-[0.18em] text-white/[0.2]">
                MODERNIZE
                <br />
                PLATFORM
                <br />
                GOVERN
                <br />
                OPERATE
                <br />
                ENABLE AI
              </span>

              <div>
                <p className="max-w-[800px] text-[22px] leading-9 text-white/[0.44]">
                  Cloud transformation creates a technology foundation
                  where infrastructure, software delivery, data and AI
                  can evolve as connected capabilities rather than
                  isolated programs.
                </p>

                <p className="mt-7 max-w-[800px] text-[18px] leading-8 text-white/[0.34]">
                  The transformation is complete only when teams can
                  build, deploy, secure, observe and improve workloads
                  through an operating model that can continue evolving
                  after the migration program ends.
                </p>

                <motion.div
                  whileHover={{
                    x: 8,
                  }}
                  className="mt-14 flex w-fit items-center gap-5 border-b border-white/[0.18] pb-3"
                >
                  <span className="font-mono text-[12px] tracking-[0.2em] text-white/[0.4]">
                    START CLOUD TRANSFORMATION
                  </span>

                  <ArrowRight
                    size={11}
                    className="text-white/[0.4]"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{
          x: "10%",
        }}
        whileInView={{
          x: "-25%",
        }}
        viewport={{ once: true }}
        transition={{
          duration: 2.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="pointer-events-none mt-40 w-max whitespace-nowrap"
      >
        <span className="text-[clamp(7rem,15vw,15rem)] font-semibold leading-none tracking-[-0.09em] text-white/[0.04]">
          CLOUD → DATA → SOFTWARE → AI
        </span>
      </motion.div>
    </section>
  );
}