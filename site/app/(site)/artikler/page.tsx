import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LatestArticlesTimeline } from "@/components/articles/LatestArticlesTimeline";

export const metadata: Metadata = {
  title: "Artikler | THEOLOGIA",
  description: "Alle artikler på THEOLOGIA – bibelstudier, teologi, apologetikk og kristenliv.",
};

export default function ArtiklerPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Artikler" }]} />

      <section className="py-[120px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="mb-16 text-center">
            <span className="panel-tag">Bibelsk kunnskap</span>
            <h2 className="mb-4 text-[2.6rem]">Alle artikler</h2>
            <p className="text-[1.08rem]">Utforsk alle artikler på THEOLOGIA, sortert etter dato.</p>
          </div>

          <LatestArticlesTimeline />
        </div>
      </section>
    </main>
  );
}
