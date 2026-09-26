"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Bot,
  CheckCircle2,
  CircleDot,
  Terminal,
} from "lucide-react";

const runtimeLines = [
  "[system] listening for enterprise events...",
  "[event] new customer request received",
  "[agent] classifying workflow intent...",
  "[model] intent → customer_onboarding",
  "[workflow] loading automation graph...",
  "[api] validating customer profile",
  "[data] enterprise record synchronized",
  "[agent] generating next best action",
  "[workflow] approval rules evaluated",
  "[action] onboarding sequence initiated",
  "[system] workflow completed successfully",
];

export default function LiveAutomationTerminal() {
  const [lines, setLines] = useState<string[]>([
    runtimeLines[0],
  ]);

  const [pointer, setPointer] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((current) => {
        const next = [
          ...current,
          runtimeLines[pointer],
        ];

        return next.slice(-8);
      });

      setPointer(
        (current) =>
          (current + 1) % runtimeLines.length
      );
    }, 1100);

    return () => clearInterval(interval);
  }, [pointer]);

  return (
    <section
      id="live-runtime"
      className="relative border-y border-white/[0.06] bg-[#07070A] py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div>
            <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/60">
              01 / Live Runtime
            </span>

            <h2 className="mt-7 text-5xl font-medium leading-[0.98] tracking-[-0.055em] md:text-7xl">
              Watch intelligence
              <span className="block text-[#C7B9DA]/60">
                turn into action.
              </span>
            </h2>

            <p className="mt-8 max-w-[520px] text-base leading-8 text-[#D7D0E0]/60">
              AI automation connects events, models,
              enterprise data and business rules into
              intelligent workflows capable of executing
              multi-step processes automatically.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[9px] uppercase tracking-[0.3em] text-emerald-300/60">
                Runtime currently active
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#050507] shadow-[0_40px_120px_rgba(0,0,0,.6)]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>

                <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.28em] text-white/30">
                  <Terminal size={11} />
                  HYI Automation Runtime
                </span>
              </div>

              <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-emerald-400/55">
                <CircleDot size={9} />
                Live
              </span>
            </div>

            <div className="min-h-[460px] p-6 font-mono md:p-8">
              <div className="mb-7 flex items-center gap-3 border-b border-white/[0.05] pb-5">
                <Bot
                  size={15}
                  className="text-violet-300"
                />

                <span className="text-[10px] text-violet-200/55">
                  agent://enterprise-orchestrator
                </span>
              </div>

              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {lines.map((line, index) => (
                    <motion.div
                      key={`${line}-${index}`}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-violet-300" />

                      <span
                        className={
                          line.includes("completed")
                            ? "text-[11px] leading-6 text-emerald-300/70"
                            : line.includes("[action]")
                            ? "text-[11px] leading-6 text-violet-200/80"
                            : "text-[11px] leading-6 text-[#D7D0DF]/45"
                        }
                      >
                        {line}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                  className="mt-4 h-4 w-[7px] bg-violet-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 border-t border-white/[0.07]">
              {[
                ["128", "WORKFLOWS"],
                ["99.8%", "SUCCESS"],
                ["18ms", "RESPONSE"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-r border-white/[0.06] p-5 last:border-r-0"
                >
                  <p className="text-xl font-light text-[#F2ECF8]/75">
                    {value}
                  </p>

                  <p className="mt-2 text-[7px] tracking-[0.25em] text-white/25">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}