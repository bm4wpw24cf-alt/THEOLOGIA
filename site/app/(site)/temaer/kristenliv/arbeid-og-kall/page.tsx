import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Arbeid og kall | THEOLOGIA",
  description: "Å leve ut ditt kall og tjene Gud der du er.",
};

export default function ArbeidOgKallPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Kristenliv", href: "/temaer/kristenliv" },
          { label: "Arbeid og kall" },
        ]}
      />

      <ArticleLayout category="TEMA · KRISTENLIV" title="Arbeid og kall" subtitle="Å leve ut ditt kall og tjene Gud der du er.">
        <p>Å leve ut ditt kall og tjene Gud der du er.</p>

        <ComingSoon>
          Vi arbeider med å fylle dette temaet med grundige, bibelsk forankrede artikler. Kom gjerne tilbake senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
