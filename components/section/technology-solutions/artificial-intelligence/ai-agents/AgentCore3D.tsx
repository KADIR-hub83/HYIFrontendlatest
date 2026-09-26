"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

import {
  Bot,
  BrainCircuit,
  Database,
  Eye,
  Search,
  TerminalSquare,
} from "lucide-react";

const agents = [
  {
    title: "RESEARCH",
    status: "ACTIVE",
    icon: Search,
    position: "left-[3%] top-[27%]",
  },
  {
    title: "VISION",
    status: "WATCHING",
    icon: Eye,
    position: "right-[3%] top-[27%]",
  },
  {
    title: "DATA",
    status: "SYNCED",
    icon: Database,
    position: "left-[7%] bottom-[21%]",
  },
  {
    title: "EXECUTOR",
    status: "READY",
    icon: TerminalSquare,
    position: "right-[7%] bottom-[21%]",
  },
];

export default function AgentCore3D() {
  const ref = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  const rotateX = useSpring(rx, {
    stiffness: 60,
    damping: 18,
  });

  const rotateY = useSpring(ry, {
    stiffness: 60,
    damping: 18,
  });

  function mouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    ry.set(x * 16);
    rx.set(y * -12);
  }

  return (
    <div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      className="relative mx-auto h-[650px] max-w-[1250px] md:h-[760px]"
      style={{ perspective: 1500 }}
    >
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.13] blur-[150px]" />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0"
      >
        {[590, 485, 380].map((size, index) => (
          <motion.div
            key={size}
            animate={{
              rotate:
                index % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 28 + index * 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 rounded-full border border-violet-300/[0.13]"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
              transform:
                index === 1
                  ? "rotateX(67deg)"
                  : undefined,
            }}
          >
            <motion.span
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-[-5px] h-[9px] w-[9px] rounded-full bg-violet-100 shadow-[0_0_30px_rgba(196,181,253,1)]"
            />
          </motion.div>
        ))}

        <motion.div
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[320px] w-[320px]"
          style={{
            transform:
              "translate(-50%, -50%) rotateX(58deg) rotateZ(45deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px rgba(139,92,246,.12)",
                "0 0 120px rgba(139,92,246,.42)",
                "0 0 40px rgba(139,92,246,.12)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute inset-0 rounded-[38%] border border-violet-300/30 bg-gradient-to-br from-[#171020] via-[#08060D] to-black"
          />

          <div className="absolute inset-[20px] rounded-[35%] border border-dashed border-violet-300/20" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[45px] rounded-full border-l border-t border-violet-200/70"
          />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute inset-[85px] flex items-center justify-center rounded-[35px] border border-violet-200/25 bg-violet-500/10 backdrop-blur-xl"
          >
            <BrainCircuit
              size={42}
              className="text-violet-100"
            />
          </motion.div>
        </motion.div>

        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 translate-y-[115px] text-center">
          <p className="text-[8px] uppercase tracking-[0.45em] text-white/25">
            Agent Intelligence Core
          </p>

          <p className="mt-3 text-lg font-light tracking-[0.2em] text-violet-100/70">
            THINKING
          </p>

          <div className="mt-4 flex h-6 items-center justify-center gap-1">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <motion.span
                key={i}
                animate={{
                  height: [4, 18, 7, 14, 4],
                }}
                transition={{
                  duration: 1.3,
                  repeat: Infinity,
                  delay: i * 0.09,
                }}
                className="w-[2px] rounded-full bg-violet-300"
              />
            ))}
          </div>
        </div>

        {agents.map((agent, index) => {
          const Icon = agent.icon;

          return (
            <motion.div
              key={agent.title}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute ${agent.position} hidden md:block`}
            >
              <div className="min-w-[170px] rounded-2xl border border-white/[0.08] bg-[#08070C]/80 p-4 backdrop-blur-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-300/15 bg-violet-500/[0.07]">
                    <Icon
                      size={13}
                      className="text-violet-300"
                    />
                  </div>

                  <div>
                    <p className="text-[8px] tracking-[0.25em] text-white/40">
                      {agent.title}
                    </p>

                    <p className="mt-1 text-[7px] tracking-[0.18em] text-emerald-300/55">
                      {agent.status}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {Array.from({ length: 16 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.6, 0.5],
            }}
            transition={{
              duration: 2.5 + (index % 4),
              repeat: Infinity,
              delay: index * 0.25,
            }}
            className="absolute h-1 w-1 rounded-full bg-violet-200"
            style={{
              left: `${20 + ((index * 37) % 62)}%`,
              top: `${18 + ((index * 29) % 66)}%`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}