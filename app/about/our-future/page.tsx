import AboutShell from "@/components/about/AboutShell";
import Card from "@/components/about/Card";
import Marquee from "@/components/about/Marquee";
import Paras from "@/components/about/paras";
import Reveal from "@/components/about/Reveal";
import StickySplit from "@/components/about/Stickysplit";
import { future } from "@/components/data/aboutContent";

export const metadata = { title: "Our Future | HYI.AI" };

export default function OurFuturePage() {
  return (
    <AboutShell title="Our Future" accent={["Future"]}>
      <StickySplit eyebrow="Looking forward" title={future.title} accent={["Long", "Way,", "So", "Much"]}>
        <Card variant="glass">
          <Paras items={future.intro} short />
        </Card>
      </StickySplit>

      <div className="my-6">
        <Marquee items={["Talent", "Technology", "Cybersecurity", "Global Capability Centers"]} reverse />
      </div>

      {/* Pillars */}
      <div className="grid gap-6 md:grid-cols-2">
        {future.pillars.map((x, i) => (
          <Reveal
            key={x.t}
            from={i % 2 ? "right" : "left"}
            className={i === future.pillars.length - 1 ? "md:col-span-2" : ""}
          >
            <Card variant={i % 2 ? "clay-soft" : "neu"} className="h-full">
              <span className="hyi-eyebrow">0{i + 1}</span>
              <h3 className="hyi-h3 hyi-white mb-4 mt-2">{x.t}</h3>
              <Paras items={x.p} />
            </Card>
          </Reveal>
        ))}
      </div>

      <StickySplit eyebrow="Constants" title={future.sameTitle} accent={["Same"]}>
        <Card variant="glass">
          <Paras items={future.same} />
        </Card>
      </StickySplit>

      <Reveal from="zoom">
        <Card variant="clay" className="py-14 text-center">
          <p className="hyi-h3 hyi-white mx-auto max-w-3xl">{future.finaleText}</p>
          <p className="hyi-h2 hyi-white mt-8">{future.tagline}</p>
        </Card>
      </Reveal>
    </AboutShell>
  );
}