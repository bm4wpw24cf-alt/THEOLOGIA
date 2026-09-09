import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Kapittel 3 – Kristi dyrebare blod | THEOLOGIA",
  description: "Kapittel 3 i Det kristne livets grunnleggende prinsipper – Volum 1 om Kristi dyrebare blod, forsoning og frelse.",
};

const OVERVIEW_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1";
const PREV_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1/kapittel-2";
const NEXT_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1/kapittel-4";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-[780px] rounded-radius border border-border bg-white p-6 shadow-sm">
      <h2 className="mb-4 font-serif text-[1.8rem] text-ink">{title}</h2>
      <div className="space-y-4 text-[1.02rem] leading-[1.9] text-text">{children}</div>
    </section>
  );
}

export default function Kapittel3Page() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Studiegrupper", href: "/temaer/ressurser/studiegrupper" },
          { label: "Volum 1", href: OVERVIEW_HREF },
          { label: "Kapittel 3" },
        ]}
      />

      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="grid grid-cols-[1fr_240px] items-start gap-12 max-[1100px]:grid-cols-[1fr_200px] max-[720px]:grid-cols-1">
            <section>
              <Link href={OVERVIEW_HREF} className="mb-5 flex items-center gap-1.5 font-sans text-[.88rem] font-semibold text-gold hover:text-gold-dark">
                <span aria-hidden="true">←</span> Tilbake til studieoversikt
              </Link>

              <span className="mb-3.5 inline-block font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">★ KAPITTEL 3</span>
              <h1 className="mb-4 text-[clamp(1.9rem,3vw,2.5rem)]">Kristi dyrebare blod</h1>
              <p className="mb-4.5 max-w-[60ch] text-[1.02rem] leading-[1.8] text-text">
                Blodet til Kristus er kilden til syndenes tilgivelse, renselse, forsoning og den troendes frimodighet. Dette kapittelet ser på hva Bibelen lærer om Kristi blod og hvordan det blir til frelse i det kristne liv.
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
                <div className="font-serif text-[1.7rem] leading-[1.2] text-ink">Kapittel 3</div>
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
                I Guds frelsesverk er Kristi blod sentralt. Det er ikke et symbol eller et bilde uten innhold. Det er den levende og effektive grunn for tilgivelse, renselse og forsoning. For den troende er det derfor både en historisk realitet og en daglig livsnerve.
              </p>
              <p>
                Når vi ser på Kristi blod, ser vi Guds kjærlighet, hans rettferdighet og hans evige vilje til å forene mennesket med seg selv. Mennesket kan ikke bli ren eller rettferdiggjort ved egen styrke, men ved Kristi blod, som er gitt for oss.
              </p>
            </Section>

            <Section title="Bibelens grunnlag">
              <p>
                «For uten blod er det ingen tilgivelse.» <strong>Hebr 9:22</strong>. Dette viser at soning og tilgivelse ikke er en moralisk eller følelsesmessig idé, men et faktisk offer i Guds rettferdighet. Mennesket trenger et offer som kan forene synd og rettferdighet i samme handling.
              </p>
              <p>
                «Kristus har elsket oss og vasket oss fra våre synder med sitt blod…» <strong>Åp 1:5</strong>. Blodet er ikke bare vedkommende for en historisk hendelse, men det renser oss i vår daglige vandring og gir oss adgang til Gud. «Han er enmektig til å rense oss fra all synd.» <strong>1 Joh 1:7</strong>.
              </p>
            </Section>

            <Section title="Undervisningen">
              <p>
                Kristi blod er grunnlaget for syndenes tilgivelse. Når Gud ser på synden i oss, ser han ikke vår egen rettferdighet, men Kristi offer. Derfor er tilgivelse ikke en menneskelig bedømmelse, men Guds nådes handling mot oss. Vi blir frikjent ved Kristi blod.
              </p>
              <p>
                Blodet er også grunnlaget for renselse. Den troende er ikke bare frelst fra dom, men blir renet fra syndens effekt i hjertet og i livet. Renselse er ikke en renestetning av vårt egen vilje, men en åndelig virkning av Kristi liv og offer. Det drar oss opp fra syndens bekvemmelighet og inn i livets renhet.
              </p>
              <p>
                Ved forsoning forbinder Kristus mennesket med Gud. Han tar bort det som skiller oss fra Gud, så vi kan komme til ham med frimodighet. «Vi har da, brødre, frimodighet til å gå inn i det aller helligste ved blodet til Jesus…» <strong>Hebr 10:19</strong>. Frimodigheten er ikke brutalt, men sand og basert på Guds rettferdighet og Kristi offer.
              </p>
            </Section>

            <Section title="Kommentar">
              <p>
                Blodet i Bibelen er ikke en enkel symbolikk, men et virkningsfullt middel i Guds frelsesplan. Det peker på at synd er alvorlig og at Guds rettferdighet må bli tilfredsstilt. Derfor kan vi ikke redusere Kristi blod til en moralisk påminnelse eller et generelt symbolspråk. Det er det dyreste som ble gitt i Guds plan, og det har evig betydning.
              </p>
              <p>
                Samtidig er det viktig å forstå at Kristi blod ikke bare er en ferdig historisk begivenhet for den troende i fortiden. Det er en levende tilstedeværelse i det kristne liv. Den troende kommer til Gud gjennom dette blod, lever i dette blod og blir styrket av dette blod. Det er det som gir oss adgang til himmelen, til syndenes forlatelse og til et liv i felleskap med Gud.
              </p>
            </Section>

            <Section title="Viktige bibeltekster">
              <ul className="list-disc pl-6">
                <li>Hebr 9:11–14 – Kristus kom som høyeste prest og førte sitt blod inn i helligdommen.</li>
                <li>Hebr 9:22 – Uten blod er det ingen tilgivelse.</li>
                <li>1 Joh 1:7 – Blodet renser oss fra all synd.</li>
                <li>Ef 1:7 – Vi har forløsning i hans blod.</li>
                <li>Hebr 10:19 – Frimodighet til å gå inn i det aller helligste.</li>
                <li>1 Pet 1:18–19 – Vi er løskjøpt med Kristi dyrebare blod.</li>
              </ul>
            </Section>

            <Section title="Til ettertanke">
              <ul className="list-disc pl-6">
                <li>Hvordan påvirker forståelsen av Kristi blod vår bevissthet om synd?</li>
                <li>Hva betyr det at blodet renser oss fra synd?</li>
                <li>Hvordan blir Kristi blod grunnlaget for frimodighet i bønn?</li>
                <li>Hvordan kan vi leve i takknemlighet overfor Kristi offer?</li>
              </ul>
            </Section>

            <Section title="Ressurser">
              <p>
                Bruk bredden av skriftsteder om blodet i Kristus, spesielt Hebreerbrevet, Johannebrev og Åpenbaringen, for å forstå både offerets betydning og den troendes daglige erfaring av det.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}
