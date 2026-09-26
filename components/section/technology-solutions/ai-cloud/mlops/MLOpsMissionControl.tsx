"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  CheckCircle2,
  CircleDot,
  Database,
  GitBranch,
  Play,
  Radio,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

const pipeline = [
  { label: "DATA", Icon: Database },
  { label: "TRAIN", Icon: BrainCircuit },
  { label: "VALIDATE", Icon: CheckCircle2 },
  { label: "REGISTER", Icon: GitBranch },
  { label: "DEPLOY", Icon: Server },
  { label: "MONITOR", Icon: Activity },
];

const logs = [
  "dataset.snapshot → verified",
  "training.run → completed",
  "evaluation.gate → passed",
  "model.registry → v4.8",
  "deployment.canary → active",
  "monitor.drift → nominal",
];

const graph = [32, 44, 38, 56, 49, 64, 57, 76, 65, 84, 71, 91, 79, 86];

export default function MLOpsMissionControl() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative mx-auto max-w-[1450px]"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[#7046e6]/20 blur-[160px]" />

      <div className="relative overflow-hidden rounded-[38px] border border-[#9878ef]/25 bg-[#060606] shadow-[0_50px_140px_rgba(0,0,0,.75)]">
        <div className="flex items-center justify-between border-b border-white/[0.07] bg-[#090909] px-6 py-4">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#9878ef]/60" />
          </div>

          <div className="hidden rounded-full border border-white/[0.06] bg-black px-5 py-2 font-mono text-[6px] tracking-[0.2em] text-white/[0.3] md:block">
            HYI MLOPS / PRODUCTION CONTROL PLANE
          </div>

          <div className="flex items-center gap-2">
            <Radio size={10} className="animate-pulse text-[#b99cff]" />
            <span className="font-mono text-[6px] text-[#b99cff]">LIVE</span>
          </div>
        </div>

        <div className="grid min-h-[700px] lg:grid-cols-[220px_1fr_300px]">
          <aside className="hidden border-r border-white/[0.06] bg-[#050505] p-5 lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                <BrainCircuit size={16} className="text-[#c9b6ff]" />
              </div>
              <div>
                <p className="text-[10px]">ML Control</p>
                <p className="mt-1 font-mono text-[5px] text-white/[0.22]">
                  OPERATIONS
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-2">
              {[
                "Overview",
                "Experiments",
                "Pipelines",
                "Registry",
                "Deployments",
                "Monitoring",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 4 }}
                  className={`rounded-[11px] px-3 py-3 text-[8px] ${
                    index === 0
                      ? "border border-[#7046e6]/20 bg-[#7046e6]/[0.08] text-white/[0.7]"
                      : "text-white/[0.27]"
                  }`}
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="mt-10 rounded-[16px] border border-white/[0.06] bg-black p-4">
              <p className="font-mono text-[5px] text-white/[0.2]">
                SYSTEM STATE
              </p>
              <div className="mt-4 flex items-center gap-2">
                <CircleDot size={9} className="text-[#9878ef]" />
                <span className="text-[8px] text-white/[0.4]">
                  Lifecycle active
                </span>
              </div>
            </div>
          </aside>

          <div className="relative overflow-hidden p-5 md:p-7">
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                    CONTINUOUS ML DELIVERY
                  </p>
                  <h3 className="mt-2 text-xl">Mission Control</h3>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#7046e6]/20 bg-[#7046e6]/[0.06] px-3 py-2">
                  <Play size={8} className="text-[#b99cff]" />
                  <span className="font-mono text-[5px] text-[#b99cff]">
                    RUNNING
                  </span>
                </div>
              </div>

              <div className="mt-7 overflow-hidden rounded-[22px] border border-white/[0.07] bg-black p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[9px]">Production pipeline</span>
                  <GitBranch size={11} className="text-[#9878ef]" />
                </div>

                <div className="relative mt-7">
                  <div className="absolute left-[5%] right-[5%] top-[25px] h-px bg-[#9878ef]/20" />

                  <motion.span
                    animate={{ left: ["5%", "94%"] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-[22px] z-20 h-2 w-2 rounded-full bg-[#e0d7ff] shadow-[0_0_18px_#9878ef]"
                  />

                  <div className="relative grid grid-cols-3 gap-3 md:grid-cols-6">
                    {pipeline.map(({ label, Icon }, index) => (
                      <div key={label} className="text-center">
                        <motion.div
                          animate={{
                            borderColor: [
                              "rgba(255,255,255,.08)",
                              "rgba(152,120,239,.55)",
                              "rgba(255,255,255,.08)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            delay: index * 0.35,
                            repeat: Infinity,
                          }}
                          className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full border bg-[#090909]"
                        >
                          <Icon size={13} className="text-[#b99cff]" />
                        </motion.div>

                        <p className="mt-3 font-mono text-[5px] text-white/[0.3]">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[1.4fr_.6fr]">
                <div className="rounded-[22px] border border-white/[0.07] bg-black p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px]">Pipeline activity</span>
                    <Activity size={11} className="text-[#9878ef]" />
                  </div>

                  <div className="mt-6 flex h-[180px] items-end gap-1.5">
                    {graph.map((height, index) => (
                      <motion.div
                        key={index}
                        animate={{
                          height: [
                            `${Math.max(20, height - 15)}%`,
                            `${height}%`,
                            `${Math.max(25, height - 6)}%`,
                          ],
                        }}
                        transition={{
                          duration: 2.4,
                          delay: index * 0.08,
                          repeat: Infinity,
                        }}
                        className="relative flex-1 overflow-hidden rounded-t bg-[#7046e6]/25"
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-[#c9b6ff]" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    ["REGISTRY", "SYNCED"],
                    ["DEPLOYMENT", "HEALTHY"],
                    ["DRIFT", "NOMINAL"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[17px] border border-white/[0.06] bg-black p-4"
                    >
                      <p className="font-mono text-[5px] text-white/[0.2]">
                        {label}
                      </p>
                      <p className="mt-3 text-[9px] text-[#b99cff]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="hidden border-l border-white/[0.06] bg-[#050505] p-5 xl:block">
            <div className="flex items-center gap-2">
              <Terminal size={11} className="text-[#9878ef]" />
              <span className="font-mono text-[7px] text-white/[0.45]">
                LIVE PIPELINE
              </span>
            </div>

            <div className="mt-7 space-y-5">
              {logs.map((log, index) => (
                <motion.div
                  key={log}
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{
                    duration: 4,
                    delay: index * 0.55,
                    repeat: Infinity,
                  }}
                  className="flex gap-2"
                >
                  <span className="font-mono text-[7px] text-[#9878ef]">›</span>
                  <span className="font-mono text-[7px] leading-5 text-white/[0.38]">
                    {log}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-9 rounded-[17px] border border-[#7046e6]/20 bg-[#7046e6]/[0.06] p-4">
              <ShieldCheck size={12} className="text-[#c9b6ff]" />
              <p className="mt-3 font-mono text-[6px] text-[#b99cff]">
                RELEASE GATES PASSED
              </p>
            </div>
          </aside>
        </div>
      </div>

      <div className="mx-auto h-11 w-[145px] bg-gradient-to-b from-[#171717] to-[#070707]" />
      <div className="mx-auto h-[7px] w-[300px] rounded-full bg-[#151515]" />
    </motion.div>
  );
}