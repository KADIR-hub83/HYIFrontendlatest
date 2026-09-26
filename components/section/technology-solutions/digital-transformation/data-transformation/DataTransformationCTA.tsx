"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ArrowRight } from "lucide-react";

export default function DataTransformationCTA() {
  const { scrollYProgress } = useScroll();

  const x = useTransform(
    scrollYProgress,
    [0.75, 1],
    ["15%", "-18%"],
  );

  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] bg-[#000000] px-5 md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.3fr_1.7fr] mt-10">
          <div>
            <p className="font-mono text-[12px] leading-7 tracking-[0.2em] text-white/[0.6]">
              INFORMATION
              <br />
              CONTEXT
              <br />
              GOVERNANCE
              <br />
              KNOWLEDGE
              <br />
              ANALYTICS
              <br />
              MACHINE LEARNING
              <br />
              GENERATIVE AI
            </p>
          </div>

          <div>
            <p className="font-mono text-[12px] tracking-[0.22em] text-white/[0.6]">
              12 / FINAL THESIS
            </p>

            <motion.h2
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
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-16 max-w-[1250px] text-[clamp(4.2rem,8.5vw,9rem)] font-semibold leading-[0.84] tracking-[-0.085em]"
            >
              Transform data.
              <span className="block text-white/[0.22]">
                Create context.
              </span>

              <span className="mt-4 block">
                Give AI something
              </span>

              <span className="block text-white/[0.22]">
                worth reasoning over.
              </span>
            </motion.h2>

            <div className="mt-10 grid gap-12 border-t border-white/[0.08] pt-10 md:grid-cols-[130px_1fr]">
              <span className="font-mono text-[12px] leading-6 tracking-[0.17em] text-white/[0.6]">
                DATA
                <br />
                TO
                <br />
                INTELLIGENCE
              </span>

              <div>
                <p className="max-w-[800px] text-[22px] leading-9 text-white/[0.44]">
                  Data transformation creates the information
                  foundation required for modern analytics,
                  automation and artificial intelligence. The goal
                  is not simply to move data into a newer platform.
                  It is to make enterprise information more
                  understandable, governed, reusable and operational.
                </p>

                <p className="mt-7 max-w-[800px] text-[22px] leading-8 text-white/[0.33]">
                  When trusted information can move from operational
                  systems into reusable data products and governed AI
                  context, the data platform becomes part of how the
                  organization learns, builds and makes decisions.
                </p>

                <motion.div
                  whileHover={{
                    x: 8,
                  }}
                  className="mt-10 flex w-fit items-center gap-5 border-b border-white/[0.18] pb-3"
                >
                  <span className="font-mono text-[12px] tracking-[0.2em] text-white">
                    START DATA TRANSFORMATION
                  </span>

                  <ArrowRight
                    size={11}
                    className="text-white/[0.42]"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        style={{ x }}
        className="pointer-events-none mt-5 flex w-max items-center whitespace-nowrap"
      >
        <span className="text-[clamp(4rem,8vw,8rem)] font-semibold leading-none tracking-[0.1em] text-white/[0.6]">
          DATA
        </span>

        <span className="mx-16 text-5xl text-white/[0.6]">
          →
        </span>

        <span className="text-[clamp(4rem,8vw,8rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.6]">
          KNOWLEDGE
        </span>

        <span className="mx-16 text-5xl text-white/[0.6]">
          →
        </span>

        <span className="text-[clamp(4rem,8vw,8rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.6]">
          AI
        </span>
      </motion.div>
    </section>
  );
}