const workflow = [
  {
    no: "01",
    title: "Discover",
    label: "AI STRATEGY",
    text: "Identify high-value use cases, business requirements, data readiness and AI architecture.",
  },
  {
    no: "02",
    title: "Prototype",
    label: "EXPERIMENT",
    text: "Rapidly validate models, prompts, retrieval strategies and user experiences.",
  },
  {
    no: "03",
    title: "Engineer",
    label: "PRODUCTION",
    text: "Build secure AI applications, RAG systems, agents, APIs and evaluation pipelines.",
  },
  {
    no: "04",
    title: "Scale",
    label: "AI OPERATIONS",
    text: "Monitor quality, cost, safety and performance while expanding AI across the enterprise.",
  },
];

export default function AIWorkflow() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#030305] py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
            AI Delivery System
          </p>

          <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
            From AI opportunity
            <span className="block bg-gradient-to-r from-[#dfb0ff] to-[#7657ff] bg-clip-text text-transparent">
              to production intelligence.
            </span>
          </h2>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-[10%] right-[10%] top-[39px] hidden h-px bg-white/[0.07] md:block" />
          <div className="ai-pipeline absolute left-[10%] top-[39px] hidden h-px bg-gradient-to-r from-transparent via-purple-200 to-purple-600 md:block" />

          <div className="grid gap-4 md:grid-cols-4">
            {workflow.map((item) => (
              <article
                key={item.no}
                className="group relative overflow-hidden rounded-[25px] border border-white/[0.06] bg-white/[0.018] p-6 transition duration-500 hover:-translate-y-2 hover:border-purple-400/20"
              >
                <div className="workflow-node flex h-[50px] w-[50px] items-center justify-center rounded-full border border-purple-400/20 bg-[#09060f] text-[9px] text-purple-200/55">
                  {item.no}
                </div>

                <span className="absolute right-6 top-7 text-[7px] tracking-[1.4px] text-white/18">
                  {item.label}
                </span>

                <h3 className="mt-10 text-xl text-white/80">{item.title}</h3>

                <p className="mt-4 text-[13px] leading-7 text-white/32">
                  {item.text}
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-purple-400/40 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pipeline {
          0% { width:0; opacity:0; }
          15% { opacity:1; }
          85% { opacity:1; }
          100% { width:80%; opacity:0; }
        }

        .ai-pipeline {
          animation:pipeline 5s ease-in-out infinite;
        }

        @keyframes workflowNode {
          0%,100% { box-shadow:0 0 10px rgba(168,85,247,.05); }
          50% { box-shadow:0 0 35px rgba(168,85,247,.22); }
        }

        .workflow-node {
          animation:workflowNode 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}