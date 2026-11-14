"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cloud } from "lucide-react";
import type { CloudService } from "./cloudServices";

export default function CloudCTA({ service }: { service: CloudService }) {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-black px-5 py-10 md:px-10 md:py-14 lg:px-20">
      <motion.div
        animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed] blur-[200px]"
      />

      <div className="relative mx-auto max-w-[1000px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2">
            <Cloud size={14} className="hyi-blue-icon" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-white/60">
              HYI.AI / CLOUD INFRASTRUCTURE
            </span>
          </div>

          <h2 className="hyi-h1 mt-6 text-[40px] font-medium leading-[1.04] tracking-[-0.055em] md:text-[60px]">
            <span className="hyi-white">Build cloud infrastructure</span>
            <span className="block text-white/25">that is designed</span>
            <span className="block hyi-blue">to evolve.</span>
          </h2>

          <p className="hyi-p mx-auto mt-5 max-w-[680px]">
            Explore how HYI.AI can approach {service.title.toLowerCase()}{" "}
            through architecture, automation, security, observability and
            continuous optimization.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[16px] font-bold text-black transition hover:scale-[1.03]"
            >
              Discuss your cloud architecture
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/technology-solutions"
              className="inline-flex items-center rounded-full border border-white/[0.12] px-7 py-3.5 text-[16px] font-bold text-white/60 transition hover:border-[#a78bfa]/40 hover:text-white"
            >
              Explore Technology Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}