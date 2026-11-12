import AboutShell from "@/components/about/AboutShell";
import Card from "@/components/about/Card";
import Paras from "@/components/about/paras";
import Reveal from "@/components/about/Reveal";
import { values } from "@/components/data/aboutContent";

export const metadata = { title: "Our Values | HYI.AI" };

export default function OurValuesPage() {
  return (
    <AboutShell title="Our Values" accent={["Values"]}>
      <Reveal>
        <Card variant="glass">
          <p className="hyi-h3 hyi-white mb-5">{values.intro[0]}</p>
          <Paras items={values.intro.slice(1)} />
        </Card>
      </Reveal>

      {/* Stacking cards: each card sticks and the next slides over it */}
      <div className="mt-16 space-y-10 pb-10">
        {values.items.map((v, i) => (
          <Card
            key={v.t}
            variant={i % 2 ? "neu" : "clay-soft"}
            className="relative min-h-[260px] overflow-hidden"
            style={{ position: "sticky", top: `calc(7.5rem + ${i * 16}px)` }}
          >
            <span className="pointer-events-none absolute -right-2 -top-8 select-none text-[10rem] font-black leading-none text-white/5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="hyi-eyebrow mb-3">Value {String(i + 1).padStart(2, "0")}</p>
            <h3 className="hyi-h2 hyi-white mb-4">{v.t}</h3>
            <p className="hyi-p max-w-3xl">{v.d}</p>
          </Card>
        ))}
      </div>

      <Reveal from="zoom">
        <Card variant="clay" className="mt-10">
          <h2 className="hyi-h2 hyi-white mb-5">{values.meansTitle}</h2>
          <div className="space-y-5">
            {values.means.map((t, i) => (
              <p key={i} className="hyi-p !text-white/90">{t}</p>
            ))}
            <p className="hyi-h3 hyi-white">{values.meansClose}</p>
          </div>
        </Card>
      </Reveal>
    </AboutShell>
  );
}