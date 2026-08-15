import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ComingSoon } from "@/components/articles/ComingSoon";

export const metadata: Metadata = {
  title: "Hvordan leser Bibelen med forståelse | THEOLOGIA",
  description: "Praktiske prinsipper for å tolke Guds ord rett.",
};

export default function HvordanLeseBibelenMedForstaelsePage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Artikler", href: "/artikler" },
          { label: "Hvordan leser Bibelen med forståelse" },
        ]}
      />

      <ArticleLayout
        category="BIBELEN · BIBELLESNING"
        title="Hvordan leser Bibelen med forståelse"
        subtitle="Praktiske prinsipper for bibellesning"
        meta="18. mai 2024 · Artikkel"
      >
        <p>Praktiske prinsipper for å tolke Guds ord rett.</p>

        <ComingSoon>Den fullstendige artikkelen kommer snart.</ComingSoon>
      </ArticleLayout>
    </main>
  );
}
