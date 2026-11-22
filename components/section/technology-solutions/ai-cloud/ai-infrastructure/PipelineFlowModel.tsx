"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  FlaskConical,
  Rocket,
  ScanSearch,
  Server,
} from "lucide-react";

const stages = [
  { Icon: Database, title: "DATA", sub: "Prepare" },
  { Icon: FlaskConical, title: "TRAIN", sub: "Compute" },
  { Icon: ScanSearch, title: "EVALUATE", sub: "Validate" },
  { Icon: BrainCircuit, title: "MODEL", sub: "Package" },
  { Icon: Rocket, title: "DEPLOY", sub: "Release" },
  { Icon: Server, title: "SERVE", sub: "Operate" },
];

export default function PipelineFlowModel() {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-[#7046e6]/20 bg-[#000000] p-6 md:p-10">
      <div className="relative grid gap-3 lg:grid-cols-6">
        <div className="absolute left-[8%] right-[8%] top-[55px] hidden h-px bg-white/[0.08] lg:block" />

        <motion.div
          animate={{ left: ["8%", "91%"] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[52px] z-20 hidden h-2 w-2 rounded-full bg-[#c4afff] shadow-[0_0_20px_#9878ef] lg:block"
        />

        {stages.map(({ Icon, title, sub }, index) => (
          <motion.div
            key={title}
            whileHover={{ y: -5 }}
            className="relative z-10 rounded-[22px] border border-white/[0.07] bg-[#080808] p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#7046e6]/[0.08]">
              <Icon size={16} className="hyi-blue-icon" />
            </div>

      

            <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>
            <p className=" hyi-p">{sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}