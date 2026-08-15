import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Kontakt oss | THEOLOGIA",
  description: "Kom i kontakt med THEOLOGIA med spørsmål eller tilbakemeldinger.",
};

export default function KontaktPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Kontakt" }]} />

      <ArticleLayout category="KONTAKT" title="Kontakt oss" subtitle="Vi hører gjerne fra deg">
        <p>
          Har du spørsmål, tilbakemeldinger eller ønsker å komme i kontakt med oss om noe du har lest på THEOLOGIA?
          Vi setter pris på å høre fra deg.
        </p>

        <ComingSoon>En enkel kontaktmulighet er på vei. Kom gjerne tilbake senere.</ComingSoon>
      </ArticleLayout>
    </main>
  );
}
