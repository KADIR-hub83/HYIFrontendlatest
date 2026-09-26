export type SOCServiceSlug =
  | "security-operations-center"
  | "24-7-soc-monitoring"
  | "soc-as-a-service"
  | "siem-management"
  | "security-log-management"
  | "threat-monitoring"
  | "security-alert-management"
  | "incident-investigation"
  | "threat-intelligence"
  | "security-analytics"
  | "soc-automation-orchestration"
  | "security-reporting";

export interface SOCService {
  slug: SOCServiceSlug;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  model: string;

  stats: {
    value: string;
    label: string;
  }[];

  capabilities: {
    number: string;
    title: string;
    description: string;
  }[];

  intelligence: {
    label: string;
    description: string;
  }[];

  architecture: string[];

  process: {
    number: string;
    title: string;
    description: string;
    output: string;
  }[];

  useCases: {
    title: string;
    description: string;
  }[];

  principles: {
    title: string;
    description: string;
  }[];
}

const commonPrinciples = [
  {
    title: "Continuous visibility",
    description:
      "Security operations depend on consistent visibility across identities, endpoints, applications, networks, infrastructure and cloud environments.",
  },
  {
    title: "Context before action",
    description:
      "Signals should be enriched with relevant identity, asset, vulnerability and behavioral context before operational decisions are made.",
  },
  {
    title: "Human-controlled automation",
    description:
      "Automation should accelerate repeatable security work while preserving clear controls for actions requiring analyst judgment.",
  },
  {
    title: "Measurable operations",
    description:
      "Detection, investigation and response workflows should produce observable operational signals that can be reviewed and improved.",
  },
];

export const socServices: Record<SOCServiceSlug, SOCService> = {
  "security-operations-center": {
    slug: "security-operations-center",
    eyebrow: "Security Operations Center",
    title: "Security operations built around continuous visibility.",
    accent:
      "Observe security activity, connect signals and coordinate investigation across the digital environment.",
    description:
      "HYI.AI Security Operations Center capabilities bring telemetry, detection, investigation, threat context and response workflows into a connected operating environment designed for continuous security operations.",
    model: "command-center",

    stats: [
      { value: "24/7", label: "Operational visibility" },
      { value: "SOC", label: "Security intelligence" },
      { value: "LIVE", label: "Signal monitoring" },
    ],

    capabilities: [
      {
        number: "01",
        title: "Security Monitoring",
        description:
          "Observe security telemetry across identities, endpoints, applications, networks and cloud infrastructure.",
      },
      {
        number: "02",
        title: "Detection Engineering",
        description:
          "Structure detection logic around relevant behaviors, security events and operational risk scenarios.",
      },
      {
        number: "03",
        title: "Alert Investigation",
        description:
          "Connect related evidence and contextual information so analysts can investigate suspicious activity efficiently.",
      },
      {
        number: "04",
        title: "Threat Intelligence",
        description:
          "Enrich operational security signals with threat indicators, adversary behaviors and relevant external context.",
      },
      {
        number: "05",
        title: "Incident Coordination",
        description:
          "Organize investigation and response activity through defined workflows, ownership and evidence tracking.",
      },
      {
        number: "06",
        title: "Security Analytics",
        description:
          "Transform security telemetry into patterns, operational insights and measurable security observations.",
      },
    ],

    intelligence: [
      {
        label: "Identity",
        description: "Authentication, privilege and access activity.",
      },
      {
        label: "Endpoint",
        description: "Device, process and endpoint security telemetry.",
      },
      {
        label: "Network",
        description: "Connections, traffic patterns and network events.",
      },
      {
        label: "Cloud",
        description: "Cloud control plane and workload activity.",
      },
      {
        label: "Applications",
        description: "Application events and security-relevant behavior.",
      },
      {
        label: "Threat Context",
        description: "Indicators, tactics and adversary intelligence.",
      },
    ],

    architecture: [
      "Security Sources",
      "Telemetry",
      "Detection",
      "Correlation",
      "Investigation",
      "Response",
    ],

    process: [
      {
        number: "01",
        title: "Collect",
        description:
          "Bring relevant security events and operational telemetry into the monitoring environment.",
        output: "Security telemetry",
      },
      {
        number: "02",
        title: "Normalize",
        description:
          "Structure heterogeneous events into consistent security information that can be analyzed.",
        output: "Structured events",
      },
      {
        number: "03",
        title: "Detect",
        description:
          "Apply detection logic and behavioral rules to identify activity requiring security attention.",
        output: "Detection signals",
      },
      {
        number: "04",
        title: "Investigate",
        description:
          "Connect evidence, context and related events to understand suspicious activity.",
        output: "Incident context",
      },
      {
        number: "05",
        title: "Respond",
        description:
          "Coordinate controlled security actions according to defined response procedures.",
        output: "Response actions",
      },
      {
        number: "06",
        title: "Improve",
        description:
          "Use operational learning to improve detections, workflows and security visibility.",
        output: "SOC learning",
      },
    ],

    useCases: [
      {
        title: "Enterprise security operations",
        description:
          "Create a connected operational layer for monitoring distributed enterprise environments.",
      },
      {
        title: "Hybrid infrastructure",
        description:
          "Bring on-premises, cloud and application security telemetry into common operational workflows.",
      },
      {
        title: "Security modernization",
        description:
          "Improve fragmented monitoring and investigation processes through structured SOC operations.",
      },
      {
        title: "Operational resilience",
        description:
          "Create repeatable security workflows that support faster understanding and coordinated action.",
      },
    ],

    principles: commonPrinciples,
  },

  "24-7-soc-monitoring": {
    slug: "24-7-soc-monitoring",
    eyebrow: "24/7 SOC Monitoring",
    title: "Continuous security visibility across every hour.",
    accent:
      "Keep critical security signals observable through persistent monitoring and structured analyst workflows.",
    description:
      "24/7 SOC Monitoring focuses on maintaining continuous awareness of security events, suspicious behavior and operational signals across modern digital environments.",
    model: "radar",

    stats: [
      { value: "24/7", label: "Monitoring cycle" },
      { value: "LIVE", label: "Signal stream" },
      { value: "360°", label: "Visibility model" },
    ],

    capabilities: [
      {
        number: "01",
        title: "Continuous Event Monitoring",
        description:
          "Maintain persistent observation of security events generated across critical systems and infrastructure.",
      },
      {
        number: "02",
        title: "Signal Triage",
        description:
          "Organize incoming signals according to context, relevance and investigation requirements.",
      },
      {
        number: "03",
        title: "Behavior Monitoring",
        description:
          "Observe unusual activity patterns that may require deeper security investigation.",
      },
      {
        number: "04",
        title: "Operational Escalation",
        description:
          "Route relevant security events into defined analyst and incident-management workflows.",
      },
      {
        number: "05",
        title: "Coverage Visibility",
        description:
          "Understand which systems and security domains are actively represented in monitoring.",
      },
      {
        number: "06",
        title: "Monitoring Analytics",
        description:
          "Review event patterns and operational monitoring signals over time.",
      },
    ],

    intelligence: [
      { label: "Authentication", description: "Identity and sign-in activity." },
      { label: "Endpoints", description: "Device and process telemetry." },
      { label: "Networks", description: "Network communication activity." },
      { label: "Cloud", description: "Cloud service and workload signals." },
      { label: "Applications", description: "Application security events." },
      { label: "Infrastructure", description: "Platform and system telemetry." },
    ],

    architecture: [
      "Sources",
      "Live Stream",
      "Detection",
      "Triage",
      "Escalation",
      "Operations",
    ],

    process: [
      {
        number: "01",
        title: "Observe",
        description: "Continuously receive security-relevant telemetry.",
        output: "Live visibility",
      },
      {
        number: "02",
        title: "Filter",
        description: "Separate useful operational signals from background activity.",
        output: "Relevant signals",
      },
      {
        number: "03",
        title: "Prioritize",
        description: "Organize signals according to defined security context.",
        output: "Triage queue",
      },
      {
        number: "04",
        title: "Investigate",
        description: "Review evidence surrounding relevant activity.",
        output: "Security context",
      },
      {
        number: "05",
        title: "Escalate",
        description: "Route confirmed concerns into appropriate workflows.",
        output: "Escalated event",
      },
      {
        number: "06",
        title: "Review",
        description: "Use monitoring activity to refine operational coverage.",
        output: "Coverage insight",
      },
    ],

    useCases: [
      {
        title: "Always-on businesses",
        description:
          "Maintain security visibility for environments operating beyond normal business hours.",
      },
      {
        title: "Distributed infrastructure",
        description:
          "Observe security activity across geographically and technically distributed systems.",
      },
      {
        title: "Cloud operations",
        description:
          "Monitor dynamic cloud environments where infrastructure and workloads continuously change.",
      },
      {
        title: "Critical services",
        description:
          "Support continuous security observation around important digital services.",
      },
    ],

    principles: commonPrinciples,
  },

  "soc-as-a-service": {
    slug: "soc-as-a-service",
    eyebrow: "SOC as a Service",
    title: "A connected security operations capability without isolated tooling.",
    accent:
      "Bring monitoring, investigation and operational security workflows into one service-oriented SOC model.",
    description:
      "SOC as a Service provides a structured operating approach for organizations that need continuous security capabilities supported by connected technology, processes and security expertise.",
    model: "distributed-network",

    stats: [
      { value: "SOC", label: "Operating layer" },
      { value: "ONE", label: "Connected workflow" },
      { value: "LIVE", label: "Security context" },
    ],

    capabilities: [
      {
        number: "01",
        title: "Managed SOC Operations",
        description:
          "Structure continuous monitoring and investigation as an integrated operational capability.",
      },
      {
        number: "02",
        title: "Technology Integration",
        description:
          "Connect relevant security technologies into consistent monitoring and investigation workflows.",
      },
      {
        number: "03",
        title: "Detection Operations",
        description:
          "Maintain detection logic and operational processes around important security scenarios.",
      },
      {
        number: "04",
        title: "Investigation Support",
        description:
          "Provide structured context and evidence workflows for security investigations.",
      },
      {
        number: "05",
        title: "Operational Reporting",
        description:
          "Create visibility into monitoring activity, investigations and SOC operations.",
      },
      {
        number: "06",
        title: "Continuous Improvement",
        description:
          "Use operational feedback to improve detection coverage and security processes.",
      },
    ],

    intelligence: [
      { label: "People", description: "Analyst and stakeholder responsibilities." },
      { label: "Process", description: "Repeatable operational procedures." },
      { label: "Technology", description: "Connected security platforms." },
      { label: "Telemetry", description: "Security event sources." },
      { label: "Intelligence", description: "Threat and operational context." },
      { label: "Governance", description: "Controls and operational ownership." },
    ],

    architecture: [
      "Environment",
      "Security Stack",
      "SOC Platform",
      "Analysts",
      "Response",
      "Reporting",
    ],

    process: [
      {
        number: "01",
        title: "Onboard",
        description: "Understand security environment and monitoring requirements.",
        output: "SOC scope",
      },
      {
        number: "02",
        title: "Connect",
        description: "Integrate relevant security telemetry and platforms.",
        output: "Connected sources",
      },
      {
        number: "03",
        title: "Configure",
        description: "Establish detection and operational workflows.",
        output: "SOC controls",
      },
      {
        number: "04",
        title: "Operate",
        description: "Run continuous monitoring and investigation processes.",
        output: "SOC operations",
      },
      {
        number: "05",
        title: "Report",
        description: "Communicate operational security observations.",
        output: "Security reporting",
      },
      {
        number: "06",
        title: "Evolve",
        description: "Improve operations as the environment changes.",
        output: "Improved coverage",
      },
    ],

    useCases: [
      {
        title: "Growing organizations",
        description:
          "Establish structured security operations as technology environments expand.",
      },
      {
        title: "Security team extension",
        description:
          "Support internal security teams with additional operational capability.",
      },
      {
        title: "SOC modernization",
        description:
          "Move from fragmented security monitoring toward connected operations.",
      },
      {
        title: "Hybrid enterprises",
        description:
          "Coordinate monitoring across cloud and traditional infrastructure.",
      },
    ],

    principles: commonPrinciples,
  },

  "siem-management": {
    slug: "siem-management",
    eyebrow: "SIEM Management",
    title: "Turn distributed security events into connected intelligence.",
    accent:
      "Engineer the SIEM as an operational security platform rather than a passive repository of logs.",
    description:
      "SIEM Management organizes ingestion, parsing, normalization, correlation, detection and operational workflows so security data can support effective monitoring and investigation.",
    model: "correlation-engine",

    stats: [
      { value: "SIEM", label: "Security correlation" },
      { value: "N:N", label: "Event relationships" },
      { value: "LIVE", label: "Detection pipeline" },
    ],

    capabilities: [
      {
        number: "01",
        title: "SIEM Engineering",
        description:
          "Structure ingestion, parsing, indexing and operational configuration around security requirements.",
      },
      {
        number: "02",
        title: "Data Source Integration",
        description:
          "Connect relevant security event sources and maintain visibility into ingestion health.",
      },
      {
        number: "03",
        title: "Detection Rules",
        description:
          "Develop correlation and detection logic around meaningful security behaviors.",
      },
      {
        number: "04",
        title: "Event Normalization",
        description:
          "Transform heterogeneous source events into consistent security fields and structures.",
      },
      {
        number: "05",
        title: "SIEM Operations",
        description:
          "Maintain searches, detections, dashboards and investigation workflows.",
      },
      {
        number: "06",
        title: "Platform Optimization",
        description:
          "Review data quality, operational usefulness and platform configuration over time.",
      },
    ],

    intelligence: [
      { label: "Ingestion", description: "Security data entering the SIEM." },
      { label: "Parsing", description: "Extracting useful event fields." },
      { label: "Normalization", description: "Creating consistent event structures." },
      { label: "Correlation", description: "Connecting related activity." },
      { label: "Detection", description: "Identifying relevant behaviors." },
      { label: "Investigation", description: "Exploring connected evidence." },
    ],

    architecture: [
      "Sources",
      "Collectors",
      "Normalize",
      "Correlate",
      "Detect",
      "Investigate",
    ],

    process: [
      {
        number: "01",
        title: "Discover",
        description: "Identify relevant security data sources.",
        output: "Source inventory",
      },
      {
        number: "02",
        title: "Ingest",
        description: "Bring selected telemetry into the SIEM.",
        output: "Event pipeline",
      },
      {
        number: "03",
        title: "Normalize",
        description: "Create consistent fields and event structures.",
        output: "Normalized data",
      },
      {
        number: "04",
        title: "Correlate",
        description: "Connect events into meaningful security patterns.",
        output: "Correlated signals",
      },
      {
        number: "05",
        title: "Detect",
        description: "Apply detection logic to relevant behaviors.",
        output: "Security alerts",
      },
      {
        number: "06",
        title: "Tune",
        description: "Improve usefulness through operational feedback.",
        output: "Optimized SIEM",
      },
    ],

    useCases: [
      {
        title: "Centralized security visibility",
        description: "Bring distributed security events into a common analysis layer.",
      },
      {
        title: "Detection engineering",
        description: "Create structured detection logic across multiple data sources.",
      },
      {
        title: "Investigation support",
        description: "Give analysts searchable and correlated security evidence.",
      },
      {
        title: "SIEM modernization",
        description: "Improve existing SIEM data quality and operational usefulness.",
      },
    ],

    principles: commonPrinciples,
  },

  "security-log-management": {
    slug: "security-log-management",
    eyebrow: "Security Log Management",
    title: "Make security telemetry structured, searchable and operationally useful.",
    accent:
      "Create controlled pipelines for collecting, organizing and retaining security-relevant logs.",
    description:
      "Security Log Management establishes the collection and processing foundation required for monitoring, investigation, analytics and security operations.",
    model: "log-stream",

    stats: [
      { value: "LOG", label: "Telemetry pipeline" },
      { value: "FLOW", label: "Structured ingestion" },
      { value: "INDEX", label: "Searchable evidence" },
    ],

    capabilities: [
      {
        number: "01",
        title: "Log Collection",
        description: "Collect security-relevant logs from selected technology sources.",
      },
      {
        number: "02",
        title: "Pipeline Engineering",
        description: "Build reliable paths for moving logs into security platforms.",
      },
      {
        number: "03",
        title: "Log Parsing",
        description: "Extract useful fields from heterogeneous log formats.",
      },
      {
        number: "04",
        title: "Normalization",
        description: "Create consistent structures for downstream security analysis.",
      },
      {
        number: "05",
        title: "Retention Strategy",
        description: "Structure retention according to operational and governance needs.",
      },
      {
        number: "06",
        title: "Pipeline Monitoring",
        description: "Observe ingestion health and identify telemetry gaps.",
      },
    ],

    intelligence: [
      { label: "Systems", description: "Operating system and platform logs." },
      { label: "Identity", description: "Authentication and access events." },
      { label: "Network", description: "Firewall and network telemetry." },
      { label: "Cloud", description: "Cloud platform events." },
      { label: "Applications", description: "Application security logs." },
      { label: "Security Tools", description: "Security platform telemetry." },
    ],

    architecture: [
      "Sources",
      "Collectors",
      "Pipeline",
      "Parser",
      "Storage",
      "Search",
    ],

    process: [
      {
        number: "01",
        title: "Inventory",
        description: "Identify security-relevant log sources.",
        output: "Log inventory",
      },
      {
        number: "02",
        title: "Collect",
        description: "Connect logs to controlled ingestion paths.",
        output: "Log streams",
      },
      {
        number: "03",
        title: "Parse",
        description: "Extract meaningful fields from source formats.",
        output: "Parsed events",
      },
      {
        number: "04",
        title: "Normalize",
        description: "Standardize events for analysis.",
        output: "Structured telemetry",
      },
      {
        number: "05",
        title: "Store",
        description: "Retain data according to operational requirements.",
        output: "Security evidence",
      },
      {
        number: "06",
        title: "Observe",
        description: "Monitor pipeline health and source coverage.",
        output: "Pipeline visibility",
      },
    ],

    useCases: [
      {
        title: "SIEM foundations",
        description: "Prepare consistent security data for SIEM analysis.",
      },
      {
        title: "Incident evidence",
        description: "Maintain searchable telemetry for investigations.",
      },
      {
        title: "Cloud visibility",
        description: "Structure logs generated by dynamic cloud services.",
      },
      {
        title: "Telemetry modernization",
        description: "Replace fragmented log collection with controlled pipelines.",
      },
    ],

    principles: commonPrinciples,
  },

  "threat-monitoring": {
    slug: "threat-monitoring",
    eyebrow: "Threat Monitoring",
    title: "Watch for behavior that matters, not simply more events.",
    accent:
      "Combine security telemetry and threat context to continuously observe suspicious activity.",
    description:
      "Threat Monitoring focuses security operations on behaviors and signals that may represent meaningful security activity across identities, endpoints, networks, applications and cloud environments.",
    model: "threat-grid",

    stats: [
      { value: "LIVE", label: "Threat observation" },
      { value: "360°", label: "Behavior context" },
      { value: "GRID", label: "Detection coverage" },
    ],

    capabilities: [
      {
        number: "01",
        title: "Behavior Detection",
        description: "Observe suspicious behavior across multiple security domains.",
      },
      {
        number: "02",
        title: "Threat Signal Monitoring",
        description: "Track signals associated with relevant threat scenarios.",
      },
      {
        number: "03",
        title: "Identity Monitoring",
        description: "Observe unusual authentication, access and privilege activity.",
      },
      {
        number: "04",
        title: "Endpoint Monitoring",
        description: "Analyze endpoint activity and process-level security telemetry.",
      },
      {
        number: "05",
        title: "Cloud Threat Monitoring",
        description: "Observe cloud workloads, identities and control-plane activity.",
      },
      {
        number: "06",
        title: "Threat Context",
        description: "Connect operational signals with relevant threat information.",
      },
    ],

    intelligence: [
      { label: "Behavior", description: "Suspicious activity patterns." },
      { label: "Identity", description: "Authentication and privilege signals." },
      { label: "Endpoint", description: "Device and process activity." },
      { label: "Network", description: "Communication patterns." },
      { label: "Cloud", description: "Cloud activity and changes." },
      { label: "Intelligence", description: "External threat context." },
    ],

    architecture: [
      "Telemetry",
      "Behavior",
      "Detection",
      "Context",
      "Investigation",
      "Action",
    ],

    process: [
      {
        number: "01",
        title: "Observe",
        description: "Continuously receive relevant security telemetry.",
        output: "Security signals",
      },
      {
        number: "02",
        title: "Detect",
        description: "Identify activity matching defined threat behaviors.",
        output: "Threat signals",
      },
      {
        number: "03",
        title: "Enrich",
        description: "Add asset, identity and threat context.",
        output: "Enriched signal",
      },
      {
        number: "04",
        title: "Correlate",
        description: "Connect related behaviors across sources.",
        output: "Threat context",
      },
      {
        number: "05",
        title: "Investigate",
        description: "Review evidence and determine significance.",
        output: "Investigation",
      },
      {
        number: "06",
        title: "Learn",
        description: "Improve monitoring based on operational findings.",
        output: "Improved detection",
      },
    ],

    useCases: [
      {
        title: "Account compromise monitoring",
        description: "Observe suspicious identity and access behaviors.",
      },
      {
        title: "Endpoint threats",
        description: "Monitor device and process activity for suspicious patterns.",
      },
      {
        title: "Cloud threats",
        description: "Observe unusual cloud identities, workloads and configuration activity.",
      },
      {
        title: "Cross-domain detection",
        description: "Connect related signals across multiple security technologies.",
      },
    ],

    principles: commonPrinciples,
  },

  "security-alert-management": {
    slug: "security-alert-management",
    eyebrow: "Security Alert Management",
    title: "Turn alert volume into an organized investigation queue.",
    accent:
      "Enrich, group and prioritize security alerts so analysts can focus attention where context requires it.",
    description:
      "Security Alert Management structures the flow between detection technologies and security analysts through enrichment, prioritization, ownership and investigation workflows.",
    model: "alert-matrix",

    stats: [
      { value: "QUEUE", label: "Alert operations" },
      { value: "CTX", label: "Context enrichment" },
      { value: "FLOW", label: "Analyst workflow" },
    ],

    capabilities: [
      {
        number: "01",
        title: "Alert Aggregation",
        description: "Bring alerts from relevant technologies into structured workflows.",
      },
      {
        number: "02",
        title: "Alert Enrichment",
        description: "Add identity, asset and operational context to alerts.",
      },
      {
        number: "03",
        title: "Prioritization",
        description: "Organize alerts according to defined contextual criteria.",
      },
      {
        number: "04",
        title: "Deduplication",
        description: "Reduce repeated alert records where events represent related activity.",
      },
      {
        number: "05",
        title: "Analyst Workflow",
        description: "Assign and track security alerts through investigation stages.",
      },
      {
        number: "06",
        title: "Alert Analytics",
        description: "Review alert patterns and operational trends.",
      },
    ],

    intelligence: [
      { label: "Source", description: "Originating security platform." },
      { label: "Asset", description: "Affected technology context." },
      { label: "Identity", description: "Related user or service identity." },
      { label: "Behavior", description: "Observed security activity." },
      { label: "History", description: "Related previous signals." },
      { label: "Workflow", description: "Current investigation state." },
    ],

    architecture: [
      "Alerts",
      "Aggregate",
      "Enrich",
      "Prioritize",
      "Investigate",
      "Close",
    ],

    process: [
      {
        number: "01",
        title: "Receive",
        description: "Collect alerts from integrated security technologies.",
        output: "Alert queue",
      },
      {
        number: "02",
        title: "Enrich",
        description: "Attach useful contextual information.",
        output: "Contextual alert",
      },
      {
        number: "03",
        title: "Group",
        description: "Connect related alerts and evidence.",
        output: "Alert cluster",
      },
      {
        number: "04",
        title: "Prioritize",
        description: "Organize analyst attention using defined criteria.",
        output: "Priority queue",
      },
      {
        number: "05",
        title: "Investigate",
        description: "Review alert evidence and significance.",
        output: "Analyst decision",
      },
      {
        number: "06",
        title: "Feedback",
        description: "Use outcomes to improve alert workflows.",
        output: "Operational learning",
      },
    ],

    useCases: [
      {
        title: "High-volume environments",
        description: "Create organized workflows around large numbers of security alerts.",
      },
      {
        title: "Multi-tool security stacks",
        description: "Bring alerts from different security technologies into common operations.",
      },
      {
        title: "Analyst operations",
        description: "Create ownership and investigation states for security alerts.",
      },
      {
        title: "Detection tuning",
        description: "Use alert outcomes to improve operational usefulness.",
      },
    ],

    principles: commonPrinciples,
  },

  "incident-investigation": {
    slug: "incident-investigation",
    eyebrow: "Security Incident Investigation",
    title: "Connect evidence into a clear security investigation.",
    accent:
      "Reconstruct activity across identities, endpoints, networks and systems to understand what happened.",
    description:
      "Security Incident Investigation brings related evidence into a structured timeline so analysts can understand activity, scope, affected systems and appropriate response decisions.",
    model: "investigation-timeline",

    stats: [
      { value: "CASE", label: "Investigation workspace" },
      { value: "TIME", label: "Event reconstruction" },
      { value: "CTX", label: "Evidence context" },
    ],

    capabilities: [
      {
        number: "01",
        title: "Evidence Collection",
        description: "Bring relevant security evidence into the investigation context.",
      },
      {
        number: "02",
        title: "Timeline Reconstruction",
        description: "Organize related events chronologically to understand activity.",
      },
      {
        number: "03",
        title: "Entity Analysis",
        description: "Connect users, devices, systems and other entities involved in activity.",
      },
      {
        number: "04",
        title: "Scope Analysis",
        description: "Understand which systems and identities may be associated with an incident.",
      },
      {
        number: "05",
        title: "Case Management",
        description: "Maintain investigation notes, evidence and workflow state.",
      },
      {
        number: "06",
        title: "Investigation Reporting",
        description: "Document findings and relevant operational observations.",
      },
    ],

    intelligence: [
      { label: "Timeline", description: "Chronological security activity." },
      { label: "Identity", description: "Users and service identities." },
      { label: "Assets", description: "Systems involved in activity." },
      { label: "Evidence", description: "Relevant security telemetry." },
      { label: "Relationships", description: "Connections between entities." },
      { label: "Findings", description: "Documented investigation context." },
    ],

    architecture: [
      "Alert",
      "Evidence",
      "Timeline",
      "Entities",
      "Analysis",
      "Findings",
    ],

    process: [
      {
        number: "01",
        title: "Open",
        description: "Create an investigation from relevant security activity.",
        output: "Investigation case",
      },
      {
        number: "02",
        title: "Collect",
        description: "Gather related telemetry and evidence.",
        output: "Evidence set",
      },
      {
        number: "03",
        title: "Reconstruct",
        description: "Build a timeline of relevant activity.",
        output: "Event timeline",
      },
      {
        number: "04",
        title: "Analyze",
        description: "Connect entities, events and behaviors.",
        output: "Incident context",
      },
      {
        number: "05",
        title: "Determine",
        description: "Document findings and required actions.",
        output: "Investigation findings",
      },
      {
        number: "06",
        title: "Learn",
        description: "Use findings to improve future security operations.",
        output: "Operational learning",
      },
    ],

    useCases: [
      {
        title: "Suspicious authentication",
        description: "Investigate identity activity across authentication systems.",
      },
      {
        title: "Endpoint incidents",
        description: "Reconstruct suspicious process and device activity.",
      },
      {
        title: "Cloud investigations",
        description: "Analyze control-plane, identity and workload activity.",
      },
      {
        title: "Cross-system incidents",
        description: "Connect evidence distributed across multiple platforms.",
      },
    ],

    principles: commonPrinciples,
  },

  "threat-intelligence": {
    slug: "threat-intelligence",
    eyebrow: "Threat Intelligence",
    title: "Add adversary context to everyday security operations.",
    accent:
      "Connect threat information with internal security telemetry to support informed detection and investigation.",
    description:
      "Threat Intelligence organizes relevant indicators, behaviors, adversary information and external context so security teams can apply intelligence within operational workflows.",
    model: "threat-globe",

    stats: [
      { value: "INTEL", label: "Threat context" },
      { value: "IOC", label: "Indicator layer" },
      { value: "TTP", label: "Behavior knowledge" },
    ],

    capabilities: [
      {
        number: "01",
        title: "Intelligence Collection",
        description: "Bring relevant threat information into structured workflows.",
      },
      {
        number: "02",
        title: "Indicator Management",
        description: "Organize indicators and supporting contextual information.",
      },
      {
        number: "03",
        title: "Threat Enrichment",
        description: "Add external context to internal security events.",
      },
      {
        number: "04",
        title: "Behavior Intelligence",
        description: "Structure knowledge around adversary behaviors and techniques.",
      },
      {
        number: "05",
        title: "Intelligence Integration",
        description: "Connect threat context with monitoring and investigation platforms.",
      },
      {
        number: "06",
        title: "Intelligence Analysis",
        description: "Evaluate relevant information in the context of the environment.",
      },
    ],

    intelligence: [
      { label: "Indicators", description: "Observable threat artifacts." },
      { label: "Behaviors", description: "Adversary activity patterns." },
      { label: "Infrastructure", description: "Relevant external infrastructure context." },
      { label: "Campaigns", description: "Related threat activity." },
      { label: "Sources", description: "Intelligence information origins." },
      { label: "Internal Context", description: "Relevance to the organization." },
    ],

    architecture: [
      "Sources",
      "Intelligence",
      "Enrichment",
      "Correlation",
      "Detection",
      "Operations",
    ],

    process: [
      {
        number: "01",
        title: "Collect",
        description: "Receive relevant intelligence information.",
        output: "Threat data",
      },
      {
        number: "02",
        title: "Structure",
        description: "Organize intelligence into usable context.",
        output: "Structured intelligence",
      },
      {
        number: "03",
        title: "Enrich",
        description: "Add contextual information to indicators and behaviors.",
        output: "Enriched intelligence",
      },
      {
        number: "04",
        title: "Correlate",
        description: "Compare intelligence with internal telemetry.",
        output: "Relevant matches",
      },
      {
        number: "05",
        title: "Operationalize",
        description: "Apply relevant intelligence within security workflows.",
        output: "Operational context",
      },
      {
        number: "06",
        title: "Review",
        description: "Continuously evaluate intelligence relevance.",
        output: "Refined intelligence",
      },
    ],

    useCases: [
      {
        title: "Detection enrichment",
        description: "Add external context to security detections.",
      },
      {
        title: "Incident investigation",
        description: "Use threat context while analyzing suspicious activity.",
      },
      {
        title: "Threat hunting support",
        description: "Use behavior knowledge to guide investigative searches.",
      },
      {
        title: "Security awareness",
        description: "Maintain operational understanding of relevant threat activity.",
      },
    ],

    principles: commonPrinciples,
  },

  "security-analytics": {
    slug: "security-analytics",
    eyebrow: "Security Analytics",
    title: "Find meaningful patterns inside complex security telemetry.",
    accent:
      "Transform distributed events into behavioral, operational and investigative security insight.",
    description:
      "Security Analytics applies structured analysis to security telemetry so teams can understand patterns, relationships, changes and operational security signals.",
    model: "analytics-wave",

    stats: [
      { value: "DATA", label: "Security telemetry" },
      { value: "PATTERN", label: "Behavior analytics" },
      { value: "CTX", label: "Connected insight" },
    ],

    capabilities: [
      {
        number: "01",
        title: "Behavior Analytics",
        description: "Analyze security activity for meaningful behavioral patterns.",
      },
      {
        number: "02",
        title: "Entity Analytics",
        description: "Understand activity associated with users, devices and systems.",
      },
      {
        number: "03",
        title: "Security Trends",
        description: "Review changes in security activity over time.",
      },
      {
        number: "04",
        title: "Correlation Analytics",
        description: "Connect events and entities across multiple security sources.",
      },
      {
        number: "05",
        title: "Operational Analytics",
        description: "Measure SOC workflow and monitoring signals.",
      },
      {
        number: "06",
        title: "Investigation Analytics",
        description: "Support analysts with structured views of related evidence.",
      },
    ],

    intelligence: [
      { label: "Events", description: "Individual security observations." },
      { label: "Entities", description: "Users, assets and services." },
      { label: "Patterns", description: "Repeated or unusual behaviors." },
      { label: "Relationships", description: "Connections between observations." },
      { label: "Time", description: "Changes across periods." },
      { label: "Operations", description: "SOC workflow signals." },
    ],

    architecture: [
      "Telemetry",
      "Entities",
      "Patterns",
      "Analytics",
      "Insight",
      "Operations",
    ],

    process: [
      {
        number: "01",
        title: "Collect",
        description: "Bring relevant security telemetry into analysis.",
        output: "Security data",
      },
      {
        number: "02",
        title: "Structure",
        description: "Normalize events and entities.",
        output: "Analytics model",
      },
      {
        number: "03",
        title: "Analyze",
        description: "Evaluate patterns and relationships.",
        output: "Security patterns",
      },
      {
        number: "04",
        title: "Contextualize",
        description: "Connect analytics with operational context.",
        output: "Contextual insight",
      },
      {
        number: "05",
        title: "Investigate",
        description: "Explore relevant observations in greater detail.",
        output: "Analyst insight",
      },
      {
        number: "06",
        title: "Improve",
        description: "Apply learning to security operations.",
        output: "Operational improvement",
      },
    ],

    useCases: [
      {
        title: "Behavior analysis",
        description: "Understand patterns across users and systems.",
      },
      {
        title: "Security investigations",
        description: "Explore relationships across distributed evidence.",
      },
      {
        title: "SOC analytics",
        description: "Measure operational security activity.",
      },
      {
        title: "Security trend analysis",
        description: "Understand how observable activity changes over time.",
      },
    ],

    principles: commonPrinciples,
  },

  "soc-automation-orchestration": {
    slug: "soc-automation-orchestration",
    eyebrow: "SOC Automation & Orchestration",
    title: "Coordinate security workflows without removing human control.",
    accent:
      "Automate repeatable SOC tasks and connect security technologies through controlled orchestration.",
    description:
      "SOC Automation & Orchestration helps security teams standardize repetitive operational work while preserving analyst oversight for decisions requiring human judgment.",
    model: "automation-flow",

    stats: [
      { value: "FLOW", label: "Security orchestration" },
      { value: "AUTO", label: "Repeatable actions" },
      { value: "HUMAN", label: "Controlled decisions" },
    ],

    capabilities: [
      {
        number: "01",
        title: "Workflow Automation",
        description: "Automate repeatable security operations tasks.",
      },
      {
        number: "02",
        title: "Security Orchestration",
        description: "Coordinate actions across connected security technologies.",
      },
      {
        number: "03",
        title: "Enrichment Automation",
        description: "Automatically gather contextual information for investigations.",
      },
      {
        number: "04",
        title: "Response Playbooks",
        description: "Structure controlled response sequences around defined scenarios.",
      },
      {
        number: "05",
        title: "Human Approval",
        description: "Insert analyst decisions where automated action requires oversight.",
      },
      {
        number: "06",
        title: "Workflow Analytics",
        description: "Observe automation execution and operational outcomes.",
      },
    ],

    intelligence: [
      { label: "Trigger", description: "Security event initiating workflow." },
      { label: "Enrichment", description: "Automated contextual lookup." },
      { label: "Decision", description: "Workflow branching logic." },
      { label: "Approval", description: "Human-controlled checkpoint." },
      { label: "Action", description: "Controlled security operation." },
      { label: "Audit", description: "Recorded workflow history." },
    ],

    architecture: [
      "Trigger",
      "Enrich",
      "Decision",
      "Approval",
      "Action",
      "Record",
    ],

    process: [
      {
        number: "01",
        title: "Identify",
        description: "Find repeatable SOC activities suitable for automation.",
        output: "Automation scope",
      },
      {
        number: "02",
        title: "Design",
        description: "Define workflow logic, controls and exceptions.",
        output: "Playbook design",
      },
      {
        number: "03",
        title: "Integrate",
        description: "Connect required security systems.",
        output: "Connected workflow",
      },
      {
        number: "04",
        title: "Automate",
        description: "Execute controlled repeatable tasks.",
        output: "Automated actions",
      },
      {
        number: "05",
        title: "Govern",
        description: "Maintain human approval and operational controls.",
        output: "Controlled automation",
      },
      {
        number: "06",
        title: "Improve",
        description: "Use workflow outcomes to refine automation.",
        output: "Optimized playbook",
      },
    ],

    useCases: [
      {
        title: "Alert enrichment",
        description: "Automatically gather context around security alerts.",
      },
      {
        title: "Investigation workflows",
        description: "Coordinate repeatable evidence collection tasks.",
      },
      {
        title: "Response orchestration",
        description: "Connect approved response actions across security tools.",
      },
      {
        title: "SOC productivity",
        description: "Reduce repetitive operational work for analysts.",
      },
    ],

    principles: commonPrinciples,
  },

  "security-reporting": {
    slug: "security-reporting",
    eyebrow: "Security Reporting",
    title: "Translate security operations into clear operational visibility.",
    accent:
      "Create structured reporting around monitoring, investigations, detections and SOC activity.",
    description:
      "Security Reporting transforms operational security information into understandable views for security teams, technology stakeholders and organizational decision-makers.",
    model: "report-console",

    stats: [
      { value: "SOC", label: "Operational reporting" },
      { value: "VIEW", label: "Security visibility" },
      { value: "TREND", label: "Activity context" },
    ],

    capabilities: [
      {
        number: "01",
        title: "SOC Reporting",
        description: "Summarize security operations activity in structured reports.",
      },
      {
        number: "02",
        title: "Detection Reporting",
        description: "Provide visibility into detection and alert activity.",
      },
      {
        number: "03",
        title: "Incident Reporting",
        description: "Document security investigations and operational findings.",
      },
      {
        number: "04",
        title: "Trend Reporting",
        description: "Review security activity and operational changes over time.",
      },
      {
        number: "05",
        title: "Coverage Reporting",
        description: "Communicate monitoring and telemetry coverage.",
      },
      {
        number: "06",
        title: "Stakeholder Views",
        description: "Present security information at appropriate levels of detail.",
      },
    ],

    intelligence: [
      { label: "Monitoring", description: "Security observation activity." },
      { label: "Alerts", description: "Detection and alert patterns." },
      { label: "Incidents", description: "Investigation activity." },
      { label: "Coverage", description: "Visibility across systems." },
      { label: "Trends", description: "Changes across time." },
      { label: "Operations", description: "SOC workflow information." },
    ],

    architecture: [
      "Telemetry",
      "Metrics",
      "Context",
      "Analysis",
      "Reports",
      "Stakeholders",
    ],

    process: [
      {
        number: "01",
        title: "Define",
        description: "Identify relevant reporting audiences and information.",
        output: "Reporting scope",
      },
      {
        number: "02",
        title: "Collect",
        description: "Gather operational security information.",
        output: "Reporting data",
      },
      {
        number: "03",
        title: "Structure",
        description: "Organize information into consistent measures.",
        output: "Security metrics",
      },
      {
        number: "04",
        title: "Contextualize",
        description: "Explain observations within operational context.",
        output: "Security narrative",
      },
      {
        number: "05",
        title: "Present",
        description: "Deliver appropriate stakeholder views.",
        output: "Security report",
      },
      {
        number: "06",
        title: "Review",
        description: "Use reporting feedback to improve visibility.",
        output: "Improved reporting",
      },
    ],

    useCases: [
      {
        title: "SOC leadership",
        description: "Understand operational activity and security trends.",
      },
      {
        title: "Technology teams",
        description: "Communicate relevant security observations to system owners.",
      },
      {
        title: "Incident communication",
        description: "Document investigation activity and findings.",
      },
      {
        title: "Operational improvement",
        description: "Use reporting to identify areas requiring attention.",
      },
    ],

    principles: commonPrinciples,
  },
};

export const getSOCService = (slug: SOCServiceSlug) => socServices[slug];