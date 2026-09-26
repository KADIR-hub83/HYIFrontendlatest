import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PrescriptiveCTA() {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-36 md:py-44">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e4d8f2]/[0.045] blur-[160px]" />

      <div className="relative mx-auto max-w-[1200px] px-5 text-center">
        <p className="font-mono text-[7px] uppercase tracking-[0.32em] text-[#e7dcf4]/40">
          From Insight To Action
        </p>

        <h2 className="mx-auto mt-7 max-w-[1000px] text-5xl font-medium leading-[0.95] tracking-[-0.06em] md:text-8xl">
          Don&apos;t just predict
          <span className="block text-white/35">
            what happens next.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[590px] text-[11px] leading-7 text-white/45">
          Build decision intelligence that evaluates alternatives, understands
          constraints and recommends actions aligned with your business
          objectives.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-full bg-[#eee8f5] px-7 py-4 text-[10px] font-medium text-black transition hover:scale-[1.03]"
          >
            Build a decision system
            <ArrowRight size={13} />
          </Link>

          <Link
            href="/technology-solutions/data-analytics"
            className="rounded-full border border-white/10 px-7 py-4 text-[10px] text-white/55 transition hover:bg-white/[0.05] hover:text-white"
          >
            Explore Data Analytics
          </Link>
        </div>
      </div>
    </section>
  );
}