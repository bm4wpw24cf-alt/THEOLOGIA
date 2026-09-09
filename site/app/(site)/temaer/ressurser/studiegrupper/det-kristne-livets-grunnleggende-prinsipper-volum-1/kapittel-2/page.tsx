import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Kapittel 2 – Forvissningen, sikkerheten og gleden i frelsen | THEOLOGIA",
  description: "Kapittel 2 i Det kristne livets grunnleggende prinsipper – Volum 1 om forvissningen, sikkerheten og gleden i frelsen.",
};

const OVERVIEW_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1";
const PREV_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1/kapittel-1";
const NEXT_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1/kapittel-3";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-[780px] rounded-radius border border-border bg-white p-6 shadow-sm">
      <h2 className="mb-4 font-serif text-[1.8rem] text-ink">{title}</h2>
      <div className="space-y-4 text-[1.02rem] leading-[1.9] text-text">{children}</div>
    </section>
  );
}

export default function Kapittel2Page() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Studiegrupper", href: "/temaer/ressurser/studiegrupper" },
          { label: "Volum 1", href: OVERVIEW_HREF },
          { label: "Kapittel 2" },
        ]}
      />

      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="grid grid-cols-[1fr_240px] items-start gap-12 max-[1100px]:grid-cols-[1fr_200px] max-[720px]:grid-cols-1">
            <section>
              <Link href={OVERVIEW_HREF} className="mb-5 flex items-center gap-1.5 font-sans text-[.88rem] font-semibold text-gold hover:text-gold-dark">
                <span aria-hidden="true">←</span> Tilbake til studieoversikt
              </Link>

              <span className="mb-3.5 inline-block font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">★ KAPITTEL 2</span>
              <h1 className="mb-4 text-[clamp(1.9rem,3vw,2.5rem)]">Forvissningen, sikkerheten og gleden i frelsen</h1>
              <p className="mb-4.5 max-w-[60ch] text-[1.02rem] leading-[1.8] text-text">
                Frelsen er ikke bare en historisk hendelse, men en personlig realitet i den troende. Denne sannheten gir ikke bare trygghet, men glede, vishet og frimodighet foran Gud.
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
                <div className="font-serif text-[1.7rem] leading-[1.2] text-ink">Kapittel 2</div>
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
                Et barn av Gud trenger ikke leve i usikkerhet. Han er ikke et offer for tvil, men en som er født igjen av Gud og står i Kristus. Frelsen er Guds handling i Kristus, og den troende kan erfare den som et sikkert og levende forhold til Gud.
              </p>
              <p>
                Dette kapittelet handler om tre ting som hører sammen: forvissning, sikkerhet og glede. De kommer ikke fra menneskets egen styrke, men fra Guds ord, Kristi verk og den hellige ånds vitnesbyrd. Når en troende forstår dette, blir hans liv mer frimodig, lykkelig og rolig i Gud.
              </p>
            </Section>

            <Section title="Bibelens grunnlag">
              <p>
                «Jeg har skrevet dette til dere for at dere skal vite at dere har evig liv, dere som tror på Guds Sønn.» <strong>1 Joh 5:13</strong>. Dette er et av de klareste ordene om forvissning. Gud vil at den troende skal vite. Han vil ikke ha tvil og usikkerhet som det normale for et barn av Gud.
              </p>
              <p>
                «Hvem skal dømme? Kristus Jesus, han som døde, ja mer enn det, han er oppstått og er ved Guds høyre hånd, og han går i forbønn for oss.» <strong>Rom 8:34</strong>. Sikkerheten bygger ikke på vår egen stabilitet, men på Kristi stedfortrederrolle og hans evige virksomhet. Han er alltid vår forlover.
              </p>
            </Section>

            <Section title="Undervisningen">
              <p>
                Forvissning er ikke et spørsmål om å føle noe bestemt hver dag. Det er en grunnfestet sikkerhet i Guds ord. Den troende kan vite at han har evig liv fordi Gud har gitt dette løfte. Når vi bygger livserfaringen på Guds løfte, blir troen ikke et skuespill, men en solid forankring.
              </p>
              <p>
                Sikkerhet i Kristus er ikke stolthet over oss selv, men ro i ham. Han holder fast i dem som er gitt til ham. «Jeg har gitt dem den herlighet du gav meg…» <strong>Joh 17:22</strong>. Den troende står ikke i egen kraft, men i Guds kraft. Derfor er sikkerheten i frelsen ikke et resultat av perfekt oppførsel, men Guds trofasthet.
              </p>
              <p>
                Gleden i frelsen er ikke en skjult eller kortvarig følelse. Den er et naturlig resultat av at vi har funnet Gud i Kristus. Når en troende forstår hva frelsen er og hva Gud har gjort, blir hjertet fylt med takk, hvile og liv. Gleden er ikke en flyktig emosjon, men et livsinnhold som kommer fra Guds nærvær.
              </p>
            </Section>

            <Section title="Kommentar">
              <p>
                En troende kan ikke leve i trygghet alene ved å mene det rette eller føle det rette. Tryggheten kommer fra Guds ord og Kristi verk. Derfor gjør Bibelen en tydelig skille mellom den troendes erfaring og Guds realitet. Vi lever ikke i en trygghet vi har skapt, men i en trygghet Gud har gitt. «For Gud er det ikke mulig å lyve» <strong>Hebr 6:18</strong>. Dette er selve grunnlaget for forvissning.
              </p>
              <p>
                Det er også viktig å merke at frelsens trygghet ikke er en grunn til uansvarlighet. Den troende er ikke fri for omvendelse, lydighet eller livetsvandring. Men omvendelse er ikke en måte å bli trygg på; trygghet er en følge av Guds virkelighet i oss. Den troende blir lettere i livet når han forstår at Gud har bestemt ham i Kristus og har gitt ham evig liv.
              </p>
              <p>
                Gleden i frelsen er derfor ikke en enkel og uforstyrret følelse gjennom hele livet. Den troende kan møte vanskeligheter, mangler og prøvelser. Men i midten av disse står frelsen som en grunn og som et sted å hvile. Når vi ser på Kristus i hans verk, blir hjertet fylt av fred og glede.
              </p>
            </Section>

            <Section title="Viktige bibeltekster">
              <ul className="list-disc pl-6">
                <li>Joh 10:27–29 – Den troende er i Guds hånd.</li>
                <li>Rom 8:1–4 – Det er ingen fordømmelse for dem som er i Kristus.</li>
                <li>Rom 8:31–39 – Ingen kan skille oss fra Guds kjærlighet.</li>
                <li>1 Joh 5:13 – Guds barn skal vite at de har evig liv.</li>
                <li>Hebr 6:17–20 – Guds løfte og Kristi evige forlening.</li>
              </ul>
            </Section>

            <Section title="Til ettertanke">
              <ul className="list-disc pl-6">
                <li>Hva betyr det at Gud vil at vi skal vite at vi har evig liv?</li>
                <li>Hvordan kan vi skille mellom menneskelig selvtillit og sikkerhet i Kristus?</li>
                <li>Hvilken betydning har tilgivelsen og Guds kjærlighet for vår glede?</li>
                <li>Hvordan påvirker visheten om frelsen vår bønn, liv og daglig praksis?</li>
              </ul>
            </Section>

            <Section title="Ressurser">
              <p>
                Denne delen av boken kan leses sammen med de sentrale skriftstedene om frelse, trygghet og Guds kjærlighet. Det er også nyttig å sammenholde disse tekstene med personlig bøn og refleksjon over Guds løfte.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}
