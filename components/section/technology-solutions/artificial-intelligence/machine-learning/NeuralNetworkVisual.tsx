"use client";

import { motion } from "framer-motion";

const layers = [
  { x: 90, nodes: [115, 205, 295, 385, 475] },
  { x: 270, nodes: [90, 170, 250, 330, 410, 490] },
  { x: 470, nodes: [135, 225, 315, 405] },
  { x: 660, nodes: [180, 280, 380] },
  { x: 830, nodes: [235, 325] },
];

export default function NeuralNetworkVisual() {
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];

  layers.slice(0, -1).forEach((layer, i) => {
    layer.nodes.forEach((y1) => {
      layers[i + 1].nodes.forEach((y2) => {
        lines.push({
          x1: layer.x,
          y1,
          x2: layers[i + 1].x,
          y2,
        });
      });
    });
  });

  return (
    <div className="relative h-[440px] w-full overflow-hidden rounded-[34px] border border-[#8b5cf6]/15 bg-[#080d25] shadow-[0_40px_120px_rgba(76,29,149,.18)] md:h-[570px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(124,58,237,.25),transparent_38%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,.16),transparent_35%)]" />

      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.09) 1px,transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="absolute left-6 top-6 z-20 flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
          <span className="relative h-2 w-2 rounded-full bg-green-400" />
        </span>

        <span className="text-[8px] uppercase tracking-[2.5px] text-white/40">
          Neural Training Network
        </span>
      </div>

      <div className="absolute right-6 top-6 z-20 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[8px] uppercase tracking-[1.5px] text-purple-200/50">
        Epoch 084 / 100
      </div>

      <svg
        viewBox="0 0 920 570"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="mlLine">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity=".05" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity=".28" />
            <stop offset="100%" stopColor="#d8b4fe" stopOpacity=".08" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {lines.map((line, i) => (
          <motion.line
            key={i}
            {...line}
            stroke="url(#mlLine)"
            strokeWidth=".8"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.05, 0.4, 0.05] }}
            transition={{
              duration: 3 + (i % 4),
              delay: (i % 12) * 0.08,
              repeat: Infinity,
            }}
          />
        ))}

        {layers.map((layer, layerIndex) =>
          layer.nodes.map((y, nodeIndex) => (
            <g key={`${layerIndex}-${nodeIndex}`}>
              <motion.circle
                cx={layer.x}
                cy={y}
                r="14"
                fill="#090d25"
                stroke={
                  layerIndex === layers.length - 1 ? "#e9d5ff" : "#8b5cf6"
                }
                strokeOpacity=".45"
                initial={{ scale: 0 }}
                animate={{
                  scale: [0.85, 1.1, 0.85],
                  opacity: [0.55, 1, 0.55],
                }}
                transition={{
                  duration: 2.5,
                  delay: layerIndex * 0.25 + nodeIndex * 0.08,
                  repeat: Infinity,
                }}
                style={{ transformOrigin: `${layer.x}px ${y}px` }}
              />

              <motion.circle
                cx={layer.x}
                cy={y}
                r="3"
                fill="#d8b4fe"
                filter="url(#glow)"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.8,
                  delay: nodeIndex * 0.2,
                  repeat: Infinity,
                }}
              />
            </g>
          ))
        )}

        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            r="4"
            fill="#ffffff"
            filter="url(#glow)"
            initial={{ cx: 90, cy: 115 + i * 90 }}
            animate={{
              cx: [90, 270, 470, 660, 830],
              cy: [
                115 + i * 90,
                170 + (i % 3) * 80,
                135 + (i % 4) * 90,
                180 + (i % 3) * 100,
                235 + (i % 2) * 90,
              ],
            }}
            transition={{
              duration: 3.5,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      <div className="absolute bottom-5 left-5 right-5 z-20 grid grid-cols-3 gap-2">
        {[
          ["98.7%", "Accuracy"],
          ["0.024", "Loss"],
          ["14ms", "Inference"],
        ].map(([value, label]) => (
          <motion.div
            key={label}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/[0.08] bg-[#111735]/75 px-3 py-3 backdrop-blur-xl md:px-5"
          >
            <div className="text-sm font-semibold text-white md:text-lg">
              {value}
            </div>
            <div className="mt-1 text-[6px] uppercase tracking-[1.5px] text-white/30">
              {label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}