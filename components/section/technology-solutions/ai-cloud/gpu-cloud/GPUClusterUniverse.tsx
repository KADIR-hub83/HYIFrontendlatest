"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Zap } from "lucide-react";

const clusters = [
  { title: "TRAINING", nodes: 8 },
  { title: "INFERENCE", nodes: 6 },
  { title: "BATCH AI", nodes: 4 },
  { title: "RESEARCH", nodes: 5 },
];

export default function GPUClusterUniverse() {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-[#7046e6]/20 bg-[#050505] p-6 md:p-10">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            GPU CLUSTER UNIVERSE
          </p>
          <p className="mt-2 text-[10px] text-white/[0.3]">
            Logical accelerator pools
          </p>
        </div>

        <Server size={16} className="text-[#9878ef]" />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {clusters.map((cluster, clusterIndex) => (
          <motion.div
            key={cluster.title}
            whileHover={{ scale: 1.01 }}
            className="rounded-[25px] border border-white/[0.07] bg-black p-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.45]">
                {cluster.title}
              </span>

              <Zap size={12} className="text-[#a98cf4]" />
            </div>

            <div className="mt-7 grid grid-cols-4 gap-2">
              {Array.from({ length: cluster.nodes }).map((_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    borderColor: [
                      "rgba(255,255,255,.07)",
                      "rgba(169,140,244,.45)",
                      "rgba(255,255,255,.07)",
                    ],
                    opacity: [0.55, 1, 0.55],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: clusterIndex * 0.3 + index * 0.12,
                    repeat: Infinity,
                  }}
                  className="flex h-16 items-center justify-center rounded-[13px] border bg-white/[0.02]"
                >
                  <Cpu size={13} className="text-[#a98cf4]" />
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between font-mono text-[6px] text-white/[0.25]">
              <span>{cluster.nodes} COMPUTE NODES</span>
              <span className="text-[#9878ef]">AVAILABLE</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}