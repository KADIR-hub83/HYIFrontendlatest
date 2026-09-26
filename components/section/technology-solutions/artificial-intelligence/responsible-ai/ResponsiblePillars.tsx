"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Fingerprint,
  Scale,
  ShieldCheck,
  UserCheck,
  FileSearch,
} from "lucide-react";

const pillars = [
  {
    Icon: Scale,
    title: "Fairness",
    text: "Evaluate model outcomes and identify unwanted performance differences across relevant groups and scenarios.",
  },
  {
    Icon: Eye,
    title: "Transparency",
    text: "Create visibility into model behavior, data lineage, limitations and important decision factors.",
  },
  {
    Icon: Fingerprint,
    title: "Privacy",
    text: "Design data handling, access controls and model workflows around privacy-aware engineering principles.",
  },
  {
    Icon: ShieldCheck,
    title: "Safety",
    text: "Introduce evaluation gates, operational safeguards and controls before models reach critical workflows.",
  },
  {
    Icon: UserCheck,
    title: "Human Oversight",
    text: "Keep accountable people in the loop for approvals, exceptions, escalations and high-impact decisions.",
  },
  {
    Icon: FileSearch,
    title: "Auditability",
    text: "Maintain traceable records of model versions, evaluations, approvals, changes and operational events.",
  },
];

export default function ResponsiblePillars() {
  return (
    <section className="border-y border-white/[0.06] bg-[#090806] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="max-w-[1000px]">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Responsible AI foundation
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Six layers of
            <span className="text-white/55"> responsible intelligence.</span>
          </h2>

          <p className="mt-8 max-w-[720px] text-[15px] leading-8 text-white/65">
            Responsible AI requires more than one control. HYI.AI brings
            governance, technical evaluation and human accountability together
            throughout the AI lifecycle.
          </p>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
              transition={{ delay: (index % 3) * 0.08 }}
              className="group relative min-h-[390px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-gradient-to-b from-[#12100d] to-[#090807] p-8"
            >
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-400/[0.04] blur-[80px] transition duration-500 group-hover:bg-violet-400/[0.10]" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-100/15 bg-violet-100/[0.04]">
                    <Icon size={22} className="text-violet-100/75" />
                  </div>

                  <span className="text-[8px] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl text-white/90">{title}</h3>

                  <p className="mt-5 text-sm leading-7 text-white/60">
                    {text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}