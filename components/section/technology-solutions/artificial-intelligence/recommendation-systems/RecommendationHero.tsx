"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import RecommendationModel from "./RecommendationModel";

export default function RecommendationHero() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(
    scrollYProgress,
    [0, 0.18],
    [0, 100]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0.25]
  );

  return (
    <section className="relative min-h-[1150px] overflow-hidden bg-[#020203] pb-28 pt-32 md:pt-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[36%] h-[850px] w-[1100px] -translate-x-1/2 rounded-full bg-violet-700/[0.09] blur-[200px]" />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "76px 76px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 72%, transparent)",
          }}
        />

        <div className="absolute left-1/2 top-[10%] h-[1px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10"
      >
        <div className="mx-auto max-w-[1200px] text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 rounded-full border border-[#e7d9ff]/20 bg-[#e7d9ff]/[0.045] px-5 py-2.5 backdrop-blur-xl"
          >
            <Sparkles
              size={11}
              className="text-[#eadfff]"
            />

            <span className="text-[8px] uppercase tracking-[0.38em] text-[#efe8f8]/60">
              Intelligent Recommendation Systems
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-9 text-[clamp(4rem,9.5vw,10rem)] font-medium leading-[0.84] tracking-[-0.075em]"
          >
            Know what they want
            <span className="block bg-gradient-to-r from-[#ffffff] via-[#e2d5f5] to-[#a786d7] bg-clip-text text-transparent">
              before they ask.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-10 max-w-[830px] text-[15px] leading-8 text-[#ded7e7]/65 md:text-lg md:leading-9"
          >
            HYI.AI builds intelligent recommendation systems
            that understand behavior, preferences and context
            to rank the most relevant products, content,
            services and next-best actions for every user.
          </motion.p>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 1.1,
          }}
        >
          <RecommendationModel />
        </motion.div>

        <div className="relative z-30 -mt-10 flex justify-center">
          <a
            href="#personalization-stream"
            className="group flex h-14 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 text-sm text-white/65 backdrop-blur-xl transition hover:border-[#e4d6ff]/30 hover:bg-white/[0.07] hover:text-white"
          >
            Explore Intelligence
            <ArrowDown
              size={15}
              className="transition group-hover:translate-y-1"
            />
          </a>
        </div>

        <div className="mx-auto mt-20 grid max-w-[1100px] grid-cols-2 border-y border-white/[0.07] md:grid-cols-4">
          {[
            ["1:1", "PERSONALIZATION"],
            ["LIVE", "RANKING"],
            ["360°", "USER CONTEXT"],
            ["REAL-TIME", "LEARNING"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-r border-white/[0.06] px-4 py-7 text-center last:border-r-0"
            >
              <p className="text-2xl font-light text-[#f3edf8]/80">
                {value}
              </p>

              <p className="mt-2 text-[7px] uppercase tracking-[0.25em] text-white/30">
                {label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}