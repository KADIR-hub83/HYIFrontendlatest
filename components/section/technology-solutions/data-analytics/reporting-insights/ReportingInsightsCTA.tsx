"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  FileBarChart,
  Sparkles,
} from "lucide-react";

export default function ReportingInsightsCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#030303] py-40">
      <motion.div
        animate={{
          scale: [0.9, 1.2, 0.9],
          opacity: [0.05, 0.13, 0.05],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[650px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6] blur-[200px]"
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(112,70,230,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(112,70,230,.2) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(circle at center,black,transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(circle at center,black,transparent 68%)",
        }}
      />

      {[320, 500, 720].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            rotate: index % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 35 + index * 12,
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
          <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 rounded-full bg-[#7046e6] shadow-[0_0_18px_#7046e6]" />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-[1150px] px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.07] px-4 py-2">
            <FileBarChart size={10} className="text-[#a68bf2]" />

            <span className="font-mono text-[6px] tracking-[0.2em] text-[#a68bf2]">
              HYI.AI / REPORTING & INSIGHTS
            </span>
          </div>

          <h2 className="mx-auto mt-9 max-w-[1050px] text-5xl font-medium leading-[0.92] tracking-[-0.065em] md:text-8xl">
            Your data already
            <span className="block text-white/30">
              has a story.
            </span>
            <span className="block text-[#7046e6]">
              Make it understandable.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[700px] text-[10px] leading-7 text-white/42">
            Build a reporting environment where trusted metrics, clear
            communication and analytical exploration work together—helping
            teams move from monitoring performance toward understanding it.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="group flex items-center gap-3 rounded-full bg-[#7046e6] px-7 py-4 text-[8px] font-medium transition duration-300 hover:scale-[1.04] hover:bg-[#7e5ae9]"
            >
              Build your reporting system
              <ArrowRight
                size={11}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/technology-solutions/data-analytics"
              className="flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-7 py-4 text-[8px] text-white/50 transition hover:border-[#7046e6]/30 hover:text-white"
            >
              <BrainCircuit size={11} />
              Explore Data Analytics
            </Link>
          </div>

          <motion.div
            animate={{ opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mx-auto mt-16 flex w-fit items-center gap-2 font-mono text-[5px] tracking-[0.18em] text-white/20"
          >
            <Sparkles size={8} className="text-[#7046e6]" />
            REPORT → INTERPRET → UNDERSTAND
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}