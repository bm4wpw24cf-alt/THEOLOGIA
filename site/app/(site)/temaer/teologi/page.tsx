import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Teologi | THEOLOGIA",
  description: "Bibelsk undervisning om Gud, Kristus, Den Hellige Ånd, frelsen og den kristne tro.",
};

export default function TeologiPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Temaer", href: "/temaer" }, { label: "Teologi" }]} />

      <ArticleLayout category="TEMA · TEOLOGI" title="Teologi" subtitle="Læren om Gud">
        <p>Bibelsk undervisning om Gud, Kristus, Den Hellige Ånd, frelsen og den kristne tro.</p>

        <ComingSoon>
          Vi arbeider med å fylle dette temaet med grundige, bibelsk forankrede artikler. Kom gjerne tilbake senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
