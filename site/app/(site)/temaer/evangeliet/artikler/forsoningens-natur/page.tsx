import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { BibleBox } from "@/components/articles/BibleBox";
import { ImportantBox } from "@/components/articles/ImportantBox";
import { getArticleBySlug } from "@/lib/articles";
import { GiscusComments } from "./GiscusComments";

const article = getArticleBySlug("forsoningens-natur")!;

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
  { id: "del1", label: "Forsoningens utgangspunkt: Brutt fellesskap" },
  { id: "del2", label: "Gud som forsoningens initiativtaker" },
  { id: "del3", label: "Forsoning som stedfortredende selvhengivelse" },
  { id: "del4", label: "Forsoning som seier — Christus Victor" },
  { id: "del5", label: "Forsoning og pakt: Gjenopprettet paktsfellesskap" },
  { id: "del6", label: "Korset og oppstandelsen — én samlet frelseshandling" },
  { id: "del7", label: "Forsoningens frukt: Rettferdiggjørelse, fred og nytt liv" },
  { id: "del8", label: "Forsoningens drivkraft: Guds kjærlighet" },
  { id: "del9", label: "En helhetlig forståelse av forsoningen" },
];

export default function ForsoningensNaturPage() {
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
        subtitle="En helhetlig, bibelsk fremstilling av Guds frelsesverk i Kristus"
        meta="Av Eirik Storesletten"
        toc={TOC}
        backHref="/temaer/evangeliet"
        backLabel="Tilbake til Evangeliet"
        intro={
          <>
            <p>
              Forsoningen står i sentrum av det kristne evangeliet. Den handler ikke bare om hvordan synd blir tilgitt,
              men om hvordan Gud i Kristus gjenoppretter det som er brutt — mellom Gud og menneske, mellom mennesker,
              og i hele skapningen.
            </p>
            <p>
              Bibelen presenterer forsoningen som en rik og flerdimensjonal virkelighet, der flere perspektiver ikke
              konkurrerer, men utfyller hverandre.
            </p>
          </>
        }
      >
        <h2 id="del1">1. Forsoningens utgangspunkt: Brutt fellesskap</h2>

        <p>
          Forsoning forutsetter at et reelt brudd har funnet sted. Bibelen beskriver synd først og fremst som et
          relasjonelt brudd mellom Gud og mennesket.
        </p>

        <BibleBox>
          <em>«Deres misgjerninger skiller dere fra deres Gud, syndene skjuler hans ansikt så han ikke hører.»</em>
          <br /> <strong>Jesaja 59,2</strong>
        </BibleBox>

        <BibleBox>
          <em>«Alle har syndet og mangler Guds herlighet.»</em>
          <br /> <strong>Romerne 3,23</strong>
        </BibleBox>

        <p>
          Synd er mer enn lovovertredelse; den er fremmedgjøring, tap av fellesskap og brudd på tillit. Forsoningens
          natur må derfor forstås relasjonelt. Det som er ødelagt, er ikke bare en juridisk status, men selve
          fellesskapet mellom Skaper og skapning.
        </p>

        <h2 id="del2">2. Gud som forsoningens initiativtaker</h2>

        <p>Et grunnleggende bibelsk vitnesbyrd er at forsoningen ikke starter hos mennesket, men hos Gud selv.</p>

        <BibleBox>
          <em>«Alt dette er fra Gud, som ved Kristus forsonte oss med seg selv … Gud var i Kristus og forsonte verden med seg selv, så han ikke tilregnet dem deres lovbrudd.»</em>
          <br /> <strong>2. Korinterbrev 5,18–19</strong>
        </BibleBox>

        <p>
          Dette innebærer en radikal sannhet: Gud er ikke først og fremst den som må overtales til å tilgi, men den som
          i kjærlighet handler for å gjenopprette relasjonen. Forsoningens natur er derfor nådebasert og guddommelig
          initiert.
        </p>

        <h2 id="del3">3. Forsoning som stedfortredende selvhengivelse</h2>

        <p>
          Bibelen lærer tydelig at forsoningen skjer gjennom Kristi stedfortredende selvhengivelse. Jesus trer inn i
          menneskets situasjon og bærer syndens konsekvenser.
        </p>

        <BibleBox>
          <em>«Straffen lå på ham, vi fikk fred, ved hans sår ble vi helbredet.»</em>
          <br /> <strong>Jesaja 53,5</strong>
        </BibleBox>

        <BibleBox>
          <em>«Han bar våre synder på sitt legeme opp på treet, så vi skulle dø bort fra syndene og leve for rettferdigheten.»</em>
          <br /> <strong>1. Peter 2,24</strong>
        </BibleBox>

        <p>
          Dette må forstås som Guds egen selvofferhandling i Sønnen. Det er ikke en ytre straff påført en uskyldig
          tredjepart, men Guds egen kjærlige og rettferdige handling for å frelse mennesket.
        </p>

        <h2 id="del4">4. Forsoning som seier — Christus Victor</h2>

        <p>
          Et sentralt bibelsk perspektiv er at forsoningen er Kristi seier over syndens, dødens og djevelens makt. Korset
          er ikke nederlag, men triumf.
        </p>

        <BibleBox>
          <em>«Han avvæpnet maktene og åndskreftene og stilte dem åpenlyst til skue, da han triumferte over dem på korset.»</em>
          <br /> <strong>Kolosserne 2,15</strong>
        </BibleBox>

        <BibleBox>
          <em>«Ved sin død gjorde han ende på ham som har dødens makt, det er djevelen.»</em>
          <br /> <strong>Hebreerne 2,14</strong>
        </BibleBox>

        <p>
          I denne forståelsen — ofte kalt Christus Victor — er forsoningens natur kosmisk. Jesu død og oppstandelse
          bryter de onde maktenes herredømme og setter mennesket fri.
        </p>

        <h2 id="del5">5. Forsoning og pakt: Gjenopprettet paktsfellesskap</h2>

        <p>
          Forsoningen må forstås innenfor rammen av Guds paktstrofasthet. Bibelens frelseshistorie er grunnleggende
          paktlig: Gud forholder seg til mennesker gjennom løfter, relasjon og representasjon. Jesu forsoningsverk er
          derfor ikke et brudd med tidligere pakter, men deres oppfyllelse og fornyelse.
        </p>

        <h3>5.1 Den nye pakt — oppfyllelse og fornyelse</h3>
        <p>Jesu død og oppstandelse innstifter den nye pakt som profetene hadde lovet.</p>

        <BibleBox>
          <em>«Denne kalk er den nye pakt i mitt blod, som blir utøst for dere.»</em>
          <br /> <strong>Lukas 22,20</strong>
        </BibleBox>

        <BibleBox>
          <em>«Jeg vil legge min lov i deres indre og skrive den i deres hjerte … For jeg vil tilgi deres skyld og ikke lenger huske deres synd.»</em>
          <br /> <strong>Jeremia 31,33–34</strong>
        </BibleBox>

        <p>
          Den nye pakt handler ikke bare om juridisk tilgivelse, men om indre forvandling, hjertets fornyelse og
          gjenopprettet fellesskap. Forsoningens natur er derfor paktlig: Gud binder seg selv til sitt folk i trofast
          kjærlighet.
        </p>

        <h3>5.2 Kristus som paktens representant</h3>
        <p>
          I bibelsk paktstenkning handler frelse ofte gjennom representasjon. Adam representerte menneskeheten i fallet;
          Kristus representerer menneskeheten i gjenopprettelsen.
        </p>

        <BibleBox>
          <em>«Slik førte én manns fall til dom for alle mennesker, slik fører også én manns rettferdige gjerning til frifinnelse og liv for alle.»</em>
          <br /> <strong>Romerne 5,18–19</strong>
        </BibleBox>

        <p>
          Jesus handler på vegne av menneskene — som den sanne Menneskesønn og den trofaste paktsrepresentanten. I ham
          blir pakten holdt, der mennesket tidligere brøt den.
        </p>

        <h3>5.3 Forsoning «i Kristus» — deltakelse og identitet</h3>
        <p>
          Et gjennomgående nytestamentlig uttrykk er at frelsen skjer «i Kristus». Dette er et dypt paktlig og
          relasjonelt begrep.
        </p>

        <BibleBox>
          <em>«Om noen er i Kristus, er han en ny skapning.»</em>
          <br /> <strong>2. Korinterbrev 5,17</strong>
        </BibleBox>

        <BibleBox>
          <em>«I ham har vi forløsningen ved hans blod, tilgivelse for syndene.»</em>
          <br /> <strong>Efeserne 1,7</strong>
        </BibleBox>

        <p>
          Å være «i Kristus» betyr å være inkludert i hans liv, død og oppstandelse. Forsoning er derfor ikke bare noe
          Kristus gjør for oss, men noe vi får del i ved troen.
        </p>

        <h3>5.4 Paktsfellesskapets mål: Barnekår og arv</h3>
        <p>Den nye pakt fører mennesket inn i et fornyet forhold til Gud som Far.</p>

        <BibleBox>
          <em>«Da tiden var fullendt, sendte Gud sin Sønn … for at vi skulle få barnekår.»</em>
          <br /> <strong>Galaterne 4,4–7</strong>
        </BibleBox>

        <p>
          Forsoningens mål er ikke bare tilgivelse, men gjenopprettet identitet, tilhørighet og arv. Paktsfellesskapet
          er derfor personlig, nært og livsforvandlende.
        </p>

        <h3>5.5 Oppstandelsen som paktens stadfestelse</h3>
        <p>
          Oppstandelsen er ikke et tillegg til korset, men Guds bekreftelse og stadfestelse av den nye pakt. Der korset
          er paktens offer, er oppstandelsen paktens guddommelige ja.
        </p>

        <BibleBox>
          <em>«Han er ved hellighets Ånd kraftig stadfestet som Guds Sønn ved oppstandelsen fra de døde.»</em>
          <br /> <strong>Romerne 1,4</strong>
        </BibleBox>

        <p>
          Ved oppstandelsen erklærer Gud offentlig at Kristi offer er godtatt, at syndens makt er brutt, og at den nye
          pakt står fast. Uten oppstandelsen ville korset stått igjen som et vitnesbyrd om død; med oppstandelsen blir
          det et vitnesbyrd om liv.
        </p>

        <BibleBox>
          <em>«Hvis Kristus ikke er stått opp, er deres tro forgjeves, dere er da ennå i deres synder.»</em>
          <br /> <strong>1. Korinterbrev 15,17</strong>
        </BibleBox>

        <p>
          Oppstandelsen viser at forsoningen ikke bare handler om syndens tilgivelse, men om ny skapelse. Den
          oppstandne Kristus er den førstefødte i den nye paktens virkelighet.
        </p>

        <BibleBox>
          <em>«Han er begynnelsen, den førstefødte av de døde.»</em>
          <br /> <strong>Kolosserne 1,18</strong>
        </BibleBox>

        <p>
          Som den oppstandne paktens hode deler Kristus sitt liv med dem som er «i ham». Forsoningens paktlige natur
          fullendes derfor i oppstandelsen: det nye livet som ble kjøpt på korset, deles nå i kraft av Den Hellige Ånd.
        </p>

        <BibleBox>
          <em>«Han ble gitt for våre overtredelser og reist opp til vår rettferdiggjørelse.»</em>
          <br /> <strong>Romerne 4,25</strong>
        </BibleBox>

        <p>
          Oppstandelsen er dermed både Guds stadfestelse av pakten og begynnelsen på det livet pakten lover — et liv i
          fellesskap, kraft og håp om fullendelse.
        </p>

        <h2 id="del6">6. Korset og oppstandelsen — én samlet frelseshandling</h2>

        <p>
          I Det nye testamente blir korset og oppstandelsen aldri skilt fra hverandre som to uavhengige hendelser.
          Sammen utgjør de én helhetlig frelseshandling, der Guds frelsesverk både fullbyrdes og åpenbares. Korset uten
          oppstandelsen ville ikke vært frelse, og oppstandelsen uten korset ville ikke hatt forsonende kraft.
        </p>

        <BibleBox>
          <em>«Kristus døde for våre synder etter Skriftene, han ble begravet, og han sto opp den tredje dag etter Skriftene.»</em>
          <br /> <strong>1. Korinterbrev 15,3–4</strong>
        </BibleBox>

        <p>
          Paulus forkynner ikke bare kors eller bare oppstandelse, men hele frelseshendelsen som én sammenhengende
          virkelighet. Korset er stedet der synden blir båret og dømt; oppstandelsen er stedet der det nye livet bryter
          frem.
        </p>

        <h3>6.1 Korset: Syndens dom og kjærlighetens offer</h3>
        <p>På korset tar Kristus fullt ut på seg syndens konsekvens og bryter dens makt.</p>

        <BibleBox>
          <em>«Gud gjorde det loven ikke maktet … da han sendte sin egen Sønn i syndig kjøtts skikkelse og for syndens skyld, og fordømte synden i kjøttet.»</em>
          <br /> <strong>Romerne 8,3</strong>
        </BibleBox>

        <p>
          Korset er samtidig Guds rettferdige dom over synden og hans selvhengivende kjærlighet til mennesket. Her blir
          fienden avvæpnet, gjelden slettet og pakten beseglet i blod.
        </p>

        <h3>6.2 Oppstandelsen: Livets seier og ny skapelse</h3>
        <p>
          Oppstandelsen er ikke bare Jesu personlige seier over døden, men begynnelsen på den nye skapelsen.
        </p>

        <BibleBox>
          <em>«Om noen er i Kristus, er han en ny skapning.»</em>
          <br /> <strong>2. Korinterbrev 5,17</strong>
        </BibleBox>

        <p>
          I oppstandelsen bryter Guds framtid inn i nåtiden. Det livet Kristus lever, er det samme livet han deler med
          sitt folk ved Ånden.
        </p>

        <h3>6.3 Én frelseshandling — én virkelighet</h3>
        <p>Bibelen beskriver frelsen som deltakelse i både Kristi død og hans oppstandelse.</p>

        <BibleBox>
          <em>«Vi ble begravet med ham da vi ble døpt med denne dåpen til døden … slik skal også vi leve det nye livet.»</em>
          <br /> <strong>Romerne 6,4–5</strong>
        </BibleBox>

        <p>
          Forsoningens natur kan derfor ikke reduseres til det som skjer på korset alene. Den fullbyrdes i oppstandelsen
          og virkeliggjøres i dem som er i Kristus. Kors og oppstandelse utgjør sammen Guds seirende, paktlige og
          livsskapende frelseshandling.
        </p>

        <h2 id="del7">7. Forsoningens frukt: Rettferdiggjørelse, fred og nytt liv</h2>

        <p>Forsoningen får konkrete konsekvenser i den troendes liv.</p>

        <BibleBox>
          <em>«Da vi nå er blitt rettferdige ved tro, har vi fred med Gud ved vår Herre Jesus Kristus.»</em>
          <br /> <strong>Romerne 5,1</strong>
        </BibleBox>

        <BibleBox>
          <em>«Slik stiftet han fred ved korset.»</em>
          <br /> <strong>Efeserne 2,16</strong>
        </BibleBox>

        <ImportantBox title="Forsoningens frukt">
          <ul>
            <li><strong>Rettferdiggjørelse</strong> — en ny stilling for Gud</li>
            <li><strong>Fred</strong> — et gjenopprettet forhold</li>
            <li><strong>Nytt liv</strong> — deltakelse i Kristi oppstandelseskraft ved Den Hellige Ånd</li>
          </ul>
        </ImportantBox>

        <h2 id="del8">8. Forsoningens drivkraft: Guds kjærlighet</h2>

        <p>Alt som skjer i forsoningen, springer ut av Guds kjærlighet.</p>

        <BibleBox>
          <em>«Gud viser sin kjærlighet til oss ved at Kristus døde for oss mens vi ennå var syndere.»</em>
          <br /> <strong>Romerne 5,8</strong>
        </BibleBox>

        <BibleBox>
          <em>«I dette er kjærligheten: Ikke at vi har elsket Gud, men at han har elsket oss og sendt sin Sønn til soning for våre synder.»</em>
          <br /> <strong>1. Johannes 4,10</strong>
        </BibleBox>

        <p>
          Forsoningens natur er derfor ikke primært juridisk, men kjærlighetsdrevet. Korset er Guds agape-kjærlighet i
          handling.
        </p>

        <h2 id="del9">9. En helhetlig forståelse av forsoningen</h2>

        <p>Bibelsk sett er forsoningen samtidig:</p>

        <ImportantBox title="Fem dimensjoner av forsoningen">
          <ul>
            <li><strong>Relasjonell</strong> — den gjenoppretter fellesskap mellom Gud og menneske</li>
            <li><strong>Stedfortredende</strong> — Kristus bærer syndens byrde på vegne av oss</li>
            <li><strong>Seirende</strong> — Kristus overvinner synd, død og onde makter</li>
            <li><strong>Paktlig</strong> — den gjenoppretter og fullender paktsfellesskapet</li>
            <li><strong>Forvandlende</strong> — den gir nytt liv og identitet i Ånden</li>
          </ul>
        </ImportantBox>

        <p>
          Ingen enkelt modell rommer hele dybden i forsoningens mysterium. Sammen gir disse perspektivene et rikt og
          balansert bilde av Guds frelsesgjerning.
        </p>

        <ImportantBox title="Avslutning">
          <p>
            Forsoningens natur er at Gud selv i Kristus går inn i menneskets brudne virkelighet, bærer syndens konsekvenser,
            overvinner fienden, gjenoppretter pakten og fører mennesket tilbake i levende fellesskap med seg.
          </p>
          <p>Korset er ikke bare løsningen på et juridisk problem, men Guds kjærlighetsseier — for mennesket og for hele skapningen.</p>
        </ImportantBox>

        <BibleBox>
          <em>«Gud var i Kristus og forsonte verden med seg selv.»</em>
          <br /> <strong>2. Korinterbrev 5,19</strong>
        </BibleBox>

        <p>
          For full gjennomgang, les eller last ned PDF-dokumentet: {" "}
          <a href="/pdf/forsoningens-natur.pdf" target="_blank" rel="noreferrer">
            forsoningens-natur.pdf
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
