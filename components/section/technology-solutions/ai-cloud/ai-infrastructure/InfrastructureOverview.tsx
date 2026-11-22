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
      className="relative  bg-[#050505] py-10 "
    >
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="max-w-[850px] text-center mx-auto">
      

          <h2 className="hyi-white hyi-h1 ">
            AI needs more than
            <span className="block hyi-blue">powerful hardware.</span>
          </h2>

          <p className="mt-2 max-w-[700px] hyi-p mx-auto">
            Effective AI infrastructure is a coordinated system. Compute,
            networking, storage, orchestration, security and observability must
            work together around the behavior of AI workloads.
          </p>
        </div>

        <div className="mt-6">
          <GPUClusterModel />
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {layers.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="rounded-[25px] border border-white/[0.07] bg-[#080808] p-7"
            >
              <Icon size={15} className="hyi-blue-icon" />
              <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>
              <p className="mt-2 hyi-p">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}