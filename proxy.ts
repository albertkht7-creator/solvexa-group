import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Only auto-detect on first visit — if a `lang` cookie already exists
  // (whether set by a previous auto-detection or by the user's manual PL|EN click)
  // we leave it untouched so the manual choice always wins.
  if (!request.cookies.has("lang")) {
    // x-vercel-ip-country is injected by Vercel's edge network.
    // On localhost it is absent (null) — fall back to "PL" so local dev
    // keeps the original site default and doesn't accidentally show EN.
    const country = request.headers.get("x-vercel-ip-country");
    const lang = country === null || country === "PL" ? "PL" : "EN";

    response.cookies.set("lang", lang, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
      // httpOnly defaults to false — client JS must be able to read this cookie
    });
  }

  return response;
}

export const config = {
  matcher: [
    // Run on every route except Next.js internals and static assets
    "/((?!_next/static|_next/image|_next/data|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|woff2?|ttf|eot)$).*)",
  ],
};
