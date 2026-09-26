"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Database,
  Layers3,
  Server,
} from "lucide-react";

const floors = [
  { name: "SEMANTIC", width: "58%" },
  { name: "CURATED", width: "70%" },
  { name: "CORE", width: "82%" },
  { name: "RAW", width: "94%" },
];

export default function WarehouseVault() {
  return (
    <div className="relative mx-auto h-[680px] w-full max-w-[1200px] md:h-[780px]">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9ddff]/[0.08] blur-[150px]" />

      <div
        className="absolute inset-x-[5%] bottom-[7%] top-[10%] opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage:
            "radial-gradient(ellipse at center,black 25%,transparent 73%)",
        }}
      />

      {[600, 470, 350].map((size, index) => (
        <motion.div
          key={size}
          animate={{ rotate: index % 2 ? -360 : 360 }}
          transition={{
            duration: 30 + index * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-[46%] rounded-full border border-dashed border-[#f0e8ff]/[0.10]"
          style={{
            width: size,
            height: size * 0.36,
            marginLeft: -size / 2,
            marginTop: -(size * 0.36) / 2,
          }}
        />
      ))}

      <div className="absolute left-1/2 top-[45%] z-20 flex w-full max-w-[700px] -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        {floors.map((floor, index) => (
          <motion.div
            key={floor.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: [0, index % 2 ? -5 : 5, 0],
            }}
            transition={{
              opacity: {
                delay: index * 0.1,
                duration: 0.8,
              },
              y: {
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative -mb-3"
            style={{ width: floor.width }}
          >
            <div className="relative h-[104px] overflow-hidden rounded-[50%] border border-[#eee5ff]/25 bg-gradient-to-b from-[#f1eaff]/[0.12] via-[#d9c9f5]/[0.05] to-transparent shadow-[0_12px_50px_rgba(225,211,255,.06)] backdrop-blur-xl">
              <div className="absolute inset-x-[7%] top-[13px] h-[40px] rounded-[50%] border border-[#f2ebff]/20 bg-[#eee6ff]/[0.035]" />

              <motion.div
                animate={{ x: ["-100%", "180%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
                className="absolute inset-y-0 w-[30%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
              />

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[7px] tracking-[0.32em] text-[#f0e8ff]/55">
                {floor.name}
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            boxShadow: [
              "0 0 30px rgba(233,221,255,.08)",
              "0 0 70px rgba(233,221,255,.18)",
              "0 0 30px rgba(233,221,255,.08)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative mt-6 flex h-24 w-24 items-center justify-center rounded-[28px] border border-[#f1eaff]/25 bg-[#eee6ff]/[0.07] backdrop-blur-2xl"
        >
          <Database size={30} strokeWidth={1.2} className="text-[#f3ecff]" />
        </motion.div>
      </div>

      {[
        {
          Icon: Server,
          title: "ERP",
          pos: "left-[3%] top-[26%]",
        },
        {
          Icon: Database,
          title: "CRM",
          pos: "right-[3%] top-[26%]",
        },
        {
          Icon: Layers3,
          title: "APPS",
          pos: "left-[8%] bottom-[19%]",
        },
        {
          Icon: BrainCircuit,
          title: "AI",
          pos: "right-[8%] bottom-[19%]",
        },
      ].map(({ Icon, title, pos }, index) => (
        <motion.div
          key={title}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}
          className={`absolute hidden md:block ${pos}`}
        >
          <div className="min-w-[125px] rounded-[22px] border border-[#eee6ff]/15 bg-[#09090b]/85 p-5 backdrop-blur-xl">
            <Icon size={16} className="text-[#eee6ff]/70" />

            <div className="mt-4 font-mono text-[7px] tracking-[0.25em] text-[#eee6ff]/55">
              {title}
            </div>

            <motion.div
              animate={{ width: ["15%", "100%", "15%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="mt-4 h-px bg-gradient-to-r from-[#f1eaff] to-transparent"
            />
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-0 left-1/2 grid w-full max-w-[780px] -translate-x-1/2 grid-cols-3 gap-px overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.06]">
        {[
          ["12.8 PB", "MANAGED DATA"],
          ["31 ms", "AVG QUERY"],
          ["99.99%", "AVAILABILITY"],
        ].map(([value, label]) => (
          <div key={label} className="bg-[#080808] px-4 py-5 text-center">
            <p className="text-xl font-light text-[#f0e9fa] md:text-2xl">
              {value}
            </p>

            <p className="mt-2 font-mono text-[6px] tracking-[0.2em] text-white/30">
              {label}
            </p>
          </div>
        ))}
      </div>

      <motion.div
        animate={{ y: [80, 520, 80] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[15%] top-0 h-24 w-px bg-gradient-to-b from-transparent via-[#eee5ff]/50 to-transparent"
      />

      <motion.div
        animate={{ y: [500, 70, 500] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[15%] top-0 h-24 w-px bg-gradient-to-b from-transparent via-[#eee5ff]/50 to-transparent"
      />

      <BarChart3 className="absolute bottom-[17%] left-1/2 hidden -translate-x-1/2 text-[#eee6ff]/20 md:block" />
    </div>
  );
}