import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { BibleBox } from "@/components/articles/BibleBox";
import { ImportantBox } from "@/components/articles/ImportantBox";
import { getArticleBySlug } from "@/lib/articles";
import { GiscusComments } from "./GiscusComments";

const article = getArticleBySlug("problemer-med-psa")!;

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
    description: article.description,
    url: article.href,
    siteName: "THEOLOGIA",
    publishedTime: article.date,
    modifiedTime: article.date,
    authors: ["Eirik Storesletten"],
  },
  twitter: {
    card: "summary",
    title: article.title,
    description: article.description,
  },
};

const TOC = [
  { id: "art1", label: "Det finnes ingen ekte tilgivelse i PSA" },
  { id: "art2", label: "Det finnes ingen ekte barmhjertighet i PSA" },
  { id: "art3", label: "PSA ender logisk i begrenset soning eller universalisme" },
  { id: "art4", label: "Skyld og straff kan ikke overføres som juridiske objekter" },
];

export default function ProblemerMedPsaPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Evangeliet", href: "/temaer/evangeliet" },
          { label: article.title },
        ]}
      />

      <ArticleLayout
        category="TEMAER · EVANGELIET · FORSONINGEN"
        title={article.title}
        subtitle="En teologisk og bibelsk vurdering av hvorfor straffesubstitusjonsforsoning ikke holder"
        meta="Av Eirik Storesletten"
        toc={TOC}
        backHref="/temaer/evangeliet"
        backLabel="Tilbake til Evangeliet"
        intro={
          <p>
            Penal Substitutionary Atonement (PSA) er en av de mest utbredte forsoningsmodellene i moderne evangelikal
            teologi. Den hevder at Jesus ble straffet av Gud i vårt sted, slik at Guds vrede kunne bli tilfredsstilt og
            vi kunne bli tilgitt.
          </p>
        }
      >
        <p>
          Men når modellen granskes nøye — teologisk, bibelsk, historisk og etisk — oppstår en rekke alvorlige
          problemer. Disse problemene svekker ikke evangeliet, men viser tvert imot at evangeliet er bedre, dypere og
          mer bibelsk enn PSA gjør det til.
        </p>

        <h2 id="art1">Det finnes ingen ekte tilgivelse i PSA</h2>

        <p>
          PSA hevder at Jesus tok den straffen Gud egentlig skulle gi oss, slik at Gud kunne tilgi oss etter at straffen
          var betalt. Men denne modellen eliminerer selve muligheten for ekte tilgivelse.
        </p>

        <h3>Hvis synd alltid må straffes, finnes det ikke tilgivelse — bare betaling</h3>
        <p>
          Tilgivelse betyr i sin natur å frafalle krav — å gi opp retten til gjengjeldelse. Men i PSA skjer det motsatte:
          straffen gis fullt ut, den rammer bare en annen person. Dermed har du ikke tilgivelse, men avstraffelse gjennom
          stedfortreder.
        </p>
        <p>
          Tilgivelse skjer når den krenkede parten velger å ikke kreve straff. Men PSA sier at Gud ikke kan tilgi uten at
          straff først fullbyrdes. Dette er ikke kjærlighet som tilgir — det er et system som krever betaling.
        </p>

        <h3>Bibelen beskriver Guds tilgivelse som ubetinget nåde</h3>
        <p>Bibelen viser igjen og igjen at Gud tilgir uten forutgående straff:</p>
        <ul>
          <li>Nineve — ingen stedfortreder, kun Guds barmhjertighet (Jona 3–4)</li>
          <li>David — begår hor og drap, Gud tilgir etter anger (2 Sam 12)</li>
          <li>Hiskia — Gud tilgir uten straff (Jes 38)</li>
          <li>Israel i ørkenen — Gud tilgir etter Moses&apos; forbønn (2 Mos 34)</li>
        </ul>

        <BibleBox>
          <em>«Vær barmhjertige, slik deres Far er barmhjertig.»</em>
          <br /> <strong>Luk 6,36</strong>
        </BibleBox>

        <p>Hvis Guds barmhjertighet er betinget av straff, blir denne teksten meningsløs.</p>

        <ImportantBox title="Konklusjon — Artikkel 1">
          Hvis Gud må straffe før Han kan tilgi, finnes det ikke ekte tilgivelse — bare en juridisk transaksjon hvor
          straff flyttes fra én person til en annen. PSA sier: «Gud kan ikke tilgi uten straff.» Bibelen sier: «Gud
          tilgir fordi Han er rik på barmhjertighet.»
        </ImportantBox>

        <h2 id="art2">Det finnes ingen ekte barmhjertighet i PSA</h2>

        <p>
          PSA hevder at Gud ikke kan tilgi før syndens straff er fullbyrdet på Jesus. Men dette eliminerer sann
          barmhjertighet slik Bibelen beskriver den som Guds hjerte.
        </p>

        <h3>Barmhjertighet er å avstå fra straff — ikke å gi straffen til noen andre</h3>
        <p>
          Barmhjertighet (<em>rahamim / eleos</em>) betyr å la være å gi det mennesket fortjener, å holde tilbake
          gjengjeldelse. Men i PSA skjer dette aldri — straffen gis fullt ut, den rammer bare en uskyldig. Det er ikke
          barmhjertighet. Det er straff <em>flyttet</em> over på en annen person.
        </p>

        <BibleBox>
          <em>«Herren er barmhjertig og nådig, langmodig og rik på miskunn.»</em>
          <br /> <strong>Sal 103,8</strong>
        </BibleBox>

        <p>
          Barmhjertighet er noe Gud <em>er</em>, ikke noe Han blir etter en juridisk prosess. PSA gjør barmhjertighet
          til et produkt, ikke en karakteregenskap.
        </p>

        <h3>PSA skaper et splittet gudsbilde</h3>
        <p>I PSA krever Faderen straff og holder tilbake tilgivelse, mens Sønnen redder oss fra Faderen. Men Bibelen er klar:</p>
        <ul>
          <li>Faderen elsker verden (Joh 3,16)</li>
          <li>Faderen selv tilgir (Luk 15)</li>
          <li>Gud var i Kristus, ikke mot Kristus (2 Kor 5,19)</li>
          <li>Gud er rik på barmhjertighet (Ef 2,4)</li>
        </ul>

        <ImportantBox title="Konklusjon — Artikkel 2">
          PSA erstatter barmhjertighet med strafffullbyrdelse, tilgivelse med betaling, og nåde med juridikk. Bibelske
          forsoningsmodeller viser en Gud som tilgir fordi Han er barmhjertig — ikke fordi noen har mottatt straff på
          forhånd.
        </ImportantBox>

        <BibleBox>
          <em>«Gud var i Kristus og forsonte verden med seg selv, så han ikke tilregner dem deres overtredelser.»</em>
          <br /> <strong>2. Korinterbrev 5:19</strong>
        </BibleBox>

        <h2 id="art3">PSA ender logisk i begrenset soning eller universalisme</h2>

        <p>Når man følger PSAs premisser til sin logiske slutt, sitter man igjen med bare to muligheter — og ingen av dem er bibelske.</p>

        <h3>PSAs tre grunnpremisser</h3>
        <ul>
          <li>Gud kan ikke tilgi uten at synd straffes</li>
          <li>All synd må straffes fullt ut</li>
          <li>Straffen legges på Jesus i stedet for oss</li>
        </ul>

        <h3>Hvis Jesus bar straffen for alle → universalisme</h3>
        <p>
          Hvis Jesus allerede fikk straffen for hele menneskeheten, kan ikke Gud straffe de samme syndene to ganger.
          Gjelden er juridisk slettet — alle burde bli frelst. Men Bibelen sier tydelig at ikke alle blir frelst (Rom
          2,5).
        </p>

        <h3>Hvis ikke alle blir frelst → begrenset soning</h3>
        <p>
          For å unngå universalisme har mange PSA-teologer valgt at Jesus bare døde for de utvalgte. Men Bibelen sier
          Jesus døde for alle (Joh 3,16; 1 Joh 2,2; Hebr 2,9), og evangeliet kan ikke lenger forkynnes til alle.
        </p>

        <ImportantBox title="Konklusjon — Artikkel 3">
          PSA tvinger frem to ekstreme løsninger: begrenset soning (ubibelsk) eller universalisme (ubibelsk). Bibelske
          forsoningsmodeller unngår dette problemet fullstendig — ved å holde fast ved et universelt tilbud og en reell
          menneskelig respons.
        </ImportantBox>

        <h2 id="art4">Skyld og straff kan ikke overføres som juridiske objekter</h2>

        <p>PSA hviler på påstanden om at skyld kan overføres fra én person til en annen. Men dette har ingen støtte i Bibelen, filosofi eller moralteologi.</p>

        <h3>Bibelen lærer klart: skyld kan ikke overføres</h3>

        <BibleBox>
          <em>«Den som synder, skal selv dø. En sønn skal ikke bære farens skyld, og en far skal ikke bære sønnens skyld.»</em>
          <br /> <strong>Esek 18,20</strong>
        </BibleBox>

        <BibleBox>
          <em>«Fedre skal ikke dø for barna, og barn skal ikke dø for fedrene. Enhver skal dø for sin egen synd.»</em>
          <br /> <strong>5 Mos 24,16</strong>
        </BibleBox>

        <p>
          Gud kaller det urettferdig å straffe én person for en annens handlinger. PSA er i direkte konflikt med Guds egne
          uttalte prinsipper.
        </p>

        <h3>Å straffe en uskyldig er alltid urettferdig</h3>

        <BibleBox>
          <em>«Å frikjenne den skyldige og å dømme den uskyldige — begge deler er en styggedom for Herren.»</em>
          <br /> <strong>Ordsp 17,15</strong>
        </BibleBox>

        <p>
          PSA gjør begge deler: dømmer den uskyldige (Kristus) og frikjenner den skyldige (oss). Men Gud sier dette er en
          styggedom. PSA karikerer Guds rettferdighet og benytter et prinsipp Gud selv kaller motbydelig.
        </p>

        <h3>Hva skjedde da Jesus «bar våre synder»?</h3>
        <p>
          Jesaja 53 bruker poetisk og prestelig — ikke juridisk — språk: representasjon, identifikasjon, bæring av
          lidelse, helbredelse og soning som restaurasjon. Jesus bar konsekvenser, ikke skyld.
        </p>
        <p>
          Johannes 1,29: «Se Guds lam som <em>tar bort</em> verdens synd» — verbet betyr «løfter vekk», ikke «mottar
          juridisk» eller «straffes for». Jesus er offeret, ikke forbryteren.
        </p>

        <ImportantBox title="Konklusjon — Artikkel 4">
          PSA forutsetter overførbar skyld, straff av uskyldige og en Gud som kun kan tilgi etter avstraffelse. Men
          Bibelen lærer det motsatte: skyld er personlig, Gud straffer ikke uskyldige, Jesus bar konsekvenser — ikke
          skyld, og korset er kjærlighetens handling — ikke retributiv hevn. PSA bryter logikk, moral, Bibelen og Guds
          karakter.
        </ImportantBox>

        <ImportantBox title="Les videre">
          For full gjennomgang av alle fire artikler, last ned PDF-dokumentet «Problemer med PSA».
        </ImportantBox>

        <p>
          For full gjennomgang, les eller last ned PDF-dokumentet: {" "}
          <a href="/pdf/problemer-med-psa.pdf" target="_blank" rel="noreferrer">
            problemer-med-psa.pdf
          </a>
        </p>
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
