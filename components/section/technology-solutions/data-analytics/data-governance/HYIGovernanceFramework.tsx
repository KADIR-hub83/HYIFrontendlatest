import {
  ArrowRight,
  BookOpenText,
  Database,
  GitBranch,
  ScanSearch,
  Settings2,
  ShieldCheck,
} from "lucide-react";

const stages = [
  {
    Icon: ScanSearch,
    step: "01",
    title: "Discover",
    text: "Map important systems, datasets, reports, data flows, business domains and governance risks.",
  },
  {
    Icon: BookOpenText,
    step: "02",
    title: "Define",
    text: "Establish ownership, business terminology, policies, classifications, quality expectations and decision rights.",
  },
  {
    Icon: Database,
    step: "03",
    title: "Catalog",
    text: "Organize technical and business metadata so governed assets can be discovered and understood.",
  },
  {
    Icon: GitBranch,
    step: "04",
    title: "Connect",
    text: "Connect metadata, lineage, business context and ownership across the data lifecycle.",
  },
  {
    Icon: ShieldCheck,
    step: "05",
    title: "Control",
    text: "Translate governance requirements into access, quality, classification and lifecycle controls.",
  },
  {
    Icon: Settings2,
    step: "06",
    title: "Operate",
    text: "Create repeatable stewardship, issue management, review and governance-health processes.",
  },
];

export default function HYIGovernanceFramework() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#090909] py-32">
      <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 bg-[#d9cee7]/[0.035] blur-[150px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#ded3e9]/10 bg-[#ded3e9]/[0.025] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#eee6f5]/60" />

              <span className="font-mono text-[6px] tracking-[0.22em] text-[#ded3e9]/45">
                HYI GOVERNANCE APPROACH
              </span>
            </div>

            <h2 className="mt-7 max-w-[600px] text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              From governance policy
              <span className="block text-white/30">
                to operating practice.
              </span>
            </h2>
          </div>

          <div className="lg:pt-14">
            <p className="max-w-[640px] text-[12px] leading-8 text-white/52">
              HYI's proposed governance delivery approach connects business
              accountability with technical implementation. Instead of treating
              governance as a static policy document, the framework is designed
              around discoverable metadata, measurable quality, clear ownership,
              traceability and practical controls.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {stages.map(({ Icon, step, title, text }) => (
            <div
              key={step}
              className="min-h-[310px] bg-[#070707] p-7 md:p-8"
            >
              <div className="flex items-center justify-between">
                <Icon
                  size={18}
                  strokeWidth={1}
                  className="text-[#e5dced]/50"
                />

                <span className="font-mono text-[6px] text-white/18">
                  {step}
                </span>
              </div>

              <h3 className="mt-16 text-xl font-medium">
                {title}
              </h3>

              <p className="mt-5 max-w-[340px] text-[10px] leading-6 text-white/40">
                {text}
              </p>

              <div className="mt-8 flex items-center gap-2 font-mono text-[5px] tracking-[0.15em] text-[#ddd2e9]/25">
                GOVERNANCE LAYER
                <ArrowRight size={8} />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-[800px] text-[8px] leading-5 text-white/24">
          The framework shown here describes a proposed HYI.AI delivery model.
          Specific governance controls, responsibilities and technology are
          adapted to each organization's regulatory, operational and data
          environment.
        </p>
      </div>
    </section>
  );
}