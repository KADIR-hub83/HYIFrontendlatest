import NetworkTopologyModel from "./NetworkTopologyModel";

export default function NetworkFabricSection() {
  return (
    <section className="bg-[#070707] py-10">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="flex flex-col text-center mx-auto">
          <div>

           

            <h2 className="hyi-h1 hyi-white">
              Compute is only as fast
              <span className="block hyi-blue">as its connections.</span>
            </h2>
          </div>

          <p className="max-w-[670px]  mx-auto hyi-p">
            Distributed AI systems exchange data between workers, storage,
            services and inference endpoints. Network topology therefore
            becomes part of workload performance and reliability.
          </p>
        </div>

        <div className="mt-6">
          <NetworkTopologyModel />
        </div>
      </div>
    </section>
  );
}