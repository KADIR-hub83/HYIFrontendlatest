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
  Radio,
  RefreshCcw,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import type { ReactNode } from "react";

export type ThreatPageKey =
  | "intelligence"
  | "advanced"
  | "behavioral"
  | "hunting"
  | "siem"
  | "malware"
  | "phishing"
  | "ransomware"
  | "insider"
  | "engineering"
  | "automated";

type PageConfig = {
  number: string;
  eyebrow: string;
  heroTop: string;
  heroMain: string;
  heroAccent: string;
  intro: string;

  ticker: string[];

  signalTitle: string;
  signalText: string;

  capabilities: {
    label: string;
    title: string;
    text: string;
  }[];

  detectionFlow: {
    step: string;
    title: string;
    text: string;
  }[];

  questions: {
    question: string;
    answer: string;
  }[];

  disciplines: {
    title: string;
    text: string;
  }[];

  outcomes: string[];

  closing: string;
  closingAccent: string;
  closingText: string;
};

/* -------------------------------------------------------------------------- */
/* CONTENT                                                                    */
/* -------------------------------------------------------------------------- */

const pages: Record<ThreatPageKey, PageConfig> = {
  intelligence: {
    number: "01 / 11",
    eyebrow: "THREAT INTELLIGENCE",

    heroTop: "Know what is",
    heroMain: "changing beyond",
    heroAccent: "your perimeter.",

    intro:
      "Turn relevant threat information into context for defensive decisions. HYI.AI helps security teams organize external signals around assets, adversary activity, exposure and business relevance.",

    ticker: [
      "EXTERNAL SIGNALS",
      "ADVERSARY CONTEXT",
      "EXPOSURE",
      "INDICATORS",
      "CAMPAIGNS",
      "PRIORITIZATION",
      "INTELLIGENCE",
    ],

    signalTitle: "Intelligence should reduce uncertainty.",
    signalText:
      "The objective is not to collect every available indicator. It is to identify information that can change a defensive decision, improve prioritization or provide useful context to security operations.",

    capabilities: [
      {
        label: "COLLECTION",
        title: "Relevant source strategy",
        text: "Organize intelligence inputs around the organization's technologies, industry, attack surface and defensive priorities.",
      },
      {
        label: "CONTEXT",
        title: "Threat interpretation",
        text: "Add context to raw observations so analysts can understand relevance rather than processing isolated indicators.",
      },
      {
        label: "PRIORITY",
        title: "Exposure correlation",
        text: "Connect external intelligence with internal assets and known exposure to identify where attention may be warranted.",
      },
      {
        label: "ACTION",
        title: "Operational intelligence",
        text: "Translate useful intelligence into hunting ideas, detection improvements and defensive decisions.",
      },
    ],

    detectionFlow: [
      {
        step: "01",
        title: "Collect",
        text: "Gather relevant information from approved intelligence sources.",
      },
      {
        step: "02",
        title: "Filter",
        text: "Reduce noise and retain signals aligned to the environment.",
      },
      {
        step: "03",
        title: "Enrich",
        text: "Add technical, temporal and business context.",
      },
      {
        step: "04",
        title: "Correlate",
        text: "Compare external observations with internal exposure.",
      },
      {
        step: "05",
        title: "Distribute",
        text: "Route useful intelligence to appropriate defensive teams.",
      },
      {
        step: "06",
        title: "Learn",
        text: "Improve collection priorities from operational feedback.",
      },
    ],

    questions: [
      {
        question: "Is this threat relevant to us?",
        answer:
          "Relevance depends on technology, exposure, geography, business context and observed adversary behavior.",
      },
      {
        question: "What changed?",
        answer:
          "Intelligence should highlight meaningful changes rather than repeat information already understood.",
      },
      {
        question: "What should defenders do differently?",
        answer:
          "Useful intelligence should inform a decision, investigation, hunt or detection improvement.",
      },
    ],

    disciplines: [
      {
        title: "Strategic intelligence",
        text: "Longer-term context for leadership, risk teams and security strategy.",
      },
      {
        title: "Operational intelligence",
        text: "Campaign and adversary context supporting active defensive operations.",
      },
      {
        title: "Technical intelligence",
        text: "Technical observations that can enrich detection and investigation workflows.",
      },
      {
        title: "Intelligence lifecycle",
        text: "Feedback-driven collection and analysis aligned to defined requirements.",
      },
    ],

    outcomes: [
      "Reduced intelligence noise",
      "Improved threat context",
      "Exposure-aware prioritization",
      "Better hunting hypotheses",
      "Detection enrichment",
      "Actionable intelligence flow",
    ],

    closing: "Turn external signals",
    closingAccent: "into defensive context.",
    closingText:
      "Build an intelligence practice centered on relevance, interpretation and action.",
  },

  advanced: {
    number: "02 / 11",
    eyebrow: "ADVANCED THREAT DETECTION",

    heroTop: "Find activity",
    heroMain: "that simple rules",
    heroAccent: "can overlook.",

    intro:
      "Strengthen detection across identity, endpoint, network, cloud and application telemetry by combining context, correlation and carefully engineered detection logic.",

    ticker: [
      "TELEMETRY",
      "CORRELATION",
      "DETECTION",
      "IDENTITY",
      "ENDPOINT",
      "CLOUD",
      "CONTEXT",
    ],

    signalTitle: "Detection is a reasoning problem.",
    signalText:
      "Individual events can appear harmless in isolation. Strong detection programs connect behavior, sequence, asset context and expected activity before escalating meaningful signals.",

    capabilities: [
      {
        label: "VISIBILITY",
        title: "Telemetry coverage",
        text: "Identify the data required to observe important security behaviors across the technology environment.",
      },
      {
        label: "LOGIC",
        title: "Contextual detection",
        text: "Build detection logic around behaviors and sequences instead of relying exclusively on isolated events.",
      },
      {
        label: "CORRELATION",
        title: "Cross-domain signals",
        text: "Connect related observations across identity, endpoints, infrastructure and cloud services.",
      },
      {
        label: "QUALITY",
        title: "Detection validation",
        text: "Continuously evaluate whether detection logic remains observable, useful and operationally relevant.",
      },
    ],

    detectionFlow: [
      { step: "01", title: "Observe", text: "Establish visibility into relevant activity." },
      { step: "02", title: "Normalize", text: "Create usable context across telemetry sources." },
      { step: "03", title: "Detect", text: "Apply behavior-oriented detection logic." },
      { step: "04", title: "Correlate", text: "Connect related events and identities." },
      { step: "05", title: "Validate", text: "Determine whether signals warrant investigation." },
      { step: "06", title: "Improve", text: "Refine detection from analyst feedback." },
    ],

    questions: [
      {
        question: "Can the behavior be observed?",
        answer:
          "Detection starts with reliable telemetry and sufficient context.",
      },
      {
        question: "Is the signal meaningful?",
        answer:
          "Detection logic should distinguish expected activity from conditions requiring review.",
      },
      {
        question: "Can analysts investigate it?",
        answer:
          "Alerts should include enough context to support efficient investigation.",
      },
    ],

    disciplines: [
      { title: "Identity detection", text: "Observe suspicious authentication and privilege behavior." },
      { title: "Endpoint detection", text: "Identify meaningful host-level execution and persistence signals." },
      { title: "Cloud detection", text: "Monitor control-plane and workload activity in cloud environments." },
      { title: "Network detection", text: "Use network observations to enrich suspicious behavior." },
    ],

    outcomes: [
      "Broader detection visibility",
      "Behavior-focused logic",
      "Improved alert context",
      "Cross-domain correlation",
      "Reduced detection gaps",
      "Continuous validation",
    ],

    closing: "Detect the behavior",
    closingAccent: "behind the event.",
    closingText:
      "Create detection coverage designed around observable attacker behaviors and operational context.",
  },

  behavioral: {
    number: "03 / 11",
    eyebrow: "BEHAVIORAL ANALYTICS",

    heroTop: "Understand normal.",
    heroMain: "Recognize meaningful",
    heroAccent: "change.",

    intro:
      "Use behavioral context to identify activity that differs from expected patterns across users, identities, systems and sensitive business workflows.",

    ticker: [
      "BASELINE",
      "BEHAVIOR",
      "IDENTITY",
      "ANOMALY",
      "CONTEXT",
      "SEQUENCE",
      "CHANGE",
    ],

    signalTitle: "An anomaly is context, not a verdict.",
    signalText:
      "Behavioral analytics becomes valuable when unusual activity is interpreted alongside identity, asset importance, timing and related events rather than automatically treated as malicious.",

    capabilities: [
      {
        label: "BASELINE",
        title: "Expected behavior",
        text: "Develop contextual understanding of normal access and operational patterns.",
      },
      {
        label: "CHANGE",
        title: "Behavior deviation",
        text: "Identify meaningful changes without assuming every statistical outlier represents a threat.",
      },
      {
        label: "CONTEXT",
        title: "Identity enrichment",
        text: "Combine behavioral signals with role, privilege and asset context.",
      },
      {
        label: "SEQUENCE",
        title: "Activity correlation",
        text: "Evaluate related behaviors across time to identify stronger investigative signals.",
      },
    ],

    detectionFlow: [
      { step: "01", title: "Observe", text: "Collect relevant behavioral telemetry." },
      { step: "02", title: "Contextualize", text: "Understand users, roles and resources." },
      { step: "03", title: "Baseline", text: "Establish expected operating patterns." },
      { step: "04", title: "Compare", text: "Identify meaningful deviation." },
      { step: "05", title: "Correlate", text: "Connect anomalies with related signals." },
      { step: "06", title: "Review", text: "Provide context for analyst judgment." },
    ],

    questions: [
      {
        question: "What does normal look like here?",
        answer: "Expected behavior differs across identities, systems and business processes.",
      },
      {
        question: "Why is this deviation important?",
        answer: "Context determines whether unusual activity deserves investigation.",
      },
      {
        question: "What else happened nearby?",
        answer: "Related activity can make an otherwise weak signal more meaningful.",
      },
    ],

    disciplines: [
      { title: "User behavior", text: "Understand changes in access and activity patterns." },
      { title: "Entity behavior", text: "Observe systems and services against expected operation." },
      { title: "Privilege context", text: "Give greater context to unusual high-impact activity." },
      { title: "Sequence analysis", text: "Evaluate patterns across related events and time." },
    ],

    outcomes: [
      "Contextual behavior baselines",
      "Improved anomaly interpretation",
      "Identity-aware signals",
      "Stronger event correlation",
      "Reduced alert noise",
      "Better investigative context",
    ],

    closing: "Understand behavior.",
    closingAccent: "Investigate meaningful change.",
    closingText:
      "Use behavioral context to surface activity that deserves closer defensive attention.",
  },

  hunting: {
    number: "04 / 11",
    eyebrow: "THREAT HUNTING",

    heroTop: "Search beyond",
    heroMain: "what already",
    heroAccent: "triggered an alert.",

    intro:
      "Use hypothesis-driven investigation to look for evidence of suspicious behavior that existing controls may not have surfaced.",

    ticker: [
      "HYPOTHESIS",
      "SEARCH",
      "TELEMETRY",
      "EVIDENCE",
      "BEHAVIOR",
      "VALIDATION",
      "LEARNING",
    ],

    signalTitle: "Hunting starts with a question.",
    signalText:
      "A useful hunt defines what behavior may exist, why it matters and which telemetry could provide evidence before analysts begin searching.",

    capabilities: [
      {
        label: "HYPOTHESIS",
        title: "Focused hunt design",
        text: "Turn threat intelligence, incidents and detection gaps into defensible investigative questions.",
      },
      {
        label: "DATA",
        title: "Telemetry exploration",
        text: "Search available security data for evidence relevant to the hunt hypothesis.",
      },
      {
        label: "ANALYSIS",
        title: "Evidence correlation",
        text: "Connect related observations across users, systems and time.",
      },
      {
        label: "FEEDBACK",
        title: "Detection improvement",
        text: "Translate successful hunt findings into reusable detection opportunities.",
      },
    ],

    detectionFlow: [
      { step: "01", title: "Question", text: "Define a defensible hunting hypothesis." },
      { step: "02", title: "Map", text: "Identify required telemetry and evidence." },
      { step: "03", title: "Search", text: "Explore available data for relevant behaviors." },
      { step: "04", title: "Investigate", text: "Correlate suspicious observations." },
      { step: "05", title: "Conclude", text: "Document findings and uncertainty." },
      { step: "06", title: "Operationalize", text: "Convert repeatable findings into detection." },
    ],

    questions: [
      {
        question: "What are we looking for?",
        answer: "A defined hypothesis keeps the hunt focused and measurable.",
      },
      {
        question: "What evidence would support it?",
        answer: "The hunt should identify observable behaviors before searching.",
      },
      {
        question: "Can the learning become detection?",
        answer: "Repeatable evidence should improve future defensive visibility.",
      },
    ],

    disciplines: [
      { title: "Intelligence-led hunting", text: "Use relevant threat context to define hypotheses." },
      { title: "Behavior-led hunting", text: "Search for suspicious sequences rather than fixed signatures." },
      { title: "Incident-led hunting", text: "Look for broader evidence after known security events." },
      { title: "Gap-led hunting", text: "Explore areas where existing detection has limited visibility." },
    ],

    outcomes: [
      "Structured hunt hypotheses",
      "Improved telemetry understanding",
      "Evidence-driven investigation",
      "Detection gap discovery",
      "Reusable hunt knowledge",
      "Continuous defensive learning",
    ],

    closing: "Search with purpose.",
    closingAccent: "Learn from evidence.",
    closingText:
      "Build threat hunting around clear hypotheses, observable behavior and reusable defensive knowledge.",
  },

  siem: {
    number: "05 / 11",
    eyebrow: "SIEM & SOAR",

    heroTop: "Bring security",
    heroMain: "signals into one",
    heroAccent: "operating flow.",

    intro:
      "Design SIEM and SOAR capabilities around useful telemetry, detection quality, investigation context and controlled response workflows.",

    ticker: [
      "INGEST",
      "NORMALIZE",
      "CORRELATE",
      "INVESTIGATE",
      "ORCHESTRATE",
      "RESPOND",
      "MEASURE",
    ],

    signalTitle: "Centralization alone is not security operations.",
    signalText:
      "A SIEM becomes useful when collected data supports defined detection and investigation needs. Automation becomes useful when response steps are predictable, governed and safe.",

    capabilities: [
      {
        label: "DATA",
        title: "Telemetry strategy",
        text: "Prioritize security data according to detection, investigation and retention requirements.",
      },
      {
        label: "DETECTION",
        title: "Correlation design",
        text: "Build contextual rules and analytic logic around meaningful security behaviors.",
      },
      {
        label: "WORKFLOW",
        title: "Investigation flow",
        text: "Provide analysts with consistent enrichment and triage context.",
      },
      {
        label: "AUTOMATION",
        title: "Controlled orchestration",
        text: "Automate repeatable response steps with appropriate approval and safety boundaries.",
      },
    ],

    detectionFlow: [
      { step: "01", title: "Ingest", text: "Collect telemetry that supports defined use cases." },
      { step: "02", title: "Normalize", text: "Create consistent event context." },
      { step: "03", title: "Detect", text: "Apply relevant correlation logic." },
      { step: "04", title: "Enrich", text: "Add identity, asset and threat context." },
      { step: "05", title: "Orchestrate", text: "Coordinate approved investigative actions." },
      { step: "06", title: "Measure", text: "Improve coverage and workflow quality." },
    ],

    questions: [
      {
        question: "Why are we collecting this data?",
        answer: "Telemetry should support an explicit detection or investigation need.",
      },
      {
        question: "What context does the analyst need?",
        answer: "Useful enrichment can reduce unnecessary manual investigation.",
      },
      {
        question: "Should this step be automated?",
        answer: "Automation is appropriate when the action is repeatable and safely governed.",
      },
    ],

    disciplines: [
      { title: "SIEM architecture", text: "Align collection and processing to security use cases." },
      { title: "Detection content", text: "Maintain correlation logic as environments change." },
      { title: "SOAR workflows", text: "Coordinate enrichment, triage and approved response." },
      { title: "Operational measurement", text: "Measure usefulness rather than raw event volume." },
    ],

    outcomes: [
      "Purpose-driven telemetry",
      "Improved correlation",
      "Faster investigation context",
      "Consistent response workflows",
      "Governed automation",
      "Operational visibility",
    ],

    closing: "Connect signals.",
    closingAccent: "Coordinate response.",
    closingText:
      "Build SIEM and SOAR around the workflows your security operations team actually needs.",
  },

  malware: {
    number: "06 / 11",
    eyebrow: "MALWARE ANALYSIS",

    heroTop: "Understand suspicious",
    heroMain: "software through",
    heroAccent: "controlled analysis.",

    intro:
      "Support defensive investigation by examining suspicious artifacts in authorized, isolated environments and translating observations into useful detection context.",

    ticker: [
      "ARTIFACT",
      "BEHAVIOR",
      "ISOLATION",
      "OBSERVATION",
      "INDICATORS",
      "DETECTION",
      "CONTAINMENT",
    ],

    signalTitle: "Analysis should improve defense.",
    signalText:
      "The value of malware analysis is not simply understanding an artifact. It is turning controlled observations into information that improves detection, investigation and containment.",

    capabilities: [
      {
        label: "TRIAGE",
        title: "Artifact assessment",
        text: "Organize suspicious files and related evidence for safe defensive review.",
      },
      {
        label: "BEHAVIOR",
        title: "Controlled observation",
        text: "Observe relevant behavior only within isolated and authorized analysis environments.",
      },
      {
        label: "CONTEXT",
        title: "Indicator enrichment",
        text: "Connect observed characteristics with investigation context.",
      },
      {
        label: "DEFENSE",
        title: "Detection feedback",
        text: "Translate useful findings into defensive monitoring and containment improvements.",
      },
    ],

    detectionFlow: [
      { step: "01", title: "Receive", text: "Preserve suspicious artifacts and context." },
      { step: "02", title: "Triage", text: "Determine appropriate defensive analysis depth." },
      { step: "03", title: "Observe", text: "Analyze safely within isolated environments." },
      { step: "04", title: "Correlate", text: "Connect observations with related evidence." },
      { step: "05", title: "Document", text: "Record relevant defensive findings." },
      { step: "06", title: "Improve", text: "Feed observations into detection and response." },
    ],

    questions: [
      {
        question: "What was observed?",
        answer: "Document behaviors and evidence without relying on assumptions.",
      },
      {
        question: "Where else could this matter?",
        answer: "Relevant indicators can support broader defensive investigation.",
      },
      {
        question: "What should detection learn?",
        answer: "Useful analysis should improve future visibility.",
      },
    ],

    disciplines: [
      { title: "Artifact triage", text: "Prioritize suspicious material for defensive review." },
      { title: "Behavior observation", text: "Understand relevant actions in controlled environments." },
      { title: "Indicator analysis", text: "Extract defensively useful observations." },
      { title: "Detection feedback", text: "Improve monitoring based on validated findings." },
    ],

    outcomes: [
      "Structured artifact triage",
      "Controlled behavioral insight",
      "Investigation enrichment",
      "Improved detection context",
      "Containment support",
      "Reusable defensive knowledge",
    ],

    closing: "Analyze safely.",
    closingAccent: "Defend with context.",
    closingText:
      "Turn controlled malware observations into useful defensive intelligence.",
  },

  phishing: {
    number: "07 / 11",
    eyebrow: "PHISHING DETECTION",

    heroTop: "Find deception",
    heroMain: "before trust",
    heroAccent: "becomes exposure.",

    intro:
      "Strengthen detection around suspicious messages, identity context, delivery patterns and user-reported signals while supporting efficient investigation.",

    ticker: [
      "EMAIL",
      "IDENTITY",
      "DECEPTION",
      "LINKS",
      "REPORTING",
      "TRIAGE",
      "RESPONSE",
    ],

    signalTitle: "Phishing detection needs context.",
    signalText:
      "A suspicious message is easier to evaluate when sender behavior, identity context, message characteristics and related organizational activity can be considered together.",

    capabilities: [
      {
        label: "MESSAGE",
        title: "Message signals",
        text: "Evaluate relevant characteristics associated with suspicious communications.",
      },
      {
        label: "IDENTITY",
        title: "Sender context",
        text: "Use identity and relationship context to improve investigation quality.",
      },
      {
        label: "REPORTING",
        title: "User-reported signals",
        text: "Turn employee reporting into a useful input for security operations.",
      },
      {
        label: "RESPONSE",
        title: "Coordinated triage",
        text: "Support consistent review and approved containment workflows.",
      },
    ],

    detectionFlow: [
      { step: "01", title: "Receive", text: "Collect gateway and user-reported signals." },
      { step: "02", title: "Enrich", text: "Add sender and organizational context." },
      { step: "03", title: "Evaluate", text: "Review suspicious message characteristics." },
      { step: "04", title: "Correlate", text: "Look for related activity or recipients." },
      { step: "05", title: "Respond", text: "Apply approved containment processes." },
      { step: "06", title: "Learn", text: "Improve detection using confirmed outcomes." },
    ],

    questions: [
      {
        question: "Is the communication expected?",
        answer: "Relationship and workflow context can change how a message is interpreted.",
      },
      {
        question: "Was anyone else targeted?",
        answer: "Correlation can reveal broader campaigns or repeated activity.",
      },
      {
        question: "Did the message lead to other activity?",
        answer: "Identity and endpoint context can support deeper investigation.",
      },
    ],

    disciplines: [
      { title: "Message analysis", text: "Evaluate suspicious communication characteristics." },
      { title: "Identity context", text: "Understand sender and recipient relationships." },
      { title: "Campaign correlation", text: "Identify related targeting across the organization." },
      { title: "User reporting", text: "Integrate employee observations into detection workflows." },
    ],

    outcomes: [
      "Improved phishing visibility",
      "Faster message triage",
      "Identity-aware investigation",
      "Campaign correlation",
      "User-report integration",
      "Consistent response flow",
    ],

    closing: "Detect deception",
    closingAccent: "with better context.",
    closingText:
      "Connect communication, identity and organizational signals to strengthen phishing detection.",
  },

  ransomware: {
    number: "08 / 11",
    eyebrow: "RANSOMWARE DETECTION",

    heroTop: "Detect precursor",
    heroMain: "activity before",
    heroAccent: "impact expands.",

    intro:
      "Build defensive visibility around suspicious access, privilege changes, execution, lateral movement and destructive behavior associated with ransomware scenarios.",

    ticker: [
      "ACCESS",
      "PRIVILEGE",
      "EXECUTION",
      "MOVEMENT",
      "IMPACT",
      "CONTAINMENT",
      "RECOVERY",
    ],

    signalTitle: "The final impact is not the first signal.",
    signalText:
      "Ransomware scenarios can involve multiple stages of suspicious activity. Detection should focus on observable behaviors across the sequence rather than waiting for destructive impact.",

    capabilities: [
      {
        label: "ACCESS",
        title: "Initial access context",
        text: "Monitor suspicious authentication and access conditions that may warrant investigation.",
      },
      {
        label: "PRIVILEGE",
        title: "Privilege behavior",
        text: "Identify unusual changes involving powerful identities and administrative access.",
      },
      {
        label: "MOVEMENT",
        title: "Cross-system activity",
        text: "Correlate suspicious activity across systems to identify broader defensive concerns.",
      },
      {
        label: "IMPACT",
        title: "Destructive behavior",
        text: "Maintain visibility into high-impact activity requiring rapid defensive escalation.",
      },
    ],

    detectionFlow: [
      { step: "01", title: "Observe", text: "Collect relevant identity, endpoint and infrastructure signals." },
      { step: "02", title: "Correlate", text: "Connect suspicious activity across stages." },
      { step: "03", title: "Prioritize", text: "Elevate signals involving critical assets." },
      { step: "04", title: "Investigate", text: "Establish scope and related activity." },
      { step: "05", title: "Contain", text: "Use authorized response procedures." },
      { step: "06", title: "Recover", text: "Support lessons learned and defensive improvement." },
    ],

    questions: [
      {
        question: "What happened before impact?",
        answer: "Earlier behaviors can provide more useful opportunities for defensive action.",
      },
      {
        question: "Which assets are involved?",
        answer: "Criticality helps determine investigation and response priority.",
      },
      {
        question: "How broad is the activity?",
        answer: "Correlation across systems can help establish defensive scope.",
      },
    ],

    disciplines: [
      { title: "Identity monitoring", text: "Observe suspicious account and privilege activity." },
      { title: "Endpoint visibility", text: "Identify meaningful execution and host behavior." },
      { title: "Movement detection", text: "Correlate activity across systems and services." },
      { title: "Recovery intelligence", text: "Use incident learning to improve future defenses." },
    ],

    outcomes: [
      "Earlier defensive visibility",
      "Cross-stage correlation",
      "Critical-asset prioritization",
      "Improved investigation context",
      "Coordinated containment",
      "Detection feedback after incidents",
    ],

    closing: "Detect earlier.",
    closingAccent: "Respond with context.",
    closingText:
      "Strengthen visibility across the behaviors that can precede disruptive ransomware impact.",
  },

  insider: {
    number: "09 / 11",
    eyebrow: "INSIDER THREAT DETECTION",

    heroTop: "Protect trust",
    heroMain: "without treating",
    heroAccent: "everyone as a threat.",

    intro:
      "Use privacy-conscious, role-aware detection to identify meaningful misuse of legitimate access while preserving appropriate governance and human review.",

    ticker: [
      "TRUST",
      "IDENTITY",
      "PRIVILEGE",
      "ACCESS",
      "DATA",
      "CONTEXT",
      "GOVERNANCE",
    ],

    signalTitle: "Legitimate access can still create risk.",
    signalText:
      "Insider threat detection requires careful context. Unusual activity should be evaluated against role, privilege, business purpose and policy with appropriate governance and review.",

    capabilities: [
      {
        label: "IDENTITY",
        title: "Role-aware context",
        text: "Understand expected access according to responsibilities and approved business functions.",
      },
      {
        label: "PRIVILEGE",
        title: "Sensitive access",
        text: "Give additional context to unusual activity involving high-impact permissions.",
      },
      {
        label: "DATA",
        title: "Information interaction",
        text: "Observe relevant access patterns around sensitive organizational information.",
      },
      {
        label: "GOVERNANCE",
        title: "Responsible review",
        text: "Support appropriate human review, privacy safeguards and defined escalation procedures.",
      },
    ],

    detectionFlow: [
      { step: "01", title: "Context", text: "Understand role and approved access." },
      { step: "02", title: "Observe", text: "Monitor relevant security signals." },
      { step: "03", title: "Compare", text: "Identify meaningful deviation." },
      { step: "04", title: "Enrich", text: "Add business and identity context." },
      { step: "05", title: "Review", text: "Use governed human assessment." },
      { step: "06", title: "Improve", text: "Refine controls and detection." },
    ],

    questions: [
      {
        question: "Is this activity expected for the role?",
        answer: "Role context is essential before interpreting unusual access.",
      },
      {
        question: "Is sensitive information involved?",
        answer: "Data importance can materially change defensive priority.",
      },
      {
        question: "What governance applies?",
        answer: "Insider-risk investigations require appropriate privacy and organizational controls.",
      },
    ],

    disciplines: [
      { title: "Access analytics", text: "Understand unusual use of legitimate permissions." },
      { title: "Privilege monitoring", text: "Observe activity involving sensitive administrative capabilities." },
      { title: "Data context", text: "Add sensitivity and business importance to investigation." },
      { title: "Governed investigation", text: "Maintain human review and appropriate safeguards." },
    ],

    outcomes: [
      "Role-aware detection",
      "Sensitive-access visibility",
      "Better investigation context",
      "Privacy-conscious governance",
      "Structured escalation",
      "Improved access controls",
    ],

    closing: "Protect trusted access",
    closingAccent: "with responsible detection.",
    closingText:
      "Build insider-risk visibility around context, governance and meaningful behavioral signals.",
  },

  engineering: {
    number: "10 / 11",
    eyebrow: "DETECTION ENGINEERING",

    heroTop: "Engineer detections",
    heroMain: "like production",
    heroAccent: "security software.",

    intro:
      "Design, test, document and maintain detection logic as an engineering discipline with explicit coverage goals and operational feedback.",

    ticker: [
      "REQUIREMENTS",
      "TELEMETRY",
      "LOGIC",
      "TESTING",
      "COVERAGE",
      "VERSIONING",
      "QUALITY",
    ],

    signalTitle: "A detection is a maintained capability.",
    signalText:
      "Detection logic should have requirements, dependencies, validation, ownership and a lifecycle. Writing a rule is only one part of the engineering process.",

    capabilities: [
      {
        label: "DESIGN",
        title: "Detection requirements",
        text: "Define the behavior, telemetry and investigative outcome before implementing logic.",
      },
      {
        label: "BUILD",
        title: "Detection implementation",
        text: "Create maintainable logic aligned with available security telemetry.",
      },
      {
        label: "TEST",
        title: "Validation workflow",
        text: "Evaluate whether detections trigger as expected and provide useful context.",
      },
      {
        label: "MAINTAIN",
        title: "Detection lifecycle",
        text: "Track ownership, changes, dependencies and operational feedback over time.",
      },
    ],

    detectionFlow: [
      { step: "01", title: "Specify", text: "Define detection intent and observable behavior." },
      { step: "02", title: "Map", text: "Identify required telemetry." },
      { step: "03", title: "Build", text: "Implement maintainable detection logic." },
      { step: "04", title: "Test", text: "Validate expected behavior." },
      { step: "05", title: "Deploy", text: "Release through controlled processes." },
      { step: "06", title: "Tune", text: "Improve from operational evidence." },
    ],

    questions: [
      {
        question: "What behavior is this detection designed to observe?",
        answer: "Explicit intent makes testing and maintenance easier.",
      },
      {
        question: "Which telemetry does it depend on?",
        answer: "Detection reliability depends on underlying data availability and quality.",
      },
      {
        question: "How do we know it still works?",
        answer: "Validation should continue after deployment.",
      },
    ],

    disciplines: [
      { title: "Detection-as-code", text: "Apply repeatable engineering practices to detection content." },
      { title: "Coverage mapping", text: "Understand what behaviors are observable and where gaps remain." },
      { title: "Validation", text: "Test detection assumptions against controlled evidence." },
      { title: "Lifecycle management", text: "Maintain ownership, documentation and version history." },
    ],

    outcomes: [
      "Structured detection lifecycle",
      "Documented dependencies",
      "Improved detection testing",
      "Coverage visibility",
      "Consistent engineering practices",
      "Maintainable detection content",
    ],

    closing: "Build detections",
    closingAccent: "that stay useful.",
    closingText:
      "Treat detection content as an engineered security capability rather than a collection of static rules.",
  },

  automated: {
    number: "11 / 11",
    eyebrow: "AUTOMATED THREAT RESPONSE",

    heroTop: "Automate the",
    heroMain: "repeatable parts",
    heroAccent: "of response.",

    intro:
      "Use governed automation to accelerate enrichment, triage and approved containment while keeping high-impact decisions under appropriate human control.",

    ticker: [
      "AUTOMATION",
      "TRIAGE",
      "ENRICHMENT",
      "APPROVAL",
      "CONTAINMENT",
      "ORCHESTRATION",
      "CONTROL",
    ],

    signalTitle: "Fast response still needs control.",
    signalText:
      "Automation should reduce repetitive work without introducing unnecessary operational risk. High-impact actions require clear conditions, safeguards and appropriate approval.",

    capabilities: [
      {
        label: "TRIAGE",
        title: "Automated enrichment",
        text: "Collect repeatable context automatically so analysts can begin with better information.",
      },
      {
        label: "WORKFLOW",
        title: "Response orchestration",
        text: "Coordinate approved actions across security systems through consistent workflows.",
      },
      {
        label: "CONTROL",
        title: "Human approval",
        text: "Keep consequential actions behind explicit authorization where appropriate.",
      },
      {
        label: "FEEDBACK",
        title: "Workflow improvement",
        text: "Measure outcomes and refine automation based on operational experience.",
      },
    ],

    detectionFlow: [
      { step: "01", title: "Trigger", text: "Receive a validated defensive signal." },
      { step: "02", title: "Enrich", text: "Collect repeatable context automatically." },
      { step: "03", title: "Evaluate", text: "Apply defined workflow conditions." },
      { step: "04", title: "Approve", text: "Request human authorization when required." },
      { step: "05", title: "Act", text: "Execute approved defensive actions." },
      { step: "06", title: "Review", text: "Measure outcomes and refine workflow." },
    ],

    questions: [
      {
        question: "Is the action predictable?",
        answer: "Stable and repeatable tasks are stronger automation candidates.",
      },
      {
        question: "What happens if the signal is wrong?",
        answer: "Potential business impact should determine the required safeguards.",
      },
      {
        question: "Where is human approval required?",
        answer: "High-impact response should preserve appropriate decision authority.",
      },
    ],

    disciplines: [
      { title: "Enrichment automation", text: "Automate repetitive evidence gathering." },
      { title: "Triage orchestration", text: "Standardize initial investigation workflows." },
      { title: "Controlled containment", text: "Execute approved actions within defined boundaries." },
      { title: "Workflow governance", text: "Maintain ownership, auditability and review." },
    ],

    outcomes: [
      "Faster enrichment",
      "Consistent triage",
      "Reduced repetitive work",
      "Governed containment",
      "Human-controlled decisions",
      "Measurable response workflows",
    ],

    closing: "Automate speed.",
    closingAccent: "Keep control.",
    closingText:
      "Accelerate repeatable defensive work while preserving appropriate human oversight.",
  },
};

/* -------------------------------------------------------------------------- */
/* REUSABLE MOTION                                                            */
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

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{
        borderColor: "rgba(167,139,250,.35)",
      }}
      className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-black/40 px-4 py-2 backdrop-blur-2xl"
    >
      <motion.span
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_14px_rgba(167,139,250,.9)]"
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

function DetectionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: [-120, 100, -120],
          y: [-60, 80, -60],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 top-32 h-[520px] w-[520px] rounded-full bg-[#6d28d9]/[0.13] blur-[160px]"
      />

      <motion.div
        animate={{
          x: [100, -80, 100],
          y: [50, -80, 50],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-100px] top-[20%] h-[480px] w-[480px] rounded-full bg-[#8b5cf6]/[0.1] blur-[170px]"
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(196,181,253,.9) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 94%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 94%)",
        }}
      />

      <motion.div
        animate={{
          y: ["-10%", "110%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */

function Hero({ page }: { page: PageConfig }) {
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 900], [0, 160]);
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0.1]);

  return (
    <section className="relative  overflow-hidden border-b border-white/[0.06] bg-black">
      <DetectionBackground />

      <motion.div
        style={{
          y: heroY,
          opacity: heroOpacity,
        }}
        className="relative mx-auto flex  max-w-[1450px] flex-col justify-center px-5 py-10 md:py-20 md:px-10 lg:px-20"
      >
        <div className="flex items-center justify-between mt-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Eyebrow>{page.eyebrow}</Eyebrow>
          </motion.div>

          {/* <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-[8px] tracking-[0.25em] text-white/15"
          >
            {page.number}
          </motion.span> */}
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
          <div>
            {[page.heroTop, page.heroMain, page.heroAccent].map(
              (line, index) => (
                <div key={line} className="overflow-hidden">
                  <motion.h1
                    initial={{
                      y: "110%",
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.1 + index * 0.12,
                      ease,
                    }}
                    className={`text-[52px] font-medium leading-[0.92] tracking-[-0.065em] sm:text-[68px] md:text-[88px] lg:text-[100px] ${
                      index === 2
                        ? "text-[#a993df]/55"
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
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.8,
            }}
            className="border-l border-white/[0.08] pl-6"
          >
            <div className="flex items-center gap-3">
              <Radio className="h-4.5 w-4.5 text-[#a78bfa]" />

              <span className="font-mono text-[12px] tracking-[0.2em] text-white/70">
                DEFENSIVE SIGNAL / ACTIVE
              </span>
            </div>

            <p className="mt-7 text-[18px] leading-7 text-white/[0.48]">
              {page.intro}
            </p>

            <motion.a
              href="#detection"
              whileHover={{
                x: 6,
              }}
              className="mt-8 inline-flex items-center gap-3 text-[12px] text-white/65"
            >
              Explore detection approach
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.a>
          </motion.div>
        </div>

        {/* <div className="mt-20 flex items-center justify-between border-t border-white/[0.07] pt-6">
          <span className="font-mono text-[7px] tracking-[0.22em] text-white/15">
            HYI.AI / THREAT DETECTION + RESPONSE
          </span>

          <ArrowDown className="h-3.5 w-3.5 text-white/20" />
        </div> */}
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* TICKER                                                                     */
/* -------------------------------------------------------------------------- */

function SignalTicker({ items }: { items: string[] }) {
  return (
    <section className="overflow-hidden border-b border-white/[0.06] bg-[#030303] py-10">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 27,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max py-5"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-7 px-8"
          >
            <Activity className="h-4 w-4 text-[#8b5cf6]/80" />

            <span className="font-mono text-[12px] tracking-[0.24em] text-white/80">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SIGNAL STATEMENT                                                           */
/* -------------------------------------------------------------------------- */

function SignalStatement({ page }: { page: PageConfig }) {
  return (
    <section
      id="detection"
      className="relative overflow-hidden border-b border-white/[0.06] bg-black px-5 md:px-10 py-10 lg:px-20"
    >
      <div className="absolute left-[10%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.4fr_1.6fr]">
        <Reveal>
          <div className="flex items-center gap-3">
            <Eye className="h-4 w-4 text-[#a78bfa]/80" />

            <span className="font-mono text-[12px] tracking-[0.22em] text-white/80">
              SIGNAL / 001
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="max-w-[900px] text-[43px] font-medium leading-[1.03] tracking-[-0.055em] md:text-[55px]">
            {page.signalTitle}
          </h2>

          <div className="mt-12 grid gap-8 border-t border-white/[0.08] pt-8 md:grid-cols-[1fr_1.4fr]">
            <span className="font-mono text-[12px] tracking-[0.22em] text-[#a78bfa]/75">
              OBSERVE → INTERPRET → RESPOND
            </span>

            <p className="text-[18px] leading-7 text-white/[0.42]">
              {page.signalText}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CAPABILITIES                                                               */
/* -------------------------------------------------------------------------- */

function Capabilities({ page }: { page: PageConfig }) {
  return (
    <section className="border-b border-white/[0.06] bg-[#030303] px-5 py-10 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <Eyebrow>DETECTION CAPABILITIES</Eyebrow>

          <h2 className="mt-8 max-w-[720px] text-[40px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[58px]">
            Build visibility around
            <span className="block text-white/25">
              meaningful signals.
            </span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {page.capabilities.map((item, index) => (
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
                duration: 0.7,
              }}
              whileHover={{
                y: -7,
                borderColor: "rgba(167,139,250,.25)",
              }}
              className="group relative min-h-[20px] overflow-hidden rounded-[24px] border border-white/[0.07] bg-black p-8"
            >
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#7c3aed]/10 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[12px] tracking-[0.22em] text-[#a78bfa]/70">
                  {item.label}
                </span>

                <span className="font-mono text-[12px] text-white/70">
                  0{index + 1}
                </span>
              </div>

              <div className="relative mt-10">
                <h3 className="text-3xl font-bold tracking-[-0.03em] text-white/75 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[500px] text-[18px] leading-7 text-white/[0.36]">
                  {item.text}
                </p>
              </div>

              <motion.div
                whileHover={{ x: 6 }}
                className="absolute bottom-8 right-8"
              >
                <ArrowRight className="h-4 w-4 text-white/75 group-hover:text-[#a78bfa]" />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FLOW                                                                       */
/* -------------------------------------------------------------------------- */

function DetectionFlow({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-black px-5 py-10 md:px-10 lg:px-20">
      <div className="absolute right-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/10 blur-[170px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <Eyebrow>DETECTION FLOW</Eyebrow>

              <h2 className="mt-8 max-w-[450px] text-[40px] font-medium leading-[1.05] tracking-[-0.05em] md:text-[54px]">
                Signal becomes
                <span className="block text-white/25">
                  useful through context.
                </span>
              </h2>

              <p className="mt-7 max-w-[420px] text-[18px] leading-7 text-white/[0.33]">
                Detection is not the end of the process. Each signal needs
                enough context to support investigation, response and
                continuous improvement.
              </p>
            </div>
          </Reveal>

          <div className="relative border-l border-white/[0.08] pl-7 md:pl-12">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                ease,
              }}
              className="absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-[#8b5cf6] via-[#8b5cf6]/30 to-transparent"
            />

            {page.detectionFlow.map((item, index) => (
              <motion.article
                key={item.step}
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
                  delay: index * 0.08,
                }}
                className="group relative border-b border-white/[0.07] py-9"
              >
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="absolute -left-[34px] top-11 h-2 w-2 rounded-full border border-[#a78bfa]/50 bg-black md:-left-[52px]"
                />

                <div className="grid gap-4 md:grid-cols-[80px_180px_1fr]">
                  <span className="font-mono text-[12px] text-[#a78bfa]/75">
                    {item.step}
                  </span>

                  <h3 className="text-3xl font-bold text-white/65 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="text-[18px] leading-7 text-white/[0.32]">
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

/* -------------------------------------------------------------------------- */
/* QUESTIONS                                                                  */
/* -------------------------------------------------------------------------- */

function InvestigationQuestions({ page }: { page: PageConfig }) {
  return (
    <section className="border-b border-white/[0.06] bg-[#030303] px-5 py-10 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <span className="font-mono text-[12px] tracking-[0.22em] text-[#a78bfa]/70">
            / INVESTIGATIVE THINKING
          </span>

          <h2 className="mt-5 max-w-[750px] text-[40px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[55px]">
            Ask better questions
            <span className="block text-white/25">
              before taking action.
            </span>
          </h2>
        </Reveal>

        <div className="mt-10">
          {page.questions.map((item, index) => (
            <motion.article
              key={item.question}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                backgroundColor: "rgba(124,58,237,.035)",
              }}
              className="group grid gap-7 border-t border-white/[0.08] px-4 py-10 lg:grid-cols-[80px_1fr_1fr_40px]"
            >
              <span className="font-mono text-[12px] text-[#a78bfa]/85">
                0{index + 1}
              </span>

              <h3 className="max-w-[430px] text-3xl font-bold tracking-[-0.025em] text-white/75 group-hover:text-white">
                {item.question}
              </h3>

              <p className="max-w-[470px] text-[18px] leading-7 text-white/[0.34]">
                {item.answer}
              </p>

              <ChevronRight className="h-4 w-4 text-white/10 group-hover:text-[#a78bfa]" />
            </motion.article>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* BIG TYPE                                                                   */
/* -------------------------------------------------------------------------- */

// function BigType({ page }: { page: PageConfig }) {
//   return (
//     <section className="relative flex min-h-[420px] items-center overflow-hidden border-b border-white/[0.06] bg-black">
//       <motion.div
//         animate={{
//           x: ["0%", "-35%"],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           repeatType: "reverse",
//           ease: "easeInOut",
//         }}
//         className="whitespace-nowrap text-[100px] font-medium tracking-[-0.075em] text-white/[0.035] md:text-[180px]"
//       >
//         {page.eyebrow} / {page.eyebrow} / {page.eyebrow}
//       </motion.div>

//       <div className="absolute inset-0 flex items-center justify-center">
//         <motion.div
//           whileHover={{
//             scale: 1.05,
//           }}
//           className="flex items-center gap-4 rounded-full border border-[#8b5cf6]/20 bg-black/70 px-6 py-3 backdrop-blur-2xl"
//         >
//           <motion.span
//             animate={{
//               opacity: [0.3, 1, 0.3],
//             }}
//             transition={{
//               duration: 1.6,
//               repeat: Infinity,
//             }}
//             className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]"
//           />

//           <span className="font-mono text-[8px] tracking-[0.24em] text-white/35">
//             SIGNAL / CONTEXT / RESPONSE
//           </span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

/* -------------------------------------------------------------------------- */
/* DISCIPLINES                                                                */
/* -------------------------------------------------------------------------- */

function Disciplines({ page }: { page: PageConfig }) {
  return (
    <section className="border-b border-white/[0.06] bg-[#030303] px-5 py-10 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="text-center">
          <Eyebrow>OPERATIONAL DISCIPLINES</Eyebrow>

          <h2 className="mx-auto mt-5 max-w-[700px] text-[40px] font-medium leading-[1.05] tracking-[-0.05em] md:text-[55px]">
            Detection works
            <span className="block text-white/25">
              as a connected practice.
            </span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[26px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
          {page.disciplines.map((item, index) => (
            <motion.article
              key={item.title}
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
                delay: index * 0.07,
              }}
              whileHover={{
                y: -8,
                backgroundColor: "rgba(124,58,237,.05)",
              }}
              className="min-h-[10px] bg-black p-7"
            >
              <div className="flex items-center justify-between">
                <CircleDot className="h-4.5 w-4.5 text-[#a78bfa]/70" />

                <span className="font-mono text-[12px] text-white/75">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-10 text-3xl font-bold text-white/65">
                {item.title}
              </h3>

              <p className="mt-4 text-[18px] leading-6 text-white/[0.3]">
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
/* OUTCOMES                                                                   */
/* -------------------------------------------------------------------------- */

function Outcomes({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-black px-5 py-10 md:px-10 lg:px-20">
      <div className="absolute left-[-150px] top-1/2 h-[420px] w-[420px] rounded-full bg-[#6d28d9]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1100px]">
        <Reveal>
          <Eyebrow>DEFENSIVE OUTCOMES</Eyebrow>
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
              whileHover={{
                x: 8,
              }}
              className="group flex items-center justify-between border-t border-white/[0.07] py-7"
            >
              <div className="flex items-center gap-7">
                <span className="font-mono text-[12px] text-[#a78bfa]/80">
                  0{index + 1}
                </span>

                <span className="text-3xl font-bold text-white/48 group-hover:text-white/80">
                  {item}
                </span>
              </div>

              <CheckCircle2 className="h-4 w-4 text-[#a78bfa]/85" />
            </motion.div>
          ))}

          <div className="border-t border-white/[0.07]" />
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
      <DetectionBackground />

      <div className="relative mx-auto max-w-[1000px] text-center">
        <Reveal>
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(139,92,246,0)",
                "0 0 90px rgba(139,92,246,.16)",
                "0 0 0 rgba(139,92,246,0)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.05] backdrop-blur-2xl"
          >
            <Activity className="h-5 w-5 text-[#c4b5fd]/60" />
          </motion.div>

          <Eyebrow>{page.eyebrow}</Eyebrow>

          <h2 className="mt-5 text-[45px] font-medium leading-[1.02] tracking-[-0.055em] md:text-[68px]">
            {page.closing}

            <span className="block text-[#a993df]/50">
              {page.closingAccent}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[18px] leading-7 text-white/[0.35]">
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
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[11px] font-medium text-black"
            >
              Talk to HYI.AI

              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#detection"
              whileHover={{
                y: -5,
                borderColor: "rgba(167,139,250,.35)",
              }}
              className="inline-flex items-center gap-3 rounded-full border border-white/[0.1] px-7 py-3.5 text-[11px] text-white/45"
            >
              Review approach

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

export default function ThreatDetectionClient({
  pageKey,
}: {
  pageKey: ThreatPageKey;
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
        className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[#8b5cf6]"
      />

      <Hero page={page} />

      <SignalTicker items={page.ticker} />

      <SignalStatement page={page} />

      <Capabilities page={page} />

      <DetectionFlow page={page} />

      <InvestigationQuestions page={page} />

      {/* <BigType page={page} /> */}

      <Disciplines page={page} />

      <Outcomes page={page} />

      <FinalCTA page={page} />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(139, 92, 246, 0.4);
          color: white;
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