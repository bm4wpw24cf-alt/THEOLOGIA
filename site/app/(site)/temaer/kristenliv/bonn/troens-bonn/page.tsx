import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";
import TroensBonnContent from "@/content/articles/troens-bonn.mdx";

const article = getArticleBySlug("troens-bonn")!;

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
  { id: "innledning", label: "Troens bønn" },
  { id: "grunnlaget-for-tro", label: "Grunnlaget for tro" },
  { id: "guds-vilje", label: "Bønn i tråd med Guds vilje" },
  { id: "rene-motiver", label: "Rene motiver" },
  { id: "kampen-mot-tvil", label: "Kampen mot tvil" },
  { id: "naert-forhold-til-jesus", label: "Et nært forhold til Jesus" },
  { id: "definisjon-av-tro", label: "Hva er tro?" },
  { id: "tro-pa-guds-ord", label: "Tro på Guds Ord" },
  { id: "frimodighet-og-utholdenhet", label: "Frimodighet og utholdenhet" },
  { id: "bonn-i-jesu-navn", label: "Bønn i Jesu navn" },
  { id: "oppsummering", label: "Oppsummering" },
];

export default function TroensBonnPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Kristenliv", href: "/temaer/kristenliv" },
          { label: "Bønn", href: "/temaer/kristenliv/bonn" },
          { label: "Troens bønn" },
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
        intro={
          <p>
            Uttrykket «troens bønn» finner vi i Jakob 5,15. Dette verset fremhever en kraftfull dimensjon ved bønn –
            bønn som er gjennomsyret av tro. Denne artikkelen undersøker hva troens bønn innebærer, hvordan tro
            oppstår, og hvordan vi kan be i tro basert på Guds Ord.
          </p>
        }
      >
        <TroensBonnContent />
      </ArticleLayout>
    </main>
  );
}
