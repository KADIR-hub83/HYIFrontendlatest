"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function RecommendationCTA() {
  return (
    <section className="relative flex min-h-[950px] items-center overflow-hidden bg-[#050506] py-36">
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[750px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a575e8]/[0.10] blur-[190px]"
      />

      {[760, 590, 430].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            rotate:
              index % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 35 + index * 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-[#e3d4fa]/[0.09]"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        >
          <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#eee4fa] shadow-[0_0_20px_rgba(238,228,250,.8)]" />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-5 text-center md:px-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#e5d7fa]/20 bg-[#e5d7fa]/[0.06]"
        >
          <Sparkles
            size={24}
            className="text-[#eee4fa]"
          />
        </motion.div>

        <p className="mt-10 text-[8px] uppercase tracking-[0.48em] text-[#d9c7f5]/60">
          Intelligent Personalization
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
          className="mx-auto mt-8 max-w-[1200px] text-[clamp(4rem,8.4vw,9rem)] font-medium leading-[0.87] tracking-[-0.07em]"
        >
          Stop showing everyone
          <span className="block bg-gradient-to-r from-white via-[#dfd2ed] to-[#a884d5] bg-clip-text text-transparent">
            the same thing.
          </span>
        </motion.h2>

        <p className="mx-auto mt-10 max-w-[760px] text-[15px] leading-8 text-[#ded7e7]/62 md:text-lg">
          Build recommendation systems that transform
          customer behavior and contextual signals into
          personalized products, content, services and
          intelligent next-best actions.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group flex h-14 items-center gap-3 rounded-full bg-[#f4eff9] px-9 text-sm font-medium text-black transition duration-300 hover:scale-105"
          >
            Build Recommendation System

            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <Link
            href="/technology-solutions/artificial-intelligence"
            className="flex h-14 items-center rounded-full border border-white/10 bg-white/[0.03] px-9 text-sm text-white/65 backdrop-blur-xl transition hover:border-[#e4d6f8]/30 hover:text-white"
          >
            Explore AI Solutions
          </Link>
        </div>

        <div className="mx-auto mt-28 flex max-w-[850px] items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#dfceff]/25" />

          <span className="text-[7px] uppercase tracking-[0.32em] text-white/30">
            Understand · Predict · Rank · Personalize
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#dfceff]/25" />
        </div>
      </div>
    </section>
  );
}