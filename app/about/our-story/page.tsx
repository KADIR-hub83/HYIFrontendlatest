import AboutShell from "@/components/about/AboutShell";
import Card from "@/components/about/Card";
import Reveal from "@/components/about/Reveal";
import ScrollText from "@/components/about/Scrolltext";
import Timeline from "@/components/about/TimeLine";
import { story } from "@/components/data/aboutContent";

export const metadata = { title: "Our Story | HYI.AI" };

export default function OurStoryPage() {
  return (
    <AboutShell title="Our Story" accent={["Story"]}>
      <Timeline items={story.chapters} />

      <div className="mt-24">
        <Reveal from="zoom">
          <Card variant="clay" className="py-14 text-center">
            <ScrollText text={story.finale} className="hyi-h1 hyi-white" />
            <p className="hyi-h3 hyi-white mt-8 opacity-90">{story.tagline}</p>
          </Card>
        </Reveal>
      </div>
    </AboutShell>
  );
}