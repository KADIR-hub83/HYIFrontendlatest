import Link from "next/link";
import Card from "@/components/about/Card";
import Reveal from "@/components/about/Reveal";
import ScrollText from "@/components/about/Scrolltext";
import SplitHeading from "@/components/about/Splitheading";
import { together, services, type ServiceId } from "@/components/data/aiContent";

export default function Together({ current }: { current: ServiceId }) {
  return (
    <section className="pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <SplitHeading text={together.title} accent={["Together"]} className="hyi-h2 hyi-white" />
        <Reveal from="blur">
          <p className="hyi-p mt-5">{together.intro}</p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {together.rows.map((r, i) => {
          const s = services[r.id];
          const isNow = r.id === current;
          return (
            <Reveal key={r.id} from="zoom" delay={i * 110} className="h-full">
              <Link href={s.href} data-cursor className="block h-full">
                <Card variant={isNow ? "clay" : "neu"} className="relative h-full overflow-hidden">
                  <span className="pointer-events-none absolute -right-2 -top-8 select-none text-[9rem] font-black leading-none text-white/[0.06]">
                    {s.letter}
                  </span>
                  <h3 className="hyi-h2 hyi-white relative">{r.name}</h3>
                  <p className="hyi-eyebrow relative mt-6 !text-white/60">{together.labels.objective}</p>
                  <p className="hyi-h3 relative mt-1 text-white">{r.objective}</p>
                  <p className="hyi-eyebrow relative mt-6 !text-white/60">{together.labels.value}</p>
                  <p className="hyi-p relative mt-1 !text-white/85">{r.value}</p>
                </Card>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-16">
        <Reveal>
          <Card variant="glass" tilt={false} className="mx-auto max-w-4xl">
            <p className="hyi-eyebrow mb-5">{together.approachTitle}</p>
            <div className="space-y-6">
              {together.approach.map((t, i) => (
                <ScrollText key={i} text={t} className="hyi-h3 hyi-white !leading-relaxed" />
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}