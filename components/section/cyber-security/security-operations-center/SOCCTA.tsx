import { ArrowRight, ShieldCheck } from "lucide-react";
import type { SOCService } from "./socServices";

export default function SOCCTA({ service }: { service: SOCService }) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="absolute left-[8%] top-[10%] h-32 w-32 rounded-full bg-[#7c3aed]/15 blur-[4px]" />
      <div className="absolute bottom-[5%] right-[12%] h-52 w-52 rounded-full bg-[#7c3aed]/10 blur-[70px]" />

      <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#050505] px-6 py-16 text-center md:px-12 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
            <ShieldCheck className="h-4 w-4 text-white/55" />
          </div>

          <p className="mt-7 text-[9px] uppercase tracking-[0.28em] text-white/30">
            HYI.AI / {service.eyebrow}
          </p>

          <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-[46px]">
            Build security operations around the signals that matter.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[12px] leading-7 text-white/35">
            Connect security telemetry, operational context and structured
            workflows into a security operations capability designed around your
            environment.
          </p>

          <button className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[11px] font-medium text-black">
            Talk to our security team
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}