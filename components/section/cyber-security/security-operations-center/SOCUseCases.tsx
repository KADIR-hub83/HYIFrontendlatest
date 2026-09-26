import type { SOCService } from "./socServices";

export default function SOCUseCases({ service }: { service: SOCService }) {
  return (
    <section className="border-b border-white/[0.07] bg-[#030303]">
      <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/30">
              05 / Where It Fits
            </p>

            <h2 className="mt-5 max-w-sm text-3xl font-medium tracking-[-0.025em] md:text-[42px]">
              Security operations for complex environments.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {service.useCases.map((item, index) => (
              <article
                key={item.title}
                className="relative min-h-[210px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-black p-6"
              >
                <span className="absolute right-6 top-6 h-8 w-8 rounded-full bg-[#7c3aed]/15" />

                <span className="font-mono text-[8px] text-white/20">
                  CASE / 0{index + 1}
                </span>

                <h3 className="mt-12 text-[15px] font-medium text-white/85">
                  {item.title}
                </h3>

                <p className="mt-4 text-[11px] leading-6 text-white/30">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}