"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, Sparkles } from "lucide-react";

const insights = [
  {
    title: "Revenue opportunity detected",
    text: "Enterprise conversion is outperforming forecast across high-value accounts.",
    metric: "+18.4%",
  },
  {
    title: "Customer signal detected",
    text: "Retention is improving among customers using three or more platform capabilities.",
    metric: "+11.7%",
  },
  {
    title: "Operational anomaly found",
    text: "Processing time increased in one workflow while overall demand remained stable.",
    metric: "−8.2%",
  },
  {
    title: "Forecast updated",
    text: "Current momentum indicates stronger quarter-end performance than the previous baseline.",
    metric: "96.2%",
  },
];

export default function DecisionIntelligence() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % insights.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" bg-[#090806] py-10">
      <div className="mx-auto max-w-[1350px] px-4 md:px-8">
        <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-[38px] border border-white/[0.08] bg-[#0c0b09] p-8 md:p-12">
            <BrainCircuit
              size={26}
              strokeWidth={1.2}
              className="hyi-white-icon"
            />

            <h2 className="mt-3 hyi-h1 hyi-white">
              From dashboard
              <span className="block hyi-blue">to decision.</span>
            </h2>

            <p className="mt-3 max-w-[580px] hyi-p">
              Intelligence should do more than display data. AI-assisted
              analytics can surface changes, explain patterns and help teams
              focus on the decisions that matter.
            </p>
          </div>

          <div className="relative  overflow-hidden rounded-[38px] border border-white/[0.08] bg-gradient-to-br from-[#15110e] to-[#080807] p-8 md:p-11">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles size={14} className="hyi-white-icon" />

                <span className="text-[12px] tracking-[0.22em] text-white/35">
                  HYI.AI / LIVE INSIGHT ENGINE
                </span>
              </div>

              <span className="flex items-center gap-2 text-[12px] text-emerald-300/60">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                ANALYZING
              </span>
            </div>

            <div className="relative mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[12px] uppercase tracking-[0.25em] text-violet-200/55">
                    Intelligence signal
                  </span>

                  <h3 className="mt-3 max-w-[750px] hyi-h1 hyi-white">
                    {insights[active].title}
                  </h3>

                  <p className="mt-3 max-w-[680px] hyi-p">
                    {insights[active].text}
                  </p>

                  <div className="mt-2 hyi-h1 hyi-white">
                    {insights[active].metric}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-10 left-8 right-8 md:left-11 md:right-11">
              <div className="flex gap-2">
                {insights.map((_, index) => (
                  <div
                    key={index}
                    className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/[0.07]"
                  >
                    {index === active && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.2, ease: "linear" }}
                        className="h-full bg-violet-200"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}