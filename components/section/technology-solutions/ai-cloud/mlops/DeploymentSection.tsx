import DeploymentTopology from "./DeploymentTopology";

export default function DeploymentSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[950px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            03 / CONTINUOUS DEPLOYMENT
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Release models
            <span className="text-[#7046e6]"> with control.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[740px] text-[12px] leading-7 text-white/[0.44]">
            Separate model release from application release through staged
            environments, validation gates and controlled production traffic
            transitions.
          </p>
        </div>

        <div className="mt-16">
          <DeploymentTopology />
        </div>
      </div>
    </section>
  );
}