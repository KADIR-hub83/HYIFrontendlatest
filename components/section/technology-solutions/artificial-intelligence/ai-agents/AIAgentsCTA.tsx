"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
} from "lucide-react";

export default function AIAgentsCTA() {
  return (
    <section
      id="agent-cta"
      className="relative isolate overflow-hidden bg-[#050507] px-5 py-44 md:py-60"
    >
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[750px] w-[1150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/[0.13] blur-[200px]"
      />

      {[820, 650, 490].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            rotate:
              index % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 45 + index * 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-violet-300/[0.08]"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        >
          <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_20px_#a78bfa]" />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-[1200px] text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-500/10"
        >
          <BrainCircuit
            size={25}
            className="text-violet-200"
          />
        </motion.div>

        <p className="mt-10 text-[9px] uppercase tracking-[0.48em] text-violet-300/55">
          Agentic Enterprise
        </p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-8 text-[clamp(4rem,8.3vw,9rem)] font-medium leading-[0.87] tracking-[-0.07em]"
        >
          Give AI a goal.
          <span className="block bg-gradient-to-r from-[#EEE4FF] via-[#C28DFF] to-[#7655FF] bg-clip-text text-transparent">
            Let agents do the work.
          </span>
        </motion.h2>

        <p className="mx-auto mt-10 max-w-[720px] text-base leading-8 text-[#D7D0E0]/58">
          Design agentic AI systems that reason across
          enterprise context, collaborate with specialized
          agents and connect intelligence directly to
          business workflows.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/contact-us"
            className="group flex h-14 items-center gap-3 rounded-full bg-[#F6F1FF] px-8 text-sm font-medium text-black transition hover:scale-105"
          >
            Build Your Agent System
            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href="/technology-solutions/artificial-intelligence"
            className="flex h-14 items-center rounded-full border border-white/10 bg-white/[0.03] px-8 text-sm text-[#E3DCEB]/65 backdrop-blur-xl transition hover:border-violet-400/30 hover:text-white"
          >
            Explore AI Solutions
          </a>
        </div>
      </div>
    </section>
  );
}