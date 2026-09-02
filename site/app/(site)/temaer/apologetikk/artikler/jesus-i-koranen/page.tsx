import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { BibleBox } from "@/components/articles/BibleBox";
import { ImportantBox } from "@/components/articles/ImportantBox";
import { getArticleBySlug } from "@/lib/articles";
import { Comments } from "@/components/comments/Comments";

const article = getArticleBySlug("jesus-i-koranen")!;

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
  { id: "kap1", label: "Jesus ble født av en jomfru" },
  { id: "kap2", label: "Jesus omtales som ren" },
  { id: "kap3", label: "Jesus helbreder syke og vekker døde" },
  { id: "kap4", label: "Jesus er et tegn for menneskeheten" },
  { id: "kap5", label: "Jesus er en barmhjertighet fra Gud" },
  { id: "kap6", label: "Jesus er vitne over sitt folk" },
  { id: "kap7", label: "Jesus skaper en levende fugl" },
  { id: "kap8", label: "Jesus er Messias" },
  { id: "kap9", label: "Jesus er Guds Ord" },
  { id: "kap10", label: "Jesus er en Ånd fra Gud" },
  { id: "kap11", label: "Jesus ble tatt opp til Gud" },
  { id: "kap12", label: "Jesus skal vende tilbake" },
  { id: "kap13", label: "Samlet vurdering" },
];

export default function JesusIKoranenPage() {
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
        subtitle="Mer enn et vanlig menneske"
        meta="Av Eirik Storesletten"
        toc={TOC}
        intro={
          <>
            <p>
              Mange antar at Koranen fremstiller Jesus (<em>ʿĪsā</em>) som bare en av mange profeter. En nærlesning
              av Koranens egne beskrivelser viser imidlertid at Jesus skiller seg ut på en rekke bemerkelsesverdige
              måter. Ingen annen person i Koranen omtales med den samme kombinasjonen av titler, egenskaper og
              oppgaver.
            </p>
            <p>
              Denne gjennomgangen forsøker ikke å bevise den kristne læren om Jesus ut fra Koranen alene. Målet er å
              undersøke hva Koranen faktisk sier om Jesus, og la teksten tale for seg selv. Spørsmålet er om
              beskrivelsen av Jesus harmonerer med forestillingen om at han bare var en vanlig profet.
            </p>
          </>
        }
      >
        <h2 id="kap1">Jesus ble født av en jomfru</h2>
        <p>Jesus er den eneste personen i Koranen som blir født av en jomfru. Da engelen kunngjør fødselen, svarer Maria:</p>

        <BibleBox>
          <em>«Hvordan kan jeg få en sønn når ingen mann har rørt meg?»</em>
          <br /> <strong>Koranen 19:20</strong>
        </BibleBox>

        <p>
          Koranen beskriver Jesu fødsel som et unikt guddommelig mirakel. Ingen annen profet — heller ikke Muhammad —
          får en slik opprinnelse.
        </p>

        <ImportantBox title="Spørsmål">
          Hvorfor får Jesus en fødsel som skiller ham fra alle andre mennesker og profeter?
        </ImportantBox>

        <h2 id="kap2">Jesus omtales som ren</h2>
        <p>
          Engelen beskriver Jesus som en «ren sønn» (<em>ghulāman zakiyyā</em>). Koranen 19:19.
        </p>
        <p>
          Samtidig finner vi at Muhammad flere steder blir oppfordret til å be Gud om tilgivelse (bl.a. 47:19; 48:2).
          Koranen bruker dermed et språk om Jesus som er bemerkelsesverdig og uten direkte parallell blant profetene.
        </p>

        <ImportantBox title="Spørsmål">
          Hvorfor omtales Jesus på denne måten dersom han bare er én profet blant mange?
        </ImportantBox>

        <h2 id="kap3">Jesus helbreder syke og vekker døde</h2>
        <p>
          Koranen forteller at Jesus helbreder blinde og spedalske og vekker døde. Samtidig understrekes det at dette
          skjer «med Allahs tillatelse». Koranen 3:49; 5:110.
        </p>
        <p>
          Miraklene er likevel ekstraordinære. Ingen annen profet i Koranen beskrives med en tilsvarende kombinasjon
          av helbredelse, oppvekkelse av døde og skapende handlinger.
        </p>

        <ImportantBox title="Spørsmål">
          Hvorfor tillegger Koranen Jesus slike enestående mirakler?
        </ImportantBox>

        <BibleBox>
          <em>«Ingen annen person i Koranen omtales med den samme kombinasjonen av titler, egenskaper og oppgaver.»</em>
          <br /> <strong>Jesus i Koranen — mer enn et vanlig menneske</strong>
        </BibleBox>

        <h2 id="kap4">Jesus er et tegn for menneskeheten</h2>
        <p>
          Jesus omtales som et <em>āyah</em> — et tegn fra Gud. Hele hans liv, fra den mirakuløse unnfangelsen til hans
          tjeneste, fremstilles som et guddommelig tegn for mennesker. Koranen 19:21; 21:91.
        </p>

        <ImportantBox title="Spørsmål">
          Hvorfor har Jesus denne universelle betydningen dersom han bare er en vanlig profet?
        </ImportantBox>

        <h2 id="kap5">Jesus er en barmhjertighet fra Gud</h2>
        <p>
          Jesus beskrives som en <em>rahma</em> — en barmhjertighet fra Gud. Koranen 19:21. Dette viser at Jesu komme
          ikke bare var en profetisk sending, men en særlig manifestasjon av Guds nåde mot menneskene.
        </p>

        <ImportantBox title="Spørsmål">
          Hvorfor omtales Jesus selv som en barmhjertighet, og ikke bare som en budbringer av barmhjertighet?
        </ImportantBox>

        <h2 id="kap6">Jesus er vitne over sitt folk</h2>
        <p>Jesus sier at han var vitne over sitt folk så lenge han var blant dem, og at Gud siden overvåket dem. Koranen 5:117.</p>

        <ImportantBox title="Spørsmål">
          Hvorfor fremheves Jesu vitnerolle på en så særskilt måte?
        </ImportantBox>

        <h2 id="kap7">Jesus skaper en levende fugl</h2>
        <p>Jesus former en fugl av leire og blåser liv i den «med Allahs tillatelse». Koranen 3:49.</p>

        <ImportantBox title="Spørsmål">
          Hvorfor får Jesus utføre en handling som minner om Guds skapende virksomhet?
        </ImportantBox>

        <h2 id="kap8">Jesus er Messias</h2>
        <p>Jesus omtales gjentatte ganger som <em>al-Masīḥ</em> — Messias. Muhammad får aldri denne tittelen. Koranen 4:171.</p>

        <ImportantBox title="Spørsmål">
          Hvorfor er Jesus den eneste som kalles Messias?
        </ImportantBox>

        <h2 id="kap9">Jesus er Guds Ord</h2>
        <p>Jesus omtales som «Hans Ord» (<em>kalimatuhu</em>), som Gud lot komme til Maria. Koranen 4:171.</p>

        <ImportantBox title="Spørsmål">
          Hvorfor omtales ingen annen profet som Guds Ord?
        </ImportantBox>

        <h2 id="kap10">Jesus er en Ånd fra Gud</h2>
        <p>Jesus omtales som «en Ånd fra Ham» (<em>rūḥun minhu</em>). Koranen 4:171.</p>

        <ImportantBox title="Spørsmål">
          Hvorfor beskrives Jesus med en tittel som ingen annen profet får?
        </ImportantBox>

        <h2 id="kap11">Jesus ble tatt opp til Gud</h2>
        <p>Koranen sier at Gud opphøyde Jesus til seg. Koranen 4:157–158.</p>

        <ImportantBox title="Spørsmål">
          Hvorfor blir Jesus opphøyd til Gud på denne måten?
        </ImportantBox>

        <h2 id="kap12">Jesus skal vende tilbake</h2>
        <p>Jesu rolle knyttes til historiens avslutning på en måte som ikke tilskrives Muhammad i Koranen. Koranen 43:61.</p>

        <ImportantBox title="Spørsmål">
          Hvorfor er det Jesus — og ikke Muhammad — som forbindes med endetidens hendelser?
        </ImportantBox>

        <h2 id="kap13">Jesus i Koranen — en unik profil</h2>
        <p>Ingen annen person i Koranen omtales med denne kombinasjonen av titler, egenskaper og oppgaver:</p>

        <div className="mb-8 rounded-none border border-[#d8d0c1] bg-white p-6 text-left shadow-sm">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[#b08d57]">
            Jesu unike titler og egenskaper i Koranen
          </div>
          <ul className="space-y-2 text-[0.95rem] text-[#2c2b2a]">
            <li>– Født av en jomfru</li>
            <li>– Omtalt som ren</li>
            <li>– Messias (<em>al-Masīḥ</em>)</li>
            <li>– Guds Ord (<em>kalimatuhu</em>)</li>
            <li>– En Ånd fra Gud (<em>rūḥun minhu</em>)</li>
            <li>– Et tegn for menneskeheten (<em>āyah</em>)</li>
            <li>– En barmhjertighet fra Gud (<em>rahma</em>)</li>
            <li>– Helbreder syke og vekker døde med Allahs tillatelse</li>
            <li>– Former en levende skapning</li>
            <li>– Opphøyd til Gud</li>
            <li>– Knyttet til endetidens hendelser</li>
          </ul>
        </div>

        <ImportantBox title="Konklusjon">
          Jesus fremstår i Koranen som langt mer enn en vanlig profet. Dette betyr ikke at Koranen uttrykkelig lærer
          den kristne læren om Jesu guddom. Det betyr derimot at Koranens egen beskrivelse av Jesus reiser en viktig
          teologisk utfordring: hvordan kan en person som omtales med så mange unike titler og funksjoner samtidig
          forstås som bare et vanlig menneske? Det er et spørsmål enhver leser av Koranen må ta stilling til.
        </ImportantBox>
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
