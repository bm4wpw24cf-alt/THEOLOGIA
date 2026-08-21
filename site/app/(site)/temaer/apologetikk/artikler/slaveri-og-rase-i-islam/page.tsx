import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { BibleBox } from "@/components/articles/BibleBox";
import { ImportantBox } from "@/components/articles/ImportantBox";
import { getArticleBySlug } from "@/lib/articles";
import { GiscusComments } from "./GiscusComments";

const article = getArticleBySlug("slaveri-og-rase-i-islam")!;

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
  { id: "kap1", label: "Innledning" },
  { id: "kap2", label: "Slaveri i hadith og islamsk lov" },
  { id: "kap3", label: "Rasemessige utsagn i primærkildene" },
  { id: "kap4", label: "Koranens antropologi og menneskeverd" },
  { id: "kap5", label: "Bibelsk menneskeverd som kontrast" },
  { id: "kap6", label: "Konklusjon og apologetiske refleksjoner" },
];

export default function SlaveriOgRaseIIslamPage() {
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
        subtitle="En kritisk gjennomgang av primærkilder fra hadith og Koranen i lys av bibelsk menneskeverd"
        meta="Av Eirik Storesletten"
        toc={TOC}
        intro={
          <p>
            En seriøs apologetikk må være villig til å stille vanskelige spørsmål ved andre religioners primærkilder —
            ikke for å spre hat mot troende mennesker, men for å belyse teologiske og etiske problemer som disse
            tekstene reiser.
          </p>
        }
      >
        <h2 id="kap1">Innledning</h2>
        <p>
          Denne artikkelen undersøker hva islamske primærkilder — Koranen og hadith-samlingene Sahih al-Bukhari og
          Sahih Muslim — faktisk sier om slaveri og rase. Alle sitater er hentet direkte fra anerkjente oversettelser
          og er tilgjengelige via sunnah.com og quran.com. Leseren oppfordres til å lese kildene selv.
        </p>
        <p>
          Målet er ikke å angripe muslimer som personer, men å stille kritiske teologiske spørsmål: Er disse tekstene
          forenlige med et universelt menneskeverd? Og hva sier de sammenlignet med Bibelens antropologi?
        </p>

        <h2 id="kap2">Slaveri i hadith og islamsk lov</h2>
        <p>
          Slaveri er et faktum i islamsk primærtradisjon. Muhammed kjøpte, solgte og eide slaver — dette er ikke en
          kristen påstand, men bekreftet i Sahih al-Bukhari og Sahih Muslim, de to mest autoritative hadith-samlingene
          i sunni-islam.
        </p>

        <h3>Muhammed kjøpte og solgte slaver</h3>

        <BibleBox>
          <em>
            Jabir ibn Abdullah fortalte at han solgte en kamel til profeten, og at profeten ba Bilal veie opp
            betalingen og gi ham litt ekstra. Jabir solgte også en slave til profeten under samme reise.
          </em>
          <br /> <strong><a href="https://sunnah.com/bukhari:2534" target="_blank" rel="noreferrer">Sahih al-Bukhari 2534</a></strong>
        </BibleBox>

        <BibleBox>
          <em>Anas ibn Malik fortalte at profeten kjøpte Safiyya for syv hoder (slaver).</em>
          <br /> <strong><a href="https://sunnah.com/bukhari:2141" target="_blank" rel="noreferrer">Sahih al-Bukhari 2141</a></strong>
        </BibleBox>

        <BibleBox>
          <em>Profeten eide slaven Anjasha, som hadde en vakker stemme og ledet kamelene.</em>
          <br /> <strong><a href="https://sunnah.com/bukhari:6161" target="_blank" rel="noreferrer">Sahih al-Bukhari 6161</a></strong>
        </BibleBox>

        <h3>Slaveri som institusjon i islamsk lov</h3>
        <p>
          Islamsk juridisk tradisjon (fiqh) regulerte slaveri inngående — men avskaffet det aldri prinsipielt. Sahih
          Muslim 3901 omtaler kjøp og salg av slaver som en regulær transaksjon uten moralsk fordømmelse.
        </p>

        <BibleBox>
          <em>
            Abdullah ibn Umar fortalte at Umar ibn al-Khattab ønsket å skrive et testamente om hvem som skulle
            etterfølge ham. Det ble fortalt ham: «Skal du ikke utpeke din slave?» Han sa: «Guds slave og Hans
            budbringers slave er nok for oss.»
          </em>
          <br /> <strong><a href="https://sunnah.com/muslim:3901" target="_blank" rel="noreferrer">Sahih Muslim 3901</a></strong>
        </BibleBox>

        <p>
          Det teologisk sentrale spørsmålet er ikke bare at slaveri fantes — det fantes i alle antikke kulturer — men at
          islamsk lov aldri utviklet et prinsipielt forbud mot slaveri basert på menneskeverd. Slaveri ble avskaffet i
          muslimske land under vestlig kolonialt press på 1800- og 1900-tallet, ikke som et resultat av islamsk
          teologisk utvikling.
        </p>

        <ImportantBox title="Viktig">
          Det er ikke nok å si at slaveri var vanlig i gammel tid. Spørsmålet er om islam utviklet en prinsipiell
          avvisning av slaveri som institusjon. Det gjorde den ikke.
        </ImportantBox>

        <h2 id="kap3">Rasemessige utsagn i primærkildene</h2>
        <p>
          Utover slaveri finnes det i hadith-litteraturen utsagn som knytter hudfarge til negative egenskaper eller
          eskatologisk skjebne. Dette er tekstlig dokumentert og bør undersøkes åpent.
        </p>

        <h3>Utsagn om svarte kvinner og sykdom</h3>

        <BibleBox>
          <em>
            Aisha fortalte: «Jeg så i en drøm at en svart kvinne med uflidd hår kom til meg. Jeg sa: &apos;Hva er dette?&apos; Det
            ble sagt til meg: &apos;Dette er epidemien (sykdommen) som vil komme til Medina.&apos;»
          </em>
          <br /> <strong><a href="https://sunnah.com/bukhari:7039" target="_blank" rel="noreferrer">Sahih al-Bukhari 7039</a></strong>
        </BibleBox>

        <p>
          Dette er en drøm-fortelling som bruker en svart kvinne som symbol på epidemi og ulykke. Tekstens symbolbruk er
          ikke tilfeldig — den gjenspeiler kulturelle assosiasjoner mellom svart hudfarge og ondt varsel i deler av den
          arabiske tradisjonen.
        </p>

        <h3>Eskatologiske utsagn om ansiktsfarge</h3>

        <BibleBox>
          <em>
            «På den dagen vil noen ansikter bli hvite og noen ansikter bli svarte. De hvis ansikter er blitt svarte —
            [det vil bli sagt til dem]: &apos;Fornektet dere etter at dere trodde? Smak da straffen for det dere fornektet.&apos;»
          </em>
          <br /> <strong><a href="https://quran.com/3/106" target="_blank" rel="noreferrer">Koranen 3:106</a></strong>
        </BibleBox>

        <p>
          Muslimske kommentatorer tolker «hvitt ansikt» og «svart ansikt» som metaforer for henholdsvis glede og skam på
          dommens dag. Det er en rimelig tolkning — men det er likevel verdt å merke seg at Koranen konsekvent bruker
          hvithet som symbol på godhet og svartet som symbol på skam og fortapelse (se også 39:60; 80:38–42).
        </p>

        <h3>Utsagn om etiopiere</h3>

        <BibleBox>
          <em>
            Anas ibn Malik fortalte at profeten sa: «Hør og adlyd, selv om en etiopier med hode som en rosin ble satt over
            dere.»
          </em>
          <br /> <strong><a href="https://sunnah.com/bukhari:693" target="_blank" rel="noreferrer">Sahih al-Bukhari 693</a></strong>
        </BibleBox>

        <p>
          Hadith-en brukes ofte for å vise at islam er fargeblind — selv en etiopier skal adlydes som leder. Men selve
          formuleringen «hode som en rosin» er en nedsettende fysisk karakteristikk av afrikanere som gjenspeiler
          datidens arabiske fordommer, og som ikke hadde vært nødvendig å inkludere.
        </p>

        <h3>Skapelsesfortelling og hudfarge</h3>

        <BibleBox>
          <em>
            Abu Huraira fortalte at profeten sa: «Allah skapte Adam og strøk hans høyre skulder og frembrakte hans
            etterkommere hvite som små maur til paradis. Og Han strøk hans venstre skulder og frembrakte hans
            etterkommere svarte til helvetesilden.»
          </em>
          <br /> <strong><a href="https://sunnah.com/tirmidhi:3075" target="_blank" rel="noreferrer">Jami at-Tirmidhi 3075</a></strong>
        </BibleBox>

        <p>
          Dette er teologisk svært problematisk: hudfarge knyttes direkte til eskatologisk skjebne allerede ved
          skapelsen. Muslimske lærde diskuterer autentisiteten av denne hadith-en og dens tolkning, men den finnes i
          kanoniske samlinger og har hatt reell innflytelse.
        </p>

        <h2 id="kap4">Koranens antropologi og menneskeverd</h2>
        <p>Det er viktig å gi et balansert bilde. Koranen inneholder også tekster som understreker menneskelig likeverd:</p>

        <BibleBox>
          <em>
            «O mennesker! Vi skapte dere av mann og kvinne og gjorde dere til nasjoner og stammer for at dere skulle
            bli kjent med hverandre. Sannelig, den ærverdigste av dere i Allahs øyne er den gudfryktigste av dere.»
          </em>
          <br /> <strong><a href="https://quran.com/49/13" target="_blank" rel="noreferrer">Koranen 49:13</a></strong>
        </BibleBox>

        <p>
          Dette verset brukes av muslimer som bevis på islamsk fargeblindhet. Det er et sterkt vers. Men problemet er at
          det eksisterer side om side med hadith-tekster som knytter hudfarge til negativ symbolikk — og islamsk lov som
          aldri prinsipielt forbød slaveri.
        </p>

        <p>
          Spørsmålet er ikke om gode tekster finnes — det gjør de — men om tradisjonen som helhet gir et konsistent
          grunnlag for universelt menneskeverd uavhengig av hudfarge og opprinnelse.
        </p>

        <h2 id="kap5">Bibelsk menneskeverd som kontrast</h2>
        <p>Det bibelske grunnlaget for menneskeverd er radikalt annerledes strukturert. Det hviler ikke på fromhet, rase eller sosial status — men på skapelse.</p>

        <BibleBox>
          <em>«Og Gud skapte mennesket i sitt bilde, i Guds bilde skapte han det, som mann og kvinne skapte han dem.»</em>
          <br /> <strong>1 Mosebok 1,27</strong>
        </BibleBox>

        <p>
          <em>Imago Dei</em> — Guds bilde — tilhører hvert menneske uavhengig av hudfarge, etnisitet, kjønn eller
          sosial stand. Dette er ikke et sekundært tema i Bibelen, men det ontologiske grunnlaget for all etikk.
        </p>

        <BibleBox>
          <em>
            «Her er ikke jøde eller greker, her er ikke slave eller fri, her er ikke mann og kvinne. For dere er alle én
            i Kristus Jesus.»
          </em>
          <br /> <strong>Galaterbrevet 3,28</strong>
        </BibleBox>

        <p>
          Paulus skriver dette til en verden der slaveri var universelt akseptert. Den tidlige kirken utviklet over tid —
          riktignok ikke uten kamp og motsetninger — et teologisk grunnlag som til slutt gjorde slaveri umulig å
          forsvare. William Wilberforce og den abolisjonistiske bevegelsen var eksplisitt motivert av bibelsk teologi.
        </p>

        <ul>
          <li>Bibelen gir slaveri aldri guddommelig sanksjon som institusjon</li>
          <li>Paulus oppfordrer Filemon til å ta imot Onesimus «ikke lenger som slave, men som en kjær bror» (Filemenbrevet 1,16)</li>
          <li>Bibelsk menneskeverd er begrunnet i skapelse, ikke fromhet eller rase</li>
          <li>Den abolisjonistiske bevegelsen hadde eksplisitt bibelsk-teologisk grunnlag</li>
        </ul>

        <h2 id="kap6">Konklusjon og apologetiske refleksjoner</h2>
        <p>Denne gjennomgangen reiser noen konkrete teologiske spørsmål som muslimer og kristne kan diskutere åpent:</p>

        <ul>
          <li>Hvordan forklarer muslimske lærde at islamsk lov aldri prinsipielt forbød slaveri?</li>
          <li>Hva gjør man med hadith-tekster som knytter hudfarge til negativ symbolikk?</li>
          <li>Er Tirmidhi 3075 autentisk, og hva er dens teologiske implikasjoner?</li>
          <li>Gir islamsk antropologi et tilstrekkelig grunnlag for universelt menneskeverd?</li>
        </ul>

        <p>
          Disse spørsmålene stilles ikke for å håne muslimer, men fordi sannhet er viktigere enn politisk korrekthet. En
          religion som hevder å være Guds endelige åpenbaring, må tåle kritisk undersøkelse av sine primærkilder.
        </p>

        <ImportantBox title="Konklusjon">
          Islamske primærkilder inneholder tekster om slaveri og rase som reiser alvorlige teologiske og etiske
          spørsmål. Disse tekstene er dokumenterte, kanoniske og tilgjengelige. Det bibelske alternativet —
          menneskeverd begrunnet i <em>imago Dei</em> — gir et mer konsistent og universelt grunnlag for likeverd
          mellom alle mennesker uavhengig av hudfarge, etnisitet og opprinnelse.
        </ImportantBox>

        <div className="mt-8 rounded-lg border border-[var(--line)] bg-[var(--white)] p-5 text-sm italic text-[var(--muted)]">
          Denne artikkelen er skrevet med assistanse fra Claude (Anthropic) og gjennomgått av Eirik Storesletten. Alle
          kildehenvisninger er lenket direkte til sunnah.com og quran.com for uavhengig verifisering.
        </div>
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
