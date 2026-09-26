"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Radio,
  Zap,
} from "lucide-react";

export default function RealTimeAnalyticsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-36 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e5d9f2]/[0.045] blur-[170px]" />

      {[650, 480, 320].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-[#e8def3]/[0.06]"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/[0.08] bg-black/30 px-4 py-2 backdrop-blur-xl">
          <Radio size={9} className="text-[#eee7f7]/50" />

          <span className="font-mono text-[6px] tracking-[0.25em] text-white/30">
            ALWAYS ON
          </span>

          <motion.span
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="h-1 w-1 rounded-full bg-[#eee7f7]"
          />
        </div>

        <h2 className="mx-auto mt-8 max-w-[1050px] text-5xl font-medium leading-[0.92] tracking-[-0.065em] md:text-8xl">
          Your business moves
          <span className="block bg-gradient-to-r from-white via-[#e5dcef] to-[#92869f] bg-clip-text text-transparent">
            in real time.
          </span>
          <span className="block text-white/35">
            Your intelligence should too.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[610px] text-[11px] leading-7 text-white/45">
          Build continuously running analytics systems that turn streams of
          operational events into timely signals, live metrics and actionable
          intelligence.
        </p>

        <div className="mt-11 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-full bg-[#eee8f5] px-7 py-4 text-[10px] font-medium text-black transition duration-300 hover:scale-[1.03]"
          >
            Build real-time intelligence
            <ArrowRight size={13} />
          </Link>

          <Link
            href="/technology-solutions/data-analytics"
            className="flex items-center gap-3 rounded-full border border-white/10 px-7 py-4 text-[10px] text-white/55 transition hover:bg-white/[0.04] hover:text-white"
          >
            <Zap size={11} />
            Explore Data Analytics
          </Link>
        </div>
      </div>
    </section>
  );
}