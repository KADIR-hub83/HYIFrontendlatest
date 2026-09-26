"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircleDot, Terminal } from "lucide-react";

const commands = [
  "Scanning model metadata...",
  "Evaluating fairness thresholds...",
  "Validating protected attributes...",
  "Checking privacy controls...",
  "Running explainability analysis...",
  "Verifying human approval policy...",
  "Generating governance report...",
  "Model governance status: APPROVED",
];

export default function LivePolicyTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const current = commands[lineIndex];

    if (typed.length < current.length) {
      const timer = setTimeout(() => {
        setTyped(current.slice(0, typed.length + 1));
      }, 32);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setHistory((prev) => [...prev.slice(-5), current]);
      setTyped("");
      setLineIndex((prev) => (prev + 1) % commands.length);
    }, 750);

    return () => clearTimeout(timer);
  }, [typed, lineIndex]);

  return (
    <section className="bg-[#050505] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
          <div className="flex flex-col justify-center rounded-[38px] border border-white/[0.08] bg-[#0b0a09] p-8 md:p-12">
            <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
              Live policy engine
            </span>

            <h2 className="mt-7 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Governance that
              <span className="block text-white/55">
                runs with your AI.
              </span>
            </h2>

            <p className="mt-7 max-w-[550px] text-[15px] leading-8 text-white/65">
              Automated policy checks continuously evaluate model behavior,
              controls and deployment readiness while maintaining human
              oversight.
            </p>
          </div>

          <div className="overflow-hidden rounded-[38px] border border-white/[0.09] bg-[#050506] shadow-[0_40px_120px_rgba(0,0,0,.45)]">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
              <div className="flex items-center gap-3">
                <Terminal size={13} className="text-violet-100/70" />

                <span className="text-[8px] tracking-[0.25em] text-white/40">
                  HYI.AI / POLICY ENGINE
                </span>
              </div>

              <span className="flex items-center gap-2 text-[7px] tracking-[0.2em] text-emerald-300/60">
                <CircleDot size={9} />
                LIVE
              </span>
            </div>

            <div className="min-h-[500px] p-7 font-mono md:p-10">
              <div className="mb-9 flex gap-6 border-b border-white/[0.06] pb-5 text-[8px] tracking-[0.2em] text-white/30">
                <span>POLICY.RUN</span>
                <span>MODEL / HYI-RAI-08</span>
              </div>

              <div className="space-y-5">
                {history.map((line, index) => (
                  <motion.div
                    key={`${line}-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-4 text-xs"
                  >
                    <span className="text-emerald-300/55">✓</span>
                    <span className="text-white/50">{line}</span>
                  </motion.div>
                ))}

                <div className="flex gap-4 text-xs">
                  <span className="text-violet-200/70">›</span>

                  <span className="text-white/75">
                    {typed}

                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{
                        duration: 0.7,
                        repeat: Infinity,
                      }}
                      className="ml-1 inline-block h-4 w-[6px] translate-y-[3px] bg-violet-100"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}