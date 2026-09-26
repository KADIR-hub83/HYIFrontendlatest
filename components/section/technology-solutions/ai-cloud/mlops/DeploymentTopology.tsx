"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  CheckCircle2,
  GitBranch,
  Rocket,
  Server,
} from "lucide-react";

const envs = [
  { name: "DEVELOPMENT", value: "v5.0-rc", Icon: GitBranch },
  { name: "STAGING", value: "v4.9", Icon: Server },
  { name: "CANARY", value: "v4.9", Icon: BrainCircuit },
  { name: "PRODUCTION", value: "v4.8", Icon: Rocket },
];

export default function DeploymentTopology() {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-[#7046e6]/20 bg-[#030303] p-6 md:p-10">
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            RELEASE TOPOLOGY
          </p>
          <p className="mt-2 text-[10px] text-white/[0.28]">
            Controlled environment promotion
          </p>
        </div>
        <Rocket size={15} className="text-[#9878ef]" />
      </div>

      <div className="relative mt-14">
        <div className="absolute left-[8%] right-[8%] top-[57px] hidden h-px bg-[#9878ef]/25 lg:block" />

        <motion.span
          animate={{ left: ["8%", "91%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute top-[54px] z-20 hidden h-2 w-2 rounded-full bg-[#e1d8ff] shadow-[0_0_20px_#9878ef] lg:block"
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {envs.map(({ name, value, Icon }, index) => (
            <motion.div
              key={name}
              whileHover={{ y: -6 }}
              className="relative z-10 rounded-[24px] border border-white/[0.07] bg-[#080808] p-6"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(112,70,230,0)",
                    "0 0 30px rgba(112,70,230,.18)",
                    "0 0 0 rgba(112,70,230,0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.4,
                  repeat: Infinity,
                }}
                className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#0a0710]"
              >
                <Icon size={17} className="text-[#c9b6ff]" />
              </motion.div>

              <p className="mt-8 font-mono text-[6px] text-[#9878ef]">
                {name}
              </p>
              <h3 className="mt-3 text-2xl">{value}</h3>

              <div className="mt-7 flex items-center gap-2">
                <CheckCircle2 size={9} className="text-[#9878ef]" />
                <span className="font-mono text-[5px] text-white/[0.25]">
                  RELEASE GATE
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}