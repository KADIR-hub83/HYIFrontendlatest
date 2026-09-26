"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Beaker,
  BrainCircuit,
  Database,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const stages = [
  {
    Icon: Database,
    title: "Prepare",
    text: "Create reproducible data and feature inputs for model development.",
  },
  {
    Icon: Beaker,
    title: "Experiment",
    text: "Track candidate training runs and evaluation context.",
  },
  {
    Icon: BrainCircuit,
    title: "Validate",
    text: "Evaluate candidates against technical and release requirements.",
  },
  {
    Icon: ShieldCheck,
    title: "Register",
    text: "Promote approved artifacts into the controlled model registry.",
  },
  {
    Icon: Rocket,
    title: "Release",
    text: "Deploy models through controlled production environments.",
  },
  {
    Icon: Activity,
    title: "Learn",
    text: "Use production monitoring and feedback to inform future iterations.",
  },
];

export default function MLOpsWorkflow() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[950px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            10 / OPERATING WORKFLOW
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Experiment to production.
            <span className="text-[#7046e6]"> Then repeat.</span>
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-[8%] right-[8%] top-[45px] hidden h-px bg-[#7046e6]/25 lg:block" />

          <motion.span
            animate={{ left: ["8%", "91%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute top-[42px] z-20 hidden h-2 w-2 rounded-full bg-[#d8ccff] shadow-[0_0_20px_#9878ef] lg:block"
          />

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
            {stages.map(({ Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="relative z-10 min-h-[290px] rounded-[22px] border border-white/[0.07] bg-[#080808] p-5"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#0a0710]">
                  <Icon size={14} className="text-[#c9b6ff]" />
                </div>

                <p className="mt-9 font-mono text-[5px] text-[#7046e6]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg">{title}</h3>
                <p className="mt-4 text-[10px] leading-6 text-white/[0.38]">
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