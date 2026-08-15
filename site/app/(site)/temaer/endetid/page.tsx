import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Endetid | THEOLOGIA",
  description: "Bibelsk undervisning om profetier, Jesu gjenkomst, Johannes åpenbaring og håpet om Guds rike.",
};

export default function EndetidPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Temaer", href: "/temaer" }, { label: "Endetid" }]} />

      <ArticleLayout category="TEMA · ENDETID" title="Endetid" subtitle="Håpet om Guds rike">
        <p>Bibelsk undervisning om profetier, Jesu gjenkomst, Johannes åpenbaring og håpet om Guds rike.</p>

        <h2>Tilgjengelig nå</h2>
        <p>
          <Link href="/temaer/endetid/artikler/er-evig-bevisst-pine-bibelsk">
            <strong>Er evig bevisst pine bibelsk?</strong>
          </Link>{" "}
          – et svar til læren om utslettelse. En grundig bibelsk og teologisk gjennomgang av spørsmålet om helvete er
          et sted for evig bevisst pine, eller om utslettelse (annihilasjonisme) er den bibelske forståelsen.
        </p>

        <ComingSoon>Flere artikler om endetiden kommer snart.</ComingSoon>
      </ArticleLayout>
    </main>
  );
}
