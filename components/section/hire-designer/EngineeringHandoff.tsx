"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Copy } from "lucide-react";

export default function EngineeringHandoff() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative min-h-[600px] overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#09090c] p-5 sm:p-8">
            <img
              src="/Card-bg-01.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />

            <div className="relative z-10 h-full">
              <div className="rounded-[20px] border border-white/[0.08] bg-[#0e0e12]/95 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Code2 size={13} className="text-[#a78bfa]" />

                    <span className="text-[10px] text-white/50">
                      Button / Primary
                    </span>
                  </div>

                  <Copy size={12} className="text-white/25" />
                </div>

                <div className="p-6">
                  <div className="mb-7 flex min-h-[170px] items-center justify-center rounded-xl bg-white/[0.025]">
                    <button className="rounded-lg bg-[#8b5cf6] px-6 py-3 text-[10px] font-medium">
                      Create project
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["Width", "128px"],
                      ["Height", "40px"],
                      ["Radius", "8px"],
                      ["Padding", "12 / 24"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-3"
                      >
                        <div className="text-[7px] uppercase tracking-wider text-white/20">
                          {label}
                        </div>

                        <div className="mt-1 font-mono text-[9px] text-white/55">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-16 right-0 w-[80%] rounded-[18px] border border-white/[0.08] bg-[#111116]/95 p-5 shadow-2xl backdrop-blur-xl"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[9px] text-white/30">
                    Developer handoff
                  </span>

                  <span className="flex items-center gap-1 text-[8px] text-emerald-400">
                    <CheckCircle2 size={10} />
                    Ready
                  </span>
                </div>

                <div className="space-y-2 font-mono text-[8px]">
                  <p className="text-[#bdaaff]">
                    {"<Button variant='primary'>"}
                  </p>
                  <p className="pl-4 text-white/40">Create project</p>
                  <p className="text-[#bdaaff]">{"</Button>"}</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:pl-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#a78bfa]">
              Design → Engineering
            </span>

            <h2 className="mt-5 text-[clamp(45px,5.5vw,82px)] font-medium leading-[0.92] tracking-[-0.065em]">
              Designed for
              <br />
              <span className="text-white/25">developers too.</span>
            </h2>

            <p className="mt-7 max-w-[420px] text-[12px] leading-6 text-white/40">
              Designers work with engineering constraints in mind. Components,
              responsive behaviour, states and specifications arrive ready for
              implementation.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Developer-ready Figma files",
                "Responsive specifications",
                "Component states & behaviours",
                "Design QA during implementation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-white/[0.06] pb-4 text-[11px] text-white/55"
                >
                  <CheckCircle2 size={13} className="text-[#8b5cf6]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}