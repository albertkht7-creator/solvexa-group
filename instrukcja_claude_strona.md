# Instrukcja budowania strony internetowej w Claude Code

---

## KROK 1 — Instalacja skills (zrób to raz, globalnie)

### Skill 1: Frontend Design (Anthropic)

Wklej link z GitHuba do Claude Code i wpisz:

Install this skill

Działa w tle — podnosi jakość designu bez jawnego wywoływania. Blokuje generyczne fonty (Inter, Roboto), odpycha od "AI-slop" estetyki, pcha w odważniejsze kierunki.

### Skill 2: UI/UX Pro Max

Wpisz:

Install this plugin using NPM

*(dokładne brzmienie komendy ma znaczenie)*

Ten skill wywołujesz jawnie w promptach: `/ui-ux-pro-max` Daje dostęp do dziesiątek stylów UI, palet kolorów i par fontów.

---

## KROK 2 — Napisz brief, nie losowy prompt

**Zasada:** jakość strony \= jakość briefu. Nie pisz "zrób mi stronę restauracji". Pisz szczegółowo.

### Struktura briefu:

/ui-ux-pro-max

Buduję stronę dla \[opis biznesu\].

\[Opis projektu — co to za firma, czym się zajmuje, co sprzedaje, 

jaki ma charakter, do kogo mówi, jaka jest atmosfera miejsca/marki\]

Ask me clarifying questions before you start coding.

**Kluczowa linijka: `Ask me clarifying questions`** Zmusza Claude'a do zadania serii pytań zanim zacznie kodować. Będzie pytał m.in. o:

- nazwę biznesu  
- styl i atmosferę  
- jakie sekcje ma mieć strona  
- kto pisze copy (Ty czy Claude)  
- stack techniczny (static HTML, React, inne)  
- poziom animacji  
- preferencje kolorystyczne

Odpowiedz konkretnie na każde pytanie.

### Jeśli nie znasz się na designie — używaj referencji

Zamiast próbować opisać słowami jak ma wyglądać strona, daj zrzuty ekranu ze stron, które Ci się podobają (Dribbble, Awwwards, Pinterest). Claude zrozumie co Ci się podoba lepiej z obrazka niż z opisu.

---

## KROK 3 — Wybierz kierunek stylistyczny

Po briefie Claude zaproponuje **2–3 kierunki stylistyczne** (np. "dark moody Manhattan steakhouse" vs "Pacific Northwest modern").

Wybierz jeden lub powiedz co chcesz połączyć/zmienić. Nie zaczynaj kodowania bez decyzji o kierunku.

---

## KROK 4 — Pierwsza wersja strony

Claude przez chwilę "myśli", potem buduje pełny layout.

Po otrzymaniu pierwszej wersji sprawdź każdy punkt z tej listy:

| Element | Co sprawdzasz |
| :---- | :---- |
| **Point of view** | Czy strona ma konkretny, spójny charakter? (np. "luksusowa stekownia w Seattle") — nie "ładna strona ogólnie" |
| **Typografia** | Czy fonty są dobrane parami i mają charakter? (np. Fraunces \+ Geist) — brak Intera |
| **Kolor** | Ograniczona, przemyślana paleta (3–5 kolorów max, np. near black \+ warm cream \+ oxblood \+ brass) |
| **Hierarchia** | Czy wiesz co czytasz jako pierwsze, drugie, trzecie? Oko ma być prowadzone |
| **Copy** | Krótkie, sensoryczne, bez marketingowego bełkotu ("Six dishes, one fire" \> 3 zdania o "wyjątkowych doznaniach") |

---

## KROK 5 — Imagery (zdjęcia i grafiki)

**Najlepiej:** własne, custom zdjęcia/grafiki.

**Jeśli ich nie masz — AI:** Nie pisz promptu do generatora obrazów sam. Zamiast tego zapytaj Claude'a:

Wygeneruj prompt do generatora obrazów AI, który pasuje do stylu tej strony.

Claude zna już Twój projekt i napisze prompt, który da grafikę spójną z całością. Narzędzia: ChatGPT Image, Veo, Topaz i podobne.

---

## KROK 6 — Motion i interakcje (21st.dev)

Wejdź na **21st.dev** — biblioteka gotowych komponentów (scroll effects, animacje, przyciski).

Workflow:

1. Znajdź komponent który Cię interesuje  
2. Skopiuj gotowy prompt z 21st.dev  
3. Wklej do Claude Code z dopiskiem: "przeróbka tego komponentu na mój stack i styl strony"

**Ważne:** Claude sprawdzi czy komponent pasuje do Twojego stacku (np. jeśli masz static HTML, a komponent jest w React — nie wklei go 1:1, tylko zaproponuje odpowiednik). To jest pożądane zachowanie.

---

## KROK 7 — Debugowanie

Gdy coś nie działa:

**Nie pisz:** "zepsute"

**Pisz:** "Oczekiwałem że \[X\], a zamiast tego widzę \[Y\]"

Claude iteruje sam: szuka błędu, poprawia, jeśli trzeba odpala podgląd w przeglądarce i diagnozuje głębiej. Nie odpuszczaj po pierwszym błędzie — Twoja rola to precyzyjny opis problemu.

---

## KROK 8 — Polish pass (przejście od "ładnej" do "drogiej" strony)

Po pierwszym działającym layoucie wklej do Claude'a **całą checklistę z Kroku 4** i napisz:

Oceń tę stronę według tych kryteriów. Bądź brutalnie szczery — 

co jest strong, co mixed, co missing.

Claude wskaże słabe punkta. Potem zamiast serii pojedynczych próśb, wyślij **jeden zbiorczy request**:

Wprowadź wszystkie poprawki naraz. Kierunek: bardziej handcrafted, 

mniej generik, bardziej expensive — ale nie bardziej busy.

Dostaniesz spójny pakiet zmian (grain, linie, efekty, animacje słowo po słowie, itd.) zamiast chaosu losowych tweaków.

---

## KROK 9 — Mikro-interakcje sekcja po sekcji

Po batchu poprawek: przewiń stronę ręcznie i znajdź sekcje które "czujesz" jako płaskie lub nudne.

Dla każdej takiej sekcji:

Dodaj jedną subtelną interakcję/motion do tej sekcji.

Potem od razu:

Zrób to bardziej subtle i refined.

Powtarzaj aż przestanie być krzykliwe.

Ta warstwa ruchu to główna różnica między stroną która **wygląda** drogo a stroną która **czuje się** drogo podczas scrollowania.

---

## KROK 10 — Copywriting i fonty — dwa szybkie hacki

**Copy:** Frontend Design skill pcha Claude'a w stronę oszczędnego, sensorycznego języka. Jeśli tak się nie dzieje — powiedz wprost: "mniej marketingowego bełkotu, krótsze zdania, bardziej sensoryczne".

**Fonty:** Jeśli widzisz **Inter** — zmień go natychmiast. Inter jest tak nadużywany w stronach generowanych przez AI, że natychmiast zdradza "AI-made". Zamień np. na **Geist** — zmiana jednego fontu potrafi diametralnie zmienić odbiór całości.

---

## Podsumowanie kolejności

Setup → Instalacja skills → Brief \+ pytania → Wybór kierunku 

→ Pierwsza wersja → Imagery → Motion → Debugowanie 

→ Polish pass → Mikro-interakcje → Fonty i copy  
