"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ArrowRight } from "lucide-react";

export default function DigitalWorkplaceCTA() {
  const { scrollYProgress } = useScroll();

  const x = useTransform(
    scrollYProgress,
    [0.78, 1],
    ["8%", "-25%"],
  );

  return (
    <section className="relative overflow-hidden bg-[#000000] px-5 py-44 md:px-10 md:py-64">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.28fr_1.72fr]">
          <div>
            <p className="font-mono text-[7px] leading-8 tracking-[0.18em] text-white/[0.18]">
              PEOPLE
              <br />
              KNOWLEDGE
              <br />
              SEARCH
              <br />
              COLLABORATION
              <br />
              COPILOTS
              <br />
              AGENTS
              <br />
              AUTOMATION
              <br />
              GOVERNANCE
            </p>
          </div>

          <div>
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
              16 / WORK REIMAGINED
            </p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 80,
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
              className="mt-16 max-w-[1250px] text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.85] tracking-[-0.08em]"
            >
              Make knowledge
              <span className="block text-white/[0.2]">
                easier to reach.
              </span>

              <span className="mt-5 block">
                Make AI
              </span>

              <span className="block text-white/[0.2]">
                useful at work.
              </span>
            </motion.h2>

            <div className="mt-24 grid gap-12 border-t border-white/[0.08] pt-10 md:grid-cols-[130px_1fr]">
              <span className="font-mono text-[6px] leading-6 tracking-[0.17em] text-white/[0.16]">
                DIGITAL
                <br />
                WORKPLACE
                <br />
                TRANSFORMATION
              </span>

              <div>
                <p className="max-w-[820px] text-[15px] leading-9 text-white/[0.44]">
                  A modern digital workplace connects people with the
                  knowledge, systems and workflows required to perform
                  their work. Artificial intelligence can make those
                  connections more natural by helping employees search,
                  understand, create and act across enterprise context.
                </p>

                <p className="mt-7 max-w-[820px] text-[13px] leading-8 text-white/[0.32]">
                  The objective is not to add AI everywhere. It is to
                  identify where intelligence can genuinely remove
                  friction while preserving security, governance,
                  accountability and human judgment.
                </p>

                <motion.div
                  whileHover={{
                    x: 8,
                  }}
                  className="mt-14 flex w-fit cursor-pointer items-center gap-5 border-b border-white/[0.18] pb-3"
                >
                  <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.42]">
                    BUILD THE DIGITAL WORKPLACE
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
        className="pointer-events-none mt-44 flex w-max items-center whitespace-nowrap"
      >
        <span className="text-[clamp(8rem,16vw,17rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.035]">
          PEOPLE
        </span>

        <span className="mx-16 text-5xl text-white/[0.04]">
          ×
        </span>

        <span className="text-[clamp(8rem,16vw,17rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.035]">
          KNOWLEDGE
        </span>

        <span className="mx-16 text-5xl text-white/[0.04]">
          ×
        </span>

        <span className="text-[clamp(8rem,16vw,17rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.035]">
          AI
        </span>
      </motion.div>
    </section>
  );
}