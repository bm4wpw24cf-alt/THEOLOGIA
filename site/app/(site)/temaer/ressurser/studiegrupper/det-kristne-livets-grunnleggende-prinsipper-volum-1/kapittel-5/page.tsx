import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Kapittel 5 – Nøkkelen til å oppleve Kristus – den menneskelige ånd | THEOLOGIA",
  description: "Kapittel 5 i Det kristne livets grunnleggende prinsipper – Volum 1 om den menneskelige ånd og hvordan vi opplever Kristus.",
};

const OVERVIEW_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1";
const PREV_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1/kapittel-4";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-[780px] rounded-radius border border-border bg-white p-6 shadow-sm">
      <h2 className="mb-4 font-serif text-[1.8rem] text-ink">{title}</h2>
      <div className="space-y-4 text-[1.02rem] leading-[1.9] text-text">{children}</div>
    </section>
  );
}

export default function Kapittel5Page() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Studiegrupper", href: "/temaer/ressurser/studiegrupper" },
          { label: "Volum 1", href: OVERVIEW_HREF },
          { label: "Kapittel 5" },
        ]}
      />

      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="grid grid-cols-[1fr_240px] items-start gap-12 max-[1100px]:grid-cols-[1fr_200px] max-[720px]:grid-cols-1">
            <section>
              <Link href={OVERVIEW_HREF} className="mb-5 flex items-center gap-1.5 font-sans text-[.88rem] font-semibold text-gold hover:text-gold-dark">
                <span aria-hidden="true">←</span> Tilbake til studieoversikt
              </Link>

              <span className="mb-3.5 inline-block font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">★ KAPITTEL 5</span>
              <h1 className="mb-4 text-[clamp(1.9rem,3vw,2.5rem)]">Nøkkelen til å oppleve Kristus – den menneskelige ånd</h1>
              <p className="mb-4.5 max-w-[60ch] text-[1.02rem] leading-[1.8] text-text">
                Den menneskelige ånd er det mest avgjørende punktet for å erfare Kristus. Her er det ikke spørsmål om en abstrakt teologi, men om hvordan den troende kan møte Gud, ta imot Kristus og leve i ham.
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
                <div className="font-serif text-[1.7rem] leading-[1.2] text-ink">Kapittel 5</div>
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
                Mennesket er skapt til å være et åndelig vesen. Menneskets ånd er det organ som kan motta Gud, forstå ham og være i kontakt med ham. Når vi taler om å oppleve Kristus, er dette det sentrale punktet: Gud vil at vi skal møte ham ikke bare i vår forstand, men i vår ånd.
              </p>
              <p>
                Denne delen av boken viser at ånden er ikke en liten eller sekundær del av mennesket, men den del som gir mennesket adgang til Gud. Derfor er det nokså alvorlig å forstå hva den menneskelige ånd er, og hvordan den kan være levende i forhold til Gud.
              </p>
            </Section>

            <Section title="Bibelens grunnlag">
              <p>
                «Gud er Ånd, og de som tilber ham, må tilbe ham i ånd og sannhet.» <strong>Joh 4:24</strong>. Her får vi det avgjørende prinsippet: tilbedelse er ikke først og fremst en ytre form, men en åndelig og sannhetens realitet. Menneskets ånd er det sted hvor Gud kan bli møtt.
              </p>
              <p>
                «Når den troende ber, må han be i ånd, og han må også be med forstand.» <strong>1 Kor 14:15</strong>. Dette viser at det kristne liv ikke er en ren følelsesmessig eller intellektuell størrelse, men et liv i ånden. Ånden er det sted der Gud kommuniserer med oss og vi kommer til ham.
              </p>
            </Section>

            <Section title="Undervisningen">
              <p>
                Den menneskelige ånd er det innre organ i mennesket som kan motta Gud. Den er ikke en abstrakt idé, men en virkelig menneskelig kapasitet. Gud kan ikke bare bli forstått med forstanden; han vil bli erfart i vår ånd. Derfor er menneskets ånd nøkkelen til å oppleve Kristus.
              </p>
              <p>
                Når vi kommer til Gud i bønn, når vi ber til ham, når vi åpner vår ånd for ham, blir vi i kontakt med livet. Det er i ånden vi kan være i sannhet og i andelig gjenkjenning. Ikke alt som er religiøst eller velmenende, er et liv i ånden. Den menneskelige ånd må være åpnet og vekt for Kristus.
              </p>
              <p>
                Den troende må derfor lære å vende sin ånd til Herren og ikke bare til sine egne tanker eller følelser. En ånd som er vendt mot Gud kan se hans nærvær, ta imot hans liv og bli ført frem i korset og i gleden av hans nærhet. På den måten blir menneskets ånd ikke bare et begrep, men den levende gateway til Kristus.
              </p>
            </Section>

            <Section title="Kommentar">
              <p>
                Det er nødvendig å være presis når vi taler om den menneskelige ånd. Bibelen lærer klart at mennesket har et åndelig nivå, og at Gud kan møtes der. Men det er også viktig å ikke gjøre den teologiske konklusjon til en abstrakt dogmatisk modell som går utover teksten. Det er riktig å si at den menneskelige ånd er det sted i mennesket som kan møte Gud. Det er også riktig å si at ånd, sjel og kropp hører sammen i mennesket. Men vi bør være tydelige når vi går fra tekst til teologisk tolkning.
              </p>
              <p>
                Det er derfor helt sant å tale om den menneskelige ånd som en nøkkel til å oppleve Kristus, men dette skal aldri forstås som at mennesket i seg selv kan skape spiritualitet eller åndelig liv. Det er Kristus som opplyser og velsigner den menneskelige ånd, og det er Guds liv som gjør den åndelige virkelighet mulig. Ånden er ikke en selvstendig kraft i mennesket, men et menneskelig redskap som kan motta Guds liv.
              </p>
            </Section>

            <Section title="Viktige bibeltekster">
              <ul className="list-disc pl-6">
                <li>Joh 4:24 – tilbedelse i ånd og sannhet.</li>
                <li>1 Kor 14:14–15 – be i ånd og med forstand.</li>
                <li>Rom 8:16 – Ånden vitner med vår ånd.</li>
                <li>1 Tess 5:23 – Ånd, sjel og kropp.</li>
                <li>Hebr 4:12 – Ånd og sjel skiller.</li>
              </ul>
            </Section>

            <Section title="Til ettertanke">
              <ul className="list-disc pl-6">
                <li>Hva betyr det at Gud er Ånd, og at vi må tilbe ham i ånd?</li>
                <li>Hvordan kan vi lære å vende vår ånd til Herren?</li>
                <li>Hva er forskjellen mellom å forstå Kristus intellektuelt og å oppleve ham i ånden?</li>
                <li>Hvordan forholder den menneskelige ånd seg til sjel og kropp i det kristne liv?</li>
              </ul>
            </Section>

            <Section title="Ressurser">
              <p>
                Les dette kapittelet sammen med skriftsteder om bønn, tilbedelse, og om åndens rolle i den troendes liv. Det er her den troende får et konkret bilde av hvordan Kristus kan bli erfart ikke bare i tanker, men i den menneskelige ånd.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}
