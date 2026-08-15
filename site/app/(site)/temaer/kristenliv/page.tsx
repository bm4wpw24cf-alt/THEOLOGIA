import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Icon, type IconName } from "@/components/icons/Icon";

export const metadata: Metadata = {
  title: "Kristenliv | THEOLOGIA",
  description:
    "Praktiske ressurser for et liv i etterfølgelse av Jesus Kristus – bønn, bibellesning, disippelskap, helliggjørelse og mer.",
};

interface KristenlivTopic {
  icon: IconName;
  title: string;
  description: string;
  href: string;
}

/**
 * Emnenettet her har en reell designforskjell fra det delte TopicGrid/
 * TopicCard-mønsteret (5 kolonner i stedet for 4, venstrejustert i stedet
 * for sentrert, mindre h3/ikon-marg) – portert fra temaer/kristenliv/css/
 * kristenliv.css sine skopede overstyringer av cards.css. Bygget som
 * sideegen markup i stedet for å tvinge disse avvikene inn i den delte
 * TopicCard-komponenten (som brukes uendret av forsiden og Fundament).
 */
const TOPICS: KristenlivTopic[] = [
  {
    icon: "hands",
    title: "Bønn",
    description: "Lær om bønnens betydning og hvordan du kan utvikle et rikt bønnsliv.",
    href: "/temaer/kristenliv/bonn",
  },
  {
    icon: "book-open",
    title: "Bibellesning",
    description: "Praktiske råd for å lese, forstå og anvende Guds Ord i hverdagen.",
    href: "/temaer/kristenliv/bibellesning",
  },
  {
    icon: "cross",
    title: "Disippelskap",
    description: "Hva det vil si å følge Jesus og vokse som hans disippel.",
    href: "/temaer/kristenliv/disippelskap",
  },
  {
    icon: "heart",
    title: "Helliggjørelse",
    description: "Å bli mer lik Kristus gjennom Den hellige ånds arbeid.",
    href: "/temaer/kristenliv/helliggjorelse",
  },
  {
    icon: "house",
    title: "Menighetsliv",
    description: "Betydningen av fellesskap og å være en del av Kristi kropp.",
    href: "/temaer/kristenliv/menighetsliv",
  },
  {
    icon: "megaphone",
    title: "Evangelisering",
    description: "Å dele evangeliet med andre i ord og handling.",
    href: "/temaer/kristenliv/evangelisering",
  },
  {
    icon: "mountain-flag",
    title: "Lidelse",
    description: "Hvordan møte prøvelser med tro og håp.",
    href: "/temaer/kristenliv/lidelse",
  },
  {
    icon: "sprout",
    title: "Åndelig vekst",
    description: "Prinsipper for å vokse i tro og modenhet.",
    href: "/temaer/kristenliv/andelig-vekst",
  },
  {
    icon: "family",
    title: "Familie",
    description: "Kristne prinsipper for et sterkt og sunt familieliv.",
    href: "/temaer/kristenliv/familie",
  },
  {
    icon: "briefcase",
    title: "Arbeid og kall",
    description: "Å leve ut ditt kall og tjene Gud der du er.",
    href: "/temaer/kristenliv/arbeid-og-kall",
  },
];

export default function KristenlivPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Temaer", href: "/temaer" }, { label: "Kristenliv" }]} />

      <section className="bg-parchment pt-16 pb-8">
        <div className="mx-auto grid w-[min(1280px,92%)] grid-cols-2 items-center gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-9">
          <div className="max-w-[520px] max-[900px]:max-w-none">
            <h1 className="mb-3.5 text-[clamp(2.2rem,4vw,3rem)]">Kristenliv</h1>

            <p className="mb-4.5 font-serif text-xl font-semibold text-gold-dark">
              Et liv i etterfølgelse av Jesus Kristus
            </p>

            <p className="mb-[30px] font-sans text-base leading-[1.75] text-text">
              Kristenlivet handler om å leve hver dag med Jesus – i tro, kjærlighet og lydighet. Her finner du
              ressurser som hjelper deg å vokse i ditt forhold til Gud og leve ut ditt kall.
            </p>
          </div>

          <div className="overflow-hidden rounded-radius shadow-lg">
            <Image
              src="/images/kristenliv/hero-kristenliv.jpg"
              alt="En person ser utover fjell i solnedgang"
              width={1568}
              height={1003}
              className="block h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-parchment pt-12 pb-[120px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="mx-auto mb-[60px] max-w-[640px] text-center">
            <h2 className="mb-4 text-[2.6rem]">Utforsk temaer</h2>
            <Icon name="book-open" aria-hidden="true" className="mx-auto mb-5 block h-5 w-5 text-gold" />
            <p className="text-[1.08rem]">Finn hjelp og veiledning i praktiske sider av det kristne livet.</p>
          </div>

          <div className="grid grid-cols-5 gap-6 max-[1100px]:grid-cols-3 max-[640px]:grid-cols-2 max-[480px]:grid-cols-1">
            {TOPICS.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="group relative block rounded-radius border border-border bg-white p-[42px_30px] text-left shadow-sm transition-[transform,box-shadow,border-color] duration-[350ms] ease-[var(--ease)] hover:-translate-y-2 hover:border-gold/35 hover:shadow-lg"
              >
                <Icon name={topic.icon} className="mb-[22px] block h-[34px] w-[34px] text-gold" />
                <h3 className="mb-3 text-[1.15rem]">{topic.title}</h3>
                <p className="mb-5 font-sans text-[0.92rem] leading-[1.6] text-text-light">{topic.description}</p>
                <span className="font-sans text-[0.86rem] font-semibold tracking-[0.2px] text-gold group-hover:text-gold-dark">
                  Les mer
                  <span aria-hidden="true" className="ml-1.5">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="relative mt-[60px] flex items-center gap-8 overflow-hidden rounded-radius bg-parchment-dark p-[40px_44px] shadow-sm max-[900px]:flex-col max-[900px]:items-start">
            <Image
              src="/images/kristenliv/sitat-bakgrunn.jpg"
              alt=""
              fill
              className="-z-10 object-cover opacity-[0.18]"
            />

            <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <Icon name="book-open" aria-hidden="true" className="h-6 w-6 text-gold" />
            </span>

            <blockquote className="max-w-[640px] font-serif text-xl italic leading-[1.6] text-ink">
              «La deres lys skinne for mennesker, så de kan se deres gode gjerninger og ære deres Far som er i
              himmelen.»
              <cite className="mt-2.5 block font-sans text-[0.8rem] font-semibold tracking-[0.6px] text-gold-dark not-italic">
                MATTEUS 5,16
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
