"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  Globe2,
  Radio,
  Server,
} from "lucide-react";

const destinations = [
  { Icon: Globe2, label: "WEB APP", x: "8%", y: "24%" },
  { Icon: Cloud, label: "API", x: "8%", y: "72%" },
  { Icon: Database, label: "DATA", x: "92%", y: "24%" },
  { Icon: Server, label: "SERVICE", x: "92%", y: "72%" },
];

export default function ModelDeploymentNetwork() {
  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-[36px] border border-[#7046e6]/20 bg-[#030303]">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(152,120,239,.3) 1px,transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/[0.08] blur-[100px]" />

      <div className="absolute left-7 top-7 z-20">
        <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
          MODEL DEPLOYMENT NETWORK
        </p>
        <p className="mt-2 text-[10px] text-white/[0.28]">
          Production serving topology
        </p>
      </div>

      <div className="absolute right-7 top-7 z-20 flex items-center gap-2">
        <Radio size={11} className="animate-pulse text-[#9878ef]" />
        <span className="font-mono text-[6px] text-[#9878ef]">SERVING</span>
      </div>

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {[
          "M 8 24 Q 28 35 50 50",
          "M 8 72 Q 28 64 50 50",
          "M 50 50 Q 72 34 92 24",
          "M 50 50 Q 72 65 92 72",
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="#9878ef"
            strokeWidth="0.13"
            strokeDasharray="1.4 1.5"
            animate={{ strokeDashoffset: [0, -12] }}
            transition={{
              duration: 3 + index * 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {[410, 300, 205].map((size, index) => (
        <motion.div
          key={size}
          animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 20 + index * 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-[#9878ef]/[0.13]"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        >
          <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#d7caff] shadow-[0_0_18px_#9878ef]" />
        </motion.div>
      ))}

      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          boxShadow: [
            "0 0 40px rgba(112,70,230,.1)",
            "0 0 90px rgba(112,70,230,.3)",
            "0 0 40px rgba(112,70,230,.1)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 z-20 flex h-[165px] w-[165px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#9878ef]/35 bg-[#0a0710]"
      >
        <BrainCircuit size={28} className="text-[#d7caff]" />
        <p className="mt-4 text-xs">MODEL CORE</p>
        <p className="mt-2 font-mono text-[5px] tracking-[0.2em] text-white/[0.25]">
          HOSTED
        </p>
      </motion.div>

      {destinations.map(({ Icon, label, x, y }, index) => (
        <motion.div
          key={label}
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3,
            delay: index * 0.35,
            repeat: Infinity,
          }}
          className="absolute z-20 flex w-[105px] -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-[14px] border border-white/[0.08] bg-black/90 p-3"
          style={{ left: x, top: y }}
        >
          <Icon size={11} className="text-[#9878ef]" />
          <span className="font-mono text-[6px] text-white/[0.4]">
            {label}
          </span>
        </motion.div>
      ))}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
      >
        <Cpu
          size={14}
          className="absolute right-[8%] top-[20%] text-[#b99cff]"
        />
      </motion.div>
    </div>
  );
}