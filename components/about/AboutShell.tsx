"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { ABOUT_PAGES } from "@/components/data/aboutContent";
import Card from "./Card";
import Cursor from "./Cursor";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import SplitHeading from "./Splitheading";
import Header from "../section/general/header";
import Footer from "../section/general/footer";

export default function AboutShell({
  title,
  accent,
  children,
}: {
  title: string;
  accent?: string[];
  children: ReactNode;
}) {
  const pathname = usePathname();
  const root = useRef<HTMLElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLElement>(null);

  const idx = Math.max(0, ABOUT_PAGES.findIndex((p) => p.href === pathname));
  const prev = idx > 0 ? ABOUT_PAGES[idx - 1] : null;
  const next = ABOUT_PAGES[(idx + 1) % ABOUT_PAGES.length];

  // Mouse + scroll parallax variables, scroll progress bar
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let raf = 0, mx = 0, my = 0;
    const upd = () => {
      raf = 0;
      el.style.setProperty("--px", String(mx));
      el.style.setProperty("--py", String(my));
      const sy = window.scrollY;
      el.style.setProperty("--sy", String(sy));
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? sy / max : 0})`;
    };
    const sch = () => {
      if (!raf) raf = requestAnimationFrame(upd);
    };
    const mm = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth) * 2 - 1;
      my = (e.clientY / window.innerHeight) * 2 - 1;
      sch();
    };
    upd();
    window.addEventListener("mousemove", mm);
    window.addEventListener("scroll", sch, { passive: true });
    window.addEventListener("resize", sch);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("scroll", sch);
      window.removeEventListener("resize", sch);
      cancelAnimationFrame(raf);
    };
  }, []);

  // keep active tab visible on mobile
  useEffect(() => {
    nav.current
      ?.querySelector('[aria-current="page"]')
      ?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [pathname]);

  const orb = (k: number, s: number) => ({ "--k": k, "--s": s } as CSSProperties);

  return (
    <main ref={root} className="hyi-bg">
      <div ref={bar} className="hyi-progress" />
      <Cursor />
      <div className="hyi-grid" />
      <span className="hyi-orb a" style={orb(45, -0.1)} />
      <span className="hyi-orb b" style={orb(-60, -0.16)} />
      <span className="hyi-orb c" style={orb(35, -0.06)} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4  sm:px-6">
        <Header/>
        {/* Floating glass + neumorphic tab bar */}
        {/* <nav
          ref={nav}
          aria-label="About pages"
          className="hyi-glass sticky top-4 z-50 mt-4 flex gap-3 overflow-x-auto !rounded-2xl p-2.5 [scrollbar-width:none]"
        >
          {ABOUT_PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              aria-current={pathname === p.href ? "page" : undefined}
              className={`hyi-skeu whitespace-nowrap px-4 py-2.5 text-sm font-semibold ${
                pathname === p.href ? "is-active" : ""
              }`}
            >
              {p.label}
            </Link>
          ))}
        </nav> */}

        {/* Hero with scroll parallax fade */}
        <header
          className="flex lg:min-h-[52vh] min-h-[32vh] flex-col justify-center py-1"
          style={{
            transform: "translateY(calc(var(--sy,0) * 0.18px))",
            opacity: "calc(1 - var(--sy,0) * 0.0016)",
          }}
        >
          {/* <p className="hyi-eyebrow mb-6 flex items-center gap-3">
            <span className="hyi-pulse inline-block h-2.5 w-2.5 rounded-full bg-[#4f9dff]" />
            HYI.AI · About Us
          </p> */}
          <SplitHeading as="h1" text={title} accent={accent} className="hyi-h1 text-[40px] md:text-[60px] lg:text-[120px]  hyi-white text-center" delay={50} />
          {/* <div className="mt-14 flex items-center gap-4">
            <div className="hyi-mouse" />
            <span className="hyi-eyebrow !text-white/50">Scroll</span>
          </div> */}
        </header>

        {children}

        {/* Next / Prev */}
        {/* <Reveal>
          <hr className="hyi-line my-10" />
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
            {prev ? (
              <Magnetic>
                <Link href={prev.href} className="hyi-skeu px-6 py-3 font-semibold">
                  ← {prev.label}
                </Link>
              </Magnetic>
            ) : (
              <span />
            )}
            <Link href={next.href} data-cursor className="block">
              <Card variant="clay" className="text-right">
                <p className="hyi-eyebrow !text-white/70">Next</p>
                <p className="hyi-h2 hyi-white mt-2">{next.label} →</p>
              </Card>
            </Link>
          </div>
        </Reveal> */}
       
      </div>
       <Footer/>
    </main>
  );
}