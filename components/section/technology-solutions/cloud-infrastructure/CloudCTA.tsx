"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cloud } from "lucide-react";
import { CloudService } from "./cloudServices";

export default function CloudCTA({
  service,
}: {
  service: CloudService;
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#030303] py-40">
      <motion.div
        animate={{
          scale: [0.9, 1.2, 0.9],
          opacity: [0.05, 0.14, 0.05],
        }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6] blur-[220px]"
      />

      {[330, 520, 760].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            rotate: index % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 35 + index * 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-[#7046e6]/10"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        >
          <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 rounded-full bg-[#7046e6] shadow-[0_0_18px_#7046e6]" />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-[1150px] px-5 text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.07] px-4 py-2">
          <Cloud size={10} className="text-[#a68bf2]" />

          <span className="font-mono text-[6px] tracking-[0.2em] text-[#a68bf2]">
            HYI.AI / CLOUD INFRASTRUCTURE
          </span>
        </div>

        <h2 className="mx-auto mt-9 max-w-[1050px] text-5xl font-medium leading-[0.92] tracking-[-0.065em] md:text-8xl">
          Build cloud infrastructure
          <span className="block text-white/25">that is designed</span>
          <span className="block text-[#7046e6]">to evolve.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-[700px] text-[10px] leading-7 text-white/42">
          Explore how HYI.AI can approach {service.title.toLowerCase()} through
          architecture, automation, security, observability and continuous
          optimization.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="group flex items-center gap-3 rounded-full bg-[#7046e6] px-7 py-4 text-[8px] font-medium transition hover:scale-[1.04]"
          >
            Discuss your cloud architecture
            <ArrowRight
              size={11}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/technology-solutions"
            className="rounded-full border border-white/[0.09] px-7 py-4 text-[8px] text-white/50 transition hover:border-[#7046e6]/30 hover:text-white"
          >
            Explore Technology Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}