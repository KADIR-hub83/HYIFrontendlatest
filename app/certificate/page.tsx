// "use client"

// import React from "react";

// export default function CertificatePage() {
//   return (
//     <main className="min-h-screen bg-[#ececec] p-4 md:p-8">
//       <div className="mx-auto w-full max-w-[1280px]">
//         <article
//           id="certificate"
//           className="relative aspect-[1280/905] w-full overflow-hidden bg-white bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/certificate.jpg')",
//           }}
//         >
//           {/* BRAND LOGO */}
//         <div className="absolute left-[13.8%] top-[10.1%] z-10">
//   <img
//     src="/logo-icon.svg"
//     alt="HYI AI Logo"
//     className="h-auto w-[130px] object-contain"
//   />
// </div>

//           {/* CERTIFICATE HEADING */}
//           <section className="absolute left-[13.8%] top-[25.2%] z-10">
//             <h1 className="text-[clamp(30px,5.5vw,70px)] font-extrabold leading-[1.05] tracking-[-3.5px] text-[#7145db]">
//               Certificate
//             </h1>

//             <h2 className="mt-[9px] text-[clamp(14px,2.3vw,29px)] font-bold text-[#303030]">
//               Of Completion
//             </h2>
//           </section>

//           {/* PRESENTED TO */}
//           <p className="absolute left-[13.9%] top-[44.9%] z-10 text-[clamp(11px,1.55vw,20px)] font-normal text-[#3c3c3c]">
//             This Certificate is Presented To
//           </p>

//           {/* RECIPIENT NAME */}
//           <h2 className="absolute left-[13.8%] top-[51.7%] z-10 max-w-[47%] text-[clamp(18px,3.4vw,43px)] font-extrabold leading-[1.15] tracking-[-1.6px] text-[#303030]">
//             Ashwin Santiago
//           </h2>

//           {/* OFFICIAL PYTHON LOGO */}
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
//             alt="Python Logo"
//             className="absolute right-[15.4%] top-[28.1%] z-10 h-auto w-[19.5%] object-contain"
//           />

//           {/* COURSE INFORMATION */}
//           <section className="absolute left-[13.8%] right-[13.8%] top-[64.3%] z-10">
//             <h2 className="text-[clamp(17px,2.5vw,32px)] font-extrabold leading-tight tracking-[-0.6px] text-[#7145db]">
//               Python, HTML, CSS &amp; AI/ML Assessment
//             </h2>

//             <p className="mt-3 text-[clamp(9px,1.18vw,15px)] leading-[1.6] text-[#343434]">
//               This certificate is proudly presented in recognition of your
//               successful completion of the assessment and your dedication
//               to Python programming, web development and Artificial
//               Intelligence &amp; Machine Learning.
//             </p>
//           </section>

//           {/* CERTIFICATE NUMBER AND URL */}
//           <section className="absolute left-[13.8%] right-[13.8%] top-[75.7%] z-10 flex flex-wrap items-center gap-x-[2.7%] gap-y-1 text-[clamp(7px,0.94vw,12px)] text-[#333333]">
//             <div className="flex items-baseline gap-1">
//               <strong className="whitespace-nowrap font-bold">
//                 Certificate No:
//               </strong>
//               <span>GS-DSC-2025-0423-PK</span>
//             </div>

//             <div className="flex items-baseline gap-1">
//               <strong className="whitespace-nowrap font-bold">
//                 Certificate URL:
//               </strong>
//               <span>
//                 https://cert.hyi.ai/certificate/GS-DSC-2025-0423-PK
//               </span>
//             </div>
//           </section>

//           {/* DATE */}
//           <section className="absolute bottom-[7.4%] left-[15.4%] z-10 w-[13.3%] text-center">
//             <div className="whitespace-nowrap pb-[10px] text-[clamp(10px,1.65vw,21px)] font-bold text-[#333333]">
//               30 April 2025
//             </div>

//             <div className="h-[2px] w-full bg-[#333333]" />

//             <div className="mt-[9px] text-[clamp(10px,1.4vw,18px)] font-bold">
//               Date
//             </div>
//           </section>

//           {/* DIRECTOR SIGNATURE */}
//         <section className="absolute bottom-[7.4%] right-[18.7%] z-10 w-[13%] text-center">
//   {/* Actual Signature */}
//   <img
//     src="/sign.png"
//     alt="CEO & Founder Signature"
//     className="mb-1 block h-auto w-full object-contain"
//   />

//   {/* Signature Line */}
//   <div className="h-[2px] w-full bg-[#333333]" />

//   {/* Designation */}
//   <div className="mt-[3px] text-[clamp(10px,1.4vw,18px)] text-end font-bold">
//     CEO &amp; Founder
//   </div>
// </section>
//         </article>
//       </div>

//       {/* PRINT STYLES */}
//       <style jsx global>{`
//         @page {
//           size: A4 landscape;
//           margin: 0;
//         }

//         @media print {
//           html,
//           body {
//             width: 297mm !important;
//             height: 210mm !important;
//             margin: 0 !important;
//             padding: 0 !important;
//             background: #ffffff !important;
//           }

//           body {
//             -webkit-print-color-adjust: exact !important;
//             print-color-adjust: exact !important;
//           }

//           main {
//             width: 297mm !important;
//             height: 210mm !important;
//             min-height: 0 !important;
//             padding: 0 !important;
//             margin: 0 !important;
//             background: white !important;
//           }

//           main > div {
//             width: 297mm !important;
//             height: 210mm !important;
//             max-width: none !important;
//             margin: 0 !important;
//           }

//           #certificate {
//             width: 297mm !important;
//             height: 210mm !important;
//             max-width: none !important;
//             aspect-ratio: auto !important;
//             margin: 0 !important;
//             page-break-inside: avoid !important;
//             break-inside: avoid !important;
//             background-size: 100% 100% !important;
//             background-position: center !important;
//             -webkit-print-color-adjust: exact !important;
//             print-color-adjust: exact !important;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }
























































// "use client";

// import React, { useRef, useState } from "react";
// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";

// export default function CertificatePage() {
//   const certificateRef = useRef<HTMLElement>(null);

//   const [studentName, setStudentName] = useState("Ashwin Santiago");
//   const [certificateId, setCertificateId] = useState("HYI/TRM/2026/01");
//   const [completionDate, setCompletionDate] = useState("2026-11-20");
//   const [isGenerating, setIsGenerating] = useState(false);

//   const formattedDate = completionDate
//     ? new Date(`${completionDate}T00:00:00`).toLocaleDateString("en-GB", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       })
//     : "";

//   const generatePDF = async () => {
//     if (!certificateRef.current) return;

//     try {
//       setIsGenerating(true);

//       const canvas = await html2canvas(certificateRef.current, {
//         scale: 3,
//         useCORS: true,
//         allowTaint: false,
//         backgroundColor: "#ffffff",
//         logging: false,
//       });

//       const imageData = canvas.toDataURL("image/png", 1.0);

//       const pdf = new jsPDF({
//         orientation: "landscape",
//         unit: "mm",
//         format: "a4",
//       });

//       pdf.addImage(imageData, "PNG", 0, 0, 297, 210);
//       pdf.save(`${studentName || "Certificate"}-${certificateId}.pdf`);
//     } catch (error) {
//       console.error("PDF generation failed:", error);
//       alert("PDF generate nahi hua. Please dobara try karein.");
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f2effb] px-4 py-8 md:px-8">

//       {/* PAGE HEADER */}
//       <div className="mx-auto mb-8 max-w-[1280px]">
//         <div className="mb-2 inline-flex rounded-full border border-purple-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[2px] text-purple-700">
//           HYI.AI Certificate Generator
//         </div>

//         <h1 className="text-3xl font-extrabold tracking-tight text-[#25105f] md:text-4xl">
//           Certificate Generator
//         </h1>

//         <p className="mt-2 text-sm text-gray-600 md:text-base">
//           Enter student details and generate a professional A4 certificate PDF.
//         </p>
//       </div>

//       {/* FORM */}
//       <section className="mx-auto mb-8 max-w-[1280px] rounded-3xl border border-purple-100 bg-white p-5 shadow-sm md:p-7">
//         <div className="mb-5 flex items-center gap-3">
//           <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100 text-xl">
//             ✏️
//           </div>

//           <div>
//             <h2 className="font-bold text-[#281065]">
//               Certificate Details
//             </h2>

//             <p className="text-xs text-gray-500">
//               Fill the information below to update the certificate preview.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

//           {/* STUDENT NAME */}
//           <div>
//             <label className="mb-2 block text-sm font-semibold text-gray-700">
//               Student Name
//             </label>

//             <input
//               type="text"
//               value={studentName}
//               onChange={(e) => setStudentName(e.target.value)}
//               placeholder="Enter student name"
//               className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
//             />
//           </div>

//           {/* CERTIFICATE ID */}
//           <div>
//             <label className="mb-2 block text-sm font-semibold text-gray-700">
//               Certificate ID
//             </label>

//             <input
//               type="text"
//               value={certificateId}
//               onChange={(e) => setCertificateId(e.target.value)}
//               placeholder="HYI/TRM/2026/01"
//               className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
//             />
//           </div>

//           {/* DATE */}
//           <div>
//             <label className="mb-2 block text-sm font-semibold text-gray-700">
//               Completion Date
//             </label>

//             <input
//               type="date"
//               value={completionDate}
//               onChange={(e) => setCompletionDate(e.target.value)}
//               className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
//             />
//           </div>

//         </div>

//         {/* PDF BUTTON */}
//         <div className="mt-6 flex flex-wrap items-center gap-3">
//           <button
//             type="button"
//             onClick={generatePDF}
//             disabled={isGenerating || !studentName.trim() || !certificateId.trim()}
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6412d4] to-[#9414ec] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
//           >
//             {isGenerating ? (
//               <>
//                 <span className="animate-spin">⏳</span>
//                 Generating PDF...
//               </>
//             ) : (
//               <>
//                 <span>⬇</span>
//                 Generate Certificate PDF
//               </>
//             )}
//           </button>

//           <p className="text-xs text-gray-500">
//             PDF format: A4 Landscape • High resolution
//           </p>
//         </div>
//       </section>

//       {/* CERTIFICATE PREVIEW */}
//       <div className="mx-auto max-w-[1280px]">
//         <div className="mb-3 flex items-center justify-between">
//           <h2 className="font-bold text-[#281065]">
//             Certificate Preview
//           </h2>

//           <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
//             A4 Landscape
//           </span>
//         </div>

//         <article
//           ref={certificateRef}
//           id="certificate"
//           className="certificate relative mx-auto aspect-[297/210] w-full overflow-hidden bg-white bg-cover bg-center bg-no-repeat shadow-2xl"
//           style={{
//             backgroundImage: "url('/certificate.jpg')",
//           }}
//         >
//           {/* BRAND LOGO */}
//           <div className="absolute left-1/2 top-[2.5%] z-10 -translate-x-1/2">
//             <img
//               src="/logo-icon.svg"
//               alt="HYI AI"
//               className="h-auto w-[clamp(60px,12vw,150px)] object-contain"
//             />
//           </div>

//           {/* TITLE */}
//           <section className="absolute left-[12%] right-[12%] top-[12%] z-10 text-center">
//             <h1 className="hyi-h1  hyi-blue text-5xl">
//               CERTIFICATE OF COMPLETION
//             </h1>

//             <div className="mx-auto mt-[1%] flex items-center justify-center gap-[1.5%]">
//               <div className="h-[2px] w-[9%] bg-purple-700" />
//               <span className="text-[clamp(8px,1.5vw,20px)] text-purple-800">
//                 ★ ★ ★
//               </span>
//               <div className="h-[2px] w-[9%] bg-purple-700" />
//             </div>
//           </section>

//           {/* TRAINING PROGRAM BANNER */}
//           <div className="absolute left-[11%] right-[11%] top-[25.5%] z-10 rounded-full border-2 border-purple-300 bg-gradient-to-r from-[#6200bd] via-[#a900ef] to-[#6200bd] px-3 py-[0.65%] text-center shadow-[0_5px_15px_rgba(104,0,190,0.35)]">
//             <h2 className="text-[clamp(11px,2.5vw,34px)] font-extrabold leading-tight text-white">
//               AI Training Program – Shahdol, MP
//             </h2>
//           </div>

//           {/* PRESENTED TO */}
//           <p className="absolute left-[10%] right-[10%] top-[35.2%] z-10 text-center text-[clamp(10px,2vw,26px)] text-[#21134e]">
//             This certificate is proudly presented to
//           </p>

//           {/* STUDENT NAME */}
//           <h2 className="absolute left-[10%] right-[10%] top-[40%] z-10 truncate text-center text-[clamp(22px,5vw,65px)] font-black italic leading-tight tracking-tight text-[#35117c]">
//             {studentName || "Student Name"}
//           </h2>

//           {/* NAME DECORATIVE LINE */}
//           <div className="absolute left-[35%] right-[35%] top-[50.8%] z-10 h-[3px] bg-gradient-to-r from-purple-300 via-fuchsia-600 to-purple-300" />

//           {/* COMPLETION DESCRIPTION */}
//           <p className="absolute left-[8%] right-[8%] top-[53%] z-10 text-center text-[clamp(9px,1.8vw,24px)] text-[#21134e]">
//             For successfully completing the professional training program in
//           </p>

//           {/* COURSE */}
//           <div className="absolute left-[10%] right-[10%] top-[58.5%] z-10 rounded-full border border-purple-300 bg-gradient-to-r from-[#6500c7] via-[#a500e9] to-[#6500c7] px-2 py-[0.6%] text-center shadow-md">
//             <h3 className="text-[clamp(9px,2vw,27px)] font-extrabold leading-tight text-white">
//               Artificial Intelligence, Machine Learning, Python Programming, HTML5 &amp; CSS3
//             </h3>
//           </div>

//           {/* PRACTICAL TRAINING */}
//           <p className="absolute left-[7%] right-[7%] top-[66%] z-10 text-center text-[clamp(8px,1.65vw,22px)] text-[#21134e]">
//             Including practical assignments, programming exercises and project development.
//           </p>

//           {/* TECHNOLOGY ICON CARDS */}
//           <section className="absolute left-[20%] right-[20%] top-[70.5%] z-10 flex justify-center gap-[2%]">

//             {/* AI */}
//             <div className="flex w-[18%] flex-col items-center justify-center rounded-[14%] border border-purple-200 bg-white/70 px-1 py-[1%] shadow-[0_4px_8px_rgba(105,30,200,0.22)]">
//               <div className="text-[clamp(14px,3vw,38px)]">⚙️</div>
//               <span className="text-[clamp(7px,1.2vw,16px)] font-black text-[#32107b]">
//                 AI
//               </span>
//             </div>

//             {/* ML */}
//             <div className="flex w-[18%] flex-col items-center justify-center rounded-[14%] border border-purple-200 bg-white/70 px-1 py-[1%] shadow-[0_4px_8px_rgba(105,30,200,0.22)]">
//               <div className="text-[clamp(14px,3vw,38px)]">📊</div>
//               <span className="text-[clamp(7px,1.2vw,16px)] font-black text-[#32107b]">
//                 ML
//               </span>
//             </div>

//             {/* PYTHON */}
//             <div className="flex w-[18%] flex-col items-center justify-center rounded-[14%] border border-purple-200 bg-white/70 px-1 py-[1%] shadow-[0_4px_8px_rgba(105,30,200,0.22)]">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
//                 alt="Python"
//                 className="h-[clamp(18px,3.5vw,44px)] w-auto object-contain"
//               />
//               <span className="text-[clamp(7px,1.2vw,16px)] font-black text-[#32107b]">
//                 Python
//               </span>
//             </div>

//             {/* HTML */}
//             <div className="flex w-[18%] flex-col items-center justify-center rounded-[14%] border border-purple-200 bg-white/70 px-1 py-[1%] shadow-[0_4px_8px_rgba(105,30,200,0.22)]">
//               <div className="text-[clamp(14px,3vw,38px)] font-black text-[#e34f26]">
//                 5
//               </div>
//               <span className="text-[clamp(7px,1.2vw,16px)] font-black text-[#32107b]">
//                 HTML5
//               </span>
//             </div>

//             {/* CSS */}
//             <div className="flex w-[18%] flex-col items-center justify-center rounded-[14%] border border-purple-200 bg-white/70 px-1 py-[1%] shadow-[0_4px_8px_rgba(105,30,200,0.22)]">
//               <div className="text-[clamp(14px,3vw,38px)] font-black text-[#264de4]">
//                 3
//               </div>
//               <span className="text-[clamp(7px,1.2vw,16px)] font-black text-[#32107b]">
//                 CSS3
//               </span>
//             </div>

//           </section>

//           {/* DETAILS PANEL */}
//           <section className="absolute left-[6.5%] right-[6.5%] top-[81.5%] z-10 grid grid-cols-4 divide-x divide-purple-400 rounded-[20px] border border-white/90 bg-white/60 px-[1.5%] py-[1%] shadow-[0_4px_15px_rgba(100,0,180,0.18)]">

//             {/* CERTIFICATE ID */}
//             <div className="flex items-center gap-[5%] px-[2%]">
//               <div className="text-[clamp(14px,3vw,36px)] text-purple-700">
//                 ▣
//               </div>

//               <div className="min-w-0">
//                 <p className="text-[clamp(6px,1.1vw,14px)] text-gray-700">
//                   Certificate ID
//                 </p>

//                 <p className="truncate text-[clamp(7px,1.35vw,17px)] font-extrabold text-[#35117c]">
//                   {certificateId || "Certificate ID"}
//                 </p>
//               </div>
//             </div>

//             {/* DATE */}
//             <div className="flex items-center gap-[5%] px-[2%]">
//               <div className="text-[clamp(14px,3vw,36px)] text-purple-700">
//                 ▦
//               </div>

//               <div>
//                 <p className="text-[clamp(6px,1.1vw,14px)] text-gray-700">
//                   Date of Completion
//                 </p>

//                 <p className="text-[clamp(7px,1.35vw,17px)] font-extrabold text-[#35117c]">
//                   {formattedDate || "Completion Date"}
//                 </p>
//               </div>
//             </div>

//             {/* DURATION */}
//             <div className="flex items-center gap-[5%] px-[2%]">
//               <div className="text-[clamp(14px,3vw,36px)] text-purple-700">
//                 ◴
//               </div>

//               <div>
//                 <p className="text-[clamp(6px,1.1vw,14px)] text-gray-700">
//                   Training Duration
//                 </p>

//                 <p className="text-[clamp(7px,1.35vw,17px)] font-extrabold text-[#35117c]">
//                   6 Months
//                 </p>
//               </div>
//             </div>

//             {/* INSTITUTE */}
//             <div className="flex items-center gap-[5%] px-[2%]">
//               <div className="text-[clamp(14px,3vw,36px)] text-purple-700">
//                 ▱
//               </div>

//               <div className="min-w-0">
//                 <p className="text-[clamp(6px,1.1vw,14px)] text-gray-700">
//                   Institute
//                 </p>

//                 <p className="text-[clamp(6px,1.15vw,15px)] font-extrabold leading-tight text-[#35117c]">
//                   BY Zila Panchayat Shahdol MP
//                 </p>
//               </div>
//             </div>

//           </section>

//           {/* TRAINING COORDINATOR */}
//           <section className="absolute bottom-[3.5%] left-[12.5%] z-10 w-[18%] text-center">
//             <div className="mb-[1%] h-[clamp(20px,4vw,45px)]" />

//             <div className="h-[2px] w-full bg-purple-700" />

//             <p className="mt-[2%] text-[clamp(7px,1.4vw,18px)] font-bold text-[#32107b]">
//               Training Coordinator
//             </p>
//           </section>

//           {/* AUTHORIZED SIGNATORY */}
//           <section className="absolute bottom-[3.5%] right-[12.5%] z-10 w-[18%] text-center">
//             <img
//               src="/sign.png"
//               alt="Authorized Signatory Signature"
//               className="mx-auto mb-[1%] h-[clamp(20px,4vw,45px)] w-full object-contain"
//             />

//             <div className="h-[2px] w-full bg-purple-700" />

//             <p className="mt-[2%] text-[clamp(7px,1.4vw,18px)] font-bold text-[#32107b]">
//               Authorized Signatory
//             </p>
//           </section>

//         </article>
//       </div>
//     </main>
//   );
// }






















































// "use client";

// import React, { useCallback, useEffect, useRef, useState } from "react";
// import html2canvas from "html2canvas-pro";
// import { jsPDF } from "jspdf";
// import CertificateView, {
//   ScaledCertificate,
//   CertData,
//   CLASS_OPTIONS,
//   classLabel,
//   formatDate,
//   loadLogos,
// } from "@/components/Certificate/CertificateView";

// type EditLog = { editedAt: string; changes: { field: string; from: string; to: string }[] };
// type Cert = CertData & {
//   _id: string;
//   createdAt: string;
//   updatedAt: string;
//   editCount: number;
//   editLog: EditLog[];
// };
// type Stats = { total: number; edited: number; byClass: Record<string, number>; nextId: string; usedSeq: number[] };

// const EMPTY_STATS: Stats = { total: 0, edited: 0, byClass: {}, nextId: "", usedSeq: [] };
// const POLL_MS = 5000; // har 5 second mein auto-sync

// const localToday = () =>
//   new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

// const dt = (iso: string) =>
//   new Date(iso).toLocaleString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

// const inputCls =
//   "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100";

// /* safe fetch: HTML error aaye toh bhi crash nahi, asli status milta hai */
// async function api(url: string, init?: RequestInit) {
//   try {
//     const res = await fetch(url, { cache: "no-store", ...init });
//     const text = await res.text();
//     let data: any = {};
//     try {
//       data = text ? JSON.parse(text) : {};
//     } catch {
//       data = { error: `Server error (${res.status}). Check the terminal for errors.` };
//     }
//     return { ok: res.ok, status: res.status, data };
//   } catch {
//     return { ok: false, status: 0, data: { error: "Unable to connect to the server. Please check your internet connection or verify that the server is running." } };
//   }
// }

// export default function CertificatePage() {
//   const exportRef = useRef<HTMLDivElement>(null);
//   const reqId = useRef(0);

//   const [view, setView] = useState<"generate" | "history">("generate");
//   const [items, setItems] = useState<Cert[]>([]);
//   const [stats, setStats] = useState<Stats>(EMPTY_STATS);
//   const [lastSync, setLastSync] = useState<Date | null>(null);
//   const [filterClass, setFilterClass] = useState("all");
//   const [search, setSearch] = useState("");
//   const [expanded, setExpanded] = useState<string | null>(null);

//   const [form, setForm] = useState({
//     studentName: "",
//     fatherName: "",
//     studentClass: "10",
//     age: "",
//     certificateId: "",
//     completionDate: localToday(),
//   });
//   const [idEdited, setIdEdited] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [viewing, setViewing] = useState<Cert | null>(null);
//   const [exportData, setExportData] = useState<CertData | null>(null);
//   const [busy, setBusy] = useState(false);
//   const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

//   const setF = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));

//   const flash = (type: "ok" | "err", text: string) => {
//     setMsg({ type, text });
//     setTimeout(() => setMsg(null), 4000);
//   };

//   /* ---------- load (latest request hi jeetegi, purana response ignore) ---------- */
//   const load = useCallback(async () => {
//     const id = ++reqId.current;
//     const params = new URLSearchParams({ class: filterClass });
//     if (search.trim()) params.set("q", search.trim());
//     const { ok, data } = await api(`/api/certificates?${params}`);
//     if (!ok || id !== reqId.current) return null;
//     setItems(data.items || []);
//     setStats({ ...EMPTY_STATS, ...(data.stats || {}) });
//     setLastSync(new Date());
//     return { ...EMPTY_STATS, ...(data.stats || {}) } as Stats;
//   }, [filterClass, search]);

//   // filter / search badalne par
//   useEffect(() => {
//     const t = setTimeout(load, 250);
//     return () => clearTimeout(t);
//   }, [load]);

//   // auto-sync: har 5 sec, tab wapas khulne par, window focus par
//   useEffect(() => {
//     const tick = () => {
//       if (!document.hidden) load();
//     };
//     const iv = setInterval(tick, POLL_MS);
//     window.addEventListener("focus", tick);
//     document.addEventListener("visibilitychange", tick);
//     return () => {
//       clearInterval(iv);
//       window.removeEventListener("focus", tick);
//       document.removeEventListener("visibilitychange", tick);
//     };
//   }, [load]);

//   // certificate number auto-fill (jab tak user ne khud nahi badla aur edit mode nahi hai)
//   useEffect(() => {
//     if (!editingId && !idEdited && stats.nextId) setF("certificateId", stats.nextId);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [stats.nextId, editingId, idEdited]);

//   const resetForm = (nextId: string) => {
//     setEditingId(null);
//     setIdEdited(false);
//     setForm({
//       studentName: "",
//       fatherName: "",
//       studentClass: form.studentClass,
//       age: "",
//       certificateId: nextId,
//       completionDate: localToday(),
//     });
//   };

//   /* ---------- PDF (HD, exact A4 landscape) ---------- */
//   const exportPDF = async (data: CertData) => {
//     try {
//       setExportData(data);
//       await loadLogos();
//       await document.fonts.ready;
//       await new Promise((r) => setTimeout(r, 600));
//       if (!exportRef.current) return;

//       const canvas = await html2canvas(exportRef.current, {
//         scale: 3.5,
//         useCORS: true,
//         backgroundColor: "#ffffff",
//         width: 1280,
//         height: 905,
//         logging: false,
//       });

//       const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4", compress: true });
//       pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, 297, 210, undefined, "FAST");
//       pdf.save(`${data.studentName}-${data.certificateId.replace(/\//g, "-")}.pdf`);
//     } catch (e) {
//       console.error(e);
//       flash("err", "PDF generation failed. Please try again.");
//     }
//   };

//   /* ---------- save / update ---------- */
//   const save = async (download: boolean, force = false): Promise<void> => {
//     setBusy(true);
//     try {
//       const url = editingId ? `/api/certificates?id=${editingId}` : "/api/certificates";
//       const { ok, status, data } = await api(url, {
//         method: editingId ? "PUT" : "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...form, force }),
//       });

//       if (status === 409 && data.code === "DUPLICATE_STUDENT") {
//         if (confirm(`${data.error}.\n\nDo you still want to create a new certificate?`)) {
//           return await save(download, true);
//         }
//         return;
//       }
//       if (!ok) return flash("err", data.error || "Not Saved");

//        const saved: Cert = data.item;
//       flash("ok", data.unchanged ? "Not Found Any Changes" : editingId ? "Certificate updated" : "Certificate Saved");

//       // turant list mein dikhao (bina wait kiye)
//       reqId.current++;
//       setItems((prev) =>
//         editingId
//           ? prev.map((i) => (i._id === saved._id ? saved : i))
//           : (filterClass === "all" || filterClass === saved.studentClass) && !search.trim()
//           ? [saved, ...prev]
//           : prev
//       );

//       // ⬇️ YE NAYA BLOCK: certificate number turant update
//       const old = editingId ? items.find((i) => i._id === editingId) : null;
//       setStats((s) => {
//         const used = s.usedSeq.filter((n) => !old || n !== seqOf(old.certificateId));
//         const ns = seqOf(saved.certificateId);
//         if (ns && !used.includes(ns)) used.push(ns);
//         return { ...s, total: editingId ? s.total : s.total + 1, usedSeq: used, nextId: buildNext(used) };
//       });

//       if (download) await exportPDF(saved);
//       const s = await load();
//       resetForm(s?.nextId || "");
//     } finally {
//       setBusy(false);
//     }
//   };

//   const startEdit = (c: Cert) => {
//     setEditingId(c._id);
//     setIdEdited(true);
//     setForm({
//       studentName: c.studentName,
//       fatherName: c.fatherName,
//       studentClass: c.studentClass,
//       age: String(c.age),
//       certificateId: c.certificateId,
//       completionDate: c.completionDate,
//     });
//     setView("generate");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const seqOf = (id: string) => {
//   const m = id.match(/^HYI\/TRM\/(\d{4})\/(\d+)$/);
//   return m && Number(m[1]) === new Date().getFullYear() ? Number(m[2]) : 0;
// };

// const buildNext = (used: number[]) => {
//   const set = new Set(used);
//   let n = 1;
//   while (set.has(n)) n++;
//   return `HYI/TRM/${new Date().getFullYear()}/${String(n).padStart(2, "0")}`;
// };

//   /* ---------- delete (turant list se hatao, fail ho toh wapas lao) ---------- */
// const remove = async (c: Cert) => {
//   if (!confirm(`${c.studentName} (${c.certificateId}) Are you sure you want to delete this certificate?`)) return;

//   reqId.current++; // in-flight purane response ko ignore karo
//   const prevItems = items;
//   const prevStats = stats;

//   setItems((p) => p.filter((i) => i._id !== c._id));
//   setStats((s) => {
//     const used = s.usedSeq.filter((n) => n !== seqOf(c.certificateId));
//     return {
//       ...s,
//       total: Math.max(0, s.total - 1),
//       edited: c.editCount > 0 ? Math.max(0, s.edited - 1) : s.edited,
//       byClass: { ...s.byClass, [c.studentClass]: Math.max(0, (s.byClass[c.studentClass] || 0) - 1) },
//       usedSeq: used,
//       nextId: buildNext(used),
//     };
//   });
//   if (expanded === c._id) setExpanded(null);

//   const { ok, status, data } = await api(`/api/certificates?id=${c._id}`, { method: "DELETE" });

//   if (!ok && !(status === 404 && data.code === "ALREADY_DELETED")) {
//     setItems(prevItems);
//     setStats(prevStats);
//     return flash("err", `Not Deleted: ${data.error || status}`);
//   }

//   flash("ok", "Certificate Deleted Successfully");
//   const s = await load();
//   if (editingId === c._id) resetForm(s?.nextId || "");
// };
//   const canSave =
//     !busy &&
//     form.studentName.trim() &&
//     form.fatherName.trim() &&
//     form.age &&
//     form.certificateId.trim() &&
//     form.completionDate;

//   const previewData: CertData = form;

//   /* ================= UI ================= */
//   return (
//     <div className="flex min-h-screen bg-[#f2effb]">
//       {/* SIDEBAR */}
//       <aside className="sticky top-0 flex h-screen w-[230px] shrink-0 flex-col border-r border-purple-100 bg-white p-4">
//         <div className="mb-6 text-center">
//           <img src="/logo-icon.svg" alt="HYI AI" className="mx-auto h-auto w-[90px]" />
//           <p className="mt-2 text-[11px] font-bold uppercase tracking-[2px] text-purple-700">
//             Certificate Dashboard
//           </p>
//         </div>

//         <nav className="flex flex-col gap-2">
//           <button
//             onClick={() => setView("generate")}
//             className={`rounded-xl px-4 py-3 text-left text-sm font-bold transition ${
//               view === "generate" ? "bg-gradient-to-r from-[#6412d4] to-[#9414ec] text-white shadow-md" : "text-[#281065] hover:bg-purple-50"
//             }`}
//           >
//             ✏️ New Certificate
//           </button>
//           <button
//             onClick={() => setView("history")}
//             className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-bold transition ${
//               view === "history" ? "bg-gradient-to-r from-[#6412d4] to-[#9414ec] text-white shadow-md" : "text-[#281065] hover:bg-purple-50"
//             }`}
//           >
//             <span>🕘 History</span>
//             <span className={`rounded-full px-2 py-0.5 text-xs ${view === "history" ? "bg-white/25" : "bg-purple-100 text-purple-700"}`}>
//               {stats.total}
//             </span>
//           </button>
//         </nav>

//         <div className="mt-auto rounded-2xl bg-purple-50 p-4 text-center">
//           <p className="text-3xl font-extrabold text-[#35117c]">{stats.total}</p>
//           <p className="text-xs font-semibold text-purple-700">Certificates Distributed</p>
//           {lastSync && (
//             <p className="mt-2 flex items-center justify-center gap-1 text-[10px] text-gray-500">
//               <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
//               Live • {lastSync.toLocaleTimeString("en-IN")}
//             </p>
//           )}
//         </div>
//       </aside>

//       {/* MAIN */}
//       <main className="min-w-0 flex-1 px-4 py-6 md:px-8">
//         {msg && (
//           <div
//             className={`fixed right-6 top-6 z-50 max-w-[360px] rounded-xl px-5 py-3 text-sm font-semibold shadow-lg ${
//               msg.type === "ok" ? "bg-green-600 text-white" : "bg-red-600 text-white"
//             }`}
//           >
//             {msg.text}
//           </div>
//         )}

//         {/* ================= GENERATE ================= */}
//         {view === "generate" && (
//           <div className="mx-auto max-w-[1100px]">
//             <div className="mb-5 text-center">
//               <div className="mb-2 inline-flex rounded-full border border-purple-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[2px] text-purple-700">
//                 HYI.AI Certificate Generator
//               </div>
//               <h1 className="text-3xl font-extrabold tracking-tight text-[#25105f]">
//                 {editingId ? "Edit Certificate" : "Generate Certificate"}
//               </h1>
//             </div>

//             {/* STUDENT INFO */}
//             <section className="mb-4 rounded-3xl border border-purple-100 bg-white p-5 shadow-sm">
//               <h2 className="mb-4 text-center font-bold text-[#281065]">Student Information</h2>
//               <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
//                 <div className="md:col-span-2">
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">Student Name</label>
//                   <input className={inputCls} value={form.studentName} onChange={(e) => setF("studentName", e.target.value)} placeholder="Enter student name" />
//                 </div>
//                 <div className="md:col-span-2">
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">Father Name</label>
//                   <input className={inputCls} value={form.fatherName} onChange={(e) => setF("fatherName", e.target.value)} placeholder="Enter father name" />
//                 </div>
//                 <div className="md:col-span-2">
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">Class</label>
//                   <select className={inputCls} value={form.studentClass} onChange={(e) => setF("studentClass", e.target.value)}>
//                     {CLASS_OPTIONS.map((c) => (
//                       <option key={c} value={c}>{classLabel(c)}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="md:col-span-2">
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">Age</label>
//                   <input type="number" min={4} max={60} className={inputCls} value={form.age} onChange={(e) => setF("age", e.target.value)} placeholder="Enter age" />
//                 </div>
//               </div>
//             </section>

//             {/* CERTIFICATE DETAILS */}
//             <section className="mb-4 rounded-3xl border border-purple-100 bg-white p-5 shadow-sm">
//               <h2 className="mb-4 text-center font-bold text-[#281065]">Certificate Details</h2>
//               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">Certificate Number</label>
//                   <input
//                     className={inputCls}
//                     value={form.certificateId}
//                     onChange={(e) => {
//                       setIdEdited(true);
//                       setF("certificateId", e.target.value);
//                     }}
//                     placeholder="HYI/TRM/2026/01"
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">Completion Date</label>
//                   <input type="date" className={inputCls} value={form.completionDate} onChange={(e) => setF("completionDate", e.target.value)} />
//                 </div>
//               </div>

//               <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
//                 <button
//                   onClick={() => save(true)}
//                   disabled={!canSave}
//                   className="rounded-xl bg-gradient-to-r from-[#6412d4] to-[#9414ec] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
//                 >
//                   {busy ? "Please wait..." : editingId ? "⬇ Update & Download PDF" : "⬇ Save & Download PDF"}
//                 </button>
//                 <button
//                   onClick={() => save(false)}
//                   disabled={!canSave}
//                   className="rounded-xl border border-purple-300 bg-white px-6 py-3 text-sm font-bold text-purple-700 transition hover:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-50"
//                 >
//                   {editingId ? "Update Only" : "Save Only"}
//                 </button>
//                 {editingId && (
//                   <button
//                     onClick={() => resetForm(stats.nextId)}
//                     className="rounded-xl px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-100"
//                   >
//                     Cancel Edit
//                   </button>
//                 )}
//               </div>
//             </section>

//             {/* PREVIEW */}
//             <section className="text-center">
//               <div className="mb-3 flex items-center justify-center gap-3">
//                 <h2 className="font-bold text-[#281065]">Certificate Preview</h2>
//                 <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">A4 Landscape</span>
//               </div>
//               <ScaledCertificate data={previewData} />
//             </section>
//           </div>
//         )}

//         {/* ================= HISTORY ================= */}
//         {view === "history" && (
//           <div className="mx-auto max-w-[1100px]">
//             <div className="mb-5 text-center">
//               <h1 className="text-3xl font-extrabold tracking-tight text-[#25105f]">Certificate History</h1>
//               <p className="mt-1 text-sm text-gray-600">Saare distribute hue certificates, edits aur class-wise record</p>
//             </div>

//             <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
//               <Stat label="Total Distributed" value={stats.total} />
//               <Stat label="Edited Certificates" value={stats.edited} />
//               <Stat label="Showing" value={items.length} />
//               <Stat label="Classes Covered" value={Object.values(stats.byClass).filter((n) => n > 0).length} />
//             </div>

//             <div className="mb-3 flex flex-wrap justify-center gap-2">
//               <Chip active={filterClass === "all"} onClick={() => setFilterClass("all")}>
//                 All ({stats.total})
//               </Chip>
//               {CLASS_OPTIONS.map((c) => (
//                 <Chip key={c} active={filterClass === c} onClick={() => setFilterClass(c)}>
//                   {classLabel(c)} ({stats.byClass[c] || 0})
//                 </Chip>
//               ))}
//             </div>

//             <div className="mx-auto mb-4 max-w-[480px]">
//               <input className={inputCls} placeholder="Search name, father name ya certificate no" value={search} onChange={(e) => setSearch(e.target.value)} />
//             </div>

//             <div className="flex flex-col gap-3">
//               {items.length === 0 && (
//                 <div className="rounded-2xl bg-white p-10 text-center text-sm text-gray-500">No certificate found.</div>
//               )}

//               {items.map((c) => (
//                 <div key={c._id} className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm">
//                   <div className="flex flex-wrap items-center justify-between gap-3">
//                     <div className="min-w-0">
//                       <p className="truncate text-lg font-extrabold text-[#35117c]">{c.studentName}</p>
//                       <p className="text-sm text-gray-600">
//                         S/o · D/o {c.fatherName} • {classLabel(c.studentClass)} • Age {c.age}
//                       </p>
//                       <p className="mt-1 text-xs text-gray-500">
//                         <b>{c.certificateId}</b> • Completed {formatDate(c.completionDate)}
//                       </p>
//                       <p className="text-xs text-gray-500">
//                         Created {dt(c.createdAt)}
//                         {c.editCount > 0 && <> • Last edited {dt(c.updatedAt)}</>}
//                       </p>
//                     </div>

//                     <div className="flex flex-wrap items-center justify-center gap-2">
//                       <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
//                         {c.editCount} edit{c.editCount === 1 ? "" : "s"}
//                       </span>
//                       <Btn onClick={() => setViewing(c)}>View</Btn>
//                       <Btn onClick={() => startEdit(c)}>Edit</Btn>
//                       <Btn danger onClick={() => remove(c)}>Delete</Btn>
//                       {c.editCount > 0 && (
//                         <Btn onClick={() => setExpanded(expanded === c._id ? null : c._id)}>
//                           {expanded === c._id ? "Hide Log" : "Edit Log"}
//                         </Btn>
//                       )}
//                     </div>
//                   </div>

//                   {expanded === c._id && (
//                     <div className="mt-3 rounded-xl bg-purple-50 p-3 text-left">
//                       {[...c.editLog].reverse().map((log, i) => (
//                         <div key={i} className="mb-2 border-b border-purple-100 pb-2 last:mb-0 last:border-0 last:pb-0">
//                           <p className="text-xs font-bold text-purple-800">Edited on {dt(log.editedAt)}</p>
//                           <ul className="mt-1 text-xs text-gray-700">
//                             {log.changes.map((ch, j) => (
//                               <li key={j}>
//                                 <b>{ch.field}:</b> <span className="text-red-600 line-through">{ch.from}</span> → <span className="text-green-700">{ch.to}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </main>

//       {/* VIEW MODAL */}
//       {viewing && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setViewing(null)}>
//           <div className="max-h-[95vh] w-full max-w-[1000px] overflow-auto rounded-3xl bg-white p-4" onClick={(e) => e.stopPropagation()}>
//             <ScaledCertificate data={viewing} />
//             <div className="mt-4 flex justify-center gap-3">
//               <button
//                 onClick={() => exportPDF(viewing)}
//                 className="rounded-xl bg-gradient-to-r from-[#6412d4] to-[#9414ec] px-6 py-3 text-sm font-bold text-white"
//               >
//                 ⬇ Download PDF
//               </button>
//               <button onClick={() => setViewing(null)} className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700">
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* OFFSCREEN EXPORT COPY (full 1280x905, sirf PDF ke liye) */}
//       <div style={{ position: "fixed", left: -10000, top: 0, pointerEvents: "none" }} aria-hidden>
//         <div ref={exportRef} style={{ width: 1280, height: 905 }}>
//           <CertificateView data={exportData || previewData} />
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------- small helpers ---------- */
// function Stat({ label, value }: { label: string; value: number }) {
//   return (
//     <div className="rounded-2xl border border-purple-100 bg-white p-4 text-center shadow-sm">
//       <p className="text-2xl font-extrabold text-[#35117c]">{value}</p>
//       <p className="text-xs font-semibold text-gray-500">{label}</p>
//     </div>
//   );
// }

// function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
//         active ? "bg-gradient-to-r from-[#6412d4] to-[#9414ec] text-white shadow" : "border border-purple-200 bg-white text-purple-700 hover:bg-purple-50"
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

// function Btn({ children, onClick, danger }: { children: React.ReactNode; onClick: () => void; danger?: boolean }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
//         danger ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-purple-50 text-purple-700 hover:bg-purple-100"
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

































"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";
import CertificateView, {
  ScaledCertificate,
  CertData,
  CLASS_OPTIONS,
  classLabel,
  formatDate,
  loadLogos,
} from "@/components/Certificate/CertificateView";

type EditLog = { editedAt: string; changes: { field: string; from: string; to: string }[] };
type Cert = CertData & {
  _id: string;
  createdAt: string;
  updatedAt: string;
  editCount: number;
  editLog: EditLog[];
};
type Stats = { total: number; edited: number; byClass: Record<string, number>; nextId: string; usedSeq: number[] };

const EMPTY_STATS: Stats = { total: 0, edited: 0, byClass: {}, nextId: "", usedSeq: [] };
const POLL_MS = 5000; // auto-sync every 5 seconds

const localToday = () =>
  new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

const dt = (iso: string) =>
  new Date(iso).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

const inputCls =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100";

/* certificate number helpers */
const seqOf = (id: string) => {
  const m = id.match(/^HYI\/TRM\/(\d{4})\/(\d+)$/);
  return m && Number(m[1]) === new Date().getFullYear() ? Number(m[2]) : 0;
};

const buildNext = (used: number[]) => {
  const set = new Set(used);
  let n = 1;
  while (set.has(n)) n++;
  return `HYI/TRM/${new Date().getFullYear()}/${String(n).padStart(2, "0")}`;
};

/* safe fetch: HTML error aaye toh bhi crash nahi, asli status milta hai */
async function api(url: string, init?: RequestInit) {
  try {
    const res = await fetch(url, { cache: "no-store", ...init });

    // login expire ho gaya toh login page par bhejo
    if (res.status === 401) {
      window.location.href = "/login";
      return { ok: false, status: 401, data: { error: "Login required" } };
    }

    const text = await res.text();
    let data: any = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { error: `Server error (${res.status}). Check the terminal for errors.` };
    }
    return { ok: res.ok, status: res.status, data };
  } catch {
    return {
      ok: false,
      status: 0,
      data: { error: "Unable to connect to the server. Please check your internet connection or verify that the server is running." },
    };
  }
}

export default function CertificatePage() {
  const exportRef = useRef<HTMLDivElement>(null);
  const reqId = useRef(0);

  const [view, setView] = useState<"generate" | "history">("generate");
  const [items, setItems] = useState<Cert[]>([]);
  const [stats, setStats] = useState<Stats>(EMPTY_STATS);
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [filterClass, setFilterClass] = useState("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const [form, setForm] = useState({
    studentName: "",
    fatherName: "",
    studentClass: "10",
    age: "",
    certificateId: "",
    completionDate: localToday(),
  });
  const [idEdited, setIdEdited] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [viewing, setViewing] = useState<Cert | null>(null);
  const [exportData, setExportData] = useState<CertData | null>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const setF = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const flash = (type: "ok" | "err", text: string) => {
    setMsg({ type, text });
    setTimeout(() => setMsg(null), 4000);
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  };

  /* ---------- load (latest request hi jeetegi, purana response ignore) ---------- */
  const load = useCallback(async () => {
    const id = ++reqId.current;
    const params = new URLSearchParams({ class: filterClass });
    if (search.trim()) params.set("q", search.trim());
    const { ok, data } = await api(`/api/certificates?${params}`);
    if (!ok || id !== reqId.current) return null;
    setItems(data.items || []);
    setStats({ ...EMPTY_STATS, ...(data.stats || {}) });
    setLastSync(new Date());
    return { ...EMPTY_STATS, ...(data.stats || {}) } as Stats;
  }, [filterClass, search]);

  // filter / search badalne par
  useEffect(() => {
    const t = setTimeout(load, 250);
    return () => clearTimeout(t);
  }, [load]);

  // auto-sync: har 5 sec, tab wapas khulne par, window focus par
  useEffect(() => {
    const tick = () => {
      if (!document.hidden) load();
    };
    const iv = setInterval(tick, POLL_MS);
    window.addEventListener("focus", tick);
    document.addEventListener("visibilitychange", tick);
    return () => {
      clearInterval(iv);
      window.removeEventListener("focus", tick);
      document.removeEventListener("visibilitychange", tick);
    };
  }, [load]);

  // certificate number auto-fill (jab tak user ne khud nahi badla aur edit mode nahi hai)
  useEffect(() => {
    if (!editingId && !idEdited && stats.nextId) setF("certificateId", stats.nextId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats.nextId, editingId, idEdited]);

  const resetForm = (nextId: string) => {
    setEditingId(null);
    setIdEdited(false);
    setForm({
      studentName: "",
      fatherName: "",
      studentClass: form.studentClass,
      age: "",
      certificateId: nextId,
      completionDate: localToday(),
    });
  };

  /* ---------- PDF (HD, exact A4 landscape) ---------- */
  const exportPDF = async (data: CertData) => {
    try {
      setExportData(data);
      await loadLogos();
      await document.fonts.ready;
      await new Promise((r) => setTimeout(r, 600));
      if (!exportRef.current) return;

      const canvas = await html2canvas(exportRef.current, {
        scale: 3.5,
        useCORS: true,
        backgroundColor: "#ffffff",
        width: 1280,
        height: 905,
        logging: false,
      });

      const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4", compress: true });
      pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, 297, 210, undefined, "FAST");
      pdf.save(`${data.studentName}-${data.certificateId.replace(/\//g, "-")}.pdf`);
    } catch (e) {
      console.error(e);
      flash("err", "PDF generation failed. Please try again.");
    }
  };

  /* ---------- save / update ---------- */
  const save = async (download: boolean, force = false): Promise<void> => {
    setBusy(true);
    try {
      const url = editingId ? `/api/certificates?id=${editingId}` : "/api/certificates";
      const { ok, status, data } = await api(url, {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, force }),
      });

      if (status === 409 && data.code === "DUPLICATE_STUDENT") {
        if (confirm(`${data.error}.\n\nDo you still want to create a new certificate?`)) {
          return await save(download, true);
        }
        return;
      }
      if (!ok) return flash("err", data.error || "Not Saved");

      const saved: Cert = data.item;
      flash("ok", data.unchanged ? "Not Found Any Changes" : editingId ? "Certificate updated" : "Certificate Saved");

      // turant list mein dikhao (bina wait kiye)
      reqId.current++;
      setItems((prev) =>
        editingId
          ? prev.map((i) => (i._id === saved._id ? saved : i))
          : (filterClass === "all" || filterClass === saved.studentClass) && !search.trim()
          ? [saved, ...prev]
          : prev
      );

      // certificate number turant update
      const old = editingId ? items.find((i) => i._id === editingId) : null;
      setStats((s) => {
        const used = s.usedSeq.filter((n) => !old || n !== seqOf(old.certificateId));
        const ns = seqOf(saved.certificateId);
        if (ns && !used.includes(ns)) used.push(ns);
        return { ...s, total: editingId ? s.total : s.total + 1, usedSeq: used, nextId: buildNext(used) };
      });

      if (download) await exportPDF(saved);
      const s = await load();
      resetForm(s?.nextId || "");
    } finally {
      setBusy(false);
    }
  };

  const startEdit = (c: Cert) => {
    setEditingId(c._id);
    setIdEdited(true);
    setForm({
      studentName: c.studentName,
      fatherName: c.fatherName,
      studentClass: c.studentClass,
      age: String(c.age),
      certificateId: c.certificateId,
      completionDate: c.completionDate,
    });
    setView("generate");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---------- delete (turant list se hatao, fail ho toh wapas lao) ---------- */
  const remove = async (c: Cert) => {
    if (!confirm(`${c.studentName} (${c.certificateId}) Are you sure you want to delete this certificate?`)) return;

    reqId.current++; // in-flight purane response ko ignore karo
    const prevItems = items;
    const prevStats = stats;

    setItems((p) => p.filter((i) => i._id !== c._id));
    setStats((s) => {
      const used = s.usedSeq.filter((n) => n !== seqOf(c.certificateId));
      return {
        ...s,
        total: Math.max(0, s.total - 1),
        edited: c.editCount > 0 ? Math.max(0, s.edited - 1) : s.edited,
        byClass: { ...s.byClass, [c.studentClass]: Math.max(0, (s.byClass[c.studentClass] || 0) - 1) },
        usedSeq: used,
        nextId: buildNext(used),
      };
    });
    if (expanded === c._id) setExpanded(null);

    const { ok, status, data } = await api(`/api/certificates?id=${c._id}`, { method: "DELETE" });

    if (!ok && !(status === 404 && data.code === "ALREADY_DELETED")) {
      setItems(prevItems);
      setStats(prevStats);
      return flash("err", `Not Deleted: ${data.error || status}`);
    }

    flash("ok", "Certificate Deleted Successfully");
    const s = await load();
    if (editingId === c._id) resetForm(s?.nextId || "");
  };

  const canSave =
    !busy &&
    form.studentName.trim() &&
    form.fatherName.trim() &&
    form.age &&
    form.certificateId.trim() &&
    form.completionDate;

  const previewData: CertData = form;

  /* ================= UI ================= */
  return (
    <div className="flex min-h-screen bg-[#f2effb]">
      {/* SIDEBAR */}
      <aside className="sticky top-0 flex h-screen w-[230px] shrink-0 flex-col border-r border-purple-100 bg-white p-4">
        <div className="mb-6 text-center">
          <img src="/logo-icon.svg" alt="HYI AI" className="mx-auto h-auto w-[90px]" />
          <p className="mt-2 text-[11px] font-bold uppercase tracking-[2px] text-purple-700">
            Certificate Dashboard
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          <button
            onClick={() => setView("generate")}
            className={`rounded-xl px-4 py-3 text-left text-sm font-bold transition ${
              view === "generate" ? "bg-gradient-to-r from-[#6412d4] to-[#9414ec] text-white shadow-md" : "text-[#281065] hover:bg-purple-50"
            }`}
          >
            ✏️ New Certificate
          </button>
          <button
            onClick={() => setView("history")}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-bold transition ${
              view === "history" ? "bg-gradient-to-r from-[#6412d4] to-[#9414ec] text-white shadow-md" : "text-[#281065] hover:bg-purple-50"
            }`}
          >
            <span>🕘 History</span>
            <span className={`rounded-full px-2 py-0.5 text-xs ${view === "history" ? "bg-white/25" : "bg-purple-100 text-purple-700"}`}>
              {stats.total}
            </span>
          </button>
        </nav>

        <div className="mt-auto rounded-2xl bg-purple-50 p-4 text-center">
          <p className="text-3xl font-extrabold text-[#35117c]">{stats.total}</p>
          <p className="text-xs font-semibold text-purple-700">Certificates Distributed</p>
          {lastSync && (
            <p className="mt-2 flex items-center justify-center gap-1 text-[10px] text-gray-500">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Live • {lastSync.toLocaleTimeString("en-IN")}
            </p>
          )}
        </div>

        <button
          onClick={logout}
          className="mt-3 w-full rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-50"
        >
          ⎋ Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="min-w-0 flex-1 px-4 py-6 md:px-8">
        {msg && (
          <div
            className={`fixed right-6 top-6 z-50 max-w-[360px] rounded-xl px-5 py-3 text-sm font-semibold shadow-lg ${
              msg.type === "ok" ? "bg-green-600 text-white" : "bg-red-600 text-white"
            }`}
          >
            {msg.text}
          </div>
        )}

        {/* ================= GENERATE ================= */}
        {view === "generate" && (
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-5 text-center">
              <div className="mb-2 inline-flex rounded-full border border-purple-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[2px] text-purple-700">
                HYI.AI Certificate Generator
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-[#25105f]">
                {editingId ? "Edit Certificate" : "Generate Certificate"}
              </h1>
            </div>

            {/* STUDENT INFO */}
            <section className="mb-4 rounded-3xl border border-purple-100 bg-white p-5 shadow-sm">
              <h2 className="mb-4 text-center font-bold text-[#281065]">Student Information</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Student Name</label>
                  <input className={inputCls} value={form.studentName} onChange={(e) => setF("studentName", e.target.value)} placeholder="Enter student name" />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Father Name</label>
                  <input className={inputCls} value={form.fatherName} onChange={(e) => setF("fatherName", e.target.value)} placeholder="Enter father name" />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Class</label>
                  <select className={inputCls} value={form.studentClass} onChange={(e) => setF("studentClass", e.target.value)}>
                    {CLASS_OPTIONS.map((c) => (
                      <option key={c} value={c}>{classLabel(c)}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Age</label>
                  <input type="number" min={4} max={60} className={inputCls} value={form.age} onChange={(e) => setF("age", e.target.value)} placeholder="Enter age" />
                </div>
              </div>
            </section>

            {/* CERTIFICATE DETAILS */}
            <section className="mb-4 rounded-3xl border border-purple-100 bg-white p-5 shadow-sm">
              <h2 className="mb-4 text-center font-bold text-[#281065]">Certificate Details</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Certificate Number</label>
                  <input
                    className={inputCls}
                    value={form.certificateId}
                    onChange={(e) => {
                      setIdEdited(true);
                      setF("certificateId", e.target.value);
                    }}
                    placeholder="HYI/TRM/2026/01"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Completion Date</label>
                  <input type="date" className={inputCls} value={form.completionDate} onChange={(e) => setF("completionDate", e.target.value)} />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => save(true)}
                  disabled={!canSave}
                  className="rounded-xl bg-gradient-to-r from-[#6412d4] to-[#9414ec] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {busy ? "Please wait..." : editingId ? "⬇ Update & Download PDF" : "⬇ Save & Download PDF"}
                </button>
                <button
                  onClick={() => save(false)}
                  disabled={!canSave}
                  className="rounded-xl border border-purple-300 bg-white px-6 py-3 text-sm font-bold text-purple-700 transition hover:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {editingId ? "Update Only" : "Save Only"}
                </button>
                {editingId && (
                  <button
                    onClick={() => resetForm(stats.nextId)}
                    className="rounded-xl px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-100"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>
            </section>

            {/* PREVIEW */}
            <section className="text-center">
              <div className="mb-3 flex items-center justify-center gap-3">
                <h2 className="font-bold text-[#281065]">Certificate Preview</h2>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">A4 Landscape</span>
              </div>
              <ScaledCertificate data={previewData} />
            </section>
          </div>
        )}

        {/* ================= HISTORY ================= */}
        {view === "history" && (
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-5 text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-[#25105f]">Certificate History</h1>
              <p className="mt-1 text-sm text-gray-600">Saare distribute hue certificates, edits aur class-wise record</p>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
              <Stat label="Total Distributed" value={stats.total} />
              <Stat label="Edited Certificates" value={stats.edited} />
              <Stat label="Showing" value={items.length} />
              <Stat label="Classes Covered" value={Object.values(stats.byClass).filter((n) => n > 0).length} />
            </div>

            <div className="mb-3 flex flex-wrap justify-center gap-2">
              <Chip active={filterClass === "all"} onClick={() => setFilterClass("all")}>
                All ({stats.total})
              </Chip>
              {CLASS_OPTIONS.map((c) => (
                <Chip key={c} active={filterClass === c} onClick={() => setFilterClass(c)}>
                  {classLabel(c)} ({stats.byClass[c] || 0})
                </Chip>
              ))}
            </div>

            <div className="mx-auto mb-4 max-w-[480px]">
              <input className={inputCls} placeholder="Search name, father name ya certificate no" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className="flex flex-col gap-3">
              {items.length === 0 && (
                <div className="rounded-2xl bg-white p-10 text-center text-sm text-gray-500">No certificate found.</div>
              )}

              {items.map((c) => (
                <div key={c._id} className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-lg font-extrabold text-[#35117c]">{c.studentName}</p>
                      <p className="text-sm text-gray-600">
                        S/o · D/o {c.fatherName} • {classLabel(c.studentClass)} • Age {c.age}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        <b>{c.certificateId}</b> • Completed {formatDate(c.completionDate)}
                      </p>
                      <p className="text-xs text-gray-500">
                        Created {dt(c.createdAt)}
                        {c.editCount > 0 && <> • Last edited {dt(c.updatedAt)}</>}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2">
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                        {c.editCount} edit{c.editCount === 1 ? "" : "s"}
                      </span>
                      <Btn onClick={() => setViewing(c)}>View</Btn>
                      <Btn onClick={() => startEdit(c)}>Edit</Btn>
                      <Btn danger onClick={() => remove(c)}>Delete</Btn>
                      {c.editCount > 0 && (
                        <Btn onClick={() => setExpanded(expanded === c._id ? null : c._id)}>
                          {expanded === c._id ? "Hide Log" : "Edit Log"}
                        </Btn>
                      )}
                    </div>
                  </div>

                  {expanded === c._id && (
                    <div className="mt-3 rounded-xl bg-purple-50 p-3 text-left">
                      {[...c.editLog].reverse().map((log, i) => (
                        <div key={i} className="mb-2 border-b border-purple-100 pb-2 last:mb-0 last:border-0 last:pb-0">
                          <p className="text-xs font-bold text-purple-800">Edited on {dt(log.editedAt)}</p>
                          <ul className="mt-1 text-xs text-gray-700">
                            {log.changes.map((ch, j) => (
                              <li key={j}>
                                <b>{ch.field}:</b> <span className="text-red-600 line-through">{ch.from}</span> → <span className="text-green-700">{ch.to}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* VIEW MODAL */}
      {viewing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setViewing(null)}>
          <div className="max-h-[95vh] w-full max-w-[1000px] overflow-auto rounded-3xl bg-white p-4" onClick={(e) => e.stopPropagation()}>
            <ScaledCertificate data={viewing} />
            <div className="mt-4 flex justify-center gap-3">
              <button
                onClick={() => exportPDF(viewing)}
                className="rounded-xl bg-gradient-to-r from-[#6412d4] to-[#9414ec] px-6 py-3 text-sm font-bold text-white"
              >
                ⬇ Download PDF
              </button>
              <button onClick={() => setViewing(null)} className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* OFFSCREEN EXPORT COPY (full 1280x905, sirf PDF ke liye) */}
      <div style={{ position: "fixed", left: -10000, top: 0, pointerEvents: "none" }} aria-hidden>
        <div ref={exportRef} style={{ width: 1280, height: 905 }}>
          <CertificateView data={exportData || previewData} />
        </div>
      </div>
    </div>
  );
}

/* ---------- small helpers ---------- */
function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-purple-100 bg-white p-4 text-center shadow-sm">
      <p className="text-2xl font-extrabold text-[#35117c]">{value}</p>
      <p className="text-xs font-semibold text-gray-500">{label}</p>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
        active ? "bg-gradient-to-r from-[#6412d4] to-[#9414ec] text-white shadow" : "border border-purple-200 bg-white text-purple-700 hover:bg-purple-50"
      }`}
    >
      {children}
    </button>
  );
}

function Btn({ children, onClick, danger }: { children: React.ReactNode; onClick: () => void; danger?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
        danger ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-purple-50 text-purple-700 hover:bg-purple-100"
      }`}
    >
      {children}
    </button>
  );
}