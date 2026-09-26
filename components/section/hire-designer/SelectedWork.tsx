"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    index: "01",
    type: "FINTECH / PRODUCT DESIGN",
    title: "A clearer way to understand your money.",
    description:
      "Research, interaction design and a scalable interface system for a modern financial platform.",
    background: "/Card-bg-03.webp",
    visual: "finance",
  },
  {
    index: "02",
    type: "SAAS / EXPERIENCE",
    title: "Complex workflows. Remarkably simple.",
    description:
      "A modular workspace designed to make high-volume operational work feel effortless.",
    background: "/Card-bg-04.webp",
    visual: "saas",
  },
];

export default function SelectedWork() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              Selected work
            </span>

            <h2 className="mt-5 text-[clamp(45px,6vw,90px)] font-medium leading-[0.9] tracking-[-0.065em]">
              Designed to
              <br />
              <span className="text-white/25">move business.</span>
            </h2>
          </div>

          <p className="max-w-[360px] text-[12px] leading-6 text-white/40">
            Senior designers who can move between product thinking, interaction
            design and visual execution.
          </p>
        </div>

        <div className="space-y-5">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative min-h-[650px] overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#0b0b0d]"
            >
              <img
                src={project.background}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-40"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/90" />

              {/* product visual */}

              <div className="absolute inset-x-0 top-0 flex h-[68%] items-center justify-center p-10">
                {project.visual === "finance" ? (
                  <div className="relative w-full max-w-[900px]">
                    <motion.div
                      whileHover={{ rotateX: 2, rotateY: -2 }}
                      className="mx-auto grid max-w-[820px] grid-cols-[180px_1fr] overflow-hidden rounded-[24px] border border-white/10 bg-[#e9e7e2] shadow-[0_50px_120px_rgba(0,0,0,.6)]"
                    >
                      <div className="border-r border-black/10 p-5 text-black">
                        <div className="text-[10px] font-bold">MOTION</div>

                        <div className="mt-12 space-y-4 text-[8px] text-black/40">
                          <p>Overview</p>
                          <p>Transactions</p>
                          <p>Investments</p>
                          <p>Insights</p>
                        </div>
                      </div>

                      <div className="p-8 text-black">
                        <div className="flex justify-between">
                          <span className="text-[9px] text-black/40">
                            Total balance
                          </span>

                          <span className="text-[8px] text-black/40">
                            September
                          </span>
                        </div>

                        <div className="mt-3 text-[36px] font-medium tracking-[-0.05em]">
                          $84,240.82
                        </div>

                        <div className="mt-10 grid grid-cols-3 gap-3">
                          {[62, 78, 45].map((height, index) => (
                            <div
                              key={index}
                              className="relative h-[120px] overflow-hidden rounded-xl bg-black/[0.04]"
                            >
                              <div
                                style={{ height: `${height}%` }}
                                className="absolute bottom-0 left-0 right-0 rounded-xl bg-[#7955ff]"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <div className="relative w-full max-w-[850px]">
                    <div className="rounded-[24px] border border-white/10 bg-[#101014]/95 p-5 shadow-2xl backdrop-blur-xl">
                      <div className="mb-5 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-white/30">
                            Workspace
                          </div>

                          <div className="mt-1 text-[15px]">
                            Product Operations
                          </div>
                        </div>

                        <div className="rounded-lg bg-white px-3 py-2 text-[8px] text-black">
                          New task
                        </div>
                      </div>

                      <div className="grid gap-3 md:grid-cols-3">
                        {["Backlog", "In progress", "Completed"].map(
                          (column, columnIndex) => (
                            <div
                              key={column}
                              className="rounded-xl bg-white/[0.035] p-3"
                            >
                              <div className="mb-4 text-[9px] text-white/40">
                                {column}
                              </div>

                              {[1, 2, 3].map((item) => (
                                <div
                                  key={item}
                                  className="mb-2 rounded-lg border border-white/[0.06] bg-white/[0.04] p-3"
                                >
                                  <div className="h-1.5 w-[60%] rounded-full bg-white/15" />

                                  <div className="mt-2 h-1.5 w-[85%] rounded-full bg-white/[0.07]" />

                                  <div className="mt-5 flex justify-between">
                                    <div className="h-5 w-5 rounded-full bg-[#8b5cf6]/50" />

                                    <span className="text-[7px] text-white/20">
                                      0{columnIndex + item}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 grid gap-5 p-7 sm:p-10 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
                <div>
                  <div className="mb-3 text-[9px] tracking-[0.18em] text-white/35">
                    {project.index} / {project.type}
                  </div>

                  <h3 className="max-w-[600px] text-[28px] font-medium leading-[1.05] tracking-[-0.04em] sm:text-[38px]">
                    {project.title}
                  </h3>
                </div>

                <p className="max-w-[370px] text-[11px] leading-5 text-white/40">
                  {project.description}
                </p>

                <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}