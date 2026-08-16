import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";
import JuridiskModellForForsoningenContent from "@/content/articles/juridisk-modell-for-forsoningen.mdx";

const article = getArticleBySlug("juridisk-modell-for-forsoningen")!;

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
  { id: "problemet-er-juridisk", label: "Problemet er juridisk, ikke straff-juridisk" },
  { id: "gud-annullerer-gjelden", label: "Gud annullerer syndegjelden" },
  { id: "gud-rettferdig-nar-han-rettferdiggjor", label: "Hvordan kan Gud rettferdiggjøre?" },
  { id: "korset-ikke-straff", label: "Korset: ikke straff, men paktsfornyelse" },
  { id: "ingen-juridisk-grunn-til-straff", label: "Ingen juridisk grunn til straff" },
  { id: "gud-rettferdig-fordi-han-gjor-oss-rettferdige", label: "Gud gjør oss rettferdige" },
  { id: "oppsummering", label: "Oppsummering" },
];

export default function JuridiskModellForForsoningenPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Evangeliet", href: "/temaer/evangeliet" },
          { label: "En juridisk, ikke-PSA modell for forsoningen" },
        ]}
      />

      <ArticleLayout
        category="TEMAER · EVANGELIET · FORSONINGEN"
        title={article.title}
        subtitle="I samsvar med Romerne 3,24–26 og Kolosserne 2,14"
        meta="Av THEOLOGIA"
        toc={TOC}
        backHref="/temaer/evangeliet"
        backLabel="Tilbake til Evangeliet"
        intro={
          <p>
            Forsoningen har en juridisk dimensjon, men juridisk betyr ikke nødvendigvis penal substitutionary
            atonement (PSA). Denne artikkelen argumenterer, med utgangspunkt i Romerne 3,24–26 og Kolosserne 2,14,
            for at Gud løser syndens juridiske problem ved å fjerne skyld og rettferdiggjøre synderen – ikke
            nødvendigvis ved å straffe Kristus i synderens sted.
          </p>
        }
      >
        <JuridiskModellForForsoningenContent />
      </ArticleLayout>
    </main>
  );
}
