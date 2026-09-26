"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const nodes = [
  { title: "Strategy", x: "12%", y: "25%", delay: 0 },
  { title: "Data", x: "79%", y: "18%", delay: 0.4 },
  { title: "People", x: "8%", y: "70%", delay: 0.8 },
  { title: "Platform", x: "82%", y: "67%", delay: 1.2 },
  { title: "Governance", x: "47%", y: "5%", delay: 1.6 },
  { title: "Scale", x: "48%", y: "86%", delay: 2 },
];

export default function StrategyConstellation() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const smoothX = useSpring(mx, { stiffness: 70, damping: 25 });
  const smoothY = useSpring(my, { stiffness: 70, damping: 25 });

  const rotateY = useTransform(smoothX, [-1, 1], [-7, 7]);
  const rotateX = useTransform(smoothY, [-1, 1], [6, -6]);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mx.set(event.clientX / window.innerWidth * 2 - 1);
      my.set(event.clientY / window.innerHeight * 2 - 1);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[1000px] md:h-[670px]">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.10] blur-[150px]" />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1100,
        }}
        className="absolute inset-0"
      >
        <svg
          viewBox="0 0 1000 650"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="strategyLine">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity=".55" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[
            [500, 325, 140, 170],
            [500, 325, 820, 130],
            [500, 325, 100, 455],
            [500, 325, 850, 445],
            [500, 325, 500, 45],
            [500, 325, 500, 590],
          ].map((line, i) => (
            <motion.line
              key={i}
              x1={line[0]}
              y1={line[1]}
              x2={line[2]}
              y2={line[3]}
              stroke="url(#strategyLine)"
              strokeWidth="1"
              strokeDasharray="5 10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.16,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
            />
          ))}

          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx="500"
              cy="325"
              r={120 + i * 62}
              fill="none"
              stroke="rgba(192,132,252,.10)"
              strokeDasharray={i === 1 ? "5 12" : undefined}
              animate={{ rotate: i % 2 ? -360 : 360 }}
              transition={{
                duration: 25 + i * 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformOrigin: "500px 325px" }}
            />
          ))}
        </svg>

        <motion.div
          animate={{
            scale: [0.94, 1.04, 0.94],
            boxShadow: [
              "0 0 50px rgba(168,85,247,.15)",
              "0 0 120px rgba(168,85,247,.35)",
              "0 0 50px rgba(168,85,247,.15)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/25 bg-[#09060f]/90 backdrop-blur-2xl md:h-[235px] md:w-[235px]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[13px] rounded-full border border-dashed border-purple-300/15"
          />

          <div className="text-center">
            <div className="text-[8px] uppercase tracking-[3px] text-purple-200/30">
              HYI.AI
            </div>

            <div className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              AI
            </div>

            <div className="mt-1 bg-gradient-to-r from-purple-100 to-purple-500 bg-clip-text text-sm text-transparent">
              Transformation
            </div>

            <div className="mt-5 flex justify-center gap-1">
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1.8,
                    delay: i * 0.25,
                    repeat: Infinity,
                  }}
                  className="h-1 w-1 rounded-full bg-purple-300"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {nodes.map((node) => (
          <motion.div
            key={node.title}
            style={{ left: node.x, top: node.y }}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -9, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: node.delay },
              scale: { duration: 0.8, delay: node.delay },
              y: {
                duration: 4,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{ scale: 1.12 }}
          >
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#09080d]/80 px-4 py-3 backdrop-blur-2xl">
              <motion.div
                animate={{ opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl bg-purple-500/[0.06]"
              />

              <div className="relative flex items-center gap-2">
                <span className="h-[5px] w-[5px] rounded-full bg-purple-300 shadow-[0_0_10px_#c084fc]" />
                <span className="text-[8px] uppercase tracking-[1.5px] text-white/45 md:text-[10px]">
                  {node.title}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}