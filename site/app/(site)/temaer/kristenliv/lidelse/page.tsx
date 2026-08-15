import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Lidelse | THEOLOGIA",
  description: "Hvordan møte prøvelser med tro og håp.",
};

export default function LidelsePage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Kristenliv", href: "/temaer/kristenliv" },
          { label: "Lidelse" },
        ]}
      />

      <ArticleLayout category="TEMA · KRISTENLIV" title="Lidelse" subtitle="Hvordan møte prøvelser med tro og håp.">
        <p>Hvordan møte prøvelser med tro og håp.</p>

        <ComingSoon>
          Vi arbeider med å fylle dette temaet med grundige, bibelsk forankrede artikler. Kom gjerne tilbake senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
