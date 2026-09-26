"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Activity,
  Binary,
  BrainCircuit,
  Cloud,
  Database,
  Radio,
  Server,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

const satellites = [
  { Icon: Database, label: "TRANSACTIONS", pos: "left-[3%] top-[25%]" },
  { Icon: Cloud, label: "CLOUD", pos: "right-[3%] top-[23%]" },
  { Icon: Radio, label: "STREAMS", pos: "left-[7%] bottom-[22%]" },
  { Icon: BrainCircuit, label: "AI / ML", pos: "right-[7%] bottom-[21%]" },
];

const particles = Array.from({ length: 38 }, (_, index) => ({
  id: index,
  left: 8 + ((index * 37) % 84),
  top: 10 + ((index * 53) % 78),
  size: 2 + (index % 3),
  duration: 3 + (index % 5),
}));

export default function BigDataQuantumCore() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 10);
    mouseY.set(y * -8);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative mx-auto h-[720px] w-full max-w-[1250px] md:h-[850px]"
      style={{ perspective: 1500 }}
    >
      <div className="absolute left-1/2 top-[47%] h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9ddff]/[0.09] blur-[150px]" />

      <div
        className="absolute inset-[4%] opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(ellipse at center,black 20%,transparent 72%)",
        }}
      />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [0.7, 1.5, 0.7],
            y: [0, -12, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.id * 0.07,
          }}
          className="absolute rounded-full bg-[#f2ebff] shadow-[0_0_10px_rgba(240,232,255,.7)]"
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
        {[640, 520, 400].map((size, index) => (
          <motion.div
            key={size}
            animate={{
              rotate: index % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 20 + index * 9,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-[46%] rounded-[50%] border border-[#eee5ff]/[0.13]"
            style={{
              width: size,
              height: size * 0.34,
              marginLeft: -size / 2,
              marginTop: -(size * 0.34) / 2,
              transform:
                index === 1
                  ? "rotate(55deg)"
                  : index === 2
                    ? "rotate(-55deg)"
                    : undefined,
            }}
          >
            {[0, 1, 2, 3].map((dot) => (
              <motion.span
                key={dot}
                animate={{
                  scale: [0.7, 1.6, 0.7],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: dot * 0.25,
                }}
                className="absolute h-2 w-2 rounded-full bg-[#f4edff] shadow-[0_0_22px_rgba(244,237,255,1)]"
                style={{
                  left: `${15 + dot * 22}%`,
                  top: dot % 2 ? "90%" : "-3px",
                }}
              />
            ))}
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
          className="absolute left-1/2 top-[46%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 md:h-[390px] md:w-[390px]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-dashed border-[#f1eaff]/20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[26px] rounded-full border border-[#eee5ff]/20"
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-[#eee5ff]/70"
                style={{
                  transform: `rotate(${index * 30}deg) translateY(-145px)`,
                  transformOrigin: "center",
                }}
              />
            ))}
          </motion.div>

          <div className="absolute inset-[62px] rounded-full border border-[#f3edff]/30 bg-gradient-to-br from-[#f5efff]/20 via-[#c8b6e5]/10 to-transparent shadow-[0_0_100px_rgba(235,223,255,.18),inset_0_0_70px_rgba(255,255,255,.08)] backdrop-blur-2xl">
            <div className="absolute inset-[18px] rounded-full border border-white/15" />

            <motion.div
              animate={{
                scale: [0.95, 1.08, 0.95],
                opacity: [0.75, 1, 0.75],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute inset-[48px] flex items-center justify-center rounded-full bg-[#eee5ff]/10 shadow-[0_0_70px_rgba(240,232,255,.25)]"
            >
              <Binary
                size={54}
                strokeWidth={0.9}
                className="text-[#f7f2ff]"
              />
            </motion.div>
          </div>

          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 translate-y-[78px] text-center">
            <p className="font-mono text-[7px] uppercase tracking-[0.4em] text-[#f3edff]/55">
              Quantum Data Core
            </p>

            <div className="mt-4 flex items-center justify-center gap-1">
              {Array.from({ length: 10 }).map((_, index) => (
                <motion.span
                  key={index}
                  animate={{
                    height: [3, 16, 6, 12, 3],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: index * 0.07,
                  }}
                  className="w-[2px] rounded-full bg-[#f0e8ff]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {satellites.map(({ Icon, label, pos }, index) => (
        <motion.div
          key={label}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}
          className={`absolute hidden md:block ${pos}`}
        >
          <div className="w-[150px] rounded-[24px] border border-[#eee5ff]/15 bg-[#08080a]/80 p-5 backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <Icon size={16} className="text-[#eee5ff]/70" />

              <Activity size={10} className="text-emerald-300/60" />
            </div>

            <p className="mt-5 font-mono text-[7px] tracking-[0.25em] text-[#eee5ff]/50">
              {label}
            </p>

            <div className="mt-4 h-px overflow-hidden bg-white/[0.06]">
              <motion.div
                animate={{
                  x: ["-100%", "220%"],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: index * 0.25,
                }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#f1eaff] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-[4%] left-1/2 grid w-[94%] max-w-[850px] -translate-x-1/2 grid-cols-2 gap-px overflow-hidden rounded-[26px] border border-[#eee5ff]/10 bg-[#eee5ff]/[0.07] md:grid-cols-4">
        {[
          ["8.4B", "EVENTS / DAY"],
          ["2.1 PB", "INGESTED"],
          ["18 ms", "PROCESSING"],
          ["99.99%", "UPTIME"],
        ].map(([value, label]) => (
          <div key={label} className="bg-[#080809] px-5 py-6 text-center">
            <p className="text-xl font-light text-[#f3edf8] md:text-2xl">
              {value}
            </p>

            <p className="mt-2 font-mono text-[6px] tracking-[0.2em] text-white/30">
              {label}
            </p>
          </div>
        ))}
      </div>

      <Sparkles
        size={15}
        className="absolute left-1/2 top-[12%] -translate-x-1/2 text-[#eee5ff]/35"
      />
    </div>
  );
}