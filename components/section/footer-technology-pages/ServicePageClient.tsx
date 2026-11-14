"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, CheckCircle2, CircleDot, Eye } from "lucide-react";
import type { ReactNode } from "react";
import { servicePages, type ServicePageKey } from "@/components/data/servicePagesData";
import Header from "../general/header";
import Footer from "../general/footer";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2">
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_14px_rgba(167,139,250,.9)]"
      />
      <span className="font-mono text-[11px] tracking-[0.2em] text-white/60">
        {children}
      </span>
    </div>
  );
}

function Background() {
  return (
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
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 94%)",
        }}
      />
    </div>
  );
}

export default function ServicePageClient({
  pageKey,
}: {
  pageKey: ServicePageKey;
}) {
  const page = servicePages[pageKey];
  const reduceMotion = useReducedMotion();

  const { scrollY, scrollYProgress } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 120]);
  const opacity = useTransform(scrollY, [0, 700], [1, 0.15]);
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="relative overflow-x-hidden bg-black text-white">
        <Header/>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[#8b5cf6]"
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-black">
        <Background />

        <motion.div
          style={reduceMotion ? undefined : { y, opacity }}
          className="relative mx-auto flex max-w-[1450px] flex-col justify-center px-5 pb-10 pt-30 max-md:pt-20 md:px-10 lg:px-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Label>{page.eyebrow}</Label>
          </motion.div>

          <div className="mt-6">
            {page.hero.map((line, index) => (
              <div key={line} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.1 + index * 0.11, ease }}
                  className={`hyi-h1 text-[52px] leading-[0.91] tracking-[-0.065em] sm:text-[68px] md:text-[88px] lg:text-[80px] ${
                    index === 2 ? "hyi-blue" : "hyi-white"
                  }`}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-6 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_520px]"
          >
            <div className="flex items-center gap-3">
              <CircleDot className="h-4.5 w-4.5 hyi-blue-icon" />
              <span className="hyi-h3 hyi-white">HYI.AI / SOLUTIONS</span>
            </div>
            <p className="hyi-p">{page.intro}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* STATEMENT */}
      <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10 md:py-14 lg:px-20">
        <div className="absolute left-[10%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[150px]" />
        <div className="relative mx-auto max-w-[1320px]">
          <Reveal>
            <div className="flex items-center gap-3">
              <Eye className="h-4.5 w-4.5 hyi-blue-icon" />
              <span className="hyi-h3 hyi-white">POINT OF VIEW</span>
            </div>

            <h2 className="hyi-h1 hyi-white mt-6 max-w-[1000px] text-[40px] font-medium leading-[1.04] tracking-[-0.055em] md:text-[60px] lg:text-[66px]">
              {page.statementTitle}
            </h2>

            <div className="mt-8 grid gap-6 border-t border-white/[0.08] pt-8 lg:grid-cols-2">
              <span className="hyi-h3 hyi-blue">PLAN → BUILD → IMPROVE</span>
              <p className="hyi-p max-w-[600px]">{page.statementText}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-[#030303] px-5 py-10 md:px-10 md:py-14 lg:px-20">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <h2 className="hyi-h1 max-w-[750px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[55px]">
              <span className="hyi-white">What we focus on</span>
              <span className="block text-white/25">to get it right.</span>
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {page.pillars.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.7 }}
                whileHover={{ y: -6 }}
                className="hyi-skeu group relative overflow-hidden p-7 md:p-8"
              >
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#7c3aed]/10 blur-3xl" />
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[12px] tracking-[0.22em] text-[#a78bfa]">
                    PILLAR
                  </span>
                  <span className="font-mono text-[12px] text-white/50">
                    0{index + 1}
                  </span>
                </div>
                <div className="relative mt-8">
                  <h3 className="hyi-h3 hyi-white">{item.title}</h3>
                  <p className="hyi-p mt-2 max-w-[520px] pr-10">{item.text}</p>
                </div>
                <ArrowRight className="hyi-white-icon absolute bottom-7 right-7 h-5 w-5 transition-all group-hover:translate-x-1 group-hover:text-[#a78bfa]" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10 md:py-14 lg:px-20">
        <div className="absolute right-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/10 blur-[170px]" />
        <div className="relative mx-auto max-w-[1320px]">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <h2 className="hyi-h1 max-w-[450px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[50px]">
                  <span className="hyi-white">A clear process.</span>
                  <span className="block text-white/25">Not a black box.</span>
                </h2>
                <p className="hyi-p mt-4 max-w-[430px]">
                  Every engagement follows a structured path so you always know
                  what is happening, why it matters and what comes next.
                </p>
              </div>
            </Reveal>

            <div>
              {page.process.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.6 }}
                  whileHover={{ x: 8, backgroundColor: "rgba(139,92,246,.025)" }}
                  className="group grid gap-3 border-t border-white/[0.07] px-3 py-7 md:grid-cols-[60px_170px_1fr_30px] md:items-center"
                >
                  <span className="font-mono text-[12px] text-[#a78bfa]">
                    0{index + 1}
                  </span>
                  <h3 className="hyi-h3 hyi-white">{item.title}</h3>
                  <p className="hyi-p">{item.text}</p>
                  <ArrowRight className="hyi-white-icon h-5 w-5 transition-all group-hover:translate-x-1 group-hover:text-[#a78bfa]" />
                </motion.article>
              ))}
              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-[#030303] px-5 py-10 md:px-10 md:py-14 lg:px-20">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="text-center">
            <h2 className="hyi-h1 mx-auto max-w-[700px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[52px]">
              <span className="hyi-white">Where it applies</span>
              <span className="block hyi-blue">in practice.</span>
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {page.focus.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="hyi-skeu p-6"
              >
                <div className="flex items-center justify-between">
                  <CircleDot className="h-4.5 w-4.5 hyi-blue-icon" />
                  <span className="font-mono text-[12px] text-white/50">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="hyi-h3 hyi-white mt-6">{item.title}</h3>
                <p className="hyi-p mt-2">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10 md:py-14 lg:px-20">
        <div className="absolute left-[-150px] top-1/2 h-[420px] w-[420px] rounded-full bg-[#6d28d9]/10 blur-[150px]" />
        <div className="relative mx-auto max-w-[1320px]">
          <Reveal>
            <h2 className="hyi-h1 max-w-[700px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[52px]">
              <span className="hyi-white">Outcomes you</span>
              <span className="block hyi-blue">can expect.</span>
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
            {page.outcomes.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4, backgroundColor: "rgba(124,58,237,.055)" }}
                className="group flex items-end justify-between gap-4 bg-black p-6"
              >
                <div>
                  <span className="font-mono text-[12px] text-[#a78bfa]">
                    0{index + 1}
                  </span>
                  <p className="hyi-h3 hyi-white mt-3">{item}</p>
                </div>
                <CheckCircle2 className="hyi-white-icon h-5 w-5 shrink-0 transition-colors group-hover:text-[#a78bfa]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#030303] px-5 py-10 md:px-10 md:py-14 lg:px-20">
        <Background />
        <div className="relative mx-auto max-w-[900px] text-center">
          <Reveal>
            <h2 className="hyi-h1 text-[40px] font-medium leading-[1.04] tracking-[-0.055em] md:text-[60px]">
              <span className="hyi-white">{page.ctaTitle}</span>
              <span className="block hyi-blue">{page.ctaAccent}</span>
            </h2>
            <p className="hyi-p mx-auto mt-5 max-w-[620px]">{page.ctaText}</p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[16px] font-bold text-black transition hover:scale-[1.03]"
            >
              Talk to HYI
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: rgba(139, 92, 246, 0.4);
          color: #ffffff;
        }
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      <Footer/>
    </div>
  );
}