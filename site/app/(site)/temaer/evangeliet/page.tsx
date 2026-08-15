import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Evangeliet | THEOLOGIA",
  description: "Sannheten om synd, nåde, tro, omvendelse og frelsen i Jesus Kristus.",
};

export default function EvangelietPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Temaer", href: "/temaer" }, { label: "Evangeliet" }]} />

      <ArticleLayout category="TEMA · EVANGELIET" title="Evangeliet" subtitle="Sannheten om synd, nåde og frelse">
        <p>Sannheten om synd, nåde, tro, omvendelse og frelsen i Jesus Kristus.</p>

        <ComingSoon>
          Vi arbeider med å fylle dette temaet med grundige, bibelsk forankrede artikler. Kom gjerne tilbake senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
