import Image from "next/image";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowRight,
  Blocks,
  Box,
  BrainCircuit,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Globe2,
  KeyRound,
  Layers3,
  Link2,
  LockKeyhole,
  Network,
  Plug,
  Radio,
  RefreshCw,
  Route,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const apiServices = [
  {
    number: "01",
    icon: Code2,
    title: "Custom API Development",
    description:
      "Secure and scalable APIs engineered specifically around your product, business logic, data and digital ecosystem.",
  },
  {
    number: "02",
    icon: Plug,
    title: "Third-Party Integration",
    description:
      "Connect payments, CRMs, ERP systems, communication platforms, analytics services and external tools.",
  },
  {
    number: "03",
    icon: Route,
    title: "API Gateway Architecture",
    description:
      "Centralized routing, authentication, throttling, observability and traffic management for complex API ecosystems.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Legacy System Integration",
    description:
      "Connect modern applications with existing enterprise software without rebuilding your entire technology stack.",
  },
  {
    number: "05",
    icon: Radio,
    title: "Real-Time APIs",
    description:
      "Event-driven systems, WebSockets, webhooks and live synchronization for products requiring instant updates.",
  },
  {
    number: "06",
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

export default function ApiDevelopmentIntegrationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Header />

      {/* =========================================================
          CINEMATIC HERO
      ========================================================= */}
      <section className="relative min-h-[1100px] overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-black" />

        <Image
          src="https://images.pexels.com/photos/25626435/pexels-photo-25626435.jpeg"
          alt="Futuristic API technology network"
          fill
          priority
          className="object-cover opacity-[0.25]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/75 to-[#030303]" />

        <div className="absolute left-1/2 top-[32%] h-[900px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[190px]" />

        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#030303] via-[#030303]/90 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pt-24 md:px-8 lg:px-12 lg:pt-32">
          <div className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2 text-xs text-purple-200 backdrop-blur-xl sm:text-sm">
              <Network className="h-4 w-4" />
              API Development & Integration
            </div>

            <h1 className="mt-7 text-[43px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[92px]">
              Connect everything.
              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#EC4899] bg-clip-text text-transparent">
                Make systems work as one.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/50 md:text-lg">
              HYI builds secure, scalable API ecosystems that connect
              applications, data, cloud services and business platforms into
              one intelligent digital infrastructure.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7047E8] to-[#8B5CF6] px-7 py-4 text-sm font-medium shadow-[0_15px_60px_rgba(124,58,237,.35)]">
                Start Your Integration
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <button className="rounded-full border border-white/10 bg-black/30 px-7 py-4 text-sm text-white/65 backdrop-blur-xl">
                Explore API Capabilities
              </button>
            </div>
          </div>

          {/* =====================================================
              PSEUDO 3D API NETWORK
          ===================================================== */}
          <div
            className="relative mx-auto mt-16 h-[690px] max-w-[1250px]"
            style={{ perspective: "1600px" }}
          >
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[130px]" />

            {/* orbit rings */}
            <div
              className="absolute left-1/2 top-[46%] h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-purple-400/20"
              style={{
                transform:
                  "translate(-50%,-50%) rotateX(68deg) rotateZ(-7deg)",
              }}
            />

            <div
              className="absolute left-1/2 top-[46%] h-[310px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/10"
              style={{
                transform:
                  "translate(-50%,-50%) rotateX(65deg) rotateZ(14deg)",
              }}
            />

            {/* main 3D core */}
            <div
              className="absolute left-1/2 top-[22%] z-20 h-[310px] w-[310px] -translate-x-1/2"
              style={{
                transform:
                  "translateX(-50%) rotateX(55deg) rotateZ(45deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 rounded-[55px] border border-purple-300/30 bg-gradient-to-br from-purple-500/40 via-[#241339] to-[#09080D] shadow-[0_0_100px_rgba(139,92,246,.45)]" />

              <div className="absolute inset-[35px] rounded-[40px] border border-white/10 bg-black/60" />

              <div className="absolute inset-[80px] flex items-center justify-center rounded-[30px] bg-purple-500/20">
                <Network className="h-20 w-20 -rotate-45 text-purple-200" />
              </div>
            </div>

            {/* vertical center label */}
            <div className="absolute left-1/2 top-[39%] z-30 -translate-x-1/2 rounded-2xl border border-purple-400/20 bg-black/75 px-6 py-4 text-center backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.25em] text-purple-300">
                HYI API Core
              </p>
              <p className="mt-1 text-sm font-medium">
                Connected Infrastructure
              </p>
            </div>

            {/* LEFT SYSTEM */}
            <div className="absolute left-[2%] top-[24%] hidden w-[235px] rounded-[26px] border border-white/10 bg-[#0B0B11]/90 p-5 shadow-2xl backdrop-blur-xl md:block lg:left-[7%]">
              <Database className="h-5 w-5 text-purple-300" />

              <p className="mt-4 text-sm font-medium">Business Data</p>
              <p className="mt-1 text-[10px] text-white/30">
                CRM · ERP · Databases
              </p>

              <div className="mt-5 space-y-2">
                {[82, 64, 91].map((width, index) => (
                  <div
                    key={index}
                    className="h-2 rounded-full bg-white/[0.05]"
                  >
                    <div
                      className="h-full rounded-full bg-purple-400/60"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SYSTEM */}
            <div className="absolute right-[2%] top-[24%] hidden w-[235px] rounded-[26px] border border-white/10 bg-[#0B0B11]/90 p-5 shadow-2xl backdrop-blur-xl md:block lg:right-[7%]">
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
              className="absolute bottom-[3%] left-1/2 z-20 w-[92%] max-w-[900px] -translate-x-1/2 overflow-hidden rounded-[30px] border border-white/10 bg-[#09090D]/95 shadow-[0_40px_120px_rgba(0,0,0,.8)] backdrop-blur-xl"
              style={{
                transform:
                  "translateX(-50%) rotateX(8deg)",
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
          </div>
        </div>
      </section>

      {/* =========================================================
          BIG IMAGE FIRST SECTION
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="relative h-[500px] overflow-hidden rounded-[38px] border border-white/10 md:h-[720px]">
          <Image
  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=90"
  alt="Advanced digital network infrastructure"
  fill
  unoptimized
  sizes="100vw"
  className="object-cover opacity-80"
/>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/30" />

          <div className="absolute inset-x-0 bottom-0 p-7 md:p-12 lg:p-16">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
              Connected architecture
            </p>

            <h2 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Modern digital products depend on systems that communicate
              instantly.
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================
          SHORT INTRO
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 pb-28 md:px-8 lg:px-12 lg:pb-40">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            Integration engineering
          </p>

          <h2 className="mt-7 text-4xl font-semibold md:text-6xl lg:text-7xl">
            Your applications become more powerful
            <span className="block text-white/25">
              when your systems work together.
            </span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-2 border-y border-white/[0.08] py-10 md:grid-cols-4">
          {[
            ["Secure", "APIs"],
            ["Real-Time", "Communication"],
            ["Connected", "Platforms"],
            ["Scalable", "Infrastructure"],
          ].map(([value, label], index) => (
            <div
              key={value}
              className={`text-center ${
                index < 3 ? "md:border-r md:border-white/[0.08]" : ""
              }`}
            >
              <p className="text-xl font-semibold md:text-3xl">{value}</p>
              <p className="mt-2 text-xs text-white/30">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="border-y border-white/[0.08] bg-white/[0.012]">
        <div className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              API capabilities
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              One integration layer.
              <span className="block text-white/25">
                Unlimited connectivity.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {apiServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group relative min-h-[350px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-transparent p-8 transition duration-500 hover:-translate-y-1 hover:border-purple-400/25"
                >
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-600/0 blur-[80px] transition group-hover:bg-purple-600/15" />

                  <div className="relative flex justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/15 bg-purple-500/10">
                      <Icon className="h-5 w-5 text-purple-300" />
                    </div>

                    <span className="text-sm text-white/15">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="relative mt-20 text-xl font-semibold md:text-2xl">
                    {service.title}
                  </h3>

                  <p className="relative mt-4 text-sm leading-7 text-white/40">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          API PERFORMANCE GRAPH
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="overflow-hidden rounded-[40px] border border-white/[0.08] bg-[#09090D]">
          <div className="border-b border-white/[0.07] p-7 md:p-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
                  Live API intelligence
                </p>

                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Performance at a glance.
                </h2>
              </div>

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
                  <p className="font-medium">API Requests</p>
                  <p className="mt-1 text-xs text-white/25">
                    Request volume / second
                  </p>
                </div>

                <Gauge className="h-5 w-5 text-purple-300" />
              </div>

              <div className="mt-8 h-[300px] w-full">
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

                  <path
                    d="
                      M 0 240
                      C 50 225, 70 230, 110 205
                      S 175 155, 215 175
                      S 285 220, 330 145
                      S 405 80, 455 120
                      S 525 195, 575 110
                      S 660 65, 700 90
                      S 765 125, 800 55
                      L 800 300
                      L 0 300 Z
                    "
                    fill="url(#apiGraphFill)"
                  />

                  <path
                    d="
                      M 0 240
                      C 50 225, 70 230, 110 205
                      S 175 155, 215 175
                      S 285 220, 330 145
                      S 405 80, 455 120
                      S 525 195, 575 110
                      S 660 65, 700 90
                      S 765 125, 800 55
                    "
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
                  className="rounded-[22px] border border-white/[0.07] bg-white/[0.025] p-5"
                >
                  <p className="text-xs text-white/30">{label}</p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-2xl font-semibold">{value}</p>
                    <span className="text-xs text-purple-300">{status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          API REQUEST FLOW
      ========================================================= */}
      <section className="relative border-y border-white/[0.08] bg-[#070707] py-28 lg:py-40">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.07] blur-[150px]" />

        <div className="relative mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              Request lifecycle
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              From request
              <span className="block text-white/25">
                to response in milliseconds.
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-20 grid max-w-6xl items-center gap-5 md:grid-cols-[1fr_55px_1fr_55px_1fr_55px_1fr]">
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
                <div key={item.title} className="contents">
                  <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10">
                      <Icon className="h-5 w-5 text-purple-300" />
                    </div>

                    <p className="mt-5 font-medium">{item.title}</p>
                    <p className="mt-2 text-xs text-white/30">{item.text}</p>
                  </div>

                  {index < 3 && (
                    <div className="hidden items-center md:flex">
                      <div className="h-px flex-1 bg-gradient-to-r from-purple-500/20 to-purple-400/60" />
                      <ChevronRight className="h-4 w-4 text-purple-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          LARGE IMAGE
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="relative h-[480px] overflow-hidden rounded-[40px] border border-white/10 md:h-[700px]">
         <Image
  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=90"
  alt="3D technology infrastructure"
  fill
  unoptimized
  sizes="100vw"
  className="object-cover"
/>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/25" />

          <div className="absolute inset-x-0 bottom-0 p-7 md:p-14">
            <Link2 className="h-7 w-7 text-purple-300" />

            <h2 className="mt-5 max-w-4xl text-3xl font-semibold md:text-5xl">
              Turn fragmented software into one connected digital ecosystem.
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTEGRATIONS
      ========================================================= */}
      <section className="border-y border-white/[0.08]">
        <div className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              Integration ecosystem
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Connect the tools
              <span className="block text-white/25">
                your business already uses.
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {integrations.map((integration, index) => (
              <div
                key={integration}
                className="group relative flex h-32 items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.02]"
              >
                <div className="absolute inset-0 bg-purple-500/0 transition group-hover:bg-purple-500/[0.07]" />

                <div className="relative text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-500/10">
                    {index % 3 === 0 ? (
                      <Cloud className="h-4 w-4 text-purple-300" />
                    ) : index % 3 === 1 ? (
                      <Blocks className="h-4 w-4 text-purple-300" />
                    ) : (
                      <Plug className="h-4 w-4 text-purple-300" />
                    )}
                  </div>

                  <p className="mt-3 text-sm text-white/60">{integration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECURITY
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="relative overflow-hidden rounded-[40px] border border-purple-400/15 bg-gradient-to-br from-[#160D22] via-[#09090D] to-[#050505] px-6 py-20 md:px-12 lg:px-16">
          <div className="absolute right-[-150px] top-[-150px] h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[150px]" />

          <div className="relative mx-auto max-w-5xl text-center">
            <LockKeyhole className="mx-auto h-8 w-8 text-purple-300" />

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              APIs protected
              <span className="block text-white/25">
                at every connection point.
              </span>
            </h2>
          </div>

          <div className="relative mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
                <div
                  key={item.title}
                  className="rounded-[26px] border border-white/[0.08] bg-black/20 p-7 text-center backdrop-blur-xl"
                >
                  <Icon className="mx-auto h-5 w-5 text-purple-300" />

                  <p className="mt-5 font-medium">{item.title}</p>

                  <p className="mt-2 text-xs text-white/30">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="border-y border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              API engineering process
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              From disconnected systems
              <span className="block text-white/25">
                to reliable infrastructure.
              </span>
            </h2>
          </div>

          <div className="mt-16">
            {process.map((step) => (
              <div
                key={step.number}
                className="grid gap-4 border-t border-white/[0.08] py-9 md:grid-cols-[90px_1fr_1.4fr] md:gap-12 md:py-11"
              >
                <span className="text-sm text-purple-400">
                  {step.number}
                </span>

                <h3 className="text-xl font-semibold md:text-2xl">
                  {step.title}
                </h3>

                <p className="max-w-2xl text-sm leading-7 text-white/40 md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            API technology stack
          </p>

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            Engineered with technology
            <span className="block text-white/25">
              built for connectivity.
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {techStack.map((technology) => (
            <div
              key={technology}
              className="flex h-28 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.018] text-sm text-white/50 transition hover:border-purple-400/25 hover:bg-purple-500/[0.07] hover:text-white"
            >
              <Code2 className="mr-2 h-4 w-4 text-purple-400" />
              {technology}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          FINAL IMAGE CTA
      ========================================================= */}
      <section className="px-5 pb-28 md:px-8 lg:px-12 lg:pb-40">
        <div className="relative mx-auto min-h-[650px] max-w-[1450px] overflow-hidden rounded-[44px] border border-white/10">
          <Image
  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=90"
  alt="Future API technology"
  fill
  unoptimized
  sizes="100vw"
  className="object-cover opacity-55"
/>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/25" />

          <div className="relative z-10 flex min-h-[650px] items-end justify-center px-6 py-16 text-center md:px-12 lg:py-20">
            <div className="max-w-5xl">
              <Zap className="mx-auto h-8 w-8 text-purple-300" />

              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-purple-300">
                Connect with HYI
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                Build the connections
                <span className="block text-white/35">
                  behind your digital future.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/45">
                Connect your products, platforms and data through secure API
                infrastructure engineered by HYI.
              </p>

              <button className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-8 py-4 font-medium shadow-[0_15px_60px_rgba(124,58,237,.35)]">
                Talk to Our API Experts
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}