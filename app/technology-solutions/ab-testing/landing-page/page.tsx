/* ============================================================================
 *  ROUTE FILE  —  this is the one that fixes your 404.
 *
 *  Put this file at:
 *    frontend/app/technology-solutions/ab-testing/landing-page/page.tsx
 *
 *  and put LandingPageABTestingClient.tsx at:
 *    frontend/components/section/technology-solutions/ab-testing/landing-page/
 *      LandingPageABTestingClient.tsx
 *
 *  Next.js App Router only turns a page.tsx inside `app/` into a URL. A
 *  page.tsx sitting inside `components/` is never routed, which is exactly
 *  why GET /technology-solutions/ab-testing/landing-page returned 404.
 * ========================================================================== */

import type { Metadata } from "next";
import LandingPageABTestingClient from "@/components/section/technology-solutions/ab-testing/landing-page/Landingpageabtestingclient";

export const metadata: Metadata = {
  title: "Landing Page A/B Testing | HYI.AI",
  description:
    "Controlled landing page experiments run properly: evidence-backed hypotheses, sample sizes calculated before launch, and read-outs that report the confidence interval rather than a flattering number.",
  keywords: [
    "landing page A/B testing",
    "conversion rate optimisation",
    "split testing",
    "experimentation programme",
    "statistical significance calculator",
    "sample size calculator",
    "HYI.AI",
  ],
  openGraph: {
    title: "Landing Page A/B Testing | HYI.AI",
    description:
      "We run the test, read the numbers honestly, and ship the winner. First result inside 21 days.",
    type: "website",
    url: "https://hyi.ai/technology-solutions/ab-testing/landing-page",
    siteName: "HYI.AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page A/B Testing | HYI.AI",
    description:
      "Evidence-backed landing page experiments, with the confidence interval reported every time.",
  },
  alternates: {
    canonical: "/technology-solutions/ab-testing/landing-page",
  },
};

export default function Page() {
  return <LandingPageABTestingClient />;
}