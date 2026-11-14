"use client";

import { motion } from "framer-motion";
import CloudIcon from "./CloudIcon";
import type { CloudService } from "./cloudServices";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CloudHero({ service }: { service: CloudService }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-black">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [-100, 90, -100], y: [-50, 80, -50] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-32 h-[520px] w-[520px] rounded-full bg-[#6d28d9]/[0.13] blur-[160px]"
        />
        <motion.div
          animate={{ x: [90, -80, 90], y: [50, -70, 50] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-100px] top-[20%] h-[480px] w-[480px] rounded-full bg-[#8b5cf6]/[0.1] blur-[170px]"
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(196,181,253,.9) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage: "linear-gradient(to bottom, black, transparent 94%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 94%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 pb-10 pt-30 max-md:pt-20 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2"
        >
          <CloudIcon
            name={service.icon}
            size={14}
            strokeWidth={1.7}
            className="hyi-blue-icon"
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
            HYI.AI / {service.eyebrow}
          </span>
        </motion.div>

        <div className="mt-6 overflow-hidden">
          <motion.h1
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="hyi-h1 hyi-white text-[52px] leading-[0.95] tracking-[-0.065em] sm:text-[68px] md:text-[88px] lg:text-[80px]"
          >
            {service.title}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_520px]"
        >
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#a78bfa] shadow-[0_0_14px_rgba(167,139,250,.9)]" />
            <p className="hyi-h3 hyi-blue">{service.accent}</p>
          </div>

          <p className="hyi-p">{service.description}</p>
        </motion.div>
      </div>
    </section>
  );
}