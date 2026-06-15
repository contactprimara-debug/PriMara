import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host.startsWith("www.")) {
    const path = request.nextUrl.pathname;
    // Strip trailing slash except on root, then redirect www → non-www in one hop
    const canonical = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
    return NextResponse.redirect(
      `https://primara365.com${canonical}${request.nextUrl.search}`,
      { status: 308 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
