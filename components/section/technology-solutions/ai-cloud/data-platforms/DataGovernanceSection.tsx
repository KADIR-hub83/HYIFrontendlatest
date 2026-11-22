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
    <section className="relative overflow-hidden ">
      <div className="absolute -left-[250px] top-[25%] h-[650px] w-[650px] rounded-full bg-[#390b44]/35 blur-[180px]" />

      <div className="mx-auto max-w-[1350px] text-center ">
      

        <div>
      

          <h2 className="hyi-h1 hyi-white">
            Trusted data needs
            <span className="block hyi-blue">
              clear control.
            </span>
          </h2>

          <p className="mt-2 max-w-[780px] hyi-p mx-auto">
            Governance helps organizations understand important information,
            establish ownership, manage access and maintain intentional control
            as data moves across the platform.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 ">
            {governance.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[20px] border border-white/[0.07] bg-[#030303] p-5"
              >
                <Icon size={19} className="text-[#9675ed] items-center" />

                <h3 className=" hyi-h3 hyi-white">{title}</h3>

                <p className="mt-1 hyi-p">
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