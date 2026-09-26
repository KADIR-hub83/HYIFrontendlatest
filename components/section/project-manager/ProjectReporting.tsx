"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export default function ProjectReporting() {
  return (
    <section className=" bg-[#080808] px-5 py-10 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-10 grid gap-8 lg:grid-cols-2">
          <div>
          

            <h2 className="mt-5 hyi-h1 hyi-white ">
              Clarity for everyone
              <br />
              <span className="text-white/25">who needs it.</span>
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-[390px] hyi-p hyi-gray">
              Stakeholders get meaningful visibility without pulling your
              delivery team into endless status meetings.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#09090b] p-5 sm:p-8 lg:p-12">
          <img
            src="/Card-bg-03.webp"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-95"
          />

          <div className="relative z-10 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
            <div className="rounded-[22px] border border-white/[0.08] bg-[#0d0d11]/90 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.18em] text-white/20">
                    Delivery performance
                  </p>

                  <h3 className="mt-2 hyi-h3 hyi-white">
                    Sprint velocity
                  </h3>
                </div>

                <div className="flex items-center gap-1 text-[8px] text-emerald-400">
                  <TrendingUp size={11} />
                  +12.4%
                </div>
              </div>

              <div className="mt-12 flex h-[220px] items-end gap-3">
                {[38, 52, 45, 67, 58, 74, 64, 82, 72, 90].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.6,
                      }}
                      className="relative flex-1 rounded-t-md bg-white/[0.08]"
                    >
                      {index === 9 && (
                        <div className="absolute inset-0 rounded-t-md bg-[#8b5cf6]" />
                      )}
                    </motion.div>
                  ),
                )}
              </div>

              <div className="mt-4 flex justify-between text-[7px] text-white/15">
                <span>S01</span>
                <span>S03</span>
                <span>S05</span>
                <span>S07</span>
                <span>S10</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[22px] border border-white/[0.08] bg-[#0d0d11]/90 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <BarChart3 size={15} className="text-[#a78bfa]" />

                  <span className="text-[7px] text-white/20">
                    THIS MONTH
                  </span>
                </div>

                <div className="mt-8 text-[42px] font-medium tracking-[-0.06em]">
                  94%
                </div>

                <p className="mt-1 text-[8px] text-white/25">
                  Milestones delivered on time
                </p>
              </div>

              <div className="rounded-[22px] border border-white/[0.08] bg-[#0d0d11]/90 p-6 backdrop-blur-xl">
                <p className="text-[9px] text-white/35">
                  Executive summary
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Release remains on schedule",
                    "Critical dependencies resolved",
                    "Capacity healthy for next sprint",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 hyi-small text-white/40"
                    >
                      <CheckCircle2
                        size={10}
                        className="text-emerald-400"
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <button className="mt-6 flex items-center gap-2 text-[12px] text-[#bdaaff]">
                  View full report
                  <ArrowUpRight size={9} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}