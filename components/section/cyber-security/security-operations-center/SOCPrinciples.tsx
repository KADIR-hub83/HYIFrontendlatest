import { CircleDot } from "lucide-react";
import type { SOCService } from "./socServices";

export default function SOCPrinciples({
  service,
}: {
  service: SOCService;
}) {
  return (
    <section className="border-b border-white/[0.07] bg-black">
      <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/30">
            06 / Operating Principles
          </p>

          <h2 className="mt-5 text-3xl font-medium tracking-[-0.025em] md:text-[42px]">
            Built around clarity, context and control.
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          {service.principles.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-5 border-t border-white/[0.08] py-7 md:grid-cols-[60px_0.8fr_1.2fr]"
            >
              <div className="flex items-start">
                <CircleDot className="h-4 w-4 text-white/25" />
              </div>

              <h3 className="text-[14px] font-medium text-white/80">
                {item.title}
              </h3>

              <p className="text-[11px] leading-6 text-white/30">
                {item.description}
              </p>
            </div>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}