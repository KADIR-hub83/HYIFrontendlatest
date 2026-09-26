"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  CircleDot,
  Database,
  Eye,
  GitBranch,
  Layers3,
  Lock,
  Network,
  Radio,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react";

import type { EndpointModelType } from "./endpointServices";

const transition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

function Dot({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.span
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [0.8, 1.25, 0.8],
      }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        delay,
      }}
      className={`absolute h-1.5 w-1.5 rounded-full bg-[#7c3aed] ${className}`}
    />
  );
}

function Frame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#030303]">
      <div className="flex h-12 items-center justify-between border-b border-white/[0.06] px-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-[#7c3aed]/80" />
        </div>

        <span className="font-mono text-[7px] uppercase tracking-[0.22em] text-white/20">
          {label}
        </span>

        <div className="flex items-center gap-2">
          <Radio className="h-3 w-3 text-white/20" />
          <span className="font-mono text-[7px] text-white/20">LIVE</span>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 top-12 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(255,255,255,.8) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {children}
    </div>
  );
}

function FleetRadar() {
  const devices = [
    ["Mac-014", "Trusted"],
    ["WS-228", "Observe"],
    ["SRV-09", "Protected"],
    ["LT-481", "Review"],
  ];

  return (
    <Frame label="Endpoint Detection / Fleet Radar">
      <div className="relative grid min-h-[510px] items-center gap-8 p-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-3">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
            Managed endpoint fleet
          </p>

          {devices.map(([name, state], index) => (
            <motion.div
              key={name}
              animate={{ x: [0, 4, 0] }}
              transition={{
                ...transition,
                delay: index * 0.3,
              }}
              className="rounded-[15px] border border-white/[0.07] bg-white/[0.02] p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/60">{name}</span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />
              </div>

              <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">
                {state}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[390px]">
          {[100, 78, 56, 34].map((size, index) => (
            <motion.div
              key={size}
              animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
              transition={{
                duration: 18 + index * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.08]"
              style={{
                width: `${size}%`,
                height: `${size}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black">
            <ShieldCheck className="h-7 w-7 text-white/70" />
          </div>

          <Dot className="left-[18%] top-[28%]" />
          <Dot className="right-[16%] top-[36%]" delay={0.5} />
          <Dot className="bottom-[18%] left-[35%]" delay={1} />
          <Dot className="right-[30%] top-[12%]" delay={1.4} />
        </div>
      </div>
    </Frame>
  );
}

function XDRConstellation() {
  const nodes = [
    { label: "ENDPOINT", x: "15%", y: "22%" },
    { label: "IDENTITY", x: "72%", y: "18%" },
    { label: "NETWORK", x: "12%", y: "68%" },
    { label: "CLOUD", x: "74%", y: "70%" },
  ];

  return (
    <Frame label="XDR / Correlation Constellation">
      <div className="relative min-h-[510px]">
        <svg className="absolute inset-0 h-full w-full">
          {nodes.map((node) => (
            <line
              key={node.label}
              x1="50%"
              y1="50%"
              x2={node.x}
              y2={node.y}
              stroke="rgba(255,255,255,.10)"
              strokeDasharray="5 8"
            />
          ))}
        </svg>

        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(124,58,237,.08)",
              "0 0 80px rgba(124,58,237,.22)",
              "0 0 20px rgba(124,58,237,.08)",
            ],
          }}
          transition={transition}
          className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/10 bg-black"
        >
          <GitBranch className="h-7 w-7 text-white/60" />
          <span className="mt-3 font-mono text-[7px] tracking-[0.18em] text-white/25">
            XDR GRAPH
          </span>
        </motion.div>

        {nodes.map((node, index) => (
          <motion.div
            key={node.label}
            animate={{ y: [0, -8, 0] }}
            transition={{
              ...transition,
              delay: index * 0.4,
            }}
            className="absolute w-[125px] rounded-[16px] border border-white/[0.08] bg-black p-4 text-center"
            style={{
              left: node.x,
              top: node.y,
            }}
          >
            <CircleDot className="mx-auto h-4 w-4 text-white/40" />
            <p className="mt-3 font-mono text-[7px] tracking-[0.15em] text-white/30">
              {node.label}
            </p>
          </motion.div>
        ))}

        <Dot className="left-[38%] top-[20%]" />
        <Dot className="right-[33%] bottom-[17%]" delay={1} />
      </div>
    </Frame>
  );
}

function MalwareLab() {
  return (
    <Frame label="Malware Analysis / Inspection Chamber">
      <div className="relative flex min-h-[510px] items-center justify-center p-8">
        <div className="w-full max-w-[650px]">
          <div className="grid grid-cols-4 gap-2">
            {["FILE", "STATIC", "BEHAVIOR", "VERDICT"].map((item, index) => (
              <div key={item}>
                <div className="flex items-center">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{
                      ...transition,
                      delay: index * 0.5,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black"
                  >
                    {index === 0 ? (
                      <Database className="h-4 w-4 text-white/50" />
                    ) : index === 1 ? (
                      <Eye className="h-4 w-4 text-white/50" />
                    ) : index === 2 ? (
                      <Activity className="h-4 w-4 text-white/50" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 text-white/50" />
                    )}
                  </motion.div>

                  {index < 3 && (
                    <div className="h-px flex-1 overflow-hidden bg-white/[0.08]">
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                        className="h-full w-1/2 bg-[#7c3aed]"
                      />
                    </div>
                  )}
                </div>

                <p className="mt-4 font-mono text-[7px] tracking-[0.15em] text-white/25">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[22px] border border-white/[0.07] bg-white/[0.02] p-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/45">
                Sample inspection
              </span>

              <span className="font-mono text-[7px] text-white/20">
                ANALYSIS ACTIVE
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {[72, 48, 86].map((width, index) => (
                <div
                  key={width}
                  className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{
                      duration: 1.4,
                      delay: index * 0.25,
                    }}
                    className="h-full rounded-full bg-white/30"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function DeviceObservatory() {
  return (
    <Frame label="Endpoint Observatory / Live Fleet">
      <div className="grid min-h-[510px] gap-4 p-6 md:grid-cols-12">
        <div className="rounded-[20px] border border-white/[0.07] bg-white/[0.02] p-5 md:col-span-8">
          <p className="font-mono text-[7px] tracking-[0.2em] text-white/20">
            DEVICE ACTIVITY
          </p>

          <div className="mt-12 flex h-[250px] items-end gap-3">
            {[36, 62, 48, 81, 58, 92, 66, 76, 43, 69].map(
              (height, index) => (
                <motion.div
                  key={`${height}-${index}`}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{
                    duration: 1,
                    delay: index * 0.08,
                  }}
                  className="relative flex-1 rounded-t-[5px] bg-white/[0.13]"
                >
                  {index === 5 && (
                    <span className="absolute inset-x-0 top-0 h-1 bg-[#7c3aed]" />
                  )}
                </motion.div>
              ),
            )}
          </div>
        </div>

        <div className="space-y-4 md:col-span-4">
          {[
            ["FLEET", "Connected"],
            ["STATE", "Observed"],
            ["COVERAGE", "Active"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[20px] border border-white/[0.07] bg-white/[0.02] p-5"
            >
              <p className="font-mono text-[7px] text-white/20">{label}</p>
              <p className="mt-5 text-[13px] text-white/60">{value}</p>

              <div className="mt-5 h-px bg-white/[0.07]">
                <motion.div
                  animate={{ width: ["20%", "85%", "20%"] }}
                  transition={transition}
                  className="h-full bg-[#7c3aed]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function ControlGateway() {
  return (
    <Frame label="Peripheral Policy / Control Gateway">
      <div className="relative flex min-h-[510px] items-center justify-center">
        <div className="grid w-full max-w-[700px] grid-cols-[1fr_auto_1fr] items-center gap-5 px-5">
          <div className="space-y-3">
            {["USB-01", "MEDIA-08", "DEVICE-14"].map((device, index) => (
              <motion.div
                key={device}
                animate={{ x: [0, 8, 0] }}
                transition={{
                  ...transition,
                  delay: index * 0.4,
                }}
                className="rounded-[14px] border border-white/[0.08] p-4"
              >
                <span className="font-mono text-[8px] text-white/30">
                  {device}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="relative flex h-[260px] w-[150px] items-center justify-center rounded-[70px] border border-white/10">
            <motion.div
              animate={{ y: [-75, 75, -75] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-px w-[110px] bg-[#7c3aed]"
            />

            <ShieldCheck className="h-8 w-8 text-white/60" />
          </div>

          <div className="space-y-3">
            {["ALLOW", "REVIEW", "DENY"].map((decision) => (
              <div
                key={decision}
                className="rounded-[14px] border border-white/[0.08] p-4 text-center"
              >
                <span className="font-mono text-[8px] text-white/30">
                  {decision}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function MobileFleet() {
  return (
    <Frame label="Mobile Security / Device Fleet">
      <div className="relative flex min-h-[510px] items-center justify-center">
        <div className="relative h-[390px] w-full max-w-[650px]">
          {[0, 1, 2].map((item) => (
            <motion.div
              key={item}
              animate={{ y: [0, item % 2 ? 8 : -8, 0] }}
              transition={{
                ...transition,
                delay: item * 0.5,
              }}
              className="absolute flex h-[230px] w-[120px] flex-col rounded-[26px] border border-white/10 bg-black p-3"
              style={{
                left: `${15 + item * 30}%`,
                top: `${50 + (item % 2) * 40}px`,
              }}
            >
              <div className="mx-auto h-1 w-8 rounded-full bg-white/15" />

              <div className="mt-8 flex flex-1 items-center justify-center">
                <Smartphone className="h-7 w-7 text-white/40" />
              </div>

              <div className="rounded-full border border-white/[0.08] py-2 text-center font-mono text-[6px] text-white/20">
                TRUSTED
              </div>
            </motion.div>
          ))}

          <svg className="absolute inset-0 h-full w-full">
            <path
              d="M150 330 C250 250 400 250 520 330"
              fill="none"
              stroke="rgba(255,255,255,.10)"
              strokeDasharray="5 7"
            />
          </svg>

          <Dot className="bottom-[40px] left-[49%]" />
        </div>
      </div>
    </Frame>
  );
}

function EncryptionVault() {
  return (
    <Frame label="Endpoint Encryption / Vault">
      <div className="relative flex min-h-[510px] items-center justify-center">
        {[310, 235, 165].map((size, index) => (
          <motion.div
            key={size}
            animate={{ rotate: index % 2 ? -360 : 360 }}
            transition={{
              duration: 22 + index * 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full border border-dashed border-white/[0.10]"
            style={{
              width: size,
              height: size,
            }}
          />
        ))}

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={transition}
          className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-[32px] border border-white/10 bg-black"
        >
          <Lock className="h-7 w-7 text-white/60" />

          <span className="mt-3 font-mono text-[7px] tracking-[0.18em] text-white/20">
            ENCRYPTED
          </span>
        </motion.div>

        <Dot className="left-[25%] top-[30%]" />
        <Dot className="right-[23%] bottom-[27%]" delay={0.7} />
      </div>
    </Frame>
  );
}

function VulnerabilityMap() {
  return (
    <Frame label="Exposure Intelligence / Vulnerability Map">
      <div className="grid min-h-[510px] gap-5 p-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="relative rounded-[22px] border border-white/[0.07] bg-white/[0.015]">
          <Network className="absolute left-5 top-5 h-4 w-4 text-white/25" />

          {[
            ["20%", "25%"],
            ["65%", "18%"],
            ["42%", "52%"],
            ["72%", "70%"],
            ["18%", "75%"],
          ].map(([left, top], index) => (
            <motion.div
              key={`${left}-${top}`}
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                ...transition,
                delay: index * 0.4,
              }}
              className="absolute h-8 w-8 rounded-full border border-white/10 bg-black"
              style={{
                left,
                top,
              }}
            >
              <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]" />
            </motion.div>
          ))}
        </div>

        <div className="space-y-3">
          {[
            ["Critical Asset", "Review"],
            ["Remote Fleet", "Prioritize"],
            ["Legacy App", "Plan"],
            ["Remediation", "Verify"],
          ].map(([title, state]) => (
            <div
              key={title}
              className="rounded-[16px] border border-white/[0.07] p-4"
            >
              <p className="text-[10px] text-white/45">{title}</p>
              <p className="mt-2 font-mono text-[7px] text-white/20">
                {state}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function ApplicationRing() {
  const apps = ["APP 01", "APP 02", "APP 03", "APP 04"];

  return (
    <Frame label="Application Control / Trust Ring">
      <div className="relative flex min-h-[510px] items-center justify-center">
        <div className="absolute h-[350px] w-[350px] rounded-full border border-white/[0.08]" />
        <div className="absolute h-[250px] w-[250px] rounded-full border border-white/[0.08]" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[350px] w-[350px]"
        >
          {apps.map((app, index) => {
            const positions = [
              "left-1/2 top-0 -translate-x-1/2",
              "right-0 top-1/2 -translate-y-1/2",
              "bottom-0 left-1/2 -translate-x-1/2",
              "left-0 top-1/2 -translate-y-1/2",
            ];

            return (
              <div
                key={app}
                className={`absolute flex h-16 w-16 items-center justify-center rounded-[18px] border border-white/10 bg-black ${positions[index]}`}
              >
                <span className="font-mono text-[6px] text-white/25">{app}</span>
              </div>
            );
          })}
        </motion.div>

        <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/10 bg-black">
          <Workflow className="h-6 w-6 text-white/50" />

          <span className="mt-3 font-mono text-[7px] text-white/20">
            TRUST
          </span>
        </div>
      </div>
    </Frame>
  );
}

function PreventionShield() {
  return (
    <Frame label="Threat Prevention / Defensive Layers">
      <div className="relative flex min-h-[510px] items-center justify-center">
        <div className="relative flex h-[390px] w-[390px] items-center justify-center">
          {[360, 285, 210].map((size, index) => (
            <motion.div
              key={size}
              animate={{
                opacity: [0.25, 0.6, 0.25],
                scale: [1, 1.025, 1],
              }}
              transition={{
                ...transition,
                delay: index * 0.5,
              }}
              className="absolute rounded-[45%] border border-white/[0.09]"
              style={{
                width: size,
                height: size,
              }}
            />
          ))}

          <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-[38px] border border-white/10 bg-black">
            <ShieldCheck className="h-8 w-8 text-white/60" />
            <span className="mt-3 font-mono text-[7px] text-white/20">
              PREVENT
            </span>
          </div>

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-full w-full"
          >
            <Zap className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 text-white/30" />
            <CircleDot className="absolute bottom-4 left-[15%] h-4 w-4 text-white/30" />
            <Activity className="absolute right-[10%] top-[45%] h-4 w-4 text-white/30" />
          </motion.div>
        </div>
      </div>
    </Frame>
  );
}

export default function EndpointModel({
  model,
}: {
  model: EndpointModelType;
}) {
  switch (model) {
    case "fleet-radar":
      return <FleetRadar />;

    case "xdr-constellation":
      return <XDRConstellation />;

    case "malware-lab":
      return <MalwareLab />;

    case "device-observatory":
      return <DeviceObservatory />;

    case "control-gateway":
      return <ControlGateway />;

    case "mobile-fleet":
      return <MobileFleet />;

    case "encryption-vault":
      return <EncryptionVault />;

    case "vulnerability-map":
      return <VulnerabilityMap />;

    case "application-ring":
      return <ApplicationRing />;

    case "prevention-shield":
      return <PreventionShield />;

    default:
      return <FleetRadar />;
  }
}