"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Eye,
  Gauge,
  Layers3,
  RefreshCcw,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */

export type RiskPageKey =
  | "cyber"
  | "enterprise"
  | "third-party"
  | "fraud"
  | "analytics"
  | "continuity"
  | "financial"
  | "operational"
  | "technology"
  | "regulatory"
  | "monitoring";

type PageConfig = {
  eyebrow: string;
  index: string;
  heroLine1: string;
  heroLine2: string;
  heroLine3: string;
  intro: string;

  statement: string;
  statementAccent: string;

  philosophy: string;

  keywords: string[];

  pillars: {
    number: string;
    title: string;
    description: string;
    label: string;
  }[];

  lifecycle: {
    number: string;
    title: string;
    description: string;
  }[];

  focus: {
    title: string;
    description: string;
  }[];

  principles: {
    number: string;
    title: string;
    description: string;
  }[];

  outcomes: string[];

  closingTitle: string;
  closingAccent: string;
  closingText: string;
};

/* -------------------------------------------------------------------------- */
/* UNIQUE CONTENT FOR ALL 11 PAGES                                            */
/* -------------------------------------------------------------------------- */

const pages: Record<RiskPageKey, PageConfig> = {
  cyber: {
    eyebrow: "CYBER RISK MANAGEMENT",
    index: "01 / 11",

    heroLine1: "Turn cyber",
    heroLine2: "uncertainty into",
    heroLine3: "business decisions.",

    intro:
      "Build a structured view of cybersecurity exposure that connects technology risk, business impact, ownership and response priorities across the organization.",

    statement: "Security becomes more useful",
    statementAccent: "when risk becomes understandable.",

    philosophy:
      "Cyber risk management connects technical security conditions with the business context needed to prioritize action, allocate resources and communicate exposure.",

    keywords: [
      "EXPOSURE",
      "THREATS",
      "IMPACT",
      "OWNERSHIP",
      "PRIORITY",
      "GOVERNANCE",
      "RESPONSE",
      "VISIBILITY",
    ],

    pillars: [
      {
        number: "01",
        label: "CONTEXT",
        title: "Business-aligned risk",
        description:
          "Connect cyber scenarios to critical services, business processes, strategic objectives and operational dependencies.",
      },
      {
        number: "02",
        label: "EXPOSURE",
        title: "Risk identification",
        description:
          "Structure security observations into meaningful scenarios that describe what could happen and why it matters.",
      },
      {
        number: "03",
        label: "DECISION",
        title: "Risk prioritization",
        description:
          "Compare exposure, potential impact and organizational tolerance to focus attention where it creates the greatest value.",
      },
      {
        number: "04",
        label: "OWNERSHIP",
        title: "Clear accountability",
        description:
          "Establish ownership for risk decisions, remediation activities, accepted exposure and ongoing monitoring.",
      },
    ],

    lifecycle: [
      {
        number: "01",
        title: "Understand",
        description:
          "Map business objectives, assets, dependencies and the environment in which cyber risk exists.",
      },
      {
        number: "02",
        title: "Identify",
        description:
          "Develop risk scenarios from threats, vulnerabilities, controls and operational conditions.",
      },
      {
        number: "03",
        title: "Assess",
        description:
          "Evaluate likelihood, consequence and uncertainty using a consistent organizational approach.",
      },
      {
        number: "04",
        title: "Prioritize",
        description:
          "Determine which risks require treatment, escalation, monitoring or explicit acceptance.",
      },
      {
        number: "05",
        title: "Respond",
        description:
          "Coordinate practical risk treatment with security, engineering and business stakeholders.",
      },
      {
        number: "06",
        title: "Monitor",
        description:
          "Track changes in exposure, controls, assumptions and business conditions over time.",
      },
    ],

    focus: [
      {
        title: "Risk scenarios",
        description:
          "Translate technical conditions into structured descriptions of potential business consequences.",
      },
      {
        title: "Risk appetite",
        description:
          "Create clearer context for deciding which exposure can be tolerated and which requires action.",
      },
      {
        title: "Security investment",
        description:
          "Support prioritization by connecting security initiatives to the risks they are intended to reduce.",
      },
      {
        title: "Executive visibility",
        description:
          "Communicate cyber risk using language that supports leadership and enterprise decision-making.",
      },
    ],

    principles: [
      {
        number: "01",
        title: "Business context first",
        description:
          "Technical severity alone does not explain organizational risk.",
      },
      {
        number: "02",
        title: "Make uncertainty visible",
        description:
          "Risk analysis should communicate assumptions instead of hiding them.",
      },
      {
        number: "03",
        title: "Assign ownership",
        description:
          "Important risks need accountable decision-makers.",
      },
      {
        number: "04",
        title: "Keep risk dynamic",
        description:
          "Exposure changes as systems, threats and business priorities evolve.",
      },
    ],

    outcomes: [
      "Clearer cyber-risk priorities",
      "Stronger executive communication",
      "Defined risk ownership",
      "Better security investment context",
      "Structured risk monitoring",
      "Business-aligned response planning",
    ],

    closingTitle: "Make cyber risk",
    closingAccent: "easier to act on.",
    closingText:
      "Build a risk management approach that connects security exposure with the decisions your organization needs to make.",
  },

  enterprise: {
    eyebrow: "ENTERPRISE RISK MANAGEMENT",
    index: "02 / 11",

    heroLine1: "See risk",
    heroLine2: "across the",
    heroLine3: "whole enterprise.",

    intro:
      "Connect strategic, operational, financial and technology uncertainty into a shared enterprise view designed for better governance and decision-making.",

    statement: "Different risks.",
    statementAccent: "One decision environment.",

    philosophy:
      "Enterprise risk management creates a common structure for understanding uncertainty across business functions without losing the context that makes each risk different.",

    keywords: [
      "STRATEGY",
      "CAPITAL",
      "OPERATIONS",
      "TECHNOLOGY",
      "GOVERNANCE",
      "RESILIENCE",
      "DECISIONS",
      "ENTERPRISE",
    ],

    pillars: [
      {
        number: "01",
        label: "STRATEGY",
        title: "Strategic alignment",
        description:
          "Connect risk management to organizational objectives, transformation priorities and long-term business direction.",
      },
      {
        number: "02",
        label: "PORTFOLIO",
        title: "Enterprise risk view",
        description:
          "Bring material risks together so leadership can understand concentration, dependencies and competing priorities.",
      },
      {
        number: "03",
        label: "GOVERNANCE",
        title: "Decision structure",
        description:
          "Define ownership, escalation paths and governance routines that make risk decisions repeatable.",
      },
      {
        number: "04",
        label: "RESILIENCE",
        title: "Adaptive management",
        description:
          "Keep the enterprise risk profile relevant as markets, operations and technology environments change.",
      },
    ],

    lifecycle: [
      {
        number: "01",
        title: "Frame",
        description:
          "Define enterprise objectives, decision boundaries and the context in which risk will be evaluated.",
      },
      {
        number: "02",
        title: "Discover",
        description:
          "Identify material uncertainties across functions, programs, markets and dependencies.",
      },
      {
        number: "03",
        title: "Structure",
        description:
          "Normalize risk information so different categories can be understood together.",
      },
      {
        number: "04",
        title: "Evaluate",
        description:
          "Assess risk against appetite, tolerance, objectives and potential enterprise impact.",
      },
      {
        number: "05",
        title: "Govern",
        description:
          "Coordinate treatment, ownership, escalation and executive oversight.",
      },
      {
        number: "06",
        title: "Evolve",
        description:
          "Refresh the risk profile as strategic priorities and operating conditions change.",
      },
    ],

    focus: [
      {
        title: "Enterprise profile",
        description:
          "Build a consolidated perspective without reducing every risk to an oversimplified score.",
      },
      {
        title: "Risk appetite",
        description:
          "Translate leadership expectations into practical boundaries for risk-taking.",
      },
      {
        title: "Interdependencies",
        description:
          "Understand how one risk can amplify or trigger consequences elsewhere in the enterprise.",
      },
      {
        title: "Governance cadence",
        description:
          "Create repeatable routines for review, escalation and decision accountability.",
      },
    ],

    principles: [
      {
        number: "01",
        title: "Connect risk to objectives",
        description:
          "Risk matters because it can change the ability to achieve intended outcomes.",
      },
      {
        number: "02",
        title: "Preserve context",
        description:
          "Aggregation should not erase the details decision-makers need.",
      },
      {
        number: "03",
        title: "Use common language",
        description:
          "Consistent terminology improves communication across organizational boundaries.",
      },
      {
        number: "04",
        title: "Treat ERM as continuous",
        description:
          "Enterprise risk management should evolve with the organization.",
      },
    ],

    outcomes: [
      "Integrated enterprise risk profile",
      "Clear governance responsibilities",
      "Improved cross-functional visibility",
      "Better strategic risk context",
      "Consistent escalation practices",
      "Stronger decision alignment",
    ],

    closingTitle: "Connect risk",
    closingAccent: "to enterprise direction.",
    closingText:
      "Create a shared risk language that helps leadership see uncertainty in the context of strategy, operations and growth.",
  },

  "third-party": {
    eyebrow: "THIRD-PARTY RISK MANAGEMENT",
    index: "03 / 11",

    heroLine1: "Your ecosystem",
    heroLine2: "extends beyond",
    heroLine3: "your perimeter.",

    intro:
      "Understand risk introduced through vendors, suppliers, technology providers and strategic partners across the full relationship lifecycle.",

    statement: "A connected business",
    statementAccent: "inherits connected risk.",

    philosophy:
      "Third-party risk management creates visibility into external dependencies while helping teams apply oversight proportionate to the importance and exposure of each relationship.",

    keywords: [
      "VENDORS",
      "SUPPLIERS",
      "DEPENDENCY",
      "ACCESS",
      "DILIGENCE",
      "CONTRACTS",
      "MONITORING",
      "ECOSYSTEM",
    ],

    pillars: [
      {
        number: "01",
        label: "DISCOVERY",
        title: "Third-party inventory",
        description:
          "Establish visibility into external relationships, services, data access and operational dependencies.",
      },
      {
        number: "02",
        label: "TIERING",
        title: "Risk-based segmentation",
        description:
          "Differentiate oversight according to business criticality, access, dependency and potential impact.",
      },
      {
        number: "03",
        label: "DILIGENCE",
        title: "Focused assessment",
        description:
          "Evaluate relevant controls and practices before and throughout important third-party relationships.",
      },
      {
        number: "04",
        label: "LIFECYCLE",
        title: "Continuous oversight",
        description:
          "Maintain visibility as vendors, services, access patterns and business dependencies change.",
      },
    ],

    lifecycle: [
      {
        number: "01",
        title: "Inventory",
        description:
          "Identify third parties and understand the services they provide.",
      },
      {
        number: "02",
        title: "Classify",
        description:
          "Segment relationships by criticality, access and dependency.",
      },
      {
        number: "03",
        title: "Assess",
        description:
          "Perform diligence appropriate to the risk profile of the relationship.",
      },
      {
        number: "04",
        title: "Contract",
        description:
          "Translate relevant risk expectations into contractual and operational requirements.",
      },
      {
        number: "05",
        title: "Monitor",
        description:
          "Track material changes throughout the relationship lifecycle.",
      },
      {
        number: "06",
        title: "Exit",
        description:
          "Manage access, information and dependency considerations when relationships end.",
      },
    ],

    focus: [
      {
        title: "Vendor criticality",
        description:
          "Identify relationships whose disruption or compromise could materially affect the business.",
      },
      {
        title: "Data exposure",
        description:
          "Understand what information third parties access, process, transmit or store.",
      },
      {
        title: "Concentration",
        description:
          "Reveal dependence on shared providers, technologies and service ecosystems.",
      },
      {
        title: "Lifecycle change",
        description:
          "Reassess risk when services, access or business importance changes.",
      },
    ],

    principles: [
      {
        number: "01",
        title: "Know the ecosystem",
        description:
          "You cannot govern relationships that are not visible.",
      },
      {
        number: "02",
        title: "Scale oversight",
        description:
          "Critical vendors deserve deeper attention than low-impact suppliers.",
      },
      {
        number: "03",
        title: "Look beyond onboarding",
        description:
          "Third-party exposure changes throughout the relationship.",
      },
      {
        number: "04",
        title: "Plan for dependency",
        description:
          "Resilience requires understanding where external services are difficult to replace.",
      },
    ],

    outcomes: [
      "Structured vendor inventory",
      "Risk-based vendor tiering",
      "Improved due diligence",
      "Clearer third-party ownership",
      "Ongoing relationship monitoring",
      "Better dependency visibility",
    ],

    closingTitle: "Know the risk",
    closingAccent: "outside your walls.",
    closingText:
      "Build visibility and governance across the external relationships your organization depends on.",
  },

  fraud: {
    eyebrow: "FRAUD RISK MANAGEMENT",
    index: "04 / 11",

    heroLine1: "Understand how",
    heroLine2: "trust can be",
    heroLine3: "misused.",

    intro:
      "Build a structured fraud-risk program around business processes, transaction environments, human behavior and control weaknesses.",

    statement: "Fraud hides inside",
    statementAccent: "normal-looking activity.",

    philosophy:
      "Effective fraud risk management combines process understanding, behavioral context, control design and ongoing detection rather than relying on isolated alerts.",

    keywords: [
      "BEHAVIOR",
      "TRANSACTIONS",
      "IDENTITY",
      "CONTROLS",
      "ANOMALIES",
      "INVESTIGATION",
      "PREVENTION",
      "TRUST",
    ],

    pillars: [
      {
        number: "01",
        label: "SCENARIOS",
        title: "Fraud exposure mapping",
        description:
          "Identify how processes, permissions, transactions and incentives could create opportunities for abuse.",
      },
      {
        number: "02",
        label: "CONTROLS",
        title: "Preventive safeguards",
        description:
          "Review whether controls meaningfully reduce opportunities for unauthorized or deceptive activity.",
      },
      {
        number: "03",
        label: "SIGNALS",
        title: "Detection strategy",
        description:
          "Define observable behaviors and anomalies that may indicate emerging fraud patterns.",
      },
      {
        number: "04",
        label: "LEARNING",
        title: "Response feedback",
        description:
          "Use investigations and confirmed events to strengthen controls and future detection.",
      },
    ],

    lifecycle: [
      {
        number: "01",
        title: "Map",
        description:
          "Understand processes, assets, transactions and trust relationships.",
      },
      {
        number: "02",
        title: "Scenario",
        description:
          "Describe plausible ways fraud could occur.",
      },
      {
        number: "03",
        title: "Control",
        description:
          "Evaluate preventive and detective safeguards.",
      },
      {
        number: "04",
        title: "Observe",
        description:
          "Identify useful signals and behavioral anomalies.",
      },
      {
        number: "05",
        title: "Investigate",
        description:
          "Escalate meaningful indicators through defined processes.",
      },
      {
        number: "06",
        title: "Improve",
        description:
          "Feed lessons back into process and control design.",
      },
    ],

    focus: [
      {
        title: "Transaction integrity",
        description:
          "Understand where high-value or unusual transactions require additional assurance.",
      },
      {
        title: "Identity misuse",
        description:
          "Evaluate how compromised or abused identities could bypass intended controls.",
      },
      {
        title: "Insider scenarios",
        description:
          "Consider how legitimate access can be misused within sensitive workflows.",
      },
      {
        title: "Control circumvention",
        description:
          "Identify processes where controls can be bypassed through collusion or workflow weaknesses.",
      },
    ],

    principles: [
      {
        number: "01",
        title: "Think in scenarios",
        description:
          "Fraud risk becomes clearer when tied to plausible behaviors.",
      },
      {
        number: "02",
        title: "Combine prevention and detection",
        description:
          "Neither approach is sufficient alone.",
      },
      {
        number: "03",
        title: "Preserve investigation context",
        description:
          "Signals need evidence and business interpretation.",
      },
      {
        number: "04",
        title: "Learn from events",
        description:
          "Confirmed incidents should improve future controls.",
      },
    ],

    outcomes: [
      "Fraud scenario library",
      "Improved control visibility",
      "Structured detection priorities",
      "Clear investigation pathways",
      "Better behavioral context",
      "Continuous fraud-risk learning",
    ],

    closingTitle: "Strengthen trust",
    closingAccent: "without trusting blindly.",
    closingText:
      "Understand where fraud can emerge and build controls that make suspicious behavior easier to identify and address.",
  },

  analytics: {
    eyebrow: "RISK ANALYTICS",
    index: "05 / 11",

    heroLine1: "Turn risk data",
    heroLine2: "into decision",
    heroLine3: "intelligence.",

    intro:
      "Transform fragmented risk information into structured insight that helps leaders understand patterns, concentration, movement and priorities.",

    statement: "More risk data",
    statementAccent: "does not automatically mean more clarity.",

    philosophy:
      "Risk analytics should simplify decision-making without oversimplifying uncertainty. The objective is meaningful context, not dashboards for their own sake.",

    keywords: [
      "SIGNALS",
      "TRENDS",
      "CONTEXT",
      "METRICS",
      "SCENARIOS",
      "INSIGHT",
      "DECISIONS",
      "MOVEMENT",
    ],

    pillars: [
      {
        number: "01",
        label: "DATA",
        title: "Risk information model",
        description:
          "Structure fragmented risk information so it can be compared, analyzed and communicated consistently.",
      },
      {
        number: "02",
        label: "SIGNALS",
        title: "Meaningful indicators",
        description:
          "Identify metrics that reveal changes in exposure, control effectiveness or operating conditions.",
      },
      {
        number: "03",
        label: "ANALYSIS",
        title: "Pattern discovery",
        description:
          "Explore trends, relationships and concentrations that may not be obvious in isolated reports.",
      },
      {
        number: "04",
        label: "DECISION",
        title: "Actionable interpretation",
        description:
          "Translate analysis into context that supports prioritization and governance.",
      },
    ],

    lifecycle: [
      {
        number: "01",
        title: "Collect",
        description:
          "Bring relevant risk information together from trusted sources.",
      },
      {
        number: "02",
        title: "Normalize",
        description:
          "Create consistent definitions and structures.",
      },
      {
        number: "03",
        title: "Analyze",
        description:
          "Explore patterns, movement and relationships.",
      },
      {
        number: "04",
        title: "Interpret",
        description:
          "Connect analytical signals to business context.",
      },
      {
        number: "05",
        title: "Communicate",
        description:
          "Present information for the decisions different audiences need to make.",
      },
      {
        number: "06",
        title: "Refine",
        description:
          "Improve metrics as organizational understanding evolves.",
      },
    ],

    focus: [
      {
        title: "Risk movement",
        description:
          "Understand whether exposure is increasing, decreasing or changing shape.",
      },
      {
        title: "Concentration",
        description:
          "Identify clusters of dependency and correlated exposure.",
      },
      {
        title: "Leading indicators",
        description:
          "Look for signals that can provide context before major outcomes occur.",
      },
      {
        title: "Decision quality",
        description:
          "Design analytics around actions rather than visual complexity.",
      },
    ],

    principles: [
      {
        number: "01",
        title: "Measure with purpose",
        description:
          "Every metric should support a real information need.",
      },
      {
        number: "02",
        title: "Show uncertainty",
        description:
          "Precision should not be implied where evidence is limited.",
      },
      {
        number: "03",
        title: "Prioritize interpretation",
        description:
          "Numbers need context before they become insight.",
      },
      {
        number: "04",
        title: "Keep analytics adaptable",
        description:
          "Risk indicators should evolve with the environment.",
      },
    ],

    outcomes: [
      "Consistent risk information",
      "Improved trend visibility",
      "Clearer risk indicators",
      "Better concentration analysis",
      "Decision-focused reporting",
      "More contextual risk insight",
    ],

    closingTitle: "Make risk data",
    closingAccent: "mean something.",
    closingText:
      "Create analytics that help teams understand what is changing, why it matters and where attention belongs.",
  },

  continuity: {
    eyebrow: "BUSINESS CONTINUITY MANAGEMENT",
    index: "06 / 11",

    heroLine1: "Keep critical",
    heroLine2: "business services",
    heroLine3: "moving.",

    intro:
      "Build continuity around the services, people, technology, facilities and third parties the organization depends on most.",

    statement: "Resilience begins before",
    statementAccent: "disruption happens.",

    philosophy:
      "Business continuity management prepares the organization to sustain essential outcomes when normal operating assumptions no longer hold.",

    keywords: [
      "RESILIENCE",
      "RECOVERY",
      "SERVICES",
      "DEPENDENCIES",
      "DISRUPTION",
      "PEOPLE",
      "CONTINUITY",
      "READINESS",
    ],

    pillars: [
      {
        number: "01",
        label: "CRITICALITY",
        title: "Critical services",
        description:
          "Identify the business activities and outcomes that must be sustained or restored first.",
      },
      {
        number: "02",
        label: "DEPENDENCY",
        title: "Dependency mapping",
        description:
          "Understand the people, technology, facilities, information and suppliers supporting essential services.",
      },
      {
        number: "03",
        label: "RECOVERY",
        title: "Continuity strategies",
        description:
          "Define practical approaches for operating through disruption and restoring capability.",
      },
      {
        number: "04",
        label: "READINESS",
        title: "Exercise and improve",
        description:
          "Validate assumptions through exercises and use lessons to strengthen preparedness.",
      },
    ],

    lifecycle: [
      {
        number: "01",
        title: "Prioritize",
        description:
          "Determine which business services matter most.",
      },
      {
        number: "02",
        title: "Map",
        description:
          "Identify the dependencies supporting those services.",
      },
      {
        number: "03",
        title: "Analyze",
        description:
          "Understand disruption impacts and recovery requirements.",
      },
      {
        number: "04",
        title: "Plan",
        description:
          "Develop continuity and recovery strategies.",
      },
      {
        number: "05",
        title: "Exercise",
        description:
          "Test plans, decisions and coordination under realistic conditions.",
      },
      {
        number: "06",
        title: "Improve",
        description:
          "Update plans as dependencies and operating conditions change.",
      },
    ],

    focus: [
      {
        title: "Business impact",
        description:
          "Understand how disruption affects customers, operations and strategic obligations.",
      },
      {
        title: "Recovery priorities",
        description:
          "Establish the order in which critical capabilities should be restored.",
      },
      {
        title: "Dependency resilience",
        description:
          "Identify single points of failure and difficult-to-replace dependencies.",
      },
      {
        title: "Crisis coordination",
        description:
          "Clarify decision roles and communication pathways during disruption.",
      },
    ],

    principles: [
      {
        number: "01",
        title: "Protect outcomes, not documents",
        description:
          "A continuity plan is useful only if it supports real operational resilience.",
      },
      {
        number: "02",
        title: "Know dependencies",
        description:
          "Recovery fails when hidden dependencies are discovered too late.",
      },
      {
        number: "03",
        title: "Exercise assumptions",
        description:
          "Plans need validation under realistic conditions.",
      },
      {
        number: "04",
        title: "Keep continuity current",
        description:
          "Business services and dependencies continuously change.",
      },
    ],

    outcomes: [
      "Critical service visibility",
      "Mapped business dependencies",
      "Defined recovery priorities",
      "Improved continuity planning",
      "Stronger exercise readiness",
      "More resilient operations",
    ],

    closingTitle: "Prepare the business",
    closingAccent: "to keep moving.",
    closingText:
      "Build continuity around the services and dependencies that matter when normal operations are disrupted.",
  },

  financial: {
    eyebrow: "FINANCIAL RISK ASSESSMENT",
    index: "07 / 11",

    heroLine1: "Understand exposure",
    heroLine2: "behind financial",
    heroLine3: "decisions.",

    intro:
      "Evaluate financial uncertainty through structured scenarios, dependencies, concentrations and potential impacts on organizational objectives.",

    statement: "Financial exposure needs",
    statementAccent: "context before numbers.",

    philosophy:
      "Financial risk assessment creates a structured view of uncertainty so leadership can understand how different conditions could influence financial resilience.",

    keywords: [
      "EXPOSURE",
      "LIQUIDITY",
      "CAPITAL",
      "SCENARIOS",
      "CONCENTRATION",
      "IMPACT",
      "TOLERANCE",
      "RESILIENCE",
    ],

    pillars: [
      {
        number: "01",
        label: "EXPOSURE",
        title: "Financial risk landscape",
        description:
          "Identify sources of financial uncertainty and the business assumptions that influence them.",
      },
      {
        number: "02",
        label: "SCENARIO",
        title: "Impact exploration",
        description:
          "Consider how adverse conditions could affect financial performance and strategic flexibility.",
      },
      {
        number: "03",
        label: "CONCENTRATION",
        title: "Dependency analysis",
        description:
          "Identify areas where financial exposure is concentrated across customers, suppliers or business activities.",
      },
      {
        number: "04",
        label: "RESPONSE",
        title: "Decision support",
        description:
          "Connect assessment results to practical risk responses and governance decisions.",
      },
    ],

    lifecycle: [
      { number: "01", title: "Scope", description: "Define financial objectives and assessment boundaries." },
      { number: "02", title: "Identify", description: "Map sources of financial uncertainty." },
      { number: "03", title: "Scenario", description: "Explore plausible adverse conditions." },
      { number: "04", title: "Evaluate", description: "Assess potential financial consequences." },
      { number: "05", title: "Prioritize", description: "Focus on material exposures." },
      { number: "06", title: "Monitor", description: "Track changing assumptions and indicators." },
    ],

    focus: [
      { title: "Financial exposure", description: "Create a structured view of material financial uncertainty." },
      { title: "Concentration risk", description: "Reveal where financial dependence is disproportionately concentrated." },
      { title: "Scenario sensitivity", description: "Understand which assumptions materially change outcomes." },
      { title: "Risk tolerance", description: "Support decisions within defined organizational boundaries." },
    ],

    principles: [
      { number: "01", title: "Make assumptions explicit", description: "Assessment quality depends on transparent assumptions." },
      { number: "02", title: "Use scenarios thoughtfully", description: "Scenarios should support decisions rather than predict the future." },
      { number: "03", title: "Understand concentration", description: "Aggregate numbers can hide important dependencies." },
      { number: "04", title: "Refresh the view", description: "Financial conditions and assumptions change continuously." },
    ],

    outcomes: [
      "Structured financial exposure",
      "Improved scenario context",
      "Concentration visibility",
      "Clearer risk priorities",
      "Decision-ready assessment",
      "Continuous financial monitoring",
    ],

    closingTitle: "See financial uncertainty",
    closingAccent: "before making the decision.",
    closingText:
      "Build a structured assessment of financial exposure, concentration and changing business assumptions.",
  },

  operational: {
    eyebrow: "OPERATIONAL RISK MANAGEMENT",
    index: "08 / 11",

    heroLine1: "Strengthen the",
    heroLine2: "systems behind",
    heroLine3: "daily operations.",

    intro:
      "Understand how process, people, technology and external dependencies can affect the reliability of business operations.",

    statement: "Operational resilience is built",
    statementAccent: "inside everyday processes.",

    philosophy:
      "Operational risk management focuses attention on the conditions that can interrupt, degrade or undermine the processes the business relies on.",

    keywords: [
      "PROCESS",
      "PEOPLE",
      "SYSTEMS",
      "CONTROLS",
      "DEPENDENCY",
      "EVENTS",
      "RESILIENCE",
      "OPERATIONS",
    ],

    pillars: [
      { number: "01", label: "PROCESS", title: "Process risk", description: "Identify weaknesses, dependencies and failure conditions within important workflows." },
      { number: "02", label: "CONTROL", title: "Control effectiveness", description: "Understand whether operational controls work as intended in real conditions." },
      { number: "03", label: "EVENT", title: "Event learning", description: "Use incidents, exceptions and near misses to reveal systemic weaknesses." },
      { number: "04", label: "RESILIENCE", title: "Operational adaptation", description: "Strengthen the ability to continue or recover when disruption occurs." },
    ],

    lifecycle: [
      { number: "01", title: "Map", description: "Understand critical operational processes." },
      { number: "02", title: "Identify", description: "Find failure conditions and dependencies." },
      { number: "03", title: "Control", description: "Evaluate safeguards and operational checks." },
      { number: "04", title: "Observe", description: "Monitor indicators and operational events." },
      { number: "05", title: "Respond", description: "Address material operational weaknesses." },
      { number: "06", title: "Learn", description: "Improve processes using event experience." },
    ],

    focus: [
      { title: "Process failure", description: "Understand where workflows can break or produce unintended outcomes." },
      { title: "Human dependency", description: "Identify operations dependent on specialized people or manual intervention." },
      { title: "System dependency", description: "Map technology required to sustain essential processes." },
      { title: "Control reliability", description: "Assess whether operational controls remain effective over time." },
    ],

    principles: [
      { number: "01", title: "Understand the process", description: "Risk cannot be separated from how work actually happens." },
      { number: "02", title: "Learn from near misses", description: "Weak signals can reveal issues before larger failures." },
      { number: "03", title: "Design practical controls", description: "Controls must function within real operations." },
      { number: "04", title: "Build resilience", description: "Not every disruption can be prevented." },
    ],

    outcomes: [
      "Clear operational risk view",
      "Better process visibility",
      "Improved control context",
      "Structured event learning",
      "Dependency awareness",
      "Stronger operational resilience",
    ],

    closingTitle: "Make operations",
    closingAccent: "more resilient.",
    closingText:
      "Understand where operational failure can emerge and strengthen the processes the business relies on every day.",
  },

  technology: {
    eyebrow: "TECHNOLOGY RISK MANAGEMENT",
    index: "09 / 11",

    heroLine1: "Manage technology",
    heroLine2: "as business",
    heroLine3: "dependency.",

    intro:
      "Connect infrastructure, applications, architecture, data and technology operations to the business outcomes they support and the risks they introduce.",

    statement: "Technology risk is",
    statementAccent: "business risk expressed through systems.",

    philosophy:
      "Technology risk management provides context for decisions about reliability, security, architecture, modernization and technical debt.",

    keywords: [
      "SYSTEMS",
      "ARCHITECTURE",
      "RELIABILITY",
      "CHANGE",
      "DEPENDENCY",
      "DATA",
      "RESILIENCE",
      "TECHNOLOGY",
    ],

    pillars: [
      { number: "01", label: "LANDSCAPE", title: "Technology exposure", description: "Understand systems, platforms and services supporting important business capabilities." },
      { number: "02", label: "DEPENDENCY", title: "Critical technology", description: "Identify where business outcomes depend heavily on specific technical capabilities." },
      { number: "03", label: "CHANGE", title: "Transformation risk", description: "Assess uncertainty introduced through modernization, migration and technology change." },
      { number: "04", label: "RESILIENCE", title: "Technology continuity", description: "Strengthen the ability of technology services to withstand and recover from disruption." },
    ],

    lifecycle: [
      { number: "01", title: "Discover", description: "Map technology and business relationships." },
      { number: "02", title: "Classify", description: "Identify critical services and dependencies." },
      { number: "03", title: "Assess", description: "Evaluate technical and operational risk scenarios." },
      { number: "04", title: "Prioritize", description: "Focus remediation on business-relevant exposure." },
      { number: "05", title: "Govern", description: "Integrate risk into technology decisions." },
      { number: "06", title: "Monitor", description: "Track changing architecture and operating conditions." },
    ],

    focus: [
      { title: "Legacy exposure", description: "Understand risk created by aging or difficult-to-support technology." },
      { title: "Architecture risk", description: "Identify structural dependencies and failure concentration." },
      { title: "Change risk", description: "Consider risk introduced during major technology transformation." },
      { title: "Service resilience", description: "Connect technical reliability to business continuity." },
    ],

    principles: [
      { number: "01", title: "Connect systems to outcomes", description: "Technical risk becomes meaningful through business dependency." },
      { number: "02", title: "Include change", description: "Transformation can reduce old risks while introducing new ones." },
      { number: "03", title: "Consider technical debt", description: "Deferred engineering decisions can accumulate operational exposure." },
      { number: "04", title: "Manage continuously", description: "Technology environments evolve too quickly for static assessment." },
    ],

    outcomes: [
      "Technology risk visibility",
      "Critical dependency mapping",
      "Architecture risk context",
      "Better transformation governance",
      "Technical debt visibility",
      "Improved service resilience",
    ],

    closingTitle: "Make technology risk",
    closingAccent: "part of technology decisions.",
    closingText:
      "Connect systems, architecture and technical change to the business outcomes technology exists to support.",
  },

  regulatory: {
    eyebrow: "REGULATORY RISK MANAGEMENT",
    index: "10 / 11",

    heroLine1: "Turn obligations",
    heroLine2: "into manageable",
    heroLine3: "requirements.",

    intro:
      "Create structured visibility into regulatory obligations, ownership, control relationships and changing compliance expectations.",

    statement: "Compliance becomes easier",
    statementAccent: "when obligations become operational.",

    philosophy:
      "Regulatory risk management connects external obligations to internal processes, controls, ownership and evidence so change can be managed systematically.",

    keywords: [
      "OBLIGATIONS",
      "CONTROLS",
      "POLICY",
      "EVIDENCE",
      "CHANGE",
      "OWNERSHIP",
      "GOVERNANCE",
      "COMPLIANCE",
    ],

    pillars: [
      { number: "01", label: "OBLIGATION", title: "Requirement mapping", description: "Translate relevant obligations into structured internal requirements." },
      { number: "02", label: "OWNERSHIP", title: "Accountability", description: "Clarify who owns interpretation, implementation and evidence." },
      { number: "03", label: "CONTROL", title: "Control alignment", description: "Connect requirements to policies, processes and operating controls." },
      { number: "04", label: "CHANGE", title: "Regulatory change", description: "Track changing expectations and understand where internal practices need adjustment." },
    ],

    lifecycle: [
      { number: "01", title: "Identify", description: "Determine applicable obligations." },
      { number: "02", title: "Interpret", description: "Translate requirements into operational meaning." },
      { number: "03", title: "Map", description: "Connect requirements to controls and owners." },
      { number: "04", title: "Evidence", description: "Establish appropriate proof of implementation." },
      { number: "05", title: "Review", description: "Evaluate gaps and changing conditions." },
      { number: "06", title: "Update", description: "Adapt governance as requirements evolve." },
    ],

    focus: [
      { title: "Obligation inventory", description: "Maintain structured visibility into relevant regulatory requirements." },
      { title: "Control mapping", description: "Understand which internal controls address which obligations." },
      { title: "Evidence readiness", description: "Make supporting information easier to locate and maintain." },
      { title: "Regulatory change", description: "Assess the operational impact of new or changing requirements." },
    ],

    principles: [
      { number: "01", title: "Translate requirements", description: "Legal language needs operational interpretation." },
      { number: "02", title: "Assign accountability", description: "Requirements need clear internal ownership." },
      { number: "03", title: "Reuse controls intelligently", description: "One control may support multiple obligations." },
      { number: "04", title: "Monitor change", description: "Compliance expectations do not remain static." },
    ],

    outcomes: [
      "Structured obligation inventory",
      "Clear regulatory ownership",
      "Improved control mapping",
      "Better evidence readiness",
      "Change-impact visibility",
      "Consistent compliance governance",
    ],

    closingTitle: "Make compliance",
    closingAccent: "operational.",
    closingText:
      "Connect regulatory expectations with the controls, owners and evidence needed to manage them consistently.",
  },

  monitoring: {
    eyebrow: "RISK MONITORING & REPORTING",
    index: "11 / 11",

    heroLine1: "See risk",
    heroLine2: "as it",
    heroLine3: "changes.",

    intro:
      "Create a monitoring and reporting approach that focuses on meaningful movement, emerging conditions and decisions that require attention.",

    statement: "Risk reporting should explain",
    statementAccent: "what changed and why it matters.",

    philosophy:
      "Effective monitoring turns risk information into an ongoing decision process instead of a periodic collection of static reports.",

    keywords: [
      "MONITORING",
      "INDICATORS",
      "MOVEMENT",
      "REPORTING",
      "ESCALATION",
      "TRENDS",
      "DECISIONS",
      "VISIBILITY",
    ],

    pillars: [
      { number: "01", label: "INDICATORS", title: "Meaningful signals", description: "Define indicators that reveal material changes in risk or control conditions." },
      { number: "02", label: "MOVEMENT", title: "Risk trend context", description: "Explain whether exposure is increasing, decreasing or changing character." },
      { number: "03", label: "REPORTING", title: "Audience-specific insight", description: "Tailor risk communication to the decisions different stakeholders need to make." },
      { number: "04", label: "ESCALATION", title: "Attention pathways", description: "Establish when changing conditions require management or executive action." },
    ],

    lifecycle: [
      { number: "01", title: "Define", description: "Determine what information matters." },
      { number: "02", title: "Measure", description: "Collect consistent indicators." },
      { number: "03", title: "Compare", description: "Understand movement against context and thresholds." },
      { number: "04", title: "Interpret", description: "Explain what changes mean." },
      { number: "05", title: "Report", description: "Communicate information for action." },
      { number: "06", title: "Escalate", description: "Route material changes to appropriate decision-makers." },
    ],

    focus: [
      { title: "Key risk indicators", description: "Track signals linked to meaningful changes in exposure." },
      { title: "Trend interpretation", description: "Separate temporary variation from material movement." },
      { title: "Executive reporting", description: "Focus communication on decisions, priorities and exceptions." },
      { title: "Escalation logic", description: "Define when risk movement requires additional attention." },
    ],

    principles: [
      { number: "01", title: "Report for decisions", description: "Reporting should exist to support action." },
      { number: "02", title: "Explain movement", description: "Current status alone does not reveal direction." },
      { number: "03", title: "Reduce noise", description: "More indicators can make important signals harder to see." },
      { number: "04", title: "Adapt reporting", description: "Information needs change as risk conditions evolve." },
    ],

    outcomes: [
      "Clear risk indicators",
      "Improved trend visibility",
      "Decision-focused reporting",
      "Defined escalation pathways",
      "Better executive context",
      "Continuous risk awareness",
    ],

    closingTitle: "See what changed.",
    closingAccent: "Know what needs attention.",
    closingText:
      "Build monitoring and reporting around meaningful risk movement instead of static snapshots.",
  },
};

/* -------------------------------------------------------------------------- */
/* MOTION                                                                     */
/* -------------------------------------------------------------------------- */

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        borderColor: "rgba(167,139,250,.35)",
      }}
      className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2"
    >
      <motion.span
        animate={{
          opacity: [0.25, 1, 0.25],
          scale: [0.8, 1.25, 0.8],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_15px_rgba(167,139,250,.9)]"
      />

      <span className="font-mono text-[8px] tracking-[0.22em] text-white/35">
        {children}
      </span>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* BACKGROUND                                                                 */
/* -------------------------------------------------------------------------- */

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [-40, 80, -40],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[8%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#6d28d9]/[0.16] blur-[140px]"
      />

      <motion.div
        animate={{
          x: [70, -60, 70],
          y: [60, -70, 60],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[5%] top-[32%] h-[480px] w-[480px] rounded-full bg-[#8b5cf6]/[0.10] blur-[160px]"
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(167,139,250,.9) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 92%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 92%)",
        }}
      />

      {Array.from({ length: 18 }).map((_, index) => (
        <motion.span
          key={index}
          animate={{
            opacity: [0.08, 0.6, 0.08],
            scale: [0.6, 1.4, 0.6],
          }}
          transition={{
            duration: 3 + (index % 5),
            delay: index * 0.2,
            repeat: Infinity,
          }}
          className="absolute h-1 w-1 rounded-full bg-[#c4b5fd]"
          style={{
            left: `${6 + ((index * 17) % 90)}%`,
            top: `${8 + ((index * 23) % 80)}%`,
          }}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */

function Hero({ page }: { page: PageConfig }) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 800], [0, 110]);
  const opacity = useTransform(scrollY, [0, 650], [1, 0.15]);

  return (
    <section className="relative  overflow-hidden border-b border-white/[0.06] bg-black">
      <AmbientBackground />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto flex py-10 flex-col justify-center px-5  md:px-10 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between"
        >
          <Label>{page.eyebrow}</Label>

          <span className="hidden font-mono text-[8px] tracking-[0.25em] text-white/15 md:block ">
            {page.index}
          </span>
        </motion.div>

        <div className="mt-10">
          {[page.heroLine1, page.heroLine2, page.heroLine3].map(
            (line, index) => (
              <div key={line} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.1 + index * 0.11,
                    ease,
                  }}
                  className={`text-[52px] font-medium leading-[0.91] tracking-[-0.065em] sm:text-[68px] md:text-[88px] lg:text-[110px] ${
                    index === 2
                      ? "text-[#b9a5ef]/55"
                      : "text-white"
                  }`}
                >
                  {line}
                </motion.h1>
              </div>
            ),
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55,
            duration: 0.8,
          }}
          className="mt-12 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_520px]"
        >
          <div className="flex items-center gap-3">
            <CircleDot className="h-4.5 w-4.5 text-[#a78bfa]" />

            <span className="font-mono text-[12px] tracking-[0.2em] text-white">
              HYI.AI / FINANCE + RISK
            </span>
          </div>

          <p className="text-[18px] leading-7 text-white/[0.46]">
            {page.intro}
          </p>
        </motion.div>

        <motion.a
          href="#overview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{
            y: -5,
            borderColor: "rgba(167,139,250,.35)",
          }}
          className="mt-12 flex w-fit items-center gap-4 rounded-full border border-white/[0.09] px-5 py-3 text-[12px] text-white"
        >
          Explore risk approach
          <ArrowDown className="h-3 w-3" />
        </motion.a>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* MARQUEE                                                                    */
/* -------------------------------------------------------------------------- */

function Marquee({ words }: { words: string[] }) {
  return (
    <section className="overflow-hidden border-b border-white/[0.06] bg-[#030303]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max py-5"
      >
        {[...words, ...words].map((word, index) => (
          <div
            key={`${word}-${index}`}
            className="flex items-center gap-7 px-8"
          >
            <span className="font-mono text-[12px] tracking-[0.25em] text-white">
              {word}
            </span>

            <span className="h-2 w-2 rounded-full bg-[#8b5cf6]" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* STATEMENT                                                                  */
/* -------------------------------------------------------------------------- */

function Statement({ page }: { page: PageConfig }) {
  return (
    <section
      id="overview"
      className="relative overflow-hidden border-b border-white/[0.06] bg-black px-5  md:px-10 lg:px-20 py-10"
    >
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <Reveal>
          {/* <p className="font-mono text-[8px] tracking-[0.24em] text-[#a78bfa]/45">
            / POINT OF VIEW
          </p> */}

          <h2 className="mt-12 max-w-[1100px] text-[42px] font-medium leading-[1.03] tracking-[-0.055em] text-white md:text-[66px] lg:text-[82px]">
            {page.statement}
            <span className="block text-white/25">
              {page.statementAccent}
            </span>
          </h2>

          <div className="mt-16 grid border-t border-white/[0.08] pt-8 lg:grid-cols-2">
            <span className="font-mono text-[12px] tracking-[0.2em] text-white/80">
              RISK / CONTEXT / DECISION
            </span>

            <p className="mt-7 max-w-[580px] text-[18px] leading-7 text-white/[0.6] lg:mt-0">
              {page.philosophy}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PILLARS                                                                    */
/* -------------------------------------------------------------------------- */

function Pillars({ page }: { page: PageConfig }) {
  return (
    <section className="border-b border-white/[0.06] bg-[#030303] px-5 py-10 md:px-10 lg:px-20 ">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <Label>RISK FOUNDATIONS</Label>

          <h2 className="mt-8 max-w-[750px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[55px]">
            Structure uncertainty
            <span className="block text-white/25">
              before making decisions.
            </span>
          </h2>
        </Reveal>

        <div className="mt-10 grid border-l border-t border-white/[0.07] md:grid-cols-2">
          {page.pillars.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.07,
                duration: 0.7,
              }}
              whileHover={{
                y: -8,
                backgroundColor: "rgba(124,58,237,.04)",
              }}
              className="group relative min-h-[160px] overflow-hidden border-b border-r border-white/[0.07] p-7 md:p-9"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-[#7c3aed] via-[#c4b5fd] to-transparent"
              />

              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] text-white/75">
                  {item.number}
                </span>

                <span className="font-mono text-[12px] tracking-[0.2em] text-[#a78bfa]/45">
                  {item.label}
                </span>
              </div>

              <h3 className="mt-10 text-3xl  font-bold tracking-[-0.03em] text-white/75 transition-colors group-hover:text-white">
                {item.title}
              </h3>

              <p className="mt-5 max-w-[480px] text-[18px] leading-7 text-white/[0.34]">
                {item.description}
              </p>

              <motion.div
                whileHover={{ x: 5 }}
                className="absolute bottom-8 right-8"
              >
                <ArrowRight className="h-6 w-6 text-white/12 group-hover:text-[#a78bfa]" />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PROCESS                                                                    */
/* -------------------------------------------------------------------------- */

function Lifecycle({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-black px-5 py-10 md:px-10 lg:px-20">
      <div className="absolute right-[-150px] top-[100px] h-[450px] w-[450px] rounded-full bg-[#6d28d9]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <Reveal>
          <Label>RISK LIFECYCLE</Label>

          <h2 className="mt-5 text-[38px] font-medium tracking-[-0.05em] md:text-[55px]">
            A continuous process.
            <span className="block text-white/25">
              Not a one-time assessment.
            </span>
          </h2>
        </Reveal>

        <div className="mt-10">
          {page.lifecycle.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.055 }}
              whileHover={{
                x: 9,
                backgroundColor: "rgba(139,92,246,.025)",
              }}
              className="group grid gap-5 border-t border-white/[0.07] px-3 py-8 md:grid-cols-[80px_1fr_1.2fr_40px] md:items-center"
            >
              <span className="font-mono text-[12px] text-[#a78bfa]/40">
                {item.number}
              </span>

              <h3 className="text-3xl font-bold text-white/65 group-hover:text-white">
                {item.title}
              </h3>

              <p className="max-w-[520px] text-[18px] leading-6 text-white/[0.29]">
                {item.description}
              </p>

              <ChevronRight className="h-6 w-6 text-white/10 transition-all group-hover:translate-x-1 group-hover:text-[#a78bfa]" />
            </motion.article>
          ))}

          <div className="border-t border-white/[0.07]" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FOCUS                                                                      */
/* -------------------------------------------------------------------------- */

function FocusAreas({ page }: { page: PageConfig }) {
  return (
    <section className="border-b border-white/[0.06] bg-[#030303] px-5 py-10 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <Label>FOCUS AREAS</Label>

              <h2 className="mt-8 max-w-[450px] text-[38px] font-medium leading-[1.07] tracking-[-0.05em] md:text-[55px]">
                Focus on what
                <span className="block text-white/25">
                  changes decisions.
                </span>
              </h2>

              <p className="mt-6 max-w-[430px] text-[18px] leading-6 text-white/[0.28]">
                Risk programs become more useful when analysis is centered on
                the information decision-makers genuinely need.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2">
            {page.focus.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{
                  y: -8,
                  backgroundColor: "rgba(124,58,237,.04)",
                }}
                className="group min-h-[80px] border border-white/[0.07] p-7"
              >
                <span className="font-mono text-[12px] text-white/70">
                  0{index + 1}
                </span>

                <h3 className="mt-10 text-3xl font-bold text-white/65 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-[18px] leading-6 text-white/[0.28]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* TYPOGRAPHY BREAK                                                           */
/* -------------------------------------------------------------------------- */

// function TypographyBreak({ page }: { page: PageConfig }) {
//   return (
//     <section className="relative overflow-hidden border-b border-white/[0.06] bg-black py-28">
//       <motion.div
//         animate={{ x: ["5%", "-40%"] }}
//         transition={{
//           duration: 22,
//           repeat: Infinity,
//           repeatType: "reverse",
//           ease: "easeInOut",
//         }}
//         className="whitespace-nowrap text-[90px] font-medium leading-none tracking-[-0.07em] text-white/[0.035] md:text-[170px]"
//       >
//         {page.eyebrow} — {page.eyebrow} — {page.eyebrow}
//       </motion.div>

//       <div className="absolute inset-0 flex items-center justify-center">
//         <motion.div
//           whileHover={{ scale: 1.04 }}
//           className="rounded-full border border-[#8b5cf6]/20 bg-black/70 px-6 py-3 backdrop-blur-2xl"
//         >
//           <span className="font-mono text-[8px] tracking-[0.24em] text-[#c4b5fd]/45">
//             CONTEXT → PRIORITY → DECISION
//           </span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

/* -------------------------------------------------------------------------- */
/* PRINCIPLES                                                                 */
/* -------------------------------------------------------------------------- */

function Principles({ page }: { page: PageConfig }) {
  return (
    <section className="border-b border-white/[0.06] bg-[#030303] px-5 py-10 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="text-center">
          <Label>OPERATING PRINCIPLES</Label>

          <h2 className="mx-auto mt-8 max-w-[700px] text-[38px] font-medium leading-[1.07] tracking-[-0.05em] md:text-[55px]">
            Better risk management
            <span className="block text-white/25">
              starts with better habits.
            </span>
          </h2>
        </Reveal>

        <div className="mt-10">
          {page.principles.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{
                x: 8,
                backgroundColor: "rgba(139,92,246,.025)",
              }}
              className="grid gap-5 border-t border-white/[0.07] px-3 py-8 md:grid-cols-[80px_1fr_1.3fr]"
            >
              <span className="font-mono text-[12px] text-[#a78bfa]/70">
                {item.number}
              </span>

              <h3 className="text-3xl font-bold text-white/60">
                {item.title}
              </h3>

              <p className="text-[18px] leading-6 text-white/[0.6]">
                {item.description}
              </p>
            </motion.article>
          ))}

          <div className="border-t border-white/[0.07]" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* OUTCOMES                                                                   */
/* -------------------------------------------------------------------------- */

function Outcomes({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-black px-5 py-10 md:px-10 lg:px-20">
      <div className="absolute left-[-200px] top-1/2 h-[450px] w-[450px] rounded-full bg-[#7c3aed]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <Reveal>
          <Label>BUSINESS OUTCOMES</Label>

          <h2 className="mt-8 max-w-[680px] text-[38px] font-medium leading-[1.07] tracking-[-0.05em] md:text-[55px]">
            Turn risk understanding
            <span className="block text-white/25">
              into practical capability.
            </span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {page.outcomes.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.055 }}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(124,58,237,.055)",
              }}
              className="group flex min-h-[155px] items-end justify-between bg-black p-6"
            >
              <div>
                <span className="font-mono text-[12px] text-white/70">
                  0{index + 1}
                </span>

                <p className="mt-8 text-[22px] text-white/70 group-hover:text-white/75">
                  {item}
                </p>
              </div>

              <CheckCircle2 className="h-4.5 w-4.5 text-[#a78bfa]/70" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CTA                                                                        */
/* -------------------------------------------------------------------------- */

function FinalCTA({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10 lg:px-20">
      <AmbientBackground />

      <div className="relative mx-auto max-w-[950px] text-center">
        <Reveal>
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(139,92,246,0)",
                "0 0 80px rgba(139,92,246,.15)",
                "0 0 0 rgba(139,92,246,0)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            whileHover={{
              rotate: 8,
              scale: 1.1,
            }}
            className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04] backdrop-blur-2xl"
          >
            <ShieldCheck className="h-5 w-5 text-[#c4b5fd]/55" />
          </motion.div>

          <Label>{page.eyebrow}</Label>

          <h2 className="mt-5 text-[43px] font-medium leading-[1.03] tracking-[-0.055em] text-white md:text-[55px]">
            {page.closingTitle}
            <span className="block text-[#b8a4ec]/45">
              {page.closingAccent}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[18px] leading-7 text-white/[0.6]">
            {page.closingText}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <motion.a
              href="/contact"
              whileHover={{
                y: -5,
                scale: 1.04,
                boxShadow: "0 20px 70px rgba(139,92,246,.20)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[16px] font-bold text-black"
            >
              Talk to HYI

              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#overview"
              whileHover={{
                y: -5,
                borderColor: "rgba(167,139,250,.35)",
              }}
              className="inline-flex items-center gap-3 rounded-full border border-white/[0.1] px-7 py-3.5 text-[16px] text-white/45 font-bold"
            >
              Explore approach

              <ChevronRight className="h-3.5 w-3.5" />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN                                                                       */
/* -------------------------------------------------------------------------- */

export default function FinanceRiskClient({
  pageKey,
}: {
  pageKey: RiskPageKey;
}) {
  const page = pages[pageKey];

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="relative overflow-x-hidden bg-black text-white">
      <motion.div
        style={{
          scaleX: progress,
        }}
        className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[#8b5cf6]"
      />

      <Hero page={page} />

      <Marquee words={page.keywords} />

      <Statement page={page} />

      <Pillars page={page} />

      <Lifecycle page={page} />

      <FocusAreas page={page} />

      {/* <TypographyBreak page={page} /> */}

      <Principles page={page} />

      <Outcomes page={page} />

      <FinalCTA page={page} />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(139, 92, 246, 0.4);
          color: #ffffff;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}