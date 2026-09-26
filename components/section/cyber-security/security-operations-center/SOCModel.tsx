"use client";

import { motion } from "framer-motion";

interface Props {
  model: string;
}

const dots = Array.from({ length: 22 });

function Frame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="relative mx-auto aspect-[1.1/1] w-full max-w-[620px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#070707]">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {dots.map((_, i) => (
        <div
          key={i}
          className="absolute h-[7px] w-[7px] rounded-full bg-[#7c3aed]"
          style={{
            left: `${8 + ((i * 19) % 84)}%`,
            top: `${7 + ((i * 31) % 86)}%`,
            opacity: i % 3 === 0 ? 0.7 : 0.22,
          }}
        />
      ))}

      <div className="absolute left-5 top-5 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#7c3aed]" />
        <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/35">
          {label}
        </span>
      </div>

      <div className="relative flex h-full items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
}

function CommandCenter() {
  return (
    <Frame label="SOC / COMMAND">
      <div className="relative h-[360px] w-[360px]">
        {[320, 240, 160].map((size, i) => (
          <motion.div
            key={size}
            animate={{ rotate: i % 2 ? -360 : 360 }}
            transition={{
              duration: 18 + i * 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-white/15"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
            }}
          />
        ))}

        <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-black">
          <span className="h-3 w-3 rounded-full bg-[#7c3aed] shadow-[0_0_35px_#7c3aed]" />
          <p className="mt-3 text-[11px] font-medium">SOC CORE</p>
          <p className="mt-1 font-mono text-[8px] text-white/30">CONNECTED</p>
        </div>

        {["ID", "EDR", "NET", "APP", "CLD", "INT"].map((item, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const x = 180 + Math.cos(angle) * 145;
          const y = 180 + Math.sin(angle) * 145;

          return (
            <motion.div
              key={item}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3 + i * 0.2, repeat: Infinity }}
              className="absolute flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#090909] font-mono text-[8px] text-white/55"
              style={{ left: x - 24, top: y - 24 }}
            >
              {item}
            </motion.div>
          );
        })}
      </div>
    </Frame>
  );
}

function Radar() {
  return (
    <Frame label="LIVE / RADAR">
      <div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border border-white/15">
        {[25, 50, 75].map((size) => (
          <div
            key={size}
            className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.08]"
            style={{
              width: `${size}%`,
              height: `${size}%`,
              transform: "translate(-50%,-50%)",
            }}
          />
        ))}

        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.08]" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.08]" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-bottom-left"
          style={{
            background:
              "linear-gradient(35deg, rgba(124,58,237,.35), transparent 65%)",
          }}
        />

        {[
          ["22%", "31%"],
          ["69%", "24%"],
          ["58%", "72%"],
          ["31%", "65%"],
        ].map(([left, top], i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1.5, 0.7] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
            className="absolute h-3 w-3 rounded-full bg-[#7c3aed] shadow-[0_0_20px_#7c3aed]"
            style={{ left, top }}
          />
        ))}
      </div>
    </Frame>
  );
}

function DistributedNetwork() {
  const nodes = [
    [50, 15],
    [20, 35],
    [80, 35],
    [15, 70],
    [85, 70],
    [50, 86],
  ];

  return (
    <Frame label="SOC / NETWORK">
      <div className="relative h-[360px] w-full">
        <svg className="absolute inset-0 h-full w-full">
          {nodes.map(([x, y], i) => (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${x}%`}
              y2={`${y}%`}
              stroke="rgba(255,255,255,.14)"
              strokeDasharray="5 7"
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] border border-white/15 bg-black text-center">
          <div>
            <div className="mx-auto h-3 w-3 rounded-full bg-[#7c3aed]" />
            <p className="mt-3 text-[10px]">SOC SERVICE</p>
          </div>
        </div>

        {nodes.map(([x, y], i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5 + i * 0.2, repeat: Infinity }}
            className="absolute flex h-16 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-[#090909] font-mono text-[8px] text-white/45"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            NODE 0{i + 1}
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

function CorrelationEngine() {
  return (
    <Frame label="SIEM / CORRELATION">
      <div className="w-full max-w-[440px] space-y-5">
        {["IDENTITY", "ENDPOINT", "NETWORK", "CLOUD"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ x: -20 }}
            animate={{ x: [0, 12, 0] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity }}
            className="grid grid-cols-[110px_1fr_70px] items-center gap-3"
          >
            <div className="font-mono text-[9px] text-white/40">{item}</div>

            <div className="relative h-px bg-white/15">
              <motion.span
                animate={{ left: ["0%", "90%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#7c3aed]"
              />
            </div>

            <div className="rounded-lg border border-white/10 px-2 py-2 text-center font-mono text-[8px] text-white/40">
              EVENT
            </div>
          </motion.div>
        ))}

        <div className="mx-auto mt-10 w-[180px] rounded-2xl border border-white/15 bg-black p-5 text-center">
          <div className="mx-auto h-3 w-3 rounded-full bg-[#7c3aed]" />
          <p className="mt-3 text-[10px]">CORRELATION</p>
          <p className="mt-1 font-mono text-[8px] text-white/25">
            SIGNAL CREATED
          </p>
        </div>
      </div>
    </Frame>
  );
}

function LogStream() {
  return (
    <Frame label="LOG / PIPELINE">
      <div className="relative w-full max-w-[460px]">
        {["SYS", "ID", "NET", "APP", "CLD"].map((item, i) => (
          <motion.div
            key={item}
            animate={{ x: [0, 260], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              delay: i * 0.55,
              repeat: Infinity,
            }}
            className="mb-5 flex h-10 w-24 items-center justify-center rounded-xl border border-white/10 bg-[#090909] font-mono text-[8px] text-white/45"
          >
            {item} LOG
          </motion.div>
        ))}

        <div className="absolute right-0 top-0 flex h-full w-32 items-center justify-center rounded-[26px] border border-white/15 bg-black">
          <div className="text-center">
            <div className="mx-auto h-4 w-4 rounded-full bg-[#7c3aed]" />
            <p className="mt-3 text-[9px]">LOG INDEX</p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function ThreatGrid() {
  return (
    <Frame label="THREAT / GRID">
      <div className="grid w-full max-w-[390px] grid-cols-6 gap-2">
        {Array.from({ length: 36 }).map((_, i) => (
          <motion.div
            key={i}
            animate={
              [8, 15, 22, 27].includes(i)
                ? { opacity: [0.2, 1, 0.2], scale: [1, 1.12, 1] }
                : {}
            }
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.03 }}
            className={`aspect-square rounded-lg border ${
              [8, 15, 22, 27].includes(i)
                ? "border-[#7c3aed]/50 bg-[#7c3aed]/20"
                : "border-white/[0.08] bg-white/[0.02]"
            }`}
          />
        ))}
      </div>
    </Frame>
  );
}

function AlertMatrix() {
  return (
    <Frame label="ALERT / MATRIX">
      <div className="w-full max-w-[430px] space-y-3">
        {[
          ["A-1024", "REVIEW"],
          ["A-1025", "NEW"],
          ["A-1026", "ENRICHED"],
          ["A-1027", "INVESTIGATE"],
          ["A-1028", "QUEUED"],
        ].map(([id, state], i) => (
          <motion.div
            key={id}
            animate={{ x: i === 2 ? [0, 7, 0] : 0 }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="grid grid-cols-[70px_1fr_90px] items-center rounded-xl border border-white/[0.08] bg-black/50 p-4"
          >
            <span className="font-mono text-[8px] text-white/30">{id}</span>

            <div className="h-1 rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-white/40"
                style={{ width: `${35 + i * 12}%` }}
              />
            </div>

            <span className="text-right font-mono text-[7px] text-white/35">
              {state}
            </span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

function InvestigationTimeline() {
  return (
    <Frame label="CASE / TIMELINE">
      <div className="relative w-full max-w-[430px]">
        <div className="absolute bottom-4 left-[15px] top-4 w-px bg-white/15" />

        {[
          ["08:42", "Authentication anomaly"],
          ["08:47", "New device observed"],
          ["08:53", "Privilege activity"],
          ["09:04", "Network connection"],
          ["09:12", "Evidence correlated"],
        ].map(([time, text], i) => (
          <motion.div
            key={time}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{
              duration: 4,
              delay: i * 0.45,
              repeat: Infinity,
            }}
            className="relative mb-6 grid grid-cols-[30px_55px_1fr] items-center gap-3"
          >
            <div className="z-10 h-3 w-3 rounded-full border border-[#7c3aed] bg-black" />
            <span className="font-mono text-[8px] text-white/25">{time}</span>
            <div className="rounded-xl border border-white/[0.08] bg-[#090909] p-3 text-[9px] text-white/50">
              {text}
            </div>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

function ThreatGlobe() {
  return (
    <Frame label="THREAT / INTEL">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="relative h-[330px] w-[330px] rounded-full border border-white/15"
      >
        {[-60, -30, 0, 30, 60].map((rotate) => (
          <div
            key={rotate}
            className="absolute inset-5 rounded-[50%] border border-white/[0.08]"
            style={{ transform: `rotateY(${rotate}deg)` }}
          />
        ))}

        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.08]" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.08]" />

        {[
          [25, 32],
          [62, 23],
          [74, 60],
          [38, 72],
        ].map(([x, y], i) => (
          <motion.span
            key={i}
            animate={{ scale: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
            className="absolute h-3 w-3 rounded-full bg-[#7c3aed]"
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        ))}
      </motion.div>
    </Frame>
  );
}

function AnalyticsWave() {
  const heights = [28, 42, 33, 62, 48, 76, 55, 86, 61, 74, 49, 67];

  return (
    <Frame label="SECURITY / ANALYTICS">
      <div className="flex h-[280px] w-full max-w-[440px] items-end gap-3">
        {heights.map((height, i) => (
          <motion.div
            key={i}
            animate={{ height: [`${height}%`, `${Math.min(height + 15, 96)}%`, `${height}%`] }}
            transition={{
              duration: 2.5 + i * 0.12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex-1 rounded-t-md bg-white/15"
          >
            {i === 7 && (
              <span className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#7c3aed]" />
            )}
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

function AutomationFlow() {
  return (
    <Frame label="SOAR / WORKFLOW">
      <div className="w-full max-w-[440px]">
        {["TRIGGER", "ENRICH", "DECISION", "APPROVAL", "ACTION"].map(
          (item, i) => (
            <div key={item} className="flex flex-col items-center">
              <motion.div
                animate={{ borderColor: ["rgba(255,255,255,.1)", "rgba(124,58,237,.6)", "rgba(255,255,255,.1)"] }}
                transition={{
                  duration: 2,
                  delay: i * 0.35,
                  repeat: Infinity,
                }}
                className="w-full rounded-xl border border-white/10 bg-[#090909] px-5 py-3 text-center font-mono text-[9px] text-white/50"
              >
                {item}
              </motion.div>

              {i < 4 && (
                <div className="relative h-6 w-px bg-white/15">
                  <motion.span
                    animate={{ top: ["0%", "100%"] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#7c3aed]"
                  />
                </div>
              )}
            </div>
          ),
        )}
      </div>
    </Frame>
  );
}

function ReportConsole() {
  return (
    <Frame label="SOC / REPORTING">
      <div className="w-full max-w-[440px] rounded-[24px] border border-white/10 bg-black/70 p-5">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div>
            <p className="text-[10px]">Security Operations</p>
            <p className="mt-1 font-mono text-[7px] text-white/25">
              REPORTING CONSOLE
            </p>
          </div>

          <span className="h-2 w-2 rounded-full bg-[#7c3aed]" />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {["MON", "ALERT", "CASE"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/[0.08] p-3"
            >
              <p className="font-mono text-[7px] text-white/25">{item}</p>
              <div className="mt-4 h-2 w-10 rounded-full bg-white/30" />
            </div>
          ))}
        </div>

        <div className="mt-5 flex h-32 items-end gap-2 border-b border-white/10">
          {[45, 68, 38, 76, 56, 84, 64, 72].map((height, i) => (
            <motion.div
              key={i}
              animate={{ height: [`${height}%`, `${Math.min(height + 10, 95)}%`, `${height}%`] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
              className="flex-1 rounded-t bg-white/15"
            />
          ))}
        </div>
      </div>
    </Frame>
  );
}

export default function SOCModel({ model }: Props) {
  switch (model) {
    case "radar":
      return <Radar />;
    case "distributed-network":
      return <DistributedNetwork />;
    case "correlation-engine":
      return <CorrelationEngine />;
    case "log-stream":
      return <LogStream />;
    case "threat-grid":
      return <ThreatGrid />;
    case "alert-matrix":
      return <AlertMatrix />;
    case "investigation-timeline":
      return <InvestigationTimeline />;
    case "threat-globe":
      return <ThreatGlobe />;
    case "analytics-wave":
      return <AnalyticsWave />;
    case "automation-flow":
      return <AutomationFlow />;
    case "report-console":
      return <ReportConsole />;
    default:
      return <CommandCenter />;
  }
}