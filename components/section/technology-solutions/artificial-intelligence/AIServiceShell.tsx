import Link from "next/link";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import type { AIService } from "@/components/data/ai-services.data";

type Props = { service: AIService };

export default function AIServiceShell({ service }: Props) {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-slate-950">
      <Header />

      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#07152d] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-36 h-[34rem] w-[34rem] rounded-full bg-blue-500/20 blur-[110px]" />
          <div className="absolute -bottom-56 -left-24 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-[110px]" />
          <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "linear-gradient(to bottom, black, transparent 90%)" }} />
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-blue-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,.8)]" />
              {service.eyebrow}
            </p>

            <h1 className="hyi-h1 hyi-white max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {service.headline}
            </h1>

            <p className="hyi-p hyi-3 mt-7 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              {service.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-400">
                Discuss your project <span aria-hidden="true" className="hyi-white-icon ml-2">↗</span>
              </Link>
              <a href="#capabilities" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore capabilities <span aria-hidden="true" className="hyi-white-icon ml-2">↓</span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-200">HYI.AI / SYSTEM</p>
                  <p className="mt-1 text-sm text-white/60">Solution framework</p>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] font-medium text-emerald-200">Production-minded</span>
              </div>
              <div className="space-y-4 py-6">
                {["Understand the problem", "Engineer the solution", "Deploy with confidence"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-400/15 text-sm font-semibold text-blue-100">{String(index + 1).padStart(2, "0")}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white">{item}</p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className={`h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 ${index === 0 ? "w-full" : index === 1 ? "w-4/5" : "w-3/5"}`} />
                      </div>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                <div className="rounded-2xl bg-black/15 p-4">
                  <p className="text-2xl font-semibold text-white">{String(service.sections.length).padStart(2, "0")}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-white/50">Core stages</p>
                </div>
                <div className="rounded-2xl bg-black/15 p-4">
                  <p className="text-2xl font-semibold text-white">01</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-white/50">Unified framework</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-4 -z-10 h-28 w-28 rounded-full bg-blue-400/30 blur-3xl" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[.65fr_1.35fr] md:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-600">Overview</p>
            <h2 className="hyi-h1 hyi-blue mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Built for real-world outcomes.</h2>
          </div>
          <p className="hyi-p hyi-3 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">{service.intro}</p>
        </div>
      </section>

      <section id="capabilities" className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-600">What we deliver</p>
            <h2 className="hyi-h1 hyi-blue mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">A clear, scalable path from idea to impact.</h2>
            <p className="hyi-p hyi-3 mt-5 text-base leading-7 text-slate-600">A consistent engineering framework, tailored to the needs and constraints of each solution.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {service.sections.map((section, index) => (
              <article key={section.title} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-sm font-bold text-blue-700">{String(index + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className="h-px w-14 bg-gradient-to-r from-blue-200 to-transparent" />
                </div>
                <h3 className="hyi-h1 hyi-blue mt-7 text-xl font-semibold">{section.title}</h3>
                <p className="hyi-p hyi-3 mt-3 text-sm leading-7 text-slate-600">{section.description}</p>
                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="overflow-hidden rounded-[2rem] bg-[#07152d] px-6 py-12 text-center text-white sm:px-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-200">Let&apos;s build what&apos;s next</p>
          <h2 className="hyi-h1 hyi-white mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">Ready to put {service.title.toLowerCase()} to work?</h2>
          <p className="hyi-p hyi-3 mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">Talk with our team about your goals, requirements and the right way to take your next AI initiative forward.</p>
          <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-400">Start a conversation <span aria-hidden="true" className="hyi-white-icon ml-2">↗</span></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}


import { aiServiceLinks } from "@/components/data/ai-services.data";

export function AIServiceIndex() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-slate-950">
      <Header />
      <section className="relative overflow-hidden bg-[#07152d] px-5 pb-16 pt-28 text-white md:pb-24 md:pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-200">HYI.AI / Technology</p>
          <h1 className="hyi-h1 hyi-white mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-7xl">Artificial intelligence, engineered for business.</h1>
          <p className="hyi-p hyi-3 mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">Explore our AI capabilities—from machine learning and generative AI to autonomous agents, intelligent automation and responsible AI.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-600">Our capabilities</p>
          <h2 className="hyi-h1 hyi-blue mt-4 text-3xl font-semibold sm:text-4xl">Explore AI services</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {aiServiceLinks.map((service, index) => (
            <Link key={service.slug} href={`/artificial-intelligence/${service.slug}`} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5">
              <span className="text-xs font-bold tracking-widest text-blue-600">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="hyi-h1 hyi-blue mt-5 text-xl font-semibold">{service.title}</h2>
              <p className="hyi-p hyi-3 mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-blue-700">Explore service <span className="hyi-blue-icon ml-2 transition-transform group-hover:translate-x-1">→</span></span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
