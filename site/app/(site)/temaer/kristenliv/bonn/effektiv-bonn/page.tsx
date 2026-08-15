import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";
import EffektivBonnContent from "@/content/articles/effektiv-bonn.mdx";

const article = getArticleBySlug("effektiv-bonn")!;

export const metadata: Metadata = {
  title: `${article.title} | THEOLOGIA`,
  description: article.description,
  alternates: {
    canonical: article.href,
  },
  openGraph: {
    type: "article",
    title: article.title,
    description: article.description,
    url: article.href,
    siteName: "THEOLOGIA",
  },
};

const TOC = [
  { id: "hvordan-star-det-til-med-ditt-bonneliv", label: "Hvordan står det til med ditt bønneliv?" },
  { id: "bibelske-rollemodeller", label: "Bibelske rollemodeller" },
  { id: "disiplin-og-trening", label: "Disiplin og trening" },
  { id: "hva-skal-du-be-for", label: "Hva skal du be for?" },
  { id: "et-dypere-bonneliv", label: "Et dypere bønneliv" },
];

export default function EffektivBonnPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Kristenliv", href: "/temaer/kristenliv" },
          { label: "Bønn", href: "/temaer/kristenliv/bonn" },
          { label: "Effektiv bønn" },
        ]}
      />

      <ArticleLayout
        category="TEMAER · KRISTENLIV · BØNN"
        title={article.title}
        subtitle={article.description}
        meta="Av THEOLOGIA"
        toc={TOC}
        backHref="/temaer/kristenliv/bonn"
        backLabel="Tilbake til Bønn"
      >
        <EffektivBonnContent />
      </ArticleLayout>
    </main>
  );
}
