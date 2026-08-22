import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { StudyToolsGrid } from "@/components/resources/StudyToolsGrid";

export const metadata: Metadata = {
  title: "Studieverktøy | THEOLOGIA",
  description: "Nyttige digitale verktøy for bibelstudium, originalspråk og teologisk forskning.",
};

export default function StudieverktoyPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Studieverktøy" },
        ]}
      />

      <ArticleLayout
        category="RESSURSER · STUDIEVERKTØY"
        title="Studieverktøy"
        subtitle="Nyttige digitale verktøy for bibelstudium, originalspråk og teologisk forskning."
      >
        <h2>Anbefalte verktøy</h2>
        <p className="max-w-[70ch]">
          Digitale verktøy for å studere Bibelen i dybden – grunntekster, Strong's-numre, leksika, kommentarer og
          kryssreferanser.
        </p>

        <div className="mt-8">
          <StudyToolsGrid />
        </div>
      </ArticleLayout>
    </main>
  );
}
