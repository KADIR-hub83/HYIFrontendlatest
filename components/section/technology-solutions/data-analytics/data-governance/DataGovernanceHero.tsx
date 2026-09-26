import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Database,
  Fingerprint,
  GitBranch,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  { Icon: Database, label: "Catalog" },
  { Icon: GitBranch, label: "Lineage" },
  { Icon: ShieldCheck, label: "Quality" },
  { Icon: Fingerprint, label: "Ownership" },
  { Icon: LockKeyhole, label: "Access" },
];

export default function DataGovernanceHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#050505] pt-28 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[30%] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#ddd2eb]/[0.045] blur-[150px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-16 pb-20 lg:grid-cols-[1.3fr_.7fr] lg:pb-28">
          <div>
            <div className="flex w-fit items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2">
              <BookOpen size={11} className="text-[#e6dcf0]/55" />

              <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/40">
                Data Governance
              </span>
            </div>

            <h1 className="mt-8 max-w-[1050px] text-[clamp(4rem,8.5vw,8.8rem)] font-medium leading-[0.85] tracking-[-0.075em]">
              Know your data.
              <span className="block bg-gradient-to-r from-white via-[#e6deed] to-[#8e8398] bg-clip-text text-transparent">
                Trust your data.
              </span>
              <span className="block text-white/24">
                Govern its use.
              </span>
            </h1>

            <p className="mt-9 max-w-[750px] text-[12px] leading-7 text-white/55 md:text-[14px] md:leading-8">
              Data governance establishes the accountability, policies,
              standards, metadata and controls required to make enterprise data
              discoverable, understandable, reliable, protected and usable
              across analytics, operations and AI.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-3 rounded-full bg-[#eee8f5] px-6 py-3.5 text-[9px] font-medium text-black transition hover:scale-[1.02]"
              >
                Build a governance program
                <ArrowRight size={12} />
              </Link>

              <a
                href="#governance-foundation"
                className="flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-[9px] text-white/55 transition hover:bg-white/[0.04]"
              >
                Learn the framework
                <ArrowDown size={11} />
              </a>
            </div>
          </div>

          <aside className="self-end border-l border-white/[0.08] pl-7">
            <p className="font-mono text-[6px] uppercase tracking-[0.25em] text-white/25">
              Governance answers
            </p>

            <div className="mt-7 space-y-6">
              {[
                "What data do we have?",
                "Where did it come from?",
                "Who owns it?",
                "Can it be trusted?",
                "Who should access it?",
                "How may it be used?",
              ].map((question, index) => (
                <div
                  key={question}
                  className="flex items-start gap-4 border-b border-white/[0.06] pb-5"
                >
                  <span className="font-mono text-[6px] text-[#ddd2e9]/30">
                    0{index + 1}
                  </span>

                  <p className="text-[11px] text-white/55">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="grid border-x border-t border-white/[0.07] sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 border-b border-r border-white/[0.06] px-6 py-6 lg:border-b-0"
            >
              <Icon
                size={15}
                strokeWidth={1}
                className="text-[#e5dced]/45"
              />

              <span className="text-[9px] text-white/42">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}