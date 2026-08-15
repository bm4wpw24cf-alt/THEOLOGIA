import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Bibelske temaer | THEOLOGIA",
  description: "Utforsk sentrale temaer i Bibelen og se hvordan Guds frelsesplan, pakter og løfter utfolder seg gjennom Skriften.",
};

export default function BibelskeTemaerPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Temaer", href: "/temaer" }, { label: "Bibelske temaer" }]} />

      <ArticleLayout category="TEMA · BIBELSKE TEMAER" title="Bibelske temaer" subtitle="Guds frelsesplan gjennom Skriften">
        <p>Utforsk sentrale temaer i Bibelen og se hvordan Guds frelsesplan, pakter og løfter utfolder seg gjennom Skriften.</p>

        <ComingSoon>
          Vi arbeider med å fylle dette temaet med grundige, bibelsk forankrede artikler. Kom gjerne tilbake senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
