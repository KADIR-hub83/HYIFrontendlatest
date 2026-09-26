"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Fingerprint,
  GitBranch,
  KeyRound,
  ShieldCheck,
} from "lucide-react";

const controls = [
  { Icon: Fingerprint, title: "Identity", state: "VERIFIED" },
  { Icon: GitBranch, title: "Version", state: "TRACKED" },
  { Icon: CheckCircle2, title: "Validation", state: "PASSED" },
  { Icon: KeyRound, title: "Approval", state: "CONTROLLED" },
];

export default function GovernanceControlModel() {
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#070707] p-6 md:p-8">
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(152,120,239,.25) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            GOVERNANCE CONTROL PLANE
          </p>
          <p className="mt-2 text-[10px] text-white/[0.28]">
            Policy-aware ML lifecycle
          </p>
        </div>
        <ShieldCheck size={15} className="text-[#9878ef]" />
      </div>

      <div className="relative mx-auto mt-12 flex h-[270px] max-w-[600px] items-center justify-center">
        {[360, 270, 180].map((size, index) => (
          <motion.div
            key={size}
            animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 18 + index * 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full border border-[#9878ef]/[0.15]"
            style={{ width: size, height: size }}
          >
            <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 rounded-full bg-[#d8ccff]" />
          </motion.div>
        ))}

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative z-10 flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full border border-[#9878ef]/35 bg-[#0a0710]"
        >
          <ShieldCheck size={25} className="text-[#d8ccff]" />
          <p className="mt-3 font-mono text-[6px] text-white/[0.45]">
            CONTROLLED
          </p>
        </motion.div>
      </div>

      <div className="relative grid gap-3 md:grid-cols-4">
        {controls.map(({ Icon, title, state }, index) => (
          <motion.div
            key={title}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3,
              delay: index * 0.35,
              repeat: Infinity,
            }}
            className="rounded-[17px] border border-white/[0.06] bg-black p-4"
          >
            <Icon size={11} className="text-[#9878ef]" />
            <p className="mt-4 text-[9px]">{title}</p>
            <p className="mt-2 font-mono text-[5px] text-[#9878ef]">
              {state}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}