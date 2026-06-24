export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  modules: { title: string; lessons: string[] }[];
  forWhom: { title: string; description: string }[];
  price: string;
  originalPrice: string;
}

export const courses: Course[] = [
  {
    slug: "cold-calling",
    title: "Cold Calling",
    subtitle: "Jak przestać się bać i zacząć sprzedawać",
    description:
      "Twoi handlowcy nauczą się dzwonić bez strachu, z planem i konkretnym celem. Mniej odrzuceń, więcej umówionych spotkań - i wymierny wpływ na przychód Twojej firmy.",
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
          "Pierwsze 15 sekund - hook który zatrzymuje",
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
    price: "990 zł",
    originalPrice: "1 497 zł",
  },
  {
    slug: "prospecting",
    title: "Prospecting",
    subtitle: "Jak znajdować właściwych klientów",
    description:
      "Twój zespół przestanie tracić czas na złe leady. Nauczy się znajdować firmy, które faktycznie mogą kupić, docierać do właściwych osób i budować pipeline, który realnie konwertuje.",
    tags: ["LinkedIn", "ICP", "Pipeline", "Outreach", "Kwalifikacja"],
    modules: [
      {
        title: "Definiowanie ICP",
        lessons: [
          "Idealny profil klienta - jak go zbudować",
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
          "Rytm pracy - ile kontaktów dziennie",
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
        title: "Menedżer sprzedaży",
        description: "Chcesz ustandaryzować wyszukiwanie potencjalnych biznesów w zespole.",
      },
      {
        title: "Founder",
        description: "Szukasz pierwszych 10 klientów dla swojego produktu.",
      },
    ],
    price: "990 zł",
    originalPrice: "1 497 zł",
  },
  {
    slug: "pierwsze-spotkanie",
    title: "Badanie potrzeb klienta",
    subtitle: "Jak poprawnie przeprowadzić badanie potrzeb w praktyce",
    description:
      "Pierwsze spotkanie decyduje o wszystkim. Naucz się zadawać właściwe pytania, żeby klient sam powiedział Ci, co chce kupić - i dlaczego.",
    tags: ["Badanie potrzeb", "Discovery", "Spotkanie", "B2B", "Pytania"],
    modules: [
      {
        title: "Przygotowanie i nastawienie",
        lessons: [
          "Czego NIE robić na pierwszym spotkaniu",
          "Jak przygotować się do rozmowy z konkretnym klientem",
          "Budowanie zaufania w pierwszych minutach",
        ],
      },
      {
        title: "Badanie potrzeb w praktyce",
        lessons: [
          "Framework pytań - od ogółu do szczegółu",
          "Pytania otwarte, pogłębiające i domykające",
          "Jak słuchać aktywnie i co z tym robić",
          "Odkrywanie prawdziwego problemu za zgłoszoną potrzebą",
        ],
      },
      {
        title: "Zamknięcie spotkania z akcją",
        lessons: [
          "Podsumowanie potrzeb - jak to zrobić dobrze",
          "Ustalenie następnego kroku bez presji",
          "Follow-up który kontynuuje rozmowę",
        ],
      },
    ],
    forWhom: [
      {
        title: "Handlowcy B2B",
        description: "Chcesz przestać zgadywać czego klient potrzebuje.",
      },
      {
        title: "Account Executive",
        description: "Twoje demo jest dobre, ale spotkania discovery - słabe.",
      },
      {
        title: "Founderzy",
        description: "Sam prowadzisz rozmowy z klientami i chcesz to robić skuteczniej.",
      },
    ],
    price: "990 zł",
    originalPrice: "1 497 zł",
  },
  {
    slug: "praca-w-sprzedazy",
    title: "Praca w sprzedaży",
    subtitle: "Jak zdobyć wymarzoną pracę w sprzedaży",
    description:
      "Naucz się, jak zdobyć pracę w sprzedaży - nawet bez doświadczenia. CV, rozmowa kwalifikacyjna i negocjacje wynagrodzenia krok po kroku.",
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
          "Case study sprzedażowe - jak je rozwiązywać",
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
    price: "197 zł",
    originalPrice: "397 zł",
  },
  {
    slug: "zmien-swoje-zycie-zawodowe",
    title: "Zmień swoje życie zawodowe",
    subtitle: "Nie czytałem o tym w książce - ja to przeżyłem",
    description:
      "Byłem fryzjerem - dziś jestem Menedżerem sprzedaży w Revolut Biznes. Jeśli siedzisz w miejscu i nie wiesz, że możesz robić coś innego, ten kurs jest dla Ciebie.",
    tags: ["Zmiana kariery", "Sprzedaż", "Rozwój", "Mindset", "Start od zera"],
    modules: [
      {
        title: "Skąd wiesz, że czas na zmianę",
        lessons: [
          "Sygnały, że siedzisz w miejscu za długo",
          "Strach przed zmianą - co tak naprawdę blokuje",
          "Moja historia: fryzjer, busy, nieruchomości - dlaczego odszedłem",
        ],
      },
      {
        title: "Znalezienie swojej ścieżki",
        lessons: [
          "Jak ocenić swoje umiejętności bez CV",
          "Transferable skills - co masz, a czego nie widzisz",
          "Dlaczego sprzedaż jest ścieżką, którą warto rozważyć",
          "Jak wygląda praca w sprzedaży B2B naprawdę",
        ],
      },
      {
        title: "Wejście do sprzedaży bez doświadczenia",
        lessons: [
          "Co musisz wiedzieć zanim wyślesz pierwsze CV",
          "Jak rozmawiać z rekruterami przychodząc z innej branży",
          "Pierwsze tygodnie w nowej roli - jak nie utonąć",
        ],
      },
      {
        title: "Pierwszy krok bez palenia mostów",
        lessons: [
          "Jak testować nową ścieżkę zanim rzucisz pracę",
          "Plan działania na 90 dni",
          "Błędy, które popełniają ludzie przy zmianie kariery",
        ],
      },
    ],
    forWhom: [
      {
        title: "Osoby utknięte w miejscu",
        description: "Wiesz, że chcesz czegoś innego, ale nie wiesz od czego zacząć.",
      },
      {
        title: "Pracownicy z innych branż",
        description: "Pracujesz fizycznie lub w usługach i rozważasz przejście do sprzedaży.",
      },
      {
        title: "Każdy, kto boi się zmiany",
        description: "Masz obawy, ale gdzieś w środku czujesz, że czas coś zmienić.",
      },
    ],
    price: "197 zł",
    originalPrice: "397 zł",
  },
];

export interface Bundle {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
  listPrice: string;
  originalPrice: string;
  salePrice: string;
  tag: string;
}

export const bundles: Bundle[] = [
  {
    slug: "vademecum-handlowca",
    title: "Kompletna Sprzedaż B2B",
    subtitle: "Kompletny pakiet dla handlowca B2B",
    description:
      "Trzy kursy. Trzy obszary, które decydują o wyniku każdego handlowca: jak znaleźć klienta, jak umówić spotkanie i jak dowiedzieć się, czego naprawdę potrzebuje. Tylko tyle i aż tyle, żeby sprzedawać więcej.",
    includes: ["Prospecting", "Cold Calling", "Badanie potrzeb klienta"],
    listPrice: "4 491 zł",
    originalPrice: "2 991 zł",
    salePrice: "1 990 zł",
    tag: "Pakiet",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
