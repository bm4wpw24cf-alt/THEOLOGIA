import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { BibleBox } from "@/components/articles/BibleBox";
import { ConclusionBox } from "@/components/articles/ConclusionBox";
import { getArticleBySlug } from "@/lib/articles";
import { GiscusComments } from "./GiscusComments";
import styles from "@/components/articles/article.module.css";

const article = getArticleBySlug("det-islamske-dilemmaet")!;

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
  { id: "del1", label: "Grunnlaget og metode" },
  { id: "del2", label: "Koranens egne påstander om Toraen og evangeliet" },
  { id: "del3", label: "Historisk undersøkelse: 600-tallet" },
  { id: "del4", label: "Tawrat, Zabur og Injil" },
  { id: "del5", label: "De konkrete konfliktene" },
  { id: "del6", label: "Muhammed i Bibelen?" },
  { id: "del7", label: "Bibelen som målestokk for Koranen?" },
  { id: "del8", label: "Vanlige muslimske innvendinger" },
  { id: "del9", label: "Oppsummering og konklusjon" },
  { id: "tillegg", label: "Tillegg — Skriften eller menneskene?" },
];

export default function DetIslamskeDilemmaetPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Apologetikk", href: "/temaer/apologetikk" },
          { label: "Det islamske dilemmaet" },
        ]}
      />

      <ArticleLayout
        category="TEMAER · APOLOGETIKK · ISLAM"
        title={article.title}
        subtitle="Bekrefter Koranen Bibelen — eller motsier den den?"
        meta="Av Eirik Storesletten"
        toc={TOC}
        intro={
          <p>
            Det islamske dilemmaet er et argument som tar utgangspunkt i Koranens egne påstander om tidligere
            guddommelige åpenbaringer. Koranen bekrefter på den ene siden Toraen og evangeliet som ekte åpenbaringer
            fra Gud — samtidig som den synes å motsi sentrale læresetninger disse skriftene inneholder. Dette reiser
            et grunnleggende spørsmål: Hvordan kan de samme guddommelige kildene både bekreftes og motsies?
          </p>
        }
      >
        <p className={styles.partLabel}>Del I</p>
        <h2 id="del1">Grunnlaget og metode</h2>
        <p>
          Argumentet presenterer et logisk problem som islam selv må forholde seg til. Dersom de tidligere skriftene
          var bevart og pålitelige på Muhammeds tid, oppstår spørsmålet om hvordan Koranen kan avvise deler av deres
          budskap. Dersom de derimot var forfalsket, må man forklare hvorfor Koranen omtaler dem med autoritet og
          oppfordrer mennesker til å vende seg til dem.
        </p>
        <p>
          Boken bygger på en intern analyse av Koranens tekst. Målet er ikke å starte med Bibelen for å kritisere
          islam, men å undersøke hva Koranen selv sier om tidligere åpenbaringer — og la Koranen tale på egne
          premisser før man trekker historiske og teologiske konklusjoner. Spørsmålene undersøkes deretter historisk,
          gjennom manuskripter, kirkefedre og den jødiske og kristne kanonhistorien.
        </p>

        <hr className={styles.sectionDivider} />

        <p className={styles.partLabel}>Del II</p>
        <h2 id="del2">Koranens egne påstander om Toraen og evangeliet</h2>
        <p>
          Koranen fremstiller ikke islam som en ny religion uten historisk forankring. Den presenterer Guds
          åpenbaring som en sammenhengende historie som begynner med Adam og kulminerer med Muhammed. Toraen og
          evangeliet beskrives gjennomgående som guddommelige gaver:
        </p>

        <BibleBox>
          <em>«Han har sendt ned Skriften til deg med sannheten og stadfester det som var før den. Han sendte ned Toraen og evangeliet.»</em>
          <br /> <strong>Sura 3:3</strong>
        </BibleBox>
        <BibleBox>
          <em>«Vi gav ham evangeliet, hvor det er veiledning og lys.»</em>
          <br /> <strong>Sura 5:46</strong>
        </BibleBox>
        <BibleBox>
          <em>«Dere har intet grunnlag før dere holder fast ved Toraen og evangeliet og det som er sendt ned til dere fra deres Herre.»</em>
          <br /> <strong>Sura 5:68</strong>
        </BibleBox>
        <BibleBox>
          <em>«Hvis du er i tvil om det Vi har åpenbart for deg, så spør dem som har lest Skriften før deg.»</em>
          <br /> <strong>Sura 10:94</strong>
        </BibleBox>

        <p>
          Et sentralt uttrykk er «det som er hos dere» (2:41, 2:89). Den naturlige forståelsen er at Koranen viser
          til skriftene jøder og kristne faktisk hadde i sin besittelse på Muhammeds tid — ikke til ukjente eller
          tapte bøker. Når Koranen omtaler «Bokens folk» (Ahl al-Kitab), beskrives de som mennesker som faktisk
          besitter hellige skrifter, ikke som et folk som en gang hadde dem.
        </p>

        <hr className={styles.sectionDivider} />

        <p className={styles.partLabel}>Del III</p>
        <h2 id="del3">Historisk undersøkelse: hvilke skrifter fantes på 600-tallet?</h2>
        <p>
          Det islamske dilemmaet hviler på et avgjørende historisk spørsmål: når Koranen omtaler Toraen og
          evangeliet, hvilke skrifter sikter den til? Vi kjenner godt til hvilke jødiske og kristne skrifter som var
          i omløp på 600-tallet:
        </p>
        <ul>
          <li>Hebraiske manuskripter av Det gamle testamentet, flere hundre år eldre enn Muhammed.</li>
          <li>Den greske Septuaginta, utbredt blant gresktalende jøder og tidlige kristne.</li>
          <li>De store bibelkodeksene og et stort antall nytestamentlige manuskripter.</li>
          <li>
            Kirkefedre fra 100-tallet av — Ignatius, Polykarp, Justin Martyr, Ireneus, Tertullian, Origenes — som
            siterer store deler av Det nye testamentet.
          </li>
          <li>
            Arabia var ikke isolert: handelsrutene knyttet Hijaz til Syria, Palestina, Egypt og Etiopia, hvor
            jødiske og kristne samfunn fantes.
          </li>
        </ul>
        <p>
          Den historiske dokumentasjonen peker entydig mot at vi vet hvilke skrifter dette var. Det finnes ingen
          historiske bevis for en ukjent Tawrat eller et Injil som var forskjellig fra de skriftene jøder og kristne
          faktisk hadde i omløp.
        </p>

        <hr className={styles.sectionDivider} />

        <p className={styles.partLabel}>Del IV</p>
        <h2 id="del4">Tawrat, Zabur og Injil — hva betyr begrepene?</h2>
        <p>
          <strong>Tawrat</strong> tilsvarer det hebraiske <em>Torah</em> — Mosebøkene. Historisk fantes det ingen
          annen Tawrat blant jødene på Muhammeds tid enn den hebraiske teksten bevart gjennom manuskripttradisjonen.
        </p>
        <p>
          <strong>Zabur</strong> forbindes med David og tilsvarer det hebraiske <em>mizmor</em> / greske{" "}
          <em>psalmoi</em>. Identifiseres tradisjonelt med Salmenes bok, som var etablert jødisk skrift lenge før
          islam oppstod.
        </p>
        <p>
          <strong>Injil</strong> kommer trolig fra det greske <em>euangelion</em> (gode nyheter). Historien kjenner
          ikke til en enkelt bok åpenbart direkte til Jesus som senere gikk tapt. De kristne samfunnene rundt Arabia
          på 600-tallet brukte Matteus, Markus, Lukas og Johannes — fire evangelieberetninger om ett evangelisk
          budskap, slik allerede Ireneus understreket på 100-tallet.
        </p>

        <hr className={styles.sectionDivider} />

        <p className={styles.partLabel}>Del V</p>
        <h2 id="del5">De konkrete konfliktene: Jesus, korsfestelse og frelse</h2>
        <p>
          Etter å ha undersøkt hvilke skrifter Koranen bekrefter, kommer vi til kjernen av dilemmaet — der det
          oppstår grunnleggende motsetninger mellom Koranens og Bibelens fremstillinger.
        </p>

        <h4>Jesu korsfestelse</h4>
        <p>
          Alle fire evangeliene beskriver Jesu lidelse, korsfestelse og død som frelseshistoriens sentrale hendelse.
          Sura 4:157 hevder derimot: «De drepte ham ikke og korsfestet ham ikke, men det fortonte seg slik for dem.»
        </p>

        <h4>Oppstandelsen</h4>
        <p>
          I Bibelen er oppstandelsen uløselig knyttet til korsfestelsen. Paulus skriver at dersom Kristus ikke er
          oppstanden, er den kristne tro forgjeves. Koranen beskriver ikke oppstandelsen slik Det nye testamentet
          gjør.
        </p>

        <h4>Jesu identitet</h4>
        <p>
          Bibelen fremstiller Jesus som Guds Sønn og Ordet som ble kjød; han mottar tilbedelse og tilgir synder.
          Koranen anerkjenner jomfrufødselen og miraklene, men avviser at han er Guds Sønn eller delaktig i Guds
          vesen.
        </p>

        <h4>Synd og frelse</h4>
        <p>
          Bibelen lærer at alle mennesker er syndere som trenger frelse ved nåde gjennom Kristi soningsverk. Koranen
          legger vekt på personlig ansvar og Guds barmhjertighet, uten en stedfortredende soning.
        </p>

        <hr className={styles.sectionDivider} />

        <p className={styles.partLabel}>Del VI</p>
        <h2 id="del6">Muhammed i Bibelen?</h2>
        <p>
          Koranen hevder at Muhammeds komme var forutsagt i de tidligere åpenbaringene (sura 7:157, 61:6, 2:146).
          Problemet er at ingen kjent jødisk eller kristen bibeltekst inneholder en eksplisitt profeti om en arabisk
          profet ved navn Muhammed. Gjennom islams historie har flere bibeltekster likevel blitt foreslått:
        </p>

        <div className={styles.tableWrap}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th scope="col">Tekst</th>
                <th scope="col">Vanlig muslimsk tolkning</th>
                <th scope="col">Innvending</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5 Mos 18</td>
                <td>«En profet lik Moses» er Muhammed</td>
                <td>
                  Forstås tradisjonelt som en profetisk institusjon i Israel, eller i kristen tolkning oppfylt i
                  Jesus
                </td>
              </tr>
              <tr>
                <td>Joh 14–16</td>
                <td>«Talsmannen» er Muhammed/Ahmad</td>
                <td>
                  Gresk <em>paraklētos</em> betyr hjelper/talsmann; Jesus identifiserer ham med Den Hellige Ånd
                </td>
              </tr>
              <tr>
                <td>Høys 5:16</td>
                <td>
                  Hebraisk <em>maḥamaddim</em> ligner Muhammed
                </td>
                <td>Vanlig adjektiv som betyr «herlig/yndig» — ikke et egennavn</td>
              </tr>
              <tr>
                <td>Jes 42</td>
                <td>Herrens tjener er Muhammed</td>
                <td>Tradisjonelt forstått som Israels tjener eller Messias; ingen arabisk profet nevnes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className={styles.sectionDivider} />

        <p className={styles.partLabel}>Del VII</p>
        <h2 id="del7">Kan Bibelen fungere som målestokk for Koranen?</h2>
        <p>
          Koranen fremstiller ikke Toraen og evangeliet som irrelevante bøker. Sura 10:94 oppfordrer til å søke
          bekreftelse hos dem som har lest de tidligere skriftene. Dersom skriftene var korrupte, kunne de ikke
          fungere som en autoritativ kontrollinstans.
        </p>
        <p>
          Konsekvensen er at Koranen ikke bare bekreftes av Bibelen — den gjør samtidig Bibelen til en målestokk som
          kan brukes til å undersøke Koranens egne påstander. Hvis de tidligere skriftene støtter Koranen, styrkes
          dens budskap. Hvis de motsier den, oppstår spørsmålet om hvordan begge kan komme fra den samme Gud.
        </p>

        <hr className={styles.sectionDivider} />

        <p className={styles.partLabel}>Del VIII</p>
        <h2 id="del8">Vanlige muslimske innvendinger</h2>

        <h3>«Bare deler av Bibelen bekreftes»</h3>
        <p>
          Koranen spesifiserer normalt ikke hvilke deler den bekrefter, men omtaler Toraen og evangeliet som
          helheter. Hvis den bare mente bestemte deler, sier den aldri hvilke.
        </p>

        <h3>«Det fantes et annet evangelium»</h3>
        <p>
          Det finnes ingen historiske spor av et universelt «annet evangelium» som de kristne samfunnene rundt
          Arabia faktisk brukte på 600-tallet. Historien peker entydig mot Matteus, Markus, Lukas og Johannes.
        </p>

        <h3>«Bibelen ble forfalsket»</h3>
        <p>
          Hvis Bibelen var forfalsket før Muhammed, hvorfor omtaler Koranen den positivt, ber Bokens folk dømme
          etter sine skrifter, og oppfordrer Muhammed til å søke bekreftelse hos dem? Vi har bibelmanuskripter fra
          flere hundre år før Muhammed som viser at hovedinnholdet er bevart.
        </p>

        <h3>«Muhammed tvilte aldri» (om 10:94)</h3>
        <p>
          Selv om Muhammed ikke tvilte personlig, står prinsippet fast: de tidligere skriftene fungerer som
          bekreftelse. Argumentet handler om hvilken autoritet skriftene har, ikke om Muhammeds sinnstilstand.
        </p>

        <h3>«Tawrat og Injil er ikke Bibelen»</h3>
        <p>
          Disse begrepene må forstås i den historiske sammenhengen de ble brukt. På Muhammeds tid brukte jødiske og
          kristne samfunn kjente og dokumenterte skrifter. Ingen alternativ tekst kan påvises historisk.
        </p>

        <hr className={styles.sectionDivider} />

        <p className={styles.partLabel}>Del IX</p>
        <h2 id="del9">Oppsummering og konklusjon</h2>
        <p>Det islamske dilemmaet kan uttrykkes slik:</p>
        <ol>
          <li>Koranen bekrefter Toraen og evangeliet som guddommelige, autoritative og tilgjengelige for Bokens folk.</li>
          <li>Historisk vet vi hvilke skrifter dette var — de er veldokumenterte gjennom manuskripter og kirkehistorie.</li>
          <li>Koranen motsier sentrale deler av disse skriftene, særlig Jesu korsfestelse, oppstandelse og guddommelighet.</li>
        </ol>

        <ConclusionBox>
          <p>
            <strong>Konklusjonen:</strong> Dersom Toraen og evangeliet er pålitelige, står Koranens motsigelser
            overfor et alvorlig problem. Dersom de ikke er pålitelige, blir Koranens gjentatte bekreftelse og
            henvisning til dem vanskelig å forklare.
          </p>
          <p>
            Det islamske dilemmaet er ikke et angrep på muslimer, men en invitasjon til ærlig undersøkelse av
            kildene. Sannheten trenger verken frykte spørsmål eller historisk gransking.
          </p>
        </ConclusionBox>

        <hr className={styles.sectionDivider} />

        <p className={styles.partLabel} id="tillegg">Tillegg</p>
        <h2>Kritiserer Koranen Skriften eller menneskene?</h2>
        <p>
          En utbredt oppfatning er at Koranen lærer at Toraen og evangeliet har blitt fullstendig forfalsket. Når
          man leser Koranen nøye, ser man et mer nyansert bilde: kritikken retter seg primært mot mennesker som
          misbruker Skriften — ikke mot Skriften selv.
        </p>

        <h3>Koranens kritikk av menneskelig oppførsel</h3>

        <BibleBox>
          <em>«Bland ikke sannhet med løgn og skjul ikke sannheten når dere vet.»</em>
          {" "}Kritikken gjelder mennesker som kjenner sannheten, men skjuler den — ikke at teksten er endret.
          <strong>Sura 2:42</strong>
        </BibleBox>
        <BibleBox>
          <em>«Blant dem er det noen som vrir sine tunger når de leser Skriften.»</em>
          {" "}Dette beskriver en muntlig handling, ikke nødvendigvis en endring av selve teksten.
          <strong>Sura 3:78</strong>
        </BibleBox>
        <BibleBox>
          <em>«Ve dem som skriver boken med sine egne hender og så sier: Dette er fra Allah.»</em>
          {" "}Verset beskriver mennesker som lager falske religiøse tekster — det sier ikke at hele Toraen er forfalsket.
          <strong>Sura 2:79</strong>
        </BibleBox>
        <BibleBox>
          <em>«De forvrenger ordene fra deres rette steder.»</em>
          {" "}Det arabiske uttrykket (taḥrīf) kan forstås som feiltolkning, feil anvendelse eller tekstlig endring — verset spesifiserer ikke hvilken type.
          <strong>Sura 5:13</strong>
        </BibleBox>

        <p>
          Den klassiske islamske læren om fullstendig tekstlig forfalskning (<em>taḥrīf al-naṣṣ</em>) utviklet seg
          særlig i senere islamsk teologi. Koranens egne utsagn isolert sett inneholder ingen enkelttekst som klart
          sier: «Hele Toraen og hele evangeliet er blitt omskrevet.»
        </p>

        <div className={styles.tableWrap}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th scope="col">Koranen kritiserer</th>
                <th scope="col">Koranen bekrefter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enkelte skjuler sannheten</td>
                <td>Toraen er fra Gud</td>
              </tr>
              <tr>
                <td>Enkelte vrir ordene</td>
                <td>Evangeliet er fra Gud</td>
              </tr>
              <tr>
                <td>Enkelte skriver falske tekster</td>
                <td>De er veiledning og lys</td>
              </tr>
              <tr>
                <td>Enkelte forvrenger budskapet</td>
                <td>Bokens folk oppfordres til å følge dem</td>
              </tr>
              <tr>
                <td>Enkelte misbruker åpenbaringen</td>
                <td>Gud står bak de tidligere skriftene</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          En helhetlig lesning av Koranen viser at den ofte omtaler Toraen og evangeliet med respekt og autoritet.
          Kritikken er i hovedsak rettet mot enkelte mennesker blant Bokens folk og deres handlinger, ikke
          nødvendigvis mot selve Skriften som guddommelig åpenbaring. Spørsmålet om Koranens syn på tekstlig
          forfalskning er derfor mer komplisert enn det ofte fremstilles som.
        </p>

        <p className={styles.closingQuote}>
          «Vårt hjerte er urolig inntil det finner hvile i deg.»
          <span className={styles.closingQuoteSource}>Augustin av Hippo — Bekjennelser, bok I</span>
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
