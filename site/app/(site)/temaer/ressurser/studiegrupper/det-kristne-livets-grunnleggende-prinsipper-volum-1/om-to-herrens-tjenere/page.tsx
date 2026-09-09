import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tillegg – Om to Herrens tjenere | THEOLOGIA",
  description: "Tillegg til Det kristne livets grunnleggende prinsipper – Volum 1: Om to Herrens tjenere.",
};

const OVERVIEW_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1";

export default function OmToHerrensTjenerePage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Studiegrupper", href: "/temaer/ressurser/studiegrupper" },
          { label: "Volum 1", href: OVERVIEW_HREF },
          { label: "Tillegg" },
        ]}
      />

      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="mt-8 rounded-radius border border-dashed border-gold/60 bg-[linear-gradient(145deg,rgba(224,172,82,.08),rgba(255,255,255,.85))] p-8 shadow-sm">
            <Link href={OVERVIEW_HREF} className="mb-5 flex items-center gap-1.5 font-sans text-[.88rem] font-semibold text-gold hover:text-gold-dark">
              <span aria-hidden="true">←</span> Tilbake til studieoversikt
            </Link>

            <span className="mb-3.5 inline-block font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">TILLEGG</span>
            <h1 className="mb-5 text-[clamp(1.9rem,3vw,2.5rem)]">Om to Herrens tjenere</h1>
            <div className="space-y-4 text-[1.02rem] leading-[1.9] text-text">
              <p>
                Dette tillegget er et kort supplement til hovedstudiet. Her blir det lagt vekt på den kristnes lære og erfaring i forhold til Herrens tjenere, deres tjeneste, deres ansvar og den enkeltes plass i Guds arbeid.
              </p>
              <p>
                Når vi ser på Herrens tjenere i Skriften, er det viktig å skille mellom det å være kalt til tjeneste og det å leve i den andelige virkelighet som Gud vil. Tjeneste må bli født i Gud, ikke bare oppstått i menneskelig aktivitet. Derfor er dette tillegg ikke et selvstendig kapittel i progresjonen, men et supplement som belyser et praktisk og teologisk tema i sammenhengen med hovedstudiet.
              </p>
              <p>
                Målet er ikke å lage en ny lære eller en ny standard, men å hjelpe leseren til å se tjenesten i lys av Kristus, Guds nåde og den troendes ansvar i fellesskapet. Det er en påminnelse om at Guds arbeid ikke er først og fremst menneskers prestasjon, men Guds livsvirkning i hans folk.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
