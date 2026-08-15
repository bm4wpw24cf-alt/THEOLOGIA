import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ImportantBox } from "@/components/articles/ImportantBox";
import { ContentList } from "@/components/articles/ContentList";
import { BibleBox } from "@/components/articles/BibleBox";
import { getArticleBySlug } from "@/lib/articles";
import { GiscusComments } from "./GiscusComments";
import styles from "@/components/articles/article.module.css";

const article = getArticleBySlug("den-forste-arsaken")!;

/* og:description/twitter:description i originalen er en kortere, egen tekst –
   ikke den samme som meta description/lib/articles.ts sin description. Bevart
   som egen streng, ikke slått sammen med article.description. */
const socialDescription =
  "Egenskaper, personlighet og kreativitet – en kosmologisk argumentasjon for Guds eksistens.";

export const metadata: Metadata = {
  title: `${article.title} | THEOLOGIA`,
  description: article.description,
  authors: [{ name: "Eirik Storesletten" }],
  alternates: {
    canonical: article.href,
  },
  openGraph: {
    type: "article",
    title: article.title,
    description: socialDescription,
    url: article.href,
    siteName: "THEOLOGIA",
    publishedTime: "2026-08-09",
    modifiedTime: "2026-08-09",
    authors: ["Eirik Storesletten"],
  },
  twitter: {
    card: "summary",
    title: article.title,
    description: socialDescription,
  },
};

const TOC = [
  { id: "p1", label: "Tid- og romuavhengig" },
  { id: "p2", label: "Uforanderlig" },
  { id: "p3", label: "Kraftfull (allmektig)" },
  { id: "p4", label: "Nødvendig eksistens" },
  { id: "p5", label: "Ikke-materiell (åndelig)" },
  { id: "p6", label: "Personlig" },
  { id: "p7", label: "Godhet" },
  { id: "p8", label: "Intelligent" },
  { id: "p9", label: "Kreativitet" },
];

export default function DenForsteArsakenPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Apologetikk", href: "/temaer/apologetikk" },
          { label: "Den første årsaken" },
        ]}
      />

      <ArticleLayout
        category="TEMAER · APOLOGETIKK · ATEISME"
        title={article.title}
        subtitle="Egenskaper, personlighet og kreativitet – en kosmologisk argumentasjon"
        meta="Av Eirik Storesletten"
        toc={TOC}
        intro={
          <>
            <p>
              Det kosmologiske argumentet for Guds eksistens tar utgangspunkt i et grunnleggende filosofisk
              spørsmål: Hvorfor finnes det noe i det hele tatt, fremfor ingenting? Når universet har hatt en
              begynnelse, slik både klassisk filosofi og moderne kosmologi peker i retning av, blir det nødvendig
              å spørre etter årsaken til denne begynnelsen.
            </p>
            <p>
              Frank Turek og andre klassiske apologeter understreker at det ikke er tilstrekkelig å konkludere med
              at det finnes en første årsak. Dersom årsaken faktisk forklarer universets eksistens, kan vi også si
              noe meningsfullt om hva slags årsak dette må være. Egenskapene til den første årsaken er derfor ikke
              vilkårlige, men logisk utledet av selve virkningens natur – universet.
            </p>
          </>
        }
      >
        <h2 id="p1">1. Tid- og romuavhengig</h2>

        <h4>Begrunnelse</h4>
        <p>
          Tid og rom oppsto ved universets begynnelse, ofte knyttet til Big Bang. Dersom universet hadde en
          begynnelse, kan ikke årsaken selv være en del av tid og rom, for da ville den allerede forutsette det
          den skal forklare.
        </p>

        <h4>Implikasjon</h4>
        <p>
          Den første årsaken eksisterer ikke innenfor tidsforløp, men i en evig «nå»-tilstand, uten begynnelse
          eller slutt. Dette peker på en transcendent virkelighet – noe fundamentalt annerledes enn den fysiske
          verden.
        </p>

        <h2 id="p2">2. Uforanderlig</h2>

        <h4>Begrunnelse</h4>
        <p>
          Forandring forutsetter tid. Alt som endrer seg, gjør det fra én tilstand til en annen over tid. En
          tidløs årsak kan derfor ikke være underlagt endring.
        </p>

        <h4>Implikasjon</h4>
        <p>
          Den første årsaken er stabil og uforanderlig. Dette antyder ikke statisk livløshet, men fullkommenhet –
          en eksistens som ikke mangler noe og derfor ikke trenger utvikling eller forbedring.
        </p>

        <h2 id="p3">3. Kraftfull (allmektig)</h2>

        <h4>Begrunnelse</h4>
        <p>
          Å bringe hele universet til eksistens fra ingenting – uten forhåndseksisterende materie, energi eller
          lover – krever en form for kausal kraft som langt overgår alt vi kjenner fra naturen.
        </p>

        <h4>Implikasjon</h4>
        <p>
          Denne kraften er ikke begrenset av fysiske prosesser eller energimengder. Den første årsaken må derfor
          være allmektig i betydningen tilstrekkelig mektig til å skape alt som eksisterer.
        </p>

        <h2 id="p4">4. Nødvendig eksistens</h2>

        <h4>Begrunnelse</h4>
        <p>
          Alt som begynner å eksistere, trenger en årsak. Men dersom den første årsaken selv var avhengig av noe
          annet, ville vi få en uendelig regress av årsaker, uten noen endelig forklaring.
        </p>

        <h4>Implikasjon</h4>
        <p>
          Den første årsaken må være nødvendig – en selv-eksisterende virkelighet som ikke kan ikke eksistere.
          Universet er derimot kontingent: det kunne ha vært annerledes, eller ikke eksistert i det hele tatt.
        </p>

        <h2 id="p5">5. Ikke-materiell (åndelig)</h2>

        <h4>Begrunnelse</h4>
        <p>Materie oppsto sammen med universet. Årsaken til universet kan derfor ikke selv være materiell.</p>

        <h4>Implikasjon</h4>
        <p>
          Den første årsaken er immateriell og ikke bundet av fysiske begrensninger. Dette peker mot en åndelig
          eller ikke-fysisk form for eksistens.
        </p>

        <h2 id="p6">6. Personlig</h2>

        <h4>Begrunnelse</h4>
        <p>
          En avgjørende innsikt i kosmologisk argumentasjon er spørsmålet om timing: Hvorfor begynte universet å
          eksistere på et bestemt tidspunkt? En upersonlig, mekanisk årsak virker automatisk så lenge betingelsene
          er til stede. Dersom universets årsak var upersonlig, ville universet derfor ha eksistert evig.
        </p>

        <h4>Implikasjon</h4>
        <p>
          At universet faktisk begynte å eksistere, peker mot en personlig årsak – en årsak med vilje, intensjon
          og evne til å velge å skape. Dette er et sentralt poeng hos Frank Turek: bare en personlig årsak kan
          forklare en temporal begynnelse.
        </p>

        <h2 id="p7">7. Godhet</h2>

        <h4>Begrunnelse</h4>
        <p>
          Universet viser ikke bare eksistens, men orden, rasjonalitet, skjønnhet og moral. Objektive moralske
          verdier – slik mange mennesker intuitivt erkjenner dem – krever en moralsk forankring.
        </p>

        <h4>Implikasjon</h4>
        <p>
          Dersom den første årsaken er opphavet til både eksistens og moral, må den være god. Ondskap kan ikke
          være den ultimate kilden til alt som er, men forstås snarere som fravær eller forvrengning av det gode.
        </p>

        <h2 id="p8">8. Intelligent</h2>

        <h4>Begrunnelse</h4>
        <p>
          Universet er finjustert på en måte som gjør liv mulig. Naturlover og kosmologiske konstanter viser en
          presisjon og orden som vanskelig kan forklares ved tilfeldighet eller blind nødvendighet alene.
        </p>

        <h4>Implikasjon</h4>
        <p>
          Den første årsaken må være intelligent – i stand til å forstå, planlegge og virkeliggjøre et univers med
          høy grad av struktur og sammenheng.
        </p>

        <hr className={styles.sectionDivider} />

        <h2 id="p9">9. Kreativitet – en nødvendig, men ofte oversett egenskap</h2>

        <p>
          Når vi samler disse egenskapene, fremtrer kreativitet som en naturlig og nødvendig konsekvens. Å skape
          universet <em>ex nihilo</em> er den mest radikale form for kreativ handling. Universet er ikke bare
          funksjonelt, men mangfoldig, rikt og estetisk. Skjønnhet, symmetri og variasjon er ikke strengt
          nødvendige for eksistens, men de er gjennomgående til stede.
        </p>

        <p>Kreativitet forutsetter:</p>

        <ul>
          <li>Intelligens – evne til å forestille seg</li>
          <li>Fri vilje – evne til å velge</li>
          <li>Personlig handling – evne til intensjon</li>
        </ul>

        <p>
          Alle disse egenskapene er allerede implisert i kosmologisk argumentasjon. Kreativitet er derfor ikke et
          tilleggstrekk, men en integrert del av forklaringen på hvorfor universet er slik det er – og ikke bare
          at det eksisterer. Menneskets egen kreativitet kan i denne sammenheng forstås som en refleks av den
          første årsakens natur, snarere enn et tilfeldig biprodukt av materie.
        </p>

        <hr className={styles.sectionDivider} />

        <h2>Samlet bilde og konklusjon</h2>

        <p>Når kosmologisk argumentasjon følges konsekvent, peker den mot en første årsak som er:</p>

        <ContentList>
          <li>Tidløs og romuavhengig</li>
          <li>Uforanderlig</li>
          <li>Allmektig</li>
          <li>Nødvendig og selv-eksisterende</li>
          <li>Immateriell</li>
          <li>Personlig</li>
          <li>God</li>
          <li>Intelligent</li>
          <li>Kreativ</li>
        </ContentList>

        <p>
          Frank Turek og andre apologeter konkluderer derfor med at den første årsaken ikke er en abstrakt kraft
          eller upersonlig lov, men samsvarer med det klassiske teistiske gudsbegrepet – særlig slik Gud forstås i
          kristen teologi.
        </p>

        <ImportantBox title="Konklusjonen">
          Den første årsaken er ikke bare universets utløsende faktor, men en skapende, meningsgivende og
          personlig Gud – Skaper i full betydning av ordet.
        </ImportantBox>

        <BibleBox>
          <em>«I begynnelsen skapte Gud himmelen og jorden.»</em>
          <br />{" "}
          <strong>1 Mosebok 1:1</strong>
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
