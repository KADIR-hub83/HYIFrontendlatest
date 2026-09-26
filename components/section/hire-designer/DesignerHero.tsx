"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Circle,
  Command,
  MousePointer2,
  MoveUpRight,
  Play,
  Sparkles,
} from "lucide-react";
import { MouseEvent } from "react";

const avatars = [
  "https://i.pravatar.cc/120?img=12",
  "https://i.pravatar.cc/120?img=32",
  "https://i.pravatar.cc/120?img=47",
  "https://i.pravatar.cc/120?img=15",
];

export default function DesignerHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 25,
  });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden border-b border-white/[0.06]"
    >
      {/* cursor glow */}

      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
        }}
        className="pointer-events-none absolute z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/[0.09] blur-[100px]"
      />

      {/* background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(139,92,246,.14),transparent_35%)]" />

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom,black,transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pt-36">
        {/* top */}

        <div className="grid items-end gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-7 flex items-center gap-3"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <Sparkles size={12} className="text-[#a78bfa]" />
              </div>

              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/40">
                HYI / Design talent
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[1100px] text-[clamp(58px,8.3vw,145px)] font-medium leading-[0.82] tracking-[-0.075em]"
            >
              Hire designers
              <br />

              <span className="text-white/25">who make</span>{" "}

              <span className="relative inline-block">
                products
                <svg
                  viewBox="0 0 430 30"
                  className="absolute -bottom-4 left-0 w-full"
                >
                  <motion.path
                    d="M3 18 C120 4, 300 4, 425 14"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 1.3 }}
                  />
                </svg>
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="pb-3 lg:pb-5"
          >
            <p className="max-w-[340px] text-[14px] leading-7 text-white/45">
              Work with senior product designers who transform complex ideas
              into intuitive, scalable and beautifully crafted digital
              experiences.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="group flex h-12 items-center gap-3 rounded-full bg-white px-6 text-[12px] font-semibold text-black transition hover:bg-[#a78bfa]">
                Hire a designer
                <ArrowUpRight
                  size={15}
                  className="transition group-hover:rotate-45"
                />
              </button>

              <button className="flex h-12 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 text-[12px] text-white/60 transition hover:bg-white/[0.07]">
                <Play size={12} fill="currentColor" />
                How it works
              </button>
            </div>
          </motion.div>
        </div>

        {/* DESIGN WORKSPACE */}

        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-20 overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#09090b]"
        >
          <div className="absolute inset-0">
            <img
              src="/Card-bg-03.webp"
              alt=""
              className="h-full w-full object-cover opacity-40"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />

          {/* toolbar */}

          <div className="relative z-10 flex h-[60px] items-center justify-between border-b border-white/[0.07] bg-black/30 px-5 backdrop-blur-xl">
            <div className="flex items-center gap-5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/[0.07]" />
              </div>

              <div className="h-5 w-px bg-white/10" />

              <div className="flex items-center gap-2 text-[11px] text-white/40">
                <Command size={13} />
                HYI Design Workspace
              </div>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex -space-x-2">
                {avatars.slice(0, 3).map((avatar) => (
                  <img
                    key={avatar}
                    src={avatar}
                    alt=""
                    className="h-7 w-7 rounded-full border-2 border-[#111]"
                  />
                ))}
              </div>

              <div className="ml-2 flex h-8 items-center rounded-lg bg-[#7c3aed] px-4 text-[10px] font-medium">
                Share
              </div>
            </div>
          </div>

          {/* canvas */}

          <div className="relative z-10 min-h-[590px] p-5 md:p-10 lg:p-14">
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* main frame */}

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mx-auto max-w-[950px]"
            >
              <div className="rounded-[25px] border border-white/10 bg-[#0d0d10]/90 p-3 shadow-2xl backdrop-blur-xl">
                <div className="grid overflow-hidden rounded-[19px] bg-[#f0eee9] md:grid-cols-[1.05fr_.95fr]">
                  <div className="flex min-h-[430px] flex-col justify-between p-8 text-black md:p-12">
                    <div className="flex items-center justify-between">
                      <div className="text-[12px] font-bold tracking-tight">
                        østudio
                      </div>

                      <div className="flex gap-5 text-[9px] font-medium uppercase tracking-[0.15em]">
                        <span>Work</span>
                        <span>About</span>
                      </div>
                    </div>

                    <div>
                      <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-black/40">
                        Digital product studio
                      </p>

                      <h2 className="max-w-[420px] text-[42px] font-medium leading-[0.92] tracking-[-0.055em] sm:text-[55px]">
                        Products people understand.
                      </h2>

                      <p className="mt-6 max-w-[330px] text-[11px] leading-5 text-black/50">
                        Strategy, experience and interface design for ambitious
                        digital products.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[10px]">
                      Explore projects
                      <MoveUpRight size={12} />
                    </div>
                  </div>

                  <div className="relative min-h-[430px] overflow-hidden bg-[#151515]">
                    <div className="absolute left-[16%] top-[15%] h-[70%] w-[70%] rounded-[42%] bg-[#8057ff] blur-[1px]" />

                    <div className="absolute left-[27%] top-[25%] h-[50%] w-[50%] rotate-12 rounded-[36%] bg-[#f1efea]" />

                    <div className="absolute left-[40%] top-[37%] h-[28%] w-[28%] -rotate-12 rounded-[30%] bg-[#ff623f]" />

                    <div className="absolute bottom-7 right-7 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[9px] text-white/60 backdrop-blur-md">
                      Product exploration
                    </div>
                  </div>
                </div>
              </div>

              {/* cursor */}

              <motion.div
                animate={{
                  x: [0, 35, 10, 0],
                  y: [0, 25, 55, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                }}
                className="absolute right-[20%] top-[28%]"
              >
                <MousePointer2
                  size={22}
                  fill="#8b5cf6"
                  className="text-[#8b5cf6]"
                />

                <div className="ml-4 -mt-1 rounded-full bg-[#8b5cf6] px-2 py-1 text-[8px]">
                  Maya
                </div>
              </motion.div>
            </motion.div>

            {/* floating palette */}

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-8 left-6 hidden w-[180px] rounded-2xl border border-white/10 bg-[#101013]/90 p-4 shadow-2xl backdrop-blur-xl lg:block"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[9px] text-white/40">Color styles</span>
                <Circle size={10} className="text-white/30" />
              </div>

              <div className="flex gap-2">
                {["#8b5cf6", "#ff623f", "#f0eee9", "#222226"].map(
                  (color) => (
                    <div
                      key={color}
                      style={{ background: color }}
                      className="h-8 flex-1 rounded-lg border border-white/10"
                    />
                  ),
                )}
              </div>
            </motion.div>

            {/* floating specs */}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute right-7 top-10 hidden w-[190px] rounded-2xl border border-white/10 bg-[#101013]/90 p-4 backdrop-blur-xl xl:block"
            >
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                Design QA
              </p>

              <div className="mt-4 space-y-3">
                {[
                  "Auto layout",
                  "Components",
                  "Accessibility",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between text-[9px]"
                  >
                    <span className="text-white/45">{item}</span>

                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                      <Check size={9} />
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}