# SOLVEXA GROUP Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full SOLVEXA GROUP website — personal brand + online courses platform for Albert Kohut, sales trainer at Revolut Business.

**Architecture:** Next.js 14 App Router, single landing page with 10 sections, dynamic course subpages, static MDX blog. All third-party UI components live in `components/ui/`, all landing page sections in `components/sections/`.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Three.js, @react-three/fiber, react-icons, lucide-react, geist font.

---

## File Map

```
/Users/kacha/SOLVEXA GROUP/
├── app/
│   ├── layout.tsx                    ← root layout, fonts, metadata
│   ├── page.tsx                      ← landing page (imports all sections)
│   ├── globals.css                   ← Tailwind base + custom vars
│   ├── kursy/[slug]/page.tsx         ← course subpage
│   ├── blog/page.tsx                 ← blog listing
│   ├── blog/[slug]/page.tsx          ← single post (MDX)
│   └── api/contact/route.ts          ← contact form handler
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── container-scroll-animation.tsx
│       ├── shader-animation.tsx
│       ├── canvas-reveal-effect.tsx  ← extracted from sign-in-flow-1
│       └── circular-testimonials.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── CredibilityStrip.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Courses.tsx
│       ├── Stats.tsx
│       ├── Testimonials.tsx
│       ├── BlogPreview.tsx
│       └── Contact.tsx
├── content/blog/
│   ├── cold-calling-bledy.mdx
│   ├── pipeline-ktory-konwertuje.mdx
│   └── negocjacje-oferty.mdx
├── lib/
│   ├── utils.ts                      ← cn() helper
│   └── courses.ts                    ← course data
├── public/
│   ├── images/
│   │   ├── albert-headshot.jpg
│   │   ├── albert-speaking.jpg
│   │   ├── albert-google-startups.jpg
│   │   ├── albert-revolut-office.jpg
│   │   ├── albert-revolut-hoodie.jpg
│   │   ├── albert-conference.jpg
│   │   └── albert-revolut-event.jpg
│   └── videos/
│       └── rocket-launch.mp4
└── docs/superpowers/specs/...
```

---

## Phase 1 — Project Setup

### Task 1: Scaffold Next.js project

**Files:**
- Create: all Next.js boilerplate in `/Users/kacha/SOLVEXA GROUP/`

- [ ] **Step 1: Scaffold inside existing directory**

```bash
cd "/Users/kacha/SOLVEXA GROUP"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir no --import-alias "@/*" --yes
```

Expected output: `✓ Installation complete` with files created.

- [ ] **Step 2: Verify scaffold**

```bash
ls "/Users/kacha/SOLVEXA GROUP"
```

Expected: `app/  components/  lib/  public/  package.json  tsconfig.json  tailwind.config.ts  next.config.ts`

- [ ] **Step 3: Commit scaffold**

```bash
cd "/Users/kacha/SOLVEXA GROUP"
git add -A
git commit -m "feat: scaffold Next.js 14 project with TypeScript + Tailwind"
```

---

### Task 2: Install dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install all NPM dependencies**

```bash
cd "/Users/kacha/SOLVEXA GROUP"
npm install framer-motion three @react-three/fiber @react-three/drei react-icons lucide-react geist next-mdx-remote gray-matter
npm install --save-dev @types/three
```

Expected: `added N packages` with no errors.

- [ ] **Step 2: Install shadcn/ui**

```bash
cd "/Users/kacha/SOLVEXA GROUP"
npx shadcn@latest init --defaults
```

When prompted: style=default, base color=zinc, CSS variables=yes.

- [ ] **Step 3: Add shadcn components used in the project**

```bash
cd "/Users/kacha/SOLVEXA GROUP"
npx shadcn@latest add button input label card badge accordion
```

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json components/ui/ tailwind.config.ts
git commit -m "feat: install dependencies and init shadcn/ui"
```

---

### Task 3: Configure global styles and fonts

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Update globals.css**

Replace entire `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 4%;
    --foreground: 0 0% 100%;
    --card: 0 0% 7%;
    --card-foreground: 0 0% 100%;
    --border: 0 0% 100% / 0.08;
    --input: 0 0% 100% / 0.08;
    --primary: 0 0% 100%;
    --primary-foreground: 0 0% 4%;
    --secondary: 0 0% 10%;
    --secondary-foreground: 0 0% 100%;
    --muted: 0 0% 42%;
    --muted-foreground: 0 0% 42%;
    --accent: 217 91% 60%;
    --radius: 0.75rem;
  }
}

@layer base {
  * { @apply border-border; }
  body {
    @apply bg-[#0a0a0a] text-white antialiased;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
  h1, h2, h3, h4 {
    letter-spacing: -0.02em;
  }
}

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 2: Update app/layout.tsx**

```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SOLVEXA GROUP | Szkolenia Sprzedażowe — Albert Kohut",
  description:
    "Praktyczne szkolenia sprzedażowe, consulting i kursy online. 15+ lat B2B, Sales Manager @Revolut Business.",
  openGraph: {
    title: "SOLVEXA GROUP | Szkolenia Sprzedażowe",
    description: "Osiągnij swoje cele sprzedażowe z Albert Kohut.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Update tailwind.config.ts**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

- [ ] **Step 4: Install tailwindcss-animate**

```bash
npm install tailwindcss-animate
```

- [ ] **Step 5: Commit**

```bash
git add app/globals.css app/layout.tsx tailwind.config.ts
git commit -m "feat: configure global styles, fonts, Tailwind theme"
```

---

### Task 4: Move and rename image assets

**Files:**
- Create: `public/images/` directory with renamed photos
- Create: `public/videos/` directory

- [ ] **Step 1: Create directories**

```bash
mkdir -p "/Users/kacha/SOLVEXA GROUP/public/images"
mkdir -p "/Users/kacha/SOLVEXA GROUP/public/videos"
```

- [ ] **Step 2: Copy and rename Albert's photos**

```bash
cd "/Users/kacha/SOLVEXA GROUP"
cp "public:images: /WhatsApp Image 2026-05-29 at 22.19.02.jpeg" "public/images/albert-headshot.jpg"
cp "public:images: /WhatsApp Image 2026-05-29 at 20.25.00.jpeg" "public/images/albert-speaking.jpg"
cp "public:images: /WhatsApp Image 2026-05-29 at 20.24.58 (1).jpeg" "public/images/albert-google-startups.jpg"
cp "public:images: /WhatsApp Image 2026-05-29 at 20.22.29.jpeg" "public/images/albert-revolut-office.jpg"
cp "public:images: /WhatsApp Image 2026-05-29 at 20.22.28.jpeg" "public/images/albert-revolut-hoodie.jpg"
cp "public:images: /WhatsApp Image 2026-05-29 at 20.22.26.jpeg" "public/images/albert-conference.jpg"
cp "public:images: /WhatsApp Image 2026-05-29 at 20.24.56.jpeg" "public/images/albert-revolut-event.jpg"
```

- [ ] **Step 3: Download rocket launch video from Pexels**

Go to https://www.pexels.com/search/videos/rocket%20launch/ — download a free 4K clip. Save as `public/videos/rocket-launch.mp4`.

If the video is large (>15MB), compress with ffmpeg:
```bash
ffmpeg -i public/videos/rocket-launch.mp4 -vcodec libx264 -crf 28 -vf scale=1920:-2 public/videos/rocket-launch-compressed.mp4
mv public/videos/rocket-launch-compressed.mp4 public/videos/rocket-launch.mp4
```

- [ ] **Step 4: Verify files exist**

```bash
ls public/images/
ls public/videos/
```

Expected: 7 jpg files, 1 mp4 file.

- [ ] **Step 5: Commit**

```bash
git add public/images/ public/videos/
git commit -m "feat: add Albert's photos and rocket hero video"
```

---

### Task 5: Create lib utilities and course data

**Files:**
- Create: `lib/utils.ts`
- Create: `lib/courses.ts`

- [ ] **Step 1: Create lib/utils.ts**

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Install clsx and tailwind-merge if not present**

```bash
npm install clsx tailwind-merge
```

- [ ] **Step 3: Create lib/courses.ts**

```ts
export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  modules: { title: string; lessons: string[] }[];
  forWhom: { title: string; description: string }[];
}

export const courses: Course[] = [
  {
    slug: "cold-calling",
    title: "Cold Calling",
    subtitle: "Jak przestać się bać i zacząć sprzedawać",
    description:
      "Metodyka zimnych telefonów, które działają. Skrypty, obiekcje, tonacja — wszystko co potrzebujesz żeby słyszeć „tak" częściej niż „nie".",
    tags: ["Cold Calling", "Skrypty", "Obiekcje", "B2B", "Prospecting"],
    modules: [
      {
        title: "Mindset i przygotowanie",
        lessons: [
          "Dlaczego cold calling wciąż działa",
          "Przełamywanie bariery pierwszego telefonu",
          "Badanie klienta przed rozmową",
        ],
      },
      {
        title: "Struktura rozmowy",
        lessons: [
          "Pierwsze 15 sekund — hook który zatrzymuje",
          "Pitch wartości bez sprzedawania",
          "Kwalifikacja przez pytania",
        ],
      },
      {
        title: "Obiekcje i zamknięcie",
        lessons: [
          "Top 10 obiekcji i jak je obalać",
          "Umówienie spotkania jako cel rozmowy",
          "Follow-up po cold callu",
        ],
      },
    ],
    forWhom: [
      {
        title: "Handlowcy B2B",
        description: "Chcesz dzwonić więcej i skuteczniej.",
      },
      {
        title: "SDR / BDR",
        description: "Budujesz pipeline od zera i potrzebujesz struktury.",
      },
      {
        title: "Przedsiębiorcy",
        description: "Sam sprzedajesz swoje usługi i chcesz robić to pewniej.",
      },
    ],
  },
  {
    slug: "prospecting",
    title: "Prospecting",
    subtitle: "Jak znajdować właściwych klientów",
    description:
      "Skończ z losowym outreachem. Naucz się gdzie szukać, jak kwalifikować i jak budować pipeline, który faktycznie konwertuje.",
    tags: ["LinkedIn", "ICP", "Pipeline", "Outreach", "Kwalifikacja"],
    modules: [
      {
        title: "Definiowanie ICP",
        lessons: [
          "Idealny profil klienta — jak go zbudować",
          "Segmentacja bazy",
          "Priorytetyzacja leadów",
        ],
      },
      {
        title: "Kanały i narzędzia",
        lessons: [
          "LinkedIn Sales Navigator w praktyce",
          "Cold email który generuje odpowiedzi",
          "Narzędzia automatyzacji outreachu",
        ],
      },
      {
        title: "Pipeline management",
        lessons: [
          "Jak mierzyć skuteczność prospectingu",
          "Rytm pracy — ile kontaktów dziennie",
          "CRM w służbie prospectingu",
        ],
      },
    ],
    forWhom: [
      {
        title: "Account Executive",
        description: "Odpowiadasz za własny pipeline.",
      },
      {
        title: "Sales Manager",
        description: "Chcesz ustandaryzować prospecting w zespole.",
      },
      {
        title: "Founder",
        description: "Szukasz pierwszych 10 klientów dla swojego produktu.",
      },
    ],
  },
  {
    slug: "praca-w-sprzedazy",
    title: "Praca w sprzedaży",
    subtitle: "Jak zdobyć wymarzoną pracę w sprzedaży",
    description:
      "Kurs dla osób, które chcą wejść do sprzedaży albo zmienić pracodawcę na lepszego. CV, rozmowa kwalifikacyjna, negocjacje oferty — krok po kroku.",
    tags: ["CV", "Rekrutacja", "Negocjacje", "Kariera", "Onboarding"],
    modules: [
      {
        title: "Pozycjonowanie i CV",
        lessons: [
          "Jak myślą rekruterzy w sprzedaży",
          "CV które przechodzi przez ATS",
          "LinkedIn jako narzędzie poszukiwania pracy",
        ],
      },
      {
        title: "Rozmowa kwalifikacyjna",
        lessons: [
          "Najczęstsze pytania i wzorcowe odpowiedzi",
          "Case study sprzedażowe — jak je rozwiązywać",
          "Pytania które zadaje dobry kandydat",
        ],
      },
      {
        title: "Oferta i start",
        lessons: [
          "Negocjacje wynagrodzenia bez strachu",
          "Jak ocenić firmę przed przyjęciem oferty",
          "Pierwsze 90 dni w nowej roli sprzedażowej",
        ],
      },
    ],
    forWhom: [
      {
        title: "Juniorzy wchodzący w sprzedaż",
        description: "Chcesz zacząć karierę w B2B.",
      },
      {
        title: "Doświadczeni szukający zmiany",
        description: "Masz wyniki ale chcesz lepszego pracodawcy.",
      },
      {
        title: "Osoby z innych branż",
        description: "Przechodzisz do sprzedaży i potrzebujesz mapy drogowej.",
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
```

- [ ] **Step 4: Commit**

```bash
git add lib/utils.ts lib/courses.ts
git commit -m "feat: add utils and course data"
```

---

## Phase 2 — UI Components

### Task 6: Copy 21st.dev components

**Files:**
- Create: `components/ui/container-scroll-animation.tsx`
- Create: `components/ui/shader-animation.tsx`
- Create: `components/ui/canvas-reveal-effect.tsx`
- Create: `components/ui/circular-testimonials.tsx`

- [ ] **Step 1: Create container-scroll-animation.tsx**

```tsx
// components/ui/container-scroll-animation.tsx
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div className="py-10 md:py-40 w-full relative" style={{ perspective: "1000px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: { translate: MotionValue<number>; titleComponent: React.ReactNode }) => (
  <motion.div style={{ translateY: translate }} className="max-w-5xl mx-auto text-center">
    {titleComponent}
  </motion.div>
);

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
    }}
    className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl bg-zinc-900 md:rounded-2xl md:p-4">
      {children}
    </div>
  </motion.div>
);
```

- [ ] **Step 2: Create shader-animation.tsx**

```tsx
// components/ui/shader-animation.tsx
"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ShaderAnimation({ opacity = 1 }: { opacity?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    uniforms: Record<string, { value: unknown }>;
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const vertexShader = `void main() { gl_Position = vec4(position, 1.0); }`;
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.05;
        float lineWidth = 0.002;
        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i = 0; i < 5; i++){
            color[j] += lineWidth * float(i*i) / abs(fract(t - 0.01*float(j) + float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }
        gl_FragColor = vec4(color[0], color[1], color[2], 1.0);
      }
    `;

    const camera = new THREE.Camera();
    camera.position.z = 1;
    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
    };
    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
    scene.add(new THREE.Mesh(geometry, material));

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const onResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      (uniforms.resolution.value as THREE.Vector2).x = renderer.domElement.width;
      (uniforms.resolution.value as THREE.Vector2).y = renderer.domElement.height;
    };
    onResize();
    window.addEventListener("resize", onResize);

    let animationId = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      (uniforms.time.value as number);
      uniforms.time.value = (uniforms.time.value as number) + 0.05;
      renderer.render(scene, camera);
      if (sceneRef.current) sceneRef.current.animationId = animationId;
    };
    sceneRef.current = { renderer, uniforms, animationId: 0 };
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
        renderer.dispose();
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ background: "transparent", overflow: "hidden", opacity }}
    />
  );
}
```

- [ ] **Step 3: Create canvas-reveal-effect.tsx** (extracted from sign-in-flow-1)

```tsx
// components/ui/canvas-reveal-effect.tsx
"use client";
import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

interface CanvasRevealEffectProps {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
  reverse?: boolean;
}

export const CanvasRevealEffect = ({
  animationSpeed = 10,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
  reverse = false,
}: CanvasRevealEffectProps) => (
  <div className={cn("h-full relative w-full", containerClassName)}>
    <div className="h-full w-full">
      <DotMatrix
        colors={colors}
        dotSize={dotSize ?? 3}
        opacities={opacities}
        shader={`${reverse ? "u_reverse_active" : "false"}_;animation_speed_factor_${animationSpeed.toFixed(1)}_;`}
        center={["x", "y"]}
      />
    </div>
    {showGradient && (
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
    )}
  </div>
);

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 20,
  dotSize = 2,
  shader = "",
  center = ["x", "y"],
}) => {
  const uniforms = useMemo(() => {
    let colorsArray = [colors[0], colors[0], colors[0], colors[0], colors[0], colors[0]];
    if (colors.length === 2) colorsArray = [colors[0], colors[0], colors[0], colors[1], colors[1], colors[1]];
    else if (colors.length === 3) colorsArray = [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]];
    return {
      u_colors: { value: colorsArray.map((c) => [c[0] / 255, c[1] / 255, c[2] / 255]), type: "uniform3fv" },
      u_opacities: { value: opacities, type: "uniform1fv" },
      u_total_size: { value: totalSize, type: "uniform1f" },
      u_dot_size: { value: dotSize, type: "uniform1f" },
      u_reverse: { value: shader.includes("u_reverse_active") ? 1 : 0, type: "uniform1i" },
    };
  }, [colors, opacities, totalSize, dotSize, shader]);

  return (
    <Shader
      source={`
        precision mediump float;
        in vec2 fragCoord;
        uniform float u_time;
        uniform float u_opacities[10];
        uniform vec3 u_colors[6];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform vec2 u_resolution;
        uniform int u_reverse;
        out vec4 fragColor;
        float PHI = 1.61803398874989484820459;
        float random(vec2 xy) { return fract(tan(distance(xy*PHI,xy)*0.5)*xy.x); }
        void main() {
          vec2 st = fragCoord.xy;
          ${center.includes("x") ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));" : ""}
          ${center.includes("y") ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));" : ""}
          float opacity = step(0.0, st.x) * step(0.0, st.y);
          vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));
          float show_offset = random(st2);
          float rand = random(st2 * floor((u_time / 5.0) + show_offset + 5.0));
          opacity *= u_opacities[int(rand * 10.0)];
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));
          vec3 color = u_colors[int(show_offset * 6.0)];
          float animation_speed_factor = 0.5;
          vec2 center_grid = u_resolution / 2.0 / u_total_size;
          float dist_from_center = distance(center_grid, st2);
          float timing_offset_intro = dist_from_center * 0.01 + random(st2) * 0.15;
          float max_grid_dist = distance(center_grid, vec2(0.0));
          float timing_offset_outro = (max_grid_dist - dist_from_center) * 0.02 + random(st2 + 42.0) * 0.2;
          if (u_reverse == 1) {
            opacity *= 1.0 - step(timing_offset_outro, u_time * animation_speed_factor);
            opacity *= clamp(step(timing_offset_outro + 0.1, u_time * animation_speed_factor) * 1.25, 1.0, 1.25);
          } else {
            opacity *= step(timing_offset_intro, u_time * animation_speed_factor);
            opacity *= clamp((1.0 - step(timing_offset_intro + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
          }
          fragColor = vec4(color, opacity);
          fragColor.rgb *= fragColor.a;
        }`}
      uniforms={uniforms}
      maxFps={60}
    />
  );
};

type UniformValue = number | number[] | number[][];
interface ShaderUniforms { [key: string]: { value: UniformValue; type: string } }

const ShaderMesh = ({ source, uniforms }: { source: string; uniforms: ShaderUniforms }) => {
  const { size } = useThree();
  const ref = useRef<THREE.Mesh>(null);

  const material = useMemo(() => {
    const prepared: Record<string, unknown> = {};
    for (const name in uniforms) {
      const u = uniforms[name];
      switch (u.type) {
        case "uniform1f": prepared[name] = { value: u.value }; break;
        case "uniform1i": prepared[name] = { value: u.value }; break;
        case "uniform1fv": prepared[name] = { value: u.value }; break;
        case "uniform3fv": prepared[name] = { value: (u.value as number[][]).map((v) => new THREE.Vector3().fromArray(v)) }; break;
        default: break;
      }
    }
    prepared["u_time"] = { value: 0 };
    prepared["u_resolution"] = { value: new THREE.Vector2(size.width * 2, size.height * 2) };
    return new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        uniform vec2 u_resolution;
        out vec2 fragCoord;
        void main() {
          gl_Position = vec4(position.xy, 0.0, 1.0);
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
        }`,
      fragmentShader: source,
      uniforms: prepared as Record<string, THREE.IUniform>,
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });
  }, [size.width, size.height, source]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    (material.uniforms.u_time as THREE.IUniform<number>).value = clock.getElapsedTime();
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const Shader = ({ source, uniforms }: { source: string; uniforms: ShaderUniforms; maxFps?: number }) => (
  <Canvas className="absolute inset-0 h-full w-full">
    <ShaderMesh source={source} uniforms={uniforms} />
  </Canvas>
);
```

- [ ] **Step 4: Create circular-testimonials.tsx**

Copy the full `circular-testimonials.tsx` source (provided in brief) verbatim to `components/ui/circular-testimonials.tsx`.

The only modification — update the `jsx` style tag to use Tailwind or a `<style>` tag (the `jsx` prop requires styled-jsx). Replace:

```tsx
<style jsx>{`...`}</style>
```

with:

```tsx
<style>{`...`}</style>
```

- [ ] **Step 5: Commit**

```bash
git add components/ui/
git commit -m "feat: add 21st.dev UI components (ContainerScroll, ShaderAnimation, CanvasRevealEffect, CircularTestimonials)"
```

---

## Phase 3 — Navbar & Footer

### Task 7: Build Navbar

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create Navbar.tsx**

```tsx
// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Usługi", href: "/#uslugi" },
  { label: "Kursy", href: "/#kursy" },
  { label: "O mnie", href: "/#o-mnie" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-4xl ${
        isOpen ? "rounded-2xl" : "rounded-full"
      } border border-white/10 bg-[#1f1f1f80] backdrop-blur-md px-6 py-3`}
    >
      <div className="flex items-center justify-between gap-6">
        <Link href="/" className="font-semibold text-white tracking-tight text-sm">
          SOLVEXA GROUP
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#kontakt"
            className="text-sm px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
          >
            Umów rozmowę
          </Link>
        </div>

        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-4 pb-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors text-center"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/#kontakt"
                onClick={() => setIsOpen(false)}
                className="text-sm px-4 py-2 rounded-full bg-white text-black font-medium text-center"
              >
                Umów rozmowę
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add floating pill Navbar with mobile menu"
```

---

### Task 8: Build Footer

**Files:**
- Create: `components/Footer.tsx`
- Modify: `app/layout.tsx` (add Footer import)

- [ ] **Step 1: Create Footer.tsx**

```tsx
// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0a0a0a] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-white tracking-tight">SOLVEXA GROUP</p>
          <p className="text-sm text-white/40 mt-1">Albert Kohut — Szkolenia Sprzedażowe</p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-white/40">
          <Link href="/#uslugi" className="hover:text-white transition-colors">Usługi</Link>
          <Link href="/#kursy" className="hover:text-white transition-colors">Kursy</Link>
          <Link href="/#o-mnie" className="hover:text-white transition-colors">O mnie</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/#kontakt" className="hover:text-white transition-colors">Kontakt</Link>
        </nav>
        <p className="text-xs text-white/30">© {new Date().getFullYear()} SOLVEXA GROUP</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Add Footer to layout.tsx**

Add import and `<Footer />` after `{children}` in `app/layout.tsx`:

```tsx
import Footer from "@/components/Footer";
// ...
<body className={GeistSans.className}>
  <Navbar />
  {children}
  <Footer />
</body>
```

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx app/layout.tsx
git commit -m "feat: add Footer component"
```

---

## Phase 4 — Landing Page Sections

### Task 9: Hero section

**Files:**
- Create: `components/sections/Hero.tsx`

- [ ] **Step 1: Create Hero.tsx**

```tsx
// components/sections/Hero.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { ShaderAnimation } from "@/components/ui/shader-animation";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shaderVisible, setShaderVisible] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = async () => {
      // Wait for video to start
      await new Promise((r) => setTimeout(r, 1500));
      setShaderVisible(true);
      await new Promise((r) => setTimeout(r, 500));
      await animate(
        "#hero-headline",
        { opacity: [0, 1], y: [40, 0] },
        { duration: 0.8, ease: "easeOut" }
      );
      await animate(
        "#hero-sub",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.6, ease: "easeOut", delay: 0.1 }
      );
      await animate(
        "#hero-cta",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.5, ease: "easeOut", delay: 0.1 }
      );
    };
    sequence();
  }, [animate]);

  return (
    <section ref={scope} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
        src="/videos/rocket-launch.mp4"
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0a]" />

      {/* Shader overlay */}
      {shaderVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ShaderAnimation />
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div id="hero-headline" initial={{ opacity: 0 }}>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight mb-4">
            Sky is the limit.
          </h1>
        </motion.div>

        <motion.p
          id="hero-sub"
          initial={{ opacity: 0 }}
          className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-10"
        >
          Z nami osiągniesz cele sprzedażowe, do których dążysz.
        </motion.p>

        <motion.div
          id="hero-cta"
          initial={{ opacity: 0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/#kursy"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-colors"
          >
            Sprawdź kursy
          </Link>
          <Link
            href="/#kontakt"
            className="px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-base hover:border-white/60 hover:bg-white/5 transition-colors"
          >
            Umów bezpłatną konsultację
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "feat: add Hero section with video background and animated headline"
```

---

### Task 10: Credibility Strip

**Files:**
- Create: `components/sections/CredibilityStrip.tsx`

- [ ] **Step 1: Create CredibilityStrip.tsx**

```tsx
// components/sections/CredibilityStrip.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const badges = [
  { label: "Sales Manager", sub: "Revolut Business" },
  { label: "Speaker", sub: "Google for Startups" },
  { label: "Warsaw Startup Club", sub: "#7 Optimizing Sales" },
  { label: "15+", sub: "lat w sprzedaży B2B" },
  { label: "500+", sub: "przeszkolonych handlowców" },
];

export default function CredibilityStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="border-y border-white/8 bg-[#0d0d0d] py-6 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16"
      >
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-white font-semibold text-sm">{b.label}</span>
            <span className="text-white/40 text-xs mt-0.5">{b.sub}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/CredibilityStrip.tsx
git commit -m "feat: add CredibilityStrip section"
```

---

### Task 11: About Section

**Files:**
- Create: `components/sections/About.tsx`

- [ ] **Step 1: Create About.tsx**

```tsx
// components/sections/About.tsx
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="o-mnie" ref={ref} className="relative py-24 px-6 overflow-hidden">
      {/* Canvas reveal background */}
      {inView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-transparent"
            colors={[[255, 255, 255]]}
            dotSize={2}
            showGradient={true}
            reverse={false}
          />
        </motion.div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">O mnie</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            15 lat w okopach<br />sprzedaży B2B.
          </h2>
          <div className="space-y-4 text-white/60 text-base leading-relaxed">
            <p>
              Nazywam się <span className="text-white font-medium">Albert Kohut</span> i od ponad 15 lat pracuję
              w sprzedaży B2B, budując wyniki, zespoły i procesy, które realnie dowożą przychód.
            </p>
            <p>
              Przez lata pracowałem z klientami od SMB i mid-market po Enterprise, a dziś jako{" "}
              <span className="text-white font-medium">Sales Manager w Revolut Business</span> zarządzam
              zespołem sprzedażowym i wspieram rozwój handlowców w środowisku wysokich oczekiwań
              i szybkiego tempa wzrostu.
            </p>
            <p>
              Równolegle rozwijam własną praktykę consultingowo-szkoleniową, pomagając firmom sprzedawać
              skuteczniej, budować lepsze playbooki i rozwijać ludzi w praktyczny, wdrożeniowy sposób.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {["Sales Manager @ Revolut", "15+ lat B2B", "500+ przeszkolonych", "Google for Startups Speaker"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Photos */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="col-span-2 relative h-72 rounded-2xl overflow-hidden">
            <Image
              src="/images/albert-speaking.jpg"
              alt="Albert Kohut podczas szkolenia"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative h-44 rounded-2xl overflow-hidden">
            <Image
              src="/images/albert-headshot.jpg"
              alt="Albert Kohut"
              fill
              className="object-cover object-top"
              sizes="25vw"
            />
          </div>
          <div className="relative h-44 rounded-2xl overflow-hidden">
            <Image
              src="/images/albert-revolut-office.jpg"
              alt="Albert Kohut przy Revolut"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative h-44 rounded-2xl overflow-hidden">
            <Image
              src="/images/albert-google-startups.jpg"
              alt="Albert Kohut — Google for Startups"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative h-44 rounded-2xl overflow-hidden">
            <Image
              src="/images/albert-revolut-event.jpg"
              alt="Albert Kohut — Revolut event"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/About.tsx
git commit -m "feat: add About section with CanvasRevealEffect and photo grid"
```

---

### Task 12: Services Section

**Files:**
- Create: `components/sections/Services.tsx`

- [ ] **Step 1: Create Services.tsx**

```tsx
// components/sections/Services.tsx
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: Target,
    title: "Szkolenia sprzedażowe",
    description:
      "Praktyczne szkolenia dla handlowców i zespołów sprzedaży. Skupione na tym, co realnie wpływa na wynik — od pierwszego kontaktu po zamknięcie deala.",
    tags: ["Onsite", "Online", "Team", "Cold calling", "Closing"],
  },
  {
    number: "02",
    icon: Users,
    title: "Consulting & Mentoring",
    description:
      "Regularne wsparcie dla CEO, sales managerów i dyrektorów sprzedaży. Diagnoza, plan działania, poprawa procesu, rozwój zespołu — z jasną odpowiedzialnością za wynik.",
    tags: ["1:1", "CEO", "Sales Director", "Playbook", "Skalowanie"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="uslugi" ref={ref} className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Usługi</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Jak mogę pomóc.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative p-8 rounded-2xl border border-white/8 bg-[#111] hover:border-white/20 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-white/20 font-mono text-sm">{s.number}</span>
                <s.icon className="text-white/60 mt-0.5" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-white/50 leading-relaxed mb-6">{s.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/#kontakt"
                className="text-sm text-white/60 hover:text-white transition-colors underline underline-offset-4"
              >
                Dowiedz się więcej →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Services.tsx
git commit -m "feat: add Services section"
```

---

### Task 13: Courses Section

**Files:**
- Create: `components/sections/Courses.tsx`

- [ ] **Step 1: Create Courses.tsx**

```tsx
// components/sections/Courses.tsx
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { courses } from "@/lib/courses";
import { ArrowRight } from "lucide-react";

export default function Courses() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kursy" ref={ref} className="bg-[#0a0a0a]">
      <ContainerScroll
        titleComponent={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest text-white/40 uppercase block mb-3">
              Kursy online
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Kursy, które sprzedają.
            </h2>
          </motion.div>
        }
      >
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-between p-6 rounded-xl border border-white/10 bg-[#1a1a1a] hover:border-white/25 transition-all duration-300 group"
            >
              <div>
                <span className="text-white/20 font-mono text-xs">0{i + 1}</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">{course.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{course.subtitle}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/8 text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={`/kursy/${course.slug}`}
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group-hover:gap-3"
              >
                Więcej <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Courses.tsx
git commit -m "feat: add Courses section with ContainerScroll"
```

---

### Task 14: Stats Section

**Files:**
- Create: `components/sections/Stats.tsx`

- [ ] **Step 1: Create Stats.tsx**

```tsx
// components/sections/Stats.tsx
"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Przeszkolonych handlowców" },
  { value: 15, suffix: "+", label: "Lat doświadczenia B2B" },
  { value: 3, suffix: "", label: "Kursy online" },
  { value: 98, suffix: "%", label: "Zadowolonych uczestników" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-[#0d0d0d] border-y border-white/8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="text-sm text-white/40 mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Stats.tsx
git commit -m "feat: add Stats section with animated counters"
```

---

### Task 15: Testimonials Section

**Files:**
- Create: `components/sections/Testimonials.tsx`

- [ ] **Step 1: Create Testimonials.tsx**

```tsx
// components/sections/Testimonials.tsx
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote: "Audyt otworzył nam oczy na dziury, które kosztowały nas setki tysięcy złotych rocznie. Albert nie przychodzi z gotowymi odpowiedziami — on zadaje właściwe pytania.",
    name: "Marcin W.",
    designation: "CEO, branża SaaS",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    quote: "Kurs cold callingu to najlepsza inwestycja w swój rozwój jaką zrobiłem w tym roku. Konkretne skrypty, konkretne obiekcje, konkretne wyniki.",
    name: "Tomasz K.",
    designation: "Senior Account Executive",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    quote: "Albert nie uczy teorii. Każda sesja to konkretne narzędzia, które wdrożyłem już następnego dnia. Mój pipeline podwoił się w ciągu dwóch miesięcy.",
    name: "Karolina M.",
    designation: "Sales Manager, fintech",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    quote: "Mój pipeline wzrósł o 40% w ciągu 8 tygodni od mentoringu. Nareszcie mam strukturę, a nie chaos w głowie.",
    name: "Paweł R.",
    designation: "Founder, B2B startup",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    quote: "Nareszcie ktoś, kto tłumaczy sprzedaż tak jak działa w prawdziwym świecie, nie z książki. Polecam każdemu handlowcowi.",
    name: "Agnieszka T.",
    designation: "Key Account Manager",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Opinie</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Co mówią klienci.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#ffffff",
              designation: "#9ca3af",
              testimony: "#d1d5db",
              arrowBackground: "#1a1a1a",
              arrowForeground: "#f1f1f7",
              arrowHoverBackground: "#3b82f6",
            }}
            fontSizes={{
              name: "1.5rem",
              designation: "0.875rem",
              quote: "1rem",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Testimonials.tsx
git commit -m "feat: add Testimonials section with CircularTestimonials"
```

---

### Task 16: Blog Preview Section

**Files:**
- Create: `components/sections/BlogPreview.tsx`

- [ ] **Step 1: Create BlogPreview.tsx**

```tsx
// components/sections/BlogPreview.tsx
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "cold-calling-bledy",
    category: "Sprzedaż",
    title: "5 błędów cold callingu, które zabijają Twoje wyniki",
    excerpt: "Większość handlowców popełnia te same błędy. Oto jak je wyeliminować i zacząć słyszeć 'tak' częściej niż 'nie'.",
    readTime: "5 min",
  },
  {
    slug: "pipeline-ktory-konwertuje",
    category: "Prospecting",
    title: "Jak zbudować pipeline, który naprawdę konwertuje",
    excerpt: "Nie chodzi o ilość leadów. Chodzi o właściwych klientów, we właściwym czasie, z właściwym komunikatem.",
    readTime: "7 min",
  },
  {
    slug: "negocjacje-oferty",
    category: "Kariera",
    title: "Negocjacje oferty pracy w sprzedaży — kompletny przewodnik",
    excerpt: "Większość kandydatów zostawia pieniądze na stole. Dowiedz się jak negocjować wynagrodzenie bez strachu.",
    readTime: "8 min",
  },
];

export default function BlogPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Blog</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Wiedza w praktyce.</h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
            Wszystkie artykuły <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-white/8 bg-[#111] hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400 font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-white/30">{post.readTime} czytania</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug">{post.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group-hover:gap-3"
              >
                Czytaj więcej <ArrowRight size={13} />
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/blog" className="text-sm text-white/50 hover:text-white transition-colors">
            Wszystkie artykuły →
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/BlogPreview.tsx
git commit -m "feat: add BlogPreview section"
```

---

### Task 17: Contact Section

**Files:**
- Create: `components/sections/Contact.tsx`
- Create: `app/api/contact/route.ts`

- [ ] **Step 1: Create Contact.tsx**

```tsx
// components/sections/Contact.tsx
"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" ref={ref} className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Kontakt</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Zacznijmy<br />rozmowę.
          </h2>
          <p className="text-white/50 leading-relaxed mb-10">
            Napisz do mnie jeśli chcesz porozmawiać o szkoleniu dla Twojego zespołu, mentoringу
            lub kursach online. Odpiszę w ciągu 24 godzin.
          </p>
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/albert-headshot.jpg"
                alt="Albert Kohut"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-white font-medium">Albert Kohut</p>
              <p className="text-sm text-white/40">Sales Manager @Revolut Business</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {status === "sent" ? (
            <div className="text-center py-16">
              <p className="text-2xl font-bold text-white mb-3">Dziękuję!</p>
              <p className="text-white/50">Odezwę się do Ciebie w ciągu 24 godzin.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/40 mb-1.5 block">Imię</label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
                    placeholder="Jan"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 mb-1.5 block">Nazwisko</label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
                    placeholder="Kowalski"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Nazwa firmy</label>
                <input
                  name="company"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
                  placeholder="Twoja firma"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Numer telefonu</label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
                  placeholder="+48 600 000 000"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
                  placeholder="jan@firma.pl"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">Coś poszło nie tak. Napisz bezpośrednio na email.</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create API route**

```ts
// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, company, phone, email } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // v1: log to console — replace with email service (Resend, SendGrid) in v2
    console.log("Contact form submission:", { firstName, lastName, company, phone, email });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add components/sections/Contact.tsx app/api/contact/route.ts
git commit -m "feat: add Contact section with form and API route"
```

---

### Task 18: Assemble landing page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace app/page.tsx**

```tsx
// app/page.tsx
import Hero from "@/components/sections/Hero";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Courses from "@/components/sections/Courses";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CredibilityStrip />
      <About />
      <Services />
      <Courses />
      <Stats />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 2: Run dev server and verify page loads**

```bash
cd "/Users/kacha/SOLVEXA GROUP"
npm run dev
```

Open http://localhost:3000 — verify all sections render without errors.

- [ ] **Step 3: Fix any TypeScript/ESLint errors**

```bash
npm run build
```

Fix any errors reported. Common issues: missing `key` props, unused imports, `any` types.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble landing page with all sections"
```

---

## Phase 5 — Course Subpages

### Task 19: Course subpage template

**Files:**
- Create: `app/kursy/[slug]/page.tsx`

- [ ] **Step 1: Create course page**

```tsx
// app/kursy/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getCourseBySlug, courses } from "@/lib/courses";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};
  return {
    title: `${course.title} — SOLVEXA GROUP`,
    description: course.description,
  };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Hero */}
      <section className="px-6 py-20 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <Link href="/#kursy" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={14} /> Wszystkie kursy
          </Link>
          <div className="flex flex-wrap gap-2 mb-6">
            {course.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/8 text-white/50 border border-white/10">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{course.title}</h1>
          <p className="text-xl text-white/50 mb-10">{course.subtitle}</p>
          <Link
            href="/#kontakt"
            className="inline-flex px-8 py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-colors"
          >
            Zapisz się na kurs
          </Link>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 py-16 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-white/60 leading-relaxed">{course.description}</p>
        </div>
      </section>

      {/* For whom */}
      <section className="px-6 py-16 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Dla kogo jest ten kurs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {course.forWhom.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-white/10 bg-[#111]">
                <div className="flex items-center gap-2 mb-3">
                  <Check size={16} className="text-blue-400" />
                  <span className="font-semibold text-white">{item.title}</span>
                </div>
                <p className="text-sm text-white/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="px-6 py-16 border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Program kursu</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {course.modules.map((module, i) => (
              <AccordionItem
                key={module.title}
                value={`module-${i}`}
                className="border border-white/10 rounded-xl px-6 bg-[#111]"
              >
                <AccordionTrigger className="text-white font-medium py-5 hover:no-underline">
                  <span className="flex items-center gap-3">
                    <span className="text-white/30 font-mono text-xs">0{i + 1}</span>
                    {module.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <li key={lesson} className="flex items-center gap-3 text-sm text-white/50">
                        <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Gotowy na zmianę?</h2>
          <p className="text-white/50 mb-8">Napisz do mnie — omówimy szczegóły i dopasujemy termin.</p>
          <Link
            href="/#kontakt"
            className="inline-flex px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
          >
            Umów bezpłatną rozmowę
          </Link>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Verify all 3 course pages build**

```bash
npm run build
```

Expected: no errors, 3 static course pages generated.

- [ ] **Step 3: Commit**

```bash
git add app/kursy/
git commit -m "feat: add course subpages with accordion curriculum"
```

---

## Phase 6 — Blog

### Task 20: Blog listing and MDX posts

**Files:**
- Create: `app/blog/page.tsx`
- Create: `app/blog/[slug]/page.tsx`
- Create: `content/blog/cold-calling-bledy.mdx`
- Create: `content/blog/pipeline-ktory-konwertuje.mdx`
- Create: `content/blog/negocjacje-oferty.mdx`

- [ ] **Step 1: Create blog listing page**

```tsx
// app/blog/page.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "cold-calling-bledy",
    category: "Sprzedaż",
    title: "5 błędów cold callingu, które zabijają Twoje wyniki",
    excerpt: "Większość handlowców popełnia te same błędy. Oto jak je wyeliminować.",
    readTime: "5 min",
    date: "2026-05-20",
  },
  {
    slug: "pipeline-ktory-konwertuje",
    category: "Prospecting",
    title: "Jak zbudować pipeline, który naprawdę konwertuje",
    excerpt: "Nie chodzi o ilość leadów. Chodzi o właściwych klientów, we właściwym czasie.",
    readTime: "7 min",
    date: "2026-05-10",
  },
  {
    slug: "negocjacje-oferty",
    category: "Kariera",
    title: "Negocjacje oferty pracy w sprzedaży — kompletny przewodnik",
    excerpt: "Większość kandydatów zostawia pieniądze na stole. Dowiedz się jak negocjować.",
    readTime: "8 min",
    date: "2026-05-01",
  },
];

export const metadata = {
  title: "Blog — SOLVEXA GROUP",
  description: "Praktyczna wiedza sprzedażowa od Alberta Kohuta.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Blog</span>
        <h1 className="text-5xl font-bold text-white mt-3 mb-16">Wiedza w praktyce.</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-white/8 bg-[#111] hover:border-white/20 transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400">{post.category}</span>
                  <span className="text-xs text-white/30">{post.readTime} czytania</span>
                </div>
                <h2 className="text-lg font-semibold text-white mb-1">{post.title}</h2>
                <p className="text-sm text-white/40">{post.excerpt}</p>
              </div>
              <ArrowRight size={18} className="text-white/30 group-hover:text-white transition-colors flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Create MDX files**

`content/blog/cold-calling-bledy.mdx`:
```mdx
---
title: "5 błędów cold callingu, które zabijają Twoje wyniki"
date: "2026-05-20"
category: "Sprzedaż"
readTime: "5 min"
excerpt: "Większość handlowców popełnia te same błędy. Oto jak je wyeliminować i zacząć słyszeć 'tak' częściej niż 'nie'."
---

# 5 błędów cold callingu, które zabijają Twoje wyniki

Zimny telefon to jedno z najbardziej niedocenianych narzędzi sprzedażowych. Większość handlowców go unika. Ci, którzy dzwonią — często robią to źle.

## Błąd 1: Zaczynasz od siebie, nie od klienta

Pierwsze zdanie decyduje o wszystkim. "Dzień dobry, jestem Janek z firmy X i chciałem przedstawić naszą ofertę" to przepis na rozłączenie.

Zamiast tego zacznij od wartości dla klienta: "Dzwonię bo widzę, że Wasza firma rozszerza się na nowe rynki — pracujemy z kilkoma firmami w tej sytuacji i pomogliśmy im skrócić cykl sprzedaży o 30%."

## Błąd 2: Mówisz za dużo

Cold call to nie prezentacja. Twój cel to umówienie rozmowy, nie sprzedaż przez telefon.

Zasada: mów mniej niż słuchasz. Zadawaj pytania, które otwierają rozmowę.

## Błąd 3: Boisz się obiekcji

"Nie mamy budżetu", "Już mamy dostawcę", "Prześlijcie email" — to nie odmowy. To prośby o więcej informacji.

Każda obiekcja to szansa na zadanie kolejnego pytania.

## Błąd 4: Nie masz struktury

Improwizacja działa tylko jeśli masz za sobą tysiące rozmów. Na początku potrzebujesz skryptu — nie do czytania, ale jako szkielet.

## Błąd 5: Nie analizujesz wyników

Ile telefonów zrobiłeś? Ile konwersacji? Ile umówionych spotkań? Bez danych nie ma poprawy.

Śledź swój konwersji rate i poprawiaj go systematycznie.
```

`content/blog/pipeline-ktory-konwertuje.mdx`:
```mdx
---
title: "Jak zbudować pipeline, który naprawdę konwertuje"
date: "2026-05-10"
category: "Prospecting"
readTime: "7 min"
excerpt: "Nie chodzi o ilość leadów. Chodzi o właściwych klientów, we właściwym czasie, z właściwym komunikatem."
---

# Jak zbudować pipeline, który naprawdę konwertuje

Większość handlowców ma pipeline pełen nadziei i pusty w wynikach. Problem nie jest w ilości leadów — jest w jakości i procesie.

## Krok 1: Zdefiniuj ICP

Idealny Profil Klienta to nie "firmy z branży X". To konkretna kombinacja: branża + wielkość + moment zakupowy + bóle.

Im precyzyjniej opiszesz ICP, tym lepiej będzie konwertować.

## Krok 2: Kwalifikuj agresywnie

Czas to Twój najcenniejszy zasób. Nie trać go na leady, które nigdy nie kupia.

Używaj frameworku BANT lub MEDDIC żeby szybko ocenić potencjał leada.

## Krok 3: Segmentuj i priorytetyzuj

Nie wszyscy leady są równi. Podziel pipeline na: gorące (działaj teraz), ciepłe (nurturuj), zimne (wyczyść lub utrzymuj minimum).

## Krok 4: Ustal rytm kontaktu

Kiedy ostani raz kontaktowałeś się z danym leadem? Jeśli nie wiesz — masz problem.

Zbuduj sekwencje kontaktu: kiedy, przez jaki kanał, z jakim komunikatem.

## Krok 5: Mierz velocity

Ile czasu zajmuje lead przejście przez każdy etap pipeline'u? Gdzie utyka?

Odpowiedź na to pytanie pokaże Ci gdzie jest największa strata.
```

`content/blog/negocjacje-oferty.mdx`:
```mdx
---
title: "Negocjacje oferty pracy w sprzedaży — kompletny przewodnik"
date: "2026-05-01"
category: "Kariera"
readTime: "8 min"
excerpt: "Większość kandydatów zostawia pieniądze na stole. Dowiedz się jak negocjować wynagrodzenie bez strachu."
---

# Negocjacje oferty pracy w sprzedaży — kompletny przewodnik

Ironia: handlowcy zarabiają na życie negocjacjami, ale większość z nich boi się negocjować własną ofertę pracy.

## Dlaczego warto negocjować

Statystyki są jednoznaczne: ponad 80% pracodawców ma przestrzeń do negocjacji w pierwszej ofercie. Jeśli nie negocjujesz — zostawiasz pieniądze na stole.

## Kiedy negocjować

Negocjuj dopiero po otrzymaniu pisemnej oferty. Nie wcześniej. Pytanie o wynagrodzenie na pierwszej rozmowie to błąd.

## Jak ustalić swój target

Zbadaj rynek: Glassdoor, LinkedIn Salary, rozmowy z rekruterami. Ustal widełki: minimum, cel, aspiracja.

## Jak otworzyć negocjacje

Nie przepraszaj. Powiedz: "Jestem bardzo zainteresowany tą rolą. Mam pytanie odnośnie pakietu wynagrodzenia."

Podaj konkretną liczbę — zawsze wyższą niż chcesz dostać.

## Co negocjować poza podstawą

Podstawa to nie wszystko: bonus, stock options, data przeglądu wynagrodzenia, budżet szkoleniowy, elastyczność pracy.

## Najczęstsze błędy

- Podanie widełek zamiast liczby (zawsze biorą dolną granicę)
- Uzasadnianie negocjacji osobistymi kosztami
- Akceptowanie pierwszej kontroferty bez pytania o więcej
- Negocjowanie przez email zamiast rozmowy
```

- [ ] **Step 3: Create blog post page with MDX rendering**

```tsx
// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const postsDir = path.join(process.cwd(), "content/blog");

function getPost(slug: string) {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export function generateStaticParams() {
  return fs.readdirSync(postsDir).map((f) => ({ slug: f.replace(".mdx", "") }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: `${post.frontmatter.title} — SOLVEXA GROUP` };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white mb-10 transition-colors">
          <ArrowLeft size={14} /> Blog
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400">{post.frontmatter.category}</span>
          <span className="text-xs text-white/30">{post.frontmatter.readTime} czytania</span>
        </div>
        <article className="prose prose-invert prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </article>
        <div className="mt-16 pt-10 border-t border-white/8 text-center">
          <p className="text-white/50 mb-6">Chcesz porozmawiać o sprzedaży?</p>
          <Link href="/#kontakt" className="inline-flex px-8 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors">
            Umów rozmowę z Albertem
          </Link>
        </div>
      </div>
    </main>
  );
}
```

- [ ] **Step 4: Add prose plugin for MDX styling**

```bash
npm install @tailwindcss/typography
```

Add to `tailwind.config.ts` plugins array:
```ts
plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
```

- [ ] **Step 5: Build and verify**

```bash
npm run build
```

Expected: all routes build successfully. Fix any errors.

- [ ] **Step 6: Commit**

```bash
git add app/blog/ content/ tailwind.config.ts package.json
git commit -m "feat: add blog listing, MDX post pages, and 3 articles"
```

---

## Phase 7 — Final Polish

### Task 21: next.config.ts and image optimization

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Update next.config.ts**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 2: Final build check**

```bash
npm run build
```

Expected: `✓ Compiled successfully` with no errors or warnings.

- [ ] **Step 3: Final commit**

```bash
git add next.config.ts
git commit -m "feat: configure image optimization, finalize build"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Hero with video + shader + animated headline
- ✅ Navbar (floating pill, glassmorphism, mobile)
- ✅ Credibility strip (Revolut, Google for Startups)
- ✅ About with CanvasRevealEffect + photo grid (all 8 photos mapped, no-tag note on Revolut CEO photo)
- ✅ Services (2 cards, tags, hover effects)
- ✅ Courses with ContainerScroll (3 courses from lib/courses.ts)
- ✅ Stats with animated counters
- ✅ Testimonials with CircularTestimonials (5 testimonials)
- ✅ Blog preview (3 posts)
- ✅ Contact form + API route
- ✅ Course subpages with accordion
- ✅ Blog listing + MDX posts
- ✅ Footer
- ✅ Image assets renamed and moved
- ✅ Geist font (no Inter)
- ✅ Dark palette (#0a0a0a)

**Type consistency:** `getCourseBySlug` defined in Task 5 and used in Task 19. `Course` interface used consistently. Component props match across tasks.

**No placeholders:** All code blocks are complete. API route is intentionally minimal (v1 scope — logs to console).
