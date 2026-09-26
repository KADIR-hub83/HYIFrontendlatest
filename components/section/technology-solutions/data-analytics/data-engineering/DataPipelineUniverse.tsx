"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Server, Sparkles } from "lucide-react";

const packets = Array.from({ length: 18 });

export default function DataPipelineUniverse() {
  return (
    <section
      id="pipeline"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#090806] py-28 md:py-44"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Data Infrastructure Universe
          </span>

          <h2 className="mx-auto mt-7 max-w-[1100px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Billions of events.
            <span className="block text-white/50">One connected system.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-[15px] leading-8 text-white/65">
            Build infrastructure that continuously moves information from
            applications, databases and devices into trusted platforms ready
            for analytics, AI and business operations.
          </p>
        </div>

        <div className="relative mx-auto mt-24 min-h-[760px] max-w-[1200px]">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.12] blur-[130px]" />

          {[600, 470, 340].map((size, index) => (
            <motion.div
              key={size}
              animate={{ rotate: index % 2 ? -360 : 360 }}
              transition={{
                duration: 30 + index * 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-violet-100/[0.10]"
              style={{
                width: size,
                height: size,
                marginLeft: -size / 2,
                marginTop: -size / 2,
              }}
            />
          ))}

          <motion.div
            animate={{
              rotateY: 360,
              rotateX: [55, 68, 55],
            }}
            transition={{
              rotateY: {
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              },
              rotateX: {
                duration: 6,
                repeat: Infinity,
              },
            }}
            className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-100/20"
            style={{
              transformStyle: "preserve-3d",
              boxShadow:
                "0 0 100px rgba(139,92,246,.15),inset 0 0 80px rgba(139,92,246,.08)",
            }}
          />

          <div className="absolute left-1/2 top-1/2 z-20 flex h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.10] bg-[#0b0910]/90 shadow-[0_0_100px_rgba(139,92,246,.18)] backdrop-blur-xl">
            <div className="text-center">
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-200/20 bg-violet-200/[0.05]"
              >
                <Database size={24} className="text-violet-100" />
              </motion.div>

              <div className="mt-5 font-mono text-[8px] tracking-[0.22em] text-white/55">
                DATA CORE
              </div>

              <div className="mt-2 font-mono text-[7px] text-emerald-300/55">
                2.8B EVENTS
              </div>
            </div>
          </div>

          {packets.map((_, index) => {
            const angle = (index / packets.length) * Math.PI * 2;
            const radius = 270;

            return (
              <motion.span
                key={index}
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-violet-100 shadow-[0_0_12px_#ddd6fe]"
                style={{
                  x: Math.cos(angle) * radius,
                  y: Math.sin(angle) * radius,
                }}
                animate={{
                  scale: [0.5, 1.8, 0.5],
                  opacity: [0.15, 1, 0.15],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: index * 0.13,
                }}
              />
            );
          })}

          {[
            {
              icon: Cloud,
              title: "Cloud Sources",
              position: "left-[4%] top-[20%]",
            },
            {
              icon: Server,
              title: "Applications",
              position: "right-[3%] top-[20%]",
            },
            {
              icon: Database,
              title: "Warehouses",
              position: "left-[8%] bottom-[17%]",
            },
            {
              icon: Sparkles,
              title: "AI Systems",
              position: "right-[7%] bottom-[17%]",
            },
          ].map(({ icon: Icon, title, position }, index) => (
            <motion.div
              key={title}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
              }}
              className={`absolute ${position} rounded-[24px] border border-white/[0.08] bg-[#0c0b0d]/80 p-5 backdrop-blur-xl`}
            >
              <Icon size={17} className="text-violet-100/65" />

              <div className="mt-4 text-xs text-white/65">{title}</div>

              <div className="mt-2 font-mono text-[6px] text-emerald-300/45">
                CONNECTED
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}