"use client";

import { Fragment, type ReactNode } from "react";

import { motion, type Variants } from "framer-motion";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Fingerprint,
  Gauge,
  GitBranch,
  Globe2,
  KeyRound,
  LockKeyhole,
  Network,
  Orbit,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const capabilities = [
  {
    icon: Building2,
    title: "Enterprise Platforms",
    description:
      "Mission-critical digital platforms designed around complex business processes, multiple departments and large user ecosystems.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Transform repetitive operations into connected digital workflows with intelligent routing, approvals and automation.",
  },
  {
    icon: Database,
    title: "Data & System Integration",
    description:
      "Connect enterprise databases, legacy platforms, APIs and third-party systems through a unified integration architecture.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Engineering",
    description:
      "Build resilient cloud applications engineered for scalability, availability, distributed workloads and continuous delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Identity, access control, secure APIs, encryption and governance engineered throughout the application architecture.",
  },
  {
    icon: Sparkles,
    title: "AI-Enabled Operations",
    description:
      "Embed AI into enterprise workflows for intelligent assistance, automation, analysis and operational decision support.",
  },
];

const process = [
  {
    no: "01",
    title: "Enterprise Discovery",
    text: "We map business objectives, stakeholders, departments, existing systems, operational dependencies and long-term transformation goals.",
  },
  {
    no: "02",
    title: "Architecture Planning",
    text: "Application boundaries, services, data flows, security layers, integration patterns and deployment architecture are defined.",
  },
  {
    no: "03",
    title: "Experience Engineering",
    text: "Complex enterprise workflows are transformed into clear interfaces designed for productivity and adoption.",
  },
  {
    no: "04",
    title: "Application Development",
    text: "Frontend experiences, backend services, databases, integrations and automation are engineered as one connected platform.",
  },
  {
    no: "05",
    title: "Quality & Security",
    text: "Functional, integration, security and performance testing validate the platform across critical enterprise scenarios.",
  },
  {
    no: "06",
    title: "Deployment & Evolution",
    text: "Applications are released through controlled environments with monitoring, optimization and continuous product evolution.",
  },
];

const industries = [
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Retail & Commerce",
  "Logistics",
  "Professional Services",
  "Education",
  "Technology",
  "Energy",
  "Government",
  "Real Estate",
  "Telecommunications",
];

const technologies = [
  "React",
  "Next.js",
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

export default function EnterpriseApplicationDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Header />

      {/* =========================================================
          CINEMATIC ENTERPRISE HERO
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
              Build the digital core
              <span className="block hyi-blue">of your enterprise.</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto mt-3 max-w-3xl hyi-p"
            >
              HYI designs and engineers secure, scalable enterprise
              applications that connect people, processes, data and
              intelligence across the organization.
            </motion.p>
          </motion.div>

          {/* ENTERPRISE COMMAND CENTER */}
          <motion.div
            className="relative mx-auto mt-10 max-w-[1320px]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
          >
            <div className="absolute left-1/2 top-1/2 h-[450px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0A0F]/95 shadow-[0_50px_160px_rgba(0,0,0,.75)]">
              {/* Browser bar */}
              <div className="flex h-14 items-center justify-between border-b border-white/[0.07] px-5">
                <div className="flex gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>

                <div className="hidden rounded-full border border-white/[0.07] bg-white/[0.03] px-16 py-2 text-[10px] text-white/25 sm:block">
                  Enterprise Control Center
                </div>

                <div className="flex gap-3 text-white/25">
                  <Activity className="h-4 w-4" />
                  <Settings2 className="h-4 w-4" />
                </div>
              </div>

              <div className="grid lg:grid-cols-[220px_1fr]">
                {/* Sidebar */}
                <aside className="hidden border-r border-white/[0.07] bg-black/20 p-5 lg:block">
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                      <Building2 className="h-5 w-5 text-purple-300" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">HYI Enterprise</p>
                      <p className="text-[10px] text-white/25">
                        Organization OS
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      "Overview",
                      "Operations",
                      "Workflows",
                      "Analytics",
                      "Infrastructure",
                      "Security",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`flex items-center justify-between rounded-xl px-3 py-3 text-xs ${
                          index === 0
                            ? "bg-purple-500/15 text-purple-200"
                            : "text-white/35"
                        }`}
                      >
                        <span>{item}</span>
                        <ChevronRight className="h-3 w-3" />
                      </div>
                    ))}
                  </div>
                </aside>

                {/* Dashboard */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-xs text-white/30">
                        Organization overview
                      </p>
                      <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                        Enterprise Operations
                      </h3>
                    </div>

                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/[0.06] px-3 py-2 text-[10px] text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      All systems operational
                    </div>
                  </div>

                  {/* KPI */}
                  <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
                    {[
                      ["99.99%", "Platform uptime"],
                      ["2.4M", "Daily operations"],
                      ["184", "Active workflows"],
                      ["38%", "Efficiency gain"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5"
                      >
                        <p className="text-xl font-semibold sm:text-2xl">
                          {value}
                        </p>
                        <p className="mt-2 text-[10px] text-white/30 sm:text-xs">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-4 xl:grid-cols-[1.6fr_1fr]">
                    {/* chart */}
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">
                            Operational performance
                          </p>
                          <p className="mt-1 text-[10px] text-white/25">
                            Real-time enterprise activity
                          </p>
                        </div>

                        <BarChart3 className="h-5 w-5 text-purple-300" />
                      </div>

                      <div className="mt-6 flex h-[180px] items-end gap-2 sm:h-[210px] sm:gap-3">
                        {[
                          36, 52, 43, 61, 57, 73, 65, 82, 70, 88, 77, 95, 83,
                          91,
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
                            className="relative flex-1 rounded-t-lg bg-gradient-to-t from-purple-900/30 to-purple-400/80"
                          >
                            <div className="absolute inset-x-0 top-0 h-[1px] bg-purple-200/70" />
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-4 flex justify-between text-[9px] text-white/20">
                        <span>00:00</span>
                        <span>06:00</span>
                        <span>12:00</span>
                        <span>18:00</span>
                        <span>24:00</span>
                      </div>
                    </div>

                    {/* system health */}
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                      <p className="text-sm font-medium">System health</p>
                      <p className="mt-1 text-[10px] text-white/25">
                        Live infrastructure
                      </p>

                      <div className="mt-5 space-y-3">
                        {[
                          ["API Gateway", "99.99%"],
                          ["Database Cluster", "99.98%"],
                          ["Cloud Services", "100%"],
                          ["Identity Service", "99.99%"],
                        ].map(([label, value], index) => (
                          <div
                            key={label}
                            className="rounded-xl border border-white/[0.06] bg-black/20 p-3"
                          >
                            <div className="flex justify-between text-[11px]">
                              <span className="text-white/50">{label}</span>
                              <span className="text-emerald-300">{value}</span>
                            </div>

                            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-300"
                                style={{ width: `${96 + index}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 left-[5%] hidden rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl md:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                  <Sparkles className="h-4 w-4 text-purple-300" />
                </div>

                <div>
                  <p className="text-xs text-white/30">AI optimization</p>
                  <p className="mt-1 text-sm font-medium">
                    14 workflows improved
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-10 md:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-5xl text-center">
          <h2 className="hyi-h1 hyi-white">
            Your business is complex.
            <span className="block hyi-blue">
              Your technology shouldn&apos;t be.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl hyi-p">
            We transform disconnected processes, systems and data into
            cohesive enterprise platforms that help teams operate faster,
            collaborate better and make smarter decisions.
          </p>
        </Reveal>

        <motion.div
          className="mt-8 grid grid-cols-2 gap-3 border-y border-white/10 py-5 sm:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerGrid}
        >
          {[
            ["Scalable", "Architecture"],
            ["Secure", "By Design"],
            ["Connected", "Enterprise Data"],
            ["Intelligent", "Automation"],
          ].map(([title, subtitle]) => (
            <motion.div
              key={title}
              variants={gridItem}
              className="border-white/10 px-3 text-center sm:border-r last:border-r-0"
            >
              <p className="hyi-h3 hyi-white">{title}</p>
              <p className="mt-2 hyi-p">{subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-[1350px] px-5 md:px-8 lg:px-12">
          <Reveal className="text-center">
            <h2 className="hyi-h1 hyi-white">
              Technology designed around
              <span className="block hyi-blue">
                how your organization works.
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
        <Reveal className="relative overflow-hidden rounded-[35px] border border-white/10 bg-[#09090D] px-5 py-8 md:rounded-[44px] md:px-10 lg:px-16">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/15 blur-[120px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <Orbit className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="hyi-h1 hyi-white">
              One connected
              <span className="block hyi-blue">enterprise architecture.</span>
            </h2>

            <p className="mx-auto mt-2 max-w-2xl hyi-p">
              Users, applications, services and enterprise data operate as one
              connected digital ecosystem.
            </p>
          </div>

          <div className="relative mx-auto mt-8 max-w-5xl">
            {/* User layer */}
            <div className="mx-auto max-w-md rounded-3xl border border-purple-500/30 bg-purple-500/10 p-5 text-center">
              <Globe2 className="mx-auto h-6 w-6 hyi-white-icon" />
              <h3 className="mt-2 hyi-h3 hyi-white">
                Enterprise Experience Layer
              </h3>
              <p className="mt-1 hyi-p">Web · Mobile · Internal Portals</p>
            </div>

            <div className="mx-auto h-12 w-px bg-gradient-to-b from-purple-400/50 to-white/10" />

            <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-center">
              <Network className="mx-auto h-6 w-6 hyi-white-icon" />
              <h3 className="mt-2 hyi-h3 hyi-white">
                Enterprise API & Integration Layer
              </h3>
              <p className="mt-1 hyi-p">
                APIs · Services · Events · Integrations
              </p>
            </div>

            <div className="mx-auto h-12 w-px bg-white/10" />

            <motion.div
              className="grid gap-4 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerGrid}
            >
              {[
                {
                  icon: Database,
                  title: "Enterprise Data",
                  text: "Databases · Warehouses",
                },
                {
                  icon: Server,
                  title: "Core Services",
                  text: "Business · Processing",
                },
                {
                  icon: Sparkles,
                  title: "Intelligence",
                  text: "AI · Analytics · Automation",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={gridItem}
                    className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 text-center"
                  >
                    <Icon className="mx-auto h-6 w-6 hyi-white-icon" />
                    <h3 className="mt-2 hyi-h3 hyi-white">{item.title}</h3>
                    <p className="mt-2 hyi-p">{item.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mx-auto h-12 w-px bg-white/10" />

            <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/30 p-5 text-center">
              <Cloud className="mx-auto h-6 w-6 hyi-white-icon" />
              <h3 className="mt-2 hyi-h3 hyi-white">
                Secure Cloud Infrastructure
              </h3>
              <p className="mt-1 hyi-p">
                Compute · Networking · Containers · Monitoring · Scaling
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          AUTOMATION
      ========================================================= */}
      <section className="relative py-6">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/[0.08] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-5xl text-center">
            <h2 className="hyi-h1 hyi-white">
              Turn complex operations
              <span className="block hyi-blue">into intelligent workflows.</span>
            </h2>
          </Reveal>

          <Reveal className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[#09090D] p-5 md:p-8">
            <div className="grid items-center gap-5 md:grid-cols-[1fr_80px_1fr_80px_1fr]">
              {[
                {
                  icon: Boxes,
                  title: "Business Event",
                  text: "Request received",
                },
                {
                  icon: GitBranch,
                  title: "Smart Workflow",
                  text: "Route & automate",
                },
                {
                  icon: Check,
                  title: "Business Outcome",
                  text: "Process completed",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <Fragment key={item.title}>
                    <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10">
                        <Icon className="h-5 w-5 hyi-white-icon" />
                      </div>
                      <h3 className="mt-3 hyi-h3 hyi-white">{item.title}</h3>
                      <p className="mt-1 hyi-p">{item.text}</p>
                    </div>

                    {index < 2 && (
                      <div className="hidden items-center md:flex">
                        <div className="h-px flex-1 bg-gradient-to-r from-white/5 to-purple-400/50" />
                        <ChevronRight className="h-4 w-4 text-purple-400" />
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          SECURITY
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <Reveal className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#171025] to-[#070708] p-6 md:p-10">
          <div className="absolute right-[-120px] top-[-100px] h-[350px] w-[350px] rounded-full bg-purple-700/20 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15">
                <LockKeyhole className="h-5 w-5 hyi-white-icon" />
              </div>

              <h2 className="mt-3 hyi-h1 hyi-white">
                Enterprise-grade security
                <span className="block hyi-blue">
                  from identity to infrastructure.
                </span>
              </h2>
            </div>

            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerGrid}
            >
              {[
                {
                  icon: Fingerprint,
                  title: "Identity",
                  text: "SSO & authentication",
                },
                {
                  icon: KeyRound,
                  title: "Access",
                  text: "Role-based permissions",
                },
                {
                  icon: ShieldCheck,
                  title: "Protection",
                  text: "Secure application layers",
                },
                {
                  icon: LockKeyhole,
                  title: "Data",
                  text: "Protected information",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={gridItem}
                    className="rounded-3xl border border-white/10 bg-black/20 p-6 text-center"
                  >
                    <Icon className="mx-auto h-6 w-6 hyi-white-icon" />
                    <h3 className="mt-2 hyi-h3 hyi-white">{item.title}</h3>
                    <p className="mt-2 hyi-p">{item.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          SCALE
      ========================================================= */}
      <section className="bg-[#080808]">
        <div className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-5xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
              <Gauge className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="mt-3 hyi-h1 hyi-white">
              Designed for today.
              <span className="block hyi-blue">
                Engineered for what comes next.
              </span>
            </h2>
          </Reveal>

          <motion.div
            className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerGrid}
          >
            {[
              ["Millions", "of transactions"],
              ["Global", "user ecosystems"],
              ["Always-on", "business operations"],
              ["Elastic", "cloud scalability"],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                variants={gridItem}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-center"
              >
                <p className="hyi-h3 hyi-white">{value}</p>
                <p className="mt-2 hyi-p">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="hyi-h1 hyi-white">
            Built around your industry,
            <span className="block hyi-blue">not around a template.</span>
          </h2>
        </Reveal>

        <motion.div
          className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerGrid}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry}
              variants={gridItem}
              className="rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 hyi-p transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
            >
              {industry}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 md:px-8 lg:px-12">
        <Reveal className="mx-auto text-center">
          <h2 className="hyi-h1 hyi-white">
            Enterprise development
            <span className="block hyi-blue">
              without enterprise complexity.
            </span>
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
          TECHNOLOGY
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h2 className="hyi-h1 hyi-white">
              Modern engineering for
              <span className="block hyi-blue">
                long-term enterprise growth.
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
            {technologies.map((tech) => (
              <motion.div
                key={tech}
                variants={gridItem}
                className="group flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] hyi-p transition hover:border-purple-500/30 hover:bg-purple-500/[0.08] hover:text-white md:text-base"
              >
                <Code2 className="mr-2 h-4 w-4 hyi-white-icon" />
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      {/* <section className="mx-auto max-w-[1350px] px-5 pb-10 md:px-8 lg:px-12">
        <Reveal className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0B0710] px-6 py-10 text-center md:px-12">
          <div className="absolute left-1/2 top-[-260px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-purple-700/25 blur-[140px]" />

          <div className="relative mx-auto max-w-4xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <Zap className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="mt-3 hyi-h1 hyi-white">
              Build the platform your
              <span className="block hyi-blue">
                next stage of growth needs.
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl hyi-p">
              Partner with HYI to transform complex enterprise requirements
              into secure, connected and scalable digital products.
            </p>

            <button className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#7046e6] px-7 py-4 text-sm font-medium text-white shadow-[0_15px_50px_rgba(124,58,237,.25)] transition hover:scale-[1.02]">
              Talk to Our Experts
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </section> */}

      <Footer />
    </main>
  );
}