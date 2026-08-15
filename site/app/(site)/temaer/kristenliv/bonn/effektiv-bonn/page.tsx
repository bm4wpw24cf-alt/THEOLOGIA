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
  { id: "hvordan-fa-mer-ut-av-ditt-personlige-bonneliv", label: "Hvordan få mer ut av ditt personlige bønneliv" },
  { id: "bibelske-rollemodeller", label: "Bibelske rollemodeller" },
  { id: "bonn-krever-disiplin-og-trening", label: "Bønn krever disiplin og trening" },
  { id: "hva-skal-vi-be-for", label: "Hva skal vi be for?" },
  { id: "et-dypere-bonneliv-a-baere-en-bonnebyrde", label: "Et dypere bønneliv – å bære en bønnebyrde" },
  { id: "a-sta-i-gapet", label: "Å stå i gapet" },
  { id: "bonn-og-faste", label: "Bønn og faste" },
  { id: "et-bonneliv-som-vokser", label: "Et bønneliv som vokser" },
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
