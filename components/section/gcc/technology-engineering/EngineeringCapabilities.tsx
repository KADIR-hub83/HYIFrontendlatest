const capabilities = [
  {
    no: "01",
    code: "PRODUCT",
    title: "Product Engineering",
    text: "Build scalable digital products through modern frontend, backend, mobile and platform engineering practices.",
    items: ["Web Platforms", "Mobile Apps", "APIs", "SaaS Products"],
  },
  {
    no: "02",
    code: "CLOUD",
    title: "Cloud Engineering",
    text: "Modernize infrastructure and applications using cloud-native architecture designed for resilience and scale.",
    items: ["AWS & Azure", "Containers", "Kubernetes", "Cloud Native"],
  },
  {
    no: "03",
    code: "AI / DATA",
    title: "AI & Data Engineering",
    text: "Create intelligent data platforms, machine-learning systems and AI-enabled digital experiences.",
    items: ["Data Platforms", "ML Systems", "GenAI", "Analytics"],
  },
  {
    no: "04",
    code: "DEVOPS",
    title: "DevOps & SRE",
    text: "Accelerate software delivery through automated CI/CD, observability and reliable platform operations.",
    items: ["CI/CD", "SRE", "Observability", "Automation"],
  },
  {
    no: "05",
    code: "QUALITY",
    title: "Quality Engineering",
    text: "Engineer quality continuously with automated validation, performance testing and release intelligence.",
    items: ["Automation", "Performance", "API Testing", "QualityOps"],
  },
  {
    no: "06",
    code: "SECURITY",
    title: "Security Engineering",
    text: "Embed security throughout engineering workflows with DevSecOps, identity and application protection.",
    items: ["DevSecOps", "IAM", "AppSec", "Cloud Security"],
  },
];

export default function EngineeringCapabilities() {
  return (
    <section
      id="engineering-capabilities"
      className="relative overflow-hidden  bg-[#030305] "
    >
      <div className="pointer-events-none absolute left-1/2 top-[30%] h-[800px] w-[1200px] -translate-x-1/2 rounded-full bg-purple-900/[0.06] blur-[190px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[850px] text-center">
       

          <h2 className=" hyi-h1 hyi-white">
            One center. Every layer of
            <span className="block hyi-blue">
              modern engineering.
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-[700px] hyi-p">
            Build multidisciplinary engineering capability without creating
            disconnected technology silos.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <article
              key={capability.no}
              className={`engineering-capability group relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#08070d]/75 p-7 transition duration-500 hover:-translate-y-2 hover:border-purple-400/25 md:p-8 ${
                index === 1 || index === 4 ? "lg:translate-y-8" : ""
              }`}
            >
              <div className="absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-purple-600/[0.06] blur-[80px] transition duration-500 group-hover:bg-purple-600/[0.16]" />

              <div className="capability-scan absolute left-[-45%] top-0 h-full w-[25%] rotate-[15deg] bg-gradient-to-r from-transparent via-purple-100/[0.04] to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
           

                <span className="rounded-full border border-white/[0.06] bg-white/[0.015] px-3 py-1 text-[7px] tracking-[1.4px] text-white/85">
                  {capability.code}
                </span>
              </div>

              <div className="relative z-10 mt-3">
                <div className="mb-3 flex h-[54px] w-[54px] items-center justify-center rounded-2xl border border-purple-400/[0.12] bg-purple-500/[0.045]">
                  <div className="capability-core flex h-6 w-6 items-center justify-center rounded-full border border-purple-300/20">
                    <span className="h-[5px] w-[5px] rounded-full bg-white shadow-[0_0_14px_4px_rgba(192,132,252,.35)]" />
                  </div>
                </div>

                <h3 className="hyi-h3 hyi-white">
                  {capability.title}
                </h3>

                <p className="mt-2 hyi-h3 hyi-p">
                  {capability.text}
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {capability.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.05] bg-white/[0.015] px-3 py-1.5 hyi-p"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .engineering-capability:hover .capability-scan {
          animation: capabilityScan 1s ease forwards;
        }

        @keyframes capabilityScan {
          from { left: -45%; }
          to { left: 130%; }
        }

        @keyframes capabilityCore {
          0%,100% { transform: scale(.9); opacity:.7; }
          50% { transform: scale(1.12); opacity:1; }
        }

        .capability-core {
          animation: capabilityCore 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}