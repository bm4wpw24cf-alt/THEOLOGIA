import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Disippelskap | THEOLOGIA",
  description: "Hva det vil si å følge Jesus og vokse som hans disippel.",
};

export default function DisippelskapPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Kristenliv", href: "/temaer/kristenliv" },
          { label: "Disippelskap" },
        ]}
      />

      <ArticleLayout category="TEMA · KRISTENLIV" title="Disippelskap" subtitle="Hva det vil si å følge Jesus og vokse som hans disippel.">
        <p>Hva det vil si å følge Jesus og vokse som hans disippel.</p>

        <ComingSoon>
          Vi arbeider med å fylle dette temaet med grundige, bibelsk forankrede artikler. Kom gjerne tilbake senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
