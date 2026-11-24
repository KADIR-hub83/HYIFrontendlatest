"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GlobalPrefetch() {
  const router = useRouter();

  useEffect(() => {
    const prefetched = new Set<string>();

    const prefetch = (link: HTMLAnchorElement) => {
      const href = link.getAttribute("href");

      if (!href || !href.startsWith("/")) return;
      if (href.startsWith("/api/")) return;
      if (href.startsWith("/#")) return;
      if (href.includes("#")) return;
      if (prefetched.has(href)) return;

      prefetched.add(href);
      router.prefetch(href);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;

      if (link) prefetch(link);
    };

    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;

      if (link) prefetch(link);
    };

    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("focusin", handleFocus);

    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("focusin", handleFocus);
    };
  }, [router]);

  return null;
}