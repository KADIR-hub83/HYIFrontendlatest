"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  ArrowRight,
  Boxes,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Gauge,
  Layers3,
  Network,
  RefreshCcw,
  Rocket,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const modernizationServices = [
  {
    icon: RefreshCcw,
    title: "Legacy Application Modernization",
    description:
      "Transform aging applications into maintainable, scalable and modern digital platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description:
      "Move workloads and applications toward flexible cloud-native infrastructure.",
  },
  {
    icon: Boxes,
    title: "Monolith to Modular Architecture",
    description:
      "Break complex legacy systems into maintainable services and independent modules.",
  },
  {
    icon: Database,
    title: "Database Modernization",
    description:
      "Improve data access, reliability and scalability with modern database architecture.",
  },
  {
    icon: Network,
    title: "API Enablement",
    description:
      "Expose legacy capabilities through secure APIs and connect modern applications.",
  },
  {
    icon: ShieldCheck,
    title: "Security Modernization",
    description:
      "Modernize authentication, authorization and infrastructure protection.",
  },
];

const stages = [
  {
    no: "01",
    title: "Assess",
    text: "Application architecture, dependencies, performance, risk and modernization opportunities.",
  },
  {
    no: "02",
    title: "Architect",
    text: "Target architecture, migration strategy, services, APIs, infrastructure and data approach.",
  },
  {
    no: "03",
    title: "Transform",
    text: "Application layers are modernized incrementally without unnecessary disruption.",
  },
  {
    no: "04",
    title: "Validate",
    text: "Performance, functionality, integrations, security and reliability are tested.",
  },
  {
    no: "05",
    title: "Migrate",
    text: "Workloads and data are transitioned through controlled deployment stages.",
  },
  {
    no: "06",
    title: "Optimize",
    text: "Continuous monitoring and improvement prepare the platform for future growth.",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
];

/* =========================================================
   MOTION VARIANTS
========================================================= */

const easeOut = [0.16, 1, 0.3, 1] as const;

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOut },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const staggerGrid: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const gridItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const viewport = { once: true, margin: "-80px" } as const;

/* =========================================================
   REVEAL COMPONENT
========================================================= */

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}

function Reveal({ children, className, variants = fadeUp }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ApplicationModernizationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Header />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#030303]" />

          <div className="absolute left-1/2 top-[40%] h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/20 blur-[150px]" />

          <div className="absolute -left-[15%] top-[30%] h-[600px] w-[600px] rounded-full bg-purple-800/10 blur-[170px]" />

          <div className="absolute -right-[10%] top-[45%] h-[650px] w-[650px] rounded-full bg-fuchsia-900/10 blur-[180px]" />

          <div
            className="absolute inset-0 opacity-[0.13]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.065) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.065) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        <motion.div
          className="relative z-10 mx-auto max-w-[1500px] px-5 pb-10 pt-24 text-center md:px-8 lg:px-12 lg:pt-32"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="mx-auto max-w-5xl">
            <motion.h1 variants={heroItem} className="hyi-h1 hyi-white">
              Transform legacy systems
              <span className="block hyi-blue">
                into modern digital platforms.
              </span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto mt-3 max-w-3xl hyi-p"
            >
              Rebuild aging applications for cloud, performance, scalability
              and the next generation of business growth.
            </motion.p>
          </div>

          {/* stats */}
          <motion.div
            variants={heroItem}
            className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-2 gap-3 md:grid-cols-4"
          >
            {[
              ["Faster", "Releases"],
              ["Lower", "Technical Debt"],
              ["Modern", "Security"],
              ["Elastic", "Scale"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-5"
              >
                <p className="hyi-h3 hyi-white">{value}</p>
                <p className="mt-1 hyi-p">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
          BEFORE / AFTER
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <motion.div
          className="grid gap-4 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerGrid}
        >
          {/* before */}
          <motion.div
            variants={gridItem}
            className="relative min-h-[440px] overflow-hidden rounded-[35px] border border-white/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90"
              alt="Legacy technology system"
              fill
              unoptimized
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="text-sm font-medium text-red-300">Before</p>

              <h2 className="mt-2 hyi-h1 hyi-white">
                Complex legacy architecture.
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Technical Debt",
                  "Slow Releases",
                  "Rigid Systems",
                  "Legacy Security",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* after */}
          <motion.div
            variants={gridItem}
            className="relative min-h-[440px] overflow-hidden rounded-[35px] border border-purple-400/20"
          >
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=90"
              alt="Modern cloud architecture"
              fill
              unoptimized
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-purple-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="text-sm font-medium text-purple-300">After</p>

              <h2 className="mt-2 hyi-h1 hyi-white">
                Modern cloud-native platform.
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Modular", "Scalable", "Secure", "Cloud Ready"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-purple-300/20 bg-purple-500/10 px-4 py-2 text-xs text-purple-100"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
          TRANSFORMATION IMAGE
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-6 md:px-8 lg:px-12">
        <Reveal className="relative h-[320px] overflow-hidden rounded-[35px] border border-white/10 md:h-[480px] md:rounded-[44px]">
          <Image
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2200&q=90"
            alt="Application modernization technology"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover opacity-75"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <RefreshCcw className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="mt-3 max-w-5xl hyi-h1 hyi-white">
              Modernize without rebuilding
              <span className="block hyi-blue">everything at once.</span>
            </h2>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          MODERNIZATION SERVICES
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
          <Reveal className="text-center">
            <h2 className="hyi-h1 hyi-white">
              Modernize every layer
              <span className="block hyi-blue">of your technology stack.</span>
            </h2>
          </Reveal>

          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerGrid}
          >
            {modernizationServices.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={gridItem}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.045] to-transparent p-7 transition-colors duration-500 hover:border-purple-500/30 md:p-8"
                >
                  <div className="absolute right-[-60px] top-[-60px] h-[180px] w-[180px] rounded-full bg-purple-600/0 blur-[60px] transition duration-500 group-hover:bg-purple-600/15" />

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-purple-500/10 hyi-white-icon">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="relative z-10 mt-3">
                    <h3 className="hyi-h3">{item.title}</h3>

                    <p className="mt-2 max-w-sm hyi-p">{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          ARCHITECTURE VISUAL
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <Reveal className="relative overflow-hidden rounded-[35px] border border-white/10 bg-[#09090D] px-5 py-8 md:rounded-[44px] md:px-12">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/15 blur-[120px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <Layers3 className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="hyi-h1 hyi-white">
              From monolith
              <span className="block hyi-blue">to modern architecture.</span>
            </h2>
          </div>

          <div className="relative mx-auto mt-8 max-w-6xl">
            <div className="grid items-center gap-5 md:grid-cols-[1fr_80px_1.4fr]">
              {/* legacy */}
              <div className="rounded-3xl border border-red-400/15 bg-red-500/[0.04] p-6 text-center">
                <Server className="mx-auto h-6 w-6 text-red-300/80" />

                <h3 className="mt-2 hyi-h3 hyi-white">Legacy Monolith</h3>

                <div className="mt-5 space-y-2">
                  {[
                    "Frontend",
                    "Business Logic",
                    "Database",
                    "Integrations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3 hyi-p"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden items-center md:flex">
                <div className="h-px flex-1 bg-gradient-to-r from-red-400/20 to-purple-400/60" />
                <ChevronRight className="h-5 w-5 text-purple-400" />
              </div>

              {/* modern */}
              <motion.div
                className="grid grid-cols-2 gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={staggerGrid}
              >
                {(
                  [
                    ["Frontend", Code2],
                    ["API Services", Network],
                    ["Cloud", Cloud],
                    ["Data", Database],
                    ["Automation", Workflow],
                    ["Security", ShieldCheck],
                  ] as [string, LucideIcon][]
                ).map(([title, Icon]) => (
                  <motion.div
                    key={title}
                    variants={gridItem}
                    className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-5 text-center"
                  >
                    <Icon className="mx-auto h-6 w-6 hyi-white-icon" />
                    <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          PERFORMANCE DASHBOARD
      ========================================================= */}
      <section className="bg-[#080808]">
        <div className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
          <Reveal className="overflow-hidden rounded-[35px] border border-white/10 bg-[#0A0A0F] md:rounded-[44px]">
            <div className="flex flex-col justify-between gap-5 border-b border-white/[0.07] p-6 md:flex-row md:items-end md:p-8">
              <h2 className="hyi-h1 hyi-white">
                Performance after modernization.
              </h2>

              <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-4 py-2 text-xs text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Platform healthy
              </div>
            </div>

            <div className="grid gap-4 p-5 md:p-8 lg:grid-cols-[1.6fr_1fr]">
              <div className="rounded-[28px] border border-white/[0.07] bg-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="hyi-h3 hyi-white">System Performance</h3>
                    <p className="mt-1 hyi-p">
                      Before vs modernized platform
                    </p>
                  </div>

                  <Gauge className="h-5 w-5 hyi-white-icon" />
                </div>

                <div className="mt-8 flex h-[270px] items-end gap-3">
                  {[
                    [30, 70],
                    [38, 76],
                    [35, 82],
                    [42, 88],
                    [49, 91],
                    [45, 96],
                  ].map(([legacy, modern], index) => (
                    <div
                      key={index}
                      className="flex h-full flex-1 items-end justify-center gap-1.5"
                    >
                      <motion.div
                        className="w-[38%] rounded-t-lg bg-white/10"
                        initial={{ height: "0%" }}
                        whileInView={{ height: `${legacy}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.06,
                          ease: easeOut,
                        }}
                      />

                      <motion.div
                        className="w-[38%] rounded-t-lg bg-gradient-to-t from-purple-800 to-purple-300"
                        initial={{ height: "0%" }}
                        whileInView={{ height: `${modern}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.06 + 0.1,
                          ease: easeOut,
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex justify-center gap-6 text-xs">
                  <span className="flex items-center gap-2 text-white/40">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    Legacy
                  </span>

                  <span className="flex items-center gap-2 text-purple-300">
                    <span className="h-2 w-2 rounded-full bg-purple-400" />
                    Modernized
                  </span>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  ["3.4×", "Faster deployment"],
                  ["61%", "Lower response time"],
                  ["99.99%", "Availability"],
                  ["42%", "Lower infrastructure waste"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5"
                  >
                    <p className="hyi-h3 hyi-white">{value}</p>
                    <p className="mt-2 hyi-p">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CLOUD IMAGE
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <Reveal className="relative h-[320px] overflow-hidden rounded-[35px] border border-white/10 md:h-[480px] md:rounded-[44px]">
          <Image
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2200&q=90"
            alt="Cloud infrastructure modernization"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/15" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <Cloud className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="mt-3 max-w-5xl hyi-h1 hyi-white">
              Infrastructure designed to
              <span className="block hyi-blue">scale with demand.</span>
            </h2>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 md:px-8 lg:px-12">
        <Reveal className="mx-auto text-center">
          <h2 className="hyi-h1 hyi-white">
            Transform incrementally.
            <span className="block hyi-blue">Reduce transformation risk.</span>
          </h2>
        </Reveal>

        <motion.div
          className="mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerGrid}
        >
          {stages.map((step) => (
            <motion.div
              key={step.no}
              variants={gridItem}
              className="group grid gap-4 border-t border-white/10 py-6 transition md:grid-cols-[100px_1fr_1.3fr] md:gap-10"
            >
              <span className="hyi-white">{step.no}</span>

              <h3 className="hyi-h3 hyi-white">{step.title}</h3>

              <p className="max-w-xl hyi-p">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================================================
          STACK
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h2 className="hyi-h1 hyi-white">
              Replace technical debt
              <span className="block hyi-blue">
                with a future-ready foundation.
              </span>
            </h2>
          </Reveal>

          <motion.div
            className="mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerGrid}
          >
            {stack.map((item) => (
              <motion.div
                key={item}
                variants={gridItem}
                className="group flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] hyi-p transition hover:border-purple-500/30 hover:bg-purple-500/[0.08] hover:text-white md:text-base"
              >
                <Code2 className="mr-2 h-4 w-4 hyi-white-icon" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
    

      <Footer />
    </main>
  );
}