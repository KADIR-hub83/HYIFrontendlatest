import type { CSSProperties } from "react";
import Card from "@/components/about/Card";
import Counter from "@/components/about/Counter";
import Marquee from "@/components/about/Marquee";
import Reveal from "@/components/about/Reveal";
import ScrollText from "@/components/about/Scrolltext";
import SplitHeading from "@/components/about/Splitheading";
import StickySplit from "@/components/about/Stickysplit";
import { services, type ServiceId } from "@/components/data/aiContent";
import AiShell from "./AiShell";
import OfferAccordion from "./OfferAccordion";
import Together from "./Together";

const badge = {
  display: "flex",
  width: 48,
  height: 48,
  alignItems: "center",
  justifyContent: "center",
  fontSize: 22,
  borderRadius: 14,
} as const;

export default function ServicePage({ id }: { id: ServiceId }) {
  const s = services[id];
  const lead = s.intro.slice(0, -1);
  const last = s.intro[s.intro.length - 1];

  const offerCard = (o: (typeof s.offers)[number], i: number, extra?: { style?: CSSProperties; cls?: string }) => (
    <Card
      key={o.t}
      variant={i % 2 ? "neu" : "clay-soft"}
      className={`relative overflow-hidden ${extra?.cls ?? ""}`}
      style={extra?.style}
    >
      <span className="pointer-events-none absolute -bottom-6 -right-1 select-none text-[7rem] font-black leading-none text-white/[0.045]">
        {String(i + 1).padStart(2, "0")}
      </span>
      <div className="relative flex items-center justify-between">
        <span className="hyi-skeu" style={badge}>{o.icon}</span>
        <span className="hyi-eyebrow !text-white/40">{String(i + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="hyi-h3 hyi-white relative mt-6">{o.t}</h3>
      <p className="hyi-p relative mt-3">{o.d}</p>
    </Card>
  );

  return (
    <AiShell letter={s.letter} title={s.title} accent={s.accent} subtitle={s.subtitle}>
      {/* Intro */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal from="left">
          <Card variant="glass" className="h-full">
            <div className="space-y-5">
              {lead.map((t, i) => (
                <p key={i} className={i === 0 ? "hyi-h3 hyi-white" : "hyi-p"}>{t}</p>
              ))}
            </div>
          </Card>
        </Reveal>
        <Reveal from="right">
          <Card variant="clay" className="relative h-full overflow-hidden">
            <span className="pointer-events-none absolute -right-3 -top-10 select-none text-[11rem] font-black leading-none text-white/10">
              {s.letter}
            </span>
            <ScrollText text={last} className="hyi-h3 hyi-white relative !leading-relaxed" />
          </Card>
        </Reveal>
      </div>

      {/* Counters + marquee */}
      {/* <div className="my-14 grid gap-6 sm:grid-cols-2">
        {[
          { to: s.offers.length, label: "What we offer" },
          { to: s.outcomes.length, label: "Key outcomes" },
        ].map((m, i) => (
          <Reveal key={m.label} from="zoom" delay={i * 100}>
            <Card variant="neu" className="text-center">
              <p className="hyi-h1 hyi-blue"><Counter to={m.to} /></p>
              <p className="hyi-p mt-1 text-sm">{m.label}</p>
            </Card>
          </Reveal>
        ))}
      </div> */}
      {/* <Marquee items={s.offers.map((o) => `${o.icon} ${o.t}`)} /> */}

      {/* What we offer — layout differs per page */}
      {s.layout === "stack" && (
        <StickySplit eyebrow="Capabilities" title="What We Offer" accent={["Offer"]}>
          <div className="space-y-10 pb-6">
            {s.offers.map((o, i) =>
              offerCard(o, i, {
                cls: "min-h-[230px]",
                style: { position: "sticky", top: `calc(7.5rem + ${i * 16}px)` },
              })
            )}
          </div>
        </StickySplit>
      )}

      {s.layout === "grid" && (
        <section className="py-16">
          <div className="mb-12 text-center">
            <p className="hyi-eyebrow mb-4">Capabilities</p>
            <SplitHeading text="What We Offer" accent={["Offer"]} className="hyi-h2 hyi-white" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {s.offers.map((o, i) => (
              <Reveal key={o.t} from={i % 2 ? "right" : "left"} className="h-full">
                {offerCard(o, i, { cls: "h-full" })}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {s.layout === "accordion" && (
        <StickySplit eyebrow="Capabilities" title="What We Offer" accent={["Offer"]}>
          <Reveal>
            <OfferAccordion items={s.offers} />
          </Reveal>
        </StickySplit>
      )}

      {/* Our focus */}
      <Reveal from="zoom">
        <Card variant="clay-soft" className="my-10 text-center">
          <p className="hyi-eyebrow mb-5">Our focus</p>
          <ScrollText text={s.focus} className="hyi-h2 hyi-white mx-auto max-w-4xl" />
        </Card>
      </Reveal>

      {/* Key outcomes */}
      <section className="pt-14">
        <div className="mb-10 text-center">
          <SplitHeading text="Key Outcomes" accent={["Outcomes"]} className="hyi-h2 hyi-white" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.outcomes.map((o, i) => (
            <Reveal key={o} from="zoom" delay={(i % 3) * 90} className="h-full">
              <Card variant="neu" className="flex h-full items-start gap-4 !p-6">
                <span
                  className="hyi-skeu is-active shrink-0"
                  style={{ display: "flex", width: 36, height: 36, alignItems: "center", justifyContent: "center", borderRadius: 12, fontWeight: 800 }}
                >
                  ✓
                </span>
                <p className="hyi-p !text-white/85">{o}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <Together current={id} />
    </AiShell>
  );
}