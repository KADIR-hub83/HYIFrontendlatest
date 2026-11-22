import { Archive, Database, Layers3 } from "lucide-react";
import StorageFabricModel from "./StorageFabricModel";

export default function StorageFabricSection() {
  return (
    <section className="bg-[#030303] ">
      <div className="mx-auto grid max-w-[1350px] gap-12 px-5 md:px-10 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
    

          <h2 className="hyi-h1 hyi-white">
            Feed compute
            <span className="block hyi-blue">without starving it.</span>
          </h2>

          <p className="mt-2 hyi-p">
            Large AI workloads can create demanding data-access patterns.
            Storage architecture must account for datasets, checkpoints,
            artifacts, metadata and production model access.
          </p>

          <div className="mt-5 space-y-3">
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
                <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>
                <p className=" hyi-p">
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