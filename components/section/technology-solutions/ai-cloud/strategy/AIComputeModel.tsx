"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Database, Network, Server, Zap } from "lucide-react";

const stages = [
  { Icon: Database, title: "Data" },
  { Icon: Network, title: "Pipeline" },
  { Icon: Cpu, title: "Accelerated Compute" },
  { Icon: BrainCircuit, title: "Model Runtime" },
  { Icon: Server, title: "Serving" },
];

export default function AIComputeModel() {
  return (
    <div className="overflow-hidden rounded-[36px] border border-[#7046e6]/20 bg-[#040404]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-7 py-5">
        <span className="font-mono text-[8px] tracking-[0.22em] text-white/[0.3]">
          AI COMPUTE FABRIC
        </span>
        <Zap size={13} className="text-[#9878ef]" />
      </div>

      <div className="relative p-7 md:p-12">
        <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px bg-[#7046e6]/30 md:block" />

        <div className="relative grid gap-4 md:grid-cols-5">
          {stages.map(({ Icon, title }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative min-h-[220px] rounded-[24px] border border-white/[0.08] bg-[#080808] p-6"
            >
              <span className="font-mono text-[7px] text-[#7046e6]">
                0{index + 1}
              </span>
              <Icon size={20} className="mt-8 text-[#a98cf4]" />
              <p className="mt-6 text-[14px]">{title}</p>
              <p className="mt-3 text-[10px] leading-5 text-white/[0.35]">
                {index === 0 && "Trusted information prepared for AI systems."}
                {index === 1 && "Move and transform data through controlled flows."}
                {index === 2 && "Match compute resources to training and inference."}
                {index === 3 && "Operate models through governed runtime services."}
                {index === 4 && "Expose reliable AI capabilities to applications."}
              </p>

              {index < stages.length - 1 && (
                <motion.span
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute -right-[10px] top-1/2 hidden h-2 w-2 rounded-full bg-[#7046e6] md:block"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}