import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, verifyToken } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const loggedIn = await verifyToken(req.cookies.get(COOKIE_NAME)?.value);

  // login page: pehle se login hai toh seedha dashboard
  if (pathname === "/login") {
    if (loggedIn) return NextResponse.redirect(new URL("/certificate", req.url));
    return NextResponse.next();
  }

  if (loggedIn) return NextResponse.next();

  // API: 401 JSON
  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Login required" }, { status: 401 });
  }

  // Page: login par bhejo
  const url = new URL("/login", req.url);
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/certificate/:path*", "/api/certificates/:path*", "/login"],
};