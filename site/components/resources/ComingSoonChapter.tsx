import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const OVERVIEW_HREF = "/temaer/ressurser/studiegrupper/den-herlige-menigheten";
const CH4_HREF = `${OVERVIEW_HREF}/kapittel-4`;

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold";
const primaryBtn = `inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-sans text-[.9rem] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-dark ${focusRing}`;
const secondaryBtn = `inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 font-sans text-[.9rem] font-semibold text-text transition-colors duration-200 hover:border-gold hover:bg-parchment hover:text-gold-dark ${focusRing}`;

/**
 * "Kommer senere"-side for kapitler i en studiegruppe som finnes i boken, men
 * som ikke har fått en publisert studieside ennå. Kun ment for eksplisitte
 * kapittelruter – ukjente ruter skal fortsatt gi vanlig 404.
 */
export function ComingSoonChapter({ number }: { number: number }) {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Den herlige menigheten", href: OVERVIEW_HREF },
          { label: `Kapittel ${number}` },
        ]}
      />

      <section className="mx-auto w-[min(720px,92%)] py-16 text-center sm:py-24">
        <p className="mb-3.5 font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">
          DEN HERLIGE MENIGHETEN
        </p>
        <h1 className="mb-4 text-[clamp(1.9rem,3vw,2.5rem)]">Dette kapitlet kommer senere</h1>
        <p className="mx-auto mb-9 max-w-[54ch] font-serif text-[1.12rem] leading-[1.7] text-text">
          Kapittel {number} finnes i boken, men studiesiden er ikke publisert ennå. Vi arbeider med å gjøre studiet
          tilgjengelig kapittel for kapittel.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={OVERVIEW_HREF} className={primaryBtn}>
            ← Tilbake til studieoversikten
          </Link>
          <Link href={CH4_HREF} className={secondaryBtn}>
            Gå til kapittel 4 →
          </Link>
        </div>
      </section>
    </main>
  );
}
