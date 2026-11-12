/** Internal links used on the Hire Talent pages — change here if your routes differ. */
export const LINKS = {
  expert: "/talk-to-our-expert",
  login: "/login",
};

export type HireId = "build-your-team" | "hire-cxo" | "hire-finance-consultant" | "product-designer";

export type HirePage = {
  id: HireId;
  href: string;
  nav: string;
  title: string;
  accent: string[];
  rot: { prefix: string; words: string[]; suffix: string };
  lead: string;
  hero: string; // lottie file name in /public/lotties
  chips: string[];
  statement: string;
  highlights: { t: string; d: string }[];
  rolesTitle: string;
  roles: string[];
};

/*
 NOTE: This copy is a DRAFT written from the HYI.AI About content (pre-vetted remote professionals,
 150+ countries, hourly/weekly/monthly/full-time, understand-first approach). Please review and replace
 with the client's final text.
*/
export const HIRE_PAGES: HirePage[] = [
  {
    id: "build-your-team",
    href: "/hire-talent/build-your-team",
    nav: "Build Your Team",
    title: "Build Your Team",
    accent: ["Team"],
    rot: { prefix: "with", words: ["Pre-Vetted", "Remote", "On-Demand", "Global"], suffix: "professionals" },
    lead: "Assemble a dedicated team of pre-vetted remote professionals around your goals — scale up when you need to, and adjust as your requirements change.",
    hero: "orbit",
    chips: ["Pre-Vetted Talent", "150+ Countries", "Hourly to Full-Time"],
    statement:
      "A startup building its first product has very different requirements from an established company expanding into new markets. That is why we start by understanding your situation.",
    highlights: [
      { t: "Pre-Vetted Professionals", d: "Work with verified remote talent matched to your requirement." },
      { t: "Flexible Engagement", d: "Hourly, weekly, monthly, or full-time — adjust resources as your needs change." },
      { t: "Global Reach", d: "Access skilled professionals across more than 150 countries, regions, and territories." },
      { t: "Ready to Deploy", d: "Fill skill gaps and get your projects moving without unnecessary delays." },
    ],
    rolesTitle: "Teams We Help You Build",
    roles: ["Software Developers", "Designers", "Data & AI Specialists", "Cybersecurity Professionals", "Project & Product Managers", "Finance & Operations Support"],
  },
  {
    id: "hire-cxo",
    href: "/hire-talent/hire-cxo",
    nav: "Hire CXO",
    title: "Hire a CXO",
    accent: ["CXO"],
    rot: { prefix: "Bring in your next", words: ["CTO", "CFO", "CMO", "COO", "CISO", "CPO"], suffix: "on a flexible basis" },
    lead: "Bring senior leadership into your business without the burden of long-term commitments — strategic guidance, matched to what your organization actually needs.",
    hero: "star",
    chips: ["Senior Leadership", "Flexible Engagement", "Remote & Verified"],
    statement:
      "Every organization has different priorities, budgets, and expectations — so we begin by understanding what kind of leadership support your business really needs.",
    highlights: [
      { t: "Strategic Leadership", d: "Add senior expertise to guide decisions, plans, and growth." },
      { t: "Right-Fit Matching", d: "We understand your requirement first, then recommend the right person." },
      { t: "No Long-Term Burden", d: "Engage on terms that fit your priorities and adjust as your needs change." },
      { t: "Pre-Vetted & Remote", d: "Work with verified professionals from our global network." },
    ],
    rolesTitle: "Leadership Roles",
    roles: ["Chief Technology Officer (CTO)", "Chief Financial Officer (CFO)", "Chief Marketing Officer (CMO)", "Chief Operating Officer (COO)", "Chief Information Security Officer (CISO)", "Chief Product Officer (CPO)"],
  },
  {
    id: "hire-finance-consultant",
    href: "/hire-talent/hire-finance-consultant",
    nav: "Hire Finance Consultant",
    title: "Hire a Finance Consultant",
    accent: ["Finance"],
    rot: { prefix: "Expert help with", words: ["Financial Planning", "Budgeting", "Forecasting", "Reporting", "Compliance Support"], suffix: "" },
    lead: "Add finance expertise exactly when you need it, through pre-vetted remote professionals — available hourly, weekly, monthly, or full-time.",
    hero: "bars",
    chips: ["Targeted Expertise", "Remote & Verified", "Scalable Support"],
    statement:
      "Our approach is straightforward: understand the requirement, bring the right expertise, and help deliver the desired outcome.",
    highlights: [
      { t: "Targeted Expertise", d: "Bring in specialists for the exact finance challenge you are facing." },
      { t: "Flexible Engagement", d: "Choose the engagement model that fits your priorities and budget." },
      { t: "Remote & Verified", d: "Work with pre-vetted professionals from our global talent network." },
      { t: "Scalable Support", d: "Increase or reduce support as your requirements change." },
    ],
    rolesTitle: "Where We Can Help",
    roles: ["Financial Planning & Analysis", "Budgeting & Forecasting", "Financial Reporting", "Cash Flow Management", "Compliance Support", "Finance Leadership"],
  },
  {
    id: "product-designer",
    href: "/hire-talent/product-designer",
    nav: "Product Designer",
    title: "Hire a Product Designer",
    accent: ["Designer"],
    rot: { prefix: "Specialists in", words: ["UI Design", "UX Research", "Prototyping", "Design Systems"], suffix: "" },
    lead: "Hire product designers who turn ideas into intuitive digital experiences — pre-vetted, remote, and available on the engagement model that suits you.",
    hero: "design",
    chips: ["UI / UX", "Remote & Verified", "Flexible Engagement"],
    statement: "Technology makes progress possible, but it is people who make it happen.",
    highlights: [
      { t: "UI / UX Expertise", d: "Designers who understand people, products, and the problems worth solving." },
      { t: "Idea to Product", d: "Support from early concepts through to polished, multi-platform products." },
      { t: "Remote & Pre-Vetted", d: "Work with verified professionals across our global network." },
      { t: "Flexible Engagement", d: "Hourly, weekly, monthly, or full-time — whatever your project needs." },
    ],
    rolesTitle: "Design Roles",
    roles: ["UI Designer", "UX Designer", "UX Researcher", "Product Designer", "Design System Specialist", "Interaction Designer"],
  },
];

export const common = {
  stats: [
    { to: 150, suffix: "+", format: true, label: "countries, regions, and territories" },
    { to: 4, suffix: "", format: true, label: "engagement models" },
    { to: 2017, suffix: "", format: false, label: "Founded" },
  ],
  engageTitle: "Flexible Engagement",
  engage: [
    { t: "Hourly", d: "Short, focused support for specific tasks or niche requirements." },
    { t: "Weekly", d: "Time-bound capacity for sprints, reviews, or short deliverables." },
    { t: "Monthly", d: "Steady, ongoing support for work that needs continuity." },
    { t: "Full-Time", d: "A dedicated professional working as part of your team." },
  ],
  stepsTitle: "How It Works",
  steps: [
    { label: "Step 01 · Understand", paras: ["We start by understanding what your business is trying to achieve and what kind of support it actually needs."] },
    { label: "Step 02 · Match", paras: ["We bring the right expertise — pre-vetted remote professionals aligned with your requirement."] },
    { label: "Step 03 · Engage", paras: ["Choose hourly, weekly, monthly, or full-time engagement that fits your priorities and budget."] },
    { label: "Step 04 · Deliver & Adapt", paras: ["Work together towards the desired outcome, and adjust your resources as your needs change."] },
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    { icon: "🧭", t: "What engagement models are available?", d: "You can engage professionals hourly, weekly, monthly, or full-time, depending on what your business needs." },
    { icon: "✅", t: "Are the professionals vetted?", d: "HYI.AI enables businesses to hire pre-vetted remote professionals from a verified talent marketplace." },
    { icon: "🌍", t: "Where does the talent come from?", d: "Our global network extends across more than 150 countries, regions, and territories." },
    { icon: "🔄", t: "Can I change my resources later?", d: "Yes. Our flexible engagement models allow you to adjust resources as your needs change." },
    { icon: "📞", t: "How do I get started?", d: "Talk to our expert. We will first understand your requirement and then recommend the right people." },
  ],
  cta: {
    title: "Ready to build with the right people?",
    text: "Talk to our expert about your requirement — we start by understanding what you need.",
    primary: "Talk to our Expert →",
    secondary: "Login",
  },
  moreTitle: "Explore More Roles",
};