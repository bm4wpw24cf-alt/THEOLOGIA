import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Støtt arbeidet | THEOLOGIA",
  description: "Vær med å støtte arbeidet med å bygge THEOLOGIA som et varig bibelsk-teologisk bibliotek.",
};

export default function StottArbeidetPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Støtt arbeidet" }]} />

      <ArticleLayout category="STØTT ARBEIDET" title="Støtt arbeidet" subtitle="Vær med å bygge et varig bibelsk bibliotek">
        <p>
          THEOLOGIA bygges gradvis som et varig bibliotek for bibelsk forståelse. Ønsker du å være med å støtte
          arbeidet med å skape og vedlikeholde gjennomarbeidede, bibelsk forankrede ressurser?
        </p>

        <ComingSoon>Måter å støtte arbeidet på blir tilgjengelig her snart.</ComingSoon>
      </ArticleLayout>
    </main>
  );
}
