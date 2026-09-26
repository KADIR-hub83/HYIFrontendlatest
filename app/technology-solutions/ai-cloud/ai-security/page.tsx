"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Eye,
  Fingerprint,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  Radar,
  ScanLine,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const securityLayers = [
  {
    number: "05",
    label: "APPLICATION",
    title: "AI Applications",
    description: "Agents · Copilots · AI Products",
    Icon: Sparkles,
  },
  {
    number: "04",
    label: "MODEL",
    title: "Model Security",
    description: "LLMs · Inference · Guardrails",
    Icon: BrainCircuit,
  },
  {
    number: "03",
    label: "DATA",
    title: "Knowledge Security",
    description: "RAG · Vector · Enterprise Data",
    Icon: Database,
  },
  {
    number: "02",
    label: "RUNTIME",
    title: "Runtime Protection",
    description: "Containers · APIs · Services",
    Icon: Cpu,
  },
  {
    number: "01",
    label: "FOUNDATION",
    title: "Cloud Security",
    description: "Identity · Network · Infrastructure",
    Icon: Cloud,
  },
];

const capabilities = [
  {
    Icon: Fingerprint,
    number: "01",
    title: "AI Identity & Access",
    text: "Control which users, applications, agents and workloads can access models, enterprise knowledge and supporting AI infrastructure.",
  },
  {
    Icon: BrainCircuit,
    number: "02",
    title: "Model Protection",
    text: "Create security boundaries around model endpoints, inference services and the runtime environments responsible for delivering AI capabilities.",
  },
  {
    Icon: Database,
    number: "03",
    title: "Data Protection",
    text: "Protect enterprise information used by retrieval, embeddings, fine-tuning and generative AI applications through intentional access architecture.",
  },
  {
    Icon: Network,
    number: "04",
    title: "Network Security",
    text: "Define controlled communication paths between applications, model services, cloud infrastructure and enterprise data environments.",
  },
  {
    Icon: Eye,
    number: "05",
    title: "AI Observability",
    text: "Create visibility across model access, infrastructure activity, service behavior and important security signals throughout the AI platform.",
  },
  {
    Icon: ShieldCheck,
    number: "06",
    title: "Governance Controls",
    text: "Translate organizational AI policies into practical controls across infrastructure, data access, model usage and production operations.",
  },
];

const threats = [
  {
    code: "T-01",
    title: "Unauthorized model access",
    level: "IDENTITY",
    Icon: KeyRound,
  },
  {
    code: "T-02",
    title: "Sensitive data exposure",
    level: "DATA",
    Icon: Database,
  },
  {
    code: "T-03",
    title: "Untrusted AI requests",
    level: "APPLICATION",
    Icon: AlertTriangle,
  },
  {
    code: "T-04",
    title: "Runtime anomalies",
    level: "INFRASTRUCTURE",
    Icon: Activity,
  },
];

const architecture = [
  {
    Icon: UserRoundCheck,
    label: "IDENTITY",
    title: "Authenticate",
    text: "Establish trusted identities for users, applications and machine workloads before granting access to AI resources.",
  },
  {
    Icon: Shield,
    label: "POLICY",
    title: "Authorize",
    text: "Apply policies that determine which AI capabilities, models, datasets and infrastructure resources can be accessed.",
  },
  {
    Icon: ScanLine,
    label: "INSPECTION",
    title: "Inspect",
    text: "Evaluate relevant application and infrastructure signals as AI requests move through the platform.",
  },
  {
    Icon: Eye,
    label: "VISIBILITY",
    title: "Observe",
    text: "Collect operational and security telemetry across the AI request lifecycle for investigation and platform improvement.",
  },
];

const principles = [
  {
    Icon: ShieldCheck,
    title: "Security by architecture",
    text: "Security should be part of the AI platform design itself rather than an additional control layer added after deployment.",
  },
  {
    Icon: Fingerprint,
    title: "Identity first",
    text: "Every human, application, service and AI workload should operate through clearly defined identities and permissions.",
  },
  {
    Icon: Layers3,
    title: "Layered protection",
    text: "Protect applications, models, data, runtime environments and infrastructure as interconnected security domains.",
  },
  {
    Icon: Eye,
    title: "Continuous visibility",
    text: "Production AI systems need observable infrastructure and model access patterns so teams can understand what is happening.",
  },
];

const useCases = [
  {
    Icon: Bot,
    tag: "AGENTS",
    title: "Secure AI agents",
    text: "Control how autonomous and semi-autonomous agents access enterprise tools, services and business information.",
  },
  {
    Icon: Sparkles,
    tag: "COPILOTS",
    title: "Enterprise copilots",
    text: "Protect model access and organizational knowledge used by internal AI assistants and contextual copilots.",
  },
  {
    Icon: Database,
    tag: "RAG",
    title: "Protected RAG",
    text: "Apply access controls around retrieval systems so enterprise context remains aligned with user and application permissions.",
  },
  {
    Icon: BrainCircuit,
    tag: "MODELS",
    title: "Private model serving",
    text: "Create controlled runtime and network boundaries for models operating inside private or regulated environments.",
  },
  {
    Icon: Cloud,
    tag: "CLOUD",
    title: "AI cloud workloads",
    text: "Extend cloud security architecture into GPU compute, model endpoints, AI data services and supporting infrastructure.",
  },
  {
    Icon: Workflow,
    tag: "OPERATIONS",
    title: "AI security operations",
    text: "Connect infrastructure telemetry, model access signals and operational processes into a unified security workflow.",
  },
];

/* =========================================================
   REUSABLE BACKGROUND
========================================================= */

function PurpleGlow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-[#390b44]/50 blur-[180px] ${className}`}
    />
  );
}

/* =========================================================
   SECURITY FORTRESS MODEL
========================================================= */

function AISecurityFortress() {
  const orbitNodes = [
    {
      Icon: Fingerprint,
      label: "IDENTITY",
      position: "left-[4%] top-[30%]",
    },
    {
      Icon: Database,
      label: "DATA",
      position: "right-[4%] top-[30%]",
    },
    {
      Icon: Network,
      label: "NETWORK",
      position: "left-[8%] bottom-[18%]",
    },
    {
      Icon: Eye,
      label: "MONITOR",
      position: "right-[8%] bottom-[18%]",
    },
  ];

  return (
    <div className="relative mx-auto mt-16 h-[720px] w-full max-w-[1250px] overflow-hidden md:overflow-visible">
      {/* center atmospheric glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#390b44]/50 blur-[120px]" />

      <div className="absolute bottom-[60px] left-1/2 h-[100px] w-[60%] -translate-x-1/2 rounded-[50%] bg-[#7046e6]/25 blur-[70px]" />

      {/* outer radar */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7046e6]/10"
      >
        <div className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#cdbcf9] shadow-[0_0_25px_#7046e6]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 44,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[490px] w-[490px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.07]"
      />

      {/* orbit nodes */}
      {orbitNodes.map(({ Icon, label, position }, index) => (
        <motion.div
          key={label}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3.5 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${position} z-30 hidden rounded-2xl border border-white/[0.08] bg-[#080609]/90 p-4 backdrop-blur-xl lg:block`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#7046e6]/25 bg-[#7046e6]/10">
              <Icon size={13} className="text-[#c6b2f7]" />
            </div>

            <div>
              <p className="font-mono text-[6px] tracking-[0.18em] text-white/25">
                SECURITY NODE
              </p>

              <p className="mt-1 text-[9px] text-white/65">
                {label}
              </p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* main fortress */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        className="absolute left-1/2 top-1/2 z-20 w-[92%] max-w-[620px] -translate-x-1/2 -translate-y-1/2"
      >
        {/* shield crown */}
        <div className="relative mx-auto mb-[-30px] z-30 flex h-[110px] w-[110px] items-center justify-center">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(112,70,230,.25)",
                "0 0 60px rgba(112,70,230,.55)",
                "0 0 20px rgba(112,70,230,.25)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute inset-0 rounded-[32px] border border-[#7046e6]/40 bg-[#0d0812]"
          />

          <motion.div
            animate={{
              scale: [0.92, 1.05, 0.92],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
            }}
            className="relative flex h-[70px] w-[70px] items-center justify-center rounded-[22px] border border-[#a88beb]/30 bg-[#7046e6]/15"
          >
            <ShieldCheck
              size={30}
              strokeWidth={1.3}
              className="text-[#d5c8f8]"
            />
          </motion.div>
        </div>

        {/* fortress body */}
        <div className="relative overflow-hidden rounded-[34px] border border-[#7046e6]/25 bg-[#070508]/95 p-3 shadow-[0_0_100px_rgba(112,70,230,.18)] backdrop-blur-2xl">
          {/* scanner */}
          <motion.div
            animate={{
              top: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-0 right-0 z-30 h-px bg-[#b79cf6] shadow-[0_0_22px_#7046e6]"
          />

          <div className="rounded-[27px] border border-white/[0.06] bg-[#030303]/80 p-4 md:p-6">
            {/* status */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
              <div>
                <p className="font-mono text-[6px] tracking-[0.2em] text-[#a98cf1]">
                  AI SECURITY CORE
                </p>

                <p className="mt-2 text-[10px] text-white/55">
                  Layered protection architecture
                </p>
              </div>

              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="h-2 w-2 rounded-full bg-[#b79cf6]"
                />

                <span className="font-mono text-[6px] text-white/30">
                  PROTECTED
                </span>
              </div>
            </div>

            {/* security layers */}
            <div className="mt-3 space-y-2">
              {securityLayers.map(
                (
                  {
                    number,
                    label,
                    title,
                    description,
                    Icon,
                  },
                  index,
                ) => (
                  <motion.div
                    key={title}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -25 : 25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.8 + index * 0.13,
                    }}
                    whileHover={{
                      x: 4,
                      borderColor:
                        "rgba(112,70,230,.45)",
                    }}
                    className="relative overflow-hidden rounded-[18px] border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <motion.div
                      animate={{
                        x: ["-150%", "250%"],
                      }}
                      transition={{
                        duration: 5 + index,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "linear",
                      }}
                      className="absolute inset-y-0 w-[90px] bg-gradient-to-r from-transparent via-[#7046e6]/10 to-transparent"
                    />

                    <div className="relative flex items-center gap-4">
                      <span className="hidden w-6 font-mono text-[6px] text-white/20 sm:block">
                        {number}
                      </span>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-[#7046e6]/20 bg-[#7046e6]/10">
                        <Icon
                          size={14}
                          className="text-[#bda8f4]"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="font-mono text-[5px] tracking-[0.18em] text-[#9878ef]/60">
                          {label}
                        </span>

                        <h3 className="mt-1 text-[10px] font-medium text-white/75">
                          {title}
                        </h3>

                        <p className="mt-1 hidden text-[7px] text-white/25 sm:block">
                          {description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        {[0, 1, 2].map((dot) => (
                          <motion.span
                            key={dot}
                            animate={{
                              opacity: [0.2, 1, 0.2],
                            }}
                            transition={{
                              duration: 1.4,
                              repeat: Infinity,
                              delay: dot * 0.18 + index * 0.1,
                            }}
                            className="h-1 w-1 rounded-full bg-[#a98cf1]"
                          />
                        ))}
                      </div>

                      <LockKeyhole
                        size={11}
                        className="text-[#bda8f4]/55"
                      />
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* radar pulse */}
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          animate={{
            scale: [0.5, 1.4],
            opacity: [0.25, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: ring * 1.25,
          }}
          className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7046e6]/20"
        />
      ))}
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AISecurityPage() {
  return (
    <main className="overflow-hidden bg-[#030303] text-white selection:bg-[#7046e6] selection:text-white">
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#030303] px-5 pb-20 pt-32 md:px-10 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#16081c_0%,#080409_35%,#030303_72%)]" />

        <PurpleGlow className="left-1/2 top-[35%] h-[900px] w-[1100px] -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute -left-[350px] top-[20%] h-[700px] w-[700px] rounded-full bg-[#7046e6]/10 blur-[190px]" />

        <div className="absolute -right-[350px] top-[35%] h-[700px] w-[700px] rounded-full bg-[#390b44]/50 blur-[190px]" />

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "62px 62px",
            maskImage:
              "radial-gradient(circle at 50% 45%,black,transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 45%,black,transparent 78%)",
          }}
        />

        <div className="relative mx-auto max-w-[1500px]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-[1200px] text-center"
          >
            <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 backdrop-blur-xl">
              <motion.span
                animate={{
                  opacity: [0.25, 1, 0.25],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#bda8f4]"
              />

              <span className="font-mono text-[7px] uppercase tracking-[0.28em] text-[#bda8f4]">
                HYI.AI / AI CLOUD / AI SECURITY
              </span>
            </div>

            <h1 className="mt-9 text-[clamp(4.2rem,9vw,9rem)] font-semibold leading-[0.84] tracking-[-0.078em]">
              Secure the systems
              <span className="block text-[#cdbbf8]">
                powering AI.
              </span>
            </h1>

            <p className="mx-auto mt-9 max-w-[840px] text-[13px] leading-7 text-white/[0.5] md:text-[15px] md:leading-8">
              Protect generative AI across identities, models,
              enterprise data, applications and cloud infrastructure
              with a security architecture designed for modern AI
              workloads.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-2">
              {[
                "AI Identity",
                "Model Security",
                "Data Protection",
                "Runtime Security",
                "Observability",
                "Governance",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2.5 font-mono text-[6px] tracking-[0.16em] text-white/[0.38]"
                >
                  {item.toUpperCase()}
                </span>
              ))}
            </div>
          </motion.div>

          <AISecurityFortress />

          <a
            href="#security-foundation"
            className="mx-auto flex w-fit items-center gap-3 font-mono text-[7px] tracking-[0.22em] text-white/[0.3]"
          >
            EXPLORE AI SECURITY
            <ArrowDown size={11} />
          </a>
        </div>
      </section>

      {/* =====================================================
          FOUNDATION
      ===================================================== */}

      <section
        id="security-foundation"
        className="relative overflow-hidden border-y border-white/[0.06] bg-[#050405] py-28 md:py-36"
      >
        <PurpleGlow className="-left-[400px] top-1/2 h-[800px] w-[800px] -translate-y-1/2" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-[7px] tracking-[0.28em] text-[#9878ef]">
                01 / SECURITY FOUNDATION
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
                AI creates a new
                <span className="block text-[#bda8f4]">
                  security surface.
                </span>
              </h2>

              <p className="mt-8 max-w-[580px] text-[13px] leading-7 text-white/[0.48]">
                Enterprise AI connects users, models, sensitive
                information, cloud infrastructure and business
                applications. Security architecture needs to protect
                those relationships as one connected system.
              </p>

              <div className="mt-10 space-y-1">
                {[
                  "Identity-aware AI access",
                  "Protected model endpoints",
                  "Controlled enterprise knowledge",
                  "Secure AI runtime environments",
                  "Continuous operational visibility",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-[#9878ef]"
                    />

                    <span className="text-[11px] text-white/[0.5]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* shield architecture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex min-h-[600px] items-center justify-center overflow-hidden rounded-[36px] border border-white/[0.07] bg-[#030303]"
            >
              <div className="absolute h-[450px] w-[450px] rounded-full bg-[#390b44]/50 blur-[120px]" />

              {[390, 300, 215].map((size, index) => (
                <motion.div
                  key={size}
                  animate={{
                    rotate: index % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    duration: 24 + index * 9,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute rounded-full border border-dashed border-[#7046e6]/15"
                  style={{
                    width: size,
                    height: size,
                  }}
                />
              ))}

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(112,70,230,.15)",
                    "0 0 90px rgba(112,70,230,.45)",
                    "0 0 30px rgba(112,70,230,.15)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="relative z-10 flex h-[180px] w-[180px] items-center justify-center rounded-[48px] border border-[#7046e6]/35 bg-[#0c0810]"
              >
                <ShieldCheck
                  size={65}
                  strokeWidth={1}
                  className="text-[#d1c1f8]"
                />
              </motion.div>

              {[
                {
                  Icon: Fingerprint,
                  text: "IDENTITY",
                  className: "left-[8%] top-[20%]",
                },
                {
                  Icon: BrainCircuit,
                  text: "MODEL",
                  className: "right-[8%] top-[20%]",
                },
                {
                  Icon: Database,
                  text: "DATA",
                  className: "left-[8%] bottom-[20%]",
                },
                {
                  Icon: Network,
                  text: "NETWORK",
                  className: "right-[8%] bottom-[20%]",
                },
              ].map(({ Icon, text, className }, index) => (
                <motion.div
                  key={text}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3 + index * 0.3,
                    repeat: Infinity,
                  }}
                  className={`absolute ${className} rounded-xl border border-white/[0.07] bg-[#080609] px-4 py-3`}
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      size={12}
                      className="text-[#a98cf1]"
                    />

                    <span className="font-mono text-[6px] tracking-[0.18em] text-white/40">
                      {text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#030303] py-28 md:py-36">
        <PurpleGlow className="-right-[450px] top-1/2 h-[900px] w-[900px] -translate-y-1/2" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="max-w-[1050px]">
            <p className="font-mono text-[7px] tracking-[0.28em] text-[#9878ef]">
              02 / SECURITY CAPABILITIES
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Protect every layer
              <span className="block text-[#bda8f4]">
                of the AI stack.
              </span>
            </h2>

            <p className="mt-7 max-w-[720px] text-[13px] leading-7 text-white/[0.45]">
              AI security extends from cloud infrastructure through
              models and enterprise data all the way to the
              applications consuming intelligence.
            </p>
          </div>

          <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(
              ({ Icon, number, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -7,
                    borderColor: "rgba(112,70,230,.42)",
                  }}
                  className="group min-h-[350px] rounded-[29px] border border-white/[0.07] bg-[#070507] p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                      <Icon
                        size={16}
                        className="text-[#bda8f4]"
                      />
                    </div>

                    <span className="font-mono text-[6px] tracking-[0.18em] text-[#9878ef]/60">
                      {number}
                    </span>
                  </div>

                  <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                    {title}
                  </h3>

                  <p className="mt-5 text-[12px] leading-7 text-white/[0.44]">
                    {text}
                  </p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          THREAT INTELLIGENCE
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#060406] py-28 md:py-36">
        <PurpleGlow className="left-1/2 top-1/2 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[7px] tracking-[0.28em] text-[#9878ef]">
                03 / THREAT VISIBILITY
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
                See the signals
                <span className="block text-[#bda8f4]">
                  around AI.
                </span>
              </h2>

              <p className="mt-8 max-w-[540px] text-[13px] leading-7 text-white/[0.45]">
                AI platforms introduce activity across users,
                applications, models, data systems and infrastructure.
                Visibility helps teams understand how these systems
                interact.
              </p>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#030303]">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
                <div className="flex items-center gap-3">
                  <Radar
                    size={14}
                    className="text-[#9878ef]"
                  />

                  <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
                    SECURITY SIGNAL CONSOLE
                  </span>
                </div>

                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="h-2 w-2 rounded-full bg-[#a98cf1]"
                />
              </div>

              <div className="p-4">
                {threats.map(
                  ({ code, title, level, Icon }, index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                      }}
                      className="mb-2 flex items-center gap-4 rounded-[18px] border border-white/[0.05] bg-white/[0.02] p-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#7046e6]/20 bg-[#7046e6]/10">
                        <Icon
                          size={14}
                          className="text-[#bda8f4]"
                        />
                      </div>

                      <div className="flex-1">
                        <span className="font-mono text-[5px] tracking-[0.18em] text-[#9878ef]/60">
                          {code}
                        </span>

                        <p className="mt-1 text-[11px] text-white/65">
                          {title}
                        </p>
                      </div>

                      <div className="rounded-full border border-white/[0.07] px-3 py-1.5">
                        <span className="font-mono text-[5px] tracking-[0.15em] text-white/30">
                          {level}
                        </span>
                      </div>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ZERO TRUST FLOW
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#030303] py-28 md:py-36">
        <PurpleGlow className="-left-[400px] top-1/2 h-[850px] w-[850px] -translate-y-1/2" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <p className="font-mono text-[7px] tracking-[0.28em] text-[#9878ef]">
              04 / AI ACCESS ARCHITECTURE
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Trust nothing.
              <span className="block text-[#bda8f4]">
                Verify every interaction.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-[720px] text-[13px] leading-7 text-white/[0.45]">
              Apply identity, authorization, inspection and
              visibility throughout the path between AI consumers
              and enterprise intelligence.
            </p>
          </div>

          <div className="mt-16 grid gap-3 lg:grid-cols-4">
            {architecture.map(
              ({ Icon, label, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="relative min-h-[340px] rounded-[28px] border border-white/[0.07] bg-[#070507] p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                      <Icon
                        size={15}
                        className="text-[#bda8f4]"
                      />
                    </div>

                    <span className="font-mono text-[6px] tracking-[0.18em] text-[#9878ef]/60">
                      {label}
                    </span>
                  </div>

                  <h3 className="mt-14 text-2xl font-medium">
                    {title}
                  </h3>

                  <p className="mt-5 text-[12px] leading-7 text-white/[0.43]">
                    {text}
                  </p>

                  {index < architecture.length - 1 && (
                    <ArrowRight
                      size={13}
                      className="absolute bottom-7 right-7 hidden text-[#9878ef]/40 lg:block"
                    />
                  )}
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#060406] py-28 md:py-36">
        <PurpleGlow className="-right-[400px] top-1/2 h-[850px] w-[850px] -translate-y-1/2" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-[7px] tracking-[0.28em] text-[#9878ef]">
                05 / SECURITY PRINCIPLES
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
                Security before
                <span className="block text-[#bda8f4]">
                  scale.
                </span>
              </h2>

              <p className="mt-8 max-w-[480px] text-[13px] leading-7 text-white/[0.45]">
                Strong AI platforms establish durable security
                principles before generative AI adoption expands
                across applications and teams.
              </p>
            </div>

            <div>
              {principles.map(
                ({ Icon, title, text }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="grid gap-6 border-t border-white/[0.07] py-8 md:grid-cols-[0.15fr_0.7fr_1.15fr]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                      <Icon
                        size={15}
                        className="text-[#bda8f4]"
                      />
                    </div>

                    <div>
                      <span className="font-mono text-[6px] tracking-[0.18em] text-[#9878ef]/60">
                        PRINCIPLE 0{index + 1}
                      </span>

                      <h3 className="mt-3 text-xl font-medium">
                        {title}
                      </h3>
                    </div>

                    <p className="text-[12px] leading-7 text-white/[0.43]">
                      {text}
                    </p>
                  </motion.div>
                ),
              )}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#030303] py-28 md:py-36">
        <PurpleGlow className="left-1/2 top-1/2 h-[850px] w-[1100px] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="max-w-[1000px]">
            <p className="font-mono text-[7px] tracking-[0.28em] text-[#9878ef]">
              06 / PROTECTED AI
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Security for real
              <span className="block text-[#bda8f4]">
                AI workloads.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map(
              ({ Icon, tag, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -7,
                    borderColor: "rgba(112,70,230,.42)",
                  }}
                  className="min-h-[350px] rounded-[28px] border border-white/[0.07] bg-[#070507] p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                      <Icon
                        size={16}
                        className="text-[#bda8f4]"
                      />
                    </div>

                    <span className="font-mono text-[6px] tracking-[0.18em] text-[#9878ef]/60">
                      {tag}
                    </span>
                  </div>

                  <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                    {title}
                  </h3>

                  <p className="mt-5 text-[12px] leading-7 text-white/[0.43]">
                    {text}
                  </p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#030303] px-5 py-36 md:px-10 md:py-48">
        <div className="absolute left-1/2 top-1/2 h-[850px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#390b44]/45 blur-[200px]" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-[1250px] text-center"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(112,70,230,.1)",
                "0 0 55px rgba(112,70,230,.3)",
                "0 0 20px rgba(112,70,230,.1)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-[25px] border border-[#7046e6]/30 bg-[#7046e6]/10"
          >
            <ShieldCheck
              size={31}
              strokeWidth={1.2}
              className="text-[#d2c3f8]"
            />
          </motion.div>

          <p className="mt-9 font-mono text-[7px] tracking-[0.28em] text-[#9878ef]">
            AI SECURITY
          </p>

          <h2 className="mt-7 text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
            Protect intelligence
            <span className="block text-[#cdbbf8]">
              from infrastructure up.
            </span>
          </h2>

          <p className="mx-auto mt-9 max-w-[780px] text-[13px] leading-7 text-white/[0.45] md:text-[14px]">
            Build security into the architecture connecting cloud
            infrastructure, enterprise data, foundation models,
            agents and the applications that consume AI.
          </p>

          <div className="mx-auto mt-14 h-px max-w-[760px] bg-gradient-to-r from-transparent via-[#7046e6]/55 to-transparent" />

          <div className="mt-10 flex flex-wrap justify-center gap-x-9 gap-y-4">
            {[
              "IDENTITY",
              "MODELS",
              "DATA",
              "NETWORK",
              "RUNTIME",
              "OBSERVABILITY",
            ].map((item) => (
              <span
                key={item}
                className="font-mono text-[6px] tracking-[0.22em] text-white/[0.25]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}