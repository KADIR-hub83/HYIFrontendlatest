"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ArrowDown } from "lucide-react";

const words = [
  "DATA",
  "CONTEXT",
  "TRUST",
  "GOVERNANCE",
  "INTELLIGENCE",
  "AI",
];

export default function DataTransformationHero() {
  const { scrollYProgress } = useScroll();

  const titleX = useTransform(
    scrollYProgress,
    [0, 0.14],
    [0, -120],
  );

  const numberX = useTransform(
    scrollYProgress,
    [0, 0.14],
    [0, 160],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, 0.1],
  );

  return (
    <section className="relative  bg-[#000000] px-5 pt- md:px-10 ">
      <div className="mx-auto max-w-[1500px]">
        {/* <div className="grid border-y border-white/[0.08] md:grid-cols-[.7fr_1fr_.7fr]">
          <div className="border-b border-white/[0.08] py-5 md:border-b-0 md:border-r">
            <p className="font-mono text-[7px] tracking-[0.23em] text-white/[0.3]">
              DIGITAL TRANSFORMATION
            </p>
          </div>

          <div className="border-b border-white/[0.08] py-5 md:border-b-0 md:border-r md:px-6">
            <p className="font-mono text-[7px] tracking-[0.23em] text-white/[0.3]">
              DATA TRANSFORMATION
            </p>
          </div>

          <div className="py-5 md:pl-6 md:text-right">
            <p className="font-mono text-[7px] tracking-[0.23em] text-white/[0.18]">
              HYI.AI / DATA + AI
            </p>
          </div>
        </div> */}

        <motion.div
          style={{ opacity }}
          className="relative min-h-[700px] overflow-hidden"
        >
          <div className="grid min-h-[700px] lg:grid-cols-[1.25fr_.75fr]">
            <div className="flex flex-col justify-between border-white/[0.08] py-16 lg:border-r lg:pr-14">
              <div>
                <motion.div style={{ x: titleX }}>
                  <p className="font-mono text-[12px] tracking-[0.25em] text-white/[0.28]">
                    TRANSFORM INFORMATION INTO INTELLIGENCE
                  </p>

                  <h1 className="mt-10 text-[clamp(4.7rem,10vw,10rem)] font-semibold leading-[0.78] tracking-[-0.09em]">
                    Data
                  </h1>

                  <h1 className="text-[clamp(4.7rem,10vw,10rem)] font-semibold leading-[0.78] tracking-[-0.09em] text-white/[0.22]">
                    Transformation
                  </h1>
                </motion.div>
              </div>

              <div className="grid gap-10 border-t border-white/[0.08] pt-9 md:grid-cols-[120px_1fr]">
                <span className="font-mono text-[12px] text-white/[0.18]">
                  00 / OPENING
                </span>

                <div>
                  <p className="max-w-[720px] text-[22px] leading-8 text-white/[0.48] md:text-[17px] md:leading-9">
                    Transform fragmented enterprise information into
                    governed, accessible and AI-ready data foundations
                    capable of supporting analytics, digital products,
                    automation and intelligent applications.
                  </p>

                  <motion.a
                    href="#data-manifesto"
                    whileHover={{ x: 6 }}
                    className="mt-10 flex w-fit items-center gap-4 font-mono text-[12px] tracking-[0.2em] text-white"
                  >
                    READ THE DATA THESIS
                    <ArrowDown size={10} />
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="relative hidden overflow-hidden lg:block">
              <motion.div
                style={{ x: numberX }}
                className="absolute -right-10 top-1/2 -translate-y-1/2"
              >
                
              </motion.div>

              <div className="absolute bottom-20 left-12 right-0">
                {words.map((word, index) => (
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
                      delay: 0.4 + index * 0.08,
                    }}
                    className="border-t border-white/[0.07] py-4"
                  >
                    <div className="flex justify-between">
                      <span className="font-mono text-[12px] text-white/[0.18]">
                        0{index + 1}
                      </span>

                      <span className="text-[18px] tracking-[0.14em] text-white/[0.3]">
                        {word}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}