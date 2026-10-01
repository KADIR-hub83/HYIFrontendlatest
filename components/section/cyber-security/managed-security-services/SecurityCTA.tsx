"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

import type { ManagedSecurityService } from "./managedSecurityServices";

export default function SecurityCTA({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-black py-36 md:py-52">
      <div className="absolute left-1/2 top-1/2 h-[550px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/[0.10] blur-[180px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#9878ef]/[0.08]"
      />

      <div className="relative mx-auto max-w-[1050px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#9878ef]/20 bg-[#7046e6]/[0.06]">
            <ShieldCheck
              size={19}
              className="text-[#a98af4]"
            />
          </div>

          <span className="font-mono text-[10px] tracking-[0.26em] text-[#9878ef]">
            {service.closing.eyebrow}
          </span>

          <h2 className="mt-7 text-[50px] font-semibold leading-[0.95] tracking-[-0.055em] md:text-[82px]">
            {service.closing.title}

            <span className="mt-2 block text-[#a98af4]">
              {service.closing.accent}
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[680px] text-[14px] leading-8 text-white/[0.48] md:text-[16px]">
            {service.closing.description}
          </p>

          <Link
            href="/talk-to-our-expert"
            className="group mx-auto mt-10 inline-flex items-center gap-4 rounded-full bg-[#7046e6] px-7 py-4 text-[13px] font-medium text-white transition hover:bg-[#8059eb]"
          >
            Talk to our security experts

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}