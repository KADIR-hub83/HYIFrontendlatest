"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function ResponsibleAICTA() {
  return (
    <section className="relative flex min-h-[900px] items-center overflow-hidden border-t border-white/[0.06] bg-[#080706] py-32">
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[750px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.09] blur-[190px]"
      />

      {[700, 520, 350].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            rotate: index % 2 ? -360 : 360,
          }}
          transition={{
            duration: 35 + index * 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-violet-100/[0.08]"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        >
          <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-violet-100 shadow-[0_0_20px_#ddd6fe]" />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-100/20 bg-violet-100/[0.05]"
        >
          <ShieldCheck size={26} className="text-violet-100" />
        </motion.div>

        <p className="mt-10 text-[8px] uppercase tracking-[0.45em] text-violet-100/55">
          Responsible by design
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-8 max-w-[1250px] text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.07em]"
        >
          Build powerful AI.
          <span className="block bg-gradient-to-r from-white via-[#e9e1f5] to-[#a98ad1] bg-clip-text text-transparent">
            Keep humans in control.
          </span>
        </motion.h2>

        <p className="mx-auto mt-9 max-w-[760px] text-[15px] leading-8 text-white/65 md:text-lg">
          Create AI systems with governance, transparency, risk controls and
          human accountability engineered into every stage.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#f4eff9] px-9 text-sm font-medium text-black transition duration-300 hover:scale-[1.04]"
          >
            Build Responsible AI

            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <Link
            href="/technology-solutions/artificial-intelligence"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/[0.11] bg-white/[0.025] px-9 text-sm text-white/65 backdrop-blur-xl transition hover:border-violet-200/30 hover:text-white"
          >
            Explore AI Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}