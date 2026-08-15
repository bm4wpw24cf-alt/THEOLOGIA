import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Familie | THEOLOGIA",
  description: "Kristne prinsipper for et sterkt og sunt familieliv.",
};

export default function FamiliePage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Kristenliv", href: "/temaer/kristenliv" },
          { label: "Familie" },
        ]}
      />

      <ArticleLayout category="TEMA · KRISTENLIV" title="Familie" subtitle="Kristne prinsipper for et sterkt og sunt familieliv.">
        <p>Kristne prinsipper for et sterkt og sunt familieliv.</p>

        <ComingSoon>
          Vi arbeider med å fylle dette temaet med grundige, bibelsk forankrede artikler. Kom gjerne tilbake senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
