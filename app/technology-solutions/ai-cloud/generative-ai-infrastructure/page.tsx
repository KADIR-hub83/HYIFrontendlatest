"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Bot,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  Globe2,
  HardDrive,
  Layers3,
  LockKeyhole,
  Network,
  Orbit,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const infrastructureLayers = [
  {
    number: "05",
    title: "AI Applications",
    subtitle: "AGENTS / COPILOTS / PRODUCTS",
    Icon: Sparkles,
  },
  {
    number: "04",
    title: "Inference Gateway",
    subtitle: "APIs / ROUTING / SERVING",
    Icon: Network,
  },
  {
    number: "03",
    title: "Model Runtime",
    subtitle: "LLMs / EMBEDDINGS / INFERENCE",
    Icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Data Intelligence",
    subtitle: "VECTOR / RAG / KNOWLEDGE",
    Icon: Database,
  },
  {
    number: "01",
    title: "Accelerated Compute",
    subtitle: "GPU / CPU / STORAGE / NETWORK",
    Icon: Cpu,
  },
];

const capabilities = [
  {
    Icon: Cpu,
    number: "01",
    title: "Accelerated Compute",
    text: "Design scalable compute foundations for generative AI training, fine-tuning and high-throughput inference workloads.",
  },
  {
    Icon: BrainCircuit,
    number: "02",
    title: "Model Runtime",
    text: "Create controlled runtime environments where foundation models, custom models and embedding workloads can operate reliably.",
  },
  {
    Icon: Database,
    number: "03",
    title: "AI Data Layer",
    text: "Connect enterprise information, vector retrieval and knowledge systems to generative AI applications through governed data architecture.",
  },
  {
    Icon: Network,
    number: "04",
    title: "Inference Network",
    text: "Build routing and serving patterns that connect applications with model endpoints while maintaining scalability and operational visibility.",
  },
  {
    Icon: ShieldCheck,
    number: "05",
    title: "Security & Governance",
    text: "Apply identity, access, data protection and infrastructure controls across the generative AI technology stack.",
  },
  {
    Icon: Activity,
    number: "06",
    title: "AI Observability",
    text: "Monitor infrastructure, model endpoints, request flows and supporting services across production generative AI environments.",
  },
];

const platformStack = [
  {
    Icon: HardDrive,
    label: "FOUNDATION",
    title: "Storage & Data",
    text: "Object storage, databases, vector systems and enterprise knowledge foundations.",
  },
  {
    Icon: Cpu,
    label: "COMPUTE",
    title: "AI Compute",
    text: "Accelerated compute pools designed around training and inference workload requirements.",
  },
  {
    Icon: Boxes,
    label: "RUNTIME",
    title: "Model Runtime",
    text: "Containerized and managed environments for serving foundation and specialized models.",
  },
  {
    Icon: Network,
    label: "DELIVERY",
    title: "Inference Gateway",
    text: "Controlled access paths connecting applications, agents and services with model endpoints.",
  },
  {
    Icon: Activity,
    label: "OPERATIONS",
    title: "Observability",
    text: "Infrastructure and service telemetry for understanding production AI systems.",
  },
];

const deploymentPatterns = [
  {
    Icon: Cloud,
    title: "Cloud-native AI",
    text: "Use elastic cloud infrastructure and managed services to support rapidly evolving generative AI workloads.",
  },
  {
    Icon: Server,
    title: "Private AI",
    text: "Design controlled environments for workloads requiring stronger infrastructure, network or data boundaries.",
  },
  {
    Icon: Globe2,
    title: "Hybrid AI",
    text: "Connect cloud AI services with enterprise infrastructure and existing data environments through intentional architecture.",
  },
  {
    Icon: Layers3,
    title: "Multi-model platforms",
    text: "Create shared foundations capable of supporting different models, inference patterns and application requirements.",
  },
];

const workloadFlow = [
  {
    number: "01",
    title: "Request",
    text: "Applications, copilots and agents submit an AI request.",
  },
  {
    number: "02",
    title: "Route",
    text: "Gateway policies determine the appropriate model or service path.",
  },
  {
    number: "03",
    title: "Retrieve",
    text: "Relevant enterprise context can be retrieved from governed knowledge systems.",
  },
  {
    number: "04",
    title: "Infer",
    text: "The selected model processes the request on appropriate compute infrastructure.",
  },
  {
    number: "05",
    title: "Observe",
    text: "Operational signals provide visibility across the request lifecycle.",
  },
];

const principles = [
  {
    Icon: Layers3,
    title: "Platform over point solutions",
    text: "Build reusable AI infrastructure foundations rather than creating a separate technology stack for every generative AI application.",
  },
  {
    Icon: ShieldCheck,
    title: "Security by architecture",
    text: "Treat identity, network boundaries and data controls as infrastructure requirements rather than post-deployment additions.",
  },
  {
    Icon: Gauge,
    title: "Workload-aware compute",
    text: "Align infrastructure with the actual requirements of training, embeddings, batch inference and interactive generation workloads.",
  },
  {
    Icon: Activity,
    title: "Observable AI systems",
    text: "Design visibility across compute, model endpoints, retrieval services and application request flows.",
  },
];

const useCases = [
  {
    Icon: Bot,
    tag: "AGENTS",
    title: "Enterprise AI agents",
    text: "Infrastructure for intelligent agents that interact with enterprise applications, data and business workflows.",
  },
  {
    Icon: Sparkles,
    tag: "COPILOTS",
    title: "AI copilots",
    text: "Model serving and retrieval foundations for contextual assistants embedded into enterprise experiences.",
  },
  {
    Icon: Database,
    tag: "RAG",
    title: "Knowledge intelligence",
    text: "Connect foundation models with governed enterprise information through retrieval and vector data architectures.",
  },
  {
    Icon: BrainCircuit,
    tag: "MODELS",
    title: "Private model serving",
    text: "Operate selected models inside controlled infrastructure environments aligned with organizational requirements.",
  },
  {
    Icon: Workflow,
    tag: "AUTOMATION",
    title: "Generative workflows",
    text: "Support AI-powered automation pipelines that combine models, enterprise systems and orchestration services.",
  },
  {
    Icon: Network,
    tag: "PLATFORM",
    title: "Shared AI platform",
    text: "Provide common infrastructure capabilities that can support multiple teams and generative AI products.",
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
   HERO BUILDING
========================================================= */

function AIInfrastructureBuilding() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.2 }}
      className="relative mx-auto mt-5 h-[690px] w-full max-w-[1250px]"
    >
      {/* Ground glow */}
      <div className="absolute bottom-[20px] left-1/2 h-[130px] w-[75%] -translate-x-1/2 rounded-full bg-[#7046e6]/30 blur-[90px]" />

      {/* side atmospheric glow */}
      <div className="absolute left-1/2 top-[40%] h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#390b44]/50 blur-[130px]" />

      {/* orbital rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7046e6]/15"
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
        className="absolute left-1/2 top-[45%] h-[610px] w-[610px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.05]"
      />

      {/* floating labels */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-[4%] top-[22%] z-30 hidden rounded-2xl border border-white/[0.08] bg-[#0b070d]/80 p-4 backdrop-blur-xl lg:block"
      >
        <div className="flex items-center gap-3">
          <Cpu size={14} className="text-[#b59af4]" />

          <div>
            <p className="text-[9px] text-white/70">
              Compute Fabric
            </p>
            <p className="mt-1 font-mono text-[5px] tracking-[0.18em] text-white/25">
              ACCELERATED
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 4.6,
          repeat: Infinity,
        }}
        className="absolute right-[3%] top-[32%] z-30 hidden rounded-2xl border border-white/[0.08] bg-[#0b070d]/80 p-4 backdrop-blur-xl lg:block"
      >
        <div className="flex items-center gap-3">
          <BrainCircuit
            size={14}
            className="text-[#b59af4]"
          />

          <div>
            <p className="text-[9px] text-white/70">
              Model Runtime
            </p>
            <p className="mt-1 font-mono text-[5px] tracking-[0.18em] text-white/25">
              ONLINE
            </p>
          </div>
        </div>
      </motion.div>

      {/* BUILDING */}
      <div className="absolute bottom-[60px] left-1/2 z-20 w-[92%] max-w-[650px] -translate-x-1/2 perspective-[1200px] md:w-[650px]">
        {/* antenna */}
        <div className="relative mx-auto h-[70px] w-[2px] bg-gradient-to-t from-[#7046e6] to-transparent">
          <motion.span
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
            }}
            className="absolute -left-[4px] -top-1 h-[10px] w-[10px] rounded-full bg-[#d6c8ff] shadow-[0_0_30px_#7046e6]"
          />
        </div>

        {/* roof */}
        <div className="mx-auto h-[20px] w-[84%] border-x border-t border-[#8e6ce8]/25 bg-[#7046e6]/5 [clip-path:polygon(8%_0,92%_0,100%_100%,0_100%)]" />

        {/* floors */}
        <div className="relative border-x border-[#7046e6]/20 bg-[#070509]/80 shadow-[0_0_80px_rgba(112,70,230,.15)] backdrop-blur-xl">
          {/* vertical building lines */}
          <div className="pointer-events-none absolute inset-0">
            {[15, 30, 50, 70, 85].map((left) => (
              <div
                key={left}
                className="absolute bottom-0 top-0 w-px bg-white/[0.025]"
                style={{ left: `${left}%` }}
              />
            ))}
          </div>

          {infrastructureLayers.map(
            (
              { number, title, subtitle, Icon },
              index,
            ) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.7 + index * 0.13,
                  duration: 0.65,
                }}
                className="group relative flex min-h-[92px] items-center border-t border-[#7046e6]/15 px-4 md:px-7"
              >
                {/* animated floor scan */}
                <motion.div
                  animate={{
                    x: ["-100%", "180%"],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    delay: index * 0.8,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute bottom-0 top-0 w-[140px] bg-gradient-to-r from-transparent via-[#7046e6]/10 to-transparent"
                />

                <div className="relative flex w-full items-center gap-4">
                  <span className="hidden w-8 font-mono text-[6px] text-white/20 sm:block">
                    {number}
                  </span>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#7046e6]/25 bg-[#7046e6]/10">
                    <Icon
                      size={14}
                      className="text-[#c8b5f8]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[11px] font-medium text-[#f2edff] md:text-[13px]">
                      {title}
                    </h3>

                    <p className="mt-1 font-mono text-[5px] tracking-[0.16em] text-white/25 md:text-[6px]">
                      {subtitle}
                    </p>
                  </div>

                  <div className="hidden items-center gap-1.5 sm:flex">
                    {[0, 1, 2, 3, 4].map((dot) => (
                      <motion.span
                        key={dot}
                        animate={{
                          opacity: [0.15, 1, 0.15],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay:
                            dot * 0.16 + index * 0.1,
                        }}
                        className="h-1.5 w-1.5 rounded-sm bg-[#7046e6]"
                      />
                    ))}
                  </div>

                  <motion.div
                    animate={{
                      opacity: [0.35, 1, 0.35],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c9b7fa]" />

                    <span className="hidden font-mono text-[5px] text-[#c9b7fa]/60 md:block">
                      ACTIVE
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* building foundation */}
        <div className="relative mx-auto h-[38px] w-[108%] -translate-x-[4%] border border-[#7046e6]/20 bg-[#09060b] [clip-path:polygon(3%_0,97%_0,100%_100%,0_100%)]">
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-[120px] bg-gradient-to-r from-transparent via-[#7046e6]/20 to-transparent"
          />
        </div>
      </div>

      {/* ground platform */}
      <div className="absolute bottom-[30px] left-1/2 h-[60px] w-[82%] -translate-x-1/2 rounded-[50%] border border-[#7046e6]/20 bg-[#7046e6]/5" />

      {/* animated ground pulse */}
      <motion.div
        animate={{
          scale: [0.8, 1.1],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute bottom-[18px] left-1/2 h-[85px] w-[65%] -translate-x-1/2 rounded-[50%] border border-[#7046e6]/25"
      />
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function GenerativeAIInfrastructurePage() {
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
              Infrastructure for
              <span className="block hyi-blue">
                generative intelligence.
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[830px] hyi-p">
              Build the compute, model runtime, data, networking,
              security and operational foundations required to move
              generative AI from isolated experiments into
              production enterprise systems.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {[
                "GPU Compute",
                "Foundation Models",
                "RAG",
                "Inference",
                "AI Security",
                "Observability",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 font-mono hyi-p tracking-[0.17em] text-white/[0.4]"
                >
                  {item.toUpperCase()}
                </div>
              ))}
            </div>
          </motion.div>

          <AIInfrastructureBuilding />
        </div>
      </section>

      {/* =====================================================
          INFRASTRUCTURE FOUNDATION
      ===================================================== */}
      <section
        id="infrastructure"
        className="relative overflow-hidden  py-10"
      >
        <PurpleGlow className="-left-[400px] top-1/2 h-[800px] w-[800px] -translate-y-1/2" />

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
            

              <h2 className="hyi-h1 hyi-white">
                The foundation
                <span className="block hyi-blue">
                  beneath the model.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                Generative AI applications depend on far more than
                access to a language model. Production systems require
                connected compute, storage, model serving, retrieval,
                networking, security and observability foundations.
              </p>

              <div className="mt-4 space-y-3">
                {[
                  "Accelerated AI compute",
                  "Model runtime infrastructure",
                  "Enterprise knowledge integration",
                  "Scalable inference architecture",
                  "Production observability",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-[#9878ef]"
                    />

                    <span className="hyi-p">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  Icon: Cpu,
                  title: "Compute",
                  text: "Infrastructure capable of supporting different generative AI training and inference requirements.",
                },
                {
                  Icon: BrainCircuit,
                  title: "Models",
                  text: "Runtime environments for foundation models, specialized models and embedding services.",
                },
                {
                  Icon: Database,
                  title: "Knowledge",
                  text: "Data and retrieval architecture connecting models with relevant enterprise information.",
                },
                {
                  Icon: Network,
                  title: "Delivery",
                  text: "Secure serving and routing layers connecting AI capabilities with applications and workflows.",
                },
              ].map(({ Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -6,
                    borderColor:
                      "rgba(112,70,230,.35)",
                  }}
                  className=" rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7"
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

                  <p className="mt-2 hyi-p">
                    {text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="relative overflow-hidden ">
        <PurpleGlow className="-right-[400px] top-1/2 h-[850px] w-[850px] -translate-y-1/2" />

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="flex flex-col text-center mx-auto">
            <div className="max-w-[900px] mx-auto">
           

              <h2 className="hyi-h1 hyi-white">
                Everything generative AI
                <span className="block hyi-blue">
                  needs underneath.
                </span>
              </h2>
            </div>

            <p className="max-w-[670px] hyi-p mx-auto">
              Create a common infrastructure layer capable of
              supporting models, agents, copilots and emerging
              generative AI applications.
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(
              ({ Icon, number, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -7,
                    borderColor:
                      "rgba(112,70,230,.45)",
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

                  <p className="mt-2 hyi-p">
                    {text}
                  </p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          PLATFORM STACK
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] py-10">
        <PurpleGlow className="left-1/2 top-1/2 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[950px] text-center">
       
            <h2 className="hyi-h1 hyi-white">
              One infrastructure.
              <span className="block hyi-blue">
                Multiple AI layers.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[720px] hyi-p">
              Treat generative AI infrastructure as a connected
              technology stack rather than independent model
              endpoints.
            </p>
          </div>

          <div className="mx-auto mt-4 max-w-[1200px]">
            {platformStack.map(
              ({ Icon, label, title, text }, index) => (
                <motion.div
                  key={title}
                  initial={{
                    opacity: 0,
                    x:
                      index % 2 === 0
                        ? -25
                        : 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  className="group grid gap-5 border-t border-white/[0.07] py-9 md:grid-cols-[0.25fr_0.65fr_1.1fr]"
                >
                  <div className="flex items-center gap-1">
                    <Icon
                      size={15}
                      className="text-[#9878ef]"
                    />
                  </div>

                  <h3 className="hyi-h3 hyi-white">
                    {title}
                  </h3>

                  <p className="max-w-[620px] hyi-p">
                    {text}
                  </p>
                </motion.div>
              ),
            )}

            <div className="border-t border-white/[0.07]" />
          </div>
        </div>
      </section>

      {/* =====================================================
          DEPLOYMENT
      ===================================================== */}
      <section className="relative overflow-hidden ">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
         

              <h2 className="hyi-h1 hyi-white">
                Infrastructure that fits
                <span className="block hyi-blue">
                  the AI workload.
                </span>
              </h2>

              <p className="mt-2 max-w-[500px] hyi-p">
                Generative AI workloads can require different
                infrastructure boundaries. Architecture should
                follow application, data, performance and
                operational requirements.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {deploymentPatterns.map(
                ({ Icon, title, text }, index) => (
                  <motion.article
                    key={title}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className=" rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        size={18}
                        className="text-[#b69df4]"
                      />
                    </div>

                    <h3 className="mt-2 hyi-h3 hyi-white">
                      {title}
                    </h3>

                    <p className="mt-2 hyi-p">
                      {text}
                    </p>
                  </motion.article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REQUEST FLOW
      ===================================================== */}
      <section className="relative overflow-hidden py-10">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="max-w-[900px] text-center mx-auto">
   

            <h2 className="hyi-h1 hyi-white">
              From application
              <span className="block hyi-blue">
                to intelligence.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-5">
            {workloadFlow.map(
              ({ number, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="relative  rounded-[26px] border border-white/[0.07] bg-[#030303]/80 p-6"
                >

                  <h3 className="hyi-h3 hyi-white">
                    {title}
                  </h3>

                  <p className="mt-2 hyi-p">
                    {text}
                  </p>

                  {index <
                    workloadFlow.length - 1 && (
                    <ArrowRight
                      size={13}
                      className="absolute bottom-6 right-6 hidden text-[#9878ef]/50 lg:block"
                    />
                  )}
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECURITY
      ===================================================== */}
      <section className="relative overflow-hidden ">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
            >
     
              <h2 className="hyi-h1 hyi-white">
                Control every
                <span className="block hyi-blue">
                  infrastructure layer.
                </span>
              </h2>

              <p className="mt-2 max-w-[600px] hyi-p">
                Security architecture for generative AI extends
                across identities, applications, model endpoints,
                retrieval systems, networks and underlying cloud
                infrastructure.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  Icon: LockKeyhole,
                  title: "Identity",
                  text: "Control access to AI services, models, infrastructure and supporting enterprise data.",
                },
                {
                  Icon: Network,
                  title: "Network",
                  text: "Define intentional communication paths between applications, AI services and data systems.",
                },
                {
                  Icon: Database,
                  title: "Data",
                  text: "Apply appropriate protection and access boundaries around knowledge used by generative AI applications.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Runtime",
                  text: "Operate AI workloads inside controlled runtime environments with clear ownership and operational policies.",
                },
              ].map(({ Icon, title, text }) => (
                <motion.article
                  key={title}
                  whileHover={{
                    borderColor:
                      "rgba(112,70,230,.4)",
                  }}
                  className=" rounded-[27px] border border-white/[0.07] bg-[#080609] p-7"
                >
                  <Icon
                    size={17}
                    className="text-[#b69df4]"
                  />

                  <h3 className="mt-2 hyi-h3 hyi-white">
                    {title}
                  </h3>

                  <p className="mt-2 hyi-p">
                    {text}
                  </p>
                </motion.article>
              ))}
            </div>
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
                Build the platform
                <span className="block hyi-blue">
                  behind AI.
                </span>
              </h2>

              <p className="mt-2 max-w-[470px] hyi-p">
                Models will continue changing. Strong infrastructure
                principles create a more durable foundation for
                generative AI adoption.
              </p>
            </div>

            <div>
              {principles.map(
                ({ Icon, title, text }, index) => (
                  <motion.div
                    key={title}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
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

                    <p className="hyi-p">
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
      <section className="relative overflow-hidden">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
     

            <h2 className="hyi-h1 hyi-white">
              One foundation.
              <span className="block hyi-blue">
                Many AI experiences.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map(
              ({ Icon, tag, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -6,
                    borderColor:
                      "rgba(112,70,230,.4)",
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

                  <p className="mt-2 hyi-p">
                    {text}
                  </p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>



      <Footer />
    </main>
  );
}