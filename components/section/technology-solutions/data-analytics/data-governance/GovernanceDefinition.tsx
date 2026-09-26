import { ArrowUpRight } from "lucide-react";

export default function GovernanceDefinition() {
  return (
    <section
      id="governance-foundation"
      className="bg-[#070707] py-28"
    >
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="font-mono text-[7px] uppercase tracking-[0.28em] text-[#ddd2e9]/40">
              01 / Foundation
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
              What is
              <span className="block text-white/35">
                data governance?
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-[820px] text-xl font-light leading-[1.65] tracking-[-0.02em] text-white/72 md:text-2xl">
              Data governance is the system of accountability, decision rights,
              standards and controls used to manage data as an organizational
              asset.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">
              {[
                [
                  "Accountability",
                  "Defines who owns important data domains and who is responsible for maintaining definitions, quality and appropriate use.",
                ],
                [
                  "Standards",
                  "Creates common definitions, naming conventions, classifications, quality expectations and lifecycle rules.",
                ],
                [
                  "Control",
                  "Establishes how sensitive information is accessed, shared, retained, protected and monitored.",
                ],
                [
                  "Transparency",
                  "Provides metadata, lineage and business context so people can understand where data came from and how it should be interpreted.",
                ],
              ].map(([title, text]) => (
                <article
                  key={title}
                  className="bg-[#080808] p-7 md:p-9"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white/80">
                      {title}
                    </h3>

                    <ArrowUpRight
                      size={13}
                      className="text-white/20"
                    />
                  </div>

                  <p className="mt-5 text-[10px] leading-6 text-white/42">
                    {text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 border-l border-[#ddd2e9]/30 pl-6">
              <p className="text-[11px] leading-7 text-white/48">
                Governance is not simply a security project or a data catalog.
                A mature program connects people, business definitions,
                technology, processes and controls so that data remains useful
                and trustworthy throughout its lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}