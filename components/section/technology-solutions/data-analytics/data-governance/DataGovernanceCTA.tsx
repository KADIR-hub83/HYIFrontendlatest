import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function DataGovernanceCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] py-36 md:py-44">
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ded3e9]/[0.04] blur-[160px]" />

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(circle at center,black,transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/[0.08] px-4 py-2">
          <ShieldCheck
            size={10}
            className="text-[#e5dced]/45"
          />

          <span className="font-mono text-[6px] tracking-[0.22em] text-white/30">
            TRUSTED DATA FOUNDATION
          </span>
        </div>

        <h2 className="mx-auto mt-8 max-w-[1000px] text-5xl font-medium leading-[0.94] tracking-[-0.065em] md:text-8xl">
          Data becomes valuable
          <span className="block text-white/30">
            when people can trust it.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[620px] text-[11px] leading-7 text-white/45">
          Establish the ownership, metadata, quality, lineage and controls
          needed to turn fragmented enterprise information into a governed
          foundation for analytics and AI.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-full bg-[#eee8f5] px-7 py-4 text-[10px] font-medium text-black transition hover:scale-[1.03]"
          >
            Design your governance framework
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}