"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { EndpointService } from "./endpointServices";

export default function EndpointCTA({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-[-140px] left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#7c3aed]"
      />

      <div className="relative mx-auto max-w-[1100px] px-5">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="rounded-[28px] border border-white/[0.08] bg-white/[0.018] px-6 py-16 text-center md:px-12"
        >
          <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
            {service.ctaEyebrow}
          </p>

          <h2 className="mx-auto mt-6 max-w-[720px] text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-white md:text-[40px]">
            {service.ctaTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[11px] leading-7 text-white/32">
            {service.ctaText}
          </p>

          <Link
            href="/talk-to-our-expert"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[11px] font-medium text-black"
          >
            Talk to our experts

            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}