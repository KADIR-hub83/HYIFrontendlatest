"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Activity,
  ArrowDown,
  CircleDot,
  Eye,
  Radio,
  ShieldCheck,
} from "lucide-react";

import type { ManagedSecurityService } from "./managedSecurityServices";

type Props = {
  service: ManagedSecurityService;
};

export default function ManagedSecurityHero({ service }: Props) {
  const { scrollY } = useScroll();

  const titleY = useTransform(scrollY, [0, 700], [0, 110]);
  const visualY = useTransform(scrollY, [0, 700], [0, -80]);
  const opacity = useTransform(scrollY, [0, 650], [1, 0.15]);

  return (
    <section className="relative min-h-[1050px] overflow-hidden border-b border-white/[0.07] bg-black">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 88%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 88%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[32%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#7046e6]/[0.10] blur-[170px]" />

      <div className="relative mx-auto max-w-[1450px] px-6 pb-24 pt-36 md:px-10 lg:px-14">
        <motion.div
          style={{ y: titleY, opacity }}
          className="relative z-20 mx-auto max-w-[1100px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9878ef] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9878ef]" />
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/[0.48]">
              {service.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[52px] font-semibold leading-[0.93] tracking-[-0.065em] text-white sm:text-[72px] md:text-[96px] lg:text-[116px]"
          >
            {service.title}

            <span className="mt-2 block text-[#a98af4]">
              {service.accent}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-9 max-w-[800px] text-[15px] leading-8 text-white/[0.56] md:text-[17px]"
          >
            {service.description}
          </motion.p>
        </motion.div>

        <motion.div
          style={{ y: visualY }}
          className="relative z-10 mx-auto mt-20 max-w-[1220px]"
        >
          <div className="overflow-hidden rounded-[32px] border border-white/[0.09] bg-[#050505] shadow-[0_60px_180px_rgba(112,70,230,0.12)]">
            <div className="flex h-14 items-center justify-between border-b border-white/[0.07] px-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/[0.07] px-4 py-2">
                <ShieldCheck size={12} className="text-[#9878ef]" />

                <span className="font-mono text-[9px] tracking-[0.22em] text-white/[0.30]">
                  HYI.AI / SECURITY INTELLIGENCE
                </span>
              </div>

              <div className="flex items-center gap-4 text-white/[0.25]">
                <Radio size={13} />
                <CircleDot size={13} />
              </div>
            </div>

            <div className="grid min-h-[510px] lg:grid-cols-[0.8fr_1.5fr_0.8fr]">
              <div className="border-b border-white/[0.07] p-6 lg:border-b-0 lg:border-r">
                <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/[0.25]">
                  Security status
                </p>

                <div className="mt-8 space-y-3">
                  {service.status.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.55 + index * 0.1,
                      }}
                      className="rounded-2xl border border-white/[0.06] bg-white/[0.018] p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[11px] text-white/[0.38]">
                          {item.label}
                        </span>

                        <span className="font-mono text-[9px] text-[#a98af4]">
                          {item.value}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/[0.06] pt-6">
                  <div className="flex items-center gap-3">
                    <Activity
                      size={15}
                      className="text-[#9878ef]"
                    />

                    <span className="text-[11px] text-white/[0.42]">
                      Continuous operational visibility
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden">
                <div className="absolute h-[400px] w-[400px] rounded-full border border-[#7046e6]/10" />
                <div className="absolute h-[320px] w-[320px] rounded-full border border-[#7046e6]/15" />
                <div className="absolute h-[235px] w-[235px] rounded-full border border-[#9878ef]/20" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[355px] w-[355px] rounded-full border border-dashed border-[#9878ef]/20"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[275px] w-[275px] rounded-full border border-dashed border-white/[0.08]"
                />

                <div className="absolute h-px w-[80%] bg-gradient-to-r from-transparent via-[#9878ef]/20 to-transparent" />
                <div className="absolute h-[80%] w-px bg-gradient-to-b from-transparent via-[#9878ef]/20 to-transparent" />

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(152,120,239,.10)",
                      "0 0 70px rgba(152,120,239,.35)",
                      "0 0 20px rgba(152,120,239,.10)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-[#9878ef]/35 bg-black"
                >
                  <div className="absolute inset-3 rounded-full border border-white/[0.06]" />

                  <div className="text-center">
                    <ShieldCheck
                      size={26}
                      className="mx-auto text-[#a98af4]"
                    />

                    <p className="mt-3 font-mono text-[8px] tracking-[0.18em] text-white/[0.32]">
                      SECURITY
                    </p>

                    <p className="font-mono text-[9px] text-white/[0.65]">
                      CORE
                    </p>
                  </div>
                </motion.div>

                {[
                  "IDENTITY",
                  "ENDPOINT",
                  "NETWORK",
                  "CLOUD",
                ].map((label, index) => {
                  const positions = [
                    "left-[12%] top-[18%]",
                    "right-[10%] top-[24%]",
                    "bottom-[17%] left-[14%]",
                    "bottom-[14%] right-[13%]",
                  ];

                  return (
                    <motion.div
                      key={label}
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                      }}
                      className={`absolute ${positions[index]} rounded-xl border border-white/[0.08] bg-black/90 px-4 py-3`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#9878ef]" />

                        <span className="font-mono text-[8px] tracking-[0.15em] text-white/[0.40]">
                          {label}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="border-t border-white/[0.07] p-6 lg:border-l lg:border-t-0">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/[0.25]">
                    Live signals
                  </p>

                  <Eye size={13} className="text-white/[0.25]" />
                </div>

                <div className="mt-7 space-y-5">
                  {[72, 48, 86, 63, 91].map((width, index) => (
                    <div key={index}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-mono text-[8px] text-white/[0.25]">
                          SIGNAL 0{index + 1}
                        </span>

                        <span className="font-mono text-[8px] text-[#9878ef]">
                          ACTIVE
                        </span>
                      </div>

                      <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.05]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${width}%` }}
                          transition={{
                            duration: 1.4,
                            delay: 0.8 + index * 0.1,
                          }}
                          className="h-full rounded-full bg-[#7046e6]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a
            href="#security-overview"
            className="group flex items-center gap-3 text-[11px] text-white/[0.35]"
          >
            Explore security system

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] transition group-hover:border-[#9878ef]/40">
              <ArrowDown size={13} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}