"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Database,
  Eye,
  FileText,
  Layers3,
  Network,
  Radio,
  RefreshCcw,
  Search,
  ShieldCheck,
  Timer,
  Workflow,
} from "lucide-react";

import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

export type IncidentPageKey =
  | "incident"
  | "ransomware"
  | "breach"
  | "malware"
  | "digital"
  | "network"
  | "endpoint"
  | "email"
  | "threat"
  | "evidence"
  | "recovery"
  | "crisis";

type PageConfig = {
  number: string;
  eyebrow: string;
  hero: [string, string, string];
  description: string;
  signal: string;
  statement: string;
  statementBody: string;
  stages: {
    id: string;
    title: string;
    text: string;
  }[];
  evidence: {
    title: string;
    text: string;
  }[];
  capabilities: {
    title: string;
    text: string;
  }[];
  outcomes: string[];
  closing: [string, string];
  closingText: string;
};

const pages: Record<IncidentPageKey, PageConfig> = {
  incident: {
    number: "01 / 12",
    eyebrow: "CYBER INCIDENT RESPONSE",
    hero: ["Control the", "incident before", "it controls you."],
    description:
      "Coordinate technical investigation, containment, stakeholder communication and recovery through a structured incident-response process designed to protect operations while preserving the information required to understand what happened.",
    signal: "INCIDENT COMMAND ACTIVE",
    statement: "Response begins by creating clarity inside uncertainty.",
    statementBody:
      "During a security incident, teams need a common operating picture. Systems, identities, alerts, business impact and investigative evidence must be connected so containment decisions can be made deliberately rather than reactively.",
    stages: [
      { id: "01", title: "Triage", text: "Establish initial severity, affected services and immediate operational context." },
      { id: "02", title: "Scope", text: "Determine affected systems, identities, data and connected infrastructure." },
      { id: "03", title: "Contain", text: "Coordinate controlled actions intended to limit further impact while preserving investigative value." },
      { id: "04", title: "Investigate", text: "Reconstruct relevant activity using available telemetry and evidence." },
      { id: "05", title: "Eradicate", text: "Address confirmed malicious persistence and contributing security weaknesses." },
      { id: "06", title: "Recover", text: "Restore trusted operations with appropriate validation and monitoring." },
    ],
    evidence: [
      { title: "Event timeline", text: "Chronological record of relevant security and operational events." },
      { title: "Affected assets", text: "Systems, accounts and services associated with the incident." },
      { title: "Response decisions", text: "Traceable record of containment and recovery decisions." },
      { title: "Investigation record", text: "Evidence and analysis supporting incident conclusions." },
    ],
    capabilities: [
      { title: "Incident coordination", text: "Create clear technical ownership, communication paths and decision points." },
      { title: "Scope development", text: "Continuously refine the known incident boundary as evidence develops." },
      { title: "Containment planning", text: "Balance security action with operational dependencies." },
      { title: "Recovery validation", text: "Support restoration with evidence-based security checks." },
    ],
    outcomes: [
      "Defined incident scope",
      "Coordinated containment",
      "Evidence preservation",
      "Investigation timeline",
      "Recovery validation",
      "Post-incident learning",
    ],
    closing: ["Move from incident", "to controlled recovery."],
    closingText:
      "Create a disciplined response process that connects investigation, containment and business recovery.",
  },

  ransomware: {
    number: "02 / 12",
    eyebrow: "RANSOMWARE RESPONSE",
    hero: ["Contain disruption.", "Protect recovery.", "Understand intrusion."],
    description:
      "Coordinate ransomware response around containment, investigative preservation, identity and infrastructure review, recovery dependencies and safe restoration of critical business services.",
    signal: "RECOVERY CONTROL",
    statement: "Ransomware response is both a security event and an operational crisis.",
    statementBody:
      "The response must consider compromised identities, affected infrastructure, lateral movement, data exposure indicators, restoration priorities and business continuity at the same time.",
    stages: [
      { id: "01", title: "Stabilize", text: "Establish incident command and understand immediate operational impact." },
      { id: "02", title: "Isolate", text: "Coordinate appropriate containment around affected environments." },
      { id: "03", title: "Preserve", text: "Protect relevant logs, artifacts and investigative information." },
      { id: "04", title: "Trace", text: "Reconstruct intrusion activity and affected infrastructure relationships." },
      { id: "05", title: "Validate", text: "Review recovery environments and security dependencies." },
      { id: "06", title: "Restore", text: "Return prioritized services through controlled recovery." },
    ],
    evidence: [
      { title: "Impact inventory", text: "Known affected services, endpoints and infrastructure." },
      { title: "Identity activity", text: "Relevant authentication and privilege events." },
      { title: "Intrusion timeline", text: "Chronology of confirmed and relevant activity." },
      { title: "Recovery record", text: "Validation information supporting service restoration." },
    ],
    capabilities: [
      { title: "Operational triage", text: "Connect technical findings with service impact." },
      { title: "Identity review", text: "Assess relevant account and privilege activity." },
      { title: "Infrastructure analysis", text: "Understand affected and connected systems." },
      { title: "Recovery assurance", text: "Support trusted restoration and monitoring." },
    ],
    outcomes: [
      "Incident stabilization",
      "Affected-system visibility",
      "Intrusion understanding",
      "Preserved evidence",
      "Recovery priorities",
      "Restoration assurance",
    ],
    closing: ["Recover operations.", "Retain understanding."],
    closingText:
      "Coordinate ransomware recovery without losing the investigative context needed to improve security.",
  },

  breach: {
    number: "03 / 12",
    eyebrow: "DATA BREACH RESPONSE",
    hero: ["Find the data.", "Trace the access.", "Define the exposure."],
    description:
      "Investigate suspected data exposure by connecting affected systems, identities, information repositories, access activity and evidence into a defensible incident picture.",
    signal: "EXPOSURE ANALYSIS",
    statement: "A suspected breach requires evidence before assumptions.",
    statementBody:
      "Teams need to distinguish systems that were affected from information that was actually accessible, accessed, transferred or otherwise exposed.",
    stages: [
      { id: "01", title: "Identify", text: "Establish the suspected exposure scenario." },
      { id: "02", title: "Locate", text: "Identify relevant systems and information repositories." },
      { id: "03", title: "Correlate", text: "Connect identities, events and data access." },
      { id: "04", title: "Analyze", text: "Evaluate evidence relevant to potential exposure." },
      { id: "05", title: "Document", text: "Maintain traceable findings and uncertainty." },
      { id: "06", title: "Respond", text: "Support technical and organizational response decisions." },
    ],
    evidence: [
      { title: "Data inventory", text: "Relevant information stores and classifications." },
      { title: "Access activity", text: "Available evidence of account and system access." },
      { title: "Exposure timeline", text: "Chronology associated with suspected data exposure." },
      { title: "Finding register", text: "Confirmed findings, limitations and unresolved questions." },
    ],
    capabilities: [
      { title: "Data scoping", text: "Identify information potentially relevant to the event." },
      { title: "Access correlation", text: "Connect account activity with affected repositories." },
      { title: "Timeline analysis", text: "Organize evidence into chronological context." },
      { title: "Finding documentation", text: "Separate confirmed evidence from assumptions." },
    ],
    outcomes: [
      "Exposure scope",
      "Relevant data context",
      "Identity correlation",
      "Evidence timeline",
      "Documented findings",
      "Response decision support",
    ],
    closing: ["Understand exposure", "through evidence."],
    closingText:
      "Build a defensible view of what systems, identities and information were involved.",
  },

  malware: {
    number: "04 / 12",
    eyebrow: "MALWARE INVESTIGATION",
    hero: ["Follow behavior.", "Connect artifacts.", "Understand impact."],
    description:
      "Investigate suspicious software and related activity through controlled artifact review, behavioral context, affected-system analysis and evidence correlation.",
    signal: "ARTIFACT ANALYSIS",
    statement: "A suspicious file is only one part of the investigation.",
    statementBody:
      "Useful malware investigation connects artifacts with execution context, endpoint activity, network observations, persistence indicators and affected identities.",
    stages: [
      { id: "01", title: "Acquire", text: "Collect relevant artifacts through approved processes." },
      { id: "02", title: "Preserve", text: "Maintain integrity and investigative context." },
      { id: "03", title: "Inspect", text: "Review observable artifact characteristics." },
      { id: "04", title: "Correlate", text: "Connect artifacts with endpoint and network evidence." },
      { id: "05", title: "Scope", text: "Identify related affected systems." },
      { id: "06", title: "Report", text: "Document findings and response implications." },
    ],
    evidence: [
      { title: "Artifact record", text: "Relevant files and associated metadata." },
      { title: "Execution context", text: "Available evidence surrounding observed execution." },
      { title: "System activity", text: "Relevant endpoint and operating-system observations." },
      { title: "Correlation record", text: "Connections between artifacts and related activity." },
    ],
    capabilities: [
      { title: "Artifact triage", text: "Organize suspicious artifacts for controlled analysis." },
      { title: "Behavior context", text: "Connect observed behavior with system evidence." },
      { title: "Environment scoping", text: "Search for related activity across authorized environments." },
      { title: "Investigation reporting", text: "Document evidence, conclusions and limitations." },
    ],
    outcomes: [
      "Artifact understanding",
      "Behavior context",
      "Affected-system scope",
      "Evidence correlation",
      "Response indicators",
      "Investigation record",
    ],
    closing: ["Turn artifacts", "into investigation context."],
    closingText:
      "Connect suspicious software with the systems and events surrounding it.",
  },

  digital: {
    number: "05 / 12",
    eyebrow: "DIGITAL FORENSICS",
    hero: ["Preserve traces.", "Reconstruct events.", "Explain what happened."],
    description:
      "Support digital investigations through structured acquisition, preservation, examination, timeline development and reporting across relevant authorized systems and evidence sources.",
    signal: "FORENSIC WORKSPACE",
    statement: "Forensics converts fragmented traces into an evidence-based sequence.",
    statementBody:
      "The objective is not simply to collect data. Evidence must retain context, integrity and traceability so investigators can understand relevant activity and clearly communicate findings.",
    stages: [
      { id: "01", title: "Prepare", text: "Define scope, authority and evidence sources." },
      { id: "02", title: "Acquire", text: "Collect relevant digital evidence appropriately." },
      { id: "03", title: "Preserve", text: "Maintain evidence integrity and provenance." },
      { id: "04", title: "Examine", text: "Review relevant artifacts and records." },
      { id: "05", title: "Reconstruct", text: "Develop chronological and contextual understanding." },
      { id: "06", title: "Report", text: "Communicate findings, methods and limitations." },
    ],
    evidence: [
      { title: "Acquisition record", text: "Documented source and collection context." },
      { title: "Integrity record", text: "Information supporting evidence integrity." },
      { title: "Artifact index", text: "Organized relevant investigative artifacts." },
      { title: "Forensic timeline", text: "Chronological representation of relevant events." },
    ],
    capabilities: [
      { title: "Evidence acquisition", text: "Structured collection within authorized scope." },
      { title: "Artifact examination", text: "Review relevant digital traces." },
      { title: "Timeline reconstruction", text: "Correlate evidence across available sources." },
      { title: "Forensic reporting", text: "Present findings with traceability and limitations." },
    ],
    outcomes: [
      "Preserved evidence",
      "Artifact inventory",
      "Event reconstruction",
      "Evidence traceability",
      "Documented methodology",
      "Clear findings",
    ],
    closing: ["Preserve evidence.", "Reconstruct reality."],
    closingText:
      "Build investigations around traceable evidence and defensible findings.",
  },

  network: {
    number: "06 / 12",
    eyebrow: "NETWORK FORENSICS",
    hero: ["Read the traffic.", "Trace relationships.", "Rebuild activity."],
    description:
      "Use available network telemetry to understand communications, affected infrastructure relationships and relevant activity during authorized incident investigations.",
    signal: "NETWORK TRACE",
    statement: "Network evidence reveals relationships that isolated systems may not.",
    statementBody:
      "Flow records, security telemetry and related network observations can help investigators understand communication patterns and connect activity across infrastructure.",
    stages: [
      { id: "01", title: "Scope", text: "Identify relevant networks and time windows." },
      { id: "02", title: "Collect", text: "Gather available authorized network evidence." },
      { id: "03", title: "Normalize", text: "Organize observations for correlation." },
      { id: "04", title: "Trace", text: "Review relevant communication relationships." },
      { id: "05", title: "Correlate", text: "Connect network evidence with other incident sources." },
      { id: "06", title: "Explain", text: "Document findings and evidentiary limitations." },
    ],
    evidence: [
      { title: "Flow records", text: "Relevant network communication metadata." },
      { title: "Security telemetry", text: "Available network-security observations." },
      { title: "Connection timeline", text: "Chronology of relevant communications." },
      { title: "Infrastructure map", text: "Context around communicating systems." },
    ],
    capabilities: [
      { title: "Traffic correlation", text: "Connect communications across available sources." },
      { title: "Infrastructure context", text: "Understand relevant network relationships." },
      { title: "Timeline development", text: "Place network activity into incident chronology." },
      { title: "Cross-source analysis", text: "Correlate network observations with endpoint evidence." },
    ],
    outcomes: [
      "Communication visibility",
      "Infrastructure relationships",
      "Network timeline",
      "Evidence correlation",
      "Scope refinement",
      "Investigation context",
    ],
    closing: ["Trace communication.", "Reveal context."],
    closingText:
      "Use network evidence to strengthen incident reconstruction and scope.",
  },

  endpoint: {
    number: "07 / 12",
    eyebrow: "ENDPOINT FORENSICS",
    hero: ["Investigate the host.", "Preserve context.", "Reconstruct activity."],
    description:
      "Examine authorized endpoint evidence to understand relevant user, process, file, persistence and operating-system activity associated with security incidents.",
    signal: "ENDPOINT CASE",
    statement: "Endpoints contain the local history of an incident.",
    statementBody:
      "Host evidence can provide important context around execution, identities, files, persistence and system changes when examined alongside broader incident telemetry.",
    stages: [
      { id: "01", title: "Identify", text: "Determine relevant endpoint systems." },
      { id: "02", title: "Acquire", text: "Collect appropriate evidence." },
      { id: "03", title: "Preserve", text: "Maintain evidence context and integrity." },
      { id: "04", title: "Examine", text: "Review relevant endpoint artifacts." },
      { id: "05", title: "Timeline", text: "Reconstruct host activity chronologically." },
      { id: "06", title: "Correlate", text: "Connect endpoint evidence with the broader incident." },
    ],
    evidence: [
      { title: "Host artifacts", text: "Relevant operating-system and application traces." },
      { title: "Process context", text: "Available evidence related to process activity." },
      { title: "Identity context", text: "Relevant account and session observations." },
      { title: "Host timeline", text: "Chronological endpoint activity." },
    ],
    capabilities: [
      { title: "Host examination", text: "Review endpoint artifacts within investigation scope." },
      { title: "Activity reconstruction", text: "Organize relevant system events chronologically." },
      { title: "Persistence review", text: "Assess relevant evidence of persistence mechanisms." },
      { title: "Cross-host correlation", text: "Connect related observations across systems." },
    ],
    outcomes: [
      "Endpoint evidence",
      "Host activity timeline",
      "Identity context",
      "Artifact correlation",
      "Affected-host scope",
      "Documented findings",
    ],
    closing: ["Understand the endpoint.", "Understand the incident."],
    closingText:
      "Use host-level evidence to add depth and precision to incident investigations.",
  },

  email: {
    number: "08 / 12",
    eyebrow: "EMAIL FORENSICS",
    hero: ["Trace the message.", "Understand delivery.", "Map interaction."],
    description:
      "Investigate suspicious email activity by correlating message metadata, delivery context, account activity and related security evidence within authorized environments.",
    signal: "MESSAGE TRACE",
    statement: "Email investigations extend beyond the visible message.",
    statementBody:
      "Delivery records, message metadata, identity activity and user interaction context can help establish how suspicious communication entered and moved through an environment.",
    stages: [
      { id: "01", title: "Preserve", text: "Retain relevant message and account evidence." },
      { id: "02", title: "Trace", text: "Review available delivery information." },
      { id: "03", title: "Inspect", text: "Examine relevant message metadata." },
      { id: "04", title: "Correlate", text: "Connect message activity with identity events." },
      { id: "05", title: "Scope", text: "Identify potentially related recipients or activity." },
      { id: "06", title: "Report", text: "Document evidence and conclusions." },
    ],
    evidence: [
      { title: "Message metadata", text: "Relevant message and transport information." },
      { title: "Delivery records", text: "Available evidence around message delivery." },
      { title: "Identity activity", text: "Relevant authentication and account events." },
      { title: "Interaction context", text: "Available evidence around user interaction." },
    ],
    capabilities: [
      { title: "Message tracing", text: "Follow relevant delivery context." },
      { title: "Identity correlation", text: "Connect email events with account activity." },
      { title: "Campaign scoping", text: "Identify related messages within authorized data." },
      { title: "Evidence documentation", text: "Maintain clear investigation records." },
    ],
    outcomes: [
      "Message provenance",
      "Delivery visibility",
      "Identity context",
      "Related-message scope",
      "Evidence timeline",
      "Investigation findings",
    ],
    closing: ["Follow the message.", "Find the context."],
    closingText:
      "Connect email evidence with identity and incident activity.",
  },

  threat: {
    number: "09 / 12",
    eyebrow: "THREAT INVESTIGATION",
    hero: ["Start with signal.", "Build context.", "Reach evidence."],
    description:
      "Investigate security signals by connecting alerts, identities, endpoints, network observations and business context into a structured evidence-driven investigation.",
    signal: "INVESTIGATION ACTIVE",
    statement: "An alert is the beginning of an investigation, not its conclusion.",
    statementBody:
      "Security signals become useful when analysts can establish context, correlate independent evidence and distinguish expected activity from behavior requiring response.",
    stages: [
      { id: "01", title: "Triage", text: "Understand the initiating signal." },
      { id: "02", title: "Enrich", text: "Add asset, identity and operational context." },
      { id: "03", title: "Correlate", text: "Connect relevant observations across sources." },
      { id: "04", title: "Validate", text: "Evaluate evidence supporting the hypothesis." },
      { id: "05", title: "Scope", text: "Determine related systems and activity." },
      { id: "06", title: "Conclude", text: "Document findings and recommended response." },
    ],
    evidence: [
      { title: "Alert context", text: "Initiating security observations." },
      { title: "Entity context", text: "Relevant assets, identities and services." },
      { title: "Correlation timeline", text: "Connected observations across sources." },
      { title: "Investigation notes", text: "Reasoning, findings and unresolved questions." },
    ],
    capabilities: [
      { title: "Signal enrichment", text: "Add operational context to security observations." },
      { title: "Cross-source correlation", text: "Connect evidence across available telemetry." },
      { title: "Hypothesis validation", text: "Test investigation assumptions against evidence." },
      { title: "Scope refinement", text: "Expand or reduce the incident boundary as evidence changes." },
    ],
    outcomes: [
      "Validated security context",
      "Correlated evidence",
      "Affected-entity scope",
      "Investigation timeline",
      "Documented conclusions",
      "Response recommendations",
    ],
    closing: ["Move beyond alerts.", "Investigate context."],
    closingText:
      "Transform fragmented security signals into evidence-supported understanding.",
  },

  evidence: {
    number: "10 / 12",
    eyebrow: "EVIDENCE COLLECTION",
    hero: ["Collect carefully.", "Preserve integrity.", "Maintain traceability."],
    description:
      "Support digital investigations with structured evidence identification, acquisition, preservation, documentation and handling practices appropriate to authorized investigative scope.",
    signal: "EVIDENCE LEDGER",
    statement: "Evidence is valuable only when its context can be explained.",
    statementBody:
      "Collection should preserve provenance, integrity and handling information so investigators understand where evidence originated and how it moved through the investigative process.",
    stages: [
      { id: "01", title: "Identify", text: "Determine relevant evidence sources." },
      { id: "02", title: "Authorize", text: "Confirm investigative scope and handling requirements." },
      { id: "03", title: "Acquire", text: "Collect relevant digital evidence." },
      { id: "04", title: "Preserve", text: "Maintain integrity and provenance." },
      { id: "05", title: "Catalog", text: "Organize evidence and supporting metadata." },
      { id: "06", title: "Transfer", text: "Maintain documented handling where required." },
    ],
    evidence: [
      { title: "Source record", text: "Origin and context of collected evidence." },
      { title: "Acquisition record", text: "Collection method and relevant details." },
      { title: "Integrity record", text: "Information supporting evidence integrity." },
      { title: "Handling log", text: "Traceable evidence handling history." },
    ],
    capabilities: [
      { title: "Source identification", text: "Determine useful evidence sources within scope." },
      { title: "Structured acquisition", text: "Collect evidence using appropriate processes." },
      { title: "Integrity preservation", text: "Maintain context and traceability." },
      { title: "Evidence cataloging", text: "Organize investigative material consistently." },
    ],
    outcomes: [
      "Evidence inventory",
      "Documented provenance",
      "Integrity records",
      "Handling traceability",
      "Investigation readiness",
      "Organized evidence repository",
    ],
    closing: ["Preserve the evidence.", "Preserve the story."],
    closingText:
      "Maintain the integrity and context required for reliable digital investigation.",
  },

  recovery: {
    number: "11 / 12",
    eyebrow: "INCIDENT RECOVERY",
    hero: ["Restore trust.", "Return services.", "Watch what follows."],
    description:
      "Coordinate security-focused recovery by validating remediation, restoring prioritized services and maintaining heightened monitoring as systems return to normal operations.",
    signal: "RECOVERY SEQUENCE",
    statement: "Recovery is not simply turning systems back on.",
    statementBody:
      "Restoration should account for incident findings, identity security, infrastructure dependencies, remediation status and monitoring so teams can return services with greater confidence.",
    stages: [
      { id: "01", title: "Prioritize", text: "Identify critical services and dependencies." },
      { id: "02", title: "Validate", text: "Confirm relevant remediation activities." },
      { id: "03", title: "Restore", text: "Return services through controlled sequencing." },
      { id: "04", title: "Verify", text: "Check security and operational health." },
      { id: "05", title: "Monitor", text: "Maintain heightened observation after restoration." },
      { id: "06", title: "Transition", text: "Return ownership to normal operations." },
    ],
    evidence: [
      { title: "Recovery priorities", text: "Critical service restoration order." },
      { title: "Remediation status", text: "Relevant security actions and validation." },
      { title: "Restoration record", text: "Systems and services returned to operation." },
      { title: "Monitoring record", text: "Post-restoration security observations." },
    ],
    capabilities: [
      { title: "Recovery sequencing", text: "Coordinate restoration around business dependencies." },
      { title: "Security validation", text: "Connect incident findings with recovery checks." },
      { title: "Service verification", text: "Confirm restored systems operate as intended." },
      { title: "Post-recovery monitoring", text: "Maintain visibility during transition." },
    ],
    outcomes: [
      "Prioritized restoration",
      "Validated remediation",
      "Controlled recovery",
      "Service verification",
      "Heightened monitoring",
      "Operational transition",
    ],
    closing: ["Restore operations", "with security context."],
    closingText:
      "Move from containment to trusted service restoration through structured recovery.",
  },

  crisis: {
    number: "12 / 12",
    eyebrow: "CYBER CRISIS MANAGEMENT",
    hero: ["Align decisions.", "Coordinate leadership.", "Protect continuity."],
    description:
      "Coordinate executive, technical, operational and communication workstreams during significant cyber incidents through defined decision structures and shared situational awareness.",
    signal: "CRISIS COMMAND",
    statement: "A major cyber incident becomes a leadership problem as quickly as a technical one.",
    statementBody:
      "Crisis management connects incident facts, operational impact, decision authority, stakeholder communication and recovery priorities into a common leadership process.",
    stages: [
      { id: "01", title: "Activate", text: "Establish crisis leadership and operating cadence." },
      { id: "02", title: "Inform", text: "Create a shared situational picture." },
      { id: "03", title: "Decide", text: "Clarify decision authority and immediate priorities." },
      { id: "04", title: "Coordinate", text: "Align technical and business workstreams." },
      { id: "05", title: "Communicate", text: "Manage relevant stakeholder information flows." },
      { id: "06", title: "Transition", text: "Move from crisis mode into sustained recovery." },
    ],
    evidence: [
      { title: "Situation report", text: "Current incident and operational context." },
      { title: "Decision log", text: "Important decisions, owners and rationale." },
      { title: "Impact record", text: "Known business and service consequences." },
      { title: "Action register", text: "Critical actions, dependencies and ownership." },
    ],
    capabilities: [
      { title: "Executive coordination", text: "Create structured leadership decision processes." },
      { title: "Situation management", text: "Maintain a shared view of incident developments." },
      { title: "Decision tracking", text: "Document material decisions and ownership." },
      { title: "Recovery alignment", text: "Connect technical recovery with business priorities." },
    ],
    outcomes: [
      "Shared situational awareness",
      "Clear decision authority",
      "Coordinated workstreams",
      "Leadership visibility",
      "Communication discipline",
      "Recovery alignment",
    ],
    closing: ["Lead through uncertainty.", "Coordinate recovery."],
    closingText:
      "Create the structure leadership needs to navigate significant cyber incidents.",
  },
};

/* =========================================================
   SHARED
========================================================= */

const ease = [0.22, 1, 0.36, 1] as const;

const TIMELINE = [
  ["00:18", "Initial signal observed"],
  ["00:31", "Relevant identity activity correlated"],
  ["01:04", "Incident boundary updated"],
  ["01:42", "Containment decision recorded"],
  ["02:16", "Additional evidence preserved"],
];

const TABS = ["Timeline", "Stages", "Evidence"] as const;
type Tab = (typeof TABS)[number];

function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1380px] ${className}`}>
      {children}
    </div>
  );
}

function TinyLabel({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
      {children}
    </span>
  );
}

function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <motion.span
        animate={{ scale: [1, 2.3, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-[#8b5cf6]"
      />
      <span className="relative h-2 w-2 rounded-full bg-[#c4b5fd]" />
    </span>
  );
}

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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountUp({
  to,
  decimals = 0,
  duration = 1.6,
}: {
  to: number;
  decimals?: number;
  duration?: number;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return (
    <>
      {val.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-[#9d7bf7]/20 bg-[#9d7bf7]/[0.05] px-4 py-2 backdrop-blur-2xl">
      <LiveDot />
      <span className="font-mono text-[9px] tracking-[0.25em] text-white/55">
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero({ page }: { page: PageConfig }) {
  const { scrollY } = useScroll();

  const titleY = useTransform(scrollY, [0, 650], [0, 80]);
  const titleOpacity = useTransform(scrollY, [0, 550], [1, 0.25]);
  const modelY = useTransform(scrollY, [0, 850], [0, 100]);
  const modelScale = useTransform(scrollY, [0, 900], [1, 0.95]);

  return (
    <section className="relative overflow-hidden bg-black px-5 py-20 md:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black 20%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 20%, transparent 90%)",
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-[550px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[220px]"
      />

      <Container className="relative">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mx-auto max-w-[1050px] text-center"
        >
       

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="hyi-white mx-auto mt-8 w-full text-5xl font-bold max-md:text-3xl"
          >
            {page.hero[0]} {page.hero[1]}
            <span className="block"></span>
            <span className="hyi-blue block">{page.hero[2]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hyi-p mx-auto mt-3 max-w-[780px]"
          >
            {page.description}
          </motion.p>

      
        </motion.div>

        <motion.div
          style={{ y: modelY, scale: modelScale }}
          className="mt-10"
        >
          <CommandCenter page={page} />
        </motion.div>
      </Container>
    </section>
  );
}

/* =========================================================
   COMMAND CENTER
========================================================= */

function KpiCard({
  label,
  value,
  note,
  icon: Icon,
  index,
}: {
  label: string;
  value: number;
  note: string;
  icon: typeof Activity;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.03] p-4 backdrop-blur-xl transition-colors hover:border-[#a78bfa]/40"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#7046e6]/20 opacity-60 blur-2xl transition-opacity group-hover:opacity-100" />

      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
          {label}
        </span>
        <Icon size={14} className="text-[#a78bfa]" />
      </div>

      <div className="mt-3">
        <span className="hyi-white text-2xl font-semibold tracking-tight">
          <CountUp to={value} />
        </span>
      </div>

      <p className="hyi-blue mt-1 text-[10px]">{note}</p>
    </motion.div>
  );
}

function Ticker({ items }: { items: string[] }) {
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-t border-white/[0.1] bg-black/60 py-2.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#030303] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#030303] to-transparent" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center gap-10 whitespace-nowrap"
      >
        {loop.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-2 font-mono text-[10px] text-white/45"
          >
            <Activity size={11} className="text-[#38bdf8]" />
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function CommandCenter({ page }: { page: PageConfig }) {
  const [tab, setTab] = useState<Tab>("Timeline");
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(112,70,230,0.16), transparent 70%)`;

  const onMove = (e: ReactMouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  const kpis = [
    { label: "Response Phases", value: page.stages.length, note: "Structured flow", icon: Layers3 },
    { label: "Evidence Sources", value: page.evidence.length, note: "Traceable record", icon: Database },
    { label: "Capabilities", value: page.capabilities.length, note: "Case coverage", icon: ShieldCheck },
    { label: "Case Outcomes", value: page.outcomes.length, note: "Defined results", icon: AlertTriangle },
  ];

  return (
    <motion.div
      ref={ref}
      id="command-center"
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 70, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.25 }}
      className="relative overflow-hidden rounded-[30px] border border-white/[0.16] bg-[#030303] shadow-[0_50px_150px_rgba(0,0,0,.9),0_0_80px_rgba(112,70,230,.12)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)",
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: spotlight }}
      />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#7046e6]/15 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#38bdf8]/10 blur-[110px]" />

      <motion.div
        animate={{ x: ["-100%", "220%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 z-40 h-px w-full bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent"
      />

      {/* WINDOW BAR */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.12] bg-black/40 px-6 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#ed6a5e]" />
          <span className="h-3 w-3 rounded-full bg-[#f4bf4f]" />
          <span className="h-3 w-3 rounded-full bg-[#61c454]" />
        </div>

        <div className="flex items-center gap-2 text-white/35">
          <ShieldCheck size={12} />
          <span className="font-mono text-[9px] tracking-wider">
            HYI.AI / CASE COMMAND CENTER
          </span>
        </div>

        <div className="hidden items-center gap-5 text-white/25 sm:flex">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <RefreshCcw size={13} />
          </motion.span>
          <Radio size={13} />
          <CircleDot size={13} />
        </div>
      </div>

      <div className="relative z-10 p-5 md:p-8">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <TinyLabel>{page.eyebrow}</TinyLabel>
            <h2 className="hyi-h1 mt-2 tracking-[-0.04em]">
              Case <span className="hyi-blue">Command</span> Center
            </h2>
            <p className="hyi-white mt-1 text-xs opacity-60">
              Live view of timeline, response stages and preserved evidence.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2">
              <LiveDot />
              <span className="font-mono text-[8px] uppercase text-white/45">
                {page.signal}
              </span>
            </div>

            <motion.a
              href="#response"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hyi-white rounded-full bg-gradient-to-r from-[#7046e6] to-[#5b7cfa] px-5 py-2.5 text-[10px] font-medium shadow-[0_0_30px_rgba(112,70,230,.45)]"
            >
              View Response Plan
            </motion.a>
          </div>
        </div>

        {/* KPI STRIP */}
        <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {kpis.map((k, i) => (
            <KpiCard key={k.label} {...k} index={i} />
          ))}
        </div>

        {/* TABS */}
        <div className="mt-7 flex items-center gap-1 border-b border-white/[0.08]">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative px-4 py-2.5 text-[16px] font-medium transition-colors ${
                tab === t ? "hyi-white" : "text-white/80 hover:text-white/70"
              }`}
            >
              {t}
              {tab === t && (
                <motion.span
                  layoutId="incident-tab"
                  className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-[#a78bfa] to-[#38bdf8]"
                />
              )}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-5"
        >
          {tab === "Timeline" && (
            <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#060606] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <TinyLabel>Event Timeline</TinyLabel>
                  <h3 className="hyi-h2 hyi-white mt-2">
                    Investigation activity
                  </h3>
                </div>
                <Activity size={16} className="text-[#a78bfa]" />
              </div>

              <div className="relative">
                <div className="absolute bottom-0 left-[5px] top-0 w-px bg-white/[0.08]" />

                {TIMELINE.map(([time, text], index) => (
                  <motion.div
                    key={time}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative mb-6 grid grid-cols-[64px_1fr] gap-4 pl-7 last:mb-0"
                  >
                    <span className="absolute left-0 top-1 h-[11px] w-[11px] rounded-full border border-[#a78bfa]/70 bg-black" />
                    <span className="font-mono text-[10px] text-[#a78bfa]">
                      {time}
                    </span>
                    <span className="hyi-white text-[13px] opacity-70">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {tab === "Stages" && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {page.stages.map((s) => (
                <div
                  key={s.id}
                  className="rounded-2xl border border-white/[0.08] bg-[#060606] p-4"
                >
                  <span className="hyi-blue font-mono text-[10px]">
                    PHASE {s.id}
                  </span>
                  <p className="hyi-h3 mt-1 text-white">{s.title}</p>
                  <p className="hyi-p mt-1">{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "Evidence" && (
            <div className="grid gap-3 sm:grid-cols-2">
              {page.evidence.map((e, i) => (
                <div
                  key={e.title}
                  className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-[#060606] p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-black font-mono text-[9px] text-[#c4b5fd]">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="hyi-h3 text-white">{e.title}</p>
                    <p className="hyi-p mt-1">{e.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <Ticker items={page.outcomes} />
    </motion.div>
  );
}

/* =========================================================
   SIGNAL RAIL
========================================================= */

function SignalRail() {
  const items = [
    "TRIAGE",
    "PRESERVE",
    "CORRELATE",
    "CONTAIN",
    "INVESTIGATE",
    "RECOVER",
  ];

  return (
    <section className="overflow-hidden border-y border-white/[0.07] bg-[#030303] py-4">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex w-max"
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-5 px-10"
          >
            <Activity className="h-3 w-3 text-[#8c6be8]" />
            <span className="font-mono text-[10px] tracking-[0.28em] text-white/40">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* =========================================================
   STATEMENT
========================================================= */

function Statement({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7650df]/[0.08] blur-[170px]" />

      <Container className="relative">
        <Reveal className="text-center">
          <TinyLabel>Incident Principle</TinyLabel>

          <h2 className="hyi-h1 hyi-white mx-auto mt-3 max-w-[950px]">
            {page.statement}
          </h2>

          <p className="hyi-p mx-auto mt-3 max-w-[820px]">
            {page.statementBody}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* =========================================================
   RESPONSE SEQUENCE
========================================================= */

function ResponseSequence({ page }: { page: PageConfig }) {
  return (
    <section id="response" className="relative overflow-hidden bg-black px-5 py-10 md:px-10">
      <Container>
        <Reveal className="text-center">
          <h2 className="hyi-h1 hyi-white mx-auto max-w-[800px]">
            Every decision leaves
            <span className="hyi-blue block">an investigative trail.</span>
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.stages.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -8, borderColor: "rgba(167,139,250,.28)" }}
              className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#070707] p-6"
            >
              <motion.div
                animate={{ opacity: [0.03, 0.1, 0.03] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-[#7046e6] blur-[90px]"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-black font-mono text-[10px] text-[#c4b5fd]">
                    {item.id}
                  </span>
                  <span className="hyi-blue font-mono text-[9px]">
                    PHASE {item.id}
                  </span>
                </div>

                <h3 className="hyi-h3 mt-5 text-white">{item.title}</h3>
                <p className="hyi-p mt-2">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   EVIDENCE LEDGER
========================================================= */

function EvidenceLedger({ page }: { page: PageConfig }) {
  return (
    <section className="bg-black px-5 py-10 md:px-10">
      <Container>
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-3">
            <Database className="h-4 w-4 text-[#a78bfa]" />
            <TinyLabel>Evidence Ledger</TinyLabel>
          </div>

          <h2 className="hyi-h1 hyi-white mt-3">
            Preserve context.
            <span className="hyi-blue block">Maintain traceability.</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-8 max-w-[1100px] overflow-hidden rounded-[28px] border border-white/[0.1] bg-[#060606]">
          <div className="grid grid-cols-[70px_1fr] border-b border-white/[0.08] bg-white/[0.025] px-6 py-4 md:grid-cols-[100px_240px_1fr]">
            <span className="font-mono text-[9px] text-white/35">ID</span>
            <span className="hidden font-mono text-[9px] text-white/35 md:block">
              EVIDENCE SOURCE
            </span>
            <span className="font-mono text-[9px] text-white/35">
              INVESTIGATIVE VALUE
            </span>
          </div>

          {page.evidence.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ backgroundColor: "rgba(157,123,247,.05)" }}
              className="grid grid-cols-[70px_1fr] items-center border-b border-white/[0.07] px-6 py-5 last:border-b-0 md:grid-cols-[100px_240px_1fr]"
            >
              <span className="hyi-blue font-mono text-[10px]">
                EV-0{index + 1}
              </span>

              <h3 className="hyi-h3 hidden text-white md:block">
                {item.title}
              </h3>

              <div>
                <h3 className="hyi-h3 mb-1 text-white md:hidden">
                  {item.title}
                </h3>
                <p className="hyi-p">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   CAPABILITIES
========================================================= */

const CAP_ICONS = [Search, Network, Eye, FileText];

function CapabilityGrid({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10">
      <div className="absolute right-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#7650df]/[0.08] blur-[180px]" />

      <Container className="relative">
        <Reveal className="text-center">
          <h2 className="hyi-h1 hyi-white mx-auto max-w-[800px]">
            Build context across
            <span className="hyi-blue block">the entire case.</span>
          </h2>
        </Reveal>

        <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.02] p-6">
          <h3 className="hyi-h2 hyi-white text-center">
            Investigation Capability
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {page.capabilities.map((item, index) => {
              const Icon = CAP_ICONS[index % CAP_ICONS.length];

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="hyi-skeu flex flex-col justify-between p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                      <Icon className="h-4 w-4 text-white" />
                    </span>
                    <span className="font-mono text-[10px] text-white/50">
                      C-0{index + 1}
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3 className="hyi-h3 hyi-white">{item.title}</h3>
                    <p className="hyi-p mt-2">{item.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   OUTCOMES
========================================================= */

function Outcomes({ page }: { page: PageConfig }) {
  return (
    <section className="bg-black px-5 py-10 md:px-10">
      <Container>
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-3">
            <Workflow className="h-4 w-4 text-[#a78bfa]" />
            <TinyLabel>Case Outcomes</TinyLabel>
          </div>

          <h2 className="hyi-h1 hyi-white mt-3">What the case delivers.</h2>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {page.outcomes.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 5, borderColor: "rgba(167,139,250,.25)" }}
              className="flex items-center gap-4 rounded-[15px] border border-white/[0.07] bg-black p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/25">
                <CheckCircle2 size={16} className="text-white" />
              </span>

              <div>
                <span className="hyi-blue font-mono text-[10px]">
                  0{index + 1}
                </span>
                <p className="hyi-h3 mt-1">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FINAL CTA
========================================================= */

function FinalCTA({ page }: { page: PageConfig }) {
  return (
    <section className="bg-black px-5 pb-16 pt-6 md:px-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[28px] border border-[#6366f1]/25 bg-[#080a16] px-6 py-16 text-center"
        >
          <motion.div
            animate={{ x: ["-20%", "20%", "-20%"], opacity: [0.22, 0.5, 0.22] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-170px] left-1/2 h-[320px] w-[950px] -translate-x-1/2 rounded-full bg-[#7046e6] blur-[120px]"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.04]"
          />

          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.07]"
            >
              <Timer size={23} className="text-[#c4b5fd]" />
            </motion.div>

            <h2 className="hyi-h1 hyi-white mx-auto mt-6 max-w-[850px]">
              {page.closing[0]}
              <span className="hyi-blue block">{page.closing[1]}</span>
            </h2>

            <p className="hyi-p mx-auto mt-3 max-w-[720px]">
              {page.closingText}
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hyi-white mx-auto mt-7 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.3)]"
            >
              Discuss Incident Readiness
              <ArrowRight size={14} />
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function IncidentForensicsClient({
  pageKey,
}: {
  pageKey: IncidentPageKey;
}) {
  const page = pages[pageKey];

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="relative mx-auto max-w-[1350px] overflow-x-hidden bg-black text-white">
      <motion.div
        style={{ scaleX: progress, transformOrigin: "left" }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#5b21b6] via-[#c4b5fd] to-[#7c3aed]"
      />

      <Hero page={page} />
      <SignalRail />
      <Statement page={page} />
      <ResponseSequence page={page} />
      <EvidenceLedger page={page} />
      <CapabilityGrid page={page} />
      <Outcomes page={page} />
      {/* <FinalCTA page={page} /> */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: #9878ef;
          color: #000;
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