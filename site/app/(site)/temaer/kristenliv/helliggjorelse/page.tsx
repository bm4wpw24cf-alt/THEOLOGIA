import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Helliggjørelse | THEOLOGIA",
  description: "Å bli mer lik Kristus gjennom Den hellige ånds arbeid.",
};

export default function HelliggjorelsePage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Kristenliv", href: "/temaer/kristenliv" },
          { label: "Helliggjørelse" },
        ]}
      />

      <ArticleLayout category="TEMA · KRISTENLIV" title="Helliggjørelse" subtitle="Å bli mer lik Kristus gjennom Den hellige ånds arbeid.">
        <p>Å bli mer lik Kristus gjennom Den hellige ånds arbeid.</p>

        <ComingSoon>
          Vi arbeider med å fylle dette temaet med grundige, bibelsk forankrede artikler. Kom gjerne tilbake senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
