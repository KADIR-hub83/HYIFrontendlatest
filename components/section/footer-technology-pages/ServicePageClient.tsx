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

/* =========================================================
   SHARED UI
========================================================= */

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
    <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5">
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_14px_rgba(167,139,250,.9)]"
      />
      <span className="font-mono hyi-p tracking-[0.17em] text-white/[0.4]">
        {children}
      </span>
    </div>
  );
}

function Heading({
  first,
  second,
}: {
  first: string;
  second: string;
}) {
  return (
    <Reveal className="mx-auto max-w-[1000px] text-center">
      <h2 className="hyi-h1 hyi-white">
        {first}
        <span className="block hyi-blue">{second}</span>
      </h2>
    </Reveal>
  );
}

function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 flex flex-wrap justify-center gap-3 [&>*]:w-full md:[&>*]:w-[calc(50%-6px)] lg:[&>*]:w-[calc(33.333%-8px)]">
      {children}
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

/* =========================================================
   PAGE
========================================================= */

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
    <div className="relative overflow-x-hidden bg-black text-center text-white">
      <Header />

      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[#8b5cf6]"
      />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-black">
        <Background />

        <motion.div
          style={reduceMotion ? undefined : { y, opacity }}
          className="relative mx-auto flex max-w-[1350px] flex-col items-center justify-center px-5 pb-5 pt-30 max-md:pt-20 md:px-10"
        >
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Label>{page.eyebrow}</Label>
          </motion.div> */}

          <div className="mx-auto mt-2 max-w-[1200px]">
            {page.hero.map((line, index) => (
              <div key={line} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.1 + index * 0.11, ease }}
                  className={`hyi-h1 ${
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
            className="mx-auto mt-2 flex max-w-[830px] flex-col items-center"
          >
         

            <p className="hyi-p mt-">{page.intro}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          STATEMENT
      ===================================================== */}
      <section className="relative overflow-hidden bg-black px-5  md:px-10">
        <div className="absolute left-[10%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[150px]" />
{/* 
        <div className="relative mx-auto max-w-[1000px]">
          <Reveal className="flex flex-col items-center">
            <div className="flex items-center gap-3">
              <Eye className="h-4.5 w-4.5 hyi-blue-icon" />
              <span className="hyi-h3 hyi-white">POINT OF VIEW</span>
            </div>

            <h2 className="hyi-h1 hyi-white mt-2">
              {page.statementTitle}
            </h2>

            <span className="hyi-h3 hyi-blue mt-2">
              PLAN → BUILD → IMPROVE
            </span>

            <p className="hyi-p mx-auto mt-2 max-w-[780px]">
              {page.statementText}
            </p>
          </Reveal>
        </div> */}
      </section>

      {/* =====================================================
          PILLARS
      ===================================================== */}
      <section className="bg-[#030303] px-5  md:px-10">
        <div className="mx-auto max-w-[1350px]">
          <Heading first="What we focus on" second="to get it right." />

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {page.pillars.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 2) * 0.08, duration: 0.7 }}
                whileHover={{ y: -6 }}
                className="hyi-skeu group relative overflow-hidden p-7"
              >
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#7c3aed]/10 blur-3xl" />

                <div className="relative flex flex-col items-center">
                  <h3 className="hyi-h3 hyi-white">{item.title}</h3>

                  <p className="hyi-p mx-auto mt-2 max-w-[520px]">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="relative overflow-hidden bg-black px-5 py-5 md:px-10">
        <div className="absolute right-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/10 blur-[170px]" />

        <div className="relative mx-auto max-w-[1350px]">
          <Reveal className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              A clear process.
              <span className="block hyi-blue">Not a black box.</span>
            </h2>

            <p className="hyi-p mx-auto mt-2 max-w-[780px]">
              Every engagement follows a structured path so you always know
              what is happening, why it matters and what comes next.
            </p>
          </Reveal>

          <CardGrid>
            {page.process.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.07, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="hyi-skeu group p-7"
              >
                <h3 className="hyi-h3 hyi-white">{item.title}</h3>

                <p className="hyi-p mt-2">{item.text}</p>
              </motion.article>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* =====================================================
          FOCUS AREAS
      ===================================================== */}
      <section className="bg-[#030303] px-5 py-5 md:px-10">
        <div className="mx-auto max-w-[1350px]">
          <Heading first="Where it applies" second="in practice." />

          <div className="mt-5 flex flex-wrap justify-center gap-3 [&>*]:w-full md:[&>*]:w-[calc(50%-6px)] lg:[&>*]:w-[calc(25%-9px)]">
            {page.focus.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.07 }}
                whileHover={{ y: -6 }}
                className="hyi-skeu flex flex-col items-center p-6"
              >
                <CircleDot className="h-4.5 w-4.5 hyi-blue-icon" />

                <h3 className="hyi-h3 hyi-white mt-2">{item.title}</h3>

                <p className="hyi-p mt-2">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES
      ===================================================== */}
      <section className="relative overflow-hidden bg-black px-5 py-5 md:px-10">
        <div className="absolute left-[-150px] top-1/2 h-[420px] w-[420px] rounded-full bg-[#6d28d9]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-[1350px]">
          <Heading first="Outcomes you" second="can expect." />

          <CardGrid>
            {page.outcomes.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.05 }}
                whileHover={{ y: -4 }}
                className="hyi-skeu group flex flex-col items-center p-6"
              >
                <CheckCircle2 className="hyi-white-icon h-5 w-5 shrink-0 transition-colors group-hover:text-[#a78bfa]" />

                <p className="hyi-h3 hyi-white mt-2">{item}</p>
              </motion.div>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#030303] px-5 py-5 md:px-10">
        <Background />

        <div className="relative mx-auto max-w-[1000px] text-center">
          <Reveal>
            <h2 className="hyi-h1 hyi-white">
              {page.ctaTitle}
              <span className="block hyi-blue">{page.ctaAccent}</span>
            </h2>

            <p className="hyi-p mx-auto mt-2 max-w-[780px]">
              {page.ctaText}
            </p>

            {/* <Link
              href="/contact"
              className="hyi-h3 hyi-white group mt-4 inline-flex items-center gap-3 rounded-full border border-[#7046e6]/40 bg-[#7046e6] px-7 py-3.5 transition hover:scale-[1.03]"
            >
              Talk to HYI
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link> */}
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

      <Footer />
    </div>
  );
}