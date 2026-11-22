"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Database,
  Globe2,
  Sparkles,
} from "lucide-react";

const regions = [
  ["North America", 86],
  ["Europe", 72],
  ["Asia Pacific", 91],
  ["Middle East", 58],
];

export default function IntelligenceBento() {
  return (
    <section
      id="intelligence"
      className=" bg-[#090806] py-10 max-md:py-5 "
    >
      <div className="mx-auto max-w-[1350px] px-4 md:px-8">
        <div className="mb-6 grid gap-8 max-lg:gap-0 lg:grid-cols-2 lg:items-end max-lg:text-center ">
          <div>
          

            <h2 className=" hyi-h1 hyi-white">
              One business.
              <span className="block hyi-blue">One source of truth.</span>
            </h2>
          </div>

          <p className="max-w-[600px] hyi-p mx-auto">
            Bring financial, operational, customer and commercial data into a
            unified intelligence environment built for faster decisions.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" rounded-[38px] border border-white/[0.09] bg-gradient-to-b from-[#15110e] to-[#080807] p-5 lg:col-span-7 md:p-8"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="hyi-h1 hyi-white">
                  Global performance intelligence
                </h3>

                <p className="mt-2 max-w-[620px] hyi-p">
                  Compare performance across markets, business units and
                  regions from a single executive view.
                </p>
              </div>

              <Globe2
                size={28}
                strokeWidth={1}
                className="hyi-white-icon"
              />
            </div>

            <div className="relative mt-14 flex min-h-[300px] items-center justify-center overflow-hidden rounded-[28px] border border-white/[0.07] bg-black/25">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative h-[240px] w-[240px] rounded-full border border-violet-200/20"
              >
                <div className="absolute inset-[30px] rounded-full border border-white/[0.08]" />
                <div className="absolute inset-[65px] rounded-full border border-violet-100/20 bg-violet-300/[0.04]" />

                {[15, 80, 150, 220, 290].map((rotation, index) => (
                  <span
                    key={rotation}
                    className="absolute left-1/2 top-1/2 h-[2px] w-[105px] origin-left bg-gradient-to-r from-violet-200/50 to-transparent"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  >
                    <span className="absolute right-0 top-[-3px] h-2 w-2 rounded-full bg-violet-100 shadow-[0_0_12px_#ddd6fe]" />
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.article>

          <div className="grid gap-5 lg:col-span-5">
            <article className="rounded-[38px] border border-white/[0.09] bg-[#0c0b09] p-8">
              <div className="flex items-center justify-between">
                <div>
            
                  <h3 className="mt-2 hyi-h1 hyi-white">Market pulse</h3>
                </div>

                <BarChart3 size={20} className="hyi-white-icon" />
              </div>

              <div className="mt-4 space-y-6">
                {regions.map(([region, score], index) => (
                  <div key={region as string}>
                    <div className="mb-2 flex justify-between text-[10px]">
                      <span className="hyi-p">{region}</span>
                      <span className="hyi-p">{score}%</span>
                    </div>

                    <div className="h-[4px] overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${score}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.1,
                        }}
                        className="h-full bg-gradient-to-r from-violet-600 to-violet-200"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[38px] border border-white/[0.09] bg-gradient-to-br from-[#15110e] to-[#080807] p-8">
              <div className="flex items-center gap-3">
                <Sparkles size={15} className="hyi-white-icon" />

                
              </div>

              <p className="mt-3 hyi-white hyi-h1">
                Enterprise demand is accelerating faster than the current
                quarterly forecast.
              </p>

              <p className="mt-2 hyi-p">
                Pipeline velocity increased across three high-value segments
                while average sales-cycle duration declined.
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5">
                <span className="thyi-p text-emerald-300/60">
                  96% confidence
                </span>

                <ArrowUpRight size={19} className="hyi-white-icon" />
              </div>
            </article>
          </div>

          <article className="rounded-[38px] border border-white/[0.09] bg-[#0c0b09] p-8 lg:col-span-5">
            <Database size={21} className="hyi-white-icon" />

            <h3 className="mt-3 hyi-white hyi-h1">Connected data foundation</h3>

            <p className="mt-2 hyi-p">
              Connect business applications, warehouses, APIs and operational
              systems into a governed analytics layer.
            </p>

            <div className="mt-3 grid grid-cols-3 gap-3">
              {["ERP", "CRM", "WAREHOUSE", "APIs", "FINANCE", "PRODUCT"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-white/[0.07] bg-black/20 px-3 py-4 text-center text-[12px] tracking-[0.15em] text-white/40"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[38px] border border-white/[0.09] bg-gradient-to-br from-[#17120e] to-[#090807] p-8 lg:col-span-7">
          

            <div className=" flex flex-col items-start gap-5">
              <span className="hyi-h1 hyi-white">
                4.8×
              </span>

              <span className="mb-2 hyi-p">
                faster insight-to-action
              </span>
            </div>

            <div className="mt-10 flex gap-2">
              {[35, 48, 40, 58, 67, 60, 76, 82, 91].map((height, index) => (
                <div
                  key={index}
                  className="flex h-24 flex-1 items-end rounded-md bg-white/[0.02]"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="w-full rounded-md bg-gradient-to-t from-violet-600/20 to-violet-200/55"
                  />
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}