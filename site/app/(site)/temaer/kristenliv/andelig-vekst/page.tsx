import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Åndelig vekst | THEOLOGIA",
  description: "Prinsipper for å vokse i tro og modenhet.",
};

export default function AndeligVekstPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Kristenliv", href: "/temaer/kristenliv" },
          { label: "Åndelig vekst" },
        ]}
      />

      <ArticleLayout category="TEMA · KRISTENLIV" title="Åndelig vekst" subtitle="Prinsipper for å vokse i tro og modenhet.">
        <p>Prinsipper for å vokse i tro og modenhet.</p>

        <ComingSoon>
          Vi arbeider med å fylle dette temaet med grundige, bibelsk forankrede artikler. Kom gjerne tilbake senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
