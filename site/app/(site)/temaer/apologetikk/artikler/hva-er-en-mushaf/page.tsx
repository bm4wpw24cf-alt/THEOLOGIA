import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { BibleBox } from "@/components/articles/BibleBox";
import { ImportantBox } from "@/components/articles/ImportantBox";
import { getArticleBySlug } from "@/lib/articles";
import { GiscusComments } from "./GiscusComments";

const article = getArticleBySlug("hva-er-en-mushaf")!;

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
  { id: "kap1", label: "Språklig betydning av ordet mushaf" },
  { id: "kap2", label: "Forskjellen mellom Qur'an og mushaf" },
  { id: "kap3", label: "Koranen i profetens levetid" },
  { id: "kap4", label: "Behovet for en samlet mushaf etter profetens død" },
  { id: "kap5", label: "Zayd ibn Thābit og den første samlingen" },
  { id: "kap6", label: "Standardiseringen under kalif ʿUthmān" },
  { id: "kap7", label: "Teologisk betydning av mushaf'en" },
];

export default function HvaErEnMushafPage() {
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
        subtitle="Koranens samling, historie og betydning"
        meta="Av Eirik Storesletten"
        toc={TOC}
        intro={
          <p>
            Det arabiske ordet <em>mushaf</em> spiller en sentral rolle i islams forståelse av Koranens bevaring.
            Begrepet brukes ikke først og fremst om åpenbaringen i seg selv, men om den skrevne, samlede og innbundne
            teksten som inneholder Koranens ord. For å forstå hva en mushaf er, og hvorfor den fikk så stor betydning,
            må vi se både språklig, historisk og teologisk på hvordan Koranen ble overlevert, bevart og samlet.
          </p>
        }
      >
        <h2 id="kap1">Språklig betydning av ordet mushaf</h2>
        <p>Ordet <em>mushaf</em> kommer fra den arabiske roten <em>ṣ-ḥ-f</em> (ص ح ف), som betyr «blad», «side» eller «skrevet ark».</p>

        <BibleBox>
          <em>«En samling av blader samlet mellom to permer.»</em>
          <br /> <strong>Klassisk arabisk definisjon</strong>
        </BibleBox>

        <p>
          I klassisk arabisk kunne ordet brukes om enhver bok eller samling av tekster. Etter hvert fikk det imidlertid
          en spesialisert religiøs betydning og ble brukt nesten utelukkende om den fysiske, skrevne Koranen.
        </p>

        <h2 id="kap2">Forskjellen mellom Qur&apos;an og mushaf</h2>
        <p>I islamsk teologi skilles det tydelig mellom to begreper:</p>
        <ul>
          <li>
            <em>Qur&apos;an</em> (القرآن) — betyr «resitasjonen» og refererer til Guds åpenbarte ord slik de ble meddelt
            profeten Muhammad gjennom engelen Gabriel
          </li>
          <li>
            <em>Mushaf</em> (المصحف) — betegner den skrevne og samlede teksten, den materielle formen
          </li>
        </ul>
        <p>Man kan derfor si: Qur&apos;an er åpenbaringen i sitt innhold og budskap, mens mushaf er åpenbaringen i sin skrevne form.</p>

        <ImportantBox title="Viktig">
          Qur&apos;an er åpenbaringen i sitt innhold og budskap, mens mushaf er åpenbaringen i sin skrevne form.
        </ImportantBox>

        <h2 id="kap3">Koranen i profetens levetid</h2>
        <p>
          Koranen ble åpenbart over en periode på omtrent 23 år (610–632 e.Kr.). Under profeten Muhammads levetid var
          Koranen primært muntlig bevart gjennom resitasjon, lært utenat av mange følgesvenner (<em>ḥuffāẓ</em>), og
          delvis skrevet ned på ulike materialer:
        </p>
        <ul>
          <li>Palmeribber</li>
          <li>Skinn og lær</li>
          <li>Beinfragmenter</li>
          <li>Flate steiner</li>
        </ul>
        <p>
          Profeten hadde egne skrivere, kjent som <em>kuttāb al-waḥy</em> (åpenbaringsskriverne). Blant de mest kjente
          var Zayd ibn Thābit, Ubayy ibn Kaʿb og ʿAlī ibn Abī Ṭālib.
        </p>
        <p>
          Det fantes imidlertid ingen fullstendig samlet bok i profetens levetid &mdash; åpenbaringen pågikk fortsatt, og
          enkelte vers fikk sin endelige plassering senere.
        </p>

        <h2 id="kap4">Behovet for en samlet mushaf etter profetens d&oslash;d</h2>
        <p>
          Etter profetens d&oslash;d i 632 e.Kr. oppsto en ny og alvorlig situasjon. Under Slaget ved Yamāma ble mange av de
          fremste Koran-memorisererne drept. Dette vekket stor bekymring hos kalifen Abū Bakr as-Siddīq og hans
          rådgivere, særlig ʿUmar ibn al-Khaṭṭāb.
        </p>
        <p>
          Frykten var at dersom de som bar Koranen i minnet døde, kunne deler av teksten gå tapt. Løsningen ble å
          samle hele Koranen i én autoritativ skriftlig samling, og forene muntlig og skriftlig tradisjon i én tekst.
          Dette markerer begynnelsen på det som kalles den første mushaf.
        </p>

        <h2 id="kap5">Zayd ibn Thābit og den første samlingen</h2>
        <p>Oppgaven med å samle Koranen ble gitt til Zayd ibn Thābit, som både var profetens skriver og kjent for sin nøyaktighet og integritet.</p>
        <ul>
          <li>Ingen vers ble inkludert uten at det fantes skriftlig dokumentasjon</li>
          <li>Versene måtte også være bekreftet av personer som hadde lært dem utenat</li>
          <li>Alt ble sammenlignet med profetens kjente resitasjon</li>
        </ul>
        <p>
          Resultatet ble en fullstendig samling av Koranen i én bok. Denne mushaf ble oppbevart hos Abū Bakr,
          deretter hos ʿUmar, og senere hos Ḥafṣa — profetens kone.
        </p>

        <h2 id="kap6">Standardiseringen under kalif ʿUthmān</h2>
        <p>
          Etter hvert som islam spredte seg til nye områder, oppsto utfordringer knyttet til dialektforskjeller og
          varierende resitasjonsmåter. For å bevare enhet besluttet den tredje kalifen, ʿUthmān ibn ʿAffān, å
          standardisere teksten:
        </p>
        <ul>
          <li>Å bruke mushaf&apos;en hos Ḥafṣa som grunntekst</li>
          <li>Å fastsette teksten etter Quraysh-dialekten</li>
          <li>Å lage flere offisielle kopier</li>
          <li>Å sende disse til de viktigste islamske sentrene</li>
        </ul>
        <p>
          Alle avvikende private kopier som kunne skape forvirring, ble fjernet. Denne teksten er kjent som
          <em>Mushaf ʿUthmānī</em>, og den danner grunnlaget for alle Koran-utgaver i dag.
        </p>

        <h2 id="kap7">Teologisk betydning av mushaf&apos;en</h2>
        <p>
          I islamsk tro er mushaf&apos;en ikke bare en historisk tekst, men et tegn på Guds vern av sitt ord, Koranens
          uforanderlighet og fellesskapets ansvar for å bevare åpenbaringen. Det understrekes at det som er skrevet i
          mushaf&apos;en i dag, er identisk med det som ble åpenbart til profeten Muhammad.
        </p>

        <ImportantBox title="Avslutning">
          Begrepet mushaf uttrykker mer enn bare «en bok». Det representerer overgangen fra muntlig åpenbaring til
          skriftlig bevaring, og vitner om en bevisst, kollektiv innsats for å sikre at Koranens tekst forble intakt.
        </ImportantBox>

        <p>
          For full gjennomgang, les eller last ned PDF-dokumentet: {" "}
          <a href="/pdf/hva-er-en-mushaf.pdf" target="_blank" rel="noreferrer">
            hva-er-en-mushaf.pdf
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
