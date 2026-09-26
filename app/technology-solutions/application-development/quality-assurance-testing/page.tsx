"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import { motion } from "framer-motion";

import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bot,
  Bug,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  MonitorCheck,
  Play,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Timer,
  Workflow,
  Zap,
  Rocket
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
    no: "01",
    icon: MonitorCheck,
    title: "Functional Testing",
    text: "Validate critical workflows, requirements, user journeys and business functionality before release.",
  },
  {
    no: "02",
    icon: Bot,
    title: "Test Automation",
    text: "Automate repeatable test scenarios to accelerate releases and improve regression coverage.",
  },
  {
    no: "03",
    icon: Gauge,
    title: "Performance Testing",
    text: "Measure responsiveness, concurrency, load handling and system behavior under demanding conditions.",
  },
  {
    no: "04",
    icon: ShieldCheck,
    title: "Security Validation",
    text: "Identify vulnerabilities and verify authentication, authorization and sensitive application workflows.",
  },
  {
    no: "05",
    icon: Globe2,
    title: "Cross-Platform QA",
    text: "Validate user experience across browsers, devices, operating systems and screen configurations.",
  },
  {
    no: "06",
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
   FRAMER MOTION CONFIG
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fadeScale = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const viewport = {
  once: true,
  amount: 0.18,
};

/* =========================================================
   PAGE
========================================================= */

export default function QualityAssuranceTestingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[1080px] overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[#030303]" />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[28%] h-[900px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[190px]"
        />

        <div className="absolute -left-[15%] top-[30%] h-[550px] w-[550px] rounded-full bg-indigo-900/10 blur-[160px]" />
        <div className="absolute -right-[15%] top-[36%] h-[650px] w-[650px] rounded-full bg-fuchsia-900/10 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#030303] via-[#030303]/85 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pt-24 md:px-8 lg:px-12 lg:pt-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mx-auto max-w-6xl text-center"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2 text-xs text-purple-200 backdrop-blur-xl sm:text-sm"
            >
              <TestTube2 className="h-4 w-4" />
              Quality Assurance & Testing
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 text-[44px] font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[94px]"
            >
              Ship software with
              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#EC4899] bg-clip-text text-transparent">
                confidence built in.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/45 md:text-lg"
            >
              HYI combines automation, performance engineering, functional
              validation and continuous QA to help digital products move fast
              without compromising reliability.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap justify-center gap-3"
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7047E8] to-[#9259F4] px-7 py-4 text-sm font-medium shadow-[0_15px_60px_rgba(124,58,237,.35)]"
              >
                Test Your Product
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "rgba(255,255,255,.07)",
                }}
                className="rounded-full border border-white/10 bg-white/[0.035] px-7 py-4 text-sm text-white/65 backdrop-blur-xl"
              >
                Explore QA Services
              </motion.button>
            </motion.div>
          </motion.div>

          {/* =================================================
              QA COMMAND CENTER
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto mt-20 max-w-[1300px]"
          >
            <div className="absolute left-1/2 top-1/2 h-[450px] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

            <motion.div
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#09090E]/95 shadow-[0_50px_160px_rgba(0,0,0,.8)] backdrop-blur-2xl"
            >
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

              <div className="grid min-h-[600px] lg:grid-cols-[220px_1fr]">
                {/* sidebar */}
                <div className="hidden border-r border-white/[0.07] bg-black/20 p-5 lg:block">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        rotate: [0, 6, -6, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15"
                    >
                      <TestTube2 className="h-5 w-5 text-purple-300" />
                    </motion.div>

                    <div>
                      <p className="text-sm font-medium">Quality Lab</p>
                      <p className="text-[10px] text-white/25">
                        Testing Workspace
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-2">
                    {[
                      "Overview",
                      "Test Runs",
                      "Automation",
                      "Defects",
                      "Performance",
                      "Reports",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        whileHover={{
                          x: 5,
                        }}
                        className={`flex items-center justify-between rounded-xl px-3 py-3 text-xs ${
                          index === 0
                            ? "bg-purple-500/15 text-purple-200"
                            : "text-white/35"
                        }`}
                      >
                        {item}
                        <ChevronRight className="h-3 w-3" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* dashboard */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-xs text-white/30">
                        Release quality
                      </p>

                      <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                        QA Operations
                      </h3>
                    </div>

                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(52,211,153,0)",
                          "0 0 24px rgba(52,211,153,.14)",
                          "0 0 0 rgba(52,211,153,0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/[0.06] px-3 py-2 text-[10px] text-emerald-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Release candidate healthy
                    </motion.div>
                  </div>

                  {/* metrics */}
                  <div className="mt-7 grid grid-cols-2 gap-3 xl:grid-cols-4">
                    {[
                      ["2,184", "Tests executed"],
                      ["98.7%", "Pass rate"],
                      ["42", "Automated suites"],
                      ["8", "Critical issues"],
                    ].map(([value, label], index) => (
                      <motion.div
                        key={label}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.8 + index * 0.1,
                        }}
                        whileHover={{
                          y: -5,
                          borderColor: "rgba(168,85,247,.3)",
                        }}
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
                    <motion.div
                      whileHover={{
                        scale: 1.01,
                      }}
                      className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">
                            Test Execution
                          </p>
                          <p className="mt-1 text-[10px] text-white/25">
                            Automated test coverage
                          </p>
                        </div>

                        <BarChart3 className="h-5 w-5 text-purple-300" />
                      </div>

                      <div className="mt-8 flex h-[205px] items-end gap-2 sm:gap-3">
                        {[
                          36, 45, 54, 49, 65, 72, 68, 79, 75, 88, 83, 96,
                        ].map((height, index) => (
                          <motion.div
                            key={index}
                            initial={{
                              height: 0,
                            }}
                            animate={{
                              height: `${height}%`,
                            }}
                            transition={{
                              delay: 1 + index * 0.06,
                              duration: 0.65,
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
                    </motion.div>

                    {/* runs */}
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <p className="text-sm font-medium">Latest test runs</p>
                      <p className="mt-1 text-[10px] text-white/25">
                        Real-time validation
                      </p>

                      <div className="mt-6 space-y-3">
                        {[
                          ["Authentication", "Passed", true],
                          ["Checkout flow", "Passed", true],
                          ["API regression", "Passed", true],
                          ["Mobile Safari", "Review", false],
                        ].map(([label, status, passed], index) => (
                          <motion.div
                            key={String(label)}
                            initial={{
                              opacity: 0,
                              x: 25,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              delay: 1 + index * 0.12,
                            }}
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
                                passed
                                  ? "text-emerald-300"
                                  : "text-yellow-300"
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
            </motion.div>

            {/* floating QA card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 right-[6%] hidden rounded-2xl border border-purple-400/20 bg-[#100D18]/90 p-4 shadow-2xl backdrop-blur-xl md:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                  <Bot className="h-4 w-4 text-purple-300" />
                </div>

                <div>
                  <p className="text-xs text-white/35">
                    Automation engine
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    842 tests completed
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTINUOUS SLIDER
      ===================================================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        className="overflow-hidden border-b border-white/[0.08] bg-[#060606] py-11"
      >
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-white/25">
            Complete Quality Engineering Ecosystem
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#060606] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#060606] to-transparent" />

          <div className="microservices-marquee flex min-w-max gap-4 px-2">
            {[...testingServices, ...testingServices].map(
              (service, index) => (
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                  }}
                  key={`${service}-${index}`}
                  className="group flex h-[84px] min-w-[230px] items-center justify-center rounded-[22px] border border-white/[0.08] bg-white/[0.025] px-7 transition hover:border-purple-400/30 hover:bg-purple-500/[0.08]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                      <TestTube2 className="h-4 w-4 text-purple-300" />
                    </div>

                    <span className="text-sm text-white/60 group-hover:text-white">
                      {service}
                    </span>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.section>

      {/* =====================================================
          RELEASE VISUAL
      ===================================================== */}
      <section className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeScale}
          className="relative min-h-[680px] overflow-hidden rounded-[42px] border border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2200&q=95"
            alt="Software quality testing and engineering"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={viewport}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative flex min-h-[680px] items-end p-8 md:p-12 lg:p-16"
          >
            <div className="max-w-5xl">
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                <Bug className="h-9 w-9 text-purple-300" />
              </motion.div>

              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-purple-300">
                Quality engineering
              </p>

              <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
                Find defects before
                <span className="block text-white/40">
                  your users ever experience them.
                </span>
              </h2>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="border-y border-white/[0.08] bg-white/[0.012]">
        <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="max-w-5xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              QA capabilities
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Quality at every layer.
              <span className="block text-white/25">
                Confidence at every release.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                    scale: 1.015,
                    borderColor: "rgba(168,85,247,.32)",
                  }}
                  key={item.title}
                  className="group relative min-h-[330px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-8"
                >
                  <motion.div
                    className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/0 blur-[90px] group-hover:bg-purple-600/15"
                  />

                  <div className="relative flex justify-between">
                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.1,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10"
                    >
                      <Icon className="h-5 w-5 text-purple-300" />
                    </motion.div>

                    <span className="text-sm text-white/15">{item.no}</span>
                  </div>

                  <h3 className="relative mt-16 text-xl font-semibold md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="relative mt-4 text-sm leading-7 text-white/40">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          AUTOMATION PIPELINE
      ===================================================== */}
      <section className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeScale}
          className="relative overflow-hidden rounded-[42px] border border-white/[0.08] bg-[#09090D] px-6 py-16 md:px-12 lg:px-16 lg:py-24"
        >
          <div className="absolute left-1/2 top-1/2 h-[650px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[160px]" />

          <motion.div variants={fadeUp} className="relative text-center">
            <Workflow className="mx-auto h-8 w-8 text-purple-300" />

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Testing built directly
              <span className="block text-white/25">
                into your delivery pipeline.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="relative mx-auto mt-20 grid max-w-6xl gap-4 md:grid-cols-5"
          >
            {[
              {
                icon: Code2,
                title: "Code",
              },
              {
                icon: GitBranch,
                title: "Build",
              },
              {
                icon: Bot,
                title: "Automate",
              },
              {
                icon: CheckCircle2,
                title: "Validate",
              },
              {
                icon: Rocket,
                title: "Release",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                  }}
                  key={item.title}
                  className="relative"
                >
                  <div className="rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-6 text-center">
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.25,
                      }}
                      className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10"
                    >
                      <Icon className="h-5 w-5 text-purple-300" />
                    </motion.div>

                    <p className="mt-5 text-sm font-medium">{item.title}</p>
                  </div>

                  {index < 4 && (
                    <ChevronRight className="absolute -right-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-purple-500/40 md:block" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          PERFORMANCE / QUALITY GRAPH
      ===================================================== */}
      <section className="border-y border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeScale}
            className="overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#0A0A0F]"
          >
            <div className="flex flex-col justify-between gap-5 border-b border-white/[0.07] p-7 md:flex-row md:items-end md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
                  Quality intelligence
                </p>

                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Watch release quality improve.
                </h2>
              </div>

              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-4 py-2 text-xs text-emerald-300"
              >
                ● Continuous QA active
              </motion.div>
            </div>

            <div className="grid gap-4 p-5 md:p-8 lg:grid-cols-[1.6fr_1fr]">
              <div className="rounded-[28px] border border-white/[0.07] bg-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Release Confidence</p>
                    <p className="mt-1 text-xs text-white/25">
                      Quality score across releases
                    </p>
                  </div>

                  <Activity className="h-5 w-5 text-purple-300" />
                </div>

                <div className="mt-8 h-[300px]">
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

                    <motion.path
                      initial={{
                        pathLength: 0,
                      }}
                      whileInView={{
                        pathLength: 1,
                      }}
                      viewport={viewport}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                      }}
                      d="
                        M0 250
                        C60 235,100 220,140 215
                        S220 190,260 178
                        S340 160,390 140
                        S470 122,520 112
                        S600 95,650 78
                        S730 65,800 48
                      "
                      fill="none"
                      stroke="#A78BFA"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    <path
                      d="
                        M0 250
                        C60 235,100 220,140 215
                        S220 190,260 178
                        S340 160,390 140
                        S470 122,520 112
                        S600 95,650 78
                        S730 65,800 48
                        L800 300
                        L0 300 Z
                      "
                      fill="url(#qaFill)"
                    />
                  </svg>
                </div>
              </div>

              <motion.div variants={stagger} className="grid gap-3">
                {[
                  ["98.7%", "Test pass rate"],
                  ["87%", "Automation coverage"],
                  ["3.4×", "Faster regression"],
                  ["62%", "Defect leakage reduction"],
                ].map(([value, label]) => (
                  <motion.div
                    variants={fadeUp}
                    whileHover={{
                      x: 5,
                      borderColor: "rgba(168,85,247,.3)",
                    }}
                    key={label}
                    className="rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-6"
                  >
                    <p className="text-2xl font-semibold">{value}</p>
                    <p className="mt-2 text-xs text-white/30">{label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          DEVICE LAB
      ===================================================== */}
      <section className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeScale}
          className="relative min-h-[650px] overflow-hidden rounded-[42px] border border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=95"
            alt="Software testing workspace"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <motion.div
            initial={{
              opacity: 0,
              y: 70,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={viewport}
            transition={{
              duration: 0.9,
            }}
            className="relative flex min-h-[650px] items-end p-8 md:p-12 lg:p-16"
          >
            <div className="max-w-5xl">
              <Layers3 className="h-8 w-8 text-purple-300" />

              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-purple-300">
                Multi-platform validation
              </p>

              <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
                One product.
                <span className="block text-white/40">
                  Hundreds of real-world environments.
                </span>
              </h2>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          DEFECT BOARD
      ===================================================== */}
      <section className="border-y border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="mx-auto max-w-5xl text-center"
          >
            <Bug className="mx-auto h-8 w-8 text-purple-300" />

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Turn defects into
              <span className="block text-white/25">
                actionable engineering intelligence.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="mt-16 grid gap-4 lg:grid-cols-3"
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
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                  }}
                  key={item.title}
                  className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10">
                      <Icon className="h-5 w-5 text-purple-300" />
                    </div>

                    <span className="rounded-full border border-white/[0.08] px-3 py-1 text-[10px] text-white/40">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/35">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="max-w-5xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            Quality engineering process
          </p>

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            Test continuously.
            <span className="block text-white/25">
              Release confidently.
            </span>
          </h2>
        </motion.div>

        <div className="mt-16">
          {process.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={viewport}
              transition={{
                duration: 0.7,
              }}
              key={item.no}
              className="group grid gap-4 border-t border-white/[0.08] py-9 md:grid-cols-[90px_1fr_1.4fr] md:gap-12 md:py-11"
            >
              <motion.span
                whileHover={{
                  scale: 1.2,
                }}
                className="text-sm text-purple-400"
              >
                {item.no}
              </motion.span>

              <h3 className="text-xl font-semibold md:text-2xl">
                {item.title}
              </h3>

              <p className="max-w-2xl text-sm leading-7 text-white/40 md:text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          QA STACK
      ===================================================== */}
      <section className="border-y border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              Quality engineering stack
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Modern tools for
              <span className="block text-white/25">
                modern quality engineering.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          >
            {stack.map((item) => (
              <motion.div
                variants={fadeUp}
                whileHover={{
                  y: -7,
                  scale: 1.03,
                  backgroundColor: "rgba(139,92,246,.08)",
                  borderColor: "rgba(168,85,247,.28)",
                }}
                key={item}
                className="flex h-28 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.018] text-sm text-white/50"
              >
                <TestTube2 className="mr-2 h-4 w-4 text-purple-400" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeScale}
          whileHover={{
            borderColor: "rgba(192,132,252,.28)",
          }}
          className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[44px] border border-purple-400/15 bg-[#0B0710] px-6 py-20 text-center md:px-12 lg:py-32"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-[-250px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-purple-700/25 blur-[170px]"
          />

          <motion.div variants={stagger} className="relative mx-auto max-w-5xl">
            <motion.div variants={fadeUp}>
              <Zap className="mx-auto h-8 w-8 text-purple-300" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-xs uppercase tracking-[0.3em] text-purple-300"
            >
              Test with HYI
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
            >
              Release faster.
              <span className="block text-white/25">
                Break less.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-7 max-w-2xl leading-8 text-white/40"
            >
              Build continuous quality into your software lifecycle with
              testing strategies designed for modern products and rapid
              release cycles.
            </motion.p>

            <motion.button
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 20px 70px rgba(124,58,237,.38)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-8 py-4 font-medium shadow-[0_15px_60px_rgba(124,58,237,.3)]"
            >
              Talk to Our QA Experts
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}