import type { ReactNode } from "react";
import SplitHeading from "./Splitheading";

/** Left title stays pinned while the right side scrolls. */
export default function StickySplit({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow?: string;
  title: string;
  accent?: string[];
  children: ReactNode;
}) {
  return (
    <section className="grid gap-8 py-14 lg:grid-cols-[5fr_7fr] lg:gap-16">
      <div className="lg:sticky lg:top-32 lg:self-start">
        {eyebrow && <p className="hyi-eyebrow mb-4">{eyebrow}</p>}
        <SplitHeading text={title} accent={accent} />
        <div className="hyi-line mt-6 w-28" />
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}