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
      "Metodyka zimnych telefonow, ktore dzialaja. Skrypty, obiekcje, tonacja - wszystko co potrzebujesz zeby slyszec 'tak' czesciej niz 'nie'.",
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
