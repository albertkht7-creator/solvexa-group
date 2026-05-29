# SOLVEXA GROUP — Website Design Spec
**Date:** 2026-05-30  
**Project:** solvexa-website  
**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui

---

## 1. Overview

Personal brand + online course platform for **Albert Kohut** — sales trainer, B2B expert, Sales Manager at Revolut Business. Brand: **SOLVEXA GROUP**.

Target audience: handlowcy, przedsiębiorcy, menedżerowie sprzedaży.

Aesthetic: Revolut Business-inspired — dark, premium tech, minimalist. No generic gradients, no Inter font, no "AI slop."

---

## 2. Site Structure

```
/                             ← landing page
/kursy/cold-calling           ← course subpage
/kursy/prospecting            ← course subpage
/kursy/praca-w-sprzedazy      ← course subpage
/blog                         ← blog listing (placeholder)
/blog/[slug]                  ← single post
```

---

## 3. Landing Page — Section Order

### 3.1 Navbar
- Fixed, floating pill — glassmorphism dark (`bg-[#1f1f1f57]`, `backdrop-blur-sm`)
- Border: `border-[#333]`, `rounded-full`
- Logo: "SOLVEXA GROUP" (Geist, white, semibold)
- Links: Usługi | Kursy | O mnie | Kontakt
- CTA button: "Umów rozmowę" (white, rounded-full)
- Mobile: hamburger → dropdown z rounded-xl transition
- Based on: MiniNavbar component from sign-in-flow-1

### 3.2 Hero Section
- **Background:** Pexels 4K rocket launch video (loop, muted, autoplay)
  - Search query: "rocket launch" on pexels.com
  - Overlay: `bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]`
- **Animation sequence (Framer Motion):**
  1. Video starts (0s) — rocket launch close-up, full screen
  2. After 1.5s — fade in `ShaderAnimation` overlay (subtle, low opacity ~15%)
  3. After 2s — slide up + fade in headline:
     - Line 1: "Sky is the limit" (Geist, 80–96px, white, bold)
     - Line 2: "Z nami osiągniesz cele sprzedażowe, do których dążysz." (Geist, 24px, white/70)
  4. After 2.8s — fade in two CTA buttons:
     - Primary: "Sprawdź kursy" → `/kursy/cold-calling`
     - Secondary: "Umów bezpłatną konsultację" → `#kontakt`
- **ShaderAnimation** (`components/ui/shader-animation.tsx`) — abstract Three.js shader, pulsing, dark background vibe, used as subtle overlay layer

### 3.3 Credibility Strip
- Single horizontal row, dark surface (`bg-[#111111]`)
- Logos/badges: Revolut Business | Google for Startups | Warsaw Startup Club
- Subtle separator line top/bottom

### 3.4 O Albercie (About)
- Two-column layout (desktop): left = text, right = photos
- **Background:** `CanvasRevealEffect` (dot matrix, white dots, reverse=false, animationSpeed=3) — appears on scroll via `useInView`
- **Left column:**
  - Label: "O MNIE" (uppercase, muted, small)
  - Headline: "15 lat w okopach sprzedaży B2B."
  - Bio text (from brief): full paragraph about Albert, Revolut Business, consulting practice
  - Tags: `Sales Manager @ Revolut` | `15+ lat B2B` | `500+ przeszkolonych`
- **Right column — photo grid:**
  - Main: professional headshot (`WhatsApp Image 2026-05-29 at 22.19.02.jpeg` → rename: `albert-headshot.jpg`)
  - Secondary top-right: PulseCore Events speaking shot (`WhatsApp Image 2026-05-29 at 20.25.00.jpeg` → `albert-speaking.jpg`)
  - Secondary bottom: Warsaw Startup Club @ Google for Startups (`WhatsApp Image 2026-05-29 at 20.24.58 (1).jpeg` → `albert-google-startups.jpg`)
  - Accent: Revolut office exterior (`WhatsApp Image 2026-05-29 at 20.22.29.jpeg` → `albert-revolut-office.jpg`)

### 3.5 Usługi (Services)
- Two large cards side by side (desktop), stacked (mobile)
- Dark cards: `bg-[#111]`, border `border-white/10`, rounded-2xl
- **Card 01 — Szkolenia sprzedażowe:**
  - Icon: target/arrow Lucide
  - Title: "Szkolenia sprzedażowe"
  - Description from brief
  - Tags: Onsite | Online | Team | Cold calling | Closing
  - CTA: "Dowiedz się więcej" → `#kontakt`
- **Card 02 — Consulting & Mentoring:**
  - Icon: users Lucide
  - Title: "Consulting & Mentoring"
  - Description from brief
  - Tags: 1:1 | CEO | Sales Director | Playbook | Skalowanie
  - CTA: "Dowiedz się więcej" → `#kontakt`
- Hover: subtle border glow (`border-white/30`), scale 1.01

### 3.6 Kursy (Courses)
- Section headline: "Kursy, które sprzedają."
- **ContainerScroll** (`components/ui/container-scroll-animation.tsx`) wrapping the 3 course cards
- 3 cards in horizontal grid:
  1. **Cold Calling** — opis z briefu, CTA → `/kursy/cold-calling`
  2. **Prospecting** — opis z briefu, CTA → `/kursy/prospecting`
  3. **Praca w sprzedaży** — opis z briefu, CTA → `/kursy/praca-w-sprzedazy`
- Card style: dark, numbered (01/02/03), tag badges

### 3.7 Wyniki (Results / Stats)
- Full-width dark section, centered
- 4 animated counters (count-up on scroll):
  - `500+` Przeszkolonych handlowców
  - `15+` Lat doświadczenia w B2B
  - `3` Kursy online
  - `98%` Zadowolonych uczestników
- Large numbers: Geist, 72px, white; labels: muted, 14px

### 3.8 Opinie (Testimonials)
- **CircularTestimonials** (`components/ui/circular-testimonials.tsx`)
- Dark color scheme: `colors={{ name: "#ffffff", designation: "#9ca3af", testimony: "#d1d5db", arrowBackground: "#1a1a1a", arrowHoverBackground: "#3b82f6" }}`
- Testimonials data (2 real + 3 invented):
  1. Real: "Audyt otworzył nam oczy na dziury, które kosztowały nas setki tysięcy złotych rocznie." — Marcin W., CEO, branża SaaS
  2. Real: "Kurs cold callingu to najlepsza inwestycja w swój rozwój jaką zrobiłem w tym roku." — Tomasz K., Senior AE
  3. Invented: "Albert nie uczy teorii. Każda sesja to konkretne narzędzia, które wdrożyłem już następnego dnia." — Karolina M., Sales Manager
  4. Invented: "Mój pipeline wzrósł o 40% w ciągu 8 tygodni od mentoringу." — Paweł R., Founder, B2B startup
  5. Invented: "Nareszcie ktoś, kto tłumaczy sprzedaż tak jak działa w prawdziwym świecie, nie z książki." — Agnieszka T., Handlowiec
- Photos: Unsplash portraits (diverse, professional)

### 3.9 Blog (placeholder)
- 3 placeholder article cards
- Dark cards, category badge, read time, CTA "Czytaj więcej"
- Articles (invented):
  1. "5 błędów cold callingu, które zabijają Twoje wyniki" — Sprzedaż | 5 min
  2. "Jak zbudować pipeline, który naprawdę konwertuje" — Prospecting | 7 min
  3. "Negocjacje oferty pracy w sprzedaży — kompletny przewodnik" — Kariera | 8 min

### 3.10 Kontakt (Contact)
- Section id: `kontakt`
- Left: short CTA text + Albert headshot small
- Right: form
  - Fields: Imię, Nazwisko, Nazwa firmy, Numer telefonu, Email
  - Submit button: "Wyślij wiadomość" (white, full-width, rounded-full)
  - Form action: `mailto:` or API route `/api/contact` (placeholder — no backend in v1)
- Dark background, subtle grid pattern

---

## 4. Course Subpages (`/kursy/[slug]`)

Each course page has:
- Navbar (shared)
- Hero: course title, subtitle, tags, "Zapisz się" CTA
- What you'll learn (bullet list)
- For whom (3 personas)
- Curriculum / modules (accordion)
- Testimonials (2 relevant quotes)
- CTA section: price placeholder + contact form
- Footer

---

## 5. Blog

- `/blog`: grid of article cards, search/filter by category
- `/blog/[slug]`: article content (MDX), TOC sidebar, related posts
- No CMS in v1 — static MDX files in `content/blog/`

---

## 6. Visual System

### Colors
```
--bg:        #0a0a0a
--surface:   #111111
--surface-2: #1a1a1a
--border:    rgba(255,255,255,0.08)
--text:      #ffffff
--muted:     #6b7280
--accent:    #3b82f6  (buttons hover, tags)
```

### Typography
- Font: **Geist** (next/font/google or local) — headlines
- Body: **Geist** regular / 400 weight
- NO Inter, NO Roboto
- Heading scale: 96px hero / 48px h1 / 32px h2 / 24px h3
- Letter spacing: `-0.02em` on headlines

### Animations
- Entry: `useInView` + Framer Motion `initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}`
- Stagger: `0.1s` between list items
- Hover: `scale(1.02)` on cards, `0.2s ease`
- Hero sequence: custom timeline with `useAnimate`

---

## 7. File Structure

```
/
├── app/
│   ├── layout.tsx           ← root layout, Navbar, fonts
│   ├── page.tsx             ← landing page (all sections)
│   ├── kursy/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── api/
│       └── contact/
│           └── route.ts     ← placeholder
├── components/
│   ├── ui/                  ← shadcn + custom components
│   │   ├── container-scroll-animation.tsx
│   │   ├── shader-animation.tsx
│   │   ├── canvas-reveal-effect.tsx  ← extracted from sign-in-flow-1.tsx
│   │   └── circular-testimonials.tsx
│   ├── sections/            ← landing page sections
│   │   ├── Hero.tsx
│   │   ├── CredibilityStrip.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Courses.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── content/
│   └── blog/                ← MDX articles
├── public/
│   └── images/              ← Albert's photos (renamed)
│       ├── albert-headshot.jpg
│       ├── albert-speaking.jpg
│       ├── albert-google-startups.jpg
│       ├── albert-revolut-office.jpg
│       ├── albert-revolut-hoodie.jpg
│       └── albert-conference.jpg
└── lib/
    └── utils.ts
```

---

## 8. NPM Dependencies

```bash
# Core (Next.js project)
next, react, react-dom, typescript

# UI & Animation
framer-motion
three
@react-three/fiber
@react-three/drei

# Icons
react-icons
lucide-react

# shadcn/ui (installed via CLI)
# Tailwind CSS (installed via CLI)

# Fonts
# Geist via next/font/local or npm install geist
geist
```

---

## 9. Image Assets

### Albert's photos (rename from WhatsApp filenames)
| New name | Original | Usage |
|---|---|---|
| `albert-headshot.jpg` | `22.19.02.jpeg` | O mnie — main photo |
| `albert-speaking.jpg` | `20.25.00.jpeg` | O mnie — speaking shot |
| `albert-google-startups.jpg` | `20.24.58 (1).jpeg` | O mnie / credibility |
| `albert-revolut-office.jpg` | `20.22.29.jpeg` | O mnie / Revolut badge |
| `albert-revolut-hoodie.jpg` | `20.22.28.jpeg` | Personality / blog |
| `albert-conference.jpg` | `20.22.26.jpeg` | O mnie / social proof — bez oznaczania drugiej osoby |
| `albert-revolut-event.jpg` | `20.24.56.jpeg` | O mnie / credibility — zdjęcie bez podpisywania drugiej osoby |

### Hero video
- Source: Pexels, search "rocket launch close up", 4K, free license
- Filename: `public/videos/rocket-launch.mp4`
- Max size: ~10MB (compressed with ffmpeg if needed)

### Testimonial avatars
- Source: Unsplash portraits (existing URLs known to exist)

---

## 10. Out of Scope (v1)

- Payment / e-commerce (course purchase flow)
- User accounts / LMS
- Live CMS (blog uses static MDX)
- Email automation
- Analytics beyond basic meta tags
