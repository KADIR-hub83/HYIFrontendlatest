"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  KeyRound,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";

const boundaryNodes = [
  { Icon: Database, label: "PRIVATE DATA" },
  { Icon: BrainCircuit, label: "MODEL" },
  { Icon: Server, label: "RUNTIME" },
  { Icon: Network, label: "ENDPOINT" },
];

export default function PrivateCloudModel() {
  return (
    <div className="relative min-h-[610px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#070707] p-7">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(152,120,239,.28) 1px,transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            PRIVATE SERVING ZONE
          </p>
          <p className="mt-2 text-[10px] text-white/[0.28]">
            Controlled deployment boundary
          </p>
        </div>

        <LockKeyhole size={16} className="text-[#c9b6ff]" />
      </div>

      <div className="relative mx-auto mt-10 flex h-[440px] max-w-[600px] items-center justify-center">
        <motion.div
          animate={{
            borderColor: [
              "rgba(152,120,239,.16)",
              "rgba(152,120,239,.38)",
              "rgba(152,120,239,.16)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-[5%] rounded-[38px] border"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-[#9878ef]/20"
        />

        <div className="absolute left-1/2 top-1/2 flex h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#9878ef]/30 bg-[#0a0710]">
          <ShieldCheck size={25} className="text-[#d5c5ff]" />
          <p className="mt-3 text-[10px]">PRIVATE</p>
          <p className="mt-1 font-mono text-[5px] text-white/[0.25]">
            MODEL CLOUD
          </p>
        </div>

        {boundaryNodes.map(({ Icon, label }, index) => {
          const positions = [
            "left-[8%] top-[20%]",
            "right-[8%] top-[20%]",
            "bottom-[12%] left-[8%]",
            "bottom-[12%] right-[8%]",
          ];

          return (
            <motion.div
              key={label}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3,
                delay: index * 0.4,
                repeat: Infinity,
              }}
              className={`absolute ${positions[index]} rounded-[15px] border border-white/[0.08] bg-black/90 p-4`}
            >
              <Icon size={12} className="text-[#9878ef]" />
              <p className="mt-3 font-mono text-[6px] text-white/[0.4]">
                {label}
              </p>
            </motion.div>
          );
        })}

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute h-[410px] w-[410px]"
        >
          <KeyRound
            size={13}
            className="absolute left-1/2 top-0 text-[#9878ef]"
          />
        </motion.div>
      </div>
    </div>
  );
}