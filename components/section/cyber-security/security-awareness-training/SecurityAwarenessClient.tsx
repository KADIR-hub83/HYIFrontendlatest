"use client";

import {
  motion,
  useReducedMotion,
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

/* -------------------------------------------------------------------------- */
/* CONTENT                                                                    */
/* -------------------------------------------------------------------------- */

const pages: Record<AwarenessPageKey, PageConfig> = {
  "cybersecurity-awareness": {
    index: "01 / 11",
    eyebrow: "CYBERSECURITY AWARENESS TRAINING",
    hero: ["Security starts", "with informed", "decisions."],
    description:
      "Build practical cybersecurity awareness that helps people recognize common digital risks, understand their role in protecting information and make safer decisions during everyday work.",

    philosophyTitle:
      "Awareness should change behavior, not simply complete a requirement.",
    philosophyText:
      "Effective awareness connects security concepts with the decisions people make every day. Training becomes more useful when employees understand why a risk matters, what warning signs look like and what action they should take.",

    stages: [
      { number: "01", title: "Understand", text: "Introduce security risks using clear workplace context rather than unnecessary technical complexity." },
      { number: "02", title: "Recognize", text: "Help employees identify suspicious activity, unsafe requests and common warning signs." },
      { number: "03", title: "Decide", text: "Build confidence around choosing safer actions when something feels unusual." },
      { number: "04", title: "Report", text: "Make reporting expectations and escalation channels clear." },
      { number: "05", title: "Reinforce", text: "Use recurring learning to keep security knowledge relevant over time." },
    ],

    learningTitle: "Security knowledge designed for everyday work.",
    learningText:
      "The learning experience focuses on practical situations employees may encounter across communication, identity, information handling and digital collaboration.",

    learning: [
      { title: "Identity & access", text: "Understand safer authentication habits, account protection and responsible access." },
      { title: "Email & messaging", text: "Recognize suspicious messages, unusual requests and communication risks." },
      { title: "Information handling", text: "Build awareness around sensitive business information and appropriate sharing." },
      { title: "Device security", text: "Understand everyday practices that support safer workplace devices." },
    ],

    audienceTitle: "Learning that reaches different parts of the organization.",

    audience: [
      { title: "New employees", text: "Establish security expectations early in the employee journey." },
      { title: "Existing workforce", text: "Reinforce relevant security behaviors through ongoing awareness." },
      { title: "Managers", text: "Help leaders reinforce security expectations within their teams." },
      { title: "Specialized roles", text: "Adapt learning around role-specific responsibilities and exposure." },
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
    hero: ["Practice the", "moment before", "the click."],
    description:
      "Use controlled phishing simulations to help employees recognize suspicious communication, practice safer responses and strengthen reporting behavior without turning awareness into a blame exercise.",

    philosophyTitle:
      "Simulation is most useful when it becomes a learning moment.",
    philosophyText:
      "The goal is not to catch employees making mistakes. A useful phishing program provides realistic practice, immediate context and clear guidance so people become more confident when suspicious communication appears.",

    stages: [
      { number: "01", title: "Plan", text: "Define the learning objective, audience and approved simulation boundaries." },
      { number: "02", title: "Simulate", text: "Deliver controlled scenarios aligned with common workplace communication patterns." },
      { number: "03", title: "Observe", text: "Measure relevant interaction and reporting behavior at an aggregate level." },
      { number: "04", title: "Educate", text: "Provide timely explanations of the warning signs contained in the exercise." },
      { number: "05", title: "Reinforce", text: "Use future learning to strengthen areas where additional awareness is useful." },
    ],

    learningTitle: "Teach people what suspicious communication feels like.",
    learningText:
      "Controlled exercises help employees practice recognizing unusual requests without waiting for a real security event.",

    learning: [
      { title: "Message context", text: "Look beyond appearance and evaluate whether the request makes sense." },
      { title: "Urgency signals", text: "Recognize pressure designed to encourage action without verification." },
      { title: "Identity cues", text: "Pay attention to unexpected sender or communication behavior." },
      { title: "Reporting behavior", text: "Know how and when suspicious communication should be reported." },
    ],

    audienceTitle: "Simulation can adapt to different working contexts.",

    audience: [
      { title: "General workforce", text: "Build foundational recognition and reporting habits." },
      { title: "Finance teams", text: "Practice scenarios involving sensitive financial requests." },
      { title: "Privileged users", text: "Reinforce awareness around higher-impact account access." },
      { title: "Leadership", text: "Address communication patterns relevant to senior roles." },
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
    hero: ["Turn training", "into an ongoing", "security program."],
    description:
      "Design a structured awareness program that connects learning campaigns, role-based education, communication, measurement and continuous reinforcement across the organization.",

    philosophyTitle:
      "Security awareness works better as a program than as an annual event.",
    philosophyText:
      "People encounter changing technology, processes and risks throughout the year. A structured program creates an ongoing rhythm of education and communication rather than relying on a single training moment.",

    stages: [
      { number: "01", title: "Baseline", text: "Understand audiences, responsibilities and existing awareness activities." },
      { number: "02", title: "Design", text: "Build a learning calendar around organizational priorities." },
      { number: "03", title: "Deliver", text: "Coordinate training, campaigns and targeted communication." },
      { number: "04", title: "Measure", text: "Review meaningful participation and behavior indicators." },
      { number: "05", title: "Evolve", text: "Adjust the program as business needs and risks change." },
    ],

    learningTitle: "One program. Multiple learning channels.",
    learningText:
      "Combine structured training with shorter awareness touchpoints so security remains visible without overwhelming employees.",

    learning: [
      { title: "Core curriculum", text: "Foundational security education relevant across the workforce." },
      { title: "Awareness campaigns", text: "Focused communication around timely security topics." },
      { title: "Role-based learning", text: "Additional guidance aligned with specific responsibilities." },
      { title: "Reinforcement", text: "Short recurring learning that keeps important behaviors visible." },
    ],

    audienceTitle: "A program designed around organizational audiences.",

    audience: [
      { title: "Workforce", text: "Consistent foundational security understanding." },
      { title: "Managers", text: "Guidance for reinforcing expected behavior." },
      { title: "High-impact roles", text: "Additional learning where responsibilities require it." },
      { title: "Leadership", text: "Awareness aligned with governance and business risk." },
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
    hero: ["Give every", "employee a clear", "security role."],
    description:
      "Translate cybersecurity expectations into understandable workplace practices so employees know how to protect accounts, information, devices and business communication.",

    philosophyTitle:
      "Employees need practical guidance they can use while doing their jobs.",
    philosophyText:
      "Security training becomes meaningful when it connects policy with real work. People should leave training knowing which behaviors matter, why they matter and what to do when something appears unusual.",

    stages: [
      { number: "01", title: "Introduce", text: "Establish foundational workplace security expectations." },
      { number: "02", title: "Contextualize", text: "Connect security principles with common employee activities." },
      { number: "03", title: "Practice", text: "Use scenarios to reinforce decision-making." },
      { number: "04", title: "Confirm", text: "Check understanding of important responsibilities." },
      { number: "05", title: "Refresh", text: "Reinforce learning throughout the employee lifecycle." },
    ],

    learningTitle: "Practical security for the modern employee.",
    learningText:
      "Focus training on decisions employees make across accounts, devices, communication and information handling.",

    learning: [
      { title: "Account protection", text: "Build safer authentication and access habits." },
      { title: "Safe communication", text: "Recognize suspicious or unexpected digital requests." },
      { title: "Data responsibility", text: "Understand appropriate information handling and sharing." },
      { title: "Reporting", text: "Know where to raise security concerns quickly." },
    ],

    audienceTitle: "Training across the employee lifecycle.",

    audience: [
      { title: "Onboarding", text: "Introduce expectations when employees join." },
      { title: "Annual learning", text: "Refresh important security concepts." },
      { title: "Role transitions", text: "Adapt training as responsibilities change." },
      { title: "Targeted refreshers", text: "Address specific awareness needs when useful." },
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
    hero: ["Cyber risk", "belongs in the", "leadership room."],
    description:
      "Help executives understand cybersecurity through the lens of business impact, governance, decision authority, incident leadership and organizational resilience.",

    philosophyTitle:
      "Executives do not need analyst training. They need decision context.",
    philosophyText:
      "Leadership education should translate cybersecurity into operational, financial, governance and reputational considerations so executives can participate effectively in security decisions and major incidents.",

    stages: [
      { number: "01", title: "Frame", text: "Connect cybersecurity with business priorities and responsibilities." },
      { number: "02", title: "Translate", text: "Explain technical risk through business-relevant context." },
      { number: "03", title: "Exercise", text: "Use leadership scenarios to explore decision points." },
      { number: "04", title: "Govern", text: "Clarify oversight, accountability and escalation expectations." },
      { number: "05", title: "Prepare", text: "Strengthen executive readiness for significant incidents." },
    ],

    learningTitle: "Cybersecurity through an executive lens.",
    learningText:
      "Focus on the decisions leaders may need to make rather than operational security mechanics.",

    learning: [
      { title: "Business impact", text: "Understand how cyber events can affect operations and strategic objectives." },
      { title: "Governance", text: "Clarify leadership responsibilities and security oversight." },
      { title: "Crisis decisions", text: "Explore leadership choices during major incidents." },
      { title: "Risk communication", text: "Improve conversations between technical teams and leadership." },
    ],

    audienceTitle: "Designed around leadership responsibilities.",

    audience: [
      { title: "Executive leadership", text: "Connect security risk with organizational decisions." },
      { title: "Business leaders", text: "Understand dependencies and operational exposure." },
      { title: "Board audiences", text: "Support informed governance-level security discussions." },
      { title: "Crisis leadership", text: "Prepare decision-makers for high-impact incidents." },
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
    hero: ["Work anywhere.", "Keep security", "with you."],
    description:
      "Help distributed employees understand safer ways to access business systems, handle information, communicate and protect devices while working outside traditional office environments.",

    philosophyTitle:
      "Remote work changes the environment, not the responsibility.",
    philosophyText:
      "Employees working across homes, travel locations and shared environments need practical guidance that helps them maintain security even when familiar office controls are no longer around them.",

    stages: [
      { number: "01", title: "Connect", text: "Understand approved access and connectivity practices." },
      { number: "02", title: "Protect", text: "Maintain device and account security outside the office." },
      { number: "03", title: "Handle", text: "Protect sensitive information in remote environments." },
      { number: "04", title: "Communicate", text: "Use collaboration tools with appropriate awareness." },
      { number: "05", title: "Report", text: "Escalate suspicious events regardless of location." },
    ],

    learningTitle: "Security that travels with the workforce.",
    learningText:
      "Remote-working education connects digital security with physical environment, connectivity and communication choices.",

    learning: [
      { title: "Remote access", text: "Understand safer approaches to accessing organizational services." },
      { title: "Device awareness", text: "Protect workplace devices while outside controlled environments." },
      { title: "Information privacy", text: "Reduce unintended exposure in shared or public spaces." },
      { title: "Collaboration security", text: "Use remote communication tools with appropriate care." },
    ],

    audienceTitle: "Built for distributed ways of working.",

    audience: [
      { title: "Remote employees", text: "Maintain consistent security away from offices." },
      { title: "Hybrid workforce", text: "Adapt securely between working environments." },
      { title: "Frequent travelers", text: "Understand additional considerations while travelling." },
      { title: "Remote managers", text: "Reinforce secure practices across distributed teams." },
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
    hero: ["Question the", "request before", "trusting it."],
    description:
      "Help employees recognize manipulation, unusual requests, impersonation and pressure tactics across digital and human communication channels.",

    philosophyTitle:
      "Social engineering targets trust before it targets technology.",
    philosophyText:
      "Awareness should help people recognize situations where urgency, authority, familiarity or curiosity may be used to influence a decision without appropriate verification.",

    stages: [
      { number: "01", title: "Recognize", text: "Understand common manipulation patterns." },
      { number: "02", title: "Pause", text: "Create space before responding to unusual pressure." },
      { number: "03", title: "Verify", text: "Confirm sensitive requests through appropriate channels." },
      { number: "04", title: "Protect", text: "Avoid unnecessary disclosure of sensitive information." },
      { number: "05", title: "Report", text: "Escalate suspicious interactions quickly." },
    ],

    learningTitle: "Teach recognition across communication channels.",
    learningText:
      "Social engineering awareness should extend beyond email to the broader ways people communicate and exchange information.",

    learning: [
      { title: "Impersonation", text: "Recognize requests that rely on assumed identity or authority." },
      { title: "Urgency", text: "Notice pressure intended to reduce careful decision-making." },
      { title: "Information requests", text: "Understand when additional verification is appropriate." },
      { title: "Unexpected contact", text: "Treat unusual communication with appropriate caution." },
    ],

    audienceTitle: "Awareness for people who communicate, approve and share.",

    audience: [
      { title: "Employees", text: "Recognize manipulation during routine work." },
      { title: "Customer-facing teams", text: "Handle unusual external requests appropriately." },
      { title: "Finance & operations", text: "Verify sensitive transactional requests." },
      { title: "Executives", text: "Recognize impersonation patterns relevant to senior roles." },
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
    hero: ["See something.", "Know where", "to report it."],
    description:
      "Teach employees how to recognize potential security events, capture useful context and report concerns through established organizational channels.",

    philosophyTitle: "Fast reporting begins with clear expectations.",
    philosophyText:
      "Employees should not need to determine whether something is definitely a cyber incident before raising a concern. Training should make the reporting threshold, process and available channels easy to understand.",

    stages: [
      { number: "01", title: "Notice", text: "Recognize events that may warrant security attention." },
      { number: "02", title: "Assess", text: "Understand what basic context may be useful." },
      { number: "03", title: "Report", text: "Use the approved organizational reporting path." },
      { number: "04", title: "Preserve", text: "Avoid unnecessary actions that could remove useful context." },
      { number: "05", title: "Support", text: "Know what may happen after a report is submitted." },
    ],

    learningTitle: "Make security reporting easy to understand.",
    learningText:
      "Reporting education should reduce hesitation by giving employees simple guidance for common security concerns.",

    learning: [
      { title: "What to report", text: "Understand examples of activity that should be raised." },
      { title: "Where to report", text: "Know the approved communication or reporting channel." },
      { title: "Useful context", text: "Provide relevant information without attempting an investigation." },
      { title: "What happens next", text: "Understand how security teams may follow up." },
    ],

    audienceTitle: "Reporting confidence across the workforce.",

    audience: [
      { title: "All employees", text: "Create a common reporting baseline." },
      { title: "Managers", text: "Support employees who raise security concerns." },
      { title: "Service teams", text: "Recognize security signals during customer interaction." },
      { title: "Remote teams", text: "Maintain reporting access outside office environments." },
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
    hero: ["Turn policy", "into everyday", "practice."],
    description:
      "Translate organizational security policies into understandable responsibilities, workplace scenarios and practical guidance employees can apply during daily work.",

    philosophyTitle:
      "A policy has limited value when people cannot translate it into action.",
    philosophyText:
      "Policy training should explain not only what an organization expects, but how those expectations apply to accounts, information, devices, communication and common workplace decisions.",

    stages: [
      { number: "01", title: "Interpret", text: "Translate policy language into understandable expectations." },
      { number: "02", title: "Contextualize", text: "Connect requirements with workplace situations." },
      { number: "03", title: "Teach", text: "Explain responsibilities through focused learning." },
      { number: "04", title: "Confirm", text: "Support understanding and acknowledgement where appropriate." },
      { number: "05", title: "Refresh", text: "Update learning when policies or responsibilities change." },
    ],

    learningTitle: "From written requirement to practical responsibility.",
    learningText:
      "Policy education helps employees understand how organizational requirements affect their own work.",

    learning: [
      { title: "Acceptable use", text: "Clarify responsible use of organizational technology." },
      { title: "Information handling", text: "Explain responsibilities around sensitive information." },
      { title: "Access responsibilities", text: "Connect identity and access rules with everyday behavior." },
      { title: "Reporting obligations", text: "Explain when and how security concerns should be raised." },
    ],

    audienceTitle: "Policy understanding tailored to responsibility.",

    audience: [
      { title: "General workforce", text: "Understand common security policy expectations." },
      { title: "Managers", text: "Reinforce policy within operational teams." },
      { title: "Privileged roles", text: "Understand additional access-related responsibilities." },
      { title: "New joiners", text: "Establish policy expectations during onboarding." },
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
    hero: ["Make security", "part of how", "people work."],
    description:
      "Strengthen organizational security culture through leadership reinforcement, employee engagement, communication and recurring learning that keeps cybersecurity connected with everyday work.",

    philosophyTitle:
      "Culture forms when expected behavior becomes normal behavior.",
    philosophyText:
      "Security culture develops through repeated signals from leadership, managers, processes and peers. Training contributes, but culture also depends on whether people feel confident asking questions and reporting concerns.",

    stages: [
      { number: "01", title: "Listen", text: "Understand existing attitudes and security friction." },
      { number: "02", title: "Align", text: "Connect security messages with organizational values." },
      { number: "03", title: "Engage", text: "Create recurring employee participation." },
      { number: "04", title: "Reinforce", text: "Support security behavior through managers and communication." },
      { number: "05", title: "Evolve", text: "Adjust initiatives based on organizational learning." },
    ],

    learningTitle: "Culture grows through repeated security signals.",
    learningText:
      "Combine learning, communication and leadership reinforcement to make secure behavior feel like a normal part of work.",

    learning: [
      { title: "Leadership signals", text: "Demonstrate visible support for responsible security behavior." },
      { title: "Employee engagement", text: "Create opportunities for participation and discussion." },
      { title: "Manager reinforcement", text: "Help managers keep security relevant within teams." },
      { title: "Positive reporting", text: "Encourage people to raise concerns without unnecessary hesitation." },
    ],

    audienceTitle: "Culture requires participation at every level.",

    audience: [
      { title: "Leadership", text: "Set visible expectations and priorities." },
      { title: "Managers", text: "Translate culture into team behavior." },
      { title: "Employees", text: "Participate in safer everyday practices." },
      { title: "Security champions", text: "Help extend security conversations across teams." },
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
    hero: ["Learn together.", "Practice decisions.", "Build readiness."],
    description:
      "Bring teams together through facilitated cybersecurity workshops designed around discussion, scenarios, organizational responsibilities and practical security decision-making.",

    philosophyTitle:
      "Interactive learning creates space for questions that static training cannot.",
    philosophyText:
      "Workshops allow teams to explore security situations together, compare perspectives and understand how responsibilities connect across technical and business functions.",

    stages: [
      { number: "01", title: "Define", text: "Choose the workshop objective and audience." },
      { number: "02", title: "Contextualize", text: "Adapt scenarios around organizational responsibilities." },
      { number: "03", title: "Facilitate", text: "Guide participants through structured discussion." },
      { number: "04", title: "Explore", text: "Examine decisions, dependencies and communication." },
      { number: "05", title: "Capture", text: "Record useful observations and follow-up themes." },
    ],

    learningTitle: "Interactive cybersecurity learning.",
    learningText:
      "Workshops can bring security concepts into a collaborative environment where participants can discuss how they would respond.",

    learning: [
      { title: "Scenario workshops", text: "Explore realistic security situations through facilitated discussion." },
      { title: "Role-based sessions", text: "Focus on responsibilities relevant to specific teams." },
      { title: "Leadership sessions", text: "Explore governance and incident decision-making." },
      { title: "Awareness workshops", text: "Build practical understanding around selected security topics." },
    ],

    audienceTitle: "Sessions designed around the people in the room.",

    audience: [
      { title: "Employees", text: "Explore everyday security situations interactively." },
      { title: "Technical teams", text: "Discuss responsibilities and coordination." },
      { title: "Business teams", text: "Connect cyber risk with operational processes." },
      { title: "Executives", text: "Practice leadership decisions through scenarios." },
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

/* -------------------------------------------------------------------------- */
/* MOTION HELPERS                                                             */
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2">
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_14px_rgba(167,139,250,.9)]"
      />
      <span className="font-mono text-[11px] tracking-[0.2em] text-white/60">
        {children}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* BACKGROUND                                                                 */
/* -------------------------------------------------------------------------- */

function GlowBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [-100, 90, -100], y: [-50, 80, -50] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-32 h-[520px] w-[520px] rounded-full bg-[#6d28d9]/[0.13] blur-[160px]"
      />

      <motion.div
        animate={{ x: [90, -80, 90], y: [50, -70, 50] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-100px] top-[20%] h-[480px] w-[480px] rounded-full bg-[#8b5cf6]/[0.1] blur-[170px]"
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(196,181,253,.9) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "linear-gradient(to bottom, black, transparent 94%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 94%)",
        }}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */

function Hero({ page }: { page: PageConfig }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 120]);
  const opacity = useTransform(scrollY, [0, 700], [1, 0.15]);

  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-black">
      <GlowBackground />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto flex max-w-[1450px] flex-col justify-center px-5 pb-10 pt-30 max-md:pt-20 md:px-10 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Label>{page.eyebrow}</Label>
        </motion.div>

        <div className="mt-6">
          {page.hero.map((line, index) => (
            <div key={line} className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.1 + index * 0.11,
                  ease,
                }}
                className={`hyi-h1 text-[52px] leading-[0.91] tracking-[-0.065em] sm:text-[68px] md:text-[88px] lg:text-[80px] ${
                  index === 2 ? "hyi-blue" : "hyi-white"
                }`}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-6 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_520px]"
        >
          <div className="flex items-center gap-3">
            <Activity className="h-4.5 w-4.5 hyi-blue-icon" />
            <span className="hyi-h3 hyi-white">
              HUMAN SECURITY / LEARNING ACTIVE
            </span>
          </div>

          <div>
            <p className="hyi-p">{page.description}</p>

            <a
              href="#learning"
              className="hyi-white mt-6 inline-flex items-center gap-3 text-[14px] font-semibold transition hover:text-[#a78bfa]"
            >
              Explore learning system
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* TICKER                                                                     */
/* -------------------------------------------------------------------------- */

const tickerItems = [
  "RECOGNIZE",
  "QUESTION",
  "VERIFY",
  "PROTECT",
  "REPORT",
  "LEARN",
  "REINFORCE",
];

function AwarenessTicker() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="overflow-hidden border-b border-white/[0.06] bg-[#030303]"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex w-max py-5"
      >
        {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
          (item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-4 px-8"
            >
              <CircleDot className="h-4 w-4 text-[#8b5cf6]" />
              <span className="font-mono text-[12px] tracking-[0.24em] text-white/75">
                {item}
              </span>
            </div>
          ),
        )}
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PHILOSOPHY                                                                 */
/* -------------------------------------------------------------------------- */

function Philosophy({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10 md:py-14 lg:px-20">
      <div className="absolute left-[10%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <Reveal>
          <div className="flex items-center gap-3">
            <Eye className="h-4.5 w-4.5 hyi-blue-icon" />
            <span className="hyi-h3 hyi-white">LEARNING PRINCIPLE</span>
          </div>

          <h2 className="hyi-h1 hyi-white mt-6 max-w-[1000px] text-[40px] font-medium leading-[1.04] tracking-[-0.055em] md:text-[60px] lg:text-[66px]">
            {page.philosophyTitle}
          </h2>

          <div className="mt-8 grid gap-6 border-t border-white/[0.08] pt-8 lg:grid-cols-2">
            <span className="hyi-h3 hyi-blue">
              LEARN → DECIDE → REPORT
            </span>
            <p className="hyi-p max-w-[600px]">{page.philosophyText}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* LEARNING JOURNEY                                                           */
/* -------------------------------------------------------------------------- */

function LearningJourney({ page }: { page: PageConfig }) {
  return (
    <section
      id="learning"
      className="bg-[#030303] px-5 py-10 md:px-10 md:py-14 lg:px-20"
    >
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <h2 className="hyi-h1 max-w-[750px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[55px]">
            <span className="hyi-white">Knowledge becomes useful</span>
            <span className="block text-white/25">
              when it changes a decision.
            </span>
          </h2>
        </Reveal>

        <div className="mt-8">
          {page.stages.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.055, duration: 0.6 }}
              whileHover={{
                x: 8,
                backgroundColor: "rgba(139,92,246,.025)",
              }}
              className="group grid gap-3 border-t border-white/[0.07] px-3 py-7 md:grid-cols-[80px_240px_1fr] md:items-center"
            >
              <span className="font-mono text-[12px] text-[#a78bfa]">
                {item.number}
              </span>
              <h3 className="hyi-h3 hyi-white">{item.title}</h3>
              <p className="hyi-p max-w-[620px]">{item.text}</p>
            </motion.article>
          ))}

          <div className="border-t border-white/[0.07]" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* LEARNING FIELD                                                             */
/* -------------------------------------------------------------------------- */

const fieldIcons = [Eye, ShieldCheck, FileText, Workflow];

function LearningField({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10 md:py-14 lg:px-20">
      <div className="absolute right-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/10 blur-[170px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <BookOpen className="h-5 w-5 hyi-blue-icon" />

              <h2 className="hyi-h1 hyi-white mt-4 max-w-[460px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[50px]">
                {page.learningTitle}
              </h2>

              <p className="hyi-p mt-4 max-w-[430px]">{page.learningText}</p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {page.learning.map((item, index) => {
              const Icon = fieldIcons[index % fieldIcons.length];

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.7 }}
                  whileHover={{ y: -6 }}
                  className="hyi-skeu group relative overflow-hidden p-6 md:p-7"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#7c3aed]/10 blur-3xl" />

                  <div className="relative flex items-center justify-between">
                    <Icon className="h-5 w-5 hyi-blue-icon" />
                    <span className="font-mono text-[12px] text-white/50">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <h3 className="hyi-h3 hyi-white">{item.title}</h3>
                    <p className="hyi-p mt-2">{item.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* BEHAVIOR LOOP                                                              */
/* -------------------------------------------------------------------------- */

const loopSteps = [
  { number: "01", title: "SIGNAL", text: "A situation requires attention." },
  { number: "02", title: "PAUSE", text: "Create time before acting." },
  { number: "03", title: "ASSESS", text: "Apply learned security context." },
  { number: "04", title: "ACTION", text: "Choose the appropriate response." },
  {
    number: "05",
    title: "REPORT",
    text: "Escalate when additional support is needed.",
  },
];

function BehaviorLoop() {
  return (
    <section className="bg-[#030303] px-5 py-10 md:px-10 md:py-14 lg:px-20">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <div className="flex items-center gap-3">
            <Activity className="h-4.5 w-4.5 hyi-blue-icon" />
            <span className="hyi-h3 hyi-white">BEHAVIOR LOOP</span>
          </div>

          <h2 className="hyi-h1 mt-4 max-w-[750px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[52px]">
            <span className="hyi-white">Create space between</span>
            <span className="block hyi-blue">signal and action.</span>
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {loopSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="hyi-skeu relative p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] text-[#a78bfa]">
                  {step.number}
                </span>

                {index < loopSteps.length - 1 && (
                  <ArrowRight className="hyi-white-icon hidden h-4 w-4 lg:block" />
                )}
              </div>

              <h3 className="hyi-h3 hyi-white mt-6 tracking-[0.1em]">
                {step.title}
              </h3>
              <p className="hyi-p mt-2">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* AUDIENCE                                                                   */
/* -------------------------------------------------------------------------- */

function AudienceMatrix({ page }: { page: PageConfig }) {
  return (
    <section className="bg-black px-5 py-10 md:px-10 md:py-14 lg:px-20">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <div className="flex items-center gap-3">
            <Users className="h-4.5 w-4.5 hyi-blue-icon" />
            <span className="hyi-h3 hyi-white">AUDIENCE DESIGN</span>
          </div>

          <h2 className="hyi-h1 hyi-white mt-4 max-w-[780px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[52px]">
            {page.audienceTitle}
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {page.audience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="hyi-skeu p-6"
            >
              <span className="font-mono text-[12px] text-[#a78bfa]">
                AUD-0{index + 1}
              </span>

              <h3 className="hyi-h3 hyi-white mt-4">{item.title}</h3>
              <p className="hyi-p mt-2">{item.text}</p>
            </motion.div>
          ))}
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
    <section className="relative overflow-hidden bg-[#030303] px-5 py-10 md:px-10 md:py-14 lg:px-20">
      <div className="absolute left-[-150px] top-1/2 h-[420px] w-[420px] rounded-full bg-[#6d28d9]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <Reveal>
          <h2 className="hyi-h1 max-w-[700px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[52px]">
            <span className="hyi-white">Awareness designed</span>
            <span className="block hyi-blue">to support action.</span>
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {page.outcomes.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                y: -4,
                backgroundColor: "rgba(124,58,237,.055)",
              }}
              className="group flex items-end justify-between gap-4 bg-black p-6"
            >
              <div>
                <span className="font-mono text-[12px] text-[#a78bfa]">
                  0{index + 1}
                </span>
                <p className="hyi-h3 hyi-white mt-3">{item}</p>
              </div>

              <CheckCircle2 className="hyi-white-icon h-5 w-5 shrink-0 transition-colors group-hover:text-[#a78bfa]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN                                                                       */
/* -------------------------------------------------------------------------- */

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
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[999] h-[2px] origin-left bg-[#8b5cf6]"
      />

      <Hero page={page} />
      <AwarenessTicker />
      <Philosophy page={page} />
      <LearningJourney page={page} />
      <LearningField page={page} />
      <BehaviorLoop />
      <AudienceMatrix page={page} />
      <Outcomes page={page} />

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