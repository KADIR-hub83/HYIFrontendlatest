import type { CSSProperties } from "react";
import Link from "next/link";
import Card from "@/components/about/Card";
import Counter from "@/components/about/Counter";
import Magnetic from "@/components/about/Magnetic";
import Marquee from "@/components/about/Marquee";
import Reveal from "@/components/about/Reveal";
import ScrollText from "@/components/about/Scrolltext";
import SplitHeading from "@/components/about/Splitheading";
import StickySplit from "@/components/about/Stickysplit";
import Timeline from "@/components/about/TimeLine";
import OfferAccordion from "@/components/ai/OfferAccordion";
import { HIRE_PAGES, LINKS, common, type HireId } from "@/components/data/HireContent";
import EngageTabs from "./EngageTabs";
import HireShell from "./HireShell";
import LottiePlayer from "./LottiePlayer";
import RotatingWords from "./RotatingWords";
import Scramble from "./Scramble";

const ICONS = ["check", "team", "ripple", "bars"];
const CHIP_POS = [
  { top: "4%", left: "-4%", "--cx": 22 },
  { top: "46%", right: "-6%", "--cx": -26 },
  { bottom: "6%", left: "6%", "--cx": 16 },
] as const;

export default function HirePage({ id }: { id: HireId }) {
  const p = HIRE_PAGES.find((x) => x.id === id)!;
  const others = HIRE_PAGES.filter((x) => x.id !== id);

  return (
    <HireShell>
      {/* ───────── Hero ───────── */}
      <header
        className="grid min-h-[86vh] items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr]"
        style={{
          transform: "translateY(calc(var(--sy,0) * 0.14px))",
          opacity: "calc(1 - var(--sy,0) * 0.0014)",
        }}
      >
        <div>
          <p className="hyi-eyebrow mb-6 flex items-center gap-3">
            <span className="hyi-pulse inline-block h-2.5 w-2.5 rounded-full bg-[#4f9dff]" />
            <Scramble text={`Hire Talent · ${p.nav}`} />
          </p>
          <SplitHeading as="h1" text={p.title} accent={p.accent} className="hyi-h1 hyi-white" delay={100} />
          <p className="hyi-h2 hyi-white mt-5">
            {p.rot.prefix} <RotatingWords words={p.rot.words} className="hyi-blue hyi-shimmer" /> {p.rot.suffix}
          </p>
          <Reveal from="blur" delay={500}>
            <p className="hyi-p mt-8 max-w-xl !text-lg">{p.lead}</p>
          </Reveal>
          <Reveal from="up" delay={650}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Magnetic>
                <Link href={LINKS.expert} className="hyi-btn-clay">
                  {common.cta.primary}
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href={LINKS.login} className="hyi-skeu px-6 py-3 font-semibold">
                  {common.cta.secondary}
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <Reveal from="zoom" delay={250}>
          <div className="relative mx-auto w-full max-w-[520px]">
            <Card variant="glass" className="relative aspect-square !p-6">
              <LottiePlayer name={p.hero} className="h-full w-full" />
            </Card>
            {p.chips.map((c, i) => (
              <span key={c} className="hyi-chipfloat" style={{ ...CHIP_POS[i], animationDelay: `${i * 0.8}s` } as CSSProperties}>
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </header>

      <Marquee items={p.roles} />

      {/* ───────── Stats ───────── */}
      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {common.stats.map((s, i) => (
          <Reveal key={s.label} from="zoom" delay={i * 100}>
            <Card variant="neu" className="text-center">
              <p className="hyi-h1 hyi-blue">
                <Counter to={s.to} suffix={s.suffix} format={s.format} />
              </p>
              <p className="hyi-p mt-2 text-sm">{s.label}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* ───────── Statement ───────── */}
      <section className="py-20">
        <Reveal from="zoom">
          <Card variant="clay" className="text-center">
            <ScrollText text={p.statement} className="hyi-h2 hyi-white mx-auto max-w-4xl" />
          </Card>
        </Reveal>
      </section>

      {/* ───────── Highlights with Lottie icons ───────── */}
      <section className="py-6">
        <div className="mb-10 text-center">
          <SplitHeading text="Why HYI.AI" accent={["HYI.AI"]} className="hyi-h2 hyi-white" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {p.highlights.map((h, i) => (
            <Reveal key={h.t} from={i % 2 ? "right" : "left"} className="h-full">
              <Card variant={i % 3 === 0 ? "clay-soft" : "neu"} className="flex h-full items-center gap-5">
                <LottiePlayer name={ICONS[i % ICONS.length]} className="h-24 w-24 shrink-0 sm:h-28 sm:w-28" />
                <div>
                  <h3 className="hyi-h3 hyi-white">{h.t}</h3>
                  <p className="hyi-p mt-2 text-sm">{h.d}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────── Roles ───────── */}
      <StickySplit eyebrow="Specialists" title={p.rolesTitle} accent={[p.rolesTitle.split(" ").pop() as string]}>
        <div className="grid gap-5 sm:grid-cols-2">
          {p.roles.map((r, i) => (
            <Reveal key={r} from="zoom" delay={(i % 2) * 90} className="h-full">
              <Card variant={i % 2 ? "clay-soft" : "neu"} className="relative h-full min-h-[130px] overflow-hidden">
                <span className="pointer-events-none absolute -bottom-5 -right-1 select-none text-[5.5rem] font-black leading-none text-white/[0.05]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="hyi-eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="hyi-h3 hyi-white relative mt-3">
                  <Scramble text={r} />
                </h3>
              </Card>
            </Reveal>
          ))}
        </div>
      </StickySplit>

      {/* ───────── Engagement ───────── */}
      <StickySplit eyebrow="Your terms" title={common.engageTitle} accent={["Engagement"]}>
        <Reveal>
          <EngageTabs items={common.engage} />
        </Reveal>
      </StickySplit>

      {/* ───────── Process ───────── */}
      <section className="py-14">
        <div className="mb-12 text-center">
          <SplitHeading text={common.stepsTitle} accent={["Works"]} className="hyi-h2 hyi-white" />
        </div>
        <Timeline items={common.steps} />
      </section>

      {/* ───────── FAQ ───────── */}
      <StickySplit eyebrow="FAQ" title={common.faqTitle} accent={["Questions"]}>
        <Reveal>
          <OfferAccordion items={common.faq} />
        </Reveal>
      </StickySplit>

      {/* ───────── CTA ───────── */}
      <Reveal from="zoom">
        <Card variant="clay" className="mt-5 overflow-hidden">
          <div className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
            <LottiePlayer name="ripple" className="mx-auto h-48 w-48 md:h-56 md:w-56" />
            <div className="text-center md:text-left">
              <h2 className="hyi-h2 hyi-white">{common.cta.title}</h2>
              <p className="hyi-p mt-3 !text-white/85">{common.cta.text}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-5 md:justify-start">
                <Magnetic>
                  <Link href={LINKS.expert} className="hyi-skeu px-7 py-3.5 font-bold">
                    {common.cta.primary}
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link href={LINKS.login} className="hyi-skeu px-6 py-3.5 font-semibold">
                    {common.cta.secondary}
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </Card>
      </Reveal>

      {/* ───────── More roles ───────── */}
      {/* <section className="pt-24">
        <div className="mb-10 text-center">
          <SplitHeading text={common.moreTitle} accent={["Roles"]} className="hyi-h2 hyi-white" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {others.map((o, i) => (
            <Reveal key={o.id} from="up" delay={i * 100} className="h-full">
              <Link href={o.href} data-cursor className="block h-full">
                <Card variant={i % 2 ? "clay-soft" : "neu"} className="h-full">
                  <LottiePlayer name={o.hero} className="mx-auto h-32 w-32" />
                  <h3 className="hyi-h3 hyi-white mt-4 text-center">{o.nav} →</h3>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section> */}
    </HireShell>
  );
}