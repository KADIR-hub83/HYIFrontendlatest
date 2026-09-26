"use client";

import { useEffect, useState } from "react";

const events = [
  "Retrieving enterprise context",
  "Ranking knowledge sources",
  "Constructing grounded prompt",
  "Executing language model",
  "Validating generated response",
  "Applying safety guardrails",
];

export default function AICommandCenter() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setActive((x) => (x + 1) % events.length),
      1350
    );

    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="ai-command-center"
      className="relative overflow-hidden border-b border-white/[0.05] bg-[#020203] py-24 md:py-32"
    >
      <div className="absolute right-[-200px] top-0 h-[700px] w-[700px] rounded-full bg-purple-800/[0.07] blur-[190px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            Generative AI Control Center
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-1.3px] md:text-5xl">
            Intelligence you can
            <span className="block bg-gradient-to-r from-[#dfb0ff] to-[#7657ff] bg-clip-text text-transparent">
              observe, govern and scale.
            </span>
          </h2>
        </div>

        <div className="mt-16 overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#060609] shadow-[0_40px_130px_rgba(0,0,0,.6)]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
            <div className="flex gap-2">
              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-purple-400/60" />
            </div>

            <span className="text-[7px] uppercase tracking-[2px] text-white/20">
              HYI Intelligence Runtime
            </span>

            <div className="flex items-center gap-2">
              <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-green-400" />
              <span className="text-[7px] uppercase text-green-400/40">
                Online
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_.85fr]">
            <div className="relative min-h-[570px] overflow-hidden border-b border-white/[0.06] p-7 lg:border-b-0 lg:border-r md:p-10">
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(168,85,247,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,.2) 1px,transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              <div className="relative z-10">
                <p className="text-[8px] uppercase tracking-[2px] text-purple-300/35">
                  AI Architecture
                </p>

                <h3 className="mt-2 text-xl text-white/80">
                  Enterprise Intelligence Fabric
                </h3>

                <div className="relative mt-12 h-[400px]">
                  <div className="absolute left-1/2 top-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/35 to-transparent" />
                  <div className="absolute left-1/2 top-[10%] h-[80%] w-px bg-gradient-to-b from-transparent via-purple-400/30 to-transparent" />

                  <div className="ai-runtime-core absolute left-1/2 top-1/2 flex h-[125px] w-[125px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/25 bg-purple-500/[0.07] shadow-[0_0_70px_rgba(168,85,247,.2)]">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-purple-100/80">
                        LLM
                      </div>
                      <div className="mt-1 text-[6px] uppercase tracking-[1px] text-white/20">
                        Runtime
                      </div>
                    </div>
                  </div>

                  {[
                    ["KNOWLEDGE", "left-[2%] top-[9%]"],
                    ["VECTOR DB", "right-[1%] top-[9%]"],
                    ["AGENTS", "left-[1%] bottom-[7%]"],
                    ["GUARDRAILS", "right-[1%] bottom-[7%]"],
                    ["PROMPT", "left-1/2 top-0 -translate-x-1/2"],
                    ["APIs", "bottom-0 left-1/2 -translate-x-1/2"],
                  ].map(([label, pos]) => (
                    <div
                      key={label}
                      className={`absolute ${pos} rounded-xl border border-white/[0.07] bg-[#0a0810]/90 px-4 py-3 backdrop-blur-xl`}
                    >
                      <span className="text-[8px] tracking-[1px] text-white/45">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-7 md:p-9">
              <p className="text-[8px] uppercase tracking-[2px] text-purple-300/35">
                Live Inference
              </p>

              <h3 className="mt-2 text-xl text-white/80">
                Response Pipeline
              </h3>

              <div className="mt-8 space-y-3">
                {events.map((event, index) => {
                  const current = active === index;
                  const done = index < active;

                  return (
                    <div
                      key={event}
                      className={`relative overflow-hidden rounded-xl border px-4 py-4 transition-all duration-500 ${
                        current
                          ? "border-purple-400/25 bg-purple-500/[0.06]"
                          : "border-white/[0.045] bg-white/[0.01]"
                      }`}
                    >
                      {current && (
                        <span className="runtime-progress absolute bottom-0 left-0 h-px bg-purple-300" />
                      )}

                      <div className="flex items-center gap-3">
                        <span
                          className={`h-[6px] w-[6px] rounded-full ${
                            current
                              ? "animate-pulse bg-purple-200"
                              : done
                              ? "bg-green-400/60"
                              : "bg-white/10"
                          }`}
                        />

                        <span
                          className={`text-[11px] ${
                            current ? "text-white/75" : "text-white/30"
                          }`}
                        >
                          {event}
                        </span>

                        <span className="ml-auto text-[6px] uppercase text-white/15">
                          {current ? "Running" : done ? "Done" : "Ready"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["1.2s", "Latency"],
                  ["99.8%", "Grounding"],
                  ["24/7", "Runtime"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/[0.05] p-3 text-center"
                  >
                    <div className="text-sm text-purple-100/70">{value}</div>
                    <div className="mt-1 text-[6px] uppercase tracking-[1px] text-white/20">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes runtimeProgress {
          from { width:0; }
          to { width:100%; }
        }

        .runtime-progress {
          animation:runtimeProgress 1.35s linear infinite;
        }

        @keyframes runtimeCore {
          0%,100% { transform:translate(-50%,-50%) scale(.96); }
          50% { transform:translate(-50%,-50%) scale(1.05); }
        }

        .ai-runtime-core {
          animation:runtimeCore 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}