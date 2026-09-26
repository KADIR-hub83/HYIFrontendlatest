"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Eye,
  FileText,
  Layers3,
  RefreshCcw,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */

export type CompliancePageKey =
  | "iso27001"
  | "soc2"
  | "gdpr"
  | "pci"
  | "hipaa"
  | "nist"
  | "cis"
  | "governance"
  | "assessment"
  | "gap"
  | "audit"
  | "policy";

type PageConfig = {
  number: string;
  eyebrow: string;

  heroLine1: string;
  heroLine2: string;
  heroLine3: string;

  description: string;

  ticker: string[];

  statementTitle: string;
  statementText: string;

  pillars: {
    code: string;
    title: string;
    text: string;
  }[];

  framework: {
    number: string;
    title: string;
    text: string;
  }[];

  evidence: {
    title: string;
    text: string;
  }[];

  questions: {
    question: string;
    answer: string;
  }[];

  outcomes: string[];

  closingTitle: string;
  closingMuted: string;
  closingText: string;
};

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

const pages: Record<CompliancePageKey, PageConfig> = {
  iso27001: {
    number: "01 / 12",
    eyebrow: "ISO 27001 COMPLIANCE",

    heroLine1: "Build security",
    heroLine2: "around a managed",
    heroLine3: "system of control.",

    description:
      "HYI.AI helps organizations structure information security governance around ISO/IEC 27001 principles by connecting scope, risk treatment, control ownership, evidence and continual improvement into a manageable operating model.",

    ticker: [
      "ISMS",
      "RISK TREATMENT",
      "CONTROL OWNERSHIP",
      "EVIDENCE",
      "GOVERNANCE",
      "ASSURANCE",
      "IMPROVEMENT",
    ],

    statementTitle:
      "ISO 27001 is not a document collection exercise.",

    statementText:
      "A useful information security management system connects business context, risk decisions, responsibilities, controls and evidence. Documentation supports the system, but governance and repeatable operation make it sustainable.",

    pillars: [
      {
        code: "SCOPE",
        title: "ISMS boundary",
        text: "Define the organizational, technical and operational boundaries covered by the information security management system.",
      },
      {
        code: "RISK",
        title: "Risk treatment",
        text: "Connect identified information-security risks with intentional treatment decisions and accountable control ownership.",
      },
      {
        code: "CONTROL",
        title: "Control governance",
        text: "Establish responsibilities, operating expectations and evidence requirements for applicable security controls.",
      },
      {
        code: "IMPROVE",
        title: "Continual improvement",
        text: "Use reviews, findings and operational learning to improve the management system over time.",
      },
    ],

    framework: [
      {
        number: "01",
        title: "Understand context",
        text: "Establish organizational context, interested parties and information-security objectives.",
      },
      {
        number: "02",
        title: "Define scope",
        text: "Document the boundaries and applicability of the information security management system.",
      },
      {
        number: "03",
        title: "Assess risk",
        text: "Identify and evaluate information-security risks using a defined methodology.",
      },
      {
        number: "04",
        title: "Treat risk",
        text: "Determine appropriate treatment options and relevant control requirements.",
      },
      {
        number: "05",
        title: "Operate controls",
        text: "Assign ownership and integrate control operation into business processes.",
      },
      {
        number: "06",
        title: "Review evidence",
        text: "Evaluate whether the management system operates as intended.",
      },
    ],

    evidence: [
      {
        title: "ISMS scope",
        text: "Documented boundaries and organizational applicability.",
      },
      {
        title: "Risk register",
        text: "Structured record of information-security risks and treatment decisions.",
      },
      {
        title: "Control evidence",
        text: "Records supporting operation of relevant security controls.",
      },
      {
        title: "Management review",
        text: "Evidence of governance oversight and continual improvement.",
      },
    ],

    questions: [
      {
        question: "Is the ISMS scope explicit?",
        answer:
          "A clear boundary helps teams understand which systems, processes and organizational units are included.",
      },
      {
        question: "Can risk decisions be explained?",
        answer:
          "Treatment decisions should connect identified risks with accountable action.",
      },
      {
        question: "Can control operation be demonstrated?",
        answer:
          "Evidence should reflect how controls operate in practice rather than exist only for review periods.",
      },
    ],

    outcomes: [
      "Defined ISMS boundaries",
      "Structured risk treatment",
      "Clear control ownership",
      "Traceable security evidence",
      "Governance visibility",
      "Continual improvement process",
    ],

    closingTitle: "Build an ISMS",
    closingMuted: "that can be operated.",
    closingText:
      "Create a sustainable information-security management system built around accountability, evidence and improvement.",
  },

  soc2: {
    number: "02 / 12",
    eyebrow: "SOC 2 COMPLIANCE",

    heroLine1: "Turn controls",
    heroLine2: "into continuous",
    heroLine3: "assurance.",

    description:
      "Structure security controls, responsibilities and evidence around the Trust Services Criteria relevant to your environment while improving operational readiness for independent examination.",

    ticker: [
      "SECURITY",
      "AVAILABILITY",
      "CONFIDENTIALITY",
      "PROCESSING",
      "PRIVACY",
      "EVIDENCE",
      "ASSURANCE",
    ],

    statementTitle:
      "Audit readiness starts long before the audit window.",

    statementText:
      "Strong SOC 2 preparation depends on controls operating consistently throughout the relevant period. Evidence collection should reflect real processes, accountable owners and repeatable security practices.",

    pillars: [
      {
        code: "SCOPE",
        title: "System definition",
        text: "Establish the services, infrastructure, people and processes relevant to the examination boundary.",
      },
      {
        code: "CRITERIA",
        title: "Criteria alignment",
        text: "Connect relevant Trust Services Criteria with organizational control activities.",
      },
      {
        code: "OWNER",
        title: "Control accountability",
        text: "Assign clear responsibility for operating, reviewing and evidencing controls.",
      },
      {
        code: "PROOF",
        title: "Evidence readiness",
        text: "Maintain organized evidence that demonstrates control operation over the applicable period.",
      },
    ],

    framework: [
      {
        number: "01",
        title: "Define system",
        text: "Clarify services, infrastructure, boundaries and supporting processes.",
      },
      {
        number: "02",
        title: "Map criteria",
        text: "Identify Trust Services Criteria relevant to the engagement.",
      },
      {
        number: "03",
        title: "Map controls",
        text: "Connect internal controls with applicable assurance requirements.",
      },
      {
        number: "04",
        title: "Assign owners",
        text: "Establish accountability for operation and evidence.",
      },
      {
        number: "05",
        title: "Collect evidence",
        text: "Maintain records demonstrating repeatable control operation.",
      },
      {
        number: "06",
        title: "Review readiness",
        text: "Identify gaps before formal examination activities.",
      },
    ],

    evidence: [
      {
        title: "Access governance",
        text: "Evidence supporting identity and access control operation.",
      },
      {
        title: "Change records",
        text: "Traceable records supporting controlled system changes.",
      },
      {
        title: "Security operations",
        text: "Records demonstrating relevant monitoring and incident processes.",
      },
      {
        title: "Vendor oversight",
        text: "Evidence of relevant third-party governance activities.",
      },
    ],

    questions: [
      {
        question: "Does each control have an owner?",
        answer:
          "Clear ownership helps prevent evidence gaps and inconsistent operation.",
      },
      {
        question: "Does evidence cover the required period?",
        answer:
          "Point-in-time screenshots alone may not demonstrate consistent operation across an examination period.",
      },
      {
        question: "Do written processes match actual practice?",
        answer:
          "Documentation should accurately reflect how teams operate security controls.",
      },
    ],

    outcomes: [
      "Clear examination scope",
      "Criteria-to-control mapping",
      "Defined control ownership",
      "Organized evidence",
      "Readiness visibility",
      "Repeatable assurance processes",
    ],

    closingTitle: "Make assurance",
    closingMuted: "part of operations.",
    closingText:
      "Build control and evidence processes that remain useful beyond a single examination cycle.",
  },

  gdpr: {
    number: "03 / 12",
    eyebrow: "GDPR COMPLIANCE",

    heroLine1: "Understand data.",
    heroLine2: "Govern its use.",
    heroLine3: "Protect its lifecycle.",

    description:
      "Support GDPR-aligned security and governance by improving visibility into personal-data processing, responsibilities, technical safeguards and operational processes.",

    ticker: [
      "PERSONAL DATA",
      "PROCESSING",
      "PURPOSE",
      "ACCESS",
      "RETENTION",
      "SECURITY",
      "ACCOUNTABILITY",
    ],

    statementTitle:
      "Data protection requires understanding how information moves.",

    statementText:
      "Organizations need practical visibility into what personal data is processed, why it is processed, where it moves, who can access it and how security and governance responsibilities are maintained.",

    pillars: [
      {
        code: "DATA",
        title: "Processing visibility",
        text: "Improve understanding of personal-data processing across systems and business workflows.",
      },
      {
        code: "ACCESS",
        title: "Access governance",
        text: "Align access to personal information with legitimate organizational responsibilities.",
      },
      {
        code: "LIFE",
        title: "Lifecycle controls",
        text: "Connect collection, use, storage and retention with defined governance expectations.",
      },
      {
        code: "SECURE",
        title: "Security safeguards",
        text: "Evaluate technical and organizational measures supporting protection of personal information.",
      },
    ],

    framework: [
      {
        number: "01",
        title: "Discover",
        text: "Identify relevant personal-data processing activities.",
      },
      {
        number: "02",
        title: "Classify",
        text: "Understand data categories and sensitivity.",
      },
      {
        number: "03",
        title: "Map",
        text: "Document processing relationships and movement.",
      },
      {
        number: "04",
        title: "Govern",
        text: "Establish ownership and processing expectations.",
      },
      {
        number: "05",
        title: "Protect",
        text: "Apply appropriate security safeguards.",
      },
      {
        number: "06",
        title: "Review",
        text: "Maintain accountability as systems and processing change.",
      },
    ],

    evidence: [
      {
        title: "Processing records",
        text: "Structured information describing relevant processing activities.",
      },
      {
        title: "Access records",
        text: "Evidence supporting controlled access to personal information.",
      },
      {
        title: "Retention governance",
        text: "Defined expectations around information lifecycle.",
      },
      {
        title: "Security measures",
        text: "Evidence of technical and organizational safeguards.",
      },
    ],

    questions: [
      {
        question: "Where does personal data exist?",
        answer:
          "Visibility into processing locations is foundational to effective governance.",
      },
      {
        question: "Why is the information being processed?",
        answer:
          "Processing should be understood within a clear business and governance context.",
      },
      {
        question: "Who can access the information?",
        answer:
          "Access should align with defined responsibilities and appropriate safeguards.",
      },
    ],

    outcomes: [
      "Improved data visibility",
      "Processing accountability",
      "Access governance",
      "Lifecycle awareness",
      "Security control alignment",
      "Structured compliance evidence",
    ],

    closingTitle: "Make data protection",
    closingMuted: "operational.",
    closingText:
      "Connect privacy obligations with practical security, governance and information-lifecycle processes.",
  },

  pci: {
    number: "04 / 12",
    eyebrow: "PCI DSS COMPLIANCE",

    heroLine1: "Reduce exposure",
    heroLine2: "around payment",
    heroLine3: "environments.",

    description:
      "Strengthen payment-security governance by clarifying scope, understanding cardholder-data flows, validating technical safeguards and maintaining evidence around applicable PCI DSS requirements.",

    ticker: [
      "PAYMENT DATA",
      "CDE",
      "SEGMENTATION",
      "ACCESS",
      "LOGGING",
      "VULNERABILITY",
      "ASSURANCE",
    ],

    statementTitle:
      "Payment security begins with accurate scope.",

    statementText:
      "Understanding where account data is stored, processed or transmitted—and which connected systems can affect that environment—is essential before controls can be evaluated effectively.",

    pillars: [
      {
        code: "SCOPE",
        title: "CDE visibility",
        text: "Clarify systems, applications and connections relevant to the cardholder data environment.",
      },
      {
        code: "BOUNDARY",
        title: "Segmentation context",
        text: "Understand boundaries and connectivity that may influence compliance scope.",
      },
      {
        code: "ACCESS",
        title: "Access protection",
        text: "Review identity and privilege controls protecting payment-related systems.",
      },
      {
        code: "MONITOR",
        title: "Security monitoring",
        text: "Maintain visibility and evidence around relevant security events and control operation.",
      },
    ],

    framework: [
      {
        number: "01",
        title: "Map data flow",
        text: "Understand relevant payment-data movement.",
      },
      {
        number: "02",
        title: "Establish scope",
        text: "Identify systems and dependencies affecting the CDE.",
      },
      {
        number: "03",
        title: "Map requirements",
        text: "Connect applicable requirements to controls.",
      },
      {
        number: "04",
        title: "Validate controls",
        text: "Evaluate implementation and operation.",
      },
      {
        number: "05",
        title: "Organize evidence",
        text: "Maintain traceable compliance records.",
      },
      {
        number: "06",
        title: "Maintain",
        text: "Review scope and controls as environments change.",
      },
    ],

    evidence: [
      {
        title: "Data-flow documentation",
        text: "Payment-data movement and processing context.",
      },
      {
        title: "Network boundaries",
        text: "Documentation supporting segmentation and scope.",
      },
      {
        title: "Access evidence",
        text: "Records supporting relevant identity controls.",
      },
      {
        title: "Security records",
        text: "Operational evidence supporting applicable safeguards.",
      },
    ],

    questions: [
      {
        question: "Is the payment environment accurately scoped?",
        answer:
          "Incomplete scope can leave relevant systems and dependencies outside compliance activities.",
      },
      {
        question: "Are boundaries understood?",
        answer:
          "Connectivity and segmentation can materially affect the compliance environment.",
      },
      {
        question: "Can safeguards be demonstrated?",
        answer:
          "Controls should have evidence supporting their practical operation.",
      },
    ],

    outcomes: [
      "Clear payment-security scope",
      "Data-flow visibility",
      "Segmentation understanding",
      "Control traceability",
      "Evidence readiness",
      "Sustainable compliance process",
    ],

    closingTitle: "Protect payment systems",
    closingMuted: "with clear boundaries.",
    closingText:
      "Create a practical compliance program around payment-data visibility, control ownership and evidence.",
  },

  hipaa: {
    number: "05 / 12",
    eyebrow: "HIPAA SECURITY",

    heroLine1: "Protect health",
    heroLine2: "information through",
    heroLine3: "structured safeguards.",

    description:
      "Support security governance around electronic protected health information by connecting administrative, technical and physical safeguard responsibilities with practical evidence and risk management.",

    ticker: [
      "EPHI",
      "SAFEGUARDS",
      "ACCESS",
      "RISK",
      "AUDIT",
      "INTEGRITY",
      "ACCOUNTABILITY",
    ],

    statementTitle:
      "Sensitive health information requires layered protection.",

    statementText:
      "Security depends on understanding where electronic protected health information exists, who can access it, which systems support it and how safeguards are governed across the organization.",

    pillars: [
      {
        code: "RISK",
        title: "Risk analysis",
        text: "Evaluate security risks affecting systems and processes handling relevant health information.",
      },
      {
        code: "ACCESS",
        title: "Access governance",
        text: "Align access with authorized responsibilities and appropriate technical controls.",
      },
      {
        code: "SYSTEM",
        title: "Technical safeguards",
        text: "Review relevant mechanisms protecting information confidentiality, integrity and availability.",
      },
      {
        code: "GOVERN",
        title: "Administrative safeguards",
        text: "Connect policy, responsibility and operational processes with security expectations.",
      },
    ],

    framework: [
      { number: "01", title: "Identify", text: "Understand relevant information and systems." },
      { number: "02", title: "Assess", text: "Evaluate security risks and safeguards." },
      { number: "03", title: "Assign", text: "Establish responsible control owners." },
      { number: "04", title: "Protect", text: "Operate relevant safeguards." },
      { number: "05", title: "Evidence", text: "Maintain records supporting operation." },
      { number: "06", title: "Review", text: "Improve safeguards as environments change." },
    ],

    evidence: [
      { title: "Risk analysis", text: "Structured assessment of relevant security risks." },
      { title: "Access governance", text: "Records supporting authorized access management." },
      { title: "Security procedures", text: "Documented operational safeguard processes." },
      { title: "Review records", text: "Evidence supporting governance and improvement." },
    ],

    questions: [
      {
        question: "Where is relevant health information handled?",
        answer: "Asset and information visibility helps establish meaningful security scope.",
      },
      {
        question: "Is access appropriately controlled?",
        answer: "Access should correspond to authorized organizational responsibilities.",
      },
      {
        question: "Are safeguards reviewed over time?",
        answer: "Security processes should evolve as technology and risk change.",
      },
    ],

    outcomes: [
      "ePHI visibility",
      "Risk-based safeguards",
      "Access accountability",
      "Security documentation",
      "Governance evidence",
      "Continuous review",
    ],

    closingTitle: "Protect sensitive information",
    closingMuted: "with accountable safeguards.",
    closingText:
      "Connect health-information security responsibilities with practical controls and evidence.",
  },

  nist: {
    number: "06 / 12",
    eyebrow: "NIST CYBERSECURITY FRAMEWORK",

    heroLine1: "Turn cyber risk",
    heroLine2: "into structured",
    heroLine3: "security outcomes.",

    description:
      "Use the NIST Cybersecurity Framework as a structured way to understand current cybersecurity practices, define target outcomes and coordinate improvement across the organization.",

    ticker: [
      "GOVERN",
      "IDENTIFY",
      "PROTECT",
      "DETECT",
      "RESPOND",
      "RECOVER",
      "IMPROVE",
    ],

    statementTitle:
      "A framework creates a common language for cyber risk.",

    statementText:
      "NIST CSF can help technical teams, business leaders and risk stakeholders organize cybersecurity outcomes around shared priorities without prescribing a single technology architecture.",

    pillars: [
      {
        code: "GOVERN",
        title: "Govern",
        text: "Establish cybersecurity strategy, expectations, responsibilities and oversight.",
      },
      {
        code: "IDENTIFY",
        title: "Identify",
        text: "Understand assets, dependencies, risks and relevant organizational context.",
      },
      {
        code: "PROTECT",
        title: "Protect",
        text: "Implement safeguards supporting secure delivery of critical services.",
      },
      {
        code: "OPERATE",
        title: "Detect, respond, recover",
        text: "Build capabilities for security visibility, incident action and operational restoration.",
      },
    ],

    framework: [
      { number: "01", title: "Profile", text: "Understand current cybersecurity outcomes." },
      { number: "02", title: "Context", text: "Connect outcomes with business priorities." },
      { number: "03", title: "Target", text: "Define desired future cybersecurity outcomes." },
      { number: "04", title: "Compare", text: "Identify meaningful improvement areas." },
      { number: "05", title: "Prioritize", text: "Sequence improvements according to risk." },
      { number: "06", title: "Measure", text: "Review progress and evolving priorities." },
    ],

    evidence: [
      { title: "Current profile", text: "Documented view of existing cybersecurity outcomes." },
      { title: "Target profile", text: "Desired future-state security outcomes." },
      { title: "Gap register", text: "Structured differences between current and target states." },
      { title: "Improvement roadmap", text: "Prioritized actions aligned with risk." },
    ],

    questions: [
      {
        question: "What cybersecurity outcomes exist today?",
        answer: "A current profile creates a baseline for improvement discussions.",
      },
      {
        question: "What outcomes matter most?",
        answer: "Priorities should reflect business context, risk and critical services.",
      },
      {
        question: "How will progress be measured?",
        answer: "Defined outcomes make cybersecurity improvement easier to communicate.",
      },
    ],

    outcomes: [
      "Common cybersecurity language",
      "Current-state visibility",
      "Target-state definition",
      "Risk-based priorities",
      "Improvement roadmap",
      "Governance alignment",
    ],

    closingTitle: "Create structure",
    closingMuted: "around cyber risk.",
    closingText:
      "Use a common cybersecurity framework to connect risk, outcomes and improvement.",
  },

  cis: {
    number: "07 / 12",
    eyebrow: "CIS CONTROLS",

    heroLine1: "Prioritize",
    heroLine2: "practical security",
    heroLine3: "safeguards.",

    description:
      "Use CIS Controls as a practical reference for organizing cybersecurity safeguards, understanding implementation priorities and improving foundational security hygiene.",

    ticker: [
      "ASSETS",
      "SOFTWARE",
      "IDENTITY",
      "CONFIGURATION",
      "LOGGING",
      "RECOVERY",
      "DEFENSE",
    ],

    statementTitle:
      "Security improvement becomes easier when priorities are explicit.",

    statementText:
      "A structured safeguard approach can help organizations focus resources on practical security outcomes while maintaining visibility into ownership, implementation and evidence.",

    pillars: [
      {
        code: "ASSET",
        title: "Asset visibility",
        text: "Improve understanding of enterprise assets and software supporting business operations.",
      },
      {
        code: "IDENTITY",
        title: "Access safeguards",
        text: "Strengthen account, authentication and privilege governance.",
      },
      {
        code: "CONFIG",
        title: "Secure configuration",
        text: "Establish controlled configuration expectations across relevant technology.",
      },
      {
        code: "MONITOR",
        title: "Security visibility",
        text: "Maintain logging, monitoring and response capabilities appropriate to risk.",
      },
    ],

    framework: [
      { number: "01", title: "Inventory", text: "Understand assets and software." },
      { number: "02", title: "Prioritize", text: "Identify safeguards relevant to risk." },
      { number: "03", title: "Assign", text: "Establish responsible ownership." },
      { number: "04", title: "Implement", text: "Integrate safeguards into operations." },
      { number: "05", title: "Validate", text: "Review implementation and evidence." },
      { number: "06", title: "Improve", text: "Address gaps through structured action." },
    ],

    evidence: [
      { title: "Asset inventory", text: "Current understanding of managed technology assets." },
      { title: "Control ownership", text: "Defined responsibility for relevant safeguards." },
      { title: "Implementation evidence", text: "Records demonstrating safeguard operation." },
      { title: "Improvement register", text: "Tracked gaps and remediation activities." },
    ],

    questions: [
      {
        question: "Do we know what must be protected?",
        answer: "Asset and software visibility supports effective security prioritization.",
      },
      {
        question: "Who owns each safeguard?",
        answer: "Operational responsibility makes control implementation sustainable.",
      },
      {
        question: "Which gaps matter first?",
        answer: "Prioritization should consider organizational risk and implementation context.",
      },
    ],

    outcomes: [
      "Asset visibility",
      "Safeguard prioritization",
      "Control accountability",
      "Implementation tracking",
      "Evidence visibility",
      "Security improvement roadmap",
    ],

    closingTitle: "Prioritize safeguards",
    closingMuted: "that improve resilience.",
    closingText:
      "Turn security-control guidance into accountable and measurable operational improvement.",
  },

  governance: {
    number: "08 / 12",
    eyebrow: "SECURITY GOVERNANCE",

    heroLine1: "Give security",
    heroLine2: "clear ownership",
    heroLine3: "and direction.",

    description:
      "Establish decision structures, responsibilities, policies and reporting practices that connect cybersecurity activities with organizational priorities and risk accountability.",

    ticker: [
      "OWNERSHIP",
      "DECISIONS",
      "POLICY",
      "OVERSIGHT",
      "ACCOUNTABILITY",
      "REPORTING",
      "STRATEGY",
    ],

    statementTitle:
      "Security governance defines how decisions get made.",

    statementText:
      "Controls and technologies are more effective when responsibilities, escalation paths, risk authority and reporting expectations are explicit across the organization.",

    pillars: [
      {
        code: "ROLE",
        title: "Decision ownership",
        text: "Define who owns cybersecurity decisions and where accountability sits.",
      },
      {
        code: "POLICY",
        title: "Policy structure",
        text: "Create a coherent hierarchy connecting expectations with operational standards.",
      },
      {
        code: "RISK",
        title: "Risk authority",
        text: "Clarify how security risks are accepted, escalated and monitored.",
      },
      {
        code: "REPORT",
        title: "Leadership visibility",
        text: "Provide useful cybersecurity information for governance and oversight.",
      },
    ],

    framework: [
      { number: "01", title: "Define", text: "Establish governance objectives." },
      { number: "02", title: "Assign", text: "Clarify roles and decision authority." },
      { number: "03", title: "Structure", text: "Organize policy and control expectations." },
      { number: "04", title: "Operate", text: "Integrate governance into security processes." },
      { number: "05", title: "Report", text: "Provide relevant oversight information." },
      { number: "06", title: "Review", text: "Adapt governance as risk and business change." },
    ],

    evidence: [
      { title: "Governance charter", text: "Defined security decision and oversight structure." },
      { title: "Responsibility matrix", text: "Documented ownership and accountability." },
      { title: "Policy hierarchy", text: "Structured security policy framework." },
      { title: "Risk reporting", text: "Relevant security information for leadership oversight." },
    ],

    questions: [
      {
        question: "Who owns the security decision?",
        answer: "Ambiguous authority can delay action and weaken accountability.",
      },
      {
        question: "How are risks escalated?",
        answer: "Governance should define decision paths for material cybersecurity risks.",
      },
      {
        question: "What does leadership need to know?",
        answer: "Reporting should support decisions rather than simply increase metric volume.",
      },
    ],

    outcomes: [
      "Clear security accountability",
      "Defined decision authority",
      "Structured policy hierarchy",
      "Risk escalation paths",
      "Leadership visibility",
      "Governance continuity",
    ],

    closingTitle: "Make security",
    closingMuted: "accountable.",
    closingText:
      "Build governance structures that connect security decisions with business responsibility.",
  },

  assessment: {
    number: "09 / 12",
    eyebrow: "RISK & COMPLIANCE ASSESSMENTS",

    heroLine1: "Understand",
    heroLine2: "where control",
    heroLine3: "meets risk.",

    description:
      "Evaluate security controls, compliance requirements and operational practices through a structured assessment that distinguishes evidence, observations, gaps and improvement priorities.",

    ticker: [
      "SCOPE",
      "REQUIREMENTS",
      "CONTROLS",
      "EVIDENCE",
      "RISK",
      "FINDINGS",
      "PRIORITY",
    ],

    statementTitle:
      "Assessment should explain more than pass or fail.",

    statementText:
      "Useful assessments show what was reviewed, what evidence exists, where uncertainty remains, how gaps affect risk and which improvements deserve attention.",

    pillars: [
      {
        code: "SCOPE",
        title: "Assessment boundary",
        text: "Establish systems, processes and requirements included in the review.",
      },
      {
        code: "EVIDENCE",
        title: "Evidence review",
        text: "Evaluate documentation and operational records supporting control implementation.",
      },
      {
        code: "RISK",
        title: "Risk context",
        text: "Interpret findings according to organizational impact and exposure.",
      },
      {
        code: "ACTION",
        title: "Improvement planning",
        text: "Translate observations into prioritized and accountable remediation.",
      },
    ],

    framework: [
      { number: "01", title: "Scope", text: "Define assessment objectives and boundaries." },
      { number: "02", title: "Map", text: "Identify relevant requirements and controls." },
      { number: "03", title: "Collect", text: "Gather supporting evidence." },
      { number: "04", title: "Evaluate", text: "Review implementation and operation." },
      { number: "05", title: "Prioritize", text: "Interpret findings through risk context." },
      { number: "06", title: "Plan", text: "Create actionable improvement activities." },
    ],

    evidence: [
      { title: "Scope record", text: "Documented assessment boundaries." },
      { title: "Evidence register", text: "Traceable review material and supporting records." },
      { title: "Findings register", text: "Structured observations and gaps." },
      { title: "Remediation plan", text: "Prioritized improvement activities." },
    ],

    questions: [
      {
        question: "What exactly was assessed?",
        answer: "Explicit scope prevents ambiguity in assessment conclusions.",
      },
      {
        question: "What evidence supports the conclusion?",
        answer: "Findings should be traceable to observable evidence.",
      },
      {
        question: "Which gaps matter most?",
        answer: "Risk context helps separate urgent improvements from lower-priority work.",
      },
    ],

    outcomes: [
      "Defined assessment scope",
      "Evidence traceability",
      "Control visibility",
      "Risk-contextual findings",
      "Prioritized gaps",
      "Actionable remediation",
    ],

    closingTitle: "Assess with evidence.",
    closingMuted: "Improve with context.",
    closingText:
      "Turn assessment activity into structured security and compliance improvement.",
  },

  gap: {
    number: "10 / 12",
    eyebrow: "COMPLIANCE GAP ANALYSIS",

    heroLine1: "See the distance",
    heroLine2: "between current",
    heroLine3: "and required.",

    description:
      "Compare current security and compliance practices with defined requirements to identify missing controls, incomplete evidence and operational improvement priorities.",

    ticker: [
      "CURRENT STATE",
      "TARGET STATE",
      "REQUIREMENTS",
      "CONTROLS",
      "GAPS",
      "PRIORITY",
      "ROADMAP",
    ],

    statementTitle:
      "A gap only becomes useful when it leads to action.",

    statementText:
      "Gap analysis should create a clear relationship between requirements, current practices, missing evidence, risk significance and practical remediation ownership.",

    pillars: [
      {
        code: "BASELINE",
        title: "Current state",
        text: "Document how security and compliance practices operate today.",
      },
      {
        code: "TARGET",
        title: "Required state",
        text: "Clarify relevant framework, contractual or organizational expectations.",
      },
      {
        code: "DELTA",
        title: "Gap identification",
        text: "Identify missing, incomplete or inconsistent control implementation.",
      },
      {
        code: "PLAN",
        title: "Remediation roadmap",
        text: "Prioritize improvements and assign accountable ownership.",
      },
    ],

    framework: [
      { number: "01", title: "Baseline", text: "Understand current practices." },
      { number: "02", title: "Map", text: "Connect requirements to controls." },
      { number: "03", title: "Compare", text: "Identify differences." },
      { number: "04", title: "Validate", text: "Review supporting evidence." },
      { number: "05", title: "Prioritize", text: "Apply risk and dependency context." },
      { number: "06", title: "Roadmap", text: "Sequence remediation activities." },
    ],

    evidence: [
      { title: "Requirement map", text: "Structured view of relevant expectations." },
      { title: "Current-state record", text: "Existing control and process implementation." },
      { title: "Gap register", text: "Identified missing or incomplete capabilities." },
      { title: "Roadmap", text: "Prioritized remediation plan and ownership." },
    ],

    questions: [
      {
        question: "What is required?",
        answer: "A defined target prevents subjective gap interpretation.",
      },
      {
        question: "What exists today?",
        answer: "Current-state evidence establishes a reliable baseline.",
      },
      {
        question: "What should change first?",
        answer: "Risk, dependencies and implementation effort inform remediation priority.",
      },
    ],

    outcomes: [
      "Current-state baseline",
      "Requirement mapping",
      "Gap visibility",
      "Risk-based prioritization",
      "Defined ownership",
      "Remediation roadmap",
    ],

    closingTitle: "Turn gaps",
    closingMuted: "into a roadmap.",
    closingText:
      "Move from compliance uncertainty to structured and prioritized improvement.",
  },

  audit: {
    number: "11 / 12",
    eyebrow: "AUDIT PREPARATION",

    heroLine1: "Make evidence",
    heroLine2: "ready before",
    heroLine3: "review begins.",

    description:
      "Prepare teams, control owners and evidence repositories for security and compliance audits through structured readiness activities and traceable documentation.",

    ticker: [
      "SCOPE",
      "CONTROL OWNER",
      "EVIDENCE",
      "TRACEABILITY",
      "READINESS",
      "REVIEW",
      "RESPONSE",
    ],

    statementTitle:
      "Audit preparation is an operational readiness exercise.",

    statementText:
      "Teams should understand what will be reviewed, who owns each control, where supporting evidence lives and how questions will be coordinated before formal audit activities begin.",

    pillars: [
      {
        code: "SCOPE",
        title: "Audit boundary",
        text: "Clarify systems, processes, locations and requirements included in review.",
      },
      {
        code: "OWNER",
        title: "Control coordination",
        text: "Identify responsible teams and evidence owners.",
      },
      {
        code: "EVIDENCE",
        title: "Evidence readiness",
        text: "Organize relevant records and validate completeness.",
      },
      {
        code: "REVIEW",
        title: "Readiness review",
        text: "Identify likely gaps before formal audit procedures.",
      },
    ],

    framework: [
      { number: "01", title: "Confirm scope", text: "Establish review boundaries." },
      { number: "02", title: "Map controls", text: "Connect requirements and owners." },
      { number: "03", title: "Request evidence", text: "Collect relevant records." },
      { number: "04", title: "Validate", text: "Review evidence quality and completeness." },
      { number: "05", title: "Resolve", text: "Address readiness gaps." },
      { number: "06", title: "Coordinate", text: "Prepare teams for formal review." },
    ],

    evidence: [
      { title: "Audit scope", text: "Defined boundaries and requirements." },
      { title: "Control matrix", text: "Requirements, controls and ownership." },
      { title: "Evidence index", text: "Organized supporting documentation." },
      { title: "Readiness findings", text: "Issues requiring attention before audit." },
    ],

    questions: [
      {
        question: "Does every request have an owner?",
        answer: "Clear responsibility reduces delays during evidence collection.",
      },
      {
        question: "Is evidence easy to trace?",
        answer: "Organized evidence improves review efficiency and consistency.",
      },
      {
        question: "Are known gaps understood?",
        answer: "Readiness reviews provide time to address issues before formal testing.",
      },
    ],

    outcomes: [
      "Clear audit scope",
      "Control-owner coordination",
      "Evidence organization",
      "Readiness visibility",
      "Reduced review friction",
      "Structured audit response",
    ],

    closingTitle: "Prepare early.",
    closingMuted: "Respond with evidence.",
    closingText:
      "Create an organized audit-readiness process that reduces last-minute compliance work.",
  },

  policy: {
    number: "12 / 12",
    eyebrow: "SECURITY POLICY & DOCUMENTATION",

    heroLine1: "Write security",
    heroLine2: "expectations people",
    heroLine3: "can actually operate.",

    description:
      "Create and maintain a coherent security-documentation system connecting governance intent with standards, procedures, responsibilities and evidence.",

    ticker: [
      "POLICY",
      "STANDARD",
      "PROCEDURE",
      "OWNER",
      "APPROVAL",
      "VERSION",
      "REVIEW",
    ],

    statementTitle:
      "Good documentation connects intent with execution.",

    statementText:
      "Policies should establish direction, standards should define mandatory expectations and procedures should explain repeatable operational activity. Each layer should have ownership and lifecycle governance.",

    pillars: [
      {
        code: "POLICY",
        title: "Policy architecture",
        text: "Establish high-level security expectations aligned with organizational governance.",
      },
      {
        code: "STANDARD",
        title: "Security standards",
        text: "Translate policy intent into specific mandatory requirements.",
      },
      {
        code: "PROCESS",
        title: "Operational procedures",
        text: "Document repeatable activities supporting security control operation.",
      },
      {
        code: "LIFE",
        title: "Document lifecycle",
        text: "Maintain ownership, approval, versioning and scheduled review.",
      },
    ],

    framework: [
      { number: "01", title: "Inventory", text: "Understand existing security documentation." },
      { number: "02", title: "Structure", text: "Define policy hierarchy and relationships." },
      { number: "03", title: "Draft", text: "Create clear and operationally relevant content." },
      { number: "04", title: "Review", text: "Validate with responsible stakeholders." },
      { number: "05", title: "Approve", text: "Establish formal ownership and authorization." },
      { number: "06", title: "Maintain", text: "Review documentation as environments evolve." },
    ],

    evidence: [
      { title: "Policy inventory", text: "Structured view of security documentation." },
      { title: "Ownership register", text: "Responsible owners and approvers." },
      { title: "Version history", text: "Traceable documentation changes." },
      { title: "Review schedule", text: "Defined lifecycle and maintenance cadence." },
    ],

    questions: [
      {
        question: "Is the requirement clear?",
        answer: "Security expectations should be understandable by the teams responsible for implementation.",
      },
      {
        question: "Does documentation reflect reality?",
        answer: "Written procedures should correspond with actual operational practices.",
      },
      {
        question: "Who maintains the document?",
        answer: "Every important security document should have clear lifecycle ownership.",
      },
    ],

    outcomes: [
      "Structured policy hierarchy",
      "Clear security expectations",
      "Defined document ownership",
      "Traceable approvals",
      "Version governance",
      "Sustainable review lifecycle",
    ],

    closingTitle: "Document expectations.",
    closingMuted: "Operationalize them.",
    closingText:
      "Build security documentation that supports governance, implementation and assurance.",
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
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ borderColor: "rgba(255,255,255,.22)" }}
      className="inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 backdrop-blur-2xl"
    >
      <motion.span
        animate={{
          opacity: [0.25, 1, 0.25],
          scale: [0.8, 1.25, 0.8],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
        className="h-1.5 w-1.5 rounded-full bg-white"
      />

      <span className="font-mono text-[8px] tracking-[0.24em] text-white/40">
        {children}
      </span>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* BACKGROUND                                                                 */
/* -------------------------------------------------------------------------- */

function BackgroundField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: [-80, 100, -80],
          y: [-50, 90, -50],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-[180px] top-[15%] h-[520px] w-[520px] rounded-full bg-white/[0.045] blur-[160px]"
      />

      <motion.div
        animate={{
          x: [80, -80, 80],
          y: [70, -50, 70],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-200px] top-[25%] h-[520px] w-[520px] rounded-full bg-white/[0.035] blur-[170px]"
      />

      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.72) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 96%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 96%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      <motion.div
        animate={{ y: ["-20%", "120%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */

function Hero({ page }: { page: PageConfig }) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 850], [0, 130]);
  const opacity = useTransform(scrollY, [0, 750], [1, 0.15]);

  return (
    <section className="relative min-h-[950px] overflow-hidden border-b border-white/[0.07] bg-black">
      <BackgroundField />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto flex min-h-[930px] max-w-[1450px] flex-col justify-center px-5 pb-24 pt-40 md:px-8 lg:px-12"
      >
        <div className="flex items-center justify-between">
          <Label>{page.eyebrow}</Label>

          <span className="font-mono text-[8px] tracking-[0.25em] text-white/18">
            {page.number}
          </span>
        </div>

        <div className="mt-20">
          {[page.heroLine1, page.heroLine2, page.heroLine3].map(
            (line, index) => (
              <div key={line} className="overflow-hidden">
                <motion.h1
                  initial={{
                    y: "115%",
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.08 + index * 0.12,
                    ease,
                  }}
                  className={`text-[52px] font-medium leading-[0.91] tracking-[-0.065em] sm:text-[70px] md:text-[92px] lg:text-[108px] ${
                    index === 2 ? "text-white/28" : "text-white"
                  }`}
                >
                  {line}
                </motion.h1>
              </div>
            ),
          )}
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_.7fr]">
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-4 w-4 text-white/40" />

            <span className="font-mono text-[8px] tracking-[0.23em] text-white/20">
              GOVERNANCE / CONTROL / ASSURANCE
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
          >
            <p className="text-[13px] leading-7 text-white/[0.5]">
              {page.description}
            </p>

            <motion.a
              href="#framework"
              whileHover={{ x: 6 }}
              className="mt-7 inline-flex items-center gap-3 text-[10px] text-white/45"
            >
              Explore framework

              <ArrowRight className="h-3.5 w-3.5" />
            </motion.a>
          </motion.div>
        </div>

        <div className="mt-16 flex justify-end">
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <ArrowDown className="h-4 w-4 text-white/20" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* TICKER                                                                     */
/* -------------------------------------------------------------------------- */

function Ticker({ items }: { items: string[] }) {
  return (
    <section className="overflow-hidden border-b border-white/[0.07] bg-[#030303]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max py-5"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-7 px-9"
          >
            <CircleDot className="h-3 w-3 text-white/25" />

            <span className="font-mono text-[8px] tracking-[0.25em] text-white/25">
              {item}
            </span>
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
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-black px-5 py-32 md:px-8 lg:px-12 lg:py-44">
      <div className="absolute left-[20%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-white/[0.025] blur-[150px]" />

      <div className="relative mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.45fr_1.55fr]">
        <Reveal>
          <div className="flex items-center gap-3">
            <Eye className="h-4 w-4 text-white/30" />

            <span className="font-mono text-[8px] tracking-[0.23em] text-white/20">
              CONTROL PERSPECTIVE
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="max-w-[920px] text-[42px] font-medium leading-[1.04] tracking-[-0.055em] md:text-[68px]">
            {page.statementTitle}
          </h2>

          <div className="mt-12 grid gap-8 border-t border-white/[0.08] pt-8 md:grid-cols-[.7fr_1.3fr]">
            <span className="font-mono text-[7px] tracking-[0.25em] text-white/18">
              REQUIREMENT → CONTROL → EVIDENCE
            </span>

            <p className="text-[13px] leading-7 text-white/[0.45]">
              {page.statementText}
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
    <section className="border-b border-white/[0.07] bg-[#030303] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <Label>CONTROL ARCHITECTURE</Label>

          <h2 className="mt-8 max-w-[750px] text-[40px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[58px]">
            Structure compliance around
            <span className="block text-white/25">
              accountable operation.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
          {page.pillars.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.7,
              }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,.035)",
              }}
              className="group min-h-[320px] bg-black p-8 md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] tracking-[0.22em] text-white/25">
                  {item.code}
                </span>

                <span className="font-mono text-[8px] text-white/12">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-24">
                <h3 className="text-[24px] font-medium tracking-[-0.035em] text-white/75 transition-colors group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[520px] text-[12px] leading-7 text-white/[0.38]">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FRAMEWORK                                                                  */
/* -------------------------------------------------------------------------- */

function Framework({ page }: { page: PageConfig }) {
  return (
    <section
      id="framework"
      className="relative overflow-hidden border-b border-white/[0.07] bg-black px-5 py-28 md:px-8 lg:px-12 lg:py-40"
    >
      <BackgroundField />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <Label>OPERATING FRAMEWORK</Label>

              <h2 className="mt-8 max-w-[460px] text-[40px] font-medium leading-[1.05] tracking-[-0.05em] md:text-[55px]">
                Move from requirement
                <span className="block text-white/25">
                  to repeatable evidence.
                </span>
              </h2>

              <p className="mt-7 max-w-[420px] text-[12px] leading-7 text-white/[0.36]">
                A sustainable compliance program makes responsibilities,
                implementation and evidence part of normal security
                operations rather than a temporary audit activity.
              </p>
            </div>
          </Reveal>

          <div>
            {page.framework.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.65,
                }}
                className="group grid gap-5 border-t border-white/[0.08] py-9 md:grid-cols-[70px_190px_1fr_30px]"
              >
                <span className="font-mono text-[8px] text-white/20">
                  {item.number}
                </span>

                <h3 className="text-[16px] font-medium text-white/70 transition-colors group-hover:text-white">
                  {item.title}
                </h3>

                <p className="text-[12px] leading-7 text-white/[0.36]">
                  {item.text}
                </p>

                <ChevronRight className="h-4 w-4 text-white/10 transition-all group-hover:translate-x-1 group-hover:text-white/50" />
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* EVIDENCE                                                                   */
/* -------------------------------------------------------------------------- */

function Evidence({ page }: { page: PageConfig }) {
  return (
    <section className="border-b border-white/[0.07] bg-[#030303] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <div className="flex items-center gap-3">
            <FileText className="h-4 w-4 text-white/35" />

            <span className="font-mono text-[8px] tracking-[0.22em] text-white/20">
              EVIDENCE LAYER
            </span>
          </div>

          <h2 className="mt-8 max-w-[700px] text-[40px] font-medium leading-[1.05] tracking-[-0.05em] md:text-[55px]">
            Make control operation
            <span className="block text-white/25">
              visible and traceable.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {page.evidence.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.07,
              }}
              whileHover={{
                y: -8,
                borderColor: "rgba(255,255,255,.18)",
              }}
              className="min-h-[290px] rounded-[22px] border border-white/[0.07] bg-black p-7"
            >
              <div className="flex items-center justify-between">
                <Layers3 className="h-4 w-4 text-white/25" />

                <span className="font-mono text-[8px] text-white/12">
                  E-0{index + 1}
                </span>
              </div>

              <h3 className="mt-24 text-[17px] font-medium text-white/70">
                {item.title}
              </h3>

              <p className="mt-4 text-[11px] leading-6 text-white/[0.34]">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* BIG TYPE                                                                   */
/* -------------------------------------------------------------------------- */

function BigType({ page }: { page: PageConfig }) {
  return (
    <section className="relative flex min-h-[430px] items-center overflow-hidden border-b border-white/[0.07] bg-black">
      <motion.div
        animate={{
          x: ["0%", "-30%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="whitespace-nowrap text-[105px] font-medium tracking-[-0.075em] text-white/[0.035] md:text-[185px]"
      >
        CONTROL / EVIDENCE / GOVERNANCE / ASSURANCE / CONTROL
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="rounded-full border border-white/[0.1] bg-black/80 px-7 py-3 backdrop-blur-2xl"
        >
          <span className="font-mono text-[8px] tracking-[0.25em] text-white/35">
            {page.eyebrow}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* QUESTIONS                                                                  */
/* -------------------------------------------------------------------------- */

function Questions({ page }: { page: PageConfig }) {
  return (
    <section className="border-b border-white/[0.07] bg-[#030303] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <Label>ASSURANCE QUESTIONS</Label>

          <h2 className="mt-8 max-w-[730px] text-[40px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[55px]">
            Evidence should answer
            <span className="block text-white/25">
              practical questions.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16">
          {page.questions.map((item, index) => (
            <motion.article
              key={item.question}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,.02)",
              }}
              className="grid gap-7 border-t border-white/[0.08] px-3 py-10 lg:grid-cols-[70px_1fr_1fr]"
            >
              <span className="font-mono text-[8px] text-white/18">
                Q / 0{index + 1}
              </span>

              <h3 className="max-w-[420px] text-[20px] font-medium tracking-[-0.025em] text-white/75">
                {item.question}
              </h3>

              <p className="text-[12px] leading-7 text-white/[0.37]">
                {item.answer}
              </p>
            </motion.article>
          ))}

          <div className="border-t border-white/[0.08]" />
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
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-black px-5 py-28 md:px-8 lg:px-12 lg:py-36">
      <div className="absolute right-[-160px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-white/[0.035] blur-[160px]" />

      <div className="relative mx-auto max-w-[1100px]">
        <Reveal>
          <div className="flex items-center gap-3">
            <Workflow className="h-4 w-4 text-white/30" />

            <span className="font-mono text-[8px] tracking-[0.22em] text-white/20">
              PROGRAM OUTCOMES
            </span>
          </div>
        </Reveal>

        <div className="mt-12">
          {page.outcomes.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
              }}
              whileHover={{ x: 8 }}
              className="group flex items-center justify-between border-t border-white/[0.08] py-7"
            >
              <div className="flex items-center gap-8">
                <span className="font-mono text-[8px] text-white/16">
                  0{index + 1}
                </span>

                <span className="text-[14px] text-white/50 transition-colors group-hover:text-white/80">
                  {item}
                </span>
              </div>

              <CheckCircle2 className="h-4 w-4 text-white/20" />
            </motion.div>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FINAL CTA                                                                  */
/* -------------------------------------------------------------------------- */

function FinalCTA({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-36 md:px-8 lg:px-12 lg:py-48">
      <BackgroundField />

      <div className="relative mx-auto max-w-[1000px] text-center">
        <Reveal>
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(255,255,255,0)",
                "0 0 90px rgba(255,255,255,.09)",
                "0 0 0 rgba(255,255,255,0)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="mx-auto mb-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] backdrop-blur-2xl"
          >
            <ShieldCheck className="h-5 w-5 text-white/60" />
          </motion.div>

          <Label>{page.eyebrow}</Label>

          <h2 className="mt-9 text-[45px] font-medium leading-[1.02] tracking-[-0.055em] md:text-[70px]">
            {page.closingTitle}

            <span className="block text-white/25">
              {page.closingMuted}
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[650px] text-[12px] leading-7 text-white/[0.4]">
            {page.closingText}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <motion.a
              href="/contact"
              whileHover={{
                y: -5,
                scale: 1.03,
                boxShadow: "0 20px 70px rgba(255,255,255,.08)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[11px] font-medium text-black"
            >
              Discuss compliance

              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#framework"
              whileHover={{
                y: -5,
                borderColor: "rgba(255,255,255,.25)",
              }}
              className="inline-flex items-center gap-3 rounded-full border border-white/[0.1] px-7 py-3.5 text-[11px] text-white/45"
            >
              Review framework

              <RefreshCcw className="h-3.5 w-3.5" />
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

export default function ComplianceRiskClient({
  pageKey,
}: {
  pageKey: CompliancePageKey;
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
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-white"
      />

      <Hero page={page} />

      <Ticker items={page.ticker} />

      <Statement page={page} />

      <Pillars page={page} />

      <Framework page={page} />

      <Evidence page={page} />

      <BigType page={page} />

      <Questions page={page} />

      <Outcomes page={page} />

      <FinalCTA page={page} />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(255, 255, 255, 0.9);
          color: black;
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