"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe2,
  Gauge,
  Network,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const deploymentCapabilities = [
  {
    Icon: Rocket,
    title: "AI Application Deployment",
    description:
      "Move AI applications from development environments into reliable production infrastructure with repeatable deployment workflows, runtime controls and operational visibility.",
  },
  {
    Icon: BrainCircuit,
    title: "Model Runtime",
    description:
      "Deploy model-serving environments designed around inference behavior, application demand, accelerator requirements and model lifecycle management.",
  },
  {
    Icon: Boxes,
    title: "Containerized AI",
    description:
      "Package application services, AI runtimes and supporting dependencies into portable deployment units that can operate consistently across environments.",
  },
  {
    Icon: Workflow,
    title: "CI/CD for AI",
    description:
      "Connect code, model and infrastructure changes with automated validation and controlled deployment pipelines for faster production delivery.",
  },
  {
    Icon: Network,
    title: "Inference APIs",
    description:
      "Expose AI capabilities through scalable service interfaces with routing, traffic management, authentication and observability built into the architecture.",
  },
  {
    Icon: Activity,
    title: "Production Observability",
    description:
      "Observe application health, infrastructure behavior, latency and AI service performance after deployment so production systems remain understandable.",
  },
];

const deploymentFlow = [
  {
    Icon: Code2,
    title: "Application",
    text: "Code + AI logic",
  },
  {
    Icon: GitBranch,
    title: "Pipeline",
    text: "Test + package",
  },
  {
    Icon: Boxes,
    title: "Runtime",
    text: "Container + model",
  },
  {
    Icon: Rocket,
    title: "Production",
    text: "Cloud runtime",
  },
  {
    Icon: Activity,
    title: "Operations",
    text: "Metrics + signals",
  },
];

const lifecycle = [
  {
    Icon: Code2,
    title: "Build",
    description:
      "Develop application logic, AI integrations, service interfaces and runtime configuration as version-controlled production assets.",
  },
  {
    Icon: CheckCircle2,
    title: "Validate",
    description:
      "Test application behavior, model integrations, infrastructure definitions and release artifacts before production promotion.",
  },
  {
    Icon: Boxes,
    title: "Package",
    description:
      "Create consistent deployable units containing application services, dependencies and the configuration required by each runtime.",
  },
  {
    Icon: Rocket,
    title: "Release",
    description:
      "Promote validated releases through controlled environments with repeatable infrastructure and deployment processes.",
  },
  {
    Icon: Activity,
    title: "Observe",
    description:
      "Collect operational signals across application, model, compute and network layers after deployment.",
  },
  {
    Icon: RefreshCw,
    title: "Improve",
    description:
      "Use production evidence to refine capacity, reliability, deployment strategy and future application releases.",
  },
];

const principles = [
  {
    Icon: GitBranch,
    title: "Everything versioned",
    description:
      "Application code, deployment configuration, infrastructure definitions and operational policies should evolve through controlled version history.",
  },
  {
    Icon: ShieldCheck,
    title: "Security before exposure",
    description:
      "Identity, secrets, network boundaries and service authorization should be part of deployment architecture before AI endpoints become externally reachable.",
  },
  {
    Icon: RefreshCw,
    title: "Deployment must be reversible",
    description:
      "Production releases should support controlled rollback or recovery paths when application behavior does not match expected outcomes.",
  },
  {
    Icon: Activity,
    title: "Observable from launch",
    description:
      "An AI application should enter production with enough telemetry to understand availability, latency, resource behavior and service health.",
  },
];

const workloads = [
  {
    Icon: BrainCircuit,
    title: "AI Assistants",
    text: "Deploy conversational and task-oriented AI applications with model access, retrieval services and production APIs.",
  },
  {
    Icon: Sparkles,
    title: "RAG Applications",
    text: "Operate retrieval-augmented applications that connect models with vector search, enterprise knowledge and application services.",
  },
  {
    Icon: Globe2,
    title: "Inference Services",
    text: "Expose production model capabilities through controlled and scalable API endpoints for downstream applications.",
  },
  {
    Icon: Workflow,
    title: "AI Agents",
    text: "Deploy agent runtimes that coordinate models, tools, application state and enterprise services through governed workflows.",
  },
  {
    Icon: Database,
    title: "Intelligent Data Apps",
    text: "Connect production applications with data platforms, analytics services and AI inference within a unified architecture.",
  },
  {
    Icon: Cpu,
    title: "Accelerated Applications",
    text: "Run computationally intensive AI applications on infrastructure aligned with GPU and high-performance compute requirements.",
  },
];

const architectureStack = [
  {
    Icon: Globe2,
    title: "AI Application",
    text: "The user-facing experience, agents and application logic.",
  },
  {
    Icon: Network,
    title: "API Gateway",
    text: "Routing, authentication and traffic management for AI services.",
  },
  {
    Icon: BrainCircuit,
    title: "Model Runtime",
    text: "Serving environments for foundation and specialized models.",
  },
  {
    Icon: Cpu,
    title: "AI Compute",
    text: "Accelerated infrastructure executing inference workloads.",
  },
  {
    Icon: Database,
    title: "Data Layer",
    text: "Vector, cache and state systems supplying context to AI.",
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
   SMALL MODEL COMPONENTS
========================================================= */

function StatusLight({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [0.8, 1.15, 0.8],
      }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        delay,
      }}
      className="h-1.5 w-1.5 rounded-full bg-[#7046e6]"
    />
  );
}

function ServerRack({
  name,
  delay,
}: {
  name: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative flex-1 rounded-[9px] border border-white/[0.08] bg-black p-2"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[4px] text-white/25">{name}</span>
        <StatusLight delay={delay} />
      </div>

      <div className="space-y-[4px]">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="relative h-[7px] overflow-hidden rounded-[2px] border border-white/[0.05] bg-white/[0.025]"
          >
            <motion.div
              animate={{
                width: ["12%", "76%", "35%", "91%", "12%"],
              }}
              transition={{
                duration: 4 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + i * 0.08,
              }}
              className="absolute inset-y-0 left-0 bg-[#7046e6]/40"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function VerticalPacket({
  left,
  delay,
}: {
  left: string;
  delay: number;
}) {
  return (
    <motion.span
      animate={{
        y: [0, 410],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      style={{ left }}
      className="absolute top-[80px] z-50 h-1.5 w-1.5 rounded-full bg-[#d4c7f6] shadow-[0_0_14px_#7046e6]"
    />
  );
}

/* =========================================================
   HERO LIVE AI DEPLOYMENT INFRASTRUCTURE
========================================================= */

function AIDeploymentInfrastructure() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.2 }}
      className="relative mx-auto mt-10 h-[760px] w-full max-w-[1250px] overflow-hidden lg:overflow-visible"
    >
      {/* ground glow */}
      <div className="absolute bottom-[20px] left-1/2 h-[130px] w-[75%] -translate-x-1/2 rounded-full bg-[#7046e6]/30 blur-[90px]" />

      {/* atmospheric glow */}
      <div className="absolute left-1/2 top-[40%] h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#390b44]/50 blur-[130px]" />

      <VerticalPacket left="34%" delay={0} />
      <VerticalPacket left="50%" delay={1.3} />
      <VerticalPacket left="66%" delay={2.5} />

      {/* LEFT FLOAT CARD */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-0 top-[34%] z-50 hidden w-[190px] rounded-2xl border border-white/[0.08] bg-[#0b070d]/80 p-5 backdrop-blur-xl xl:block"
      >
        <div className="flex items-center gap-3">
          <GitBranch size={14} className="text-[#b59af4]" />

          <div>
            <p className="text-[9px] text-white/70">
              Release Pipeline
            </p>

            <p className="mt-1 font-mono text-[5px] tracking-[0.18em] text-white/25">
              DEPLOYING
            </p>
          </div>
        </div>

        <div className="mt-5 h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            animate={{ width: ["15%", "88%", "35%", "15%"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="h-full bg-[#7046e6]"
          />
        </div>

        <div className="mt-4 flex justify-between font-mono text-[4px] text-white/20">
          <span>BUILD</span>
          <span>TEST</span>
          <span>DEPLOY</span>
        </div>
      </motion.div>

      {/* RIGHT FLOAT CARD */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.6, repeat: Infinity }}
        className="absolute right-0 top-[45%] z-50 hidden w-[190px] rounded-2xl border border-white/[0.08] bg-[#0b070d]/80 p-5 backdrop-blur-xl xl:block"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Activity size={14} className="text-[#b59af4]" />

            <div>
              <p className="text-[9px] text-white/70">
                Prod Health
              </p>

              <p className="mt-1 font-mono text-[5px] tracking-[0.18em] text-white/25">
                HEALTHY
              </p>
            </div>
          </div>

          <StatusLight />
        </div>

        <div className="mt-5 flex h-[35px] items-end gap-1">
          {[20, 43, 30, 65, 42, 74, 52, 80, 61].map((h, i) => (
            <motion.span
              key={i}
              animate={{
                height: [`${Math.max(15, h - 25)}%`, `${h}%`],
              }}
              transition={{
                duration: 1.5 + i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="flex-1 rounded-t-[2px] bg-[#7046e6]/50"
            />
          ))}
        </div>
      </motion.div>

      {/* MAIN BUILDING */}
      <motion.div
        initial={{ opacity: 0, y: 70, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute bottom-[45px] left-1/2 w-[94%] max-w-[780px] -translate-x-1/2"
      >
        {/* ANTENNA */}
        <div className="relative mx-auto h-[70px] w-px bg-gradient-to-t from-[#7046e6] to-transparent">
          <motion.div
            animate={{
              scale: [1, 1.7, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="absolute -left-[5px] top-0 h-[11px] w-[11px] rounded-full border border-[#7046e6] bg-black shadow-[0_0_20px_#7046e6]"
          />
        </div>

        {/* ROOF */}
        <div className="mx-auto flex w-[78%] items-center justify-between rounded-t-[24px] border border-b-0 border-white/[0.09] bg-[#030303] px-5 py-4">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-dashed border-[#7046e6]/60"
            >
              <Rocket size={15} className="text-[#b9a3f0]" />
            </motion.div>

            <div>
              <p className="font-mono text-[5px] tracking-[0.2em] text-[#9b7aec]">
                AI DEPLOYMENT CONTROL
              </p>

              <p className="mt-1 text-[6px] text-white/25">
                Production release orchestration
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <StatusLight />
            <span className="font-mono text-[5px] text-white/25">
              ONLINE
            </span>
          </div>
        </div>

        {/* BUILDING */}
        <div className="relative overflow-hidden rounded-[30px] border border-[#7046e6]/20 bg-[#070509]/80 p-3 shadow-[0_0_80px_rgba(112,70,230,.15)] backdrop-blur-xl">
          {/* SCANNER */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-0 right-0 z-40 h-px bg-[#7046e6]/70 shadow-[0_0_15px_#7046e6]"
          />

          {/* AI APPLICATION EDGE */}
          <div className="mb-2 rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe2 size={12} className="text-[#9b7aec]" />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  AI APPLICATION EDGE
                </span>
              </div>

              <span className="font-mono text-[5px] text-[#9b7aec]">
                LIVE TRAFFIC
              </span>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
              {["WEB", "API", "AGENT", "APP"].map((item, i) => (
                <motion.div
                  key={item}
                  animate={{
                    borderColor: [
                      "rgba(255,255,255,.06)",
                      "rgba(112,70,230,.4)",
                      "rgba(255,255,255,.06)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.35,
                  }}
                  className="rounded-[9px] border bg-black px-3 py-3 text-center"
                >
                  <span className="font-mono text-[5px] tracking-[0.15em] text-white/35">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* API & TRAFFIC LAYER */}
          <div className="mb-2 rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Network size={12} className="text-[#9b7aec]" />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  API & TRAFFIC LAYER
                </span>
              </div>

              <span className="font-mono text-[5px] text-[#9b7aec]">
                ROUTING
              </span>
            </div>

            <div className="relative mt-4 h-[48px] overflow-hidden rounded-[10px] border border-white/[0.05] bg-black">
              <div className="absolute left-[8%] right-[8%] top-1/2 h-px bg-[#7046e6]/30" />

              {[15, 32, 50, 68, 85].map((left, i) => (
                <motion.div
                  key={left}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25,
                  }}
                  style={{ left: `${left}%` }}
                  className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-[3px] border border-[#7046e6]/60 bg-black"
                />
              ))}

              <motion.div
                animate={{ left: ["8%", "90%", "8%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#d2c4f5] shadow-[0_0_12px_#7046e6]"
              />
            </div>
          </div>

          {/* MODEL RUNTIME */}
          <div className="mb-2 rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BrainCircuit size={12} className="text-[#9b7aec]" />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  MODEL RUNTIME
                </span>
              </div>

              <span className="font-mono text-[5px] text-[#9b7aec]">
                INFERENCE
              </span>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.35] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: i * 0.12,
                  }}
                  className="h-5 rounded-[5px] border border-[#7046e6]/20 bg-[#7046e6]/10"
                />
              ))}
            </div>
          </div>

          {/* AI COMPUTE */}
          <div className="mb-2 rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cpu size={12} className="text-[#9b7aec]" />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  AI COMPUTE
                </span>
              </div>

              <span className="font-mono text-[5px] text-[#9b7aec]">
                ACCELERATED
              </span>
            </div>

            <div className="mt-4 flex gap-2">
              <ServerRack name="GPU-A" delay={0.2} />
              <ServerRack name="GPU-B" delay={0.4} />
              <ServerRack name="GPU-C" delay={0.6} />
              <ServerRack name="GPU-D" delay={0.8} />
            </div>
          </div>

          {/* DATA & VECTOR LAYER */}
          <div className="rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Database size={12} className="text-[#9b7aec]" />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  DATA & VECTOR LAYER
                </span>
              </div>

              <span className="font-mono text-[5px] text-[#9b7aec]">
                CONNECTED
              </span>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
              {["VECTOR", "CACHE", "DATA", "STATE"].map((item, i) => (
                <motion.div
                  key={item}
                  animate={{ opacity: [0.35, 1, 0.35] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="rounded-[8px] border border-white/[0.06] bg-black py-3 text-center"
                >
                  <Database
                    size={10}
                    className="mx-auto text-[#7046e6]"
                  />

                  <span className="mt-2 block font-mono text-[4px] tracking-[0.12em] text-white/25">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto h-[17px] w-[88%] rounded-b-[18px] border-x border-b border-[#7046e6]/20 bg-[#09060b]" />
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ApplicationDeploymentPage() {
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
              Deploy AI into
              <span className="block hyi-blue">
                the real world.
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[830px] hyi-p">
              Engineer production deployment systems for modern AI
              applications — connecting code, models, APIs, compute,
              data and operations through reliable cloud
              infrastructure.
            </p>

            <div className="py-2 flex flex-wrap justify-center gap-2">
              {[
                "AI Applications",
                "Model Runtime",
                "CI/CD",
                "Inference APIs",
                "Containers",
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

          <AIDeploymentInfrastructure />
        </div>
      </section>

      {/* =====================================================
          DEPLOYMENT SYSTEM
      ===================================================== */}
      <section
        id="deployment-system"
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
                Deployment is more
                <span className="block hyi-blue">
                  than shipping code.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                AI applications introduce dependencies that extend
                beyond conventional software. Production systems can
                include model endpoints, retrieval services,
                accelerators, vector stores, data pipelines and
                external tools.
              </p>

              <p className="mt-2 max-w-[590px] hyi-p">
                A strong deployment architecture coordinates these
                elements as one operational system while keeping
                releases repeatable, observable and controlled.
              </p>
            </motion.div>

            <div className="rounded-[32px] border border-white/[0.07] bg-white/[0.025] p-5 md:p-8">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[6px] tracking-[0.18em] text-[#9675ed]">
                    DEPLOYMENT PIPELINE
                  </p>

                  <p className="mt-2 text-[10px] text-white/30">
                    Application → production
                  </p>
                </div>

                <Workflow size={17} className="text-[#9675ed]" />
              </div>

              <div className="space-y-3">
                {deploymentFlow.map(
                  ({ Icon, title, text }, index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{
                        x: 5,
                        borderColor: "rgba(112,70,230,.35)",
                      }}
                      className="grid items-center gap-4 rounded-[20px] border border-white/[0.07] bg-[#080609] p-4 md:grid-cols-[45px_1fr_1fr]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                        <Icon size={14} className="text-[#bba4f6]" />
                      </div>

                      <h3 className="hyi-h3 hyi-white">
                        {title}
                      </h3>

                      <p className="hyi-p">{text}</p>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
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
                Everything AI needs
                <span className="block hyi-blue">
                  to reach production.
                </span>
              </h2>
            </div>

            <p className="max-w-[670px] hyi-p mx-auto">
              Production AI requires application engineering,
              infrastructure, model serving and operational controls
              to work together rather than existing as disconnected
              deployment concerns.
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {deploymentCapabilities.map(
              ({ Icon, title, description }, index) => (
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
                      <Icon size={16} className="text-[#bba4f6]" />
                    </div>
                  </div>

                  <h3 className="mt-2 hyi-h3 hyi-white">
                    {title}
                  </h3>

                  <p className="mt-2 hyi-p">{description}</p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] py-10">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[950px] text-center">
            <h2 className="hyi-h1 hyi-white">
              One application.
              <span className="block hyi-blue">
                Multiple intelligence layers.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-5">
            {architectureStack.map(
              ({ Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative  rounded-[26px] border border-white/[0.07] bg-[#030303]/80 p-6"
                >
                  <Icon size={16} className="text-[#9878ef]" />

                  <h3 className="mt-2 hyi-h3 hyi-white">
                    {title}
                  </h3>

                  <p className="mt-2 hyi-p">{text}</p>

                  {index < architectureStack.length - 1 && (
                    <ArrowRight
                      size={13}
                      className="absolute bottom-6 right-6 hidden text-[#9878ef]/50 lg:block"
                    />
                  )}
                </motion.article>
              ),
            )}
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {[
              {
                Icon: ShieldCheck,
                title: "Security",
                text: "Identity · secrets · policy",
              },
              {
                Icon: Activity,
                title: "Observability",
                text: "Logs · metrics · traces",
              },
              {
                Icon: RefreshCw,
                title: "Automation",
                text: "Deploy · scale · recover",
              },
            ].map(({ Icon, title, text }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-[18px] border border-white/[0.07] bg-[#080609] p-5"
              >
                <Icon size={14} className="text-[#9878ef]" />

                <div>
                  <p className="hyi-p">{title}</p>
                  <p className="mt-1 font-mono text-[5px] tracking-[0.12em] text-white/25">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LIFECYCLE
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                From commit to
                <span className="block hyi-blue">
                  production intelligence.
                </span>
              </h2>

              <p className="mt-2 max-w-[500px] hyi-p">
                Deployment should behave as a continuous engineering
                system. Every release moves through controlled stages
                before becoming part of the production AI environment.
              </p>
            </div>

            <div>
              {lifecycle.map(({ Icon, title, description }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.15fr_0.7fr_1.15fr]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                    <Icon size={15} className="text-[#b69df4]" />
                  </div>

                  <div>
                    <h3 className="mt-2 hyi-h3 hyi-white">
                      {title}
                    </h3>
                  </div>

                  <p className="hyi-p">{description}</p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AI WORKLOADS
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Built for modern
              <span className="block hyi-blue">
                AI applications.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {workloads.map(({ Icon, title, text }, index) => (
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
                    <Icon size={16} className="text-[#bba4f6]" />
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
          PRODUCTION OPERATIONS
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Deployment doesn&apos;t end
              <span className="block hyi-blue">
                when production begins.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[750px] hyi-p">
              Production systems need continuous operational evidence
              across releases, application services, model runtimes
              and infrastructure.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-[1150px] overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#080609]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] p-6">
              <div className="flex items-center gap-3">
                <Gauge size={16} className="text-[#9675ed]" />

                <div>
                  <p className="font-mono text-[6px] tracking-[0.18em] text-[#9675ed]">
                    AI APPLICATION OPERATIONS
                  </p>

                  <p className="mt-1 text-[9px] text-white/25">
                    Illustrative production telemetry
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <StatusLight />

                <span className="font-mono text-[5px] text-white/25">
                  LIVE
                </span>
              </div>
            </div>

            <div className="grid gap-px bg-white/[0.06] md:grid-cols-4">
              {[
                {
                  Icon: Rocket,
                  label: "RELEASE",
                  value: "v24",
                  width: "72%",
                },
                {
                  Icon: Activity,
                  label: "SERVICE HEALTH",
                  value: "OK",
                  width: "91%",
                },
                {
                  Icon: BrainCircuit,
                  label: "AI SERVICES",
                  value: "12",
                  width: "64%",
                },
                {
                  Icon: Network,
                  label: "ENDPOINTS",
                  value: "28",
                  width: "82%",
                },
              ].map(({ Icon, label, value, width }, index) => (
                <div key={label} className="bg-[#080609] p-7">
                  <Icon size={14} className="text-[#9675ed]" />

                  <p className="mt-4 font-mono text-[5px] tracking-[0.16em] text-white/25">
                    {label}
                  </p>

                  <p className="mt-3 text-3xl font-medium text-white/75">
                    {value}
                  </p>

                  <div className="mt-5 h-[2px] overflow-hidden bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.1,
                      }}
                      className="h-full bg-[#7046e6]"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/[0.07] p-6">
              <div className="rounded-[20px] border border-white/[0.06] bg-black p-5">
                <div className="mb-5 flex items-center gap-3">
                  <Terminal size={13} className="text-[#9675ed]" />

                  <span className="font-mono text-[5px] tracking-[0.17em] text-white/25">
                    DEPLOYMENT EVENT STREAM
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    "release / validation completed",
                    "container / production artifact ready",
                    "runtime / new revision deployed",
                    "traffic / production routing updated",
                  ].map((line, index) => (
                    <motion.div
                      key={line}
                      animate={{ opacity: [0.25, 0.8, 0.25] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="flex items-center gap-4 font-mono text-[6px] text-white/30"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#9675ed]" />
                      <span>{line}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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
                Production should
                <span className="block hyi-blue">
                  never be a mystery.
                </span>
              </h2>

              <p className="mt-2 max-w-[470px] hyi-p">
                Reliable AI deployment depends on repeatability,
                visibility and controlled change—not manual release
                procedures that only one engineer understands.
              </p>
            </div>

            <div>
              {principles.map(({ Icon, title, description }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.15fr_0.7fr_1.15fr]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                    <Icon size={15} className="text-[#b69df4]" />
                  </div>

                  <div>
                    <h3 className="mt-2 hyi-h3 hyi-white">
                      {title}
                    </h3>
                  </div>

                  <p className="hyi-p">{description}</p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}