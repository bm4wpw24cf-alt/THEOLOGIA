export type ArticleDesign = "shared" | "bespoke";

export interface ArticleMeta {
  slug: string;
  title: string;
  category: string;
  subcategory: string;
  date: string;
  description: string;
  href: string;
  design: ArticleDesign;
  /** true når artikkelen faktisk har en Next.js-rute (Fase 1: kun troens-bønn). */
  migrated: boolean;
}

/**
 * Én kilde til sannhet for "Nyeste artikler" (deles av "/" og "/artikler"),
 * portert fra data/articles.js. Inneholder alle artikler for innholdsparitet
 * i listen, selv de som ikke er migrert til Next.js ennå – disse vises uten
 * klikkbar lenke (migrated: false) i stedet for som en brutt lenke.
 */
export const articles: ArticleMeta[] = [
  {
    slug: "den-forste-arsaken",
    title: "Den første årsaken",
    category: "Apologetikk",
    subcategory: "Ateisme",
    date: "2026-08-09",
    description:
      "Egenskaper, personlighet og kreativitet – en kosmologisk argumentasjon for at den første årsaken til universet samsvarer med det klassiske teistiske gudsbegrepet.",
    href: "/temaer/apologetikk/artikler/den-forste-arsaken",
    design: "shared",
    migrated: true,
  },
  {
    slug: "er-evig-bevisst-pine-bibelsk",
    title: "Er evig bevisst pine bibelsk?",
    category: "Endetid",
    subcategory: "Helvete",
    date: "2026-08-09",
    description:
      "Et svar til læren om utslettelse – en grundig bibelsk og teologisk gjennomgang av om helvete er et sted for evig bevisst pine, eller om annihilasjonisme er den bibelske forståelsen.",
    href: "/temaer/endetid/artikler/er-evig-bevisst-pine-bibelsk",
    design: "shared",
    migrated: true,
  },
  {
    slug: "troens-bonn",
    title: "Troens bønn",
    category: "Kristenliv",
    subcategory: "Bønn",
    date: "2026-08-04",
    description:
      "En bibelsk studie av hva troens bønn er, hvordan tro vokser frem, og hvordan den troende kan be med frimodighet etter Guds vilje.",
    href: "/temaer/kristenliv/bonn/troens-bonn",
    design: "shared",
    migrated: true,
  },
  {
    slug: "effektiv-bonn",
    title: "Effektiv bønn",
    category: "Kristenliv",
    subcategory: "Bønn",
    date: "2026-08-15",
    description: "Hvordan få mer ut av ditt personlige bønneliv.",
    href: "/temaer/kristenliv/bonn/effektiv-bonn",
    design: "shared",
    migrated: true,
  },
  {
    slug: "hvordan-lese-bibelen-med-forstaelse",
    title: "Hvordan leser Bibelen med forståelse",
    category: "",
    subcategory: "",
    date: "2024-05-18",
    description: "Praktiske prinsipper for å tolke Guds ord rett.",
    href: "/artikler/hvordan-lese-bibelen-med-forstaelse",
    design: "shared",
    migrated: true,
  },
  {
    slug: "paulus-og-evangeliet-om-naden",
    title: "Paulus og evangeliet om nåden",
    category: "",
    subcategory: "",
    date: "2024-05-15",
    description: "En dypdykk i Paulus' budskap til menigheten i Rom.",
    href: "/artikler/paulus-og-evangeliet-om-naden",
    design: "shared",
    migrated: true,
  },
  {
    slug: "lammets-seier-i-apenbaringen",
    title: "Lammets seier i Åpenbaringen",
    category: "",
    subcategory: "",
    date: "2024-05-12",
    description: "Hva betyr det at Jesus er verdig til å åpne boken?",
    href: "/artikler/lammets-seier-i-apenbaringen",
    design: "shared",
    migrated: false,
  },
  {
    slug: "a-leve-som-guds-etterfolger",
    title: "Å leve som Guds etterfølger",
    category: "",
    subcategory: "",
    date: "2024-05-09",
    description: "Disippelskap i hverdagen – en livslang vandring.",
    href: "/artikler/a-leve-som-guds-etterfolger",
    design: "shared",
    migrated: false,
  },
  {
    slug: "er-kristendommen-historisk-palitelig",
    title: "Er kristendommen historisk pålitelig?",
    category: "",
    subcategory: "",
    date: "2024-05-06",
    description: "En gjennomgang av historiske beviser for troen.",
    href: "/artikler/er-kristendommen-historisk-palitelig",
    design: "shared",
    migrated: false,
  },
  {
    slug: "forsoningen",
    title: "Forsoningen",
    category: "",
    subcategory: "",
    date: "",
    description:
      "Hva betydde det at Kristus forsonet oss med Gud? Utforsk Bibelens lære om sonofferet, korset, oppstandelsen og Guds frelsesplan.",
    href: "/artikler/forsoningen",
    design: "shared",
    migrated: false,
  },
  {
    slug: "hva-er-forsoning",
    title: "Hva er forsoning?",
    category: "",
    subcategory: "",
    date: "",
    description: "En innføring i hva Bibelen mener når den taler om forsoning mellom Gud og mennesker.",
    href: "/artikler/hva-er-forsoning",
    design: "shared",
    migrated: false,
  },
  {
    slug: "kristi-offer-i-det-gamle-testamentet",
    title: "Kristi offer i Det gamle testamentet",
    category: "",
    subcategory: "",
    date: "",
    description: "Hvordan offersystemet og profetiene i Det gamle testamentet peker fram mot Kristi offer.",
    href: "/artikler/kristi-offer-i-det-gamle-testamentet",
    design: "shared",
    migrated: false,
  },
  {
    slug: "korset-kjaerlighet-og-rettferdighet",
    title: "Korset – kjærlighet og rettferdighet",
    category: "",
    subcategory: "",
    date: "",
    description: "Om korset som stedet der Guds kjærlighet og rettferdighet møtes fullt ut.",
    href: "/artikler/korset-kjaerlighet-og-rettferdighet",
    design: "shared",
    migrated: false,
  },
  {
    slug: "forsoningens-frukter",
    title: "Forsoningens frukter",
    category: "",
    subcategory: "",
    date: "",
    description: "Hva forsoningen med Gud faktisk gir den troende – fred, tilgivelse og nytt fellesskap med Gud.",
    href: "/artikler/forsoningens-frukter",
    design: "shared",
    migrated: false,
  },
  {
    slug: "vanlige-misforstaelser-om-forsoningen",
    title: "Vanlige misforståelser om forsoningen",
    category: "",
    subcategory: "",
    date: "",
    description: "En gjennomgang av noen vanlige misforståelser om hva forsoningen er og ikke er.",
    href: "/artikler/vanlige-misforstaelser-om-forsoningen",
    design: "shared",
    migrated: false,
  },
];

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return articles.find((article) => article.slug === slug);
}
