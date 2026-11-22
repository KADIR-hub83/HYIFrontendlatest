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
<section className="grid gap-2 lg:py-8 py-4 lg:grid-cols-[5fr_7fr] lg:gap-16 max-lg:text-center">
  <div className="lg:sticky lg:top-32 lg:self-start max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
    {eyebrow && <p className="hyi-eyebrow mb-2">{eyebrow}</p>}

    <SplitHeading text={title} accent={accent} />

    <div className="hyi-line mt-2 w-28 max-lg:mx-auto" />
  </div>

<div className="space-y-3 max-lg:text-center">{children}</div>
</section>
  );
}