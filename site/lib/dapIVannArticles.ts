export interface DapIVannArticle {
  slug: string;
  title: string;
  description: string;
}

export const DAP_I_VANN_BASE = "/temaer/fundament/dap-i-vann";

/**
 * Artiklene i samlesiden "Dåp i vann" under Fundament. Delt mellom
 * oversiktssiden og breadcrumbs på hver artikkelside, slik at rekkefølge
 * og titler kun defineres ett sted.
 */
export const dapIVannArticles: DapIVannArticle[] = [
  {
    slug: "er-vanndapen-nodvendig-for-frelse",
    title: "Er vanndåpen nødvendig for frelse?",
    description:
      "Hva lærer Det nye testamente om dåpens betydning? En gjennomgang av tekstene som knytter dåp til syndenes forlatelse, frelse og det nye livet.",
  },
  {
    slug: "tro-alene-uten-dap",
    title: "Tro alene uten dåp?",
    description:
      "En undersøkelse av påstanden om at tro alene er tilstrekkelig, med svar fra Efeserne 2:8–9, røveren på korset, Kornelius og Romerne 10:9–10.",
  },
  {
    slug: "dapen-og-forening-med-kristus",
    title: "Dåp i vann – identifikasjon med Kristi død og oppstandelse",
    description:
      "Et gudgitt tegn der den troende trer inn i Kristi frelsesverk og identifiserer seg med hans død, begravelse og oppstandelse.",
  },
];
