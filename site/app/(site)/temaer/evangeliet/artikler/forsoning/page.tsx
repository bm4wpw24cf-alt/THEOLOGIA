import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";

const article = getArticleBySlug("forsoning")!;

export const metadata: Metadata = {
  title: `${article.title} | THEOLOGIA`,
  description: article.description,
  authors: [{ name: "Eirik Storesletten" }],
  alternates: {
    canonical: article.href,
  },
  openGraph: {
    type: "article",
    title: article.title,
    description: article.description,
    url: article.href,
    siteName: "THEOLOGIA",
    publishedTime: article.date,
    modifiedTime: article.date,
    authors: ["Eirik Storesletten"],
  },
  twitter: {
    card: "summary",
    title: article.title,
    description: article.description,
  },
};

const TOC = [
  { id: "artikkel-01", label: "Forsoningens natur" },
  { id: "artikkel-02", label: "Problemer med PSA" },
];

export default function ForsoningPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Evangeliet", href: "/temaer/evangeliet" },
          { label: article.title },
        ]}
      />

      <ArticleLayout
        category="TEMAER · EVANGELIET · FORSONINGEN"
        title={article.title}
        subtitle="Kristi soningsverk og dets betydning for frelse, nåde og menneskets gjenopprettelse"
        meta="Av Eirik Storesletten"
        toc={TOC}
        backHref="/temaer/evangeliet"
        backLabel="Tilbake til Evangeliet"
        intro={
          <p>
            Dette temaet omfatter de sentrale forsoningsartiklene i THEOLOGIA og viser hvordan Kristi soningsverk er
            forstått i lys av frelse, nåde og gjenopprettelse.
          </p>
        }
      >
        <section id="artikkel-01">
          <div className="mb-8 border-b border-[var(--line)] pb-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold)]">Artikkel 01</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--ink)]">Forsoningens natur</h2>
          </div>

          <p>
            En teologisk utforskning av Kristi soningsverk og frelsens grunnlag.
          </p>

          <div className="mt-6 rounded-lg border border-[var(--line)] bg-[var(--white)] p-5">
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold)]">Forsoning</p>
            <h3 className="text-xl font-medium text-[var(--ink)]">Forsoningens natur — Kristi soningsverk og frelsens grunnlag</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">Artikkel + PDF</p>
          </div>
        </section>

        <section id="artikkel-02" className="mt-16">
          <div className="mb-8 border-b border-[var(--line)] pb-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold)]">Artikkel 02</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--ink)]">Problemer med PSA</h2>
          </div>

          <p>
            En teologisk og bibelsk vurdering av hvorfor straffesubstitusjonsforsoning ikke holder.
          </p>

          <div className="mt-6 rounded-lg border border-[var(--line)] bg-[var(--white)] p-5">
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold)]">Forsoning</p>
            <h3 className="text-xl font-medium text-[var(--ink)]">
              <Link href="/temaer/evangeliet/artikler/problemer-med-psa">Problemer med PSA — Hvorfor straffesubstitusjonsforsoning ikke holder</Link>
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">4 artikler + PDF</p>
          </div>
        </section>

        <section id="artikkel-03" className="mt-16">
          <div className="mb-8 border-b border-[var(--line)] pb-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold)]">Artikkel 03</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--ink)]">Forsoningens natur</h2>
          </div>

          <p>
            En helhetlig, bibelsk fremstilling av Guds frelsesverk i Kristus, med fokus på fellesskap, pakt, seier,
            oppstandelse og kjærlighetens drivkraft i forsoningen.
          </p>

          <div className="mt-6 rounded-lg border border-[var(--line)] bg-[var(--white)] p-5">
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold)]">Forsoning</p>
            <h3 className="text-xl font-medium text-[var(--ink)]">
              <Link href="/temaer/evangeliet/artikler/forsoningens-natur">Forsoningens natur — En helhetlig, bibelsk fremstilling</Link>
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">9 deler + PDF</p>
          </div>
        </section>
      </ArticleLayout>
    </main>
  );
}
