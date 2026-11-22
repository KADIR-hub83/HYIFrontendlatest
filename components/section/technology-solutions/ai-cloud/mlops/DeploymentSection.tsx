import DeploymentTopology from "./DeploymentTopology";

export default function DeploymentSection() {
  return (
    <section className=" bg-[#070707]">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[950px] text-center">
     

          <h2 className="hyi-h1 hyi-white">
            Release models
            <span className="hyi-blue"> with control.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[740px] hyi-p">
            Separate model release from application release through staged
            environments, validation gates and controlled production traffic
            transitions.
          </p>
        </div>

        <div className="mt-5">
          <DeploymentTopology />
        </div>
      </div>
    </section>
  );
}