export type Group = {
  heading: string;
  lead?: string;
  itemsLabel?: string;
  items: string[];
  trail?: string;
};

export type Area = {
  key: "talent" | "technology" | "cyber" | "gcc";
  title: string;
  tag: string;
  color: string; // accent color of the card
  wide?: boolean; // wide hover panel (2 columns) for long content
  groups: Group[];
};

export const areas: Area[] = [
  {
    key: "talent",
    title: "Talent Solutions",
    tag: "Flexible, Scalable, On-Demand",
    color: "#8b5cf6",
    groups: [
      {
        heading: "Talent Marketplace",
        lead: "At the core of HYI.AI is a dynamic talent marketplace designed to help businesses hire precisely what they need—when they need it.",
        itemsLabel: "We offer:",
        items: [
          "Remote Hybrid & On-Site Talent",
          "Flexible Hiring Models: Hourly, Weekly, Monthly, Full-Time & Part-Time",
          "Rapid Talent Deployment to kickstart projects without delay",
          "48-Hour Talent Replacement Guarantee – no delays, no downtime",
          "A Dedicated Account Manager to ensure smooth delivery and communication",
          "100% HYI.AI Accountability – We own the outcomes, not just the process",
        ],
        trail:
          "Whether you're looking to scale a tech talent, augment cybersecurity expertise, or build a global remote / on-site workforce, HYI.AI ensures the right fit, every time.",
      },
      {
        heading: "Talent Solutions",
        lead: "Target: Startups, Enterprises, Entrepreneurs",
        itemsLabel: "Value:",
        items: [
          "Pre-verified global talent",
          "24/7 Support with Dedicated Manager",
          "48-Hour Replacement Guarantee",
          "Full project/task accountability",
        ],
      },
      {
        heading: "AI-based KPI/KRA Tracking",
        items: [
          "Automated Performance Monitoring",
          "AI-Driven Feedback and Optimization",
          "Real-Time Analytics Dashboard",
          "Predictive workforce analytics",
          "Employee engagement insights",
        ],
      },
    ],
  },
  {
    key: "technology",
    title: "Technology Solutions",
    tag: "Build, scale & automate with AI",
    color: "#6366f1",
    wide: true,
    groups: [
      {
        heading: "Application Development & Custom Deployment",
        items: [
          "Custom Software & Product Development",
          "SaaS & Enterprise-Grade App Solutions",
          "DevOps, CI/CD, and Agile Execution",
          "AI-powered SaaS products",
          "Tailored AI/ML model deployment",
          "Private cloud, edge, and hybrid setups",
          "On-prem & multi-cloud options",
        ],
      },
      {
        heading: "Data & Artificial Intelligence",
        items: [
          "Predictive Analytics, NLP, Computer Vision",
          "Data Lakes, Warehousing & Processing",
          "ML Model Deployment & Lifecycle Management",
        ],
      },
      {
        heading: "Cloud Infrastructure",
        items: [
          "Cloud Migration & Management (AWS, Azure, GCP)",
          "Cost Optimization & Cloud Security",
          "Serverless Architecture",
          "Custom Deployment",
        ],
      },
      {
        heading: "Finance & Risk Management",
        items: [
          "FinOps & Cost Control Automation",
          "Risk Mitigation Strategy & Compliance",
          "AI-Powered Forecasting & Analysis",
          "AI-powered fraud detection",
          "Financial modeling & analytics",
        ],
      },
      {
        heading: "AI-Powered Business Process Automation",
        items: [
          "RPA + AI for Intelligent Workflows",
          "Intelligent Document & Data Processing Bots",
          "Workflow orchestration",
        ],
      },
      {
        heading: "IT Strategy & Digital Transformation",
        items: [
          "Roadmaps for scaling & Gap Analysis",
          "End-to-End DX Implementation",
          "Legacy Modernization",
          "CTO-as-a-Service",
          "IT governance & architecture audits",
        ],
      },
      {
        heading: "Data Analytics",
        items: [
          "Real-time dashboards",
          "BI & predictive analytics",
          "Industry-specific insights",
        ],
      },
      {
        heading: "Digital Transformation",
        items: [
          "End-to-end transformation journeys",
          "Industry 4.0 and AI-readiness",
          "Innovation-as-a-service",
        ],
      },
    ],
  },
  {
    key: "cyber",
    title: "Cybersecurity",
    tag: "SOC, Threat Detection & Zero Trust",
    color: "#22d3ee",
    groups: [
      {
        heading: "Cybersecurity",
        items: [
          "SOC-as-a-Service",
          "AI Based Threat Detection & Remediation",
          "Secure DevOps practices",
          "Zero Trust Architecture",
        ],
      },
    ],
  },
  {
    key: "gcc",
    title: "Global Capability Centres (GCC)",
    tag: "End-to-end GCC / ODC setup",
    color: "#d946ef",
    groups: [
      {
        heading: "Global Capability Centers (GCC/ODC)",
        itemsLabel: "End-to-End Setup:",
        items: [
          "Legal Compliance",
          "Local Company Registration",
          "Workspace-as-a-Service",
          "Infrastructure & compliance",
          "Scaling tech delivery for global clients",
          "Talent Deployment",
          "Set up managed teams",
          "Governance & Delivery Monitoring",
          "Payroll & Compliances",
        ],
      },
    ],
  },
];

export const targetIndustries = [
  "Startups & Enterprises",
  "Healthcare & Life Sciences",
  "FinTech",
  "EdTech",
  "Retail & E-Commerce",
  "Manufacturing",
  "Logistics",
  "E-Governance",
  "Smart Cities",
];