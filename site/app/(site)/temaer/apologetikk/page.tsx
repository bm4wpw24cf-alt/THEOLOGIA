import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { SimpleList } from "@/components/articles/SimpleList";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Apologetikk | THEOLOGIA",
  description: "Forsvar for den kristne tro med bibelske, historiske og filosofiske argumenter.",
};

export default function ApologetikkPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Temaer", href: "/temaer" }, { label: "Apologetikk" }]} />

      <ArticleLayout category="TEMA · APOLOGETIKK" title="Apologetikk" subtitle="Forsvar for den kristne tro">
        <p>Forsvar for den kristne tro med bibelske, historiske og filosofiske argumenter.</p>

        <h2>Dette temaet vil dekke</h2>
        <SimpleList>
          <li>Guds eksistens</li>
          <li>Bibelens troverdighet</li>
          <li>Jesu oppstandelse</li>
          <li>Tro og vitenskap</li>
          <li>Ondskapens problem</li>
          <li>Verdensreligioner</li>
        </SimpleList>

        <h2>Tilgjengelig nå</h2>
        <p>
          <Link href="/temaer/apologetikk/artikler/den-forste-arsaken">
            <strong>Den første årsaken</strong>
          </Link>{" "}
          – egenskaper, personlighet og kreativitet: en kosmologisk argumentasjon for at den første årsaken til
          universet samsvarer med det klassiske teistiske gudsbegrepet.
        </p>
        <p>
          <Link href="/temaer/apologetikk/artikler/det-islamske-dilemmaet">
            <strong>Det islamske dilemmaet</strong>
          </Link>{" "}
          – en undersøkelse av Koranens forhold til Toraen og evangeliet, den historiske tekstsituasjonen på
          600-tallet og de teologiske konfliktene mellom Koranen og Bibelen.
        </p>

        <ComingSoon>Flere artikler om apologetikk kommer snart.</ComingSoon>
      </ArticleLayout>
    </main>
  );
}
