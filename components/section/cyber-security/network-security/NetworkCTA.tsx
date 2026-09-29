"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { NetworkSecurityPage } from "./networkSecurityData";

interface NetworkCTAProps {
  page: NetworkSecurityPage;
}

export default function NetworkCTA({ page }: NetworkCTAProps) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 text-center">
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed] blur-[160px]"
      />

      <div className="relative mx-auto max-w-3xl">
        <p className="font-mono text-[8px] tracking-[0.3em] text-white/25">
          HYI.AI / NETWORK SECURITY
        </p>

        <h2 className="mt-7 text-[30px] tracking-[-0.03em] text-white/90 md:text-[42px]">
          {page.cta.heading}
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-[12px] leading-6 text-white/35">
          {page.cta.description}
        </p>

        <Link
          href="/contact-us"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] text-black"
        >
          {page.cta.primary}

          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </section>
  );
}