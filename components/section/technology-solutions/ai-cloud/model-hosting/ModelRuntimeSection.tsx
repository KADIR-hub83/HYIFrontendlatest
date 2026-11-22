import RuntimeClusterModel from "./RuntimeClusterModel";

export default function ModelRuntimeSection() {
  return (
    <section className=" bg-[#000000] ">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[930px] text-center">
          

          <h2 className="hyi-h1 hyi-white">
            Give every model
            <span className="hyi-blue"> the right runtime.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[730px] hyi-p">
            Different models can require different memory profiles,
            accelerators, libraries and serving behavior. Hosting architecture
            should keep these runtime requirements isolated from the
            applications consuming the model.
          </p>
        </div>

        <div className="mt-5">
          <RuntimeClusterModel />
        </div>
      </div>
    </section>
  );
}