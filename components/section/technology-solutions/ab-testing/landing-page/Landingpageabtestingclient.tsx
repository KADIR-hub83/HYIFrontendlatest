"use client";

import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
/* ============================================================================
 *  HYI.AI  —  Landing Page A/B Testing
 *  ---------------------------------------------------------------------------
 *  File     : components/section/technology-solutions/ab-testing/landing-page/
 *             LandingPageABTestingClient.tsx
 *  Rendered : app/technology-solutions/ab-testing/landing-page/page.tsx
 *
 *  Dependencies : React 18+, Next.js 13+ (App Router), Tailwind CSS 3+
 *  External libs: none. Every icon is an inline SVG, every chart is hand-built.
 *
 *  Design notes
 *  ------------
 *  The subject is a testing lab, so the page borrows the vernacular of one:
 *  specimen cards, control vs. treatment, confidence intervals, lab tape.
 *  Palette is "ink and signal" — a deep ink field, bone-white paper panels,
 *  a signal blue for the treatment arm and a clay red for the control arm,
 *  so that colour always carries meaning and never decorates.
 *
 *    --ink      #0A1020   page field
 *    --slate    #141C2F   raised panel on ink
 *    --bone     #F3F1EC   paper sections
 *    --signal   #2F6BFF   treatment / winner
 *    --clay     #C4573F   control / baseline
 *    --moss     #2E7D5B   significance reached
 *    --graphite #5A6478   secondary text
 *
 *  Accessibility: focus rings on every interactive element, aria-live on the
 *  calculators, prefers-reduced-motion respected on the one animated element.
 * ========================================================================== */

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/* ==========================================================================
 * 1. TYPES
 * ========================================================================== */

type VariantKey = "control" | "treatment";

interface HeroVariantCopy {
  key: VariantKey;
  badge: string;
  headline: string;
  subline: string;
  cta: string;
  secondaryCta: string;
  formLabel: string;
  trustLine: string;
  visitors: number;
  conversions: number;
}

interface ProcessStep {
  index: number;
  title: string;
  duration: string;
  summary: string;
  detail: string;
  deliverables: string[];
  ownedBy: string;
}

interface TestableElement {
  group: string;
  blurb: string;
  items: { name: string; typicalLift: string; effort: "Low" | "Medium" | "High" }[];
}

interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  image: string;
  hypothesis: string;
  change: string;
  primaryMetric: string;
  control: number;
  treatment: number;
  visitors: number;
  runtimeDays: number;
  confidence: number;
  revenueImpact: string;
  quote: string;
  quotePerson: string;
  quoteRole: string;
}

interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  cadence: string;
  testsPerMonth: string;
  bestFor: string;
  features: string[];
  notIncluded: string[];
  featured: boolean;
}

interface FaqItem {
  q: string;
  a: string;
  category: string;
}

interface GlossaryEntry {
  term: string;
  short: string;
  long: string;
}

interface MetricRow {
  label: string;
  control: number;
  treatment: number;
  unit: string;
  higherIsBetter: boolean;
}

interface IntegrationItem {
  name: string;
  category: string;
  note: string;
  logoText: string;
  tint: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  focus: string;
  years: number;
}

interface TimelineWeek {
  week: string;
  focus: string;
  activities: string[];
  output: string;
}

interface MistakeItem {
  mistake: string;
  why: string;
  instead: string;
}

/* ==========================================================================
 * 2. STATIC CONTENT
 *    Kept outside the component so React never re-allocates these on render.
 * ========================================================================== */

const HERO_VARIANTS: Record<VariantKey, HeroVariantCopy> = {
  control: {
    key: "control",
    badge: "Variant A — control",
    headline: "Welcome to our landing page optimisation service",
    subline:
      "We help businesses improve their websites using data-driven testing methods and industry best practices.",
    cta: "Submit enquiry",
    secondaryCta: "Learn more",
    formLabel: "Enter your business email to continue",
    trustLine: "Trusted by companies worldwide",
    visitors: 14_820,
    conversions: 341,
  },
  treatment: {
    key: "treatment",
    badge: "Variant B — treatment",
    headline: "Find out which version of your page actually sells",
    subline:
      "We run the test, read the numbers honestly, and ship the winner. First result inside 21 days or you do not pay for the cycle.",
    cta: "Get my first test scoped",
    secondaryCta: "See a real test report",
    formLabel: "Work email — scoping call within 24 hours",
    trustLine: "412 tests shipped · 61% reached significance",
    visitors: 14_755,
    conversions: 592,
  },
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    index: 1,
    title: "Teardown and evidence gathering",
    duration: "Days 1–4",
    summary:
      "We look at what your page is doing today before anyone suggests changing a button colour.",
    detail:
      "A HYI analyst reads your analytics, watches session recordings, reads sales-call notes and support tickets, and runs a heuristic walkthrough of the page on a mid-range Android phone on a throttled connection. The deliverable is a list of observed problems with evidence attached to each one — not opinions.",
    deliverables: [
      "Annotated page teardown (PDF, 12–20 pages)",
      "Funnel drop-off map from entry to conversion",
      "Session-recording highlight reel, 8–15 clips",
      "Device and speed audit with Core Web Vitals",
    ],
    ownedBy: "Conversion analyst",
  },
  {
    index: 2,
    title: "Hypothesis writing",
    duration: "Days 5–7",
    summary:
      "Every test starts as a sentence you can be wrong about. If it cannot be wrong, it is not a hypothesis.",
    detail:
      "We write each idea in the form: because we observed X, we believe changing Y for audience Z will cause effect W, measured by metric M. Each one is scored on expected impact, confidence in the evidence, and build effort, then ranked. You approve the queue before a single line of code is written.",
    deliverables: [
      "Ranked hypothesis backlog, typically 15–40 entries",
      "Impact / confidence / effort score for each",
      "Primary and guardrail metric named per test",
      "Written pre-registration for the first three tests",
    ],
    ownedBy: "Experimentation lead",
  },
  {
    index: 3,
    title: "Power calculation and test design",
    duration: "Day 8",
    summary:
      "We work out how much traffic the test needs before we launch it, not after it looks interesting.",
    detail:
      "Using your current conversion rate and the smallest lift worth shipping, we calculate the sample size per arm and the expected runtime. If the maths says the test needs nine months on your traffic, we tell you that on day eight and switch to a bigger, bolder change instead of a timid one.",
    deliverables: [
      "Sample size per arm at 95% confidence, 80% power",
      "Honest runtime estimate in business days",
      "Traffic split plan and exclusion rules",
      "Stop conditions agreed in writing",
    ],
    ownedBy: "Experimentation lead",
  },
  {
    index: 4,
    title: "Build and quality assurance",
    duration: "Days 9–14",
    summary:
      "The variant gets built properly, then broken on purpose across browsers before any real visitor sees it.",
    detail:
      "Variants are built as production-grade React or as tag-manager overlays, depending on your stack. QA covers Chrome, Safari, Firefox, Edge, iOS Safari and Android Chrome, at four breakpoints, with and without ad blockers. We check that the flicker of the original content is not visible, and that analytics fires exactly once per assignment.",
    deliverables: [
      "Variant code in a reviewable pull request",
      "Cross-browser QA matrix, 24 combinations",
      "Anti-flicker verification recording",
      "Tracking validation against a staging property",
    ],
    ownedBy: "Front-end engineer",
  },
  {
    index: 5,
    title: "Run, monitor, do not peek",
    duration: "Days 15–35",
    summary:
      "The test runs for whole weeks. We watch the guardrails daily and the primary metric never.",
    detail:
      "Calling a winner early is the single most common way teams fool themselves. We run to the pre-calculated sample size, always in whole weekly cycles so that weekday and weekend behaviour are both represented. A daily automated check watches error rates, page speed and revenue per session so a genuinely broken variant gets pulled within hours.",
    deliverables: [
      "Daily guardrail monitoring with alerting",
      "Sample-ratio mismatch check every 24 hours",
      "Weekly progress note, no early conclusions",
      "Incident rollback within two hours if needed",
    ],
    ownedBy: "Experimentation lead",
  },
  {
    index: 6,
    title: "Read out and ship",
    duration: "Days 36–40",
    summary:
      "You get the real number, the confidence interval around it, and a plain recommendation.",
    detail:
      "The read-out states the observed lift, the interval, the probability the result is noise, and the segment breakdown. Flat and negative results are written up with the same care as winners, because a flat result that stops you from shipping a bad idea has already paid for itself. Winners are merged to production and re-verified after 14 days.",
    deliverables: [
      "Read-out deck with the interval, not just the point estimate",
      "Segment breakdown by device, source and returning status",
      "Merge to production plus post-ship verification",
      "Next-cycle hypothesis queue, re-ranked on what we learned",
    ],
    ownedBy: "Conversion analyst",
  },
];

const TESTABLE_ELEMENTS: TestableElement[] = [
  {
    group: "The promise",
    blurb:
      "What the page claims it will do for the visitor in the first four seconds.",
    items: [
      { name: "Headline framing — outcome vs. feature", typicalLift: "4–22%", effort: "Low" },
      { name: "Sub-headline specificity and length", typicalLift: "2–9%", effort: "Low" },
      { name: "Audience qualifier in the first line", typicalLift: "3–14%", effort: "Low" },
      { name: "Named objection addressed above the fold", typicalLift: "5–18%", effort: "Medium" },
      { name: "Concrete number vs. adjective", typicalLift: "3–11%", effort: "Low" },
    ],
  },
  {
    group: "The ask",
    blurb: "The action itself — its wording, its weight, and how often it appears.",
    items: [
      { name: "Button verb — commitment level", typicalLift: "3–16%", effort: "Low" },
      { name: "Single call to action vs. primary and secondary", typicalLift: "4–13%", effort: "Low" },
      { name: "Sticky action bar on mobile", typicalLift: "6–24%", effort: "Medium" },
      { name: "Repeat action after each proof block", typicalLift: "2–8%", effort: "Low" },
      { name: "Risk reversal text directly under the button", typicalLift: "3–12%", effort: "Low" },
    ],
  },
  {
    group: "The form",
    blurb:
      "Usually the single highest-leverage surface on a lead-generation page.",
    items: [
      { name: "Field count — every removed field is a test", typicalLift: "8–34%", effort: "Low" },
      { name: "Single step vs. two-step progressive form", typicalLift: "10–41%", effort: "Medium" },
      { name: "Phone number optional vs. required", typicalLift: "7–29%", effort: "Low" },
      { name: "Inline validation and error recovery copy", typicalLift: "4–15%", effort: "Medium" },
      { name: "Mobile keyboard type per field", typicalLift: "2–9%", effort: "Low" },
    ],
  },
  {
    group: "The proof",
    blurb: "What makes the claim believable to someone who has never heard of you.",
    items: [
      { name: "Named customer logos vs. generic count", typicalLift: "3–12%", effort: "Low" },
      { name: "Testimonial with a photo and a role", typicalLift: "4–17%", effort: "Low" },
      { name: "Numeric result in the testimonial itself", typicalLift: "5–19%", effort: "Low" },
      { name: "Third-party review badge placement", typicalLift: "2–10%", effort: "Low" },
      { name: "Short case study block above the fold", typicalLift: "6–21%", effort: "High" },
    ],
  },
  {
    group: "The structure",
    blurb: "Order, density and how much the visitor has to read before deciding.",
    items: [
      { name: "Section order — price before or after proof", typicalLift: "4–18%", effort: "Medium" },
      { name: "Long page vs. short page for the same offer", typicalLift: "5–26%", effort: "High" },
      { name: "Navigation removed from the landing page", typicalLift: "3–28%", effort: "Low" },
      { name: "Pricing shown vs. pricing gated", typicalLift: "6–33%", effort: "Medium" },
      { name: "FAQ block answering the top three objections", typicalLift: "3–11%", effort: "Low" },
    ],
  },
  {
    group: "The experience",
    blurb: "Speed, media and the things people feel rather than read.",
    items: [
      { name: "Hero video vs. static image vs. no media", typicalLift: "4–20%", effort: "Medium" },
      { name: "Largest contentful paint under 2.0 seconds", typicalLift: "7–31%", effort: "High" },
      { name: "Product screenshot vs. lifestyle photograph", typicalLift: "3–14%", effort: "Low" },
      { name: "Motion removed for reduced-motion users", typicalLift: "1–6%", effort: "Low" },
      { name: "Live chat entry point on the page", typicalLift: "2–13%", effort: "Medium" },
    ],
  },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-fintech",
    client: "A lending marketplace",
    sector: "Financial services",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=70",
    hypothesis:
      "Because 71% of mobile visitors abandoned at the income field, we believed splitting the form into two steps would raise completed applications for paid-search traffic.",
    change:
      "One seven-field form became a two-step form: eligibility first, contact details second, with a visible progress indicator.",
    primaryMetric: "Completed applications",
    control: 3.11,
    treatment: 4.38,
    visitors: 88_420,
    runtimeDays: 21,
    confidence: 99.2,
    revenueImpact: "₹1.9 crore additional annualised loan volume",
    quote:
      "We had argued about this form for two years. Three weeks of data ended the argument in an afternoon.",
    quotePerson: "Head of Growth",
    quoteRole: "Lending marketplace, Mumbai",
  },
  {
    id: "cs-saas",
    client: "A workforce analytics platform",
    sector: "B2B SaaS",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
    hypothesis:
      "Because sales calls kept opening with 'so what does this actually do', we believed replacing the abstract headline with a literal description of the product would raise demo requests.",
    change:
      "The headline changed from a category claim to a plain sentence naming the job the software does, with a product screenshot replacing a stock photograph.",
    primaryMetric: "Demo requests",
    control: 2.04,
    treatment: 2.61,
    visitors: 52_310,
    runtimeDays: 28,
    confidence: 97.8,
    revenueImpact: "38 extra qualified demos per month",
    quote:
      "The winning headline was the one our own support team had been using in emails all along.",
    quotePerson: "VP Marketing",
    quoteRole: "Workforce analytics platform",
  },
  {
    id: "cs-ecom",
    client: "A direct-to-consumer skincare brand",
    sector: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=70",
    hypothesis:
      "Because delivery cost was the most common pre-purchase support question, we believed showing the delivered price on the landing page would raise checkout starts.",
    change:
      "Price display changed from product price alone to product price with delivery and duties already included, plus a returns line under the button.",
    primaryMetric: "Checkout starts",
    control: 6.72,
    treatment: 8.15,
    visitors: 141_060,
    runtimeDays: 14,
    confidence: 99.9,
    revenueImpact: "21% lift in revenue per session",
    quote:
      "We were terrified the higher number would scare people off. It did the opposite.",
    quotePerson: "Founder",
    quoteRole: "Skincare brand",
  },
  {
    id: "cs-edtech",
    client: "A professional certification provider",
    sector: "Education",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=70",
    hypothesis:
      "Because visitors spent an average of 41 seconds on the syllabus block, we believed moving it above the pricing table would raise enrolment starts.",
    change:
      "Syllabus and instructor credentials moved above pricing; the pricing table gained a plain-language comparison of the two plans.",
    primaryMetric: "Enrolment starts",
    control: 4.88,
    treatment: 5.02,
    visitors: 63_770,
    runtimeDays: 28,
    confidence: 41.3,
    revenueImpact: "No detectable difference — change not shipped",
    quote:
      "They told us our idea did nothing, and showed the working. That is why we kept paying them.",
    quotePerson: "Director of Admissions",
    quoteRole: "Certification provider",
  },
  {
    id: "cs-travel",
    client: "A boutique hotel group",
    sector: "Travel and hospitality",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=70",
    hypothesis:
      "Because 58% of direct bookings came from returning visitors, we believed showing real-time room availability would raise booking starts on the property page.",
    change:
      "A static gallery hero became an availability-first hero with live room counts and a date picker in the first viewport.",
    primaryMetric: "Booking starts",
    control: 5.41,
    treatment: 7.09,
    visitors: 72_950,
    runtimeDays: 21,
    confidence: 99.6,
    revenueImpact: "31% more direct bookings, less OTA commission",
    quote:
      "Every extra direct booking is a commission we do not pay. The test paid for the year in six weeks.",
    quotePerson: "Commercial Director",
    quoteRole: "Boutique hotel group",
  },
  {
    id: "cs-health",
    client: "A telehealth clinic network",
    sector: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=70",
    hypothesis:
      "Because appointment no-shows correlated with unclear pricing, we believed stating consultation fees on the landing page would raise completed bookings without lowering volume.",
    change:
      "Fees moved from a linked page onto the hero, with insurance acceptance listed beside them.",
    primaryMetric: "Completed bookings",
    control: 9.14,
    treatment: 8.87,
    visitors: 47_220,
    runtimeDays: 21,
    confidence: 62.4,
    revenueImpact: "Bookings flat, no-shows down 19% — shipped on guardrail",
    quote:
      "The primary metric did not move. The metric we actually cared about did.",
    quotePerson: "Operations Lead",
    quoteRole: "Telehealth network",
  },
];

const PRICING_TIERS: PricingTier[] = [
  {
    id: "tier-pilot",
    name: "Pilot",
    tagline: "One page, one question, answered properly.",
    price: "$1,850",
    cadence: "one-off engagement",
    testsPerMonth: "1 test cycle",
    bestFor:
      "Teams who want to see how a real experiment is run before committing to a programme.",
    features: [
      "Full page teardown with evidence",
      "Up to 12 scored hypotheses",
      "One variant built and QA-tested",
      "Power calculation and honest runtime estimate",
      "Read-out with confidence intervals",
      "Winner merged to your repository",
    ],
    notIncluded: [
      "Ongoing hypothesis backlog",
      "Multi-page programme",
      "Dedicated analyst hours",
    ],
    featured: false,
  },
  {
    id: "tier-programme",
    name: "Programme",
    tagline: "A continuous testing cycle on your highest-traffic pages.",
    price: "$4,400",
    cadence: "per month",
    testsPerMonth: "2–3 test cycles",
    bestFor:
      "Companies with at least 20,000 monthly sessions on the pages being tested.",
    features: [
      "Everything in Pilot, running continuously",
      "Rolling hypothesis backlog, re-ranked monthly",
      "Two to three concurrent or sequential tests",
      "Dedicated analyst and front-end engineer",
      "Daily guardrail monitoring with alerting",
      "Monthly programme review with your team",
      "Shared experiment archive, searchable",
      "Slack channel with same-day response",
    ],
    notIncluded: ["Server-side experimentation platform build"],
    featured: true,
  },
  {
    id: "tier-embedded",
    name: "Embedded",
    tagline: "We build your internal testing capability and then hand it over.",
    price: "From $9,200",
    cadence: "per month",
    testsPerMonth: "4–8 test cycles",
    bestFor:
      "Organisations running experiments across several products who want the practice in-house.",
    features: [
      "Everything in Programme, at higher volume",
      "Server-side experimentation setup",
      "Feature-flag and rollout infrastructure",
      "Experiment review board facilitation",
      "Training programme for your marketers and engineers",
      "Documented playbook written for your stack",
      "Quarterly meta-analysis across all tests",
      "Named experimentation lead on your team",
    ],
    notIncluded: [],
    featured: false,
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    category: "Traffic and feasibility",
    q: "How much traffic do I need before A/B testing is worth it?",
    a: "As a working rule: if a page gets fewer than about 1,000 conversion-relevant visitors a month, classic A/B testing will rarely give you a clean answer in a reasonable time. Below that level we recommend qualitative research, session recordings and sequential before-and-after changes instead. Above roughly 5,000 monthly visitors with a 2% conversion rate, a bold change can usually be resolved in three to four weeks. Use the sample-size calculator further down this page — it will tell you honestly whether the maths works on your numbers.",
  },
  {
    category: "Traffic and feasibility",
    q: "Can you test a page that only gets traffic from paid campaigns?",
    a: "Yes, and paid traffic is often the cleanest to test because volume is predictable and you control the source. The one thing to watch is that changing bids or creative mid-test changes who is arriving, which contaminates the comparison. We ask that campaign settings stay frozen for the duration, or that the test is scoped to a single stable campaign.",
  },
  {
    category: "Method",
    q: "Why do you refuse to call a winner after three days?",
    a: "Because conversion rates swing wildly in the first days of any test, and if you keep looking until you see a result you like, you will find one roughly half the time even when both versions are identical. This is called peeking, and it is the most common reason teams believe in lifts that never materialise in revenue. We run to the pre-calculated sample size, in whole weekly cycles, and we tell you the interval rather than just the point estimate.",
  },
  {
    category: "Method",
    q: "What is the difference between A/B testing and multivariate testing?",
    a: "An A/B test compares whole versions of a page against each other, so you learn which version wins but not exactly why. A multivariate test varies several elements at once and estimates the contribution of each, which is more informative but needs several times the traffic. For most landing pages we recommend A/B tests of bold, whole-page changes first, and multivariate testing only once traffic comfortably supports it.",
  },
  {
    category: "Method",
    q: "How many variants should a test have?",
    a: "Two arms in most cases. Every extra arm splits your traffic further and lengthens the runtime, and it also raises the chance that one arm looks like a winner purely by luck. Three or four arms make sense when you genuinely have distinct strategic directions to compare and traffic to spare, in which case we adjust the significance threshold to account for the multiple comparisons.",
  },
  {
    category: "Results",
    q: "What happens if the test shows no difference?",
    a: "Roughly a third of well-designed tests come back flat, and that is a normal and useful outcome. A flat result tells you the thing you argued about for months does not matter, which frees the team to spend its effort elsewhere. We write flat results up with the same rigour as winners, including how large a difference the test could have detected, so you know whether the idea is dead or merely unproven.",
  },
  {
    category: "Results",
    q: "Do reported lifts actually show up in revenue?",
    a: "Some do, some shrink. Winners tend to regress somewhat after launch because the tested period captures a particular traffic mix and a bit of luck. This is why we report intervals rather than a single flattering number, re-verify every shipped winner after fourteen days, and track revenue per session as a guardrail rather than conversion rate alone.",
  },
  {
    category: "Results",
    q: "Will you tell me if my idea is bad?",
    a: "Yes, both before and after the test. Before, if a hypothesis has no evidence behind it, we will say so and rank it low. After, if your idea lost, the read-out says it lost and by how much. Agencies that only ever report wins are either very lucky or not telling you everything.",
  },
  {
    category: "Technical",
    q: "Which testing tools do you work with?",
    a: "We work with whatever you already run — GrowthBook, Optimizely, VWO, Statsig, LaunchDarkly, Google Optimize replacements, or a bespoke split at the edge. If you have nothing, we usually recommend a feature-flag-based server-side setup because it avoids the flash of original content and is far harder for ad blockers to break.",
  },
  {
    category: "Technical",
    q: "Will testing slow down my site?",
    a: "A badly implemented client-side test will, because it blocks rendering while the script decides which variant to show. We measure Largest Contentful Paint before and after on every test and treat a regression as a guardrail breach. Server-side assignment adds no client-side weight at all, which is one reason we prefer it.",
  },
  {
    category: "Technical",
    q: "How do you avoid the flicker where the original page shows first?",
    a: "Three ways, in order of preference: assign the variant on the server so the correct HTML is sent first; use an edge middleware rewrite in Next.js; or, as a last resort for client-side tools, an anti-flicker snippet with a strict timeout. We record the first paint on video during QA so you can see for yourself that nothing flashes.",
  },
  {
    category: "Technical",
    q: "Does A/B testing hurt SEO?",
    a: "Not when it is done correctly. Google has stated that testing is a normal part of running a site. The rules are straightforward: do not cloak by showing search engines something different from users, use a canonical tag pointing at the original URL if variants live on separate URLs, use temporary rather than permanent redirects, and take the test down once it has finished.",
  },
  {
    category: "Commercial",
    q: "How long is the minimum commitment?",
    a: "The Pilot is a single engagement with no ongoing commitment. Programme runs on a rolling three-month basis, because a single month is not long enough to complete a proper cycle and judge the work. Embedded engagements are typically scoped in six-month blocks since they include training and infrastructure.",
  },
  {
    category: "Commercial",
    q: "Who owns the code and the data?",
    a: "You do, entirely. Variant code is delivered as pull requests into your repository. The experiment archive is exportable at any time in an open format. If we stop working together you keep everything, including the documentation of what has already been tested, which is often the most valuable asset the programme produces.",
  },
  {
    category: "Commercial",
    q: "What if you run a test and nothing gets better all quarter?",
    a: "It happens, and it usually means the page is not the constraint — the offer, the price or the traffic source is. When we conclude that, we say so and recommend you stop paying us for page tests. The quarterly review exists precisely to have that conversation with numbers on the table.",
  },
];

const GLOSSARY: GlossaryEntry[] = [
  {
    term: "Control",
    short: "The version you already have.",
    long: "The existing page, used as the baseline against which every variant is compared. Sometimes called variant A or the champion.",
  },
  {
    term: "Treatment",
    short: "The version with your change in it.",
    long: "The modified page. Also called the variant, the challenger or variant B. A test may have several treatments, though each one splits the traffic further.",
  },
  {
    term: "Conversion rate",
    short: "Conversions divided by visitors.",
    long: "The proportion of visitors who complete the action you are measuring. It must be defined precisely before the test starts — form submitted, payment completed, call booked — because moving the definition mid-test invalidates the comparison.",
  },
  {
    term: "Statistical significance",
    short: "How unlikely this result is to be noise.",
    long: "The probability of seeing a difference at least this large if the two versions were in truth identical. Commonly reported at 95%, meaning there is a one-in-twenty chance of a false alarm. It says nothing about how large or how valuable the difference is.",
  },
  {
    term: "Statistical power",
    short: "The test's ability to notice a real difference.",
    long: "The probability that the test detects an effect of a given size, assuming one genuinely exists. Conventionally set at 80%. Underpowered tests produce flat results that get misread as 'the change did not matter'.",
  },
  {
    term: "Minimum detectable effect",
    short: "The smallest lift the test can reliably see.",
    long: "Set this before launch based on what would actually be worth shipping. A smaller minimum detectable effect requires dramatically more traffic — halving it roughly quadruples the sample needed.",
  },
  {
    term: "Confidence interval",
    short: "The range the true lift probably sits in.",
    long: "A lift reported as 'plus 14%, interval 3% to 26%' is far more honest than 'plus 14%'. If the interval crosses zero, the test has not established a direction.",
  },
  {
    term: "Peeking",
    short: "Checking results early and stopping when they look good.",
    long: "The most common way teams manufacture false winners. With repeated looks at a fixed-horizon test, the real false-positive rate climbs far above the nominal 5%. Either run to the planned sample size or use a sequential method designed for continuous monitoring.",
  },
  {
    term: "Sample ratio mismatch",
    short: "Traffic did not split the way it should have.",
    long: "If a 50/50 test delivers 52/48 across a large sample, something is broken — bot filtering, redirect loss, caching, or an assignment bug. The result cannot be trusted until it is explained.",
  },
  {
    term: "Novelty effect",
    short: "Returning visitors reacting to change itself.",
    long: "A new design can lift numbers briefly simply because it is new, then settle back. Running for whole weeks and segmenting new versus returning visitors exposes it.",
  },
  {
    term: "Guardrail metric",
    short: "A number that must not get worse.",
    long: "Page speed, refund rate, support-ticket volume, average order value. A variant that lifts sign-ups while doubling refunds has not won anything.",
  },
  {
    term: "Segment",
    short: "A slice of your audience.",
    long: "Device, traffic source, geography, new or returning. A result that is strongly positive on mobile and flat on desktop is more useful than a single blended average, but segments must be planned in advance or they become a way of finding a winner in noise.",
  },
];

const METRIC_ROWS: MetricRow[] = [
  { label: "Conversion rate", control: 3.12, treatment: 4.41, unit: "%", higherIsBetter: true },
  { label: "Revenue per session", control: 184, treatment: 241, unit: "₹", higherIsBetter: true },
  { label: "Form starts", control: 11.4, treatment: 16.2, unit: "%", higherIsBetter: true },
  { label: "Form completion", control: 27.3, treatment: 39.8, unit: "%", higherIsBetter: true },
  { label: "Bounce rate", control: 58.1, treatment: 49.6, unit: "%", higherIsBetter: false },
  { label: "Time to first interaction", control: 4.8, treatment: 2.9, unit: "s", higherIsBetter: false },
  { label: "Mobile conversion rate", control: 2.04, treatment: 3.55, unit: "%", higherIsBetter: true },
  { label: "Support tickets per 1k sessions", control: 6.2, treatment: 5.9, unit: "", higherIsBetter: false },
];

const INTEGRATIONS: IntegrationItem[] = [
  { name: "GrowthBook", category: "Experimentation", note: "Open-source, server-side assignment", logoText: "GB", tint: "#2F6BFF" },
  { name: "Statsig", category: "Experimentation", note: "Sequential testing and feature gates", logoText: "St", tint: "#7A5CFF" },
  { name: "Optimizely", category: "Experimentation", note: "Enterprise web and full-stack", logoText: "Op", tint: "#1B6BFF" },
  { name: "VWO", category: "Experimentation", note: "Client-side visual editor workflows", logoText: "VW", tint: "#C4573F" },
  { name: "LaunchDarkly", category: "Feature flags", note: "Flag-driven rollouts and holdbacks", logoText: "LD", tint: "#2E7D5B" },
  { name: "Google Analytics 4", category: "Analytics", note: "Event validation and segment export", logoText: "GA", tint: "#D9A441" },
  { name: "Amplitude", category: "Analytics", note: "Funnel and retention analysis", logoText: "Am", tint: "#2F6BFF" },
  { name: "Mixpanel", category: "Analytics", note: "Event-level experiment breakdowns", logoText: "Mx", tint: "#7A5CFF" },
  { name: "PostHog", category: "Analytics", note: "Self-hosted product analytics", logoText: "PH", tint: "#D9A441" },
  { name: "Hotjar", category: "Qualitative", note: "Recordings and scroll maps", logoText: "Hj", tint: "#C4573F" },
  { name: "Microsoft Clarity", category: "Qualitative", note: "Free recordings, rage-click detection", logoText: "Cl", tint: "#2F6BFF" },
  { name: "Segment", category: "Data pipeline", note: "Single event stream to every tool", logoText: "Sg", tint: "#2E7D5B" },
  { name: "Snowflake", category: "Warehouse", note: "Warehouse-native result queries", logoText: "Sn", tint: "#2F6BFF" },
  { name: "BigQuery", category: "Warehouse", note: "Raw event joins for deep analysis", logoText: "BQ", tint: "#D9A441" },
  { name: "Next.js", category: "Framework", note: "Edge middleware variant rewrites", logoText: "Nx", tint: "#8A94A8" },
  { name: "Shopify", category: "Commerce", note: "Theme and checkout extension tests", logoText: "Sh", tint: "#2E7D5B" },
  { name: "Webflow", category: "CMS", note: "Visual-build variants without engineering", logoText: "Wf", tint: "#2F6BFF" },
  { name: "HubSpot", category: "CRM", note: "Lead quality tracked to closed revenue", logoText: "Hs", tint: "#C4573F" },
];

const TEAM: TeamMember[] = [
  {
    name: "Ananya Rao",
    role: "Experimentation lead",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=70",
    focus: "Test design, power analysis, read-outs",
    years: 9,
  },
  {
    name: "Marcus Bell",
    role: "Conversion analyst",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=70",
    focus: "Teardowns, session research, hypothesis writing",
    years: 7,
  },
  {
    name: "Priya Menon",
    role: "Front-end engineer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=70",
    focus: "Variant builds, anti-flicker, QA matrix",
    years: 6,
  },
  {
    name: "Daniel Okafor",
    role: "Data engineer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=70",
    focus: "Event pipelines, warehouse joins, SRM checks",
    years: 8,
  },
  {
    name: "Sofia Lindqvist",
    role: "Conversion copywriter",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=70",
    focus: "Headline and offer variants, objection mapping",
    years: 11,
  },
  {
    name: "Rohit Shah",
    role: "Programme manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=70",
    focus: "Cadence, stakeholder reviews, backlog ranking",
    years: 10,
  },
];

const TIMELINE: TimelineWeek[] = [
  {
    week: "Week 1",
    focus: "Understand before touching anything",
    activities: [
      "Analytics access and event audit",
      "Session recording review, 90 minutes minimum",
      "Sales and support interview, two calls",
      "Heuristic walkthrough on throttled mobile",
    ],
    output: "Evidence-backed teardown document",
  },
  {
    week: "Week 2",
    focus: "Turn observations into testable claims",
    activities: [
      "Hypothesis workshop with your team",
      "Impact, confidence and effort scoring",
      "Power calculation for the top three",
      "Pre-registration of the first test",
    ],
    output: "Ranked backlog and a signed-off test one",
  },
  {
    week: "Week 3",
    focus: "Build it properly",
    activities: [
      "Variant implementation in a branch",
      "Cross-browser and breakpoint QA",
      "Tracking validation on staging",
      "Anti-flicker verification recording",
    ],
    output: "Reviewable pull request, QA sign-off",
  },
  {
    week: "Weeks 4–6",
    focus: "Let it run without interference",
    activities: [
      "Launch at agreed traffic split",
      "Daily guardrail and SRM checks",
      "Weekly progress note with no conclusions",
      "Second variant built in parallel",
    ],
    output: "Clean dataset at the planned sample size",
  },
  {
    week: "Week 7",
    focus: "Read it honestly and ship",
    activities: [
      "Analysis with intervals and segments",
      "Read-out session with your team",
      "Winner merged, or result archived",
      "Backlog re-ranked on what was learned",
    ],
    output: "Decision, shipped code, updated backlog",
  },
];

const COMMON_MISTAKES: MistakeItem[] = [
  {
    mistake: "Stopping the test the moment it looks significant",
    why: "Conversion rates wander early. Repeated checking turns a 5% false-alarm rate into something closer to 30%.",
    instead:
      "Fix the sample size before launch and run whole weeks. If you must monitor continuously, use a sequential test designed for it.",
  },
  {
    mistake: "Testing a change nobody would notice",
    why: "A button shade shift produces an effect far smaller than your traffic can resolve, so the test returns flat and teaches nothing.",
    instead:
      "Test changes large enough to matter — the offer, the form, the page structure, the promise itself.",
  },
  {
    mistake: "Running two tests on the same page at once",
    why: "Overlapping changes interact, and you cannot attribute the result to either one.",
    instead:
      "Sequence tests on the same surface, or use mutually exclusive traffic allocation if volume allows.",
  },
  {
    mistake: "Ignoring who the traffic actually is",
    why: "A campaign change mid-test alters the audience, which changes the baseline for both arms unevenly.",
    instead:
      "Freeze acquisition settings for the duration, and check that arm composition matches on key segments.",
  },
  {
    mistake: "Optimising a metric that does not pay the bills",
    why: "Lifting form submissions while lead quality collapses looks like a win in the dashboard and a loss in the bank.",
    instead:
      "Name a primary metric close to revenue, and track quality guardrails alongside it.",
  },
  {
    mistake: "Never writing down what happened",
    why: "Without an archive, teams re-test the same idea every eighteen months as staff change.",
    instead:
      "Keep a searchable record of every test including the flat ones, with the hypothesis, the result and the interval.",
  },
];

const STAT_HIGHLIGHTS = [
  { value: "412", label: "tests shipped since 2021" },
  { value: "61%", label: "reached significance at 95%" },
  { value: "3.2×", label: "median return on programme fee" },
  { value: "21", label: "median days from launch to read-out" },
];

/* ==========================================================================
 * 3. STATISTICS HELPERS
 *    Real maths, not decoration. Two-proportion z-test plus a normal CDF
 *    built on an Abramowitz & Stegun error-function approximation.
 * ========================================================================== */

/** Abramowitz & Stegun 7.1.26 approximation of the error function. */
function erf(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const t = 1 / (1 + p * ax);
  const y =
    1 -
    ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-ax * ax);
  return sign * y;
}

/** Standard normal cumulative distribution function. */
function normalCdf(z: number): number {
  return 0.5 * (1 + erf(z / Math.SQRT2));
}

/** Inverse normal CDF — Acklam's rational approximation, plenty accurate here. */
function normalQuantile(p: number): number {
  if (p <= 0) return -Infinity;
  if (p >= 1) return Infinity;

  const a = [
    -3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2,
    1.38357751867269e2, -3.066479806614716e1, 2.506628277459239,
  ];
  const b = [
    -5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2,
    6.680131188771972e1, -1.328068155288572e1,
  ];
  const c = [
    -7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838,
    -2.549732539343734, 4.374664141464968, 2.938163982698783,
  ];
  const d = [
    7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996,
    3.754408661907416,
  ];

  const pLow = 0.02425;
  const pHigh = 1 - pLow;

  if (p < pLow) {
    const q = Math.sqrt(-2 * Math.log(p));
    return (
      (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
    );
  }
  if (p > pHigh) {
    const q = Math.sqrt(-2 * Math.log(1 - p));
    return (
      -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
    );
  }
  const q = p - 0.5;
  const r = q * q;
  return (
    ((((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q) /
    (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1)
  );
}

interface SignificanceResult {
  controlRate: number;
  treatmentRate: number;
  relativeLift: number;
  absoluteLift: number;
  zScore: number;
  pValue: number;
  confidence: number;
  significant: boolean;
  ciLow: number;
  ciHigh: number;
  intervalCrossesZero: boolean;
  usable: boolean;
  warning: string | null;
}

/**
 * Two-proportion z-test, two-tailed, with a normal-approximation confidence
 * interval on the absolute difference in rates.
 */
function computeSignificance(
  cVisitors: number,
  cConversions: number,
  tVisitors: number,
  tConversions: number,
  confidenceTarget: number
): SignificanceResult {
  const blank: SignificanceResult = {
    controlRate: 0,
    treatmentRate: 0,
    relativeLift: 0,
    absoluteLift: 0,
    zScore: 0,
    pValue: 1,
    confidence: 0,
    significant: false,
    ciLow: 0,
    ciHigh: 0,
    intervalCrossesZero: true,
    usable: false,
    warning: "Enter visitors and conversions for both arms.",
  };

  if (
    !Number.isFinite(cVisitors) ||
    !Number.isFinite(tVisitors) ||
    cVisitors <= 0 ||
    tVisitors <= 0
  ) {
    return blank;
  }
  if (cConversions > cVisitors || tConversions > tVisitors) {
    return {
      ...blank,
      warning: "Conversions cannot exceed visitors in either arm.",
    };
  }

  const p1 = cConversions / cVisitors;
  const p2 = tConversions / tVisitors;
  const pooled = (cConversions + tConversions) / (cVisitors + tVisitors);
  const se = Math.sqrt(pooled * (1 - pooled) * (1 / cVisitors + 1 / tVisitors));

  if (se === 0) {
    return {
      ...blank,
      controlRate: p1,
      treatmentRate: p2,
      warning: "No conversions recorded yet, so there is nothing to compare.",
    };
  }

  const z = (p2 - p1) / se;
  const pValue = 2 * (1 - normalCdf(Math.abs(z)));
  const confidence = (1 - pValue) * 100;

  const seDiff = Math.sqrt(
    (p1 * (1 - p1)) / cVisitors + (p2 * (1 - p2)) / tVisitors
  );
  const zCrit = normalQuantile(1 - (1 - confidenceTarget / 100) / 2);
  const diff = p2 - p1;
  const ciLow = diff - zCrit * seDiff;
  const ciHigh = diff + zCrit * seDiff;

  const smallCounts =
    cConversions < 30 || tConversions < 30
      ? "Fewer than 30 conversions in an arm — the normal approximation is shaky here. Keep running."
      : null;

  return {
    controlRate: p1,
    treatmentRate: p2,
    relativeLift: p1 === 0 ? 0 : ((p2 - p1) / p1) * 100,
    absoluteLift: (p2 - p1) * 100,
    zScore: z,
    pValue,
    confidence,
    significant: confidence >= confidenceTarget,
    ciLow: ciLow * 100,
    ciHigh: ciHigh * 100,
    intervalCrossesZero: ciLow < 0 && ciHigh > 0,
    usable: true,
    warning: smallCounts,
  };
}

interface SampleSizeResult {
  perArm: number;
  total: number;
  daysNeeded: number;
  weeksNeeded: number;
  feasible: boolean;
  verdict: string;
}

/**
 * Sample size per arm for a two-proportion test, using the pooled-variance
 * formulation with continuity left off (close enough at these magnitudes).
 */
function computeSampleSize(
  baselineRatePct: number,
  mdeRelativePct: number,
  confidencePct: number,
  powerPct: number,
  dailyVisitors: number
): SampleSizeResult {
  const p1 = baselineRatePct / 100;
  const p2 = p1 * (1 + mdeRelativePct / 100);

  if (p1 <= 0 || p1 >= 1 || p2 <= 0 || p2 >= 1 || mdeRelativePct === 0) {
    return {
      perArm: 0,
      total: 0,
      daysNeeded: 0,
      weeksNeeded: 0,
      feasible: false,
      verdict: "Check the inputs — the baseline and target rates must sit between 0 and 100%.",
    };
  }

  const zAlpha = normalQuantile(1 - (1 - confidencePct / 100) / 2);
  const zBeta = normalQuantile(powerPct / 100);
  const pBar = (p1 + p2) / 2;

  const numerator =
    zAlpha * Math.sqrt(2 * pBar * (1 - pBar)) +
    zBeta * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2));
  const perArm = Math.ceil((numerator * numerator) / Math.pow(p2 - p1, 2));
  const total = perArm * 2;
  const perDay = Math.max(dailyVisitors, 1);
  const rawDays = total / perDay;
  // Always round up to whole weeks so weekday and weekend behaviour both land.
  const weeks = Math.max(1, Math.ceil(rawDays / 7));
  const days = weeks * 7;

  let verdict: string;
  let feasible = true;
  if (weeks <= 2) {
    verdict =
      "Comfortable. Two weeks is the practical floor anyway, so plan for a full two-week cycle.";
  } else if (weeks <= 6) {
    verdict = "Workable. This is the normal range for a well-scoped test.";
  } else if (weeks <= 12) {
    verdict =
      "Long. Consider testing a bolder change so the effect you are looking for is bigger.";
  } else {
    feasible = false;
    verdict =
      "Not practical. Either raise the minimum detectable effect, send more traffic to the page, or change the offer rather than the page.";
  }

  return { perArm, total, daysNeeded: days, weeksNeeded: weeks, feasible, verdict };
}

/* ==========================================================================
 * 4. SMALL UTILITIES
 * ========================================================================== */

function formatNumber(n: number, digits = 0): string {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString("en-IN", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return reduced;
}

/** Fires once when the element first enters the viewport. */
/** Fires once when the element first enters the viewport. */
function useInView<T extends HTMLElement>(
  threshold = 0.25
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, inView];
}

/* ==========================================================================
 * 5. ICONS  (inline SVG, no icon library required)
 * ========================================================================== */

type IconProps = { className?: string };

const IconCheck = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path
      d="M4 10.5l4 4 8-9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCross = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path
      d="M5 5l10 10M15 5L5 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconChevron = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path
      d="M6 8l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconFlask = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M9 3h6M10 3v6.2L4.8 18A2 2 0 006.5 21h11a2 2 0 001.7-3L14 9.2V3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7.2 15h9.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconChart = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconTarget = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
  </svg>
);

const IconShield = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M12 3l7 2.6v5.6c0 4.3-2.9 7.9-7 9.8-4.1-1.9-7-5.5-7-9.8V5.6L12 3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconClock = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7.5V12l3 1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCode = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M8.5 7L4 12l4.5 5M15.5 7L20 12l-4.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconUsers = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="9" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3.5 19.5c.6-3.2 2.9-5 5.5-5s4.9 1.8 5.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 6.2a3 3 0 010 5.6M17.5 14.9c2 .6 3.4 2.3 3.8 4.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconArrowUp = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M10 16V4M5 9l5-5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconArrowDown = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ==========================================================================
 * 6. PRESENTATIONAL PRIMITIVES
 * ========================================================================== */

function SectionHeading({
  title,
  lede,
  tone = "dark",
  align = "left",
}: {
  title: string;
  lede?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  const titleColor = tone === "dark" ? "text-white" : "text-[#0A1020]";
  const ledeColor = tone === "dark" ? "text-[#96A1B8]" : "text-[#5A6478]";
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <h2
        className={`${titleColor} text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.1] tracking-[-0.02em]`}
      >
        {title}
      </h2>
      {lede ? (
        <p className={`${ledeColor} mt-4 text-base sm:text-lg leading-relaxed`}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}

function LabTape({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-sm border border-[#2F6BFF]/35 bg-[#2F6BFF]/10 px-3 py-1.5 text-[13px] font-medium text-[#8FB4FF]">
      {children}
    </span>
  );
}

function Stat({ value, label, tone = "dark" }: { value: string; label: string; tone?: "dark" | "light" }) {
  return (
    <div>
      <div
        className={`text-4xl sm:text-5xl font-semibold tracking-[-0.03em] ${
          tone === "dark" ? "text-white" : "text-[#0A1020]"
        }`}
      >
        {value}
      </div>
      <div
        className={`mt-2 text-sm leading-snug ${
          tone === "dark" ? "text-[#8A94A8]" : "text-[#5A6478]"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

/** A horizontal comparison bar used in the metrics panel. */
function CompareBar({
  row,
  animate,
}: {
  row: MetricRow;
  animate: boolean;
}) {
  const max = Math.max(row.control, row.treatment) * 1.15;
  const cPct = clamp((row.control / max) * 100, 2, 100);
  const tPct = clamp((row.treatment / max) * 100, 2, 100);
  const delta = row.treatment - row.control;
  const better = row.higherIsBetter ? delta > 0 : delta < 0;
  const deltaPct = row.control === 0 ? 0 : (delta / row.control) * 100;

  return (
    <div className="border-b border-[#1E2739] py-5 last:border-b-0">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium text-[#D6DCE8]">{row.label}</span>
        <span
          className={`inline-flex items-center gap-1 text-sm font-semibold ${
            better ? "text-[#4FD39A]" : "text-[#E08774]"
          }`}
        >
          {deltaPct > 0 ? <IconArrowUp className="h-3.5 w-3.5" /> : <IconArrowDown className="h-3.5 w-3.5" />}
          {Math.abs(deltaPct).toFixed(1)}%
        </span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-3">
          <span className="w-16 shrink-0 text-xs text-[#7C8698]">Control</span>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#1A2333]">
            <div
              className="h-full rounded-full bg-[#C4573F] transition-[width] duration-700 ease-out"
              style={{ width: animate ? `${cPct}%` : "0%" }}
            />
          </div>
          <span className="w-20 shrink-0 text-right text-xs tabular-nums text-[#B6BFCE]">
            {row.unit === "₹" ? "₹" : ""}
            {row.control}
            {row.unit !== "₹" ? row.unit : ""}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-16 shrink-0 text-xs text-[#7C8698]">Variant</span>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#1A2333]">
            <div
              className="h-full rounded-full bg-[#2F6BFF] transition-[width] duration-700 ease-out"
              style={{ width: animate ? `${tPct}%` : "0%", transitionDelay: "120ms" }}
            />
          </div>
          <span className="w-20 shrink-0 text-right text-xs tabular-nums text-[#DCE3EF]">
            {row.unit === "₹" ? "₹" : ""}
            {row.treatment}
            {row.unit !== "₹" ? row.unit : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

/** Numeric field with a label and helper text, used by both calculators. */
function NumberField({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix,
  helper,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  helper?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#3A4356]">
        {label}
      </label>
      <div className="relative mt-1.5">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => {
            const next = parseFloat(e.target.value);
            onChange(Number.isNaN(next) ? 0 : next);
          }}
          className="w-full rounded-md border border-[#D3D0C8] bg-white px-3 py-2.5 pr-12 text-[15px] tabular-nums text-[#0A1020] outline-none transition focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/25"
        />
        {suffix ? (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#8A8578]">
            {suffix}
          </span>
        ) : null}
      </div>
      {helper ? <p className="mt-1.5 text-xs leading-relaxed text-[#7B8395]">{helper}</p> : null}
    </div>
  );
}

/* ==========================================================================
 * 7. HERO — the page's one bold moment
 *    Instead of describing A/B testing, the hero *is* an A/B test: the reader
 *    flips between the two variants of this very page and watches the numbers
 *    underneath change. That is the most characteristic thing in this subject's
 *    world, so it opens the page.
 * ========================================================================== */

function Hero() {
  const [active, setActive] = useState<VariantKey>("treatment");
  const [autoplay, setAutoplay] = useState(true);
  const reduced = useReducedMotion();
  const variant = HERO_VARIANTS[active];

  useEffect(() => {
    if (!autoplay || reduced) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev === "control" ? "treatment" : "control"));
    }, 6500);
    return () => window.clearInterval(id);
  }, [autoplay, reduced]);

  const stats = useMemo(() => {
    const c = HERO_VARIANTS.control;
    const t = HERO_VARIANTS.treatment;
    return computeSignificance(c.visitors, c.conversions, t.visitors, t.conversions, 95);
  }, []);

  const rate = (variant.conversions / variant.visitors) * 100;

  const pick = (key: VariantKey) => {
    setAutoplay(false);
    setActive(key);
  };

  return (
    <section className="relative overflow-hidden bg-[#0A1020]">
      {/* Grid field — a plotting-paper reference, not decoration for its own sake */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(47,107,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(47,107,255,0.10) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-16">
          {/* ---- Left: the argument ---- */}
          <div>
            <LabTape>
              <IconFlask className="h-4 w-4" />
              Landing page experimentation by HYI.AI
            </LabTape>

            <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.032em] text-white sm:text-5xl lg:text-[3.6rem]">
              Stop guessing which version of your page works.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#A3AEC4]">
              We run controlled experiments on your landing pages — one hypothesis
              at a time, sized properly, read honestly. The panel beside this text
              is a live example. Flip it and watch what a single change does to
              the numbers underneath.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#scope-a-test"
                className="inline-flex items-center justify-center rounded-md bg-[#2F6BFF] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#1E58E6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1020]"
              >
                Scope my first test
              </a>
              <a
                href="#significance-calculator"
                className="inline-flex items-center justify-center rounded-md border border-[#2A3550] px-6 py-3.5 text-[15px] font-semibold text-[#D6DCE8] transition hover:border-[#41507A] hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1020]"
              >
                Check my own numbers first
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {STAT_HIGHLIGHTS.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl font-semibold tracking-[-0.03em] text-white">
                    {s.value}
                  </dt>
                  <dd className="mt-1.5 text-[13px] leading-snug text-[#7C8698]">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ---- Right: the live specimen ---- */}
          <div className="lg:sticky lg:top-8">
            <div className="rounded-xl border border-[#1F2A40] bg-[#111A2C] shadow-[0_24px_70px_-30px_rgba(0,0,0,0.9)]">
              {/* Switcher */}
              <div className="flex items-center gap-1 border-b border-[#1F2A40] p-2">
                {(["control", "treatment"] as VariantKey[]).map((key) => {
                  const isActive = active === key;
                  const accent = key === "control" ? "#C4573F" : "#2F6BFF";
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => pick(key)}
                      aria-pressed={isActive}
                      className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF] ${
                        isActive
                          ? "text-white"
                          : "text-[#7C8698] hover:text-[#B6BFCE]"
                      }`}
                      style={isActive ? { backgroundColor: `${accent}26` } : undefined}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: isActive ? accent : "#3A4356" }}
                        />
                        {HERO_VARIANTS[key].badge}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Mock page */}
              <div className="p-6 sm:p-8">
                <div
                  key={active}
                  className="rounded-lg bg-[#F3F1EC] p-6 sm:p-7"
                  style={{
                    animation: reduced ? undefined : "hyiFade 380ms ease-out",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D9534F]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E0A33E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#4FA96B]" />
                    <span className="ml-3 truncate rounded bg-white px-2.5 py-1 text-[11px] text-[#8A8578]">
                      yourcompany.com/offer
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#0A1020]">
                    {variant.headline}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#5A6478]">
                    {variant.subline}
                  </p>

                  <div className="mt-6">
                    <span className="text-xs text-[#8A8578]">{variant.formLabel}</span>
                    <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                      <div className="flex-1 rounded-md border border-[#D3D0C8] bg-white px-3 py-2.5 text-sm text-[#B6B2A8]">
                        you@company.com
                      </div>
                      <button
                        type="button"
                        className="rounded-md px-5 py-2.5 text-sm font-semibold text-white transition"
                        style={{
                          backgroundColor:
                            active === "control" ? "#5A6478" : "#2F6BFF",
                        }}
                      >
                        {variant.cta}
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#E2DFD7] pt-4">
                    <span className="text-xs text-[#8A8578]">{variant.trustLine}</span>
                    <span className="text-xs font-medium text-[#5A6478]">
                      {variant.secondaryCta}
                    </span>
                  </div>
                </div>

                {/* Readout */}
                <div className="mt-6 grid grid-cols-3 gap-4 rounded-lg border border-[#1F2A40] bg-[#0D1626] p-4">
                  <div>
                    <div className="text-[11px] text-[#6C7688]">Visitors</div>
                    <div className="mt-1 text-lg font-semibold tabular-nums text-white">
                      {formatNumber(variant.visitors)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#6C7688]">Conversions</div>
                    <div className="mt-1 text-lg font-semibold tabular-nums text-white">
                      {formatNumber(variant.conversions)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-[#6C7688]">Rate</div>
                    <div
                      className="mt-1 text-lg font-semibold tabular-nums"
                      style={{ color: active === "control" ? "#E08774" : "#6E9BFF" }}
                    >
                      {rate.toFixed(2)}%
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-[13px] leading-relaxed text-[#7C8698]">
                  Across {formatNumber(HERO_VARIANTS.control.visitors + HERO_VARIANTS.treatment.visitors)}{" "}
                  visitors, variant B converted{" "}
                  <span className="font-semibold text-[#8FB4FF]">
                    {stats.relativeLift.toFixed(1)}% better
                  </span>{" "}
                  than the control, with the true difference sitting somewhere
                  between {stats.ciLow.toFixed(2)} and {stats.ciHigh.toFixed(2)}{" "}
                  percentage points. Confidence: {stats.confidence.toFixed(1)}%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes hyiFade {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

/* ==========================================================================
 * 8. TRUST BAR
 * ========================================================================== */

function TrustBar() {
  const names = [
    "Northwind Lending",
    "Kestrel Analytics",
    "Saanjh Skincare",
    "Meridian Certify",
    "Halcyon Hotels",
    "Aster Telehealth",
  ];

  return (
    <section className="border-y border-[#1A2333] bg-[#0C1322]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-xs text-sm leading-relaxed text-[#7C8698]">
            Programmes currently running across lending, SaaS, commerce,
            education, hospitality and healthcare.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
            {names.map((n) => (
              <span
                key={n}
                className="text-[15px] font-medium tracking-[-0.01em] text-[#4E5A72]"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 9. WHAT IT IS — plain explanation for someone new to the idea
 * ========================================================================== */

function WhatItIs() {
  const points = [
    {
      icon: <IconTarget className="h-5 w-5" />,
      title: "One change, two audiences, same moment",
      body: "Visitors are split at random between the page you have and the page you are proposing. Because the split is random and simultaneous, seasonality, campaign changes and day-of-week effects hit both arms equally. Whatever difference remains is caused by the change itself.",
    },
    {
      icon: <IconChart className="h-5 w-5" />,
      title: "A result is a range, not a single number",
      body: "A test never hands you the truth; it hands you an estimate with uncertainty attached. 'Plus 14%, somewhere between 3% and 26%' is an honest sentence. 'Plus 14%' on its own is a headline, and headlines are how teams end up shipping noise.",
    },
    {
      icon: <IconClock className="h-5 w-5" />,
      title: "Runtime is decided by arithmetic, not patience",
      body: "Before launch we calculate how many visitors each arm needs to detect the smallest lift worth shipping. That number, divided by your daily traffic, is the runtime. If the answer is seven months, we redesign the test rather than pretend.",
    },
    {
      icon: <IconShield className="h-5 w-5" />,
      title: "Guardrails matter more than the headline metric",
      body: "A variant that lifts form submissions by 30% while halving lead quality has cost you money. Every test carries guardrails — revenue per session, refund rate, page speed, support load — and a breach stops the test regardless of how good the primary metric looks.",
    },
  ];

  return (
    <section className="bg-[#F3F1EC]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          tone="light"
          title="What an A/B test actually is, without the jargon"
          lede="If you have never run one, this section is the whole idea in four paragraphs. Nothing further down the page assumes you read it twice."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-[#DDD9D0] sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="bg-[#F9F8F5] p-8 lg:p-10">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A1020] text-[#8FB4FF]">
                {p.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em] text-[#0A1020]">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5A6478]">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border-l-4 border-[#C4573F] bg-white p-8 lg:p-10">
          <h3 className="text-lg font-semibold text-[#0A1020]">
            The uncomfortable part
          </h3>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#5A6478]">
            Most tests do not produce a winner. Across our own archive, 61% of
            tests reached statistical significance and of those, a meaningful
            share went the wrong way — the new idea lost. That is not a failure
            of the method, it is the method working. The value of a testing
            programme is not a stream of wins; it is that you stop shipping
            expensive changes on the strength of whoever argued loudest in the
            meeting.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 10. HOW HYI WORKS — the six-step cycle, expandable
 * ========================================================================== */

function HowHyiWorks() {
  const [open, setOpen] = useState<number>(1);

  return (
    <section id="how-it-works" className="bg-[#0A1020]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          title="How a HYI test cycle runs"
          lede="Forty days from first look to shipped decision. Each step has a named owner and a deliverable you can hold, so at no point are you waiting on a black box."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          {/* Step list */}
          <ol className="space-y-2">
            {PROCESS_STEPS.map((step) => {
              const isOpen = open === step.index;
              return (
                <li key={step.index}>
                  <button
                    type="button"
                    onClick={() => setOpen(step.index)}
                    aria-expanded={isOpen}
                    className={`w-full rounded-lg border px-5 py-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF] ${
                      isOpen
                        ? "border-[#2F6BFF]/50 bg-[#141C2F]"
                        : "border-[#1C2538] bg-transparent hover:border-[#28344E]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold ${
                          isOpen
                            ? "bg-[#2F6BFF] text-white"
                            : "bg-[#1C2538] text-[#7C8698]"
                        }`}
                      >
                        {step.index}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-baseline gap-x-3">
                          <span
                            className={`text-[15px] font-semibold ${
                              isOpen ? "text-white" : "text-[#C3CBD9]"
                            }`}
                          >
                            {step.title}
                          </span>
                          <span className="text-xs text-[#6C7688]">
                            {step.duration}
                          </span>
                        </span>
                        <span className="mt-1.5 block text-sm leading-relaxed text-[#8A94A8]">
                          {step.summary}
                        </span>
                      </span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Detail pane */}
          <div className="rounded-xl border border-[#1F2A40] bg-[#111A2C] p-7 lg:sticky lg:top-8 lg:self-start lg:p-9">
            {PROCESS_STEPS.filter((s) => s.index === open).map((step) => (
              <div key={step.index}>
                <div className="flex flex-wrap items-center gap-3">
                  <LabTape>Step {step.index} of 6</LabTape>
                  <span className="text-xs text-[#6C7688]">
                    Owned by {step.ownedBy}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#A3AEC4]">
                  {step.detail}
                </p>

                <h4 className="mt-7 text-sm font-semibold text-[#D6DCE8]">
                  What you receive
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {step.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-[#9AA5BA]">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#4FD39A]" />
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 11. SIGNIFICANCE CALCULATOR
 * ========================================================================== */

function SignificanceCalculator() {
  const [cVisitors, setCVisitors] = useState(12_400);
  const [cConversions, setCConversions] = useState(387);
  const [tVisitors, setTVisitors] = useState(12_310);
  const [tConversions, setTConversions] = useState(462);
  const [target, setTarget] = useState(95);

  const result = useMemo(
    () => computeSignificance(cVisitors, cConversions, tVisitors, tConversions, target),
    [cVisitors, cConversions, tVisitors, tConversions, target]
  );

  const verdictColor = result.significant ? "#2E7D5B" : "#8A6A2F";
  const gaugePct = clamp(result.confidence, 0, 100);

  return (
    <section id="significance-calculator" className="bg-[#F3F1EC]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          tone="light"
          title="Already running a test? Read it properly here."
          lede="Paste in the numbers from your own experiment. This runs a two-tailed test on the difference between two proportions and reports the interval alongside the verdict."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* Inputs */}
          <div className="rounded-xl border border-[#DDD9D0] bg-white p-7 lg:p-9">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#C4573F]" />
                  <h3 className="text-sm font-semibold text-[#0A1020]">
                    Control — the page you have now
                  </h3>
                </div>
              </div>
              <NumberField
                id="c-visitors"
                label="Visitors"
                value={cVisitors}
                onChange={setCVisitors}
                min={0}
                max={100_000_000}
              />
              <NumberField
                id="c-conversions"
                label="Conversions"
                value={cConversions}
                onChange={setCConversions}
                min={0}
                max={100_000_000}
              />

              <div className="sm:col-span-2 mt-2">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2F6BFF]" />
                  <h3 className="text-sm font-semibold text-[#0A1020]">
                    Variant — the page you are proposing
                  </h3>
                </div>
              </div>
              <NumberField
                id="t-visitors"
                label="Visitors"
                value={tVisitors}
                onChange={setTVisitors}
                min={0}
                max={100_000_000}
              />
              <NumberField
                id="t-conversions"
                label="Conversions"
                value={tConversions}
                onChange={setTConversions}
                min={0}
                max={100_000_000}
              />

              <div className="sm:col-span-2 mt-2">
                <label className="block text-sm font-medium text-[#3A4356]">
                  Confidence threshold
                </label>
                <div className="mt-2 flex gap-2">
                  {[90, 95, 99].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTarget(t)}
                      aria-pressed={target === t}
                      className={`flex-1 rounded-md border px-4 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] ${
                        target === t
                          ? "border-[#2F6BFF] bg-[#2F6BFF]/10 text-[#1E58E6]"
                          : "border-[#D3D0C8] text-[#5A6478] hover:border-[#B9B4A9]"
                      }`}
                    >
                      {t}%
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#7B8395]">
                  95% is the usual choice. Raising it to 99% makes false alarms
                  rarer and the required sample larger.
                </p>
              </div>
            </div>
          </div>

          {/* Output */}
          <div
            className="rounded-xl border border-[#1F2A40] bg-[#0A1020] p-7 lg:p-9"
            aria-live="polite"
          >
            {!result.usable ? (
              <p className="text-[15px] text-[#A3AEC4]">{result.warning}</p>
            ) : (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[13px] text-[#6C7688]">
                      Observed relative lift
                    </div>
                    <div
                      className="mt-1 text-5xl font-semibold tracking-[-0.03em] tabular-nums"
                      style={{ color: result.relativeLift >= 0 ? "#6E9BFF" : "#E08774" }}
                    >
                      {result.relativeLift >= 0 ? "+" : ""}
                      {result.relativeLift.toFixed(2)}%
                    </div>
                  </div>
                  <span
                    className="rounded-md px-3 py-1.5 text-[13px] font-semibold text-white"
                    style={{ backgroundColor: verdictColor }}
                  >
                    {result.significant ? "Significant" : "Not yet significant"}
                  </span>
                </div>

                {/* Confidence gauge */}
                <div className="mt-8">
                  <div className="flex items-baseline justify-between text-[13px]">
                    <span className="text-[#8A94A8]">Confidence</span>
                    <span className="font-semibold tabular-nums text-white">
                      {result.confidence.toFixed(2)}%
                    </span>
                  </div>
                  <div className="relative mt-2 h-3 overflow-hidden rounded-full bg-[#1A2333]">
                    <div
                      className="h-full rounded-full transition-[width] duration-500 ease-out"
                      style={{
                        width: `${gaugePct}%`,
                        backgroundColor: result.significant ? "#2E7D5B" : "#8A6A2F",
                      }}
                    />
                    <div
                      className="absolute top-0 h-full w-px bg-white/60"
                      style={{ left: `${target}%` }}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2 text-xs text-[#6C7688]">
                    The white line marks your {target}% threshold.
                  </p>
                </div>

                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#1F2A40] pt-7">
                  <div>
                    <dt className="text-[13px] text-[#6C7688]">Control rate</dt>
                    <dd className="mt-1 text-xl font-semibold tabular-nums text-[#E08774]">
                      {(result.controlRate * 100).toFixed(2)}%
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] text-[#6C7688]">Variant rate</dt>
                    <dd className="mt-1 text-xl font-semibold tabular-nums text-[#6E9BFF]">
                      {(result.treatmentRate * 100).toFixed(2)}%
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] text-[#6C7688]">Absolute difference</dt>
                    <dd className="mt-1 text-xl font-semibold tabular-nums text-white">
                      {result.absoluteLift >= 0 ? "+" : ""}
                      {result.absoluteLift.toFixed(2)} pp
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] text-[#6C7688]">p-value</dt>
                    <dd className="mt-1 text-xl font-semibold tabular-nums text-white">
                      {result.pValue < 0.0001 ? "< 0.0001" : result.pValue.toFixed(4)}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-[13px] text-[#6C7688]">
                      {target}% interval on the absolute difference
                    </dt>
                    <dd className="mt-1 text-xl font-semibold tabular-nums text-white">
                      {result.ciLow.toFixed(2)} pp to {result.ciHigh.toFixed(2)} pp
                    </dd>
                  </div>
                </dl>

                <div className="mt-7 rounded-lg border border-[#1F2A40] bg-[#111A2C] p-5">
                  <h4 className="text-sm font-semibold text-white">
                    What this means in plain English
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#9AA5BA]">
                    {result.significant
                      ? `If the two pages were truly identical, you would see a gap this large about ${(result.pValue * 100).toFixed(2)}% of the time. That is below your threshold, so the difference is unlikely to be luck. The honest range for the real effect is ${result.ciLow.toFixed(2)} to ${result.ciHigh.toFixed(2)} percentage points — plan around the low end, not the headline.`
                      : `A gap this large would appear by chance about ${(result.pValue * 100).toFixed(1)}% of the time even if both pages performed identically. That is above your threshold, so this is not yet a result. Keep running to the planned sample size rather than stopping here.`}
                  </p>
                  {result.intervalCrossesZero ? (
                    <p className="mt-3 text-sm leading-relaxed text-[#D9A441]">
                      The interval crosses zero, which means the data are still
                      consistent with the variant being worse. Do not ship on this.
                    </p>
                  ) : null}
                  {result.warning ? (
                    <p className="mt-3 text-sm leading-relaxed text-[#D9A441]">
                      {result.warning}
                    </p>
                  ) : null}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 12. SAMPLE SIZE CALCULATOR
 * ========================================================================== */

function SampleSizeCalculator() {
  const [baseline, setBaseline] = useState(3.0);
  const [mde, setMde] = useState(15);
  const [confidence, setConfidence] = useState(95);
  const [power, setPower] = useState(80);
  const [daily, setDaily] = useState(1_200);

  const result = useMemo(
    () => computeSampleSize(baseline, mde, confidence, power, daily),
    [baseline, mde, confidence, power, daily]
  );

  const targetRate = baseline * (1 + mde / 100);

  return (
    <section id="sample-size" className="bg-[#0A1020]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          title="Before you launch: can your traffic even answer the question?"
          lede="This is the calculation most teams skip, and it is the reason most tests end inconclusive. Put your real numbers in and find out how long a test would need to run."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-xl border border-[#1F2A40] bg-[#111A2C] p-7 lg:p-9">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="baseline"
                  className="flex items-baseline justify-between text-sm font-medium text-[#D6DCE8]"
                >
                  <span>Current conversion rate</span>
                  <span className="tabular-nums text-[#8FB4FF]">
                    {baseline.toFixed(2)}%
                  </span>
                </label>
                <input
                  id="baseline"
                  type="range"
                  min={0.1}
                  max={30}
                  step={0.1}
                  value={baseline}
                  onChange={(e) => setBaseline(parseFloat(e.target.value))}
                  className="mt-3 w-full accent-[#2F6BFF]"
                />
                <p className="mt-1.5 text-xs text-[#6C7688]">
                  Conversions divided by visitors on the page you want to test.
                </p>
              </div>

              <div>
                <label
                  htmlFor="mde"
                  className="flex items-baseline justify-between text-sm font-medium text-[#D6DCE8]"
                >
                  <span>Smallest lift worth shipping</span>
                  <span className="tabular-nums text-[#8FB4FF]">{mde}%</span>
                </label>
                <input
                  id="mde"
                  type="range"
                  min={1}
                  max={60}
                  step={1}
                  value={mde}
                  onChange={(e) => setMde(parseFloat(e.target.value))}
                  className="mt-3 w-full accent-[#2F6BFF]"
                />
                <p className="mt-1.5 text-xs text-[#6C7688]">
                  Relative, not absolute. A {mde}% lift on {baseline.toFixed(2)}%
                  means reaching {targetRate.toFixed(2)}%.
                </p>
              </div>

              <div>
                <label
                  htmlFor="daily"
                  className="flex items-baseline justify-between text-sm font-medium text-[#D6DCE8]"
                >
                  <span>Daily visitors to this page</span>
                  <span className="tabular-nums text-[#8FB4FF]">
                    {formatNumber(daily)}
                  </span>
                </label>
                <input
                  id="daily"
                  type="range"
                  min={50}
                  max={50_000}
                  step={50}
                  value={daily}
                  onChange={(e) => setDaily(parseFloat(e.target.value))}
                  className="mt-3 w-full accent-[#2F6BFF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-[#1F2A40] pt-6">
                <div>
                  <span className="block text-sm font-medium text-[#D6DCE8]">
                    Confidence
                  </span>
                  <div className="mt-2 flex gap-2">
                    {[90, 95, 99].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setConfidence(c)}
                        aria-pressed={confidence === c}
                        className={`flex-1 rounded-md border px-2 py-2 text-[13px] font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF] ${
                          confidence === c
                            ? "border-[#2F6BFF] bg-[#2F6BFF]/15 text-white"
                            : "border-[#28344E] text-[#8A94A8] hover:border-[#3A4A6E]"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="block text-sm font-medium text-[#D6DCE8]">
                    Power
                  </span>
                  <div className="mt-2 flex gap-2">
                    {[80, 90].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPower(p)}
                        aria-pressed={power === p}
                        className={`flex-1 rounded-md border px-2 py-2 text-[13px] font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF] ${
                          power === p
                            ? "border-[#2F6BFF] bg-[#2F6BFF]/15 text-white"
                            : "border-[#28344E] text-[#8A94A8] hover:border-[#3A4A6E]"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#F3F1EC] p-7 lg:p-9" aria-live="polite">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <div className="text-[13px] text-[#8A8578]">Visitors per arm</div>
                <div className="mt-1 text-3xl font-semibold tabular-nums tracking-[-0.02em] text-[#0A1020]">
                  {formatNumber(result.perArm)}
                </div>
              </div>
              <div>
                <div className="text-[13px] text-[#8A8578]">Total visitors</div>
                <div className="mt-1 text-3xl font-semibold tabular-nums tracking-[-0.02em] text-[#0A1020]">
                  {formatNumber(result.total)}
                </div>
              </div>
              <div>
                <div className="text-[13px] text-[#8A8578]">Runtime</div>
                <div
                  className="mt-1 text-3xl font-semibold tabular-nums tracking-[-0.02em]"
                  style={{ color: result.feasible ? "#2E7D5B" : "#C4573F" }}
                >
                  {result.weeksNeeded}w
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-lg border border-[#DDD9D0] bg-white p-5">
              <h4 className="text-sm font-semibold text-[#0A1020]">Verdict</h4>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5A6478]">
                {result.verdict}
              </p>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#5A6478]">
              <p>
                At {baseline.toFixed(2)}% converting today, detecting a {mde}%
                relative improvement means telling {baseline.toFixed(2)}% apart
                from {targetRate.toFixed(2)}% — a gap of{" "}
                {(targetRate - baseline).toFixed(2)} percentage points. Small
                gaps need large samples, and the relationship is not linear:
                halving the lift you want to detect roughly quadruples the
                traffic required.
              </p>
              <p>
                The runtime above is rounded up to whole weeks on purpose. A test
                that runs Tuesday to Tuesday captures every weekday and both
                weekend days once, so a Saturday traffic mix cannot skew one arm
                more than the other.
              </p>
            </div>

            {/* Sensitivity strip */}
            <div className="mt-7 border-t border-[#DDD9D0] pt-6">
              <h4 className="text-sm font-semibold text-[#0A1020]">
                What if you accepted a different lift?
              </h4>
              <div className="mt-4 space-y-2.5">
                {[5, 10, 15, 25, 40].map((alt) => {
                  const r = computeSampleSize(baseline, alt, confidence, power, daily);
                  const width = clamp((r.weeksNeeded / 40) * 100, 3, 100);
                  return (
                    <div key={alt} className="flex items-center gap-3">
                      <span className="w-12 shrink-0 text-xs tabular-nums text-[#8A8578]">
                        {alt}%
                      </span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#E2DFD7]">
                        <div
                          className="h-full rounded-full transition-[width] duration-500"
                          style={{
                            width: `${width}%`,
                            backgroundColor: r.feasible ? "#2F6BFF" : "#C4573F",
                          }}
                        />
                      </div>
                      <span className="w-20 shrink-0 text-right text-xs tabular-nums text-[#5A6478]">
                        {r.weeksNeeded > 52 ? "52w+" : `${r.weeksNeeded} weeks`}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#7B8395]">
                This is the argument for testing bold changes. A timid tweak is
                not cheaper — it is more expensive, because it costs months of
                traffic to resolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 13. WHAT WE TEST — grouped catalogue with a filter
 * ========================================================================== */

function WhatWeTest() {
  const [activeGroup, setActiveGroup] = useState<string>(TESTABLE_ELEMENTS[0].group);
  const group = TESTABLE_ELEMENTS.find((g) => g.group === activeGroup)!;

  const effortColor: Record<string, string> = {
    Low: "#2E7D5B",
    Medium: "#8A6A2F",
    High: "#C4573F",
  };

  return (
    <section className="bg-[#F3F1EC]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          tone="light"
          title="What is actually worth testing on a landing page"
          lede="Ranked by our own archive of shipped tests. The lift ranges are the middle 80% of results we have observed, not best cases, and they will differ on your traffic."
        />

        <div className="mt-12 flex flex-wrap gap-2">
          {TESTABLE_ELEMENTS.map((g) => (
            <button
              key={g.group}
              type="button"
              onClick={() => setActiveGroup(g.group)}
              aria-pressed={activeGroup === g.group}
              className={`rounded-md border px-4 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] ${
                activeGroup === g.group
                  ? "border-[#0A1020] bg-[#0A1020] text-white"
                  : "border-[#D3D0C8] bg-white text-[#5A6478] hover:border-[#B9B4A9]"
              }`}
            >
              {g.group}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-[#DDD9D0] bg-white">
          <div className="border-b border-[#EAE7E0] px-6 py-5 sm:px-8">
            <p className="max-w-2xl text-[15px] leading-relaxed text-[#5A6478]">
              {group.blurb}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-[#EAE7E0] text-[13px] text-[#8A8578]">
                  <th scope="col" className="px-6 py-3 font-medium sm:px-8">
                    Element
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Typical lift range
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium sm:px-8">
                    Build effort
                  </th>
                </tr>
              </thead>
              <tbody>
                {group.items.map((item) => (
                  <tr
                    key={item.name}
                    className="border-b border-[#F0EEE9] last:border-b-0"
                  >
                    <td className="px-6 py-4 text-[15px] text-[#0A1020] sm:px-8">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-[15px] tabular-nums text-[#2F6BFF]">
                      {item.typicalLift}
                    </td>
                    <td className="px-6 py-4 sm:px-8">
                      <span
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium"
                        style={{ color: effortColor[item.effort] }}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: effortColor[item.effort] }}
                        />
                        {item.effort}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#7B8395]">
          Notice what is missing from this list: button colours, corner radii,
          shadow depth. We have tested those. They produce effects too small for
          almost any real traffic volume to resolve, which is why a test of them
          nearly always comes back flat and teaches you nothing.
        </p>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 14. METRICS PANEL — what a read-out looks like
 * ========================================================================== */

function MetricsPanel() {
  const [ref, inView] = useInView<HTMLDivElement>(0.2);

  return (
    <section className="bg-[#0A1020]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-8">
            <SectionHeading
              title="A read-out shows every metric, not the flattering one"
              lede="This is an anonymised panel from a real cycle. Notice that support tickets and time to first interaction are in here beside conversion rate — a variant that wins by breaking something else has not won."
            />

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C4573F]" />
                <div>
                  <div className="text-sm font-semibold text-white">Control</div>
                  <p className="mt-1 text-sm leading-relaxed text-[#8A94A8]">
                    The existing page, unchanged for the whole test window.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2F6BFF]" />
                <div>
                  <div className="text-sm font-semibold text-white">Variant</div>
                  <p className="mt-1 text-sm leading-relaxed text-[#8A94A8]">
                    A two-step form, a rewritten promise and pricing moved above
                    the proof block.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-[#1F2A40] bg-[#111A2C] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#4FD39A]">
                <IconShield className="h-4 w-4" />
                All guardrails held
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#8A94A8]">
                Revenue per session up, support load slightly down, first
                interaction faster. This one shipped.
              </p>
            </div>
          </div>

          <div
            ref={ref}
            className="rounded-xl border border-[#1F2A40] bg-[#111A2C] px-6 py-2 sm:px-8"
          >
            {METRIC_ROWS.map((row) => (
              <CompareBar key={row.label} row={row} animate={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 15. CASE STUDIES
 * ========================================================================== */

function CaseStudies() {
  const [activeId, setActiveId] = useState(CASE_STUDIES[0].id);
  const study = CASE_STUDIES.find((c) => c.id === activeId)!;
  const lift = ((study.treatment - study.control) / study.control) * 100;
  const won = study.confidence >= 95 && lift > 0;
  const flat = study.confidence < 95;

  return (
    <section id="case-studies" className="bg-[#F3F1EC]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          tone="light"
          title="Six tests, written up the way we write them for clients"
          lede="Two of these did not produce a winner. They are here because a testing partner who only shows you wins is showing you a selection, not a record."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          {/* Selector */}
          <div className="space-y-2">
            {CASE_STUDIES.map((c) => {
              const isActive = c.id === activeId;
              const cLift = ((c.treatment - c.control) / c.control) * 100;
              const cFlat = c.confidence < 95;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveId(c.id)}
                  aria-pressed={isActive}
                  className={`w-full rounded-lg border px-5 py-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF] ${
                    isActive
                      ? "border-[#0A1020] bg-white"
                      : "border-[#DDD9D0] bg-transparent hover:border-[#B9B4A9] hover:bg-white/60"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[15px] font-semibold text-[#0A1020]">
                      {c.client}
                    </span>
                    <span
                      className="shrink-0 text-sm font-semibold tabular-nums"
                      style={{
                        color: cFlat ? "#8A8578" : cLift > 0 ? "#2E7D5B" : "#C4573F",
                      }}
                    >
                      {cFlat ? "flat" : `${cLift > 0 ? "+" : ""}${cLift.toFixed(1)}%`}
                    </span>
                  </div>
                  <span className="mt-1 block text-[13px] text-[#8A8578]">
                    {c.sector}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail */}
          <article className="overflow-hidden rounded-xl border border-[#DDD9D0] bg-white">
            <img
              src={study.image}
              alt=""
              loading="lazy"
              className="h-48 w-full object-cover sm:h-60"
            />

            <div className="p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="rounded-md px-3 py-1.5 text-[13px] font-semibold text-white"
                  style={{
                    backgroundColor: flat ? "#8A8578" : won ? "#2E7D5B" : "#C4573F",
                  }}
                >
                  {flat ? "No detectable difference" : won ? "Variant won" : "Control won"}
                </span>
                <span className="text-[13px] text-[#8A8578]">
                  {study.sector} · {formatNumber(study.visitors)} visitors ·{" "}
                  {study.runtimeDays} days
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-[#0A1020]">
                {study.client}
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <h4 className="text-sm font-semibold text-[#0A1020]">Hypothesis</h4>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[#5A6478]">
                    {study.hypothesis}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0A1020]">
                    What actually changed
                  </h4>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[#5A6478]">
                    {study.change}
                  </p>
                </div>
              </div>

              <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#EAE7E0] pt-7 sm:grid-cols-4">
                <div>
                  <dt className="text-[13px] text-[#8A8578]">Control</dt>
                  <dd className="mt-1 text-xl font-semibold tabular-nums text-[#C4573F]">
                    {study.control}%
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] text-[#8A8578]">Variant</dt>
                  <dd className="mt-1 text-xl font-semibold tabular-nums text-[#2F6BFF]">
                    {study.treatment}%
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] text-[#8A8578]">Relative change</dt>
                  <dd className="mt-1 text-xl font-semibold tabular-nums text-[#0A1020]">
                    {lift > 0 ? "+" : ""}
                    {lift.toFixed(1)}%
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] text-[#8A8578]">Confidence</dt>
                  <dd
                    className="mt-1 text-xl font-semibold tabular-nums"
                    style={{ color: flat ? "#8A8578" : "#2E7D5B" }}
                  >
                    {study.confidence}%
                  </dd>
                </div>
              </dl>

              <div className="mt-6 rounded-lg bg-[#F3F1EC] p-5">
                <div className="text-[13px] text-[#8A8578]">Outcome</div>
                <div className="mt-1 text-[15px] font-medium text-[#0A1020]">
                  {study.revenueImpact}
                </div>
              </div>

              <blockquote className="mt-7 border-l-2 border-[#2F6BFF] pl-5">
                <p className="text-[17px] leading-relaxed text-[#2A3242]">
                  {study.quote}
                </p>
                <footer className="mt-3 text-[13px] text-[#8A8578]">
                  {study.quotePerson}, {study.quoteRole}
                </footer>
              </blockquote>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 16. TIMELINE
 * ========================================================================== */

function Timeline() {
  return (
    <section className="bg-[#0A1020]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          title="Your first seven weeks with us"
          lede="This is a real sequence, so it earns its numbering. Weeks four to six overlap: while test one is running untouched, test two is already being built."
        />

        <ol className="mt-14 space-y-px overflow-hidden rounded-xl bg-[#1A2333]">
          {TIMELINE.map((w) => (
            <li key={w.week} className="bg-[#111A2C] p-7 sm:p-9">
              <div className="grid gap-6 lg:grid-cols-[180px_1fr_240px] lg:gap-10">
                <div>
                  <div className="text-sm font-semibold text-[#8FB4FF]">{w.week}</div>
                  <div className="mt-1.5 text-lg font-semibold leading-snug tracking-[-0.01em] text-white">
                    {w.focus}
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {w.activities.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm text-[#9AA5BA]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#3A4A6E]" />
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-lg border border-[#1F2A40] bg-[#0D1626] p-4">
                  <div className="text-[13px] text-[#6C7688]">Output</div>
                  <div className="mt-1 text-sm font-medium leading-snug text-[#D6DCE8]">
                    {w.output}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 17. COMMON MISTAKES
 * ========================================================================== */

function CommonMistakes() {
  return (
    <section className="bg-[#F3F1EC]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          tone="light"
          title="Six ways teams talk themselves into false results"
          lede="Every one of these has happened on a programme we inherited. None of them require bad intentions — they are what happens when a test is run by people who want a particular answer."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-[#DDD9D0] md:grid-cols-2 xl:grid-cols-3">
          {COMMON_MISTAKES.map((m) => (
            <div key={m.mistake} className="bg-[#F9F8F5] p-7 lg:p-8">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C4573F]/12 text-[#C4573F]">
                  <IconCross className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-[15px] font-semibold leading-snug text-[#0A1020]">
                  {m.mistake}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#5A6478]">{m.why}</p>

              <div className="mt-5 flex items-start gap-3 border-t border-[#E6E2DA] pt-5">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2E7D5B]/12 text-[#2E7D5B]">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-relaxed text-[#3A4356]">{m.instead}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 18. INTEGRATIONS
 * ========================================================================== */

function Integrations() {
  const categories = useMemo(
    () => Array.from(new Set(INTEGRATIONS.map((i) => i.category))),
    []
  );
  const [filter, setFilter] = useState<string>("All");
  const shown =
    filter === "All"
      ? INTEGRATIONS
      : INTEGRATIONS.filter((i) => i.category === filter);

  return (
    <section className="bg-[#0A1020]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          title="We work inside the stack you already pay for"
          lede="No proprietary platform, no lock-in, no extra monthly licence from us. If your tooling is missing something a test needs, we will tell you which single gap is worth filling."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-md border px-3.5 py-2 text-[13px] font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF] ${
                filter === c
                  ? "border-[#2F6BFF] bg-[#2F6BFF]/15 text-white"
                  : "border-[#1F2A40] text-[#7C8698] hover:border-[#2E3B58] hover:text-[#B6BFCE]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((i) => (
            <div
              key={i.name}
              className="rounded-lg border border-[#1F2A40] bg-[#111A2C] p-5"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-md text-[13px] font-semibold text-white"
                  style={{ backgroundColor: i.tint }}
                >
                  {i.logoText}
                </span>
                <div className="min-w-0">
                  <div className="truncate text-[15px] font-semibold text-white">
                    {i.name}
                  </div>
                  <div className="text-xs text-[#6C7688]">{i.category}</div>
                </div>
              </div>
              <p className="mt-3.5 text-sm leading-relaxed text-[#8A94A8]">{i.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-[#1F2A40] bg-[#111A2C] p-7 lg:p-9">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0D1626] text-[#8FB4FF]">
                <IconCode className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[15px] font-semibold text-white">
                Server-side by default
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8A94A8]">
                Variant assignment happens before the HTML is sent, so there is
                no flash of the original content and ad blockers cannot break the
                test.
              </p>
            </div>
            <div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0D1626] text-[#8FB4FF]">
                <IconShield className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[15px] font-semibold text-white">
                Privacy handled properly
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8A94A8]">
                Assignment identifiers are pseudonymous, consent state is
                respected, and we can run the whole programme without any
                third-party cookies.
              </p>
            </div>
            <div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0D1626] text-[#8FB4FF]">
                <IconUsers className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[15px] font-semibold text-white">
                Your repository, your code
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8A94A8]">
                Every variant arrives as a reviewable pull request against your
                own codebase. Nothing lives on a HYI server that you cannot take
                with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 19. TEAM
 * ========================================================================== */

function Team() {
  return (
    <section className="bg-[#F3F1EC]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          tone="light"
          title="The people who will be on your programme"
          lede="A HYI pod is five to six specialists, not one generalist stretched across your account. You meet all of them in week one and they stay with you."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="overflow-hidden rounded-xl border border-[#DDD9D0] bg-white"
            >
              <img
                src={m.image}
                alt=""
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-[#0A1020]">
                  {m.name}
                </h3>
                <p className="mt-0.5 text-sm text-[#2F6BFF]">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#5A6478]">
                  {m.focus}
                </p>
                <p className="mt-4 border-t border-[#EAE7E0] pt-3 text-[13px] text-[#8A8578]">
                  {m.years} years in experimentation
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 20. PRICING
 * ========================================================================== */

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="bg-[#0A1020]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          title="Three ways to work with us"
          lede="Priced on the size of the programme, not on a share of the lift. Performance-based pricing gives an agency a reason to prefer optimistic read-outs, and we would rather not have that reason."
        />

        <div className="mt-8 inline-flex items-center gap-3 rounded-md border border-[#1F2A40] bg-[#111A2C] p-1.5">
          <button
            type="button"
            onClick={() => setAnnual(false)}
            aria-pressed={!annual}
            className={`rounded px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF] ${
              !annual ? "bg-[#2F6BFF] text-white" : "text-[#8A94A8]"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
            className={`rounded px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF] ${
              annual ? "bg-[#2F6BFF] text-white" : "text-[#8A94A8]"
            }`}
          >
            Annual — two months free
          </button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col rounded-xl border p-7 lg:p-8 ${
                tier.featured
                  ? "border-[#2F6BFF] bg-[#111A2C]"
                  : "border-[#1F2A40] bg-transparent"
              }`}
            >
              {tier.featured ? (
                <span className="mb-5 self-start rounded-sm bg-[#2F6BFF] px-3 py-1 text-[12px] font-semibold text-white">
                  Most programmes start here
                </span>
              ) : null}

              <h3 className="text-xl font-semibold tracking-[-0.01em] text-white">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8A94A8]">
                {tier.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-[-0.03em] text-white">
                  {tier.price}
                </span>
                <span className="text-sm text-[#6C7688]">
                  {annual && tier.cadence === "per month"
                    ? "per month, billed annually"
                    : tier.cadence}
                </span>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-md bg-[#0D1626] px-4 py-3">
                <IconFlask className="h-4 w-4 text-[#8FB4FF]" />
                <span className="text-sm text-[#C3CBD9]">{tier.testsPerMonth}</span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[#8A94A8]">
                <span className="font-medium text-[#D6DCE8]">Best for: </span>
                {tier.bestFor}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#9AA5BA]">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#4FD39A]" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
                {tier.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#5A6478]">
                    <IconCross className="mt-0.5 h-4 w-4 shrink-0" />
                    <span className="leading-relaxed line-through decoration-[#3A4356]">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#scope-a-test"
                className={`mt-7 inline-flex items-center justify-center rounded-md px-6 py-3.5 text-[15px] font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1020] ${
                  tier.featured
                    ? "bg-[#2F6BFF] text-white hover:bg-[#1E58E6]"
                    : "border border-[#2A3550] text-[#D6DCE8] hover:border-[#41507A] hover:bg-white/5"
                }`}
              >
                Talk about {tier.name}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#7C8698]">
          All figures exclude applicable taxes. Programme engagements run on a
          rolling three-month basis because a single month is not long enough to
          complete a cycle and judge the work honestly.
        </p>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 21. COMPARISON TABLE
 * ========================================================================== */

function ComparisonTable() {
  const rows: {
    criterion: string;
    diy: string;
    agency: string;
    hyi: string;
    hyiGood: boolean;
  }[] = [
    {
      criterion: "Who writes the hypothesis",
      diy: "Whoever had the idea in the meeting",
      agency: "A strategist, often without your data",
      hyi: "An analyst, from evidence you can inspect",
      hyiGood: true,
    },
    {
      criterion: "Sample size calculated before launch",
      diy: "Rarely",
      agency: "Sometimes",
      hyi: "Always, and shown to you in writing",
      hyiGood: true,
    },
    {
      criterion: "Flat and losing results reported",
      diy: "Quietly forgotten",
      agency: "Often omitted from the deck",
      hyi: "Written up with the same detail as wins",
      hyiGood: true,
    },
    {
      criterion: "Confidence interval in the read-out",
      diy: "Almost never",
      agency: "Occasionally",
      hyi: "On every single result",
      hyiGood: true,
    },
    {
      criterion: "Guardrail metrics monitored daily",
      diy: "No",
      agency: "Varies",
      hyi: "Automated, with alerting",
      hyiGood: true,
    },
    {
      criterion: "Who owns the variant code",
      diy: "You",
      agency: "Often the agency's tool account",
      hyi: "You — delivered as pull requests",
      hyiGood: true,
    },
    {
      criterion: "Time to first shipped decision",
      diy: "Months, if it happens at all",
      agency: "8–12 weeks typical",
      hyi: "About 40 days",
      hyiGood: true,
    },
    {
      criterion: "Cost",
      diy: "Your team's time, which is not free",
      agency: "Retainer plus tool licences",
      hyi: "Retainer, your existing tools",
      hyiGood: false,
    },
    {
      criterion: "Institutional memory of past tests",
      diy: "In someone's head until they leave",
      agency: "In the agency's account",
      hyi: "Searchable archive you can export",
      hyiGood: true,
    },
  ];

  return (
    <section className="bg-[#F3F1EC]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          tone="light"
          title="Doing it yourself, hiring an agency, or working with us"
          lede="We have written the honest version, including the row where we are not the cheapest option."
        />

        <div className="mt-12 overflow-x-auto rounded-xl border border-[#DDD9D0] bg-white">
          <table className="w-full min-w-[820px] text-left">
            <thead>
              <tr className="border-b border-[#EAE7E0]">
                <th scope="col" className="px-6 py-5 text-[13px] font-medium text-[#8A8578] sm:px-8">
                  Criterion
                </th>
                <th scope="col" className="px-6 py-5 text-[15px] font-semibold text-[#0A1020]">
                  In-house, unaided
                </th>
                <th scope="col" className="px-6 py-5 text-[15px] font-semibold text-[#0A1020]">
                  A typical CRO agency
                </th>
                <th
                  scope="col"
                  className="border-l border-[#EAE7E0] bg-[#F7FAFF] px-6 py-5 text-[15px] font-semibold text-[#2F6BFF] sm:px-8"
                >
                  HYI.AI
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.criterion} className="border-b border-[#F0EEE9] last:border-b-0">
                  <th
                    scope="row"
                    className="px-6 py-4 text-left text-[15px] font-medium text-[#0A1020] sm:px-8"
                  >
                    {r.criterion}
                  </th>
                  <td className="px-6 py-4 text-sm leading-relaxed text-[#5A6478]">
                    {r.diy}
                  </td>
                  <td className="px-6 py-4 text-sm leading-relaxed text-[#5A6478]">
                    {r.agency}
                  </td>
                  <td className="border-l border-[#EAE7E0] bg-[#F7FAFF] px-6 py-4 sm:px-8">
                    <span className="flex items-start gap-2.5 text-sm leading-relaxed text-[#2A3242]">
                      {r.hyiGood ? (
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#2E7D5B]" />
                      ) : (
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A8578]" />
                      )}
                      {r.hyi}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 22. FAQ
 * ========================================================================== */

function Faq() {
  const categories = useMemo(
    () => Array.from(new Set(FAQ_ITEMS.map((f) => f.category))),
    []
  );
  const [activeCat, setActiveCat] = useState<string>(categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const shown = FAQ_ITEMS.filter((f) => f.category === activeCat);

  return (
    <section id="faq" className="bg-[#0A1020]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          title="Questions people ask before signing anything"
          lede="If yours is not here, ask it on the scoping call. We would rather answer an awkward question in week zero than in month three."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <nav aria-label="FAQ categories">
            <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {categories.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCat(c);
                      setOpenIndex(0);
                    }}
                    aria-pressed={activeCat === c}
                    className={`w-full rounded-md px-4 py-2.5 text-left text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF] ${
                      activeCat === c
                        ? "bg-[#111A2C] text-white"
                        : "text-[#7C8698] hover:bg-white/5 hover:text-[#B6BFCE]"
                    }`}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="divide-y divide-[#1A2333] border-y border-[#1A2333]">
            {shown.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF]"
                  >
                    <span
                      className={`text-[17px] font-medium leading-snug ${
                        isOpen ? "text-white" : "text-[#C3CBD9]"
                      }`}
                    >
                      {item.q}
                    </span>
                    <IconChevron
                      className={`mt-1 h-5 w-5 shrink-0 text-[#6C7688] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pb-6 text-[15px] leading-relaxed text-[#9AA5BA]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 23. GLOSSARY
 * ========================================================================== */

function Glossary() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GLOSSARY;
    return GLOSSARY.filter(
      (g) =>
        g.term.toLowerCase().includes(q) ||
        g.short.toLowerCase().includes(q) ||
        g.long.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="glossary" className="bg-[#F3F1EC]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="light"
            title="The vocabulary, defined once"
            lede="Every term your testing tool will throw at you, in one place. Tap any entry for the longer version."
          />

          <div className="w-full lg:max-w-xs">
            <label htmlFor="glossary-search" className="sr-only">
              Search the glossary
            </label>
            <input
              id="glossary-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search terms"
              className="w-full rounded-md border border-[#D3D0C8] bg-white px-4 py-3 text-[15px] text-[#0A1020] outline-none transition placeholder:text-[#B6B2A8] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/25"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-12 rounded-xl border border-dashed border-[#D3D0C8] p-12 text-center">
            <p className="text-[15px] text-[#5A6478]">
              Nothing matches “{query}”. Try a shorter word, or ask us directly
              on the scoping call.
            </p>
          </div>
        ) : (
          <dl className="mt-12 grid gap-px overflow-hidden rounded-xl bg-[#DDD9D0] sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((g) => {
              const isOpen = expanded === g.term;
              return (
                <div key={g.term} className="bg-[#F9F8F5] p-6 lg:p-7">
                  <dt>
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : g.term)}
                      aria-expanded={isOpen}
                      className="text-left text-[17px] font-semibold tracking-[-0.01em] text-[#0A1020] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF]"
                    >
                      {g.term}
                    </button>
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[#5A6478]">
                    {g.short}
                  </dd>
                  {isOpen ? (
                    <dd className="mt-3 border-t border-[#E6E2DA] pt-3 text-sm leading-relaxed text-[#3A4356]">
                      {g.long}
                    </dd>
                  ) : (
                    <dd className="mt-3">
                      <button
                        type="button"
                        onClick={() => setExpanded(g.term)}
                        className="text-[13px] font-medium text-[#2F6BFF] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6BFF]"
                      >
                        Read the longer version
                      </button>
                    </dd>
                  )}
                </div>
              );
            })}
          </dl>
        )}
      </div>
    </section>
  );
}

/* ==========================================================================
 * 24. CLOSING CTA WITH A WORKING FORM
 * ========================================================================== */

interface LeadForm {
  name: string;
  email: string;
  website: string;
  traffic: string;
  goal: string;
}

function ScopeATest() {
  const [form, setForm] = useState<LeadForm>({
    name: "",
    email: "",
    website: "",
    traffic: "5k–20k",
    goal: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadForm, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = useCallback(
    (field: keyof LeadForm, value: string) => {
      setForm((f) => ({ ...f, [field]: value }));
      setErrors((e) => ({ ...e, [field]: undefined }));
    },
    []
  );

  const validate = (): boolean => {
    const next: Partial<Record<keyof LeadForm, string>> = {};
    if (!form.name.trim()) next.name = "Tell us who to address the reply to.";
    if (!form.email.trim()) {
      next.email = "We need an email to send the scoping notes.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      next.email = "That address does not look complete.";
    }
    if (!form.website.trim()) next.website = "Which page should we look at?";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("sending");
    try {
      // Replace with your own endpoint.
      await new Promise((r) => setTimeout(r, 900));
      setStatus("sent");
    } catch {
      setStatus("idle");
      setErrors({ email: "That did not send. Try again, or email us directly." });
    }
  };

  if (status === "sent") {
    return (
      <section id="scope-a-test" className="bg-[#0A1020]">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 lg:py-32">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#2E7D5B]/15 text-[#4FD39A]">
            <IconCheck className="h-7 w-7" />
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            Request received
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#A3AEC4]">
            An analyst will look at {form.website || "your page"} before replying,
            so the first email you get will already contain two or three specific
            observations rather than a calendar link. Expect it within one
            working day.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setForm({ name: "", email: "", website: "", traffic: "5k–20k", goal: "" });
            }}
            className="mt-8 text-sm font-medium text-[#8FB4FF] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF]"
          >
            Send another page
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="scope-a-test" className="bg-[#0A1020]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="overflow-hidden rounded-2xl border border-[#1F2A40] bg-[#111A2C]">
          <div className="grid lg:grid-cols-[1.05fr_1fr]">
            {/* Pitch */}
            <div className="p-8 sm:p-10 lg:p-12">
              <LabTape>
                <IconFlask className="h-4 w-4" />
                Free scoping, no obligation
              </LabTape>

              <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-white sm:text-4xl">
                Send us one page. We will tell you whether it is worth testing.
              </h2>

              <p className="mt-5 text-[17px] leading-relaxed text-[#A3AEC4]">
                Sometimes the answer is no — the traffic is too thin, or the
                problem is the offer rather than the page. You will get that
                answer either way, in writing, before any money is discussed.
              </p>

              <ul className="mt-8 space-y-3.5">
                {[
                  "A first look at your page from a conversion analyst",
                  "An honest feasibility read on your traffic volume",
                  "Two or three hypotheses we would start with",
                  "A realistic runtime estimate for the first test",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] text-[#C3CBD9]">
                    <IconCheck className="mt-1 h-4 w-4 shrink-0 text-[#4FD39A]" />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-[#1F2A40] pt-6 text-sm leading-relaxed text-[#7C8698]">
                Median reply time last quarter: 7 hours during business days.
              </p>
            </div>

            {/* Form — no <form> element, handlers only */}
            <div className="border-t border-[#1F2A40] bg-[#0D1626] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="space-y-5">
                <div>
                  <label htmlFor="lead-name" className="block text-sm font-medium text-[#D6DCE8]">
                    Your name
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="mt-1.5 w-full rounded-md border border-[#28344E] bg-[#111A2C] px-4 py-3 text-[15px] text-white outline-none transition placeholder:text-[#4E5A72] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/25"
                    placeholder="Priya Sharma"
                  />
                  {errors.name ? (
                    <p className="mt-1.5 text-[13px] text-[#E08774]">{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="lead-email" className="block text-sm font-medium text-[#D6DCE8]">
                    Work email
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="mt-1.5 w-full rounded-md border border-[#28344E] bg-[#111A2C] px-4 py-3 text-[15px] text-white outline-none transition placeholder:text-[#4E5A72] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/25"
                    placeholder="priya@company.com"
                  />
                  {errors.email ? (
                    <p className="mt-1.5 text-[13px] text-[#E08774]">{errors.email}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="lead-site" className="block text-sm font-medium text-[#D6DCE8]">
                    The page you want tested
                  </label>
                  <input
                    id="lead-site"
                    type="url"
                    inputMode="url"
                    value={form.website}
                    onChange={(e) => update("website", e.target.value)}
                    className="mt-1.5 w-full rounded-md border border-[#28344E] bg-[#111A2C] px-4 py-3 text-[15px] text-white outline-none transition placeholder:text-[#4E5A72] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/25"
                    placeholder="https://company.com/offer"
                  />
                  {errors.website ? (
                    <p className="mt-1.5 text-[13px] text-[#E08774]">{errors.website}</p>
                  ) : null}
                </div>

                <div>
                  <span className="block text-sm font-medium text-[#D6DCE8]">
                    Monthly visitors to that page
                  </span>
                  <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {["Under 5k", "5k–20k", "20k–100k", "100k+"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => update("traffic", t)}
                        aria-pressed={form.traffic === t}
                        className={`rounded-md border px-3 py-2.5 text-[13px] font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF] ${
                          form.traffic === t
                            ? "border-[#2F6BFF] bg-[#2F6BFF]/15 text-white"
                            : "border-[#28344E] text-[#8A94A8] hover:border-[#3A4A6E]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="lead-goal" className="block text-sm font-medium text-[#D6DCE8]">
                    What would you most like to change about it?
                  </label>
                  <textarea
                    id="lead-goal"
                    rows={3}
                    value={form.goal}
                    onChange={(e) => update("goal", e.target.value)}
                    className="mt-1.5 w-full resize-none rounded-md border border-[#28344E] bg-[#111A2C] px-4 py-3 text-[15px] text-white outline-none transition placeholder:text-[#4E5A72] focus:border-[#2F6BFF] focus:ring-2 focus:ring-[#2F6BFF]/25"
                    placeholder="Optional — a sentence is plenty"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="w-full rounded-md bg-[#2F6BFF] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#1E58E6] disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FB4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1626]"
                >
                  {status === "sending" ? "Sending…" : "Send it over"}
                </button>

                <p className="text-xs leading-relaxed text-[#6C7688]">
                  We use this only to reply to you. No newsletter, no sequence,
                  no sharing with anyone else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
 * 25. PAGE COMPOSITION
 * ========================================================================== */

export default function LandingPageABTestingClient() {
  return (
    <main className="bg-[#0A1020] antialiased">
        <Header />
      <Hero />
      <TrustBar />
      <WhatItIs />
      <HowHyiWorks />
      <SignificanceCalculator />
      <SampleSizeCalculator />
      <WhatWeTest />
      <MetricsPanel />
      <CaseStudies />
      <Timeline />
      <CommonMistakes />
      <Integrations />
      <Team />
      <Pricing />
      <ComparisonTable />
      <Faq />
      <Glossary />
      <ScopeATest />
   
    </main>
  );
}