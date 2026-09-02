import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Icon } from "@/components/icons/Icon";
import { AccordionSection } from "./AccordionSection";
import { SubAccordion } from "./SubAccordion";
import { ZoomGroupModal } from "./ZoomGroupModal";

export const metadata: Metadata = {
  title: "Kapittel 4 – «Og hun fødte … et guttebarn» | THEOLOGIA",
  description: "Kapittel 4 i studiet Den herlige menigheten.",
};

const OVERVIEW_HREF = "/temaer/ressurser/studiegrupper/den-herlige-menigheten";

export default function Kapittel4Page() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Den herlige menigheten", href: OVERVIEW_HREF },
          { label: "Kapittel 4" },
        ]}
      />

      {/* HERO */}
      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="grid grid-cols-[1fr_240px] items-start gap-12 max-[1100px]:grid-cols-[1fr_200px] max-[720px]:grid-cols-1">
            <section>
              <Link href={OVERVIEW_HREF} className="mb-5 flex items-center gap-1.5 font-sans text-[.88rem] font-semibold text-gold hover:text-gold-dark">
                <span aria-hidden="true">←</span> Tilbake til studieoversikt
              </Link>

              <span className="mb-3.5 inline-block font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">★ AKTUELT STUDIE</span>
              <h1 className="mb-4 text-[clamp(1.9rem,3vw,2.5rem)]">Den herlige menigheten</h1>
              <p className="mb-4.5 max-w-[60ch] font-serif text-[1.15rem] text-text">
                En kapittel-for-kapittel studie av <strong>Den herlige menigheten</strong> av Watchman Nee.
              </p>

              <p className="mb-4.5 font-sans text-[.82rem] font-semibold tracking-[.4px] text-gold-dark uppercase">
                Kapittel 4
                <strong className="mt-1.5 block font-serif text-[1.15rem] font-semibold text-ink normal-case">
                  «Og hun fødte … et guttebarn»
                </strong>
              </p>

              <div className="flex flex-wrap gap-7 border-y border-border py-5.5 max-[720px]:gap-5">
                {[
                  { icon: "video" as const, label: "Zoom-gruppe" },
                  { icon: "document" as const, label: "Presentasjoner" },
                  { icon: "comment" as const, label: "Kommentarer" },
                  { icon: "book" as const, label: "Bibelhenvisninger" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5 font-sans text-[.92rem] text-text">
                    <Icon name={f.icon} aria-hidden="true" className="h-[18px] w-[18px] flex-none text-gold" />
                    {f.label}
                  </div>
                ))}
              </div>
            </section>

            <aside className="max-[720px]:mx-auto max-[720px]:max-w-[180px]">
              <Image
                src="/images/resources/den-herlige-menigheten-3d.png"
                alt="Bokomslag: Den herlige menigheten"
                width={1024}
                height={1536}
                className="block w-full rounded-xl shadow-[0_12px_30px_rgba(0,0,0,.15)]"
              />
            </aside>
          </div>
        </div>
      </section>

      {/* STUDIEINNHOLD */}
      <section className="pt-6 pb-[70px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="grid grid-cols-[1fr_340px] items-start gap-10 max-[1100px]:grid-cols-1">
            {/* Hovedspalte */}
            <div className="flex flex-col gap-5">
              <AccordionSection icon="document" title="Presentasjon" description="Introduksjon til kapittel 4" defaultOpen>
                <p>
                  I dette kapittelet løfter Watchman Nee blikket mot et av de mest dramatiske avsnittene i Bibelen –
                  kvinnen og guttebarnet i Åpenbaringen 12. Kapittelet undersøker hvordan Gud fullfører sin plan
                  gjennom et folk som lever i trofasthet mot Kristus, og hvordan menigheten er kalt til å vitne om
                  Kristi seier midt i den åndelige kampen.
                </p>
                <p>
                  Gjennom en sammenhengende lesning av Åpenbaringen 12 viser Nee hvordan kampen mellom Gud og Satan
                  ikke først og fremst handler om politiske eller jordiske makter, men om Guds evige hensikt med sin
                  menighet. Han knytter synet i Åpenbaringen til de store bibelske linjene fra Første Mosebok til Det
                  nye Jerusalem, og argumenterer for at Gud alltid har hatt som mål å frembringe et folk som fullt ut
                  representerer Kristus.
                </p>
                <p>
                  Kapittelet legger særlig vekt på overvinnerne – troende som, ved Guds nåde, står fast i troen og
                  vitner om Kristus til tross for motstand. Samtidig utfordrer forfatteren leseren til å se
                  menigheten i et større perspektiv enn personlig frelse alene. Menigheten er kalt til å
                  virkeliggjøre Guds hensikt og vitne om Kristi triumf over mørkets makter.
                </p>
                <p>
                  Studer dette kapittelet med Bibelen oppslått, og legg merke til hvordan de ulike skriftstedene
                  belyser hverandre. Målet er ikke bare å forstå profetiske symboler, men å se Kristus og
                  menighetens plass i Guds frelsesplan.
                </p>

                <hr />

                <h3>Introduksjon til kapittel 4</h3>
                <p>
                  <strong>Kapittel 4 – «Og hun fødte … et guttebarn»</strong> bygger hovedsakelig på{" "}
                  <strong>Åpenbaringen 12</strong>, et av Bibelens mest symbolske og innholdsrike profetiske
                  kapitler.
                </p>
                <p>I dette studiet følger Watchman Nee den røde tråden gjennom Skriften og undersøker:</p>
                <ul>
                  <li>hvem kvinnen i Åpenbaringen 12 representerer</li>
                  <li>betydningen av guttebarnet</li>
                  <li>dragen og den åndelige konflikten</li>
                  <li>overvinnernes rolle i Guds plan</li>
                  <li>Satans nederlag og Kristi seier</li>
                  <li>hvordan disse sannhetene angår menigheten i dag</li>
                </ul>
                <p>
                  Kapittelet er ikke skrevet som en detaljert vers-for-vers-kommentar til Åpenbaringen 12, men som en
                  bibelteologisk framstilling der flere bibeltekster tolker hverandre. Leseren oppfordres derfor til
                  å slå opp og lese de aktuelle skriftstedene underveis.
                </p>
                <p>
                  Målet med studiet er å få et klarere bilde av Guds evige hensikt med menigheten, hvordan Kristus
                  fullfører denne hensikten, og hvilken plass de troende har i den pågående åndelige kampen.
                  Kapittelet utfordrer samtidig leseren til å se utover et rent individuelt trosliv og inn i det
                  større perspektivet av Guds frelsesplan for sin menighet.
                </p>
              </AccordionSection>

              <AccordionSection icon="book" title="Bibeltekster" description="Bibeltekster med kontekst og forklaringer" count={4}>
                <SubAccordion title="Åpenbaringen 12" description="Kvinnen, guttebarnet og dragen" />
                <SubAccordion title="1. Mosebok 37" description="Josefs drøm" />
                <SubAccordion title="Jesaja 66" description="Sion føder et barn" />
                <SubAccordion title="Salme 2" description="Han skal styre med jernstav" />
              </AccordionSection>

              <AccordionSection icon="column" title="Infografikk" description="Visuelle oversikter og illustrasjoner" count={3}>
                <SubAccordion title="Presentasjon" description="Introduksjon og oversikt" />
                <SubAccordion title="Oversikt" description="Symboler og sammenhenger" />
                <SubAccordion title="Illustrasjon" description="Diagram eller figur" />
              </AccordionSection>

              <AccordionSection id="commentary" title="Kommentarer" description="Utfyllende kommentarer" count={8}>
                <SubAccordion title="Kommentar 1" />
              </AccordionSection>

              <AccordionSection iconText="?" title="Studiespørsmål" description="Refleksjon og gruppesamtale" count={6}>
                {null}
              </AccordionSection>
            </div>

            {/* Sidebar */}
            <aside className="sticky top-[116px] flex flex-col gap-5 max-[1100px]:static">
              <ZoomGroupModal />
            </aside>
          </div>
        </div>
      </section>

    </main>
  );
}
