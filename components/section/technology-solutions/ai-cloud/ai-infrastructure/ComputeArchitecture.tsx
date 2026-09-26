import {
  BrainCircuit,
  Boxes,
  Cpu,
  GitBranch,
  Layers3,
  Network,
} from "lucide-react";
import WorkloadSchedulerModel from "./WorkloadSchedulerModel";

const architecture = [
  {
    Icon: BrainCircuit,
    title: "AI workloads",
    text: "Training, fine-tuning, inference, experimentation and model-serving requirements establish the demand profile.",
  },
  {
    Icon: GitBranch,
    title: "Scheduler",
    text: "Workloads are evaluated against resource requirements, availability, topology and operational policy.",
  },
  {
    Icon: Boxes,
    title: "Compute pools",
    text: "Infrastructure is organized into logical capacity pools rather than managed as disconnected machines.",
  },
  {
    Icon: Cpu,
    title: "Accelerators",
    text: "Specialized compute is aligned with workloads that can effectively use its performance characteristics.",
  },
  {
    Icon: Network,
    title: "Interconnect",
    text: "Network design supports communication patterns between distributed workers, services and data systems.",
  },
  {
    Icon: Layers3,
    title: "Platform layer",
    text: "Shared platform capabilities make infrastructure consumable by engineering, data and AI teams.",
  },
];

export default function ComputeArchitecture() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              02 / COMPUTE ARCHITECTURE
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              Put every workload
              <span className="block text-[#7653df]">where it belongs.</span>
            </h2>

            <p className="mt-7 max-w-[520px] text-[12px] leading-7 text-white/[0.45]">
              AI infrastructure should allocate resources according to workload
              behavior instead of forcing every model into the same compute
              pattern.
            </p>

            <div className="mt-10 space-y-3">
              {architecture.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-[18px] border border-white/[0.06] bg-[#080808] p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#7046e6]/20 bg-[#7046e6]/[0.08]">
                    <Icon size={13} className="text-[#a98cf4]" />
                  </div>

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

          <WorkloadSchedulerModel />
        </div>
      </div>
    </section>
  );
}