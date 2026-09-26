const stages = [
  {
    no: "01",
    title: "Discover",
    tag: "STRATEGY",
    text: "Define engineering priorities, architecture, skills, delivery requirements and measurable business outcomes.",
  },
  {
    no: "02",
    title: "Build The Team",
    tag: "TALENT",
    text: "Assemble specialized engineering teams aligned to your technology stack, product roadmap and operating model.",
  },
  {
    no: "03",
    title: "Engineer",
    tag: "DELIVERY",
    text: "Build products, platforms and digital capabilities through modern engineering and DevSecOps practices.",
  },
  {
    no: "04",
    title: "Scale",
    tag: "GROWTH",
    text: "Expand teams, platforms and delivery capacity while continuously improving quality, reliability and velocity.",
  },
];

export default function EngineeringPipeline() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#030305] py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            Engineering Delivery Model
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-1.3px] md:text-5xl">
            From engineering ambition
            <span className="block bg-gradient-to-r from-[#ddaaff] to-[#7758ff] bg-clip-text text-transparent">
              to scalable execution.
            </span>
          </h2>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-[10%] right-[10%] top-[37px] hidden h-px bg-white/[0.06] md:block" />

          <div className="pipeline-energy absolute left-[10%] top-[37px] hidden h-px bg-gradient-to-r from-transparent via-purple-300 to-purple-500 md:block" />

          <div className="grid gap-4 md:grid-cols-4">
            {stages.map((stage, index) => (
              <article
                key={stage.no}
                className="pipeline-card group relative overflow-hidden rounded-[25px] border border-white/[0.06] bg-white/[0.018] p-6 transition duration-500 hover:-translate-y-2 hover:border-purple-400/20 hover:bg-purple-500/[0.025]"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="pipeline-node flex h-[48px] w-[48px] items-center justify-center rounded-full border border-purple-400/20 bg-[#09060f] text-[9px] text-purple-200/55 shadow-[0_0_30px_rgba(126,55,220,.12)]">
                    {stage.no}
                  </div>

                  <span className="text-[7px] uppercase tracking-[1.5px] text-white/20">
                    {stage.tag}
                  </span>
                </div>

                <h3 className="relative z-10 mt-10 text-xl font-medium text-white/82">
                  {stage.title}
                </h3>

                <p className="relative z-10 mt-4 text-[13px] leading-7 text-white/34">
                  {stage.text}
                </p>

                {index !== stages.length - 1 && (
                  <span className="absolute bottom-6 right-6 text-lg text-purple-300/15 md:hidden">
                    ↓
                  </span>
                )}

                <div className="absolute bottom-0 left-0 h-px w-0 bg-purple-400/40 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pipelineEnergy {
          0% { width: 0; opacity: 0; }
          15% { opacity: 1; }
          80% { opacity: 1; }
          100% { width: 80%; opacity: 0; }
        }

        .pipeline-energy {
          animation: pipelineEnergy 5s ease-in-out infinite;
        }

        @keyframes pipelineNode {
          0%,100% { box-shadow: 0 0 20px rgba(126,55,220,.08); }
          50% { box-shadow: 0 0 35px rgba(168,85,247,.25); }
        }

        .pipeline-node {
          animation: pipelineNode 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}