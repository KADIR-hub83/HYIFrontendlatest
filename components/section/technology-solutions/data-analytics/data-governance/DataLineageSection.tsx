import {
  BarChart3,
  BrainCircuit,
  Database,
  GitBranch,
  Server,
} from "lucide-react";

const nodes = [
  {
    Icon: Server,
    title: "CRM",
    subtitle: "Source",
  },
  {
    Icon: Database,
    title: "Customer Raw",
    subtitle: "Ingest",
  },
  {
    Icon: GitBranch,
    title: "Customer 360",
    subtitle: "Transform",
  },
  {
    Icon: Database,
    title: "Curated",
    subtitle: "Data Product",
  },
  {
    Icon: BarChart3,
    title: "Revenue BI",
    subtitle: "Report",
  },
  {
    Icon: BrainCircuit,
    title: "Churn Model",
    subtitle: "AI",
  },
];

export default function DataLineageSection() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="max-w-[850px]">
          <p className="font-mono text-[7px] tracking-[0.28em] text-[#ddd2e9]/40">
            05 / DATA LINEAGE
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            Follow data from
            <span className="text-white/30">
              {" "}origin to decision.
            </span>
          </h2>

          <p className="mt-7 max-w-[720px] text-[11px] leading-7 text-white/45">
            Lineage documents how information moves between systems, how it is
            transformed and where it is consumed. This supports troubleshooting,
            impact analysis, auditability and trust.
          </p>
        </div>

        <div className="mt-16 overflow-x-auto rounded-[32px] border border-white/[0.08] bg-[#080808] p-7 md:p-10">
          <div className="min-w-[1050px]">
            <div className="grid grid-cols-6 gap-5">
              {nodes.map(({ Icon, title, subtitle }, index) => (
                <div key={title} className="relative">
                  {index !== nodes.length - 1 && (
                    <div className="absolute left-[80%] top-[45px] h-px w-[60%] bg-gradient-to-r from-[#ddd2e9]/25 to-[#ddd2e9]/5">
                      <span className="absolute right-0 top-[-2px] h-1 w-1 rounded-full bg-[#ddd2e9]/60" />
                    </div>
                  )}

                  <div className="relative z-10 rounded-[22px] border border-white/[0.08] bg-[#0a0a0a] p-5">
                    <Icon
                      size={15}
                      strokeWidth={1}
                      className="text-[#e5dced]/50"
                    />

                    <p className="mt-8 text-[10px] text-white/65">
                      {title}
                    </p>

                    <p className="mt-2 font-mono text-[5px] uppercase tracking-[0.15em] text-white/22">
                      {subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-4 gap-px bg-white/[0.06]">
              {[
                ["Impact Analysis", "What breaks if this dataset changes?"],
                ["Root Cause", "Where did a quality problem originate?"],
                ["Auditability", "How was this output produced?"],
                ["AI Traceability", "Which governed data feeds a model?"],
              ].map(([title, text]) => (
                <div key={title} className="bg-[#070707] p-5">
                  <p className="text-[9px] text-white/60">
                    {title}
                  </p>

                  <p className="mt-3 text-[7px] leading-5 text-white/30">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}