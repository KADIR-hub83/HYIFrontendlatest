// "use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

import type { SOCService } from "./socServices";
import SOCModel from "./SOCModel";

export default function SOCHero({ service }: { service: SOCService }) {
  return (
    <section className="relative isolate overflow-hidden  bg-black">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* tiny grid */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.9) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        {/* subtle vertical guides */}
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.025]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.025]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.025]" />

        {/* premium large purple dots */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.14, 0.28, 0.14],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[42px] top-[27%] h-[150px] w-[150px] rounded-full bg-[#7c3aed] blur-[1px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[55px] top-[12%] h-[210px] w-[210px] rounded-full bg-[#7c3aed] blur-[2px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[12%] left-[13%] h-[90px] w-[90px] rounded-full bg-[#7c3aed]"
        />

        {/* blurred atmosphere */}
        <div className="absolute left-1/2 top-[42%] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-[#7c3aed]/[0.055] blur-[160px]" />

        {/* top fade */}
        <div className="absolute inset-x-0 top-0 h-[240px] bg-gradient-to-b from-black via-black/70 to-transparent" />

        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[350px] bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-[1500px] px-5  md:px-10  lg:px-20">
        {/* top system line */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex max-w-[1220px] items-center gap-4"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
            HYI.AI
          </span>

          <div className="h-px flex-1 bg-white/[0.07]" />

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7c3aed] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7c3aed]" />
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
              Security Operations
            </span>
          </div>

          <div className="h-px flex-1 bg-white/[0.07]" />

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
            SOC / 01
          </span>
        </motion.div> */}

        {/* =========================================================
            CENTERED INTRO
        ========================================================= */}

        <div className="relative mx-auto max-w-[930px] pb-12 pt-20 text-center md:pt-24">
         

          {/* heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto   max-w-[680px] hyi-h1 hyi-white
             "
          >
            {service.title}
          </motion.h1>

          {/* accent */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.25,
            }}
            className="
              mx-auto mt-2
              max-w-[680px]
             hyi-p hyi-blue font-bold
            "
          >
            {service.accent}
          </motion.p>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.32,
            }}
            className="
              mx-auto mt-2
              max-w-[650px]
              hyi-p
            "
          >
            {service.description}
          </motion.p>

 
        </div>


        {/* =========================================================
            FULL WIDTH MODEL STAGE
        ========================================================= */}

  

        {/* =========================================================
            BOTTOM INFO RAIL
        ========================================================= */}
{/* 
        <div className="mx-auto mt-8 grid max-w-[1220px] gap-4 pb-10 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/10" />

            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
              Continuous visibility
            </span>
          </div>

          <a
            href="#capabilities"
            className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-white/25 transition hover:border-white/15 hover:text-white/60"
          >
            <ChevronDown className="h-3.5 w-3.5" />
          </a>

          <div className="hidden items-center justify-end gap-3 md:flex">
            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
              Context / detection / response
            </span>

            <span className="h-px w-8 bg-white/10" />
          </div>
        </div> */}
      </div>
    </section>
  );
}