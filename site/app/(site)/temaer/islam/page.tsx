import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

/**
 * Nytt tema, ikke en migrering av gammel HTML. Kun teknisk struktur –
 * ingen redaksjonelt/teologisk innhold er skrevet ennå. Se
 * site/MIGRATION_STATUS.md ("NEW THEME – CONTENT REQUIRED").
 */
export const metadata: Metadata = {
  title: "Islam | THEOLOGIA",
};

export default function IslamPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Temaer", href: "/temaer" }, { label: "Islam" }]} />

      <ArticleLayout category="TEMA · ISLAM" title="Islam" subtitle="TODO: redaksjonell underoverskrift mangler">
        <ComingSoon title="TODO – innhold mangler">
          Dette temaet er kun en teknisk plassholder. Ingen fagtekst er skrevet ennå.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
