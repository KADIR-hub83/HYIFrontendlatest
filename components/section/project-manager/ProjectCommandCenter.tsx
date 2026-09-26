"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  Clock3,
  Flag,
  Users,
} from "lucide-react";

export default function ProjectCommandCenter() {
  return (
    <section className=" bg-[#080808] px-5 py-10 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
          <div>
         

            <h2 className="mt-5 font-bold hyi-h1 hyi-white">
              See the whole
              <br />
              project.
              <br />
              <span className="text-white/25">Not fragments.</span>
            </h2>

            <p className="mt-5 max-w-[380px] hyi-p">
              A project manager connects scope, delivery, dependencies,
              resources and decisions so everyone understands what matters
              next.
            </p>

            <div className="mt-5 space-y-4">
              {[
                "Clear ownership",
                "Live milestone tracking",
                "Dependency visibility",
                "Stakeholder alignment",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-white/[0.06] pb-4 text-[10px] text-white/50"
                >
                  <CheckCircle2 size={12} className="text-[#8b5cf6]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#09090c] p-4 sm:p-7">
            <img
              src="/managed-talent-pool.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-20 z-20"
            />

            <div className="relative z-10 rounded-[22px] border border-white/[0.08] bg-[#0c0c0f]/90 p-5 backdrop-blur-xl sm:p-7">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                    Portfolio
                  </p>

                  <h3 className="mt-2 hyi-h3 hyi-white">
                    Active initiatives
                  </h3>
                </div>

                <div className="flex -space-x-2">
                  {[12, 32, 47, 15].map((avatar) => (
                    <img
                      key={avatar}
                      src={`https://i.pravatar.cc/70?img=${avatar}`}
                      alt=""
                      className="h-8 w-8 rounded-full border-2 border-[#111]"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  ["08", "Active projects"],
                  ["92%", "On-time delivery"],
                  ["04", "Milestones this week"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                  >
                    <p className="text-[22px] font-medium">{value}</p>
                    <p className="mt-1 text-[7px] uppercase tracking-wider text-white/25">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-2">
                {[
                  {
                    name: "Mobile Platform",
                    progress: 84,
                    status: "On track",
                  },
                  {
                    name: "Customer Portal",
                    progress: 62,
                    status: "On track",
                  },
                  {
                    name: "Data Migration",
                    progress: 48,
                    status: "At risk",
                  },
                  {
                    name: "Growth Experiment",
                    progress: 35,
                    status: "Planning",
                  },
                ].map((project) => (
                  <div
                    key={project.name}
                    className="grid items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 sm:grid-cols-[1fr_1fr_100px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8b5cf6]/10">
                        <Flag size={12} className="text-[#a78bfa]" />
                      </div>

                      <span className="text-[9px] text-white/60">
                        {project.name}
                      </span>
                    </div>

                    <div>
                      <div className="mb-2 flex justify-between text-[7px] text-white/20">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>

                      <div className="h-[3px] rounded-full bg-white/[0.06]">
                        <div
                          style={{ width: `${project.progress}%` }}
                          className="h-full rounded-full bg-[#8b5cf6]"
                        />
                      </div>
                    </div>

                    <div
                      className={`flex items-center gap-1 text-[7px] ${
                        project.status === "At risk"
                          ? "text-amber-400"
                          : "text-emerald-400"
                      }`}
                    >
                      <Circle size={6} fill="currentColor" />
                      {project.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-5 right-5 z-20 hidden rounded-xl border border-white/10 bg-[#15131b]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-2 text-[8px] text-white/40">
                <Clock3 size={10} className="text-[#a78bfa]" />
                Next milestone in 4 days
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}