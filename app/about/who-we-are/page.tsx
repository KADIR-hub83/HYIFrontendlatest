import AboutShell from "@/components/about/AboutShell";
import Card from "@/components/about/Card";
import Counter from "@/components/about/Counter";
import Marquee from "@/components/about/Marquee";
import Paras from "@/components/about/paras";
import Reveal from "@/components/about/Reveal";
import ScrollText from "@/components/about/Scrolltext";
import SplitHeading from "@/components/about/Splitheading";
import StickySplit from "@/components/about/Stickysplit";
import { who } from "@/components/data/aboutContent";

export const metadata = { title: "Who We Are | HYI.AI" };

const stats = [
  { to: 150, suffix: "+", format: true, label: "countries, regions, and territories" },
  { to: 2017, suffix: "", format: false, label: "Founded" },
  { to: 4, suffix: "", format: true, label: "key areas of business" },
];

export default function WhoWeArePage() {
  return (
    <AboutShell title="Who We Are" accent={["Are"]}>
      {/* Intro */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal from="left">
          <Card variant="glass" className="h-full">
            <Paras items={who.intro} />
          </Card>
        </Reveal>
        <Reveal from="right">
          <Card variant="clay" className="h-full">
            <ScrollText text={who.flagship} className="hyi-h3 hyi-white !leading-relaxed" />
          </Card>
        </Reveal>
      </div>

      {/* Animated counters */}
      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {stats.map((s, i) => (
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

      <div className="my-14">
        <Marquee items={who.taglineItems} />
      </div>

      {/* Founded */}
      <StickySplit eyebrow="Since 2017" title="Founded in 2017" accent={["2017"]}>
        <Paras items={who.founded} short />
      </StickySplit>

      {/* Four key areas */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {who.areas.map((a, i) => (
          <Reveal key={a} from="zoom" delay={i * 90}>
            <Card variant={i % 2 ? "clay-soft" : "neu"} className="flex min-h-[170px] flex-col justify-between">
              <span className="hyi-eyebrow">0{i + 1}</span>
              <h3 className="hyi-h3 hyi-white mt-6">{a}</h3>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Approach */}
      <StickySplit eyebrow="Straightforward" title="Our Approach" accent={["Approach"]}>
        <Paras items={who.middle} />
        <Reveal from="zoom">
          <Card variant="clay">
            <p className="hyi-h3 hyi-white">{who.approach}</p>
          </Card>
        </Reveal>
        <Paras items={who.closing} />
      </StickySplit>

      {/* How we work */}
      <StickySplit eyebrow="Together" title="How We Work" accent={["Work"]}>
        {who.how.map((t, i) => (
          <Reveal key={i} from="right" delay={i * 60}>
            <Card variant="glass">
              <p className={i === 0 ? "hyi-h3 hyi-white" : "hyi-p"}>{t}</p>
            </Card>
          </Reveal>
        ))}
      </StickySplit>

      {/* Looking ahead */}
      <StickySplit eyebrow="Next" title="Looking Ahead" accent={["Ahead"]}>
        <Card variant="clay-soft">
          <Paras items={who.ahead} />
        </Card>
      </StickySplit>

      {/* Finale */}
      <Reveal from="zoom">
        <Card variant="neu-in" className="py-14 text-center">
          <SplitHeading text="HYI.AI" as="h2" className="hyi-h1 hyi-white" />
          <p className="hyi-p mt-4">Global Talent. Technology, Cybersecurity. Artificial Intelligence.</p>
        </Card>
      </Reveal>
    </AboutShell>
  );
}