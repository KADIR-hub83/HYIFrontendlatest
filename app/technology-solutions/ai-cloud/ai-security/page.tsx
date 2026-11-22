"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
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
  Shield,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Workflow,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const securityLayers = [
  {
    label: "APPLICATION",
    title: "AI Applications",
    description: "Agents · Copilots · AI Products",
    Icon: Sparkles,
  },
  {
    label: "MODEL",
    title: "Model Security",
    description: "LLMs · Inference · Guardrails",
    Icon: BrainCircuit,
  },
  {
    label: "DATA",
    title: "Knowledge Security",
    description: "RAG · Vector · Enterprise Data",
    Icon: Database,
  },
  {
    label: "RUNTIME",
    title: "Runtime Protection",
    description: "Containers · APIs · Services",
    Icon: Cpu,
  },
  {
    label: "FOUNDATION",
    title: "Cloud Security",
    description: "Identity · Network · Infrastructure",
    Icon: Cloud,
  },
];

const capabilities = [
  {
    Icon: Fingerprint,
    title: "AI Identity & Access",
    text: "Control which users, applications, agents and workloads can access models, enterprise knowledge and supporting AI infrastructure.",
  },
  {
    Icon: BrainCircuit,
    title: "Model Protection",
    text: "Create security boundaries around model endpoints, inference services and the runtime environments responsible for delivering AI capabilities.",
  },
  {
    Icon: Database,
    title: "Data Protection",
    text: "Protect enterprise information used by retrieval, embeddings, fine-tuning and generative AI applications through intentional access architecture.",
  },
  {
    Icon: Network,
    title: "Network Security",
    text: "Define controlled communication paths between applications, model services, cloud infrastructure and enterprise data environments.",
  },
  {
    Icon: Eye,
    title: "AI Observability",
    text: "Create visibility across model access, infrastructure activity, service behavior and important security signals throughout the AI platform.",
  },
  {
    Icon: ShieldCheck,
    title: "Governance Controls",
    text: "Translate organizational AI policies into practical controls across infrastructure, data access, model usage and production operations.",
  },
];

const threats = [
  {
    title: "Unauthorized model access",
    level: "IDENTITY",
    Icon: KeyRound,
  },
  {
    title: "Sensitive data exposure",
    level: "DATA",
    Icon: Database,
  },
  {
    title: "Untrusted AI requests",
    level: "APPLICATION",
    Icon: AlertTriangle,
  },
  {
    title: "Runtime anomalies",
    level: "INFRASTRUCTURE",
    Icon: Activity,
  },
];

const architecture = [
  {
    Icon: UserRoundCheck,
    title: "Authenticate",
    text: "Establish trusted identities for users, applications and machine workloads before granting access to AI resources.",
  },
  {
    Icon: Shield,
    title: "Authorize",
    text: "Apply policies that determine which AI capabilities, models, datasets and infrastructure resources can be accessed.",
  },
  {
    Icon: ScanLine,
    title: "Inspect",
    text: "Evaluate relevant application and infrastructure signals as AI requests move through the platform.",
  },
  {
    Icon: Eye,
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
    title: "Secure AI agents",
    text: "Control how autonomous and semi-autonomous agents access enterprise tools, services and business information.",
  },
  {
    Icon: Sparkles,
    title: "Enterprise copilots",
    text: "Protect model access and organizational knowledge used by internal AI assistants and contextual copilots.",
  },
  {
    Icon: Database,
    title: "Protected RAG",
    text: "Apply access controls around retrieval systems so enterprise context remains aligned with user and application permissions.",
  },
  {
    Icon: BrainCircuit,
    title: "Private model serving",
    text: "Create controlled runtime and network boundaries for models operating inside private or regulated environments.",
  },
  {
    Icon: Cloud,
    title: "AI cloud workloads",
    text: "Extend cloud security architecture into GPU compute, model endpoints, AI data services and supporting infrastructure.",
  },
  {
    Icon: Workflow,
    title: "AI security operations",
    text: "Connect infrastructure telemetry, model access signals and operational processes into a unified security workflow.",
  },
];

/* =========================================================
   BACKGROUND COMPONENT
========================================================= */

function PurpleGlow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-[#390b44]/60 blur-[180px] ${className}`}
    />
  );
}

/* =========================================================
   HERO FORTRESS
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
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.2 }}
      className="relative mx-auto mt-5 h-[690px] w-full max-w-[1250px] overflow-hidden md:overflow-visible"
    >
      {/* center atmospheric glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#390b44]/50 blur-[130px]" />

      <div className="absolute bottom-[20px] left-1/2 h-[130px] w-[75%] -translate-x-1/2 rounded-full bg-[#7046e6]/30 blur-[90px]" />

      {/* outer radar */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7046e6]/15"
      >
        <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 rounded-full bg-[#d8caff] shadow-[0_0_25px_#7046e6]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[490px] w-[490px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.05]"
      />

      {/* orbit nodes */}
      {orbitNodes.map(({ Icon, label, position }, index) => (
        <motion.div
          key={label}
          animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
          transition={{
            duration: 4 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${position} z-30 hidden rounded-2xl border border-white/[0.08] bg-[#0b070d]/80 p-4 backdrop-blur-xl lg:block`}
        >
          <div className="flex items-center gap-3">
            <Icon size={14} className="text-[#b59af4]" />

            <div>
              <p className="text-[9px] text-white/70">
                {label}
              </p>
              <p className="mt-1 font-mono text-[5px] tracking-[0.18em] text-white/25">
                SECURITY NODE
              </p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* main fortress */}
      <div className="absolute left-1/2 top-1/2 z-20 w-[92%] max-w-[650px] -translate-x-1/2 -translate-y-1/2">
        {/* shield crown */}
        <div className="relative z-30 mx-auto mb-[-30px] flex h-[110px] w-[110px] items-center justify-center">
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
            animate={{ scale: [0.92, 1.05, 0.92] }}
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
        <div className="relative overflow-hidden rounded-[34px] border border-[#7046e6]/25 bg-[#070509]/80 p-3 shadow-[0_0_80px_rgba(112,70,230,.15)] backdrop-blur-xl">
          {/* scanner */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
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
                ({ label, title, description, Icon }, index) => (
                  <motion.div
                    key={title}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -30 : 30,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.7 + index * 0.13,
                      duration: 0.65,
                    }}
                    whileHover={{
                      x: 4,
                      borderColor: "rgba(112,70,230,.45)",
                    }}
                    className="relative overflow-hidden rounded-[18px] border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <motion.div
                      animate={{ x: ["-150%", "250%"] }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        delay: index * 0.8,
                        ease: "linear",
                      }}
                      className="pointer-events-none absolute inset-y-0 w-[90px] bg-gradient-to-r from-transparent via-[#7046e6]/10 to-transparent"
                    />

                    <div className="relative flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                        <Icon
                          size={14}
                          className="text-[#c8b5f8]"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="font-mono text-[5px] tracking-[0.18em] text-[#9878ef]/60">
                          {label}
                        </span>

                        <h3 className="mt-1 text-[11px] font-medium text-[#f2edff] md:text-[13px]">
                          {title}
                        </h3>

                        <p className="mt-1 hidden font-mono text-[5px] tracking-[0.16em] text-white/25 sm:block md:text-[6px]">
                          {description}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {[0, 1, 2].map((dot) => (
                          <motion.span
                            key={dot}
                            animate={{ opacity: [0.15, 1, 0.15] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: dot * 0.16 + index * 0.1,
                            }}
                            className="h-1.5 w-1.5 rounded-sm bg-[#7046e6]"
                          />
                        ))}
                      </div>

                      <LockKeyhole
                        size={12}
                        className="text-[#c8b5f8]/55"
                      />
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

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
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AISecurityPage() {
  return (
    <main className="overflow-hidden  text-white selection:bg-[#7046e6] selection:text-white">
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-screen overflow-hidden px-5  pt-30 md:px-10 ">
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at 50% 45%,black,transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 45%,black,transparent 80%)",
          }}
        />

        <div className="relative mx-auto max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-[1200px] text-center"
          >
            <h1 className="hyi-h1 hyi-white">
              Secure the systems
              <span className="block hyi-blue">
                powering AI.
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[830px] hyi-p">
              Protect generative AI across identities, models,
              enterprise data, applications and cloud infrastructure
              with a security architecture designed for modern AI
              workloads.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {[
                "AI Identity",
                "Model Security",
                "Data Protection",
                "Runtime Security",
                "Observability",
                "Governance",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5  hyi-p "
                >
                  {item.toUpperCase()}
                </div>
              ))}
            </div>
          </motion.div>

          <AISecurityFortress />
        </div>
      </section>

      {/* =====================================================
          SECURITY FOUNDATION
      ===================================================== */}
      <section
        id="security-foundation"
        className="relative overflow-hidden  py-10"
      >

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                AI creates a new
                <span className="block hyi-blue">
                  security surface.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                Enterprise AI connects users, models, sensitive
                information, cloud infrastructure and business
                applications. Security architecture needs to protect
                those relationships as one connected system.
              </p>

              <div className="mt-4 space-y-3">
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

                    <span className="hyi-p">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* shield architecture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-[36px] border border-white/[0.07] bg-white/[0.025]"
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
                    <Icon size={12} className="text-[#a98cf1]" />

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
      <section className="relative overflow-hidden ">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="flex flex-col text-center mx-auto">
            <div className="max-w-[900px] mx-auto">
              <h2 className="hyi-h1 hyi-white">
                Protect every layer
                <span className="block hyi-blue">
                  of the AI stack.
                </span>
              </h2>
            </div>

            <p className="max-w-[670px] hyi-p mx-auto">
              AI security extends from cloud infrastructure through
              models and enterprise data all the way to the
              applications consuming intelligence.
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -7,
                  borderColor: "rgba(112,70,230,.45)",
                }}
                className="group rounded-[29px] border border-white/[0.07] bg-[#080609] p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                    <Icon
                      size={16}
                      className="text-[#bba4f6]"
                    />
                  </div>
                </div>

                <h3 className="mt-2 hyi-h3 hyi-white">
                  {title}
                </h3>

                <p className="mt-2 hyi-p">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          THREAT VISIBILITY
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] py-10">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                See the signals
                <span className="block hyi-blue">
                  around AI.
                </span>
              </h2>

              <p className="mt-2 max-w-[540px] hyi-p">
                AI platforms introduce activity across users,
                applications, models, data systems and
                infrastructure. Visibility helps teams understand how
                these systems interact.
              </p>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#030303]">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
                <div className="flex items-center gap-3">
                  <Radar size={14} className="text-[#9878ef]" />

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
                {threats.map(({ title, level, Icon }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-2 flex items-center gap-4 rounded-[18px] border border-white/[0.05] bg-white/[0.02] p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#7046e6]/20 bg-[#7046e6]/10">
                      <Icon
                        size={14}
                        className="text-[#bba4f6]"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="hyi-p">{title}</p>
                    </div>

                    <div className="rounded-full border border-white/[0.07] px-3 py-1.5">
                      <span className="font-mono text-[5px] tracking-[0.15em] text-white/30">
                        {level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ACCESS ARCHITECTURE
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="max-w-[900px] text-center mx-auto">
            <h2 className="hyi-h1 hyi-white">
              Trust nothing.
              <span className="block hyi-blue">
                Verify every interaction.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[720px] hyi-p">
              Apply identity, authorization, inspection and
              visibility throughout the path between AI consumers
              and enterprise intelligence.
            </p>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-4">
            {architecture.map(({ Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative  rounded-[26px] border border-white/[0.07] bg-[#030303]/80 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                  <Icon
                    size={15}
                    className="text-[#bba4f6]"
                  />
                </div>

                <h3 className="mt-2 hyi-h3 hyi-white">
                  {title}
                </h3>

                <p className="mt-2 hyi-p">{text}</p>

                {index < architecture.length - 1 && (
                  <ArrowRight
                    size={13}
                    className="absolute bottom-6 right-6 hidden text-[#9878ef]/50 lg:block"
                  />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Security before
                <span className="block hyi-blue">
                  scale.
                </span>
              </h2>

              <p className="mt-2 max-w-[470px] hyi-p">
                Strong AI platforms establish durable security
                principles before generative AI adoption expands
                across applications and teams.
              </p>
            </div>

            <div>
              {principles.map(({ Icon, title, text }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.15fr_0.7fr_1.15fr]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                    <Icon
                      size={15}
                      className="text-[#b69df4]"
                    />
                  </div>

                  <div>
                    <h3 className="mt-2 hyi-h3 hyi-white">
                      {title}
                    </h3>
                  </div>

                  <p className="hyi-p">{text}</p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Security for real
              <span className="block hyi-blue">
                AI workloads.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map(({ Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(112,70,230,.4)",
                }}
                className=" rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                    <Icon
                      size={16}
                      className="text-[#bba4f6]"
                    />
                  </div>
                </div>

                <h3 className="mt-2 hyi-h3 hyi-white">
                  {title}
                </h3>

                <p className="mt-2 hyi-p">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}