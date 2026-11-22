
"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowRight,
  Boxes,
  Cloud,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  Orbit,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

const microservices = [
  "API Gateway",
  "Authentication Service",
  "User Service",
  "Payment Service",
  "Notification Service",
  "Order Service",
  "Analytics Service",
  "Search Service",
  "Billing Service",
  "File Service",
  "AI Service",
  "Monitoring Service",
];

const capabilities = [
  {
    no: "01",
    icon: Boxes,
    title: "Microservices Architecture",
    text: "Break complex applications into focused, independently deployable services.",
  },
  {
    no: "02",
    icon: Network,
    title: "Service Communication",
    text: "Reliable REST, event-driven and asynchronous communication between services.",
  },
  {
    no: "03",
    icon: Cloud,
    title: "Cloud Native Infrastructure",
    text: "Containerized services designed for cloud deployment and elastic scaling.",
  },
  {
    no: "04",
    icon: Database,
    title: "Distributed Data",
    text: "Service-specific databases and data flows designed around domain boundaries.",
  },
  {
    no: "05",
    icon: ShieldCheck,
    title: "Secure Services",
    text: "Authentication, authorization and service-level access control throughout the platform.",
  },
  {
    no: "06",
    icon: Activity,
    title: "Observability",
    text: "Logging, monitoring, tracing and health checks across distributed systems.",
  },
];

const process = [
  {
    no: "01",
    title: "System Assessment",
    text: "We analyze your application, dependencies, traffic patterns and service boundaries.",
  },
  {
    no: "02",
    title: "Domain Decomposition",
    text: "Business capabilities are separated into logical, maintainable service domains.",
  },
  {
    no: "03",
    title: "Service Architecture",
    text: "APIs, events, databases, gateways and security boundaries are designed.",
  },
  {
    no: "04",
    title: "Microservices Engineering",
    text: "Services are developed, containerized and integrated into a distributed platform.",
  },
  {
    no: "05",
    title: "Testing & Resilience",
    text: "Failure handling, integration, performance and service reliability are validated.",
  },
  {
    no: "06",
    title: "Deploy & Observe",
    text: "Services are deployed with monitoring, tracing and continuous operational visibility.",
  },
];

const stack = [
  "Node.js",
  "TypeScript",
  "Python",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "RabbitMQ",
  "AWS",
  "Azure",
];

const architectureServices: [string, LucideIcon][] = [
  ["Users", Server],
  ["Orders", Boxes],
  ["Payments", Database],
  ["Notifications", Activity],
];

export default function MicroservicesDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden ">
        <div className="absolute inset-0 bg-[#030303]" />

        <div className="absolute left-1/2 top-[28%] h-[900px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[190px]" />

        <div className="absolute -left-[20%] top-[30%] h-[600px] w-[600px] rounded-full bg-indigo-900/10 blur-[170px]" />

        <div className="absolute -right-[20%] top-[40%] h-[650px] w-[650px] rounded-full bg-fuchsia-900/10 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#030303] to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1350px] px-5 pb-8 pt-24 md:px-8 lg:px-12 lg:pt-32">
          <div className="mx-auto max-w-6xl text-center">


            <h1 className="hyi-h1 hyi-white mt-7">
              Build systems that scale
              <span className="block hyi-blue">
                service by service.
              </span>
            </h1>

            <p className="hyi-p mx-auto mt-3 max-w-3xl">
              HYI engineers resilient microservices platforms that separate
              complexity, improve deployment speed and scale independently
              across business domains.
            </p>

        
          </div>

          {/* SERVICE NETWORK VISUAL */}
          <div className="relative mx-auto mt-8 h-[560px] max-w-[1200px] max-md:h-[420px]">
            <div className="absolute left-1/2 top-[48%] h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[130px]" />

            <div className="absolute left-1/2 top-[44%] z-20 flex h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[36px] border border-purple-400/25 bg-gradient-to-br from-purple-500/25 to-[#0A0810] shadow-[0_0_100px_rgba(124,58,237,.35)] md:h-[170px] md:w-[170px]">
              <div className="text-center">
                <Orbit className="mx-auto h-9 w-9 hyi-blue-icon" />
                <p className="mt-3 text-sm font-medium">Service Mesh</p>
                <p className="mt-1 text-[10px] text-white/30">HYI Core</p>
              </div>
            </div>

            {[
              {
                className: "left-[5%] top-[14%]",
                icon: Globe2,
                title: "Gateway",
              },
              {
                className: "left-[10%] bottom-[16%]",
                icon: Database,
                title: "Data",
              },
              {
                className: "right-[7%] top-[15%]",
                icon: ShieldCheck,
                title: "Identity",
              },
              {
                className: "right-[10%] bottom-[15%]",
                icon: Cloud,
                title: "Cloud",
              },
              {
                className: "left-[40%] top-[3%]",
                icon: Workflow,
                title: "Events",
              },
              {
                className: "right-[38%] bottom-[3%]",
                icon: Activity,
                title: "Observability",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`absolute ${item.className} hidden w-[190px] rounded-[24px] border border-white/[0.08] bg-[#0B0B10]/90 p-5 text-center shadow-2xl backdrop-blur-xl md:block`}
                >
                  <Icon className="mx-auto h-5 w-5 hyi-blue-icon" />
                  <p className="mt-3 text-sm font-medium">{item.title}</p>
                  <p className="mt-1 text-[10px] text-white/25">
                    Independent service
                  </p>
                </div>
              );
            })}

            <svg
              className="absolute inset-0 hidden h-full w-full md:block"
              viewBox="0 0 1200 560"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M250 150 C400 200 460 250 600 270"
                stroke="rgba(168,85,247,.35)"
              />
              <path
                d="M250 450 C390 400 470 330 600 300"
                stroke="rgba(168,85,247,.35)"
              />
              <path
                d="M950 150 C820 200 740 250 600 270"
                stroke="rgba(168,85,247,.35)"
              />
              <path
                d="M950 450 C820 400 750 340 600 300"
                stroke="rgba(168,85,247,.35)"
              />
              <path
                d="M520 100 C560 160 580 220 600 270"
                stroke="rgba(255,255,255,.12)"
              />
              <path
                d="M680 500 C650 420 620 360 600 300"
                stroke="rgba(255,255,255,.12)"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE ECOSYSTEM SLIDER
      ===================================================== */}
      <section className="overflow-hidden  bg-[#060606] py-5">
   

        <div className="relative overflow-hidden">
          <div className="microservices-marquee flex min-w-max gap-4 px-2">
            {[...microservices, ...microservices].map((service, index) => (
              <div
                key={`${service}-${index}`}
                className="group flex h-[78px] min-w-[220px] items-center justify-center rounded-[22px] border border-white/[0.08] bg-white/[0.025] px-7 transition hover:border-purple-400/30 hover:bg-purple-500/[0.07]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                    <Boxes className="h-4 w-4 hyi-white-icon" />
                  </div>

                  <span className="text-sm text-white/60 transition group-hover:text-white">
                    {service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          IMAGE FEATURE
      ===================================================== */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <div className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/10 md:rounded-[42px]">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2200&q=95"
            alt="Distributed cloud infrastructure"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/15" />

          <div className="relative flex min-h-[520px] items-end p-6 md:p-12 lg:p-16">
            <div className="max-w-5xl">
              <Cloud className="h-8 w-8 hyi-blue-icon" />

              <p className="mt-5 text-xs uppercase tracking-[0.3em] hyi-blue">
                Distributed architecture
              </p>

              <h2 className="hyi-h1 hyi-white mt-5">
                Scale the part that needs
                <span className="block hyi-blue">
                  scale — not the entire application.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className=" bg-white/[0.012]">
        <div className="mx-auto max-w-[1350px] px-5  md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
         

            <h2 className="hyi-h1 hyi-white ">
              Independent services.
              <span className="block hyi-blue">
                One connected platform.
              </span>
            </h2>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-5 transition duration-500 hover:-translate-y-1 hover:border-purple-400/25 md:p-8"
                >
                  <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-purple-600/0 blur-[80px] transition group-hover:bg-purple-600/15" />

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/15 bg-purple-500/10">
                      <Icon className="h-5 w-5 hyi-white-icon" />
                    </div>
                  </div>

                  <h3 className="hyi-h3 hyi-white relative mt-6">
                    {item.title}
                  </h3>

                  <p className="hyi-p relative mt-3 max-w-sm">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE VISUAL
      ===================================================== */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#09090D] px-5 py-10 md:rounded-[42px] md:px-10 md:py-14 lg:px-16">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[160px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <Network className="mx-auto h-8 w-8 hyi-white-icon" />

            <h2 className="hyi-h1 hyi-white mt-5">
              Microservices communicate
              <span className="block hyi-blue">
                through clear boundaries.
              </span>
            </h2>
          </div>

          <div className="relative mx-auto mt-8 max-w-6xl">
            <div className="mx-auto max-w-md rounded-2xl border border-purple-400/20 bg-purple-500/[0.08] p-5 text-center">
              <Globe2 className="mx-auto h-5 w-5 hyi-blue-icon" />
              <p className="mt-3 text-sm font-medium">API Gateway</p>
            </div>

            <div className="mx-auto h-10 w-px bg-purple-400/30" />

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {architectureServices.map(([title, Icon]) => (
                <div
                  key={title}
                  className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-5 text-center md:p-6"
                >
                  <Icon className="mx-auto h-5 w-5 hyi-white-icon" />
                  <p className="mt-4 text-sm">{title}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto h-10 w-px bg-white/10" />

            <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.08] bg-black/20 p-5 text-center">
              <GitBranch className="mx-auto h-5 w-5 hyi-blue-icon" />
              <p className="mt-3 text-sm font-medium">
                Events · Messaging · Service Communication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PERFORMANCE
      ===================================================== */}
      <section className=" bg-[#070707]">
        <div className="mx-auto max-w-[1350px] px-5 md:px-8 lg:px-12">
          <div className="overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#0A0A0F]">
            <div className="flex flex-col justify-between gap-5 border-b border-white/[0.07] p-6 md:flex-row md:items-end md:p-9">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] hyi-blue">
                  Distributed performance
                </p>

                <h2 className="hyi-h1 hyi-white mt-4">
                  Scale each service independently.
                </h2>
              </div>

              <div className="w-fit rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-4 py-2 text-xs text-emerald-300">
                <span aria-hidden="true">● </span>
                All services healthy
              </div>
            </div>

            <div className="grid gap-4 p-5 md:p-8 lg:grid-cols-[1.6fr_1fr]">
              <div className="rounded-[28px] border border-white/[0.07] bg-black/20 p-5 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Requests / Service</p>
                    <p className="mt-1 text-xs text-white/25">
                      Independent service load
                    </p>
                  </div>

                  <Gauge className="h-5 w-5 hyi-white-icon" />
                </div>

                <div className="mt-8 flex h-[230px] items-end gap-3">
                  {[35, 52, 48, 70, 62, 84, 76, 96, 68, 88].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-lg bg-gradient-to-t from-purple-900/30 to-purple-400"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  ["99.99%", "Availability"],
                  ["42ms", "Avg service latency"],
                  ["84", "Active services"],
                  ["18.4M", "Daily requests"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-5"
                  >
                    <p className="hyi-h3 hyi-white">{value}</p>
                    <p className="hyi-p mt-2">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GLOBAL INFRASTRUCTURE
      ===================================================== */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <div className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/10 md:rounded-[42px]">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=95"
            alt="Global distributed system"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/15" />

          <div className="relative flex min-h-[520px] items-end p-6 md:p-12 lg:p-16">
            <div className="max-w-5xl">
              <Zap className="h-8 w-8 hyi-blue-icon" />

              <h2 className="hyi-h1 hyi-white mt-5">
                Deploy services globally.
                <span className="block hyi-blue">
                  Scale without rebuilding the platform.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT PROCESS
      ===================================================== */}
      <section className="">
        <div className="mx-auto max-w-[1350px] px-5  md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
          

            <h2 className="hyi-h1 hyi-white ">
              From monolith
              <span className="block hyi-blue">
                to distributed architecture.
              </span>
            </h2>
          </div>

          <div className="mt-7">
            {process.map((item) => (
              <div
                key={item.no}
                className="grid gap-3 border-t border-white/[0.08] py-6 md:grid-cols-[90px_1fr_1.4fr] md:gap-12"
              >
                <span className="text-sm font-medium hyi-blue">
                  {item.no}
                </span>

                <h3 className="hyi-h3 hyi-white">
                  {item.title}
                </h3>

                <p className="hyi-p max-w-2xl">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK
      ===================================================== */}
      <section className="mx-auto max-w-[1350px] px-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
      

          <h2 className="hyi-h1 hyi-white mt-5">
            Built for distributed
            <span className="block hyi-blue">
              cloud environments.
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-7 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {stack.map((item) => (
            <div
              key={item}
              className="flex h-24 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.018] text-sm text-white/50 transition hover:border-purple-400/25 hover:bg-purple-500/[0.07] hover:text-white"
            >
              <Code2 className="mr-2 h-4 w-4 hyi-white-icon" />
              {item}
            </div>
          ))}
        </div>
      </section>



      <Footer />
    </main>
  );
}
