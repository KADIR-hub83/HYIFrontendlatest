"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { FooterLink, MegaMenu } from "@/components/data/footer";

type Section = {
  key: string;
  heading: string;
  links: readonly FooterLink[];
};

type Props = {
  sections: Section[];
  megaMenus: MegaMenu[];
};

const Chevron = ({
  open,
  className = "",
}: {
  open: boolean;
  className?: string;
}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-transform duration-200 ${
      open ? "rotate-180" : ""
    } ${className}`}
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function ScrollableList({
  children,
  resetKey,
}: {
  children: React.ReactNode;
  resetKey: string;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);

  const check = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 8);
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 8);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollTop = 0;
    check();

    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [resetKey, check]);

  return (
    <div className="relative min-h-0 border-r border-white/10">
      <ul
        ref={ref}
        onScroll={check}
        className="flex h-full min-h-0 flex-col gap-1 overflow-y-auto overscroll-contain p-3 pr-2 [scrollbar-color:rgba(255,255,255,0.25)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/25"
      >
        {children}
      </ul>

      {/* Top fade */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black to-transparent transition-opacity duration-200 ${
          canScrollUp ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Bottom fade + hint */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 flex h-16 items-end justify-center bg-gradient-to-t from-black via-black/80 to-transparent pb-3 transition-opacity duration-200 ${
          canScrollDown ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          type="button"
          tabIndex={canScrollDown ? 0 : -1}
          onClick={() =>
            ref.current?.scrollBy({ top: 180, behavior: "smooth" })
          }
          className={`flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-3 py-1 text-xs font-medium text-dark_mode-100/90 backdrop-blur-sm transition hover:border-white/40 hover:text-dark_mode-100 ${
            canScrollDown ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          Scroll for more
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function FooterNav({ sections, megaMenus }: Props) {
  // Desktop popup state
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState(0);
  const popupWrapRef = useRef<HTMLDivElement>(null);

  // Mobile accordion state
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [mobileMega, setMobileMega] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  // Bahar click ya Escape dabane par popup band
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        popupWrapRef.current &&
        !popupWrapRef.current.contains(e.target as Node)
      ) {
        setOpenMega(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMega(null);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const currentMenu = megaMenus.find((m) => m.key === openMega);
  const currentGroup = currentMenu?.groups[activeGroup];

  const toggleMega = (key: string) => {
    setActiveGroup(0);
    setOpenMega((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* =====================================================
          DESKTOP
      ===================================================== */}
      <div className="hidden flex-col gap-8 md:flex">
        {/* Main columns */}
        <div className="grid w-full grid-cols-3 gap-6 lg:grid-cols-6">
          {sections.map((section) => (
            <div key={section.key} className="flex flex-col gap-3">
              <h2 className="cursor-default text-base font-semibold text-dark_mode-100">
                {section.heading}
              </h2>
              <ul className="flex flex-col gap-2">
                {section.links.map(([label, href]) => (
                  <li
                    key={`${label}-${href}`}
                    className="text-sm font-medium text-dark_mode-100/80 transition duration-200 hover:translate-x-1 hover:text-dark_mode-100"
                  >
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popup triggers */}
        {/* Popup triggers */}
        <div
          ref={popupWrapRef}
          className="relative"
          onMouseLeave={() => setOpenMega(null)}
        >
          <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
            <span className="cursor-default text-base font-bold hyi-white">
              Explore:
            </span>

            {megaMenus.map((menu) => {
              const isOpen = openMega === menu.key;
              return (
                <button
                  key={menu.key}
                  type="button"
                  onClick={() => toggleMega(menu.key)}
                  onMouseEnter={() => {
                    if (openMega !== menu.key) setActiveGroup(0);
                    setOpenMega(menu.key);
                  }}
                  aria-expanded={isOpen}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition duration-200 ${
                    isOpen
                      ? "border-white/30 bg-white/10 text-dark_mode-100"
                      : "border-white/10 text-dark_mode-100/80 hover:border-white/30 hover:text-dark_mode-100"
                  }`}
                >
                  {menu.heading}
                  <Chevron open={!isOpen} />
                </button>
              );
            })}
          </div>

          {/* Popup (upar ki taraf khulta hai) */}
          {currentMenu && currentGroup && (
            // pb-3 = hover bridge, taaki button se popup tak mouse le jaane par band na ho
            <div className="absolute bottom-full left-0 right-0 z-50 pb-3">
              <div className="flex h-[min(60vh,560px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/95 shadow-2xl backdrop-blur-md">
                {/* Fixed header (scroll nahi hota) */}
                <div className="shrink-0 border-b border-white/10 px-6 py-5">
                  <h3 className="text-lg font-semibold text-dark_mode-100">
                    {currentMenu.heading}
                  </h3>
                  {currentMenu.paragraph && (
                    <p className="mt-1 text-sm text-dark_mode-100/70">
                      {currentMenu.paragraph}
                    </p>
                  )}
                </div>

                {/* Body: left aur right ka alag scroll */}
                <div className="grid min-h-0 flex-1 grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
                  {/* Left: groups (independent scroll) */}
 {/* Left: groups (independent scroll + hint) */}
<ScrollableList resetKey={currentMenu.key}>
  {currentMenu.groups.map((group, i) => (
    <li key={group.heading}>
      <button
        type="button"
        onMouseEnter={() => setActiveGroup(i)}
        onFocus={() => setActiveGroup(i)}
        onClick={() => setActiveGroup(i)}
        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition duration-150 ${
          i === activeGroup
            ? "bg-white/10 text-dark_mode-100"
            : "text-dark_mode-100/70 hover:bg-white/5 hover:text-dark_mode-100"
        }`}
      >
        <span>{group.heading}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
          aria-hidden="true"
        >
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>
    </li>
  ))}
</ScrollableList>

                  {/* Right: links (independent scroll, group badalne par top se start) */}
                  <div
                    key={`${currentMenu.key}-${activeGroup}`}
                    className="min-h-0 overflow-y-auto overscroll-contain p-4 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]"
                  >
                    <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-dark_mode-100/50">
                      {currentGroup.heading}
                    </p>
                    <ul className="grid grid-cols-2 content-start gap-x-6 gap-y-1 lg:grid-cols-3">
                      {currentGroup.links.map(([label, href]) => (
                        <li key={`${label}-${href}`}>
                          <Link
                            href={href}
                            onClick={() => setOpenMega(null)}
                            className="block rounded-lg px-3 py-2.5 text-sm text-dark_mode-100/80 transition duration-150 hover:bg-white/5 hover:text-dark_mode-100"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =====================================================
          MOBILE (accordion dropdowns)
      ===================================================== */}
      <div className="flex flex-col md:hidden">
        {/* Main sections */}
        {sections.map((section) => {
          const isOpen = mobileSection === section.key;
          return (
            <div key={section.key} className="border-b border-white/10">
              <button
                type="button"
                onClick={() => setMobileSection(isOpen ? null : section.key)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-dark_mode-100"
              >
                {section.heading}
                <Chevron open={isOpen} />
              </button>

              {isOpen && (
                <ul className="flex flex-col gap-3 pb-4 pl-2">
                  {section.links.map(([label, href]) => (
                    <li
                      key={`${label}-${href}`}
                      className="text-sm text-dark_mode-100/80"
                    >
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}

        {/* Mega menus: menu -> group -> links */}
        {megaMenus.map((menu) => {
          const isMenuOpen = mobileMega === menu.key;
          return (
            <div key={menu.key} className="border-b border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMega(isMenuOpen ? null : menu.key);
                  setMobileGroup(null);
                }}
                aria-expanded={isMenuOpen}
                className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-dark_mode-100"
              >
                {menu.heading}
                <Chevron open={isMenuOpen} />
              </button>

              {isMenuOpen && (
                <div className="flex flex-col pb-3 pl-2">
                  {menu.groups.map((group) => {
                    const gKey = `${menu.key}:${group.heading}`;
                    const isGroupOpen = mobileGroup === gKey;
                    return (
                      <div key={gKey} className="border-t border-white/5">
                        <button
                          type="button"
                          onClick={() =>
                            setMobileGroup(isGroupOpen ? null : gKey)
                          }
                          aria-expanded={isGroupOpen}
                          className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-dark_mode-100"
                        >
                          {group.heading}
                          <Chevron open={isGroupOpen} />
                        </button>

                        {isGroupOpen && (
                          <ul className="flex flex-col gap-3 border-l border-white/10 pb-3 pl-4">
                            {group.links.map(([label, href]) => (
                              <li
                                key={`${label}-${href}`}
                                className="text-sm text-dark_mode-100/80"
                              >
                                <Link href={href}>{label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}