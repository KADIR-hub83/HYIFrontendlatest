import {
  BellRing,
  BrainCircuit,
  ChartNoAxesCombined,
  CircleGauge,
  RadioTower,
  ScanSearch,
} from "lucide-react";

const capabilities = [
  {
    Icon: RadioTower,
    title: "Streaming Analytics",
    text: "Continuously analyze event streams instead of waiting for scheduled batch processing.",
  },
  {
    Icon: ScanSearch,
    title: "Anomaly Detection",
    text: "Identify unusual patterns and deviations while operational events are still unfolding.",
  },
  {
    Icon: CircleGauge,
    title: "Live KPIs",
    text: "Keep operational metrics continuously updated as underlying business activity changes.",
  },
  {
    Icon: BrainCircuit,
    title: "Real-Time Scoring",
    text: "Apply analytical or machine-learning models to incoming events and transactions.",
  },
  {
    Icon: BellRing,
    title: "Event-Driven Alerts",
    text: "Trigger notifications or downstream workflows when defined conditions are detected.",
  },
  {
    Icon: ChartNoAxesCombined,
    title: "Operational Intelligence",
    text: "Give teams a continuously updated view of customers, systems and business operations.",
  },
];

export default function RealTimeIntelligence() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#e8def3]/40">
              CAPABILITIES
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Intelligence that
              <span className="block text-white/35">
                never stops.
              </span>
            </h2>

            <p className="mt-7 max-w-[450px] text-[11px] leading-7 text-white/45">
              Real-time systems combine continuous ingestion, stream
              processing, analytical logic and operational delivery into a
              continuously running intelligence layer.
            </p>
          </div>

          <div className="grid border-l border-t border-white/[0.07] md:grid-cols-2">
            {capabilities.map(({ Icon, title, text }, index) => (
              <div
                key={title}
                className="min-h-[250px] border-b border-r border-white/[0.07] p-7"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={17}
                    strokeWidth={1}
                    className="text-[#e7dcf2]/45"
                  />

                  <span className="font-mono text-[5px] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-12 text-lg font-medium">
                  {title}
                </h3>

                <p className="mt-5 max-w-[320px] text-[10px] leading-6 text-white/40">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}