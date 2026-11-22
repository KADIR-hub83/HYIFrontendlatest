"use client";

import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowRight,
  Blocks,
  BrainCircuit,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Gauge,
  Globe2,
  KeyRound,
  Link2,
  LockKeyhole,
  Network,
  Plug,
  Radio,
  RefreshCw,
  Route,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const apiServices = [
  {
    icon: Code2,
    title: "Custom API Development",
    description:
      "Secure and scalable APIs engineered specifically around your product, business logic, data and digital ecosystem.",
  },
  {
    icon: Plug,
    title: "Third-Party Integration",
    description:
      "Connect payments, CRMs, ERP systems, communication platforms, analytics services and external tools.",
  },
  {
    icon: Route,
    title: "API Gateway Architecture",
    description:
      "Centralized routing, authentication, throttling, observability and traffic management for complex API ecosystems.",
  },
  {
    icon: RefreshCw,
    title: "Legacy System Integration",
    description:
      "Connect modern applications with existing enterprise software without rebuilding your entire technology stack.",
  },
  {
    icon: Radio,
    title: "Real-Time APIs",
    description:
      "Event-driven systems, WebSockets, webhooks and live synchronization for products requiring instant updates.",
  },
  {
    icon: BrainCircuit,
    title: "AI API Integration",
    description:
      "Integrate AI models and intelligent services into existing products through robust API architecture.",
  },
];

const integrations = [
  "Stripe",
  "Salesforce",
  "HubSpot",
  "Slack",
  "Google",
  "AWS",
  "Shopify",
  "Twilio",
  "OpenAI",
  "Supabase",
  "Firebase",
  "ERP Systems",
];

const process = [
  {
    number: "01",
    title: "Integration Discovery",
    description:
      "We identify systems, data requirements, dependencies, authentication methods and business workflows.",
  },
  {
    number: "02",
    title: "API Architecture",
    description:
      "Endpoints, schemas, services, permissions, rate limits and integration boundaries are designed.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "APIs, middleware, transformations, authentication and integration logic are engineered.",
  },
  {
    number: "04",
    title: "Security",
    description:
      "Tokens, access rules, validation, encryption and protection against common API threats are implemented.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Endpoints are validated across performance, reliability, permissions, failures and edge cases.",
  },
  {
    number: "06",
    title: "Monitoring & Scale",
    description:
      "Logging, observability, alerts and performance optimization keep integrations dependable after launch.",
  },
];

const techStack = [
  "Node.js",
  "TypeScript",
  "Python",
  "REST",
  "GraphQL",
  "WebSockets",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "OAuth 2.0",
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

export default function ApiDevelopmentIntegrationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Header />

      {/* =========================================================
          CINEMATIC HERO
      ========================================================= */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#030303]" />

          <div className="absolute left-1/2 top-[32%] h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/20 blur-[150px]" />

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

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-10 pt-24 md:px-8 lg:px-12 lg:pt-32">
          {/* Hero text */}
          <motion.div
            className="relative z-30 mx-auto max-w-5xl text-center"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={heroItem} className="hyi-h1 hyi-white">
              Connect everything.
              <span className="block hyi-blue">
                Make systems work as one.
              </span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto mt-3 max-w-3xl hyi-p"
            >
              HYI builds secure, scalable API ecosystems that connect
              applications, data, cloud services and business platforms into
              one intelligent digital infrastructure.
            </motion.p>
          </motion.div>

          {/* =====================================================
              PSEUDO 3D API NETWORK
          ===================================================== */}
          <motion.div
            className="relative mx-auto mt-10 h-[640px] max-w-[1250px]"
            style={{ perspective: "1600px" }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
          >
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[130px]" />

            {/* orbit rings */}
            <div
              className="absolute left-1/2 top-[44%] h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-purple-400/20"
              style={{
                transform: "translate(-50%,-50%) rotateX(68deg) rotateZ(-7deg)",
              }}
            />

            <div
              className="absolute left-1/2 top-[44%] h-[310px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/10"
              style={{
                transform: "translate(-50%,-50%) rotateX(65deg) rotateZ(14deg)",
              }}
            />

            {/* main 3D core */}
            <div
              className="absolute left-1/2 top-[18%] z-20 h-[310px] w-[310px] -translate-x-1/2"
              style={{
                transform: "translateX(-50%) rotateX(55deg) rotateZ(45deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 rounded-[55px] border border-purple-300/30 bg-gradient-to-br from-purple-500/40 via-[#241339] to-[#09080D] shadow-[0_0_100px_rgba(139,92,246,.45)]" />

              <div className="absolute inset-[35px] rounded-[40px] border border-white/10 bg-black/60" />

              <div className="absolute inset-[80px] flex items-center justify-center rounded-[30px] bg-purple-500/20">
                <Network className="h-20 w-20 -rotate-45 text-purple-200" />
              </div>
            </div>

            {/* center label */}
            <motion.div
              className="absolute left-1/2 top-[36%] z-30 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/60 px-6 py-3 text-center backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <p className="text-xs text-white/30">HYI API Core</p>
              <p className="mt-1 text-sm font-medium">
                Connected Infrastructure
              </p>
            </motion.div>

            {/* LEFT SYSTEM */}
            <div className="absolute left-[2%] top-[22%] hidden w-[235px] rounded-[26px] border border-white/10 bg-[#0B0B11]/90 p-5 shadow-2xl md:block lg:left-[7%]">
              <Database className="h-5 w-5 text-purple-300" />

              <p className="mt-4 text-sm font-medium">Business Data</p>
              <p className="mt-1 text-[10px] text-white/30">
                CRM · ERP · Databases
              </p>

              <div className="mt-5 space-y-2">
                {[82, 64, 91].map((width, index) => (
                  <div key={index} className="h-2 rounded-full bg-white/[0.05]">
                    <div
                      className="h-full rounded-full bg-purple-400/60"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SYSTEM */}
            <div className="absolute right-[2%] top-[22%] hidden w-[235px] rounded-[26px] border border-white/10 bg-[#0B0B11]/90 p-5 shadow-2xl md:block lg:right-[7%]">
              <Cloud className="h-5 w-5 text-blue-300" />

              <p className="mt-4 text-sm font-medium">Cloud Services</p>
              <p className="mt-1 text-[10px] text-white/30">
                SaaS · Payments · AI
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {["API", "AI", "CDN"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white/[0.04] px-2 py-3 text-center text-[9px] text-white/45"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* bottom dashboard */}
            <div
              className="absolute bottom-[3%] left-1/2 z-20 w-[92%] max-w-[900px] -translate-x-1/2 overflow-hidden rounded-[30px] border border-white/10 bg-[#09090D]/95 shadow-[0_40px_120px_rgba(0,0,0,.8)]"
              style={{
                transform: "translateX(-50%) rotateX(8deg)",
                transformOrigin: "center bottom",
              }}
            >
              <div className="flex h-12 items-center justify-between border-b border-white/[0.07] px-5">
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-400/60" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400/60" />
                  <div className="h-2 w-2 rounded-full bg-green-400/60" />
                </div>

                <p className="text-[10px] text-white/25">
                  API Operations Center
                </p>

                <Activity className="h-4 w-4 text-white/25" />
              </div>

              <div className="grid gap-3 p-5 sm:grid-cols-4">
                {[
                  ["18.4M", "Requests"],
                  ["42ms", "Latency"],
                  ["99.99%", "Uptime"],
                  ["0.03%", "Error rate"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4"
                  >
                    <p className="text-lg font-semibold">{value}</p>
                    <p className="mt-2 text-[9px] text-white/25">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          BIG IMAGE SECTION
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-6 md:px-8 lg:px-12">
        <Reveal className="relative h-[320px] overflow-hidden rounded-[35px] border border-white/10 md:h-[480px] md:rounded-[44px]">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=90"
            alt="Advanced digital network infrastructure"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/30" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <h2 className="max-w-5xl hyi-h1 hyi-white">
              Modern digital products depend on systems that communicate
              instantly.
            </h2>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          SHORT INTRO
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-10 md:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-5xl text-center">
          <h2 className="hyi-h1 hyi-white">
            Your applications become more powerful
            <span className="block hyi-blue">
              when your systems work together.
            </span>
          </h2>
        </Reveal>

        <motion.div
          className="mt-8 grid grid-cols-2 gap-3 border-y border-white/10 py-5 sm:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerGrid}
        >
          {[
            ["Secure", "APIs"],
            ["Real-Time", "Communication"],
            ["Connected", "Platforms"],
            ["Scalable", "Infrastructure"],
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
          SERVICES
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-[1350px] px-5 md:px-8 lg:px-12">
          <Reveal className="text-center">
            <h2 className="hyi-h1 hyi-white">
              One integration layer.
              <span className="block hyi-blue">Unlimited connectivity.</span>
            </h2>
          </Reveal>

          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerGrid}
          >
            {apiServices.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
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
                    <h3 className="hyi-h3">{service.title}</h3>

                    <p className="mt-2 max-w-sm hyi-p">{service.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          API PERFORMANCE GRAPH
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <Reveal className="overflow-hidden rounded-[35px] border border-white/10 bg-[#09090D] md:rounded-[44px]">
          <div className="border-b border-white/[0.07] p-6 md:p-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="hyi-h1 hyi-white">Performance at a glance.</h2>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/[0.06] px-4 py-2 text-xs text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                All endpoints operational
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-5 md:p-8 lg:grid-cols-[1.6fr_1fr]">
            {/* SVG GRAPH */}
            <div className="rounded-[28px] border border-white/[0.07] bg-black/20 p-5 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="hyi-h3 hyi-white">API Requests</h3>
                  <p className="mt-1 hyi-p">Request volume / second</p>
                </div>

                <Gauge className="h-5 w-5 hyi-white-icon" />
              </div>

              <div className="mt-6 h-[300px] w-full">
                <svg
                  viewBox="0 0 800 300"
                  className="h-full w-full overflow-visible"
                >
                  {[50, 100, 150, 200, 250].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="800"
                      y2={y}
                      stroke="rgba(255,255,255,.06)"
                      strokeWidth="1"
                    />
                  ))}

                  <defs>
                    <linearGradient
                      id="apiGraphFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity=".35" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 0 240 C 50 225, 70 230, 110 205 S 175 155, 215 175 S 285 220, 330 145 S 405 80, 455 120 S 525 195, 575 110 S 660 65, 700 90 S 765 125, 800 55 L 800 300 L 0 300 Z"
                    fill="url(#apiGraphFill)"
                  />

                  <path
                    d="M 0 240 C 50 225, 70 230, 110 205 S 175 155, 215 175 S 285 220, 330 145 S 405 80, 455 120 S 525 195, 575 110 S 660 65, 700 90 S 765 125, 800 55"
                    fill="none"
                    stroke="#A78BFA"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="mt-2 flex justify-between text-[10px] text-white/20">
                <span>00:00</span>
                <span>04:00</span>
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>20:00</span>
                <span>24:00</span>
              </div>
            </div>

            <div className="space-y-4">
              {[
                ["Average latency", "42 ms", "+4.2%"],
                ["Success rate", "99.97%", "Stable"],
                ["Requests today", "18.4M", "+22%"],
                ["Active APIs", "126", "+8"],
              ].map(([label, value, status]) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-white/10 bg-white/[0.035] p-5"
                >
                  <p className="hyi-p">{label}</p>

                  <div className="mt-2 flex items-end justify-between">
                    <p className="hyi-h3 hyi-white">{value}</p>
                    <span className="text-xs text-purple-300">{status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          API REQUEST FLOW
      ========================================================= */}
      <section className="relative bg-[#080808]">
        <div className="relative mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-5xl text-center">
            <h2 className="hyi-h1 hyi-white">
              From request
              <span className="block hyi-blue">
                to response in milliseconds.
              </span>
            </h2>
          </Reveal>

          <Reveal className="mx-auto mt-8 grid max-w-6xl items-center gap-5 md:grid-cols-[1fr_55px_1fr_55px_1fr_55px_1fr]">
            {[
              {
                icon: Globe2,
                title: "Client",
                text: "Application request",
              },
              {
                icon: ShieldCheck,
                title: "Gateway",
                text: "Validate & route",
              },
              {
                icon: Server,
                title: "Service",
                text: "Business logic",
              },
              {
                icon: Database,
                title: "Data",
                text: "Return response",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Fragment key={item.title}>
                  <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10">
                      <Icon className="h-5 w-5 hyi-white-icon" />
                    </div>

                    <h3 className="mt-3 hyi-h3 hyi-white">{item.title}</h3>
                    <p className="mt-1 hyi-p">{item.text}</p>
                  </div>

                  {index < 3 && (
                    <div className="hidden items-center md:flex">
                      <div className="h-px flex-1 bg-gradient-to-r from-purple-500/20 to-purple-400/60" />
                      <ChevronRight className="h-4 w-4 text-purple-400" />
                    </div>
                  )}
                </Fragment>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          LARGE IMAGE
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <Reveal className="relative h-[320px] overflow-hidden rounded-[35px] border border-white/10 md:h-[480px] md:rounded-[44px]">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=90"
            alt="3D technology infrastructure"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/25" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <Link2 className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="mt-3 max-w-4xl hyi-h1 hyi-white">
              Turn fragmented software into one connected digital ecosystem.
            </h2>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          INTEGRATIONS
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h2 className="hyi-h1 hyi-white">
              Connect the tools
              <span className="block hyi-blue">
                your business already uses.
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
            {integrations.map((integration, index) => (
              <motion.div
                key={integration}
                variants={gridItem}
                className="group relative flex h-32 items-center justify-center overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] transition hover:border-purple-500/30"
              >
                <div className="absolute inset-0 bg-purple-500/0 transition group-hover:bg-purple-500/[0.07]" />

                <div className="relative text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-purple-500/10">
                    {index % 3 === 0 ? (
                      <Cloud className="h-4 w-4 hyi-white-icon" />
                    ) : index % 3 === 1 ? (
                      <Blocks className="h-4 w-4 hyi-white-icon" />
                    ) : (
                      <Plug className="h-4 w-4 hyi-white-icon" />
                    )}
                  </div>

                  <p className="mt-3 hyi-p">{integration}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
                APIs protected
                <span className="block hyi-blue">
                  at every connection point.
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
                  icon: KeyRound,
                  title: "Authentication",
                  text: "OAuth · JWT · API keys",
                },
                {
                  icon: ShieldCheck,
                  title: "Authorization",
                  text: "Roles · Permissions",
                },
                {
                  icon: Gauge,
                  title: "Rate Limiting",
                  text: "Traffic protection",
                },
                {
                  icon: Activity,
                  title: "Monitoring",
                  text: "Logs · Errors · Alerts",
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
          PROCESS
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 md:px-8 lg:px-12">
        <Reveal className="mx-auto text-center">
          <h2 className="hyi-h1 hyi-white">
            From disconnected systems
            <span className="block hyi-blue">to reliable infrastructure.</span>
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
              key={step.number}
              variants={gridItem}
              className="group grid gap-4 border-t border-white/10 py-6 transition md:grid-cols-[100px_1fr_1.3fr] md:gap-10"
            >
              <span className="hyi-white">{step.number}</span>

              <h3 className="hyi-h3 hyi-white">{step.title}</h3>

              <p className="max-w-xl hyi-p">{step.description}</p>
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
              Engineered with technology
              <span className="block hyi-blue">built for connectivity.</span>
            </h2>
          </Reveal>

          <motion.div
            className="mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerGrid}
          >
            {techStack.map((technology) => (
              <motion.div
                key={technology}
                variants={gridItem}
                className="group flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] hyi-p transition hover:border-purple-500/30 hover:bg-purple-500/[0.08] hover:text-white md:text-base"
              >
                <Code2 className="mr-2 h-4 w-4 hyi-white-icon" />
                {technology}
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
              Build the connections
              <span className="block hyi-blue">
                behind your digital future.
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl hyi-p">
              Connect your products, platforms and data through secure API
              infrastructure engineered by HYI.
            </p>

            <button className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#7046e6] px-7 py-4 text-sm font-medium text-white shadow-[0_15px_50px_rgba(124,58,237,.25)] transition hover:scale-[1.02]">
              Talk to Our API Experts
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </section> */}

      <Footer />
    </main>
  );
}