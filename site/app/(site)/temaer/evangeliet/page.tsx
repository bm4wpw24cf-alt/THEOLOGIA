import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Evangeliet | THEOLOGIA",
  description: "Sannheten om synd, nåde, tro, omvendelse og frelsen i Jesus Kristus.",
};

export default function EvangelietPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Temaer", href: "/temaer" }, { label: "Evangeliet" }]} />

      <ArticleLayout category="TEMA · EVANGELIET" title="Evangeliet" subtitle="Sannheten om synd, nåde og frelse">
        <p>Sannheten om synd, nåde, tro, omvendelse og frelsen i Jesus Kristus.</p>

        <h2>Tilgjengelig nå</h2>
        <p>
          <Link href="/temaer/evangeliet/artikler/juridisk-modell-for-forsoningen">
            <strong>En juridisk, ikke-PSA modell for forsoningen</strong>
          </Link>{" "}
          – en bibelsk og juridisk analyse av forsoningen med utgangspunkt i Romerne 3,24–26 og Kolosserne 2,14, uten
          å forutsette penal substitutionary atonement.
        </p>

        <ComingSoon>
          Vi arbeider med å fylle dette temaet med flere grundige, bibelsk forankrede artikler. Kom gjerne tilbake
          senere.
        </ComingSoon>
      </ArticleLayout>
    </main>
  );
}
