import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const xfHost = request.headers.get("x-forwarded-host") ?? "";
  const effectiveHost = xfHost || host;

  if (effectiveHost.startsWith("www.")) {
    const path = request.nextUrl.pathname;
    const canonical = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
    const res = NextResponse.redirect(
      `https://primara365.com${canonical}${request.nextUrl.search}`,
      { status: 308 }
    );
    res.headers.set("x-mw-host", effectiveHost);
    return res;
  }

  const res = NextResponse.next();
  res.headers.set("x-mw-host", effectiveHost);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
