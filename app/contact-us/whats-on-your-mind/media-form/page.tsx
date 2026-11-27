"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../../contact.css";

// ---- FAKE DATA ----
const MEDIA: Record<string, { name: string; email: string; phone: string; extra?: string }> = {
  "North America": { name: "John Mitchell", email: "john.mitchell@example.com", phone: "+1 212 555 0199" },
  "Latin America": { name: "Camila Torres", email: "camila.torres@example.com", phone: "+52 55 5555 0188" },
  Europe: { name: "Lars Becker", email: "lars.becker@example.com", phone: "+49 30 555 0177" },
  "UK & Ireland": { name: "Emma Clarke", email: "emma.clarke@example.com", phone: "+44 20 5555 0166" },
  India: { name: "Santosh Rao", email: "santosh.rao@example.com", phone: "+91 22 5555 0155", extra: "corporate.communications@example.com" },
  "Asia Pacific": { name: "Wei Tan", email: "wei.tan@example.com", phone: "+65 5555 0144" },
  "Australia & New Zealand": { name: "Olivia Hart", email: "olivia.hart@example.com", phone: "+61 2 5555 0133" },
  "Middle East & Africa": { name: "Omar Khalid", email: "omar.khalid@example.com", phone: "+971 4 555 0122" },
  Japan: { name: "Haruto Sato", email: "haruto.sato@example.com", phone: "+81 3 5555 0111" },
};

export default function MediaForm() {
  const router = useRouter();
  const [region, setRegion] = useState("");
  const p = region ? MEDIA[region] : null;

  return (
    <div className="hc-formpage">
      <div className="hc-form-left">
        <button className="hc-back" onClick={() => router.back()}>‹ BACK</button>
        <div className="hc-form-title">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M5 12a7 7 0 0 1 7-7M5 12a7 7 0 0 0 7 7M12 9l5 5-3 3-5-5z" /></svg>
          PRESS AND MEDIA
        </div>
        <p className="hc-form-intro">
          We’re so glad you reached out! Connecting you to our experts on the ground is a priority for us. Tell us which region you’re looking to find out more about, and we’ll put you in touch.
        </p>

        <div className="hc-field" style={{ maxWidth: 520 }}>
          <label>{region ? "SELECT REGION" : "Region"}</label>
          <select value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="" disabled></option>
            {Object.keys(MEDIA).map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>

        {p && (
          <div className="hc-person">
            <p style={{ fontSize: 22, marginTop: 50 }}>Here you go – the expert(s) listed below are waiting to hear from you.</p>
            <h4>{p.name}</h4>
            <p>✉ {p.email}</p>
            <p>☎ {p.phone}</p>
            {p.extra && <p style={{ fontSize: 24 }}>{p.extra}</p>}
            <Link href="/contact-us/whats-on-your-mind" className="hc-ghost" style={{ marginTop: 30 }}>Back to website</Link>
          </div>
        )}
      </div>

      <div className="hc-form-right">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200" alt="" />
      </div>
    </div>
  );
}