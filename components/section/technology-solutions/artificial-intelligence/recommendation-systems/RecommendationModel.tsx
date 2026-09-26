"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { BrainCircuit, Sparkles } from "lucide-react";
import { useRef } from "react";

const orbitItems = [
  { label: "PRODUCT", x: "4%", y: "28%" },
  { label: "CONTENT", x: "77%", y: "20%" },
  { label: "OFFER", x: "83%", y: "68%" },
  { label: "NEXT BEST", x: "8%", y: "72%" },
];

export default function RecommendationModel() {
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

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 13);
    mouseY.set(y * -11);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative mx-auto h-[600px] w-full max-w-[1050px] md:h-[720px]"
      style={{ perspective: 1400 }}
    >
      <div className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9ddff]/10 blur-[140px]" />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0"
      >
        {[520, 410, 305].map((size, index) => (
          <motion.div
            key={size}
            animate={{
              rotate: index % 2 ? -360 : 360,
            }}
            transition={{
              duration: 22 + index * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 rounded-full border"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
              borderColor:
                index === 1
                  ? "rgba(232,220,255,.20)"
                  : "rgba(255,255,255,.09)",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-[-5px] h-[9px] w-[9px] rounded-full bg-[#efe7ff] shadow-[0_0_28px_rgba(237,225,255,1)]"
            />
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
          className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-[38%] border border-[#e6d8ff]/35 bg-gradient-to-br from-[#f2eaff]/10 via-[#9d6cff]/10 to-transparent shadow-[0_0_90px_rgba(196,181,253,.18)] backdrop-blur-xl"
          />

          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[30px] rounded-[40%] border border-dashed border-white/20"
          />

          <div className="absolute inset-[58px] flex items-center justify-center rounded-[38px] border border-white/20 bg-[#e8ddff]/10 shadow-[inset_0_0_40px_rgba(255,255,255,.06)] backdrop-blur-2xl">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              <BrainCircuit
                size={46}
                strokeWidth={1.2}
                className="text-[#f0e8ff]"
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 translate-y-[112px] text-center">
          <div className="flex items-center justify-center gap-2">
            <Sparkles
              size={10}
              className="text-[#e7d8ff]"
            />

            <span className="text-[8px] uppercase tracking-[0.35em] text-[#eee6f7]/45">
              Personalization Core
            </span>
          </div>

          <p className="mt-3 text-[10px] uppercase tracking-[0.4em] text-[#f2eaff]/70">
            Ranking
          </p>

          <div className="mt-4 flex h-5 items-center justify-center gap-[3px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.span
                key={item}
                animate={{
                  height: [3, 17, 6, 13, 3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: item * 0.07,
                }}
                className="w-[2px] rounded-full bg-[#e9ddff]"
              />
            ))}
          </div>
        </div>

        {orbitItems.map((item, index) => (
          <motion.div
            key={item.label}
            animate={{
              y: [0, -9, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute hidden md:block"
            style={{
              left: item.x,
              top: item.y,
            }}
          >
            <div className="rounded-xl border border-white/[0.10] bg-[#09080d]/75 px-5 py-4 shadow-[0_20px_70px_rgba(0,0,0,.5)] backdrop-blur-2xl">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e8dcff] shadow-[0_0_12px_#e8dcff]" />

                <span className="text-[7px] tracking-[0.25em] text-white/50">
                  {item.label}
                </span>
              </div>

              <div className="mt-3 h-[2px] w-24 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  animate={{
                    x: ["-100%", "120%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#eadfff] to-transparent"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}