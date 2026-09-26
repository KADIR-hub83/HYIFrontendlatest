import {
  Boxes,
  Cpu,
  Database,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import GPUClusterModel from "./GPUClusterModel";

const layers = [
  {
    Icon: Cpu,
    title: "Accelerated Compute",
    text: "Create compute pools designed around the performance profile of training, inference, experimentation and data-intensive AI workloads.",
  },
  {
    Icon: Network,
    title: "Network Fabric",
    text: "Connect distributed compute and data services through infrastructure designed for predictable communication between AI workload components.",
  },
  {
    Icon: Database,
    title: "AI Data Layer",
    text: "Organize high-throughput storage, model artifacts, datasets and checkpoints around the access patterns created by AI systems.",
  },
  {
    Icon: Boxes,
    title: "Orchestration",
    text: "Coordinate workload placement, capacity allocation, scheduling and lifecycle operations across heterogeneous infrastructure.",
  },
  {
    Icon: ShieldCheck,
    title: "Governance",
    text: "Integrate identity, isolation, policy and security controls into the infrastructure rather than attaching them after deployment.",
  },
  {
    Icon: Workflow,
    title: "Operations",
    text: "Observe infrastructure health, utilization, bottlenecks and workload behavior as one operational system.",
  },
];

export default function InfrastructureOverview() {
  return (
    <section
      id="infrastructure-overview"
      className="relative border-y border-white/[0.06] bg-[#050505] py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="max-w-[850px]">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            01 / INFRASTRUCTURE SYSTEM
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            AI needs more than
            <span className="block text-[#7653df]">powerful hardware.</span>
          </h2>

          <p className="mt-7 max-w-[700px] text-[13px] leading-7 text-white/[0.48]">
            Effective AI infrastructure is a coordinated system. Compute,
            networking, storage, orchestration, security and observability must
            work together around the behavior of AI workloads.
          </p>
        </div>

        <div className="mt-16">
          <GPUClusterModel />
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {layers.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="rounded-[25px] border border-white/[0.07] bg-[#080808] p-7"
            >
              <Icon size={15} className="text-[#a98cf4]" />
              <h3 className="mt-8 text-xl">{title}</h3>
              <p className="mt-4 text-[11px] leading-6 text-white/[0.42]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}