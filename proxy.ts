import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { alternatePath, isEnglishPath } from "@/lib/routes";

/**
 * Language routing. Polish pages live at the root, English pages under /en, so
 * the URL itself decides the language of a page and every page is static.
 *
 * The only thing done here is a first-visit convenience redirect from a Polish
 * URL to its English twin:
 *  - the visitor chose English earlier (lang cookie = EN), or
 *  - there is no cookie yet and the browser does not list Polish at all.
 * Search engine crawlers are never redirected, so both language versions stay
 * indexable (hreflang in the page metadata links them together). English URLs
 * are never redirected away.
 */
const BOT = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|linkedinbot|embedly|quora|pinterest|whatsapp|telegram|headless|lighthouse/i;

function browserWantsPolish(acceptLanguage: string | null): boolean {
  if (!acceptLanguage) return true; // missing header -> original default (PL)
  return /(^|,)\s*pl\b/i.test(acceptLanguage);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const stored = request.cookies.get("lang")?.value;
  const isBot = BOT.test(request.headers.get("user-agent") ?? "");
  const english = isEnglishPath(pathname);

  if (!english && !isBot) {
    const wantsEnglish =
      stored === "EN" || (stored !== "PL" && !browserWantsPolish(request.headers.get("accept-language")));
    if (wantsEnglish) {
      const target = alternatePath(pathname, "EN");
      if (target) {
        const url = request.nextUrl.clone();
        url.pathname = target;
        const redirect = NextResponse.redirect(url, 307);
        if (stored !== "EN") {
          redirect.cookies.set("lang", "EN", { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
        }
        return redirect;
      }
    }
  }

  const response = NextResponse.next();
  if (stored !== "PL" && stored !== "EN" && !isBot) {
    response.cookies.set("lang", english ? "EN" : "PL", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      // httpOnly defaults to false: client JS reads and writes this cookie on toggle
    });
  }
  return response;
}

export const config = {
  matcher: [
    // Pages only: skip API routes, Next.js internals, metadata files and static assets
    "/((?!api|_next/static|_next/image|_next/data|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|woff2?|ttf|eot|ico|txt|xml)$).*)",
  ],
};
