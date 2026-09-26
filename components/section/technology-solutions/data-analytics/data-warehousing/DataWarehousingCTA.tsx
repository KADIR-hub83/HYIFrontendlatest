"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Database } from "lucide-react";

export default function DataWarehousingCTA() {
  return (
    <section className="relative flex min-h-[950px] items-center overflow-hidden bg-[#030303] py-32">
      <div className="absolute left-1/2 top-1/2 h-[750px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ddd0f4]/[0.07] blur-[190px]" />

      {[700, 540, 390].map((size, index) => (
        <motion.div
          key={size}
          animate={{ rotate: index % 2 ? -360 : 360 }}
          transition={{
            duration: 30 + index * 11,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-[#eee5ff]/[0.08]"
          style={{
            width: size,
            height: size * 0.38,
            marginLeft: -size / 2,
            marginTop: -(size * 0.38) / 2,
          }}
        />
      ))}

      <motion.div
        animate={{ y: [-280, 280, -280] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#eee5ff]/20 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#eee5ff]/20 bg-[#eee5ff]/[0.05]"
        >
          <Database size={24} className="text-[#f0e8ff]" />
        </motion.div>

        <p className="mt-9 font-mono text-[8px] uppercase tracking-[0.4em] text-[#eee5ff]/50">
          HYI.AI Data Warehousing
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto mt-8 max-w-[1300px] text-[clamp(4rem,8.5vw,9rem)] font-medium leading-[0.87] tracking-[-0.075em]"
        >
          Turn every dataset
          <span className="block bg-gradient-to-r from-white via-[#eee5ff] to-[#b59bd7] bg-clip-text text-transparent">
            into one truth.
          </span>
        </motion.h2>

        <p className="mx-auto mt-9 max-w-[760px] text-[15px] leading-8 text-white/60 md:text-lg">
          Build a secure, governed and high-performance data warehouse that
          connects your enterprise and gives analytics and AI a foundation they
          can trust.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#f1ebf8] px-10 text-sm font-medium text-[#080808] transition hover:scale-[1.03]"
          >
            Build Your Warehouse

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <Link
            href="/technology-solutions/data-analytics"
            className="inline-flex h-14 items-center justify-center rounded-full border border-[#eee5ff]/[0.13] bg-[#eee5ff]/[0.025] px-10 text-sm text-white/60 transition hover:border-[#eee5ff]/30 hover:text-white"
          >
            Explore Data Analytics
          </Link>
        </div>
      </div>
    </section>
  );
}