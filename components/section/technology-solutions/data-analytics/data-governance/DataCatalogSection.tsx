import {
  BookOpenText,
  Database,
  Search,
  Tag,
} from "lucide-react";

export default function DataCatalogSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[7px] tracking-[0.28em] text-[#ddd2e9]/40">
              04 / DATA CATALOG
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Find the right data.
              <span className="block text-white/30">
                Understand before using.
              </span>
            </h2>

            <p className="mt-7 max-w-[610px] text-[11px] leading-7 text-white/47">
              A data catalog provides an organized, searchable view of an
              organization's data assets and the metadata needed to understand
              them. A useful catalog connects technical metadata with business
              meaning, ownership, classification, quality and lineage.
            </p>

            <div className="mt-10 space-y-5">
              {[
                [
                  "Technical metadata",
                  "Schemas, tables, columns, types, systems and technical relationships.",
                ],
                [
                  "Business metadata",
                  "Definitions, owners, domains, descriptions, policies and business terminology.",
                ],
                [
                  "Operational metadata",
                  "Usage, freshness, processing activity and other operational context.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="border-l border-white/10 pl-5"
                >
                  <p className="text-[10px] font-medium text-white/65">
                    {title}
                  </p>

                  <p className="mt-2 text-[9px] leading-6 text-white/35">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/[0.08] bg-[#050505] p-5 md:p-7">
            <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3">
              <Search size={13} className="text-white/35" />

              <span className="text-[9px] text-white/25">
                Search enterprise data...
              </span>
            </div>

            <div className="mt-5 space-y-2">
              {[
                {
                  Icon: Database,
                  name: "customer_master",
                  type: "Certified Dataset",
                  owner: "Customer Data",
                },
                {
                  Icon: BookOpenText,
                  name: "active_customer",
                  type: "Business Term",
                  owner: "Customer Domain",
                },
                {
                  Icon: Tag,
                  name: "customer_email",
                  type: "Sensitive Attribute",
                  owner: "Customer Data",
                },
              ].map(({ Icon, name, type, owner }) => (
                <div
                  key={name}
                  className="rounded-[18px] border border-white/[0.06] p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07]">
                      <Icon
                        size={13}
                        className="text-[#e5dced]/45"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-white/70">
                        {name}
                      </p>

                      <p className="mt-2 text-[7px] text-white/30">
                        {type} · {owner}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[5px] text-white/30">
                          OWNER ASSIGNED
                        </span>

                        <span className="rounded-full border border-[#ded3e9]/10 px-2.5 py-1 text-[5px] text-[#ded3e9]/40">
                          GOVERNED
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 font-mono text-[5px] tracking-[0.14em] text-white/18">
              CONCEPTUAL GOVERNANCE CATALOG
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}