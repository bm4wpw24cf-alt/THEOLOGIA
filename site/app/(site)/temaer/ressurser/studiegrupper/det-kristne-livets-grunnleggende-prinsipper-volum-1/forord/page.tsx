import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Forord – Det kristne livets grunnleggende prinsipper – Volum 1 | THEOLOGIA",
  description: "Forord til Det kristne livets grunnleggende prinsipper – Volum 1.",
};

const OVERVIEW_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1";

export default function ForordPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Studiegrupper", href: "/temaer/ressurser/studiegrupper" },
          { label: "Volum 1", href: OVERVIEW_HREF },
          { label: "Forord" },
        ]}
      />

      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="mt-8 rounded-radius border border-border bg-white p-8 shadow-sm">
            <Link href={OVERVIEW_HREF} className="mb-5 flex items-center gap-1.5 font-sans text-[.88rem] font-semibold text-gold hover:text-gold-dark">
              <span aria-hidden="true">←</span> Tilbake til studieoversikt
            </Link>

            <span className="mb-3.5 inline-block font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">FORORD</span>
            <h1 className="mb-5 text-[clamp(1.9rem,3vw,2.5rem)]">Det kristne livets grunnleggende prinsipper</h1>
            <div className="space-y-4 text-[1.02rem] leading-[1.9] text-text">
              <p>
                Denne boken handler om grunnleggende spørsmål i det kristne liv: hvem mennesket er, hva Gud har gjort for mennesket i Kristus, hvordan frelsen blir en personlig realitet, og hvordan den troende kan erfare Kristus i sitt daglige liv.
              </p>
              <p>
                Mennesket er ikke skapt for tomhet eller for uvishet, men for Gud. Derfor er denne boken en reise inn i Guds plan for mennesket, i menneskets fall, i Kristi gjenløsning og i Guds fulle frelse. Her ser vi også på hvordan den troende kan ha forvissning, sikkerhet og glede i frelsen, hvordan Kristi blod gir tilgivelse og renselse, og hvordan vi kan påkalle Herrens navn og leve i Kristus gennem vår ånd.
              </p>
              <p>
                Målet er ikke bare at vi skal lære om disse ting, men at vi skal leve dem. Det kristne liv er ikke et liv av intellektuell kunnskap alene, men et liv hvor Gud blir erfart i den troendes ånd, sjel og kropp. Derfor er dette et studium om både sannhet og erfaring, om både lære og liv.
              </p>
              <p>
                Vi ønsker derfor at leseren ikke bare skal forstå disse prinsippene, men ta dem imot, øve dem, og la Guds liv virke i sitt eget liv. For det er i Kristus vi finner både frihet, glede og den fulle virkelighet av det kristne liv.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
