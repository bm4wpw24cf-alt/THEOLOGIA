import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Paulus og evangeliet om nåden | THEOLOGIA",
  description: "En dypdykk i Paulus' budskap til menigheten i Rom.",
};

export default function PaulusOgEvangelietOmNadenPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Artikler", href: "/artikler" },
          { label: "Paulus og evangeliet om nåden" },
        ]}
      />

      <ArticleLayout
        category="EVANGELIET · NÅDE"
        title="Paulus og evangeliet om nåden"
        subtitle="Paulus' budskap til Rom"
        meta="15. mai 2024 · Artikkel"
      >
        <p>En dypdykk i Paulus&apos; budskap til menigheten i Rom.</p>

        <ComingSoon>Den fullstendige artikkelen kommer snart.</ComingSoon>
      </ArticleLayout>
    </main>
  );
}
