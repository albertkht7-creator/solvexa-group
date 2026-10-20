export interface ServicePageData {
  path: string;
  parent?: { name: string; path: string };
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  lead: string;
  ctaLabel: string;
  ctaTopic: string;
  serviceType: string;
  schemaDescription: string;
  forWhomHeading: string;
  forWhom: { title: string; description: string }[];
  scopeHeading: string;
  scope: string[];
  stepsHeading?: string;
  steps?: { title: string; text: string }[];
  whyHeading?: string;
  why?: { title: string; text: string }[];
  topicsHeading?: string;
  topics?: { title: string; text: string; href?: string }[];
  postsHeading: string;
  posts: { title: string; href: string }[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
}

const consultFaq = {
  q: "Czy pierwsza konsultacja jest naprawdę bezpłatna?",
  a: "Tak. 30 minut, zero kosztów, zero zobowiązań. Wspólnie oceniamy czy i jak mogę pomóc. Jeśli nie pasuję, powiem Ci wprost.",
};

export const recruitmentPage: ServicePageData = {
  path: "/rekrutacja-handlowcow",
  metaTitle: "Rekrutacja handlowców: selekcja, symulacje i onboarding",
  metaDescription:
    "Rekrutacja handlowców B2B po 500+ rozmowach: profil kandydata, selekcja, symulacje sprzedażowe i onboarding. Zatrudniaj ludzi, którzy dowożą wynik.",
  kicker: "Usługa",
  h1: "Rekrutacja handlowców",
  lead: "Pomagam firmom zatrudniać handlowców, którzy naprawdę sprzedają, a nie tylko dobrze wypadają na rozmowie. Przeprowadziłem ponad 500 rozmów rekrutacyjnych i wiem, kto dowozi wynik, a kto robi dobre wrażenie.",
  ctaLabel: "Umów bezpłatną konsultację",
  ctaTopic: "Rekrutacja handlowców",
  serviceType: "Rekrutacja handlowców",
  schemaDescription:
    "Rekrutacja handlowców B2B: przygotowanie profilu kandydata, selekcja CV i screening, rozmowy kwalifikacyjne, symulacje sprzedażowe, rekomendacja i onboarding.",
  forWhomHeading: "Dla kogo jest ta usługa",
  forWhom: [
    {
      title: "Firmy zatrudniające pierwszego handlowca",
      description:
        "Nie masz jeszcze procesu ani profilu kandydata. Budujemy je, zanim opublikujesz ogłoszenie.",
    },
    {
      title: "Zespoły sprzedaży, które rosną",
      description:
        "Dobierasz kolejnych ludzi i chcesz, żeby decyzje opierały się na faktach, a nie na wrażeniu z rozmowy.",
    },
    {
      title: "Managerowie i właściciele firm",
      description:
        "Masz wrażenie, że co druga rekrutacja handlowca to loteria. To znak, że oceniasz niewłaściwe rzeczy.",
    },
  ],
  scopeHeading: "Co obejmuje usługa",
  scope: [
    "Przygotowanie profilu kandydata",
    "Selekcja CV i screening",
    "Rozmowy kwalifikacyjne",
    "Ocena potencjalnych umiejętności sprzedażowych kandydata, w tym symulacje sprzedażowe",
    "Rekomendacja i onboarding",
  ],
  whyHeading: "Dlaczego ta rekrutacja działa inaczej",
  why: [
    {
      title: "Pytam o liczby, nie o historie",
      text: "Handlowiec, który naprawdę sprzedawał, zna swój target, realizację i konwersję. Kto nie zna metryk, nie wie, dlaczego wygrywa ani dlaczego przegrywa.",
    },
    {
      title: "Sprawdzam, jak mówi o przegranych dealach",
      text: "Dobry handlowiec bierze odpowiedzialność i wyciąga wniosek. Słaby zrzuca winę na klienta, cenę i konkurencję.",
    },
    {
      title: "Symulacja zamiast samego wywiadu",
      text: "Kandydat wykonuje realne zadanie sprzedażowe, a ja oceniam jego zachowanie. Dopiero wtedy widać różnicę między opowiadaniem o sprzedaży a sprzedawaniem.",
    },
  ],
  postsHeading: "Jak rekrutuję handlowców: poradniki",
  posts: [
    {
      title: "Rekrutacja handlowca: jak rozpoznać dobrego sprzedawcę",
      href: "/blog/jak-rozpoznac-dobrego-handlowca",
    },
    {
      title: "Profil handlowca B2B: jak go zbudować przed rekrutacją",
      href: "/blog/profil-handlowca-b2b",
    },
    {
      title: "Pytania rekrutacyjne na handlowca: 25 pytań i jak oceniać odpowiedzi",
      href: "/blog/pytania-rekrutacyjne-na-handlowca",
    },
    {
      title: "Rozmowa rekrutacyjna na przedstawiciela handlowego: krok po kroku",
      href: "/blog/rozmowa-rekrutacyjna-przedstawiciel-handlowy",
    },
    {
      title: "Symulacja sprzedażowa na rekrutacji: scenariusz i karta oceny",
      href: "/blog/symulacja-sprzedazowa-na-rekrutacji",
    },
    {
      title: "Jak rekrutować sprzedawców: proces od ogłoszenia do pierwszych 90 dni",
      href: "/blog/jak-rekrutowac-sprzedawcow",
    },
  ],
  faq: [
    consultFaq,
    {
      q: "Na czym polega symulacja sprzedażowa?",
      a: "Kandydat dostaje realistyczną sytuację, na przykład cold call do osoby decyzyjnej w średniej firmie, i ma kilkanaście minut na rozmowę. Wprowadzam typowe obiekcje, a jego zachowanie oceniam według karty: początek rozmowy, słuchanie, praca z obiekcją, dążenie do kolejnego kroku.",
    },
    {
      q: "Czy pomagasz też po zatrudnieniu?",
      a: "Tak. Rekomendacja i onboarding są częścią usługi, bo dobra decyzja rekrutacyjna to dopiero początek. Pierwsze miesiące decydują o tym, czy nowy handlowiec dowiezie wynik.",
    },
    {
      q: "Jak ustalamy zakres i koszt?",
      a: "Zakres, harmonogram i warunki ustalamy po bezpłatnej konsultacji, dopasowane do roli, którą chcesz obsadzić i do Twojego procesu sprzedaży.",
    },
  ],
  related: [
    { label: "Szkolenia sprzedażowe B2B", href: "/szkolenia-sprzedazowe-b2b" },
    { label: "Mentoring sprzedażowy", href: "/mentoring-sprzedazowy" },
    { label: "Kursy online", href: "/#kursy" },
    { label: "Wszystkie usługi", href: "/#uslugi" },
  ],
};

export const trainingPage: ServicePageData = {
  path: "/szkolenia-sprzedazowe-b2b",
  metaTitle: "Szkolenia sprzedażowe B2B dla zespołów i handlowców",
  metaDescription:
    "Praktyczne szkolenia sprzedażowe B2B oparte na 15 latach praktyki: cold calling, prospecting, obiekcje, zamykanie. Online lub na miejscu, dla zespołów i handlowców.",
  kicker: "Usługa",
  h1: "Szkolenia sprzedażowe B2B",
  lead: "Praktyczne szkolenia dla handlowców i zespołów sprzedaży, skupione na tym, co realnie wpływa na wynik, od pierwszego kontaktu po zamknięcie transakcji. Bez teorii z książek, tylko metody, które sprawdziły się w 15 latach pracy w sprzedaży B2B.",
  ctaLabel: "Umów bezpłatną konsultację",
  ctaTopic: "Szkolenia sprzedażowe",
  serviceType: "Szkolenia sprzedażowe B2B",
  schemaDescription:
    "Praktyczne szkolenia sprzedażowe B2B dla handlowców i zespołów: diagnoza procesu, skrypty rozmów, praca z obiekcjami, cold calling, prospecting i techniki zamknięcia sprzedaży.",
  forWhomHeading: "Dla kogo są szkolenia",
  forWhom: [
    {
      title: "Handlowcy B2B i SDR/BDR",
      description:
        "Chcesz dzwonić więcej i skuteczniej, budować pipeline i pewniej prowadzić rozmowy z klientami.",
    },
    {
      title: "Managerowie i zespoły sprzedaży",
      description:
        "Chcesz ustandaryzować sposób pracy zespołu, wprowadzić wspólne skrypty i poprawić wyniki całej grupy.",
    },
    {
      title: "Przedsiębiorcy i founderzy",
      description:
        "Sam sprzedajesz swoje usługi i chcesz robić to skuteczniej, a także zrozumieć, co zrobić, żeby zwiększyć sprzedaż.",
    },
  ],
  scopeHeading: "Co obejmują szkolenia",
  scope: [
    "Diagnoza aktualnych procesów sprzedaży",
    "Skrypty i scenariusze rozmów",
    "Praca z obiekcjami klientów",
    "Cold calling i prospecting",
    "Techniki zamknięcia sprzedaży",
  ],
  topicsHeading: "Tematy szkoleń",
  topics: [
    {
      title: "Cold calling i prospecting",
      text: "Jak dzwonić bez strachu, z planem i konkretnym celem, i jak znajdować firmy, które faktycznie mogą kupić.",
      href: "/szkolenia-sprzedazowe-b2b/cold-calling",
    },
    {
      title: "AI w sprzedaży",
      text: "Jak używać AI nie jako zabawki, ale jako narzędzia, które skraca czas pracy i poprawia wyniki handlowców.",
      href: "/szkolenia-sprzedazowe-b2b/ai-w-sprzedazy",
    },
    {
      title: "Szkolenie dla założycieli startupów",
      text: "Jak rozmawiać z inwestorami, pozyskać pierwszych klientów i nie zepsuć kluczowych rozmów.",
      href: "/szkolenia-sprzedazowe-b2b/dla-founderow",
    },
  ],
  whyHeading: "Dlaczego uczę inaczej",
  why: [
    {
      title: "Tylko metody sprawdzone w praktyce",
      text: "Każda technika, której uczę, była najpierw przetestowana w mojej własnej pracy sprzedażowej. Jeśli nie działa, nie trafia do programu.",
    },
    {
      title: "Skrypty, nie ogólniki",
      text: "Zamiast ogólnych rad dostajesz skrypty, schematy rozmów i procesy, które zespół wdroży w tydzień, a nie w kwartał.",
    },
    {
      title: "Uczę tego, co robię na co dzień",
      text: "Zarządzam zespołem sprzedaży, więc o cold callingu, obiekcjach i procesie mówię z własnego doświadczenia.",
    },
  ],
  postsHeading: "Poradniki ze sprzedaży",
  posts: [
    {
      title: "Jak wybrać firmę szkoleniową ze sprzedaży: 6 pytań przed podpisaniem umowy",
      href: "/blog/jak-wybrac-firme-szkoleniowa-ze-sprzedazy",
    },
    { title: "5 błędów cold callingu, które zabijają Twoje wyniki", href: "/blog/cold-calling-bledy" },
    {
      title: "Kto zadaje pytania, ten prowadzi rozmowę",
      href: "/blog/kto-zadaje-pytania-ten-prowadzi",
    },
    {
      title: "Sprzedaż przegrywasz w pierwszych dwóch minutach",
      href: "/blog/sprzedaz-przegrywasz-w-pierwszych-minutach",
    },
    {
      title: "Demo, które robisz za wcześnie, kosztuje Cię deal",
      href: "/blog/demo-ktore-robisz-za-wczesnie",
    },
    { title: "Jak zbudować pipeline, który naprawdę konwertuje", href: "/blog/pipeline-ktory-konwertuje" },
  ],
  faq: [
    {
      q: "Dla kogo są te szkolenia?",
      a: "Dla handlowców B2B, SDR/BDR, managerów sprzedaży oraz przedsiębiorców, którzy sami sprzedają swoje usługi i chcą robić to skuteczniej.",
    },
    {
      q: "Czy szkolenia są online, czy stacjonarne?",
      a: "Szkolenia zamknięte dla firm mogą odbywać się stacjonarnie lub zdalnie, do ustalenia indywidualnie. Dostępne są też kursy online, które przerabiasz we własnym tempie.",
    },
    {
      q: "Czy oferujesz szkolenia dla całego zespołu sprzedażowego?",
      a: "Tak. Prowadzę warsztaty i programy szkoleniowe dedykowane zespołom sprzedażowym. Napisz do mnie, żebyśmy omówili zakres, format i harmonogram.",
    },
    {
      q: "Jak szybko zobaczę pierwsze efekty?",
      a: "Pierwsze zmiany w podejściu i rozmowach sprzedażowych widać już po kilku tygodniach systematycznej pracy. Wyniki w pipeline po 1-2 miesiącach.",
    },
    consultFaq,
  ],
  related: [
    { label: "Rekrutacja handlowców", href: "/rekrutacja-handlowcow" },
    { label: "Mentoring sprzedażowy", href: "/mentoring-sprzedazowy" },
    { label: "Kursy online", href: "/#kursy" },
    { label: "Wszystkie usługi", href: "/#uslugi" },
  ],
};

const trainingParent = { name: "Szkolenia sprzedażowe B2B", path: "/szkolenia-sprzedazowe-b2b" };
const trainingRelated = (self: string) =>
  [
    { label: "Szkolenia sprzedażowe B2B", href: "/szkolenia-sprzedazowe-b2b" },
    { label: "Cold calling", href: "/szkolenia-sprzedazowe-b2b/cold-calling" },
    { label: "AI w sprzedaży", href: "/szkolenia-sprzedazowe-b2b/ai-w-sprzedazy" },
    { label: "Dla founderów", href: "/szkolenia-sprzedazowe-b2b/dla-founderow" },
    { label: "Rekrutacja handlowców", href: "/rekrutacja-handlowcow" },
  ].filter((r) => r.href !== self);

const trainingFaq = [
  {
    q: "Czy szkolenia są online, czy stacjonarne?",
    a: "Szkolenia zamknięte dla firm mogą odbywać się stacjonarnie lub zdalnie, do ustalenia indywidualnie.",
  },
  {
    q: "Czy oferujesz szkolenia dla całego zespołu sprzedażowego?",
    a: "Tak. Prowadzę warsztaty i programy szkoleniowe dedykowane zespołom sprzedażowym. Napisz do mnie, żebyśmy omówili zakres, format i harmonogram.",
  },
  {
    q: "Jak szybko zobaczę pierwsze efekty?",
    a: "Pierwsze zmiany w podejściu i rozmowach sprzedażowych widać już po kilku tygodniach systematycznej pracy. Wyniki w pipeline po 1-2 miesiącach.",
  },
  consultFaq,
];

export const trainingSubpages: Record<string, ServicePageData> = {
  "cold-calling": {
    path: "/szkolenia-sprzedazowe-b2b/cold-calling",
    parent: trainingParent,
    metaTitle: "Szkolenie cold calling dla zespołów i handlowców B2B",
    metaDescription:
      "Szkolenie cold calling dla handlowców B2B: pierwsze 15 sekund, kwalifikacja pytaniami, obiekcje i umawianie spotkań. Praktyka z 15 lat sprzedaży, online lub na miejscu.",
    kicker: "Szkolenie",
    h1: "Szkolenie cold calling",
    lead: "Twoi handlowcy nauczą się dzwonić bez strachu, z planem i konkretnym celem. Mniej odrzuceń, więcej umówionych spotkań i wymierny wpływ na przychód Twojej firmy.",
    ctaLabel: "Umów bezpłatną konsultację",
    ctaTopic: "Szkolenie: cold calling",
    serviceType: "Szkolenie z cold callingu",
    schemaDescription:
      "Szkolenie z cold callingu dla handlowców B2B i zespołów sprzedaży: struktura rozmowy, kwalifikacja pytaniami, praca z obiekcjami i umawianie spotkań.",
    forWhomHeading: "Dla kogo jest to szkolenie",
    forWhom: [
      { title: "Handlowcy B2B", description: "Chcesz dzwonić więcej i skuteczniej." },
      { title: "SDR / BDR", description: "Budujesz pipeline od zera i potrzebujesz struktury." },
      {
        title: "Przedsiębiorcy",
        description: "Sam sprzedajesz swoje usługi i chcesz robić to pewniej.",
      },
    ],
    scopeHeading: "Co obejmuje szkolenie",
    scope: [
      "Dlaczego cold calling wciąż działa",
      "Przełamywanie bariery pierwszego telefonu",
      "Badanie klienta przed rozmową",
      "Pierwsze 15 sekund: hook, który zatrzymuje",
      "Pitch wartości bez sprzedawania",
      "Kwalifikacja przez pytania",
      "Top 10 obiekcji i jak je obalać",
      "Umówienie spotkania jako cel rozmowy",
      "Follow-up po cold callu",
    ],
    whyHeading: "Jak wygląda to szkolenie",
    why: [
      {
        title: "Mindset i przygotowanie",
        text: "Zaczynamy od tego, co blokuje większość handlowców: bariery pierwszego telefonu i słabego przygotowania do rozmowy.",
      },
      {
        title: "Struktura rozmowy",
        text: "Uczę konkretnej struktury: jak zacząć, jak pokazać wartość i jak kwalifikować klienta pytaniami, zamiast mówić o produkcie.",
      },
      {
        title: "Obiekcje i zamknięcie",
        text: "Cel cold calla to nie sprzedaż, tylko umówienie następnego kroku. Ćwiczymy najczęstsze obiekcje i domykanie spotkania.",
      },
    ],
    postsHeading: "Poradniki o cold callingu i rozmowach sprzedażowych",
    posts: [
      { title: "5 błędów cold callingu, które zabijają Twoje wyniki", href: "/blog/cold-calling-bledy" },
      { title: "Kto zadaje pytania, ten prowadzi rozmowę", href: "/blog/kto-zadaje-pytania-ten-prowadzi" },
      {
        title: "Sprzedaż przegrywasz w pierwszych dwóch minutach",
        href: "/blog/sprzedaz-przegrywasz-w-pierwszych-minutach",
      },
      { title: "'Za drogo' prawie nigdy nie znaczy 'za drogo'", href: "/blog/za-drogo-prawie-nigdy-nie-znaczy-za-drogo" },
      { title: "Jak zbudować pipeline, który naprawdę konwertuje", href: "/blog/pipeline-ktory-konwertuje" },
    ],
    faq: [
      {
        q: "Czym różni się szkolenie od kursu online z cold callingu?",
        a: "Kurs online to nagrany materiał, który przerabiasz we własnym tempie. Szkolenie zamknięte dla firmy prowadzę na żywo, w formie ustalonej indywidualnie, dla całego zespołu.",
      },
      ...trainingFaq,
    ],
    related: [
      ...trainingRelated("/szkolenia-sprzedazowe-b2b/cold-calling"),
      { label: "Kurs online: Cold Calling", href: "/kursy/cold-calling" },
    ],
  },
  "ai-w-sprzedazy": {
    path: "/szkolenia-sprzedazowe-b2b/ai-w-sprzedazy",
    parent: trainingParent,
    metaTitle: "Szkolenie AI w sprzedaży dla handlowców i zespołów B2B",
    metaDescription:
      "Szkolenie AI w sprzedaży: prospecting, personalizacja outreachu, skrypty rozmów, analiza nagrań i automatyzacja zadań. Narzędzia gotowe do użycia od zaraz.",
    kicker: "Szkolenie",
    h1: "Szkolenie AI w sprzedaży",
    lead: "Szkolenie dla handlowców i zespołów B2B, którzy chcą używać AI nie jako zabawki, ale jako narzędzia, które realnie skraca czas pracy i poprawia wyniki.",
    ctaLabel: "Umów bezpłatną konsultację",
    ctaTopic: "Szkolenie: AI w sprzedaży",
    serviceType: "Szkolenie z wykorzystania AI w sprzedaży",
    schemaDescription:
      "Szkolenie z wykorzystania AI w sprzedaży B2B: prospecting, personalizacja outreachu, skrypty rozmów, analiza nagrań i automatyzacja powtarzalnych zadań.",
    forWhomHeading: "Dla kogo jest to szkolenie",
    forWhom: [
      {
        title: "Handlowcy B2B",
        description: "Chcesz skrócić czas na zadania, które nie sprzedają, i poświęcić go na rozmowy z klientami.",
      },
      {
        title: "Zespoły sprzedaży",
        description: "Chcecie wspólnie wdrożyć narzędzia AI w codziennej pracy, a nie testować je każdy osobno.",
      },
      {
        title: "Managerowie sprzedaży",
        description: "Chcesz, żeby zespół korzystał z AI w sposób, który podnosi wyniki, a nie tylko wygląda nowocześnie.",
      },
    ],
    scopeHeading: "Co obejmuje szkolenie",
    scope: [
      "AI w prospectingu i personalizacji outreachu",
      "Generowanie i optymalizacja skryptów rozmów z pomocą AI",
      "Analiza nagrań rozmów i automatyczne follow-upy",
      "Automatyzacja powtarzalnych zadań sprzedażowych",
      "Praktyczne narzędzia AI gotowe do użycia od zaraz",
    ],
    postsHeading: "Powiązane poradniki",
    posts: [
      { title: "Jak zbudować pipeline, który naprawdę konwertuje", href: "/blog/pipeline-ktory-konwertuje" },
      { title: "5 błędów cold callingu, które zabijają Twoje wyniki", href: "/blog/cold-calling-bledy" },
      {
        title: "Czego nauczyłem się, słuchając setek rozmów moich handlowców",
        href: "/blog/czego-nauczylem-sie-sluchajac-setek-rozmow",
      },
    ],
    faq: trainingFaq,
    related: trainingRelated("/szkolenia-sprzedazowe-b2b/ai-w-sprzedazy"),
  },
  "dla-founderow": {
    path: "/szkolenia-sprzedazowe-b2b/dla-founderow",
    parent: trainingParent,
    metaTitle: "Szkolenie dla założycieli startupów: pitch i pierwsi klienci",
    metaDescription:
      "Szkolenie dla founderów i cofounderów: pitch inwestorski, rozmowy z VC, term sheet i sprzedaż pierwszym klientom bez działu sprzedaży.",
    kicker: "Szkolenie",
    h1: "Szkolenie dla założycieli startupów",
    lead: "Szkolenie dla cofounderów i twórców startupów: jak rozmawiać z inwestorami, pozyskać pierwszych klientów i nie zepsuć kluczowych rozmów, które decydują o przyszłości projektu.",
    ctaLabel: "Umów bezpłatną konsultację",
    ctaTopic: "Szkolenie: założyciele startupów",
    serviceType: "Szkolenie sprzedażowe dla founderów startupów",
    schemaDescription:
      "Szkolenie dla założycieli startupów: pitch inwestorski, rozmowy z VC i aniołami, podstawy negocjacji term sheet i sprzedaż pierwszym klientom bez działu sprzedaży.",
    forWhomHeading: "Dla kogo jest to szkolenie",
    forWhom: [
      {
        title: "Founderzy i cofounderzy",
        description: "Szukasz pierwszych klientów dla swojego produktu i nie masz jeszcze działu sprzedaży.",
      },
      {
        title: "Zespoły przed rundą finansowania",
        description: "Przygotowujecie się do rozmów z inwestorami i chcecie zbudować wiarygodność i trakcję.",
      },
    ],
    scopeHeading: "Co obejmuje szkolenie",
    scope: [
      "Jak przygotować i przeprowadzić pitch inwestorski",
      "Rozmowy z VC i aniołami: co mówić, czego unikać",
      "Negocjacje term sheet: podstawy bez prawnika",
      "Jak sprzedać pierwszym klientom bez działu sprzedaży",
      "Budowanie wiarygodności i trakcji przed rundą",
    ],
    postsHeading: "Powiązane poradniki",
    posts: [
      { title: "Kto zadaje pytania, ten prowadzi rozmowę", href: "/blog/kto-zadaje-pytania-ten-prowadzi" },
      {
        title: "Demo, które robisz za wcześnie, kosztuje Cię deal",
        href: "/blog/demo-ktore-robisz-za-wczesnie",
      },
      { title: "'Za drogo' prawie nigdy nie znaczy 'za drogo'", href: "/blog/za-drogo-prawie-nigdy-nie-znaczy-za-drogo" },
    ],
    faq: trainingFaq,
    related: trainingRelated("/szkolenia-sprzedazowe-b2b/dla-founderow"),
  },
};

export const mentoringPage: ServicePageData = {
  path: "/mentoring-sprzedazowy",
  metaTitle: "Mentoring sprzedażowy i consulting dla CEO i dyrektorów sprzedaży",
  metaDescription:
    "Mentoring sprzedażowy 1:1 dla CEO, sales managerów i dyrektorów sprzedaży: audyt procesu, Sales Playbook, praca na żywym pipeline, KPI i rozwój zespołu.",
  kicker: "Usługa",
  h1: "Mentoring i consulting sprzedażowy",
  lead: "Regularne wsparcie dla CEO, sales managerów i dyrektorów sprzedaży: diagnoza, plan działania, poprawa procesu i rozwój zespołu, z jasną odpowiedzialnością za wynik.",
  ctaLabel: "Umów bezpłatną konsultację",
  ctaTopic: "Consulting & Mentoring",
  serviceType: "Mentoring i consulting sprzedażowy",
  schemaDescription:
    "Mentoring i consulting sprzedażowy 1:1 dla CEO, sales managerów i dyrektorów sprzedaży: audyt procesu sprzedaży, Sales Playbook, sesje 1:1, praca na żywym pipeline oraz KPI.",
  forWhomHeading: "Dla kogo jest ta usługa",
  forWhom: [
    {
      title: "CEO i właściciele firm",
      description: "Sprzedaż w Twojej firmie opiera się na Tobie i chcesz zbudować proces, który działa bez Ciebie.",
    },
    {
      title: "Sales managerowie",
      description: "Prowadzisz zespół i potrzebujesz partnera do analizy pipeline, wyników i rozwoju ludzi.",
    },
    {
      title: "Dyrektorzy sprzedaży",
      description: "Skalujesz sprzedaż i chcesz poprawić proces, KPI i sposób pracy zespołu.",
    },
  ],
  scopeHeading: "Co obejmuje mentoring",
  scope: [
    "Audyt procesu sprzedaży",
    "Budowa Sales Playbook",
    "Sesje 1:1 co tydzień lub co miesiąc",
    "Praca na żywym pipeline",
    "KPI i mierzenie wyników",
  ],
  whyHeading: "Czym mentoring różni się od szkolenia",
  why: [
    {
      title: "Pracujemy na Twoich danych",
      text: "Analizujemy Twoje konkretne sytuacje, pipeline i wyniki w czasie rzeczywistym, a nie ogólne przykłady.",
    },
    {
      title: "Regularne spotkania, nie jednorazowy event",
      text: "Sesje 1:1 odbywają się w stałym rytmie, co tydzień lub co miesiąc, dzięki czemu zmiany się utrwalają.",
    },
    {
      title: "Jasna odpowiedzialność za wynik",
      text: "Zaczynamy od diagnozy i planu działania, a wyniki mierzymy KPI, które wspólnie ustalamy.",
    },
  ],
  postsHeading: "Powiązane poradniki",
  posts: [
    { title: "Jak zbudować pipeline, który naprawdę konwertuje", href: "/blog/pipeline-ktory-konwertuje" },
    {
      title: "Czego nauczyłem się, słuchając setek rozmów moich handlowców",
      href: "/blog/czego-nauczylem-sie-sluchajac-setek-rozmow",
    },
    {
      title: "Jak wybrać firmę szkoleniową ze sprzedaży: 6 pytań przed podpisaniem umowy",
      href: "/blog/jak-wybrac-firme-szkoleniowa-ze-sprzedazy",
    },
  ],
  faq: [
    {
      q: "Czym różni się mentoring od kursu online?",
      a: "Kurs to nagrany materiał, który przerabiasz we własnym tempie. Mentoring to praca 1:1: analizujemy Twoje konkretne sytuacje, pipeline i wyniki w czasie rzeczywistym.",
    },
    {
      q: "Jak często odbywają się sesje?",
      a: "Sesje 1:1 mogą odbywać się co tydzień lub co miesiąc. Rytm ustalamy po bezpłatnej konsultacji, dopasowany do Twojej sytuacji.",
    },
    consultFaq,
  ],
  related: [
    { label: "Szkolenia sprzedażowe B2B", href: "/szkolenia-sprzedazowe-b2b" },
    { label: "Rekrutacja handlowców", href: "/rekrutacja-handlowcow" },
    { label: "Wszystkie usługi", href: "/#uslugi" },
  ],
};
