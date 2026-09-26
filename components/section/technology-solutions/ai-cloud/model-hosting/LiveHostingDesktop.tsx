"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Database,
  Radio,
  Server,
  Terminal,
  Zap,
} from "lucide-react";

const logs = [
  "runtime.initialize(model)",
  "weights.loaded → memory",
  "endpoint.ready → /v1/inference",
  "request.received → routing",
  "replica.selected → node-03",
  "tokens.streaming → client",
];

const models = [
  { name: "LLM-CORE", type: "GENERATION", load: 78 },
  { name: "VISION-X", type: "VISION", load: 61 },
  { name: "EMBED-V4", type: "EMBEDDING", load: 43 },
];

const graph = [35, 52, 45, 68, 58, 76, 63, 82, 71, 91, 77, 86];

export default function LiveHostingDesktop() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.25 }}
      className="relative mx-auto max-w-[1450px]"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[#7046e6]/20 blur-[150px]" />

      <div className="relative overflow-hidden rounded-[38px] border border-[#9878ef]/25 bg-[#060606] shadow-[0_45px_120px_rgba(0,0,0,.65)]">
        {/* Browser top */}
        <div className="flex items-center justify-between border-b border-white/[0.07] bg-[#090909] px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.13]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.13]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#9878ef]/50" />
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/[0.06] bg-black px-5 py-2 md:flex">
            <Server size={9} className="text-[#9878ef]" />
            <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.3]">
              HYI MODEL HOSTING / PRODUCTION
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Radio size={10} className="text-[#a98cf4]" />
            <span className="font-mono text-[6px] text-[#a98cf4]">LIVE</span>
          </div>
        </div>

        <div className="grid min-h-[680px] lg:grid-cols-[230px_1fr_300px]">
          {/* Sidebar */}
          <div className="hidden border-r border-white/[0.06] bg-[#050505] p-5 lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-[#7046e6]/30 bg-[#7046e6]/10">
                <BrainCircuit size={15} className="text-[#c9b6ff]" />
              </div>

              <div>
                <p className="text-[10px]">Model Cloud</p>
                <p className="mt-1 font-mono text-[5px] text-white/[0.25]">
                  CONTROL PLANE
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-2">
              {[
                ["Overview", Activity],
                ["Models", BrainCircuit],
                ["Endpoints", Server],
                ["Compute", Cpu],
                ["Data", Database],
                ["Console", Terminal],
              ].map(([label, Icon], index) => {
                const I = Icon as typeof Activity;

                return (
                  <motion.div
                    key={label as string}
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 rounded-[11px] px-3 py-3 ${
                      index === 0
                        ? "border border-[#7046e6]/20 bg-[#7046e6]/[0.08]"
                        : ""
                    }`}
                  >
                    <I
                      size={11}
                      className={
                        index === 0 ? "text-[#b99cff]" : "text-white/[0.25]"
                      }
                    />

                    <span
                      className={`text-[8px] ${
                        index === 0 ? "text-white/[0.7]" : "text-white/[0.28]"
                      }`}
                    >
                      {label as string}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 rounded-[16px] border border-white/[0.06] bg-black p-4">
              <p className="font-mono text-[6px] text-white/[0.2]">
                SYSTEM STATUS
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#9878ef]" />
                <span className="text-[8px] text-white/[0.45]">
                  All services operational
                </span>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="relative overflow-hidden p-5 md:p-7">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.13]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[6px] tracking-[0.22em] text-[#9878ef]">
                    PRODUCTION ENVIRONMENT
                  </p>
                  <h3 className="mt-2 text-xl">Inference Control Center</h3>
                </div>

                <div className="rounded-full border border-[#7046e6]/20 bg-[#7046e6]/[0.07] px-3 py-2 font-mono text-[6px] text-[#b99cff]">
                  DEPLOYED
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["MODELS", "12"],
                  ["ENDPOINTS", "18"],
                  ["REPLICAS", "36"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[17px] border border-white/[0.06] bg-black/80 p-4"
                  >
                    <p className="font-mono text-[5px] tracking-[0.2em] text-white/[0.22]">
                      {label}
                    </p>
                    <p className="mt-3 text-xl">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-[22px] border border-white/[0.07] bg-black/90 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px]">Live inference traffic</p>
                    <p className="mt-1 text-[7px] text-white/[0.25]">
                      Streaming production requests
                    </p>
                  </div>

                  <Activity size={12} className="text-[#9878ef]" />
                </div>

                <div className="mt-6 flex h-[150px] items-end gap-1.5">
                  {graph.map((height, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        height: [
                          `${Math.max(20, height - 18)}%`,
                          `${height}%`,
                          `${Math.max(25, height - 7)}%`,
                        ],
                      }}
                      transition={{
                        duration: 2.2,
                        delay: index * 0.08,
                        repeat: Infinity,
                      }}
                      className="relative flex-1 overflow-hidden rounded-t-[4px] bg-[#7046e6]/25"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-[#c9b6ff]" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-3 flex justify-between font-mono text-[5px] text-white/[0.18]">
                  <span>-60 SEC</span>
                  <span>REQUEST ACTIVITY</span>
                  <span>NOW</span>
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {models.map((model, index) => (
                  <motion.div
                    key={model.name}
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 3,
                      delay: index * 0.4,
                      repeat: Infinity,
                    }}
                    className="rounded-[17px] border border-white/[0.06] bg-black p-4"
                  >
                    <div className="flex items-center justify-between">
                      <BrainCircuit size={12} className="text-[#9878ef]" />

                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#9878ef]" />
                    </div>

                    <p className="mt-5 font-mono text-[7px] text-white/[0.55]">
                      {model.name}
                    </p>

                    <p className="mt-1 font-mono text-[5px] text-white/[0.2]">
                      {model.type}
                    </p>

                    <div className="mt-4 h-[2px] overflow-hidden bg-white/[0.05]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${model.load}%` }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-[#9878ef]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="hidden border-l border-white/[0.06] bg-[#050505] p-5 xl:block">
            <div className="flex items-center gap-2">
              <Terminal size={12} className="text-[#9878ef]" />
              <span className="font-mono text-[7px] text-white/[0.45]">
                LIVE RUNTIME
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {logs.map((log, index) => (
                <motion.div
                  key={log}
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{
                    duration: 4,
                    delay: index * 0.55,
                    repeat: Infinity,
                  }}
                  className="font-mono"
                >
                  <div className="flex gap-2">
                    <span className="text-[7px] text-[#9878ef]">›</span>
                    <span className="text-[7px] leading-5 text-white/[0.4]">
                      {log}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-[17px] border border-[#7046e6]/20 bg-[#7046e6]/[0.05] p-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={11} className="text-[#b99cff]" />
                <span className="font-mono text-[6px] text-[#b99cff]">
                  ENDPOINT READY
                </span>
              </div>

              <p className="mt-4 font-mono text-[6px] leading-5 text-white/[0.25]">
                POST /v1/inference
              </p>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-[17px] border border-white/[0.06] bg-black p-4">
              <Zap size={12} className="text-[#9878ef]" />
              <div>
                <p className="font-mono text-[6px] text-white/[0.2]">
                  RUNTIME
                </p>
                <p className="mt-1 text-[9px]">Streaming</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop stand */}
      <div className="mx-auto h-12 w-[150px] bg-gradient-to-b from-[#171717] to-[#070707]" />
      <div className="mx-auto h-[7px] w-[310px] rounded-full bg-[#161616] shadow-[0_10px_30px_black]" />
    </motion.div>
  );
}