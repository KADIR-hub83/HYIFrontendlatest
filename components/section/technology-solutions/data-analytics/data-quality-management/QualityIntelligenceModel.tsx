"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Database,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

const dimensions = [
  { label: "Accuracy", value: 96 },
  { label: "Complete", value: 92 },
  { label: "Consistent", value: 89 },
  { label: "Valid", value: 98 },
  { label: "Timely", value: 94 },
  { label: "Unique", value: 91 },
];

export default function QualityIntelligenceModel() {
  return (
    <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[36px] border border-[#7046e6]/20 bg-[#08070b] p-4 shadow-[0_0_100px_rgba(112,70,230,.08)] md:p-8">
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute inset-y-0 w-[25%] bg-gradient-to-r from-transparent via-[#7046e6]/[0.05] to-transparent"
      />

      <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#7046e6]/20 bg-[#7046e6]/10">
            <Database size={14} className="text-[#9b7cf0]" />
          </div>

          <div>
            <p className="text-[10px] text-white/70">
              Data Quality Intelligence
            </p>

            <p className="mt-1 font-mono text-[5px] tracking-[0.16em] text-white/20">
              CONTINUOUS QUALITY OBSERVATION
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-[#7046e6]"
          />

          <span className="font-mono text-[5px] text-[#9d7df2]/50">
            MONITORING
          </span>
        </div>
      </div>

      <div className="grid gap-5 py-6 lg:grid-cols-[.75fr_1.5fr_.75fr]">
        <div className="space-y-3">
          {[
            ["Sources", "24"],
            ["Datasets", "148"],
            ["Rules", "632"],
            ["Domains", "12"],
          ].map(([label, value], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-[18px] border border-white/[0.06] bg-black/30 p-5"
            >
              <p className="font-mono text-[5px] uppercase tracking-[0.15em] text-white/22">
                {label}
              </p>

              <p className="mt-3 text-2xl font-light text-white/75">
                {value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="relative flex min-h-[470px] items-center justify-center overflow-hidden rounded-[28px] border border-[#7046e6]/15 bg-black/30">
          {[320, 245, 170].map((size, index) => (
            <motion.div
              key={size}
              animate={{
                rotate: index % 2 === 0 ? 360 : -360,
              }}
              transition={{
                duration: 18 + index * 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute rounded-full border border-[#7046e6]/20"
              style={{
                width: size,
                height: size,
              }}
            >
              <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#7046e6] shadow-[0_0_20px_#7046e6]" />
            </motion.div>
          ))}

          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(112,70,230,.15)",
                "0 0 70px rgba(112,70,230,.35)",
                "0 0 20px rgba(112,70,230,.15)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full border border-[#7046e6]/40 bg-[#0d0917]"
          >
            <ShieldCheck
              size={25}
              strokeWidth={1}
              className="text-[#a78cf4]"
            />

            <p className="mt-4 text-3xl font-light">
              94
            </p>

            <p className="font-mono text-[5px] tracking-[0.16em] text-[#a98df5]/45">
              QUALITY INDEX
            </p>
          </motion.div>

          {[
            ["top-[13%] left-[13%]", ScanSearch],
            ["right-[13%] top-[18%]", CheckCircle2],
            ["bottom-[15%] left-[18%]", Activity],
          ].map(([position, Icon], index) => {
            const I = Icon as typeof Activity;

            return (
              <motion.div
                key={index}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                }}
                className={`absolute ${position} flex h-12 w-12 items-center justify-center rounded-2xl border border-[#7046e6]/20 bg-[#0b0910]`}
              >
                <I size={14} className="text-[#9675ed]" />
              </motion.div>
            );
          })}
        </div>

        <div className="space-y-4">
          {dimensions.map((item, index) => (
            <div key={item.label}>
              <div className="flex justify-between text-[7px]">
                <span className="text-white/38">
                  {item.label}
                </span>

                <span className="font-mono text-[#9d7df2]/55">
                  {item.value}
                </span>
              </div>

              <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.3,
                    delay: index * 0.1,
                  }}
                  className="h-full bg-[#7046e6]"
                />
              </div>
            </div>
          ))}

          <div className="mt-6 rounded-[18px] border border-[#7046e6]/15 bg-[#7046e6]/[0.04] p-5">
            <p className="font-mono text-[5px] tracking-[0.16em] text-[#9d7df2]/45">
              QUALITY STATUS
            </p>

            <p className="mt-3 text-[9px] leading-5 text-white/45">
              Conceptual visualization of a continuously monitored data
              quality environment.
            </p>
          </div>
        </div>
      </div>

      <p className="font-mono text-[5px] tracking-[0.14em] text-white/15">
        VISUAL DEMONSTRATION — VALUES ARE ILLUSTRATIVE
      </p>
    </div>
  );
}