export const COOKIE_NAME = "hyi_session";
export const SESSION_SECONDS = 60 * 60 * 8; // 8 ghante

const enc = new TextEncoder();

function toB64Url(bytes: Uint8Array) {
  let s = "";
  bytes.forEach((b) => (s += String.fromCharCode(b)));
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromB64Url(str: string) {
  const bin = atob(str.replace(/-/g, "+").replace(/_/g, "/"));
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

async function sign(data: string, secret: string) {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return toB64Url(new Uint8Array(sig));
}

/** constant-time compare */
export function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

export async function createToken(email: string) {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET missing in .env.local");
  const exp = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = toB64Url(enc.encode(JSON.stringify({ email, exp })));
  return `${payload}.${await sign(payload, secret)}`;
}

export async function verifyToken(token?: string): Promise<boolean> {
  try {
    const secret = process.env.AUTH_SECRET;
    if (!secret || !token) return false;
    const [payload, sig] = token.split(".");
    if (!payload || !sig) return false;
    if (!safeEqual(sig, await sign(payload, secret))) return false;
    const { exp } = JSON.parse(new TextDecoder().decode(fromB64Url(payload)));
    return typeof exp === "number" && exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}