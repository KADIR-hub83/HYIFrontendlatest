import MemoryTopologyModel from "./MemoryTopologyModel";

export default function GPUMemorySection() {
  return (
    <section className=" bg-[#070707] py-10">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="flex flex-col ">
          <div className="max-w-[850px] text-center mx-auto">
         

            <h2 className="hyi-h1 hyi-white">
              Keep the accelerator
              <span className="block hyi-blue">fed with data.</span>
            </h2>
          </div>

          <p className="max-w-[670px] hyi-p mx-auto text-center">
            AI workload performance depends on more than raw compute.
            Architecture should consider movement between persistent data,
            host resources, accelerator memory and distributed workers.
          </p>
        </div>

        <div className="mt-6">
          <MemoryTopologyModel />
        </div>
      </div>
    </section>
  );
}