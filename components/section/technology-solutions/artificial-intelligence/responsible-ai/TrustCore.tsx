"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Check,
  Eye,
  Fingerprint,
  Scale,
  ShieldCheck,
} from "lucide-react";

const satellites = [
  {
    label: "FAIRNESS",
    icon: Scale,
    className: "left-[4%] top-[20%]",
  },
  {
    label: "PRIVACY",
    icon: Fingerprint,
    className: "right-[3%] top-[21%]",
  },
  {
    label: "EXPLAIN",
    icon: Eye,
    className: "bottom-[16%] left-[8%]",
  },
  {
    label: "GOVERN",
    icon: ShieldCheck,
    className: "bottom-[15%] right-[8%]",
  },
];

export default function TrustCore() {
  return (
    <div className="relative mx-auto h-[570px] w-full max-w-[850px] md:h-[650px]">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.10] blur-[120px]" />

      {[510, 390, 280].map((size, index) => (
        <motion.div
          key={size}
          animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 25 + index * 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.08]"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        >
          <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-violet-100 shadow-[0_0_22px_rgba(221,214,254,.9)]" />
        </motion.div>
      ))}

      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotateY: [0, 360],
        }}
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateY: {
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute left-1/2 top-1/2 h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 rotate-45 rounded-[45px] border border-violet-100/25 bg-gradient-to-br from-white/[0.10] via-violet-300/[0.07] to-transparent shadow-[0_0_90px_rgba(167,139,250,.13)] backdrop-blur-2xl" />

        <div className="absolute inset-[30px] -rotate-12 rounded-[38px] border border-white/[0.13] bg-black/20" />

        <div className="absolute inset-[60px] flex items-center justify-center rounded-[30px] border border-violet-100/25 bg-violet-100/[0.08]">
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <BrainCircuit
              size={42}
              strokeWidth={1.1}
              className="text-violet-100"
            />
          </motion.div>
        </div>
      </motion.div>

      {satellites.map(({ label, icon: Icon, className }, index) => (
        <motion.div
          key={label}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute hidden md:block ${className}`}
        >
          <div className="rounded-2xl border border-white/[0.09] bg-[#0a0a0d]/80 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Icon size={13} className="text-violet-100/75" />

              <span className="text-[7px] tracking-[0.25em] text-white/50">
                {label}
              </span>

              <Check size={10} className="text-emerald-300/70" />
            </div>
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 text-center">
        <p className="text-[7px] uppercase tracking-[0.35em] text-white/30">
          HYI.AI TRUST ENGINE
        </p>

        <div className="mt-4 flex items-center justify-center gap-[3px]">
          {[5, 11, 7, 15, 20, 12, 18, 8, 14].map((height, index) => (
            <motion.span
              key={index}
              animate={{
                height: [4, height, 4],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: index * 0.07,
              }}
              className="w-[2px] rounded-full bg-violet-100/75"
            />
          ))}
        </div>
      </div>
    </div>
  );
}