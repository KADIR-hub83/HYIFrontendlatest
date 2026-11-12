import AboutShell from "@/components/about/AboutShell";
import Card from "@/components/about/Card";
import Paras from "@/components/about/paras";
import Reveal from "@/components/about/Reveal";
import ScrollText from "@/components/about/Scrolltext";
import SplitHeading from "@/components/about/Splitheading";
import { vm } from "@/components/data/aboutContent";

export const metadata = { title: "Vision & Mission | HYI.AI" };

export default function VisionMissionPage() {
  return (
    <AboutShell title="Vision & Mission" accent={["Mission"]}>
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal from="left">
          <Card variant="glass" className="relative h-full overflow-hidden">
            <span className="pointer-events-none absolute -right-2 -top-6 select-none text-[9rem] font-black leading-none text-white/5">01</span>
            <p className="hyi-eyebrow mb-3">Where we are going</p>
            <h2 className="hyi-h2 hyi-white mb-6">Our <span className="hyi-blue">Vision</span></h2>
            <Paras items={vm.vision} />
          </Card>
        </Reveal>

        <Reveal from="right">
          <Card variant="clay-soft" className="relative h-full overflow-hidden">
            <span className="pointer-events-none absolute -right-2 -top-6 select-none text-[9rem] font-black leading-none text-white/5">02</span>
            <p className="hyi-eyebrow mb-3">How we get there</p>
            <h2 className="hyi-h2 hyi-white mb-6">Our <span className="hyi-blue">Mission</span></h2>
            <div className="space-y-5">
              <p className="hyi-h3 hyi-white">{vm.missionLead}</p>
              <Paras items={vm.mission} />
            </div>
          </Card>
        </Reveal>
      </div>

      <section className="py-28 text-center">
        <p className="hyi-eyebrow mb-6">Beliefs</p>
        <SplitHeading text="What We Believe" accent={["Believe"]} className="hyi-h1 hyi-white mb-12" />
        <div className="mx-auto max-w-4xl space-y-10">
          <ScrollText text={vm.believe} className="hyi-h2 hyi-white" />
          <Reveal from="zoom">
            <Card variant="clay">
              <p className="hyi-h2 hyi-white">{vm.believe2}</p>
            </Card>
          </Reveal>
        </div>
      </section>
    </AboutShell>
  );
}