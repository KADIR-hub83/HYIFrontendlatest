"use client";

import { motion } from "framer-motion";
import { BrainCircuit, CircleDot } from "lucide-react";

const columns = [
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 4],
];

export default function ModelArchitectureLab() {
  return (
    <section className="overflow-hidden border-y border-white/[0.06] bg-[#07070a] py-32 md:py-48">
      <div className="mx-auto grid max-w-[1450px] gap-16 px-5 md:px-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
        <div>
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            03 / Architecture Laboratory
          </span>

          <h2 className="mt-7 text-5xl font-medium leading-[0.98] tracking-[-0.055em] md:text-7xl">
            Architecture built
            <span className="block text-white/55">around your problem.</span>
          </h2>

          <p className="mt-8 max-w-[550px] text-[15px] leading-8 text-white/65">
            We engineer model architectures around the actual characteristics
            of your data, business objectives, latency requirements and
            production environment.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {[
              "Transformers",
              "Neural Networks",
              "Fine-tuning",
              "Embedding Models",
              "Vision Models",
              "Multimodal AI",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-4 text-xs text-white/60"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[620px] overflow-hidden rounded-[36px] border border-white/[0.09] bg-[#030304]">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(rgba(216,180,254,.2) 1px,transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="absolute left-6 top-6 flex items-center gap-3">
            <BrainCircuit size={13} className="text-violet-100/70" />
            <span className="text-[7px] tracking-[0.25em] text-white/35">
              MODEL ARCHITECTURE / V12
            </span>
          </div>

          <div className="absolute inset-x-10 bottom-12 top-20 flex items-center justify-between">
            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="relative flex flex-col items-center justify-center gap-5"
              >
                {column.map((node) => (
                  <motion.div
                    key={node}
                    animate={{
                      scale: [1, 1.18, 1],
                      opacity: [0.45, 1, 0.45],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: columnIndex * 0.2 + node * 0.08,
                    }}
                    className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-violet-100/30 bg-violet-200/[0.08]"
                  >
                    <CircleDot size={8} className="text-violet-100/70" />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          <motion.div
            animate={{ x: ["-20%", "120%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 top-1/2 h-px w-[35%] bg-gradient-to-r from-transparent via-violet-100/80 to-transparent shadow-[0_0_20px_rgba(216,180,254,.8)]"
          />

          <div className="absolute bottom-6 right-6 rounded-full border border-emerald-300/10 bg-emerald-300/[0.03] px-4 py-2 text-[7px] tracking-[0.2em] text-emerald-300/55">
            ARCHITECTURE VALID
          </div>
        </div>
      </div>
    </section>
  );
}