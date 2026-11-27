"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, CircleDot } from "lucide-react";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import {
  LINKEDIN,
  TAGLINE,
  whoLead,
  whoMore,
  pillars,
  story,
  vision,
  mission,
  howWork,
  steps,
  believeLead,
  belief,
  lookingAhead,
  founderParas,
  founderThinking,
  founderQuote,
  founderFacts,
  valuesIntro,
  values,
  valuesMean,
  futureIntro,
  future,
  futureClose,
  faqs,
} from "@/components/data/aboutContentFooter";

const ease = [0.22, 1, 0.36, 1] as const;
const sec = "px-5 py-10 md:px-10 md:py-14 lg:px-20";
const wrap = "mx-auto max-w-[1320px]";

const NAV = [
  ["who", "Who we are"],
  ["story", "Our story"],
  ["vision", "Vision & mission"],
  ["founder", "Our founder"],
  ["values", "Our values"],
  ["future", "Our future"],
  ["faq", "FAQ"],
] as const;

/* ============================ BUILDING BLOCKS ============================ */

type Tone = "neu" | "clay";
const toneClass = (t: Tone) => (t === "neu" ? "hyi-card hyi-neu" : "hyi-card hyi-clay-soft");

/**
 * Box = motion wrapper (animation) + inner .hyi-card (your black / blue box).
 * Split on purpose: hyi-card uses CSS transform, framer-motion also sets transform.
 * tone="neu"  -> black box   |   tone="clay" -> blue box
 */
function Box({
  tone = "neu",
  children,
  className = "",
  delay = 0,
  x = 0,
  hover = true,
  sticky = "",
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  hover?: boolean;
  sticky?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: x ? 0 : 28, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease }}
      whileHover={hover ? { y: -6 } : undefined}
      className={`h-full ${sticky}`}
    >
      <div className={`${toneClass(tone)} flex h-full flex-col p-6 sm:p-8 ${className}`}>{children}</div>
    </motion.div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2">
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_14px_rgba(167,139,250,.9)]"
      />
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">{children}</span>
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
  x = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: x ? 0 : 30, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Paras({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((p, i) => (
        <p key={i} className="hyi-p">
          {p}
        </p>
      ))}
    </div>
  );
}

function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (l) => setV(Math.round(l)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

function Bg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        animate={{ x: [-100, 90, -100], y: [-50, 80, -50] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-32 h-[520px] w-[520px] rounded-full bg-[#6d28d9]/[0.16] blur-[160px]"
      />
      <motion.div
        animate={{ x: [90, -80, 90], y: [50, -70, 50] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-100px] top-[20%] h-[480px] w-[480px] rounded-full bg-[#3b82f6]/[0.12] blur-[170px]"
      />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(196,181,253,.9) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom, black, transparent 94%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 94%)",
        }}
      />
    </div>
  );
}

function Word({ w, p, r }: { w: string; p: MotionValue<number>; r: [number, number] }) {
  const o = useTransform(p, r, [0.15, 1]);
  return (
    <motion.span style={{ opacity: o }} className="mr-[0.25em] inline-block">
      {w}
    </motion.span>
  );
}

function BeliefText() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = belief.split(" ");
  return (
    <p
      ref={ref}
      className="hyi-h1 hyi-white mx-auto max-w-4xl text-center text-[34px] leading-tight tracking-[-0.04em] sm:text-[52px] lg:text-[64px]"
    >
      {words.map((w, i) => (
        <Word key={i} w={w} p={scrollYProgress} r={[i / words.length, (i + 1) / words.length]} />
      ))}
    </p>
  );
}

/* ============================ SECTIONS ============================ */

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const o = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);

  return (
    <section
      ref={ref}
      aria-labelledby="about-title"
      className="relative overflow-hidden border-b border-white/[0.06] bg-black"
    >
      <Bg />
      <motion.div
        style={{ y, opacity: o }}
        className="relative mx-auto max-w-[1450px] px-5 pb-12 pt-30 max-md:pt-20 md:px-10 lg:px-20"
      >
        {/* <Label>HYI.AI / About us</Label> */}

        {/* the ONE h1 of the page, keyword-rich for SEO */}
        <h1 id="about-title" className="mt-6">
          {[
            ["About HYI.AI:","", "hyi-white"],
            ["The world’s talent,", "hyi-white"],
            ["on demand.", "hyi-blue"],
          ].map(([line, cls], i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 + i * 0.12, ease }}
                className={`hyi-h1 block text-[44px] leading-[0.98] tracking-[-0.06em] sm:text-[60px] md:text-[78px] lg:text-[76px] ${cls}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-6 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_520px]"
        >
          <div className="flex items-start gap-3">
            <CircleDot className="mt-1 h-4.5 w-4.5 shrink-0 hyi-blue-icon" />
            <p className="hyi-h3 hyi-white">{TAGLINE}</p>
          </div>
          <div>
            <p className="hyi-p">
              HYI.AI is a global talent marketplace and technology partner for startups, enterprises and scaling
              companies, founded in 2017.
            </p>
            <nav aria-label="On this page" className="mt-6 flex flex-wrap gap-2">
              {NAV.map(([id, l]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-[13px] font-semibold text-white/70 transition hover:border-[#a78bfa]/50 hover:text-white"
                >
                  {l}
                </a>
              ))}
            </nav>
            <a
              href="#who"
              className="hyi-white mt-6 inline-flex items-center gap-3 text-[14px] font-semibold transition hover:text-[#a78bfa]"
            >
              Scroll to explore <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Stats() {
  const items = [
    { n: 150, s: "+", l: "Countries, regions & territories" },
    { n: 4, s: "", l: "Key areas of business" },
    { n: 2017, s: "", l: "Year we started" },
    { n: 24, s: "/7", l: "On-demand talent access" },
  ];
  return (
    <section aria-label="HYI.AI at a glance" className={`relative bg-black pb-0 ${sec}`}>
      <div className={`${wrap} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
        {items.map((x, i) => (
          <Box key={x.l} tone={i % 2 === 0 ? "neu" : "clay"} delay={i * 0.08} className="justify-between">
            <div className="hyi-h1 hyi-blue text-[40px] tracking-[-0.04em] sm:text-[48px]">
              {x.n === 2017 ? "2017" : <Count to={x.n} suffix={x.s} />}
            </div>
            <p className="hyi-p mt-2 text-[13px]">{x.l}</p>
          </Box>
        ))}
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section id="who" aria-labelledby="who-title" className={`relative scroll-mt-24 bg-black ${sec}`}>
      <div className={wrap}>
        <Reveal>
          <Label>Who we are</Label>
          <h2
            id="who-title"
            className="hyi-h1 mt-4 max-w-[860px] text-[36px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[50px]"
          >
            <span className="hyi-white">A global talent marketplace and</span>
            <span className="block hyi-blue">technology solutions partner.</span>
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
          <Box tone="neu" hover={false} x={-40}>
            <Paras items={whoLead} />
          </Box>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Box key={p.t} tone={i % 2 === 0 ? "clay" : "neu"} delay={i * 0.08} x={40}>
                <span className="font-mono text-[12px] text-[#a78bfa]">0{i + 1}</span>
                <h3 className="hyi-h3 hyi-white mt-4">{p.t}</h3>
                <p className="hyi-p mt-2">{p.d}</p>
              </Box>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {whoMore.map((p, i) => (
            <Box key={i} tone={(Math.floor(i / 2) + i) % 2 === 0 ? "neu" : "clay"} delay={(i % 2) * 0.08} hover={false}>
              <p className="hyi-p">{p}</p>
            </Box>
          ))}
        </div>
      </div>
    </section>
  );
}

/* left pinned, story scrolls on the right */
function Story() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.7"] });

  return (
    <section
      id="story"
      ref={ref}
      aria-labelledby="story-title"
      className={`relative scroll-mt-24 bg-[#030303] ${sec}`}
    >
      <div className={wrap}>
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <Label>Our story</Label>
            <h2
              id="story-title"
              className="hyi-h1 mt-4 max-w-[460px] text-[36px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[50px]"
            >
              <span className="hyi-white">This is our story.</span>
              <span className="block hyi-blue">And we are still writing it.</span>
            </h2>
            <p className="hyi-p mt-4 max-w-[400px]">HYI.AI – Connecting People, Technology, and Opportunities.</p>
            <div className="mt-8 hidden h-48 w-1 overflow-hidden rounded-full bg-white/10 lg:block">
              <motion.div
                style={{ scaleY: scrollYProgress, originY: 0 }}
                className="h-full w-full bg-gradient-to-b from-[#60a5fa] to-[#6d28d9]"
              />
            </div>
          </div>

          <div className="space-y-4">
            {story.map((s, i) => (
              <Box key={s.t} tone={i % 2 === 0 ? "neu" : "clay"} hover={false}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#a78bfa]">{s.y}</span>
                  <span className="font-mono text-[12px] text-white/50">0{i + 1}</span>
                </div>
                <h3 className="hyi-h3 hyi-white mt-4">{s.t}</h3>
                <Paras items={s.d} className="mt-3" />
              </Box>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Belief() {
  return (
    <section aria-label="What we believe" className="relative overflow-hidden bg-black px-5 py-16 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[150px]" />
      <div className="relative">
        <Reveal className="mb-8 text-center">
          <Label>What we believe</Label>
          <p className="hyi-p mx-auto mt-5 max-w-2xl">{believeLead}</p>
        </Reveal>
        <BeliefText />
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section id="vision" aria-labelledby="vision-title" className={`relative scroll-mt-24 bg-[#030303] ${sec}`}>
      <div className={wrap}>
        <h2 id="vision-title" className="sr-only">
          Vision, mission, how we work and looking ahead
        </h2>

        <div className="grid gap-4 lg:grid-cols-2">
          <Box tone="neu" x={-40} hover={false} className="md:p-9">
            <Label>Our vision</Label>
            <Paras items={vision} className="mt-5" />
          </Box>
          <Box tone="clay" x={40} hover={false} className="md:p-9">
            <Label>Our mission</Label>
            <Paras items={mission} className="mt-5" />
          </Box>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <Reveal>
            <Label>How we work</Label>
            <h3 className="hyi-h1 mt-4 text-[34px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[46px]">
              <span className="hyi-white">Good relationships</span>
              <span className="block hyi-blue">begin with understanding.</span>
            </h3>
          </Reveal>
          <Reveal delay={0.08}>
            <Paras items={howWork} />
          </Reveal>
        </div>

        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s} className="h-full">
              <Box tone={i % 2 === 0 ? "clay" : "neu"} delay={i * 0.1}>
                <span className="font-mono text-[12px] text-[#a78bfa]">0{i + 1}</span>
                <h4 className="hyi-h3 hyi-white mt-4">{s}</h4>
              </Box>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <Reveal>
            <Label>Looking ahead</Label>
            <h3 className="hyi-h1 mt-4 text-[34px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[46px]">
              <span className="hyi-white">AI and emerging</span>
              <span className="block hyi-blue">technologies.</span>
            </h3>
          </Reveal>
          <Box tone="neu" hover={false} delay={0.08}>
            <Paras items={lookingAhead} />
          </Box>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      id="founder"
      aria-labelledby="founder-title"
      className={`relative scroll-mt-24 overflow-hidden bg-black ${sec}`}
    >
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[#3b82f6]/10 blur-[130px]" />
      <div className={`relative ${wrap}`}>
        <div ref={ref} className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-[#60a5fa] to-[#6d28d9] opacity-40 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15">
                <motion.div style={{ y }} className="absolute -inset-8">
                  <Image
                    src="/images/yakub-sheikh.jpg"
                    alt="Yakub Sheikh, entrepreneur and founder of HYI.AI"
                    fill
                    sizes="(max-width:1024px) 90vw, 400px"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-sm">
              <p className="hyi-h3 hyi-white">Yakub Sheikh</p>
              <p className="hyi-p mt-1">Entrepreneur · since 2012</p>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="hyi-white mt-3 inline-flex items-center gap-2 text-[14px] font-semibold transition hover:text-[#a78bfa]"
              >
                Connect on LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <Reveal x={50}>
            <Label>Our founder</Label>
            <h2
              id="founder-title"
              className="hyi-h1 mt-4 text-[36px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[50px]"
            >
              <span className="hyi-white">The vision behind</span>
              <span className="block hyi-blue">HYI.AI</span>
            </h2>
            <p className="hyi-h3 hyi-white mt-4">Yakub Sheikh | Entrepreneur</p>

            <Paras items={founderParas} className="mt-5" />

            <h3 className="hyi-h3 hyi-blue mt-8">His way of thinking</h3>
            <Paras items={founderThinking} className="mt-3" />

            <div className="mt-8">
              <Box tone="clay" hover={false}>
                <blockquote>
                  <p className="hyi-h3 hyi-white leading-snug">“{founderQuote}”</p>
                  <footer className="mt-4">
                    <p className="hyi-white font-semibold">Yakub Sheikh</p>
                    <p className="hyi-p">Entrepreneur, HYI.AI</p>
                  </footer>
                </blockquote>
              </Box>
            </div>

            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {founderFacts.map((f, i) => (
                <li key={f} className="h-full">
                  <Box tone={i % 2 === 0 ? "neu" : "clay"} delay={i * 0.06} className="!p-5">
                    <div className="flex items-start gap-3">
                      <CircleDot className="mt-0.5 h-4.5 w-4.5 shrink-0 hyi-blue-icon" />
                      <span className="hyi-p">{f}</span>
                    </div>
                  </Box>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* right pinned, values scroll on the left */
function Values() {
  const [active, setActive] = useState(0);

  return (
    <section id="values" aria-labelledby="values-title" className={`relative scroll-mt-24 bg-[#030303] ${sec}`}>
      <div className={wrap}>
        <Reveal>
          <Label>Our values</Label>
          <h2
            id="values-title"
            className="hyi-h1 mt-4 max-w-[800px] text-[36px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[50px]"
          >
            <span className="hyi-white">The way we do business</span>
            <span className="block hyi-blue">matters as much as the work.</span>
          </h2>
          <Paras items={valuesIntro} className="mt-5 max-w-[760px]" />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div className="space-y-4">
            {values.map((v, i) => (
              <motion.div
                key={v.t}
                onViewportEnter={() => setActive(i)}
                viewport={{ amount: 0.6 }}
                initial={{ opacity: 0.35 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`${toneClass(i % 2 === 0 ? "neu" : "clay")} p-6 sm:p-8 lg:min-h-[28vh]`}>
                  <span className="font-mono text-[12px] text-[#a78bfa]">0{i + 1}</span>
                  <h3 className="hyi-h3 hyi-white mt-3">{v.t}</h3>
                  <p className="hyi-p mt-2">{v.d}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="hyi-card hyi-clay-soft flex h-[60vh] flex-col justify-between overflow-hidden p-9">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <div className="font-mono text-[12px] text-[#c4b5fd]">0{active + 1}</div>
                    <div className="hyi-h1 hyi-white mt-3 text-[40px] leading-tight tracking-[-0.04em]">
                      {values[active].t}
                    </div>
                  </motion.div>
                </AnimatePresence>
                <p className="hyi-p">
                  Values are not something to write down and forget. They show in how we communicate, decide and keep
                  our promises.
                </p>
                <div className="flex gap-2" aria-hidden>
                  {values.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                        i <= active ? "bg-white" : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Reveal className="mt-12">
          <h3 className="hyi-h3 hyi-white">What these values mean to us</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {valuesMean.map((p, i) => (
              <Box key={i} tone={i % 2 === 0 ? "neu" : "clay"} delay={i * 0.08} hover={false}>
                <p className="hyi-p">{p}</p>
              </Box>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FutureIntro() {
  return (
    <section
      id="future"
      aria-labelledby="future-title"
      className={`relative scroll-mt-24 overflow-hidden bg-black pb-0 ${sec}`}
    >
      <div className="pointer-events-none absolute right-[-150px] top-[10%] h-[450px] w-[450px] rounded-full bg-[#6d28d9]/10 blur-[150px]" />
      <div className={`relative ${wrap}`}>
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <Reveal>
            <Label>Our future</Label>
            <h2
              id="future-title"
              className="hyi-h1 mt-4 text-[36px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[50px]"
            >
              <span className="hyi-white">We have come a long way,</span>
              <span className="block hyi-blue">and there is still so much to do.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Paras items={futureIntro} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* page stays pinned while cards travel sideways */
function FutureTrack() {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;

    const measure = () => {
      const d = el.scrollWidth - window.innerWidth;
      setDist(Math.max(0, Math.round(d)));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const bar = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section
      ref={ref}
      aria-label="Where we are heading"
      style={{ height: `calc(100svh + ${dist}px)` }}
      className="relative bg-black"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-10 lg:px-20">
          <p className="hyi-h3 hyi-blue">Where we are heading</p>
        </div>

        <motion.div
          ref={track}
          style={{ x }}
          className="mt-6 flex w-max items-stretch gap-4 px-5 md:px-10 lg:pl-[max(5rem,calc((100vw-82.5rem)/2+5rem))] lg:pr-20"
        >
          {future.map((f, i) => (
            <div
              key={f.t}
              className={`${toneClass(i % 2 === 0 ? "neu" : "clay")} flex w-[82vw] shrink-0 flex-col p-6 sm:w-[27rem] md:p-8`}
            >
              <span className="font-mono text-[12px] text-[#a78bfa]">0{i + 1}</span>
              <h3 className="hyi-h3 hyi-white mt-4">{f.t}</h3>
              <p className="hyi-p mt-3">{f.d}</p>
            </div>
          ))}
        </motion.div>

        <div className="mx-auto mt-8 h-1 w-[min(90%,40rem)] overflow-hidden rounded-full bg-white/10" aria-hidden>
          <motion.div
            style={{ scaleX: bar, originX: 0 }}
            className="h-full w-full bg-gradient-to-r from-[#60a5fa] to-[#6d28d9]"
          />
        </div>
      </div>
    </section>
  );
}

/* Visible FAQ: same text as FAQPage JSON-LD (required by Google) */
function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className={`relative scroll-mt-24 bg-[#030303] ${sec}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16`}>
        <Reveal>
          <Label>FAQ</Label>
          <h2
            id="faq-title"
            className="hyi-h1 mt-4 text-[36px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[50px]"
          >
            <span className="hyi-white">Frequently asked</span>
            <span className="block hyi-blue">questions about HYI.AI.</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details
                className={`${toneClass(i % 2 === 0 ? "neu" : "clay")} group p-5 sm:p-6 [&_summary::-webkit-details-marker]:hidden`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="hyi-h3 hyi-white">{f.q}</h3>
                  <ChevronDown className="hyi-white-icon h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="hyi-p mt-3">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section
      aria-labelledby="closing-title"
      className="relative overflow-hidden border-t border-white/[0.06] bg-black px-5 py-10 md:px-10 md:py-14 lg:px-20"
    >
      <Bg />
      <div className="relative mx-auto max-w-[900px] text-center">
        <Reveal>
          <h2
            id="closing-title"
            className="hyi-h1 text-[38px] font-medium leading-[1.04] tracking-[-0.055em] md:text-[58px]"
          >
            <span className="hyi-white">Growing With Change.</span>
            <span className="block hyi-blue">Moving Forward Together.</span>
          </h2>
          <Paras items={futureClose} className="mx-auto mt-6 max-w-[680px]" />

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[16px] font-bold text-black transition hover:scale-[1.03]"
            >
              Talk to HYI.AI
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/hire-developer"
              className="inline-flex items-center rounded-full border border-white/[0.14] px-7 py-3.5 text-[16px] font-bold text-white/70 transition hover:border-[#a78bfa]/50 hover:text-white"
            >
              Hire remote talent
            </Link>
          </div>

          <p className="hyi-h3 hyi-white mt-8">HYI.AI – Growing With Change. Moving Forward Together.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ PAGE ============================ */

export default function AboutClient() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 25, restDelta: 0.001 });

  return (
    <MotionConfig reducedMotion="user">
      {/* header: always above everything */}
      <div className="relative z-50">
        <Header />
      </div>

      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[#60a5fa]"
      />

      {/* content layer: isolated so hyi-card transforms can't leak over the footer.
          No overflow-hidden here: it would break the sticky sections. */}
<main className="relative isolate z-10 w-full overflow-x-clip bg-black text-white [contain:paint]">        <Hero />
        <Stats />
        <WhoWeAre />
        <Story />
        <Belief />
        <VisionMission />
        <Founder />
        <Values />
        <FutureIntro />
        <FutureTrack />
        <Faq />
        <Closing />
      </main>

      {/* footer layer: solid background, always below content flow and above it visually */}
  <div className="relative isolate z-30 mt-0 bg-black">
  <Footer />
</div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: rgba(96, 165, 250, 0.4);
          color: #ffffff;
        }
      `}</style>
    </MotionConfig>
  );
}