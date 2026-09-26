"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";

export default function DashboardCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#030303] py-40">
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.05, 0.14, 0.05],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6] blur-[190px]"
      />

      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#7046e6]/20 to-transparent" />

      {[320, 500, 700].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            rotate: index % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 30 + index * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-[#7046e6]/10"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        >
          <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 rounded-full bg-[#7046e6]" />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-[1100px] px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.06] px-4 py-2">
            <BarChart3 size={10} className="text-[#a286f0]" />
            <span className="font-mono text-[6px] tracking-[0.2em] text-[#a286f0]">
              HYI.AI DASHBOARD DEVELOPMENT
            </span>
          </div>

          <h2 className="mx-auto mt-8 max-w-[1000px] text-5xl font-medium leading-[0.94] tracking-[-0.065em] md:text-8xl">
            Stop reporting data.
            <span className="block text-[#7046e6]">
              Start communicating decisions.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[670px] text-[10px] leading-7 text-white/42">
            Design dashboards around business decisions, trusted metrics and
            clear information hierarchy—then connect them to a reliable data
            foundation that can evolve with the organization.
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-[#7046e6] px-7 py-4 text-[9px] font-medium text-white transition duration-300 hover:scale-[1.04] hover:bg-[#7e5ae9]"
          >
            Build your dashboard
            <ArrowRight size={12} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}