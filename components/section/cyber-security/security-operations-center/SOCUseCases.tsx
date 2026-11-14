import type { SOCService } from "./socServices";

export default function SOCUseCases({ service }: { service: SOCService }) {
  return (
    <section className=" bg-[#030303]">
      <div className="mx-auto max-w-[1450px] px-5  md:px-8 lg:px-12 ">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
         

            <h2 className="hyi-h1 hyi-white font-bold">
              Security operations for complex environments.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {service.useCases.map((item, index) => (
              <article
                key={item.title}
                className="relative  overflow-hidden rounded-[22px] border border-white/[0.08] bg-black p-6"
              >
                <span className="absolute -right-12 -top-12 h-30 w-30 rounded-full bg-[#7c3aed]/40" />

            

                <h3 className="hyi-h3 hyi-white ">
                  {item.title}
                </h3>

                <p className="mt-2 hyi-p">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}