"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import BackdropFx from "@/components/about/BackdropFx";
import { HIRE_PAGES, LINKS } from "@/components/data/HireContent";
import Header from "../section/general/header";
import Footer from "../section/general/footer";

export default function HireShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    nav.current?.querySelector('[aria-current="page"]')?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [pathname]);

  return (
    <main className="hyi-bg">
      <BackdropFx />
      <Header/>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        {/* <nav
          ref={nav}
          aria-label="Hire talent pages"
          className="hyi-glass sticky top-4 z-50 mt-4 flex items-center gap-3 overflow-x-auto !rounded-2xl p-2.5 [scrollbar-width:none]"
        >
          {HIRE_PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              aria-current={pathname === p.href ? "page" : undefined}
              className={`hyi-skeu whitespace-nowrap px-4 py-2.5 text-sm font-semibold ${pathname === p.href ? "is-active" : ""}`}
            >
              {p.nav}
            </Link>
          ))}
          <Link href={LINKS.expert} className="hyi-btn-clay ml-auto whitespace-nowrap !px-5 !py-2.5 text-sm">
            Talk to Expert
          </Link>
        </nav> */}
        {children}
      </div>
      <Footer/>
    </main>
  );
}