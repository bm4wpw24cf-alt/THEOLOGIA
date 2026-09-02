import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { BibleBox } from "@/components/articles/BibleBox";
import { getArticleBySlug } from "@/lib/articles";
import { Comments } from "@/components/comments/Comments";

const article = getArticleBySlug("koranen-teksthistorie")!;

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
  { id: "kap1", label: "Det finnes mange arabiske koraner" },
  { id: "kap2", label: "Nettbutikker som selger forskjellige mushaf" },
  { id: "kap3", label: "Det arabiske skriftsystemet" },
  { id: "kap4", label: "Diakritiske tegn" },
  { id: "kap5", label: "Arabisk og det latinske alfabetet" },
  { id: "kap6", label: "De tidligste koranmanuskriptene" },
  { id: "kap7", label: "Den muntlige tradisjonens betydning" },
  { id: "kap8", label: "Qirāʾāt og riwāyāt" },
  { id: "kap9", label: "Påvirker mangelen på tegn Koranens bevaring?" },
  { id: "kap10", label: "Konklusjon" },
];

export default function KoranenTeksthistoriePage() {
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
        subtitle="Arabisk skrift, qirāʾāt og spørsmålet om bevaring — en balansert vurdering"
        meta="Av Eirik Storesletten"
        toc={TOC}
        intro={
          <p>
            Koranens teksthistorie er et område der det finnes både tydelige historiske fakta og flere ulike tolkninger
            av disse faktaene. Hensikten med denne gjennomgangen er ikke å gjøre et enkelt «bevis» på det ene eller det
            andre synspunktet, men å vise hvordan tekstens språklige, skriftlige og muntlige overlevering har vært
            påvirket av flere faktorer — og hvorfor det er viktig å skille mellom hva som faktisk kan dokumenteres, og
            hva som er en teologisk eller historisk tolkning av disse dokumentene.
          </p>
        }
      >
        <h2 id="kap1">Det finnes mange forskjellige arabiske koraner</h2>
        <p>
          Det hevdes ofte at «det finnes bare én arabisk Koran». Dette stemmer bare dersom man mener én dominerende
          utgave (Ḥafṣ ʿan ʿĀṣim). I praksis finnes det en rekke trykte arabiske mushaf som representerer forskjellige
          <em> qirāʾāt</em> (kanoniske lesetradisjoner) og <em>riwāyāt</em> (overleveringer).
        </p>
        <p>Det interessante er at disse ikke bare omtales i akademiske bøker — de selges fritt i nettbutikker verden over.</p>

        <h3>Eksempler på forskjellige arabiske mushaf som kan kjøpes</h3>
        <ul className="list-disc space-y-2 pl-6 text-[0.97rem] leading-relaxed text-[#333]">
          <li>Ḥafṣ ʿan ʿĀṣim (den vanligste utgaven i dag)</li>
          <li>Warsh ʿan Nāfiʿ (vanlig i Nord-Afrika)</li>
          <li>Qālūn ʿan Nāfiʿ</li>
          <li>Shuʿbah ʿan ʿĀṣim</li>
          <li>Ibn Kathīr</li>
          <li>Abū ʿAmr al-Baṣrī</li>
          <li>Ibn ʿĀmir</li>
          <li>Ḥamzah al-Kūfī</li>
          <li>al-Kisāʾī</li>
          <li>Khalaf al-ʿĀshir</li>
          <li>Mushaf med alle ti qirāʾāt</li>
          <li>Mushaf etter Ṭayyibat an-Nashr</li>
          <li>Shādh-qirāʾāt (ikke-kanoniske lesetradisjoner)</li>
        </ul>

        <p>
          Poenget er ikke å argumentere for eller imot islam, men å påpeke et enkelt faktum: Dersom det bare eksisterte
          én arabisk Koran, ville det ikke eksistert et internasjonalt marked for en rekke forskjellige arabiske mushaf
          basert på ulike kanoniske lesetradisjoner.
        </p>

        <h2 id="kap2">Nettbutikker som selger forskjellige mushaf</h2>
        <p>Følgende spesialiserte nettbutikker tilbyr i dag et bredt utvalg av arabiske mushaf basert på ulike qirāʾāt:</p>

        <div className="mb-6 grid gap-[1px] bg-[#e2e2e2] md:grid-cols-2">
          <div className="bg-white p-5">
            <h4 className="mb-2 font-serif text-[1.05rem] text-[#1a1a1a]">Qira&apos;at Books</h4>
            <ul className="space-y-1 text-[0.85rem] text-[#6b6b6b]">
              <li>Over 30 forskjellige mushaf</li>
              <li>Alle ti kanoniske qirāʾāt</li>
              <li>Shādh-lesetradisjoner</li>
              <li>Faglitteratur om qirāʾāt</li>
            </ul>
          </div>
          <div className="bg-white p-5">
            <h4 className="mb-2 font-serif text-[1.05rem] text-[#1a1a1a]">Sifatu Safwa</h4>
            <ul className="space-y-1 text-[0.85rem] text-[#6b6b6b]">
              <li>Mushaf med de ti qirāʾāt</li>
              <li>Litteratur om qirāʾāt</li>
              <li>Klassiske verk om koranlesning</li>
            </ul>
          </div>
          <div className="bg-white p-5">
            <h4 className="mb-2 font-serif text-[1.05rem] text-[#1a1a1a]">Al Badr UK</h4>
            <ul className="space-y-1 text-[0.85rem] text-[#6b6b6b]">
              <li>Ibn Kathīr – Qunbul</li>
              <li>al-Kisāʾī</li>
              <li>Andre mindre vanlige riwāyāt</li>
            </ul>
          </div>
          <div className="bg-white p-5">
            <h4 className="mb-2 font-serif text-[1.05rem] text-[#1a1a1a]">Islamic Bookstore / Darussalam</h4>
            <ul className="space-y-1 text-[0.85rem] text-[#6b6b6b]">
              <li>Mushaf med alle ti qirāʾāt</li>
              <li>Tajwīd-utgaver</li>
              <li>Store studieutgaver</li>
            </ul>
          </div>
        </div>

        <p>
          Den arabiske korantradisjonen i trykt form er dermed mer mangfoldig enn mange er klar over. Det betyr ikke
          nødvendigvis at innholdet er fullstendig forskjellig, men det viser at det eksisterer reelle variasjoner som
          er verdt å kjenne til.
        </p>

        <BibleBox>
          <em>«Dersom det bare eksisterte én arabisk Koran, ville det ikke eksistert et internasjonalt marked for en rekke forskjellige arabiske mushaf.»</em>
          <br /> <strong>Koranens teksthistorie — en balansert vurdering</strong>
        </BibleBox>

        <h2 id="kap3">Det arabiske skriftsystemet</h2>
        <p>
          Arabisk er et semittisk språk med et skriftsystem som skiller seg betydelig fra det latinske alfabetet. Det
          består av 28 grunnbokstaver og skrives fra høyre mot venstre. Det beskrives ofte som en <em>abjad</em>, fordi
          de fleste konsonanter skrives, mens korte vokaler normalt utelates i vanlig tekst.
        </p>

        <div className="my-6 border border-[#e2e2e2] bg-white p-6 text-center">
          <div className="mb-3 font-serif text-[2.5rem] tracking-[0.1em] text-[#1a1a1a]" dir="rtl">
            كتب
          </div>
          <p className="mb-3 text-[0.82rem] text-[#6b6b6b]">Samme konsonantskjelett — fire mulige lesninger:</p>
          <div className="flex flex-wrap justify-center gap-6 text-[0.88rem] text-[#6b6b6b]">
            <span className="italic">kataba (han skrev)</span>
            <span className="italic">kutiba (det ble skrevet)</span>
            <span className="italic">kutub (bøker)</span>
            <span className="italic">kātib (skriver)</span>
          </div>
        </div>

        <p>
          Leseren må kjenne språket eller få hjelp av konteksten for å vite hvilken lesning som er riktig. Dette er et
          grunnleggende trekk ved arabisk skrift som har direkte betydning for Koranens teksthistorie.
        </p>

        <h2 id="kap4">Diakritiske tegn</h2>
        <p>Arabisk har diakritiske tegn (<em>ḥarakāt</em>) som markerer korte vokaler:</p>
        <ul className="list-disc space-y-2 pl-6 text-[0.97rem] leading-relaxed text-[#333]">
          <li>Fatha (َ) = a-lyd</li>
          <li>Kasra (ِ) = i-lyd</li>
          <li>Damma (ُ) = u-lyd</li>
          <li>Sukun (ْ) = ingen vokal</li>
          <li>Shadda (ّ) = dobbel konsonant</li>
        </ul>
        <p>
          I moderne bøker brukes disse hovedsakelig i Koranen, i lærebøker og barnebøker, samt når presis uttale er
          nødvendig. Vanlige aviser og bøker skrives som regel uten dem.
        </p>

        <h2 id="kap5">Arabisk og det latinske alfabetet</h2>
        <p>
          Arabisk og norsk/engelsk har ulike lydsystemer. Noen arabiske lyder finnes ikke på norsk — for eksempel ع
          (ʿayn), غ (ghayn), ح (ḥāʾ) og ق (qāf). Standardarabisk mangler på sin side egne bokstaver for p og v.
        </p>
        <p>
          Det finnes heller ingen universell måte å skrive arabiske ord med latinske bokstaver. Eksempel: محمد kan
          skrives Muhammad, Mohammed, Mohamed eller Muhammed — alle representerer samme arabiske navn. Forskjellen
          skyldes ulike translitterasjonssystemer og ulike språk.
        </p>

        <h2 id="kap6">De tidligste koranmanuskriptene</h2>
        <p>
          Et historisk faktum er at de eldste bevarte koranmanuskriptene ikke hadde dagens fullstendige system med
          vokaltegn og diakritiske prikker. Den tidlige arabiske skriften var enklere, og flere bokstaver kunne se
          identiske ut.
        </p>
        <p>Dette er godt dokumentert gjennom manuskripter fra:</p>
        <ul className="list-disc space-y-2 pl-6 text-[0.97rem] leading-relaxed text-[#333]">
          <li>Ṣanʿāʾ (Jemen) — blant de eldste kjente koranfragmentene</li>
          <li>Topkapı-palasset (Istanbul)</li>
          <li>Samarkand-manuskriptet</li>
          <li>Parisino-petropolitanus-manuskriptet</li>
        </ul>
        <p>
          Senere ble prikker og vokaltegn gradvis innført for å gjøre teksten lettere å lese. Dette er bredt akseptert
          blant både muslimske og ikke-muslimske forskere.
        </p>

        <h2 id="kap7">Den muntlige tradisjonens betydning</h2>
        <p>
          Selv om de tidligste manuskriptene manglet mange diakritiske tegn, betyr ikke dette nødvendigvis at teksten
          var ukjent. Den islamske tradisjonen legger stor vekt på muntlig overlevering. Koranen ble resitert og
          memorert av mange mennesker lenge før dagens skriftsystem var fullt utviklet.
        </p>
        <p>
          Historikere anerkjenner generelt at muntlig overlevering spilte en viktig rolle, selv om de vurderer
          omfanget og betydningen ulikt.
        </p>

        <h2 id="kap8">Qirāʾāt og riwāyāt</h2>
        <p>
          Et viktig aspekt ved Koranens teksthistorie er de kanoniske lesetradisjonene (<em>qirāʾāt</em>). Tradisjonelt
          anerkjennes ti qirāʾāt og tjue riwāyāt. Disse representerer forskjellige autoriserte måter å lese den samme
          konsonantteksten på.
        </p>
        <p>
          Forskjellene gjelder blant annet uttale, vokalisering, grammatikk og enkelte ordformer. De fleste
          forskjellene påvirker ikke hovedinnholdet, men noen påvirker nyanser i betydning. Dette er et viktig
          forskningsområde innen koranstudier.
        </p>

        <h2 id="kap9">Påvirker mangelen på diakritiske tegn Koranens bevaring?</h2>
        <p>Dette er et av de mest omdiskuterte spørsmålene innen koranforskning. Det finnes tre hovedsyn:</p>

        <div className="mb-6 space-y-[1px] bg-[#e2e2e2]">
          <div className="grid gap-4 bg-white p-5 md:grid-cols-[auto_1fr] md:items-start">
            <span className="pt-1 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[#b08d57]">Syn 1</span>
            <div>
              <h4 className="mb-1 font-serif text-[1rem] font-normal text-[#1a1a1a]">Tradisjonelt islamsk syn</h4>
              <p className="text-[0.88rem] leading-relaxed text-[#6b6b6b]">
                Koranen ble bevart gjennom både skrift og en sterk muntlig tradisjon. De senere diakritiske tegnene
                gjorde bare teksten lettere å lese — de tilførte ingen ny informasjon.
              </p>
            </div>
          </div>
          <div className="grid gap-4 bg-white p-5 md:grid-cols-[auto_1fr] md:items-start">
            <span className="pt-1 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[#b08d57]">Syn 2</span>
            <div>
              <h4 className="mb-1 font-serif text-[1rem] font-normal text-[#1a1a1a]">Mange moderne historikere</h4>
              <p className="text-[0.88rem] leading-relaxed text-[#6b6b6b]">
                Den muntlige tradisjonen var avgjørende, men utviklingen av skriften viser også at teksten gjennomgikk
                en standardiseringsprosess over tid.
              </p>
            </div>
          </div>
          <div className="grid gap-4 bg-white p-5 md:grid-cols-[auto_1fr] md:items-start">
            <span className="pt-1 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[#b08d57]">Syn 3</span>
            <div>
              <h4 className="mb-1 font-serif text-[1rem] font-normal text-[#1a1a1a]">Enkelte kritiske forskere</h4>
              <p className="text-[0.88rem] leading-relaxed text-[#6b6b6b]">
                Fraværet av tidlige vokaltegn og diakritiske prikker kan ha åpnet for flere mulige lesninger før
                teksten ble standardisert — noe som reiser spørsmål om bevaringsprosessen.
              </p>
            </div>
          </div>
        </div>

        <h2 id="kap10">Konklusjon</h2>
        <p>Det er bred enighet om flere grunnleggende historiske forhold:</p>
        <ul className="list-disc space-y-2 pl-6 text-[0.97rem] leading-relaxed text-[#333]">
          <li>Arabisk er en abjad med 28 bokstaver der korte vokaler normalt ikke skrives</li>
          <li>De eldste koranmanuskriptene manglet mange av dagens diakritiske tegn</li>
          <li>Dagens korantekst bruker et langt mer utviklet vokaliseringssystem enn de tidligste manuskriptene</li>
          <li>Koranen eksisterer i flere kanoniske lesetradisjoner (qirāʾāt) og overleveringer (riwāyāt)</li>
        </ul>

        <div className="mt-8 rounded-none border border-[#e2e2e2] bg-white p-6">
          <div className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-[#b08d57]">
            Avsluttende vurdering
          </div>
          <p className="mb-3 text-[0.97rem] leading-relaxed text-[#333]">
            Der uenigheten oppstår er ikke i de historiske observasjonene, men i hvordan de skal tolkes. Noen ser
            utviklingen av skriften som en naturlig språklig standardisering som ikke utfordrer Koranens bevaring.
            Andre mener den reiser spørsmål om hvordan den tidlige teksten ble lest og overført.
          </p>
          <p className="text-[0.97rem] leading-relaxed text-[#333]">
            En balansert tilnærming er å skille mellom det som kan dokumenteres historisk og de ulike tolkningene av
            hva disse historiske fakta innebærer. Dette gir et mer presist og rettferdig grunnlag for både akademisk
            forskning og teologisk samtale.
          </p>
        </div>
      </ArticleLayout>

      <section id="kommentarer" className="py-[120px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="mb-11 text-left">
            <h2 className="mb-4 text-[2.6rem]">Kommentarer</h2>
            <p className="text-[1.08rem] text-text-light">Del dine tanker eller spørsmål.</p>
          </div>

          <Comments />
        </div>
      </section>
    </main>
  );
}
