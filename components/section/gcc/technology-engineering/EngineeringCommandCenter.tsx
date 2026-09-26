"use client";

import { useEffect, useState } from "react";

const processes = [
  "Architecture validation",
  "Repository synchronization",
  "CI/CD pipeline execution",
  "Automated quality validation",
  "Security policy analysis",
  "Cloud deployment orchestration",
];

export default function EngineeringCommandCenter() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % processes.length);
    }, 1400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="engineering-command-center"
      className="relative overflow-hidden border-b border-white/[0.05] bg-[#020203] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute right-[-200px] top-[10%] h-[650px] w-[650px] rounded-full bg-purple-800/[0.08] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            Engineering Intelligence
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-1.3px] md:text-5xl">
            One engineering system.
            <span className="block bg-gradient-to-r from-[#ddaaff] via-[#a35cff] to-[#7657ff] bg-clip-text text-transparent">
              Continuous visibility.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-[14px] leading-7 text-white/36">
            Bring architecture, engineering workflows, quality, security,
            DevOps and cloud delivery into one connected operating environment.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#060609] shadow-[0_35px_120px_rgba(0,0,0,.55)]">
          {/* terminal top */}
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4 md:px-7">
            <div className="flex gap-2">
              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-purple-400/60" />
            </div>

            <div className="text-[7px] uppercase tracking-[2px] text-white/20 md:text-[8px]">
              HYI Engineering Command Center
            </div>

            <div className="flex items-center gap-2">
              <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-green-400" />
              <span className="hidden text-[7px] uppercase tracking-[1px] text-green-400/45 sm:block">
                Live
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_.8fr]">
            {/* architecture visualization */}
            <div className="relative min-h-[540px] overflow-hidden border-b border-white/[0.06] p-6 md:p-10 lg:border-b-0 lg:border-r">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(168,85,247,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,.15) 1px,transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[8px] uppercase tracking-[2px] text-purple-300/35">
                      Architecture Map
                    </p>
                    <h3 className="mt-2 text-xl font-medium text-white/80">
                      Digital Engineering Platform
                    </h3>
                  </div>

                  <div className="rounded-full border border-white/[0.06] px-3 py-1 text-[7px] uppercase tracking-[1px] text-white/25">
                    Production
                  </div>
                </div>

                <div className="relative mt-14 h-[360px]">
                  {/* connecting lines */}
                  <div className="absolute left-[15%] right-[15%] top-1/2 h-px bg-gradient-to-r from-purple-500/10 via-purple-300/40 to-purple-500/10" />

                  <div className="absolute bottom-[16%] left-1/2 top-[16%] w-px bg-gradient-to-b from-purple-500/10 via-purple-300/35 to-purple-500/10" />

                  <div className="command-flow absolute left-[14%] top-1/2 h-[2px] w-[14%] bg-gradient-to-r from-transparent to-purple-200 shadow-[0_0_10px_#a855f7]" />

                  {/* center */}
                  <div className="command-core absolute left-1/2 top-1/2 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-400/25 bg-purple-500/[0.07] shadow-[0_0_70px_rgba(126,55,220,.28)]">
                    <div className="absolute inset-[-20px] rounded-full border border-purple-400/[0.08]" />
                    <div className="text-center">
                      <div className="text-xl font-semibold text-purple-100/80">
                        CORE
                      </div>
                      <div className="mt-1 text-[6px] uppercase tracking-[1.5px] text-white/20">
                        Platform
                      </div>
                    </div>
                  </div>

                  {[
                    ["WEB", "left-[4%] top-[8%]"],
                    ["MOBILE", "right-[2%] top-[8%]"],
                    ["DATA", "left-[2%] bottom-[7%]"],
                    ["CLOUD", "right-[2%] bottom-[7%]"],
                    ["API", "left-1/2 top-0 -translate-x-1/2"],
                    ["DEVOPS", "bottom-0 left-1/2 -translate-x-1/2"],
                  ].map(([label, position]) => (
                    <div
                      key={label}
                      className={`absolute ${position} flex h-[68px] min-w-[78px] items-center justify-center rounded-2xl border border-white/[0.07] bg-[#0b0910]/85 px-3 backdrop-blur-xl`}
                    >
                      <div className="text-center">
                        <span className="text-[9px] tracking-[1.2px] text-white/55">
                          {label}
                        </span>
                        <div className="mx-auto mt-2 h-[3px] w-[3px] rounded-full bg-green-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* live console */}
            <div className="relative p-6 md:p-9">
              <p className="text-[8px] uppercase tracking-[2px] text-purple-300/35">
                Continuous Engineering
              </p>

              <h3 className="mt-2 text-xl font-medium text-white/80">
                Live Delivery Pipeline
              </h3>

              <div className="mt-8 space-y-3">
                {processes.map((process, index) => {
                  const current = index === active;
                  const complete = index < active;

                  return (
                    <div
                      key={process}
                      className={`relative overflow-hidden rounded-xl border px-4 py-4 transition-all duration-500 ${
                        current
                          ? "border-purple-400/20 bg-purple-500/[0.055]"
                          : "border-white/[0.04] bg-white/[0.01]"
                      }`}
                    >
                      {current && (
                        <div className="pipeline-progress absolute bottom-0 left-0 h-px bg-purple-300" />
                      )}

                      <div className="flex items-center gap-3">
                        <span
                          className={`h-[6px] w-[6px] shrink-0 rounded-full ${
                            current
                              ? "animate-pulse bg-purple-200 shadow-[0_0_10px_#a855f7]"
                              : complete
                              ? "bg-green-400/60"
                              : "bg-white/12"
                          }`}
                        />

                        <span
                          className={`text-[11px] ${
                            current ? "text-white/75" : "text-white/30"
                          }`}
                        >
                          {process}
                        </span>

                        <span className="ml-auto text-[6px] uppercase tracking-[1px] text-white/15">
                          {current
                            ? "Running"
                            : complete
                            ? "Passed"
                            : "Ready"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  ["98.7%", "Quality"],
                  ["12m", "Deploy"],
                  ["99.9%", "Uptime"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/[0.05] bg-white/[0.015] p-3 text-center"
                  >
                    <div className="text-[13px] font-medium text-purple-100/70">
                      {value}
                    </div>
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

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .pipeline-progress {
          animation: progress 1.4s linear infinite;
        }

        @keyframes coreBreath {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.96);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.04);
          }
        }

        .command-core {
          animation: coreBreath 4s ease-in-out infinite;
        }

        @keyframes flow {
          0% {
            left: 14%;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            left: 46%;
            opacity: 0;
          }
        }

        .command-flow {
          animation: flow 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}