"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  CircleDot,
  Database,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: 8 + ((index * 37) % 84),
  top: 8 + ((index * 53) % 82),
  size: 1 + (index % 3),
}));

export default function ProbabilityOrb() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, {
    stiffness: 70,
    damping: 20,
  });

  const rotateY = useSpring(x, {
    stiffness: 70,
    damping: 20,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(px * 12);
    y.set(py * -10);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="relative mx-auto h-[680px] w-full max-w-[1100px] md:h-[800px]"
      style={{ perspective: 1500 }}
    >
      <div className="absolute left-1/2 top-[46%] h-[500px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9ddff]/[0.09] blur-[140px]" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [0.6, 1.6, 0.6],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2 + (particle.id % 5),
            repeat: Infinity,
            delay: particle.id * 0.06,
          }}
          className="absolute rounded-full bg-[#f2ebff] shadow-[0_0_12px_rgba(242,235,255,.8)]"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0"
      >
        {[600, 490, 380].map((size, index) => (
          <motion.div
            key={size}
            animate={{
              rotate: index % 2 ? -360 : 360,
            }}
            transition={{
              duration: 22 + index * 9,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-[45%] rounded-[50%] border border-[#eee5ff]/15"
            style={{
              width: size,
              height: size * 0.34,
              marginLeft: -size / 2,
              marginTop: -(size * 0.34) / 2,
              transform:
                index === 1
                  ? "rotate(58deg)"
                  : index === 2
                    ? "rotate(-58deg)"
                    : undefined,
            }}
          >
            <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-white shadow-[0_0_25px_white]" />
          </motion.div>
        ))}

        <motion.div
          animate={{
            y: [-9, 9, -9],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[45%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-dashed border-[#eee5ff]/20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[28px] rounded-full border border-[#eee5ff]/20"
          />

          <div className="absolute inset-[58px] flex items-center justify-center rounded-full border border-[#eee5ff]/30 bg-gradient-to-br from-[#f2eaff]/20 via-[#baa5db]/10 to-transparent shadow-[0_0_100px_rgba(236,225,255,.18),inset_0_0_60px_rgba(255,255,255,.08)] backdrop-blur-2xl">
            <motion.div
              animate={{
                scale: [0.94, 1.08, 0.94],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]"
            >
              <TrendingUp
                size={44}
                strokeWidth={1}
                className="text-[#f6f0ff]"
              />
            </motion.div>
          </div>

          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 translate-y-[76px] text-center">
            <p className="font-mono text-[7px] uppercase tracking-[0.35em] text-white/40">
              Predictive Core
            </p>

            <p className="mt-2 text-2xl font-light text-[#f3edff]">
              94.8%
            </p>

            <p className="mt-1 font-mono text-[6px] tracking-[0.2em] text-white/25">
              CONFIDENCE
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute left-[2%] top-[28%] hidden rounded-[22px] border border-[#eee5ff]/10 bg-[#09090b]/80 p-5 backdrop-blur-xl md:block">
        <Database size={14} className="text-[#eee5ff]/60" />

        <p className="mt-4 font-mono text-[7px] tracking-[0.2em] text-white/35">
          HISTORICAL
        </p>

        <p className="mt-2 text-sm text-white/65">18.2B signals</p>
      </div>

      <div className="absolute right-[2%] top-[26%] hidden rounded-[22px] border border-[#eee5ff]/10 bg-[#09090b]/80 p-5 backdrop-blur-xl md:block">
        <BrainCircuit size={14} className="text-[#eee5ff]/60" />

        <p className="mt-4 font-mono text-[7px] tracking-[0.2em] text-white/35">
          MODEL
        </p>

        <p className="mt-2 text-sm text-white/65">Ensemble v4.2</p>
      </div>

      <div className="absolute bottom-[20%] left-[7%] hidden rounded-[22px] border border-[#eee5ff]/10 bg-[#09090b]/80 p-5 backdrop-blur-xl md:block">
        <Activity size={14} className="text-[#eee5ff]/60" />

        <p className="mt-4 font-mono text-[7px] tracking-[0.2em] text-white/35">
          SIGNAL
        </p>

        <p className="mt-2 text-sm text-white/65">Live context</p>
      </div>

      <div className="absolute bottom-[20%] right-[7%] hidden rounded-[22px] border border-[#eee5ff]/10 bg-[#09090b]/80 p-5 backdrop-blur-xl md:block">
        <CircleDot size={14} className="text-[#eee5ff]/60" />

        <p className="mt-4 font-mono text-[7px] tracking-[0.2em] text-white/35">
          HORIZON
        </p>

        <p className="mt-2 text-sm text-white/65">Next 90 days</p>
      </div>

      <Sparkles
        size={13}
        className="absolute left-1/2 top-[11%] -translate-x-1/2 text-[#eee5ff]/50"
      />
    </div>
  );
}