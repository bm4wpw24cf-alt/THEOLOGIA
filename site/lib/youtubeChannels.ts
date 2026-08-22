export interface YoutubeChannel {
  title: string;
  description: string;
  youtubeUrl: string;
  websiteUrl?: string;
  category: string;
}

/**
 * Én kilde til sannhet for anbefalte YouTube-kanaler, gruppert med
 * `category`. Nye kanaler (også for andre kategorier enn
 * "islamsk-kritisk") legges til her uten å endre komponentene som
 * leser fra denne listen.
 */
export const youtubeChannels: YoutubeChannel[] = [
  {
    title: "Pfander Center for Apologetics and Polemics",
    description:
      "Kristen apologetikk og polemikk om islam, Koranen, Muhammad, Bibelen, Jesus og kristen-muslimsk dialog.",
    youtubeUrl: "https://www.youtube.com/results?search_query=Pfander+Center+for+Apologetics+and+Polemics",
    websiteUrl: "https://www.pfandercenter.org/",
    category: "islamsk-kritisk",
  },
  {
    title: "GodLogic Apologetics",
    description: "Kristen apologetikk gjennom direkte gatedebatter, med fokus på islam og forsvar av den kristne tro.",
    youtubeUrl: "https://www.youtube.com/@GodLogicApologetics",
    category: "islamsk-kritisk",
  },
  {
    title: "Shamounian",
    description:
      "Kristen-muslimsk polemikk med fokus på Bibelen, Koranen, Jesus, treenigheten og islamske innvendinger mot kristendommen.",
    youtubeUrl: "https://www.youtube.com/@shamounian",
    category: "islamsk-kritisk",
  },
  {
    title: "DCCI Ministries",
    description: "Kristen evangelisering, apologetikk og debatt med særlig fokus på islam og muslimsk evangelisering.",
    youtubeUrl: "https://www.youtube.com/@DCCIMinistries",
    category: "islamsk-kritisk",
  },
  {
    title: "Anthony Rogers",
    description: "Kristen apologetikk og teologisk argumentasjon, blant annet om islam, Guds eksistens, Jesus og kristen tro.",
    youtubeUrl: "https://www.youtube.com/@Ousias1",
    category: "islamsk-kritisk",
  },
  {
    title: "Vocab Malone",
    description: "Kristen apologetikk, religionsdialog og offentlige samtaler om islam og kristen tro.",
    youtubeUrl: "https://www.youtube.com/@VocabMalone",
    category: "islamsk-kritisk",
  },
  {
    title: "Apostate Prophet",
    description: "Kritisk analyse av islam fra et tidligere muslimsk perspektiv, med fokus på Koranen, Muhammad og islamsk teologi.",
    youtubeUrl: "https://www.youtube.com/@ApostateProphet",
    category: "islamsk-kritisk",
  },
  {
    title: "BTB Sco",
    description: "Kristen apologetikk og gatedebatter fra Speakers' Corner i London, med fokus på islam og kristen-muslimsk dialog.",
    youtubeUrl: "https://www.youtube.com/@btbsoco",
    category: "islamsk-kritisk",
  },
  {
    title: "Chris at Speakers’ Corner",
    description:
      "Kristen apologetikk og debatt om islam og kristendom, med særlig fokus på muslimsk-kristen dialog, islamske kilder og argumentasjon ved Speakers’ Corner i London.",
    youtubeUrl: "https://www.youtube.com/@chrisatspeakerscorner",
    category: "islamsk-kritisk",
  },
  {
    title: "Apologetics Roadshow",
    description:
      "Kristen apologetikk og undervisning som tar opp spørsmål om kristen tro, islam, verdensanskuelser og religionskritikk.",
    youtubeUrl: "https://www.youtube.com/@apologeticsroadshow",
    category: "islamsk-kritisk",
  },
  {
    title: "InspiringPhilosophy",
    description:
      "Kristen apologetikk, filosofi og vitenskap til forsvar for kristendommens sannhet, Bibelen og Jesu oppstandelse – med enkelte bidrag også om islam.",
    youtubeUrl: "https://www.youtube.com/@InspiringPhilosophy",
    category: "islamsk-kritisk",
  },
  {
    title: "CIRA International",
    description:
      "Kristen apologetikk og evangelisering rettet mot muslimer, med undervisning og dialog om islam og kristen tro.",
    youtubeUrl: "https://www.youtube.com/@CIRAInternational",
    websiteUrl: "https://cirainternational.net/",
    category: "islamsk-kritisk",
  },
];
