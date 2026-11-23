import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, SESSION_SECONDS, createToken, safeEqual } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const adminEmail = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
    const adminPassword = process.env.ADMIN_PASSWORD || "";

    if (!adminEmail || !adminPassword || !process.env.AUTH_SECRET) {
      return NextResponse.json(
        { error: "Server par ADMIN_EMAIL, ADMIN_PASSWORD ya AUTH_SECRET set nahi hai" },
        { status: 500 }
      );
    }

    const okEmail = safeEqual(String(email || "").trim().toLowerCase(), adminEmail);
    const okPass = safeEqual(String(password || ""), adminPassword);

    if (!okEmail || !okPass) {
      await new Promise((r) => setTimeout(r, 700)); // brute-force slow
      return NextResponse.json({ error: "Email ya password galat hai" }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set({
      name: COOKIE_NAME,
      value: await createToken(adminEmail),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: SESSION_SECONDS,
    });
    return res;
  } catch (e: any) {
    console.error("POST /api/auth/login", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}