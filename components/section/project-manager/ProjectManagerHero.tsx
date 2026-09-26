"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Circle,
  Clock3,
  MoreHorizontal,
  Play,
  Plus,
  Sparkles,
  Users,
} from "lucide-react";
import { MouseEvent } from "react";

const tasks = [
  {
    title: "Finalize onboarding flow",
    tag: "Product",
    progress: 82,
    status: "In progress",
  },
  {
    title: "API integration review",
    tag: "Engineering",
    progress: 64,
    status: "Review",
  },
  {
    title: "Mobile experience QA",
    tag: "Design",
    progress: 46,
    status: "In progress",
  },
];

const team = [
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=15",
];

export default function ProjectManagerHero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 80,
    damping: 25,
  });

  const smoothY = useSpring(y, {
    stiffness: 80,
    damping: 25,
  });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative  overflow-hidden "
    >
      {/* Mouse glow */}

      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
        }}
        className="pointer-events-none absolute z-0 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/[0.4] blur-[110px]"
      />

      {/* Background */}

      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(139,92,246,.14),transparent_35%)]" /> */}

      {/* <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to_bottom,black,transparent_85%)",
        }}
      /> */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pt-20 sm:px-10 lg:px-20">
        {/* Heading */}

        <div className="grid items-end gap-12 lg:grid-cols-[1fr_380px]">
          <div>
       

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1120px] text-[clamp(58px,5vw,140px)] font-medium leading-[0.83] tracking-[-0.075em]"
            >
              Projects move.
              <br />

              <span className="text-white/25">We keep them</span>{" "}

              <span className="relative inline-block">
                moving.
                <svg
                  viewBox="0 0 400 28"
                  className="absolute -bottom-4 left-0 w-full"
                >
                  <motion.path
                    d="M4 17 C110 5 285 4 395 1"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      delay: 0.8,
                      duration: 1.3,
                    }}
                  />
                </svg>
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="pb-3"
          >
            <p className="max-w-[350px] hyi-p ">
              Hire experienced project managers who bring structure to
              complexity, align teams and turn ambitious roadmaps into
              predictable delivery.
            </p>

       
          </motion.div>
        </div>

        {/* Command center */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-10 overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#09090b]"
        >
          <img
            src="/Card-bg-03.webp"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-100 z-10"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/70" />

          {/* Browser bar */}

          <div className="relative z-20 flex h-[62px] items-center justify-between border-b border-white/[0.07] bg-black/30 px-5 backdrop-blur-xl">
            <div className="flex items-center gap-5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/[0.06]" />
              </div>

              <div className="hidden h-5 w-px bg-white/10 sm:block" />

              <div className="hidden items-center gap-2 text-[10px] text-white/35 sm:flex">
                <Circle
                  size={8}
                  fill="#22c55e"
                  className="text-[#22c55e]"
                />

                Project Command Center
              </div>
            </div>

            <div className="flex items-center">
              <div className="hidden -space-x-2 sm:flex">
                {team.map((avatar) => (
                  <img
                    key={avatar}
                    src={avatar}
                    alt=""
                    className="h-7 w-7 rounded-full border-2 border-[#111]"
                  />
                ))}
              </div>

              <button className="ml-4 rounded-lg bg-[#7c3aed] px-4 py-2 text-[9px]">
                Share project
              </button>
            </div>
          </div>

          {/* Dashboard */}

          <div className="relative z-10 grid min-h-[620px] lg:grid-cols-[210px_1fr]">
            {/* Sidebar */}

            <div className="hidden border-r border-white/[0.07] bg-black/20 p-4 lg:block">
              <p className="px-3 py-3 text-[8px] uppercase tracking-[0.2em] text-white/20">
                Workspace
              </p>

              {[
                "Overview",
                "Roadmap",
                "Tasks",
                "Team",
                "Risks",
                "Reports",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`mb-1 flex items-center justify-between rounded-lg px-3 py-2.5 text-[9px] ${
                    index === 0
                      ? "bg-white/[0.07] text-white"
                      : "text-white/30"
                  }`}
                >
                  {item}

                  {index === 2 && (
                    <span className="rounded-full bg-[#8b5cf6]/20 px-2 py-0.5 text-[7px] text-[#bdaaff]">
                      24
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Content */}

            <div className="p-5 sm:p-7 lg:p-9">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                    September / Sprint 08
                  </p>

                  <h2 className="mt-2 text-[22px] font-medium tracking-[-0.03em]">
                    Platform launch
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-9 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 text-[8px] text-white/35">
                    <CalendarDays size={11} />
                    Sep 18 — Oct 02
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025]">
                    <MoreHorizontal size={14} className="text-white/35" />
                  </div>
                </div>
              </div>

              {/* metrics */}

              <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ["Overall progress", "74%", "+8%"],
                  ["Tasks completed", "128", "18 left"],
                  ["Team velocity", "42", "+12%"],
                  ["Open risks", "03", "-2"],
                ].map(([label, value, change]) => (
                  <div
                    key={label}
                    className="rounded-[16px] border border-white/[0.07] bg-black/20 p-4 backdrop-blur-md"
                  >
                    <p className="text-[8px] text-white/25">{label}</p>

                    <div className="mt-4 flex items-end justify-between">
                      <span className="text-[24px] font-medium tracking-[-0.04em]">
                        {value}
                      </span>

                      <span className="text-[7px] text-[#a78bfa]">
                        {change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 xl:grid-cols-[1.25fr_.75fr]">
                {/* Task list */}

                <div className="rounded-[18px] border border-white/[0.07] bg-black/20 p-5 backdrop-blur-md">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-medium">
                        Priority work
                      </p>

                      <p className="mt-1 text-[8px] text-white/25">
                        Critical tasks for this sprint
                      </p>
                    </div>

                    <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.08]">
                      <Plus size={11} className="text-white/40" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    {tasks.map((task) => (
                      <div
                        key={task.title}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex gap-3">
                            <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-md border border-white/10">
                              <CheckCircle2
                                size={10}
                                className="text-white/25"
                              />
                            </div>

                            <div>
                              <p className="text-[9px] text-white/65">
                                {task.title}
                              </p>

                              <p className="mt-1 text-[7px] text-white/20">
                                {task.tag}
                              </p>
                            </div>
                          </div>

                          <span className="text-[7px] text-white/25">
                            {task.progress}%
                          </span>
                        </div>

                        <div className="ml-8 mt-3 h-[2px] overflow-hidden rounded-full bg-white/[0.06]">
                          <div
                            style={{ width: `${task.progress}%` }}
                            className="h-full bg-[#8b5cf6]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* timeline */}

                <div className="rounded-[18px] border border-white/[0.07] bg-black/20 p-5 backdrop-blur-md">
                  <div>
                    <p className="text-[11px] font-medium">
                      Delivery timeline
                    </p>

                    <p className="mt-1 text-[8px] text-white/25">
                      Upcoming milestones
                    </p>
                  </div>

                  <div className="mt-7 space-y-6">
                    {[
                      ["Sep 24", "Product QA", "Today"],
                      ["Sep 28", "Beta release", "4 days"],
                      ["Oct 02", "Production", "8 days"],
                    ].map(([date, title, meta], index) => (
                      <div key={title} className="relative flex gap-4">
                        {index !== 2 && (
                          <div className="absolute left-[5px] top-4 h-[38px] w-px bg-white/[0.08]" />
                        )}

                        <span
                          className={`relative z-10 mt-1 h-[11px] w-[11px] rounded-full border ${
                            index === 0
                              ? "border-[#8b5cf6] bg-[#8b5cf6]"
                              : "border-white/20 bg-[#111]"
                          }`}
                        />

                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="text-[8px] text-white/30">
                              {date}
                            </span>

                            <span className="text-[7px] text-white/20">
                              {meta}
                            </span>
                          </div>

                          <p className="mt-1 text-[9px] text-white/60">
                            {title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* floating card */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-7 right-7 z-30 hidden w-[205px] rounded-[16px] border border-[#8b5cf6]/20 bg-[#121018]/90 p-4 shadow-2xl backdrop-blur-xl xl:block"
          >
            <div className="flex items-center justify-between">
              <span className="text-[8px] text-white/30">
                Sprint health
              </span>

              <span className="flex items-center gap-1 text-[7px] text-emerald-400">
                <Circle size={6} fill="currentColor" />
                On track
              </span>
            </div>

            <div className="mt-4 flex items-end gap-2">
              <span className="text-[26px] font-medium">92</span>
              <span className="mb-1 text-[8px] text-white/25">
                / 100
              </span>
            </div>

            <div className="mt-3 h-1 rounded-full bg-white/[0.07]">
              <div className="h-full w-[92%] rounded-full bg-[#8b5cf6]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}