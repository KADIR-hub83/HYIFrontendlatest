"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe2,
  Gauge,
  Layers3,
  Network,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const deploymentCapabilities = [
  {
    Icon: Rocket,
    number: "01",
    title: "AI Application Deployment",
    description:
      "Move AI applications from development environments into reliable production infrastructure with repeatable deployment workflows, runtime controls and operational visibility.",
  },
  {
    Icon: BrainCircuit,
    number: "02",
    title: "Model Runtime",
    description:
      "Deploy model-serving environments designed around inference behavior, application demand, accelerator requirements and model lifecycle management.",
  },
  {
    Icon: Boxes,
    number: "03",
    title: "Containerized AI",
    description:
      "Package application services, AI runtimes and supporting dependencies into portable deployment units that can operate consistently across environments.",
  },
  {
    Icon: Workflow,
    number: "04",
    title: "CI/CD for AI",
    description:
      "Connect code, model and infrastructure changes with automated validation and controlled deployment pipelines for faster production delivery.",
  },
  {
    Icon: Network,
    number: "05",
    title: "Inference APIs",
    description:
      "Expose AI capabilities through scalable service interfaces with routing, traffic management, authentication and observability built into the architecture.",
  },
  {
    Icon: Activity,
    number: "06",
    title: "Production Observability",
    description:
      "Observe application health, infrastructure behavior, latency and AI service performance after deployment so production systems remain understandable.",
  },
];

const deploymentFlow = [
  {
    Icon: Code2,
    step: "01",
    label: "BUILD",
    title: "Application",
    text: "Code + AI logic",
  },
  {
    Icon: GitBranch,
    step: "02",
    label: "VALIDATE",
    title: "Pipeline",
    text: "Test + package",
  },
  {
    Icon: Boxes,
    step: "03",
    label: "PACKAGE",
    title: "Runtime",
    text: "Container + model",
  },
  {
    Icon: Rocket,
    step: "04",
    label: "DEPLOY",
    title: "Production",
    text: "Cloud runtime",
  },
  {
    Icon: Activity,
    step: "05",
    label: "OBSERVE",
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
    tag: "GENERATIVE AI",
    title: "AI Assistants",
    text: "Deploy conversational and task-oriented AI applications with model access, retrieval services and production APIs.",
  },
  {
    Icon: Sparkles,
    tag: "GEN AI",
    title: "RAG Applications",
    text: "Operate retrieval-augmented applications that connect models with vector search, enterprise knowledge and application services.",
  },
  {
    Icon: Globe2,
    tag: "AI API",
    title: "Inference Services",
    text: "Expose production model capabilities through controlled and scalable API endpoints for downstream applications.",
  },
  {
    Icon: Workflow,
    tag: "AGENTIC AI",
    title: "AI Agents",
    text: "Deploy agent runtimes that coordinate models, tools, application state and enterprise services through governed workflows.",
  },
  {
    Icon: Database,
    tag: "DATA + AI",
    title: "Intelligent Data Apps",
    text: "Connect production applications with data platforms, analytics services and AI inference within a unified architecture.",
  },
  {
    Icon: Cpu,
    tag: "AI COMPUTE",
    title: "Accelerated Applications",
    text: "Run computationally intensive AI applications on infrastructure aligned with GPU and high-performance compute requirements.",
  },
];

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
    <div className="relative mx-auto mt-16 h-[760px] w-full max-w-[1250px] overflow-hidden lg:overflow-visible">
      <VerticalPacket left="34%" delay={0} />
      <VerticalPacket left="50%" delay={1.3} />
      <VerticalPacket left="66%" delay={2.5} />

      {/* LEFT FLOAT CARD */}

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-0 top-[34%] z-50 hidden w-[190px] rounded-[20px] border border-white/[0.08] bg-black p-5 xl:block"
      >
        <div className="flex items-center gap-3">
          <GitBranch size={14} className="text-[#9b7aec]" />

          <div>
            <p className="font-mono text-[5px] tracking-[0.18em] text-white/25">
              RELEASE PIPELINE
            </p>

            <p className="mt-1 font-mono text-[7px] text-[#a98cf1]">
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
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute right-0 top-[45%] z-50 hidden w-[190px] rounded-[20px] border border-white/[0.08] bg-black p-5 xl:block"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Activity size={14} className="text-[#9b7aec]" />

            <div>
              <p className="font-mono text-[5px] tracking-[0.18em] text-white/25">
                PROD HEALTH
              </p>

              <p className="mt-1 font-mono text-[7px] text-[#a98cf1]">
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
        initial={{
          opacity: 0,
          y: 70,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
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

        <div className="relative overflow-hidden rounded-[30px] border border-white/[0.1] bg-[#020202] p-3">
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

          {/* FLOOR 5 */}

          <div className="mb-2 rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe2 size={12} className="text-[#9b7aec]" />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  FLOOR 05 / AI APPLICATION EDGE
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

          {/* FLOOR 4 */}

          <div className="mb-2 rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Network size={12} className="text-[#9b7aec]" />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  FLOOR 04 / API & TRAFFIC LAYER
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
                  animate={{
                    scale: [1, 1.4, 1],
                  }}
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

          {/* FLOOR 3 */}

          <div className="mb-2 rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BrainCircuit size={12} className="text-[#9b7aec]" />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  FLOOR 03 / MODEL RUNTIME
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
                  animate={{
                    opacity: [0.2, 1, 0.35],
                  }}
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

          {/* FLOOR 2 */}

          <div className="mb-2 rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cpu size={12} className="text-[#9b7aec]" />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  FLOOR 02 / AI COMPUTE
                </span>
              </div>

              <span className="font-mono text-[5px] text-[#9b7aec]">
                ACCELERATED
              </span>
            </div>

            <div className="mt-4 flex gap-2">
              <ServerRack name="GPU-01" delay={0.2} />
              <ServerRack name="GPU-02" delay={0.4} />
              <ServerRack name="GPU-03" delay={0.6} />
              <ServerRack name="GPU-04" delay={0.8} />
            </div>
          </div>

          {/* FLOOR 1 */}

          <div className="rounded-[20px] border border-white/[0.06] bg-[#050505] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Database size={12} className="text-[#9b7aec]" />

                <span className="font-mono text-[5px] tracking-[0.18em] text-white/30">
                  FLOOR 01 / DATA & VECTOR LAYER
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
                  animate={{
                    opacity: [0.35, 1, 0.35],
                  }}
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

        <div className="mx-auto h-[17px] w-[88%] rounded-b-[18px] border-x border-b border-white/[0.08] bg-[#050505]" />
      </motion.div>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ApplicationDeploymentPage() {
  return (
    <main className="overflow-hidden bg-[#000000] text-white selection:bg-[#7046e6] selection:text-white">
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#000000] px-5 pb-24 pt-32 md:px-10 md:pt-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 78%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 78%)",
          }}
        />

        <div className="relative mx-auto max-w-[1500px]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mx-auto max-w-[1250px] text-center"
          >
            <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2">
              <StatusLight />

              <span className="font-mono text-[7px] tracking-[0.27em] text-white/40">
                HYI.AI / AI CLOUD / APPLICATION DEPLOYMENT
              </span>
            </div>

            <h1 className="mt-9 text-[clamp(4rem,8.7vw,9rem)] font-semibold leading-[0.84] tracking-[-0.078em]">
              Deploy AI into
              <span className="block text-[#cbbbf4]">
                the real world.
              </span>
            </h1>

            <p className="mx-auto mt-9 max-w-[900px] text-[13px] leading-7 text-white/[0.5] md:text-[15px] md:leading-8">
              Engineer production deployment systems for modern AI
              applications — connecting code, models, APIs, compute,
              data and operations through reliable cloud
              infrastructure.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-2">
              {[
                "AI Applications",
                "Model Runtime",
                "CI/CD",
                "Inference APIs",
                "Containers",
                "Observability",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-black px-4 py-2.5 font-mono text-[6px] tracking-[0.16em] text-white/[0.35]"
                >
                  {item.toUpperCase()}
                </span>
              ))}
            </div>
          </motion.div>

          <AIDeploymentInfrastructure />

          <a
            href="#deployment-system"
            className="mx-auto flex w-fit items-center gap-3 font-mono text-[7px] tracking-[0.2em] text-white/30"
          >
            EXPLORE DEPLOYMENT SYSTEM
            <ArrowDown size={11} />
          </a>
        </div>
      </section>

      {/* =====================================================
          DEPLOYMENT SYSTEM
      ===================================================== */}

      <section
        id="deployment-system"
        className="border-y border-white/[0.07] bg-[#000000] py-28 md:py-40"
      >
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-[7px] tracking-[0.28em] text-[#9675ed]">
                01 / PRODUCTION SYSTEM
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
                Deployment is more
                <span className="block text-[#cbbbf4]">
                  than shipping code.
                </span>
              </h2>

              <p className="mt-8 max-w-[560px] text-[13px] leading-7 text-white/[0.48]">
                AI applications introduce dependencies that extend
                beyond conventional software. Production systems can
                include model endpoints, retrieval services,
                accelerators, vector stores, data pipelines and
                external tools.
              </p>

              <p className="mt-5 max-w-[560px] text-[13px] leading-7 text-white/[0.4]">
                A strong deployment architecture coordinates these
                elements as one operational system while keeping
                releases repeatable, observable and controlled.
              </p>
            </motion.div>

            <div className="rounded-[32px] border border-white/[0.08] bg-[#030303] p-5 md:p-8">
              <div className="mb-8 flex items-center justify-between">
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
                  ({ Icon, step, label, title, text }, index) => (
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
                      className="grid items-center gap-4 rounded-[20px] border border-white/[0.07] bg-black p-4 md:grid-cols-[45px_1fr_1fr_35px]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                        <Icon size={14} className="text-[#b9a3f0]" />
                      </div>

                      <div>
                        <p className="font-mono text-[5px] tracking-[0.16em] text-[#9675ed]">
                          {label}
                        </p>

                        <h3 className="mt-1.5 text-[14px] font-medium">
                          {title}
                        </h3>
                      </div>

                      <p className="text-[10px] text-white/30">{text}</p>

                      <span className="font-mono text-[6px] text-white/20">
                        {step}
                      </span>
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

      <section className="bg-[#000000] py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="max-w-[1050px]">
            <p className="font-mono text-[7px] tracking-[0.28em] text-[#9675ed]">
              02 / DEPLOYMENT CAPABILITIES
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Everything AI needs
              <span className="block text-[#cbbbf4]">
                to reach production.
              </span>
            </h2>

            <p className="mt-8 max-w-[760px] text-[13px] leading-7 text-white/[0.45]">
              Production AI requires application engineering,
              infrastructure, model serving and operational controls
              to work together rather than existing as disconnected
              deployment concerns.
            </p>
          </div>

          <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {deploymentCapabilities.map(
              ({ Icon, number, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{
                    y: -7,
                    borderColor: "rgba(112,70,230,.4)",
                  }}
                  className="min-h-[370px] rounded-[30px] border border-white/[0.07] bg-[#030303] p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                      <Icon size={16} className="text-[#b9a3f0]" />
                    </div>

                    <span className="font-mono text-[6px] tracking-[0.18em] text-white/20">
                      {number}
                    </span>
                  </div>

                  <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                    {title}
                  </h3>

                  <p className="mt-5 text-[12px] leading-7 text-white/[0.45]">
                    {description}
                  </p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ===================================================== */}

      <section className="border-y border-white/[0.07] bg-[#000000] py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="mx-auto max-w-[1050px] text-center">
            <p className="font-mono text-[7px] tracking-[0.28em] text-[#9675ed]">
              03 / APPLICATION ARCHITECTURE
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              One application.
              <span className="block text-[#cbbbf4]">
                Multiple intelligence layers.
              </span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 max-w-[1150px] rounded-[34px] border border-white/[0.08] bg-[#020202] p-6 md:p-9"
          >
            <div className="grid gap-3 lg:grid-cols-5">
              {[
                {
                  Icon: Globe2,
                  label: "EXPERIENCE",
                  title: "AI Application",
                },
                {
                  Icon: Network,
                  label: "INTERFACE",
                  title: "API Gateway",
                },
                {
                  Icon: BrainCircuit,
                  label: "INTELLIGENCE",
                  title: "Model Runtime",
                },
                {
                  Icon: Cpu,
                  label: "EXECUTION",
                  title: "AI Compute",
                },
                {
                  Icon: Database,
                  label: "CONTEXT",
                  title: "Data Layer",
                },
              ].map(({ Icon, label, title }, index) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -6 }}
                  className="relative min-h-[220px] rounded-[22px] border border-white/[0.07] bg-black p-5"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={16} className="text-[#9675ed]" />

                    <span className="font-mono text-[5px] text-white/15">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-16 font-mono text-[5px] tracking-[0.17em] text-[#9675ed]">
                    {label}
                  </p>

                  <h3 className="mt-3 text-[17px] font-medium">{title}</h3>

                  {index < 4 && (
                    <motion.div
                      animate={{ x: [0, 7, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -right-[10px] top-1/2 z-20 hidden lg:block"
                    >
                      <ArrowRight size={12} className="text-[#7046e6]" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
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
                  className="flex items-center gap-4 rounded-[18px] border border-white/[0.07] bg-black p-5"
                >
                  <Icon size={14} className="text-[#9675ed]" />

                  <div>
                    <p className="text-[11px] text-white/60">{title}</p>
                    <p className="mt-1 font-mono text-[5px] tracking-[0.12em] text-white/20">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          LIFECYCLE
      ===================================================== */}

      <section className="bg-[#000000] py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-[7px] tracking-[0.28em] text-[#9675ed]">
                04 / DEPLOYMENT LIFECYCLE
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
                From commit to
                <span className="block text-[#cbbbf4]">
                  production intelligence.
                </span>
              </h2>

              <p className="mt-8 max-w-[500px] text-[13px] leading-7 text-white/[0.45]">
                Deployment should behave as a continuous engineering
                system. Every release moves through controlled stages
                before becoming part of the production AI environment.
              </p>
            </div>

            <div>
              {lifecycle.map(({ Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid gap-5 border-t border-white/[0.07] py-7 md:grid-cols-[60px_0.55fr_1.25fr]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                    <Icon size={15} className="text-[#b9a3f0]" />
                  </div>

                  <div>
                    <p className="font-mono text-[5px] tracking-[0.18em] text-white/20">
                      STAGE 0{index + 1}
                    </p>

                    <h3 className="mt-2 text-xl font-medium">{title}</h3>
                  </div>

                  <p className="text-[12px] leading-7 text-white/[0.43]">
                    {description}
                  </p>
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

      <section className="border-y border-white/[0.07] bg-[#000000] py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="max-w-[1000px]">
            <p className="font-mono text-[7px] tracking-[0.28em] text-[#9675ed]">
              05 / DEPLOYABLE AI SYSTEMS
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Built for modern
              <span className="block text-[#cbbbf4]">
                AI applications.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {workloads.map(({ Icon, tag, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -7,
                  borderColor: "rgba(112,70,230,.4)",
                }}
                className="min-h-[330px] rounded-[29px] border border-white/[0.07] bg-[#030303] p-7"
              >
                <div className="flex items-center justify-between">
                  <Icon size={18} className="text-[#9675ed]" />

                  <span className="font-mono text-[5px] tracking-[0.17em] text-[#9675ed]">
                    {tag}
                  </span>
                </div>

                <h3 className="mt-16 text-2xl font-medium">{title}</h3>

                <p className="mt-5 text-[12px] leading-7 text-white/[0.43]">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OPERATIONS DASHBOARD
      ===================================================== */}

      <section className="bg-[#000000] py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <p className="font-mono text-[7px] tracking-[0.28em] text-[#9675ed]">
              06 / PRODUCTION OPERATIONS
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Deployment doesn&apos;t end
              <span className="block text-[#cbbbf4]">
                when production begins.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-[750px] text-[13px] leading-7 text-white/[0.45]">
              Production systems need continuous operational evidence
              across releases, application services, model runtimes
              and infrastructure.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 max-w-[1150px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#020202]"
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
                <div key={label} className="bg-[#020202] p-7">
                  <Icon size={14} className="text-[#9675ed]" />

                  <p className="mt-12 font-mono text-[5px] tracking-[0.16em] text-white/25">
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
                      animate={{
                        opacity: [0.25, 0.8, 0.25],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="flex items-center gap-4 font-mono text-[6px] text-white/30"
                    >
                      <span className="text-[#9675ed]">0{index + 1}</span>
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

      <section className="border-y border-white/[0.07] bg-[#000000] py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <p className="font-mono text-[7px] tracking-[0.28em] text-[#9675ed]">
                07 / DEPLOYMENT PRINCIPLES
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
                Production should
                <span className="block text-[#cbbbf4]">
                  never be a mystery.
                </span>
              </h2>

              <p className="mt-8 max-w-[480px] text-[13px] leading-7 text-white/[0.45]">
                Reliable AI deployment depends on repeatability,
                visibility and controlled change—not manual release
                procedures that only one engineer understands.
              </p>
            </div>

            <div>
              {principles.map(({ Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-6 border-t border-white/[0.07] py-8 md:grid-cols-[70px_0.7fr_1.2fr]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                    <Icon size={15} className="text-[#b9a3f0]" />
                  </div>

                  <div>
                    <span className="font-mono text-[6px] tracking-[0.18em] text-white/20">
                      PRINCIPLE 0{index + 1}
                    </span>

                    <h3 className="mt-3 text-xl font-medium">{title}</h3>
                  </div>

                  <p className="text-[12px] leading-7 text-white/[0.43]">
                    {description}
                  </p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#000000] px-5 py-36 md:px-10 md:py-52">
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(circle at center,black,transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(circle at center,black,transparent 72%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-[1250px] text-center"
        >
          <motion.div
            animate={{
              borderColor: [
                "rgba(112,70,230,.2)",
                "rgba(112,70,230,.7)",
                "rgba(112,70,230,.2)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-[25px] border bg-black"
          >
            <Rocket
              size={31}
              strokeWidth={1.2}
              className="text-[#cbbbf4]"
            />
          </motion.div>

          <p className="mt-10 font-mono text-[7px] tracking-[0.28em] text-[#9675ed]">
            HYI.AI / AI APPLICATION DEPLOYMENT
          </p>

          <h2 className="mt-7 text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
            Build intelligence.
            <span className="block text-[#cbbbf4]">
              Ship it reliably.
            </span>
          </h2>

          <p className="mx-auto mt-9 max-w-[800px] text-[13px] leading-7 text-white/[0.45] md:text-[14px]">
            Connect application engineering, AI runtimes, cloud
            infrastructure and production operations through a
            deployment architecture designed for modern intelligent
            systems.
          </p>

          <div className="mx-auto mt-14 h-px max-w-[780px] bg-white/[0.08]" />

          <div className="mt-10 flex flex-wrap justify-center gap-x-9 gap-y-4">
            {[
              "AI APPS",
              "MODEL RUNTIME",
              "CI/CD",
              "INFERENCE",
              "COMPUTE",
              "OBSERVABILITY",
            ].map((item) => (
              <span
                key={item}
                className="font-mono text-[6px] tracking-[0.2em] text-white/[0.23]"
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