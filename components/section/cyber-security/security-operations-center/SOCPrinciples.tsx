import { CircleDot } from "lucide-react";
import type { SOCService } from "./socServices";

export default function SOCPrinciples({
  service,
}: {
  service: SOCService;
}) {
  return (
    <section className="border-b border-white/[0.07] bg-black">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12 py-10">
        <div className="mx-auto max-w-3xl text-center">
   

          <h2 className=" hyi-h1 hyi-white ">
            Built around clarity, context and control
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          {service.principles.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-5 border-t border-white/[0.08] py-7 md:grid-cols-[60px_0.8fr_1.2fr]"
            >
              <div className="flex items-start">
                <CircleDot className="h-4 w-4 text-white" />
              </div>

              <h3 className="hyi-h3 hyi-white">
                {item.title}
              </h3>

              <p className="hyi-p ">
                {item.description}
              </p>
            </div>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}