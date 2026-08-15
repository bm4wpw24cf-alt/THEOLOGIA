import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";
import BeForFamilienContent from "@/content/articles/be-for-familien.mdx";

const article = getArticleBySlug("be-for-familien")!;

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
  { id: "hva-jeg-bor-be-for", label: "Hva jeg bør be for" },
  { id: "bibelske-referanser-til-refleksjon", label: "Bibelske referanser til refleksjon" },
  { id: "daglige-bonnerutiner", label: "Daglige bønnerutiner" },
];

export default function BeForFamilienPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Kristenliv", href: "/temaer/kristenliv" },
          { label: "Bønn", href: "/temaer/kristenliv/bonn" },
          { label: "Be for familien" },
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
        <BeForFamilienContent />
      </ArticleLayout>
    </main>
  );
}
