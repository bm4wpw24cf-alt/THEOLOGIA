import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Menighetsliv | THEOLOGIA",
  description: "Betydningen av fellesskap og å være en del av Kristi kropp.",
};

export default function MenighetslivPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Kristenliv", href: "/temaer/kristenliv" },
          { label: "Menighetsliv" },
        ]}
      />

      <ArticleLayout category="TEMA · KRISTENLIV" title="Menighetsliv" subtitle="Betydningen av fellesskap og å være en del av Kristi kropp.">
        <p>Betydningen av fellesskap og å være en del av Kristi kropp.</p>

        <ComingSoon>
          Vi arbeider med å fylle dette temaet med grundige, bibelsk forankrede artikler. Kom gjerne tilbake senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
