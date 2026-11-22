import TrainingClusterModel from "./TrainingClusterModel";

export default function TrainingCloudSection() {
  return (
    <section className=" bg-[#070707] py-10">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
         

          <h2 className="hyi-h1 hyi-white">
            Turn many GPUs into
            <span className="hyi-blue"> one training system.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[700px] hyi-p">
            Large model training can distribute computation across multiple
            workers. The surrounding cloud architecture must coordinate
            compute, communication, data access and workload state.
          </p>
        </div>

        <div className="mt-6">
          <TrainingClusterModel />
        </div>
      </div>
    </section>
  );
}