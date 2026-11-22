"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

const services = [
  {
    no: "01",
    tag: "OPERATIONS",
    title: "Business Operations",
    text: "Run structured, measurable and scalable day-to-day operations through dedicated GCC delivery teams.",
  },
  {
    no: "02",
    tag: "FINANCE",
    title: "Finance Operations",
    text: "Build controlled finance workflows covering transactional processes, reporting and operational support.",
  },
  {
    no: "03",
    tag: "CUSTOMER",
    title: "Customer Experience",
    text: "Operate responsive customer-support environments with clear service levels and continuous performance visibility.",
  },
  {
    no: "04",
    tag: "WORKFORCE",
    title: "People Operations",
    text: "Manage workforce processes, employee operations and support functions through structured global delivery.",
  },
  {
    no: "05",
    tag: "DATA",
    title: "Data Operations",
    text: "Transform operational data into monitored workflows, quality controls and actionable business intelligence.",
  },
  {
    no: "06",
    tag: "AUTOMATION",
    title: "AI-Enabled Operations",
    text: "Introduce intelligent automation into repeatable processes while keeping governance and human oversight.",
  },
];

const nodes = [
  { name: "FIN", x: "18%", y: "39%" },
  { name: "HR", x: "29%", y: "72%" },
  { name: "CX", x: "79%", y: "39%" },
  { name: "DATA", x: "70%", y: "72%" },
  { name: "IT", x: "50%", y: "14%" },
];

function OperationsCore() {
  return (
    <div className="relative mx-auto h-[480px] w-full max-w-[1050px] md:h-[620px]">
      <div className="absolute left-1/2 top-1/2 h-[440px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.12] blur-[130px]" />


      {/* orbital system */}
      <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 md:h-[500px] md:w-[500px]">
        <div className="ops-spin absolute inset-0 rounded-full border border-dashed border-purple-400/[0.16]" />
        <div className="absolute inset-[10%] rounded-full border border-purple-400/[0.13]" />
        <div className="absolute inset-[22%] rounded-full border border-purple-400/[0.16]" />
        <div className="absolute inset-[34%] rounded-full border border-purple-300/[0.18]" />

        <div className="radar absolute left-1/2 top-1/2 h-[48%] w-[48%] origin-bottom-left bg-gradient-to-tr from-transparent to-purple-400/[0.09]" />

        {/* cross lines */}
        <div className="absolute left-1/2 top-[4%] h-[92%] w-px bg-gradient-to-b from-transparent via-purple-400/20 to-transparent" />
        <div className="absolute left-[4%] top-1/2 h-px w-[92%] bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />

        {/* core */}
        <div className="absolute left-1/2 top-1/2 flex h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/25 bg-[#08040f]/95 shadow-[0_0_80px_rgba(126,55,220,.38)] backdrop-blur-xl md:h-[175px] md:w-[175px]">
          <div className="ops-pulse absolute inset-[-18px] rounded-full border border-purple-400/[0.12]" />
          <div className="absolute inset-[12px] rounded-full border border-purple-400/[0.15]" />

          <div className="text-center">
            <div className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-3xl font-semibold text-transparent">
              OPS
            </div>
            <div className="mt-2 text-[7px] uppercase tracking-[2.5px] text-white/28">
              Command Core
            </div>
          </div>
        </div>

        {/* orbital points */}
        <div className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-purple-200 shadow-[0_0_18px_5px_rgba(168,85,247,.6)]" />
        <div className="absolute bottom-[7%] right-[11%] h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_18px_5px_rgba(168,85,247,.5)]" />
        <div className="absolute left-[4%] top-[57%] h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_18px_5px_rgba(168,85,247,.5)]" />
      </div>

      {/* nodes */}
      {nodes.map((node) => (
        <div
          key={node.name}
          className="absolute z-30 hidden md:block"
          style={{ left: node.x, top: node.y }}
        >
          <div className="group relative flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-white/[0.08] bg-[#08070d]/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/30">
            <span className="text-[9px] font-medium tracking-[1.5px] text-white/60">
              {node.name}
            </span>

            <span className="absolute -right-1 -top-1 h-[6px] w-[6px] rounded-full bg-green-400 shadow-[0_0_9px_#4ade80]" />
          </div>
        </div>
      ))}

    </div>
  );
}

function LiveOperationsConsole() {
  const [step, setStep] = useState(0);

  const activity = [
    "Monitoring global service queues",
    "Validating operational SLAs",
    "Analyzing workflow performance",
    "Optimizing workforce allocation",
    "Running AI process intelligence",
    "Global operations synchronized",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((current) => (current + 1) % activity.length);
    }, 1400);

    return () => clearInterval(timer);
  }, [activity.length]);

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#07070a]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
        <div className="flex gap-2">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-purple-400/60" />
        </div>

        <span className="text-[8px] uppercase tracking-[2px] text-white/20">
          HYI Operations Intelligence
        </span>
      </div>

      <div className="p-7 md:p-9">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8px] uppercase tracking-[2px] text-purple-300/40">
              Live Operations
            </p>
            <h3 className="mt-2 text-xl font-medium">Command Console</h3>
          </div>

          <span className="rounded-full border border-green-400/10 bg-green-400/[0.04] px-3 py-1 text-[7px] uppercase tracking-[1.5px] text-green-400/60">
            Live
          </span>
        </div>

        <div className="mt-8 space-y-4">
          {activity.map((item, index) => {
            const completed =
              index < step || (step === 0 && index === activity.length - 1);
            const active = index === step;

            return (
              <div
                key={item}
                className={`flex items-center gap-4 rounded-xl border px-4 py-3 transition duration-500 ${
                  active
                    ? "border-purple-400/15 bg-purple-500/[0.05]"
                    : "border-white/[0.04] bg-white/[0.01]"
                }`}
              >
                <span
                  className={`h-[6px] w-[6px] rounded-full ${
                    active
                      ? "animate-pulse bg-purple-300 shadow-[0_0_12px_#a855f7]"
                      : completed
                      ? "bg-green-400/70"
                      : "bg-white/15"
                  }`}
                />

                <span
                  className={`text-[11px] md:text-[12px] ${
                    active ? "text-white/75" : "text-white/30"
                  }`}
                >
                  {item}
                </span>

                <span className="ml-auto text-[7px] uppercase tracking-[1px] text-white/15">
                  {active ? "Processing" : completed ? "Complete" : "Queued"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function OperationsManagedServicesPage() {
  return (
    <main className="overflow-hidden bg-[#020203] text-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden ">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[32%] h-[900px] w-[1200px] -translate-x-1/2 rounded-full bg-purple-800/[0.10] blur-[180px]" />
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(145,85,255,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(145,85,255,.18) 1px,transparent 1px)",
            backgroundSize: "90px 90px",
            maskImage:
              "linear-gradient(to bottom,transparent,black 30%,black 70%,transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom,transparent,black 30%,black 70%,transparent)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1350px] px-5  pt-28 md:px-10 md:pt-32 lg:px-16">
          <div className="mx-auto mt-3 max-w-[1100px] text-center">
       

            <h1 className="hyi-h1 hyi-white">
              Operations &
              <span className="block hyi-blue">
                Managed Services
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[800px] hyi-p">
              Run globally distributed business operations through dedicated
              teams, intelligent workflows, measurable service levels and
              continuous operational governance.
            </p>
          </div>

          <div className="-mt-4">
            <OperationsCore />
          </div>
     
        </div>
      </section>



      {/* SERVICES */}
      <section
        id="managed-services"
        className="relative bg-[#030305] py-10"
      >
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 lg:px-16">
          <div className="mx-auto max-w-[800px] text-center">
       
            <h2 className="hyi-h1 hyi-white">
              Operations built to
              <span className="block hyi-blue">
                perform continuously.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[680px] hyi-p">
              Integrated managed services that combine specialized people,
              structured processes, technology and operational intelligence.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.no}
                className={`group relative overflow-hidden rounded-[27px] border border-white/[0.07] bg-[#08070d]/80 p-7 transition duration-500 hover:-translate-y-2 hover:border-purple-400/20 md:p-8 ${
                  index === 1 || index === 4 ? "lg:translate-y-8" : ""
                }`}
              >
                <div className="absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-purple-600/[0.06] blur-[70px] transition group-hover:bg-purple-600/[0.15]" />

                <div className="relative z-10 flex items-center justify-end">
            

                  <span className="rounded-full border border-white/[0.06] px-3 py-1 text-[7px] tracking-[1.5px] text-white/25">
                    {service.tag}
                  </span>
                </div>

                <div className="relative z-10 mt-3">
                  <h3 className="hyi-h3 hyi-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 hyi-p">
                    {service.text}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTROL + IMAGE */}
      <section className="relative bg-[#020203] py-10">
        <div className="mx-auto max-w-[1350px] px-5 md:px-10 lg:px-16">
          <div className="grid items-stretch gap-5 lg:grid-cols-2">
            <LiveOperationsConsole />

            <div className="relative min-h-[470px] overflow-hidden rounded-[28px] border border-white/[0.07]">
              <Image
                src="/images/gcc/managed-operations-team.jpg"
                alt="Managed operations team"
                fill
                className="object-cover opacity-55"
                sizes="(max-width:1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050407] via-[#050407]/30 to-transparent" />

              <div className="absolute bottom-0 p-8 md:p-10">
                <span className="text-[8px] uppercase tracking-[2px] text-purple-200/45">
                  Dedicated Delivery
                </span>

                <h3 className="mt-3 max-w-[450px] hyi-h1 hyi-white">
                  Human expertise supported by intelligent operations.
                </h3>

                <p className="mt-2 max-w-[470px] hyi-p">
                  Dedicated specialists operate alongside automation,
                  performance intelligence and structured governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATING MODEL */}
      <section className=" bg-[#030305] ">
        <div className="mx-auto max-w-[1350px] px-5 md:px-10 lg:px-16">
          <div className="mx-auto max-w-[800px] text-center">
     

            <h2 className=" hyi-h1 hyi-whitw">
              A continuous cycle of
              <span className="block hyi-blue">
                operational excellence.
              </span>
            </h2>
          </div>

          <div className="relative mt-6 grid gap-4 md:grid-cols-4">
            <div className="absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent md:block" />

            {[
              ["01", "Operate", "Execute structured global processes."],
              ["02", "Monitor", "Track SLAs, quality and performance."],
              ["03", "Optimize", "Improve workflows using operational intelligence."],
              ["04", "Scale", "Expand capacity as business requirements evolve."],
            ].map(([no, title, text]) => (
              <div
                key={no}
                className="relative rounded-[24px] border border-white/[0.06] bg-white/[0.018] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/20"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/[0.08] text-[9px] text-purple-200/60">
                  {no}
                </div>

                <h3 className="mt-3 hyi-h3 hyi-white">
                  {title}
                </h3>

                <p className="mt-2 hyi-p">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <Footer />

      <style jsx global>{`
        @keyframes opsSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .ops-spin {
          animation: opsSpin 35s linear infinite;
        }

        @keyframes radarRotate {
          from {
            transform: translate(-100%, -100%) rotate(0deg);
          }
          to {
            transform: translate(-100%, -100%) rotate(360deg);
          }
        }

        .radar {
          transform-origin: 100% 100%;
          animation: radarRotate 7s linear infinite;
        }

        @keyframes opsPulse {
          0%,
          100% {
            transform: scale(0.92);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.12);
            opacity: 0.75;
          }
        }

        .ops-pulse {
          animation: opsPulse 3.5s ease-in-out infinite;
        }

        @keyframes ctaPulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.25;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.7;
          }
        }

        .cta-ring {
          animation: ctaPulse 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .ops-spin,
          .radar,
          .ops-pulse,
          .cta-ring {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}