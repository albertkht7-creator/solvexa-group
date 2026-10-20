export type Lang = "PL" | "EN";

export const BASE_URL = "https://www.solvexagroup.co";

export const blogSlugMap: Record<string, string> = {
  "cold-calling-bledy": "cold-calling-mistakes",
  "czego-nauczylem-sie-sluchajac-setek-rozmow": "what-i-learned-listening-to-hundreds-of-sales-calls",
  "demo-ktore-robisz-za-wczesnie": "the-demo-youre-doing-too-early",
  "jak-rozpoznac-dobrego-handlowca": "how-to-spot-a-good-salesperson",
  "jak-wybrac-firme-szkoleniowa-ze-sprzedazy": "how-to-choose-a-sales-training-company",
  "kto-zadaje-pytania-ten-prowadzi": "whoever-asks-the-questions-leads",
  "negocjacje-oferty": "negotiating-a-sales-job-offer",
  "pipeline-ktory-konwertuje": "build-a-pipeline-that-converts",
  "sprzedaz-przegrywasz-w-pierwszych-minutach": "you-lose-the-sale-in-the-first-two-minutes",
  "za-drogo-prawie-nigdy-nie-znaczy-za-drogo": "too-expensive-rarely-means-too-expensive",
  "pytania-rekrutacyjne-na-handlowca": "salesperson-interview-questions",
  "profil-handlowca-b2b": "b2b-salesperson-profile",
  "rozmowa-rekrutacyjna-przedstawiciel-handlowy": "sales-rep-job-interview-step-by-step",
  "jak-rekrutowac-sprzedawcow": "how-to-recruit-salespeople",
  "symulacja-sprzedazowa-na-rekrutacji": "sales-simulation-in-recruitment",
};

export const courseSlugMap: Record<string, string> = {
  "cold-calling": "cold-calling",
  prospecting: "prospecting",
  "pierwsze-spotkanie": "needs-discovery",
  "praca-w-sprzedazy": "sales-career",
  "zmien-swoje-zycie-zawodowe": "career-change",
};

export const trainingSlugMap: Record<string, string> = {
  "cold-calling": "cold-calling",
  "ai-w-sprzedazy": "ai-in-sales",
  "dla-founderow": "for-founders",
};

// Polish path -> English path for pages with a fixed URL.
const staticPaths: Record<string, string> = {
  "/": "/en",
  "/blog": "/en/blog",
  "/szkolenia-sprzedazowe-b2b": "/en/sales-training-b2b",
  "/rekrutacja-handlowcow": "/en/sales-recruitment",
  "/mentoring-sprzedazowy": "/en/sales-mentoring",
};

const invert = (m: Record<string, string>) =>
  Object.fromEntries(Object.entries(m).map(([k, v]) => [v, k]));

const blogEnToPl = invert(blogSlugMap);
const courseEnToPl = invert(courseSlugMap);
const trainingEnToPl = invert(trainingSlugMap);
const staticEnToPl = invert(staticPaths);

export function isEnglishPath(pathname: string): boolean {
  return pathname === "/en" || pathname.startsWith("/en/");
}

export function langFromPath(pathname: string): Lang {
  return isEnglishPath(pathname) ? "EN" : "PL";
}

function trimSlash(p: string) {
  return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
}

// Returns the same page in the other language, or null when it has no counterpart.
export function alternatePath(pathname: string, to: Lang): string | null {
  const p = trimSlash(pathname);
  if (to === "EN") {
    if (isEnglishPath(p)) return p;
    if (staticPaths[p]) return staticPaths[p];
    let m = p.match(/^\/blog\/([^/]+)$/);
    if (m) return blogSlugMap[m[1]] ? `/en/blog/${blogSlugMap[m[1]]}` : null;
    m = p.match(/^\/kursy\/([^/]+)$/);
    if (m) return courseSlugMap[m[1]] ? `/en/courses/${courseSlugMap[m[1]]}` : null;
    m = p.match(/^\/szkolenia-sprzedazowe-b2b\/([^/]+)$/);
    if (m) return trainingSlugMap[m[1]] ? `/en/sales-training-b2b/${trainingSlugMap[m[1]]}` : null;
    return null;
  }
  if (!isEnglishPath(p)) return p;
  if (staticEnToPl[p]) return staticEnToPl[p];
  let m = p.match(/^\/en\/blog\/([^/]+)$/);
  if (m) return blogEnToPl[m[1]] ? `/blog/${blogEnToPl[m[1]]}` : null;
  m = p.match(/^\/en\/courses\/([^/]+)$/);
  if (m) return courseEnToPl[m[1]] ? `/kursy/${courseEnToPl[m[1]]}` : null;
  m = p.match(/^\/en\/sales-training-b2b\/([^/]+)$/);
  if (m) return trainingEnToPl[m[1]] ? `/szkolenia-sprzedazowe-b2b/${trainingEnToPl[m[1]]}` : null;
  return null;
}

// Builds a link in the given language from a Polish-form path, e.g. "/#uslugi" or "/blog".
export function lp(lang: Lang, plPath: string): string {
  if (lang === "PL") return plPath;
  const [base, hash] = plPath.split("#");
  const en = alternatePath(base || "/", "EN") ?? "/en";
  return hash ? `${en}#${hash}` : en;
}

export function absoluteUrl(path: string): string {
  return path === "/" ? BASE_URL : `${BASE_URL}${path}`;
}

// hreflang block for Next metadata. `plPath` is the Polish URL of the page.
export function languageAlternates(plPath: string) {
  const en = alternatePath(plPath, "EN");
  if (!en) return undefined;
  return {
    "pl-PL": absoluteUrl(plPath),
    "en-GB": absoluteUrl(en),
    "x-default": absoluteUrl(plPath),
  };
}
