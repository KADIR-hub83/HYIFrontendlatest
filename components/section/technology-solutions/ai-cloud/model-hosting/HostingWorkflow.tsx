"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Boxes,
  BrainCircuit,
  GitBranch,
  Rocket,
  Server,
} from "lucide-react";

const phases = [
  {
    Icon: BrainCircuit,
    title: "Package",
    text: "Prepare the model artifact, runtime dependencies and serving configuration as a deployable production unit.",
  },
  {
    Icon: GitBranch,
    title: "Version",
    text: "Assign a controlled model version so deployments and application behavior can be traced to a known artifact.",
  },
  {
    Icon: Server,
    title: "Deploy",
    text: "Create the model-serving runtime and connect it with required compute, networking and platform services.",
  },
  {
    Icon: Boxes,
    title: "Replicate",
    text: "Add serving capacity when multiple instances are required for availability or changing inference demand.",
  },
  {
    Icon: Rocket,
    title: "Route",
    text: "Expose stable endpoints and direct production traffic toward healthy model-serving capacity.",
  },
  {
    Icon: Activity,
    title: "Operate",
    text: "Observe runtime health and workload behavior while managing model and infrastructure changes through a repeatable lifecycle.",
  },
];

export default function HostingWorkflow() {
  return (
    <section className=" bg-[#070707] ">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
       
          <h2 className="hyi-h1 hyi-white">
            From trained artifact
            <span className="hyi-blue"> to live endpoint.</span>
          </h2>
        </div>

        <div className="relative mt-5">
          <div className="absolute left-[8%] right-[8%] top-[44px] hidden h-px bg-[#7046e6]/25 lg:block" />

          <motion.span
            animate={{ left: ["8%", "91%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute top-[41px] z-20 hidden h-2 w-2 rounded-full bg-[#d5c5ff] shadow-[0_0_20px_#9878ef] lg:block"
          />

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {phases.map(({ Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative z-10] rounded-[23px] border border-white/[0.07] bg-[#030303] p-5"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#0a0710]">
                  <Icon size={14} className="text-[#c0a9ff]" />
                </div>

          

                <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>

                <p className="mt-2 hyi-p">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}