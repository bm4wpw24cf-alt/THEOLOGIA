import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Bibellesning | THEOLOGIA",
  description: "Praktiske råd for å lese, forstå og anvende Guds Ord i hverdagen.",
};

export default function BibellesningPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Kristenliv", href: "/temaer/kristenliv" },
          { label: "Bibellesning" },
        ]}
      />

      <ArticleLayout category="TEMA · KRISTENLIV" title="Bibellesning" subtitle="Praktiske råd for å lese, forstå og anvende Guds Ord i hverdagen.">
        <p>Praktiske råd for å lese, forstå og anvende Guds Ord i hverdagen.</p>

        <ComingSoon>
          Vi arbeider med å fylle dette temaet med grundige, bibelsk forankrede artikler. Kom gjerne tilbake senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
