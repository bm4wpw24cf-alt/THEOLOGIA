import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Bønn | THEOLOGIA",
  description: "Lær om bønnens betydning og hvordan du kan utvikle et rikt bønnsliv.",
};

export default function BonnPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Kristenliv", href: "/temaer/kristenliv" },
          { label: "Bønn" },
        ]}
      />

      <ArticleLayout category="TEMA · KRISTENLIV" title="Bønn" subtitle="Lær om bønnens betydning og hvordan du kan utvikle et rikt bønnsliv.">
        <p>Lær om bønnens betydning og hvordan du kan utvikle et rikt bønnsliv.</p>

        <h2>Tilgjengelig nå</h2>
        <p>
          <Link href="/temaer/kristenliv/bonn/troens-bonn">
            <strong>Troens bønn</strong>
          </Link>{" "}
          – en bibelsk studie av hva troens bønn er, hvordan tro vokser frem, og hvordan den troende kan be med
          frimodighet etter Guds vilje.
        </p>
        <p>
          <Link href="/temaer/kristenliv/bonn/effektiv-bonn">
            <strong>Effektiv bønn</strong>
          </Link>{" "}
          – hvordan få mer ut av ditt personlige bønneliv.
        </p>
        <p>
          <Link href="/temaer/kristenliv/bonn/be-for-familien">
            <strong>Be for familien</strong>
          </Link>{" "}
          – bønneemner og bibelske referanser for foreldre som ønsker å be for familien sin.
        </p>

        <ComingSoon>Flere artikler om bønn kommer snart.</ComingSoon>
      </ArticleLayout>
    </main>
  );
}
