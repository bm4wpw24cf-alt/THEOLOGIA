import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { BibleBox } from "@/components/articles/BibleBox";
import { ImportantBox } from "@/components/articles/ImportantBox";
import { getArticleBySlug } from "@/lib/articles";
import { Comments } from "@/components/comments/Comments";

const article = getArticleBySlug("muslimske-innvendinger")!;

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
  { id: "kap1", label: "Koranens syn på tidligere skrifter" },
  { id: "kap2", label: "Tahrif — anklagen om forfalskning" },
  { id: "kap3", label: "Hva versene faktisk sier" },
  { id: "kap4", label: "Anklagen om å skjule skriftene" },
  { id: "kap5", label: "Svar på innvendingene" },
];

export default function MuslimskeInnvendingerPage() {
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
        category="TEMAER · APOLOGETIKK · ISLAM"
        title={article.title}
        subtitle="Koranens syn på Bibelen, tahrif-anklagen og hvordan vi kan svare"
        meta="Av Eirik Storesletten"
        toc={TOC}
        intro={
          <p>
            Denne artikkelen går inn i de mest sentrale muslimske innvendingene mot Bibelen og kristen teologi —
            særlig anklagen om at Guds tidligere skrifter skulle være forfalsket, og at Koranen derfor skulle være
            den eneste autentiske åpenbaringen. Formålet er ikke å gi et overfladisk svar, men å undersøke hva
            Koranen faktisk sier, hvordan dette forholder seg til historisk dokumentasjon, og hva som følger av
            det for vurderingen av Bibelens og Koranens respektive krav om autoritet.
          </p>
        }
      >
        <h2 id="kap1">Koranens syn på tidligere skrifter</h2>
        <p>Koranen omtaler tre hellige skrifter som ble åpenbart før Koranen selv:</p>
        <ul>
          <li>
            <em>Tawrat</em> (Tora) — åpenbart for Moses (f.eks. 3:93)
          </li>
          <li>
            <em>Zabur</em> (Salmene) — åpenbart for David (f.eks. 4:163; 17:55; 21:105)
          </li>
          <li>
            <em>Injil</em> (evangeliet) — åpenbart for Jesus (f.eks. 5:46)
          </li>
        </ul>
        <p>
          Jøder og kristne kalles «bokens folk» eller «skriftens folk» (f.eks. 2:105; 3:64), og muslimer får
          beskjed om at de må tro på de tidligere skriftene i tillegg til Koranen:
        </p>

        <BibleBox>
          <em>
            «O dere som tror! Tro på Allah og Hans budbringer og Skriften som Han har åpenbart for sin budbringer,
            og Skriften som Han åpenbarte tidligere. Den som fornekter Allah og Hans engler og Hans skrifter og
            Hans budbringere og den siste dag, han har i sannhet vandret langt bort.»
          </em>
          <br /> <strong>Koranen 4:136</strong>
        </BibleBox>

        <p>
          Muslimer er altså ifølge Koranen forpliktet til å tro på de tidligere skriftene — inkludert Bibelen.
          Koranen bekrefter sannheten om dem:
        </p>

        <BibleBox>
          <em>
            «Når det gjelder det Vi inspirerer deg av Skriften, er det Sannheten som bekrefter det som var
            åpenbart før det.»
          </em>
          <br /> <strong>Koranen 35:31</strong>
        </BibleBox>

        <h2 id="kap2">Tahrif — anklagen om forfalskning</h2>
        <p>
          Det er imidlertid fire vers i Koranen som omtaler «korrupsjon» eller «forfalskning» (<em>tahrif</em>) av
          disse tidligere skriftene, og bruker ordet «endre». Disse versene er grunnlaget for den muslimske
          påstanden om at Bibelen har blitt korrumpert.
        </p>

        <BibleBox>
          <em>
            «... en gruppe av dem pleide å lytte til Allahs ord, deretter pleide de å endre det, etter at de hadde
            forstått det, med vitende.»
          </em>
          <br /> <strong>Koranen 2:75</strong>
        </BibleBox>

        <BibleBox>
          <em>
            «Noen av dem som er jøder endrer ordene fra deres kontekst, forvrenger med tungene sine og baktaler
            religion.»
          </em>
          <br /> <strong>Koranen 4:46</strong>
        </BibleBox>

        <BibleBox>
          <em>«De endrer ord fra deres kontekst og glemmer en del av det de ble påminnet om.»</em>
          <br /> <strong>Koranen 5:13</strong>
        </BibleBox>

        <BibleBox>
          <em>
            «Jødene: lyttere for løgnens skyld, lyttere på vegne av andre folk som ikke kommer til deg, endrer
            ord fra deres kontekst...»
          </em>
          <br /> <strong>Koranen 5:41</strong>
        </BibleBox>

        <ImportantBox title="Viktig">
          Ingen av disse versene antyder at teksten i Bibelen har blitt korrumpert.
        </ImportantBox>

        <h2 id="kap3">Hva versene faktisk sier</h2>
        <p>
          En nøye lesning av disse fire versene avslører at de ikke hevder at den skriftlige teksten i Bibelen har
          blitt endret. Det er viktig å skille mellom de ulike anklagene:
        </p>

        <h3>Feiluttale av ord</h3>
        <p>
          En av anklagene synes å være at visse jøder bevisst feiluttalte ord uttalt av Muhammed, sannsynligvis ved
          å spille på likheten mellom visse arabiske og hebraiske ord (se 3:78). Dette gjelder muntlig
          kommunikasjon i samspill med profeten — ikke den skriftlige teksten i Bibelen.
        </p>

        <h3>Å ta ord ut av kontekst</h3>
        <p>
          De er også anklaget for å ta ord i sine egne skrifter ut av kontekst og endre betydningen av ord. Dette
          er en anklage om feiltolkning og misbruk av teksten — ikke om at selve teksten er endret.
        </p>

        <p>
          Det er altså en avgjørende forskjell mellom å hevde at folk <em>misbruker</em> eller <em>mistolker</em>
          en tekst, og å hevde at selve teksten er blitt fysisk forandret. Koranen gjør det første, ikke det
          siste.
        </p>

        <h2 id="kap4">Anklagen om å skjule skriftene</h2>
        <p>
          I andre vers blir jødene anklaget for å «skjule» eller «hemmeligholde» deler av sine skrifter — igjen en
          anklage om atferd, ikke om tekstlig korrupsjon:
        </p>

        <BibleBox>
          <em>«En gruppe av dem hemmeligholder bevisst sannheten.»</em>
          <br /> <strong>Koranen 2:146</strong>
        </BibleBox>

        <BibleBox>
          <em>
            «O dere skriftens folk! Nå er Vår budbringer kommet til dere, og forklarer dere mye av det dere pleide
            å skjule i Skriften.»
          </em>
          <br /> <strong>Koranen 5:15</strong>
        </BibleBox>

        <p>
          Legg merke til at versene forutsetter at skriften <em>finnes</em> og kan skjules — de sier ikke at den er
          blitt ødelagt eller omskrevet. Å skjule noe er vesensforskjellig fra å ødelegge eller forfalske det.
        </p>

        <h2 id="kap5">Svar på innvendingene</h2>

        <h3>Koranen bekrefter Bibelen</h3>
        <p>
          Det er et fundamentalt problem i den muslimske tahrif-læren: Hvis Koranen bekrefter sannheten i de
          tidligere skriftene (35:31; 2:97), og samtidig pålegger muslimer å tro på dem (4:136), kan ikke de samme
          skriftene være korrumperte. Koranen ville da bekrefte korrupte skrifter — noe som er inkonsistent.
        </p>

        <h3>Tekstkritisk evidens</h3>
        <p>
          De eldste manuskriptene til Det gamle testamente (Dødehavsrullene, ca. 150 f.Kr.) og Det nye testamente
          (papyri fra 100-tallet e.Kr.) stemmer i all vesentlighet overens med de bibelske tekstene vi har i dag. Det
          finnes ingen historisk evidens for en systematisk korrumpering av Bibelens tekst.
        </p>

        <h3>Når skulle forfalskningen ha skjedd?</h3>
        <p>
          For at Bibelen skal ha blitt korrumpert, må man forklare: Når skjedde det? Hvem gjorde det? Og hvordan ble
          tusenvis av manuskripter spredt over hele verden alle endret på samme måte — uten at noen la merke til
          det? Disse spørsmålene forblir ubesvarte i den muslimske tradisjonen.
        </p>

        <ImportantBox title="Konklusjon">
          Koranens egne vers om tahrif hevder ikke at Bibelens tekst er blitt fysisk forandret. De beskriver muntlig
          feiltolkning, misbruk av kontekst og bevisst skjuling — ikke tekstlig korrupsjon. Koranen bekrefter
          tvert imot sannheten i de tidligere skriftene og pålegger muslimer å tro på dem.
        </ImportantBox>

        <p>
          For full gjennomgang, les eller last ned PDF-dokumentet: {" "}
          <a href="/pdf/muslimske-innvendinger.pdf" target="_blank" rel="noreferrer">
            muslimske-innvendinger.pdf
          </a>
        </p>
      </ArticleLayout>

      <section id="kommentarer" className="bg-parchment-dark py-[120px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="mb-11 text-left">
            <h2 className="mb-4 text-[2.6rem]">Kommentarer</h2>
            <p className="text-[1.08rem] text-text-light">
              Del dine tanker eller spørsmål.
            </p>
          </div>

          <Comments />
        </div>
      </section>
    </main>
  );
}
