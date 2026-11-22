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
    <section className="bg-[#030303] ">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
           

            <h2 className="mt-2 hyi-h1 hyi-white">
              Schedule intelligence,
              <span className="block hyi-blue">not just hardware.</span>
            </h2>

            <p className="mt-2 hyi-p">
              GPU capacity becomes significantly more useful when workloads can
              be placed according to their compute profile, runtime,
              dependencies, topology and operational requirements.
            </p>

            <div className="mt-5 space-y-3">
              {stack.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-[18px] border border-white/[0.06] bg-[#080808] p-5"
                >
                  <Icon size={14} className="mt-1 shrink-0 hyi-blue-icon" />

                  <div>
                    <h3 className="hyi-h3 hyi-white">{title}</h3>
                    <p className="hyi-p">
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