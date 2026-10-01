"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  CircleCheck,
  Clock3,
  Radio,
  Zap,
  type LucideIcon,
} from "lucide-react";

const activity = [
  "Customer onboarding completed",
  "Invoice validation executed",
  "Support case classified",
  "ERP record synchronized",
  "Approval workflow initiated",
];

interface AutomationStat {
  value: string;
  label: string;
  Icon: LucideIcon;
}

const automationStats: AutomationStat[] = [
  {
    value: "128",
    label: "ACTIVE FLOWS",
    Icon: Zap,
  },
  {
    value: "48",
    label: "AI AGENTS",
    Icon: Bot,
  },
  {
    value: "99.8%",
    label: "SUCCESS",
    Icon: CircleCheck,
  },
  {
    value: "18ms",
    label: "RESPONSE",
    Icon: Clock3,
  },
];

export default function AutomationCommandCenter() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07070A] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/55">
          05 / Automation Control
        </span>

        <h2 className="mt-7 max-w-[900px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
          Autonomous Operations
          <span className="block text-[#C5B6D8]/60">
            Command Center.
          </span>
        </h2>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20 overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#060609]"
        >
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/[0.07] px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
              </div>

              <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                HYI.AI / Automation OS
              </span>
            </div>

            <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-emerald-400/60">
              <Radio size={11} />
              Systems operational
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px]">
            <div className="border-white/[0.07] p-6 md:p-9 lg:border-r">
              <div className="grid gap-3 md:grid-cols-4">
                {automationStats.map(({ value, label, Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
                  >
                    <Icon
                      size={14}
                      className="text-violet-300/65"
                    />

                    <p className="mt-6 text-3xl font-light text-[#F1EAF8]/80">
                      {value}
                    </p>

                    <p className="mt-2 text-[7px] tracking-[0.2em] text-white/25">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-5 h-[350px] overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#030305]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
                    backgroundSize: "55px 55px",
                  }}
                />

                <div className="absolute inset-x-7 bottom-8 flex h-[240px] items-end gap-2">
                  {Array.from({
                    length: 38,
                  }).map((_, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        height: [
                          `${20 + ((index * 13) % 60)}%`,
                          `${30 + ((index * 19) % 60)}%`,
                          `${20 + ((index * 13) % 60)}%`,
                        ],
                      }}
                      transition={{
                        duration: 3 + (index % 5),
                        repeat: Infinity,
                      }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-900/20 via-violet-500/30 to-violet-200/75"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="p-7">
              <div className="flex items-center justify-between">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                  Live Activity
                </p>

                <Activity
                  size={13}
                  className="text-emerald-400/60"
                />
              </div>

              <div className="mt-7 space-y-3">
                {activity.map((item, index) => (
                  <motion.div
                    key={item}
                    animate={{
                      opacity: [0.45, 1, 0.45],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.6,
                    }}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <div className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />

                      <div>
                        <p className="text-xs leading-6 text-[#E4DDEA]/60">
                          {item}
                        </p>

                        <p className="mt-2 text-[7px] uppercase tracking-[0.2em] text-white/20">
                          automation / success
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}