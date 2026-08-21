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

        <h3>GUD OG SKAPELSEN</h3>
        <ul>
          <li>
            <Link href="/temaer/apologetikk/artikler/den-forste-arsaken">
              <strong>Den første årsaken</strong>
            </Link>
          </li>
          <li>
            <Link href="/temaer/apologetikk/artikler/evolusjonen-ubekreftet">
              <strong>Evolusjonen – ubekreftet</strong>
            </Link>
          </li>
        </ul>

        <h3>BIBELEN OG TROVERDIGHET</h3>
        <ul>
          <li>
            <Link href="/temaer/apologetikk/artikler/bibelen-og-koranen-i-rettens-lys">
              <strong>Bibelen og Koranen i rettens lys</strong>
            </Link>
          </li>
        </ul>

        <h3>ISLAM OG KORANEN</h3>
        <ul>
          <li>
            <Link href="/temaer/apologetikk/artikler/det-islamske-dilemmaet">
              <strong>Det islamske dilemmaet</strong>
            </Link>
          </li>
          <li>
            <Link href="/temaer/apologetikk/artikler/hva-er-en-mushaf">
              <strong>Hva er en mushaf?</strong>
            </Link>
          </li>
          <li>
            <Link href="/temaer/apologetikk/artikler/muslimske-innvendinger">
              <strong>De viktigste muslimske innvendingene</strong>
            </Link>
          </li>
          <li>
            <Link href="/temaer/apologetikk/artikler/slaveri-og-rase-i-islam">
              <strong>Slaveri og rase i islam</strong>
            </Link>
          </li>
          <li>
            <Link href="/temaer/apologetikk/artikler/koranen-teksthistorie">
              <strong>Koranens teksthistorie</strong>
            </Link>
          </li>
          <li>
            <Link href="/temaer/apologetikk/artikler/laerer-koranen-kjaerlighet">
              <strong>Lærer Koranen kjærlighet?</strong>
            </Link>
          </li>
          <li>
            <Link href="/temaer/apologetikk/artikler/jesus-i-koranen">
              <strong>Jesus i Koranen</strong>
            </Link>
          </li>
        </ul>

        <ComingSoon>Flere artikler om apologetikk kommer snart.</ComingSoon>
      </ArticleLayout>
    </main>
  );
}
