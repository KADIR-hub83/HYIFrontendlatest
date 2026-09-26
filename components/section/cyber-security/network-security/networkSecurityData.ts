export type ModelVariant = "exposure-radar"|"policy-grid"|"inspection-mesh"|"intrusion-pulse"|"identity-gates"|"trust-fabric"|"remote-tunnels"|"segment-zones"|"dns-resolver"|"content-shield"|"traffic-storm";
export type NetworkSecurityPage={slug:string;eyebrow:string;title:string;accent:string;description:string;model:ModelVariant;stats:{value:string;label:string}[];signals:string[];narrative:{kicker:string;heading:string;body:string;quote:string};capabilities:{title:string;description:string;detail:string}[];threats:{label:string;title:string;description:string}[];architecture:{layer:string;title:string;description:string}[];telemetry:{signal:string;purpose:string;context:string}[];workflow:{step:string;title:string;description:string}[];operations:{title:string;description:string}[];principles:{title:string;description:string}[];outcomes:{metric:string;title:string;description:string}[];cta:{heading:string;description:string;primary:string;secondary:string};layoutVariant:number};

export const networkSecurityPages:Record<string,NetworkSecurityPage>={
"network-security-assessment":{
  "slug": "network-security-assessment",
  "eyebrow": "ASSESSMENT",
  "title": "Network Security Assessment",
  "accent": "Map exposure before it becomes an incident.",
  "description": "Turn fragmented network knowledge into a defensible security baseline. HYI.AI structures network security assessment around explicit trust, observable controls and operational evidence rather than isolated configuration.",
  "model": "exposure-radar",
  "stats": [
    {
      "value": "01",
      "label": "CONTROL DOMAIN"
    },
    {
      "value": "N:N",
      "label": "NETWORK RELATIONSHIPS"
    },
    {
      "value": "LIVE",
      "label": "OPERATIONAL SIGNAL"
    }
  ],
  "signals": [
    "ASSESSMENT SIGNAL",
    "NETWORK SECURITY ASSESSMENT CONTROL",
    "IDENTITY CONTEXT",
    "NETWORK TELEMETRY",
    "POLICY EVIDENCE"
  ],
  "narrative": {
    "kicker": "ASSESSMENT / OPERATING VIEW",
    "heading": "Turn fragmented network knowledge into a defensible security baseline.",
    "body": "Network Security Assessment should connect architecture, policy, telemetry and response. The operating view makes dependencies, exceptions and ownership visible so teams can reason about security changes without losing the context behind them.",
    "quote": "Network Security Assessment becomes more defensible when security intent remains visible from design through daily operations."
  },
  "capabilities": [
    {
      "title": "Discovery",
      "description": "Establish the real operating scope for network security assessment.",
      "detail": "Inventory dependencies, ownership, control points and exceptions before changing production behavior."
    },
    {
      "title": "Control design",
      "description": "Translate network security assessment intent into implementable controls.",
      "detail": "Define boundaries and enforcement logic in language security and infrastructure teams can share."
    },
    {
      "title": "Visibility",
      "description": "Expose the signals required to understand network security assessment activity.",
      "detail": "Preserve identity, asset, application and policy context around meaningful events."
    },
    {
      "title": "Validation",
      "description": "Test whether network security assessment controls behave as intended.",
      "detail": "Use repeatable evidence and review gates instead of assuming configuration equals protection."
    },
    {
      "title": "Operations",
      "description": "Make network security assessment sustainable after deployment.",
      "detail": "Clarify ownership, change paths, escalation and evidence as the environment evolves."
    },
    {
      "title": "Evolution",
      "description": "Continuously refine network security assessment.",
      "detail": "Feed incidents, exceptions and architecture changes back into the next control cycle."
    }
  ],
  "threats": [
    {
      "label": "01",
      "title": "Unknown paths",
      "description": "Unmapped connectivity can weaken network security assessment decisions and complicate incident analysis."
    },
    {
      "label": "02",
      "title": "Policy drift",
      "description": "Accumulated exceptions can separate deployed network security assessment behavior from intended architecture."
    },
    {
      "label": "03",
      "title": "Weak context",
      "description": "Signals without identity, asset or application meaning make prioritization slower."
    },
    {
      "label": "04",
      "title": "Control gaps",
      "description": "Coverage gaps appear between teams and environments when responsibility is unclear."
    }
  ],
  "architecture": [
    {
      "layer": "L01",
      "title": "Observe",
      "description": "Collect the network and security context relevant to network security assessment."
    },
    {
      "layer": "L02",
      "title": "Contextualize",
      "description": "Relate activity to identities, assets, applications and trust zones."
    },
    {
      "layer": "L03",
      "title": "Decide",
      "description": "Evaluate activity against explicit network security assessment policy and risk requirements."
    },
    {
      "layer": "L04",
      "title": "Enforce",
      "description": "Apply controls at the appropriate boundary while preserving required communication."
    },
    {
      "layer": "L05",
      "title": "Verify",
      "description": "Measure control behavior, investigate exceptions and retain operational evidence."
    }
  ],
  "telemetry": [
    {
      "signal": "Connection context",
      "purpose": "Understand where network security assessment decisions occur.",
      "context": "Source, destination, protocol, zone and application relationships."
    },
    {
      "signal": "Identity context",
      "purpose": "Relate activity to accountable users and workloads.",
      "context": "Authentication state, role, service identity and device ownership."
    },
    {
      "signal": "Control events",
      "purpose": "See when security logic allows, blocks or changes behavior.",
      "context": "Policy match, action, reason, enforcement point and exception context."
    },
    {
      "signal": "Health signals",
      "purpose": "Recognize degradation before it creates a blind spot.",
      "context": "Availability, processing state, ingestion health and control-plane condition."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Discover",
      "description": "Map the current network security assessment environment, dependencies and ownership."
    },
    {
      "step": "02",
      "title": "Model",
      "description": "Define expected flows, trust assumptions, risks and objectives."
    },
    {
      "step": "03",
      "title": "Design",
      "description": "Create enforceable controls and operational guardrails."
    },
    {
      "step": "04",
      "title": "Validate",
      "description": "Test behavior against representative traffic and failure conditions."
    },
    {
      "step": "05",
      "title": "Operate",
      "description": "Monitor signals, exceptions, incidents and policy changes."
    },
    {
      "step": "06",
      "title": "Improve",
      "description": "Use evidence and learning to refine the next control cycle."
    }
  ],
  "operations": [
    {
      "title": "Change discipline",
      "description": "Treat network security assessment changes as governed events with intent, owner and validation."
    },
    {
      "title": "Exception ownership",
      "description": "Give temporary exceptions a reason, accountable owner and review point."
    },
    {
      "title": "Evidence continuity",
      "description": "Keep enough decision context to explain why a control existed and what changed."
    },
    {
      "title": "Cross-team clarity",
      "description": "Create shared operating language between security, network, platform and application teams."
    }
  ],
  "principles": [
    {
      "title": "Intent before syntax",
      "description": "Define the security outcome before expressing it in vendor-specific configuration."
    },
    {
      "title": "Context before action",
      "description": "Use identity, asset and application meaning when interpreting network activity."
    },
    {
      "title": "Least necessary reachability",
      "description": "Permit required communication without creating unnecessary trust paths."
    },
    {
      "title": "Observable controls",
      "description": "Controls should produce enough evidence to explain behavior and exceptions."
    },
    {
      "title": "Safe change",
      "description": "Design deployment, rollback and verification into the operating process."
    },
    {
      "title": "Continuous refinement",
      "description": "Keep network security assessment aligned with architecture changes and threat learning."
    }
  ],
  "outcomes": [
    {
      "metric": "01",
      "title": "Clearer control intent",
      "description": "Teams can understand what network security assessment controls are designed to accomplish."
    },
    {
      "metric": "02",
      "title": "Stronger context",
      "description": "Analysts receive more useful context around network events and exceptions."
    },
    {
      "metric": "03",
      "title": "Reduced ambiguity",
      "description": "Ownership and review paths make security changes easier to reason about."
    },
    {
      "metric": "04",
      "title": "Defensible architecture",
      "description": "Trust relationships and enforcement points become explicit rather than accidental."
    }
  ],
  "cta": {
    "heading": "Build network security assessment around clear security intent.",
    "description": "Connect architecture, control, evidence and operations into a maintainable network security assessment capability.",
    "primary": "Start a security conversation",
    "secondary": "Explore the control model"
  },
  "layoutVariant": 0
},
"firewall-management":{
  "slug": "firewall-management",
  "eyebrow": "POLICY CONTROL",
  "title": "Firewall Management",
  "accent": "Make policy changes deliberate, traceable and easier to govern.",
  "description": "Turn firewall rules into governed network intent. HYI.AI structures firewall management around explicit trust, observable controls and operational evidence rather than isolated configuration.",
  "model": "policy-grid",
  "stats": [
    {
      "value": "02",
      "label": "CONTROL DOMAIN"
    },
    {
      "value": "N:N",
      "label": "NETWORK RELATIONSHIPS"
    },
    {
      "value": "LIVE",
      "label": "OPERATIONAL SIGNAL"
    }
  ],
  "signals": [
    "POLICY CONTROL SIGNAL",
    "FIREWALL MANAGEMENT CONTROL",
    "IDENTITY CONTEXT",
    "NETWORK TELEMETRY",
    "POLICY EVIDENCE"
  ],
  "narrative": {
    "kicker": "POLICY CONTROL / OPERATING VIEW",
    "heading": "Turn firewall rules into governed network intent.",
    "body": "Firewall Management should connect architecture, policy, telemetry and response. The operating view makes dependencies, exceptions and ownership visible so teams can reason about security changes without losing the context behind them.",
    "quote": "Firewall Management becomes more defensible when security intent remains visible from design through daily operations."
  },
  "capabilities": [
    {
      "title": "Discovery",
      "description": "Establish the real operating scope for firewall management.",
      "detail": "Inventory dependencies, ownership, control points and exceptions before changing production behavior."
    },
    {
      "title": "Control design",
      "description": "Translate firewall management intent into implementable controls.",
      "detail": "Define boundaries and enforcement logic in language security and infrastructure teams can share."
    },
    {
      "title": "Visibility",
      "description": "Expose the signals required to understand firewall management activity.",
      "detail": "Preserve identity, asset, application and policy context around meaningful events."
    },
    {
      "title": "Validation",
      "description": "Test whether firewall management controls behave as intended.",
      "detail": "Use repeatable evidence and review gates instead of assuming configuration equals protection."
    },
    {
      "title": "Operations",
      "description": "Make firewall management sustainable after deployment.",
      "detail": "Clarify ownership, change paths, escalation and evidence as the environment evolves."
    },
    {
      "title": "Evolution",
      "description": "Continuously refine firewall management.",
      "detail": "Feed incidents, exceptions and architecture changes back into the next control cycle."
    }
  ],
  "threats": [
    {
      "label": "01",
      "title": "Unknown paths",
      "description": "Unmapped connectivity can weaken firewall management decisions and complicate incident analysis."
    },
    {
      "label": "02",
      "title": "Policy drift",
      "description": "Accumulated exceptions can separate deployed firewall management behavior from intended architecture."
    },
    {
      "label": "03",
      "title": "Weak context",
      "description": "Signals without identity, asset or application meaning make prioritization slower."
    },
    {
      "label": "04",
      "title": "Control gaps",
      "description": "Coverage gaps appear between teams and environments when responsibility is unclear."
    }
  ],
  "architecture": [
    {
      "layer": "L01",
      "title": "Observe",
      "description": "Collect the network and security context relevant to firewall management."
    },
    {
      "layer": "L02",
      "title": "Contextualize",
      "description": "Relate activity to identities, assets, applications and trust zones."
    },
    {
      "layer": "L03",
      "title": "Decide",
      "description": "Evaluate activity against explicit firewall management policy and risk requirements."
    },
    {
      "layer": "L04",
      "title": "Enforce",
      "description": "Apply controls at the appropriate boundary while preserving required communication."
    },
    {
      "layer": "L05",
      "title": "Verify",
      "description": "Measure control behavior, investigate exceptions and retain operational evidence."
    }
  ],
  "telemetry": [
    {
      "signal": "Connection context",
      "purpose": "Understand where firewall management decisions occur.",
      "context": "Source, destination, protocol, zone and application relationships."
    },
    {
      "signal": "Identity context",
      "purpose": "Relate activity to accountable users and workloads.",
      "context": "Authentication state, role, service identity and device ownership."
    },
    {
      "signal": "Control events",
      "purpose": "See when security logic allows, blocks or changes behavior.",
      "context": "Policy match, action, reason, enforcement point and exception context."
    },
    {
      "signal": "Health signals",
      "purpose": "Recognize degradation before it creates a blind spot.",
      "context": "Availability, processing state, ingestion health and control-plane condition."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Discover",
      "description": "Map the current firewall management environment, dependencies and ownership."
    },
    {
      "step": "02",
      "title": "Model",
      "description": "Define expected flows, trust assumptions, risks and objectives."
    },
    {
      "step": "03",
      "title": "Design",
      "description": "Create enforceable controls and operational guardrails."
    },
    {
      "step": "04",
      "title": "Validate",
      "description": "Test behavior against representative traffic and failure conditions."
    },
    {
      "step": "05",
      "title": "Operate",
      "description": "Monitor signals, exceptions, incidents and policy changes."
    },
    {
      "step": "06",
      "title": "Improve",
      "description": "Use evidence and learning to refine the next control cycle."
    }
  ],
  "operations": [
    {
      "title": "Change discipline",
      "description": "Treat firewall management changes as governed events with intent, owner and validation."
    },
    {
      "title": "Exception ownership",
      "description": "Give temporary exceptions a reason, accountable owner and review point."
    },
    {
      "title": "Evidence continuity",
      "description": "Keep enough decision context to explain why a control existed and what changed."
    },
    {
      "title": "Cross-team clarity",
      "description": "Create shared operating language between security, network, platform and application teams."
    }
  ],
  "principles": [
    {
      "title": "Intent before syntax",
      "description": "Define the security outcome before expressing it in vendor-specific configuration."
    },
    {
      "title": "Context before action",
      "description": "Use identity, asset and application meaning when interpreting network activity."
    },
    {
      "title": "Least necessary reachability",
      "description": "Permit required communication without creating unnecessary trust paths."
    },
    {
      "title": "Observable controls",
      "description": "Controls should produce enough evidence to explain behavior and exceptions."
    },
    {
      "title": "Safe change",
      "description": "Design deployment, rollback and verification into the operating process."
    },
    {
      "title": "Continuous refinement",
      "description": "Keep firewall management aligned with architecture changes and threat learning."
    }
  ],
  "outcomes": [
    {
      "metric": "01",
      "title": "Clearer control intent",
      "description": "Teams can understand what firewall management controls are designed to accomplish."
    },
    {
      "metric": "02",
      "title": "Stronger context",
      "description": "Analysts receive more useful context around network events and exceptions."
    },
    {
      "metric": "03",
      "title": "Reduced ambiguity",
      "description": "Ownership and review paths make security changes easier to reason about."
    },
    {
      "metric": "04",
      "title": "Defensible architecture",
      "description": "Trust relationships and enforcement points become explicit rather than accidental."
    }
  ],
  "cta": {
    "heading": "Build firewall management around clear security intent.",
    "description": "Connect architecture, control, evidence and operations into a maintainable firewall management capability.",
    "primary": "Start a security conversation",
    "secondary": "Explore the control model"
  },
  "layoutVariant": 1
},
"next-generation-firewall":{
  "slug": "next-generation-firewall",
  "eyebrow": "DEEP INSPECTION",
  "title": "Next-Generation Firewall",
  "accent": "Inspect modern traffic with context beyond ports and addresses.",
  "description": "See applications, identities and encrypted traffic as one enforcement decision. HYI.AI structures next-generation firewall around explicit trust, observable controls and operational evidence rather than isolated configuration.",
  "model": "inspection-mesh",
  "stats": [
    {
      "value": "03",
      "label": "CONTROL DOMAIN"
    },
    {
      "value": "N:N",
      "label": "NETWORK RELATIONSHIPS"
    },
    {
      "value": "LIVE",
      "label": "OPERATIONAL SIGNAL"
    }
  ],
  "signals": [
    "DEEP INSPECTION SIGNAL",
    "NEXT-GENERATION FIREWALL CONTROL",
    "IDENTITY CONTEXT",
    "NETWORK TELEMETRY",
    "POLICY EVIDENCE"
  ],
  "narrative": {
    "kicker": "DEEP INSPECTION / OPERATING VIEW",
    "heading": "See applications, identities and encrypted traffic as one enforcement decision.",
    "body": "Next-Generation Firewall should connect architecture, policy, telemetry and response. The operating view makes dependencies, exceptions and ownership visible so teams can reason about security changes without losing the context behind them.",
    "quote": "Next-Generation Firewall becomes more defensible when security intent remains visible from design through daily operations."
  },
  "capabilities": [
    {
      "title": "Discovery",
      "description": "Establish the real operating scope for next-generation firewall.",
      "detail": "Inventory dependencies, ownership, control points and exceptions before changing production behavior."
    },
    {
      "title": "Control design",
      "description": "Translate next-generation firewall intent into implementable controls.",
      "detail": "Define boundaries and enforcement logic in language security and infrastructure teams can share."
    },
    {
      "title": "Visibility",
      "description": "Expose the signals required to understand next-generation firewall activity.",
      "detail": "Preserve identity, asset, application and policy context around meaningful events."
    },
    {
      "title": "Validation",
      "description": "Test whether next-generation firewall controls behave as intended.",
      "detail": "Use repeatable evidence and review gates instead of assuming configuration equals protection."
    },
    {
      "title": "Operations",
      "description": "Make next-generation firewall sustainable after deployment.",
      "detail": "Clarify ownership, change paths, escalation and evidence as the environment evolves."
    },
    {
      "title": "Evolution",
      "description": "Continuously refine next-generation firewall.",
      "detail": "Feed incidents, exceptions and architecture changes back into the next control cycle."
    }
  ],
  "threats": [
    {
      "label": "01",
      "title": "Unknown paths",
      "description": "Unmapped connectivity can weaken next-generation firewall decisions and complicate incident analysis."
    },
    {
      "label": "02",
      "title": "Policy drift",
      "description": "Accumulated exceptions can separate deployed next-generation firewall behavior from intended architecture."
    },
    {
      "label": "03",
      "title": "Weak context",
      "description": "Signals without identity, asset or application meaning make prioritization slower."
    },
    {
      "label": "04",
      "title": "Control gaps",
      "description": "Coverage gaps appear between teams and environments when responsibility is unclear."
    }
  ],
  "architecture": [
    {
      "layer": "L01",
      "title": "Observe",
      "description": "Collect the network and security context relevant to next-generation firewall."
    },
    {
      "layer": "L02",
      "title": "Contextualize",
      "description": "Relate activity to identities, assets, applications and trust zones."
    },
    {
      "layer": "L03",
      "title": "Decide",
      "description": "Evaluate activity against explicit next-generation firewall policy and risk requirements."
    },
    {
      "layer": "L04",
      "title": "Enforce",
      "description": "Apply controls at the appropriate boundary while preserving required communication."
    },
    {
      "layer": "L05",
      "title": "Verify",
      "description": "Measure control behavior, investigate exceptions and retain operational evidence."
    }
  ],
  "telemetry": [
    {
      "signal": "Connection context",
      "purpose": "Understand where next-generation firewall decisions occur.",
      "context": "Source, destination, protocol, zone and application relationships."
    },
    {
      "signal": "Identity context",
      "purpose": "Relate activity to accountable users and workloads.",
      "context": "Authentication state, role, service identity and device ownership."
    },
    {
      "signal": "Control events",
      "purpose": "See when security logic allows, blocks or changes behavior.",
      "context": "Policy match, action, reason, enforcement point and exception context."
    },
    {
      "signal": "Health signals",
      "purpose": "Recognize degradation before it creates a blind spot.",
      "context": "Availability, processing state, ingestion health and control-plane condition."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Discover",
      "description": "Map the current next-generation firewall environment, dependencies and ownership."
    },
    {
      "step": "02",
      "title": "Model",
      "description": "Define expected flows, trust assumptions, risks and objectives."
    },
    {
      "step": "03",
      "title": "Design",
      "description": "Create enforceable controls and operational guardrails."
    },
    {
      "step": "04",
      "title": "Validate",
      "description": "Test behavior against representative traffic and failure conditions."
    },
    {
      "step": "05",
      "title": "Operate",
      "description": "Monitor signals, exceptions, incidents and policy changes."
    },
    {
      "step": "06",
      "title": "Improve",
      "description": "Use evidence and learning to refine the next control cycle."
    }
  ],
  "operations": [
    {
      "title": "Change discipline",
      "description": "Treat next-generation firewall changes as governed events with intent, owner and validation."
    },
    {
      "title": "Exception ownership",
      "description": "Give temporary exceptions a reason, accountable owner and review point."
    },
    {
      "title": "Evidence continuity",
      "description": "Keep enough decision context to explain why a control existed and what changed."
    },
    {
      "title": "Cross-team clarity",
      "description": "Create shared operating language between security, network, platform and application teams."
    }
  ],
  "principles": [
    {
      "title": "Intent before syntax",
      "description": "Define the security outcome before expressing it in vendor-specific configuration."
    },
    {
      "title": "Context before action",
      "description": "Use identity, asset and application meaning when interpreting network activity."
    },
    {
      "title": "Least necessary reachability",
      "description": "Permit required communication without creating unnecessary trust paths."
    },
    {
      "title": "Observable controls",
      "description": "Controls should produce enough evidence to explain behavior and exceptions."
    },
    {
      "title": "Safe change",
      "description": "Design deployment, rollback and verification into the operating process."
    },
    {
      "title": "Continuous refinement",
      "description": "Keep next-generation firewall aligned with architecture changes and threat learning."
    }
  ],
  "outcomes": [
    {
      "metric": "01",
      "title": "Clearer control intent",
      "description": "Teams can understand what next-generation firewall controls are designed to accomplish."
    },
    {
      "metric": "02",
      "title": "Stronger context",
      "description": "Analysts receive more useful context around network events and exceptions."
    },
    {
      "metric": "03",
      "title": "Reduced ambiguity",
      "description": "Ownership and review paths make security changes easier to reason about."
    },
    {
      "metric": "04",
      "title": "Defensible architecture",
      "description": "Trust relationships and enforcement points become explicit rather than accidental."
    }
  ],
  "cta": {
    "heading": "Build next-generation firewall around clear security intent.",
    "description": "Connect architecture, control, evidence and operations into a maintainable next-generation firewall capability.",
    "primary": "Start a security conversation",
    "secondary": "Explore the control model"
  },
  "layoutVariant": 2
},
"intrusion-detection-prevention":{
  "slug": "intrusion-detection-prevention",
  "eyebrow": "THREAT DETECTION",
  "title": "Intrusion Detection & Prevention",
  "accent": "Detect suspicious network behavior and place prevention where it matters.",
  "description": "Convert network activity into timely detection and controlled prevention. HYI.AI structures intrusion detection & prevention around explicit trust, observable controls and operational evidence rather than isolated configuration.",
  "model": "intrusion-pulse",
  "stats": [
    {
      "value": "04",
      "label": "CONTROL DOMAIN"
    },
    {
      "value": "N:N",
      "label": "NETWORK RELATIONSHIPS"
    },
    {
      "value": "LIVE",
      "label": "OPERATIONAL SIGNAL"
    }
  ],
  "signals": [
    "THREAT DETECTION SIGNAL",
    "INTRUSION DETECTION & PREVENTION CONTROL",
    "IDENTITY CONTEXT",
    "NETWORK TELEMETRY",
    "POLICY EVIDENCE"
  ],
  "narrative": {
    "kicker": "THREAT DETECTION / OPERATING VIEW",
    "heading": "Convert network activity into timely detection and controlled prevention.",
    "body": "Intrusion Detection & Prevention should connect architecture, policy, telemetry and response. The operating view makes dependencies, exceptions and ownership visible so teams can reason about security changes without losing the context behind them.",
    "quote": "Intrusion Detection & Prevention becomes more defensible when security intent remains visible from design through daily operations."
  },
  "capabilities": [
    {
      "title": "Discovery",
      "description": "Establish the real operating scope for intrusion detection & prevention.",
      "detail": "Inventory dependencies, ownership, control points and exceptions before changing production behavior."
    },
    {
      "title": "Control design",
      "description": "Translate intrusion detection & prevention intent into implementable controls.",
      "detail": "Define boundaries and enforcement logic in language security and infrastructure teams can share."
    },
    {
      "title": "Visibility",
      "description": "Expose the signals required to understand intrusion detection & prevention activity.",
      "detail": "Preserve identity, asset, application and policy context around meaningful events."
    },
    {
      "title": "Validation",
      "description": "Test whether intrusion detection & prevention controls behave as intended.",
      "detail": "Use repeatable evidence and review gates instead of assuming configuration equals protection."
    },
    {
      "title": "Operations",
      "description": "Make intrusion detection & prevention sustainable after deployment.",
      "detail": "Clarify ownership, change paths, escalation and evidence as the environment evolves."
    },
    {
      "title": "Evolution",
      "description": "Continuously refine intrusion detection & prevention.",
      "detail": "Feed incidents, exceptions and architecture changes back into the next control cycle."
    }
  ],
  "threats": [
    {
      "label": "01",
      "title": "Unknown paths",
      "description": "Unmapped connectivity can weaken intrusion detection & prevention decisions and complicate incident analysis."
    },
    {
      "label": "02",
      "title": "Policy drift",
      "description": "Accumulated exceptions can separate deployed intrusion detection & prevention behavior from intended architecture."
    },
    {
      "label": "03",
      "title": "Weak context",
      "description": "Signals without identity, asset or application meaning make prioritization slower."
    },
    {
      "label": "04",
      "title": "Control gaps",
      "description": "Coverage gaps appear between teams and environments when responsibility is unclear."
    }
  ],
  "architecture": [
    {
      "layer": "L01",
      "title": "Observe",
      "description": "Collect the network and security context relevant to intrusion detection & prevention."
    },
    {
      "layer": "L02",
      "title": "Contextualize",
      "description": "Relate activity to identities, assets, applications and trust zones."
    },
    {
      "layer": "L03",
      "title": "Decide",
      "description": "Evaluate activity against explicit intrusion detection & prevention policy and risk requirements."
    },
    {
      "layer": "L04",
      "title": "Enforce",
      "description": "Apply controls at the appropriate boundary while preserving required communication."
    },
    {
      "layer": "L05",
      "title": "Verify",
      "description": "Measure control behavior, investigate exceptions and retain operational evidence."
    }
  ],
  "telemetry": [
    {
      "signal": "Connection context",
      "purpose": "Understand where intrusion detection & prevention decisions occur.",
      "context": "Source, destination, protocol, zone and application relationships."
    },
    {
      "signal": "Identity context",
      "purpose": "Relate activity to accountable users and workloads.",
      "context": "Authentication state, role, service identity and device ownership."
    },
    {
      "signal": "Control events",
      "purpose": "See when security logic allows, blocks or changes behavior.",
      "context": "Policy match, action, reason, enforcement point and exception context."
    },
    {
      "signal": "Health signals",
      "purpose": "Recognize degradation before it creates a blind spot.",
      "context": "Availability, processing state, ingestion health and control-plane condition."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Discover",
      "description": "Map the current intrusion detection & prevention environment, dependencies and ownership."
    },
    {
      "step": "02",
      "title": "Model",
      "description": "Define expected flows, trust assumptions, risks and objectives."
    },
    {
      "step": "03",
      "title": "Design",
      "description": "Create enforceable controls and operational guardrails."
    },
    {
      "step": "04",
      "title": "Validate",
      "description": "Test behavior against representative traffic and failure conditions."
    },
    {
      "step": "05",
      "title": "Operate",
      "description": "Monitor signals, exceptions, incidents and policy changes."
    },
    {
      "step": "06",
      "title": "Improve",
      "description": "Use evidence and learning to refine the next control cycle."
    }
  ],
  "operations": [
    {
      "title": "Change discipline",
      "description": "Treat intrusion detection & prevention changes as governed events with intent, owner and validation."
    },
    {
      "title": "Exception ownership",
      "description": "Give temporary exceptions a reason, accountable owner and review point."
    },
    {
      "title": "Evidence continuity",
      "description": "Keep enough decision context to explain why a control existed and what changed."
    },
    {
      "title": "Cross-team clarity",
      "description": "Create shared operating language between security, network, platform and application teams."
    }
  ],
  "principles": [
    {
      "title": "Intent before syntax",
      "description": "Define the security outcome before expressing it in vendor-specific configuration."
    },
    {
      "title": "Context before action",
      "description": "Use identity, asset and application meaning when interpreting network activity."
    },
    {
      "title": "Least necessary reachability",
      "description": "Permit required communication without creating unnecessary trust paths."
    },
    {
      "title": "Observable controls",
      "description": "Controls should produce enough evidence to explain behavior and exceptions."
    },
    {
      "title": "Safe change",
      "description": "Design deployment, rollback and verification into the operating process."
    },
    {
      "title": "Continuous refinement",
      "description": "Keep intrusion detection & prevention aligned with architecture changes and threat learning."
    }
  ],
  "outcomes": [
    {
      "metric": "01",
      "title": "Clearer control intent",
      "description": "Teams can understand what intrusion detection & prevention controls are designed to accomplish."
    },
    {
      "metric": "02",
      "title": "Stronger context",
      "description": "Analysts receive more useful context around network events and exceptions."
    },
    {
      "metric": "03",
      "title": "Reduced ambiguity",
      "description": "Ownership and review paths make security changes easier to reason about."
    },
    {
      "metric": "04",
      "title": "Defensible architecture",
      "description": "Trust relationships and enforcement points become explicit rather than accidental."
    }
  ],
  "cta": {
    "heading": "Build intrusion detection & prevention around clear security intent.",
    "description": "Connect architecture, control, evidence and operations into a maintainable intrusion detection & prevention capability.",
    "primary": "Start a security conversation",
    "secondary": "Explore the control model"
  },
  "layoutVariant": 3
},
"network-access-control":{
  "slug": "network-access-control",
  "eyebrow": "ACCESS CONTROL",
  "title": "Network Access Control",
  "accent": "Decide who and what can connect before trust is granted.",
  "description": "Make network admission an identity and posture decision. HYI.AI structures network access control around explicit trust, observable controls and operational evidence rather than isolated configuration.",
  "model": "identity-gates",
  "stats": [
    {
      "value": "05",
      "label": "CONTROL DOMAIN"
    },
    {
      "value": "N:N",
      "label": "NETWORK RELATIONSHIPS"
    },
    {
      "value": "LIVE",
      "label": "OPERATIONAL SIGNAL"
    }
  ],
  "signals": [
    "ACCESS CONTROL SIGNAL",
    "NETWORK ACCESS CONTROL CONTROL",
    "IDENTITY CONTEXT",
    "NETWORK TELEMETRY",
    "POLICY EVIDENCE"
  ],
  "narrative": {
    "kicker": "ACCESS CONTROL / OPERATING VIEW",
    "heading": "Make network admission an identity and posture decision.",
    "body": "Network Access Control should connect architecture, policy, telemetry and response. The operating view makes dependencies, exceptions and ownership visible so teams can reason about security changes without losing the context behind them.",
    "quote": "Network Access Control becomes more defensible when security intent remains visible from design through daily operations."
  },
  "capabilities": [
    {
      "title": "Discovery",
      "description": "Establish the real operating scope for network access control.",
      "detail": "Inventory dependencies, ownership, control points and exceptions before changing production behavior."
    },
    {
      "title": "Control design",
      "description": "Translate network access control intent into implementable controls.",
      "detail": "Define boundaries and enforcement logic in language security and infrastructure teams can share."
    },
    {
      "title": "Visibility",
      "description": "Expose the signals required to understand network access control activity.",
      "detail": "Preserve identity, asset, application and policy context around meaningful events."
    },
    {
      "title": "Validation",
      "description": "Test whether network access control controls behave as intended.",
      "detail": "Use repeatable evidence and review gates instead of assuming configuration equals protection."
    },
    {
      "title": "Operations",
      "description": "Make network access control sustainable after deployment.",
      "detail": "Clarify ownership, change paths, escalation and evidence as the environment evolves."
    },
    {
      "title": "Evolution",
      "description": "Continuously refine network access control.",
      "detail": "Feed incidents, exceptions and architecture changes back into the next control cycle."
    }
  ],
  "threats": [
    {
      "label": "01",
      "title": "Unknown paths",
      "description": "Unmapped connectivity can weaken network access control decisions and complicate incident analysis."
    },
    {
      "label": "02",
      "title": "Policy drift",
      "description": "Accumulated exceptions can separate deployed network access control behavior from intended architecture."
    },
    {
      "label": "03",
      "title": "Weak context",
      "description": "Signals without identity, asset or application meaning make prioritization slower."
    },
    {
      "label": "04",
      "title": "Control gaps",
      "description": "Coverage gaps appear between teams and environments when responsibility is unclear."
    }
  ],
  "architecture": [
    {
      "layer": "L01",
      "title": "Observe",
      "description": "Collect the network and security context relevant to network access control."
    },
    {
      "layer": "L02",
      "title": "Contextualize",
      "description": "Relate activity to identities, assets, applications and trust zones."
    },
    {
      "layer": "L03",
      "title": "Decide",
      "description": "Evaluate activity against explicit network access control policy and risk requirements."
    },
    {
      "layer": "L04",
      "title": "Enforce",
      "description": "Apply controls at the appropriate boundary while preserving required communication."
    },
    {
      "layer": "L05",
      "title": "Verify",
      "description": "Measure control behavior, investigate exceptions and retain operational evidence."
    }
  ],
  "telemetry": [
    {
      "signal": "Connection context",
      "purpose": "Understand where network access control decisions occur.",
      "context": "Source, destination, protocol, zone and application relationships."
    },
    {
      "signal": "Identity context",
      "purpose": "Relate activity to accountable users and workloads.",
      "context": "Authentication state, role, service identity and device ownership."
    },
    {
      "signal": "Control events",
      "purpose": "See when security logic allows, blocks or changes behavior.",
      "context": "Policy match, action, reason, enforcement point and exception context."
    },
    {
      "signal": "Health signals",
      "purpose": "Recognize degradation before it creates a blind spot.",
      "context": "Availability, processing state, ingestion health and control-plane condition."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Discover",
      "description": "Map the current network access control environment, dependencies and ownership."
    },
    {
      "step": "02",
      "title": "Model",
      "description": "Define expected flows, trust assumptions, risks and objectives."
    },
    {
      "step": "03",
      "title": "Design",
      "description": "Create enforceable controls and operational guardrails."
    },
    {
      "step": "04",
      "title": "Validate",
      "description": "Test behavior against representative traffic and failure conditions."
    },
    {
      "step": "05",
      "title": "Operate",
      "description": "Monitor signals, exceptions, incidents and policy changes."
    },
    {
      "step": "06",
      "title": "Improve",
      "description": "Use evidence and learning to refine the next control cycle."
    }
  ],
  "operations": [
    {
      "title": "Change discipline",
      "description": "Treat network access control changes as governed events with intent, owner and validation."
    },
    {
      "title": "Exception ownership",
      "description": "Give temporary exceptions a reason, accountable owner and review point."
    },
    {
      "title": "Evidence continuity",
      "description": "Keep enough decision context to explain why a control existed and what changed."
    },
    {
      "title": "Cross-team clarity",
      "description": "Create shared operating language between security, network, platform and application teams."
    }
  ],
  "principles": [
    {
      "title": "Intent before syntax",
      "description": "Define the security outcome before expressing it in vendor-specific configuration."
    },
    {
      "title": "Context before action",
      "description": "Use identity, asset and application meaning when interpreting network activity."
    },
    {
      "title": "Least necessary reachability",
      "description": "Permit required communication without creating unnecessary trust paths."
    },
    {
      "title": "Observable controls",
      "description": "Controls should produce enough evidence to explain behavior and exceptions."
    },
    {
      "title": "Safe change",
      "description": "Design deployment, rollback and verification into the operating process."
    },
    {
      "title": "Continuous refinement",
      "description": "Keep network access control aligned with architecture changes and threat learning."
    }
  ],
  "outcomes": [
    {
      "metric": "01",
      "title": "Clearer control intent",
      "description": "Teams can understand what network access control controls are designed to accomplish."
    },
    {
      "metric": "02",
      "title": "Stronger context",
      "description": "Analysts receive more useful context around network events and exceptions."
    },
    {
      "metric": "03",
      "title": "Reduced ambiguity",
      "description": "Ownership and review paths make security changes easier to reason about."
    },
    {
      "metric": "04",
      "title": "Defensible architecture",
      "description": "Trust relationships and enforcement points become explicit rather than accidental."
    }
  ],
  "cta": {
    "heading": "Build network access control around clear security intent.",
    "description": "Connect architecture, control, evidence and operations into a maintainable network access control capability.",
    "primary": "Start a security conversation",
    "secondary": "Explore the control model"
  },
  "layoutVariant": 0
},
"secure-network-architecture":{
  "slug": "secure-network-architecture",
  "eyebrow": "SECURE DESIGN",
  "title": "Secure Network Architecture",
  "accent": "Design trust boundaries into the network instead of adding them later.",
  "description": "Build security into the shape of connectivity. HYI.AI structures secure network architecture around explicit trust, observable controls and operational evidence rather than isolated configuration.",
  "model": "trust-fabric",
  "stats": [
    {
      "value": "06",
      "label": "CONTROL DOMAIN"
    },
    {
      "value": "N:N",
      "label": "NETWORK RELATIONSHIPS"
    },
    {
      "value": "LIVE",
      "label": "OPERATIONAL SIGNAL"
    }
  ],
  "signals": [
    "SECURE DESIGN SIGNAL",
    "SECURE NETWORK ARCHITECTURE CONTROL",
    "IDENTITY CONTEXT",
    "NETWORK TELEMETRY",
    "POLICY EVIDENCE"
  ],
  "narrative": {
    "kicker": "SECURE DESIGN / OPERATING VIEW",
    "heading": "Build security into the shape of connectivity.",
    "body": "Secure Network Architecture should connect architecture, policy, telemetry and response. The operating view makes dependencies, exceptions and ownership visible so teams can reason about security changes without losing the context behind them.",
    "quote": "Secure Network Architecture becomes more defensible when security intent remains visible from design through daily operations."
  },
  "capabilities": [
    {
      "title": "Discovery",
      "description": "Establish the real operating scope for secure network architecture.",
      "detail": "Inventory dependencies, ownership, control points and exceptions before changing production behavior."
    },
    {
      "title": "Control design",
      "description": "Translate secure network architecture intent into implementable controls.",
      "detail": "Define boundaries and enforcement logic in language security and infrastructure teams can share."
    },
    {
      "title": "Visibility",
      "description": "Expose the signals required to understand secure network architecture activity.",
      "detail": "Preserve identity, asset, application and policy context around meaningful events."
    },
    {
      "title": "Validation",
      "description": "Test whether secure network architecture controls behave as intended.",
      "detail": "Use repeatable evidence and review gates instead of assuming configuration equals protection."
    },
    {
      "title": "Operations",
      "description": "Make secure network architecture sustainable after deployment.",
      "detail": "Clarify ownership, change paths, escalation and evidence as the environment evolves."
    },
    {
      "title": "Evolution",
      "description": "Continuously refine secure network architecture.",
      "detail": "Feed incidents, exceptions and architecture changes back into the next control cycle."
    }
  ],
  "threats": [
    {
      "label": "01",
      "title": "Unknown paths",
      "description": "Unmapped connectivity can weaken secure network architecture decisions and complicate incident analysis."
    },
    {
      "label": "02",
      "title": "Policy drift",
      "description": "Accumulated exceptions can separate deployed secure network architecture behavior from intended architecture."
    },
    {
      "label": "03",
      "title": "Weak context",
      "description": "Signals without identity, asset or application meaning make prioritization slower."
    },
    {
      "label": "04",
      "title": "Control gaps",
      "description": "Coverage gaps appear between teams and environments when responsibility is unclear."
    }
  ],
  "architecture": [
    {
      "layer": "L01",
      "title": "Observe",
      "description": "Collect the network and security context relevant to secure network architecture."
    },
    {
      "layer": "L02",
      "title": "Contextualize",
      "description": "Relate activity to identities, assets, applications and trust zones."
    },
    {
      "layer": "L03",
      "title": "Decide",
      "description": "Evaluate activity against explicit secure network architecture policy and risk requirements."
    },
    {
      "layer": "L04",
      "title": "Enforce",
      "description": "Apply controls at the appropriate boundary while preserving required communication."
    },
    {
      "layer": "L05",
      "title": "Verify",
      "description": "Measure control behavior, investigate exceptions and retain operational evidence."
    }
  ],
  "telemetry": [
    {
      "signal": "Connection context",
      "purpose": "Understand where secure network architecture decisions occur.",
      "context": "Source, destination, protocol, zone and application relationships."
    },
    {
      "signal": "Identity context",
      "purpose": "Relate activity to accountable users and workloads.",
      "context": "Authentication state, role, service identity and device ownership."
    },
    {
      "signal": "Control events",
      "purpose": "See when security logic allows, blocks or changes behavior.",
      "context": "Policy match, action, reason, enforcement point and exception context."
    },
    {
      "signal": "Health signals",
      "purpose": "Recognize degradation before it creates a blind spot.",
      "context": "Availability, processing state, ingestion health and control-plane condition."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Discover",
      "description": "Map the current secure network architecture environment, dependencies and ownership."
    },
    {
      "step": "02",
      "title": "Model",
      "description": "Define expected flows, trust assumptions, risks and objectives."
    },
    {
      "step": "03",
      "title": "Design",
      "description": "Create enforceable controls and operational guardrails."
    },
    {
      "step": "04",
      "title": "Validate",
      "description": "Test behavior against representative traffic and failure conditions."
    },
    {
      "step": "05",
      "title": "Operate",
      "description": "Monitor signals, exceptions, incidents and policy changes."
    },
    {
      "step": "06",
      "title": "Improve",
      "description": "Use evidence and learning to refine the next control cycle."
    }
  ],
  "operations": [
    {
      "title": "Change discipline",
      "description": "Treat secure network architecture changes as governed events with intent, owner and validation."
    },
    {
      "title": "Exception ownership",
      "description": "Give temporary exceptions a reason, accountable owner and review point."
    },
    {
      "title": "Evidence continuity",
      "description": "Keep enough decision context to explain why a control existed and what changed."
    },
    {
      "title": "Cross-team clarity",
      "description": "Create shared operating language between security, network, platform and application teams."
    }
  ],
  "principles": [
    {
      "title": "Intent before syntax",
      "description": "Define the security outcome before expressing it in vendor-specific configuration."
    },
    {
      "title": "Context before action",
      "description": "Use identity, asset and application meaning when interpreting network activity."
    },
    {
      "title": "Least necessary reachability",
      "description": "Permit required communication without creating unnecessary trust paths."
    },
    {
      "title": "Observable controls",
      "description": "Controls should produce enough evidence to explain behavior and exceptions."
    },
    {
      "title": "Safe change",
      "description": "Design deployment, rollback and verification into the operating process."
    },
    {
      "title": "Continuous refinement",
      "description": "Keep secure network architecture aligned with architecture changes and threat learning."
    }
  ],
  "outcomes": [
    {
      "metric": "01",
      "title": "Clearer control intent",
      "description": "Teams can understand what secure network architecture controls are designed to accomplish."
    },
    {
      "metric": "02",
      "title": "Stronger context",
      "description": "Analysts receive more useful context around network events and exceptions."
    },
    {
      "metric": "03",
      "title": "Reduced ambiguity",
      "description": "Ownership and review paths make security changes easier to reason about."
    },
    {
      "metric": "04",
      "title": "Defensible architecture",
      "description": "Trust relationships and enforcement points become explicit rather than accidental."
    }
  ],
  "cta": {
    "heading": "Build secure network architecture around clear security intent.",
    "description": "Connect architecture, control, evidence and operations into a maintainable secure network architecture capability.",
    "primary": "Start a security conversation",
    "secondary": "Explore the control model"
  },
  "layoutVariant": 1
},
"vpn-remote-access-security":{
  "slug": "vpn-remote-access-security",
  "eyebrow": "REMOTE ACCESS",
  "title": "VPN & Remote Access Security",
  "accent": "Protect remote connectivity without treating every session as equally trusted.",
  "description": "Make remote access contextual, observable and intentionally scoped. HYI.AI structures vpn & remote access security around explicit trust, observable controls and operational evidence rather than isolated configuration.",
  "model": "remote-tunnels",
  "stats": [
    {
      "value": "07",
      "label": "CONTROL DOMAIN"
    },
    {
      "value": "N:N",
      "label": "NETWORK RELATIONSHIPS"
    },
    {
      "value": "LIVE",
      "label": "OPERATIONAL SIGNAL"
    }
  ],
  "signals": [
    "REMOTE ACCESS SIGNAL",
    "VPN & REMOTE ACCESS SECURITY CONTROL",
    "IDENTITY CONTEXT",
    "NETWORK TELEMETRY",
    "POLICY EVIDENCE"
  ],
  "narrative": {
    "kicker": "REMOTE ACCESS / OPERATING VIEW",
    "heading": "Make remote access contextual, observable and intentionally scoped.",
    "body": "VPN & Remote Access Security should connect architecture, policy, telemetry and response. The operating view makes dependencies, exceptions and ownership visible so teams can reason about security changes without losing the context behind them.",
    "quote": "VPN & Remote Access Security becomes more defensible when security intent remains visible from design through daily operations."
  },
  "capabilities": [
    {
      "title": "Discovery",
      "description": "Establish the real operating scope for vpn & remote access security.",
      "detail": "Inventory dependencies, ownership, control points and exceptions before changing production behavior."
    },
    {
      "title": "Control design",
      "description": "Translate vpn & remote access security intent into implementable controls.",
      "detail": "Define boundaries and enforcement logic in language security and infrastructure teams can share."
    },
    {
      "title": "Visibility",
      "description": "Expose the signals required to understand vpn & remote access security activity.",
      "detail": "Preserve identity, asset, application and policy context around meaningful events."
    },
    {
      "title": "Validation",
      "description": "Test whether vpn & remote access security controls behave as intended.",
      "detail": "Use repeatable evidence and review gates instead of assuming configuration equals protection."
    },
    {
      "title": "Operations",
      "description": "Make vpn & remote access security sustainable after deployment.",
      "detail": "Clarify ownership, change paths, escalation and evidence as the environment evolves."
    },
    {
      "title": "Evolution",
      "description": "Continuously refine vpn & remote access security.",
      "detail": "Feed incidents, exceptions and architecture changes back into the next control cycle."
    }
  ],
  "threats": [
    {
      "label": "01",
      "title": "Unknown paths",
      "description": "Unmapped connectivity can weaken vpn & remote access security decisions and complicate incident analysis."
    },
    {
      "label": "02",
      "title": "Policy drift",
      "description": "Accumulated exceptions can separate deployed vpn & remote access security behavior from intended architecture."
    },
    {
      "label": "03",
      "title": "Weak context",
      "description": "Signals without identity, asset or application meaning make prioritization slower."
    },
    {
      "label": "04",
      "title": "Control gaps",
      "description": "Coverage gaps appear between teams and environments when responsibility is unclear."
    }
  ],
  "architecture": [
    {
      "layer": "L01",
      "title": "Observe",
      "description": "Collect the network and security context relevant to vpn & remote access security."
    },
    {
      "layer": "L02",
      "title": "Contextualize",
      "description": "Relate activity to identities, assets, applications and trust zones."
    },
    {
      "layer": "L03",
      "title": "Decide",
      "description": "Evaluate activity against explicit vpn & remote access security policy and risk requirements."
    },
    {
      "layer": "L04",
      "title": "Enforce",
      "description": "Apply controls at the appropriate boundary while preserving required communication."
    },
    {
      "layer": "L05",
      "title": "Verify",
      "description": "Measure control behavior, investigate exceptions and retain operational evidence."
    }
  ],
  "telemetry": [
    {
      "signal": "Connection context",
      "purpose": "Understand where vpn & remote access security decisions occur.",
      "context": "Source, destination, protocol, zone and application relationships."
    },
    {
      "signal": "Identity context",
      "purpose": "Relate activity to accountable users and workloads.",
      "context": "Authentication state, role, service identity and device ownership."
    },
    {
      "signal": "Control events",
      "purpose": "See when security logic allows, blocks or changes behavior.",
      "context": "Policy match, action, reason, enforcement point and exception context."
    },
    {
      "signal": "Health signals",
      "purpose": "Recognize degradation before it creates a blind spot.",
      "context": "Availability, processing state, ingestion health and control-plane condition."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Discover",
      "description": "Map the current vpn & remote access security environment, dependencies and ownership."
    },
    {
      "step": "02",
      "title": "Model",
      "description": "Define expected flows, trust assumptions, risks and objectives."
    },
    {
      "step": "03",
      "title": "Design",
      "description": "Create enforceable controls and operational guardrails."
    },
    {
      "step": "04",
      "title": "Validate",
      "description": "Test behavior against representative traffic and failure conditions."
    },
    {
      "step": "05",
      "title": "Operate",
      "description": "Monitor signals, exceptions, incidents and policy changes."
    },
    {
      "step": "06",
      "title": "Improve",
      "description": "Use evidence and learning to refine the next control cycle."
    }
  ],
  "operations": [
    {
      "title": "Change discipline",
      "description": "Treat vpn & remote access security changes as governed events with intent, owner and validation."
    },
    {
      "title": "Exception ownership",
      "description": "Give temporary exceptions a reason, accountable owner and review point."
    },
    {
      "title": "Evidence continuity",
      "description": "Keep enough decision context to explain why a control existed and what changed."
    },
    {
      "title": "Cross-team clarity",
      "description": "Create shared operating language between security, network, platform and application teams."
    }
  ],
  "principles": [
    {
      "title": "Intent before syntax",
      "description": "Define the security outcome before expressing it in vendor-specific configuration."
    },
    {
      "title": "Context before action",
      "description": "Use identity, asset and application meaning when interpreting network activity."
    },
    {
      "title": "Least necessary reachability",
      "description": "Permit required communication without creating unnecessary trust paths."
    },
    {
      "title": "Observable controls",
      "description": "Controls should produce enough evidence to explain behavior and exceptions."
    },
    {
      "title": "Safe change",
      "description": "Design deployment, rollback and verification into the operating process."
    },
    {
      "title": "Continuous refinement",
      "description": "Keep vpn & remote access security aligned with architecture changes and threat learning."
    }
  ],
  "outcomes": [
    {
      "metric": "01",
      "title": "Clearer control intent",
      "description": "Teams can understand what vpn & remote access security controls are designed to accomplish."
    },
    {
      "metric": "02",
      "title": "Stronger context",
      "description": "Analysts receive more useful context around network events and exceptions."
    },
    {
      "metric": "03",
      "title": "Reduced ambiguity",
      "description": "Ownership and review paths make security changes easier to reason about."
    },
    {
      "metric": "04",
      "title": "Defensible architecture",
      "description": "Trust relationships and enforcement points become explicit rather than accidental."
    }
  ],
  "cta": {
    "heading": "Build vpn & remote access security around clear security intent.",
    "description": "Connect architecture, control, evidence and operations into a maintainable vpn & remote access security capability.",
    "primary": "Start a security conversation",
    "secondary": "Explore the control model"
  },
  "layoutVariant": 2
},
"network-segmentation":{
  "slug": "network-segmentation",
  "eyebrow": "SEGMENTATION",
  "title": "Network Segmentation",
  "accent": "Reduce lateral movement by separating systems according to trust and purpose.",
  "description": "Turn a flat network into explicit security zones. HYI.AI structures network segmentation around explicit trust, observable controls and operational evidence rather than isolated configuration.",
  "model": "segment-zones",
  "stats": [
    {
      "value": "08",
      "label": "CONTROL DOMAIN"
    },
    {
      "value": "N:N",
      "label": "NETWORK RELATIONSHIPS"
    },
    {
      "value": "LIVE",
      "label": "OPERATIONAL SIGNAL"
    }
  ],
  "signals": [
    "SEGMENTATION SIGNAL",
    "NETWORK SEGMENTATION CONTROL",
    "IDENTITY CONTEXT",
    "NETWORK TELEMETRY",
    "POLICY EVIDENCE"
  ],
  "narrative": {
    "kicker": "SEGMENTATION / OPERATING VIEW",
    "heading": "Turn a flat network into explicit security zones.",
    "body": "Network Segmentation should connect architecture, policy, telemetry and response. The operating view makes dependencies, exceptions and ownership visible so teams can reason about security changes without losing the context behind them.",
    "quote": "Network Segmentation becomes more defensible when security intent remains visible from design through daily operations."
  },
  "capabilities": [
    {
      "title": "Discovery",
      "description": "Establish the real operating scope for network segmentation.",
      "detail": "Inventory dependencies, ownership, control points and exceptions before changing production behavior."
    },
    {
      "title": "Control design",
      "description": "Translate network segmentation intent into implementable controls.",
      "detail": "Define boundaries and enforcement logic in language security and infrastructure teams can share."
    },
    {
      "title": "Visibility",
      "description": "Expose the signals required to understand network segmentation activity.",
      "detail": "Preserve identity, asset, application and policy context around meaningful events."
    },
    {
      "title": "Validation",
      "description": "Test whether network segmentation controls behave as intended.",
      "detail": "Use repeatable evidence and review gates instead of assuming configuration equals protection."
    },
    {
      "title": "Operations",
      "description": "Make network segmentation sustainable after deployment.",
      "detail": "Clarify ownership, change paths, escalation and evidence as the environment evolves."
    },
    {
      "title": "Evolution",
      "description": "Continuously refine network segmentation.",
      "detail": "Feed incidents, exceptions and architecture changes back into the next control cycle."
    }
  ],
  "threats": [
    {
      "label": "01",
      "title": "Unknown paths",
      "description": "Unmapped connectivity can weaken network segmentation decisions and complicate incident analysis."
    },
    {
      "label": "02",
      "title": "Policy drift",
      "description": "Accumulated exceptions can separate deployed network segmentation behavior from intended architecture."
    },
    {
      "label": "03",
      "title": "Weak context",
      "description": "Signals without identity, asset or application meaning make prioritization slower."
    },
    {
      "label": "04",
      "title": "Control gaps",
      "description": "Coverage gaps appear between teams and environments when responsibility is unclear."
    }
  ],
  "architecture": [
    {
      "layer": "L01",
      "title": "Observe",
      "description": "Collect the network and security context relevant to network segmentation."
    },
    {
      "layer": "L02",
      "title": "Contextualize",
      "description": "Relate activity to identities, assets, applications and trust zones."
    },
    {
      "layer": "L03",
      "title": "Decide",
      "description": "Evaluate activity against explicit network segmentation policy and risk requirements."
    },
    {
      "layer": "L04",
      "title": "Enforce",
      "description": "Apply controls at the appropriate boundary while preserving required communication."
    },
    {
      "layer": "L05",
      "title": "Verify",
      "description": "Measure control behavior, investigate exceptions and retain operational evidence."
    }
  ],
  "telemetry": [
    {
      "signal": "Connection context",
      "purpose": "Understand where network segmentation decisions occur.",
      "context": "Source, destination, protocol, zone and application relationships."
    },
    {
      "signal": "Identity context",
      "purpose": "Relate activity to accountable users and workloads.",
      "context": "Authentication state, role, service identity and device ownership."
    },
    {
      "signal": "Control events",
      "purpose": "See when security logic allows, blocks or changes behavior.",
      "context": "Policy match, action, reason, enforcement point and exception context."
    },
    {
      "signal": "Health signals",
      "purpose": "Recognize degradation before it creates a blind spot.",
      "context": "Availability, processing state, ingestion health and control-plane condition."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Discover",
      "description": "Map the current network segmentation environment, dependencies and ownership."
    },
    {
      "step": "02",
      "title": "Model",
      "description": "Define expected flows, trust assumptions, risks and objectives."
    },
    {
      "step": "03",
      "title": "Design",
      "description": "Create enforceable controls and operational guardrails."
    },
    {
      "step": "04",
      "title": "Validate",
      "description": "Test behavior against representative traffic and failure conditions."
    },
    {
      "step": "05",
      "title": "Operate",
      "description": "Monitor signals, exceptions, incidents and policy changes."
    },
    {
      "step": "06",
      "title": "Improve",
      "description": "Use evidence and learning to refine the next control cycle."
    }
  ],
  "operations": [
    {
      "title": "Change discipline",
      "description": "Treat network segmentation changes as governed events with intent, owner and validation."
    },
    {
      "title": "Exception ownership",
      "description": "Give temporary exceptions a reason, accountable owner and review point."
    },
    {
      "title": "Evidence continuity",
      "description": "Keep enough decision context to explain why a control existed and what changed."
    },
    {
      "title": "Cross-team clarity",
      "description": "Create shared operating language between security, network, platform and application teams."
    }
  ],
  "principles": [
    {
      "title": "Intent before syntax",
      "description": "Define the security outcome before expressing it in vendor-specific configuration."
    },
    {
      "title": "Context before action",
      "description": "Use identity, asset and application meaning when interpreting network activity."
    },
    {
      "title": "Least necessary reachability",
      "description": "Permit required communication without creating unnecessary trust paths."
    },
    {
      "title": "Observable controls",
      "description": "Controls should produce enough evidence to explain behavior and exceptions."
    },
    {
      "title": "Safe change",
      "description": "Design deployment, rollback and verification into the operating process."
    },
    {
      "title": "Continuous refinement",
      "description": "Keep network segmentation aligned with architecture changes and threat learning."
    }
  ],
  "outcomes": [
    {
      "metric": "01",
      "title": "Clearer control intent",
      "description": "Teams can understand what network segmentation controls are designed to accomplish."
    },
    {
      "metric": "02",
      "title": "Stronger context",
      "description": "Analysts receive more useful context around network events and exceptions."
    },
    {
      "metric": "03",
      "title": "Reduced ambiguity",
      "description": "Ownership and review paths make security changes easier to reason about."
    },
    {
      "metric": "04",
      "title": "Defensible architecture",
      "description": "Trust relationships and enforcement points become explicit rather than accidental."
    }
  ],
  "cta": {
    "heading": "Build network segmentation around clear security intent.",
    "description": "Connect architecture, control, evidence and operations into a maintainable network segmentation capability.",
    "primary": "Start a security conversation",
    "secondary": "Explore the control model"
  },
  "layoutVariant": 3
},
"dns-security":{
  "slug": "dns-security",
  "eyebrow": "DNS DEFENSE",
  "title": "DNS Security",
  "accent": "Use the DNS layer as an early control point for malicious destinations.",
  "description": "Protect the resolver path where intent becomes destination. HYI.AI structures dns security around explicit trust, observable controls and operational evidence rather than isolated configuration.",
  "model": "dns-resolver",
  "stats": [
    {
      "value": "09",
      "label": "CONTROL DOMAIN"
    },
    {
      "value": "N:N",
      "label": "NETWORK RELATIONSHIPS"
    },
    {
      "value": "LIVE",
      "label": "OPERATIONAL SIGNAL"
    }
  ],
  "signals": [
    "DNS DEFENSE SIGNAL",
    "DNS SECURITY CONTROL",
    "IDENTITY CONTEXT",
    "NETWORK TELEMETRY",
    "POLICY EVIDENCE"
  ],
  "narrative": {
    "kicker": "DNS DEFENSE / OPERATING VIEW",
    "heading": "Protect the resolver path where intent becomes destination.",
    "body": "DNS Security should connect architecture, policy, telemetry and response. The operating view makes dependencies, exceptions and ownership visible so teams can reason about security changes without losing the context behind them.",
    "quote": "DNS Security becomes more defensible when security intent remains visible from design through daily operations."
  },
  "capabilities": [
    {
      "title": "Discovery",
      "description": "Establish the real operating scope for dns security.",
      "detail": "Inventory dependencies, ownership, control points and exceptions before changing production behavior."
    },
    {
      "title": "Control design",
      "description": "Translate dns security intent into implementable controls.",
      "detail": "Define boundaries and enforcement logic in language security and infrastructure teams can share."
    },
    {
      "title": "Visibility",
      "description": "Expose the signals required to understand dns security activity.",
      "detail": "Preserve identity, asset, application and policy context around meaningful events."
    },
    {
      "title": "Validation",
      "description": "Test whether dns security controls behave as intended.",
      "detail": "Use repeatable evidence and review gates instead of assuming configuration equals protection."
    },
    {
      "title": "Operations",
      "description": "Make dns security sustainable after deployment.",
      "detail": "Clarify ownership, change paths, escalation and evidence as the environment evolves."
    },
    {
      "title": "Evolution",
      "description": "Continuously refine dns security.",
      "detail": "Feed incidents, exceptions and architecture changes back into the next control cycle."
    }
  ],
  "threats": [
    {
      "label": "01",
      "title": "Unknown paths",
      "description": "Unmapped connectivity can weaken dns security decisions and complicate incident analysis."
    },
    {
      "label": "02",
      "title": "Policy drift",
      "description": "Accumulated exceptions can separate deployed dns security behavior from intended architecture."
    },
    {
      "label": "03",
      "title": "Weak context",
      "description": "Signals without identity, asset or application meaning make prioritization slower."
    },
    {
      "label": "04",
      "title": "Control gaps",
      "description": "Coverage gaps appear between teams and environments when responsibility is unclear."
    }
  ],
  "architecture": [
    {
      "layer": "L01",
      "title": "Observe",
      "description": "Collect the network and security context relevant to dns security."
    },
    {
      "layer": "L02",
      "title": "Contextualize",
      "description": "Relate activity to identities, assets, applications and trust zones."
    },
    {
      "layer": "L03",
      "title": "Decide",
      "description": "Evaluate activity against explicit dns security policy and risk requirements."
    },
    {
      "layer": "L04",
      "title": "Enforce",
      "description": "Apply controls at the appropriate boundary while preserving required communication."
    },
    {
      "layer": "L05",
      "title": "Verify",
      "description": "Measure control behavior, investigate exceptions and retain operational evidence."
    }
  ],
  "telemetry": [
    {
      "signal": "Connection context",
      "purpose": "Understand where dns security decisions occur.",
      "context": "Source, destination, protocol, zone and application relationships."
    },
    {
      "signal": "Identity context",
      "purpose": "Relate activity to accountable users and workloads.",
      "context": "Authentication state, role, service identity and device ownership."
    },
    {
      "signal": "Control events",
      "purpose": "See when security logic allows, blocks or changes behavior.",
      "context": "Policy match, action, reason, enforcement point and exception context."
    },
    {
      "signal": "Health signals",
      "purpose": "Recognize degradation before it creates a blind spot.",
      "context": "Availability, processing state, ingestion health and control-plane condition."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Discover",
      "description": "Map the current dns security environment, dependencies and ownership."
    },
    {
      "step": "02",
      "title": "Model",
      "description": "Define expected flows, trust assumptions, risks and objectives."
    },
    {
      "step": "03",
      "title": "Design",
      "description": "Create enforceable controls and operational guardrails."
    },
    {
      "step": "04",
      "title": "Validate",
      "description": "Test behavior against representative traffic and failure conditions."
    },
    {
      "step": "05",
      "title": "Operate",
      "description": "Monitor signals, exceptions, incidents and policy changes."
    },
    {
      "step": "06",
      "title": "Improve",
      "description": "Use evidence and learning to refine the next control cycle."
    }
  ],
  "operations": [
    {
      "title": "Change discipline",
      "description": "Treat dns security changes as governed events with intent, owner and validation."
    },
    {
      "title": "Exception ownership",
      "description": "Give temporary exceptions a reason, accountable owner and review point."
    },
    {
      "title": "Evidence continuity",
      "description": "Keep enough decision context to explain why a control existed and what changed."
    },
    {
      "title": "Cross-team clarity",
      "description": "Create shared operating language between security, network, platform and application teams."
    }
  ],
  "principles": [
    {
      "title": "Intent before syntax",
      "description": "Define the security outcome before expressing it in vendor-specific configuration."
    },
    {
      "title": "Context before action",
      "description": "Use identity, asset and application meaning when interpreting network activity."
    },
    {
      "title": "Least necessary reachability",
      "description": "Permit required communication without creating unnecessary trust paths."
    },
    {
      "title": "Observable controls",
      "description": "Controls should produce enough evidence to explain behavior and exceptions."
    },
    {
      "title": "Safe change",
      "description": "Design deployment, rollback and verification into the operating process."
    },
    {
      "title": "Continuous refinement",
      "description": "Keep dns security aligned with architecture changes and threat learning."
    }
  ],
  "outcomes": [
    {
      "metric": "01",
      "title": "Clearer control intent",
      "description": "Teams can understand what dns security controls are designed to accomplish."
    },
    {
      "metric": "02",
      "title": "Stronger context",
      "description": "Analysts receive more useful context around network events and exceptions."
    },
    {
      "metric": "03",
      "title": "Reduced ambiguity",
      "description": "Ownership and review paths make security changes easier to reason about."
    },
    {
      "metric": "04",
      "title": "Defensible architecture",
      "description": "Trust relationships and enforcement points become explicit rather than accidental."
    }
  ],
  "cta": {
    "heading": "Build dns security around clear security intent.",
    "description": "Connect architecture, control, evidence and operations into a maintainable dns security capability.",
    "primary": "Start a security conversation",
    "secondary": "Explore the control model"
  },
  "layoutVariant": 0
},
"email-web-security":{
  "slug": "email-web-security",
  "eyebrow": "CONTENT SECURITY",
  "title": "Email & Web Security",
  "accent": "Control two common paths between users and untrusted content.",
  "description": "Protect user interaction while preserving useful analyst context. HYI.AI structures email & web security around explicit trust, observable controls and operational evidence rather than isolated configuration.",
  "model": "content-shield",
  "stats": [
    {
      "value": "010",
      "label": "CONTROL DOMAIN"
    },
    {
      "value": "N:N",
      "label": "NETWORK RELATIONSHIPS"
    },
    {
      "value": "LIVE",
      "label": "OPERATIONAL SIGNAL"
    }
  ],
  "signals": [
    "CONTENT SECURITY SIGNAL",
    "EMAIL & WEB SECURITY CONTROL",
    "IDENTITY CONTEXT",
    "NETWORK TELEMETRY",
    "POLICY EVIDENCE"
  ],
  "narrative": {
    "kicker": "CONTENT SECURITY / OPERATING VIEW",
    "heading": "Protect user interaction while preserving useful analyst context.",
    "body": "Email & Web Security should connect architecture, policy, telemetry and response. The operating view makes dependencies, exceptions and ownership visible so teams can reason about security changes without losing the context behind them.",
    "quote": "Email & Web Security becomes more defensible when security intent remains visible from design through daily operations."
  },
  "capabilities": [
    {
      "title": "Discovery",
      "description": "Establish the real operating scope for email & web security.",
      "detail": "Inventory dependencies, ownership, control points and exceptions before changing production behavior."
    },
    {
      "title": "Control design",
      "description": "Translate email & web security intent into implementable controls.",
      "detail": "Define boundaries and enforcement logic in language security and infrastructure teams can share."
    },
    {
      "title": "Visibility",
      "description": "Expose the signals required to understand email & web security activity.",
      "detail": "Preserve identity, asset, application and policy context around meaningful events."
    },
    {
      "title": "Validation",
      "description": "Test whether email & web security controls behave as intended.",
      "detail": "Use repeatable evidence and review gates instead of assuming configuration equals protection."
    },
    {
      "title": "Operations",
      "description": "Make email & web security sustainable after deployment.",
      "detail": "Clarify ownership, change paths, escalation and evidence as the environment evolves."
    },
    {
      "title": "Evolution",
      "description": "Continuously refine email & web security.",
      "detail": "Feed incidents, exceptions and architecture changes back into the next control cycle."
    }
  ],
  "threats": [
    {
      "label": "01",
      "title": "Unknown paths",
      "description": "Unmapped connectivity can weaken email & web security decisions and complicate incident analysis."
    },
    {
      "label": "02",
      "title": "Policy drift",
      "description": "Accumulated exceptions can separate deployed email & web security behavior from intended architecture."
    },
    {
      "label": "03",
      "title": "Weak context",
      "description": "Signals without identity, asset or application meaning make prioritization slower."
    },
    {
      "label": "04",
      "title": "Control gaps",
      "description": "Coverage gaps appear between teams and environments when responsibility is unclear."
    }
  ],
  "architecture": [
    {
      "layer": "L01",
      "title": "Observe",
      "description": "Collect the network and security context relevant to email & web security."
    },
    {
      "layer": "L02",
      "title": "Contextualize",
      "description": "Relate activity to identities, assets, applications and trust zones."
    },
    {
      "layer": "L03",
      "title": "Decide",
      "description": "Evaluate activity against explicit email & web security policy and risk requirements."
    },
    {
      "layer": "L04",
      "title": "Enforce",
      "description": "Apply controls at the appropriate boundary while preserving required communication."
    },
    {
      "layer": "L05",
      "title": "Verify",
      "description": "Measure control behavior, investigate exceptions and retain operational evidence."
    }
  ],
  "telemetry": [
    {
      "signal": "Connection context",
      "purpose": "Understand where email & web security decisions occur.",
      "context": "Source, destination, protocol, zone and application relationships."
    },
    {
      "signal": "Identity context",
      "purpose": "Relate activity to accountable users and workloads.",
      "context": "Authentication state, role, service identity and device ownership."
    },
    {
      "signal": "Control events",
      "purpose": "See when security logic allows, blocks or changes behavior.",
      "context": "Policy match, action, reason, enforcement point and exception context."
    },
    {
      "signal": "Health signals",
      "purpose": "Recognize degradation before it creates a blind spot.",
      "context": "Availability, processing state, ingestion health and control-plane condition."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Discover",
      "description": "Map the current email & web security environment, dependencies and ownership."
    },
    {
      "step": "02",
      "title": "Model",
      "description": "Define expected flows, trust assumptions, risks and objectives."
    },
    {
      "step": "03",
      "title": "Design",
      "description": "Create enforceable controls and operational guardrails."
    },
    {
      "step": "04",
      "title": "Validate",
      "description": "Test behavior against representative traffic and failure conditions."
    },
    {
      "step": "05",
      "title": "Operate",
      "description": "Monitor signals, exceptions, incidents and policy changes."
    },
    {
      "step": "06",
      "title": "Improve",
      "description": "Use evidence and learning to refine the next control cycle."
    }
  ],
  "operations": [
    {
      "title": "Change discipline",
      "description": "Treat email & web security changes as governed events with intent, owner and validation."
    },
    {
      "title": "Exception ownership",
      "description": "Give temporary exceptions a reason, accountable owner and review point."
    },
    {
      "title": "Evidence continuity",
      "description": "Keep enough decision context to explain why a control existed and what changed."
    },
    {
      "title": "Cross-team clarity",
      "description": "Create shared operating language between security, network, platform and application teams."
    }
  ],
  "principles": [
    {
      "title": "Intent before syntax",
      "description": "Define the security outcome before expressing it in vendor-specific configuration."
    },
    {
      "title": "Context before action",
      "description": "Use identity, asset and application meaning when interpreting network activity."
    },
    {
      "title": "Least necessary reachability",
      "description": "Permit required communication without creating unnecessary trust paths."
    },
    {
      "title": "Observable controls",
      "description": "Controls should produce enough evidence to explain behavior and exceptions."
    },
    {
      "title": "Safe change",
      "description": "Design deployment, rollback and verification into the operating process."
    },
    {
      "title": "Continuous refinement",
      "description": "Keep email & web security aligned with architecture changes and threat learning."
    }
  ],
  "outcomes": [
    {
      "metric": "01",
      "title": "Clearer control intent",
      "description": "Teams can understand what email & web security controls are designed to accomplish."
    },
    {
      "metric": "02",
      "title": "Stronger context",
      "description": "Analysts receive more useful context around network events and exceptions."
    },
    {
      "metric": "03",
      "title": "Reduced ambiguity",
      "description": "Ownership and review paths make security changes easier to reason about."
    },
    {
      "metric": "04",
      "title": "Defensible architecture",
      "description": "Trust relationships and enforcement points become explicit rather than accidental."
    }
  ],
  "cta": {
    "heading": "Build email & web security around clear security intent.",
    "description": "Connect architecture, control, evidence and operations into a maintainable email & web security capability.",
    "primary": "Start a security conversation",
    "secondary": "Explore the control model"
  },
  "layoutVariant": 1
},
"ddos-protection":{
  "slug": "ddos-protection",
  "eyebrow": "AVAILABILITY DEFENSE",
  "title": "DDoS Protection",
  "accent": "Preserve service availability when traffic becomes hostile.",
  "description": "Separate legitimate demand from disruptive traffic at scale. HYI.AI structures ddos protection around explicit trust, observable controls and operational evidence rather than isolated configuration.",
  "model": "traffic-storm",
  "stats": [
    {
      "value": "011",
      "label": "CONTROL DOMAIN"
    },
    {
      "value": "N:N",
      "label": "NETWORK RELATIONSHIPS"
    },
    {
      "value": "LIVE",
      "label": "OPERATIONAL SIGNAL"
    }
  ],
  "signals": [
    "AVAILABILITY DEFENSE SIGNAL",
    "DDOS PROTECTION CONTROL",
    "IDENTITY CONTEXT",
    "NETWORK TELEMETRY",
    "POLICY EVIDENCE"
  ],
  "narrative": {
    "kicker": "AVAILABILITY DEFENSE / OPERATING VIEW",
    "heading": "Separate legitimate demand from disruptive traffic at scale.",
    "body": "DDoS Protection should connect architecture, policy, telemetry and response. The operating view makes dependencies, exceptions and ownership visible so teams can reason about security changes without losing the context behind them.",
    "quote": "DDoS Protection becomes more defensible when security intent remains visible from design through daily operations."
  },
  "capabilities": [
    {
      "title": "Discovery",
      "description": "Establish the real operating scope for ddos protection.",
      "detail": "Inventory dependencies, ownership, control points and exceptions before changing production behavior."
    },
    {
      "title": "Control design",
      "description": "Translate ddos protection intent into implementable controls.",
      "detail": "Define boundaries and enforcement logic in language security and infrastructure teams can share."
    },
    {
      "title": "Visibility",
      "description": "Expose the signals required to understand ddos protection activity.",
      "detail": "Preserve identity, asset, application and policy context around meaningful events."
    },
    {
      "title": "Validation",
      "description": "Test whether ddos protection controls behave as intended.",
      "detail": "Use repeatable evidence and review gates instead of assuming configuration equals protection."
    },
    {
      "title": "Operations",
      "description": "Make ddos protection sustainable after deployment.",
      "detail": "Clarify ownership, change paths, escalation and evidence as the environment evolves."
    },
    {
      "title": "Evolution",
      "description": "Continuously refine ddos protection.",
      "detail": "Feed incidents, exceptions and architecture changes back into the next control cycle."
    }
  ],
  "threats": [
    {
      "label": "01",
      "title": "Unknown paths",
      "description": "Unmapped connectivity can weaken ddos protection decisions and complicate incident analysis."
    },
    {
      "label": "02",
      "title": "Policy drift",
      "description": "Accumulated exceptions can separate deployed ddos protection behavior from intended architecture."
    },
    {
      "label": "03",
      "title": "Weak context",
      "description": "Signals without identity, asset or application meaning make prioritization slower."
    },
    {
      "label": "04",
      "title": "Control gaps",
      "description": "Coverage gaps appear between teams and environments when responsibility is unclear."
    }
  ],
  "architecture": [
    {
      "layer": "L01",
      "title": "Observe",
      "description": "Collect the network and security context relevant to ddos protection."
    },
    {
      "layer": "L02",
      "title": "Contextualize",
      "description": "Relate activity to identities, assets, applications and trust zones."
    },
    {
      "layer": "L03",
      "title": "Decide",
      "description": "Evaluate activity against explicit ddos protection policy and risk requirements."
    },
    {
      "layer": "L04",
      "title": "Enforce",
      "description": "Apply controls at the appropriate boundary while preserving required communication."
    },
    {
      "layer": "L05",
      "title": "Verify",
      "description": "Measure control behavior, investigate exceptions and retain operational evidence."
    }
  ],
  "telemetry": [
    {
      "signal": "Connection context",
      "purpose": "Understand where ddos protection decisions occur.",
      "context": "Source, destination, protocol, zone and application relationships."
    },
    {
      "signal": "Identity context",
      "purpose": "Relate activity to accountable users and workloads.",
      "context": "Authentication state, role, service identity and device ownership."
    },
    {
      "signal": "Control events",
      "purpose": "See when security logic allows, blocks or changes behavior.",
      "context": "Policy match, action, reason, enforcement point and exception context."
    },
    {
      "signal": "Health signals",
      "purpose": "Recognize degradation before it creates a blind spot.",
      "context": "Availability, processing state, ingestion health and control-plane condition."
    }
  ],
  "workflow": [
    {
      "step": "01",
      "title": "Discover",
      "description": "Map the current ddos protection environment, dependencies and ownership."
    },
    {
      "step": "02",
      "title": "Model",
      "description": "Define expected flows, trust assumptions, risks and objectives."
    },
    {
      "step": "03",
      "title": "Design",
      "description": "Create enforceable controls and operational guardrails."
    },
    {
      "step": "04",
      "title": "Validate",
      "description": "Test behavior against representative traffic and failure conditions."
    },
    {
      "step": "05",
      "title": "Operate",
      "description": "Monitor signals, exceptions, incidents and policy changes."
    },
    {
      "step": "06",
      "title": "Improve",
      "description": "Use evidence and learning to refine the next control cycle."
    }
  ],
  "operations": [
    {
      "title": "Change discipline",
      "description": "Treat ddos protection changes as governed events with intent, owner and validation."
    },
    {
      "title": "Exception ownership",
      "description": "Give temporary exceptions a reason, accountable owner and review point."
    },
    {
      "title": "Evidence continuity",
      "description": "Keep enough decision context to explain why a control existed and what changed."
    },
    {
      "title": "Cross-team clarity",
      "description": "Create shared operating language between security, network, platform and application teams."
    }
  ],
  "principles": [
    {
      "title": "Intent before syntax",
      "description": "Define the security outcome before expressing it in vendor-specific configuration."
    },
    {
      "title": "Context before action",
      "description": "Use identity, asset and application meaning when interpreting network activity."
    },
    {
      "title": "Least necessary reachability",
      "description": "Permit required communication without creating unnecessary trust paths."
    },
    {
      "title": "Observable controls",
      "description": "Controls should produce enough evidence to explain behavior and exceptions."
    },
    {
      "title": "Safe change",
      "description": "Design deployment, rollback and verification into the operating process."
    },
    {
      "title": "Continuous refinement",
      "description": "Keep ddos protection aligned with architecture changes and threat learning."
    }
  ],
  "outcomes": [
    {
      "metric": "01",
      "title": "Clearer control intent",
      "description": "Teams can understand what ddos protection controls are designed to accomplish."
    },
    {
      "metric": "02",
      "title": "Stronger context",
      "description": "Analysts receive more useful context around network events and exceptions."
    },
    {
      "metric": "03",
      "title": "Reduced ambiguity",
      "description": "Ownership and review paths make security changes easier to reason about."
    },
    {
      "metric": "04",
      "title": "Defensible architecture",
      "description": "Trust relationships and enforcement points become explicit rather than accidental."
    }
  ],
  "cta": {
    "heading": "Build ddos protection around clear security intent.",
    "description": "Connect architecture, control, evidence and operations into a maintainable ddos protection capability.",
    "primary": "Start a security conversation",
    "secondary": "Explore the control model"
  },
  "layoutVariant": 2
}
};
export const getNetworkSecurityPage=(slug:string)=>networkSecurityPages[slug];
