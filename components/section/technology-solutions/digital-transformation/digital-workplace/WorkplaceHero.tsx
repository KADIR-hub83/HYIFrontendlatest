"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ArrowDown } from "lucide-react";

const workplaceWords = [
  "PEOPLE",
  "KNOWLEDGE",
  "AI",
  "WORKFLOWS",
  "COLLABORATION",
  "DECISIONS",
];

export default function WorkplaceHero() {
  const { scrollYProgress } = useScroll();

  const leftX = useTransform(
    scrollYProgress,
    [0, 0.15],
    [0, -130],
  );

  const rightX = useTransform(
    scrollYProgress,
    [0, 0.15],
    [0, 160],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.14],
    [1, 0.15],
  );

  return (
    <section className="relative min-h-[125vh] overflow-hidden bg-[#000000] px-5 pt-36 md:px-10 md:pt-44">
      <motion.div
        style={{ opacity }}
        className="mx-auto max-w-[1500px]"
      >
        <div className="grid border-y border-white/[0.08] md:grid-cols-3">
          <div className="border-b border-white/[0.08] py-5 md:border-b-0 md:border-r">
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.3]">
              DIGITAL TRANSFORMATION
            </p>
          </div>

          <div className="border-b border-white/[0.08] py-5 md:border-b-0 md:border-r md:px-6">
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.3]">
              DIGITAL WORKPLACE
            </p>
          </div>

          <div className="py-5 md:text-right">
            <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.18]">
              AI-NATIVE WORK
            </p>
          </div>
        </div>

        <div className="relative min-h-[900px]">
          <div className="grid min-h-[900px] lg:grid-cols-[1.45fr_.55fr]">
            <div className="flex flex-col justify-between py-20 lg:border-r lg:border-white/[0.08] lg:pr-16">
              <motion.div style={{ x: leftX }}>
                <span className="font-mono text-[7px] tracking-[0.25em] text-white/[0.25]">
                  THE FUTURE OF ENTERPRISE WORK
                </span>

                <h1 className="mt-12 max-w-[1100px] text-[clamp(5rem,10.5vw,11rem)] font-semibold leading-[0.76] tracking-[-0.09em]">
                  Digital
                </h1>

                <h1 className="text-[clamp(5rem,10.5vw,11rem)] font-semibold leading-[0.76] tracking-[-0.09em] text-white/[0.2]">
                  Workplace.
                </h1>
              </motion.div>

              <div className="grid gap-8 border-t border-white/[0.08] pt-10 md:grid-cols-[120px_1fr]">
                <span className="font-mono text-[6px] text-white/[0.16]">
                  DW / 001
                </span>

                <div>
                  <p className="max-w-[760px] text-[16px] leading-8 text-white/[0.48] md:text-[18px] md:leading-9">
                    Build an AI-enabled workplace where employees can
                    discover knowledge, collaborate across systems,
                    automate repetitive work and interact with
                    enterprise information through intelligent,
                    governed experiences.
                  </p>

                  <motion.a
                    href="#workplace-opening"
                    whileHover={{ x: 8 }}
                    className="mt-10 flex w-fit items-center gap-4 font-mono text-[7px] tracking-[0.2em] text-white/[0.3]"
                  >
                    EXPLORE THE WORKPLACE
                    <ArrowDown size={11} />
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="relative hidden overflow-hidden lg:block">
              <motion.div
                style={{ x: rightX }}
                className="absolute -right-10 top-10"
              >
                <span className="text-[330px] font-semibold leading-none tracking-[-0.1em] text-white/[0.03]">
                  W
                </span>
              </motion.div>

              <div className="absolute bottom-16 left-10 right-0">
                {workplaceWords.map((word, index) => (
                  <motion.div
                    key={word}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.35 + index * 0.08,
                    }}
                    className="border-t border-white/[0.07] py-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[6px] text-white/[0.15]">
                        0{index + 1}
                      </span>

                      <span className="text-[10px] tracking-[0.15em] text-white/[0.3]">
                        {word}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}