export type EndpointModelType =
  | "fleet-radar"
  | "xdr-constellation"
  | "malware-lab"
  | "device-observatory"
  | "control-gateway"
  | "mobile-fleet"
  | "encryption-vault"
  | "vulnerability-map"
  | "application-ring"
  | "prevention-shield";

export type EndpointService = {
  slug: string;
  eyebrow: string;
  kicker: string;
  title: string;
  intro: string;
  description: string;

  model: EndpointModelType;

  stats: {
    value: string;
    label: string;
  }[];

  capabilitiesEyebrow: string;
  capabilitiesTitle: string;
  capabilitiesIntro: string;

  capabilities: {
    title: string;
    description: string;
  }[];

  intelligenceEyebrow: string;
  intelligenceTitle: string;
  intelligenceIntro: string;

  intelligence: {
    label: string;
    value: string;
    description: string;
  }[];

  architectureEyebrow: string;
  architectureTitle: string;
  architectureIntro: string;

  architecture: {
    title: string;
    description: string;
  }[];

  processEyebrow: string;
  processTitle: string;
  processIntro: string;

  process: {
    step: string;
    title: string;
    description: string;
    output: string;
  }[];

  useCasesEyebrow: string;
  useCasesTitle: string;
  useCasesIntro: string;

  useCases: {
    title: string;
    description: string;
  }[];

  principlesEyebrow: string;
  principlesTitle: string;

  principles: {
    title: string;
    description: string;
  }[];

  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
};

export const endpointServices: Record<string, EndpointService> = {
  "endpoint-security": {
    slug: "endpoint-security",

    eyebrow: "Endpoint Security",
    kicker: "Device protection architecture",

    title: "Secure every endpoint without losing operational clarity.",

    intro:
      "Build a connected endpoint security layer across employee devices, servers, remote systems and distributed work environments.",

    description:
      "HYI.AI Endpoint Security brings device visibility, policy enforcement, behavioral context and response workflows into one structured operating model.",

    model: "fleet-radar",

    stats: [
      { value: "FLEET", label: "Device visibility" },
      { value: "LIVE", label: "Security context" },
      { value: "POLICY", label: "Control layer" },
    ],

    capabilitiesEyebrow: "Endpoint Foundation",
    capabilitiesTitle:
      "A security foundation designed around the devices where work actually happens.",

    capabilitiesIntro:
      "Create consistent protection across managed endpoints while maintaining visibility into device posture, activity and security controls.",

    capabilities: [
      {
        title: "Endpoint Inventory",
        description:
          "Create structured visibility across laptops, desktops, servers and managed devices participating in the environment.",
      },
      {
        title: "Device Posture",
        description:
          "Understand endpoint security state using configuration, control coverage and operational context.",
      },
      {
        title: "Behavior Visibility",
        description:
          "Observe relevant endpoint activity and organize security signals around meaningful device behavior.",
      },
      {
        title: "Policy Enforcement",
        description:
          "Apply security policies consistently across distributed endpoint populations and operating environments.",
      },
      {
        title: "Response Coordination",
        description:
          "Connect endpoint findings with investigation and containment workflows for security teams.",
      },
      {
        title: "Operational Context",
        description:
          "Give analysts a clearer view of device identity, security posture and associated activity.",
      },
    ],

    intelligenceEyebrow: "Device Intelligence",
    intelligenceTitle:
      "Turn endpoint activity into structured security context.",

    intelligenceIntro:
      "Security teams need more than device lists. They need relationships between identity, posture, behavior and response.",

    intelligence: [
      {
        label: "Device",
        value: "Identity",
        description:
          "Understand which endpoint is involved and how it fits into the environment.",
      },
      {
        label: "State",
        value: "Posture",
        description:
          "Organize configuration and security-control context around each endpoint.",
      },
      {
        label: "Activity",
        value: "Behavior",
        description:
          "Connect relevant device activity to broader security observations.",
      },
      {
        label: "Action",
        value: "Response",
        description:
          "Create a structured path from endpoint finding to operational action.",
      },
    ],

    architectureEyebrow: "Endpoint Architecture",
    architectureTitle:
      "Connect device telemetry, policy and security operations.",

    architectureIntro:
      "The endpoint layer should participate in a broader security architecture rather than operate as an isolated tool.",

    architecture: [
      {
        title: "Managed Devices",
        description:
          "Endpoint population across workforce and operational environments.",
      },
      {
        title: "Security Controls",
        description:
          "Protection and configuration controls applied to managed devices.",
      },
      {
        title: "Telemetry Layer",
        description:
          "Security-relevant endpoint observations organized for analysis.",
      },
      {
        title: "Context Engine",
        description:
          "Identity, posture and activity relationships assembled for investigation.",
      },
      {
        title: "Security Operations",
        description:
          "Analyst workflows for triage, investigation and coordinated response.",
      },
    ],

    processEyebrow: "Operating Cycle",
    processTitle: "A continuous endpoint security operating loop.",

    processIntro:
      "Endpoint protection becomes more useful when visibility and response operate as a connected cycle.",

    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "Establish visibility across the endpoint population and device ownership.",
        output: "Device context",
      },
      {
        step: "02",
        title: "Assess",
        description:
          "Review posture, configuration and security-control coverage.",
        output: "Posture view",
      },
      {
        step: "03",
        title: "Observe",
        description:
          "Collect and organize relevant endpoint security activity.",
        output: "Activity context",
      },
      {
        step: "04",
        title: "Investigate",
        description:
          "Connect endpoint observations with identity and surrounding events.",
        output: "Investigation",
      },
      {
        step: "05",
        title: "Respond",
        description:
          "Coordinate containment and remediation through defined workflows.",
        output: "Response action",
      },
    ],

    useCasesEyebrow: "Endpoint Operations",
    useCasesTitle: "Where endpoint security becomes operational.",

    useCasesIntro:
      "Use endpoint security as a connected layer across workforce protection and security operations.",

    useCases: [
      {
        title: "Remote Workforce",
        description:
          "Maintain consistent device security visibility across distributed employees.",
      },
      {
        title: "Privileged Devices",
        description:
          "Apply stronger operational oversight to sensitive administrative endpoints.",
      },
      {
        title: "Server Protection",
        description:
          "Extend endpoint security context to critical server workloads.",
      },
      {
        title: "Security Investigations",
        description:
          "Use device context to strengthen investigation and response workflows.",
      },
    ],

    principlesEyebrow: "Design Principles",
    principlesTitle: "Endpoint security should remain visible and explainable.",

    principles: [
      {
        title: "Know the device",
        description:
          "Protection starts with reliable understanding of endpoint identity and ownership.",
      },
      {
        title: "Preserve context",
        description:
          "Security observations should remain connected to users, devices and surrounding activity.",
      },
      {
        title: "Control consistently",
        description:
          "Security policy should remain predictable across the managed fleet.",
      },
      {
        title: "Design for operations",
        description:
          "Endpoint security should support practical investigation and response workflows.",
      },
    ],

    ctaEyebrow: "Endpoint Security",
    ctaTitle: "Build a clearer security layer around every managed device.",
    ctaText:
      "Connect endpoint visibility, control and security operations through a structured endpoint protection architecture.",
  },

  "endpoint-detection-response": {
    slug: "endpoint-detection-response",

    eyebrow: "Endpoint Detection & Response",
    kicker: "Behavioral detection system",

    title: "Follow suspicious endpoint behavior from signal to response.",

    intro:
      "Create deeper behavioral visibility across endpoints and give analysts a structured path for investigation, containment and response.",

    description:
      "EDR connects device telemetry, behavioral observations and analyst workflows so security teams can investigate endpoint activity with greater context.",

    model: "fleet-radar",

    stats: [
      { value: "EDR", label: "Detection layer" },
      { value: "TRACE", label: "Behavior chain" },
      { value: "ACT", label: "Response path" },
    ],

    capabilitiesEyebrow: "Detection Surface",
    capabilitiesTitle:
      "Observe endpoint behavior instead of relying only on isolated alerts.",

    capabilitiesIntro:
      "EDR provides the context needed to understand how suspicious activity develops across a device.",

    capabilities: [
      {
        title: "Behavior Detection",
        description:
          "Identify endpoint activity that requires investigation based on behavioral security observations.",
      },
      {
        title: "Process Visibility",
        description:
          "Organize process and execution context to help analysts understand suspicious sequences.",
      },
      {
        title: "Endpoint Timeline",
        description:
          "Reconstruct relevant device activity around a security observation.",
      },
      {
        title: "Investigation Context",
        description:
          "Connect device, user and activity information into a clearer analyst view.",
      },
      {
        title: "Containment Workflow",
        description:
          "Support structured actions when endpoint isolation or remediation is required.",
      },
      {
        title: "Case Enrichment",
        description:
          "Add endpoint evidence to broader incident and investigation workflows.",
      },
    ],

    intelligenceEyebrow: "Behavior Graph",
    intelligenceTitle:
      "Understand the sequence behind an endpoint security signal.",

    intelligenceIntro:
      "Behavioral context helps distinguish isolated activity from a connected sequence that deserves investigation.",

    intelligence: [
      {
        label: "Origin",
        value: "Process",
        description: "Identify where the observed execution sequence begins.",
      },
      {
        label: "Sequence",
        value: "Activity",
        description:
          "Connect related endpoint actions into an understandable timeline.",
      },
      {
        label: "Context",
        value: "Identity",
        description:
          "Associate endpoint behavior with device and user information.",
      },
      {
        label: "Decision",
        value: "Response",
        description:
          "Move validated findings toward containment and remediation.",
      },
    ],

    architectureEyebrow: "EDR Architecture",
    architectureTitle:
      "Create a continuous path from endpoint telemetry to analyst action.",

    architectureIntro:
      "EDR architecture connects endpoint observation with behavioral analysis and investigation.",

    architecture: [
      {
        title: "Endpoint Sensor",
        description: "Collect security-relevant device observations.",
      },
      {
        title: "Behavior Stream",
        description:
          "Organize endpoint activity into analyzable behavioral sequences.",
      },
      {
        title: "Detection Logic",
        description:
          "Evaluate activity for patterns requiring security attention.",
      },
      {
        title: "Investigation Workspace",
        description:
          "Give analysts a structured environment for reviewing evidence.",
      },
      {
        title: "Response Control",
        description:
          "Coordinate endpoint actions through controlled response workflows.",
      },
    ],

    processEyebrow: "Detection Workflow",
    processTitle: "Move from endpoint observation to validated response.",

    processIntro:
      "A disciplined EDR workflow preserves evidence and context throughout investigation.",

    process: [
      {
        step: "01",
        title: "Observe",
        description: "Capture relevant endpoint behavioral activity.",
        output: "Telemetry",
      },
      {
        step: "02",
        title: "Detect",
        description:
          "Identify behavioral patterns that require analyst attention.",
        output: "Detection",
      },
      {
        step: "03",
        title: "Trace",
        description:
          "Reconstruct the surrounding endpoint activity and sequence.",
        output: "Timeline",
      },
      {
        step: "04",
        title: "Validate",
        description:
          "Review evidence and determine appropriate security handling.",
        output: "Decision",
      },
      {
        step: "05",
        title: "Contain",
        description:
          "Apply controlled response actions when investigation confirms the need.",
        output: "Containment",
      },
    ],

    useCasesEyebrow: "EDR Operations",
    useCasesTitle: "Behavioral endpoint investigations across critical scenarios.",

    useCasesIntro:
      "Use EDR when security teams need detailed endpoint evidence and a reliable investigation trail.",

    useCases: [
      {
        title: "Suspicious Execution",
        description:
          "Investigate unusual process behavior and associated endpoint activity.",
      },
      {
        title: "Credential Activity",
        description:
          "Review endpoint evidence associated with suspicious identity activity.",
      },
      {
        title: "Persistence Investigation",
        description:
          "Trace endpoint changes and behaviors requiring deeper analysis.",
      },
      {
        title: "Incident Containment",
        description:
          "Coordinate endpoint response within a broader incident workflow.",
      },
    ],

    principlesEyebrow: "EDR Principles",
    principlesTitle: "Detection should preserve the story behind the signal.",

    principles: [
      {
        title: "Keep the timeline",
        description:
          "Investigations need the sequence surrounding the original observation.",
      },
      {
        title: "Connect identity",
        description:
          "Endpoint activity becomes more useful when associated with device and user context.",
      },
      {
        title: "Validate before action",
        description:
          "Response decisions should remain tied to investigation evidence.",
      },
      {
        title: "Preserve evidence",
        description:
          "Operational actions should not destroy the context analysts need.",
      },
    ],

    ctaEyebrow: "Endpoint Detection & Response",
    ctaTitle: "Give endpoint investigations a clearer behavioral trail.",
    ctaText:
      "Connect device activity, behavioral detection and response into a structured EDR operating model.",
  },

  "extended-detection-response": {
    slug: "extended-detection-response",

    eyebrow: "Extended Detection & Response",
    kicker: "Cross-domain security intelligence",

    title: "Connect endpoint signals to the rest of the security environment.",

    intro:
      "Bring endpoint, identity, network, cloud and security telemetry into a connected detection and investigation experience.",

    description:
      "XDR helps analysts move beyond isolated security tools by connecting observations across multiple security domains.",

    model: "xdr-constellation",

    stats: [
      { value: "XDR", label: "Cross-domain view" },
      { value: "GRAPH", label: "Signal relations" },
      { value: "CASE", label: "Unified context" },
    ],

    capabilitiesEyebrow: "Cross-Domain Detection",
    capabilitiesTitle:
      "Build investigations around relationships rather than individual products.",

    capabilitiesIntro:
      "XDR organizes security observations across domains to create richer investigation context.",

    capabilities: [
      {
        title: "Endpoint Correlation",
        description:
          "Connect endpoint observations with surrounding security activity.",
      },
      {
        title: "Identity Context",
        description:
          "Associate user and authentication information with investigations.",
      },
      {
        title: "Network Context",
        description:
          "Bring relevant communication and network observations into the case.",
      },
      {
        title: "Cloud Context",
        description:
          "Connect cloud security observations with related endpoint activity.",
      },
      {
        title: "Unified Investigation",
        description:
          "Give analysts one structured view across connected evidence.",
      },
      {
        title: "Coordinated Response",
        description:
          "Support response workflows that span multiple security control layers.",
      },
    ],

    intelligenceEyebrow: "Security Constellation",
    intelligenceTitle: "Reveal relationships hidden across separate tools.",

    intelligenceIntro:
      "A cross-domain investigation can show how identity, device and infrastructure activity relate to one another.",

    intelligence: [
      {
        label: "Node 01",
        value: "Endpoint",
        description: "Device-level evidence and behavioral observations.",
      },
      {
        label: "Node 02",
        value: "Identity",
        description: "User and authentication context around the activity.",
      },
      {
        label: "Node 03",
        value: "Network",
        description: "Relevant communication relationships and traffic context.",
      },
      {
        label: "Node 04",
        value: "Cloud",
        description: "Workload and cloud observations connected to the case.",
      },
    ],

    architectureEyebrow: "XDR Fabric",
    architectureTitle: "Create a connected security investigation fabric.",

    architectureIntro:
      "XDR architecture should normalize and relate observations without removing the context of their source.",

    architecture: [
      {
        title: "Security Sources",
        description:
          "Endpoint, identity, network, cloud and additional security controls.",
      },
      {
        title: "Normalization",
        description:
          "Structure incoming observations for consistent analysis.",
      },
      {
        title: "Correlation Graph",
        description:
          "Create relationships across users, assets and security activity.",
      },
      {
        title: "Investigation Layer",
        description:
          "Present connected evidence to analysts in a usable form.",
      },
      {
        title: "Response Fabric",
        description:
          "Coordinate security actions across integrated control points.",
      },
    ],

    processEyebrow: "XDR Investigation",
    processTitle: "Correlate first. Investigate with context.",

    processIntro:
      "Cross-domain context reduces the need to manually reconstruct evidence across disconnected consoles.",

    process: [
      {
        step: "01",
        title: "Ingest",
        description: "Receive observations from connected security domains.",
        output: "Signals",
      },
      {
        step: "02",
        title: "Normalize",
        description:
          "Structure data while retaining useful source information.",
        output: "Context",
      },
      {
        step: "03",
        title: "Correlate",
        description:
          "Connect related users, devices and security observations.",
        output: "Graph",
      },
      {
        step: "04",
        title: "Investigate",
        description:
          "Present connected evidence as a structured investigation.",
        output: "Case",
      },
      {
        step: "05",
        title: "Coordinate",
        description:
          "Apply response actions across relevant security controls.",
        output: "Response",
      },
    ],

    useCasesEyebrow: "Connected Investigations",
    useCasesTitle: "Security scenarios that cross traditional tool boundaries.",

    useCasesIntro:
      "XDR becomes valuable when a security event spans more than one control domain.",

    useCases: [
      {
        title: "Identity + Endpoint",
        description:
          "Connect authentication activity with suspicious device behavior.",
      },
      {
        title: "Endpoint + Network",
        description:
          "Relate endpoint observations to communication patterns.",
      },
      {
        title: "Cloud + Identity",
        description:
          "Investigate cloud activity using associated identity context.",
      },
      {
        title: "Multi-Stage Incidents",
        description:
          "Build one investigation across multiple security domains.",
      },
    ],

    principlesEyebrow: "XDR Principles",
    principlesTitle: "Correlation should add context, not hide it.",

    principles: [
      {
        title: "Retain source context",
        description:
          "Normalized data should remain traceable to its original security source.",
      },
      {
        title: "Connect meaningful evidence",
        description:
          "Correlation should focus on useful relationships rather than volume.",
      },
      {
        title: "Reduce console switching",
        description:
          "Analysts should be able to investigate connected activity efficiently.",
      },
      {
        title: "Coordinate carefully",
        description:
          "Cross-domain response should remain controlled and auditable.",
      },
    ],

    ctaEyebrow: "Extended Detection & Response",
    ctaTitle: "Connect security evidence across the entire investigation.",
    ctaText:
      "Build an XDR operating layer that relates endpoint, identity, network and cloud observations.",
  },

  "antivirus-anti-malware": {
    slug: "antivirus-anti-malware",

    eyebrow: "Antivirus & Anti-Malware",
    kicker: "Malicious-code defense",

    title: "Stop malicious code before it becomes endpoint activity.",

    intro:
      "Create layered endpoint protection for suspicious files, malicious executables and unwanted software behavior.",

    description:
      "Modern anti-malware protection combines file inspection, reputation context, behavioral analysis and controlled remediation.",

    model: "malware-lab",

    stats: [
      { value: "SCAN", label: "Inspection" },
      { value: "CLASSIFY", label: "Analysis" },
      { value: "BLOCK", label: "Enforcement" },
    ],

    capabilitiesEyebrow: "Malware Defense",
    capabilitiesTitle:
      "Inspect files and behavior through multiple security lenses.",

    capabilitiesIntro:
      "Layered malware protection reduces dependence on any single detection method.",

    capabilities: [
      {
        title: "File Inspection",
        description:
          "Evaluate files and executable content before allowing normal operation.",
      },
      {
        title: "Reputation Context",
        description:
          "Use available reputation information to strengthen security decisions.",
      },
      {
        title: "Behavior Analysis",
        description:
          "Observe suspicious runtime activity that may require intervention.",
      },
      {
        title: "Quarantine Workflow",
        description:
          "Separate suspicious content from normal endpoint operation.",
      },
      {
        title: "Remediation",
        description:
          "Support controlled removal and recovery after validated findings.",
      },
      {
        title: "Protection Policy",
        description:
          "Apply consistent anti-malware controls across managed endpoint groups.",
      },
    ],

    intelligenceEyebrow: "Analysis Chamber",
    intelligenceTitle:
      "Move suspicious content through a controlled decision pipeline.",

    intelligenceIntro:
      "File context and runtime behavior can contribute different evidence to a malware decision.",

    intelligence: [
      {
        label: "Stage A",
        value: "Inspect",
        description: "Review the characteristics of suspicious content.",
      },
      {
        label: "Stage B",
        value: "Observe",
        description: "Evaluate relevant behavior when additional context is needed.",
      },
      {
        label: "Stage C",
        value: "Classify",
        description: "Organize evidence into an actionable security decision.",
      },
      {
        label: "Stage D",
        value: "Control",
        description: "Block, quarantine or permit according to policy.",
      },
    ],

    architectureEyebrow: "Protection Pipeline",
    architectureTitle:
      "Build a layered malware inspection and enforcement path.",

    architectureIntro:
      "Anti-malware architecture combines inspection, contextual analysis and endpoint control.",

    architecture: [
      {
        title: "Content Entry",
        description: "Files and executable content entering endpoint workflows.",
      },
      {
        title: "Inspection Layer",
        description: "Static and contextual checks applied to content.",
      },
      {
        title: "Behavior Layer",
        description: "Runtime observations used when deeper analysis is required.",
      },
      {
        title: "Decision Engine",
        description: "Security classification based on available evidence.",
      },
      {
        title: "Endpoint Control",
        description: "Allow, block or quarantine according to security policy.",
      },
    ],

    processEyebrow: "Malware Handling",
    processTitle: "Inspect suspicious content through a controlled sequence.",

    processIntro:
      "The workflow should preserve evidence while keeping malicious content isolated from normal operations.",

    process: [
      {
        step: "01",
        title: "Receive",
        description: "Identify content entering the inspection workflow.",
        output: "Sample",
      },
      {
        step: "02",
        title: "Inspect",
        description: "Review characteristics and available reputation context.",
        output: "Evidence",
      },
      {
        step: "03",
        title: "Analyze",
        description: "Evaluate behavior when additional context is required.",
        output: "Behavior",
      },
      {
        step: "04",
        title: "Decide",
        description: "Classify the content according to security evidence.",
        output: "Verdict",
      },
      {
        step: "05",
        title: "Enforce",
        description: "Apply the appropriate endpoint control action.",
        output: "Action",
      },
    ],

    useCasesEyebrow: "Protection Scenarios",
    useCasesTitle: "Protect endpoints against malicious and unwanted content.",

    useCasesIntro:
      "Anti-malware controls support everyday endpoint protection across common content-entry paths.",

    useCases: [
      {
        title: "Downloaded Files",
        description:
          "Inspect suspicious content entering through browser and download workflows.",
      },
      {
        title: "Email Attachments",
        description:
          "Apply endpoint protection when attachments reach managed devices.",
      },
      {
        title: "Portable Media",
        description:
          "Evaluate content introduced through removable storage.",
      },
      {
        title: "Runtime Activity",
        description:
          "Observe suspicious executable behavior requiring intervention.",
      },
    ],

    principlesEyebrow: "Protection Principles",
    principlesTitle: "Layer malware decisions instead of trusting one signal.",

    principles: [
      {
        title: "Inspect early",
        description:
          "Evaluate suspicious content before it becomes normal endpoint activity.",
      },
      {
        title: "Use behavioral context",
        description:
          "File characteristics alone may not provide enough information.",
      },
      {
        title: "Quarantine safely",
        description:
          "Suspicious content should be isolated without losing useful evidence.",
      },
      {
        title: "Keep policies consistent",
        description:
          "Protection decisions should remain predictable across managed endpoints.",
      },
    ],

    ctaEyebrow: "Anti-Malware",
    ctaTitle: "Create a layered endpoint defense against malicious content.",
    ctaText:
      "Combine inspection, behavioral context and controlled remediation across managed endpoints.",
  },

  "endpoint-monitoring": {
    slug: "endpoint-monitoring",

    eyebrow: "Endpoint Monitoring",
    kicker: "Continuous device observability",

    title: "See endpoint security state as a living operational system.",

    intro:
      "Maintain continuous visibility into device status, security controls and endpoint activity across a distributed environment.",

    description:
      "Endpoint monitoring creates an operational view of device posture and security activity without reducing every observation to an alert.",

    model: "device-observatory",

    stats: [
      { value: "LIVE", label: "Device state" },
      { value: "STREAM", label: "Observability" },
      { value: "POSTURE", label: "Security view" },
    ],

    capabilitiesEyebrow: "Device Observability",
    capabilitiesTitle:
      "Maintain a continuous view of endpoint health and security state.",

    capabilitiesIntro:
      "Monitoring creates the operational context teams need before an investigation even begins.",

    capabilities: [
      {
        title: "Fleet Visibility",
        description:
          "Maintain structured awareness of managed endpoint populations.",
      },
      {
        title: "Security State",
        description:
          "Track relevant endpoint security and configuration conditions.",
      },
      {
        title: "Activity Streams",
        description:
          "Organize device observations into useful operational timelines.",
      },
      {
        title: "Coverage Monitoring",
        description:
          "Identify where expected endpoint controls are present or missing.",
      },
      {
        title: "Operational Views",
        description:
          "Create focused monitoring views for different device groups.",
      },
      {
        title: "Escalation Context",
        description:
          "Provide useful device history when observations require investigation.",
      },
    ],

    intelligenceEyebrow: "Endpoint Observatory",
    intelligenceTitle:
      "Observe the fleet without turning every change into noise.",

    intelligenceIntro:
      "A useful monitoring layer distinguishes routine endpoint state from observations requiring attention.",

    intelligence: [
      {
        label: "Fleet",
        value: "Coverage",
        description: "Understand which endpoints are actively represented.",
      },
      {
        label: "State",
        value: "Health",
        description: "Track relevant security and operational posture.",
      },
      {
        label: "Flow",
        value: "Activity",
        description: "Observe meaningful changes across the device population.",
      },
      {
        label: "Signal",
        value: "Attention",
        description:
          "Escalate observations that require security investigation.",
      },
    ],

    architectureEyebrow: "Monitoring Architecture",
    architectureTitle: "Create a persistent endpoint observability layer.",

    architectureIntro:
      "Endpoint monitoring should provide both current state and useful historical context.",

    architecture: [
      {
        title: "Device Fleet",
        description: "Managed endpoint population under observation.",
      },
      {
        title: "State Collection",
        description: "Relevant security and operational device observations.",
      },
      {
        title: "Context Store",
        description: "Structured history supporting investigation and comparison.",
      },
      {
        title: "Monitoring Views",
        description: "Operational representations for security teams.",
      },
      {
        title: "Escalation Layer",
        description: "Path from monitoring observation to investigation.",
      },
    ],

    processEyebrow: "Monitoring Cycle",
    processTitle: "Observe device state continuously and escalate deliberately.",

    processIntro:
      "Monitoring should create useful continuity between normal operations and security investigation.",

    process: [
      {
        step: "01",
        title: "Connect",
        description: "Bring managed endpoints into the monitoring environment.",
        output: "Coverage",
      },
      {
        step: "02",
        title: "Observe",
        description: "Collect relevant device state and security observations.",
        output: "State",
      },
      {
        step: "03",
        title: "Compare",
        description: "Identify meaningful changes from expected conditions.",
        output: "Change",
      },
      {
        step: "04",
        title: "Contextualize",
        description: "Review device history and surrounding information.",
        output: "Context",
      },
      {
        step: "05",
        title: "Escalate",
        description: "Route observations requiring security attention.",
        output: "Case",
      },
    ],

    useCasesEyebrow: "Monitoring Views",
    useCasesTitle: "Operational visibility for distributed endpoint environments.",

    useCasesIntro:
      "Continuous endpoint monitoring supports security operations before, during and after an incident.",

    useCases: [
      {
        title: "Remote Device Fleet",
        description:
          "Maintain visibility across geographically distributed endpoints.",
      },
      {
        title: "Control Coverage",
        description:
          "Understand whether expected endpoint controls remain active.",
      },
      {
        title: "Posture Changes",
        description:
          "Identify meaningful security-state changes requiring review.",
      },
      {
        title: "Investigation History",
        description:
          "Use historical device context during security investigations.",
      },
    ],

    principlesEyebrow: "Observability Principles",
    principlesTitle: "Monitoring should create clarity, not another alert stream.",

    principles: [
      {
        title: "Separate state from alerts",
        description:
          "Not every endpoint change should become a security incident.",
      },
      {
        title: "Keep historical context",
        description:
          "Past device state can be important during investigation.",
      },
      {
        title: "Monitor coverage",
        description:
          "Visibility gaps should be visible to security operations.",
      },
      {
        title: "Escalate intentionally",
        description:
          "Security workflows should focus on observations that deserve action.",
      },
    ],

    ctaEyebrow: "Endpoint Monitoring",
    ctaTitle: "Build continuous security visibility across the endpoint fleet.",
    ctaText:
      "Create an endpoint observability layer that connects device state, history and investigation context.",
  },

  "device-control": {
    slug: "device-control",

    eyebrow: "Device Control",
    kicker: "Peripheral access governance",

    title: "Control how external devices interact with managed endpoints.",

    intro:
      "Govern removable media and peripheral access through structured device policies and auditable control decisions.",

    description:
      "Device Control helps security teams define how external hardware interacts with managed endpoints while preserving operational visibility.",

    model: "control-gateway",

    stats: [
      { value: "USB", label: "Peripheral context" },
      { value: "POLICY", label: "Access decision" },
      { value: "AUDIT", label: "Control history" },
    ],

    capabilitiesEyebrow: "Peripheral Governance",
    capabilitiesTitle:
      "Turn external device access into an explicit security decision.",

    capabilitiesIntro:
      "Control removable and peripheral device interaction according to organizational security requirements.",

    capabilities: [
      {
        title: "Peripheral Visibility",
        description:
          "Understand external devices interacting with managed endpoints.",
      },
      {
        title: "Access Policies",
        description:
          "Define which device categories and usage patterns are permitted.",
      },
      {
        title: "Removable Media Control",
        description:
          "Govern removable storage interaction with managed systems.",
      },
      {
        title: "Exception Handling",
        description:
          "Support controlled business exceptions without weakening the baseline.",
      },
      {
        title: "Usage Context",
        description:
          "Record relevant device-control activity for operational review.",
      },
      {
        title: "Audit Trail",
        description:
          "Maintain traceable records of control decisions and exceptions.",
      },
    ],

    intelligenceEyebrow: "Control Gateway",
    intelligenceTitle:
      "Evaluate peripheral access before trust is extended.",

    intelligenceIntro:
      "A device-control gateway can combine device identity, endpoint context and policy before access is permitted.",

    intelligence: [
      {
        label: "Input",
        value: "Peripheral",
        description: "Identify the external device requesting interaction.",
      },
      {
        label: "Context",
        value: "Endpoint",
        description: "Understand the managed endpoint receiving the request.",
      },
      {
        label: "Rule",
        value: "Policy",
        description: "Evaluate organizational device-control requirements.",
      },
      {
        label: "Result",
        value: "Decision",
        description: "Permit, restrict or deny according to policy.",
      },
    ],

    architectureEyebrow: "Control Architecture",
    architectureTitle:
      "Place a policy decision layer between endpoints and external devices.",

    architectureIntro:
      "Device-control architecture should make peripheral access visible, governed and reviewable.",

    architecture: [
      {
        title: "External Device",
        description: "Peripheral or removable hardware requesting interaction.",
      },
      {
        title: "Device Identity",
        description: "Available characteristics used for policy evaluation.",
      },
      {
        title: "Policy Gateway",
        description: "Central decision point for allowed and restricted usage.",
      },
      {
        title: "Endpoint Enforcement",
        description: "Apply the resulting control to the managed device.",
      },
      {
        title: "Audit Context",
        description: "Record relevant control decisions for review.",
      },
    ],

    processEyebrow: "Access Decision",
    processTitle: "Evaluate each external device through policy.",

    processIntro:
      "Controlled access requires a predictable path from device detection to enforcement.",

    process: [
      {
        step: "01",
        title: "Detect",
        description: "Identify an external device interacting with an endpoint.",
        output: "Device",
      },
      {
        step: "02",
        title: "Identify",
        description: "Collect available device and endpoint context.",
        output: "Context",
      },
      {
        step: "03",
        title: "Evaluate",
        description: "Compare the request against device-control policy.",
        output: "Decision",
      },
      {
        step: "04",
        title: "Enforce",
        description: "Apply the appropriate access restriction or permission.",
        output: "Control",
      },
      {
        step: "05",
        title: "Record",
        description: "Preserve relevant decision history for review.",
        output: "Audit",
      },
    ],

    useCasesEyebrow: "Device Governance",
    useCasesTitle: "Control peripheral interaction where data and endpoints meet.",

    useCasesIntro:
      "Device Control supports organizations where external hardware introduces operational or security risk.",

    useCases: [
      {
        title: "Removable Storage",
        description:
          "Govern portable storage access on managed endpoints.",
      },
      {
        title: "Sensitive Workstations",
        description:
          "Apply stronger peripheral controls to high-value systems.",
      },
      {
        title: "Contractor Devices",
        description:
          "Define appropriate external-device rules for temporary users.",
      },
      {
        title: "Controlled Exceptions",
        description:
          "Permit approved business use through traceable exceptions.",
      },
    ],

    principlesEyebrow: "Control Principles",
    principlesTitle: "Peripheral access should be explicit, not assumed.",

    principles: [
      {
        title: "Default to policy",
        description:
          "External device usage should follow defined organizational controls.",
      },
      {
        title: "Support legitimate work",
        description:
          "Controls should provide governed exception paths where required.",
      },
      {
        title: "Record decisions",
        description:
          "Security teams should be able to review device-control activity.",
      },
      {
        title: "Apply context",
        description:
          "Endpoint sensitivity can influence the appropriate access decision.",
      },
    ],

    ctaEyebrow: "Device Control",
    ctaTitle: "Govern external device access with clear endpoint policy.",
    ctaText:
      "Create controlled peripheral access across managed endpoints without losing operational visibility.",
  },

  "mobile-device-security": {
    slug: "mobile-device-security",

    eyebrow: "Mobile Device Security",
    kicker: "Mobile workforce protection",

    title: "Extend endpoint security to the devices that move with your workforce.",

    intro:
      "Protect managed mobile environments through device posture, application context, access controls and security policy.",

    description:
      "Mobile security creates a dedicated control layer for smartphones and tablets operating across distributed networks and work contexts.",

    model: "mobile-fleet",

    stats: [
      { value: "MOBILE", label: "Device fleet" },
      { value: "POSTURE", label: "Trust state" },
      { value: "ACCESS", label: "Control path" },
    ],

    capabilitiesEyebrow: "Mobile Protection",
    capabilitiesTitle:
      "Secure mobile endpoints without treating them like traditional desktops.",

    capabilitiesIntro:
      "Mobile devices require security controls designed around mobility, application use and variable network context.",

    capabilities: [
      {
        title: "Mobile Inventory",
        description:
          "Maintain structured visibility across managed smartphones and tablets.",
      },
      {
        title: "Posture Assessment",
        description:
          "Understand relevant device state before allowing sensitive access.",
      },
      {
        title: "Application Context",
        description:
          "Include managed application state in mobile security decisions.",
      },
      {
        title: "Access Governance",
        description:
          "Connect mobile posture with organizational access requirements.",
      },
      {
        title: "Policy Distribution",
        description:
          "Apply mobile security controls consistently across device groups.",
      },
      {
        title: "Remote Response",
        description:
          "Support appropriate security actions when mobile risk changes.",
      },
    ],

    intelligenceEyebrow: "Mobile Fleet",
    intelligenceTitle:
      "Evaluate mobile trust across device, application and access context.",

    intelligenceIntro:
      "Mobile security decisions should reflect the changing context of devices outside traditional network boundaries.",

    intelligence: [
      {
        label: "Device",
        value: "Posture",
        description: "Evaluate relevant mobile security state.",
      },
      {
        label: "App",
        value: "Context",
        description: "Include managed application information where appropriate.",
      },
      {
        label: "User",
        value: "Identity",
        description: "Connect the mobile endpoint with user context.",
      },
      {
        label: "Gate",
        value: "Access",
        description: "Apply policy before sensitive resource access.",
      },
    ],

    architectureEyebrow: "Mobile Architecture",
    architectureTitle:
      "Connect mobile posture to enterprise access decisions.",

    architectureIntro:
      "Mobile security works best when device state participates in a broader trust architecture.",

    architecture: [
      {
        title: "Mobile Device",
        description: "Managed smartphone or tablet used for organizational work.",
      },
      {
        title: "Posture Layer",
        description: "Relevant device and security state.",
      },
      {
        title: "Application Layer",
        description: "Managed application and data context.",
      },
      {
        title: "Access Gateway",
        description: "Policy decision before protected resource access.",
      },
      {
        title: "Enterprise Services",
        description: "Applications and information available to approved devices.",
      },
    ],

    processEyebrow: "Mobile Trust",
    processTitle: "Continuously evaluate mobile access context.",

    processIntro:
      "Mobile trust should adapt as device posture and access context change.",

    process: [
      {
        step: "01",
        title: "Enroll",
        description: "Bring the mobile device into managed security coverage.",
        output: "Managed device",
      },
      {
        step: "02",
        title: "Assess",
        description: "Evaluate relevant mobile posture and control state.",
        output: "Posture",
      },
      {
        step: "03",
        title: "Contextualize",
        description: "Combine device, application and identity context.",
        output: "Trust context",
      },
      {
        step: "04",
        title: "Authorize",
        description: "Apply access policy to the current mobile context.",
        output: "Access",
      },
      {
        step: "05",
        title: "Reevaluate",
        description: "Review trust as device conditions change.",
        output: "Updated state",
      },
    ],

    useCasesEyebrow: "Mobile Work",
    useCasesTitle: "Protect mobile access across modern workforce scenarios.",

    useCasesIntro:
      "Mobile security supports organizations where work continues outside traditional endpoint and network boundaries.",

    useCases: [
      {
        title: "Executive Mobility",
        description:
          "Apply stronger mobile security context to sensitive user groups.",
      },
      {
        title: "Field Workforce",
        description:
          "Protect devices used across distributed operational environments.",
      },
      {
        title: "Corporate Applications",
        description:
          "Connect mobile posture with access to managed applications.",
      },
      {
        title: "Lost Device Response",
        description:
          "Support controlled security actions when device custody changes.",
      },
    ],

    principlesEyebrow: "Mobile Principles",
    principlesTitle: "Mobile trust should change when mobile context changes.",

    principles: [
      {
        title: "Treat mobility as context",
        description:
          "Mobile endpoints operate outside traditional security boundaries.",
      },
      {
        title: "Connect posture to access",
        description:
          "Sensitive access should consider current device security state.",
      },
      {
        title: "Protect work data",
        description:
          "Security controls should focus on organizational applications and information.",
      },
      {
        title: "Reevaluate continuously",
        description:
          "Mobile trust should not remain static after initial enrollment.",
      },
    ],

    ctaEyebrow: "Mobile Device Security",
    ctaTitle: "Secure the mobile endpoint without limiting the mobile workforce.",
    ctaText:
      "Connect mobile posture, application context and enterprise access through a structured security architecture.",
  },

  "endpoint-encryption": {
    slug: "endpoint-encryption",

    eyebrow: "Endpoint Encryption",
    kicker: "Data-at-rest protection",

    title: "Protect endpoint data even when physical control of the device is lost.",

    intro:
      "Apply structured encryption controls to managed endpoint storage while maintaining recovery, governance and operational visibility.",

    description:
      "Endpoint encryption protects data at rest through managed encryption policy, key governance and recovery processes.",

    model: "encryption-vault",

    stats: [
      { value: "CRYPT", label: "Data protection" },
      { value: "KEY", label: "Governance" },
      { value: "RECOVER", label: "Operational access" },
    ],

    capabilitiesEyebrow: "Encryption Controls",
    capabilitiesTitle:
      "Protect endpoint storage through governed encryption.",

    capabilitiesIntro:
      "Encryption should protect data without creating unmanaged recovery or operational risk.",

    capabilities: [
      {
        title: "Storage Encryption",
        description:
          "Apply encryption controls to managed endpoint storage.",
      },
      {
        title: "Policy Enforcement",
        description:
          "Define encryption requirements across endpoint groups.",
      },
      {
        title: "Key Governance",
        description:
          "Maintain structured handling of encryption and recovery material.",
      },
      {
        title: "Recovery Workflow",
        description:
          "Support authorized recovery without weakening security controls.",
      },
      {
        title: "Compliance Visibility",
        description:
          "Understand encryption state across the managed endpoint fleet.",
      },
      {
        title: "Exception Management",
        description:
          "Track and govern systems that require special handling.",
      },
    ],

    intelligenceEyebrow: "Encryption Vault",
    intelligenceTitle:
      "Separate protected data from the mechanisms used to recover it.",

    intelligenceIntro:
      "Strong encryption architecture combines endpoint enforcement with controlled key and recovery governance.",

    intelligence: [
      {
        label: "Layer 01",
        value: "Data",
        description: "Endpoint information requiring protection at rest.",
      },
      {
        label: "Layer 02",
        value: "Cipher",
        description: "Encryption applied according to organizational policy.",
      },
      {
        label: "Layer 03",
        value: "Key",
        description: "Governed material supporting protected access.",
      },
      {
        label: "Layer 04",
        value: "Recovery",
        description: "Controlled process for authorized operational recovery.",
      },
    ],

    architectureEyebrow: "Encryption Architecture",
    architectureTitle:
      "Create an endpoint encryption model with controlled recovery.",

    architectureIntro:
      "Encryption becomes operationally sustainable when protection and recovery are designed together.",

    architecture: [
      {
        title: "Endpoint Storage",
        description: "Local data requiring protection.",
      },
      {
        title: "Encryption Control",
        description: "Policy-driven protection applied to storage.",
      },
      {
        title: "Key Governance",
        description: "Structured management of cryptographic material.",
      },
      {
        title: "Recovery Service",
        description: "Authorized recovery process for legitimate operational needs.",
      },
      {
        title: "Compliance View",
        description: "Visibility into encryption coverage and exceptions.",
      },
    ],

    processEyebrow: "Encryption Lifecycle",
    processTitle: "Manage protection from enrollment through recovery.",

    processIntro:
      "Encryption requires lifecycle governance rather than a one-time configuration.",

    process: [
      {
        step: "01",
        title: "Enroll",
        description: "Identify endpoints requiring encryption controls.",
        output: "Scope",
      },
      {
        step: "02",
        title: "Protect",
        description: "Apply encryption according to security policy.",
        output: "Encrypted state",
      },
      {
        step: "03",
        title: "Verify",
        description: "Confirm expected encryption coverage.",
        output: "Compliance",
      },
      {
        step: "04",
        title: "Govern",
        description: "Maintain key and recovery processes.",
        output: "Key control",
      },
      {
        step: "05",
        title: "Recover",
        description: "Support authorized access when recovery is required.",
        output: "Recovery",
      },
    ],

    useCasesEyebrow: "Data Protection",
    useCasesTitle: "Protect endpoint data across loss, theft and operational change.",

    useCasesIntro:
      "Encryption reduces exposure when storage leaves normal organizational control.",

    useCases: [
      {
        title: "Lost Laptops",
        description:
          "Protect local organizational data when a device is lost.",
      },
      {
        title: "Stolen Devices",
        description:
          "Reduce data exposure when physical custody is compromised.",
      },
      {
        title: "Remote Workforce",
        description:
          "Maintain encryption controls across distributed endpoint populations.",
      },
      {
        title: "Device Retirement",
        description:
          "Support secure endpoint lifecycle and data-handling practices.",
      },
    ],

    principlesEyebrow: "Encryption Principles",
    principlesTitle: "Protection is incomplete without recovery governance.",

    principles: [
      {
        title: "Encrypt by policy",
        description:
          "Protection requirements should be consistent across endpoint groups.",
      },
      {
        title: "Govern keys separately",
        description:
          "Cryptographic material requires dedicated control and accountability.",
      },
      {
        title: "Verify coverage",
        description:
          "Security teams should understand which endpoints are protected.",
      },
      {
        title: "Design recovery",
        description:
          "Authorized recovery should be planned before it becomes urgent.",
      },
    ],

    ctaEyebrow: "Endpoint Encryption",
    ctaTitle: "Protect endpoint data with governed encryption and recovery.",
    ctaText:
      "Build an encryption lifecycle that connects policy, endpoint enforcement, key governance and recovery.",
  },

  "endpoint-vulnerability-management": {
    slug: "endpoint-vulnerability-management",

    eyebrow: "Endpoint Vulnerability Management",
    kicker: "Exposure prioritization",

    title: "Turn endpoint vulnerability lists into a prioritized remediation system.",

    intro:
      "Understand endpoint exposure through asset context, vulnerability information and remediation priorities.",

    description:
      "Endpoint vulnerability management helps security teams organize weaknesses according to the devices and operational context that matter.",

    model: "vulnerability-map",

    stats: [
      { value: "MAP", label: "Exposure view" },
      { value: "RISK", label: "Prioritization" },
      { value: "FIX", label: "Remediation" },
    ],

    capabilitiesEyebrow: "Exposure Management",
    capabilitiesTitle:
      "Prioritize endpoint weaknesses using asset and operational context.",

    capabilitiesIntro:
      "Vulnerability management becomes more useful when findings are connected to the endpoints they affect.",

    capabilities: [
      {
        title: "Asset Context",
        description:
          "Connect vulnerabilities to endpoint identity and ownership.",
      },
      {
        title: "Exposure Visibility",
        description:
          "Organize known weaknesses across the managed endpoint fleet.",
      },
      {
        title: "Risk Prioritization",
        description:
          "Use endpoint context to focus remediation attention.",
      },
      {
        title: "Remediation Planning",
        description:
          "Create structured paths for addressing prioritized weaknesses.",
      },
      {
        title: "Exception Tracking",
        description:
          "Record accepted or deferred remediation decisions.",
      },
      {
        title: "Progress Visibility",
        description:
          "Track remediation status across endpoint groups.",
      },
    ],

    intelligenceEyebrow: "Exposure Map",
    intelligenceTitle:
      "Map vulnerability context to the endpoints that create real exposure.",

    intelligenceIntro:
      "A vulnerability identifier alone does not explain business or operational importance.",

    intelligence: [
      {
        label: "Asset",
        value: "Criticality",
        description: "Understand the importance of the affected endpoint.",
      },
      {
        label: "Finding",
        value: "Weakness",
        description: "Represent the vulnerability requiring assessment.",
      },
      {
        label: "Context",
        value: "Exposure",
        description: "Understand how the weakness fits into endpoint usage.",
      },
      {
        label: "Action",
        value: "Priority",
        description: "Determine where remediation attention should begin.",
      },
    ],

    architectureEyebrow: "Exposure Architecture",
    architectureTitle:
      "Connect endpoint inventory to remediation planning.",

    architectureIntro:
      "Vulnerability management should preserve the relationship between finding, asset and remediation state.",

    architecture: [
      {
        title: "Endpoint Inventory",
        description: "Managed devices and relevant ownership context.",
      },
      {
        title: "Vulnerability Data",
        description: "Known weaknesses associated with endpoint assets.",
      },
      {
        title: "Context Layer",
        description: "Asset importance and operational information.",
      },
      {
        title: "Priority Engine",
        description: "Structured remediation ordering based on available context.",
      },
      {
        title: "Remediation Tracking",
        description: "Progress and exception visibility for security teams.",
      },
    ],

    processEyebrow: "Remediation Cycle",
    processTitle: "Move from vulnerability discovery to verified remediation.",

    processIntro:
      "A repeatable workflow helps teams avoid treating every vulnerability as equally urgent.",

    process: [
      {
        step: "01",
        title: "Discover",
        description: "Identify endpoint assets and associated weaknesses.",
        output: "Findings",
      },
      {
        step: "02",
        title: "Contextualize",
        description: "Connect findings to asset and operational context.",
        output: "Exposure",
      },
      {
        step: "03",
        title: "Prioritize",
        description: "Determine the appropriate remediation order.",
        output: "Priority",
      },
      {
        step: "04",
        title: "Remediate",
        description: "Address selected endpoint weaknesses.",
        output: "Fix",
      },
      {
        step: "05",
        title: "Verify",
        description: "Confirm remediation and update exposure state.",
        output: "Validation",
      },
    ],

    useCasesEyebrow: "Exposure Scenarios",
    useCasesTitle: "Focus remediation effort where endpoint exposure matters.",

    useCasesIntro:
      "Context-driven vulnerability management helps security and IT teams coordinate remediation.",

    useCases: [
      {
        title: "Critical Workstations",
        description:
          "Prioritize weaknesses affecting sensitive endpoint populations.",
      },
      {
        title: "Remote Devices",
        description:
          "Maintain exposure visibility across distributed endpoints.",
      },
      {
        title: "Legacy Software",
        description:
          "Track vulnerabilities associated with difficult-to-update applications.",
      },
      {
        title: "Remediation Programs",
        description:
          "Measure progress across structured endpoint remediation initiatives.",
      },
    ],

    principlesEyebrow: "Exposure Principles",
    principlesTitle: "Prioritize vulnerability context, not just vulnerability count.",

    principles: [
      {
        title: "Know the asset",
        description:
          "Remediation priority depends partly on what the affected endpoint represents.",
      },
      {
        title: "Preserve exceptions",
        description:
          "Deferred remediation decisions should remain visible and reviewable.",
      },
      {
        title: "Verify closure",
        description:
          "A planned fix should not be treated as a completed remediation.",
      },
      {
        title: "Measure exposure",
        description:
          "Track how endpoint risk changes as remediation progresses.",
      },
    ],

    ctaEyebrow: "Endpoint Vulnerability Management",
    ctaTitle: "Turn endpoint exposure into a structured remediation program.",
    ctaText:
      "Connect vulnerability findings with endpoint context, prioritization and remediation tracking.",
  },

  "application-control": {
    slug: "application-control",

    eyebrow: "Application Control",
    kicker: "Execution governance",

    title: "Decide which applications are allowed to execute before execution becomes risk.",

    intro:
      "Create an explicit application trust model across managed endpoints using policy, identity and controlled exceptions.",

    description:
      "Application Control reduces unmanaged execution by defining what software is trusted, restricted or subject to additional review.",

    model: "application-ring",

    stats: [
      { value: "ALLOW", label: "Trusted execution" },
      { value: "REVIEW", label: "Unknown state" },
      { value: "DENY", label: "Restricted apps" },
    ],

    capabilitiesEyebrow: "Execution Policy",
    capabilitiesTitle:
      "Move application execution from implicit trust to explicit policy.",

    capabilitiesIntro:
      "Application Control provides a governance layer around software execution on managed endpoints.",

    capabilities: [
      {
        title: "Application Inventory",
        description:
          "Understand software participating in managed endpoint environments.",
      },
      {
        title: "Allow Policies",
        description:
          "Define trusted applications and approved execution conditions.",
      },
      {
        title: "Restriction Policies",
        description:
          "Prevent unauthorized or prohibited software execution.",
      },
      {
        title: "Unknown Application Handling",
        description:
          "Create review paths for software not yet classified.",
      },
      {
        title: "Exception Workflow",
        description:
          "Support controlled business exceptions with traceable approval.",
      },
      {
        title: "Execution Visibility",
        description:
          "Maintain context around application-control decisions.",
      },
    ],

    intelligenceEyebrow: "Trust Ring",
    intelligenceTitle:
      "Classify application execution into explicit trust states.",

    intelligenceIntro:
      "A clear application-control model separates approved software, unknown software and restricted execution.",

    intelligence: [
      {
        label: "State 01",
        value: "Trusted",
        description: "Applications explicitly permitted by policy.",
      },
      {
        label: "State 02",
        value: "Unknown",
        description: "Software requiring additional evaluation.",
      },
      {
        label: "State 03",
        value: "Restricted",
        description: "Applications not permitted to execute.",
      },
      {
        label: "State 04",
        value: "Exception",
        description: "Controlled deviations approved for legitimate use.",
      },
    ],

    architectureEyebrow: "Application Architecture",
    architectureTitle:
      "Place a trust decision before endpoint execution.",

    architectureIntro:
      "Application Control connects software identity, endpoint context and organizational policy.",

    architecture: [
      {
        title: "Application",
        description: "Software requesting execution on a managed endpoint.",
      },
      {
        title: "Identity Context",
        description: "Available publisher, signature or application information.",
      },
      {
        title: "Trust Policy",
        description: "Rules defining permitted and restricted execution.",
      },
      {
        title: "Endpoint Enforcement",
        description: "Apply the resulting execution decision.",
      },
      {
        title: "Exception Governance",
        description: "Controlled path for approved deviations.",
      },
    ],

    processEyebrow: "Execution Decision",
    processTitle: "Evaluate software before allowing endpoint execution.",

    processIntro:
      "Application-control workflows should remain predictable for users and security teams.",

    process: [
      {
        step: "01",
        title: "Identify",
        description: "Determine which application is requesting execution.",
        output: "Application",
      },
      {
        step: "02",
        title: "Classify",
        description: "Review available application identity and trust context.",
        output: "Trust state",
      },
      {
        step: "03",
        title: "Evaluate",
        description: "Compare the request against execution policy.",
        output: "Decision",
      },
      {
        step: "04",
        title: "Enforce",
        description: "Allow, restrict or route the application for review.",
        output: "Control",
      },
      {
        step: "05",
        title: "Govern",
        description: "Record exceptions and policy changes.",
        output: "Audit",
      },
    ],

    useCasesEyebrow: "Execution Governance",
    useCasesTitle: "Control application execution across sensitive endpoint groups.",

    useCasesIntro:
      "Application Control is useful where unmanaged software introduces unacceptable operational or security risk.",

    useCases: [
      {
        title: "Privileged Workstations",
        description:
          "Restrict software execution on sensitive administrative devices.",
      },
      {
        title: "Kiosk Systems",
        description:
          "Limit endpoints to a tightly controlled application set.",
      },
      {
        title: "Production Devices",
        description:
          "Reduce unexpected software execution on operational endpoints.",
      },
      {
        title: "Regulated Environments",
        description:
          "Create traceable application execution controls.",
      },
    ],

    principlesEyebrow: "Application Principles",
    principlesTitle: "Execution trust should be explicit and reviewable.",

    principles: [
      {
        title: "Know what runs",
        description:
          "Application governance begins with software visibility.",
      },
      {
        title: "Handle unknowns safely",
        description:
          "Unclassified software needs a predictable review path.",
      },
      {
        title: "Support exceptions",
        description:
          "Legitimate business needs should have controlled approval workflows.",
      },
      {
        title: "Audit policy changes",
        description:
          "Execution-policy changes should remain visible to security teams.",
      },
    ],

    ctaEyebrow: "Application Control",
    ctaTitle: "Make application execution an explicit endpoint trust decision.",
    ctaText:
      "Create a governed application-control layer across sensitive and managed endpoint populations.",
  },

  "endpoint-threat-prevention": {
    slug: "endpoint-threat-prevention",

    eyebrow: "Endpoint Threat Prevention",
    kicker: "Preventive security controls",

    title: "Interrupt endpoint threats before investigation becomes incident response.",

    intro:
      "Combine preventive endpoint controls with contextual policy to reduce the opportunity for malicious activity to progress.",

    description:
      "Endpoint Threat Prevention focuses on stopping unsafe activity early while preserving enough context for security teams to understand what was prevented.",

    model: "prevention-shield",

    stats: [
      { value: "PREVENT", label: "Early control" },
      { value: "POLICY", label: "Decision layer" },
      { value: "CONTEXT", label: "Security evidence" },
    ],

    capabilitiesEyebrow: "Preventive Controls",
    capabilitiesTitle:
      "Place defensive decisions earlier in the endpoint activity chain.",

    capabilitiesIntro:
      "Prevention combines multiple endpoint controls to reduce opportunities for suspicious activity to progress.",

    capabilities: [
      {
        title: "Execution Prevention",
        description:
          "Restrict endpoint execution patterns that violate security policy.",
      },
      {
        title: "Behavior Controls",
        description:
          "Apply preventive controls to suspicious endpoint behavior.",
      },
      {
        title: "Content Protection",
        description:
          "Reduce exposure to malicious or unsafe endpoint content.",
      },
      {
        title: "Policy Enforcement",
        description:
          "Apply preventive security requirements consistently across endpoints.",
      },
      {
        title: "Prevention Context",
        description:
          "Preserve useful evidence around blocked endpoint activity.",
      },
      {
        title: "Operational Review",
        description:
          "Give security teams visibility into prevention decisions and exceptions.",
      },
    ],

    intelligenceEyebrow: "Prevention Shield",
    intelligenceTitle:
      "Evaluate endpoint activity before it crosses the security boundary.",

    intelligenceIntro:
      "Preventive security works best when controls can evaluate activity with sufficient context.",

    intelligence: [
      {
        label: "Layer 01",
        value: "Observe",
        description: "Identify activity reaching a preventive control.",
      },
      {
        label: "Layer 02",
        value: "Evaluate",
        description: "Apply policy and available security context.",
      },
      {
        label: "Layer 03",
        value: "Prevent",
        description: "Interrupt activity that violates protection requirements.",
      },
      {
        label: "Layer 04",
        value: "Record",
        description: "Preserve useful context around the prevention event.",
      },
    ],

    architectureEyebrow: "Prevention Architecture",
    architectureTitle:
      "Create multiple defensive layers before endpoint activity progresses.",

    architectureIntro:
      "Preventive architecture should combine complementary controls rather than depend on one enforcement point.",

    architecture: [
      {
        title: "Activity Entry",
        description: "Files, processes and endpoint activity entering evaluation.",
      },
      {
        title: "Security Context",
        description: "Relevant identity, device and policy information.",
      },
      {
        title: "Prevention Logic",
        description: "Rules and controls evaluating activity.",
      },
      {
        title: "Endpoint Enforcement",
        description: "Block or restrict unsafe activity.",
      },
      {
        title: "Review Layer",
        description: "Operational context for security-team analysis.",
      },
    ],

    processEyebrow: "Prevention Loop",
    processTitle: "Detect enough context to prevent early and explain later.",

    processIntro:
      "Prevention should interrupt unsafe activity while retaining the evidence required for operational review.",

    process: [
      {
        step: "01",
        title: "Observe",
        description: "Identify endpoint activity reaching a control boundary.",
        output: "Activity",
      },
      {
        step: "02",
        title: "Evaluate",
        description: "Apply security context and preventive policy.",
        output: "Assessment",
      },
      {
        step: "03",
        title: "Decide",
        description: "Determine whether activity should continue.",
        output: "Decision",
      },
      {
        step: "04",
        title: "Prevent",
        description: "Interrupt activity that violates protection requirements.",
        output: "Control",
      },
      {
        step: "05",
        title: "Review",
        description: "Preserve and analyze the context behind the action.",
        output: "Evidence",
      },
    ],

    useCasesEyebrow: "Prevention Scenarios",
    useCasesTitle: "Reduce endpoint risk before malicious activity develops.",

    useCasesIntro:
      "Preventive controls are useful across common endpoint attack and misuse paths.",

    useCases: [
      {
        title: "Unsafe Execution",
        description:
          "Prevent endpoint activity that violates execution policy.",
      },
      {
        title: "Malicious Content",
        description:
          "Interrupt content identified as unsafe by endpoint controls.",
      },
      {
        title: "Suspicious Behavior",
        description:
          "Apply preventive actions when behavior crosses defined security boundaries.",
      },
      {
        title: "Policy Violations",
        description:
          "Stop endpoint actions inconsistent with organizational protection requirements.",
      },
    ],

    principlesEyebrow: "Prevention Principles",
    principlesTitle: "Prevent early without making security decisions invisible.",

    principles: [
      {
        title: "Layer controls",
        description:
          "Different preventive controls provide different forms of protection.",
      },
      {
        title: "Keep context",
        description:
          "Blocked activity should remain understandable to security teams.",
      },
      {
        title: "Manage exceptions",
        description:
          "Legitimate business activity needs a controlled exception process.",
      },
      {
        title: "Review outcomes",
        description:
          "Prevention decisions should contribute to ongoing security improvement.",
      },
    ],

    ctaEyebrow: "Endpoint Threat Prevention",
    ctaTitle: "Move endpoint defense earlier in the activity chain.",
    ctaText:
      "Build preventive endpoint controls that interrupt unsafe activity while preserving operational context.",
  },
};