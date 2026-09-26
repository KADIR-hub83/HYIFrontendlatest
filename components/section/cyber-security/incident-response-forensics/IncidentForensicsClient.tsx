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
  CircleDot,
  Database,
  Eye,
  FileText,
  Network,
  RefreshCcw,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import type { ReactNode } from "react";

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(154,115,255,.75) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [-80, 90, -80],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-32 h-[500px] w-[500px] rounded-full bg-[#7650df]/[0.10] blur-[160px]"
      />

      <motion.div
        animate={{
          x: [80, -100, 80],
          y: [50, -70, 50],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-[#9d7bf7]/[0.08] blur-[170px]"
      />
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-[#9d7bf7]/20 bg-[#9d7bf7]/[0.05] px-4 py-2 backdrop-blur-2xl">
      <motion.span
        animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.25, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-1.5 w-1.5 rounded-full bg-[#a98cff]"
      />
      <span className="font-mono text-[8px] tracking-[0.25em] text-white/40">
        {children}
      </span>
    </div>
  );
}

function Hero({ page }: { page: PageConfig }) {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 130]);
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0.1]);

  return (
    <section className="relative min-h-[930px] overflow-hidden border-b border-white/[0.07] bg-black">
      <Background />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative mx-auto flex min-h-[930px] max-w-[1420px] flex-col justify-center px-5 pb-24 pt-40 md:px-10"
      >
        <div className="flex items-center justify-between">
          <Badge>{page.eyebrow}</Badge>
          <span className="font-mono text-[8px] tracking-[0.3em] text-white/20">
            {page.number}
          </span>
        </div>

        <div className="mt-20">
          {page.hero.map((line, index) => (
            <div key={line} className="overflow-hidden">
              <motion.h1
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.12,
                  ease,
                }}
                className={`text-[53px] font-medium leading-[0.91] tracking-[-0.065em] sm:text-[72px] md:text-[96px] lg:text-[112px] ${
                  index === 2 ? "text-[#8068b7]" : "text-white"
                }`}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/[0.08] pt-8 lg:grid-cols-2">
          <div className="flex items-center gap-4">
            <Activity className="h-4 w-4 text-[#9b7bf0]" />
            <span className="font-mono text-[8px] tracking-[0.25em] text-white/25">
              {page.signal}
            </span>
          </div>

          <div>
            <p className="max-w-[610px] text-[13px] leading-7 text-white/[0.52]">
              {page.description}
            </p>

            <a
              href="#response"
              className="mt-7 inline-flex items-center gap-3 text-[10px] text-white/45 transition hover:text-white"
            >
              Enter investigation
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

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
    <section className="overflow-hidden border-b border-white/[0.07] bg-[#030303] py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex w-max"
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-5 px-10"
          >
            <Activity className="h-3 w-3 text-[#8c6be8]" />
            <span className="font-mono text-[8px] tracking-[0.28em] text-white/25">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function Statement({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-black px-5 py-32 md:px-10 lg:py-44">
      <div className="absolute left-[15%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#7650df]/[0.07] blur-[170px]" />

      <div className="relative mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.35fr_1.65fr]">
        <Reveal>
          <span className="font-mono text-[8px] tracking-[0.28em] text-white/22">
            INCIDENT PRINCIPLE
          </span>
        </Reveal>

        <Reveal>
          <h2 className="max-w-[930px] text-[42px] font-medium leading-[1.04] tracking-[-0.055em] md:text-[68px]">
            {page.statement}
          </h2>

          <p className="mt-10 max-w-[720px] border-l border-[#9b7bf0]/40 pl-7 text-[13px] leading-8 text-white/[0.45]">
            {page.statementBody}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ResponseSequence({ page }: { page: PageConfig }) {
  return (
    <section
      id="response"
      className="relative overflow-hidden border-b border-white/[0.07] bg-[#030303] px-5 py-32 md:px-10 lg:py-40"
    >
      <Background />

      <div className="relative mx-auto max-w-[1320px]">
        <Reveal>
          <Badge>RESPONSE SEQUENCE</Badge>
          <h2 className="mt-8 max-w-[700px] text-[42px] font-medium leading-[1.04] tracking-[-0.05em] md:text-[62px]">
            Every decision leaves
            <span className="block text-white/25">an investigative trail.</span>
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute bottom-0 left-[23px] top-0 w-px bg-white/[0.08] md:left-1/2" />

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute left-[23px] top-0 w-px bg-gradient-to-b from-[#a98cff] via-[#7453d4] to-transparent md:left-1/2"
          />

          {page.stages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`relative mb-7 flex pl-16 md:w-1/2 md:pl-0 ${
                index % 2 === 0
                  ? "md:pr-16 md:text-right"
                  : "md:ml-auto md:pl-16"
              }`}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="w-full rounded-[24px] border border-white/[0.07] bg-black/80 p-7 backdrop-blur-xl"
              >
                <span className="font-mono text-[8px] tracking-[0.25em] text-[#9d7bf7]">
                  PHASE {item.id}
                </span>

                <h3 className="mt-6 text-[24px] font-medium tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[12px] leading-7 text-white/[0.4]">
                  {item.text}
                </p>
              </motion.div>

              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(157,123,247,0)",
                    "0 0 25px rgba(157,123,247,.5)",
                    "0 0 0 rgba(157,123,247,0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className={`absolute left-[17px] top-9 h-[13px] w-[13px] rounded-full border border-[#a98cff]/70 bg-black md:left-auto ${
                  index % 2 === 0
                    ? "md:-right-[7px]"
                    : "md:-left-[7px]"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EvidenceLedger({ page }: { page: PageConfig }) {
  return (
    <section className="border-b border-white/[0.07] bg-black px-5 py-32 md:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3">
                <Database className="h-4 w-4 text-[#9878ef]" />
                <span className="font-mono text-[8px] tracking-[0.25em] text-white/25">
                  EVIDENCE LEDGER
                </span>
              </div>

              <h2 className="mt-8 text-[42px] font-medium leading-[1.04] tracking-[-0.05em] md:text-[58px]">
                Preserve context.
                <span className="block text-white/25">Maintain traceability.</span>
              </h2>
            </div>
          </Reveal>

          <div className="overflow-hidden rounded-[28px] border border-white/[0.08]">
            <div className="grid grid-cols-[70px_1fr] border-b border-white/[0.08] bg-white/[0.025] px-6 py-4 md:grid-cols-[100px_220px_1fr]">
              <span className="font-mono text-[7px] text-white/20">ID</span>
              <span className="hidden font-mono text-[7px] text-white/20 md:block">
                EVIDENCE SOURCE
              </span>
              <span className="font-mono text-[7px] text-white/20">
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
                whileHover={{
                  backgroundColor: "rgba(157,123,247,.035)",
                }}
                className="grid min-h-[135px] grid-cols-[70px_1fr] items-center border-b border-white/[0.07] px-6 last:border-b-0 md:grid-cols-[100px_220px_1fr]"
              >
                <span className="font-mono text-[8px] text-[#9878ef]">
                  EV-0{index + 1}
                </span>

                <h3 className="hidden text-[14px] text-white/70 md:block">
                  {item.title}
                </h3>

                <div>
                  <h3 className="mb-3 text-[14px] text-white/70 md:hidden">
                    {item.title}
                  </h3>
                  <p className="text-[12px] leading-7 text-white/[0.38]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityGrid({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-[#030303] px-5 py-32 md:px-10">
      <div className="absolute right-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#7650df]/[0.08] blur-[180px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <Reveal>
          <Badge>INVESTIGATION CAPABILITY</Badge>
          <h2 className="mt-8 max-w-[720px] text-[42px] font-medium leading-[1.05] tracking-[-0.05em] md:text-[60px]">
            Build context across
            <span className="block text-white/25">the entire case.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {page.capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -7,
                borderColor: "rgba(157,123,247,.3)",
              }}
              className="group min-h-[300px] rounded-[26px] border border-white/[0.07] bg-black p-8"
            >
              <div className="flex items-center justify-between">
                {index === 0 && <Search className="h-4 w-4 text-[#9878ef]" />}
                {index === 1 && <Network className="h-4 w-4 text-[#9878ef]" />}
                {index === 2 && <Eye className="h-4 w-4 text-[#9878ef]" />}
                {index === 3 && <FileText className="h-4 w-4 text-[#9878ef]" />}

                <span className="font-mono text-[8px] text-white/15">
                  C-0{index + 1}
                </span>
              </div>

              <h3 className="mt-24 text-[22px] font-medium tracking-[-0.035em] text-white/75 group-hover:text-white">
                {item.title}
              </h3>

              <p className="mt-5 max-w-[500px] text-[12px] leading-7 text-white/[0.38]">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestigationWindow() {
  return (
    <section className="relative min-h-[620px] overflow-hidden border-b border-white/[0.07] bg-black px-5 py-28 md:px-10">
      <Background />

      <div className="relative mx-auto max-w-[1200px]">
        <Reveal>
          <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#050505]/90 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4">
              <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-[#8f6ce7]/60" />
              </div>

              <span className="font-mono text-[7px] tracking-[0.25em] text-white/18">
                CASE / LIVE
              </span>
            </div>

            <div className="grid lg:grid-cols-[230px_1fr]">
              <div className="border-b border-white/[0.07] p-6 lg:border-b-0 lg:border-r">
                {[
                  "Case overview",
                  "Timeline",
                  "Entities",
                  "Evidence",
                  "Decisions",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    className={`mb-2 rounded-xl px-4 py-3 text-[10px] ${
                      index === 1
                        ? "bg-[#8d6ce6]/10 text-white/70"
                        : "text-white/25"
                    }`}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="relative min-h-[430px] overflow-hidden p-7">
                <div className="mb-10 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[7px] text-[#9878ef]">
                      EVENT TIMELINE
                    </span>
                    <h3 className="mt-3 text-[22px] font-medium">
                      Investigation activity
                    </h3>
                  </div>

                  <Activity className="h-4 w-4 text-[#9878ef]" />
                </div>

                <div className="relative">
                  <div className="absolute bottom-0 left-[5px] top-0 w-px bg-white/[0.08]" />

                  {[
                    ["00:18", "Initial signal observed"],
                    ["00:31", "Relevant identity activity correlated"],
                    ["01:04", "Incident boundary updated"],
                    ["01:42", "Containment decision recorded"],
                    ["02:16", "Additional evidence preserved"],
                  ].map(([time, text], index) => (
                    <motion.div
                      key={time}
                      initial={{ opacity: 0, x: 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 }}
                      className="relative mb-8 grid grid-cols-[70px_1fr] gap-5 pl-7"
                    >
                      <span className="absolute left-0 top-1 h-[11px] w-[11px] rounded-full border border-[#9878ef]/70 bg-black" />

                      <span className="font-mono text-[8px] text-[#9878ef]">
                        {time}
                      </span>

                      <span className="text-[11px] text-white/40">
                        {text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  animate={{ y: [-20, 420] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9878ef]/50 to-transparent"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Outcomes({ page }: { page: PageConfig }) {
  return (
    <section className="border-b border-white/[0.07] bg-[#030303] px-5 py-32 md:px-10">
      <div className="mx-auto max-w-[1150px]">
        <Reveal>
          <div className="flex items-center gap-3">
            <Workflow className="h-4 w-4 text-[#9878ef]" />
            <span className="font-mono text-[8px] tracking-[0.25em] text-white/20">
              CASE OUTCOMES
            </span>
          </div>
        </Reveal>

        <div className="mt-12">
          {page.outcomes.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ x: 8 }}
              className="group flex items-center justify-between border-t border-white/[0.08] py-7"
            >
              <div className="flex items-center gap-8">
                <span className="font-mono text-[8px] text-[#9878ef]/70">
                  0{index + 1}
                </span>
                <span className="text-[15px] text-white/45 transition group-hover:text-white/80">
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

function FinalCTA({ page }: { page: PageConfig }) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-40 md:px-10 lg:py-52">
      <Background />

      <div className="relative mx-auto max-w-[1050px] text-center">
        <Reveal>
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(143,108,231,0)",
                "0 0 90px rgba(143,108,231,.18)",
                "0 0 0 rgba(143,108,231,0)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mx-auto mb-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#9878ef]/25 bg-[#9878ef]/[0.06]"
          >
            <ShieldCheck className="h-5 w-5 text-[#b69cff]" />
          </motion.div>

          <Badge>{page.eyebrow}</Badge>

          <h2 className="mt-9 text-[48px] font-medium leading-[1] tracking-[-0.06em] md:text-[76px]">
            {page.closing[0]}
            <span className="block text-[#756496]">{page.closing[1]}</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[620px] text-[13px] leading-7 text-white/[0.42]">
            {page.closingText}
          </p>

          <motion.a
            href="/contact"
            whileHover={{
              y: -5,
              scale: 1.03,
            }}
            whileTap={{ scale: 0.97 }}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[11px] font-medium text-black"
          >
            Discuss incident readiness
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}

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
    <div className="relative overflow-x-hidden bg-black text-white">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[999] h-[2px] origin-left bg-[#9878ef]"
      />

      <Hero page={page} />
      <SignalRail />
      <Statement page={page} />
      <ResponseSequence page={page} />
      <EvidenceLedger page={page} />
      <InvestigationWindow />
      <CapabilityGrid page={page} />
      <Outcomes page={page} />
      <FinalCTA page={page} />

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