import {
  Boxes,
  BrainCircuit,
  Cpu,
  Database,
  Network,
  ShieldCheck,
} from "lucide-react";
import GPUScheduler from "./GPUScheduler";

const stack = [
  {
    Icon: BrainCircuit,
    title: "Workload request",
    text: "Training and inference workloads declare compute, memory and runtime requirements.",
  },
  {
    Icon: Boxes,
    title: "Orchestration",
    text: "The platform evaluates placement against policy, topology and available capacity.",
  },
  {
    Icon: Cpu,
    title: "GPU capacity",
    text: "Accelerator resources are allocated from the appropriate logical compute pool.",
  },
  {
    Icon: Network,
    title: "Fabric",
    text: "Distributed workers communicate with the services and data systems required by the workload.",
  },
  {
    Icon: Database,
    title: "Data access",
    text: "Datasets, checkpoints and model artifacts remain accessible throughout the workload lifecycle.",
  },
  {
    Icon: ShieldCheck,
    title: "Control plane",
    text: "Identity, policy, observability and infrastructure controls remain part of the execution environment.",
  },
];

export default function GPUArchitecture() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              02 / GPU ARCHITECTURE
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              Schedule intelligence,
              <span className="block text-[#7653df]">not just hardware.</span>
            </h2>

            <p className="mt-7 text-[12px] leading-7 text-white/[0.45]">
              GPU capacity becomes significantly more useful when workloads can
              be placed according to their compute profile, runtime,
              dependencies, topology and operational requirements.
            </p>

            <div className="mt-9 space-y-3">
              {stack.map(({ Icon, title, text }) => (
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

          <GPUScheduler />
        </div>
      </div>
    </section>
  );
}