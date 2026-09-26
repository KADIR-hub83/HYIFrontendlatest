"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { BrainCircuit, Cpu, Database, Sparkles, Zap } from "lucide-react";
import { useRef } from "react";

const nodes = [
  { x: "8%", y: "24%", label: "DATA", Icon: Database },
  { x: "78%", y: "18%", label: "GPU", Icon: Cpu },
  { x: "82%", y: "72%", label: "INFERENCE", Icon: Zap },
  { x: "5%", y: "73%", label: "MODEL", Icon: BrainCircuit },
];

export default function NeuralModelCore() {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(my, { stiffness: 70, damping: 18 });
  const rotateY = useSpring(mx, { stiffness: 70, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mx.set(x * 14);
    my.set(y * -12);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative mx-auto h-[580px] w-full max-w-[1050px] md:h-[700px]"
      style={{ perspective: 1500 }}
    >
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[130px]" />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0"
      >
        {[520, 410, 310].map((size, i) => (
          <motion.div
            key={size}
            animate={{ rotate: i % 2 ? -360 : 360 }}
            transition={{
              duration: 20 + i * 9,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.10]"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
            }}
          >
            <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 rounded-full bg-[#eee6ff] shadow-[0_0_30px_#d8b4fe]" />
          </motion.div>
        ))}

        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotateY: [0, 360],
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 18, repeat: Infinity, ease: "linear" },
          }}
          className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 rotate-45 rounded-[48px] border border-[#eadfff]/30 bg-gradient-to-br from-white/[0.10] via-violet-300/[0.08] to-transparent shadow-[0_0_100px_rgba(216,180,254,.14)] backdrop-blur-2xl" />

          <div className="absolute inset-[32px] -rotate-12 rounded-[42px] border border-white/[0.15] bg-white/[0.025]" />

          <div className="absolute inset-[65px] flex items-center justify-center rounded-[34px] border border-[#eee6ff]/25 bg-[#eee6ff]/[0.08] shadow-[inset_0_0_35px_rgba(255,255,255,.08)]">
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              <BrainCircuit size={48} strokeWidth={1.1} className="text-[#f2ebff]" />
            </motion.div>
          </div>
        </motion.div>

        {nodes.map(({ x, y, label, Icon }, index) => (
          <motion.div
            key={label}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ left: x, top: y }}
            className="absolute hidden md:block"
          >
            <div className="min-w-[145px] rounded-2xl border border-white/[0.10] bg-[#09090d]/75 p-4 backdrop-blur-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-200/15 bg-violet-200/[0.04]">
                  <Icon size={13} className="text-violet-100/75" />
                </div>

                <div>
                  <p className="text-[7px] tracking-[0.25em] text-white/45">
                    {label}
                  </p>
                  <p className="mt-1 text-[7px] text-emerald-300/55">
                    ACTIVE
                  </p>
                </div>
              </div>

              <div className="mt-4 h-[2px] overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  animate={{ x: ["-100%", "180%"] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-violet-200 to-transparent"
                />
              </div>
            </div>
          </motion.div>
        ))}

        <div className="absolute left-1/2 top-[78%] -translate-x-1/2 text-center">
          <div className="flex items-center justify-center gap-2">
            <Sparkles size={10} className="text-violet-200" />
            <span className="text-[7px] uppercase tracking-[0.35em] text-white/35">
              HYI.AI Neural Core
            </span>
          </div>

          <div className="mt-4 flex h-5 items-center justify-center gap-[3px]">
            {[1,2,3,4,5,6,7,8,9].map((bar) => (
              <motion.span
                key={bar}
                animate={{ height: [4, 18, 7, 14, 4] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: bar * 0.06,
                }}
                className="w-[2px] rounded-full bg-violet-100"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}