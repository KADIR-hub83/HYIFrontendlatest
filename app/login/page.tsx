"use client";

import React, { useState } from "react";

/* ===== yahan apne hisaab se badlo ===== */
const IMAGE_SRC = "/login-page2.png"; // left side ki image (public folder)
const TERMS_URL = "/terms-of-service"; // apni site ke sahi links daalo
const PRIVACY_URL = "/privacy-policy";
/* ====================================== */

const EyeIcon = ({ off }: { off?: boolean }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
    {off && <path d="M4 4l16 16" />}
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

const inputCls =
  "w-full rounded-lg border border-gray-200 bg-[#f4f6fb] px-4 py-3 text-[15px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#6b4fd8] focus:bg-white focus:ring-4 focus:ring-[#6b4fd8]/15";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [errKey, setErrKey] = useState(0);
  const [capsOn, setCapsOn] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, remember }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "Login failed. Please try again.");
        setErrKey((k) => k + 1);
        setBusy(false);
        return;
      }

      const next = new URLSearchParams(window.location.search).get("next");
      window.location.href = next && next.startsWith("/") ? next : "/certificate";
    } catch {
      setError("Unable to connect to the server. Please try again.");
      setErrKey((k) => k + 1);
      setBusy(false);
    }
  };

  return (
    <main className="grid min-h-screen bg-[#f6f6f8] lg:h-screen lg:grid-cols-2">
      {/* ================= LEFT: FULL-HEIGHT IMAGE ================= */}
      <section className="relative hidden h-full overflow-hidden  lg:block">
        <img
          src={IMAGE_SRC}
          alt="HYI.AI certificate"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
      </section>

      {/* ================= RIGHT: SIGN IN ================= */}
      <section className="flex h-full items-center justify-center bg-white/80 overflow-y-auto px-5 py-8 sm:px-10">
        <div className="login-fade w-full max-w-[460px] text-center">
          

          <form
            onSubmit={submit}
            className="rounded-2xl border border-gray-200 bg-white p-7 text-left shadow-[0_8px_30px_rgba(20,10,60,0.06)] sm:p-8"
          >
            <img src="/logo-icon.svg" alt="HYI AI" className="mx-auto mb-4 h-auto w-[96px]" />
            <p className="mb-6 mt-1.5 text-center text-[15px] text-gray-500">
              Enter your email and password to access the dashboard
            </p>

            {/* EMAIL */}
            <label htmlFor="email" className="mb-2 block text-[15px] font-semibold text-gray-900">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoFocus
              autoComplete="username"
              required
              className={inputCls}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />

            {/* PASSWORD */}
            <label htmlFor="password" className="mb-2 mt-4 block text-[15px] font-semibold text-gray-900">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={show ? "text" : "password"}
                autoComplete="current-password"
                required
                className={`${inputCls} pr-12`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={(e) => setCapsOn(e.getModifierState("CapsLock"))}
                onKeyDown={(e) => setCapsOn(e.getModifierState("CapsLock"))}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                aria-label={show ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-gray-500 transition hover:text-[#6b4fd8]"
              >
                <EyeIcon off={show} />
              </button>
            </div>

            {capsOn && <p className="mt-2 text-xs font-semibold text-amber-600">Caps Lock is on</p>}

            {/* REMEMBER + FORGOT */}
            <div className="mt-4 flex items-center justify-between">
              <label className="flex cursor-pointer select-none items-center gap-2.5 text-[15px] text-gray-900">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span
                  className={`grid h-5 w-5 place-items-center rounded-full border-2 border-[#6b4fd8] text-white transition ${
                    remember ? "bg-[#6b4fd8]" : "bg-white"
                  }`}
                >
                  {remember && <CheckIcon />}
                </span>
                Remember me
              </label>

              <button
                type="button"
                onClick={() => setShowHelp((s) => !s)}
                className="text-[15px] font-medium text-[#6b4fd8] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {showHelp && (
              <p className="mt-3 rounded-lg border border-purple-100 bg-purple-50 px-4 py-2.5 text-center text-sm text-purple-800">
                Please contact the HYI.AI administrator to reset your password.
              </p>
            )}

            {/* ERROR */}
            {error && (
              <p
                key={errKey}
                role="alert"
                className="login-shake mt-4 rounded-lg border border-red-100 bg-red-50 px-4 py-2.5 text-center text-sm font-semibold text-red-600"
              >
                {error}
              </p>
            )}

            {/* SUBMIT */}
                       <button
              type="submit"
              disabled={busy || !email || !password}
              className="login-btn mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-[15px] font-semibold"
            >
              {busy ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
                    <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </>
              )}
            </button>
            <p className="mt-5 text-center text-[15px] text-gray-500">
              Need access? <span className="font-medium text-[#6b4fd8]">Contact your administrator</span>
            </p>
          </form>

          <div className="mt-5 flex items-center justify-center gap-3 text-sm text-gray-500">
            <a href={TERMS_URL} className="hover:text-[#6b4fd8]">Terms of Service</a>
            <span>•</span>
            <a href={PRIVACY_URL} className="hover:text-[#6b4fd8]">Privacy Policy</a>
          </div>
          <p className="mt-2 text-sm text-gray-500">© {new Date().getFullYear()} HYI.AI Private Limited.</p>
        </div>
      </section>

      <style>{`
        @keyframes loginFade {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes loginShake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
        .login-fade  { animation: loginFade 0.5s ease-out both; }
        .login-shake { animation: loginShake 0.4s ease-in-out; }
        @media (prefers-reduced-motion: reduce) {
          .login-fade, .login-shake { animation: none; }
        }
                  .login-btn {
          background: linear-gradient(135deg, #5b3fd0 0%, #7a4ff0 100%) !important;
          color: #ffffff !important;
          border: 0 !important;
          box-shadow: 0 10px 24px rgba(107, 79, 216, 0.35);
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
        }
        .login-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 14px 30px rgba(107, 79, 216, 0.45);
          filter: brightness(1.08);
        }
        .login-btn:active:not(:disabled) {
          transform: translateY(0) scale(0.99);
        }
        .login-btn:disabled {
          opacity: 0.55 !important;
          cursor: not-allowed;
          box-shadow: none;
        }
      `}</style>
    </main>
  );
}