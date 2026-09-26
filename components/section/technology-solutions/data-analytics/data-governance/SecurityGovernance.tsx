import {
  Eye,
  FileKey,
  Fingerprint,
  KeyRound,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

const controls = [
  {
    Icon: ScanSearch,
    title: "Discover",
    text: "Locate sensitive and business-critical information across the data estate.",
  },
  {
    Icon: Fingerprint,
    title: "Classify",
    text: "Apply classifications that describe sensitivity, confidentiality and business importance.",
  },
  {
    Icon: KeyRound,
    title: "Authorize",
    text: "Grant access according to role, purpose, domain and organizational policy.",
  },
  {
    Icon: Eye,
    title: "Monitor",
    text: "Observe access patterns, governance events and policy exceptions.",
  },
  {
    Icon: FileKey,
    title: "Retain",
    text: "Apply appropriate retention and lifecycle expectations to governed information.",
  },
  {
    Icon: ShieldCheck,
    title: "Audit",
    text: "Maintain evidence that helps teams understand governance decisions and activity.",
  },
];

export default function SecurityGovernance() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="max-w-[800px]">
          <p className="font-mono text-[7px] tracking-[0.28em] text-[#ddd2e9]/40">
            07 / PROTECTION & CONTROL
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            The right data.
            <span className="block text-white/30">
              The right people. The right purpose.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {controls.map(({ Icon, title, text }, index) => (
            <article
              key={title}
              className="min-h-[260px] rounded-[26px] border border-white/[0.07] bg-[#080808] p-7"
            >
              <div className="flex justify-between">
                <Icon
                  size={17}
                  strokeWidth={1}
                  className="text-[#e4daec]/45"
                />

                <span className="font-mono text-[5px] text-white/18">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-14 text-[14px] font-medium">
                {title}
              </h3>

              <p className="mt-5 text-[9px] leading-6 text-white/38">
                {text}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-[900px] text-[9px] leading-6 text-white/30">
          Governance and security overlap but are not identical. Governance
          establishes accountability, policy and appropriate-use expectations;
          security technologies help enforce controls such as identity,
          authorization, encryption and monitoring.
        </p>
      </div>
    </section>
  );
}