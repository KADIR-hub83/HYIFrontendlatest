import { Archive, Database, Layers3 } from "lucide-react";
import StorageFabricModel from "./StorageFabricModel";

export default function StorageFabricSection() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-10 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            04 / AI DATA FABRIC
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Feed compute
            <span className="block text-[#7653df]">without starving it.</span>
          </h2>

          <p className="mt-7 text-[12px] leading-7 text-white/[0.45]">
            Large AI workloads can create demanding data-access patterns.
            Storage architecture must account for datasets, checkpoints,
            artifacts, metadata and production model access.
          </p>

          <div className="mt-9 space-y-3">
            {[
              {
                Icon: Database,
                title: "Training datasets",
                text: "High-volume datasets organized for repeated model access.",
              },
              {
                Icon: Layers3,
                title: "Model artifacts",
                text: "Versioned model outputs, checkpoints and deployment assets.",
              },
              {
                Icon: Archive,
                title: "Lifecycle storage",
                text: "Move data through appropriate storage tiers as access patterns change.",
              },
            ].map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[20px] border border-white/[0.06] bg-[#080808] p-5"
              >
                <Icon size={14} className="text-[#9878ef]" />
                <h3 className="mt-4 text-sm">{title}</h3>
                <p className="mt-2 text-[10px] leading-5 text-white/[0.38]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <StorageFabricModel />
      </div>
    </section>
  );
}