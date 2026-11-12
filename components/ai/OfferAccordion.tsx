"use client";
import { useState } from "react";

const badge = {
  display: "flex",
  width: 48,
  height: 48,
  alignItems: "center",
  justifyContent: "center",
  fontSize: 22,
  borderRadius: 14,
} as const;

/** Neumorphic accordion — click a row to expand it. */
export default function OfferAccordion({ items }: { items: { t: string; d: string; icon: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-4">
      {items.map((o, i) => {
        const on = open === i;
        return (
          <div key={o.t} className={`${on ? "hyi-clay-soft" : "hyi-neu"} overflow-hidden transition-all duration-500`}>
            <button
              onClick={() => setOpen(on ? -1 : i)}
              aria-expanded={on}
              className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
            >
              <span className="hyi-skeu shrink-0" style={badge}>{o.icon}</span>
              <span className="hyi-h3 hyi-white flex-1">{o.t}</span>
              <span className={`hyi-blue text-3xl leading-none transition-transform duration-300 ${on ? "rotate-45" : ""}`}>+</span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-out"
              style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="hyi-p px-5 pb-6 sm:px-6 sm:pl-[5.5rem]">{o.d}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}