import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { BibleBox } from "@/components/articles/BibleBox";
import { ImportantBox } from "@/components/articles/ImportantBox";
import { getArticleBySlug } from "@/lib/articles";
import { GiscusComments } from "./GiscusComments";

const article = getArticleBySlug("evolusjonen-ubekreftet")!;

export const metadata: Metadata = {
  title: `${article.title} | THEOLOGIA`,
  description: article.description,
  authors: [{ name: "Krister Renard" }],
  alternates: {
    canonical: article.href,
  },
  openGraph: {
    type: "article",
    title: article.title,
    description: article.description,
    url: article.href,
    siteName: "THEOLOGIA",
    publishedTime: article.date,
    modifiedTime: article.date,
    authors: ["Krister Renard"],
  },
  twitter: {
    card: "summary",
    title: article.title,
    description: article.description,
  },
};

const TOC = [
  { id: "kap1", label: "Innledning" },
  { id: "kap2", label: "Sirkelresonnement" },
  { id: "kap3", label: "Et mekanisk syn på naturen" },
  { id: "kap4", label: "Menneskets egne spilleregler" },
  { id: "kap5", label: "Konklusjon" },
];

export default function EvolusjonenUbekreftetPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Apologetikk", href: "/temaer/apologetikk" },
          { label: article.title },
        ]}
      />

      <ArticleLayout
        category="TEMAER · APOLOGETIKK · ATEISME"
        title={article.title}
        subtitle="Om vitenskapens grenser og det skjulte premisset bak utviklingslæren"
        meta="Av Krister Renard"
        toc={TOC}
        intro={
          <p>
            Normal naturvitenskap handler kun om repeterbare fenomener. Universet, livet og mennesket har kun oppstått
            én gang, og disse hendelsene kan ikke gjentas, verken gjennom observasjoner eller eksperimenter. Rent
            definisjonsmessig kan derfor ikke de ulike teoriene om alt livs opprinnelse være blant vitenskapens mest
            pålitelige teorier, slik det ofte påstås i massemedia og skolebøker.
          </p>
        }
      >
        <h2 id="kap1">Innledning</h2>
        <p>
          Selv i Darwins egen bok <em>Om Artenes Opprinnelse</em> anerkjennes det indirekte at evolusjonsteorien ikke
          kan bevises på den tradisjonelle vitenskapelige måten. I forordet til 1928-utgaven av denne boken skriver for
          eksempel Sir Arthur Keith, som var sin tids fremste ekspert på teoriene om menneskets opprinnelse:
        </p>

        <BibleBox>
          <em>
            «Evolusjonen er ubekreftet og umulig å bevise. Vi tror på den fordi det eneste alternativet er skapelse,
            noe som er utenkelig.»
          </em>
          <br /> <strong>Sir Arthur Keith</strong>
        </BibleBox>

        <p>Biokjemikeren Ernest Kahane uttrykker omtrent det samme når han sier:</p>

        <BibleBox>
          <em>
            «Det er absurd og fullstendig galskap å tro at en levende celle kan oppstå av seg selv; til tross for dette
            tror jeg på det, fordi jeg ikke kan forestille meg at det har skjedd på noen annen måte.»
          </em>
          <br /> <strong>Ernest Kahane</strong>
        </BibleBox>

        <h2 id="kap2">Sirkelresonnement</h2>
        <p>Ernst Haeckel, ofte kalt Darwins tyske bulldog på grunn av sitt aggressive forsvar av darwinismen, sa en gang om livets opprinnelse:</p>

        <BibleBox>
          <em>«At liv kan oppstå av seg selv må være riktig, ellers ville man måtte tro på en skapende Gud.»</em>
          <br /> <strong>Ernst Haeckel</strong>
        </BibleBox>

        <p>
          Disse tre eksemplene utgjør en mesterlig oppsummering av hvordan det ligger an. Siden man fra starten av har
          utelukket en skapende Gud — det er jo utenkelig — må det finnes en annen forklaring på livet og de
          forskjellige artene. Uansett hvor usikker eller usannsynlig denne forklaringen er, må man holde fast ved den,
          ellers tvinges man til å erkjenne at det kanskje finnes en skapende Gud tross alt.
        </p>

        <p>
          Når man påstår at evolusjonsteorien har bevist at Gud ikke finnes, begår man derfor et sirkelresonnement. «Siden
          det ikke kan finnes en skapende Gud, har jeg herved bevist at det ikke finnes noen skapende Gud,» sier man
          egentlig.
        </p>

        <h2 id="kap3">Et mekanisk syn på naturen</h2>
        <p>
          Bak dette resonneringsmønsteret ligger opplysningstiden og den positivistiske filosofien. Matematikeren L. K.
          Frank ga en gang, under en konferanse i kybernetikk (systemteori), følgende oppsummering av positivismens
          program:
        </p>

        <BibleBox>
          <em>
            «Mysteriet med målrettet atferd og teleologi har i lang tid vært knyttet til en mystisk, selvforbedrende
            eller målsøkende evne eller ytterste årsak, vanligvis av overmenneskelig eller overnaturlig opprinnelse.
            For å kunne studere slike fenomener, måtte den vitenskapelige tenkningen forkaste denne troen på formål og
            målretting og erstatte den med et strengt mekanisk og deterministisk syn på naturen.»
          </em>
          <br /> <strong>L. K. Frank</strong>
        </BibleBox>

        <p>
          Antakelsen om at alle fenomener, fra fysiske hendelser til menneskelig atferd, er resultatet av innenverdslige
          årsak- og virkningsforhold, og at de derfor fullt ut kan forklares med fornuftens hjelp, bygger derfor ikke på
          vitenskapelige fakta, men på et ønske om at det skal være tilfelle. Insisterer man på at vitenskapen skal kunne
          studere alle eksisterende fenomener, må man rett og slett forkaste enhver form for tro på overnaturlige
          inngrep i naturens hendelser — uavhengig av om slike inngrep eksisterer eller ikke.
        </p>

        <h2 id="kap4">Menneskets egne spilleregler</h2>
        <p>
          Når man studerer den fysiske virkeligheten, finnes det i prinsippet to tilnærminger å velge mellom. Den ene er
          å erkjenne at det kanskje eksisterer fenomener som ikke kan studeres med den vitenskapelige metoden. Det
          innebærer ikke at man er antivitenskapelig, men bare at man aksepterer at hvert verktøy, og da også
          vitenskapen, har et begrenset bruksområde. Dette alternativet sier derfor at vitenskapen fungerer utmerket
          innenfor sitt kompetanseområde, men at dette området ikke dekker den totale virkeligheten.
        </p>
        <p>
          Det andre alternativet er å insistere på at det umulig kan eksistere noe som ikke kan studeres og forklares
          vitenskapelig. Det siste alternativet er ikke mer logisk eller mer fornuftig enn det første, snarere tvert
          imot. Den vitenskapelige metoden utgår jo fra «spilleregler» som mennesket selv har formulert for å kunne
          studere virkeligheten så objektivt som mulig.
        </p>

        <ImportantBox title="Konklusjonen">
          Å påstå at disse spillereglene setter grenser for hva som kan eksistere, er omtrent like ulogisk som å påstå
          at sjakkreglene setter grenser for hvordan en virkelig hest kan bevege seg.
        </ImportantBox>

        <BibleBox>
          <em>«Himmelen forteller om Guds ære, hvelvingen forkynner hans henders verk.»</em>
          <br /> <strong>Salme 19:2</strong>
        </BibleBox>
      </ArticleLayout>

      <section id="kommentarer" className="bg-parchment-dark py-[120px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="mb-11 text-left">
            <h2 className="mb-4 text-[2.6rem]">Kommentarer</h2>
            <p className="text-[1.08rem] text-text-light">
              Del dine tanker eller spørsmål. Du trenger en GitHub-konto for å kommentere.
            </p>
          </div>

          <GiscusComments />
        </div>
      </section>
    </main>
  );
}
