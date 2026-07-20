import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Picks PL or EN from the browser's Accept-Language header.
 *
 * We deliberately do NOT use edge geolocation headers here: this site is
 * deployed on Netlify, which does not send Vercel's `x-vercel-ip-country`,
 * so the previous geo-based check always fell through to PL and the EN
 * translation was effectively unreachable. Accept-Language is sent by every
 * browser regardless of host, and it reflects the language the visitor
 * actually reads — a Pole browsing from abroad still gets PL.
 *
 * Anything that lists Polish at all → PL. Everything else → EN.
 * Missing/unparseable header → PL (the site's original default).
 */
function detectLang(acceptLanguage: string | null): "PL" | "EN" {
  if (!acceptLanguage) return "PL";
  return /(^|,)\s*pl\b/i.test(acceptLanguage) ? "PL" : "EN";
}

export function proxy(request: NextRequest) {
  // A previously stored cookie always wins — it is either an earlier
  // auto-detection or the visitor's manual PL|EN click, and a manual choice
  // must survive every later visit.
  const stored = request.cookies.get("lang")?.value;
  const lang =
    stored === "PL" || stored === "EN"
      ? stored
      : detectLang(request.headers.get("accept-language"));

  // Forward the resolved language to the render as a request header so the
  // server renders the same language the client will show. Without this the
  // server always rendered PL while the client read the cookie and switched
  // to EN, which is a hydration mismatch.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-lang", lang);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  // Only write on first visit (or if the cookie held a junk value).
  if (stored !== lang) {
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
