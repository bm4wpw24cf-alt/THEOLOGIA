import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { BibleBox } from "@/components/articles/BibleBox";
import { ImportantBox } from "@/components/articles/ImportantBox";
import { getArticleBySlug } from "@/lib/articles";
import { GiscusComments } from "./GiscusComments";

const article = getArticleBySlug("laerer-koranen-kjaerlighet")!;

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
  { id: "del1", label: "Koranens første omtaler av kjærlighet" },
  { id: "del2", label: "Kjærlighet til andre mennesker" },
  { id: "del3", label: "Hvem elsker Allah?" },
  { id: "del4", label: "Bibelens kjærlighetsbudskap" },
  { id: "del5", label: "Jesus Kristus og evangeliet" },
];

export default function LaererKoranenKjaerlighetPage() {
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
        subtitle="En sammenligning av Koranens og Bibelens undervisning om kjærlighet, Gud og evangeliet"
        meta="Av Eirik Storesletten"
        toc={TOC}
        intro={
          <p>
            Islam blir ofte beskrevet som en religion preget av kjærlighet, barmhjertighet og fred. Mange muslimer
            hevder også at kristne og muslimer tilber den samme Gud. Dersom dette er riktig, bør Koranen inneholde en
            tydelig lære om kjærlighet som samsvarer med det Bibelen lærer. Spørsmålet er derfor ikke om ordet
            «kjærlighet» finnes i Koranen, men hvordan det brukes.
          </p>
        }
      >
        <h2 id="del1">Koranens første omtaler av kjærlighet</h2>

        <p>
          Ifølge den engelske oversettelsen som ligger til grunn for denne gjennomgangen, forekommer ordet
          «kjærlighet» 82 ganger i Koranen, fordelt på 30 av dens 114 surer. Antallet er imidlertid mindre viktig enn
          hvordan ordet brukes. Når alle versene ses under ett, viser det seg at kjærligheten hovedsakelig beskrives på
          fire måter:
        </p>
        <ul>
          <li>menneskets kjærlighet til Allah,</li>
          <li>Allahs kjærlighet til bestemte mennesker,</li>
          <li>kjærlighet til jordiske goder,</li>
          <li>og Allahs utsagn om hvem han ikke elsker.</li>
        </ul>
        <p>
          Det som er bemerkelsesverdig, er at Koranen ikke gir en generell befaling om å elske alle mennesker eller å
          elske sine fiender slik Jesus gjør i evangeliene.
        </p>

        <h3>Kjærlighet til Allah</h3>
        <p>Den første gangen kjærlighet nevnes, er i Koranen 2:165:</p>
        <BibleBox>
          <em>
            «Blant menneskene finnes det dem som setter andre ved siden av Allah og elsker dem slik Allah bør elskes.
            Men de som tror, elsker Allah enda sterkere.»
          </em>
          <br /> <strong>Koranen 2:165</strong>
        </BibleBox>
        <p>
          Verset fremhever kjærligheten til Allah som den høyeste formen for kjærlighet. Det er imidlertid verdt å merke
          seg hva verset ikke sier: det finnes ingen oppfordring til å elske andre mennesker. Kjærligheten er rettet mot
          Allah alene.
        </p>
        <p>
          Dette skiller seg fra Jesu sammenfatning av loven i Matteus 22:37–40. Da Jesus ble spurt om det største
          budet, svarte han med to bud som er uløselig knyttet sammen:
        </p>
        <BibleBox>
          <em>
            «Du skal elske Herren din Gud av hele ditt hjerte» — og: «Du skal elske din neste som deg selv.»
          </em>
          <br /> <strong>Matteus 22:37–40</strong>
        </BibleBox>
        <p>I Bibelen kan kjærligheten til Gud derfor ikke skilles fra kjærligheten til andre mennesker.</p>

        <h3>Kjærlighet og krig</h3>
        <BibleBox>
          <em>
            «Krig er foreskrevet for dere, selv om dere avskyr den. Det kan hende dere avskyr noe som er godt for dere,
            og elsker noe som er ondt for dere. Allah vet, men dere vet ikke.»
          </em>
          <br /> <strong>Koranen 2:216</strong>
        </BibleBox>
        <p>
          Ifølge klassiske tafsir — blant annet hos Al-Tabari og Ibn Kathir — handler dette om de troendes plikt til å
          adlyde Allahs befaling om kamp. Verset handler ikke om kjærlighet mellom mennesker, men om lydighet mot Allah.
        </p>

        <h3>Kjærlighet til verdens goder</h3>
        <BibleBox>
          <em>
            «Menneskene finner behag i begjæret etter kvinner, barn, mengder av gull og sølv, flotte hester, buskap og
            dyrkbar jord. Dette er bare det jordiske livets gleder. Men hos Allah finnes det som er langt bedre.»
          </em>
          <br /> <strong>Koranen 3:14–15</strong>
        </BibleBox>
        <p>Bibelen legger en annen vekt. Apostelen Johannes skriver:</p>
        <BibleBox>
          <em>
            «For alt som er i verden — kjødets lyst, øynenes lyst og hovmodet i livet — er ikke av Faderen, men av
            verden.»
          </em>
          <br /> <strong>1. Johannes 2:16–17</strong>
        </BibleBox>
        <p>
          Det nye testamentet advarer mot å la verdens begjær forme hjertet. Den troendes håp er ikke knyttet til
          jordiske belønninger, men til fellesskapet med Gud selv.
        </p>

        <h3>Kjærlighet, gavmildhet og rettferdighet</h3>
        <BibleBox>
          <em>«Dere vil aldri oppnå sann fromhet før dere gir av det dere elsker.»</em>
          <br /> <strong>Koranen 3:92</strong>
        </BibleBox>
        <BibleBox>
          <em>
            «For av nåde er dere frelst, ved tro. Det er ikke deres eget verk, men Guds gave. Det hviler ikke på
            gjerninger, for at ingen skal skryte av seg selv.»
          </em>
          <br /> <strong>Efeserne 2:8–9</strong>
        </BibleBox>
        <p>
          Forskjellen er grunnleggende: i Koranen knyttes rettferdighet til menneskets handlinger. I Bibelen er frelsen
          en gave av nåde mottatt ved tro, mens gode gjerninger blir frukten av det nye livet i Kristus.
        </p>

        <h2 id="del2">Kjærlighet til andre mennesker</h2>

        <p>
          Et naturlig spørsmål er: Hva sier Koranen om kjærlighet til andre mennesker? Dette er avgjørende fordi Bibelen
          gjør kjærligheten til nesten og til fienden til en sentral del av det kristne livet.
        </p>

        <h3>Hvem er den troendes nærmeste?</h3>
        <BibleBox>
          <em>
            «Dere som tror! Ta ikke fortrolige venner blant andre enn deres egne. De vil ikke unnlate å skade dere. De
            ønsker deres undergang … Dere elsker dem, men de elsker ikke dere.»
          </em>
          <br /> <strong>Koranen 3:118–119</strong>
        </BibleBox>
        <p>
          Klassiske tafsir — blant annet hos Al-Tabari, Ibn Kathir og Al-Qurtubi — forklarer at dette handler om
          lojalitet. De troende skal ikke søke sine nærmeste fortrolige blant dem som motarbeider islam. Teksten
          oppfordrer ikke de troende til å elske dem som står utenfor fellesskapet. Tvert imot beskrives et tydelig
          skille mellom «dere» og «dem».
        </p>

        <h3>Jesu undervisning</h3>
        <p>Når dette sammenlignes med Jesu undervisning, blir kontrasten tydelig.</p>
        <BibleBox>
          <em>
            «Men jeg sier dere: Elsk deres fiender, velsign dem som forbanner dere, gjør godt mot dem som hater dere,
            og be for dem som forfølger dere … Han lar sin sol gå opp over onde og gode og lar det regne over
            rettferdige og urettferdige.»
          </em>
          <br /> <strong>Matteus 5:44–45</strong>
        </BibleBox>
        <p>
          Jesus begrenser ikke kjærligheten til familie, venner eller trosfeller. Han utvider kjærlighetsbudet til å
          omfatte mennesker som står i motsetning til oss. Gud viser sin godhet mot alle mennesker, og dette blir
          grunnlaget for den kristnes liv.
        </p>

        <h3>Kjærlighetens retning</h3>
        <p>
          Gjennom de versene der ordet «kjærlighet» forekommer, tegner det seg et mønster: kjærligheten retter seg
          først og fremst mot Allah og mot det Allah har lovet de troende. Vi finner ingen generell befaling om å elske
          alle mennesker eller å elske sine fiender — slik vi finner det i Jesu undervisning.
        </p>

        <h2 id="del3">Hvem elsker Allah?</h2>

        <p>
          Koranen bruker gjentatte ganger uttrykket «Allah elsker ikke …» Like viktig som hvem Allah elsker, er hvem han
          uttrykkelig sier at han ikke elsker.
        </p>

        <h3>Allah elsker ikke overtredere og urettferdige</h3>
        <BibleBox>
          <em>«Allah elsker ikke at onde ord blir uttalt offentlig, unntatt av den som har lidt urett.»</em>
          <br /> <strong>Koranen 4:148</strong>
        </BibleBox>
        <p>
          Koranen nevner gjentatte ganger grupper Allah ikke elsker: overtredere, urettferdige, hovmodige, arrogante,
          svikere og dem som sprer ondskap. Vi finner ikke utsagn som tilsvarer Johannes 3:16 eller Romerne 5:8, hvor
          Gud uttrykkelig elsker verden og viser sin kjærlighet mot syndere.
        </p>

        <h3>Allah elsker dem som kjemper for hans sak</h3>
        <BibleBox>
          <em>«Allah elsker dem som kjemper på Hans vei i sluttede rekker, som om de var en solid mur.»</em>
          <br /> <strong>Koranen 61:4</strong>
        </BibleBox>
        <p>
          Al-Tabari og Ibn Kathir knytter dette til de troendes deltakelse i kamp. Koranens budskap er tydelig: Allah
          elsker dem som kjemper på hans vei. Dette står i kontrast til Jesu undervisning — han fremhever aldri krig som
          et uttrykk for kjærlighet til Gud.
        </p>

        <h3>Barmhjertighet — mot hvem?</h3>
        <BibleBox>
          <em>
            «Muhammed er Allahs sendebud. De som er sammen med ham, er harde mot de vantro, men barmhjertige mot
            hverandre.»
          </em>
          <br /> <strong>Koranen 48:29</strong>
        </BibleBox>
        <p>
          Verset fremstiller to ulike holdninger: barmhjertighet overfor de troende, fasthet og hardhet overfor de
          vantro. Jesu undervisning peker i en annen retning — han gjør kjærligheten universell ved å inkludere både
          venner og fiender.
        </p>

        <h3>Kjærlighet og lydighet</h3>
        <BibleBox>
          <em>
            «Si: Dersom dere elsker Allah, så følg meg. Da skal Allah elske dere og tilgi dere deres synder.»
          </em>
          <br /> <strong>Koranen 3:31–32</strong>
        </BibleBox>
        <p>
          Her blir Allahs kjærlighet til de troende betinget av lydighet mot Muhammed. Dette skiller seg fra Det nye
          testamentets fremstilling — Bibelen lærer ikke at Gud begynner å elske mennesker når de adlyder ham:
        </p>
        <BibleBox>
          <em>«Men Gud viser sin kjærlighet til oss ved at Kristus døde for oss mens vi ennå var syndere.»</em>
          <br /> <strong>Romerne 5:8</strong>
        </BibleBox>
        <p>
          Kjærligheten kommer før menneskets respons. Her ligger en av de mest grunnleggende forskjellene mellom de to
          religionenes forståelse av kjærlighet.
        </p>

        <ImportantBox title="Oppsummering Del 1–3">
          <ul>
            <li>Koranen beskriver Allahs kjærlighet som rettet mot dem som tror, adlyder, gjør godt og kjemper for hans sak.</li>
            <li>Koranen sier gjentatte ganger at Allah ikke elsker overtredere, urettferdige, hovmodige og svikere.</li>
            <li>Koranen gir ingen generell befaling om å elske alle mennesker eller sine fiender.</li>
            <li>Det nye testamentet presenterer Guds kjærlighet som grunnlaget for frelsen — han elsker verden og sendte sin Sønn for å frelse syndere.</li>
          </ul>
        </ImportantBox>

        <h2 id="del4">Bibelens kjærlighetsbudskap</h2>

        <p>
          Forskjellen mellom Koranen og Bibelen handler ikke bare om hvor ofte ordet «kjærlighet» brukes, men om hvem
          Gud elsker, hvorfor han elsker, og hvordan denne kjærligheten kommer til uttrykk. I Bibelen er kjærlighet ikke
          bare én av Guds egenskaper — den er en del av hans vesen.
        </p>
        <BibleBox>
          <em>«Den som ikke elsker, kjenner ikke Gud, for Gud er kjærlighet.»</em>
          <br /> <strong>1. Johannes 4:8</strong>
        </BibleBox>

        <h3>Gud elsker verden</h3>
        <BibleBox>
          <em>
            «For så høyt har Gud elsket verden at han ga sin enbårne Sønn, for at hver den som tror på ham, ikke skal gå
            fortapt, men ha evig liv. For Gud sendte ikke sin Sønn til verden for å dømme verden, men for at verden
            skulle bli frelst ved ham.»
          </em>
          <br /> <strong>Johannes 3:16–17</strong>
        </BibleBox>
        <p>
          Legg merke til hvem Gud elsker. Det står ikke at Gud bare elsker de rettferdige, de lydige eller de
          gudfryktige — han elsker verden. I Johannesevangeliet brukes «verden» om menneskeheten i dens falne tilstand.
          Guds kjærlighet er derfor ikke en belønning for lydighet, men årsaken til at Gud sender sin Sønn.
        </p>

        <h3>Gud elsker syndere</h3>
        <BibleBox>
          <em>«Men Gud viser sin kjærlighet til oss ved at Kristus døde for oss mens vi ennå var syndere.»</em>
          <br /> <strong>Romerne 5:8</strong>
        </BibleBox>
        <p>
          Gud ventet ikke til menneskene omvendte seg. Han ventet ikke til de hadde forbedret livet sitt. Kristus døde
          mens menneskene fortsatt var syndere. Kjærligheten kommer derfor før menneskets respons — dette skiller seg
          fundamentalt fra et system hvor Guds kjærlighet beskrives som rettet mot dem som allerede adlyder ham.
        </p>

        <h3>Guds godhet gjelder alle</h3>
        <BibleBox>
          <em>«Han lar sin sol gå opp over onde og gode og lar det regne over rettferdige og urettferdige.»</em>
          <br /> <strong>Matteus 5:45</strong>
        </BibleBox>
        <p>
          Hver dag opplever både troende og ikke-troende Guds godhet. Denne universelle kjærligheten blir grunnlaget
          for Jesu radikale befaling: «Elsk deres fiender» — den kristne skal elske sine fiender fordi Gud selv viser
          kjærlighet mot mennesker som gjør opprør mot ham.
        </p>

        <h3>Kjærlighet som oppfyller loven</h3>
        <BibleBox>
          <em>
            «Du skal elske Herren din Gud av hele ditt hjerte, av hele din sjel og av all din forstand. Dette er det
            største og første budet. Men det andre er like stort: Du skal elske din neste som deg selv. På disse to
            budene hviler hele loven og profetene.»
          </em>
          <br /> <strong>Matteus 22:37–40</strong>
        </BibleBox>
        <BibleBox>
          <em>«Den som elsker sin neste, har oppfylt loven.»</em>
          <br /> <strong>Romerne 13:8</strong>
        </BibleBox>
        <p>
          Kjærligheten til Gud og kjærligheten til nesten kan ikke skilles fra hverandre. Bibelen gjør kjærligheten til
          selve kjennetegnet på den som kjenner Gud.
        </p>

        <h3>Kjærligheten viser seg på korset</h3>
        <BibleBox>
          <em>«Ingen har større kjærlighet enn den som gir sitt liv for vennene sine.»</em>
          <br /> <strong>Johannes 15:13</strong>
        </BibleBox>
        <p>
          Guds kjærlighet er ikke bare ord — den blir synlig gjennom Jesu liv, død og oppstandelse. Jesus kom ikke bare
          for å undervise om kjærlighet. Han viste kjærligheten ved å gi sitt liv. På korset tok Kristus syndens dom på
          seg og døde som menneskenes stedfortreder. Tre dager senere stod han opp fra de døde.
        </p>
        <p>
          Evangeliet handler derfor ikke først og fremst om hva mennesker skal gjøre for Gud — det handler om hva Gud
          allerede har gjort for mennesker gjennom Jesus Kristus.
        </p>

        <h2 id="del5">Jesus Kristus og evangeliet</h2>

        <p>
          Den største forskjellen mellom islam og kristendommen handler ikke først og fremst om etikk eller moral. Den
          handler om Jesus Kristus. Begge religioner omtaler Jesus, anerkjenner hans jomfrufødsel og beskriver ham som
          Messias. Likevel stanser likhetene der — Koranen og Bibelen gir to grunnleggende forskjellige svar på hvem
          Jesus er og hva han kom for å gjøre.
        </p>

        <h3>Hvem er Jesus?</h3>
        <p>
          Koranen omtaler Jesus (&apos;Isa) som en profet og Messias, men avviser at han er Guds Sønn eller Gud åpenbart i
          menneskelig skikkelse. Koranen 5:72–73 avviser både Jesu guddom og treenighetslæren.
        </p>
        <p>Bibelen presenterer et helt annet bilde:</p>
        <BibleBox>
          <em>«I begynnelsen var Ordet. Ordet var hos Gud, og Ordet var Gud … Og Ordet ble menneske og tok bolig iblant oss.»</em>
          <br /> <strong>Johannes 1:1 og 1:14</strong>
        </BibleBox>
        <p>
          Jesus er ikke bare en profet som forkynner Guds ord — han er Ordet som ble menneske. Gjennom hele Det nye
          testamentet tilber, tilgir og mottar han tilbedelse og gjør krav på en autoritet som tilhører Gud alene. Det
          nye testamentet fremstiller Jesus som Gud som kom til verden for å frelse menneskene.
        </p>

        <h3>Korset</h3>
        <p>
          Den neste grunnleggende forskjellen gjelder korset. Koranen 4:157 sier at Jesus ikke ble korsfestet, men at
          det bare fremsto slik for menneskene. Det nye testamentet lærer det motsatte:
        </p>
        <BibleBox>
          <em>«Kristus døde for våre synder etter Skriftene, han ble begravet, og han stod opp den tredje dagen etter Skriftene.»</em>
          <br /> <strong>1. Korinterbrev 15:3–4</strong>
        </BibleBox>
        <p>
          Evangeliet hviler på tre historiske hendelser: Kristus døde. Kristus ble begravet. Kristus stod opp igjen.
          Faller én av disse bort, faller evangeliet. Koranens avvisning av korsfestelsen berører derfor selve
          grunnlaget for den kristne tro.
        </p>

        <h3>Guds kjærlighet åpenbart på korset</h3>
        <BibleBox>
          <em>
            «Ved dette ble Guds kjærlighet åpenbart blant oss, at Gud sendte sin enbårne Sønn til verden for at vi skulle
            leve ved ham. Ja, dette er kjærligheten: Ikke at vi har elsket Gud, men at han har elsket oss og sendt sin
            Sønn til soning for våre synder.»
          </em>
          <br /> <strong>1. Johannes 4:9–10</strong>
        </BibleBox>
        <p>Kjærligheten begynner ikke med mennesket — den begynner hos Gud. Det er Gud som tar initiativet.</p>

        <h3>To forskjellige budskap</h3>
        <ImportantBox title="Koranen og Bibelen side om side">
          <ul>
            <li>Koranen avviser Jesu guddom — Bibelen bekjenner at Jesus er Gud kommet i kjød.</li>
            <li>Koranen avviser korsfestelsen — Bibelen forkynner korset som sentrum i Guds frelsesplan.</li>
            <li>Koranen peker mot lydighet som veien til Allahs velbehag — Evangeliet peker på Kristi fullbrakte verk som grunnlaget for frelsen.</li>
            <li>Koranen lærer at mennesket skal underordne seg Allah — Evangeliet forkynner at Gud selv kom til menneskene for å frelse dem.</li>
          </ul>
        </ImportantBox>
        <p>
          Forskjellen mellom islam og kristendommen handler ikke bare om ulike religiøse tradisjoner. Den handler om to
          grunnleggende forskjellige budskap om Gud, mennesket, synden og frelsen.
        </p>

        <ImportantBox title="Avslutning">
          Gjennom denne artikkelen har vi undersøkt hvordan Koranen omtaler kjærlighet og sammenlignet dette med Bibelens budskap.
          Koranen fremstiller kjærligheten til Allah og Allahs kjærlighet til bestemte mennesker. Bibelen presenterer derimot Guds kjærlighet som grunnlaget for hele frelseshistorien: Gud elsket verden — derfor sendte han sin Sønn — Kristus døde for syndere — han stod opp igjen.
          Derfor er kristendommens budskap ikke først og fremst en oppfordring til å elske Gud, men en forkynnelse av at Gud elsket oss først.
        </ImportantBox>

        <BibleBox>
          <em>«Vi elsker fordi han elsket oss først.»</em>
          <br /> <strong>1. Johannes 4:19</strong>
        </BibleBox>
      </ArticleLayout>

      <section id="kommentarer" className="py-[120px]">
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
