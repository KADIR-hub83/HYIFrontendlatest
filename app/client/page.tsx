import BackdropFx from "@/components/about/BackdropFx";
import Card from "@/components/about/Card";
import Counter from "@/components/about/Counter";
import Magnetic from "@/components/about/Magnetic";
import Marquee from "@/components/about/Marquee";
import Reveal from "@/components/about/Reveal";
import ScrollText from "@/components/about/Scrolltext";
import SplitHeading from "@/components/about/Splitheading";
import StickySplit from "@/components/about/Stickysplit";
import CategoryBars from "@/components/portfolio/Categorybars";
import Directory from "@/components/portfolio/Directory";
import { categories, copy, projects } from "@/components/data/Portfoliocontent";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

export const metadata = {
  title: "Client Portfolio | Digital Projects & Innovation",
  description: "A curated portfolio of client projects and digital solutions.",
};

const metrics = [
  { to: projects.length, label: "Projects in portfolio" },
  { to: categories.length, label: "Industry sectors" },
  { to: projects.filter((p) => p.url).length, label: "Live references" },
];

export default function PortfolioPage() {
  return (
    <main className="hyi-bg">
      <Header/>
      <BackdropFx />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4  sm:px-6">
        {/* Floating glass nav */}
        {/* <nav className="hyi-glass sticky top-4 z-50 mt-4 flex items-center justify-between !rounded-2xl px-5 py-3">
          <span className="text-xs font-extrabold tracking-[.18em] text-white">CLIENT PORTFOLIO</span>
          <Magnetic>
            <a href="#work" className="hyi-skeu px-4 py-2 text-sm font-semibold">
              Explore work ↓
            </a>
          </Magnetic>
        </nav> */}

        {/* Hero — centered, parallax fade on scroll */}
        <header
          className="flex  flex-col items-center justify-center pt-25 text-center"
          style={{
            transform: "translateY(calc(var(--sy,0) * 0.18px))",
            opacity: "calc(1 - var(--sy,0) * 0.0016)",
          }}
        >
          <p className="hyi-eyebrow mb-6 flex items-center gap-3">
            <span className="hyi-pulse max-md:text-lg inline-block h-2.5 w-2.5 rounded-full bg-[#4f9dff]" />
            {copy.kicker}
          </p>
          <SplitHeading
            as="h1"
            text="Client & Project Portfolio"
            accent={["Project", "Portfolio"]}
            className="hyi-h1 text-5xl max-md:text-3xl hyi-white text-center"
            delay={100}
          />
          <p className="hyi-p mt-4 max-w-2xl !text-lg">{copy.lead}</p>

          {/* <div className="mt-12 grid w-full max-w-3xl gap-5 sm:grid-cols-3">
            {metrics.map((m) => (
              <Card key={m.label} variant="neu" className="!p-5 text-center">
                <p className="hyi-h1 hyi-blue !text-[2.6rem]">
                  <Counter to={m.to} />
                </p>
                <p className="hyi-p mt-1 text-xs">{m.label}</p>
              </Card>
            ))}
          </div> */}
        </header>

        {/* <Marquee items={categories.map((c) => `${c.icon} ${c.name}`)} /> */}

        {/* Overview */}
        <div className="mt-5 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal from="left">
            <Card variant="glass" className="h-full">
              <h2 className="hyi-h2 hyi-white mb-4">{copy.overviewTitle}</h2>
              <p className="hyi-p">{copy.overview}</p>
            </Card>
          </Reveal>
          <Reveal from="right">
            <Card variant="clay" className="h-full">
              <p className="hyi-eyebrow !text-white/80 mb-3">{copy.sideTitle}</p>
              <ScrollText text={copy.side} className="hyi-h3 hyi-white !leading-relaxed" />
            </Card>
          </Reveal>
        </div>

        {/* Searchable, filterable directory */}
        <Directory />

        {/* Category breakdown */}
        <StickySplit eyebrow="Breakdown" title="Projects by Category" accent={["Category"]}>
          <Card variant="glass" tilt={false}>
            <CategoryBars />
          </Card>
        </StickySplit>
{/* 
        <Reveal from="zoom">
          <div className="mt-6 flex flex-col items-center gap-6 text-center">
            <Magnetic>
              <a href="#" className="hyi-skeu px-6 py-3 font-semibold">
                Back to top ↑
              </a>
            </Magnetic>
            <p className="text-xs text-white/40">{copy.footer}</p>
          </div>
        </Reveal> */}
      </div>
      <Footer/>
    </main>
  );
}