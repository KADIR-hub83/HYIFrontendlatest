import Link from "next/link";

const NAV = [
  { t: "What we do", h: "/services" },
  { t: "Who we are", h: "/about" },
  { t: "Insights", h: "/blogs" },
  { t: "Careers", h: "/career" },
  { t: "Newsroom", h: "/article" },
];

export function ContactHeader() {
  return (
    <header className="hc-header">
      <div className="hc-header-in">
        <Link href="/" className="hc-logo">HYI</Link>
        <nav className="hc-nav">
          {NAV.map((n) => (
            <Link key={n.t} href={n.h}>{n.t}</Link>
          ))}
        </nav>
        <Link href="/contact-us/whats-on-your-mind" className="hc-header-cta">Contact us</Link>
      </div>
    </header>
  );
}

const COLS = [
  { h: "Company", l: [["About", "/about"], ["Careers", "/career"], ["Blogs", "/blogs"]] },
  { h: "Solutions", l: [["AI Training", "/ai-training"], ["Cyber Security", "/cyber-security"], ["Case Studies", "/case-studies"]] },
  { h: "Contact", l: [["Request for Services", "/contact-us/whats-on-your-mind/global-contact-us"], ["Media", "/contact-us/whats-on-your-mind/media-form"], ["Help", "/help"]] },
];

export function ContactFooter() {
  return (
    <footer className="hc-site-footer">
      <div className="hc-footer-in">
        <div>
          <div className="hc-logo">HYI</div>
          <p>Connecting people, data and intelligence across the globe.</p>
        </div>
        {COLS.map((c) => (
          <div key={c.h}>
            <h5>{c.h}</h5>
            {c.l.map(([t, h]) => (
              <Link key={t} href={h}>{t}</Link>
            ))}
          </div>
        ))}
      </div>
      <div className="hc-footer-bottom">©2026 Your Company Limited. All rights reserved.</div>
    </footer>
  );
}