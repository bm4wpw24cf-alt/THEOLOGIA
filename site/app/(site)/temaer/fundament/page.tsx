import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Icon } from "@/components/icons/Icon";
import { TopicCard, type Topic } from "@/components/home/TopicCard";

export const metadata: Metadata = {
  title: "Fundament | THEOLOGIA",
  description:
    "Grunnleggende sannheter, bibelske prinsipper og viktige ressurser for å bygge et solid åndelig fundament.",
};

const TOPICS: Topic[] = [
  {
    icon: "house",
    title: "Grunnvollen",
    description:
      "Artikler som utdyper de grunnleggende sannhetene troen bygges på – med utgangspunkt i Hebreerne 6:1–3.",
    href: "/temaer/fundament/grunnvollen",
    cta: "Les mer",
  },
  {
    icon: "path",
    title: "Omvendelse fra døde gjerninger",
    description: "Et oppgjør med gjerninger uten liv, og et bevisst vendepunkt mot et liv i samsvar med Guds vilje.",
    href: "#",
    cta: "Les mer",
  },
  {
    icon: "heart",
    title: "Tro på Gud",
    description: "Å sette sin fulle lit til Gud og hans ord – grunnvollen alt kristenliv hviler på.",
    href: "#",
    cta: "Les mer",
  },
  {
    icon: "cross",
    title: "Dåp i vann",
    description: "Et synlig vitnesbyrd om at den troende er begravet og oppreist med Kristus til et nytt liv.",
    href: "/temaer/fundament/artikler/dap-i-vann",
    cta: "Les mer",
  },
  {
    icon: "sprout",
    title: "Dåp i Den Hellige Ånd",
    description: "Å bli fylt og utrustet med Den Hellige Ånds kraft til tjeneste og et liv i etterfølgelse av Jesus.",
    href: "#",
    cta: "Les mer",
  },
  {
    icon: "hands",
    title: "Håndspåleggelse",
    description: "Et bibelsk uttrykk for velsignelse, overføring og bekreftelse av tjeneste i menigheten.",
    href: "#",
    cta: "Les mer",
  },
  {
    icon: "mountain-flag",
    title: "De dødes oppstandelse",
    description: "Bibelens løfte om at de døde skal stå opp, og håpet dette gir for evigheten.",
    href: "#",
    cta: "Les mer",
  },
  {
    icon: "column",
    title: "Evig dom",
    description: "Bibelens undervisning om at alle mennesker en dag skal stå til ansvar for Gud.",
    href: "/temaer/fundament/artikler/evig-dom",
    cta: "Les mer",
  },
];

export default function FundamentPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Temaer", href: "/temaer" }, { label: "Fundament" }]} />

      <section className="bg-parchment pt-16 pb-8">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="grid grid-cols-2 items-center gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-9">
            <div className="max-w-[520px] max-[900px]:max-w-none">
              <h1 className="mb-3.5 text-[clamp(2.2rem,4vw,3rem)]">Fundamentet for kristenlivet</h1>

              <p className="mb-4.5 font-serif text-xl font-semibold text-gold-dark">
                Grunnvollen som troen bygges på.
              </p>

              <p className="mb-5 font-sans text-base leading-[1.75] text-text">
                Fundamentet for kristenlivet handler om de grunnleggende sannhetene som bygger troen på Jesus
                Kristus. Bibelen viser at troen har en grunnvoll som må legges og bygges videre på.
              </p>

              <p className="font-sans text-[0.85rem] font-semibold tracking-[0.04em] text-gold uppercase">
                Hebreerne 6:1–3
              </p>
            </div>

            <div className="overflow-hidden rounded-radius shadow-lg">
              <Image
                src="/images/fundament/troens-grunnvoll.png"
                alt="Åpen bibel som symbol på troens grunnvoll"
                width={1536}
                height={1024}
                className="block h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-parchment pt-12 pb-[120px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="mx-auto mb-[60px] max-w-[640px] text-center">
            <h2 className="mb-4 text-[2.6rem]">Utforsk temaet</h2>
            <Icon name="house" aria-hidden="true" className="mx-auto mb-4 block h-4 w-4 text-text" />
            <p className="text-[1.08rem]">De grunnleggende sannhetene troen bygges videre på.</p>
          </div>

          <div className="grid grid-cols-4 gap-6 max-[1100px]:grid-cols-2 max-[992px]:grid-cols-1">
            {TOPICS.map((topic) => (
              <TopicCard key={topic.title} topic={topic} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
