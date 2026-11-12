"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import BackdropFx from "@/components/about/BackdropFx";
import Card from "@/components/about/Card";
import Magnetic from "@/components/about/Magnetic";
import Reveal from "@/components/about/Reveal";
import SplitHeading from "@/components/about/Splitheading";
import { AI_META, AI_PAGES } from "@/components/data/aiContent";
import NeuralCanvas from "./NeuralCanvas";
import Header from "../section/general/header";
import Footer from "../section/general/footer";

export default function AiShell({
  letter,
  title,
  accent,
  subtitle,
  children,
}: {
  letter: string;
  title: string;
  accent?: string[];
  subtitle: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const nav = useRef<HTMLElement>(null);
  const idx = Math.max(0, AI_PAGES.findIndex((p) => p.href === pathname));
  const prev = idx > 0 ? AI_PAGES[idx - 1] : null;
  const next = AI_PAGES[(idx + 1) % AI_PAGES.length];

  useEffect(() => {
    nav.current
      ?.querySelector('[aria-current="page"]')
      ?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [pathname]);

  return (
    <main className="hyi-bg">
        <Header/>
      <BackdropFx />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4  sm:px-6">
        {/* <nav
          ref={nav}
          aria-label="AI Advisory pages"
          className="hyi-glass sticky top-4 z-50 mt-4 flex gap-3 overflow-x-auto !rounded-2xl p-2.5 [scrollbar-width:none]"
        >
          {AI_PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              aria-current={pathname === p.href ? "page" : undefined}
              className={`hyi-skeu whitespace-nowrap px-4 py-2.5 text-sm font-semibold ${
                pathname === p.href ? "is-active" : ""
              }`}
            >
              {p.letter} · {p.nav}
            </Link>
          ))}
        </nav> */}

        {/* Hero with live neural-network canvas */}
        <header
          className="relative flex min-h-[78vh] max-md:min-h-[54vh] flex-col items-center justify-center py-16 text-center"
          style={{
            transform: "translateY(calc(var(--sy,0) * 0.18px))",
            opacity: "calc(1 - var(--sy,0) * 0.0016)",
          }}
        >
          <NeuralCanvas />
          <div className="relative">
            {/* <p className="hyi-eyebrow mb-6 flex items-center justify-center gap-3">
              <span className="hyi-pulse inline-block h-2.5 w-2.5 rounded-full bg-[#4f9dff]" />
              {AI_META.kicker}
            </p> */}
            <SplitHeading as="h1" text={title} accent={accent} className="hyi-h1 lg:text-[120px] md:text-[80px] text-[60px] hyi-white text-center" delay={50} />
            <p className="hyi-h1 hyi-white mx-auto mt-3 max-w-2xl">{subtitle}</p>
            {/* <div className="mt-12 flex items-center justify-center gap-4">
              <div className="hyi-mouse" />
              <span className="hyi-eyebrow !text-white/50">Scroll</span>
            </div> */}
          </div>
        </header>

        {children}

        {/* <Reveal>
          <hr className="hyi-line my-10" />
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
            {prev ? (
              <Magnetic>
                <Link href={prev.href} className="hyi-skeu px-6 py-3 font-semibold">
                  ← {prev.nav}
                </Link>
              </Magnetic>
            ) : (
              <span />
            )}
            <Link href={next.href} data-cursor className="block">
              <Card variant="clay" className="text-right">
                <p className="hyi-eyebrow !text-white/70">Next</p>
                <p className="hyi-h2 hyi-white mt-2">{next.nav} →</p>
              </Card>
            </Link>
          </div>
        </Reveal> */}
      </div>
      <Footer/>
    </main>
  );
}