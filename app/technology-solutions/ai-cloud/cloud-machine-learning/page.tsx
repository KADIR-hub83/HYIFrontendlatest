"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Gauge,
  GitBranch,
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
   PAGE DATA
========================================================= */

const capabilities = [
  {
    Icon: Database,
    number: "01",
    title: "Data Foundation",
    text: "Connect cloud storage, enterprise databases and governed datasets to create reliable foundations for machine learning workloads.",
  },
  {
    Icon: Cpu,
    number: "02",
    title: "Model Training",
    text: "Design scalable training environments capable of supporting experimentation, distributed compute and evolving model requirements.",
  },
  {
    Icon: Workflow,
    number: "03",
    title: "ML Pipelines",
    text: "Create repeatable workflows for data preparation, training, validation, deployment and operational monitoring.",
  },
  {
    Icon: Cloud,
    number: "04",
    title: "Cloud Deployment",
    text: "Deploy machine learning workloads through cloud-native infrastructure designed around availability, scalability and maintainability.",
  },
  {
    Icon: ShieldCheck,
    number: "05",
    title: "ML Governance",
    text: "Establish visibility, ownership and operational controls around models, data, access and machine learning lifecycle processes.",
  },
  {
    Icon: Activity,
    number: "06",
    title: "Model Monitoring",
    text: "Observe production models and supporting infrastructure to identify operational degradation and changing model behaviour.",
  },
];

const architectureLayers = [
  {
    Icon: Database,
    step: "LAYER 01",
    title: "Data",
    text: "Cloud storage, warehouses, databases, streaming systems and governed enterprise datasets.",
  },
  {
    Icon: GitBranch,
    step: "LAYER 02",
    title: "Engineering",
    text: "Preparation, transformation, feature workflows and reusable data pipelines.",
  },
  {
    Icon: BrainCircuit,
    step: "LAYER 03",
    title: "Machine Learning",
    text: "Experimentation, training, validation, model management and evaluation.",
  },
  {
    Icon: Server,
    step: "LAYER 04",
    title: "Serving",
    text: "Online inference, batch prediction, APIs and application integration.",
  },
  {
    Icon: Activity,
    step: "LAYER 05",
    title: "Operations",
    text: "Monitoring, governance, observability and continuous lifecycle management.",
  },
];

const lifecycle = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the business problem, available information and the role machine learning should play.",
  },
  {
    number: "02",
    title: "Prepare",
    text: "Build reliable data preparation and feature engineering workflows for experimentation.",
  },
  {
    number: "03",
    title: "Train",
    text: "Use cloud compute resources to develop, compare and validate candidate models.",
  },
  {
    number: "04",
    title: "Deploy",
    text: "Package and release selected models into production-ready serving environments.",
  },
  {
    number: "05",
    title: "Observe",
    text: "Monitor operational behaviour, data quality and relevant model signals after deployment.",
  },
];

const useCases = [
  {
    Icon: Sparkles,
    tag: "PERSONALIZATION",
    title: "Recommendation systems",
    text: "Create machine learning services that use behavioural and contextual data to support personalized digital experiences.",
  },
  {
    Icon: Gauge,
    tag: "PREDICTION",
    title: "Predictive intelligence",
    text: "Use historical and operational data to support forecasting, classification and predictive decision systems.",
  },
  {
    Icon: ShieldCheck,
    tag: "RISK",
    title: "Risk & anomaly detection",
    text: "Build models that help surface unusual patterns, suspicious events and operational anomalies from large datasets.",
  },
  {
    Icon: BrainCircuit,
    tag: "INTELLIGENCE",
    title: "Intelligent applications",
    text: "Integrate trained models into digital products, enterprise applications and automated business workflows.",
  },
  {
    Icon: Zap,
    tag: "REAL TIME",
    title: "Real-time inference",
    text: "Serve predictions through scalable endpoints for applications that require low-latency machine learning decisions.",
  },
  {
    Icon: Layers3,
    tag: "ENTERPRISE ML",
    title: "Shared ML platforms",
    text: "Create reusable cloud foundations that allow multiple machine learning teams and products to share infrastructure patterns.",
  },
];

const principles = [
  {
    Icon: Layers3,
    title: "Platform before isolated models",
    text: "Treat machine learning as an engineering capability supported by reusable infrastructure rather than a collection of disconnected experiments.",
  },
  {
    Icon: LockKeyhole,
    title: "Governance by design",
    text: "Build access controls, ownership and lifecycle visibility into the platform instead of introducing them only after deployment.",
  },
  {
    Icon: Activity,
    title: "Production observability",
    text: "Operational machine learning needs visibility into infrastructure, data pipelines and model behaviour after release.",
  },
  {
    Icon: Cloud,
    title: "Elastic infrastructure",
    text: "Separate workload requirements from fixed infrastructure by designing for scalable cloud compute and storage patterns.",
  },
];

const outcomes = [
  {
    Icon: Workflow,
    title: "Repeatable ML delivery",
    text: "Move from manually coordinated experiments toward consistent engineering workflows.",
  },
  {
    Icon: Network,
    title: "Connected lifecycle",
    text: "Bring data, model development, infrastructure and operations into one coherent platform strategy.",
  },
  {
    Icon: ShieldCheck,
    title: "Controlled production",
    text: "Introduce stronger ownership and operational discipline as machine learning adoption expands.",
  },
  {
    Icon: Sparkles,
    title: "AI-ready foundation",
    text: "Create infrastructure that can support new predictive and intelligent application requirements.",
  },
];

/* =========================================================
   BACKGROUND
========================================================= */

function PurpleAtmosphere({
  position = "right",
}: {
  position?: "left" | "right" | "center";
}) {
  const positionClass =
    position === "left"
      ? "-left-[350px]"
      : position === "center"
        ? "left-1/2 -translate-x-1/2"
        : "-right-[350px]";

  return (
    <div
      className={`pointer-events-none absolute ${positionClass} top-1/2 h-[750px] w-[750px] -translate-y-1/2 rounded-full bg-[#390b44]/60 blur-[180px]`}
    />
  );
}

/* =========================================================
   HERO VISUAL
   Only visual/model-style element on the page
========================================================= */

function MLHeroVisual() {
  const nodes = [
    { x: "12%", y: "24%", size: 9 },
    { x: "22%", y: "67%", size: 7 },
    { x: "35%", y: "38%", size: 8 },
    { x: "48%", y: "76%", size: 6 },
    { x: "61%", y: "25%", size: 8 },
    { x: "74%", y: "58%", size: 7 },
    { x: "87%", y: "30%", size: 9 },
    { x: "89%", y: "78%", size: 6 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 45, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.15 }}
      className="relative mx-auto mt-16 max-w-[1360px]"
    >
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/25 blur-[150px]" />

      <div className="relative overflow-hidden rounded-[36px] border border-white/[0.09] bg-[#140819]/80 shadow-[0_50px_160px_rgba(0,0,0,.5)] backdrop-blur-xl">
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 md:px-7">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#7046e6]" />
          </div>

          <span className="hidden font-mono text-[7px] tracking-[0.25em] text-white/[0.3] md:block">
            CLOUD MACHINE LEARNING / PLATFORM GRAPH
          </span>

          <div className="flex items-center gap-2">
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-[#cbb7ff]"
            />

            <span className="font-mono text-[6px] tracking-[0.18em] text-[#cbb7ff]">
              ACTIVE
            </span>
          </div>
        </div>

        <div className="relative min-h-[500px] overflow-hidden md:min-h-[610px]">
          {/* grid */}
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(circle at center, black, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black, transparent 80%)",
            }}
          />

          {/* big rings */}
          <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 md:h-[500px] md:w-[500px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-[#7046e6]/20"
            >
              <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 rounded-full bg-[#d5c7ff] shadow-[0_0_25px_#7046e6]" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 23,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[55px] rounded-full border border-white/[0.08]"
            >
              <span className="absolute bottom-[8%] right-[7%] h-2 w-2 rounded-full bg-[#7046e6] shadow-[0_0_20px_#7046e6]" />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                boxShadow: [
                  "0 0 30px rgba(112,70,230,.15)",
                  "0 0 100px rgba(112,70,230,.45)",
                  "0 0 30px rgba(112,70,230,.15)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-1/2 top-1/2 flex h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#9c7bf1]/40 bg-[#180d1d]/95 md:h-[180px] md:w-[180px]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#7046e6]/30 bg-[#7046e6]/15 md:h-14 md:w-14">
                <BrainCircuit
                  size={24}
                  className="text-[#e2d8ff]"
                />
              </div>

              <span className="mt-4 text-[11px] font-medium text-[#f4efff] md:text-[13px]">
                ML Core
              </span>

              <span className="mt-1 font-mono text-[5px] tracking-[0.2em] text-[#a98cf0]">
                CLOUD NATIVE
              </span>
            </motion.div>
          </div>

          {/* nodes */}
          {nodes.map((node, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, index % 2 === 0 ? -8 : 8, 0],
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 3 + index * 0.15,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="absolute rounded-full bg-[#c9b7fa] shadow-[0_0_22px_#7046e6]"
              style={{
                left: node.x,
                top: node.y,
                width: node.size,
                height: node.size,
              }}
            />
          ))}

          {/* floating labels */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-[6%] top-[43%] hidden rounded-2xl border border-white/[0.08] bg-[#180d1d]/85 p-4 backdrop-blur-xl md:block"
          >
            <Database size={14} className="text-[#a98cf0]" />
            <p className="mt-3 text-[9px] text-[#f4efff]">
              Training Data
            </p>
            <p className="mt-1 font-mono text-[5px] text-white/[0.3]">
              PREPARED
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: 0.4,
            }}
            className="absolute right-[6%] top-[43%] hidden rounded-2xl border border-white/[0.08] bg-[#180d1d]/85 p-4 backdrop-blur-xl md:block"
          >
            <Cloud size={14} className="text-[#a98cf0]" />
            <p className="mt-3 text-[9px] text-[#f4efff]">
              Model Serving
            </p>
            <p className="mt-1 font-mono text-[5px] text-white/[0.3]">
              DEPLOYED
            </p>
          </motion.div>

          {/* bottom metrics */}
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2 md:bottom-7 md:left-7 md:right-7 md:grid-cols-4">
            {[
              ["DATA", "CONNECTED"],
              ["TRAINING", "SCALABLE"],
              ["SERVING", "MANAGED"],
              ["LIFECYCLE", "OBSERVABLE"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/[0.07] bg-[#120916]/75 px-4 py-3 backdrop-blur-xl"
              >
                <p className="font-mono text-[5px] tracking-[0.2em] text-white/[0.25]">
                  {label}
                </p>

                <p className="mt-2 text-[8px] text-[#cbb7ff]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function CloudMachineLearningPage() {
  return (
    <main className="overflow-hidden bg-[#160818] text-[#f4efff] selection:bg-[#7046e6] selection:text-white">
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-32 md:px-10 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#140717_0%,#25092c_48%,#160818_100%)]" />

        <div className="absolute left-1/2 top-[30%] h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full  blur-[180px]" />

        <div className="absolute -left-[350px] top-[35%] h-[700px] w-[700px] rounded-full  blur-[190px]" />

        <div className="absolute -right-[300px] top-[10%] h-[700px] w-[700px] rounded-full  blur-[180px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(circle at 50% 35%,black,transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 35%,black,transparent 75%)",
          }}
        />

        <div className="relative mx-auto max-w-[1500px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-[1150px] text-center"
          >
            <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-[#a88af3]"
              />

              <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#d1c2f8]">
                HYI.AI / AI CLOUD / CLOUD MACHINE LEARNING
              </span>
            </div>

            <h1 className="mt-9 text-[clamp(4.2rem,9vw,9.2rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-[#f4efff]">
              Machine learning,
              <span className="block text-[#cdbbf8]">
                built for the cloud.
              </span>
            </h1>

            <p className="mx-auto mt-9 max-w-[820px] text-[13px] leading-7 text-[#e9def5]/60 md:text-[15px] md:leading-8">
              Build cloud machine learning foundations that connect data,
              scalable compute, model development and production operations
              into one reliable engineering lifecycle.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-2">
              {[
                "Cloud ML",
                "Model Training",
                "ML Pipelines",
                "Model Serving",
                "ML Operations",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/[0.09] bg-white/[0.035] px-4 py-2.5 font-mono text-[6px] tracking-[0.18em] text-[#d8c9f5]/60"
                >
                  {item.toUpperCase()}
                </div>
              ))}
            </div>
          </motion.div>

          <MLHeroVisual />

          <a
            href="#foundation"
            className="mx-auto mt-10 flex w-fit items-center gap-3 font-mono text-[7px] tracking-[0.24em] text-[#d8c9f5]/40"
          >
            EXPLORE THE PLATFORM
            <ArrowDown size={11} />
          </a>
        </div>
      </section>

      {/* =====================================================
          FOUNDATION
      ===================================================== */}
      <section
        id="foundation"
        className="relative overflow-hidden border-y border-white/[0.07] bg-[#1b091f] py-28 md:py-36"
      >
        <PurpleAtmosphere position="left" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-[7px] tracking-[0.3em] text-[#a78aef]">
                01 / THE FOUNDATION
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
                From ML experiment
                <span className="block text-[#cdbbf8]">
                  to ML system.
                </span>
              </h2>

              <p className="mt-8 max-w-[590px] text-[13px] leading-7 text-[#eadff5]/55">
                Building a model is only one part of machine learning. A
                production platform also needs reliable data workflows,
                scalable infrastructure, deployment patterns, governance and
                continuous operational visibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {[
                {
                  Icon: Database,
                  title: "Data",
                  text: "Reliable training and inference data connected through intentional platform architecture.",
                },
                {
                  Icon: Cpu,
                  title: "Compute",
                  text: "Cloud infrastructure aligned with experimentation, training and production inference workloads.",
                },
                {
                  Icon: BrainCircuit,
                  title: "Models",
                  text: "Structured development workflows for evaluating, managing and releasing machine learning models.",
                },
                {
                  Icon: Activity,
                  title: "Operations",
                  text: "Monitoring and lifecycle processes that continue after models reach production.",
                },
              ].map(({ Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(167,138,239,.3)",
                  }}
                  className="min-h-[250px] rounded-[26px] border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/30 bg-[#7046e6]/10">
                      <Icon size={15} className="text-[#c8b4f8]" />
                    </div>

                    <span className="font-mono text-[6px] text-white/[0.2]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-medium">{title}</h3>

                  <p className="mt-4 text-[11px] leading-6 text-[#e8dcf2]/50">
                    {text}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#150717] py-28 md:py-36">
        <PurpleAtmosphere position="right" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-[900px]">
              <p className="font-mono text-[7px] tracking-[0.3em] text-[#a78aef]">
                02 / CLOUD ML CAPABILITIES
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
                The engineering around
                <span className="block text-[#cdbbf8]">
                  machine intelligence.
                </span>
              </h2>
            </div>

            <p className="max-w-[470px] text-[13px] leading-7 text-[#eadff5]/50">
              Connect the technologies and operational disciplines required to
              take machine learning beyond isolated notebooks and into
              maintainable cloud systems.
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
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    y: -7,
                    borderColor: "rgba(112,70,230,.45)",
                  }}
                  className="group min-h-[330px] rounded-[28px] border border-white/[0.075] bg-[#1d0b21]/75 p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/30 bg-[#7046e6]/10 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={16} className="text-[#c8b5f8]" />
                    </div>

                    <span className="font-mono text-[6px] tracking-[0.2em] text-[#a78aef]/60">
                      {number}
                    </span>
                  </div>

                  <h3 className="mt-16 text-2xl font-medium tracking-[-0.025em]">
                    {title}
                  </h3>

                  <p className="mt-5 text-[12px] leading-7 text-[#eadff5]/50">
                    {text}
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
      <section className="relative overflow-hidden border-y border-white/[0.07] bg-[#200b25] py-28 md:py-36">
        <PurpleAtmosphere position="center" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#a78aef]">
              03 / PLATFORM ARCHITECTURE
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              One connected
              <span className="text-[#cdbbf8]"> ML stack.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-[720px] text-[13px] leading-7 text-[#eadff5]/50">
              Machine learning becomes easier to operate when data, engineering,
              models, serving and production operations are designed as
              connected layers.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-[1200px]">
            {architectureLayers.map(
              ({ Icon, step, title, text }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: index % 2 ? 25 : -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group grid gap-5 border-t border-white/[0.08] py-8 transition-colors hover:bg-white/[0.025] md:grid-cols-[0.25fr_0.65fr_1.1fr]"
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={15}
                      className="text-[#a78aef]"
                    />

                    <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.3]">
                      {step}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium tracking-[-0.03em]">
                    {title}
                  </h3>

                  <p className="max-w-[620px] text-[12px] leading-7 text-[#eadff5]/48">
                    {text}
                  </p>
                </motion.div>
              ),
            )}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* =====================================================
          TRAINING + COMPUTE
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#140716] py-28 md:py-36">
        <PurpleAtmosphere position="left" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-[7px] tracking-[0.3em] text-[#a78aef]">
                04 / TRAINING INFRASTRUCTURE
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
                Compute that follows
                <span className="block text-[#cdbbf8]">
                  the workload.
                </span>
              </h2>

              <p className="mt-8 max-w-[580px] text-[13px] leading-7 text-[#eadff5]/52">
                Experimentation and model training can create very different
                infrastructure demands. Cloud architecture provides a way to
                align compute resources with changing workload requirements
                instead of designing every environment around fixed capacity.
              </p>

              <div className="mt-10 space-y-3">
                {[
                  "CPU and accelerator-aware workload design",
                  "Scalable training environments",
                  "Reusable experiment infrastructure",
                  "Cloud storage integration",
                  "Controlled model artifacts",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-[16px] border border-white/[0.075] bg-white/[0.025] px-5 py-4"
                  >
                    <CheckCircle2
                      size={13}
                      className="shrink-0 text-[#a98cf0]"
                    />

                    <span className="text-[11px] text-[#eadff5]/55">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {[
                {
                  Icon: Cpu,
                  title: "Training Compute",
                  text: "Provision compute environments aligned with model size, experimentation patterns and training requirements.",
                },
                {
                  Icon: Database,
                  title: "Data Access",
                  text: "Keep training workflows connected to governed and reusable enterprise data foundations.",
                },
                {
                  Icon: Orbit,
                  title: "Experimentation",
                  text: "Support iterative development without turning temporary experiments into unmanaged production infrastructure.",
                },
                {
                  Icon: Server,
                  title: "Model Artifacts",
                  text: "Maintain intentional handling of trained models and the artifacts required for downstream deployment.",
                },
              ].map(({ Icon, title, text }, index) => (
                <motion.div
                  key={title}
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255,255,255,.045)",
                  }}
                  className="min-h-[290px] rounded-[26px] border border-white/[0.08] bg-[#1e0b22]/70 p-7"
                >
                  <Icon size={18} className="text-[#b49bf3]" />

                  <span className="mt-10 block font-mono text-[6px] tracking-[0.2em] text-white/[0.22]">
                    COMPUTE 0{index + 1}
                  </span>

                  <h3 className="mt-4 text-xl font-medium">{title}</h3>

                  <p className="mt-5 text-[11px] leading-6 text-[#eadff5]/48">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIFECYCLE
      ===================================================== */}
      <section className="relative overflow-hidden border-y border-white/[0.07] bg-[#1d0921] py-28 md:py-36">
        <PurpleAtmosphere position="right" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="max-w-[900px]">
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#a78aef]">
              05 / MACHINE LEARNING LIFECYCLE
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Models move through
              <span className="block text-[#cdbbf8]">
                a lifecycle.
              </span>
            </h2>

            <p className="mt-7 max-w-[700px] text-[13px] leading-7 text-[#eadff5]/50">
              Production machine learning is a continuous engineering process,
              not a one-time deployment event.
            </p>
          </div>

          <div className="mt-16 grid gap-3 lg:grid-cols-5">
            {lifecycle.map(({ number, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="relative min-h-[310px] overflow-hidden rounded-[25px] border border-white/[0.08] bg-[#160719]/75 p-6"
              >
                <div className="absolute right-[-25px] top-[-30px] h-28 w-28 rounded-full bg-[#7046e6]/15 blur-[45px]" />

                <span className="font-mono text-[7px] tracking-[0.2em] text-[#a98cf0]">
                  {number}
                </span>

                <div className="mt-12 h-px bg-gradient-to-r from-[#7046e6]/60 to-transparent" />

                <h3 className="mt-8 text-xl font-medium">{title}</h3>

                <p className="mt-5 text-[11px] leading-6 text-[#eadff5]/48">
                  {text}
                </p>

                {index < lifecycle.length - 1 && (
                  <ArrowRight
                    size={13}
                    className="absolute bottom-6 right-6 hidden text-[#a98cf0]/50 lg:block"
                  />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTION ML
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#140716] py-28 md:py-36">
        <PurpleAtmosphere position="center" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-[7px] tracking-[0.3em] text-[#a78aef]">
                06 / PRODUCTION ML
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
                Deployment is
                <span className="block text-[#cdbbf8]">
                  the beginning.
                </span>
              </h2>

              <p className="mt-8 max-w-[570px] text-[13px] leading-7 text-[#eadff5]/50">
                Once a model becomes part of a production application, the
                surrounding system needs the same operational discipline
                expected from other critical cloud workloads.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {[
                {
                  Icon: Server,
                  title: "Model serving",
                  text: "Expose models through intentional serving patterns that fit application latency and throughput requirements.",
                },
                {
                  Icon: Activity,
                  title: "Operational monitoring",
                  text: "Observe availability, infrastructure behaviour and relevant model signals after production deployment.",
                },
                {
                  Icon: GitBranch,
                  title: "Version control",
                  text: "Maintain traceability between model artifacts, engineering workflows and deployment releases.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Production governance",
                  text: "Define access, ownership and operational responsibilities for models used by business applications.",
                },
              ].map(({ Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{
                    borderColor: "rgba(112,70,230,.4)",
                  }}
                  className="min-h-[280px] rounded-[26px] border border-white/[0.08] bg-[#1e0b22]/65 p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={17} className="text-[#b69df4]" />

                    <span className="font-mono text-[6px] text-white/[0.2]">
                      PROD 0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-12 text-xl font-medium">{title}</h3>

                  <p className="mt-5 text-[11px] leading-6 text-[#eadff5]/48">
                    {text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ===================================================== */}
      <section className="relative overflow-hidden border-y border-white/[0.07] bg-[#200b25] py-28 md:py-36">
        <PurpleAtmosphere position="left" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#a78aef]">
              07 / CLOUD ML USE CASES
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Machine learning where
              <span className="block text-[#cdbbf8]">
                applications need it.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map(({ Icon, tag, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(112,70,230,.42)",
                }}
                className="min-h-[350px] rounded-[28px] border border-white/[0.08] bg-[#160719]/75 p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/30 bg-[#7046e6]/10">
                    <Icon size={16} className="text-[#c7b3f8]" />
                  </div>

                  <span className="font-mono text-[6px] tracking-[0.18em] text-[#a98cf0]/70">
                    {tag}
                  </span>
                </div>

                <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em]">
                  {title}
                </h3>

                <p className="mt-5 text-[12px] leading-7 text-[#eadff5]/48">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#160818] py-28 md:py-36">
        <PurpleAtmosphere position="right" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-[7px] tracking-[0.3em] text-[#a78aef]">
                08 / ENGINEERING PRINCIPLES
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
                Build systems,
                <span className="block text-[#cdbbf8]">
                  not demos.
                </span>
              </h2>

              <p className="mt-8 max-w-[480px] text-[13px] leading-7 text-[#eadff5]/50">
                Sustainable machine learning depends on engineering practices
                that remain useful as models, data and cloud technologies
                continue changing.
              </p>
            </div>

            <div>
              {principles.map(({ Icon, title, text }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.08] py-8 md:grid-cols-[0.15fr_0.7fr_1.15fr]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                    <Icon size={15} className="text-[#b69df4]" />
                  </div>

                  <div>
                    <span className="font-mono text-[6px] tracking-[0.18em] text-[#a98cf0]/60">
                      PRINCIPLE 0{index + 1}
                    </span>

                    <h3 className="mt-3 text-xl font-medium">
                      {title}
                    </h3>
                  </div>

                  <p className="text-[12px] leading-7 text-[#eadff5]/48">
                    {text}
                  </p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES
      ===================================================== */}
      <section className="relative overflow-hidden border-y border-white/[0.07] bg-[#210b26] py-28 md:py-36">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#390b44]/65 blur-[200px]" />

        <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
          <div className="mx-auto max-w-[950px] text-center">
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#a78aef]">
              09 / PLATFORM OUTCOMES
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Make machine learning
              <span className="block text-[#cdbbf8]">
                operational.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-[720px] text-[13px] leading-7 text-[#eadff5]/50">
              The goal is not simply to train more models. It is to create a
              cloud foundation where useful machine learning systems can be
              developed, deployed and operated consistently.
            </p>
          </div>

          <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map(({ Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="min-h-[300px] rounded-[27px] border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-xl"
              >
                <Icon size={17} className="text-[#b69df4]" />

                <h3 className="mt-14 text-xl font-medium">{title}</h3>

                <p className="mt-5 text-[11px] leading-6 text-[#eadff5]/48">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PREMIUM CLOSING — NO BUTTON
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#120614] px-5 py-32 md:px-10 md:py-44">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#390b44]/80 blur-[190px]" />

        <div className="absolute left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#7046e6]/15 blur-[170px]" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-[1250px] text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.035] px-4 py-2">
            <BrainCircuit size={10} className="text-[#b69df4]" />

            <span className="font-mono text-[6px] tracking-[0.25em] text-[#d2c3f5]/65">
              CLOUD MACHINE LEARNING
            </span>
          </div>

          <h2 className="mt-9 text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-[#f4efff]">
            Intelligence needs
            <span className="block text-[#cdbbf8]">
              infrastructure.
            </span>
          </h2>

          <p className="mx-auto mt-9 max-w-[760px] text-[13px] leading-7 text-[#eadff5]/52 md:text-[14px]">
            Connect machine learning with the cloud foundations required to
            turn experimental models into reliable components of modern
            applications and enterprise systems.
          </p>

          <div className="mx-auto mt-14 h-px max-w-[700px] bg-gradient-to-r from-transparent via-[#7046e6]/55 to-transparent" />

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              "DATA",
              "COMPUTE",
              "TRAINING",
              "DEPLOYMENT",
              "OPERATIONS",
            ].map((item) => (
              <span
                key={item}
                className="font-mono text-[6px] tracking-[0.22em] text-[#d2c3f5]/35"
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