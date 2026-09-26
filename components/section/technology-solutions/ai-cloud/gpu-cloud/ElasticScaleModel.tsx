"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, Plus, Radio, Zap } from "lucide-react";

const capacity = [3, 4, 4, 5, 6, 8, 10, 12, 10, 8, 7, 6];

export default function ElasticScaleModel() {
  return (
    <div className="rounded-[32px] border border-white/[0.08] bg-[#070707] p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            ELASTIC CAPACITY ENGINE
          </p>
          <p className="mt-2 text-[10px] text-white/[0.3]">
            Workload-driven scaling model
          </p>
        </div>

        <Activity size={16} className="text-[#9878ef]" />
      </div>

      <div className="mt-8 rounded-[24px] border border-white/[0.06] bg-black p-6">
        <div className="flex h-[240px] items-end gap-2">
          {capacity.map((value, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              whileInView={{ height: `${value * 7}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.07,
              }}
              className="relative flex-1 rounded-t-md bg-gradient-to-t from-[#7046e6]/20 to-[#a98cf4]/70"
            >
              <motion.div
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 2,
                  delay: index * 0.1,
                  repeat: Infinity,
                }}
                className="absolute inset-x-0 top-0 h-px bg-[#e2d8ff]"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex justify-between font-mono text-[6px] text-white/[0.2]">
          <span>LOW DEMAND</span>
          <span>GPU CAPACITY</span>
          <span>PEAK</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { Icon: Cpu, label: "GPU POOL", value: "Elastic" },
          { Icon: Radio, label: "SCHEDULER", value: "Active" },
          { Icon: Zap, label: "SCALING", value: "Dynamic" },
        ].map(({ Icon, label, value }) => (
          <div
            key={label}
            className="rounded-[17px] border border-white/[0.06] bg-black p-4"
          >
            <Icon size={12} className="text-[#9878ef]" />
            <p className="mt-4 font-mono text-[6px] text-white/[0.22]">
              {label}
            </p>
            <p className="mt-2 text-xs">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}