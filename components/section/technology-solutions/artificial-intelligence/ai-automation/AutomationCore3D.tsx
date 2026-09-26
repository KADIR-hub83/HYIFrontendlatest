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
  CheckCircle2,
  Cpu,
  Database,
  GitBranch,
  Zap,
} from "lucide-react";

const nodes = [
  {
    title: "INPUT",
    value: "2.4M",
    icon: Database,
    position: "left-[3%] top-[26%]",
  },
  {
    title: "AI AGENTS",
    value: "48",
    icon: Bot,
    position: "right-[3%] top-[25%]",
  },
  {
    title: "WORKFLOWS",
    value: "128",
    icon: GitBranch,
    position: "left-[6%] bottom-[22%]",
  },
  {
    title: "SUCCESS",
    value: "99.8%",
    icon: CheckCircle2,
    position: "right-[6%] bottom-[22%]",
  },
];

export default function AutomationCore3D() {
  const container = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 70,
    damping: 20,
  });

  const springY = useSpring(rotateY, {
    stiffness: 70,
    damping: 20,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!container.current) return;

    const rect = container.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    rotateY.set(x * 15);
    rotateX.set(y * -11);
  };

  return (
    <div
      ref={container}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      className="relative mx-auto h-[610px] max-w-[1200px] md:h-[720px]"
      style={{ perspective: 1400 }}
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.13] blur-[140px]" />

      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0"
      >
        {[560, 455, 355].map((size, index) => (
          <motion.div
            key={size}
            animate={{
              rotate: index % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 28 + index * 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 rounded-full border border-violet-300/[0.12]"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-[-5px] h-[9px] w-[9px] rounded-full bg-violet-200 shadow-[0_0_22px_rgba(196,181,253,.9)]"
            />
          </motion.div>
        ))}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 50px rgba(139,92,246,.16)",
              "0 0 130px rgba(139,92,246,.38)",
              "0 0 50px rgba(139,92,246,.16)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 flex h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[34%] border border-violet-300/25 bg-[#08060D] md:h-[320px] md:w-[320px]"
          style={{
            transform:
              "translate(-50%, -50%) rotateX(12deg) rotateZ(45deg)",
          }}
        >
          <div className="absolute inset-[12px] rounded-[32%] border border-dashed border-violet-300/20" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[35px] rounded-full border-t border-r border-violet-300/60"
          />

          <div
            className="relative text-center"
            style={{
              transform: "rotateZ(-45deg)",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-500/10"
            >
              <BrainCircuit
                size={25}
                className="text-violet-200"
              />
            </motion.div>

            <p className="mt-5 text-[8px] uppercase tracking-[0.42em] text-white/35">
              Automation Core
            </p>

            <p className="mt-3 text-3xl font-light text-[#F2EAFE]">
              ACTIVE
            </p>

            <div className="mt-5 flex justify-center gap-1">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <motion.span
                  key={item}
                  animate={{
                    height: [5, 17, 7, 13, 5],
                  }}
                  transition={{
                    duration: 1.3,
                    repeat: Infinity,
                    delay: item * 0.12,
                  }}
                  className="w-[3px] rounded-full bg-violet-300"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {nodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <motion.div
              key={node.title}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute ${node.position} hidden md:block`}
            >
              <div className="min-w-[175px] rounded-2xl border border-white/[0.09] bg-[#08070C]/80 p-4 backdrop-blur-2xl">
                <div className="flex items-center gap-3">
                  <Icon
                    size={13}
                    className="text-violet-300"
                  />

                  <span className="text-[8px] tracking-[0.28em] text-white/35">
                    {node.title}
                  </span>
                </div>

                <p className="mt-4 text-2xl font-light text-[#F1EBF8]/80">
                  {node.value}
                </p>
              </div>
            </motion.div>
          );
        })}

        <motion.div
          animate={{
            x: [-120, 120, -120],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[470px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-violet-300/40 to-transparent"
        />
      </motion.div>

      <div className="absolute bottom-9 left-1/2 flex -translate-x-1/2 items-center gap-5 whitespace-nowrap text-[8px] uppercase tracking-[0.25em] text-white/30">
        <span className="flex items-center gap-2">
          <Cpu size={11} />
          Runtime
        </span>

        <span>•</span>

        <span className="flex items-center gap-2">
          <Zap size={11} />
          Autonomous execution
        </span>
      </div>
    </div>
  );
}