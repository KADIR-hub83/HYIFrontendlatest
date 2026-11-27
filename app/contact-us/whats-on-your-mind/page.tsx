import Link from "next/link";
import "../contact.css";
import "../contact-page.css";
import GlobalPresence from "../GlobalPresence";
import heroGif from "@/assets/landingPage/images/Hero-gif-03.gif";
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const CARDS = [
  {
    title: "Request for Services",
    desc: "Tell us about your project, talent or technology needs and we’ll connect you with the right team.",
    href: "/contact-us/whats-on-your-mind/global-contact-us",
    d: "M4 21V4h12v17M16 9h4v12M8 8h4M8 12h4M8 16h4",
  },
  {
    title: "Investor information",
    desc: "Financial reports, announcements and shareholder resources in one place.",
    href: "/investor",
    d: "M3 4h18v14H3zM6 14l4-4 3 3 5-6",
  },
  {
    title: "Media contacts",
    desc: "Press enquiries, interviews and regional communication leads.",
    href: "/contact-us/whats-on-your-mind/media-form",
    d: "M5 12a7 7 0 0 1 7-7M5 12a7 7 0 0 0 7 7M12 9l5 5-3 3-5-5z",
  },
];

// ⚠️ apne asli routes se badal lena
const MORE = [
  { t: "Analyst relations", h: "/investor" },
  { t: "CSR", h: "/about" },
  { t: "Partnerships", h: "/about" },
  { t: "Website feedback", h: "/help" },
];

// ---- FAKE DATA ----
const QUICK = [
  { label: "Call us", value: "+91 755 555 0117", href: "tel:+917555550117", d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" },
  { label: "Email us", value: "contact@example.com", href: "mailto:contact@example.com", d: "M3 6h18v12H3zM3 7l9 6 9-6" },
  { label: "Support hours", value: "Mon – Fri, 9:00 – 18:00 IST", href: undefined, d: "M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" },
];

export default function WhatsOnYourMind() {
  return (
    <main className="hc-contact py-20">
      <Header />

      <div className="hc-container">
        {/* ---------- Hero ---------- */}
        <section className="hc-hero">
          <div className="">
            <span className="hc-eyebrow hyi-blue">CONTACT US</span>
            <p className="hyi-h1 hyi-white">What’s on your <span className="hyi-blue"> mind?</span></p>
            <p className="hyi-p mt-2 w-[80%]">
              We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.
            </p>
          </div>

          <div className="hc-hero-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hc-hero-map" src="/Hero-map.png" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hc-hero-gif" src={(heroGif as any).src ?? (heroGif as any)} alt="Global connections" />
          </div>
        </section>

        {/* ---------- Main options ---------- */}
        <section className="hc-cards">
          {CARDS.map((c) => (
            <Link key={c.title} href={c.href} className="hc-card">
              <Icon d={c.d} />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <span className="hc-card-go">
                Get in touch <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </section>

        {/* ---------- Quick contact ---------- */}
        {/* <section className="hc-quick">
          {QUICK.map((q) => {
            const inner = (
              <>
                <span className="hc-quick-ico">
                  <Icon d={q.d} />
                </span>
                <span>
                  <small>{q.label}</small>
                  <strong>{q.value}</strong>
                </span>
              </>
            );
            return q.href ? (
              <a key={q.label} href={q.href} className="hc-quick-item">{inner}</a>
            ) : (
              <div key={q.label} className="hc-quick-item">{inner}</div>
            );
          })}
        </section> */}

        {/* ---------- Looking for something else ---------- */}
        {/* <section className="hc-else">
          <h3>Looking for something else?</h3>
          <div className="hc-else-links">
            {MORE.map((m) => (
              <Link key={m.t} href={m.h}>
                {m.t} <span className="hc-arrow">→</span>
              </Link>
            ))}
          </div>
        </section> */}
      </div>

      {/* ---------- Global presence map ---------- */}
      <div className="lg:px-20 md:px-10 px-5 pb-16">
        <GlobalPresence />
      </div>

      <Footer />
    </main>
  );
}