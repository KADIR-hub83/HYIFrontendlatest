"use client";

import { motion } from "framer-motion";
import { Check, ChevronDown, Plus } from "lucide-react";

export default function DesignSystemLab() {
  return (
    <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#a78bfa]">
              Design systems
            </span>

            <h2 className="mt-5 text-[clamp(45px,5.5vw,82px)] font-medium leading-[0.92] tracking-[-0.065em]">
              Design once.
              <br />
              <span className="text-white/25">Scale everywhere.</span>
            </h2>

            <p className="mt-7 max-w-[380px] text-[12px] leading-6 text-white/40">
              Your designer doesn&apos;t stop at beautiful screens. They create the
              tokens, components and rules your entire product team can build
              from.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0a0a0c] p-5 sm:p-8">
            <img
              src="/KPI-Bg.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="relative z-10 rounded-[22px] border border-white/[0.08] bg-[#0e0e11]/90 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div>
                  <p className="text-[9px] text-white/25">HYI SYSTEM</p>
                  <p className="mt-1 text-[12px]">Product foundations</p>
                </div>

                <div className="rounded-lg border border-white/10 px-3 py-2 text-[8px] text-white/35">
                  v2.4
                </div>
              </div>

              <div className="grid md:grid-cols-[180px_1fr]">
                <div className="border-r border-white/[0.07] p-4">
                  {[
                    "Foundations",
                    "Components",
                    "Patterns",
                    "Guidelines",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`mb-1 rounded-lg px-3 py-2.5 text-[9px] ${
                        index === 1
                          ? "bg-[#8b5cf6]/10 text-[#b7a0ff]"
                          : "text-white/30"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="p-5 sm:p-8">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                    Components / Buttons
                  </p>

                  <div className="mt-8 grid gap-5 xl:grid-cols-2">
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-5">
                      <p className="text-[9px] text-white/30">Primary</p>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <button className="rounded-lg bg-[#8b5cf6] px-5 py-3 text-[9px]">
                          Continue
                        </button>

                        <button className="rounded-lg bg-[#8b5cf6]/40 px-5 py-3 text-[9px] text-white/50">
                          Disabled
                        </button>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-5">
                      <p className="text-[9px] text-white/30">Controls</p>

                      <div className="mt-7 flex gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10">
                          <Plus size={12} />
                        </div>

                        <div className="flex h-9 items-center gap-5 rounded-lg border border-white/10 px-3 text-[8px] text-white/40">
                          Select
                          <ChevronDown size={10} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.025] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-white/30">
                        System health
                      </span>

                      <span className="flex items-center gap-1 text-[8px] text-emerald-400">
                        <Check size={9} />
                        Synced
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-4 gap-2">
                      {["#F7F7F5", "#8B5CF6", "#171719", "#343438"].map(
                        (color) => (
                          <div key={color}>
                            <div
                              style={{ background: color }}
                              className="h-14 rounded-lg border border-white/10"
                            />

                            <p className="mt-2 font-mono text-[7px] text-white/20">
                              {color}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-5 right-5 hidden rounded-xl border border-[#8b5cf6]/20 bg-[#16121e]/90 px-4 py-3 text-[9px] text-[#bdaaff] shadow-xl backdrop-blur-xl sm:block"
            >
              24 components updated
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}