import {
  BookOpenText,
  Database,
  Fingerprint,
  GitBranch,
  KeyRound,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function GovernanceOperatingModel() {
  return (
    <section className="bg-[#070707] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="text-center">
          <p className="font-mono text-[7px] tracking-[0.28em] text-[#ddd2e9]/40">
            GOVERNANCE OPERATING MODEL
          </p>

          <h2 className="mx-auto mt-5 max-w-[850px] text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            Governance connects
            <span className="text-white/30">
              {" "}people, policy and data.
            </span>
          </h2>
        </div>

        <div className="relative mx-auto mt-20 max-w-[1150px] overflow-hidden rounded-[38px] border border-white/[0.08] bg-[#090909] p-5 md:p-10">
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />

          <div className="relative grid gap-4 lg:grid-cols-[1fr_1.3fr_1fr]">
            <div className="space-y-4">
              {[
                [Users, "Data Owners", "Accountability"],
                [Fingerprint, "Data Stewards", "Management"],
                [BookOpenText, "Business Teams", "Context"],
              ].map(([Icon, title, subtitle]) => {
                const I = Icon as typeof Users;

                return (
                  <div
                    key={title as string}
                    className="rounded-[22px] border border-white/[0.08] bg-black/50 p-5"
                  >
                    <I
                      size={15}
                      className="text-[#e4daec]/50"
                    />

                    <p className="mt-6 text-[11px] text-white/65">
                      {title as string}
                    </p>

                    <p className="mt-2 font-mono text-[5px] uppercase tracking-[0.18em] text-white/20">
                      {subtitle as string}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex min-h-[430px] items-center justify-center">
              <div className="relative flex h-[330px] w-[330px] items-center justify-center rounded-full border border-[#ddd2e9]/10">
                <div className="absolute inset-[45px] rounded-full border border-[#ddd2e9]/10" />

                <div className="absolute inset-[90px] rounded-full border border-[#ddd2e9]/15 bg-[#ddd2e9]/[0.025]" />

                <div className="relative z-10 text-center">
                  <Database
                    size={28}
                    strokeWidth={1}
                    className="mx-auto text-[#eee6f5]/70"
                  />

                  <p className="mt-5 text-sm font-medium">
                    GOVERNED DATA
                  </p>

                  <p className="mt-2 font-mono text-[5px] tracking-[0.2em] text-white/25">
                    TRUSTED • CONTROLLED • DISCOVERABLE
                  </p>
                </div>

                {[
                  "top-[8%] left-1/2 -translate-x-1/2",
                  "right-[5%] top-1/2 -translate-y-1/2",
                  "bottom-[8%] left-1/2 -translate-x-1/2",
                  "left-[5%] top-1/2 -translate-y-1/2",
                ].map((position) => (
                  <span
                    key={position}
                    className={`absolute ${position} h-2 w-2 rounded-full bg-[#e7ddee]/60 shadow-[0_0_18px_rgba(231,221,238,.4)]`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                [ShieldCheck, "Quality", "Trust"],
                [GitBranch, "Lineage", "Traceability"],
                [KeyRound, "Policy & Access", "Control"],
              ].map(([Icon, title, subtitle]) => {
                const I = Icon as typeof ShieldCheck;

                return (
                  <div
                    key={title as string}
                    className="rounded-[22px] border border-white/[0.08] bg-black/50 p-5"
                  >
                    <I
                      size={15}
                      className="text-[#e4daec]/50"
                    />

                    <p className="mt-6 text-[11px] text-white/65">
                      {title as string}
                    </p>

                    <p className="mt-2 font-mono text-[5px] uppercase tracking-[0.18em] text-white/20">
                      {subtitle as string}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}