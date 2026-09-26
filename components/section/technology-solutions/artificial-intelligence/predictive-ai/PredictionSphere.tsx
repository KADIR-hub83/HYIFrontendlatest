"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import {
  Activity,
  BrainCircuit,
  Database,
  Radar,
  TrendingUp,
} from "lucide-react";

const satellites = [
  {
    label: "DEMAND",
    value: "+18.4%",
    position: "left-[4%] top-[27%]",
  },
  {
    label: "RISK",
    value: "12.8%",
    position: "right-[4%] top-[25%]",
  },
  {
    label: "GROWTH",
    value: "+24.6%",
    position: "left-[7%] bottom-[24%]",
  },
  {
    label: "CONFIDENCE",
    value: "96.7%",
    position: "right-[7%] bottom-[23%]",
  },
];

export default function PredictionSphere() {
  const container = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, {
    stiffness: 60,
    damping: 18,
  });

  const smoothY = useSpring(rotateY, {
    stiffness: 60,
    damping: 18,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!container.current) return;

    const rect = container.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    rotateY.set(x * 13);
    rotateX.set(y * -10);
  };

  return (
    <div
      ref={container}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      className="relative mx-auto h-[620px] max-w-[1200px] md:h-[720px]"
      style={{ perspective: 1300 }}
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.12] blur-[130px]" />

      <motion.div
        style={{
          rotateX: smoothX,
          rotateY: smoothY,
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0"
      >
        {[540, 430, 330].map((size, index) => (
          <motion.div
            key={size}
            animate={{
              rotate: index % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 32 + index * 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 rounded-full border border-violet-300/[0.11]"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-violet-200 shadow-[0_0_20px_rgba(196,181,253,.9)]"
            />
          </motion.div>
        ))}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 60px rgba(139,92,246,.15)",
              "0 0 140px rgba(139,92,246,.35)",
              "0 0 60px rgba(139,92,246,.15)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 flex h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/25 bg-[#08060D] md:h-[310px] md:w-[310px]"
        >
          <div className="absolute inset-[13px] rounded-full border border-dashed border-violet-300/20" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[30px] rounded-full border-t border-violet-300/70"
          />

          <div className="relative text-center">
            <BrainCircuit
              size={27}
              className="mx-auto text-violet-300"
            />

            <p className="mt-5 text-[8px] uppercase tracking-[0.45em] text-[#D8D0E7]/40">
              Prediction Core
            </p>

            <h3 className="mt-3 text-4xl font-light tracking-[-0.04em]">
              96.7%
            </h3>

            <p className="mt-2 text-xs text-violet-200/60">
              Forecast Confidence
            </p>

            <div className="mt-6 flex justify-center gap-1.5">
              {[0, 1, 2, 3, 4].map((item) => (
                <motion.span
                  key={item}
                  animate={{
                    height: [4, 15, 6, 12, 4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: item * 0.15,
                  }}
                  className="w-[3px] rounded-full bg-violet-300"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {satellites.map((item, index) => (
          <motion.div
            key={item.label}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${item.position} hidden md:block`}
          >
            <div className="min-w-[170px] rounded-2xl border border-white/[0.09] bg-[#08070c]/80 p-4 backdrop-blur-2xl">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_10px_#c4b5fd]" />
                <span className="text-[8px] tracking-[0.28em] text-[#D7D0E3]/40">
                  {item.label}
                </span>
              </div>

              <p className="mt-3 text-xl font-light text-[#F3EDFF]/80">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}

        <motion.div
          animate={{ x: [-80, 80, -80] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[450px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-violet-300/30 to-transparent"
        />
      </motion.div>

      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-6">
        <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-[#D6CFE1]/35">
          <Radar size={12} />
          Live Signals
        </div>

        <span className="h-1 w-1 rounded-full bg-white/20" />

        <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-[#D6CFE1]/35">
          <Activity size={12} />
          Real-time inference
        </div>

        <span className="hidden h-1 w-1 rounded-full bg-white/20 md:block" />

        <div className="hidden items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-[#D6CFE1]/35 md:flex">
          <TrendingUp size={12} />
          Future projection
        </div>
      </div>
    </div>
  );
}