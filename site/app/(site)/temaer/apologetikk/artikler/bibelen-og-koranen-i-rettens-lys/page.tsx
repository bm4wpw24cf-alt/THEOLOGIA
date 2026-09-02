import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { BibleBox } from "@/components/articles/BibleBox";
import { ImportantBox } from "@/components/articles/ImportantBox";
import { getArticleBySlug } from "@/lib/articles";
import { Comments } from "@/components/comments/Comments";

const article = getArticleBySlug("bibelen-og-koranen-i-rettens-lys")!;

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
  { id: "kap2", label: "Hvordan vurderer en domstol bevis?" },
  { id: "kap3", label: "Bibelen som bevismateriale" },
  { id: "kap4", label: "Koranen som bevismateriale" },
  { id: "kap5", label: "Prinsippet om uavhengige vitner" },
  { id: "kap6", label: "En illustrasjon — to rettssaker" },
  { id: "kap7", label: "Betyr dette at Bibelen automatisk vinner?" },
  { id: "kap8", label: "Bibelens og Koranens særpreg" },
  { id: "kap9", label: "Domstolens konklusjon" },
];

export default function BibelenOgKoranenIRettensLysPage() {
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
        subtitle="En vurdering fra et domstolsperspektiv"
        meta="Av Eirik Storesletten"
        toc={TOC}
        intro={
          <>
            <p>
              Nei. En domstol kan ikke avgjøre om Gud har talt, om mirakler har skjedd eller om en åpenbaring virkelig
              kommer fra Gud. Slike spørsmål ligger utenfor rettens kompetanse.
            </p>
            <p>
              Derimot kan en domstol vurdere bevis, vitneutsagn, dokumentasjon og historisk troverdighet. Det er derfor
              interessant å spørre: Hvis Bibelen og Koranen ble vurdert som bevismateriale i en rettssal, hvordan ville de
              blitt vurdert?
            </p>
          </>
        }
      >
        <h2 id="kap1">Kan en domstol avgjøre hvilken religion som er sann?</h2>
        <p>
          Denne artikkelen handler ikke om hvilken religion som er sann, men om hvilke prinsipper en domstol normalt
          anvender når den vurderer vitneforklaringer.
        </p>

        <h2 id="kap2">Hvordan vurderer en domstol bevis?</h2>
        <p>I de fleste moderne rettssystemer vurderes blant annet:</p>
        <ul>
          <li>Antall vitner</li>
          <li>Om vitnene er uavhengige</li>
          <li>Om vitnene kan kryssforhøres mot andre kilder</li>
          <li>Om forklaringene stemmer overens i hovedtrekk</li>
          <li>Om de støttes av annen dokumentasjon</li>
          <li>Om det finnes ytre bekreftelser</li>
        </ul>
        <p>En domstol spør ikke først: «Hvor vakker er historien?» Den spør: «Hvor godt er den dokumentert?»</p>

        <h2 id="kap3">Bibelen som bevismateriale</h2>
        <p>
          Bibelen er ikke én bok. Den består av 66 bøker i protestantisk tradisjon, skrevet over omtrent 1500 år. Forfatterne
          kom fra svært ulike miljøer:
        </p>
        <ul>
          <li>Konger, profeter og prester</li>
          <li>Fiskere, embetsmenn og leger</li>
          <li>Hyrder fra ulike tidsperioder og steder</li>
        </ul>
        <p>Tekstene ble skrevet på hebraisk, arameisk og gresk, og stammer fra områder i Asia, Afrika og Europa.</p>
        <p>Fra et juridisk perspektiv betyr dette at man har mange forskjellige vitner som skriver gjennom en lang historisk periode.</p>

        <h2 id="kap4">Koranen som bevismateriale</h2>
        <p>
          Koranen har en helt annen tilblivelse. Ifølge islam ble hele Koranen åpenbart til én person, Muhammad, over
          omtrent 23 år. Muslimer tror at engelen Gabriel overleverte budskapet. Andre mennesker kunne bekrefte at
          Muhammad forkynte budskapet, men ingen andre var vitner til selve åpenbaringen.
        </p>
        <p>Fra et juridisk perspektiv hviler derfor hele den sentrale påstanden på én persons vitneutsagn.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-[var(--line)] bg-[var(--white)] p-5">
            <p className="mb-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--gold)]">Bibelen</p>
            <h3 className="text-xl font-medium text-[var(--ink)]">Mange vitner</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              66 bøker, rundt 40 forfattere, skrevet over 1500 år på tre språk fra tre kontinenter.
            </p>
          </div>
          <div className="rounded-lg border border-[var(--line)] bg-[var(--white)] p-5">
            <p className="mb-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--gold)]">Koranen</p>
            <h3 className="text-xl font-medium text-[var(--ink)]">Én mottaker</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Åpenbart til Muhammad alene over 23 år. Andre bekreftet forkynnelsen, men ikke åpenbaringen.
            </p>
          </div>
        </div>

        <h2 id="kap5">Prinsippet om uavhengige vitner</h2>
        <p>
          Et grunnleggende prinsipp i rettsvesenet er at flere uavhengige vitner vanligvis har større bevisverdi enn ett
          enkelt vitne. Det betyr ikke at flertallet alltid har rett — hvis ti personer har avtalt en løgn, er ikke
          vitneutsagnene uavhengige.
        </p>
        <p>
          Men dersom vitnene ikke kjenner hverandre, lever i ulike tidsperioder, skriver selvstendig og likevel peker mot
          den samme hovedhistorien, øker normalt bevisverdien. Dette prinsippet brukes også innen historieforskning.
        </p>

        <BibleBox>
          <em>«Hvor godt er det dokumentert?» — ikke «Hvor vakker er historien?»</em>
          <br /> <strong>Domstolens grunnspørsmål</strong>
        </BibleBox>

        <h2 id="kap6">En illustrasjon — to rettssaker</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-[var(--line)] bg-[var(--white)] p-5">
            <p className="mb-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--gold)]">Sak A</p>
            <h3 className="text-xl font-medium text-[var(--ink)]">40 vitner</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              40 vitner møter i retten. De levde over mer enn tusen år, kommer fra ulike samfunnslag, og peker mot den
              samme overordnede fortellingen uten å være ordrette kopier av hverandre.
            </p>
          </div>
          <div className="rounded-lg border border-[var(--line)] bg-[var(--white)] p-5">
            <p className="mb-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--gold)]">Sak B</p>
            <h3 className="text-xl font-medium text-[var(--ink)]">Én person</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Én person møter i retten og sier: «En engel åpenbarte dette for meg.» Ingen andre observerte samtalen. Andre
              kan bare bekrefte at han fortalte historien.
            </p>
          </div>
        </div>

        <p>
          En domstol vil ikke automatisk tro sak A, og ikke automatisk avvise sak B. Men den vil normalt si: Flere
          uavhengige vitner gir et sterkere utgangspunkt enn ett enkelt vitne — forutsatt at vitnene fremstår som
          troverdige og at forklaringene støttes av annen dokumentasjon.
        </p>

        <h2 id="kap7">Betyr dette at Bibelen automatisk vinner?</h2>
        <p>Nei. En domstol vurderer ikke bare antall vitner. Den vurderer også:</p>
        <ul>
          <li>Indre konsistens</li>
          <li>Troverdighet og motiv</li>
          <li>Historisk bekreftelse</li>
          <li>Mulige motsigelser</li>
          <li>Dokumentasjon</li>
        </ul>
        <p>
          Hvis mange vitner motsier hverandre på avgjørende punkter, svekkes bevisverdien. Hvis ett vitne støttes av svært
          sterk objektiv dokumentasjon, kan også ett vitne være overbevisende. Antall alene avgjør derfor aldri en sak.
        </p>

        <h2 id="kap8">Bibelens og Koranens særpreg</h2>

        <h3>Bibelens særpreg</h3>
        <p>
          Det som gjør Bibelen spesiell, er kombinasjonen av mange forfattere, lang tidsperiode, ulike kulturer, flere
          språk og en gjennomgående fortelling om Gud, Israel, Messias og frelsen. Dette er uvanlig i verdenslitteraturen.
          Fra et historisk perspektiv representerer Bibelen derfor et omfattende og sammensatt vitnemateriale.
        </p>

        <h3>Koranens særpreg</h3>
        <p>
          Koranens styrke ligger et annet sted. Den fremstår som én sammenhengende tekst med én stemme. Muslimer ser dette
          som et tegn på dens guddommelige opprinnelse. Fra et juridisk perspektiv innebærer dette samtidig at den
          avgjørende påstanden — at Gud talte gjennom Gabriel til Muhammad — i hovedsak bygger på én persons vitnesbyrd.
        </p>

        <h2 id="kap9">Domstolens konklusjon</h2>
        <p>Hvis en domstol kun vurderte bevisstruktur, uten å ta stilling til teologi, ville den sannsynligvis legge til grunn noen generelle prinsipper:</p>
        <ul>
          <li>Flere uavhengige vitner har normalt større bevisverdi enn ett vitne</li>
          <li>Vitnenes troverdighet er viktigere enn antallet alene</li>
          <li>Uavhengig bekreftelse styrker et vitneutsagn</li>
          <li>Historiske og arkeologiske bekreftelser øker bevisverdien</li>
          <li>Ekstraordinære påstander krever sterke bevis</li>
        </ul>

        <ImportantBox title="Avslutning">
          <p>
            Domstoler er ikke satt til å avgjøre religiøs sannhet, men de er satt til å vurdere bevis. Ser man på Bibelen
            og Koranen gjennom denne linsen, er den viktigste forskjellen ikke først og fremst innholdet, men bevisstrukturen.
          </p>
          <p>
            Bibelen presenterer et mangfold av vitnesbyrd skrevet av mange forfattere gjennom århundrer. Koranen
            presenterer én sammenhengende åpenbaring formidlet gjennom én profet.
          </p>
          <p>
            Fra et rent juridisk bevisperspektiv er det et etablert prinsipp at flere uavhengige og troverdige vitner
            normalt gir et sterkere bevisgrunnlag enn ett enkelt vitne. Hvilken modell man finner mest overbevisende, vil
            avhenge av hvilke kriterier man mener bør veie tyngst.
          </p>
        </ImportantBox>

        <ImportantBox title="PDF-status">
          Det finnes ingen ferdig PDF for denne artikkelen i den gamle THEOLOGIA v1-katalogen, så denne migreringen
          inneholder teksten uten et PDF-vedlegg.
        </ImportantBox>
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
