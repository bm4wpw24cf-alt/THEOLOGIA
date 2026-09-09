import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Kapittel 4 – Å påkalle Herrens navn | THEOLOGIA",
  description: "Kapittel 4 i Det kristne livets grunnleggende prinsipper – Volum 1 om å påkalle Herrens navn.",
};

const OVERVIEW_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1";
const PREV_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1/kapittel-3";
const NEXT_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1/kapittel-5";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-[780px] rounded-radius border border-border bg-white p-6 shadow-sm">
      <h2 className="mb-4 font-serif text-[1.8rem] text-ink">{title}</h2>
      <div className="space-y-4 text-[1.02rem] leading-[1.9] text-text">{children}</div>
    </section>
  );
}

export default function Kapittel4Page() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Studiegrupper", href: "/temaer/ressurser/studiegrupper" },
          { label: "Volum 1", href: OVERVIEW_HREF },
          { label: "Kapittel 4" },
        ]}
      />

      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="grid grid-cols-[1fr_240px] items-start gap-12 max-[1100px]:grid-cols-[1fr_200px] max-[720px]:grid-cols-1">
            <section>
              <Link href={OVERVIEW_HREF} className="mb-5 flex items-center gap-1.5 font-sans text-[.88rem] font-semibold text-gold hover:text-gold-dark">
                <span aria-hidden="true">←</span> Tilbake til studieoversikt
              </Link>

              <span className="mb-3.5 inline-block font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">★ KAPITTEL 4</span>
              <h1 className="mb-4 text-[clamp(1.9rem,3vw,2.5rem)]">Å påkalle Herrens navn</h1>
              <p className="mb-4.5 max-w-[60ch] text-[1.02rem] leading-[1.8] text-text">
                Å påkalle Herrens navn er en sentral praksis i det kristne liv. Det er ikke bare et teoretisk begrep, men en livsform hvor troende kommer til Gud i tillit og tilbedelse.
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
                <div className="font-serif text-[1.7rem] leading-[1.2] text-ink">Kapittel 4</div>
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
                Å påkalle Herrens navn er en del av den troendes daglige livserfaring. Det innebærer ikke bare å si et navn, men å komme til Gud i tro og å stå i hans nærvær. Når den troende påkaller Herren, bekjenner han ham som sin Herre, sin frelser og sin trygghet.
              </p>
              <p>
                Bibelen viser at dette er en praksis som hører til både omvendelse og daglig liv. Det er en åpenhet til Gud i bønn, anrop, påkallel og tilbedelse. Det er også et uttrykk for at vi ikke lever av vår egen styrke, men av ham som er vår Herre.
              </p>
            </Section>

            <Section title="Bibelens grunnlag">
              <p>
                «Dere skal komme til meg… og påkalle mitt navn, og jeg skal høre dere…» <strong>Jer 29:12</strong>. Denne teksten viser at Gud svarer når hans folk påkaller ham i kjærlighet og tro. Det er ikke et rop som bare er formelt eller mekanisk, men et kald mot Gud i avhengighet.
              </p>
              <p>
                «Hver den som påkaller Herrens navn, skal bli frelst.» <strong>Rom 10:13</strong>. Her får vi en tydelig bibelsk sammenstilling mellom påkallel og frelse. Den troende er ikke frelst ved en generell religion, men ved å komme til Herren i tro og anrop.
              </p>
            </Section>

            <Section title="Undervisningen">
              <p>
                Å påkalle Herren er å sette sin tillit til ham i bønn. Det er å søke ham når man trenger hjelp, trøst, styrke, helliggjørelse og ledelse. Det er også å legge sin synd, sin sorg og sin svakhet frem for ham, og å søke ham som den som er nær, levende og ansvarlig for sitt folk.
              </p>
              <p>
                Det kristne liv er ikke et liv av distanse og selvstyring, men et liv av kontakt med Gud. Påkallel leder til kontakt, kontakt leder til liv, og liv leder til forvandling. Derfor er dette ikke bare et moment i bønn, men en kristen livsform som må øves daglig.
              </p>
              <p>
                Bibelen viser også at dette er praktisk og konkret. Apostlene påkalte Herren i nød, i bøn, i tilbedelse og i forkynnelse. Når de var truet, sto de i bønn; når de var usikre, påkalte de Herren; når de var fylt av liv, lovpriste de hans navn. Påkallel er altså både personlig og fellesskapsfull.
              </p>
            </Section>

            <Section title="Kommentar">
              <p>
                Det er viktig å forstå at å påkalle Herrens navn ikke er magi. Det er ikke en formulering eller et ritual som virker av seg selv. Det er en troende beliggenhet i Guds nærvær. Derfor skiller Bibelen mellom forholdet til Gud og menneskelig praksis. Verken det at vi sier et navn eller repeterer en formel, gjør oss frelst. Det er den levende erfaringen av at Herren er Gud, og at han er nær i troen, som gjør påkallel til et livsforhold.
              </p>
              <p>
                På samme måte er det viktig å skille mellom det som er bibelsk praksis og det som kan bli en tom eller mekanisk observans. Den troende skal ikke bare påkalle Herren som et uttrykk for nyhetsverdighet, men som en daglig og oppriktig innstilling i hjertet. Herrens navn er ikke et ord vi bruker, men en person vi kommer til.
              </p>
            </Section>

            <Section title="Viktige bibeltekster">
              <ul className="list-disc pl-6">
                <li>Jer 29:12–13 – Gud hører når vi påkaller ham.</li>
                <li>Joel 2:32 – Hver den som påkaller Herrens navn, skal bli frelst.</li>
                <li>Rom 10:12–13 – Påkallel og frelse.</li>
                <li>Apg 2:21 – Det samme løfte gjelder på den nye paktens tid.</li>
                <li>1 Kor 1:2 – Dem som påkaller Herrens navn.</li>
                <li>Fil 2:9–11 – Herrens navn er over alle navn.</li>
              </ul>
            </Section>

            <Section title="Til ettertanke">
              <ul className="list-disc pl-6">
                <li>Hva betyr det i praksis å påkalle Herrens navn?</li>
                <li>Hvordan skiller påkallel seg fra en mekanisk bønneform?</li>
                <li>Hvorfor er Herrens navn så viktig i det kristne liv?</li>
                <li>Hvordan kan vi gjøre påkallel til en daglig praksis i hjertet?</li>
              </ul>
            </Section>

            <Section title="Ressurser">
              <p>
                Dette kapittelet blir best forstått når det leses sammen med tekstene om bønn, tilbedelse, omvendelse og Herrens navn i Apostlenes gjerninger og Paulus’ brev.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}
