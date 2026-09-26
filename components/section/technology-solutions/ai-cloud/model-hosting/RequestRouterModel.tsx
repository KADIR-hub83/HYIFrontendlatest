"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Network,
  Radio,
  Server,
} from "lucide-react";

const replicas = [
  { id: "R-01", state: "READY", load: 63 },
  { id: "R-02", state: "READY", load: 47 },
  { id: "R-03", state: "READY", load: 71 },
  { id: "R-04", state: "READY", load: 39 },
];

export default function RequestRouterModel() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#070707] p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            INFERENCE ROUTER
          </p>
          <p className="mt-2 text-[10px] text-white/[0.3]">
            Live request distribution
          </p>
        </div>

        <Radio size={15} className="animate-pulse text-[#9878ef]" />
      </div>

      <div className="mt-8 rounded-[22px] border border-[#7046e6]/20 bg-[#0a0710] p-5">
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-[#9878ef]/40"
          >
            <Network size={19} className="text-[#c9b6ff]" />
          </motion.div>

          <div>
            <p className="text-sm">Routing Core</p>
            <p className="mt-1 text-[9px] text-white/[0.3]">
              Selecting available model capacity
            </p>
          </div>

          <span className="ml-auto font-mono text-[6px] text-[#9878ef]">
            ACTIVE
          </span>
        </div>
      </div>

      <div className="relative my-6 h-16 overflow-hidden">
        {[0, 1, 2].map((item) => (
          <motion.div
            key={item}
            animate={{ x: ["-20%", "750%"] }}
            transition={{
              duration: 3,
              delay: item * 0.9,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-[#9878ef]/30 bg-[#0a0710]"
          >
            <ArrowRight size={10} className="text-[#c9b6ff]" />
          </motion.div>
        ))}

        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#9878ef]/30 to-transparent" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {replicas.map((replica, index) => (
          <motion.div
            key={replica.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-[18px] border border-white/[0.06] bg-black p-4"
          >
            <div className="flex items-center justify-between">
              <Server size={12} className="text-[#9878ef]" />

              <div className="flex items-center gap-2">
                <CheckCircle2 size={9} className="text-[#9878ef]" />
                <span className="font-mono text-[5px] text-[#9878ef]">
                  {replica.state}
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <BrainCircuit size={11} className="text-white/[0.3]" />
              <span className="font-mono text-[7px] text-white/[0.5]">
                {replica.id}
              </span>
            </div>

            <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-white/[0.05]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${replica.load}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-[#7046e6] to-[#c9b6ff]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}