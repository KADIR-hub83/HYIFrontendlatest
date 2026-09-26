import {
  BrainCircuit,
  Boxes,
  Cpu,
  Network,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

import RequestRouterModel from "./RequestRouterModel";

const architecture = [
  {
    Icon: RadioTower,
    title: "Inference request",
    text: "Applications send requests through stable service endpoints rather than coupling directly to individual model instances.",
  },
  {
    Icon: Network,
    title: "Traffic routing",
    text: "The serving layer routes requests according to model identity, endpoint health and available runtime capacity.",
  },
  {
    Icon: Boxes,
    title: "Model replicas",
    text: "Multiple serving replicas can provide parallel capacity and reduce dependence on a single runtime instance.",
  },
  {
    Icon: Cpu,
    title: "Compute runtime",
    text: "Each replica executes within an environment matched to model compute, memory and acceleration requirements.",
  },
  {
    Icon: BrainCircuit,
    title: "Model execution",
    text: "Validated model artifacts are loaded into the serving runtime and exposed through controlled inference interfaces.",
  },
  {
    Icon: ShieldCheck,
    title: "Control plane",
    text: "Deployment policy, identity, observability and lifecycle controls remain independent from application request traffic.",
  },
];

export default function ServingArchitecture() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.62fr_1.38fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              02 / SERVING ARCHITECTURE
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              Separate the model
              <span className="block text-[#7046e6]">
                from the application.
              </span>
            </h2>

            <p className="mt-7 text-[12px] leading-7 text-white/[0.45]">
              A serving layer gives applications a stable interface while
              model replicas, runtime capacity and infrastructure can evolve
              behind it.
            </p>

            <div className="mt-9 space-y-3">
              {architecture.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-[18px] border border-white/[0.06] bg-[#080808] p-5"
                >
                  <Icon size={14} className="mt-1 shrink-0 text-[#9878ef]" />

                  <div>
                    <h3 className="text-sm">{title}</h3>
                    <p className="mt-2 text-[10px] leading-5 text-white/[0.38]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <RequestRouterModel />
        </div>
      </div>
    </section>
  );
}