import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { BibleBox } from "@/components/articles/BibleBox";
import { GiscusComments } from "./GiscusComments";

const title = "Hvordan oppnå rett forhold til Gud?";
const description = "Frelsen er ikke en prestasjon, men en gave mottatt ved tro på Jesus Kristus.";
const url = "/veien-til-jesus/rett-forhold-til-gud";

export const metadata: Metadata = {
  title: `${title} | THEOLOGIA`,
  description,
  authors: [{ name: "Eirik Storesletten" }],
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "article",
    title,
    description,
    url,
    siteName: "THEOLOGIA",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const TOC = [
  { id: "lovgjerninger", label: "Hvorfor lovgjerninger ikke kan frelse" },
  { id: "fariseeren", label: "Fariseeren og tolleren" },
  { id: "tro-lydighet", label: "Tro som viser seg i lydighet" },
  { id: "guds-kraft", label: "Tro hviler på Guds kraft" },
  { id: "svar", label: "Hvordan skal du da svare på evangeliet?" },
];

export default function RettForholdTilGudPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Veien til Jesus", href: "/veien-til-jesus/kom-til-kristus" },
          { label: title },
        ]}
      />

      <div className="mx-auto w-[min(1280px,92%)] pb-8 pt-10">
        <div className="rounded-[18px] border border-gold/25 bg-parchment p-5 shadow-[0_10px_30px_rgba(17,17,17,0.04)]">
          <p className="mb-2 text-[0.72rem] font-semibold tracking-[0.14em] text-gold uppercase">Les også</p>
          <Link href="/veien-til-jesus/kom-til-kristus" className="text-[1.1rem] font-semibold text-ink hover:text-gold">
            Kom til Kristus
          </Link>
        </div>
      </div>

      <ArticleLayout
        category="Veien til Jesus · Rett forhold til Gud"
        title={title}
        subtitle="Frelsen er ikke en prestasjon, men en gave mottatt ved tro"
        meta="Av Eirik Storesletten"
        toc={TOC}
        intro={
          <p className="text-[1.2rem] leading-[1.8] text-ink-soft">
            Hvordan kan et menneske bli rettferdig for Gud? Dette er et av livets viktigste spørsmål. Mange håper at
            et godt liv, religiøse handlinger eller moralske prestasjoner skal være nok. Bibelen gir imidlertid et
            helt annet svar: ingen kan oppnå et rett forhold til Gud ved egne gjerninger. Frelsen er Guds gave,
            mottatt ved tro på Jesus Kristus.
          </p>
        }
      >
        <p>
          Det betyr ikke at gjerninger er uviktige. Bibelen skiller mellom lovgjerninger, som er et forsøk på å
          oppnå rettferdighet ved egen innsats, og troens gjerninger, som er lydighet som springer ut av tillit til
          Gud. Dette skillet er avgjørende for å forstå evangeliet.
        </p>

        <section id="lovgjerninger">
          <h2>Hvorfor lovgjerninger ikke kan frelse</h2>
          <p>Paulus skriver:</p>
          <BibleBox>
            <em>«Jeg forkaster ikke Guds nåde. For hvis vi kan oppnå rettferdighet ved loven, da døde jo Kristus til ingen nytte.»</em>
            <br /> <strong>Galaterne 2:21</strong>
          </BibleBox>
          <p>
            Hvis et menneske kunne frelse seg selv ved lovgjerninger, ville Kristi død vært unødvendig. Men ingen kan
            oppfylle Guds fullkomne standard. Derfor sendte Gud sin Sønn for å gjøre det vi aldri kunne gjøre selv.
          </p>
          <p>
            Gud er alltid den som tar initiativet. Han elsker verden, sender evangeliet ut til alle mennesker og kaller
            oss til omvendelse. Tro er derfor ikke en menneskelig superkraft eller en prestasjon som tvinger Gud til å
            frelse oss. Tro er den ydmyke responsen på Guds kall gjennom evangeliet.
          </p>
          <p>
            Romerbrevet understreker at tro og nåde ikke står i motsetning til hverandre. Det Paulus setter opp mot
            hverandre, er tro og lovgjerninger. Tro er ikke betaling for frelsen, men den hånden som tar imot Guds
            gave.
          </p>
        </section>

        <section id="fariseeren">
          <h2>Fariseeren og tolleren</h2>
          <p>
            Jesus illustrerer dette i lignelsen om fariseeren og tolleren. Fariseeren stolte på sin egen rettferdighet,
            mens tolleren ba: «Gud, vær meg synder nådig!» Jesus avslutter med ordene:
          </p>
          <BibleBox>
            <em>«Jeg sier dere: Tolleren gikk hjem rettferdig for Gud, den andre ikke. For hver den som setter seg selv høyt, skal settes lavt, og den som setter seg selv lavt, skal settes høyt.»</em>
            <br /> <strong>Lukas 18:14</strong>
          </BibleBox>
          <p>
            Frelsen mottas ikke av den som mener han fortjener den, men av den som erkjenner sitt behov for Guds nåde.
          </p>
        </section>

        <section id="tro-lydighet">
          <h2>Tro som viser seg i lydighet</h2>
          <p>
            Samtidig lærer Bibelen at ekte tro aldri er passiv. Tro viser seg i lydighet. Hebreerne 11 forteller om
            mennesker som handlet fordi de stolte på Gud. Noa bygde arken. Abraham forlot sitt land. Moses valgte å
            følge Gud. Sara fikk kraft til å føde fordi hun stolte på Guds løfte. Disse gjerningene skapte ikke troen,
            men var frukten av den.
          </p>
          <p>Derfor skriver Paulus:</p>
          <BibleBox>
            <em>«Derfor ber vi alltid for dere at vår Gud må gjøre dere verdige til det kallet dere har fått, og fylle dere med all vilje til det gode og med en tro som med kraft viser seg i gjerning.»</em>
            <br /> <strong>2 Tessaloniker 1:11</strong>
          </BibleBox>
          <p>Jakob uttrykker den samme sannheten når han viser til Abraham:</p>
          <BibleBox>
            <em>«Abraham trodde Gud, og derfor regnet Gud ham som rettferdig, og han ble kalt ‘Guds venn’. Dere ser altså at mennesket kjennes rettferdig på grunn av gjerninger og ikke bare på grunn av tro.»</em>
            <br /> <strong>Jakob 2:23–24</strong>
          </BibleBox>
          <p>
            Jakob motsier ikke Paulus. Paulus forklarer hvordan et menneske blir rettferdiggjort for Gud — ved tro uten
            lovgjerninger. Jakob viser at den troen som rettferdiggjør, aldri blir stående alene. Den viser seg i et liv
            preget av lydighet. Tro uten gjerninger er død, fordi den ikke er ekte.
          </p>
        </section>

        <section id="guds-kraft">
          <h2>Tro hviler på Guds kraft, ikke vår egen</h2>
          <p>Bibelen peker også på hva tro egentlig retter seg mot. Den hviler ikke på vår egen styrke, men på Guds kraft. Paulus skriver:</p>
          <BibleBox>
            <em>«For jeg skammer meg ikke over evangeliet. Det er en Guds kraft til frelse for hver den som tror.»</em>
            <br /> <strong>Romerne 1:16</strong>
          </BibleBox>
          <BibleBox>
            <em>«For deres tro skulle ikke bygge på menneskelig visdom, men på Guds kraft.»</em>
            <br /> <strong>1 Korinter 2:5</strong>
          </BibleBox>
          <p>
            Abraham så sin egen svakhet, og Sara så sitt døde morsliv. Likevel stolte de ikke på sine egne muligheter,
            men på Gud som hadde gitt løftet. Hebreerne sier:
          </p>
          <BibleBox>
            <em>«I tro fikk også Sara kraft til å grunnlegge en ætt … For hun stolte på at han som hadde gitt løftet, var trofast.»</em>
            <br /> <strong>Hebreerne 11:11</strong>
          </BibleBox>
          <p>
            Det samme gjelder alle som blir frelst. Efeserne 1:19 taler om «hvor overveldende hans kraft er hos oss som
            tror». Kolosserne 2:12 sier at vi i dåpen blir reist opp med Kristus «ved troen på Guds kraft». Peter
            skriver at vi «i Guds kraft blir bevart ved tro» (1 Peter 1:5).
          </p>
        </section>

        <section id="svar">
          <h2>Hvordan skal du da svare på evangeliet?</h2>
          <p>
            Ikke ved å forsøke å fortjene Guds kjærlighet. Ikke ved å stole på din egen godhet. Men ved å vende om fra
            synd, tro på Jesus Kristus og ta imot hans frelse. Peter forkynte dette klart på pinsedagen:
          </p>
          <BibleBox>
            <em>«Vend om og la dere døpe i Jesu Kristi navn, hver og en av dere, så dere kan få tilgivelse for syndene, og dere skal få Den hellige ånds gave.»</em>
            <br /> <strong>Apostlenes gjerninger 2:38</strong>
          </BibleBox>
          <p>
            Omvendelse, tro og lydighet er ikke betaling for frelsen. De er den responsen Gud kaller oss til når
            evangeliet forkynnes.
          </p>
        </section>

        <div className="my-12 rounded-[18px] bg-[#1f1d19] p-8 text-[#f3efe6] shadow-[0_15px_35px_rgba(17,17,17,0.14)]">
          <p className="mb-4">
            <strong className="text-[#d9c9a3]">All ære tilhører Gud.</strong> Paulus peker til slutt all ære tilbake til Gud:
            «Hva har vi da å være stolte av? Ingenting! … For vi hevder at mennesket blir rettferdig ved tro, uten
            lovgjerninger.» (Romerne 3:27–28)
          </p>
          <p className="mb-0">
            Når et menneske kommer til Gud i tro, kan det ikke skryte av seg selv. Frelsen er av nåde fra begynnelse til
            slutt. Derfor tilhører all ære Gud alene. Den rettferdige skal leve ved tro.
          </p>
        </div>

        <p className="my-12 text-center text-[1.9rem] italic leading-[1.6] text-ink-soft">
          «Den rettferdige skal leve ved tro.»
          <span className="mt-3 block text-[0.76rem] font-sans font-semibold tracking-[0.12em] text-gold uppercase">
            Romerne 1:17
          </span>
        </p>
      </ArticleLayout>

      <section id="kommentarer" className="bg-parchment-dark py-[120px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="mb-11 text-left">
            <h2 className="mb-4 text-[2.6rem]">Kommentarer</h2>
            <p className="text-[1.08rem] text-text-light">Del dine tanker eller spørsmål. Du trenger en GitHub-konto for å kommentere.</p>
          </div>

          <GiscusComments />
        </div>
      </section>
    </main>
  );
}
