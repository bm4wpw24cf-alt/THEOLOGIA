import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Grunnvollen | THEOLOGIA",
  description: "Artikler som utdyper de grunnleggende sannhetene troen bygges på – med utgangspunkt i Hebreerne 6:1–3.",
};

export default function GrunnvollenPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Fundament", href: "/temaer/fundament" },
          { label: "Grunnvollen" },
        ]}
      />

      <ArticleLayout
        category="TEMA · FUNDAMENT"
        title="Grunnvollen"
        subtitle="Artikler som utdyper de grunnleggende sannhetene troen bygges på – med utgangspunkt i Hebreerne 6:1–3."
      >
        <p>Artikler som utdyper de grunnleggende sannhetene troen bygges på – med utgangspunkt i Hebreerne 6:1–3.</p>

        <ComingSoon>
          Vi arbeider med å fylle Grunnvollen med grundige, bibelsk forankrede artikler. Kom gjerne tilbake senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
