// "use client";

// import React, { useEffect, useRef, useState } from "react";

// export type CertData = {
//   studentName: string;
//   fatherName: string;
//   studentClass: string;
//   age: string | number;
//   certificateId: string;
//   completionDate: string; // yyyy-mm-dd
// };

// export const CLASS_OPTIONS = ["6", "7", "8", "9", "10", "11", "12", "College"];

// export const classLabel = (c: string) => (c === "College" ? "College" : `Class ${c}`);

// export const formatDate = (iso: string) =>
//   iso
//     ? new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       })
//     : "";

// const W = 1280;
// const H = 905;

// /* ---------- AI / ML icon (inline SVG, koi external file nahi chahiye) ---------- */
// function AIMLIcon() {
//   return (
//     <svg viewBox="0 0 64 64" className="h-full w-full" fill="none">
//       <g stroke="#7145db" strokeWidth="2.5" strokeLinecap="round">
//         <line x1="12" y1="16" x2="32" y2="12" />
//         <line x1="12" y1="16" x2="32" y2="32" />
//         <line x1="12" y1="32" x2="32" y2="12" />
//         <line x1="12" y1="32" x2="32" y2="32" />
//         <line x1="12" y1="32" x2="32" y2="52" />
//         <line x1="12" y1="48" x2="32" y2="32" />
//         <line x1="12" y1="48" x2="32" y2="52" />
//         <line x1="32" y1="12" x2="52" y2="24" />
//         <line x1="32" y1="32" x2="52" y2="24" />
//         <line x1="32" y1="32" x2="52" y2="40" />
//         <line x1="32" y1="52" x2="52" y2="40" />
//       </g>
//       {[[12,16],[12,32],[12,48],[32,12],[32,32],[32,52],[52,24],[52,40]].map(([x, y], i) => (
//         <circle key={i} cx={x} cy={y} r="5" fill={i > 5 ? "#9414ec" : "#6412d4"} />
//       ))}
//     </svg>
//   );
// }

// const LOGO_CARD =
// //   "flex h-[128px] w-[128px] flex-col items-center justify-center gap-2 rounded-[22px] border border-purple-200 bg-white/80 shadow-[0_8px_22px_rgba(113,69,219,0.18)]";

//   "flex h-[128px] w-[128px] flex-col items-center justify-center gap-1";

// function LogoCard({ label, children }: { label: string; children: React.ReactNode }) {
//   return (
//     <div className={LOGO_CARD}>
//       <div className="h-[96px] w-[96px]">{children}</div>
//       <span className="text-[14px] font-extrabold text-[#32107b]">{label}</span>
//     </div>
//   );
// }

// const IMG = "h-full w-full object-contain";

// /* ---------- Certificate (fixed 1280 x 905 = A4 landscape ratio) ---------- */
// export default function CertificateView({ data }: { data: CertData }) {
//   const name = data.studentName || "Student Name";
//   const nameSize = name.length > 30 ? 36 : name.length > 22 ? 44 : 54;

//   return (
//     <article
//       className="relative overflow-hidden bg-white bg-cover bg-center bg-no-repeat"
//       style={{ width: W, height: H, backgroundImage: "url('/certificate.jpg')" }}
//     >
//       {/* BRAND LOGO */}
//       <img src="/logo-icon.svg" alt="HYI AI" className="absolute left-[116px] top-[88px] h-auto w-[130px] object-contain" />

//       {/* TITLE */}
//       <div className="absolute left-[116px] top-[205px]">
//         <h1 className="hyi-h1 hyi-blue" style={{ fontSize: 82, lineHeight: 1.05, fontWeight: 800 }}>
//           Certificate
//         </h1>
//         <h2 className="mt-1 text-[30px] font-bold text-[#303030]">Of Completion</h2>
//       </div>

//       {/* TRAINING PROGRAM BANNER */}
//       <div className="absolute left-[116px] top-[352px] rounded-full bg-gradient-to-r from-[#6200bd] via-[#8a1cf0] to-[#a900ef] px-7 py-[7px] shadow-[0_5px_15px_rgba(104,0,190,0.30)]">
//         <h2 className="text-[22px] font-extrabold leading-tight text-white">
//           AI Training Program – Shahdol, MP
//         </h2>
//       </div>

//       {/* PRESENTED TO */}
//       <p className="absolute left-[116px] top-[418px] text-[20px] text-[#3c3c3c]">
//         This certificate is proudly presented to
//       </p>

//       {/* STUDENT NAME */}
//       <h2
//         className="absolute left-[116px] top-[450px] max-w-[640px] truncate font-extrabold leading-[1.15] tracking-[-1px] text-[#303030]"
//         style={{ fontSize: nameSize }}
//       >
//         {name}
//       </h2>

//       {/* STUDENT META */}
//       {/* <p className="absolute left-[180px] top-[518px] text-[16px] font-semibold text-[#5a3fb0]">
//         S/o · D/o {data.fatherName || "Father Name"} &nbsp;•&nbsp; {classLabel(data.studentClass || "10")} &nbsp;•&nbsp; Age {data.age || "--"}
//       </p> */}
//       <div className="absolute left-[116px] top-[510px] h-[3px] w-[330px] bg-gradient-to-r from-[#7145db] via-[#c026d3] to-transparent" />

//       {/* COMPLETION DESCRIPTION */}
//       <p className="absolute left-[116px] top-[562px] text-[17px] text-[#343434]">
//         For successfully completing the professional training program in
//       </p>

//       {/* COURSE */}
//       <h3 className="absolute left-[116px] top-[592px] w-[620px] text-[25px] font-extrabold leading-[1.25] tracking-[-0.4px] text-[#7145db]">
//         Artificial Intelligence, Machine Learning, Python Programming, HTML5 &amp; CSS3
//       </h3>

//       {/* PRACTICAL TRAINING */}
//       <p className="absolute left-[116px] top-[664px] text-[15px] text-[#343434]">
//         Including practical assignments, programming exercises and project development.
//       </p>

//       {/* LOGO GRID (right) – left column upar, right column niche */}
//       <div className="absolute left-[835px] top-[240px] flex flex-col gap-[20px]">
//         <LogoCard label="Python">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" crossOrigin="anonymous" alt="Python" className={IMG} />
//         </LogoCard>
//         <LogoCard label="HTML5">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" crossOrigin="anonymous" alt="HTML5" className={IMG} />
//         </LogoCard>
//       </div>
//       <div className="absolute left-[983px] top[345px] top-[345px] flex flex-col gap-[20px]">
//         <LogoCard label="AI / ML">
//           <AIMLIcon />
//         </LogoCard>
//         <LogoCard label="CSS3">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" crossOrigin="anonymous" alt="CSS3" className={IMG} />
//         </LogoCard>
//       </div>

//       {/* DETAILS PANEL */}
//       <section className="absolute left-[116px] top-[700px] grid w-[760px] grid-cols-[1.25fr_1fr_0.9fr_1.5fr] divide-x divide-purple-300 rounded-[16px] border border-purple-100 bg-white/70 py-[12px] shadow-[0_4px_15px_rgba(100,0,180,0.12)]">
//         <Detail label="Certificate No" value={data.certificateId || "—"} />
//         <Detail label="Date of Completion" value={formatDate(data.completionDate) || "—"} />
//         <Detail label="Training Duration" value="6 Months" />
//         <Detail label="Institute" value="BY Zila Panchayat Shahdol MP" />
//       </section>

//       {/* TRAINING COORDINATOR */}
//       {/* <section className="absolute left-[178px] top-[800px] w-[210px] text-center">
//         <div className="h-[48px]" />
//         <div className="h-[2px] w-full bg-[#333333]" />
//         <p className="mt-[6px] text-[16px] font-bold text-[#32107b]">Training Coordinator</p>
//       </section> */}

//       {/* AUTHORIZED SIGNATORY */}
//       <section className="absolute left-[917px] top-[750px] w-[210px] text-center">
//         <img src="/sign.png" alt="Authorized Signatory" className="mx-auto h-[48px] w-full object-contain" />
//         <div className="h-[2px] w-full bg-[#333333]" />
//         <p className="mt-[6px] text-[16px] font-bold text-[#32107b]">CEO & Founder</p>
//       </section>
//     </article>
//   );
// }

// function Detail({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="min-w-0 px-[14px]">
//       <p className="text-[11px] text-gray-600">{label}</p>
//       <p className="text-[13px] font-extrabold leading-tight text-[#35117c]">{value}</p>
//     </div>
//   );
// }

// /* ---------- Responsive preview wrapper ---------- */
// export function ScaledCertificate({ data }: { data: CertData }) {
//   const wrap = useRef<HTMLDivElement>(null);
//   const [scale, setScale] = useState(0.5);

//   useEffect(() => {
//     const el = wrap.current;
//     if (!el) return;
//     const update = () => setScale(el.clientWidth / W);
//     update();
//     const ro = new ResizeObserver(update);
//     ro.observe(el);
//     return () => ro.disconnect();
//   }, []);

//   return (
//     <div ref={wrap} className="w-full overflow-hidden rounded-2xl shadow-2xl" style={{ height: H * scale }}>
//       <div style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: "top left" }}>
//         <CertificateView data={data} />
//       </div>
//     </div>
//   );
// }





































"use client";

import React, { useEffect, useRef, useState } from "react";

export type CertData = {
  studentName: string;
  fatherName: string;
  studentClass: string;
  age: string | number;
  certificateId: string;
  completionDate: string; // yyyy-mm-dd
};

export const CLASS_OPTIONS = ["6", "7", "8", "9", "10", "11", "12", "College"];

export const classLabel = (c: string) => (c === "College" ? "College" : `Class ${c}`);

export const formatDate = (iso: string) =>
  iso
    ? new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

const W = 1280;
const H = 905;

/* ---------- Logos: SVG ko PNG data-URL mein badalte hain taaki PDF mein bhi sahi aayein ---------- */
const LOGO_URLS: Record<string, string> = {
  python: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  html: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
  css: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
};

async function toPng(url: string, size = 256): Promise<string> {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = url;
  await img.decode();

  const iw = img.naturalWidth || size;
  const ih = img.naturalHeight || size;
  const ratio = Math.min(size / iw, size / ih);
  const w = iw * ratio;
  const h = ih * ratio;

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  canvas.getContext("2d")!.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
  return canvas.toDataURL("image/png");
}

let logoCache: Promise<Record<string, string>> | null = null;

export function loadLogos(): Promise<Record<string, string>> {
  if (!logoCache) {
    logoCache = (async () => {
      const out: Record<string, string> = {};
      for (const [key, url] of Object.entries(LOGO_URLS)) {
        try {
          out[key] = await toPng(url);
        } catch {
          out[key] = url; // fallback
        }
      }
      return out;
    })();
  }
  return logoCache;
}

function useLogos() {
  const [logos, setLogos] = useState<Record<string, string>>({});
  useEffect(() => {
    let alive = true;
    loadLogos().then((l) => alive && setLogos(l));
    return () => {
      alive = false;
    };
  }, []);
  return logos;
}

/* ---------- AI / ML icon (inline SVG) ---------- */
function AIMLIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" fill="none">
      <g stroke="#5b2fd6" strokeWidth="2.5" strokeLinecap="round">
        <line x1="12" y1="16" x2="32" y2="12" />
        <line x1="12" y1="16" x2="32" y2="32" />
        <line x1="12" y1="32" x2="32" y2="12" />
        <line x1="12" y1="32" x2="32" y2="32" />
        <line x1="12" y1="32" x2="32" y2="52" />
        <line x1="12" y1="48" x2="32" y2="32" />
        <line x1="12" y1="48" x2="32" y2="52" />
        <line x1="32" y1="12" x2="52" y2="24" />
        <line x1="32" y1="32" x2="52" y2="24" />
        <line x1="32" y1="32" x2="52" y2="40" />
        <line x1="32" y1="52" x2="52" y2="40" />
      </g>
      {[[12, 16], [12, 32], [12, 48], [32, 12], [32, 32], [32, 52], [52, 24], [52, 40]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill={i > 5 ? "#8b2ff0" : "#4c1fb5"} />
      ))}
    </svg>
  );
}

const LOGO_CARD =
  "flex h-[128px] w-[128px] flex-col items-center justify-center gap-2 rounded-[22px] border border-[#ddd2fb] bg-white/90 shadow-[0_8px_22px_rgba(76,31,181,0.16)]";

function LogoCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={LOGO_CARD}>
      <div className="flex h-[56px] w-[56px] items-center justify-center">{children}</div>
      <span className="text-[14px] font-extrabold text-[#2b1a6b]">{label}</span>
    </div>
  );
}

function LogoImg({ src, alt }: { src?: string; alt: string }) {
  if (!src) return null;
  return <img src={src} alt={alt} width={56} height={56} style={{ width: 56, height: 56, objectFit: "contain" }} />;
}

/* ---------- Certificate (fixed 1280 x 905 = A4 landscape ratio) ----------
   Left edge  = 116px
   Right edge = 1111px (logo grid, details panel aur signatory isi par aligned)
-------------------------------------------------------------------------- */
export default function CertificateView({ data }: { data: CertData }) {
  const logos = useLogos();
  const name = data.studentName || "Student Name";

  // naam kabhi logo grid (x=835) se nahi takrayega: max width 700px
  const nameSize = Math.min(66, Math.max(28, Math.floor(700 / (Math.max(name.length, 1) * 0.58))));

  return (
    <article
      className="relative overflow-hidden bg-white bg-cover bg-center bg-no-repeat"
      style={{ width: W, height: H, backgroundImage: "url('/certificate.jpg')" }}
    >
      {/* BRAND LOGO */}
      <img
        src="/logo-icon.svg"
        alt="HYI AI"
        className="absolute left-[116px] top-[66px] h-auto w-[130px] object-contain"
      />

      {/* TITLE */}
      <h1
        className="hyi-h1 absolute left-[116px] top-[148px] m-0 whitespace-nowrap text-left text-[55px] font-extrabold leading-[1.1] text-[#14102e]"
      >
        Certificate Of Completion
      </h1>

      {/* TRAINING PROGRAM BANNER */}
      <div className="absolute left-[116px] top-[230px] rounded-full bg-gradient-to-r from-[#3f1aa8] via-[#5b2fd6] to-[#8b2ff0] px-7 py-[7px] shadow-[0_6px_16px_rgba(76,31,181,0.30)]">
        <h2 className="m-0 whitespace-nowrap text-left text-[22px] font-extrabold leading-tight text-white">
          AI Training Program – Shahdol, MP
        </h2>
      </div>

      {/* PRESENTED TO */}
      <p className="absolute left-[116px] top-[306px] m-0 text-left text-[20px] text-[#3d3957]">
        This certificate is proudly presented to
      </p>

      {/* STUDENT NAME */}
      <h2
        className="hyi-blue absolute left-[116px] top-[340px] m-0 whitespace-nowrap text-left font-bold leading-[1.15] tracking-[-1px]"
        style={{ fontSize: nameSize, maxWidth: 700 }}
      >
        {name}
      </h2>

      {/* NAME UNDERLINE */}
      <div className="absolute left-[116px] top-[430px] h-[3px] w-[330px] rounded-full bg-gradient-to-r from-[#4c1fb5] via-[#7c4ae8] to-transparent" />

      {/* COMPLETION DESCRIPTION */}
      <p className="absolute left-[116px] top-[468px] m-0 whitespace-nowrap text-left text-[18px] text-[#2b2745]">
        For successfully completing the professional training program in
      </p>

      {/* COURSE */}
      <h3 className="absolute left-[116px] top-[502px] m-0 w-[640px] text-left text-[26px] font-extrabold leading-[1.25] tracking-[-0.4px] text-[#4c1fb5]">
        Artificial Intelligence, Machine Learning, Python Programming, HTML5 &amp; CSS3
      </h3>

      {/* PRACTICAL TRAINING */}
      <p className="absolute left-[116px] top-[584px] m-0 whitespace-nowrap text-left text-[16px] text-[#3d3957]">
        Including practical assignments, programming exercises and project development.
      </p>

      {/* LOGO GRID (right) – left column upar, right column niche */}
      <div className="absolute left-[835px] top-[244px] flex flex-col gap-[20px]">
        <LogoCard label="Python">
          <LogoImg src={logos.python} alt="Python" />
        </LogoCard>
        <LogoCard label="HTML5">
          <LogoImg src={logos.html} alt="HTML5" />
        </LogoCard>
      </div>
      <div className="absolute left-[983px] top-[344px] flex flex-col gap-[20px]">
        <LogoCard label="AI / ML">
          <AIMLIcon />
        </LogoCard>
        <LogoCard label="CSS3">
          <LogoImg src={logos.css} alt="CSS3" />
        </LogoCard>
      </div>

      {/* DETAILS PANEL (116 → 1111) */}
      <section className="absolute left-[116px] top-[652px] grid w-[995px] grid-cols-[1.2fr_1fr_0.9fr_1.6fr] divide-x divide-[#d9ccfa] rounded-[16px] border border-[#ddd2fb] bg-white/90 py-[14px] shadow-[0_6px_18px_rgba(76,31,181,0.12)]">
        <Detail label="Certificate No" value={data.certificateId || "—"} />
        <Detail label="Date of Completion" value={formatDate(data.completionDate) || "—"} />
        <Detail label="Training Duration" value="6 Months" />
        <Detail label="Institute" value="BY Zila Panchayat Shahdol MP" />
      </section>

      {/* TRAINING COORDINATOR (purple shape se door) */}
      {/* <section className="absolute left-[190px] top-[772px] w-[220px] text-center">
        <div className="h-[52px]" />
        <div className="h-[2px] w-full bg-[#1a1535]" />
        <p className="m-0 mt-[7px] whitespace-nowrap text-[16px] font-bold text-[#2b1a6b]">Training Coordinator</p>
      </section> */}

      {/* AUTHORIZED SIGNATORY (right edge = 1111) */}
      <section className="absolute left-[891px] top-[772px] w-[220px] text-center">
        <img src="/sign.png" alt="Authorized Signatory" className="mx-auto h-[52px] w-full object-contain" />
        <div className="h-[2px] w-full bg-[#1a1535]" />
        <p className="m-0 mt-[7px] whitespace-nowrap text-[16px] font-bold text-[#2b1a6b]">CEO & Founder</p>
      </section>
    </article>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 px-[20px] text-left">
      <p className="m-0 text-[10.5px] font-semibold uppercase tracking-[0.8px] text-[#6b6785]">{label}</p>
      <p className="m-0 mt-[3px] text-[14px] font-extrabold leading-tight text-[#1a1535]">{value}</p>
    </div>
  );
}

/* ---------- Responsive preview wrapper ---------- */
export function ScaledCertificate({ data }: { data: CertData }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrap} className="w-full overflow-hidden rounded-2xl shadow-2xl" style={{ height: H * scale }}>
      <div style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        <CertificateView data={data} />
      </div>
    </div>
  );
}