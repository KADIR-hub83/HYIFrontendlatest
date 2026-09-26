import {
  BookOpenText,
  Database,
  Fingerprint,
  GitBranch,
  KeyRound,
  ScanSearch,
  ShieldCheck,
  Users,
} from "lucide-react";

const pillars = [
  {
    Icon: Users,
    title: "Ownership & Stewardship",
    text: "Assign accountable owners and operational stewards to important data domains and products.",
  },
  {
    Icon: BookOpenText,
    title: "Business Glossary",
    text: "Create shared definitions for important business concepts, metrics and terminology.",
  },
  {
    Icon: Database,
    title: "Data Catalog",
    text: "Build a searchable inventory of datasets, tables, reports, models and other data assets.",
  },
  {
    Icon: GitBranch,
    title: "Data Lineage",
    text: "Understand how data moves from sources through transformations to reports, applications and AI.",
  },
  {
    Icon: ShieldCheck,
    title: "Data Quality",
    text: "Define measurable expectations for accuracy, completeness, validity, freshness and consistency.",
  },
  {
    Icon: Fingerprint,
    title: "Classification",
    text: "Identify and label sensitive, confidential, regulated and business-critical information.",
  },
  {
    Icon: KeyRound,
    title: "Access Governance",
    text: "Control who can access specific information and under which business conditions.",
  },
  {
    Icon: ScanSearch,
    title: "Monitoring & Audit",
    text: "Track governance health, policy adherence, access activity and unresolved data issues.",
  },
];

export default function GovernancePillars() {
  return (
    <section className="border-y border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="max-w-[850px]">
          <p className="font-mono text-[7px] tracking-[0.28em] text-[#ddd2e9]/40">
            02 / GOVERNANCE SYSTEM
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            The building blocks of
            <span className="text-white/32"> trusted data.</span>
          </h2>

          <p className="mt-7 max-w-[700px] text-[11px] leading-7 text-white/45">
            Enterprise governance works as a connected system. Cataloging
            without ownership, quality without definitions, or access controls
            without classification leaves important gaps.
          </p>
        </div>

        <div className="mt-16 grid border-l border-t border-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ Icon, title, text }, index) => (
            <article
              key={title}
              className="min-h-[290px] border-b border-r border-white/[0.07] p-7"
            >
              <div className="flex items-center justify-between">
                <Icon
                  size={18}
                  strokeWidth={1}
                  className="text-[#e4daec]/48"
                />

                <span className="font-mono text-[5px] text-white/18">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-16 text-[15px] font-medium">
                {title}
              </h3>

              <p className="mt-5 text-[10px] leading-6 text-white/40">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}