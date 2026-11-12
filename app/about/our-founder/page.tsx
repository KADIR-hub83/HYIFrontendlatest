import Image from "next/image";
import AboutShell from "@/components/about/AboutShell";
import Card from "@/components/about/Card";
import Counter from "@/components/about/Counter";
import Magnetic from "@/components/about/Magnetic";
import Paras from "@/components/about/paras";
import Reveal from "@/components/about/Reveal";
import ScrollText from "@/components/about/Scrolltext";
import SplitHeading from "@/components/about/Splitheading";
import { founder } from "@/components/data/aboutContent";

export const metadata = { title: "Our Founder | HYI.AI" };

export default function OurFounderPage() {
  return (
    <AboutShell title="HYI Founder" accent={["Founder"]}>
      <div className="grid gap-12 lg:grid-cols-[380px_1fr] lg:items-start">
        {/* Sticky profile */}
        <div className="space-y-6 lg:sticky lg:top-28">
          <Reveal from="left">
            <Card variant="clay-soft" className="!p-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[26px]">
                <Image
                  src="/images/yakub-sheikh.jpg"
                  alt="Yakub Sheikh"
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 380px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="px-3 pb-3 pt-5">
                <h2 className="hyi-h2 hyi-white">Yakub Sheikh</h2>
                <p className="hyi-p mt-1">{founder.role}</p>
                <p className="hyi-p text-sm">{founder.since}</p>
                <div className="mt-5">
                  <Magnetic>
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="hyi-skeu px-5 py-2.5 text-sm font-semibold">
                      Connect on LinkedIn ↗
                    </a>
                  </Magnetic>
                </div>
              </div>
            </Card>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <Reveal from="zoom">
              <Card variant="neu" className="!p-5">
                <p className="hyi-eyebrow">Founded in</p>
                <p className="hyi-h2 hyi-white"><Counter to={2017} format={false} /></p>
              </Card>
            </Reveal>
            {founder.facts.map((f, i) => (
              <Reveal key={i} from="zoom" delay={(i + 1) * 100}>
                <Card variant="neu" className="!p-5">
                  <p className="hyi-p text-sm !text-white/90">{f}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Reveal>
            <Card variant="glass">
              <p className="hyi-eyebrow mb-3">HYI Founder</p>
              <h2 className="hyi-h2 hyi-white mb-2">The Vision Behind <span className="hyi-blue">HYI.AI</span></h2>
              <h3 className="hyi-h3 hyi-blue mb-6">Yakub Sheikh | Entrepreneur</h3>
              <Paras items={founder.vision} short />
            </Card>
          </Reveal>

          <Reveal>
            <Card variant="clay-soft">
              <SplitHeading text="His Way of Thinking" accent={["Thinking"]} className="hyi-h2 hyi-white mb-6" />
              <Paras items={founder.thinking} />
            </Card>
          </Reveal>

          <Reveal from="zoom">
            <Card variant="clay" className="relative">
              <span className="pointer-events-none absolute left-5 top-0 select-none text-[8rem] font-black leading-none text-white/15">“</span>
              <div className="relative pt-10">
                <ScrollText text={`“${founder.quote}”`} className="hyi-h3 hyi-white italic !leading-relaxed" />
                <p className="hyi-h3 hyi-white mt-6">— Yakub Sheikh</p>
                <p className="hyi-p !text-white/80">Founder, HYI.AI</p>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </AboutShell>
  );
}