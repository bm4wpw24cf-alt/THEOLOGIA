import { TopicCard, type Topic } from "./TopicCard";

const TOPICS: Topic[] = [
  {
    icon: "book",
    title: "Bibelen",
    description: "Om Bibelens autoritet, inspirasjon, kanon, bibellesning og hvordan vi skal forstå Guds ord.",
    href: "/temaer/bibelen",
  },
  {
    icon: "path",
    title: "Evangeliet",
    description: "Sannheten om synd, nåde, tro, omvendelse og frelsen i Jesus Kristus.",
    href: "/temaer/evangeliet",
  },
  {
    icon: "heart",
    title: "Kristenliv",
    description: "Praktisk undervisning om bønn, disippelskap, helliggjørelse og livet med Kristus.",
    href: "/temaer/kristenliv",
  },
  {
    icon: "column",
    title: "Teologi",
    description: "Bibelsk undervisning om Gud, Kristus, Den Hellige Ånd, frelsen og den kristne tro.",
    href: "/temaer/teologi",
  },
  {
    icon: "shield",
    title: "Apologetikk",
    description: "Forsvar for den kristne tro med bibelske, historiske og filosofiske argumenter.",
    href: "/temaer/apologetikk",
  },
  {
    icon: "book-open",
    title: "Endetid",
    description: "Bibelsk undervisning om profetier, Jesu gjenkomst, Johannes åpenbaring og håpet om Guds rike.",
    href: "/temaer/endetid",
  },
  {
    icon: "cross-large",
    title: "Bibelske temaer",
    description: "Utforsk sentrale temaer i Bibelen og se hvordan Guds frelsesplan, pakter og løfter utfolder seg gjennom Skriften.",
    href: "/temaer/bibelske-temaer",
  },
  {
    icon: "house",
    title: "Fundament",
    description: "Grunnleggende sannheter, bibelske prinsipper og viktige ressurser for å bygge et solid åndelig fundament.",
    href: "/temaer/fundament",
  },
];

export function TopicGrid() {
  return (
    <section className="bg-parchment py-[120px]">
      <div className="mx-auto w-[min(1280px,92%)]">
        <div className="mb-16 text-center">
          <span className="panel-tag">Bibelsk kunnskap</span>
          <h2 className="mb-4 text-[2.6rem]">Utforsk temaer</h2>
          <p className="text-[1.08rem]">Utforsk bibelske emner, apologetikk, kristenliv og ressurser.</p>
        </div>

        <div className="grid grid-cols-4 gap-6 max-[1100px]:grid-cols-2 max-[992px]:grid-cols-1">
          {TOPICS.map((topic) => (
            <TopicCard key={topic.href} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
}
