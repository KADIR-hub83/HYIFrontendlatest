"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bot,
  Bug,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Code2,
  GitBranch,
  Globe2,
  Layers3,
  MonitorCheck,
  Gauge,
  Rocket,
  ShieldCheck,
  TestTube2,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const testingServices = [
  "Manual Testing",
  "Automation Testing",
  "API Testing",
  "Performance Testing",
  "Security Testing",
  "Regression Testing",
  "Mobile Testing",
  "Web Testing",
  "Integration Testing",
  "Compatibility Testing",
  "Usability Testing",
  "Continuous Testing",
];

const capabilities = [
  {
    icon: MonitorCheck,
    title: "Functional Testing",
    text: "Validate critical workflows, requirements, user journeys and business functionality before release.",
  },
  {
    icon: Bot,
    title: "Test Automation",
    text: "Automate repeatable test scenarios to accelerate releases and improve regression coverage.",
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    text: "Measure responsiveness, concurrency, load handling and system behavior under demanding conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Security Validation",
    text: "Identify vulnerabilities and verify authentication, authorization and sensitive application workflows.",
  },
  {
    icon: Globe2,
    title: "Cross-Platform QA",
    text: "Validate user experience across browsers, devices, operating systems and screen configurations.",
  },
  {
    icon: Workflow,
    title: "Continuous QA",
    text: "Integrate testing into development and delivery pipelines for faster feedback across every release.",
  },
];

const process = [
  {
    no: "01",
    title: "Quality Discovery",
    text: "We identify product risks, user journeys, release requirements, architecture and quality priorities.",
  },
  {
    no: "02",
    title: "Test Strategy",
    text: "Coverage, environments, scenarios, automation opportunities and acceptance criteria are defined.",
  },
  {
    no: "03",
    title: "Test Engineering",
    text: "Manual and automated test suites are prepared around critical workflows and technical boundaries.",
  },
  {
    no: "04",
    title: "Execute & Observe",
    text: "Applications are validated across functional, integration, performance and compatibility scenarios.",
  },
  {
    no: "05",
    title: "Defect Intelligence",
    text: "Issues are prioritized with reproducible evidence and clear impact analysis for engineering teams.",
  },
  {
    no: "06",
    title: "Release Confidence",
    text: "Regression validation and final quality checks support safer and more predictable releases.",
  },
];

const stack = [
  "Playwright",
  "Cypress",
  "Selenium",
  "Jest",
  "Postman",
  "JMeter",
  "Appium",
  "BrowserStack",
  "GitHub Actions",
  "Jenkins",
  "SonarQube",
  "k6",
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

export default function QualityAssuranceTestingPage() {
  return (
    <main className=" overflow-hidden bg-[#050505] text-white">
      <Header />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#030303]" />

          <div className="absolute left-1/2 top-[30%] h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/20 blur-[150px]" />

          <div className="absolute -left-[15%] top-[30%] h-[600px] w-[600px] rounded-full bg-indigo-900/10 blur-[170px]" />

          <div className="absolute -right-[10%] top-[40%] h-[650px] w-[650px] rounded-full bg-fuchsia-900/10 blur-[180px]" />

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

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-10 pt-24 md:px-8 lg:px-12 lg:pt-32">
          {/* Hero text */}
          <motion.div
            className="relative z-30 mx-auto max-w-5xl text-center"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={heroItem} className="hyi-h1 hyi-white">
              Ship software with
              <span className="block hyi-blue">confidence built in.</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto mt-3 max-w-3xl hyi-p"
            >
              HYI combines automation, performance engineering, functional
              validation and continuous QA to help digital products move fast
              without compromising reliability.
            </motion.p>
          </motion.div>

          {/* QA COMMAND CENTER */}
          <motion.div
            className="relative mx-auto mt-5 max-w-[1300px]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
          >
            <div className="absolute left-1/2 top-1/2 h-[450px] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#09090E]/95 shadow-[0_50px_160px_rgba(0,0,0,.8)]">
              {/* browser */}
              <div className="flex h-14 items-center justify-between border-b border-white/[0.07] px-5">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>

                <div className="hidden rounded-full border border-white/[0.07] bg-white/[0.03] px-14 py-2 text-[10px] text-white/25 sm:block">
                  HYI Quality Command Center
                </div>

                <Activity className="h-4 w-4 text-white/25" />
              </div>

              <div className="grid lg:grid-cols-[220px_1fr]">
                {/* sidebar */}
                <div className="hidden border-r border-white/[0.07] bg-black/20 p-5 lg:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15">
                      <TestTube2 className="h-5 w-5 text-purple-300" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">Quality Lab</p>
                      <p className="text-[10px] text-white/25">
                        Testing Workspace
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {[
                      "Overview",
                      "Test Runs",
                      "Automation",
                      "Defects",
                      "Performance",
                      "Reports",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`flex items-center justify-between rounded-xl px-3 py-3 text-xs ${
                          index === 0
                            ? "bg-purple-500/15 text-purple-200"
                            : "text-white/35"
                        }`}
                      >
                        {item}
                        <ChevronRight className="h-3 w-3" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* dashboard */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-xs text-white/30">Release quality</p>

                      <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                        QA Operations
                      </h3>
                    </div>

                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/[0.06] px-3 py-2 text-[10px] text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Release candidate healthy
                    </div>
                  </div>

                  {/* metrics */}
                  <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
                    {[
                      ["2,184", "Tests executed"],
                      ["98.7%", "Pass rate"],
                      ["42", "Automated suites"],
                      ["8", "Critical issues"],
                    ].map(([value, label], index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5"
                      >
                        <p className="text-xl font-semibold sm:text-2xl">
                          {value}
                        </p>
                        <p className="mt-2 text-[10px] text-white/30 sm:text-xs">
                          {label}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-4 xl:grid-cols-[1.55fr_1fr]">
                    {/* test chart */}
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Test Execution</p>
                          <p className="mt-1 text-[10px] text-white/25">
                            Automated test coverage
                          </p>
                        </div>

                        <BarChart3 className="h-5 w-5 text-purple-300" />
                      </div>

                      <div className="mt-6 flex h-[205px] items-end gap-2 sm:gap-3">
                        {[
                          36, 45, 54, 49, 65, 72, 68, 79, 75, 88, 83, 96,
                        ].map((height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: "0%" }}
                            animate={{ height: `${height}%` }}
                            transition={{
                              duration: 0.8,
                              delay: 0.9 + index * 0.05,
                              ease: easeOut,
                            }}
                            className="relative flex-1 rounded-t-md bg-gradient-to-t from-purple-900/30 to-purple-400"
                          >
                            <div className="absolute inset-x-0 top-0 h-px bg-purple-200/70" />
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-4 flex justify-between text-[9px] text-white/20">
                        <span>Build 01</span>
                        <span>Build 02</span>
                        <span>Build 03</span>
                        <span>Current</span>
                      </div>
                    </div>

                    {/* runs */}
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <p className="text-sm font-medium">Latest test runs</p>
                      <p className="mt-1 text-[10px] text-white/25">
                        Real-time validation
                      </p>

                      <div className="mt-5 space-y-3">
                        {[
                          ["Authentication", "Passed", true],
                          ["Checkout flow", "Passed", true],
                          ["API regression", "Passed", true],
                          ["Mobile Safari", "Review", false],
                        ].map(([label, status, passed], index) => (
                          <motion.div
                            key={String(label)}
                            initial={{ opacity: 0, x: 25 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + index * 0.12 }}
                            className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-black/20 p-3"
                          >
                            <div className="flex items-center gap-3">
                              {passed ? (
                                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <AlertTriangle className="h-4 w-4 text-yellow-400" />
                              )}

                              <span className="text-[11px] text-white/55">
                                {String(label)}
                              </span>
                            </div>

                            <span
                              className={`text-[9px] ${
                                passed ? "text-emerald-300" : "text-yellow-300"
                              }`}
                            >
                              {String(status)}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* floating QA card */}
            <motion.div
              className="absolute -bottom-6 right-[6%] hidden rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                  <Bot className="h-4 w-4 text-purple-300" />
                </div>

                <div>
                  <p className="text-xs text-white/30">Automation engine</p>
                  <p className="mt-1 text-sm font-medium">
                    842 tests completed
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CONTINUOUS SLIDER
      ========================================================= */}
      <Reveal className="overflow-hidden border-y border-white/10 bg-[#080808] py-6">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#080808] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#080808] to-transparent" />

          <div className="microservices-marquee flex min-w-max gap-4 px-2">
            {[...testingServices, ...testingServices].map((service, index) => (
              <div
                key={`${service}-${index}`}
                className="group flex h-[72px] min-w-[230px] items-center justify-center rounded-[22px] border border-white/10 bg-white/[0.025] px-7 transition hover:border-purple-500/30 hover:bg-purple-500/[0.08]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-purple-500/10">
                    <TestTube2 className="h-4 w-4 hyi-white-icon" />
                  </div>

                  <span className="hyi-p group-hover:text-white">
                    {service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* =========================================================
          RELEASE VISUAL
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <Reveal className="relative h-[320px] overflow-hidden rounded-[35px] border border-white/10 md:h-[480px] md:rounded-[44px]">
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2200&q=90"
            alt="Software quality testing and engineering"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <Bug className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="mt-3 max-w-5xl hyi-h1 hyi-white">
              Find defects before
              <span className="block hyi-blue">
                your users ever experience them.
              </span>
            </h2>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-[1350px] px-5  md:px-8 lg:px-12">
          <Reveal className="text-center">
            <h2 className="hyi-h1 hyi-white">
              Quality at every layer.
              <span className="block hyi-blue">
                Confidence at every release.
              </span>
            </h2>
          </Reveal>

          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerGrid}
          >
            {capabilities.map((item) => {
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

                    <p className="mt-2 max-w-sm hyi-p">{item.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          AUTOMATION PIPELINE
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <Reveal className="relative overflow-hidden rounded-[35px] border border-white/10 bg-[#09090D] px-5 py-8 md:rounded-[44px] md:px-12">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/15 blur-[120px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <Workflow className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="hyi-h1 hyi-white">
              Testing built directly
              <span className="block hyi-blue">
                into your delivery pipeline.
              </span>
            </h2>
          </div>

          <motion.div
            className="relative mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerGrid}
          >
            {[
              { icon: Code2, title: "Code" },
              { icon: GitBranch, title: "Build" },
              { icon: Bot, title: "Automate" },
              { icon: CheckCircle2, title: "Validate" },
              { icon: Rocket, title: "Release" },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={gridItem}
                  className="relative"
                >
                  <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10">
                      <Icon className="h-5 w-5 hyi-white-icon" />
                    </div>

                    <h3 className="mt-3 hyi-h3 hyi-white">{item.title}</h3>
                  </div>

                  {index < 4 && (
                    <ChevronRight className="absolute -right-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-purple-400/50 md:block" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </Reveal>
      </section>

      {/* =========================================================
          QUALITY GRAPH
      ========================================================= */}
      <section className="bg-[#080808]">
        <div className="mx-auto max-w-[1350px] px-5  md:px-8 lg:px-12">
          <Reveal className="overflow-hidden rounded-[35px] border border-white/10 bg-[#0A0A0F] md:rounded-[44px]">
            <div className="flex flex-col justify-between gap-5 border-b border-white/[0.07] p-6 md:flex-row md:items-end md:p-8">
              <h2 className="hyi-h1 hyi-white">
                Watch release quality improve.
              </h2>

              <div className="w-fit rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-4 py-2 text-xs text-emerald-300">
                ● Continuous QA active
              </div>
            </div>

            <div className="grid gap-4 p-5 md:p-8 lg:grid-cols-[1.6fr_1fr]">
              <div className="rounded-[28px] border border-white/[0.07] bg-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="hyi-h3 hyi-white">Release Confidence</h3>
                    <p className="mt-1 hyi-p">
                      Quality score across releases
                    </p>
                  </div>

                  <Activity className="h-5 w-5 hyi-white-icon" />
                </div>

                <div className="mt-6 h-[300px]">
                  <svg
                    viewBox="0 0 800 300"
                    className="h-full w-full overflow-visible"
                  >
                    <defs>
                      <linearGradient
                        id="qaFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#8B5CF6"
                          stopOpacity=".35"
                        />
                        <stop
                          offset="100%"
                          stopColor="#8B5CF6"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    {[50, 100, 150, 200, 250].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="800"
                        y2={y}
                        stroke="rgba(255,255,255,.06)"
                      />
                    ))}

                    <path
                      d="M0 250 C60 235,100 220,140 215 S220 190,260 178 S340 160,390 140 S470 122,520 112 S600 95,650 78 S730 65,800 48 L800 300 L0 300 Z"
                      fill="url(#qaFill)"
                    />

                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      d="M0 250 C60 235,100 220,140 215 S220 190,260 178 S340 160,390 140 S470 122,520 112 S600 95,650 78 S730 65,800 48"
                      fill="none"
                      stroke="#A78BFA"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  ["98.7%", "Test pass rate"],
                  ["87%", "Automation coverage"],
                  ["3.4×", "Faster regression"],
                  ["62%", "Defect leakage reduction"],
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
          DEVICE LAB
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <Reveal className="relative h-[320px] overflow-hidden rounded-[35px] border border-white/10 md:h-[480px] md:rounded-[44px]">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=90"
            alt="Software testing workspace"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <Layers3 className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="mt-3 max-w-5xl hyi-h1 hyi-white">
              One product.
              <span className="block hyi-blue">
                Hundreds of real-world environments.
              </span>
            </h2>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          DEFECT BOARD
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-[1350px] px-5 md:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-5xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <Bug className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="mt-3 hyi-h1 hyi-white">
              Turn defects into
              <span className="block hyi-blue">
                actionable engineering intelligence.
              </span>
            </h2>
          </Reveal>

          <motion.div
            className="mt-8 grid gap-4 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerGrid}
          >
            {[
              {
                icon: AlertTriangle,
                status: "Critical",
                title: "Payment timeout",
                text: "Checkout request exceeds expected response threshold.",
              },
              {
                icon: Bug,
                status: "High",
                title: "Mobile navigation",
                text: "Menu state behaves inconsistently on selected viewport sizes.",
              },
              {
                icon: CircleDot,
                status: "Medium",
                title: "API response",
                text: "Unexpected validation state in edge-case request flow.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={gridItem}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-purple-500/10 hyi-white-icon">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-white/50">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="mt-4 hyi-h3 hyi-white">{item.title}</h3>

                  <p className="mt-2 hyi-p">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] py-10 px-5 md:px-8 lg:px-12">
        <Reveal className="mx-auto text-center">
          <h2 className="hyi-h1 hyi-white">
            Test continuously.
            <span className="block hyi-blue">Release confidently.</span>
          </h2>
        </Reveal>

        <motion.div
          className="mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerGrid}
        >
          {process.map((step) => (
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
          QA STACK
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-[1350px] px-5  md:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h2 className="hyi-h1 hyi-white">
              Modern tools for
              <span className="block hyi-blue">
                modern quality engineering.
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
                <TestTube2 className="mr-2 h-4 w-4 hyi-white-icon" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}