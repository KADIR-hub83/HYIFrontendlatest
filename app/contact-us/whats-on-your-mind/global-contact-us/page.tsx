"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../contact.css";

const REGIONS = ["North America", "Latin America", "Europe", "UK & Ireland", "India", "Asia Pacific", "Australia & New Zealand", "Middle East & Africa", "Japan"];
const INDUSTRIES = ["Banking & Financial Services", "Healthcare", "Retail", "Manufacturing", "Telecom", "Travel & Hospitality", "Education", "Other"];

export default function RequestForServices() {
  const router = useRouter();
  const [f, setF] = useState({ first: "", last: "", email: "", org: "", region: "", industry: "", msg: "", consent: false, marketing: false });
  const [sent, setSent] = useState(false);
  const set = (k: string, v: any) => setF((p) => ({ ...p, [k]: v }));

  const valid =
    f.first && f.last && /\S+@\S+\.\S+/.test(f.email) && f.org && f.region && f.industry && f.msg && f.consent;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    console.log("Request for services:", f); // yaha apni backend API call lagao
    setSent(true);
  };

  return (
    <div className="hc-formpage">
      <div className="hc-form-left">
        <button className="hc-back" onClick={() => router.back()}>‹ BACK</button>
        <div className="hc-form-title">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M4 21V4h12v17M16 9h4v12M8 8h4M8 12h4M8 16h4" /></svg>
          REQUEST FOR SERVICES
        </div>
        <p className="hc-form-intro">
          As enterprises embrace AI at scale, we're helping them transform data into intelligence, insights into action, and potential into growth. Tell us a bit more about yourself, so we can explore what's possible together.
        </p>

        <form className="hc-form" onSubmit={submit}>
          <div className="hc-field"><label>First name*</label><input value={f.first} onChange={(e) => set("first", e.target.value)} /></div>
          <div className="hc-field"><label>Last name*</label><input value={f.last} onChange={(e) => set("last", e.target.value)} /></div>
          <div className="hc-field"><label>Email*</label><input type="email" value={f.email} onChange={(e) => set("email", e.target.value)} /></div>
          <div className="hc-field"><label>Organization*</label><input value={f.org} onChange={(e) => set("org", e.target.value)} /></div>
          <div className="hc-field full">
            <label>Region*</label>
            <select value={f.region} onChange={(e) => set("region", e.target.value)}>
              <option value="" disabled></option>
              {REGIONS.map((r) => <option key={r}>{r}</option>)}
            </select>
          </div>
          <div className="hc-field full">
            <label>Industry*</label>
            <select value={f.industry} onChange={(e) => set("industry", e.target.value)}>
              <option value="" disabled></option>
              {INDUSTRIES.map((r) => <option key={r}>{r}</option>)}
            </select>
          </div>
          <div className="hc-field full">
            <label>How can we help you?*</label>
            <textarea maxLength={1500} value={f.msg} onChange={(e) => set("msg", e.target.value)} />
            <div className="hc-count">({f.msg.length}/1500)</div>
          </div>

          <label className="hc-check">
            <input type="checkbox" checked={f.consent} onChange={(e) => set("consent", e.target.checked)} />
            I consent to processing of my personal data entered above for us to contact me. *
          </label>
          <label className="hc-check">
            <input type="checkbox" checked={f.marketing} onChange={(e) => set("marketing", e.target.checked)} />
            I would like to receive details about products, services and events.
          </label>
          <p className="hc-note">
            For further details on how your personal data will be processed, refer to the <a href="#">Privacy Notice</a> and <a href="#">California Notice at Collection</a>.<br />*Mandatory fields
          </p>

          <button className="hc-send" disabled={!valid}>Send</button>
          {sent && <div className="hc-success">Thank you! Our team will contact you shortly.</div>}
        </form>
      </div>

      <div className="hc-form-right">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200" alt="" />
      </div>
    </div>
  );
}