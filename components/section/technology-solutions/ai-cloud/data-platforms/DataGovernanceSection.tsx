"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Eye,
  Fingerprint,
  KeyRound,
  ShieldCheck,
} from "lucide-react";

const governance = [
  {
    Icon: Fingerprint,
    title: "Ownership",
    text: "Clarify who owns important datasets and platform responsibilities.",
  },
  {
    Icon: KeyRound,
    title: "Access",
    text: "Control how users, applications and services access sensitive information.",
  },
  {
    Icon: Eye,
    title: "Visibility",
    text: "Improve understanding of important datasets through metadata and discovery.",
  },
  {
    Icon: ShieldCheck,
    title: "Policy",
    text: "Apply organizational data requirements through platform-level controls.",
  },
];

export default function DataGovernanceSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="absolute -left-[250px] top-[25%] h-[650px] w-[650px] rounded-full bg-[#390b44]/35 blur-[180px]" />

      <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 md:px-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[700px] overflow-hidden rounded-[38px] border border-white/[0.08]"
        >
          <Image
            src="/images/data-platforms/infrastructure.webp"
            alt="Secure and governed data infrastructure"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/35 to-[#390b44]/20" />

          <div className="absolute bottom-8 left-8 right-8 rounded-[22px] border border-white/[0.09] bg-black/65 p-6 backdrop-blur-xl">
            <ShieldCheck size={17} className="text-[#a98af3]" />

            <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em]">
              Governance should live
              <span className="block text-white/[0.42]">
                inside the platform.
              </span>
            </h3>
          </div>
        </motion.div>

        <div>
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            07 / DATA GOVERNANCE
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Trusted data needs
            <span className="block text-[#7046e6]">
              clear control.
            </span>
          </h2>

          <p className="mt-7 max-w-[580px] text-[13px] leading-7 text-white/[0.52]">
            Governance helps organizations understand important information,
            establish ownership, manage access and maintain intentional control
            as data moves across the platform.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {governance.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[20px] border border-white/[0.07] bg-[#030303] p-5"
              >
                <Icon size={14} className="text-[#9675ed]" />

                <h3 className="mt-5 text-[15px]">{title}</h3>

                <p className="mt-3 text-[10px] leading-5 text-white/[0.44]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}