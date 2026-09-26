"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
} from "lucide-react";

const words = [
  "MODERNIZE",
  "MIGRATE",
  "REBUILD",
  "PLATFORM",
  "DATA",
  "AI",
  "SECURE",
  "OPERATE",
];

export default function CloudTransformationHero() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(
    scrollYProgress,
    [0, 0.15],
    [0, 140],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12],
    [1, 0.15],
  );

  return (
    <>
      <section className="relative min-h-[115vh] bg-[#000000] px-5 pb-16 p md:px-20 ">
        <div className="mx-auto max-w-[1500px]">
          

          <motion.div
            style={{
              y,
              opacity,
            }}
            className="relative flex min-h-[780px] flex-col justify-between py-16 md:py-24"
          >
            <div className="grid gap-10 lg:grid-cols-[.3fr_1.7fr]">
              <div>
                <p className="max-w-[240px] font-mono text-[12px] leading-6 tracking-[0.18em] text-white/[0.24]">
                  FROM INFRASTRUCTURE
                  <br />
                  TO AN OPERATING
                  <br />
                  FOUNDATION FOR
                  <br />
                  SOFTWARE, DATA
                  <br />
                  AND AI.
                </p>
              </div>

              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="font-mono text-[12px] tracking-[0.22em] text-white/[0.28]"
                >
                  TRANSFORMATION / NOT JUST MIGRATION
                </motion.p>

                <div className="mt-12">
                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 70,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-[clamp(4.5rem,11vw,11rem)] font-semibold leading-[0.76] tracking-[-0.09em]"
                  >
                    Cloud
                  </motion.h1>

                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 70,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-[clamp(4.5rem,11vw,11rem)] font-semibold leading-[0.96] tracking-[-0.09em] text-white/[0.22]"
                  >
                    Transformation.
                  </motion.h1>
                </div>
              </div>
            </div>

            <div className="grid gap-10 border-t border-white/[0.08] pt-9 lg:grid-cols-[.3fr_1fr_.7fr]">
              <span className="font-mono text-[7px] text-white/[0.18]">
                00 / INTRODUCTION
              </span>

              <p className="max-w-[700px] text-[22px] leading-8 text-white/[0.47]  md:leading-9">
                Cloud transformation is the redesign of technology
                foundations, delivery practices, operating models and
                governance so an enterprise can build and operate
                modern digital products, data platforms and AI
                capabilities with greater adaptability.
              </p>

              <div className="lg:text-right">
                <motion.a
                  href="#thesis"
                  whileHover={{
                    y: 5,
                  }}
                  className="inline-flex items-center gap-4 font-mono text-[12px] tracking-[0.18em] text-white/90"
                >
                  EXPLORE TRANSFORMATION
                  <ArrowDown size={10} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/[0.08] bg-black py-8">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max whitespace-nowrap"
        >
          {[...words, ...words, ...words].map(
            (word, index) => (
              <div
                key={`${word}-${index}`}
                className="flex items-center"
              >
                <span className="px-10 text-3xl font-medium tracking-[-0.045em] text-white/[0.12] md:text-5xl">
                  {word}
                </span>

                <span className="text-white/[0.15]">
                  /
                </span>
              </div>
            ),
          )}
        </motion.div>
      </section>
    </>
  );
}