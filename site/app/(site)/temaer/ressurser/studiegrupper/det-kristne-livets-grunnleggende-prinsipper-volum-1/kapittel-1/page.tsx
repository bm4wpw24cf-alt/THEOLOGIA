import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Kapittel1Infographic } from "./Kapittel1Infographic";

export const metadata: Metadata = {
  title: "Kapittel 1 – Menneskelivets mysterium | THEOLOGIA",
  description: "Kapittel 1 i Det kristne livets grunnleggende prinsipper – Volum 1 om menneskelivets mysterium og Guds frelsesplan.",
};

const OVERVIEW_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1";
const PREV_HREF = OVERVIEW_HREF;
const NEXT_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1/kapittel-2";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-[780px] rounded-radius border border-border bg-white p-6 shadow-sm">
      <h2 className="mb-4 font-serif text-[1.8rem] text-ink">{title}</h2>
      <div className="space-y-4 text-[1.02rem] leading-[1.9] text-text">{children}</div>
    </section>
  );
}

export default function Kapittel1Page() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Studiegrupper", href: "/temaer/ressurser/studiegrupper" },
          { label: "Volum 1", href: OVERVIEW_HREF },
          { label: "Kapittel 1" },
        ]}
      />

      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="grid grid-cols-[1fr_240px] items-start gap-12 max-[1100px]:grid-cols-[1fr_200px] max-[720px]:grid-cols-1">
            <section>
              <Link href={OVERVIEW_HREF} className="mb-5 flex items-center gap-1.5 font-sans text-[.88rem] font-semibold text-gold hover:text-gold-dark">
                <span aria-hidden="true">←</span> Tilbake til studieoversikt
              </Link>

              <span className="mb-3.5 inline-block font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">★ KAPITTEL 1</span>
              <h1 className="mb-4 text-[clamp(1.9rem,3vw,2.5rem)]">Menneskelivets mysterium</h1>
              <p className="mb-4.5 max-w-[60ch] text-[1.02rem] leading-[1.8] text-text">
                I dette første kapitlet ser vi på Guds plan for mennesket, menneskets fall, Kristi frelsesverk og det mål Gud har med mennesket: å gjenopprette mennesket til å leve i Guds liv og til å få del i hans fullendelse.
              </p>
              <div className="flex flex-wrap gap-7 border-y border-border py-5.5 max-[720px]:gap-5">
                {[
                  { label: "Presentasjon" },
                  { label: "Bibelens grunnlag" },
                  { label: "Undervisning" },
                  { label: "Kommentar" },
                ].map((item) => (
                  <div key={item.label} className="font-sans text-[.92rem] text-text">
                    {item.label}
                  </div>
                ))}
              </div>
            </section>

            <aside className="max-[720px]:mx-auto max-[720px]:max-w-[180px]">
              <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
                <div className="mb-2 font-sans text-[.72rem] font-bold tracking-[1.8px] text-gold-dark uppercase">Volum 1</div>
                <div className="font-serif text-[1.7rem] leading-[1.2] text-ink">Kapittel 1</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-[70px]">
        <div className="mx-auto w-[min(1180px,92%)]">
          <div className="mx-auto flex w-full max-w-[900px] flex-col gap-5">
            <Section title="Presentasjon">
              <p>
                Menneskelivets mysterium kan bare forstås når vi ser det i lys av Guds hensikt. Gud skapte mennesket ikke som et vilkårlig vesen, men som det sted der han kunne uttrykke seg, leve ut sin kjærlighet og gjøre sin egen livserfaring kjent i et menneske. Derfor er mennesket ikke bare et enkelt individ, men et mysterium som bærer Guds plan i seg.
              </p>
              <p>
                Når mennesket faller i synd, blir det skilt fra Gud. Men Guds plan er ikke oppgitt. Han kom i Kristus for å gjenopprette det som var gått tapt. Det er dette som danner grunnlaget for hele det kristne liv: Gud ønsker å utfolde sitt liv i mennesket, og han gjør det gjennom Kristus og i den troende.
              </p>
            </Section>

            <Section title="Bibelens grunnlag">
              <p>
                Guds plan med mennesket går tilbake til skapelsen: «La oss gjøre mennesket i vårt bilde...» <strong>1 Mos 1:26</strong>. Mennesket er skapt til å være Guds bilde og å bære hans hensikt. Men da mennesket falt, ble det skilt fra Gud; «alle har syndet» <strong>Rom 3:23</strong>, og det var dette som førte til død og fremmedgjøring fra Gud. Her begynner frelsens historie: Gud kom i Kristus for å gjenløse mennesket.
              </p>
              <p>
                «Og ordet ble kjøtt og bodde iblandt oss…» <strong>Joh 1:14</strong>. Kristus ble menneske for å fullføre Guds frelsesverk. Han gikk inn i menneskenes historie, levde et menneskelig liv, døde på korset, ble gravlagt, oppstod og drog opp til himmelen. Alt dette var for menneskets gjenløsning og for at Gud kunne gi mennesket sitt liv.
              </p>
            </Section>

            <Section title="Undervisningen">
              <div className="mx-auto w-full max-w-[900px]">
                <Kapittel1Infographic />
              </div>
              <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">1. Guds plan</h3>
              <p>
                Gud vil uttrykke seg gjennom mennesket. Han vil ikke bare gjøre noe for mennesket, men gjøre noe i mennesket. Dette er ikke først og fremst en moralsk eller intellektuell bekjennelse, men et livets mysterium. Gud ønsker å være i mennesket, og mennesket skal leve i ham.
              </p>

              <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">2. Mennesket</h3>
              <p>
                Mennesket er mer enn en kropp. Det er et levende vesen som består av kropp, sjel og ånd. Vi finner dette i Bibelen i ulike sammenhenger. Den menneskelige virkelighet er ikke delt i to uforbindelige områder, men en enhet som er skapt av Gud. Likevel blir det ofte praktisk hjelpsomt å skille mellom de ulike nivåene i mennesket.
              </p>

              <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">3. Menneskets fall</h3>
              <p>
                I synden brøt mennesket forholdet til Gud. Det mistet sin opprinnelige tilstand og ble fremmed for ham. Synden påvirket hele mennesket – det indre, det følelsesmessige og det praktiske. Derfor trenger mennesket ikke bare undervisning, men gjenløsning. Frelsen er ikke oppdragelse av et sett av regler, men gjenopprettelse av et forhold til Gud.
              </p>

              <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">4. Kristi gjenløsning for Guds utdeling</h3>
              <p>
                Kristus kom i inkarnasjon, levde som menneske, døde på korset, ble gravlagt, oppstod og gikk opp til himmelen. Hensikten var ikke bare at mennesket skulle bli frelst fra dom, men at Gud kunne dele sitt liv, sin natur og sin vilje med mennesket. Gjenløsningen er derfor ikke bare en rettferdiggjøring, men en inntakelse av Gud i mennesket.
              </p>

              <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">5. Menneskets gjenfødelse</h3>
              <p>
                Mennesket kan få Guds liv gjennom Kristus. Gjenfødelsen er ikke bare en formell tilslutning til kristendommen, men at det åndelige livsområde i mennesket blir vekket til liv. «Den som blir født av Gud, synder ikke» <strong>1 Joh 3:9</strong>. Guds liv er ikke bare en idé, men en ny livsvirkelighet i mennesket.
              </p>

              <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">6. Guds fulle frelse</h3>
              <p>
                Guds frelse er ikke begrenset til sjelen alene. Han vil vinne hele mennesket – ånd, sjel og kropp – og fullende det i Kristus. «Han vil fylle deg med kjærlighet og glede og fred» <strong>Rom 15:13</strong>. Det er ikke en del av mennesket som skal frelses, men mennesket som en helhet i forhold til Gud. Dette er selve målet for den kristne livserfaring: at Guds liv får virke i hele mennesket.
              </p>
            </Section>

            <Section title="Kommentar">
              <p>
                Det er viktig å skille mellom det Bibelen uttrykkelig sier, og den teologiske modellen som oppstår når vi drøfter menneskets natur. En velkjent modell er <strong>trikotomi</strong>: mennesket består av kropp, sjel og ånd. En annen er <strong>dikotomi</strong>: mennesket består av kropp og sjel/ånd som et mer samlet hele. Begge modellene forsøker å håndtere det samme mysterium, men de gjør det på forskjellige måter.
              </p>
              <p>
                Den teologiske modellen er nyttig, men den må brukes med forsiktighet. Bibelen lærer klart at mennesket er et helt, men at det også har forskjellige dimensjoner. Det er derfor korrekt å si at mennesket er en helhetlig enhet, uten å være blind for at det også kan beskrives i komponenter. Det er ikke så mye et spørsmål om «enten» eller «eller», som et spørsmål om hvordan vi taler om det samme mennesket fra forskjellige synsvinkler.
              </p>
              <p>
                Det er derfor også nyttig å merke seg <strong>1 Tess 5:23</strong>: «Måtte hele deres ånd, sjel og kropp bevares feilfrie til vår Herre Jesu Kristi komme.» Her ser vi en helhetlig betraktning av mennesket, hvor ånd, sjel og kropp inngår i samme liv. <strong>Hebr 4:12</strong> viser at Guds ord er levende og skarpt, og det skiller sjel og ånd fra hverandre. <strong>1 Mos 2:7</strong> beskriver hvordan mennesket ble gjort levende da Gud blåste liv i det. Her er det også naturlig å se på det hebraiske <em>nephesh</em> («sjel»), det greske <em>psychē</em> og <em>pneuma</em> («ånd»).
              </p>
              <p>
                Dette betyr ikke at den teologiske modellen er feil, men at vi bør være tydelige på når vi beveger oss fra <strong>bibelsk tekst</strong> til <strong>teologisk tolkning</strong>. Det Bibelen uttrykkelig sier, er at mennesket er skapt av Gud og er et levende vesen. Den teologiske modellen er en påfølgende formulering som forsøker å gi systematisk klarhet. Det er derfor riktig å respektere teksten først, og deretter bruke modellen som en hjelperedskap, ikke som et løft over Skriften.
              </p>
            </Section>

            <Section title="Viktige bibeltekster">
              <ul className="list-disc pl-6">
                <li>1 Mos 1:26–27 – Mennesket skapes i Guds bilde.</li>
                <li>1 Mos 2:7 – Gud blåser liv i mennesket.</li>
                <li>Rom 5:12–19 – Synd og frelse som følge av Adams fall og Kristi seier.</li>
                <li>Joh 1:14 – Kristus blir kjøtt og bor iblandt oss.</li>
                <li>1 Tess 5:23 – Ånd, sjel og kropp.</li>
                <li>Hebr 4:12 – Guds ord skiller sjel og ånd.</li>
              </ul>
            </Section>

            <Section title="Til ettertanke">
              <ul className="list-disc pl-6">
                <li>Hva viser det om mennesket at Gud ønsket å uttrykke seg gjennom det?</li>
                <li>Hvordan ser du sammenhengen mellom det mennesket er skapt til, og det det blir i synden?</li>
                <li>Hva betyr det for deg at Kristus kom for å gjenopprette mennesket og give Gud sitt liv?</li>
                <li>Hvordan skiller den bibelske beskrivelsen av mennesket seg fra den teologiske modellen?</li>
              </ul>
            </Section>

            <Section title="Ressurser">
              <p>
                Bruk dette kapittelet sammen med Bibelen, spesielt de utvalgte skriftstedene, og bruk eventuelle visuelle oversikter som hjelper til å se sammenhengen mellom skapelse, fall, gjenløsning og full frelse.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}
