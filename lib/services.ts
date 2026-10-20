export interface ServicePageData {
  path: string;
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
  topics?: { title: string; text: string }[];
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
    },
    {
      title: "AI w sprzedaży",
      text: "Jak używać AI nie jako zabawki, ale jako narzędzia, które skraca czas pracy i poprawia wyniki handlowców.",
    },
    {
      title: "Szkolenie dla założycieli startupów",
      text: "Jak rozmawiać z inwestorami, pozyskać pierwszych klientów i nie zepsuć kluczowych rozmów.",
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
    { title: "Cold calling: najczęstsze błędy", href: "/blog/cold-calling-bledy" },
    {
      title: "Kto zadaje pytania, ten prowadzi",
      href: "/blog/kto-zadaje-pytania-ten-prowadzi",
    },
    {
      title: "Sprzedaż przegrywasz w pierwszych minutach",
      href: "/blog/sprzedaz-przegrywasz-w-pierwszych-minutach",
    },
    { title: "Demo, które robisz za wcześnie", href: "/blog/demo-ktore-robisz-za-wczesnie" },
    { title: "Pipeline, który konwertuje", href: "/blog/pipeline-ktory-konwertuje" },
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
    { label: "Kursy online", href: "/#kursy" },
    { label: "Wszystkie usługi", href: "/#uslugi" },
  ],
};
