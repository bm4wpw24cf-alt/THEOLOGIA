/* =========================================================
   DATA/ARTICLES.JS
   Datakilde for "Nyeste artikler" på forsiden (index.html).
   Lest av js/latest-articles.js, som sorterer denne listen
   etter dato (nyeste først) og rendrer den inn i
   .articles-timeline ved sidelasting.

   Slik legger du til en ny artikkel:
   Legg til ett nytt objekt i arrayet under, med minst title,
   date, description og url. Den dukker automatisk opp på
   riktig plass i "Nyeste artikler" – ingen annen kode må
   endres.

   Merk: url er en relativ sti (uten innledende skråstrek).
   THEOLOGIA publiseres på GitHub Pages under /THEOLOGIA/, så
   en absolutt sti som "/artikler/x.html" ville pekt til feil
   sted i produksjon – se docs for detaljer om dette.
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
  }
];
