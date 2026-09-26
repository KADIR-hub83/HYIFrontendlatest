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
  BookOpen,
  CheckCircle2,
  CircleDot,
  Eye,
  FileText,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

import type { ReactNode } from "react";

export type AwarenessPageKey =
  | "cybersecurity-awareness"
  | "phishing-simulation"
  | "awareness-programs"
  | "employee-training"
  | "executive-training"
  | "remote-working"
  | "social-engineering"
  | "incident-reporting"
  | "policy-training"
  | "security-culture"
  | "workshops";

type LearningItem = {
  title: string;
  text: string;
};

type StageItem = {
  number: string;
  title: string;
  text: string;
};

type PageConfig = {
  index: string;
  eyebrow: string;
  hero: [string, string, string];
  description: string;

  philosophyTitle: string;
  philosophyText: string;

  stages: StageItem[];

  learningTitle: string;
  learningText: string;
  learning: LearningItem[];

  audienceTitle: string;
  audience: LearningItem[];

  outcomes: string[];

  closing: [string, string];
  closingText: string;
};

const pages: Record<AwarenessPageKey, PageConfig> = {
  "cybersecurity-awareness": {
    index: "01 / 11",
    eyebrow: "CYBERSECURITY AWARENESS TRAINING",
    hero: [
      "Security starts",
      "with informed",
      "decisions.",
    ],
    description:
      "Build practical cybersecurity awareness that helps people recognize common digital risks, understand their role in protecting information and make safer decisions during everyday work.",

    philosophyTitle:
      "Awareness should change behavior, not simply complete a requirement.",
    philosophyText:
      "Effective awareness connects security concepts with the decisions people make every day. Training becomes more useful when employees understand why a risk matters, what warning signs look like and what action they should take.",

    stages: [
      {
        number: "01",
        title: "Understand",
        text: "Introduce security risks using clear workplace context rather than unnecessary technical complexity.",
      },
      {
        number: "02",
        title: "Recognize",
        text: "Help employees identify suspicious activity, unsafe requests and common warning signs.",
      },
      {
        number: "03",
        title: "Decide",
        text: "Build confidence around choosing safer actions when something feels unusual.",
      },
      {
        number: "04",
        title: "Report",
        text: "Make reporting expectations and escalation channels clear.",
      },
      {
        number: "05",
        title: "Reinforce",
        text: "Use recurring learning to keep security knowledge relevant over time.",
      },
    ],

    learningTitle: "Security knowledge designed for everyday work.",
    learningText:
      "The learning experience focuses on practical situations employees may encounter across communication, identity, information handling and digital collaboration.",

    learning: [
      {
        title: "Identity & access",
        text: "Understand safer authentication habits, account protection and responsible access.",
      },
      {
        title: "Email & messaging",
        text: "Recognize suspicious messages, unusual requests and communication risks.",
      },
      {
        title: "Information handling",
        text: "Build awareness around sensitive business information and appropriate sharing.",
      },
      {
        title: "Device security",
        text: "Understand everyday practices that support safer workplace devices.",
      },
    ],

    audienceTitle: "Learning that reaches different parts of the organization.",

    audience: [
      {
        title: "New employees",
        text: "Establish security expectations early in the employee journey.",
      },
      {
        title: "Existing workforce",
        text: "Reinforce relevant security behaviors through ongoing awareness.",
      },
      {
        title: "Managers",
        text: "Help leaders reinforce security expectations within their teams.",
      },
      {
        title: "Specialized roles",
        text: "Adapt learning around role-specific responsibilities and exposure.",
      },
    ],

    outcomes: [
      "Clearer security responsibilities",
      "Improved risk recognition",
      "Stronger reporting awareness",
      "More consistent security behavior",
      "Role-relevant learning",
      "Continuous awareness reinforcement",
    ],

    closing: ["Build awareness.", "Strengthen everyday decisions."],
    closingText:
      "Create a cybersecurity awareness experience that turns security guidance into practical workplace behavior.",
  },

  "phishing-simulation": {
    index: "02 / 11",
    eyebrow: "PHISHING SIMULATION",
    hero: [
      "Practice the",
      "moment before",
      "the click.",
    ],
    description:
      "Use controlled phishing simulations to help employees recognize suspicious communication, practice safer responses and strengthen reporting behavior without turning awareness into a blame exercise.",

    philosophyTitle:
      "Simulation is most useful when it becomes a learning moment.",
    philosophyText:
      "The goal is not to catch employees making mistakes. A useful phishing program provides realistic practice, immediate context and clear guidance so people become more confident when suspicious communication appears.",

    stages: [
      {
        number: "01",
        title: "Plan",
        text: "Define the learning objective, audience and approved simulation boundaries.",
      },
      {
        number: "02",
        title: "Simulate",
        text: "Deliver controlled scenarios aligned with common workplace communication patterns.",
      },
      {
        number: "03",
        title: "Observe",
        text: "Measure relevant interaction and reporting behavior at an aggregate level.",
      },
      {
        number: "04",
        title: "Educate",
        text: "Provide timely explanations of the warning signs contained in the exercise.",
      },
      {
        number: "05",
        title: "Reinforce",
        text: "Use future learning to strengthen areas where additional awareness is useful.",
      },
    ],

    learningTitle: "Teach people what suspicious communication feels like.",
    learningText:
      "Controlled exercises help employees practice recognizing unusual requests without waiting for a real security event.",

    learning: [
      {
        title: "Message context",
        text: "Look beyond appearance and evaluate whether the request makes sense.",
      },
      {
        title: "Urgency signals",
        text: "Recognize pressure designed to encourage action without verification.",
      },
      {
        title: "Identity cues",
        text: "Pay attention to unexpected sender or communication behavior.",
      },
      {
        title: "Reporting behavior",
        text: "Know how and when suspicious communication should be reported.",
      },
    ],

    audienceTitle: "Simulation can adapt to different working contexts.",

    audience: [
      {
        title: "General workforce",
        text: "Build foundational recognition and reporting habits.",
      },
      {
        title: "Finance teams",
        text: "Practice scenarios involving sensitive financial requests.",
      },
      {
        title: "Privileged users",
        text: "Reinforce awareness around higher-impact account access.",
      },
      {
        title: "Leadership",
        text: "Address communication patterns relevant to senior roles.",
      },
    ],

    outcomes: [
      "Practical phishing recognition",
      "Clearer reporting behavior",
      "Scenario-based learning",
      "Awareness trend visibility",
      "Targeted reinforcement",
      "Continuous employee practice",
    ],

    closing: ["Practice safely.", "Respond confidently."],
    closingText:
      "Use controlled simulations to transform suspicious-message awareness into repeatable security behavior.",
  },

  "awareness-programs": {
    index: "03 / 11",
    eyebrow: "SECURITY AWARENESS PROGRAMS",
    hero: [
      "Turn training",
      "into an ongoing",
      "security program.",
    ],
    description:
      "Design a structured awareness program that connects learning campaigns, role-based education, communication, measurement and continuous reinforcement across the organization.",

    philosophyTitle:
      "Security awareness works better as a program than as an annual event.",
    philosophyText:
      "People encounter changing technology, processes and risks throughout the year. A structured program creates an ongoing rhythm of education and communication rather than relying on a single training moment.",

    stages: [
      {
        number: "01",
        title: "Baseline",
        text: "Understand audiences, responsibilities and existing awareness activities.",
      },
      {
        number: "02",
        title: "Design",
        text: "Build a learning calendar around organizational priorities.",
      },
      {
        number: "03",
        title: "Deliver",
        text: "Coordinate training, campaigns and targeted communication.",
      },
      {
        number: "04",
        title: "Measure",
        text: "Review meaningful participation and behavior indicators.",
      },
      {
        number: "05",
        title: "Evolve",
        text: "Adjust the program as business needs and risks change.",
      },
    ],

    learningTitle: "One program. Multiple learning channels.",
    learningText:
      "Combine structured training with shorter awareness touchpoints so security remains visible without overwhelming employees.",

    learning: [
      {
        title: "Core curriculum",
        text: "Foundational security education relevant across the workforce.",
      },
      {
        title: "Awareness campaigns",
        text: "Focused communication around timely security topics.",
      },
      {
        title: "Role-based learning",
        text: "Additional guidance aligned with specific responsibilities.",
      },
      {
        title: "Reinforcement",
        text: "Short recurring learning that keeps important behaviors visible.",
      },
    ],

    audienceTitle: "A program designed around organizational audiences.",

    audience: [
      {
        title: "Workforce",
        text: "Consistent foundational security understanding.",
      },
      {
        title: "Managers",
        text: "Guidance for reinforcing expected behavior.",
      },
      {
        title: "High-impact roles",
        text: "Additional learning where responsibilities require it.",
      },
      {
        title: "Leadership",
        text: "Awareness aligned with governance and business risk.",
      },
    ],

    outcomes: [
      "Structured awareness roadmap",
      "Consistent learning cadence",
      "Role-based education",
      "Awareness measurement",
      "Targeted reinforcement",
      "Program evolution",
    ],

    closing: ["Move beyond training.", "Build an awareness system."],
    closingText:
      "Create an ongoing security education program aligned with people, roles and organizational priorities.",
  },

  "employee-training": {
    index: "04 / 11",
    eyebrow: "EMPLOYEE SECURITY TRAINING",
    hero: [
      "Give every",
      "employee a clear",
      "security role.",
    ],
    description:
      "Translate cybersecurity expectations into understandable workplace practices so employees know how to protect accounts, information, devices and business communication.",

    philosophyTitle:
      "Employees need practical guidance they can use while doing their jobs.",
    philosophyText:
      "Security training becomes meaningful when it connects policy with real work. People should leave training knowing which behaviors matter, why they matter and what to do when something appears unusual.",

    stages: [
      {
        number: "01",
        title: "Introduce",
        text: "Establish foundational workplace security expectations.",
      },
      {
        number: "02",
        title: "Contextualize",
        text: "Connect security principles with common employee activities.",
      },
      {
        number: "03",
        title: "Practice",
        text: "Use scenarios to reinforce decision-making.",
      },
      {
        number: "04",
        title: "Confirm",
        text: "Check understanding of important responsibilities.",
      },
      {
        number: "05",
        title: "Refresh",
        text: "Reinforce learning throughout the employee lifecycle.",
      },
    ],

    learningTitle: "Practical security for the modern employee.",
    learningText:
      "Focus training on decisions employees make across accounts, devices, communication and information handling.",

    learning: [
      {
        title: "Account protection",
        text: "Build safer authentication and access habits.",
      },
      {
        title: "Safe communication",
        text: "Recognize suspicious or unexpected digital requests.",
      },
      {
        title: "Data responsibility",
        text: "Understand appropriate information handling and sharing.",
      },
      {
        title: "Reporting",
        text: "Know where to raise security concerns quickly.",
      },
    ],

    audienceTitle: "Training across the employee lifecycle.",

    audience: [
      {
        title: "Onboarding",
        text: "Introduce expectations when employees join.",
      },
      {
        title: "Annual learning",
        text: "Refresh important security concepts.",
      },
      {
        title: "Role transitions",
        text: "Adapt training as responsibilities change.",
      },
      {
        title: "Targeted refreshers",
        text: "Address specific awareness needs when useful.",
      },
    ],

    outcomes: [
      "Clear employee responsibilities",
      "Practical security habits",
      "Improved suspicious-activity recognition",
      "Better reporting awareness",
      "Consistent onboarding",
      "Ongoing learning",
    ],

    closing: ["Educate people.", "Enable safer work."],
    closingText:
      "Give employees security knowledge they can apply throughout their working day.",
  },

  "executive-training": {
    index: "05 / 11",
    eyebrow: "EXECUTIVE CYBERSECURITY TRAINING",
    hero: [
      "Cyber risk",
      "belongs in the",
      "leadership room.",
    ],
    description:
      "Help executives understand cybersecurity through the lens of business impact, governance, decision authority, incident leadership and organizational resilience.",

    philosophyTitle:
      "Executives do not need analyst training. They need decision context.",
    philosophyText:
      "Leadership education should translate cybersecurity into operational, financial, governance and reputational considerations so executives can participate effectively in security decisions and major incidents.",

    stages: [
      {
        number: "01",
        title: "Frame",
        text: "Connect cybersecurity with business priorities and responsibilities.",
      },
      {
        number: "02",
        title: "Translate",
        text: "Explain technical risk through business-relevant context.",
      },
      {
        number: "03",
        title: "Exercise",
        text: "Use leadership scenarios to explore decision points.",
      },
      {
        number: "04",
        title: "Govern",
        text: "Clarify oversight, accountability and escalation expectations.",
      },
      {
        number: "05",
        title: "Prepare",
        text: "Strengthen executive readiness for significant incidents.",
      },
    ],

    learningTitle: "Cybersecurity through an executive lens.",
    learningText:
      "Focus on the decisions leaders may need to make rather than operational security mechanics.",

    learning: [
      {
        title: "Business impact",
        text: "Understand how cyber events can affect operations and strategic objectives.",
      },
      {
        title: "Governance",
        text: "Clarify leadership responsibilities and security oversight.",
      },
      {
        title: "Crisis decisions",
        text: "Explore leadership choices during major incidents.",
      },
      {
        title: "Risk communication",
        text: "Improve conversations between technical teams and leadership.",
      },
    ],

    audienceTitle: "Designed around leadership responsibilities.",

    audience: [
      {
        title: "Executive leadership",
        text: "Connect security risk with organizational decisions.",
      },
      {
        title: "Business leaders",
        text: "Understand dependencies and operational exposure.",
      },
      {
        title: "Board audiences",
        text: "Support informed governance-level security discussions.",
      },
      {
        title: "Crisis leadership",
        text: "Prepare decision-makers for high-impact incidents.",
      },
    ],

    outcomes: [
      "Stronger cyber-risk understanding",
      "Clearer governance context",
      "Improved incident readiness",
      "Better technical-business communication",
      "Defined leadership responsibilities",
      "Decision-focused awareness",
    ],

    closing: ["Understand cyber risk.", "Lead with context."],
    closingText:
      "Prepare leadership to make informed decisions before, during and after cybersecurity events.",
  },

  "remote-working": {
    index: "06 / 11",
    eyebrow: "SECURE REMOTE WORKING TRAINING",
    hero: [
      "Work anywhere.",
      "Keep security",
      "with you.",
    ],
    description:
      "Help distributed employees understand safer ways to access business systems, handle information, communicate and protect devices while working outside traditional office environments.",

    philosophyTitle:
      "Remote work changes the environment, not the responsibility.",
    philosophyText:
      "Employees working across homes, travel locations and shared environments need practical guidance that helps them maintain security even when familiar office controls are no longer around them.",

    stages: [
      {
        number: "01",
        title: "Connect",
        text: "Understand approved access and connectivity practices.",
      },
      {
        number: "02",
        title: "Protect",
        text: "Maintain device and account security outside the office.",
      },
      {
        number: "03",
        title: "Handle",
        text: "Protect sensitive information in remote environments.",
      },
      {
        number: "04",
        title: "Communicate",
        text: "Use collaboration tools with appropriate awareness.",
      },
      {
        number: "05",
        title: "Report",
        text: "Escalate suspicious events regardless of location.",
      },
    ],

    learningTitle: "Security that travels with the workforce.",
    learningText:
      "Remote-working education connects digital security with physical environment, connectivity and communication choices.",

    learning: [
      {
        title: "Remote access",
        text: "Understand safer approaches to accessing organizational services.",
      },
      {
        title: "Device awareness",
        text: "Protect workplace devices while outside controlled environments.",
      },
      {
        title: "Information privacy",
        text: "Reduce unintended exposure in shared or public spaces.",
      },
      {
        title: "Collaboration security",
        text: "Use remote communication tools with appropriate care.",
      },
    ],

    audienceTitle: "Built for distributed ways of working.",

    audience: [
      {
        title: "Remote employees",
        text: "Maintain consistent security away from offices.",
      },
      {
        title: "Hybrid workforce",
        text: "Adapt securely between working environments.",
      },
      {
        title: "Frequent travelers",
        text: "Understand additional considerations while travelling.",
      },
      {
        title: "Remote managers",
        text: "Reinforce secure practices across distributed teams.",
      },
    ],

    outcomes: [
      "Safer remote access habits",
      "Improved device awareness",
      "Better information protection",
      "Secure collaboration practices",
      "Clear reporting expectations",
      "Consistent hybrid-work security",
    ],

    closing: ["Change location.", "Keep security consistent."],
    closingText:
      "Equip distributed teams with practical security habits that work beyond the office.",
  },

  "social-engineering": {
    index: "07 / 11",
    eyebrow: "SOCIAL ENGINEERING AWARENESS",
    hero: [
      "Question the",
      "request before",
      "trusting it.",
    ],
    description:
      "Help employees recognize manipulation, unusual requests, impersonation and pressure tactics across digital and human communication channels.",

    philosophyTitle:
      "Social engineering targets trust before it targets technology.",
    philosophyText:
      "Awareness should help people recognize situations where urgency, authority, familiarity or curiosity may be used to influence a decision without appropriate verification.",

    stages: [
      {
        number: "01",
        title: "Recognize",
        text: "Understand common manipulation patterns.",
      },
      {
        number: "02",
        title: "Pause",
        text: "Create space before responding to unusual pressure.",
      },
      {
        number: "03",
        title: "Verify",
        text: "Confirm sensitive requests through appropriate channels.",
      },
      {
        number: "04",
        title: "Protect",
        text: "Avoid unnecessary disclosure of sensitive information.",
      },
      {
        number: "05",
        title: "Report",
        text: "Escalate suspicious interactions quickly.",
      },
    ],

    learningTitle: "Teach recognition across communication channels.",
    learningText:
      "Social engineering awareness should extend beyond email to the broader ways people communicate and exchange information.",

    learning: [
      {
        title: "Impersonation",
        text: "Recognize requests that rely on assumed identity or authority.",
      },
      {
        title: "Urgency",
        text: "Notice pressure intended to reduce careful decision-making.",
      },
      {
        title: "Information requests",
        text: "Understand when additional verification is appropriate.",
      },
      {
        title: "Unexpected contact",
        text: "Treat unusual communication with appropriate caution.",
      },
    ],

    audienceTitle: "Awareness for people who communicate, approve and share.",

    audience: [
      {
        title: "Employees",
        text: "Recognize manipulation during routine work.",
      },
      {
        title: "Customer-facing teams",
        text: "Handle unusual external requests appropriately.",
      },
      {
        title: "Finance & operations",
        text: "Verify sensitive transactional requests.",
      },
      {
        title: "Executives",
        text: "Recognize impersonation patterns relevant to senior roles.",
      },
    ],

    outcomes: [
      "Stronger manipulation awareness",
      "Better verification habits",
      "Reduced impulsive responses",
      "Improved suspicious-request reporting",
      "Cross-channel awareness",
      "Practical decision guidance",
    ],

    closing: ["Recognize influence.", "Verify before action."],
    closingText:
      "Build employee confidence around unusual, sensitive and high-pressure requests.",
  },

  "incident-reporting": {
    index: "08 / 11",
    eyebrow: "INCIDENT REPORTING TRAINING",
    hero: [
      "See something.",
      "Know where",
      "to report it.",
    ],
    description:
      "Teach employees how to recognize potential security events, capture useful context and report concerns through established organizational channels.",

    philosophyTitle:
      "Fast reporting begins with clear expectations.",
    philosophyText:
      "Employees should not need to determine whether something is definitely a cyber incident before raising a concern. Training should make the reporting threshold, process and available channels easy to understand.",

    stages: [
      {
        number: "01",
        title: "Notice",
        text: "Recognize events that may warrant security attention.",
      },
      {
        number: "02",
        title: "Assess",
        text: "Understand what basic context may be useful.",
      },
      {
        number: "03",
        title: "Report",
        text: "Use the approved organizational reporting path.",
      },
      {
        number: "04",
        title: "Preserve",
        text: "Avoid unnecessary actions that could remove useful context.",
      },
      {
        number: "05",
        title: "Support",
        text: "Know what may happen after a report is submitted.",
      },
    ],

    learningTitle: "Make security reporting easy to understand.",
    learningText:
      "Reporting education should reduce hesitation by giving employees simple guidance for common security concerns.",

    learning: [
      {
        title: "What to report",
        text: "Understand examples of activity that should be raised.",
      },
      {
        title: "Where to report",
        text: "Know the approved communication or reporting channel.",
      },
      {
        title: "Useful context",
        text: "Provide relevant information without attempting an investigation.",
      },
      {
        title: "What happens next",
        text: "Understand how security teams may follow up.",
      },
    ],

    audienceTitle: "Reporting confidence across the workforce.",

    audience: [
      {
        title: "All employees",
        text: "Create a common reporting baseline.",
      },
      {
        title: "Managers",
        text: "Support employees who raise security concerns.",
      },
      {
        title: "Service teams",
        text: "Recognize security signals during customer interaction.",
      },
      {
        title: "Remote teams",
        text: "Maintain reporting access outside office environments.",
      },
    ],

    outcomes: [
      "Clear reporting thresholds",
      "Known escalation channels",
      "Faster concern escalation",
      "Useful incident context",
      "Reduced reporting hesitation",
      "Consistent workforce guidance",
    ],

    closing: ["Recognize early.", "Report clearly."],
    closingText:
      "Give employees a simple, trusted path for bringing potential security concerns to the right team.",
  },

  "policy-training": {
    index: "09 / 11",
    eyebrow: "SECURITY POLICY TRAINING",
    hero: [
      "Turn policy",
      "into everyday",
      "practice.",
    ],
    description:
      "Translate organizational security policies into understandable responsibilities, workplace scenarios and practical guidance employees can apply during daily work.",

    philosophyTitle:
      "A policy has limited value when people cannot translate it into action.",
    philosophyText:
      "Policy training should explain not only what an organization expects, but how those expectations apply to accounts, information, devices, communication and common workplace decisions.",

    stages: [
      {
        number: "01",
        title: "Interpret",
        text: "Translate policy language into understandable expectations.",
      },
      {
        number: "02",
        title: "Contextualize",
        text: "Connect requirements with workplace situations.",
      },
      {
        number: "03",
        title: "Teach",
        text: "Explain responsibilities through focused learning.",
      },
      {
        number: "04",
        title: "Confirm",
        text: "Support understanding and acknowledgement where appropriate.",
      },
      {
        number: "05",
        title: "Refresh",
        text: "Update learning when policies or responsibilities change.",
      },
    ],

    learningTitle: "From written requirement to practical responsibility.",
    learningText:
      "Policy education helps employees understand how organizational requirements affect their own work.",

    learning: [
      {
        title: "Acceptable use",
        text: "Clarify responsible use of organizational technology.",
      },
      {
        title: "Information handling",
        text: "Explain responsibilities around sensitive information.",
      },
      {
        title: "Access responsibilities",
        text: "Connect identity and access rules with everyday behavior.",
      },
      {
        title: "Reporting obligations",
        text: "Explain when and how security concerns should be raised.",
      },
    ],

    audienceTitle: "Policy understanding tailored to responsibility.",

    audience: [
      {
        title: "General workforce",
        text: "Understand common security policy expectations.",
      },
      {
        title: "Managers",
        text: "Reinforce policy within operational teams.",
      },
      {
        title: "Privileged roles",
        text: "Understand additional access-related responsibilities.",
      },
      {
        title: "New joiners",
        text: "Establish policy expectations during onboarding.",
      },
    ],

    outcomes: [
      "Clear policy understanding",
      "Practical employee guidance",
      "Consistent security expectations",
      "Role-aware responsibilities",
      "Improved policy communication",
      "Ongoing policy reinforcement",
    ],

    closing: ["Make policy clear.", "Make behavior practical."],
    closingText:
      "Translate security requirements into guidance people can understand and apply.",
  },

  "security-culture": {
    index: "10 / 11",
    eyebrow: "SECURITY CULTURE PROGRAMS",
    hero: [
      "Make security",
      "part of how",
      "people work.",
    ],
    description:
      "Strengthen organizational security culture through leadership reinforcement, employee engagement, communication and recurring learning that keeps cybersecurity connected with everyday work.",

    philosophyTitle:
      "Culture forms when expected behavior becomes normal behavior.",
    philosophyText:
      "Security culture develops through repeated signals from leadership, managers, processes and peers. Training contributes, but culture also depends on whether people feel confident asking questions and reporting concerns.",

    stages: [
      {
        number: "01",
        title: "Listen",
        text: "Understand existing attitudes and security friction.",
      },
      {
        number: "02",
        title: "Align",
        text: "Connect security messages with organizational values.",
      },
      {
        number: "03",
        title: "Engage",
        text: "Create recurring employee participation.",
      },
      {
        number: "04",
        title: "Reinforce",
        text: "Support security behavior through managers and communication.",
      },
      {
        number: "05",
        title: "Evolve",
        text: "Adjust initiatives based on organizational learning.",
      },
    ],

    learningTitle: "Culture grows through repeated security signals.",
    learningText:
      "Combine learning, communication and leadership reinforcement to make secure behavior feel like a normal part of work.",

    learning: [
      {
        title: "Leadership signals",
        text: "Demonstrate visible support for responsible security behavior.",
      },
      {
        title: "Employee engagement",
        text: "Create opportunities for participation and discussion.",
      },
      {
        title: "Manager reinforcement",
        text: "Help managers keep security relevant within teams.",
      },
      {
        title: "Positive reporting",
        text: "Encourage people to raise concerns without unnecessary hesitation.",
      },
    ],

    audienceTitle: "Culture requires participation at every level.",

    audience: [
      {
        title: "Leadership",
        text: "Set visible expectations and priorities.",
      },
      {
        title: "Managers",
        text: "Translate culture into team behavior.",
      },
      {
        title: "Employees",
        text: "Participate in safer everyday practices.",
      },
      {
        title: "Security champions",
        text: "Help extend security conversations across teams.",
      },
    ],

    outcomes: [
      "Visible leadership reinforcement",
      "Employee participation",
      "Stronger reporting confidence",
      "Consistent security messaging",
      "Manager engagement",
      "Sustainable awareness habits",
    ],

    closing: ["Build habits.", "Shape security culture."],
    closingText:
      "Create an environment where secure behavior becomes part of normal organizational practice.",
  },

  workshops: {
    index: "11 / 11",
    eyebrow: "CYBERSECURITY WORKSHOPS",
    hero: [
      "Learn together.",
      "Practice decisions.",
      "Build readiness.",
    ],
    description:
      "Bring teams together through facilitated cybersecurity workshops designed around discussion, scenarios, organizational responsibilities and practical security decision-making.",

    philosophyTitle:
      "Interactive learning creates space for questions that static training cannot.",
    philosophyText:
      "Workshops allow teams to explore security situations together, compare perspectives and understand how responsibilities connect across technical and business functions.",

    stages: [
      {
        number: "01",
        title: "Define",
        text: "Choose the workshop objective and audience.",
      },
      {
        number: "02",
        title: "Contextualize",
        text: "Adapt scenarios around organizational responsibilities.",
      },
      {
        number: "03",
        title: "Facilitate",
        text: "Guide participants through structured discussion.",
      },
      {
        number: "04",
        title: "Explore",
        text: "Examine decisions, dependencies and communication.",
      },
      {
        number: "05",
        title: "Capture",
        text: "Record useful observations and follow-up themes.",
      },
    ],

    learningTitle: "Interactive cybersecurity learning.",
    learningText:
      "Workshops can bring security concepts into a collaborative environment where participants can discuss how they would respond.",

    learning: [
      {
        title: "Scenario workshops",
        text: "Explore realistic security situations through facilitated discussion.",
      },
      {
        title: "Role-based sessions",
        text: "Focus on responsibilities relevant to specific teams.",
      },
      {
        title: "Leadership sessions",
        text: "Explore governance and incident decision-making.",
      },
      {
        title: "Awareness workshops",
        text: "Build practical understanding around selected security topics.",
      },
    ],

    audienceTitle: "Sessions designed around the people in the room.",

    audience: [
      {
        title: "Employees",
        text: "Explore everyday security situations interactively.",
      },
      {
        title: "Technical teams",
        text: "Discuss responsibilities and coordination.",
      },
      {
        title: "Business teams",
        text: "Connect cyber risk with operational processes.",
      },
      {
        title: "Executives",
        text: "Practice leadership decisions through scenarios.",
      },
    ],

    outcomes: [
      "Interactive learning",
      "Cross-team discussion",
      "Role clarity",
      "Scenario experience",
      "Shared security understanding",
      "Actionable observations",
    ],

    closing: ["Discuss security.", "Practice readiness."],
    closingText:
      "Turn cybersecurity learning into an interactive experience built around people, decisions and responsibilities.",
  },
};

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
      viewport={{ once: true, margin: "-70px" }}
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

function GlowBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(164,126,255,.85) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 90%)",
        }}
      />

      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [-50, 70, -50],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-[180px] top-[15%] h-[520px] w-[520px] rounded-full bg-[#7c55e7]/[0.12] blur-[180px]"
      />

      <motion.div
        animate={{
          x: [70, -80, 70],
          y: [80, -40, 80],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-[220px] top-[42%] h-[560px] w-[560px] rounded-full bg-[#a37df5]/[0.09] blur-[190px]"
      />
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-[#9f7bf4]/20 bg-[#9f7bf4]/[0.045] px-4 py-2 backdrop-blur-2xl">
      <motion.span
        animate={{
          opacity: [0.25, 1, 0.25],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
        className="h-1.5 w-1.5 rounded-full bg-[#a98cff]"
      />

      <span className="font-mono text-[8px] tracking-[0.27em] text-white/40">
        {children}
      </span>
    </div>
  );
}

function Hero({ page }: { page: PageConfig }) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 850], [0, 120]);
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);

  return (
    <section className="relative min-h-[930px] overflow-hidden border-b border-white/[0.07] bg-black">
      <GlowBackground />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto flex min-h-[930px] max-w-[1420px] flex-col justify-center px-5 pb-24 pt-40 md:px-10"
      >
        <div className="flex items-center justify-between">
          <Label>{page.eyebrow}</Label>

          <span className="font-mono text-[8px] tracking-[0.3em] text-white/20">
            {page.index}
          </span>
        </div>

        <div className="mt-20">
          {page.hero.map((line, index) => (
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
                  delay: 0.12 * index,
                  ease,
                }}
                className={`text-[54px] font-medium leading-[0.91] tracking-[-0.065em] sm:text-[72px] md:text-[94px] lg:text-[112px] ${
                  index === 2
                    ? "text-[#8468bd]"
                    : "text-white"
                }`}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/[0.08] pt-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex items-start gap-3">
            <Activity className="mt-0.5 h-4 w-4 text-[#9f7bf4]" />

            <div>
              <span className="font-mono text-[8px] tracking-[0.25em] text-white/25">
                HUMAN SECURITY / LEARNING ACTIVE
              </span>
            </div>
          </div>

          <div>
            <p className="max-w-[650px] text-[13px] leading-7 text-white/[0.52]">
              {page.description}
            </p>

            <a
              href="#learning"
              className="mt-7 inline-flex items-center gap-3 text-[10px] text-white/40 transition hover:text-white"
            >
              Explore learning system
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function AwarenessTicker() {
  const items = [
    "RECOGNIZE",
    "QUESTION",
    "VERIFY",
    "PROTECT",
    "REPORT",
    "LEARN",
    "REINFORCE",
  ];

  return (
    <section className="overflow-hidden border-b border-white/[0.07] bg-[#030303] py-5">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max"
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-5 px-11"
          >
            <CircleDot className="h-3 w-3 text-[#9875ed]" />

            <span className="font-mono text-[8px] tracking-[0.28em] text-white/25">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function Philosophy({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-black px-5 py-32 md:px-10 lg:py-44">
      <div className="absolute left-[10%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#8058df]/[0.08] blur-[180px]" />

      <div className="relative mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[0.4fr_1.6fr]">
        <Reveal>
          <span className="font-mono text-[8px] tracking-[0.28em] text-white/20">
            LEARNING PRINCIPLE
          </span>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="max-w-[960px] text-[42px] font-medium leading-[1.04] tracking-[-0.055em] md:text-[68px]">
              {page.philosophyTitle}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-[760px] border-l border-[#9f7bf4]/40 pl-7 text-[13px] leading-8 text-white/[0.46]">
              {page.philosophyText}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LearningJourney({ page }: { page: PageConfig }) {
  return (
    <section
      id="learning"
      className="relative overflow-hidden border-b border-white/[0.07] bg-[#030303] px-5 py-32 md:px-10 lg:py-40"
    >
      <GlowBackground />

      <div className="relative mx-auto max-w-[1320px]">
        <Reveal>
          <Label>LEARNING JOURNEY</Label>

          <h2 className="mt-8 max-w-[720px] text-[42px] font-medium leading-[1.05] tracking-[-0.055em] md:text-[62px]">
            Knowledge becomes useful
            <span className="block text-white/25">
              when it changes a decision.
            </span>
          </h2>
        </Reveal>

        <div className="mt-20">
          {page.stages.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              className="group grid gap-5 border-t border-white/[0.08] py-9 md:grid-cols-[100px_280px_1fr]"
            >
              <span className="font-mono text-[8px] tracking-[0.2em] text-[#9d7bf4]">
                {item.number}
              </span>

              <h3 className="text-[24px] font-medium tracking-[-0.04em] text-white/70 transition group-hover:text-white">
                {item.title}
              </h3>

              <p className="max-w-[620px] text-[12px] leading-7 text-white/[0.4]">
                {item.text}
              </p>
            </motion.article>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}

function LearningField({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-black px-5 py-32 md:px-10">
      <div className="absolute right-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#805ce0]/[0.08] blur-[180px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <BookOpen className="h-5 w-5 text-[#9f7bf4]" />

              <h2 className="mt-8 text-[42px] font-medium leading-[1.05] tracking-[-0.055em] md:text-[58px]">
                {page.learningTitle}
              </h2>

              <p className="mt-7 max-w-[470px] text-[12px] leading-7 text-white/[0.4]">
                {page.learningText}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {page.learning.map((item, index) => (
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(159,123,244,.3)",
                }}
                className="group relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#050505] p-8"
              >
                <div className="absolute right-[-80px] top-[-80px] h-[170px] w-[170px] rounded-full bg-[#8763df]/[0.07] blur-[70px]" />

                <div className="relative flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025]">
                    {index === 0 && (
                      <Eye className="h-3.5 w-3.5 text-[#a98cff]" />
                    )}

                    {index === 1 && (
                      <ShieldCheck className="h-3.5 w-3.5 text-[#a98cff]" />
                    )}

                    {index === 2 && (
                      <FileText className="h-3.5 w-3.5 text-[#a98cff]" />
                    )}

                    {index === 3 && (
                      <Workflow className="h-3.5 w-3.5 text-[#a98cff]" />
                    )}
                  </span>

                  <span className="font-mono text-[8px] text-white/15">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative mt-24">
                  <h3 className="text-[22px] font-medium tracking-[-0.035em] text-white/75 transition group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[12px] leading-7 text-white/[0.4]">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BehaviorLoop() {
  const steps = [
    {
      number: "01",
      title: "SIGNAL",
      text: "A situation requires attention.",
    },
    {
      number: "02",
      title: "PAUSE",
      text: "Create time before acting.",
    },
    {
      number: "03",
      title: "ASSESS",
      text: "Apply learned security context.",
    },
    {
      number: "04",
      title: "ACTION",
      text: "Choose the appropriate response.",
    },
    {
      number: "05",
      title: "REPORT",
      text: "Escalate when additional support is needed.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-[#030303] px-5 py-32 md:px-10">
      <GlowBackground />

      <div className="relative mx-auto max-w-[1320px]">
        <Reveal>
          <div className="flex items-center gap-3">
            <Activity className="h-4 w-4 text-[#9f7bf4]" />

            <span className="font-mono text-[8px] tracking-[0.28em] text-white/20">
              BEHAVIOR LOOP
            </span>
          </div>

          <h2 className="mt-8 max-w-[750px] text-[42px] font-medium leading-[1.05] tracking-[-0.055em] md:text-[62px]">
            Create space between
            <span className="block text-[#7d679e]">
              signal and action.
            </span>
          </h2>
        </Reveal>

        <div className="relative mt-20 overflow-hidden rounded-[30px] border border-white/[0.08] bg-black/70 p-5 backdrop-blur-2xl md:p-8">
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-px w-[40%] bg-gradient-to-r from-transparent via-[#9f7bf4] to-transparent"
          />

          <div className="grid lg:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="relative border-b border-white/[0.07] p-6 last:border-b-0 lg:min-h-[260px] lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <span className="font-mono text-[8px] text-[#9f7bf4]">
                  {step.number}
                </span>

                <h3 className="mt-16 text-[15px] tracking-[0.14em] text-white/65">
                  {step.title}
                </h3>

                <p className="mt-5 text-[11px] leading-6 text-white/[0.35]">
                  {step.text}
                </p>

                {index < steps.length - 1 && (
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute right-[-8px] top-1/2 z-10 hidden h-4 w-4 items-center justify-center rounded-full border border-[#9f7bf4]/30 bg-black lg:flex"
                  >
                    <ArrowRight className="h-2 w-2 text-[#9f7bf4]" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceMatrix({ page }: { page: PageConfig }) {
  return (
    <section className="border-b border-white/[0.07] bg-black px-5 py-32 md:px-10">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <div className="flex items-center gap-3">
            <Users className="h-4 w-4 text-[#9f7bf4]" />

            <span className="font-mono text-[8px] tracking-[0.28em] text-white/20">
              AUDIENCE DESIGN
            </span>
          </div>

          <h2 className="mt-8 max-w-[780px] text-[42px] font-medium leading-[1.05] tracking-[-0.055em] md:text-[60px]">
            {page.audienceTitle}
          </h2>
        </Reveal>

        <div className="mt-16 overflow-hidden rounded-[28px] border border-white/[0.08]">
          {page.audience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.07,
              }}
              whileHover={{
                backgroundColor: "rgba(159,123,244,.035)",
              }}
              className="grid min-h-[130px] items-center gap-5 border-b border-white/[0.07] px-7 last:border-b-0 md:grid-cols-[90px_300px_1fr]"
            >
              <span className="font-mono text-[8px] text-[#9f7bf4]">
                AUD-0{index + 1}
              </span>

              <h3 className="text-[16px] font-medium text-white/65">
                {item.title}
              </h3>

              <p className="max-w-[600px] text-[12px] leading-7 text-white/[0.38]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-[#030303] px-5 py-32 md:px-10">
      <div className="absolute -left-[180px] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#835de3]/[0.07] blur-[170px]" />

      <div className="relative mx-auto max-w-[1120px]">
        <Reveal>
          <span className="font-mono text-[8px] tracking-[0.28em] text-white/20">
            LEARNING OUTCOMES
          </span>

          <h2 className="mt-8 max-w-[650px] text-[42px] font-medium leading-[1.05] tracking-[-0.055em] md:text-[58px]">
            Awareness designed
            <span className="block text-white/25">
              to support action.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16">
          {page.outcomes.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
              }}
              whileHover={{
                x: 8,
              }}
              className="group flex items-center justify-between border-t border-white/[0.08] py-7"
            >
              <div className="flex items-center gap-8">
                <span className="font-mono text-[8px] text-[#9f7bf4]">
                  0{index + 1}
                </span>

                <span className="text-[15px] text-white/45 transition group-hover:text-white/80">
                  {item}
                </span>
              </div>

              <CheckCircle2 className="h-4 w-4 text-white/20 transition group-hover:text-[#a98cff]" />
            </motion.div>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-40 md:px-10 lg:py-52">
      <GlowBackground />

      <div className="relative mx-auto max-w-[1050px] text-center">
        <Reveal>
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(159,123,244,0)",
                "0 0 100px rgba(159,123,244,.18)",
                "0 0 0 rgba(159,123,244,0)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="mx-auto mb-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#9f7bf4]/25 bg-[#9f7bf4]/[0.05]"
          >
            <ShieldCheck className="h-5 w-5 text-[#b59cff]" />
          </motion.div>

          <Label>{page.eyebrow}</Label>

          <h2 className="mt-9 text-[48px] font-medium leading-[1] tracking-[-0.06em] md:text-[76px]">
            {page.closing[0]}

            <span className="block text-[#80689f]">
              {page.closing[1]}
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[640px] text-[13px] leading-7 text-white/[0.43]">
            {page.closingText}
          </p>

          <motion.a
            href="/contact"
            whileHover={{
              y: -5,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[11px] font-medium text-black"
          >
            Discuss awareness program

            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}

export default function SecurityAwarenessClient({
  pageKey,
}: {
  pageKey: AwarenessPageKey;
}) {
  const page = pages[pageKey];

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="relative overflow-x-hidden bg-black text-white">
      <motion.div
        style={{
          scaleX: progress,
        }}
        className="fixed left-0 right-0 top-0 z-[999] h-[2px] origin-left bg-[#9f7bf4]"
      />

      <Hero page={page} />
      <AwarenessTicker />
      <Philosophy page={page} />
      <LearningJourney page={page} />
      <LearningField page={page} />
      <BehaviorLoop />
      <AudienceMatrix page={page} />
      <Outcomes page={page} />
      <FinalCTA page={page} />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: #9f7bf4;
          color: #000000;
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