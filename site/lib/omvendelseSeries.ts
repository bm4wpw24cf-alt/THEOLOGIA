export interface SeriesPart {
  slug: string;
  title: string;
  question: string;
}

export const OMVENDELSE_SERIES_BASE = "/temaer/fundament/artikler/omvendelse-fra-dode-gjerninger";

/**
 * Metadata for de seks delene i studieserien "Omvendelse fra døde
 * gjerninger". Delt mellom oversiktssiden og hver enkelt del-side, slik
 * at rekkefølge og tittel kun defineres ett sted.
 */
export const omvendelseSeries: SeriesPart[] = [
  {
    slug: "del-1",
    title: "Del 1 – Omvendelse i Det gamle testamentet",
    question: "Hva betyr omvendelse i Det gamle testamentet?",
  },
  {
    slug: "del-2",
    title: "Del 2 – Omvendelse i Det nye testamentet",
    question: "Hvordan viderefører Det nye testamentet den gammeltestamentlige forståelsen av omvendelse?",
  },
  {
    slug: "del-3",
    title: "Del 3 – Hva betyr egentlig metanoia?",
    question: "Hva betyr metanoia, og hvorfor er begrepet mer enn en meningsendring?",
  },
  {
    slug: "del-4",
    title: "Del 4 – Omvendelse: menneskets respons og Guds nåde",
    question: "Hvordan henger Guds nådige kall og menneskets omvendelse sammen?",
  },
  {
    slug: "del-5",
    title: "Del 5 – Omvendelse, tro og det nye livet",
    question: "Hvordan henger omvendelse, tro og det nye livet sammen?",
  },
  {
    slug: "del-6",
    title: "Del 6 – Evangeliets kall: «Vend om og tro»",
    question: "Hvorfor inneholder evangeliets kall både omvendelse og tro?",
  },
];
