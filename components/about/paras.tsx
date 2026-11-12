import Reveal from "./Reveal";

/** Paragraph list with blur-in reveal. short=true highlights one-liners. */
export default function Paras({
  items,
  short = false,
  className = "",
}: {
  items: string[];
  short?: boolean;
  className?: string;
}) {
  return (
    <div className={`space-y-5 ${className}`}>
      {items.map((t, i) => (
        <Reveal key={i} from="blur" delay={i * 60}>
          <p className={short && t.length < 70 ? "hyi-h3 hyi-blue" : "hyi-p"}>{t}</p>
        </Reveal>
      ))}
    </div>
  );
}