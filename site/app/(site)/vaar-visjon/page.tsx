import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { SimpleList } from "@/components/articles/SimpleList";

export const metadata: Metadata = {
  title: "Vår visjon | THEOLOGIA",
  description:
    "THEOLOGIAs visjon og misjon: å gjøre bibelsk kunnskap tilgjengelig, forståelig og godt strukturert.",
};

export default function VaarVisjonPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Vår visjon" }]} />

      <ArticleLayout category="VÅR VISJON" title="Vår visjon" subtitle="Forstå Skriften. Styrk troen.">
        <h2>Vår visjon</h2>
        <p>
          Å gjøre bibelsk kunnskap tilgjengelig, forståelig og godt strukturert slik at mennesker kan vokse i tro,
          innsikt og kjærlighet til Gud.
        </p>

        <h2>Vår misjon</h2>
        <p>Vi ønsker å:</p>
        <SimpleList>
          <li>gjøre Bibelen lettere å forstå</li>
          <li>forklare kristen tro på en tydelig og pedagogisk måte</li>
          <li>samle bibelsk kunnskap i et oversiktlig digitalt bibliotek</li>
          <li>oppmuntre til bibelstudium og videre læring</li>
          <li>fremme saklig og respektfull teologisk dialog</li>
          <li>hjelpe mennesker til å lese Skriften i sin sammenheng</li>
        </SimpleList>
      </ArticleLayout>
    </main>
  );
}
