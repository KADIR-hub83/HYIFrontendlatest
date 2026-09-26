"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Boxes,
  GitBranch,
  LockKeyhole,
  Network,
  ShieldCheck,
} from "lucide-react";

const principles = [
  {
    Icon: Network,
    title: "Stable interfaces",
    text: "Applications should integrate with controlled model-service endpoints rather than depending on individual runtime instances or infrastructure details.",
  },
  {
    Icon: Boxes,
    title: "Runtime isolation",
    text: "Keep model-specific libraries, memory requirements and compute characteristics inside independently manageable serving environments.",
  },
  {
    Icon: GitBranch,
    title: "Version everything",
    text: "Treat models and serving configuration as versioned production artifacts so releases can be understood, reproduced and reversed when necessary.",
  },
  {
    Icon: ShieldCheck,
    title: "Health before traffic",
    text: "New model capacity should become eligible for production traffic only after its serving runtime has reached an acceptable operational state.",
  },
  {
    Icon: LockKeyhole,
    title: "Control the boundary",
    text: "Design identity, network and data-access controls around the sensitivity of the model, application and information being processed.",
  },
  {
    Icon: Activity,
    title: "Observe the service",
    text: "Monitor the model-serving layer as an application dependency, connecting request behavior with runtime and infrastructure signals.",
  },
];

export default function HostingPrinciples() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              10 / HOSTING PRINCIPLES
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              Reliable AI begins
              <span className="block text-[#7046e6]">
                after training ends.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/[0.44]">
              Model hosting should be engineered as a production platform:
              repeatable deployment, controlled interfaces, observable
              runtimes and deliberate lifecycle management.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {principles.map(({ Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -5 }}
                className="min-h-[235px] rounded-[24px] border border-white/[0.07] bg-[#080808] p-7"
              >
                <div className="flex items-center justify-between">
                  <Icon size={15} className="text-[#9878ef]" />

                  <span className="font-mono text-[6px] text-[#7046e6]">
                    PRINCIPLE 0{index + 1}
                  </span>
                </div>

                <h3 className="mt-10 text-xl">{title}</h3>

                <p className="mt-4 text-[11px] leading-6 text-white/[0.4]">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}