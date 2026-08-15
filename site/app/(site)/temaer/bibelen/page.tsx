import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { SimpleList } from "@/components/articles/SimpleList";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Bibelen | THEOLOGIA",
  description: "Om Bibelens autoritet, inspirasjon, kanon, bibellesning og hvordan vi skal forstå Guds ord.",
};

export default function BibelenPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Temaer", href: "/temaer" }, { label: "Bibelen" }]} />

      <ArticleLayout category="TEMA · BIBELEN" title="Bibelen" subtitle="Guds ord til oss">
        <p>Om Bibelens autoritet, inspirasjon, kanon, bibellesning og hvordan vi skal forstå Guds ord.</p>

        <h2>Dette temaet vil dekke</h2>
        <SimpleList>
          <li>Bibelens autoritet</li>
          <li>Hvordan lese Bibelen</li>
          <li>Bibelens kanon</li>
          <li>Inspirasjon</li>
        </SimpleList>

        <ComingSoon>
          Vi arbeider med å fylle dette temaet med grundige, bibelsk forankrede artikler. Kom gjerne tilbake senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
