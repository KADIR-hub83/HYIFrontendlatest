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
    <section className="relative isolate overflow-hidden border-b border-white/[0.06] bg-black">
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
          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
            className="inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 backdrop-blur-xl"
          >
            <ShieldCheck className="h-3 w-3 text-white/45" />

            <span className="font-mono text-[12px] uppercase tracking-[0.24em] text-white/40">
              {service.eyebrow}
            </span>

            <span className="h-1 w-1 rounded-full bg-[#7c3aed]" />
          </motion.div>

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
              mx-auto mt-8
              max-w-[880px]
              text-[38px]
              font-bold
              leading-[1.06]
              tracking-[-0.04em]
              text-white
              sm:text-[46px]
              md:text-[54px]
              lg:text-[60px]
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
              mx-auto mt-7
              max-w-[680px]
              text-[13px]
              leading-7
              text-white/[0.48]
              md:text-[18px]
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
              mx-auto mt-3
              max-w-[650px]
              text-[11px]
              leading-6
              text-white/[0.27]
              md:text-[15px]
            "
          >
            {service.description}
          </motion.p>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#capabilities"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-6
                py-3
                text-[11px]
                font-medium
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-white/90
              "
            >
              Explore capabilities

              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#operations"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/[0.09]
                bg-white/[0.02]
                px-6
                py-3
                text-[11px]
                text-white/45
                backdrop-blur-xl
                transition
                hover:border-white/[0.15]
                hover:bg-white/[0.04]
                hover:text-white/70
              "
            >
              Security operations

              <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* =========================================================
            METRICS RAIL
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.48,
          }}
          className="
            relative
            z-20
            mx-auto
            mb-[-34px]
            grid
            max-w-[720px]
            grid-cols-3
            overflow-hidden
            rounded-[18px]
            border
            border-white/[0.08]
            bg-black/80
            backdrop-blur-2xl
          "
        >
          {service.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                relative
                px-4
                py-4
                text-center
                md:px-7
                ${
                  index !== service.stats.length - 1
                    ? "border-r border-white/[0.07]"
                    : ""
                }
              `}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]/80" />

                <p className="text-[13px] font-medium text-white/80 md:text-[14px]">
                  {stat.value}
                </p>
              </div>

              <p className="mt-1.5 font-mono text-[7px] uppercase tracking-[0.17em] text-white/20 md:text-[8px]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* =========================================================
            FULL WIDTH MODEL STAGE
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.48,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto max-w-[1220px]"
        >
          {/* model outer frame */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/[0.08]
              bg-[#030303]
              px-3
              pb-3
              pt-12
              shadow-[0_40px_140px_rgba(0,0,0,0.9)]
              md:px-5
              md:pb-5
            "
          >
            {/* top browser / console bar */}
            <div className="absolute inset-x-0 top-0 flex h-12 items-center justify-between border-b border-white/[0.06] px-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-[#7c3aed]/70" />

                <span className="ml-3 hidden font-mono text-[7px] uppercase tracking-[0.24em] text-white/20 sm:block">
                  Security Intelligence Environment
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden font-mono text-[7px] uppercase tracking-[0.18em] text-white/20 md:block">
                  {service.model}
                </span>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />

                  <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/30">
                    Live
                  </span>
                </div>
              </div>
            </div>

            {/* inner stage */}
            <div
              className="
                relative
                flex
                min-h-[500px]
                items-center
                justify-center
                overflow-hidden
                rounded-[22px]
                border
                border-white/[0.05]
                bg-black
                px-4
                py-10
                md:min-h-[600px]
                md:px-10
              "
            >
              {/* inner grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.055]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,.35) 1px, transparent 1px)",
                  backgroundSize: "52px 52px",
                }}
              />

              {/* center radial light */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.07] blur-[120px]" />

              {/* left telemetry */}
              <div className="absolute left-5 top-6 z-10 hidden lg:block">
                <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/15">
                  Monitoring Layer
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />

                  <span className="font-mono text-[8px] text-white/30">
                    SIGNAL ACTIVE
                  </span>
                </div>
              </div>

              {/* right telemetry */}
              <div className="absolute right-5 top-6 z-10 hidden text-right lg:block">
                <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/15">
                  Operational State
                </p>

                <p className="mt-3 font-mono text-[8px] text-white/30">
                  CONNECTED / OBSERVING
                </p>
              </div>

              {/* side labels */}
              <div className="absolute bottom-6 left-6 z-10 hidden lg:block">
                <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/15">
                  HYI.AI / SECURITY
                </p>
              </div>

              <div className="absolute bottom-6 right-6 z-10 hidden lg:block">
                <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/15">
                  SOC SYSTEM / ONLINE
                </p>
              </div>

              {/* actual unique service model */}
              <div className="relative z-[5] w-full max-w-[720px] scale-[0.92] md:scale-100">
                <SOCModel model={service.model} />
              </div>
            </div>
          </div>

          {/* bottom model shadow */}
          <div className="pointer-events-none absolute -bottom-14 left-1/2 h-24 w-[75%] -translate-x-1/2 rounded-[100%] bg-[#7c3aed]/[0.08] blur-[65px]" />
        </motion.div>

        {/* =========================================================
            BOTTOM INFO RAIL
        ========================================================= */}

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
        </div>
      </div>
    </section>
  );
}