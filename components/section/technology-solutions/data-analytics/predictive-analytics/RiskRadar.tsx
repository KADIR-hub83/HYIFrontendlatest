"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CircleDot,
  Radar,
  ShieldCheck,
} from "lucide-react";

const signals = [
  { left: "29%", top: "34%", delay: 0 },
  { left: "67%", top: "28%", delay: 0.35 },
  { left: "73%", top: "63%", delay: 0.7 },
  { left: "38%", top: "72%", delay: 1.05 },
  { left: "54%", top: "45%", delay: 1.4 },
];

export default function RiskRadar() {
  return (
    <div className="relative min-h-[720px] overflow-hidden rounded-[40px] border border-[#eee5ff]/10 bg-[#0a0a0c] p-7 md:p-10">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-[55%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9ddff]/[0.035] blur-[100px]" />

      {/* heading */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <p className="font-mono text-[7px] uppercase tracking-[0.32em] text-[#e9ddff]/45">
            MODEL 04
          </p>

          <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em]">
            Risk Radar
          </h3>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eee5ff]/10 bg-[#eee5ff]/[0.025]">
          <ShieldCheck
            size={23}
            strokeWidth={1.3}
            className="text-[#eee5ff]/60"
          />
        </div>
      </div>

      <p className="relative z-20 mt-4 max-w-[500px] text-sm leading-7 text-white/55">
        Detect emerging operational, financial and behavioral risks before
        critical thresholds are breached.
      </p>

      {/* RADAR */}
      <div className="relative mx-auto mt-12 aspect-square w-full max-w-[470px]">
        {/* IMPORTANT:
            overflow-hidden yahan hai.
            Ab radar sweep square bahar nahi niklega.
        */}
        <div className="absolute inset-0 overflow-hidden rounded-full border border-[#eee5ff]/10 bg-[#08080a] shadow-[inset_0_0_70px_rgba(238,229,255,.025)]">
          {/* circular rings */}
          {[82, 62, 42, 22].map((size) => (
            <div
              key={size}
              className="absolute left-1/2 top-1/2 rounded-full border border-[#eee5ff]/10"
              style={{
                width: `${size}%`,
                height: `${size}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          {/* cross lines */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#eee5ff]/[0.08]" />

          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#eee5ff]/[0.08]" />

          <div className="absolute left-[14%] top-[14%] h-[72%] w-px rotate-45 bg-[#eee5ff]/[0.035]" />

          <div className="absolute right-[14%] top-[14%] h-[72%] w-px -rotate-45 bg-[#eee5ff]/[0.035]" />

          {/* radar sweep */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-[15px] h-1/2 w-1/2 origin-bottom-left"
          >
            <div
              className="absolute inset-0 "
              style={{
                background:
                  "conic-gradient(from 270deg at 0% 100%, rgba(238,229,255,.16), rgba(238,229,255,.035) 28deg, transparent 58deg)",
              }}
            />

            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[#f5efff] via-[#e9ddff]/80 to-transparent shadow-[0_0_12px_rgba(238,229,255,.8)]" />
          </motion.div>

          {/* signals */}
          {signals.map((signal, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                left: signal.left,
                top: signal.top,
              }}
            >
              <motion.span
                animate={{
                  scale: [1, 2.6, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: signal.delay,
                }}
                className="absolute -left-[7px] -top-[7px] h-4 w-4 rounded-full border border-[#eee5ff]/30"
              />

              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: signal.delay,
                }}
                className="block h-2 w-2 rounded-full bg-[#f4efff] shadow-[0_0_18px_rgba(244,239,255,.95)]"
              />
            </div>
          ))}

          {/* center */}
          <div className="absolute left-1/2 top-1/2 z-20 flex h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#eee5ff]/20 bg-[#0b0b0d] shadow-[0_0_35px_rgba(238,229,255,.08)]">
            <Radar
              size={22}
              strokeWidth={1.2}
              className="text-[#eee5ff]/70"
            />
          </div>
        </div>

        {/* labels outside clipped radar */}
        <div className="absolute left-1/2 top-4 -translate-x-1/2 font-mono text-[6px] tracking-[0.22em] text-white/20">
          0°
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[6px] tracking-[0.22em] text-white/20">
          180°
        </div>
      </div>

      {/* bottom metrics */}
      <div className="relative z-20 mt-8 grid grid-cols-3 gap-2">
        {[
          {
            value: "05",
            label: "SIGNALS",
          },
          {
            value: "LOW",
            label: "RISK LEVEL",
          },
          {
            value: "96%",
            label: "CONFIDENCE",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[18px] border border-white/[0.06] bg-black/20 px-4 py-4"
          >
            <p className="text-lg font-light text-[#f2ecfa]">
              {item.value}
            </p>

            <p className="mt-2 font-mono text-[5px] tracking-[0.18em] text-white/25">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="relative z-20 mt-5 flex items-center gap-2 font-mono text-[6px] tracking-[0.2em] text-[#eee5ff]/30">
        <Activity size={10} />

        CONTINUOUS RISK MONITORING

        <CircleDot size={8} className="ml-auto text-emerald-300/50" />

        LIVE
      </div>
    </div>
  );
}