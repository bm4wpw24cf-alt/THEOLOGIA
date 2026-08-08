/* =========================================================
   DATA/ARTICLES.JS
   Felles datakilde for ALLE artikler på THEOLOGIA. Dette er
   den ENE kilden som driver artikkellisten begge steder:

     - index.html      → "Nyeste artikler" (viser de {N} nyeste,
                          se data-limit på .articles-timeline)
     - artikler/index.html → komplett artikkeloversikt (viser alle)

   Begge sider leser denne filen via js/articles-timeline.js,
   som sorterer etter dato (nyeste først, artikler uten dato
   sist) og rendrer .articles-timeline på nytt ved sidelasting.
   De to sidene kan derfor aldri komme ut av sync med hverandre.

   Slik legger du til en ny artikkel:
   Legg til ett nytt objekt i arrayet under, med minst title,
   date, description og url. Den dukker automatisk opp på
   riktig plass på BEGGE sider – ingen annen kode må endres.

   Artikler uten kjent publiseringsdato kan sette date til "".
   De vises da nederst, merket "Artikkel" i stedet for en dato.

   Merk: url er en relativ sti fra prosjektroten (uten
   innledende skråstrek), f.eks. "artikler/min-artikkel.html".
   THEOLOGIA publiseres på GitHub Pages under /THEOLOGIA/, så
   en absolutt sti som "/artikler/x.html" ville pekt til feil
   sted i produksjon. js/articles-timeline.js regner selv om
   denne stien til riktig relativ lenke avhengig av hvilken
   side som viser den.
   ========================================================= */

const articles = [
  {
    title: "Troens bønn",
    category: "Kristenliv",
    subcategory: "Bønn",
    date: "2026-08-04",
    description: "En bibelsk studie av hva troens bønn er, hvordan tro vokser frem, og hvordan den troende kan be med frimodighet etter Guds vilje.",
    url: "temaer/kristenliv/bonn/troens-bonn.html"
  },
  {
    title: "Hvordan leser Bibelen med forståelse",
    category: "",
    subcategory: "",
    date: "2024-05-18",
    description: "Praktiske prinsipper for å tolke Guds ord rett.",
    url: "artikler/hvordan-lese-bibelen-med-forstaelse.html"
  },
  {
    title: "Paulus og evangeliet om nåden",
    category: "",
    subcategory: "",
    date: "2024-05-15",
    description: "En dypdykk i Paulus' budskap til menigheten i Rom.",
    url: "artikler/paulus-og-evangeliet-om-naden.html"
  },
  {
    title: "Lammets seier i Åpenbaringen",
    category: "",
    subcategory: "",
    date: "2024-05-12",
    description: "Hva betyr det at Jesus er verdig til å åpne boken?",
    url: "artikler/lammets-seier-i-apenbaringen.html"
  },
  {
    title: "Å leve som Guds etterfølger",
    category: "",
    subcategory: "",
    date: "2024-05-09",
    description: "Disippelskap i hverdagen – en livslang vandring.",
    url: "artikler/a-leve-som-guds-etterfolger.html"
  },
  {
    title: "Er kristendommen historisk pålitelig?",
    category: "",
    subcategory: "",
    date: "2024-05-06",
    description: "En gjennomgang av historiske beviser for troen.",
    url: "artikler/er-kristendommen-historisk-palitelig.html"
  },
  {
    title: "Forsoningen",
    category: "",
    subcategory: "",
    date: "",
    description: "Hva betydde det at Kristus forsonet oss med Gud? Utforsk Bibelens lære om sonofferet, korset, oppstandelsen og Guds frelsesplan.",
    url: "artikler/forsoningen.html"
  },
  {
    title: "Hva er forsoning?",
    category: "",
    subcategory: "",
    date: "",
    description: "En innføring i hva Bibelen mener når den taler om forsoning mellom Gud og mennesker.",
    url: "artikler/hva-er-forsoning.html"
  },
  {
    title: "Kristi offer i Det gamle testamentet",
    category: "",
    subcategory: "",
    date: "",
    description: "Hvordan offersystemet og profetiene i Det gamle testamentet peker fram mot Kristi offer.",
    url: "artikler/kristi-offer-i-det-gamle-testamentet.html"
  },
  {
    title: "Korset – kjærlighet og rettferdighet",
    category: "",
    subcategory: "",
    date: "",
    description: "Om korset som stedet der Guds kjærlighet og rettferdighet møtes fullt ut.",
    url: "artikler/korset-kjaerlighet-og-rettferdighet.html"
  },
  {
    title: "Forsoningens frukter",
    category: "",
    subcategory: "",
    date: "",
    description: "Hva forsoningen med Gud faktisk gir den troende – fred, tilgivelse og nytt fellesskap med Gud.",
    url: "artikler/forsoningens-frukter.html"
  },
  {
    title: "Vanlige misforståelser om forsoningen",
    category: "",
    subcategory: "",
    date: "",
    description: "En gjennomgang av noen vanlige misforståelser om hva forsoningen er og ikke er.",
    url: "artikler/vanlige-misforstaelser-om-forsoningen.html"
  }
];
